import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AnimationManager } from '@/app/AnimationManager';
import { Section } from '@/core/Section';
import { HeroSection } from '@/sections/HeroSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { AudienceSection } from '@/sections/AudienceSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { FaqSection } from '@/sections/FaqSection';
import { PricingSection } from '@/sections/PricingSection';
import { FooterSection } from '@/sections/FooterSection';
import { Navbar } from '@/widgets/Navbar';
import { StageScaler } from '@/utils/scale';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export class App {
  private readonly anim = new AnimationManager();
  private readonly scaler = new StageScaler();
  private sections: Section[] = [];
  private navbar?: Navbar;

  mount(parent: HTMLElement): void {
    const hero = new HeroSection(parent);
    hero.render();
    this.sections.push(hero);

    const builders = [
      ServicesSection,
      AudienceSection,
      ProcessSection,
      FaqSection,
      PricingSection,
      FooterSection,
    ];
    for (const Ctor of builders) {
      const s = new Ctor(parent);
      s.render();
      this.sections.push(s);
    }

    const navbarEl = parent.querySelector<HTMLElement>('[data-widget="navbar"]');
    if (navbarEl) {
      this.navbar = new Navbar(navbarEl, this.sections);
      this.navbar.init();
    }

    for (const s of this.sections) s.init();

    this.scaler.start();
    window.addEventListener('stage:rescale', () => ScrollTrigger.refresh());

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      this.sections.forEach((s) => s.reveal());
    });
  }

  destroy(): void {
    this.sections.forEach((s) => s.destroy());
    this.sections = [];
    this.navbar?.destroy();
    this.anim.killAll();
    this.scaler.destroy();
  }
}
