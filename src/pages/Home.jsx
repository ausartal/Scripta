import Hero from '../components/sections/Hero';
import BrandStatement from '../components/sections/BrandStatement';
import ServicesPreview from '../components/sections/ServicesPreview';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import WhyScripta from '../components/sections/WhyScripta';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import Numbers from '../components/sections/Numbers';
import Testimonials from '../components/sections/Testimonials';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyScripta />
      <HowItWorksSection />
      <Numbers />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default Home;
