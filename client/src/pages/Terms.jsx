export default function Terms() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "Poppins,sans-serif" }}>Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: June 2025</p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By accessing or using the Lokalynk website (lokalynk.com) or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.`,
          },
          {
            title: "2. Services",
            body: `Lokalynk provides digital marketing services including but not limited to: website development, lead generation, search engine optimisation (SEO), social media marketing, performance marketing (Google & Meta Ads), AI automation, branding, and content marketing.\n\nAll services are subject to a separate Service Agreement or proposal document signed between Lokalynk and the client. The scope, deliverables, timelines, and fees are defined in that agreement.`,
          },
          {
            title: "3. Client Responsibilities",
            body: `You agree to:\n• Provide accurate and complete information when filling forms or engaging our services.\n• Supply all required assets, content, credentials, and approvals in a timely manner.\n• Review and provide feedback on deliverables within the agreed timeline.\n• Not use our services for any unlawful, harmful, or fraudulent purpose.\n• Ensure you have the rights to any content, logos, or materials you provide to us.`,
          },
          {
            title: "4. Payment Terms",
            body: `• All service fees are due as per the payment schedule mentioned in the individual service agreement or invoice.\n• Payments are non-refundable once work has commenced unless otherwise specified in writing.\n• Late payments may result in suspension of services.\n• Prices are subject to revision with 30 days' written notice for ongoing retainers.\n• GST and applicable taxes will be charged as per Indian tax laws.`,
          },
          {
            title: "5. Intellectual Property",
            body: `• Upon full payment, all creative deliverables (designs, website code, content) produced exclusively for the client become the client's property.\n• Lokalynk retains the right to showcase completed work in its portfolio and case studies unless the client requests otherwise in writing.\n• Third-party tools, software, plugins, and assets used in our work are subject to their respective licenses.\n• Lokalynk's proprietary methodologies, templates, and processes remain our intellectual property.`,
          },
          {
            title: "6. Results & Performance Disclaimer",
            body: `Digital marketing results depend on multiple factors including market conditions, competition, ad budget, and client inputs. While Lokalynk commits to best-in-class execution and strategy, we do not guarantee specific outcomes such as a defined number of leads, ranking positions, or revenue growth.\n\nPast results shared in case studies or testimonials are indicative and not a guarantee of future performance.`,
          },
          {
            title: "7. Confidentiality",
            body: `Both parties agree to keep confidential any sensitive business information, strategies, financial data, or proprietary processes shared during the engagement. This obligation continues for 2 years after the termination of services.`,
          },
          {
            title: "8. Termination",
            body: `Either party may terminate services with 30 days' written notice. Upon termination:\n• All pending invoices become immediately due.\n• Lokalynk will transfer all completed work and deliverables upon receipt of final payment.\n• Access to any third-party accounts managed by Lokalynk will be handed over to the client.`,
          },
          {
            title: "9. Limitation of Liability",
            body: `Lokalynk shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability in any circumstances shall not exceed the total fees paid by the client in the 3 months preceding the claim.`,
          },
          {
            title: "10. Third-Party Platforms",
            body: `Our services may involve third-party platforms such as Google, Meta, LinkedIn, WhatsApp, and others. We are not responsible for changes in policies, algorithms, ad costs, or availability of these platforms. Ad spend on third-party platforms is separate from our service fees.`,
          },
          {
            title: "11. Website Use",
            body: `You agree not to:\n• Use any automated tools to scrape or extract data from our website.\n• Attempt to gain unauthorised access to any part of our systems.\n• Transmit any harmful, offensive, or malicious content through our contact forms.\n• Misrepresent your identity or affiliation when contacting us.`,
          },
          {
            title: "12. Governing Law",
            body: `These Terms & Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana, India.`,
          },
          {
            title: "13. Changes to These Terms",
            body: `Lokalynk reserves the right to update these Terms & Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the new terms.`,
          },
          {
            title: "14. Contact Us",
            body: `For any questions regarding these Terms & Conditions, please contact:\n\nLokalynk Digital Marketing\nFaridabad, Haryana, India\nEmail: enquiry@lokalynk.com\nPhone: +91-9625046221`,
          },
        ].map(({ title, body }) => (
          <div key={title} className="mb-8 pb-8 border-b border-gray-100 last:border-0">
            <h2 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Poppins,sans-serif" }}>{title}</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
