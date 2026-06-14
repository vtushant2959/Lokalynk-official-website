import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MessageCircle, Star, Zap, Shield } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for new businesses",
    price: "₹15,000",
    period: "/month",
    color: "border-gray-200",
    badge: null,
    features: [
      "1 Core Service (SEO or Social Media)",
      "Basic Website Audit",
      "Monthly Performance Report",
      "1 Dedicated Account Manager",
      "Email Support",
      "Google Business Profile Setup",
      "Up to 30 leads/month",
    ],
    notIncluded: ["Paid Ads Management", "WhatsApp Automation", "Weekly Strategy Calls"],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Growth",
    tagline: "Most popular for scaling businesses",
    price: "₹35,000",
    period: "/month",
    color: "border-primary",
    badge: "Most Popular 🔥",
    features: [
      "3 Core Services (SEO + Social + Ads)",
      "Website Development / Redesign",
      "Google & Meta Ads Management",
      "Weekly Performance Reports",
      "WhatsApp Automation Setup",
      "Dedicated Account Manager",
      "Weekly Strategy Call (30 min)",
      "Up to 100 leads/month",
      "CRM Setup & Integration",
    ],
    notIncluded: ["Custom AI Automation", "Full Funnel Build"],
    cta: "Get Started — Most Popular",
    href: "/contact",
  },
  {
    name: "Enterprise",
    tagline: "For established brands & corporates",
    price: "Custom",
    period: "",
    color: "border-gray-800",
    badge: "Custom Package",
    features: [
      "All Services Included",
      "Full Funnel Strategy & Build",
      "AI Automation & Chatbots",
      "Custom Website / App Development",
      "Priority Account Management",
      "Daily Performance Dashboard",
      "Bi-weekly Strategy Calls",
      "Unlimited Leads",
      "Dedicated Creative Team",
      "Reputation Management",
      "Custom Reporting Dashboard",
    ],
    notIncluded: [],
    cta: "Talk to Us",
    href: "/contact",
  },
];

const FAQS = [
  { q: "Is there a contract or lock-in period?", a: "No lock-in contracts. We work on monthly retainers. Our results should be the reason you stay, not a contract." },
  { q: "What's included in the ad spend?", a: "Our service fee covers strategy + management. Ad spend (Google/Meta budget) is separate and paid directly by you to the platforms." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan any time with 15 days' notice. We'll pro-rate accordingly." },
  { q: "How soon will I start seeing results?", a: "Paid ads deliver results within 48-72 hours. SEO typically takes 3-6 months. Most clients see measurable ROI within 60-90 days." },
  { q: "Do you offer a free trial?", a: "We offer a FREE Digital Marketing Audit instead — a detailed analysis of your current presence worth ₹5,000, at zero cost." },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
            Simple, Clear Pricing.<br /><span className="gradient-text">No Hidden Costs.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">No lock-in contracts. No surprises. Just results-driven digital marketing that pays for itself.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{ icon: Shield, text: "No Lock-in Contracts" }, { icon: Zap, text: "Results in 60 Days" }, { icon: Star, text: "98% Client Retention" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full">
                <Icon className="w-4 h-4 text-accent" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-7 items-start">
            {PLANS.map(plan => (
              <div key={plan.name} className={`bg-white rounded-3xl border-2 ${plan.color} shadow-sm overflow-hidden flex flex-col ${plan.name === "Growth" ? "shadow-2xl shadow-blue-100 scale-[1.02]" : ""}`}>
                {plan.badge && (
                  <div className={`text-center py-2.5 text-xs font-black uppercase tracking-wider ${plan.name === "Growth" ? "bg-gradient-brand text-white" : "bg-gray-900 text-white"}`}>
                    {plan.badge}
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "Poppins,sans-serif" }}>{plan.name}</h2>
                  <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>
                  <div className="mb-7">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                    {plan.name !== "Enterprise" && <p className="text-xs text-gray-400 mt-1">+ GST | Ad spend billed separately</p>}
                  </div>

                  <div className="space-y-3 mb-7 flex-1">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map(f => (
                      <div key={f} className="flex items-start gap-3 opacity-40">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm line-through">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={plan.href}
                    className={`flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all text-sm ${plan.name === "Growth" ? "btn-primary" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Need something custom? <Link to="/contact" className="text-primary font-bold hover:underline">Talk to our team →</Link>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Poppins,sans-serif" }}>Popular Add-ons</h2>
            <p className="text-gray-500 mt-2">Add to any plan for extra firepower</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { service: "Extra Blog Articles", price: "₹2,500/article", desc: "SEO-optimised long-form content (1500+ words)" },
              { service: "WhatsApp Automation", price: "₹8,000/month", desc: "Full WhatsApp Business API setup + automation flows" },
              { service: "Video Reels/Shorts", price: "₹5,000 for 4", desc: "Branded short-form videos for Instagram & YouTube" },
              { service: "Landing Page", price: "₹12,000 one-time", desc: "High-converting standalone campaign page" },
            ].map(a => (
              <div key={a.service} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover">
                <h3 className="font-black text-gray-900 text-base mb-1">{a.service}</h3>
                <p className="text-primary font-bold text-lg mb-2">{a.price}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10" style={{ fontFamily: "Poppins,sans-serif" }}>Pricing FAQs</h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-2 text-[15px]">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily: "Poppins,sans-serif" }}>Still Have Questions?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">Talk to our team. We'll build a custom package that fits your goals and budget perfectly.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-10 py-4 text-base">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
