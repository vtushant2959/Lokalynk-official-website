import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from "lucide-react";
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
  { label: "Branding Services", href: "/services/branding" },
  { label: "Email & SMS Marketing", href: "/services/email-sms-marketing" },
  { label: "E-commerce Growth", href: "/services/ecommerce-growth" },
  { label: "Reputation Management", href: "/services/reputation-management" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: services },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setIsOpen(false); setMobileExpanded(null); }, [location]);

  const openDropdown = (label) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-brand text-white text-sm">
        <div className="container-custom flex justify-between items-center py-2.5">
          <div className="flex items-center gap-6">
            <a href="tel:+919625046221" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91-9625046221
            </a>
            <a href="mailto:enquiry@lokalynk.com" className="hover:text-white/80 transition-colors">enquiry@lokalynk.com</a>
            <span className="text-white/70">📍 Faridabad, Haryana | Pan India</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Now
            </a>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full font-semibold transition-all">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-xl border-b border-gray-100" : "border-b border-gray-100"}`}>
        <div className="container-custom flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Lokalynk" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.dropdown && openDropdown(link.label)}
                onMouseLeave={() => link.dropdown && closeDropdown()}>
                <Link to={link.href}
                  className="flex items-center gap-1 px-2 py-2.5 text-[14px] font-semibold text-gray-700 hover:text-primary rounded-lg hover:bg-blue-50/80 transition-all">
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180 text-primary" : ""}`} />
                  )}
                </Link>
                {link.dropdown && (
                  <div className={`absolute top-full left-0 pt-1 z-50 transition-all duration-200 ${activeDropdown === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                    onMouseEnter={() => openDropdown(link.label)}
                    onMouseLeave={() => closeDropdown()}>
                    <div className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="p-1.5">
                        {link.dropdown.map((item) => (
                          <Link key={item.label} to={item.href}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-xl transition-all group">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 p-3">
                        <Link to="/services" className="flex items-center justify-center gap-2 text-xs font-bold text-primary hover:text-secondary transition-colors py-1">
                          View All Services <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3 ml-4">
            <a href="tel:+919625046221"
              className="flex items-center gap-2 text-[13.5px] font-bold text-primary border-2 border-primary/30 px-5 py-2.5 rounded-xl hover:border-primary hover:bg-blue-50 transition-all whitespace-nowrap">
              <Phone className="w-4 h-4 shrink-0" /> Call Now
            </a>
            <Link to="/contact" className="btn-primary text-[13.5px] py-2.5 px-6">
              Free Proposal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between">
                    <Link to={link.href} className="flex-1 py-3 text-gray-700 font-semibold hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <button onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="p-2 text-gray-400">
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {link.dropdown && mobileExpanded === link.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.label} to={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-gray-100">
                <a href="tel:+919625046221" className="btn-primary justify-center py-3">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center py-3">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
