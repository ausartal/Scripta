import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

export class ServicesSection extends Section {
  readonly id: SectionId = 'services';

  render(): void {
    this.root.id = 'services';
    this.root.className = 'services';
    this.root.style.height = '1117px';
    this.root.innerHTML = /* html */ `
      <div class="services__intro">
        <div class="services__title-group">
          <p class="services__label">02 / Services</p>
          <p class="services__heading">Many ways to make it real.</p>
        </div>
        <div class="services__supporting">
          <p>One collaborative studio. Five core ways to learn, create, and launch something meaningful.</p>
        </div>
      </div>

      <p class="services__jp">あなたの希望を聞かせてください。私たちがカタチにします。</p>

      <div class="services__card services__card--web" data-card>
        <div class="services__web-mask">
          <div class="services__web-rect1"></div>
          <div class="services__web-cut"></div>
          <div class="services__web-rect2"></div>
          <div class="services__web-rect3"></div>
          <div class="services__web-rect4"></div>
          <div class="services__web-rect5"></div>
        </div>
        <div class="services__web-panel"></div>
        <img class="services__web-img" src="${assets.services.webDev}" alt="" />
        <div class="services__details">
          <p class="services__card-title">Web Development</p>
          <p class="services__card-desc">Landing pages, portfolios, organization websites, and web platforms built to work beautifully.</p>
        </div>
        <div class="services__card-extra">
          <div class="services__tags">
            <span>LANDING PAGE</span>
            <span>PORTFOLIO</span>
            <span>WEB APPS</span>
          </div>
          <p class="services__price-pill">FROM IDR 1,000,000</p>
        </div>
      </div>

      <div class="services__card services__card--game" data-card>
        <div class="services__game-bg"></div>
        <div class="services__game-panel"></div>
        <img class="services__game-img" src="${assets.services.gameDev}" alt="" />
        <div class="services__details">
          <p class="services__card-title">Game Development</p>
          <p class="services__card-desc services__card-desc--light">Educational, interactive, and entertainment games that make discovery feel like play.</p>
        </div>
        <div class="services__card-extra services__card-extra--game">
          <div class="services__tags services__tags--light">
            <span>PROTOTYPES</span>
            <span>2D/3D GAMES</span>
            <span>GAMEPLAY</span>
          </div>
          <p class="services__price-pill services__price-pill--game">FROM IDR 1,500,000</p>
        </div>
      </div>

      <div class="services__card services__card--app" data-card>
        <div class="services__details services__details--app">
          <p class="services__card-title">App Development</p>
          <p class="services__card-desc services__card-desc--app">Useful mobile and web apps that turn everyday needs into simple, thoughtful experiences.</p>
        </div>
        <div class="services__app-panel"></div>
        <img class="services__app-img" src="${assets.services.appDev}" alt="" />
        <div class="services__card-extra services__card-extra--app">
          <div class="services__tags services__tags--dark">
            <span>CUSTOM SOFTWARE</span>
            <span>INTERNAL TOOLS</span>
            <span>FULL-STACK</span>
          </div>
          <p class="services__price-pill services__price-pill--app">FROM IDR 8,000,000</p>
        </div>
      </div>

      <div class="services__card services__card--educ" data-card>
        <div class="services__educ-panel"></div>
        <div class="services__details services__details--educ">
          <div class="services__educ-badge">ACADEMIC &amp; CREATIVE SERVICES</div>
          <p class="services__card-title services__card-title--educ">EDUCATION &amp; ILLUSTRATION</p>
          <p class="services__card-desc services__card-desc--educ">1-on-1 tutoring, assignment mentoring, and learning media alongside custom digital art, character design, and visual assets tailored to inspire and deliver results.</p>
          <div class="services__educ-footer">
            <div class="services__tags services__tags--educ">
              <span>ONLINE TUTORING</span>
              <span>ASSIGNMENT HELP</span>
              <span>DIGITAL ART</span>
            </div>
            <div class="services__educ-prices">
              <span class="services__price-pill services__price-pill--educ">TUTORING: FROM IDR 50,000</span>
              <span class="services__price-pill services__price-pill--educ">ART: FROM IDR 150,000</span>
            </div>
          </div>
        </div>
      </div>
      <img class="services__educ-img" src="${assets.services.education}" alt="" />
    `;
  }

  init(): void {
    this.gsapCtx = gsap.context(() => {
      this.queryAll<HTMLElement>('[data-card]').forEach((card) => {
        this.on(card, 'mouseenter', () => {
          gsap.to(card, { y: -8, duration: 0.35, ease: 'power2.out' });
        });
        this.on(card, 'mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out' });
        });
      });
    }, this.root);
    ScrollTrigger.refresh();
  }

  reveal(): void {
    this.gsapCtx ??= gsap.context(() => {}, this.root);
    this.gsapCtx.add(() => {
      gsap.from(this.query('.services__intro'), {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: this.root, start: 'top 78%', once: true },
      });
      gsap.from(this.queryAll('[data-card]'), {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: this.root, start: 'top 70%', once: true },
      });
      gsap.to(this.query('.services__educ-img'), {
        y: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: this.root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
