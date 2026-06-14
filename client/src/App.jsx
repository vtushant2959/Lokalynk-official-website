import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ExitIntentPopup from "./components/ExitIntentPopup";
import MobileBottomBar from "./components/MobileBottomBar";
import ChatBot from "./components/ChatBot";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Location from "./pages/Location";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname === "/admin";

  if (isAdmin) return <Admin />;

  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/location/:city" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="mt-20" />
      <Footer />
      <FloatingCTA />
      <ChatBot />
      <ExitIntentPopup />
      <MobileBottomBar />
      <CookieConsent />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
