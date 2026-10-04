import { useState } from 'react';
import './Portfolio.css';

const FILTERS = ['All', 'Website', 'App', 'Game', 'Education', 'Illustration', 'UI/UX'];

const PROJECTS = [
  { title: 'EduPlay', category: 'Education', desc: 'Interactive learning platform for high school students with gamified quizzes.', color: '#D62828' },
  { title: 'Brandify', category: 'Website', desc: 'Modern brand identity website for a creative agency.', color: '#5227FF' },
  { title: 'PixelQuest', category: 'Game', desc: 'Retro-style educational puzzle game for mobile.', color: '#00D4FF' },
  { title: 'ArtVault', category: 'Illustration', desc: 'Digital art portfolio and commission management system.', color: '#FFD700' },
  { title: 'StudyHub', category: 'App', desc: 'Cross-platform study planner with spaced repetition.', color: '#8B2FC9' },
  { title: 'MediCare UI', category: 'UI/UX', desc: 'Healthcare app UI/UX design and prototyping.', color: '#D62828' },
];

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="portfolio-page">
      <section className="portfolio-page__hero">
        <span className="section-label">Portfolio</span>
        <h1 className="section-title">Our work speaks for itself.</h1>
      </section>

      <div className="portfolio-page__filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`portfolio-page__filter ${filter === f ? 'portfolio-page__filter--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="portfolio-page__grid">
        {filtered.map((p, i) => (
          <div key={i} className="portfolio-page__card">
            <div className="portfolio-page__thumb" style={{ background: p.color }}>
              <span className="portfolio-page__cat">{p.category}</span>
            </div>
            <div className="portfolio-page__info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
