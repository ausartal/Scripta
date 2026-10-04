import { Link } from 'react-router-dom';
import './Services.css';

const CATEGORIES = [
  {
    title: 'Development',
    items: ['Website Development', 'Web Application', 'Mobile Application', 'Desktop Application', 'API / Backend', 'Database', 'AI Integration'],
  },
  {
    title: 'Creative',
    items: ['Illustration', 'Graphic Design', 'UI/UX Design', 'Character Design', 'Visual Assets', 'Presentation Design'],
  },
  {
    title: 'Game & Interactive',
    items: ['Game Development', 'Educational Game', 'Interactive Media', 'Game Assets'],
  },
  {
    title: 'Education',
    items: ['Online Tutoring', 'Learning Material', 'Educational Platform', 'Quiz / Assessment System', 'Interactive Learning'],
  },
  {
    title: 'Academic Support',
    items: ['Research Assistance', 'Proofreading', 'Consultation', 'Tutoring & Mentoring'],
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-page__hero">
        <span className="section-label">Services</span>
        <h1 className="section-title">Everything we do.</h1>
        <p className="section-desc">
          From development to design, education to AI — we cover a wide spectrum of digital services.
        </p>
      </section>

      <section className="services-page__grid">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="services-page__category">
            <h2>{cat.title}</h2>
            <ul>
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="services-page__cta">
        <h2>Need something specific?</h2>
        <p>Every project is unique. Let's discuss yours.</p>
        <Link to="/contact" className="btn btn--primary">Get a Quote &rarr;</Link>
      </section>
    </main>
  );
}

export default Services;
