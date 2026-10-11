import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { art, services } from "../data/studio";
import { PageIntro, Arrow } from "../components/Studio";
import { packages } from "../data/packages";

const STORAGE_KEY = "scripta:project-draft:v1";
const emptyDraft = {
  name: "", email: "", service: "", package: "Not sure yet",
  description: "", budget: "", deadline: "",
};

export default function Contact() {
  const [params] = useSearchParams();
  const selectedPackage = packages.some((item) => item.name === params.get("package"))
    ? params.get("package") : "Not sure yet";
  const selectedService = services.some((item) => item.title === params.get("service"))
    ? params.get("service") : "";
  const referenceText = params.get("reference")
    ? `I’m interested in a project like ${params.get("reference")}. ` : "";
  const [hadSavedDraft] = useState(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });
  const [draft, setDraft] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return {
        ...emptyDraft,
        ...(saved && typeof saved === "object" ? saved : {}),
        service: selectedService || saved?.service || "",
        package: selectedPackage !== "Not sure yet" ? selectedPackage : saved?.package || "Not sure yet",
        description: referenceText || saved?.description || "",
      };
    } catch {
      return { ...emptyDraft, service: selectedService, package: selectedPackage, description: referenceText };
    }
  });
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [draftStatus, setDraftStatus] = useState(
    hadSavedDraft ? "Draft restored from this browser." : "",
  );
  const form = useRef(null);
  const result = useRef(null);
  const statusTimer = useRef(null);

  useEffect(() => () => clearTimeout(statusTimer.current), []);

  function updateDraft(event) {
    const { name, value } = event.target;
    if (!name) return;
    const next = { ...draft, [name]: value };
    setDraft(next);
    let saved = true;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      saved = false;
    }
    setBrief("");
    setDraftStatus(saved ? "Draft saved on this device." : "Draft updated for this visit. Browser storage is unavailable.");
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setDraftStatus(""), 2400);
  }

  function focusFormTop() {
    requestAnimationFrame(() => {
      form.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    });
  }

  function nextStep() {
    const names = step === 1 ? ["name", "email"] : ["service", "description"];
    const invalid = names
      .map((name) => form.current?.elements.namedItem(name))
      .find((field) => field && !field.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      invalid.focus();
      return;
    }
    setStep((current) => Math.min(3, current + 1));
    focusFormTop();
  }

  function prepare(event) {
    event.preventDefault();
    const output = `SCRIPTA — PROJECT BRIEF\n\nName: ${draft.name}\nEmail: ${draft.email}\nService: ${draft.service}\nPackage: ${draft.package}\nBudget: ${draft.budget || "To discuss"}\nTiming: ${draft.deadline || "Flexible"}\n${params.get("audience") ? `Audience: ${params.get("audience")}\n` : ""}\nProject idea:\n${draft.description}\n\nPrepared locally. This brief has not been sent to Scripta.`;
    setBrief(output);
    setCopyStatus("");
    requestAnimationFrame(() => {
      result.current?.focus();
      result.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function clearDraft() {
    const next = { ...emptyDraft, service: selectedService, package: selectedPackage, description: referenceText };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // The in-memory form can still be cleared when browser storage is blocked.
    }
    setDraft(next);
    setBrief("");
    setCopyStatus("");
    setDraftStatus("Local draft cleared.");
    setStep(1);
    focusFormTop();
  }

  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "scripta-project-brief.txt";
    anchor.click();
    setCopyStatus("Brief downloaded.");
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyStatus("Brief copied.");
    } catch {
      setCopyStatus("Copy isn’t available in this browser. Download your brief instead.");
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
          <p>Think about who it’s for, what you want it to do, and what would make the project a success.</p>
          <img src={art("imgProcessIllustration")} alt="" />
          <p>No perfect brief required. Just your perspective.</p>
        </aside>
        <form ref={form} className="project-form" onSubmit={prepare}>
          <ol className="form-progress" aria-label="Project brief progress">
            {["About you", "Your project", "Review"].map((label, index) => (
              <li key={label} className={step >= index + 1 ? "is-active" : ""} aria-current={step === index + 1 ? "step" : undefined}>
                <span>{index + 1}</span>{label}
              </li>
            ))}
          </ol>
          <p className="draft-status" role="status" aria-live="polite">{draftStatus}</p>

          <fieldset hidden={step !== 1} className="form-step">
            <legend>First, tell us about you.</legend>
            <p>We only use these details to prepare the brief on your device.</p>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input id="name" name="name" autoComplete="name" required maxLength={100} value={draft.name} onChange={updateDraft} placeholder="What should we call you?" />
              </div>
              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={200} value={draft.email} onChange={updateDraft} placeholder="you@example.com" />
              </div>
            </div>
          </fieldset>

          <fieldset hidden={step !== 2} className="form-step">
            <legend>Now, shape the project.</legend>
            <p>A rough direction is enough. Everything can be refined later.</p>
            <div className="form-row">
              <div className="field">
                <label htmlFor="service">What can we help with? *</label>
                <select id="service" name="service" required value={draft.service} onChange={updateDraft}>
                  <option value="">Choose a service</option>
                  {services.map((service) => <option key={service.id}>{service.title}</option>)}
                  <option>Let’s figure it out together</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="package">Your starting package</label>
                <select id="package" name="package" value={draft.package} onChange={updateDraft}>
                  {packages.map((item) => <option key={item.name}>{item.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="description">Tell us about your idea *</label>
              <textarea id="description" name="description" required minLength={10} maxLength={5000} rows={5} value={draft.description} onChange={updateDraft} placeholder="What are you making, who is it for, and what do you hope to achieve?" />
              <small className="field-counter">At least 10 characters. <span>{draft.description.length}/5000</span></small>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="budget">Budget, if you have one</label>
                <input id="budget" name="budget" maxLength={100} value={draft.budget} onChange={updateDraft} placeholder="Amount + currency, or let’s discuss" />
              </div>
              <div className="field">
                <label htmlFor="deadline">Ideal timing</label>
                <input id="deadline" name="deadline" maxLength={100} value={draft.deadline} onChange={updateDraft} placeholder="A date, a month, or flexible" />
              </div>
            </div>
          </fieldset>

          <fieldset hidden={step !== 3} className="form-step form-review">
            <legend>Review your starting point.</legend>
            <p>Check the essentials before preparing your local brief.</p>
            <dl>
              <div><dt>Name</dt><dd>{draft.name}</dd></div>
              <div><dt>Email</dt><dd>{draft.email}</dd></div>
              <div><dt>Service</dt><dd>{draft.service}</dd></div>
              <div><dt>Package</dt><dd>{draft.package}</dd></div>
              <div className="form-review__idea"><dt>Project idea</dt><dd>{draft.description}</dd></div>
            </dl>
            <p className="form-note" id="delivery-note">This prepares a brief on your device. Nothing is submitted to a server.</p>
          </fieldset>

          <div className="form-navigation">
            {step > 1 ? <button type="button" className="button button--outline" onClick={() => setStep((current) => current - 1)}>Back</button> : <button type="button" className="text-button" onClick={clearDraft}>Clear local draft</button>}
            {step < 3 ? (
              <button type="button" className="button" onClick={nextStep}>Continue <Arrow direction="right" /></button>
            ) : (
              <button type="submit" className="button" aria-describedby="delivery-note">Prepare My Brief <Arrow /></button>
            )}
          </div>

          {brief ? (
            <section className="brief-result" ref={result} tabIndex={-1} aria-label="Prepared project brief">
              <div className="brief-result__heading"><span aria-hidden="true">✓</span><div><h2>Your brief is ready.</h2><p>Keep a copy for your project discussion. Nothing has been sent yet.</p></div></div>
              <div className="actions">
                <button type="button" onClick={download}>Download brief</button>
                <button type="button" onClick={copy}>Copy brief</button>
                <button type="button" onClick={clearDraft}>Clear draft</button>
              </div>
              <p role="status" aria-live="polite">{copyStatus}</p>
              <pre>{brief}</pre>
            </section>
          ) : null}
        </form>
      </section>
    </>
  );
}
