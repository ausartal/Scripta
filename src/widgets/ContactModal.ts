import { Component } from '@/core/Component';
import { gsap } from 'gsap';

const EMAIL = 'works.scripta@gmail.com';
const IG_URL = 'https://instagram.com/hello.scripta';
const SUBJECT = 'Konsultasi Proyek — Saya mau kerja sama dengan Scripta';
const BODY = [
  'Halo Tim Scripta! 👋',
  '',
  'Saya ingin konsultasi tentang kebutuhan saya.',
  '',
  'Nama          : ',
  'Layanan       : (Jasa Tugas Sekolah / Website / Aplikasi / Game / Desain & Ilustrasi / Les Online)',
  'Deadline      : ',
  'Detail        : ',
  '',
  'Terima kasih, ditunggu kabarnya! 🙌',
].join('%0A');

const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${BODY}`;

/** Email contact modal — opened by any [data-contact="open"] trigger. */
export class ContactModal extends Component {
  private lastFocus?: HTMLElement;
  private isOpen = false;

  init(): void {
    this.root.style.display = 'none';
    this.root.style.position = 'fixed';
    this.root.style.inset = '0';
    this.root.style.zIndex = '100';

    // delegate clicks on the modal root (close, backdrop, links)
    this.on(this.root, 'click', (ev) => {
      const el = (ev.target as HTMLElement).closest?.('[data-contact]') as HTMLElement | null;
      if (!el) return;
      const action = el.dataset.contact;
      if (action === 'close') {
        ev.preventDefault();
        this.close();
      } else if (action === 'backdrop' && ev.target === el) {
        this.close();
      }
    });

    this.on(document, 'keydown', (ev) => {
      if ((ev as KeyboardEvent).key === 'Escape' && this.isOpen) this.close();
    });

    // wire links
    const mail = this.query<HTMLElement>('[data-contact="mail"]');
    if (mail) {
      mail.setAttribute('href', GMAIL_URL);
      mail.setAttribute('target', '_blank');
      mail.setAttribute('rel', 'noopener noreferrer');
    }
    const mailFallback = this.query<HTMLElement>('[data-contact="mailto"]');
    if (mailFallback) {
      mailFallback.setAttribute(
        'href',
        `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${BODY}`,
      );
    }
    const ig = this.query<HTMLElement>('[data-contact="ig"]');
    if (ig) {
      ig.setAttribute('href', IG_URL);
      ig.setAttribute('target', '_blank');
      ig.setAttribute('rel', 'noopener noreferrer');
    }

    // open triggers (outside modal)
    document.querySelectorAll<HTMLElement>('[data-contact="open"]').forEach((el) => {
      this.on(el, 'click', (ev) => {
        ev.preventDefault();
        this.open();
      });
    });
  }

  open(): void {
    if (this.isOpen) return;
    this.isOpen = true;
    this.lastFocus = document.activeElement as HTMLElement;
    this.root.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const backdrop = this.query<HTMLElement>('[data-contact="backdrop"]');
    const card = this.query<HTMLElement>('[data-contact="card"]');
    gsap.killTweensOf([backdrop, card]);
    gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    gsap.fromTo(
      card,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        clearProps: 'transform,opacity,scale',
      },
    );
    this.query<HTMLElement>('[data-contact="close"]')?.focus();
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;

    const backdrop = this.query<HTMLElement>('[data-contact="backdrop"]');
    const card = this.query<HTMLElement>('[data-contact="card"]');
    gsap.killTweensOf([backdrop, card]);

    const done = () => {
      this.root.style.display = 'none';
      document.body.style.overflow = '';
      gsap.set([backdrop, card], { clearProps: 'all' });
      this.lastFocus?.focus?.();
    };

    // guard: if page is hidden (e.g. mail app dialog), finish immediately
    if (document.hidden) {
      done();
      return;
    }

    const tl = gsap.timeline({ onComplete: done });
    tl.to(card, { y: 16, opacity: 0, duration: 0.18, ease: 'power2.in' }, 0);
    tl.to(backdrop, { opacity: 0, duration: 0.22 }, 0);
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
    document.body.style.overflow = '';
  }
}
