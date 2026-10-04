import './WhyScripta.css';

const REASONS = [
  { icon: '🎯', title: 'Personalized', desc: 'Every project is tailored to your specific needs and goals.' },
  { icon: '🔄', title: 'Flexible', desc: 'Adaptable processes that work with your schedule and budget.' },
  { icon: '✨', title: 'Creative', desc: 'Design-forward approach that makes your project stand out.' },
  { icon: '⚡', title: 'Technology-driven', desc: 'Built with modern tools and best practices.' },
  { icon: '📖', title: 'Education-focused', desc: 'Deep understanding of learning and academic needs.' },
];

function WhyScripta() {
  return (
    <section className="why-scripta">
      <div className="why-scripta__inner">
        <div className="why-scripta__header">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Scripta?</h2>
        </div>
        <div className="why-scripta__grid">
          {REASONS.map((r, i) => (
            <div key={i} className="why-scripta__card">
              <span className="why-scripta__icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyScripta;
