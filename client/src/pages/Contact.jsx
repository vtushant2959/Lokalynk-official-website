import { useState } from "react";
import api from "../utils/api";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, ArrowRight, Clock } from "lucide-react";

const SERVICES = [
  "Website Development","Lead Generation","SEO Services","Social Media Marketing",
  "Performance Marketing","AI Automation","GEO Services","App Development",
  "Branding & Design","Email & SMS Marketing","E-commerce Growth","Reputation Management",
];
const BUDGETS = ["Under ₹10,000/mo","₹10,000 - ₹25,000/mo","₹25,000 - ₹50,000/mo","₹50,000 - ₹1,00,000/mo","₹1,00,000+/mo"];

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", company:"", budget:"", city:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/api/leads", { ...form, source: "contact-form" });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily:"Poppins,sans-serif" }}>
            Let's Grow Your Business<br /><span className="gradient-text">Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Fill the form below and our experts will call you within 24 hours with a custom strategy for your business.</p>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily:"Poppins,sans-serif" }}>Contact Lokalynk</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">Reach us via phone, email, or WhatsApp — we respond within 1 hour during business hours.</p>
              </div>

              {[
                { icon:Phone, title:"Call Us", val:"+91-9625046221", sub:"Mon-Sat, 9am - 7pm IST", href:"tel:+919625046221", color:"bg-blue-50 text-blue-600" },
                { icon:MessageCircle, title:"WhatsApp", val:"Chat with us instantly", sub:"Usually replies in under 5 minutes", href:"https://wa.me/919625046221", color:"bg-green-50 text-green-600" },
                { icon:Mail, title:"Email Us", val:"enquiry@lokalynk.com", sub:"Response within 4 hours", href:"mailto:enquiry@lokalynk.com", color:"bg-purple-50 text-purple-600" },
                { icon:MapPin, title:"Office Location", val:"Faridabad, Haryana", sub:"Serving clients pan India", href:null, color:"bg-orange-50 text-orange-600" },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm mb-0.5">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">{item.val}</a>
                    ) : (
                      <div className="text-gray-700 font-semibold text-sm">{item.val}</div>
                    )}
                    <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-brand rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold text-sm">Quick Response Promise</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">We call back every inquiry within 24 hours with a custom digital marketing proposal — absolutely free.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily:"Poppins,sans-serif" }}>Get Your Free Marketing Proposal</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill in the details and we'll create a custom strategy for your business in 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <input required type="text" placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                        <input required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => set("phone", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set("email", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                        <input type="text" placeholder="Your company" value={form.company} onChange={e => set("company", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Service Required *</label>
                        <select required value={form.service} onChange={e => set("service", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white appearance-none">
                          <option value="">Select a service</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Budget</label>
                        <select value={form.budget} onChange={e => set("budget", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white appearance-none">
                          <option value="">Select budget range</option>
                          {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">City / Location</label>
                      <input type="text" placeholder="Delhi, Faridabad, Mumbai..." value={form.city} onChange={e => set("city", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Tell Us About Your Goals</label>
                      <textarea rows={4} placeholder="Describe your business, current challenges, and what you want to achieve..." value={form.message} onChange={e => set("message", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none" />
                    </div>
                    {error && <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>}
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70">
                      {loading ? "Submitting..." : <><span>Send My Request — It's Free!</span><ArrowRight className="w-5 h-5" /></>}
                    </button>
                    <p className="text-center text-gray-400 text-xs">🔒 Your information is 100% secure & confidential. No spam, ever.</p>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily:"Poppins,sans-serif" }}>Thank You! We'll Be in Touch.</h3>
                  <p className="text-gray-500 max-w-md mx-auto leading-relaxed">Our team has received your inquiry and will call you within 24 hours with a custom strategy tailored to your business goals.</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-3 px-6">
                      <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                    </a>
                    <a href="tel:+919625046221" className="btn-primary text-sm py-3 px-6">
                      <Phone className="w-4 h-4" /> Call Us Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

