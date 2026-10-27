import { Component } from '@/core/Component';
import type { Section } from '@/core/Section';
import type { SectionId } from '@/types';
import { gsap } from 'gsap';

export class Navbar extends Component {
  private sections: Section[];
  private underline?: HTMLElement;

  constructor(root: HTMLElement, sections: Section[]) {
    super(root);
    this.sections = sections;
  }

  init(): void {
    this.underline = this.query('[data-nav="underline"]');
    this.queryAll<HTMLElement>('[data-nav="link"]').forEach((link) => {
      this.on(link, 'click', (ev) => {
        ev.preventDefault();
        const id = link.dataset.target as SectionId;
        this.scrollTo(id);
      });
    });
    this.gsapCtx = gsap.context(() => {
      gsap.fromTo(
        this.root,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        },
      );
    });
    this.setActive('hero');
    this.bindScrollSpy();
  }

  setActive(id: SectionId): void {
    this.queryAll<HTMLElement>('[data-nav="link"]').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.target === id);
    });
    const active = this.query<HTMLElement>(`[data-nav="link"][data-target="${id}"]`);
    if (active && this.underline) {
      const x = active.offsetLeft;
      gsap.to(this.underline, {
        x,
        width: active.offsetWidth,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }

  scrollTo(id: SectionId): void {
    const section = this.sections.find((s) => s.id === id);
    if (!section) return;
    const scale = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--stage-scale') || '1',
    );
    gsap.to(window, {
      scrollTo: { y: section.top * scale },
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }

  private bindScrollSpy(): void {
    const onScroll = () => {
      const scale = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--stage-scale') || '1',
      );
      const y = window.scrollY / scale + 200;
      let current: SectionId = 'hero';
      for (const s of this.sections) {
        if (y >= s.top) current = s.id;
      }
      this.setActive(current);
    };
    this.on(window, 'scroll', onScroll, { passive: true });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
