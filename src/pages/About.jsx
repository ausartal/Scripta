import './About.css';

const VALUES = [
  { title: 'Creativity', desc: 'We believe every project deserves a unique creative vision.' },
  { title: 'Integrity', desc: 'Honest communication and transparent processes.' },
  { title: 'Curiosity', desc: 'Always learning, always exploring new possibilities.' },
  { title: 'Quality', desc: 'We don\'t ship until it\'s right.' },
  { title: 'Collaboration', desc: 'The best results come from working together.' },
  { title: 'Accessibility', desc: 'Technology and education should be available to everyone.' },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <span className="section-label">About</span>
        <h1 className="section-title">The story behind Scripta.</h1>
      </section>

      <section className="about-page__story">
        <div className="about-page__block">
          <h2>Who We Are</h2>
          <p>
            Scripta is a creative studio born from the belief that education, technology,
            and creativity are stronger together. We are designers, developers, educators,
            and dreamers who build digital experiences that matter.
          </p>
        </div>
        <div className="about-page__block">
          <h2>Our Mission</h2>
          <p>
            To make technology accessible, learning engaging, and creativity a force
            for meaningful change — one project at a time.
          </p>
        </div>
        <div className="about-page__block">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every idea, no matter how small, has the tools
            and support to become something real.
          </p>
        </div>
      </section>

      <section className="about-page__beliefs">
        <h2>What We Believe</h2>
        <div className="about-page__beliefs-grid">
          <blockquote>Technology should be accessible.</blockquote>
          <blockquote>Learning should be engaging.</blockquote>
          <blockquote>Creativity should have a place in technology.</blockquote>
        </div>
      </section>

      <section className="about-page__values">
        <h2>Our Values</h2>
        <div className="about-page__values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="about-page__value">
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
