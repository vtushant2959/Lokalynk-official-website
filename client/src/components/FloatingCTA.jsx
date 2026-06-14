import { useState } from "react";
import { MessageCircle, Phone, Calendar, X } from "lucide-react";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <>
          <a href="tel:+919625046221"
            className="flex items-center gap-2 bg-white text-primary font-bold text-sm px-4 py-2.5 rounded-xl shadow-xl border border-blue-100 hover:bg-blue-50 transition-all animate-float">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href="/contact"
            className="flex items-center gap-2 bg-white text-primary font-bold text-sm px-4 py-2.5 rounded-xl shadow-xl border border-blue-100 hover:bg-blue-50 transition-all">
            <Calendar className="w-4 h-4" /> Book Consultation
          </a>
        </>
      )}
      <div className="flex items-center gap-2">
        <button onClick={() => setExpanded(!expanded)}
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary transition-all">
          {expanded ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
        <a href="https://wa.me/919625046221" target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all animate-pulse-glow">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
