import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const INDUSTRIES = [
  { name:"Real Estate", icon:"🏠", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", desc:"Property developers, builders, and real estate agents dominating their local markets with consistent qualified leads.", challenges:["High cost per lead","Seasonal demand fluctuations","Long sales cycles","Trust and credibility building"], services:["Lead Generation","Google & Meta Ads","WhatsApp Automation","SEO & Local SEO"], results:[{v:"150+",l:"Leads/Month"},{v:"₹180",l:"Cost Per Lead"},{v:"8x",l:"ROAS"},{v:"90d",l:"Time to Results"}], color:"from-blue-600 to-blue-800" },
  { name:"Healthcare", icon:"🏥", image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80", desc:"Hospitals, clinics, doctors, and healthcare brands growing patient base and building trusted online reputation.", challenges:["Low online visibility","Negative reviews impacting trust","No digital appointment system","Competition from large hospitals"], services:["Local SEO & GMB","Reputation Management","Google Ads","Website Development"], results:[{v:"+300%",l:"Patient Inquiries"},{v:"#1",l:"Local Ranking"},{v:"180+",l:"Google Reviews"},{v:"+145%",l:"Revenue Growth"}], color:"from-green-600 to-green-800" },
  { name:"Education", icon:"🎓", image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80", desc:"Schools, colleges, coaching institutes, and EdTech companies maximizing admissions and student enrollments.", challenges:["Seasonal admission peaks","High competition for quality students","Low brand awareness","No digital strategy"], services:["Lead Generation","Social Media Marketing","Google Ads","WhatsApp Automation"], results:[{v:"+280%",l:"Admission Inquiries"},{v:"₹200",l:"Cost Per Lead"},{v:"5x",l:"More Applications"},{v:"3mo",l:"Campaign Duration"}], color:"from-orange-600 to-orange-800" },
  { name:"E-commerce", icon:"🛒", image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80", desc:"Online stores, D2C brands, and marketplaces scaling revenue with performance marketing and SEO.", challenges:["Low ROAS on ad spend","High cart abandonment","Customer acquisition costs","Product visibility on search"], services:["Performance Marketing","E-commerce SEO","Email Automation","Google Shopping"], results:[{v:"6.2x",l:"ROAS Achieved"},{v:"+280%",l:"Revenue Growth"},{v:"-62%",l:"CAC Reduction"},{v:"+1300%",l:"Organic Traffic"}], color:"from-purple-600 to-purple-800" },
  { name:"Manufacturing", icon:"🏭", image:"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=80", desc:"Industrial manufacturers and B2B companies generating consistent high-value business inquiries.", challenges:["No digital presence","B2B audience targeting difficulty","Long sales cycles","Niche market reach"], services:["B2B Lead Generation","LinkedIn Marketing","SEO & Content","Website Development"], results:[{v:"50+",l:"B2B Leads/Month"},{v:"+300%",l:"Website Traffic"},{v:"₹500",l:"Cost Per Lead"},{v:"6mo",l:"ROI Timeline"}], color:"from-red-600 to-red-800" },
  { name:"Local Businesses", icon:"🏪", image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80", desc:"Restaurants, salons, retail shops, and service businesses dominating local Google search and Maps.", challenges:["Low foot traffic","No Google Maps visibility","Competition from chains","No online reviews"], services:["Local SEO & GMB","Social Media","Google Ads","Reputation Management"], results:[{v:"Top 3",l:"Google Maps Ranking"},{v:"+400%",l:"Online Bookings"},{v:"200+",l:"Google Reviews"},{v:"+250%",l:"Monthly Revenue"}], color:"from-teal-600 to-teal-800" },
  { name:"Startups", icon:"🚀", image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80", desc:"Early-stage and growth-phase startups building brand, acquiring users, and achieving product-market fit.", challenges:["Limited budget","No brand awareness","User acquisition","Finding product-market fit"], services:["Growth Marketing","Social Media","Performance Ads","AI Automation"], results:[{v:"1000+",l:"Users in 90 Days"},{v:"5x",l:"User Growth"},{v:"-50%",l:"CAC Reduction"},{v:"₹1Cr",l:"Revenue Milestone"}], color:"from-indigo-600 to-indigo-800" },
  { name:"Corporate", icon:"🏢", image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", desc:"Enterprise companies and corporates building strong digital brand authority and generating B2B leads.", challenges:["Outdated digital presence","Poor brand perception online","No lead generation system","Complex stakeholder management"], services:["Website Development","LinkedIn Marketing","SEO & Content","Performance Marketing"], results:[{v:"+300%",l:"Brand Visibility"},{v:"100+",l:"B2B Leads/Month"},{v:"#1",l:"Industry Keywords"},{v:"50+",l:"Media Mentions"}], color:"from-slate-600 to-slate-800" },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Industries We Serve</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Deep Industry Expertise<br /><span className="gradient-text">Across Every Sector</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">8 Industries. 500+ Businesses. Proven strategies tailored to your industry's unique challenges.</p>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom space-y-10">
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.name} className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={ind.image} alt={ind.name} className="w-full object-cover" style={{ height:"360px" }} />
                <div className={`absolute inset-0 bg-gradient-to-t ${ind.color} opacity-60`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-4xl mb-3">{ind.icon}</div>
                  <h2 className="text-white font-black text-3xl">{ind.name}</h2>
                  <p className="text-white/80 text-sm mt-2">{ind.desc}</p>
                </div>
              </div>
              <div className={`p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {ind.results.map(r => (
                    <div key={r.l} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                      <div className="text-2xl font-black gradient-text">{r.v}</div>
                      <div className="text-xs text-gray-500 mt-1">{r.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <h3 className="font-black text-gray-900 text-sm mb-3 uppercase tracking-wider">Key Challenges We Solve</h3>
                  <div className="space-y-2">
                    {ind.challenges.map(c => (
                      <div key={c} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-gray-600 text-sm">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-7">
                  <h3 className="font-black text-gray-900 text-sm mb-3 uppercase tracking-wider">Services We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map(s => (
                      <span key={s} className="bg-blue-50 text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100">{s}</span>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="btn-primary text-sm px-7 py-3.5">
                  Grow My {ind.name} Business <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>Don't See Your Industry?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">We work with businesses across all sectors. Let's talk about your specific needs.</p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
