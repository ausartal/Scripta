import './BrandStatement.css';

function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="brand-statement__inner">
        <div className="brand-statement__pillars">
          <span className="brand-statement__pillar">Education</span>
          <span className="brand-statement__x">&times;</span>
          <span className="brand-statement__pillar">Technology</span>
          <span className="brand-statement__x">&times;</span>
          <span className="brand-statement__pillar">Creativity</span>
        </div>
        <p className="brand-statement__text">
          Scripta sits at the crossroads of learning, building, and creating.
          We believe the best digital products come from understanding people,
          not just code.
        </p>
      </div>
    </section>
  );
}

export default BrandStatement;
