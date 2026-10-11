import { Link } from "react-router-dom";
import { art } from "../data/studio";
import {
  Arrow,
  Button,
  Icon,
  ServiceGrid,
  SectionHeading,
  EthicsNote,
  Process,
  FeaturedProjects,
  FinalCTA,
} from "../components/Studio";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-sweep">
          <img src={art("imgHeroImageOverlay")} alt="" />
        </div>
        <div className="hero-heading">
          <p className="eyebrow">
            <span className="status-dot" />A creative technology studio
          </p>
          <h1>
            Turn your
            <br />
            ideas into
            <br />
            <span>
              something
              <br />
              real.
            </span>
          </h1>
        </div>
        <div className="hero-art">
          <img
            className="hero-character"
            src={art("mobile-imgHeroCharacter")}
            alt="Original illustration of a creative explorer holding a drawing tablet and sketchbook"
            fetchPriority="high"
          />
          <img
            className="hero-dots"
            src="/illustrations/imgDotGridTop.svg"
            alt=""
          />
          <div className="hero-sticker">LEARN. MAKE. LAUNCH.</div>
          <div className="hero-tag">scripta studio ✦</div>
          <div className="hero-app" aria-hidden="true">
            <i />
            <strong>SCRIPTA</strong>
            <span />
            <i />
          </div>
          <div className="hero-browser" aria-hidden="true">
            <div>
              <img src="/illustrations/imgD.svg" alt="" />
              <img src="/illustrations/imgD1.svg" alt="" />
              <img src="/illustrations/imgD2.svg" alt="" />
              <small>scripta · website concept</small>
            </div>
            <span />
            <i />
          </div>
          <div className="hero-build" aria-hidden="true">
            LET’S BUILD IT
            <img src="/illustrations/imgGroup.svg" alt="" />
          </div>
          <img
            className="hero-accent-dots"
            src="/illustrations/imgAccentDots.svg"
            alt=""
          />
        </div>
        <div className="hero-details">
          <p>
            Scripta helps students, educators, creators, and organizations build
            meaningful websites, apps, games, visuals, and learning experiences.
          </p>
          <div className="actions">
            <Button to="/contact">Start Your Project</Button>
            <Link className="button button--outline" to="/portfolio">
              Explore Our Work
            </Link>
          </div>
          <nav className="hero-paths" aria-label="Choose a project starting point">
            <span>What are you making?</span>
            <div>
              <Link to="/contact?service=Web%20Development">Website</Link>
              <Link to="/contact?service=App%20Development">App</Link>
              <Link to="/contact?service=Illustration%20%26%20Design">Design</Link>
              <Link to="/contact">Not sure yet</Link>
            </div>
          </nav>
          <small>Your idea. Our shared next chapter.</small>
        </div>
      </section>
      <div className="discipline-band">
        <span>Education</span>
        <b>+</b>
        <span>Creativity</span>
        <b>+</b>
        <span>Technology</span>
      </div>
    </>
  );
}
function Pillars() {
  return (
    <section className="ink-section">
      <div className="wrap section-space">
        <div className="studio-statement">
          <div>
            <p className="eyebrow">What we do</p>
            <p>Ideas deserve to become something real.</p>
          </div>
          <h2>
            From an unfinished idea to a finished experience, Scripta creates
            work that is useful, thoughtful, and made to move forward.
          </h2>
        </div>
        <div className="pillars">
          <Link to="/services#education" className="pillar">
            <div className="pillar-top">
              <Icon name="imgBookOpen" />
              <Arrow />
            </div>
            <h3>Education</h3>
            <p>
              Build understanding.
              <br />
              Make learning more human.
            </p>
            <span className="pill">Learn ↗</span>
          </Link>
          <Link to="/services#design" className="pillar pillar--creative">
            <div className="pillar-top">
              <Icon name="imgPencilRuler" />
              <Arrow />
            </div>
            <h3>Creativity</h3>
            <p>
              Give ideas a voice.
              <br />
              Make something that feels like you.
            </p>
            <img
              className="pillar-art"
              src={art("imgCreativityIllustratorFigure")}
              alt=""
              loading="lazy"
            />
            <span className="pill">Illustration & Design</span>
          </Link>
          <Link to="/services#web" className="pillar">
            <div className="pillar-top">
              <Icon name="imgCodeXml" />
              <Arrow />
            </div>
            <h3>Technology</h3>
            <p>
              Make it useful.
              <br />
              Bring possibilities to life.
            </p>
            <span className="pill">Build & Launch ↗</span>
          </Link>
        </div>
        <div className="pillar-caption">
          <p>
            Learn with purpose → Create with imagination → Build with
            technology.
          </p>
          <span>Better together, from the start.</span>
        </div>
      </div>
    </section>
  );
}
const audiences = [
  [
    "Students",
    "A big idea. A new skill. A place to start.",
    "Build a portfolio, explore a project, or grow your understanding with hands-on mentoring.",
  ],
  [
    "Educators",
    "Make the lesson stay with them.",
    "Turn your expertise into interactive materials and learning experiences students can connect with.",
  ],
  [
    "Organizations",
    "Small team. Meaningful ambitions.",
    "Create a clear digital presence and practical tools that help your community move forward.",
  ],
  [
    "Creators",
    "Your imagination needs a launchpad.",
    "Shape an original identity, a playful experience, or a digital home for your next creative chapter.",
  ],
];
export function Audiences() {
  return (
    <section className="audience-section">
      <div className="wrap section-space">
        <div className="audience-heading">
          <SectionHeading
            label="Who we help"
            title="Different starting points. Shared possibility."
            description="You don’t need a perfect brief. Just something you care about—and a little curiosity."
          />
          <img src={art("imgWhoWeHelpCharacter")} alt="" loading="lazy" />
        </div>
        <p className="swipe-hint">Swipe to find your starting point</p>
        <div className="audience-grid">
          {audiences.map(([title, lead, text], i) => (
            <Link
              to={`/contact?audience=${title}`}
              key={title}
              className={`audience ${i === 3 ? "audience--purple" : ""}`}
            >
              <div>
                <h3>{title}</h3>
                <Arrow />
              </div>
              <strong>{lead}</strong>
              <p>{text}</p>
            </Link>
          ))}
        </div>
        <div className="audience-close">
          <p>
            Not sure where you fit? Let’s find your starting point together.
          </p>
          <Button to="/contact">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
function Values() {
  return (
    <section className="ink-section">
      <div className="wrap section-space">
        <SectionHeading
          label="The impact we work toward"
          title="Real value. Beyond the numbers."
          description="Our commitments, not reported business metrics. Every outcome reflects what we actively work toward."
        />
        <div className="value-grid">
          {[
            [
              "Built to be used.",
              "Thoughtful handoffs and practical tools for the next chapter.",
            ],
            [
              "Made with you.",
              "A shared process where questions and feedback belong.",
            ],
            [
              "Purpose, not noise.",
              "Fresh thinking grounded in what your idea actually needs.",
            ],
            [
              "Understanding first.",
              "Experiences that make discovery clearer and more engaging.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedProjects />
      <section className="wrap section-space">
        <SectionHeading
          label="Services"
          title="Many ways to make it real."
          description="One collaborative studio. Eight ways to learn, create, and launch something meaningful."
        />
        <ServiceGrid limit={5} />
        <EthicsNote />
        <div className="section-close service-close">
          <Button to="/services" secondary>Explore all services</Button>
        </div>
      </section>
      <Audiences />
      <Process />
      <Values />
      <FinalCTA />
    </>
  );
}
