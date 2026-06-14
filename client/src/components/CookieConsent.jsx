import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, CheckCircle } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    // Fire GA consent update if GA is loaded
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[999]">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-5 border border-white/10">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Cookie className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h3 className="font-black text-sm mb-1">We use cookies 🍪</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              We use cookies for analytics and to improve your experience. By continuing, you agree to our{" "}
              <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link> and{" "}
              <Link to="/terms" className="text-accent hover:underline">Terms & Conditions</Link>.
            </p>
          </div>
          <button onClick={decline} className="text-gray-500 hover:text-white ml-auto shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2">
          <button onClick={accept}
            className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-brand text-white font-bold text-xs py-2.5 rounded-xl hover:opacity-90 transition-opacity">
            <CheckCircle className="w-3.5 h-3.5" /> Accept All
          </button>
          <button onClick={decline}
            className="flex-1 bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
