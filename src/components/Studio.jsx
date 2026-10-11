import { Link } from "react-router-dom";
import { art, services, projects, steps } from "../data/studio";

export function Arrow({ direction = "up", ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      {...props}
    >
      <path
        d={
          direction === "up" ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"
        }
      />
    </svg>
  );
}
export function Icon({ name }) {
  return (
    <img
      className="studio-icon"
      src={`/illustrations/${name}.svg`}
      alt=""
      loading="lazy"
    />
  );
}
export function Button({ to, children, secondary = false, className = "" }) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button--outline" : ""} ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({ label, title, description, link, to }) {
  return (
    <div className="section-heading" data-reveal="heading">
      <div>
        {label && <p className="eyebrow">{label}</p>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
      {link && (
        <Link className="text-link" to={to}>
          {link}
          <Arrow />
        </Link>
      )}
    </div>
  );
}
export function PageIntro({
  title,
  description,
  label,
  image = "imgWhoWeHelpCharacter",
}) {
  return (
    <section className="page-intro wrap">
      <div>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="intro-description">{description}</p>
      </div>
      <img
        src={art(image)}
        alt=""
        className="page-intro__art"
        fetchPriority="high"
      />
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="invitation" data-reveal="invitation">
      <div className="wrap invitation__inner">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2>
            Have an idea worth building?
            <br />
            Let’s make it real.
          </h2>
          <p>
            Bring the question, the sketch, or the spark. We’ll work out the
            next step together.
          </p>
          <div className="actions">
            <Button to="/contact">Start a Project</Button>
            <Button to="/pricing" secondary>
              Explore Packages
            </Button>
          </div>
        </div>
        <div className="invitation__art">
          <div className="invitation__poster" aria-hidden="true">
            <small>FROM FIRST SKETCH</small>
            <strong>MAKE THE<br />IDEA MOVE.</strong>
            <span>DESIGN / BUILD / LAUNCH</span>
          </div>
          <div className="seal">
            <small>IDEAS → POSSIBILITIES</small>
            <Arrow />
            <span>MAKE IT REAL.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ServiceGrid({ detailed = false, limit }) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;
  return (
    <div className={`service-grid ${detailed ? "service-grid--detailed" : ""} ${limit ? "service-grid--featured" : ""}`}>
      {visibleServices.map((s, i) => (
        <article
          id={s.id}
          key={s.id}
          className={`service-card tone-${s.tone} service-card--${s.id}`}
          data-reveal="card"
        >
          <div className="service-card__top">
            <Icon name={s.icon} />
            <Link
              to={`/contact?service=${encodeURIComponent(s.title)}`}
              aria-label={`Discuss ${s.title}`}
              className="round-link"
            >
              <Arrow />
            </Link>
          </div>
          {i < 2 && (
            <div className="service-art-row">
              <img
                className="service-card__art"
                src={art(s.image)}
                alt=""
                loading="lazy"
              />
              {i === 1 && (
                <img
                  className="service-bust"
                  src={art("imgAppCharacterBust")}
                  alt=""
                  loading="lazy"
                />
              )}
            </div>
          )}
          <div className="service-card__copy">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            {detailed && (
              <ul className="check-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <Link
              className="service-tag"
              to={`/contact?service=${encodeURIComponent(s.title)}`}
            >
              {s.tagline}
              <Arrow />
            </Link>
          </div>
          {i >= 2 && s.image && (
            <img
              className="service-card__art"
              src={art(s.image)}
              alt=""
              loading="lazy"
            />
          )}
        </article>
      ))}
    </div>
  );
}
export function EthicsNote() {
  return (
    <p className="ethics-note">
      <strong>Guidance, never substitution.</strong> We mentor, collaborate, and
      offer structured assistance. We never replace student work or complete
      assessed assignments.
    </p>
  );
}
export function Process({ full = false }) {
  return (
    <section
      className={`process-section ink-section ${full ? "process-section--full" : ""}`}
    >
      <div className="wrap section-space">
        <SectionHeading
          label="How it works"
          title="A conversation. Then a creation."
          description="A clear process, a shared direction, and no disappearing acts. We build with you, not just for you."
        />
        <p className="swipe-hint">Swipe to explore each step</p>
        <ol className="process-grid">
          {steps.map((step, i) => (
            <li
              className={
                i === 1 ? "process-step process-step--featured" : "process-step"
              }
              key={step.title}
              data-reveal="card"
            >
              <div className="process-step__top">
                <span>0{i + 1}</span>
                <Icon name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <img
                className="process-step__art"
                src={art(step.image)}
                alt=""
                loading="lazy"
              />
            </li>
          ))}
        </ol>
        {!full && (
          <Link to="/how-it-works" className="text-link process-link">
            More about our process
            <Arrow />
          </Link>
        )}
      </div>
    </section>
  );
}
export function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual project-visual--${project.style}`}
      aria-hidden="true"
    >
      {project.style === "steps" ? (
        <div className="phone-pair">
          <div className="phone">
            <small>little steps.</small>
            <h3>
              A LITTLE BETTER,
              <br />
              EVERY DAY.
            </h3>
            <div className="phone-content">
              <span>+</span>
              <b>Your creative practice</b>
              <p>One small moment of making. Just for you.</p>
            </div>
            <small>Today’s next step →</small>
          </div>
          <div className="phone phone--second">
            <small>little steps.</small>
            <h3>
              MAKE SPACE
              <br />
              TO CREATE.
            </h3>
            <div className="phone-content">
              <span>○</span>
              <b>Draw something ordinary</b>
              <p>Look closer. Try a new perspective.</p>
            </div>
            <small>Begin practice →</small>
          </div>
        </div>
      ) : project.style === "orbit" ? (
        <>
          <img src={art(project.image)} alt="" loading="lazy" />
          <div className="game-title">
            <small>ORBIT ODDITIES</small>
            <h3>{project.headline}</h3>
          </div>
        </>
      ) : (
        <div className="browser-preview">
          <div className="browser-bar">
            <span className="browser-dots">● ● ●</span>
            <span>{project.title.toLowerCase()} · website concept</span>
          </div>
          <div className="browser-content">
            <div className="browser-nav">
              <b>{project.title.toLowerCase()}.</b>
              <small>Explore / Our story</small>
            </div>
            <div className="browser-hero">
              <div>
                <h3>{project.headline}</h3>
                <p>
                  {project.style === "curio"
                    ? "Explore the science of your everyday world."
                    : "A little space for a more connected community."}
                </p>
                <span className="preview-button">
                  {project.style === "curio"
                    ? "Find your first lesson"
                    : "Meet your community"}{" "}
                  ↗
                </span>
              </div>
              <img src={art(project.image)} alt="" loading="lazy" />
            </div>
            <div className="browser-bottom">
              {project.style === "curio"
                ? "Today’s discoveries     + Space & stars    ○ Life around us"
                : "Find your kind of together     + Gather    ○ Grow"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal="project">
      <Link
        to={`/portfolio/${project.slug}`}
        className="project-image-link"
        aria-label={`View ${project.title} concept`}
        onClick={() =>
          sessionStorage.setItem("scripta:portfolio-scroll", String(window.scrollY))
        }
      >
        <ProjectVisual project={project} />
      </Link>
      <div className="project-meta">
        <span>{project.category} · Studio concept</span>
        <Arrow />
      </div>
      <h3>
        <Link to={`/portfolio/${project.slug}`}>
          {project.title} / {project.subtitle}
        </Link>
      </h3>
      <p>{project.description}</p>
    </article>
  );
}
export function FeaturedProjects() {
  return (
    <section className="wrap section-space featured-work">
      <SectionHeading
        label="Featured projects · Selected concepts"
        title="A glimpse of what’s possible."
        description="Original concept work exploring how learning, creativity, and technology come together. Not client commissions."
      />
      <div className="project-grid project-grid--showcase">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="section-close">
        <Button to="/portfolio" secondary>
          Explore All Concepts
        </Button>
      </div>
    </section>
  );
}
