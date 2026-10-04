import './HowItWorksSection.css';

const STEPS = [
  { num: '01', title: 'Tell Us', desc: 'Share your idea, goals, and requirements.' },
  { num: '02', title: 'Plan', desc: 'We create a roadmap, timeline, and proposal.' },
  { num: '03', title: 'Create', desc: 'Design, develop, and iterate with your feedback.' },
  { num: '04', title: 'Deliver', desc: 'Final product handed over with support included.' },
];

function HowItWorksSection() {
  return (
    <section className="how-section">
      <div className="how-section__inner">
        <div className="how-section__header">
          <span className="section-label">Process</span>
          <h2 className="section-title">How it works.</h2>
        </div>
        <div className="how-section__steps">
          {STEPS.map((s, i) => (
            <div key={i} className="how-section__step">
              <span className="how-section__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
