import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Arrow } from "../Studio";

const links = [
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["About Us", "/about"],
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  const close = () => setOpen(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav-inner wrap" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={close}>
          <img
            src="/logo-original.svg"
            alt="Scripta home"
            width="122"
            height="38"
          />
        </Link>
        <div
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link to="/how-it-works" className="mobile-process" onClick={close}>
            How It Works
          </Link>
        </div>
        <Link to="/contact" className="button nav-cta" onClick={close}>
          Start a Project
          <Arrow />
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path
              d={open ? "m6 6 12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
