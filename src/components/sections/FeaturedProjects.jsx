import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const PROJECTS = [
  { title: 'EduPlay', category: 'Education', desc: 'Interactive learning platform for high school students.', color: '#D62828' },
  { title: 'Brandify', category: 'Web', desc: 'Modern brand identity website for a creative agency.', color: '#5227FF' },
  { title: 'PixelQuest', category: 'Game', desc: 'Retro-style educational puzzle game for mobile.', color: '#00D4FF' },
  { title: 'ArtVault', category: 'Illustration', desc: 'Digital art portfolio and commission management system.', color: '#FFD700' },
];

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects__inner">
        <div className="featured-projects__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Work we're proud of.</h2>
        </div>
        <div className="featured-projects__grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="featured-projects__card">
              <div className="featured-projects__thumb" style={{ background: p.color }}>
                <span className="featured-projects__cat">{p.category}</span>
              </div>
              <div className="featured-projects__info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to="/portfolio" className="featured-projects__link">
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-projects__footer">
          <Link to="/portfolio" className="btn btn--secondary">
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
