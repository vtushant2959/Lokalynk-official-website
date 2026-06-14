import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Heart, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";

const TEAM = [
  { name:"Tushant Verma", role:"Founder & CEO", initials:"TV", color:"from-blue-600 to-blue-800", bio:"Digital marketing strategist with 7+ years driving measurable growth for 500+ businesses across India.", exp:"7+ Years" },
  { name:"Rekha Verma", role:"Head of Operations", initials:"RV", color:"from-purple-600 to-purple-800", bio:"Expert in process optimization, team management, and ensuring seamless client delivery across all accounts.", exp:"5+ Years" },
  { name:"Nikhil", role:"Lead Digital Strategist", initials:"NS", color:"from-teal-600 to-teal-800", bio:"Certified Google & Meta professional specializing in performance campaigns with consistent 5x+ ROAS.", exp:"4+ Years" },
  { name:"Parveen", role:"Head of SEO & Content", initials:"PK", color:"from-orange-600 to-orange-800", bio:"SEO expert who has ranked 100+ businesses on Google Page 1 with proven on-page and off-page strategies.", exp:"5+ Years" },
  { name:"Rasika", role:"Social Media Manager", initials:"RJ", color:"from-pink-600 to-pink-800", bio:"Creative strategist building viral social campaigns and brand communities across Instagram, Facebook & LinkedIn.", exp:"3+ Years" },
  { name:"Devang", role:"Full-Stack Developer", initials:"DP", color:"from-cyan-600 to-cyan-800", bio:"Building high-performance websites and web apps optimized for both conversions and technical SEO.", exp:"4+ Years" },
];

const VALUES = [
  { icon: Target, title:"Results First", desc:"We measure success by your business growth, not vanity metrics." },
  { icon: Heart, title:"Client-Centric", desc:"Your growth is our priority. We're invested in your success." },
  { icon: Shield, title:"Full Transparency", desc:"Weekly reports, open access to all dashboards — zero black boxes." },
  { icon: Zap, title:"Innovation Driven", desc:"Staying ahead with latest AI tools, platforms, and strategies." },
  { icon: Users, title:"Team Collaboration", desc:"Your account manager coordinates all specialists seamlessly." },
  { icon: Award, title:"Excellence Always", desc:"ISO-quality processes ensuring world-class execution every time." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">About Lokalynk</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-7 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            India's Premium Digital<br />Marketing Partner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Founded in Faridabad, Haryana — Lokalynk is a full-service digital marketing agency that has helped 500+ businesses across India achieve extraordinary online growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[{v:"500+",l:"Clients Served"},{v:"7+",l:"Years Experience"},{v:"50K+",l:"Leads Generated"},{v:"98%",l:"Retention Rate"}].map(s => (
              <div key={s.l} className="text-center bg-white/10 border border-white/15 backdrop-blur rounded-2xl px-7 py-5">
                <div className="text-3xl font-black text-white">{s.v}</div>
                <div className="text-sm text-gray-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-4xl font-black mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
                From a Vision to <span className="gradient-text">500+ Success Stories</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-[16px] leading-relaxed">
                <p>Lokalynk was founded by Tushant Verma with a clear mission — to give Indian businesses access to world-class digital marketing strategies that actually deliver measurable results, not just reports.</p>
                <p>Starting with local businesses in Faridabad, we built a reputation for transparency, results, and genuine partnerships. Today, we serve 500+ clients across India — from startups to large enterprises — across 10+ industries.</p>
                <p>Our edge is combining data science, creative strategy, and AI automation to build growth engines that compound over time. We don't just run campaigns; we build long-term partnerships.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[{v:"2017",l:"Founded in Faridabad"},{v:"10+",l:"Industries Served"},{v:"12+",l:"Core Services"},{v:"₹50Cr+",l:"Revenue Generated for Clients"}].map(s => (
                  <div key={s.l} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="text-2xl font-black text-primary mb-1">{s.v}</div>
                    <div className="text-sm text-gray-600">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80" alt="Lokalynk office" className="w-full h-full object-cover" style={{ aspectRatio:"4/3" }} />
              </div>
              <div className="absolute -bottom-7 -left-7 floating-badge">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-primary" />
                  <div>
                    <div className="font-black text-xl text-primary">320%</div>
                    <div className="text-xs text-gray-500">Avg Client ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Core Values</p>
            <h2 className="text-4xl font-black leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
              The Principles Behind <span className="gradient-text">Our Work</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2" style={{ fontFamily:"Poppins,sans-serif" }}>{title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Meet the Team</p>
            <h2 className="text-4xl font-black leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
              The Experts Behind <span className="gradient-text">Your Growth</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">A team of certified professionals deeply invested in your success.</p>
          </div>

          {/* CEO */}
          <div className="flex justify-center mb-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary/20 rounded-3xl p-8 max-w-sm w-full text-center shadow-lg card-hover">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-black text-2xl mx-auto mb-5 shadow-xl">TV</div>
              <h3 className="font-black text-gray-900 text-xl mb-1" style={{ fontFamily:"Poppins,sans-serif" }}>Tushant Verma</h3>
              <p className="text-primary font-semibold text-sm mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Digital marketing strategist with 7+ years driving measurable growth for 500+ businesses across India.</p>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">7+ Years Experience</span>
            </div>
          </div>

          {/* L2 */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {TEAM.slice(1, 4).map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 card-hover">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-black text-lg mx-auto mb-4 shadow-md`}>{m.initials}</div>
                <h3 className="font-black text-gray-900 text-base mb-1" style={{ fontFamily:"Poppins,sans-serif" }}>{m.name}</h3>
                <p className="text-primary font-semibold text-xs mb-3">{m.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{m.bio}</p>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full">{m.exp}</span>
              </div>
            ))}
          </div>

          {/* L3 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {TEAM.slice(4).map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 card-hover">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-black text-base mx-auto mb-4 shadow-md`}>{m.initials}</div>
                <h3 className="font-black text-gray-900 text-base mb-1" style={{ fontFamily:"Poppins,sans-serif" }}>{m.name}</h3>
                <p className="text-primary font-semibold text-xs mb-3">{m.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{m.bio}</p>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full">{m.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>Ready to Work With India's Best?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">Start with a free consultation. Our team will craft a custom strategy for your business in 24 hours.</p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
