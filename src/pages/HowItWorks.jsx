import './HowItWorks.css';

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Tell us what you need. Share your idea, goals, and any references you have.' },
  { num: '02', title: 'Consultation', desc: 'We discuss scope, timeline, and the best approach for your project.' },
  { num: '03', title: 'Proposal', desc: 'Scripta provides a detailed estimate, project plan, and timeline.' },
  { num: '04', title: 'Production', desc: 'Design, development, and regular check-ins with you along the way.' },
  { num: '05', title: 'Revision', desc: 'Your feedback is incorporated. We refine until it\'s right.' },
  { num: '06', title: 'Delivery', desc: 'Final product is handed over, fully tested and ready to launch.' },
  { num: '07', title: 'Support', desc: 'Ongoing maintenance and support available if you need it.' },
];

function HowItWorks() {
  return (
    <main className="how-page">
      <section className="how-page__hero">
        <span className="section-label">Process</span>
        <h1 className="section-title">How we work.</h1>
        <p className="section-desc">
          A clear, collaborative process from first conversation to final delivery.
        </p>
      </section>

      <section className="how-page__steps">
        {STEPS.map((s, i) => (
          <div key={i} className="how-page__step">
            <span className="how-page__num">{s.num}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HowItWorks;
