import { Link } from "react-router-dom";
import { Arrow } from "../Studio";
import { services } from "../../data/studio";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img
                src="/logo-original.svg"
                width="140"
                height="44"
                alt="Scripta home"
              />
            </Link>
            <p>
              A collaborative studio at the intersection of education,
              creativity, and technology. Learn, create, launch—together.
            </p>
            <span className="footer-signoff">
              Your idea. Our shared next chapter.
            </span>
          </div>
          <div>
            <h2>Services</h2>
            {services.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h2>Studio</h2>
            {[
              ["About Us", "/about"],
              ["Portfolio", "/portfolio"],
              ["Pricing", "/pricing"],
              ["How It Works", "/how-it-works"],
              ["FAQ", "/faq"],
            ].map(([label, to]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Let’s make something</h2>
            <Link className="footer-contact" to="/contact">
              Start a project
              <Arrow />
            </Link>
            <p>
              A question, a sketch, a spark.
              <br />
              That’s a good place to start.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Scripta. Ideas deserve a future.
          </span>
          <Link to="/privacy">Privacy</Link>
          <a href="#main">Back to top ↑</a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          SCRIPTA.
        </div>
      </div>
    </footer>
  );
}
