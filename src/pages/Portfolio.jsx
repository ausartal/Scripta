import { useRef } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { projects } from "../data/studio";
import {
  PageIntro,
  ProjectCard,
  ProjectVisual,
  Button,
  FinalCTA,
} from "../components/Studio";
const filters = ["All", "Website", "Education", "App", "Game"];
export default function Portfolio() {
  const [params, setParams] = useSearchParams();
  const results = useRef(null);
  const filter = filters.includes(params.get("category"))
    ? params.get("category")
    : "All";
  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const total = Math.max(1, Math.ceil(filtered.length / 2));
  const requested = Number(params.get("page"));
  const page = Number.isInteger(requested)
    ? Math.min(total, Math.max(1, requested))
    : 1;
  function change(category, nextPage) {
    setParams({
      ...(category !== "All" ? { category } : {}),
      ...(nextPage > 1 ? { page: String(nextPage) } : {}),
    });
  }
  function paginate(next) {
    change(filter, next);
    results.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
    results.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <PageIntro
        label="Selected studio concepts"
        title="A glimpse of what’s possible."
        description="Original explorations in learning, creativity, and technology. These are studio concepts, not client commissions."
        image="imgCreatorIllustration"
      />
      <section className="wrap page-content">
        <div className="portfolio-toolbar">
          <div
            className="tabs"
            role="group"
            aria-label="Filter concepts by category"
          >
            {filters.map((f) => (
              <button
                key={f}
                aria-pressed={filter === f}
                onClick={() => change(f, 1)}
              >
                {f} <span>{f === "All" ? projects.length : projects.filter((project) => project.category === f).length}</span>
              </button>
            ))}
          </div>
          <p className="result-count" role="status">
            {filtered.length} {filtered.length === 1 ? "concept" : "concepts"} ·
            Page {page} of {total}
          </p>
        </div>
        <div
          ref={results}
          key={`${filter}-${page}`}
          tabIndex={-1}
          className="project-grid project-grid--updating"
          aria-label="Portfolio results"
        >
          {filtered.slice((page - 1) * 2, page * 2).map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
        {total > 1 && (
          <nav className="pagination" aria-label="Portfolio pagination">
            <button disabled={page === 1} onClick={() => paginate(page - 1)}>
              Previous
            </button>
            {Array.from({ length: total }, (_, i) => (
              <button
                key={i}
                aria-label={`Page ${i + 1}`}
                aria-current={page === i + 1 ? "page" : undefined}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === total}
              onClick={() => paginate(page + 1)}
            >
              Next
            </button>
          </nav>
        )}
      </section>
      <FinalCTA />
    </>
  );
}
export function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((item) => item.slug === slug);
  if (!p)
    return (
      <section className="not-found">
        <h1>Concept not found.</h1>
        <Button to="/portfolio">Back to Portfolio</Button>
      </section>
    );
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <>
      <PageIntro
        label={`${p.category} · Original studio concept`}
        title={p.title}
        description={p.subtitle}
        image={p.image || "imgAppCharacterBust"}
      />
      <section className="wrap page-content project-detail">
        <nav className="project-breadcrumb" aria-label="Breadcrumb">
          <Link to="/portfolio">Portfolio</Link><span aria-hidden="true">/</span><span>{p.title}</span>
        </nav>
        <ProjectVisual project={p} />
        <div className="detail-copy">
          <div>
            <h2>The idea</h2>
            <p>{p.description}</p>
            <p className="form-note">
              This is an illustrative studio concept, not a live product or
              client commission.
            </p>
          </div>
          <div>
            <h2>What we explored</h2>
            <ul>
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
        <Button to={`/contact?reference=${encodeURIComponent(p.title)}`}>
          Discuss a Similar Idea
        </Button>
        <Link className="next-project" to={`/portfolio/${nextProject.slug}`}>
          <span>Next concept</span>
          <strong>{nextProject.title} / {nextProject.subtitle}</strong>
        </Link>
      </section>
      <FinalCTA />
    </>
  );
}
