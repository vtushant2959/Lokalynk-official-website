import axios from "axios";

export async function sendSMSNotification(lead) {
  const apiKey = process.env.FAST2SMS_API_KEY;
  if (!apiKey) return; // skip if not configured

  const message = `New Lead! Name: ${lead.name}, Phone: ${lead.phone}, Service: ${lead.service || "Not specified"}. Login to admin to view full details.`;

  try {
    await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "q",
        message,
        language: "english",
        flash: 0,
        numbers: process.env.OWNER_PHONE?.replace(/\D/g, "").slice(-10),
      },
      { headers: { authorization: apiKey } }
    );
  } catch (err) {
    console.error("SMS notification failed:", err.message);
  }
}
