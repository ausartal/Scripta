import { Component } from '@/core/Component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Vertical (or horizontal) fill bar whose scaleY tracks scroll progress. */
export class ScrollProgressBar extends Component {
  private fill?: HTMLElement;
  private dot?: HTMLElement;

  init(): void {
    this.fill = this.root.querySelector<HTMLElement>('[data-bar="fill"]') ?? undefined;
    this.dot = this.root.querySelector<HTMLElement>('[data-bar="dot"]') ?? undefined;
    this.gsapCtx = gsap.context(() => {
      if (this.fill) {
        gsap.set(this.fill, { scaleY: 0, transformOrigin: 'top center' });
        gsap.to(this.fill, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: this.root.closest('section') ?? this.root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
            onUpdate: (self) => {
              if (this.dot) {
                const h = this.fill!.offsetHeight;
                gsap.set(this.dot, { y: self.progress * h });
              }
            },
          },
        });
      }
    });
    ScrollTrigger.refresh();
  }

  destroy(): void {
    this.killGsap();
  }
}
