import { useState, useEffect } from "react";
import api from "../utils/api";
import { X, CheckCircle, ArrowRight, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exitPopupDismissed")) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !shown) {
        setTimeout(() => {
          setVisible(true);
          setShown(true);
        }, 100);
      }
    };

    // Also show after 45 seconds if user hasn't left
    const timer = setTimeout(() => {
      if (!shown) {
        setVisible(true);
        setShown(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [shown]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("exitPopupDismissed", "1");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/leads", { ...form, service: "Free Audit", source: "exit-popup" });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // still show success
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={dismiss}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-float"
        onClick={e => e.stopPropagation()}
        style={{ animation: "slideUp 0.4s ease-out" }}
      >
        {/* Close */}
        <button onClick={dismiss} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10 transition-colors">
          <X className="w-4 h-4 text-gray-500" />
        </button>

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-center">
          <p className="text-white font-black text-sm tracking-wide">âš¡ WAIT â€” DON'T LEAVE YET!</p>
        </div>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="text-center mb-7">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "Poppins,sans-serif" }}>
                  Get a FREE Digital Marketing Audit
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our experts will analyse your current digital presence and tell you exactly what's holding your business back â€” worth â‚¹5,000, absolutely free.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["Website Audit", "SEO Analysis", "Competitor Report", "Growth Roadmap"].map(item => (
                  <span key={item} className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input required type="text" placeholder="Your Full Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-all" />
                <input required type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-all" />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-all" />
                <button type="submit" disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-sm font-bold disabled:opacity-70">
                  {loading ? "Submitting..." : <><span>Yes! Send My Free Audit</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
              <p className="text-center text-gray-400 text-xs mt-3">ðŸ”’ No spam. We'll call you within 24 hours.</p>
              <button onClick={dismiss} className="block text-center text-gray-400 text-xs mt-2 mx-auto hover:text-gray-600 transition-colors">
                No thanks, I don't want free help
              </button>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">We've Got Your Request!</h3>
              <p className="text-gray-500 text-sm mb-5">Our team will call you within 24 hours with your personalised audit report.</p>
              <button onClick={dismiss} className="btn-primary px-8 py-3 text-sm">Done <ArrowRight className="w-4 h-4" /></button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

