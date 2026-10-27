import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

export class ProcessSection extends Section {
  readonly id: SectionId = 'process';

  render(): void {
    this.root.id = 'process';
    this.root.className = 'process';
    this.root.style.top = '4580px';
    this.root.style.height = '1228px';
    this.root.style.background = '#252525';
    this.root.innerHTML = /* html */ `
      <img class="process__shape process__shape--1" src="${assets.process.shape1}" alt="" />
      <img class="process__shape process__shape--2" src="${assets.process.shape2}" alt="" />
      <img class="process__shape process__shape--3" src="${assets.process.shape3}" alt="" />
      <img class="process__shape process__shape--4" src="${assets.process.shape4}" alt="" />
      <img class="process__shape process__shape--5" src="${assets.process.shape5}" alt="" />
      <img class="process__character" src="${assets.process.character}" alt="" />
      <img class="process__flag" src="${assets.process.flag}" alt="" />

      <p class="process__label">04 / How it works</p>
      <p class="process__heading" data-process="title">A conversation. Then a <b>creation</b>.</p>
      <p class="process__copy">A clear process, a shared direction, and no disappearing acts. We build with you, not just for you.</p>

      <div class="process__card process__card--1" data-process="step">
        <div class="process__card-bg"></div>
        <p class="process__step-title">Tell Us Your Idea</p>
        <p class="process__step-p1">A rough sketch, a question, a "what if." We listen to what you want to make and why it matters.</p>
        <p class="process__step-p2">Every great project starts with a conversation. Share your thoughts, references, challenges, or even an idea that hasn't fully taken shape. </p>
      </div>
      <div class="process__tile process__tile--1" data-process="tile">
        <div class="process__tile-bg"></div>
        <img class="process__tile-icon process__tile-icon--1" src="${assets.process.iconMessage}" alt="" />
      </div>
      <p class="process__num process__num--1" data-process="num"><span>01</span></p>

      <div class="process__card process__card--2" data-process="step">
        <div class="process__card-bg"></div>
        <p class="process__step-title">We Plan Together</p>
        <div class="process__step-body">
          <p>We agree on the scope, timeline, and next steps. Clear expectations, with room for your input.</p>
          <p>&nbsp;</p>
          <p>Together, we turn your ideas into a practical plan. We define what needs to be done, discuss the details, and establish a shared vision before moving forward. </p>
        </div>
      </div>
      <div class="process__tile process__tile--2" data-process="tile">
        <div class="process__tile-bg"></div>
        <img class="process__tile-icon process__tile-icon--2" src="${assets.process.iconMap}" alt="" />
      </div>
      <p class="process__num process__num--2" data-process="num"><span>02</span></p>

      <div class="process__card process__card--3" data-process="step">
        <div class="process__card-bg"></div>
        <p class="process__step-title">We Create It</p>
        <p class="process__step-p1">We design, build, and refine with you. Regular check-ins keep the work—and the conversation—moving.</p>
        <p class="process__step-p2">This is where the plan becomes something real. We bring your ideas to life, share progress along the way, and refine the details through your feedback. From the first draft to the final deliver.</p>
      </div>
      <div class="process__tile process__tile--3" data-process="tile">
        <div class="process__tile-bg"></div>
        <img class="process__tile-icon process__tile-icon--3" src="${assets.process.iconPencil}" alt="" />
      </div>
      <p class="process__num process__num--3" data-process="num"><span>03</span></p>
    `;
  }

  init(): void {
    this.gsapCtx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, this.root);
  }

  reveal(): void {
    const ctx = this.gsapCtx;
    if (!ctx) return;
    ctx.add(() => {
      const title = this.query('[data-process="title"]');
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

      const steps = this.queryAll('[data-process="step"]');
      gsap.from(steps, {
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

      const tiles = [...this.queryAll('[data-process="tile"]'), ...this.queryAll('[data-process="num"]')];
      gsap.from(tiles, {
        x: -40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: this.root,
          start: 'top 78%',
          once: true,
        },
      });
    });
  }

  destroy(): void {
    this.killGsap();
    this.removeListeners();
  }
}
