import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
  Link,
} from "react-router-dom";
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
  const navigationType = useNavigationType();
  useEffect(() => {
    document.title = `${titles[pathname] || (pathname.startsWith("/portfolio/") ? "Concept detail" : "Page not found")} — Scripta`;
    const target = hash
      ? document.getElementById(decodeURIComponent(hash.slice(1)))
      : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else if (pathname === "/portfolio" && navigationType === "POP") {
      const saved = Number(sessionStorage.getItem("scripta:portfolio-scroll"));
      requestAnimationFrame(() => window.scrollTo({ top: saved || 0, behavior: "instant" }));
      document.getElementById("main")?.focus({ preventScroll: true });
    }
    else {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }
  }, [pathname, hash, navigationType]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
function Privacy() {
  return (
    <article className="wrap prose">
      <h1>Your brief stays yours.</h1>
      <p>
        The current Scripta website prepares project briefs locally in your
        browser. The form does not send your name, email, or project details to
        Scripta. While you are drafting, the form saves a local copy in this
        browser so an accidental refresh does not erase your progress.
      </p>
      <h2>Downloads and clipboard</h2>
      <p>
        If you choose Download brief, the file is saved to your device. If you
        choose Copy brief, the text is placed on your clipboard. You decide
        where to share it.
      </p>
      <h2>Local draft</h2>
      <p>
        Your project draft stays on this device until you clear it from the
        form or clear this browser&apos;s site data. It is never uploaded by this
        website.
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
function MobileProjectAction() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 640);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (pathname === "/contact" || !visible) return null;
  return (
    <div className="mobile-project-action">
      <span>Have an idea?</span>
      <Link to="/contact">Start a project</Link>
    </div>
  );
}
function AppShell() {
  const { pathname } = useLocation();
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main id="main" tabIndex={-1} className="route-frame" key={pathname}>
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
      <MobileProjectAction />
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
