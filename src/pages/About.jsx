import { art } from "../data/studio";
import { PageIntro, FinalCTA, EthicsNote } from "../components/Studio";
import { Audiences } from "./Home";
export default function About() {
  return (
    <>
      <PageIntro
        label="Meet Scripta"
        title="Curiosity. Creativity. Shared possibility."
        description="A collaborative studio at the intersection of education, creativity, and technology. Learn, create, launch—together."
        image="imgCreativityIllustratorFigure"
      />
      <section className="wrap section-space about-story">
        <img
          src={art("imgCreatorIllustration")}
          alt="Original illustration of an imaginative creative world"
        />
        <div>
          <h2>Ideas deserve a future.</h2>
          <p>
            Some projects start as a sketch. Others start with a question, a
            lesson, or a problem that needs a better answer. Scripta brings
            design, development, and learning into the same conversation.
          </p>
          <p>
            We help students, educators, creators, and organizations shape
            meaningful digital experiences. The aim is useful work, clear
            communication, and a process you can be part of.
          </p>
          <EthicsNote />
        </div>
      </section>
      <Audiences />
      <FinalCTA />
    </>
  );
}
