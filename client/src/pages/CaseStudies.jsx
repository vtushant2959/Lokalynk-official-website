import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CASES = [
  { industry:"Real Estate", company:"Premium Properties Delhi NCR", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", challenge:"Zero digital presence. Spending ₹2L/month on traditional marketing with no qualified leads coming in.", solution:"Built a full digital presence — Google Ads, Meta Ads, SEO-optimized landing page, and WhatsApp automation for instant lead follow-up.", results:[{v:"150+",l:"Leads/Month"},{v:"+1580%",l:"Website Traffic"},{v:"₹180",l:"Cost Per Lead"},{v:"8.4x",l:"ROAS"}], services:["Google Ads","Meta Ads","WhatsApp Automation","Landing Page"], color:"from-blue-600 to-blue-800", duration:"90 days" },
  { industry:"Healthcare", company:"Multi-Specialty Clinic Faridabad", image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80", challenge:"Ranked page 5-6 on Google. Losing patients to competitors with better online presence despite being the best clinic in the area.", solution:"Comprehensive local SEO overhaul, Google Business Profile optimization, review generation system, and targeted Google Ads for high-intent keywords.", results:[{v:"#1",l:"Google Local Pack"},{v:"+320%",l:"Patient Inquiries"},{v:"+145%",l:"Revenue Growth"},{v:"180+",l:"New Reviews"}], services:["Local SEO","Google Business Profile","Google Ads","Reputation Management"], color:"from-green-600 to-green-800", duration:"6 months" },
  { industry:"E-commerce", company:"Fashion D2C Brand Pan India", image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", challenge:"Below 2x ROAS with ₹5L/month ad spend. High customer acquisition cost and terrible customer retention.", solution:"Rebuilt Meta Ads structure with proper funnel, added Google Shopping, implemented email automation for retention, and organic SEO for long-term traffic.", results:[{v:"6.2x",l:"ROAS"},{v:"+280%",l:"Revenue Growth"},{v:"-62%",l:"CAC Reduction"},{v:"+1300%",l:"Organic Traffic"}], services:["Meta Ads","Google Shopping","SEO","Email Automation"], color:"from-purple-600 to-purple-800", duration:"5 months" },
  { industry:"Education", company:"Bright Future Coaching Institute", image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", challenge:"Missing admission targets every cycle. Parents couldn't find them online and word-of-mouth was insufficient.", solution:"Targeted digital campaigns for parents in a 15km radius, YouTube content strategy for trust building, and WhatsApp automation for instant response.", results:[{v:"+280%",l:"Admission Inquiries"},{v:"₹200",l:"Cost Per Lead"},{v:"5x",l:"More Applications"},{v:"95%",l:"Batch Filled"}], services:["Google Ads","YouTube Marketing","WhatsApp Automation","SEO"], color:"from-orange-600 to-orange-800", duration:"3 months" },
  { industry:"Manufacturing", company:"Industrial Equipment Manufacturer Noida", image:"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80", challenge:"100% dependent on trade shows. No digital presence, no inbound leads, and losing business to competitors with online presence.", solution:"Built authority website, LinkedIn outreach campaign, Google Ads for high-intent keywords, and B2B email drip campaign.", results:[{v:"50+",l:"B2B Leads/Month"},{v:"+300%",l:"Website Traffic"},{v:"₹500",l:"Cost Per Lead"},{v:"6mo",l:"ROI Timeline"}], services:["LinkedIn Ads","Google Ads","B2B Email","Website Development"], color:"from-red-600 to-red-800", duration:"6 months" },
  { industry:"Restaurant", company:"Premium Restaurant Chain Faridabad", image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", challenge:"Low weekday footfall. No online ordering presence. Struggling to stand out from competing restaurants.", solution:"Google Business Profile optimization, Instagram food content strategy, Zomato/Swiggy optimization, and Google Ads for local searches.", results:[{v:"+400%",l:"Online Bookings"},{v:"Top 3",l:"Google Maps"},{v:"+250%",l:"Zomato Orders"},{v:"200+",l:"Google Reviews"}], services:["Local SEO","Instagram Marketing","Google Ads","Reputation Management"], color:"from-teal-600 to-teal-800", duration:"4 months" },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Case Studies</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Real Results for<br /><span className="gradient-text">Real Indian Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Data-backed success stories across 6 industries — from real estate to restaurants.</p>
        </div>
      </section>

      {/* Cases */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom space-y-12">
          {CASES.map((c, i) => (
            <div key={c.company} className={`grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-white ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`lg:col-span-2 relative min-h-[280px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={c.image} alt={c.company} className="w-full h-full object-cover absolute inset-0" />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.color} opacity-70`} />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/25 self-start">{c.industry}</span>
                  <div>
                    <div className="bg-white/20 backdrop-blur border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full self-start inline-block mb-3">⏱ {c.duration}</div>
                    <h2 className="text-white font-black text-xl leading-tight">{c.company}</h2>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-3 p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-4 mb-7">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                    <div className="text-xs font-black text-red-500 mb-2 uppercase tracking-wider">🎯 Challenge</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                    <div className="text-xs font-black text-green-600 mb-2 uppercase tracking-wider">✅ Solution</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-7">
                  {c.results.map(r => (
                    <div key={r.l} className="text-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="text-xl font-black gradient-text leading-tight">{r.v}</div>
                      <div className="text-[11px] text-gray-500 mt-1">{r.l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {c.services.map(s => <span key={s} className="text-xs bg-blue-50 text-primary font-bold px-3 py-1.5 rounded-full border border-blue-100">{s}</span>)}
                  </div>
                  <Link to="/contact" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Similar Results? <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>Want Similar Results for Your Business?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">Book a free strategy session and we'll show you exactly how we'll grow your business.</p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Get Free Strategy Session <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
