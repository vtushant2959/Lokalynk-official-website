import { useParams, Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle, Star, MessageCircle } from "lucide-react";

const CITIES = {
  faridabad: {
    name: "Faridabad", state: "Haryana",
    headline: "Digital Marketing Agency in Faridabad",
    desc: "Lokalynk is Faridabad's #1 digital marketing agency. We help local businesses, real estate developers, manufacturers, and service providers grow online with proven SEO, lead generation, and performance marketing strategies.",
    population: "1.8 Million", businesses: "50,000+", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    industries: ["Real Estate", "Manufacturing", "Healthcare", "Education", "Local Businesses"],
    results: [{ v: "150+", l: "Local Businesses Served" }, { v: "#1", l: "Ranked Agency in Faridabad" }, { v: "₹2Cr+", l: "Revenue Generated Locally" }, { v: "24h", l: "Response Time" }],
    nearby: ["Delhi", "Gurugram", "Noida", "Ballabhgarh"],
  },
  delhi: {
    name: "Delhi", state: "NCR",
    headline: "Digital Marketing Agency in Delhi",
    desc: "Lokalynk serves businesses across Delhi with world-class digital marketing services. From Connaught Place to Saket, we help Delhi businesses dominate Google, generate qualified leads, and build powerful brands online.",
    population: "32 Million", businesses: "5 Lakh+", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    industries: ["Corporate", "Retail", "Healthcare", "Real Estate", "E-commerce", "Hospitality"],
    results: [{ v: "200+", l: "Delhi Clients Served" }, { v: "+320%", l: "Avg Revenue Growth" }, { v: "₹5Cr+", l: "Revenue Generated" }, { v: "50K+", l: "Leads Generated" }],
    nearby: ["Faridabad", "Gurugram", "Noida", "Greater Noida"],
  },
  gurugram: {
    name: "Gurugram", state: "Haryana",
    headline: "Digital Marketing Agency in Gurugram",
    desc: "Lokalynk helps Gurugram startups, corporates, and SMEs grow online with data-driven SEO, performance marketing, and lead generation strategies built specifically for the competitive Gurugram market.",
    population: "1.2 Million", businesses: "1 Lakh+", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    industries: ["IT & Startups", "Corporate", "Real Estate", "Healthcare", "Education", "Finance"],
    results: [{ v: "100+", l: "Gurugram Clients" }, { v: "+280%", l: "Avg Lead Growth" }, { v: "5-10x", l: "ROAS for Ad Clients" }, { v: "6mo", l: "Avg Time to ROI" }],
    nearby: ["Delhi", "Faridabad", "Manesar", "Sohna"],
  },
  noida: {
    name: "Noida", state: "Uttar Pradesh",
    headline: "Digital Marketing Agency in Noida",
    desc: "Lokalynk is a trusted digital marketing partner for Noida businesses. We specialise in B2B lead generation, corporate branding, SEO, and performance marketing for the thriving Noida business ecosystem.",
    population: "1 Million", businesses: "80,000+", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
    industries: ["IT Companies", "Manufacturing", "Real Estate", "Education", "Healthcare"],
    results: [{ v: "80+", l: "Noida Clients" }, { v: "+250%", l: "Organic Traffic Growth" }, { v: "50+", l: "B2B Leads/Month" }, { v: "98%", l: "Client Retention" }],
    nearby: ["Delhi", "Greater Noida", "Ghaziabad", "Faridabad"],
  },
  mumbai: {
    name: "Mumbai", state: "Maharashtra",
    headline: "Digital Marketing Agency in Mumbai",
    desc: "Lokalynk delivers premium digital marketing services to Mumbai businesses — from startup hubs in BKC to D2C brands in Andheri. We drive measurable growth through performance ads, SEO, and lead generation.",
    population: "20 Million", businesses: "5 Lakh+", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80",
    industries: ["Finance", "E-commerce", "Media", "Real Estate", "Hospitality", "Startups"],
    results: [{ v: "6.2x", l: "ROAS for E-commerce" }, { v: "+300%", l: "Lead Growth" }, { v: "₹1Cr+", l: "Monthly Revenue for Clients" }, { v: "48h", l: "Campaign Launch Time" }],
    nearby: ["Thane", "Pune", "Navi Mumbai", "Nashik"],
  },
};

const DEFAULT_CITY = (slug) => ({
  name: slug?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "Your City",
  state: "India",
  headline: `Digital Marketing Agency in ${slug?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}`,
  desc: "Lokalynk serves businesses across India with world-class digital marketing services including SEO, lead generation, performance marketing, and AI automation.",
  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  industries: ["Real Estate", "Healthcare", "Education", "E-commerce", "Manufacturing"],
  results: [{ v: "500+", l: "Clients Across India" }, { v: "+320%", l: "Avg Revenue Growth" }, { v: "98%", l: "Client Retention" }, { v: "24h", l: "Response Time" }],
  nearby: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
});

const SERVICES = [
  { name: "SEO Services", desc: "Rank #1 on Google for local searches" },
  { name: "Lead Generation", desc: "Get qualified local leads daily" },
  { name: "Google Ads", desc: "Show up instantly for local keywords" },
  { name: "Social Media", desc: "Build your brand in your local market" },
  { name: "Website Development", desc: "Convert local visitors to customers" },
  { name: "Reputation Management", desc: "Dominate Google Maps & reviews" },
];

export default function Location() {
  const { city } = useParams();
  const data = CITIES[city?.toLowerCase()] || DEFAULT_CITY(city);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/88 to-slate-900/92" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">{data.name}, {data.state}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
              {data.headline}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">{data.desc}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">Get Free Proposal <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-5">
          {data.results.map(r => (
            <div key={r.l} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-black gradient-text mb-1">{r.v}</div>
              <div className="text-sm text-gray-600">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services for this city */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services in {data.name}</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
              Everything You Need to <span className="gradient-text">Dominate {data.name}</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-black text-gray-900 text-base mb-1">{s.name}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ fontFamily: "Poppins,sans-serif" }}>
            Industries We Serve in <span className="gradient-text">{data.name}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.industries.map(ind => (
              <span key={ind} className="bg-blue-50 text-primary font-bold text-sm px-5 py-2.5 rounded-full border border-blue-100">{ind}</span>
            ))}
          </div>
          {data.nearby?.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-3">We also serve nearby areas:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {data.nearby.map(c => (
                  <Link key={c} to={`/location/${c.toLowerCase()}`}
                    className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors">
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="text-2xl font-black text-gray-900 mb-1">4.9/5 Average Rating</p>
          <p className="text-gray-500">Based on 200+ Google Reviews from clients across India</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily: "Poppins,sans-serif" }}>
            Ready to Grow Your {data.name} Business?
          </h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">
            Book a free consultation. Our {data.name} marketing experts will call you within 24 hours.
          </p>
          <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl text-base">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
