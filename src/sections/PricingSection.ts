import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

interface TierSpec {
  cls: 'essential' | 'signature' | 'masterpiece' | 'custom';
  colorCls: string;
  jp: string;
  title: string;
  pill: string;
  price: string;
  subtitle: string;
  features: string[];
  bestFor: string;
}

const TIERS: TierSpec[] = [
  {
    cls: 'essential',
    colorCls: 'lime',
    jp: 'エッセンシャル',
    title: 'ESSENTIAL',
    pill: 'SIMPLE & FOCUSED (ENTRY-LEVEL)',
    price: 'FROM IDR 50,000',
    subtitle: 'Quick turnaround & focused scope',
    features: [
      'Single concept direction',
      'Targeted task or study session',
      'Up to 2 revision rounds',
      'Core deliverables & clear handoff',
      'Direct 1-on-1 collaborative chat',
    ],
    bestFor: 'Students, homework help & quick tasks',
  },
  {
    cls: 'signature',
    colorCls: 'blue',
    jp: 'シグネチャー',
    title: 'SIGNATURE',
    pill: 'PERSONALIZED & FLEXIBLE (MID-LEVEL)',
    price: 'FROM IDR 300,000',
    subtitle: 'Medium-scope & bespoke solutions',
    features: [
      'Up to 3 concept directions',
      'Complete landing page or art set',
      'Sprint-based revision rounds',
      'Responsive design & custom motion',
      'Full source files & asset package',
    ],
    bestFor: 'Creators, educators & portfolios',
  },
  {
    cls: 'masterpiece',
    colorCls: 'orange',
    jp: 'マスターピース',
    title: 'MASTERPIECE',
    pill: 'COMPLEX & ADVANCED (FULL SCOPE)',
    price: 'FROM IDR 1,500,000',
    subtitle: 'High-craft & comprehensive systems',
    features: [
      'End-to-end creative & technical direction',
      'Full websites, systems, or prototypes',
      'Priority delivery & dedicated craft',
      'Interactive animations & custom UI',
      'Post-launch support & documentation',
    ],
    bestFor: 'Company websites & game prototypes',
  },
  {
    cls: 'custom',
    colorCls: 'dark',
    jp: 'カスタム',
    title: 'CUSTOM',
    pill: 'BESPOKE PROJECT (TAILORED QUOTE)',
    price: 'QUOTED PER BRIEF',
    subtitle: 'Unlimited scope & custom timeline',
    features: [
      'Fully tailored to your brief & roadmap',
      'Scalable architecture & custom stack',
      'Complex games & full-stack applications',
      'Milestone-based delivery & checks',
      'Ongoing partnership & SLA options',
    ],
    bestFor: 'Organizations & complex web apps',
  },
];

const PRICE_RANGES = [
  { service: 'Tutoring & Academic', range: 'IDR 50K – 250K', unit: 'per session / task' },
  { service: 'Digital Illustration', range: 'IDR 150K – 1.5M+', unit: 'per artwork' },
  { service: 'Websites & Portfolios', range: 'IDR 1M – 7M', unit: 'per project' },
  { service: 'Custom Apps & Games', range: 'IDR 1.5M – 30M+', unit: 'per project' },
];

export class PricingSection extends Section {
  readonly id: SectionId = 'pricing';

  render(): void {
    this.root.id = 'pricing';
    this.root.className = 'pricing';
    this.root.style.height = '1575px';

    const cards = TIERS.map(
      (t) => /* html */ `
      <div class="pricing__card-wrap pricing__card-wrap--${t.cls}">
        <div class="pricing__card-shadow pricing__card-shadow--${t.colorCls}"></div>
        <div class="pricing__card pricing__card--${t.cls}" data-card>
          <div class="pricing__card-head">
            <p class="pricing__jp-tag">${t.jp}</p>
            <h3 class="pricing__tier-name">${t.title}</h3>
            <div class="pricing__tier-pill">${t.pill}</div>
          </div>
          
          <div class="pricing__price-box">
            <span class="pricing__price-label">ESTIMATED STARTING RATE</span>
            <p class="pricing__price-val">${t.price}</p>
            <p class="pricing__price-sub">${t.subtitle}</p>
          </div>

          <div class="pricing__card-divider"></div>

          <p class="pricing__features-title">WHAT'S INCLUDED</p>
          <ul class="pricing__features">
            ${t.features.map((f) => `<li>${f}</li>`).join('')}
          </ul>

          <div class="pricing__card-footer">
            <span class="pricing__best-for"><b>FOR:</b> ${t.bestFor}</span>
          </div>
        </div>
      </div>`,
    ).join('');

    const rangeItems = PRICE_RANGES.map(
      (r) => /* html */ `
      <div class="pricing__range-item">
        <span class="pricing__range-name">${r.service}</span>
        <span class="pricing__range-val">${r.range}</span>
        <span class="pricing__range-unit">${r.unit}</span>
      </div>`,
    ).join('');

    this.root.innerHTML = /* html */ `
      <div class="pricing__banner pricing__banner--1"><img src="${assets.pricing.banner1}" alt="" /></div>
      <div class="pricing__banner pricing__banner--2"><img src="${assets.pricing.banner2}" alt="" /></div>
      <div class="pricing__banner pricing__banner--3"><img src="${assets.pricing.banner3}" alt="" /></div>

      <div class="pricing__header">
        <div class="pricing__title-wrap">
          <p class="pricing__title">PRICING</p>
        </div>
      </div>

      <div class="pricing__cards-grid">
        ${cards}
      </div>

      <!-- Preliminary Service Price Ranges Strip -->
      <div class="pricing__ranges-strip">
        <div class="pricing__ranges-tag">PRICE GUIDE</div>
        <div class="pricing__ranges-items">
          ${rangeItems}
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="pricing__cta">
        <div class="pricing__cta-base"></div>
        <img class="pricing__cta-overlay" src="${assets.pricing.ctaBase}" alt="" />
        <img class="pricing__cta-overlay2" src="${assets.pricing.ctaOverlay}" alt="" />
        <img class="pricing__cta-corner" src="${assets.pricing.ctaCorner}" alt="" />
        <div class="pricing__cta-content">
          <p class="pricing__cta-text"> </p>
          <p class="pricing__cta-text">A conversation.<br />Then a <em>creation</em>.</p>
          <p class="pricing__cta-sub">Got an idea, challenge, or brief? Tell us what you want to make and why it matters.</p>
        </div>
        <a class="pricing__btn-action" href="#footer" data-nav="link" data-target="footer">
          <div class="pricing__btn-shadow"></div>
          <div class="pricing__btn-mid"></div>
          <div class="pricing__btn-front">
            <span class="pricing__btn-text">START A CONVERSATION</span>
            <span class="pricing__btn-arrow">↗</span>
          </div>
        </a>
      </div>
      <img class="pricing__chara pricing__chara--inframe" src="${assets.pricing.character}" alt="" />
      <img class="pricing__chara pricing__chara--loose" src="${assets.pricing.characterLoose}" alt="" />
      <p class="pricing__jp-bottom">予算に寄り添う、柔軟なプライシング。</p>
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
        this.query('.pricing__header'),
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
        this.queryAll('.pricing__card-wrap'),
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
      gsap.fromTo(
        this.query('.pricing__ranges-strip'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: this.root, start: 'top 60%', once: true },
        },
      );
      // Character parallax on scroll ("gerak dikit")
      gsap.to(this.queryAll('.pricing__chara'), {
        y: 50,
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
