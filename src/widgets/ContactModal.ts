import { Component } from '@/core/Component';
import { gsap } from 'gsap';

const EMAIL = 'works.scripta@gmail.com';
const IG_URL = 'https://instagram.com/hello.scripta';

/** Email contact modal — opened by any [data-contact="open"] trigger. */
export class ContactModal extends Component {
  private lastFocus?: HTMLElement;

  init(): void {
    this.query('[data-contact="close"]') &&
      this.on(this.query('[data-contact="close"]'), 'click', () => this.close());
    this.on(this.query('[data-contact="backdrop"]'), 'click', (ev) => {
      if (ev.target === this.query('[data-contact="backdrop"]')) this.close();
    });
    this.on(this.root, 'keydown', (ev) => {
      if ((ev as KeyboardEvent).key === 'Escape') this.close();
    });

    // global open triggers
    document.querySelectorAll<HTMLElement>('[data-contact="open"]').forEach((el) => {
      this.on(el, 'click', (ev) => {
        ev.preventDefault();
        this.open();
      });
    });

    // mailto + ig links inside modal
    const mail = this.query('[data-contact="mail"]');
    if (mail) mail.setAttribute('href', `mailto:${EMAIL}?subject=${encodeURIComponent('Halo Scripta — Saya mau konsultasi proyek')}`);
    const ig = this.query('[data-contact="ig"]');
    if (ig) {
      ig.setAttribute('href', IG_URL);
      ig.setAttribute('target', '_blank');
      ig.setAttribute('rel', 'noopener noreferrer');
    }

    this.root.style.display = 'none';
    this.root.style.position = 'fixed';
    this.root.style.inset = '0';
    this.root.style.zIndex = '100';
  }

  open(): void {
    this.lastFocus = document.activeElement as HTMLElement;
    this.root.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const backdrop = this.query('[data-contact="backdrop"]');
    const card = this.query('[data-contact="card"]');
    this.gsapCtx = gsap.context(() => {
      gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      gsap.fromTo(
        card,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)', clearProps: 'transform' },
      );
    }, this.root);
    const focusable = this.query<HTMLElement>('[data-contact="mail"]');
    focusable?.focus();
  }

  close(): void {
    const backdrop = this.query('[data-contact="backdrop"]');
    const card = this.query('[data-contact="card"]');
    const tl = gsap.timeline({
      onComplete: () => {
        this.root.style.display = 'none';
        document.body.style.overflow = '';
        this.gsapCtx?.revert();
        this.gsapCtx = undefined;
        this.lastFocus?.focus?.();
      },
    });
    tl.to(card, { y: 20, opacity: 0, duration: 0.2, ease: 'power2.in' }, 0).to(backdrop, { opacity: 0, duration: 0.25 }, 0);
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
    document.body.style.overflow = '';
  }
}
