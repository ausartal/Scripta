import './Testimonials.css';

const REVIEWS = [
  { name: 'Raka Pratama', role: 'University Student', text: 'Scripta helped me build my portfolio website from scratch. The process was smooth and the result exceeded my expectations.' },
  { name: 'Dr. Sari Dewi', role: 'Educator', text: 'The interactive learning platform they built for our school has transformed how our students engage with the material.' },
  { name: 'Budi Santoso', role: 'Startup Founder', text: 'Professional, creative, and always on time. Scripta delivered our web app exactly as envisioned.' },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What clients say.</h2>
        </div>
        <div className="testimonials__grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="testimonials__card">
              <p className="testimonials__text">"{r.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
