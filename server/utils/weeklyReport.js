import nodemailer from "nodemailer";
import Lead from "../models/Lead.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export async function sendWeeklyReport() {
  try {
    const now = new Date();
    const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now - 14 * 24 * 60 * 60 * 1000);

    const [thisWeek, lastWeek, allTime] = await Promise.all([
      Lead.find({ createdAt: { $gte: weekAgo } }),
      Lead.find({ createdAt: { $gte: twoWeeksAgo, $lt: weekAgo } }),
      Lead.find(),
    ]);

    const converted = thisWeek.filter(l => l.status === "converted").length;
    const contacted = thisWeek.filter(l => l.status === "contacted").length;

    // Leads by source
    const bySource = thisWeek.reduce((acc, l) => {
      acc[l.source || "unknown"] = (acc[l.source || "unknown"] || 0) + 1;
      return acc;
    }, {});

    // Top services
    const byService = thisWeek.reduce((acc, l) => {
      if (l.service) acc[l.service] = (acc[l.service] || 0) + 1;
      return acc;
    }, {});
    const topService = Object.entries(byService).sort((a, b) => b[1] - a[1])[0];

    const growth = lastWeek.length > 0
      ? Math.round(((thisWeek.length - lastWeek.length) / lastWeek.length) * 100)
      : 100;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#2C5EAD,#1591DC);padding:24px;text-align:center;">
          <h1 style="color:white;margin:0;font-size:20px;">📊 Weekly Performance Report</h1>
          <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">
            ${weekAgo.toLocaleDateString("en-IN")} – ${now.toLocaleDateString("en-IN")}
          </p>
        </div>
        <div style="padding:28px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;">
            ${[
              { label: "Total Leads", value: thisWeek.length, note: `${growth >= 0 ? "+" : ""}${growth}% vs last week`, color: "#2C5EAD" },
              { label: "Converted", value: converted, note: `${thisWeek.length > 0 ? Math.round((converted / thisWeek.length) * 100) : 0}% conversion rate`, color: "#16a34a" },
              { label: "Contacted", value: contacted, note: "Follow-ups made", color: "#ea580c" },
              { label: "All-Time Leads", value: allTime.length, note: "Total in database", color: "#7c3aed" },
            ].map(s => `
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:16px;text-align:center;">
                <div style="font-size:28px;font-weight:900;color:${s.color};">${s.value}</div>
                <div style="font-weight:bold;font-size:13px;color:#111827;margin:4px 0 2px;">${s.label}</div>
                <div style="font-size:11px;color:#6b7280;">${s.note}</div>
              </div>
            `).join("")}
          </div>

          <h3 style="font-size:14px;font-weight:900;color:#111827;margin-bottom:12px;">📍 Leads by Source</h3>
          ${Object.entries(bySource).map(([src, count]) => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#f9fafb;border-radius:8px;margin-bottom:6px;">
              <span style="font-size:13px;color:#374151;">${src}</span>
              <span style="font-weight:bold;color:#2C5EAD;font-size:13px;">${count} leads</span>
            </div>
          `).join("") || "<p style='color:#9ca3af;font-size:13px;'>No leads this week</p>"}

          ${topService ? `
            <div style="margin-top:20px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:16px;">
              <p style="margin:0;font-size:13px;color:#1d4ed8;">🏆 Top requested service this week: <strong>${topService[0]}</strong> (${topService[1]} inquiries)</p>
            </div>
          ` : ""}

          <div style="margin-top:24px;text-align:center;">
            <a href="http://localhost:5173/admin" style="background:linear-gradient(135deg,#2C5EAD,#1591DC);color:white;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold;font-size:14px;display:inline-block;">
              View Full Dashboard →
            </a>
          </div>
        </div>
        <div style="border-top:1px solid #e5e7eb;padding:12px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:11px;">Lokalynk Weekly Report · Every Monday 9 AM IST</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Lokalynk Reports" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
      subject: `📊 Weekly Report: ${thisWeek.length} leads this week (${growth >= 0 ? "+" : ""}${growth}% vs last week)`,
      html,
    });

    console.log("Weekly report sent successfully");
  } catch (err) {
    console.error("Weekly report failed:", err.message);
  }
}
