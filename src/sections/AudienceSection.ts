import { Section } from '@/core/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

interface CardSpec {
  cls: string;
  x: number;
  y: number;
  title: string;
  titleLeft: number;
  titleTop: number;
  tagLeft: number;
  tagTop: number;
  tagCls: string;
  tagHtml: string;
  dividerLeft: number;
  dividerW: number;
  body: string;
}

const CARDS: CardSpec[] = [
  {
    cls: 'student',
    x: 91,
    y: 387,
    title: 'STUDENT',
    titleLeft: 14,
    titleTop: 9,
    tagLeft: 475,
    tagTop: 84,
    tagCls: 'jp',
    tagHtml: 'A <b class="c-blue">big idea.</b> A new skill. A place to <b class="c-black">start</b>.',
    dividerLeft: 61,
    dividerW: 670,
    body: "Build a portfolio, explore a personal project, or deepen your understanding through hands-on learning and personalized guidance. Whether you're developing new skills, bringing a class assignment to life, or exploring an idea you've always wanted to try, we'll help you turn every learning opportunity into meaningful progress.",
  },
  {
    cls: 'educator',
    x: 887,
    y: 387,
    title: 'EDUCATOR',
    titleLeft: 18,
    titleTop: 10,
    tagLeft: 497,
    tagTop: 84,
    tagCls: 'semibold',
    tagHtml: 'Make the <b class="c-red">lesson</b> stay with them.',
    dividerLeft: 56,
    dividerW: 675,
    body: "Turn your expertise into interactive learning materials, engaging digital resources, and educational experiences students can connect with. From simplifying complex concepts to creating tools that make teaching more effective, we'll help you bring your ideas into the classroom in ways that inspire curiosity and encourage deeper understanding.",
  },
  {
    cls: 'org',
    x: 91,
    y: 784,
    title: 'ORGANIZATION',
    titleLeft: 13,
    titleTop: 9,
    tagLeft: 482,
    tagTop: 84,
    tagCls: 'semibold',
    tagHtml: 'Small team. Meaningful <b class="c-red">ambitions</b>.',
    dividerLeft: 57,
    dividerW: 674,
    body: "Build a clear digital presence, streamline everyday activities, and create practical tools that help your community move forward. Whether you're growing an initiative, improving your workflow, or connecting with a wider audience, we'll help you shape thoughtful digital solutions around your goals, your people, and the impact you want to make.",
  },
  {
    cls: 'creator',
    x: 887,
    y: 784,
    title: 'CREATOR',
    titleLeft: 18,
    titleTop: 7,
    tagLeft: 490,
    tagTop: 83,
    tagCls: 'jp',
    tagHtml: 'Your <b class="c-blue">imagination</b> needs a launchpad.',
    dividerLeft: 61,
    dividerW: 670,
    body: "Shape an original identity, bring imaginative concepts to life, or build a digital home for your next creative chapter. From distinctive illustrations and visual identities to interactive experiences and digital products, we'll help you explore your ideas, express what makes your work unique, and create something that feels unmistakably yours.",
  },
];

export class AudienceSection extends Section {
  readonly id: SectionId = 'audience';

  render(): void {
    this.root.id = 'audience';
    this.root.className = 'audience';
    this.root.style.height = '1229px';
    const cards = CARDS.map(
      (c) => /* html */ `
      <div class="audience__card audience__card--${c.cls}" data-card>
        <p class="audience__card-title" style="left:${c.titleLeft}px;top:${c.titleTop}px">${c.title}</p>
        <p class="audience__arrow">↗</p>
        <div class="audience__divider" style="left:${c.dividerLeft}px;width:${c.dividerW}px"></div>
        <p class="audience__tag audience__tag--${c.tagCls}" style="left:${c.tagLeft}px;top:${c.tagTop}px">${c.tagHtml}</p>
        <p class="audience__body">${c.body}</p>
      </div>`,
    ).join('');
    this.root.innerHTML = /* html */ `
      <div class="audience__intro">
        <p class="audience__label">03 / WHO we help</p>
        <div class="audience__heading">
          <p>DIFFERENT <b class="c-orange">STARTING</b> POINT</p>
          <p><b class="c-lime">SHARED</b> POSSIBILITY</p>
        </div>
        <div class="audience__supporting">
          <p>You don't need a perfect brief. Just something you care about—and a little curiosity.</p>
        </div>
      </div>
      <img class="audience__cursor" src="${assets.audience.cursor}" alt="" />
      ${cards}
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
      gsap.from(this.query('.audience__intro'), {
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
