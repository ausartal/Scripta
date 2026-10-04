import { Link } from 'react-router-dom';
import GradientWaves from '../GradientWaves';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <GradientWaves
        horizonColor="#5227FF"
        waveColor="#D62828"
        crestColor="#FF9FFC"
        speed={0.35}
        amplitude={2.5}
        waveScale={0.6}
        waveRatio={0.9}
        swell={35}
        turbulence={20}
        tilt={1.11}
        zoom={1.0}
        height={5.5}
        fogDepth={15}
        detail="medium"
        brightness={1.0}
        opacity={1.0}
        mouseInteraction
        parallaxStrength={0.5}
        grain
        grainIntensity={0.05}
      />
      <div className="hero__content">
        <h1 className="hero__title">
          We build what<br />you imagine.
        </h1>
        <p className="hero__subtitle">
          Scripta is a creative studio at the intersection of education,
          technology, and design. We turn ideas into digital experiences.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--yellow">Start a Project</Link>
          <Link to="/services" className="btn btn--ghost">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
