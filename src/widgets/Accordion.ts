import { Component } from '@/core/Component';
import { gsap } from 'gsap';

/**
 * FAQ accordion. Multi-open allowed. Header click animates the panel
 * height and rotates the "+" glyph into an "x".
 */
export class Accordion extends Component {
  init(): void {
    this.queryAll<HTMLElement>('[data-acc="header"]').forEach((header, i) => {
      this.on(header, 'click', () => this.toggle(i));
    });
  }

  toggle(index: number): void {
    const header = this.queryAll<HTMLElement>('[data-acc="header"]')[index];
    const panel = this.queryAll<HTMLElement>('[data-acc="panel"]')[index];
    const icon = header?.querySelector<HTMLElement>('[data-acc="icon"]');
    if (!header || !panel) return;
    const open = header.classList.contains('is-open');
    if (open) this.close(index);
    else this.open(index);
    if (icon) {
      gsap.to(icon, {
        rotation: open ? 0 : 45,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    }
  }

  open(index: number): void {
    const header = this.queryAll<HTMLElement>('[data-acc="header"]')[index];
    const panel = this.queryAll<HTMLElement>('[data-acc="panel"]')[index];
    if (!header || !panel) return;
    header.classList.add('is-open');
    panel.classList.add('is-open');
    gsap.fromTo(
      panel,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.inOut' },
    );
  }

  close(index: number): void {
    const header = this.queryAll<HTMLElement>('[data-acc="header"]')[index];
    const panel = this.queryAll<HTMLElement>('[data-acc="panel"]')[index];
    if (!header || !panel) return;
    header.classList.remove('is-open');
    panel.classList.remove('is-open');
    gsap.to(panel, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
