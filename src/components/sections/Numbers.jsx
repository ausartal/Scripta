import './Numbers.css';

const STATS = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '8', label: 'Service Fields' },
  { value: '3+', label: 'Years Experience' },
];

function Numbers() {
  return (
    <section className="numbers">
      <div className="numbers__inner">
        {STATS.map((s, i) => (
          <div key={i} className="numbers__item">
            <span className="numbers__value">{s.value}</span>
            <span className="numbers__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Numbers;
