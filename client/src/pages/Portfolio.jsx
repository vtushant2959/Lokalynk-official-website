import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const PROJECTS = [
  { title: "Premium Properties Delhi NCR", type: "Real Estate", tag: "Website + Lead Gen", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", result: "150+ leads/month", color: "from-blue-600 to-blue-800" },
  { title: "Multi-Specialty Clinic", type: "Healthcare", tag: "SEO + Google Ads", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80", result: "#1 Google Ranking", color: "from-green-600 to-green-800" },
  { title: "Fashion D2C Brand", type: "E-commerce", tag: "Meta Ads + SEO", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80", result: "6.2x ROAS", color: "from-purple-600 to-purple-800" },
  { title: "Coaching Institute", type: "Education", tag: "Lead Gen + WhatsApp", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80", result: "+280% Admissions", color: "from-orange-600 to-orange-800" },
  { title: "Industrial Manufacturer", type: "Manufacturing", tag: "B2B LinkedIn + SEO", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=80", result: "50+ B2B Leads/Month", color: "from-red-600 to-red-800" },
  { title: "Restaurant Chain", type: "F&B", tag: "Social Media + GMB", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80", result: "+400% Bookings", color: "from-teal-600 to-teal-800" },
  { title: "Corporate IT Firm", type: "Corporate", tag: "Website + LinkedIn", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", result: "+300% Brand Visibility", color: "from-indigo-600 to-indigo-800" },
  { title: "Tech Startup", type: "Startup", tag: "Growth Marketing", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80", result: "1000+ Users in 90 Days", color: "from-cyan-600 to-cyan-800" },
];

const INDUSTRIES = ["All", "Real Estate", "Healthcare", "E-commerce", "Education", "Manufacturing", "F&B", "Corporate", "Startup"];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
            500+ Projects.<br /><span className="gradient-text">Real Results.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">From local shops to pan-India brands — we've helped businesses across every industry grow with digital marketing.</p>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-[70px] z-30">
        <div className="container-custom py-4 flex gap-2.5 overflow-x-auto scrollbar-hide">
          {INDUSTRIES.map(ind => (
            <button key={ind}
              className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all ${ind === "All" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-primary"}`}>
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map(p => (
              <div key={p.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <span className="bg-white/20 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/25 self-start">{p.tag}</span>
                    <div className="bg-white/20 backdrop-blur text-white text-xs font-bold px-2.5 py-1.5 rounded-full border border-white/25 self-start">✅ {p.result}</div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-primary bg-blue-50 px-2.5 py-1 rounded-full">{p.type}</span>
                  <h3 className="font-black text-gray-900 text-sm mt-2 leading-snug">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">Want to see more detailed case studies?</p>
            <Link to="/case-studies" className="btn-primary px-10 py-4 text-base">
              View Detailed Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-brand">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ v: "500+", l: "Projects Completed" }, { v: "10+", l: "Industries" }, { v: "₹50Cr+", l: "Revenue for Clients" }, { v: "98%", l: "Client Retention" }].map(s => (
            <div key={s.l}>
              <div className="text-4xl font-black text-white mb-1">{s.v}</div>
              <div className="text-white/80 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-5" style={{ fontFamily: "Poppins,sans-serif" }}>Want to Be Our Next Success Story?</h2>
          <p className="text-gray-500 text-xl max-w-xl mx-auto mb-10">Book a free consultation and let's discuss how we can grow your business.</p>
          <Link to="/contact" className="btn-primary px-10 py-4 text-base">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
