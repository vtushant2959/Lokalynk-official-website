import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || "lokalynk@admin2025";

  if (password !== adminPassword) {
    return res.status(401).json({ success: false, message: "Incorrect password" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET || "lokalynk_jwt_secret_2025",
    { expiresIn: "8h" }
  );

  res.json({ success: true, token });
});

export default router;
