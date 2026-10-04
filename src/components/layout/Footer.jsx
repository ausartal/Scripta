import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.svg" alt="Scripta" className="footer__logo" />
          <p className="footer__tagline">
            Education &times; Technology &times; Creativity
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/services">Web Development</Link>
          <Link to="/services">App Development</Link>
          <Link to="/services">Game Development</Link>
          <Link to="/services">Illustration</Link>
          <Link to="/services">Education</Link>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <Link to="/contact">Start a Project</Link>
          <a href="mailto:hello@scripta.dev">hello@scripta.dev</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Scripta. All rights reserved.</span>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
