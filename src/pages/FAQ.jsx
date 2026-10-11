import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { faqs } from "../data/studio";
import { PageIntro, Button, FinalCTA } from "../components/Studio";
export default function FAQ() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const categories = [
    "All",
    "Getting started",
    "Services",
    "Process",
    "Pricing",
  ];
  const category = categories.includes(params.get("category"))
    ? params.get("category")
    : "All";
  const filtered = faqs.filter(
    (f) =>
      (category === "All" || f.category === category) &&
      `${f.q} ${f.a}`.toLowerCase().includes(search.toLowerCase().trim()),
  );
  return (
    <>
      <PageIntro
        label="A little clarity"
        title="Good questions. Clear answers."
        description="A few things you might be wondering before we make something together."
        image="imgStudentIllustration"
      />
      <section className="wrap page-content faq-layout">
        <aside className="faq-sidebar">
          <h2>Still curious?</h2>
          <p>Your project doesn’t have to fit a frequently asked question.</p>
          <Button to="/contact">Start a Conversation</Button>
        </aside>
        <div>
          <label className="sr-only" htmlFor="faq-search">
            Search questions
          </label>
          <input
            id="faq-search"
            className="faq-search"
            type="search"
            placeholder="Search questions…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="tabs" role="group" aria-label="Question categories">
            {categories.map((c) => (
              <button
                aria-pressed={category === c}
                key={c}
                onClick={() => setParams(c === "All" ? {} : { category: c })}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="result-count" role="status">
            {filtered.length} questions
          </p>
          <div className="faq-list">
            {filtered.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="faq-empty">
              <h3>No matching questions.</h3>
              <p>Try another word or choose a different category.</p>
              <button
                className="button"
                onClick={() => {
                  setSearch("");
                  setParams({});
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
