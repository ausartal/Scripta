"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[var(--shadow-md)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-all duration-300 group-hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              S
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Scripta
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[var(--color-surface-soft)]"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Start a Project
              <svg className="ml-1.5 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0l-3-3m3 3l-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ background: "var(--color-text)" }}
            />
            <span
              className={`w-6 h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--color-text)" }}
            />
            <span
              className={`w-6 h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ background: "var(--color-text)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "var(--color-surface)" }}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-[var(--color-surface-soft)]"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200 hover:bg-[var(--color-surface-soft)]"
                  style={{ color: "var(--color-text)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <a
                href="#contact"
                className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
                onClick={() => setMobileOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
