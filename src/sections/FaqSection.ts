import { Section } from '@/core/Section';
import { Accordion } from '@/widgets/Accordion';
import { ScrollProgressBar } from '@/widgets/ScrollProgressBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

export class FaqSection extends Section {
  readonly id: SectionId = 'faq';
  private accordion?: Accordion;
  private bar?: ScrollProgressBar;

  render(): void {
    this.root.id = 'faq';
    this.root.className = 'faq';
    this.root.style.minHeight = '1117px';
    this.root.style.height = 'auto';
    this.root.style.background = '#e1e1e1';
    this.root.innerHTML = /* html */ `
      <img class="faq__banner" src="${assets.faq.banner1}" alt="" />
      <img class="faq__banner" src="${assets.faq.banner2}" alt="" />
      <img class="faq__banner" src="${assets.faq.banner3}" alt="" />

      <div class="faq__title-box">
        <p class="faq__title" data-faq="title">FAQ</p>
      </div>

      <div class="faq__rail" data-widget="scrollbar">
        <div class="scrollbar scrollbar--track"></div>
        <div class="scrollbar scrollbar--fill" data-bar="fill"></div>
        <div class="scrollbar scrollbar--dot" data-bar="dot"></div>
      </div>

      <div class="faq__acc" data-widget="accordion">
        <div class="acc__row acc__row--1">
          <div class="acc__card">
            <div class="acc__header" data-acc="header">
              <p class="acc__q">What is Scripta?</p>
              <span class="acc__icon" data-acc="icon">+</span>
            </div>
            <div class="acc__panel" data-acc="panel">
              <p>Scripta is a creative technology and education service platform that helps turn ideas into real outcomes through academic, digital, and creative services. We partner collaboratively with students, educators, organizations, and creators.</p>
            </div>
          </div>
        </div>

        <div class="acc__row acc__row--2">
          <div class="acc__card">
            <div class="acc__header" data-acc="header">
              <p class="acc__q">What services does Scripta offer?</p>
              <span class="acc__icon" data-acc="icon">+</span>
            </div>
            <div class="acc__panel" data-acc="panel">
              <p>We work across three core domains: <b>Education</b> (online tutoring, academic learning assistance, homework clarity), <b>Technology</b> (website development, web apps, software, game development), and <b>Creativity</b> (digital illustration, character art, visual identity).</p>
            </div>
          </div>
        </div>

        <div class="acc__row acc__row--3">
          <div class="acc__card">
            <div class="acc__header" data-acc="header">
              <p class="acc__q">How can I order a service?</p>
              <span class="acc__icon" data-acc="icon">+</span>
            </div>
            <div class="acc__panel" data-acc="panel">
              <p>Every great project starts with a conversation. Simply tell us what you want to make, share your rough sketches, questions, or references, and we will plan the scope, timeline, and next steps together before any work begins.</p>
            </div>
          </div>
        </div>

        <div class="acc__row acc__row--4">
          <div class="acc__card">
            <div class="acc__header" data-acc="header">
              <p class="acc__q">How much do your services cost?</p>
              <span class="acc__icon" data-acc="icon">+</span>
            </div>
            <div class="acc__panel" data-acc="panel">
              <p>Pricing is flexible and tailored to project scope and budget. Packages start from IDR 50,000 for focused academic/tutoring sessions, IDR 300,000 for mid-level creative projects, IDR 1,500,000 for full platforms, up to custom quotes for complex software. Contact us for a personalized quote.</p>
            </div>
          </div>
        </div>

        <div class="acc__row acc__row--5">
          <div class="acc__card">
            <div class="acc__header" data-acc="header">
              <p class="acc__q">Can I request revisions?</p>
              <span class="acc__icon" data-acc="icon">+</span>
            </div>
            <div class="acc__panel" data-acc="panel">
              <p>Yes! Revisions and regular check-ins are built into every project so the final work completely matches your vision, standards, and expectations.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init(): void {
    const accEl = this.query<HTMLElement>('[data-widget="accordion"]');
    this.accordion = new Accordion(accEl);
    this.accordion.init();

    const barEl = this.query<HTMLElement>('[data-widget="scrollbar"]');
    this.bar = new ScrollProgressBar(barEl);
    this.bar.init();

    this.gsapCtx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, this.root);
  }

  reveal(): void {
    const ctx = this.gsapCtx;
    if (!ctx) return;
    ctx.add(() => {
      const title = this.query('[data-faq="title"]');
      gsap.from(title, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.root,
          start: 'top 78%',
          once: true,
        },
      });

      const rows = this.queryAll('[data-acc="header"]');
      gsap.from(rows, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.root,
          start: 'top 78%',
          once: true,
        },
      });
    });
  }

  destroy(): void {
    this.accordion?.destroy();
    this.bar?.destroy();
    this.killGsap();
    this.removeListeners();
  }
}
