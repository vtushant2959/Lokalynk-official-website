import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const POSTS = [
  { id:1, title:"How to Generate 150+ Real Estate Leads Per Month in India (2025 Guide)", category:"Lead Generation", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", date:"December 15, 2024", author:"Tushant Verma", readTime:"8 min read", excerpt:"Discover the exact lead generation system we use to consistently deliver 150+ qualified property leads every month for real estate developers across India.", featured:true },
  { id:2, title:"GEO vs SEO: How to Get Your Business Found on ChatGPT, Gemini & Perplexity", category:"SEO & GEO", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80", date:"December 10, 2024", author:"Nikhil Sharma", readTime:"6 min read", excerpt:"AI search platforms are changing how customers find businesses. Learn how Generative Engine Optimization (GEO) works and why you need it in 2025.", featured:true },
  { id:3, title:"Meta Ads vs Google Ads in 2025: Which One Should Your Business Use?", category:"Performance Marketing", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80", date:"December 5, 2024", author:"Nikhil Sharma", readTime:"7 min read", excerpt:"The eternal question for Indian businesses: Facebook Ads or Google Ads? We break down the costs, targeting, and results across 500+ campaigns.", featured:false },
  { id:4, title:"WhatsApp Marketing for Indian Businesses: The Complete 2025 Playbook", category:"AI Automation", image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80", date:"November 28, 2024", author:"Rekha Verma", readTime:"10 min read", excerpt:"WhatsApp Business API, bulk messaging, chatbots — everything you need to build a scalable WhatsApp marketing system for your Indian business.", featured:false },
  { id:5, title:"Local SEO for Indian Businesses: Rank #1 on Google Maps in 90 Days", category:"SEO & GEO", image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80", date:"November 20, 2024", author:"Parveen Kumar", readTime:"9 min read", excerpt:"Step-by-step guide to dominating Google Maps and local search results. Includes the exact Google Business Profile optimization checklist we use for clients.", featured:false },
  { id:6, title:"How to Build a ₹1 Crore/Month Revenue Machine with Digital Marketing", category:"Growth Strategy", image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80", date:"November 15, 2024", author:"Tushant Verma", readTime:"12 min read", excerpt:"The complete digital marketing growth framework that has helped multiple Indian businesses cross the ₹1 crore monthly revenue milestone.", featured:false },
];

const CATEGORIES = ["All","Lead Generation","SEO & GEO","Performance Marketing","AI Automation","Social Media","Growth Strategy"];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Lokalynk Blog</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Digital Marketing Insights<br /><span className="gradient-text">for Indian Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Practical guides, case studies, and strategies from our team of 7+ year veterans.</p>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-gray-200 bg-white sticky top-[70px] z-30">
        <div className="container-custom py-4 flex gap-2.5 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button key={cat} className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all ${cat === "All" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-primary"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          {/* Featured */}
          <div className="grid lg:grid-cols-2 gap-7 mb-12">
            {POSTS.filter(p => p.featured).map(post => (
              <div key={post.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-black text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors flex-1" style={{ fontFamily:"Poppins,sans-serif" }}>{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-5 border-t border-gray-100">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-black text-gray-900 mb-7" style={{ fontFamily:"Poppins,sans-serif" }}>Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {POSTS.filter(p => !p.featured).map(post => (
              <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col">
                <div className="relative overflow-hidden" style={{ aspectRatio:"16/9" }}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-primary/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-3 flex-wrap">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-sm leading-snug mb-3 group-hover:text-primary transition-colors flex-1" style={{ fontFamily:"Poppins,sans-serif" }}>{post.title}</h3>
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold group-hover:gap-2.5 transition-all pt-4 border-t border-gray-100">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-3" style={{ fontFamily:"Poppins,sans-serif" }}>Get Weekly Marketing Insights</h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">Join 2,000+ Indian business owners getting our weekly newsletter — practical tips that actually work.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="flex-1 bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white" />
            <button type="submit" className="bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all shrink-0">Subscribe</button>
          </form>
          <p className="text-white/50 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
