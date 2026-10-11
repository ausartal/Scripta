import { PageIntro, Process, FinalCTA } from "../components/Studio";
export default function HowItWorks() {
  return (
    <>
      <PageIntro
        label="Our process"
        title="Good work is built together."
        description="From the first conversation to the final handoff, you’ll know what’s happening, what we need from you, and what comes next."
        image="imgProcessIllustration"
      />
      <Process full />
      <section className="wrap section-space">
        <div className="detail-copy">
          <div>
            <h2>Bring what you have.</h2>
            <p>
              A rough idea, your audience, a reference you love, and your
              preferred timing are enough to start a useful conversation.
            </p>
          </div>
          <div>
            <h2>Leave with clarity.</h2>
            <p>
              Before work starts, we define the deliverables, responsibilities,
              review milestones, price, and handoff in an agreed proposal.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
