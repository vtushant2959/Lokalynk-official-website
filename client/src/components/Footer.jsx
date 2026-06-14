import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import logo from "../assets/logo/logo.png";

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "GEO Services", href: "/services/geo-services" },
  { label: "App Development", href: "/services/app-development" },
];

const industries = ["Real Estate", "Healthcare", "Education", "E-commerce", "Manufacturing", "Corporate", "Local Businesses", "Startups"];
const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white">
      {/* CTA Strip */}
      <div className="bg-gradient-brand">
        <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/80">Free consultation — custom strategy delivered within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contact" className="bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img src={logo} alt="Lokalynk" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium digital marketing agency in Faridabad, India. Lead generation, SEO, website development & AI automation across India.
            </p>
            <div className="space-y-3">
              <a href="tel:+919625046221" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" /> +91-9625046221
              </a>
              <a href="mailto:enquiry@lokalynk.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" /> enquiry@lokalynk.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-accent shrink-0" /> Faridabad, Haryana, India
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-black text-white mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.href} className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 shrink-0" /> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white mb-6 text-sm uppercase tracking-wider">Industries</h3>
            <ul className="space-y-3">
              {industries.map((i) => (
                <li key={i}>
                  <Link to="/industries" className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 shrink-0" /> {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 shrink-0" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-black text-white mb-3 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">Weekly marketing tips for Indian businesses.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent" />
              <button type="submit" className="bg-accent hover:bg-secondary px-3.5 py-2.5 rounded-lg text-white transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Lokalynk. All rights reserved. | Faridabad, Haryana, India</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
