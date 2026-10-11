import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { art, services } from "../data/studio";
import { PageIntro, Arrow } from "../components/Studio";
import { packages } from "../data/packages";

export default function Contact() {
  const [params] = useSearchParams();
  const [brief, setBrief] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const result = useRef(null);
  const selectedPackage = packages.some((p) => p.name === params.get("package"))
    ? params.get("package")
    : "Not sure yet";
  const selectedService = services.some(
    (s) => s.title === params.get("service"),
  )
    ? params.get("service")
    : "";
  function prepare(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const output = `SCRIPTA — PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nPackage: ${data.get("package")}\nBudget: ${data.get("budget") || "To discuss"}\nTiming: ${data.get("deadline") || "Flexible"}\n${params.get("audience") ? `Audience: ${params.get("audience")}\n` : ""}\nProject idea:\n${data.get("description")}\n\nPrepared locally. This brief has not been sent to Scripta.`;
    setBrief(output);
    setCopyStatus("");
    requestAnimationFrame(() => {
      result.current?.focus();
      result.current?.scrollIntoView({ behavior: "instant", block: "center" });
    });
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "scripta-project-brief.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyStatus("Brief copied.");
    } catch {
      setCopyStatus(
        "Copy isn’t available in this browser. Download your brief instead.",
      );
    }
  }
  return (
    <>
      <PageIntro
        label="Start a project"
        title="Every good idea starts somewhere."
        description="Tell us what you’re imagining. A few details will help turn that first spark into a useful project brief."
        image="imgCtaCharacter"
      />
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>A sketch is a good start.</h2>
          <p>
            Think about who it’s for, what you want it to do, and what would
            make the project a success.
          </p>
          <img src={art("imgProcessIllustration")} alt="" />
          <p>No perfect brief required. Just your perspective.</p>
        </aside>
        <form
          key={`${selectedPackage}-${selectedService}`}
          className="project-form"
          onSubmit={prepare}
          onChange={() => {
            if (brief) setBrief("");
          }}
        >
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Your name *</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="What should we call you?"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="service">What can we help with? *</label>
              <select
                id="service"
                name="service"
                required
                defaultValue={selectedService}
              >
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
                <option>Let’s figure it out together</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="package">Your starting package</label>
              <select
                id="package"
                name="package"
                defaultValue={selectedPackage}
              >
                {packages.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="description">Tell us about your idea *</label>
            <textarea
              id="description"
              name="description"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              defaultValue={
                params.get("reference")
                  ? `I’m interested in a project like ${params.get("reference")}. `
                  : ""
              }
              placeholder="What are you making, who is it for, and what do you hope to achieve?"
            />
            <small>
              At least 10 characters. Links to references are welcome.
            </small>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="budget">Budget, if you have one</label>
              <input
                id="budget"
                name="budget"
                maxLength={100}
                placeholder="Amount + currency, or let’s discuss"
              />
            </div>
            <div className="field">
              <label htmlFor="deadline">Ideal timing</label>
              <input
                id="deadline"
                name="deadline"
                maxLength={100}
                placeholder="A date, a month, or flexible"
              />
            </div>
          </div>
          <p className="form-note" id="delivery-note">
            This form prepares a brief on your device. Online sending is not
            available yet; you can download or copy the result. Your details are
            not submitted to a server.
          </p>
          <button
            type="submit"
            className="button"
            aria-describedby="delivery-note"
          >
            Prepare My Brief
            <Arrow />
          </button>
          {brief && (
            <section
              className="brief-result"
              ref={result}
              tabIndex={-1}
              aria-label="Prepared project brief"
            >
              <h2>Your brief is ready.</h2>
              <p>
                Keep a copy for your project discussion. Nothing has been sent
                yet.
              </p>
              <div className="actions">
                <button type="button" onClick={download}>
                  Download brief
                </button>
                <button type="button" onClick={copy}>
                  Copy brief
                </button>
              </div>
              <p role="status">{copyStatus}</p>
              <pre>{brief}</pre>
            </section>
          )}
        </form>
      </section>
    </>
  );
}
