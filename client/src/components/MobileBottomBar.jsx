import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl">
      <div className="grid grid-cols-3">
        <a href="tel:+919625046221"
          className="flex flex-col items-center justify-center py-3 gap-1 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors active:bg-blue-100">
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </a>

        <a href="https://wa.me/919625046221?text=Hi%20Lokalynk%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank" rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-green-500 text-white hover:bg-green-600 transition-colors active:bg-green-700">
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        <Link to="/contact"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all active:from-blue-800">
          <ArrowRight className="w-5 h-5" />
          <span className="text-[10px] font-bold">Free Quote</span>
        </Link>
      </div>
      {/* Safe area for iOS */}
      <div className="h-safe-area-inset-bottom bg-white" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
    </div>
  );
}
