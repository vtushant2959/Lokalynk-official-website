import express from "express";
import Lead from "../models/Lead.js";
import Newsletter from "../models/Newsletter.js";
import { sendLeadNotification } from "../utils/mailer.js";
import { sendSMSNotification } from "../utils/sms.js";
import { leadFormLimiter } from "../middleware/rateLimiter.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// POST /api/leads — save lead + notify
router.post("/leads", leadFormLimiter, async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, data: lead });

    // Fire notifications in background
    sendLeadNotification(lead).catch(e => console.error("Email failed:", e.message));
    sendSMSNotification(lead).catch(e => console.error("SMS failed:", e.message));
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// GET /api/leads — protected admin route
router.get("/leads", authMiddleware, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, count: leads.length, leads });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/leads/:id — update lead status + track response time
router.patch("/leads/:id", authMiddleware, async (req, res) => {
  try {
    const update = { ...req.body };
    // If moving from "new" to anything else, record response time
    const existing = await Lead.findById(req.params.id);
    if (existing?.status === "new" && req.body.status && req.body.status !== "new") {
      update.respondedAt = new Date();
    }
    const lead = await Lead.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json({ success: true, data: lead });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// GET /api/analytics — dashboard charts data
router.get("/analytics", authMiddleware, async (req, res) => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const fourWeeksAgo = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000);

    const [total, bySourceRaw, byServiceRaw, dailyRaw, thisWeek, respondedLeads, pendingCount] = await Promise.all([
      Lead.countDocuments(),
      Lead.aggregate([{ $group: { _id: { $ifNull: ["$source", "website"] }, count: { $sum: 1 } } }]),
      Lead.aggregate([
        { $match: { service: { $exists: true, $ne: "" } } },
        { $group: { _id: "$service", count: { $sum: 1 } } },
        { $sort: { count: -1 } }, { $limit: 6 },
      ]),
      Lead.aggregate([
        { $match: { createdAt: { $gte: thirtyDaysAgo } } },
        { $group: { _id: { $dateToString: { format: "%m/%d", date: "$createdAt" } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      Lead.countDocuments({ createdAt: { $gte: sevenDaysAgo } }),
      Lead.find({ respondedAt: { $exists: true } }).select("createdAt respondedAt"),
      Lead.countDocuments({ respondedAt: { $exists: false } }),
    ]);

    // Weekly trend (last 4 weeks)
    const weeklyTrendRaw = await Lead.aggregate([
      { $match: { createdAt: { $gte: fourWeeksAgo } } },
      { $group: { _id: { $week: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    const avgResponseHours = respondedLeads.length > 0
      ? Math.round(respondedLeads.reduce((sum, l) => sum + (new Date(l.respondedAt) - new Date(l.createdAt)), 0) / respondedLeads.length / 3600000)
      : null;

    res.json({
      success: true,
      stats: { total, thisWeek, pending: pendingCount, responded: respondedLeads.length },
      dailyLeads: dailyRaw.map(d => ({ date: d._id, count: d.count })),
      bySource: bySourceRaw.map(d => ({ name: d._id, value: d.count })),
      topServices: byServiceRaw.map(d => ({ name: d._id, count: d.count })),
      weeklyTrend: weeklyTrendRaw.map((d, i) => ({ week: `W${i + 1}`, count: d.count })),
      avgResponseHours,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/newsletter
router.post("/newsletter", async (req, res) => {
  try {
    const entry = await Newsletter.create({ email: req.body.email });
    res.status(201).json({ success: true, data: entry });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: "Already subscribed." });
    res.status(400).json({ success: false, message: err.message });
  }
});

// GET /api/health
router.get("/health", (_, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

export default router;
