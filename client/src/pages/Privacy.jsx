export default function Privacy() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "Poppins,sans-serif" }}>Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: June 2025</p>

        {[
          {
            title: "1. Information We Collect",
            body: `When you fill a form on our website, we collect: your name, phone number, email address, company name, and the service you're interested in. We also collect standard website analytics data such as page views, browser type, and IP address through Google Analytics.`,
          },
          {
            title: "2. How We Use Your Information",
            body: `We use your information to: (a) contact you regarding your inquiry, (b) provide you with relevant digital marketing proposals, (c) send occasional marketing communications (only with your consent), and (d) improve our website and services. We do NOT sell your data to any third party.`,
          },
          {
            title: "3. Cookies",
            body: `We use cookies and similar tracking technologies to improve your browsing experience. Cookies help us understand how visitors use our website. You can control cookies through your browser settings. We use Google Analytics (anonymised) and Meta Pixel for advertising measurement.`,
          },
          {
            title: "4. Data Storage & Security",
            body: `Your data is stored securely on MongoDB Atlas servers hosted in the EU/US. We use SSL encryption for all data transmission. We implement industry-standard security measures to protect your personal information from unauthorised access.`,
          },
          {
            title: "5. Third-Party Services",
            body: `We use the following third-party services: Google Analytics (website analytics), Meta Pixel (ad measurement), WhatsApp Business (communication), and Nodemailer via Gmail (email notifications). Each has their own privacy policy.`,
          },
          {
            title: "6. Your Rights",
            body: `You have the right to: access the personal data we hold about you, request correction or deletion of your data, withdraw consent for marketing communications at any time, and lodge a complaint with the relevant data protection authority.`,
          },
          {
            title: "7. Contact Us",
            body: `If you have any questions about this Privacy Policy, please contact us at:\n\nLokallynk Digital Marketing\nFaridabad, Haryana, India\nEmail: enquiry@lokalynk.com\nPhone: +91-9625046221`,
          },
        ].map(({ title, body }) => (
          <div key={title} className="mb-8">
            <h2 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Poppins,sans-serif" }}>{title}</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
