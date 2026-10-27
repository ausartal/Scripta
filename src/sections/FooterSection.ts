import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

const SERVICES = [
  'Web Development',
  'App Development',
  'Game Development',
  'Illustration & Design',
  'Education Solutions',
  'Online Tutoring',
  'AI & Technology',
  'Academic Support',
];
const COMPANY = ['About Us', 'Portfolio', 'Pricing', 'Journal', 'FAQ', 'Contact'];
const CONNECT = ['Project inquiry ↗', 'Instagram ↗', 'LinkedIn ↗', 'Behance ↗'];

export class FooterSection extends Section {
  readonly id: SectionId = 'footer';

  render(): void {
    this.root.id = 'footer';
    this.root.className = 'footer';
    this.root.style.height = '504px';
    const links = (items: string[], cls: string) =>
      items.map((t) => `<p class="footer__link ${cls}">${t}</p>`).join('');
    this.root.innerHTML = /* html */ `
      <div class="footer__directory">
        <div class="footer__summary">
          <div class="footer__brand">
            <img class="footer__logo" src="${assets.hero.logo}" alt="Scripta Logo" />
            <span class="footer__wordmark">SCRIPTA</span>
          </div>
          <p class="footer__statement">A collaborative studio at the intersection of education, creativity, and technology. Learn, create, launch—together.</p>
          <p class="footer__contact">
            <button type="button" class="footer__contact-btn" data-contact="open">works.scripta@gmail.com</button>
            &nbsp;·&nbsp;@hello.scripta
          </p>
        </div>
        <div class="footer__groups">
          <div class="footer__group footer__group--services" data-col>
            <p class="footer__group-title">Services</p>
            ${links(SERVICES, 'footer__link--services')}
          </div>
          <div class="footer__group footer__group--company" data-col>
            <p class="footer__group-title">Company</p>
            ${links(COMPANY, 'footer__link--company')}
          </div>
          <div class="footer__group footer__group--connect" data-col>
            <p class="footer__group-title">Let's connect</p>
            ${links(CONNECT, 'footer__link--connect')}
          </div>
        </div>
      </div>
      <div class="footer__legal">
        <p>© 2026 Scripta. Ideas deserve a future.</p>
        <div class="footer__legal-links">
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
      </div>
    `;
  }

  init(): void {
    this.gsapCtx = gsap.context(() => {}, this.root);
    ScrollTrigger.refresh();
  }

  reveal(): void {
    this.gsapCtx ??= gsap.context(() => {}, this.root);
    this.gsapCtx.add(() => {
      gsap.from(this.queryAll('[data-col]'), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: this.root, start: 'top 85%', once: true },
      });
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
