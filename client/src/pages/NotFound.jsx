import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-[120px] font-black gradient-text leading-none mb-4" style={{ fontFamily:"Poppins,sans-serif" }}>404</div>
        <h1 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily:"Poppins,sans-serif" }}>Page Not Found</h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary px-8 py-3.5">
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-bold px-8 py-3.5 rounded-xl hover:border-primary hover:text-primary transition-all">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
