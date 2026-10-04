import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${isHome ? 'navbar--home' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="Scripta" />
        </Link>

        <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn--primary navbar__cta" onClick={() => setOpen(false)}>
            Start a Project
          </Link>
        </div>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`navbar__toggle-bar ${open ? 'open' : ''}`} />
          <span className={`navbar__toggle-bar ${open ? 'open' : ''}`} />
          <span className={`navbar__toggle-bar ${open ? 'open' : ''}`} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
