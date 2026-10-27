import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

interface TierSpec {
  cls: 'lime' | 'blue' | 'orange';
  top: string;
  jp: string;
  title: string;
  pill: string;
  features: string[];
}

const TIERS: TierSpec[] = [
  {
    cls: 'lime',
    top: assets.pricing.cardLimeTop,
    jp: 'エッセンシャル',
    title: 'ESENSIAL',
    pill: 'SIMPLE & FOCUSED (ENTRY-LEVEL)',
    features: [
      'Single concept direction',
      'Up to 5 pages or core screens',
      'Two revision rounds',
      'Essential motion & interactions',
    ],
  },
  {
    cls: 'blue',
    top: assets.pricing.cardBlueTop,
    jp: 'シグネチャー',
    title: 'SIGNATURE',
    pill: 'PERSONALIZED & FLEXIBLE (MID-LEVEL)',
    features: [
      'Up to three concept directions',
      'Full site or product scope',
      'Sprint-based unlimited revisions',
      'Custom motion & prototyping',
    ],
  },
  {
    cls: 'orange',
    top: assets.pricing.cardOrangeTop,
    jp: 'マスターピース',
    title: 'MASTERPIECE',
    pill: 'COMPLEX & COMPREHENSIVE (ADVANCE)',
    features: [
      'End-to-end creative direction',
      'Complex platforms & systems',
      'Dedicated team, priority craft',
      'Advanced animation & experience',
    ],
  },
];

export class PricingSection extends Section {
  readonly id: SectionId = 'pricing';

  render(): void {
    this.root.id = 'pricing';
    this.root.className = 'pricing';
    this.root.style.top = '6925px';
    this.root.style.height = '1710px';

    const cards = TIERS.map(
      (t) => /* html */ `
      <div class="pricing__shadow pricing__shadow--${t.cls}" data-card-shadow><div></div></div>
      <div class="pricing__card pricing__card--${t.cls}" data-card>
        <img class="pricing__card-top pricing__card-top--${t.cls}" src="${t.top}" alt="" />
        ${t.cls === 'orange' ? `<img class="pricing__orange-strip" src="${assets.pricing.cardOrangeStrip}" alt="" />` : ''}
        <p class="pricing__jp-label pricing__jp-label--${t.cls}">${t.jp}</p>
        <p class="pricing__tier pricing__tier--${t.cls}">${t.title}</p>
        <div class="pricing__pill pricing__pill--${t.cls}-shadow"></div>
        <div class="pricing__pill pricing__pill--${t.cls}"></div>
        <p class="pricing__pill-label pricing__pill-label--${t.cls}">${t.pill}</p>
        <p class="pricing__body-title">what icluded</p>
        <ul class="pricing__features pricing__features--${t.cls}">
          ${t.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </div>`,
    ).join('');

    this.root.innerHTML = /* html */ `
      <div class="pricing__banner pricing__banner--1"><img src="${assets.pricing.banner1}" alt="" /></div>
      <div class="pricing__banner pricing__banner--2"><img src="${assets.pricing.banner2}" alt="" /></div>
      <div class="pricing__banner pricing__banner--3"><img src="${assets.pricing.banner3}" alt="" /></div>

      <div class="pricing__title-wrap"><p class="pricing__title">PRICING</p></div>
      <p class="pricing__jp">予算に寄り添う、柔軟なプライシング。</p>

      ${cards}

      <div class="pricing__cta">
        <div class="pricing__cta-base"></div>
        <img class="pricing__cta-overlay" src="${assets.pricing.ctaBase}" alt="" />
        <img class="pricing__cta-overlay2" src="${assets.pricing.ctaOverlay}" alt="" />
        <img class="pricing__cta-corner" src="${assets.pricing.ctaCorner}" alt="" />
        <p class="pricing__cta-text">Your vision, your rules.</p>
        <div class="pricing__btn-shadow"></div>
        <div class="pricing__btn-mid"></div>
        <div class="pricing__btn-front"></div>
        <div class="pricing__btn-label-bg"></div>
        <p class="pricing__btn-label">DISCUSS YOUR PROJECT</p>
      </div>
      <img class="pricing__chara pricing__chara--inframe" src="${assets.pricing.character}" alt="" />
      <img class="pricing__chara pricing__chara--loose" src="${assets.pricing.characterLoose}" alt="" />
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
      gsap.fromTo(
        this.query('.pricing__title-wrap'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: this.root, start: 'top 78%', once: true },
        },
      );
      gsap.fromTo(
        this.queryAll('[data-card], [data-card-shadow]'),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: this.root, start: 'top 70%', once: true },
        },
      );
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
