import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  { q: 'What is Scripta?', a: 'Scripta is a creative studio offering services in development, design, education, and technology. We help individuals and organizations bring their digital ideas to life.' },
  { q: 'Who does Scripta serve?', a: 'We work with students, educators, organizations, startups, and creators — anyone who needs digital solutions.' },
  { q: 'What services does Scripta offer?', a: 'Web development, app development, game development, illustration, UI/UX design, education solutions, tutoring, and AI integration.' },
  { q: 'How long does a project take?', a: 'Timeline depends on scope. Small projects: 1-2 weeks. Medium: 2-6 weeks. Large: 1-3 months. We always provide a timeline upfront.' },
  { q: 'How does the process work?', a: 'Discovery → Consultation → Proposal → Production → Revision → Delivery → Support. We keep you involved at every step.' },
  { q: 'Can I request a custom project?', a: 'Absolutely. Every project is tailored to your specific needs and goals.' },
  { q: 'Can I consult before starting?', a: 'Yes! We offer free initial consultations to understand your needs before any commitment.' },
  { q: 'How does revision work?', a: 'Revisions are included in every project. The number of rounds depends on the project scope and is agreed upon upfront.' },
  { q: 'How does payment work?', a: 'We typically use milestone-based payments. Details are discussed during the proposal phase.' },
  { q: 'Do you offer maintenance?', a: 'Yes, ongoing maintenance and support packages are available after project delivery.' },
  { q: 'Does Scripta handle education projects?', a: 'Yes! Education is one of our core pillars. We build learning platforms, educational games, tutoring systems, and more.' },
  { q: 'Can you build something from scratch?', a: 'Yes. Whether you have a detailed spec or just an idea, we can help you build it from the ground up.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <main className="faq-page">
      <section className="faq-page__hero">
        <span className="section-label">FAQ</span>
        <h1 className="section-title">Frequently asked questions.</h1>
        <p className="section-desc">
          Everything you need to know about working with Scripta.
        </p>
      </section>

      <section className="faq-page__list">
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-page__item ${open === i ? 'faq-page__item--open' : ''}`}>
            <button className="faq-page__question" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <span className="faq-page__icon">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="faq-page__answer">{f.a}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}

export default FAQ;
