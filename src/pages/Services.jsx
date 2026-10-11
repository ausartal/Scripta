import {
  PageIntro,
  ServiceGrid,
  EthicsNote,
  FinalCTA,
} from "../components/Studio";
export default function Services() {
  return (
    <>
      <PageIntro
        label="Our services"
        title="Many ways to make it real."
        description="One collaborative studio. Eight ways to learn, create, and launch something meaningful. Find your starting point below."
        image="imgIlloDesignCharacter"
      />
      <section className="wrap page-content">
        <ServiceGrid detailed />
        <EthicsNote />
      </section>
      <FinalCTA />
    </>
  );
}
