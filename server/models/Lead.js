import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    service: { type: String, trim: true },
    company: { type: String, trim: true },
    budget: { type: String, trim: true },
    city: { type: String, trim: true },
    message: { type: String, trim: true },
    source: { type: String, default: "hero-form" }, // hero-form | contact-page | exit-popup
    status: { type: String, enum: ["new", "contacted", "converted", "lost"], default: "new" },
    respondedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
