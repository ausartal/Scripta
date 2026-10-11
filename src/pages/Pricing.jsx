import { Link } from "react-router-dom";
import { PageIntro, Button, FinalCTA } from "../components/Studio";
import { packages } from "../data/packages";
export default function Pricing() {
  return (
    <>
      <div className="pricing-intro">
        <PageIntro
          label="Pricing & packages"
          title="The right scope. A clear next step."
          description="Start with what you want to make. We’ll shape the deliverables, timeline, and a project-based quote around your idea."
          image="imgWhoWeHelpCharacter"
        />
      </div>
      <section className="wrap section-space">
        <div className="pricing-grid">
          {packages.map((p) => (
            <article
              className={`pricing-card ${p.featured ? "pricing-card--featured" : ""}`}
              key={p.name}
            >
              {p.featured && (
                <span className="package-sticker">For a complete project</span>
              )}
              <p className="package-type">{p.type}</p>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="quote-price">Let’s scope it together.</div>
              <p className="quote-note">
                Custom quote · Price agreed before work starts
              </p>
              <ul className="check-list">
                {p.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <Button to={`/contact?package=${p.name}`}>Request a Quote</Button>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          No fixed rates published yet. These packages are starting points; the
          final proposal defines your deliverables, revisions, timeline, and
          price.
        </p>
        <section className="comparison" aria-labelledby="compare-title">
          <h2 id="compare-title">Find your starting point.</h2>
          <div
            className="table-scroll"
            tabIndex={0}
            role="region"
            aria-label="Package comparison, scroll horizontally on smaller screens"
          >
            <table>
              <caption>
                Compare the scope of each package. Details are confirmed in your
                proposal.
              </caption>
              <thead>
                <tr>
                  <th scope="col">What matters to you</th>
                  {packages.map((p) => (
                    <th scope="col" key={p.name}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Project scope</th>
                  {packages.map((p) => (
                    <td key={p.name}>{p.scope}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">A good fit for</th>
                  {packages.map((p) => (
                    <td key={p.name}>{p.fit}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Review approach</th>
                  <td>One defined milestone</td>
                  <td>Project milestones</td>
                  <td>Phased milestones</td>
                </tr>
                <tr>
                  <th scope="row">Deliverables & revisions</th>
                  <td>Agreed in proposal</td>
                  <td>Agreed in proposal</td>
                  <td>Agreed in proposal</td>
                </tr>
                <tr>
                  <th scope="row">Pricing</th>
                  <td>Custom quote</td>
                  <td>Custom quote</td>
                  <td>Custom quote</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="pricing-help">
          <div>
            <h3>Not sure which one fits?</h3>
            <p>
              Tell us what you have in mind. We’ll find a sensible starting
              point.
            </p>
          </div>
          <Button to="/contact?package=Not+sure+yet" secondary>
            Help Me Choose
          </Button>
        </div>
        <div className="section-close">
          <Link className="text-link" to="/faq?category=Pricing">
            Read pricing questions
          </Link>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
