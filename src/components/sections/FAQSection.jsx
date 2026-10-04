import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQSection.css';

const FAQS = [
  { q: 'What is Scripta?', a: 'Scripta is a creative studio offering services in development, design, education, and technology.' },
  { q: 'How long does a project take?', a: 'Timeline depends on scope. Small projects take 1-2 weeks, larger ones 1-3 months. We always provide a timeline upfront.' },
  { q: 'Can I request a custom project?', a: 'Absolutely. Every project is tailored to your needs. Share your idea and we\'ll create a plan.' },
  { q: 'Can I consult before starting?', a: 'Yes! We offer free initial consultations to understand your needs before any commitment.' },
  { q: 'How does payment work?', a: 'We typically use a milestone-based payment structure. Details are discussed during the proposal phase.' },
  { q: 'Do you offer revisions?', a: 'Yes, revisions are included in every project. The number of rounds depends on the project scope.' },
];

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        <div className="faq-section__header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Got questions?</h2>
        </div>
        <div className="faq-section__list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
              <button className="faq-item__question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-item__icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="faq-item__answer">{f.a}</p>}
            </div>
          ))}
        </div>
        <div className="faq-section__footer">
          <Link to="/faq" className="btn btn--secondary">View All FAQ &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
