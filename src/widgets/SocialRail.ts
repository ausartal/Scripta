import { Component } from '@/core/Component';
import { gsap } from 'gsap';

/** Fixed right-rail social icons with hover pop. */
export class SocialRail extends Component {
  init(): void {
    const icons = this.queryAll<HTMLElement>('[data-social="icon"]');
    this.gsapCtx = gsap.context(() => {
      icons.forEach((icon) => {
        this.on(icon, 'mouseenter', () => {
          gsap.to(icon, { scale: 1.15, duration: 0.25, ease: 'back.out(1.5)' });
        });
        this.on(icon, 'mouseleave', () => {
          gsap.to(icon, { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
      });
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
