import { Link } from 'react-router-dom';
import './FinalCTA.css';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2 className="final-cta__title">Have an idea?<br />Let's make it real.</h2>
        <p className="final-cta__desc">
          Whether it's a website, an app, a game, or a learning tool — we're ready to build it with you.
        </p>
        <Link to="/contact" className="btn btn--yellow">Start a Project &rarr;</Link>
      </div>
    </section>
  );
}

export default FinalCTA;
