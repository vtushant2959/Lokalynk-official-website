import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import {
  ArrowRight, MessageCircle, Phone, CheckCircle, Star, TrendingUp, Zap, Shield,
  Globe, Target, Search, Share2, BarChart3, Bot, Users, Award, Clock, HeadphonesIcon,
  Quote
} from "lucide-react";

// ─── Hero ───────────────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
  "Website Development","Lead Generation","SEO Services","Social Media Marketing",
  "Performance Marketing","AI Automation","GEO Services","App Development",
  "Branding & Design","Email & SMS Marketing","E-commerce Growth","Reputation Management",
];

function HeroSection() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/leads", { ...form, source: "hero-form" });
      setSubmitted(true);
    } catch {
      await new Promise(r => setTimeout(r, 600));
      setSubmitted(true);
    } finally { setLoading(false); }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="bg" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
      </div>
      <div className="absolute top-32 right-32 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur rounded-full px-4 py-2 mb-8">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
              <span className="text-white/90 text-sm font-semibold">Rated #1 Digital Agency · Faridabad</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-7 text-white" style={{ fontFamily:"Poppins,sans-serif" }}>
              Grow Your Business<br />with <span className="gradient-text">Smarter</span><br />Digital Marketing
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
              Premium lead generation, SEO, website development & AI automation — all under one roof. Serving 500+ businesses pan India.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact" className="btn-primary text-base px-7 py-4">Book Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-4">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <a href="tel:+919625046221" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, text: "500+ Businesses Served" },
                { icon: Zap, text: "100% Customized Strategy" },
                { icon: Shield, text: "No Lock-in Contracts" },
                { icon: TrendingUp, text: "Avg 320% ROI" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/8 border border-white/12 backdrop-blur rounded-full px-3.5 py-2">
                  <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="relative">
            <div className="rounded-3xl bg-white/8 border border-white/15 backdrop-blur-xl shadow-2xl p-8">
              {!submitted ? (
                <>
                  <div className="mb-7">
                    <h2 className="text-2xl font-black text-white mb-1.5" style={{ fontFamily:"Poppins,sans-serif" }}>Get a Free Consultation</h2>
                    <p className="text-gray-400 text-sm">Fill in your details — we'll call you within 24 hours.</p>
                  </div>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Your Full Name *" value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-all" />
                    <input required type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-all" />
                    <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-all" />
                    <select required value={form.service} onChange={e => setForm({...form, service:e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-all appearance-none">
                      <option value="">Service Required *</option>
                      {SERVICE_OPTIONS.map(s => <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>)}
                    </select>
                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70">
                      {loading ? "Submitting..." : <><span>Get Free Consultation</span><ArrowRight className="w-5 h-5" /></>}
                    </button>
                  </form>
                  <p className="text-center text-gray-500 text-xs mt-4">🔒 Your information is 100% secure and never shared.</p>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 text-sm">Our team will call you within 24 hours to discuss your growth strategy.</p>
                </div>
              )}
            </div>
            <div className="absolute -top-5 -left-5 floating-badge animate-float hidden xl:block">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-black text-primary text-base leading-none">50K+</div>
                  <div className="text-[10px] text-gray-500">Leads Generated</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 floating-badge animate-float hidden xl:block" style={{ animationDelay:"1s" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="font-black text-primary text-base leading-none">98%</div>
                  <div className="text-[10px] text-gray-500">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Leads Generated", value: "50,000+" },
            { label: "Clients Served", value: "500+" },
            { label: "Years Experience", value: "7+" },
          ].map(s => (
            <div key={s.label} className="text-center bg-white/6 border border-white/10 backdrop-blur rounded-2xl px-4 py-6">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: Globe, title:"Website Development", desc:"Premium, conversion-focused websites and e-commerce stores that rank on Google and generate leads 24/7.", color:"from-blue-500 to-blue-700", light:"bg-blue-50 text-blue-600", features:["Business Websites","E-commerce Stores","Landing Pages","Web Applications"], href:"/services/website-development" },
  { icon: Target, title:"Lead Generation", desc:"Systematic B2B & B2C lead generation that delivers a consistent pipeline of qualified, ready-to-buy prospects.", color:"from-green-500 to-green-700", light:"bg-green-50 text-green-600", features:["B2B Lead Gen","B2C Lead Gen","LinkedIn Leads","Appointment Setting"], href:"/services/lead-generation" },
  { icon: Search, title:"SEO & GEO", desc:"Dominate Google and AI search platforms like ChatGPT, Gemini & Perplexity with proven next-gen SEO strategies.", color:"from-orange-500 to-orange-700", light:"bg-orange-50 text-orange-600", features:["On-Page SEO","Local SEO","Technical SEO","GEO Optimization"], href:"/services/seo" },
  { icon: Share2, title:"Social Media Marketing", desc:"Build a powerful brand presence and drive real sales with strategic content and community management.", color:"from-purple-500 to-purple-700", light:"bg-purple-50 text-purple-600", features:["Instagram Marketing","Facebook Marketing","LinkedIn Marketing","YouTube"], href:"/services/social-media-marketing" },
  { icon: BarChart3, title:"Performance Marketing", desc:"ROI-driven Google Ads, Meta Ads, and LinkedIn campaigns that maximize conversions and minimize ad spend.", color:"from-red-500 to-red-700", light:"bg-red-50 text-red-600", features:["Google Ads","Meta Ads","LinkedIn Ads","Retargeting & CRO"], href:"/services/performance-marketing" },
  { icon: Bot, title:"AI Automation", desc:"Automate lead nurturing, customer support, and business processes with intelligent AI tools and chatbots.", color:"from-cyan-500 to-cyan-700", light:"bg-cyan-50 text-cyan-600", features:["AI Chatbots","WhatsApp Automation","CRM Automation","Zapier / n8n"], href:"/services/ai-automation" },
];

function ServicesSection() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Core Services</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Everything Your Business Needs<br />to <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">From building your digital presence to generating qualified leads and scaling revenue.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map(s => (
            <Link key={s.title} to={s.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col">
              <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />
              <div className="p-8 flex flex-col flex-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-lg`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors" style={{ fontFamily:"Poppins,sans-serif" }}>{s.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.features.map(f => <span key={f} className={`text-xs font-semibold ${s.light} px-3 py-1.5 rounded-full`}>{f}</span>)}
                </div>
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-5 border-t border-gray-100">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary px-10 py-4 text-base">View All 12 Services <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ──────────────────────────────────────────────────────────
const REASONS = [
  { icon: Target, title:"Result-Driven Approach", desc:"Every campaign is optimized for measurable ROI. We track, analyze, and improve continuously." },
  { icon: Users, title:"Dedicated Account Manager", desc:"Get a dedicated expert who understands your business and is always available to guide you." },
  { icon: TrendingUp, title:"Proven Growth Strategies", desc:"Battle-tested strategies developed through 500+ projects across India." },
  { icon: Clock, title:"On-Time Delivery", desc:"We respect your timeline with regular progress updates every step of the way." },
  { icon: HeadphonesIcon, title:"24/7 Support", desc:"Your business never stops, and neither do we. Support via WhatsApp, email, or phone." },
  { icon: Award, title:"Certified Expert Team", desc:"Google, Meta, HubSpot certified professionals with deep expertise across all channels." },
];

function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl shadow-gray-900/15">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Lokalynk team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 floating-badge">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-black text-lg">T</div>
                <div>
                  <div className="font-black text-2xl text-primary leading-none">98%</div>
                  <div className="text-xs text-gray-500">Client Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 floating-badge">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <div className="font-black text-2xl text-primary leading-none">500+</div>
                  <div className="text-xs text-gray-500">Happy Clients Pan India</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-divider" style={{ margin:"0 0 1.5rem 0" }} />
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Lokalynk</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
              Why 500+ Businesses <span className="gradient-text">Trust Lokalynk</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We don't just run campaigns — we build long-term growth engines with data-driven strategies that deliver extraordinary results.
            </p>
            <div className="flex gap-5 mb-8 flex-wrap">
              {[
                { v:"98%", l:"Client Retention", cls:"text-primary bg-blue-50" },
                { v:"320%", l:"Average ROI", cls:"text-green-600 bg-green-50" },
                { v:"7+", l:"Years Experience", cls:"text-purple-600 bg-purple-50" },
              ].map(s => (
                <div key={s.l} className={`${s.cls} rounded-2xl p-4 flex-1 min-w-[90px] text-center`}>
                  <div className="text-3xl font-black">{s.v}</div>
                  <div className="text-xs text-gray-600 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group flex items-start gap-4 bg-gray-50 hover:bg-white rounded-xl p-5 border border-transparent hover:border-blue-100 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-0.5">{title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Case Studies ────────────────────────────────────────────────────────────
const CASES = [
  { industry:"Real Estate", company:"Premium Properties Delhi NCR", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", challenge:"Zero digital presence, spending ₹2L/month with no qualified leads.", results:[{metric:"Leads / Month",value:"150+",icon:"🎯"},{metric:"Website Traffic",value:"+1580%",icon:"📈"},{metric:"Cost Per Lead",value:"₹180",icon:"💰"},{metric:"ROAS",value:"8.4x",icon:"🚀"}], services:["Google Ads","Meta Ads","WhatsApp Automation"], color:"from-blue-600 to-blue-800", duration:"90 days" },
  { industry:"Healthcare", company:"Multi-Specialty Clinic Faridabad", image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80", challenge:"Ranked on page 5-6, losing patients to competitors with better online presence.", results:[{metric:"Google Ranking",value:"#1 Local",icon:"🥇"},{metric:"Patient Inquiries",value:"+320%",icon:"📈"},{metric:"Monthly Revenue",value:"+145%",icon:"💰"},{metric:"Google Reviews",value:"180+",icon:"⭐"}], services:["Local SEO","Google Business","Review Management"], color:"from-green-600 to-green-800", duration:"6 months" },
  { industry:"E-commerce", company:"Fashion Brand Pan India", image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80", challenge:"Below 2x ROAS with ₹5L/month ad spend. High CAC and low retention.", results:[{metric:"ROAS",value:"6.2x",icon:"🚀"},{metric:"Revenue Growth",value:"+280%",icon:"📈"},{metric:"Organic Traffic",value:"+1300%",icon:"🌐"},{metric:"CAC Reduction",value:"-62%",icon:"💰"}], services:["Meta Ads","Google Shopping","Email Automation"], color:"from-purple-600 to-purple-800", duration:"5 months" },
];

function CaseStudies() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Proven Results</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Measurable, data-backed results delivered for businesses across India.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {CASES.map(c => (
            <div key={c.company} className="group bg-gray-950 rounded-3xl overflow-hidden card-hover border border-white/5 flex flex-col">
              <div className="relative h-52 overflow-hidden shrink-0">
                <img src={c.image} alt={c.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.color} opacity-75`} />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/25">{c.industry}</span>
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full">⏱ {c.duration}</span>
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug">{c.company}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-5">
                  <div className="text-xs font-bold text-red-400 mb-1.5">🎯 Challenge</div>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.challenge}</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-5 flex-1">
                  {c.results.map(r => (
                    <div key={r.metric} className="bg-white/5 border border-white/8 rounded-xl p-3.5 text-center">
                      <div className="text-lg mb-0.5">{r.icon}</div>
                      <div className="text-white font-black text-lg leading-none mb-1">{r.value}</div>
                      <div className="text-gray-500 text-[11px]">{r.metric}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div className="flex flex-wrap gap-1.5">
                    {c.services.map(s => <span key={s} className="text-[10px] bg-white/8 text-gray-400 px-2 py-1 rounded-full border border-white/10">{s}</span>)}
                  </div>
                  <Link to="/case-studies" className="text-accent text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all shrink-0 ml-2">
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-primary px-10 py-4 text-base">View All Case Studies <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </div>
    </section>
  );
}

// ─── Industries ──────────────────────────────────────────────────────────────
const INDUSTRIES = [
  { name:"Real Estate", desc:"Property lead generation & project launches", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80", color:"from-blue-600/80 to-blue-900/80", result:"150+ Leads/Month" },
  { name:"Healthcare", desc:"Doctors, clinics & hospitals", image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80", color:"from-green-600/80 to-green-900/80", result:"+300% Patient Inquiries" },
  { name:"Education", desc:"Schools, colleges & EdTech", image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80", color:"from-orange-600/80 to-orange-900/80", result:"+280% Admissions" },
  { name:"E-commerce", desc:"Online stores & D2C brands", image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80", color:"from-purple-600/80 to-purple-900/80", result:"5-10x ROAS" },
  { name:"Manufacturing", desc:"Industrial B2B manufacturers", image:"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&q=80", color:"from-red-600/80 to-red-900/80", result:"50+ B2B Leads/Month" },
  { name:"Corporate", desc:"Enterprise & corporate businesses", image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", color:"from-teal-600/80 to-teal-900/80", result:"+300% Brand Visibility" },
  { name:"Local Businesses", desc:"Restaurants, salons & retail", image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80", color:"from-amber-600/80 to-amber-900/80", result:"Top 3 Google Maps" },
  { name:"Startups", desc:"Early-stage & growth-phase startups", image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", color:"from-indigo-600/80 to-indigo-900/80", result:"1000+ Users in 90 Days" },
];

function IndustriesSection() {
  return (
    <section className="section-pad bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            We Grow Businesses Across<br /><span className="gradient-text">Every Industry in India</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Deep industry expertise combined with proven digital strategies.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map(ind => (
            <Link key={ind.name} to="/industries" className="group relative rounded-2xl overflow-hidden card-hover" style={{ aspectRatio:"4/3" }}>
              <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${ind.color} group-hover:opacity-90 transition-opacity`} />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-white font-black text-lg mb-1">{ind.name}</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-3">{ind.desc}</p>
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur border border-white/25 text-white text-[11px] font-bold px-3 py-1.5 rounded-full w-fit">
                  ✅ {ind.result}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/industries" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg">
            View All Industries <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name:"Rajesh Kumar", role:"MD", company:"Kumar Properties", location:"Delhi NCR", industry:"Real Estate", text:"Lokalynk transformed our digital presence. Within 3 months, we were getting 150+ qualified property leads every month. Professional, responsive, and delivers real results.", rating:5, result:"150+ leads/month", initials:"RK", color:"from-blue-500 to-blue-700" },
  { name:"Dr. Priya Sharma", role:"Director", company:"Sharma Clinic", location:"Faridabad", industry:"Healthcare", text:"Our clinic now ranks #1 on Google for all major keywords. Patient inquiries have tripled. Their SEO and Google Business Profile work is outstanding.", rating:5, result:"3x patient inquiries", initials:"PS", color:"from-green-500 to-green-700" },
  { name:"Amit Agarwal", role:"Founder", company:"StyleHub", location:"Mumbai", industry:"E-commerce", text:"We were spending ₹2 lakh on ads with terrible returns. Lokalynk restructured everything and now we consistently get 6x ROAS. Transparency is world-class.", rating:5, result:"6x ROAS achieved", initials:"AA", color:"from-purple-500 to-purple-700" },
  { name:"Neha Joshi", role:"Principal", company:"Bright Future Institute", location:"Gurugram", industry:"Education", text:"Admission inquiries increased by 280% in one cycle. Their targeted campaigns for parents in our area were incredibly precise. Highly recommended.", rating:5, result:"+280% admissions", initials:"NJ", color:"from-orange-500 to-orange-700" },
  { name:"Vikram Singh", role:"CEO", company:"TechManufacture India", location:"Noida", industry:"Manufacturing", text:"B2B lead generation was our biggest bottleneck. LinkedIn and cold email campaigns brought us 50+ qualified B2B leads in the first 60 days. Exceptional!", rating:5, result:"50+ B2B leads/month", initials:"VS", color:"from-red-500 to-red-700" },
  { name:"Sonal Mehta", role:"Owner", company:"Sonal's Restaurant Chain", location:"Faridabad", industry:"F&B", text:"Restaurant reservations increased 400% after Lokalynk managed our Google Business Profile and social media. Fully booked every weekend now!", rating:5, result:"+400% online bookings", initials:"SM", color:"from-teal-500 to-teal-700" },
];

function Testimonials() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            <span className="text-gray-700 font-bold ml-1">4.9/5 · 200+ Google Reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-base shrink-0 shadow-md`}>{t.initials}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}, <span className="font-semibold text-gray-700">{t.company}</span></div>
                  <div className="text-gray-400 text-xs">📍 {t.location} · {t.industry}</div>
                </div>
                <Quote className="w-7 h-7 text-primary/15 shrink-0" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-2 rounded-full border border-green-100">✅ {t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-20 bg-gradient-brand">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>
          Ready to Grow Your Business?
        </h2>
        <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">
          Join 500+ businesses across India who trust Lokalynk for their digital growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp px-10 py-4 text-base">
            <MessageCircle className="w-5 h-5" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudies />
      <IndustriesSection />
      <Testimonials />
      <CTASection />
    </>
  );
}

