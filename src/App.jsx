import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Button } from "./components/Studio";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio, { ProjectDetail } from "./pages/Portfolio";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const titles = {
  "/": "Ideas deserve a future",
  "/services": "Services",
  "/portfolio": "Studio concepts",
  "/pricing": "Pricing & packages",
  "/about": "About us",
  "/how-it-works": "Our process",
  "/faq": "Frequently asked questions",
  "/contact": "Start a project",
  "/privacy": "Privacy",
};
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || (pathname.startsWith("/portfolio/") ? "Concept detail" : "Page not found")} — Scripta`;
    const target = hash
      ? document.getElementById(decodeURIComponent(hash.slice(1)))
      : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }
  }, [pathname, hash]);
  return null;
}
function Privacy() {
  return (
    <article className="wrap prose">
      <h1>Your brief stays yours.</h1>
      <p>
        The current Scripta website prepares project briefs locally in your
        browser. The form does not send your name, email, or project details to
        Scripta, and does not save those details in browser storage.
      </p>
      <h2>Downloads and clipboard</h2>
      <p>
        If you choose Download brief, the file is saved to your device. If you
        choose Copy brief, the text is placed on your clipboard. You decide
        where to share it.
      </p>
      <h2>Site delivery</h2>
      <p>
        The site’s hosting provider may process standard connection information
        to serve pages and assets. No advertising or analytics scripts are
        included in this website.
      </p>
      <h2>Before online inquiries launch</h2>
      <p>
        This page will need to be updated with the verified contact details and
        data-handling terms of any future inquiry service.
      </p>
      <Button to="/contact">Prepare a Project Brief</Button>
    </article>
  );
}
function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / A little off the canvas</p>
      <h1>This page hasn’t been drawn yet.</h1>
      <p>Let’s get you back to the ideas.</p>
      <Button to="/">Back to Home</Button>
    </section>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
