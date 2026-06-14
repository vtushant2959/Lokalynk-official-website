import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cron from "node-cron";
import apiRoutes from "./routes/api.js";
import authRoutes from "./routes/auth.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { sendWeeklyReport } from "./utils/weeklyReport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(apiLimiter); // Global rate limiter

// Routes
app.use("/api", apiRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => res.json({ message: "Lokalynk API running ✅" }));

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/lokalynk")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

    // Weekly report — every Monday at 9:00 AM IST
    cron.schedule("0 9 * * 1", () => {
      console.log("📊 Sending weekly report...");
      sendWeeklyReport();
    }, { timezone: "Asia/Kolkata" });
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
