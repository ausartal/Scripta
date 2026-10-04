import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const SERVICES = [
  { icon: '🌐', title: 'Web Development', desc: 'Modern websites and web applications built for performance.' },
  { icon: '📱', title: 'App Development', desc: 'Cross-platform mobile and desktop applications.' },
  { icon: '🎮', title: 'Game Development', desc: 'Interactive games and educational game experiences.' },
  { icon: '🎨', title: 'Illustration', desc: 'Custom illustrations, character design, and visual assets.' },
  { icon: '📚', title: 'Education', desc: 'Learning platforms, materials, and interactive content.' },
  { icon: '👨‍🏫', title: 'Tutoring', desc: 'Personalized online tutoring and academic support.' },
  { icon: '🤖', title: 'AI & Technology', desc: 'AI integration, automation, and smart solutions.' },
  { icon: '🎓', title: 'Academic Support', desc: 'Research assistance, proofreading, and consultation.' },
];

function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="services-preview__inner">
        <div className="services-preview__header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Services built around you.</h2>
          <p className="section-desc">
            From code to canvas, we offer a wide range of digital services
            tailored to your needs.
          </p>
        </div>
        <div className="services-preview__grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="services-preview__card">
              <span className="services-preview__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="services-preview__footer">
          <Link to="/services" className="btn btn--secondary">
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
