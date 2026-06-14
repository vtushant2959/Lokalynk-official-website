import { Link } from "react-router-dom";
import { ArrowRight, Globe, Target, Search, Share2, BarChart3, Bot, Smartphone, Palette, Mail, ShoppingCart, Star, Shield } from "lucide-react";

const SERVICES = [
  { slug:"website-development", icon: Globe, title:"Website Development", shortDesc:"Premium, conversion-focused websites that rank and generate leads 24/7.", color:"from-blue-500 to-blue-700", light:"bg-blue-50 text-blue-600", features:["Business Websites","E-commerce Stores","Landing Pages","Web Applications","WordPress & Custom CMS","Speed & Core Web Vitals"] },
  { slug:"lead-generation", icon: Target, title:"Lead Generation", shortDesc:"Systematic B2B & B2C lead gen delivering a consistent pipeline of qualified prospects.", color:"from-green-500 to-green-700", light:"bg-green-50 text-green-600", features:["B2B Lead Generation","B2C Lead Funnels","LinkedIn Outreach","Cold Email Campaigns","Appointment Setting","CRM Setup & Integration"] },
  { slug:"seo", icon: Search, title:"SEO Services", shortDesc:"Dominate Google and AI search with proven next-gen SEO strategies.", color:"from-orange-500 to-orange-700", light:"bg-orange-50 text-orange-600", features:["On-Page SEO","Off-Page & Link Building","Technical SEO Audit","Local SEO & GMB","E-commerce SEO","GEO Optimization (AI Search)"] },
  { slug:"social-media-marketing", icon: Share2, title:"Social Media Marketing", shortDesc:"Build powerful brand presence and drive real sales via social channels.", color:"from-purple-500 to-purple-700", light:"bg-purple-50 text-purple-600", features:["Instagram Marketing","Facebook Marketing","LinkedIn Management","YouTube Channel Growth","Content Calendar & Creation","Community Management"] },
  { slug:"performance-marketing", icon: BarChart3, title:"Performance Marketing", shortDesc:"ROI-driven ad campaigns that maximize conversions and minimize ad spend.", color:"from-red-500 to-red-700", light:"bg-red-50 text-red-600", features:["Google Ads Management","Meta Ads (FB & IG)","LinkedIn Ads","YouTube Advertising","Retargeting Campaigns","Conversion Rate Optimization"] },
  { slug:"ai-automation", icon: Bot, title:"AI Automation", shortDesc:"Automate lead nurturing, customer support, and business processes with AI.", color:"from-cyan-500 to-cyan-700", light:"bg-cyan-50 text-cyan-600", features:["AI Chatbots","WhatsApp Business Automation","CRM Automation (HubSpot/Zoho)","Email Drip Sequences","Zapier & n8n Workflows","AI Content Generation"] },
  { slug:"geo-services", icon: Globe, title:"GEO Services", shortDesc:"Get found on ChatGPT, Gemini, Perplexity and other AI-powered search platforms.", color:"from-teal-500 to-teal-700", light:"bg-teal-50 text-teal-600", features:["AI Search Optimization","Answer Engine Optimization","LLM Visibility Strategy","Featured Snippets","Schema Markup","AI Content Structuring"] },
  { slug:"app-development", icon: Smartphone, title:"App Development", shortDesc:"Native and cross-platform mobile apps designed for performance and user experience.", color:"from-indigo-500 to-indigo-700", light:"bg-indigo-50 text-indigo-600", features:["Android App Development","iOS App Development","React Native / Flutter","App Store Optimization","UI/UX Design","Maintenance & Support"] },
  { slug:"branding", icon: Palette, title:"Branding & Design", shortDesc:"Strategic brand identity that creates lasting impressions and drives recognition.", color:"from-rose-500 to-rose-700", light:"bg-rose-50 text-rose-600", features:["Brand Identity & Logo","Brand Strategy","Visual Guidelines","Corporate Presentations","Packaging Design","Social Media Creatives"] },
  { slug:"email-sms-marketing", icon: Mail, title:"Email & SMS Marketing", shortDesc:"Highly targeted email and SMS campaigns that convert and retain customers.", color:"from-yellow-500 to-yellow-700", light:"bg-yellow-50 text-yellow-600", features:["Email Campaign Strategy","Newsletter Design","Drip Automation","SMS Bulk Campaigns","WhatsApp Campaigns","A/B Testing & Analytics"] },
  { slug:"ecommerce-growth", icon: ShoppingCart, title:"E-commerce Growth", shortDesc:"Full-funnel e-commerce marketing to scale your online store revenue profitably.", color:"from-emerald-500 to-emerald-700", light:"bg-emerald-50 text-emerald-600", features:["Amazon & Flipkart Management","Shopify Marketing","Google Shopping Ads","Catalogue Optimization","D2C Brand Strategy","Inventory & Margin Analytics"] },
  { slug:"reputation-management", icon: Star, title:"Reputation Management", shortDesc:"Protect and amplify your brand reputation across Google, social, and review platforms.", color:"from-amber-500 to-amber-700", light:"bg-amber-50 text-amber-600", features:["Google Review Strategy","ORM (Online Rep Mgmt)","Negative Review Response","Brand Sentiment Monitoring","Crisis Management","Press & PR Placement"] },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            12 Specialized Services to<br /><span className="gradient-text">Scale Your Business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Every service is customized to your business goals, industry, and target audience.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{icon:Shield,text:"Certified Experts"},{icon:Target,text:"Guaranteed Results"},{icon:Star,text:"500+ Happy Clients"}].map(({ icon:Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur">
                <Icon className="w-4 h-4 text-accent" />{text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col">
                <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-lg`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors" style={{ fontFamily:"Poppins,sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">{s.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.slice(0,4).map(f => <span key={f} className={`text-xs font-semibold ${s.light} px-3 py-1.5 rounded-full`}>{f}</span>)}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-5 border-t border-gray-100">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily:"Poppins,sans-serif" }}>Not Sure Which Service You Need?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">Book a free consultation and our experts will recommend the right strategy for your business.</p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Get Free Recommendation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
