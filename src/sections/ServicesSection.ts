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
    this.root.style.top = '2234px';
    this.root.style.height = '1117px';
    this.root.innerHTML = /* html */ `
      <div class="services__intro">
        <div class="services__title-group">
          <p class="services__label">02 / Services</p>
          <p class="services__heading">Many ways to make it real.</p>
        </div>
        <div class="services__supporting">
          <p>One collaborative studio. Eight ways to learn, create, and launch something meaningful.</p>
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
        <p class="services__web-note">Base code, dll</p>
      </div>

      <div class="services__card services__card--game" data-card>
        <div class="services__game-bg"></div>
        <div class="services__game-panel"></div>
        <img class="services__game-img" src="${assets.services.gameDev}" alt="" />
        <div class="services__details">
          <p class="services__card-title">Game Development</p>
          <p class="services__card-desc services__card-desc--light">Educational, interactive, and entertainment games that make discovery feel like play.</p>
        </div>
      </div>

      <div class="services__card services__card--app" data-card>
        <div class="services__details services__details--app">
          <p class="services__card-title">App Development</p>
          <p class="services__card-desc services__card-desc--app">Useful mobile and web apps that turn everyday needs into simple, thoughtful experiences.</p>
        </div>
        <div class="services__app-panel"></div>
        <img class="services__app-img" src="${assets.services.appDev}" alt="" />
      </div>

      <div class="services__card services__card--educ" data-card>
        <div class="services__educ-panel"></div>
        <div class="services__details services__details--educ">
          <p class="services__card-title">EDUCATION solution</p>
          <p class="services__card-desc">Learning platforms, interactive materials, educational media that spark understanding, can also do a personal learning support and skill mentoring, with space to ask, practice, and grow.</p>
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
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
