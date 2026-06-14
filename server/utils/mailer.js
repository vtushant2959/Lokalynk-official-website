import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendLeadNotification(lead) {
  const source = lead.source === "hero-form" ? "🏠 Hero Form" : "📋 Contact Form";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #2C5EAD, #1591DC); padding: 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 22px;">🔔 New Lead Received!</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Via ${source} — Lokalynk Website</p>
      </div>
      <div style="padding: 28px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 140px;">👤 Name</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">📞 Phone</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">
              <a href="tel:${lead.phone}" style="color: #2C5EAD; text-decoration: none;">${lead.phone}</a>
            </td>
          </tr>
          ${lead.email ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">✉️ Email</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">${lead.email}</td>
          </tr>` : ""}
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">🎯 Service</td>
            <td style="padding: 12px 0; font-weight: bold; color: #2C5EAD;">${lead.service || "Not specified"}</td>
          </tr>
          ${lead.company ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">🏢 Company</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">${lead.company}</td>
          </tr>` : ""}
          ${lead.budget ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">💰 Budget</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">${lead.budget}</td>
          </tr>` : ""}
          ${lead.city ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">📍 City</td>
            <td style="padding: 12px 0; font-weight: bold; color: #111827;">${lead.city}</td>
          </tr>` : ""}
          ${lead.message ? `
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top;">💬 Message</td>
            <td style="padding: 12px 0; color: #374151; line-height: 1.6;">${lead.message}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top: 24px; display: flex; gap: 12px;">
          <a href="tel:${lead.phone}" style="display: inline-block; background: linear-gradient(135deg, #2C5EAD, #1591DC); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">📞 Call Now</a>
          <a href="https://wa.me/91${lead.phone?.replace(/\D/g, "").slice(-10)}" style="display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">💬 WhatsApp</a>
        </div>

        <p style="margin-top: 20px; color: #9ca3af; font-size: 12px;">
          Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Lokalynk Leads" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
    subject: `🔔 New Lead: ${lead.name} — ${lead.service || "Inquiry"} (${lead.phone})`,
    html,
  });
}
