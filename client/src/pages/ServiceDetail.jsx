import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const SERVICES = {
  "website-development": {
    title:"Website Development", icon:"🌐",
    hero:"High-Performance Websites That Convert Visitors into Customers",
    desc:"We build premium, SEO-optimized websites and e-commerce stores that not only look stunning but generate real leads and revenue for your business.",
    image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    benefits:["Google-ready, SEO-optimized from day one","Mobile-first, lightning-fast performance","Conversion-focused UI/UX design","Lead capture forms & CRM integration","Lifetime support & maintenance","Free SSL, hosting & domain consultation"],
    process:["Discovery & Brief","Wireframing & Design","Development & Testing","SEO Setup & Launch","Training & Handover"],
    results:[{v:"200%",l:"Avg Traffic Increase"},{v:"150%",l:"More Leads Generated"},{v:"3x",l:"Better Conversion Rate"},{v:"<2s",l:"Page Load Time"}],
  },
  "lead-generation": {
    title:"Lead Generation", icon:"🎯",
    hero:"Qualified Leads That Actually Convert — Delivered Consistently",
    desc:"We build systematic, multi-channel lead generation machines that deliver a steady pipeline of qualified B2B and B2C prospects ready to buy.",
    image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
    benefits:["Multi-channel lead gen (digital + offline)","Verified, qualified leads only","Real-time lead delivery to your CRM","Custom lead scoring & filtering","WhatsApp automation for faster follow-up","Monthly performance reports & optimization"],
    process:["Audience & Persona Research","Funnel & Landing Page Build","Ad Campaign Setup","Lead Verification & Delivery","Optimization & Scale"],
    results:[{v:"150+",l:"Leads/Month (Avg)"},{v:"70%",l:"Qualified Lead Rate"},{v:"₹150",l:"Avg Cost Per Lead"},{v:"3x",l:"Revenue Growth"}],
  },
  "seo": {
    title:"SEO Services", icon:"🔍",
    hero:"Rank #1 on Google and Get Found on AI Search Platforms",
    desc:"Our proven SEO strategies combine technical excellence, content authority, and AI search optimization (GEO) to get your business on top of Google and beyond.",
    image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    benefits:["Comprehensive SEO audit & strategy","On-page, off-page & technical SEO","Local SEO & Google Business Profile","GEO optimization for AI platforms","E-commerce SEO & product optimization","Monthly ranking reports & insights"],
    process:["SEO Audit & Analysis","Keyword Research & Strategy","On-Page Optimization","Off-Page & Link Building","GEO & AI Search Setup","Monitor & Report"],
    results:[{v:"#1",l:"Google Rankings"},{v:"+580%",l:"Organic Traffic"},{v:"3x",l:"More Leads from SEO"},{v:"6mo",l:"Avg Time to Page 1"}],
  },
  "social-media-marketing": {
    title:"Social Media Marketing", icon:"📱",
    hero:"Build a Powerful Brand and Drive Real Sales via Social Media",
    desc:"Strategic social media management that builds your brand authority, grows engaged communities, and drives measurable business results across all platforms.",
    image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
    benefits:["Platform-specific content strategies","Professional graphics & video content","Daily/weekly posting schedules","Community management & engagement","Monthly analytics & performance reports","Influencer collaboration (on request)"],
    process:["Brand & Audience Audit","Content Strategy & Calendar","Creative Production","Posting & Engagement","Reporting & Optimization"],
    results:[{v:"500%",l:"Follower Growth (Avg)"},{v:"10x",l:"More Engagement"},{v:"300%",l:"More Brand Inquiries"},{v:"5x",l:"Reach Increase"}],
  },
  "performance-marketing": {
    title:"Performance Marketing", icon:"📊",
    hero:"Maximum ROI from Every Rupee Spent on Digital Advertising",
    desc:"Data-driven Google Ads, Meta Ads, and LinkedIn campaigns optimized for maximum conversions, lowest cost per acquisition, and highest ROAS.",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    benefits:["Google Ads (Search, Display, Shopping, YouTube)","Meta Ads (Facebook & Instagram)","LinkedIn Ads for B2B","Retargeting & lookalike campaigns","Conversion tracking & attribution","Weekly performance reports & optimization"],
    process:["Account Audit & Strategy","Campaign Architecture","Creative & Copy Development","Launch & Initial Optimization","Scale & CRO"],
    results:[{v:"5-10x",l:"ROAS Achieved"},{v:"-60%",l:"Cost Per Acquisition"},{v:"300%",l:"More Conversions"},{v:"₹1Cr+",l:"Revenue Driven Monthly"}],
  },
  "ai-automation": {
    title:"AI Automation", icon:"🤖",
    hero:"Automate Your Business Processes and Scale Without Hiring More",
    desc:"Implement intelligent AI tools, chatbots, and automation workflows that nurture leads, serve customers, and run business processes 24/7 without manual effort.",
    image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    benefits:["AI-powered chatbots (website & WhatsApp)","WhatsApp Business API automation","CRM automation (HubSpot, Zoho, Salesforce)","Email & SMS drip sequences","Zapier & n8n custom workflows","AI content generation setup"],
    process:["Process Audit & Automation Mapping","Tool Selection & Integration","Build & Test Automations","Staff Training","Monitor & Optimize"],
    results:[{v:"80%",l:"Time Saved on Follow-ups"},{v:"24/7",l:"Lead Response Time"},{v:"3x",l:"More Conversions from Automation"},{v:"-70%",l:"Manual Work Reduction"}],
  },
};

const DEFAULT = (slug) => ({
  title: slug?.replace(/-/g," ").replace(/\b\w/g, c => c.toUpperCase()) || "Service",
  icon:"⚡",
  hero:"Premium Digital Marketing Service — Customized for Your Business",
  desc:"Our specialized team delivers measurable results with a data-driven, client-first approach.",
  image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  benefits:["Custom strategy for your business","Dedicated account manager","Monthly performance reports","Certified professionals","Proven track record","Full transparency & no lock-ins"],
  process:["Discovery","Strategy","Execution","Optimization","Reporting"],
  results:[{v:"300%",l:"Average ROI"},{v:"98%",l:"Client Retention"},{v:"7+",l:"Years Experience"},{v:"500+",l:"Happy Clients"}],
});

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICES[slug] || DEFAULT(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={s.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{s.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-5xl mb-5">{s.icon}</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>{s.hero}</h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">Get Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {s.results.map(r => (
              <div key={r.l} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-4xl font-black gradient-text mb-2" style={{ fontFamily:"Poppins,sans-serif" }}>{r.v}</div>
                <div className="text-gray-600 text-sm font-medium">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
                What's Included in Our <span className="gradient-text">{s.title}</span>
              </h2>
              <div className="space-y-4">
                {s.benefits.map(b => (
                  <div key={b} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-[15px]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-8 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
                Our <span className="gradient-text">Process</span>
              </h2>
              <div className="space-y-4">
                {s.process.map((step, i) => (
                  <div key={step} className="flex items-center gap-5 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-black shrink-0">{i+1}</div>
                    <span className="text-gray-900 font-bold text-[15px]">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-7 text-white">
                <h3 className="font-black text-xl mb-2">Ready to Get Started?</h3>
                <p className="text-blue-100 text-sm mb-5">Get a free strategy call with our {s.title} experts. No obligations.</p>
                <Link to="/contact" className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 text-sm">
                  Book Free Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ maxHeight:"400px" }}>
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" style={{ height:"400px" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>Start Growing with {s.title} Today</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">Book a free consultation and receive a custom strategy within 24 hours.</p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
