import { Section } from '@/core/Section';
import { Navbar } from '@/widgets/Navbar';
import { SocialRail } from '@/widgets/SocialRail';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/utils/assets';
import type { SectionId } from '@/types';

export class HeroSection extends Section {
  readonly id: SectionId = 'hero';
  private navbar?: Navbar;
  private social?: SocialRail;

  render(): void {
    this.root.id = 'hero';
    this.root.className = 'hero';
    this.root.style.top = '0px';
    this.root.style.height = '2234px';
    this.root.innerHTML = /* html */ `
      <div class="hero__bg"></div>

      <img class="hero__deco hero__deco--l1" src="${assets.hero.decoLeft1}" alt="" />
      <img class="hero__deco hero__deco--l2" src="${assets.hero.decoLeft2}" alt="" />
      <img class="hero__deco hero__deco--l3" src="${assets.hero.decoLeft3}" alt="" />

      <p class="hero__impact hero__line" data-hero="line"><span class="hero__im">IM</span><span class="hero__pact">PACT</span></p>
      <p class="hero__into hero__line" data-hero="line">INTO</p>

      <img class="hero__deco hero__deco--r1" src="${assets.hero.decoRight1}" alt="" />
      <img class="hero__deco hero__deco--r2" src="${assets.hero.decoRight2}" alt="" />

      <div class="hero__marquee">
        <div class="hero__marquee-clip">
          <div class="hero__marquee-track" data-marquee="track">
            <span>BRANDING <i>✦</i> GRAPHIC DESIGN <i>✦</i> WEB DESIGN <i>✦</i> DIGITAL MARKETING <i>✦</i></span>
            <span>BRANDING <i>✦</i> GRAPHIC DESIGN <i>✦</i> WEB DESIGN <i>✦</i> DIGITAL MARKETING <i>✦</i></span>
            <span>BRANDING <i>✦</i> GRAPHIC DESIGN <i>✦</i> WEB DESIGN <i>✦</i> DIGITAL MARKETING <i>✦</i></span>
            <span>BRANDING <i>✦</i> GRAPHIC DESIGN <i>✦</i> WEB DESIGN <i>✦</i> DIGITAL MARKETING <i>✦</i></span>
          </div>
        </div>
      </div>

      <img class="hero__dark-shape" src="${assets.hero.darkShape}" alt="" />

      <p class="hero__learn">Learn with purpose → Create with imagination → Build with technology. Better together, from the start.</p>

      <div class="hero__pov">
        <div class="hero__chapter">
          <p class="hero__chapter-label">01 / What we do</p>
          <p class="hero__chapter-desc">Ideas deserve to become something real.</p>
        </div>
        <p class="hero__statement">From an <b>unfinished idea</b> to a finished experience, <b>Scripta</b> creates work that</p>
      </div>
      <p class="hero__statement hero__statement--2">is useful, thoughtful, and made to <b>move forward</b>.</p>

      <div class="hero__bar hero__bar--orange"></div>
      <div class="hero__dot"></div>

      <div class="hero__card hero__card--purple">
        <div class="hero__card-body">
          <p class="hero__card-title">Education</p>
          <p class="hero__card-copy">Online tutoring, academic support, and learning materials that make hard things click.</p>
          <div class="hero__card-extra">
            <div class="hero__card-tags">
              <span>TUTORING</span>
              <span>ACADEMIC</span>
              <span>MENTORING</span>
            </div>

          </div>
        </div>
      </div>
      <div class="hero__card hero__card--lime">
        <div class="hero__card-body">
          <p class="hero__card-title">Creativity</p>
          <p class="hero__card-copy">Digital illustration, character art, and visual identities with real personality.</p>
          <div class="hero__card-extra">
            <div class="hero__card-tags">
              <span>ILLUSTRATION</span>
              <span>CHARACTER ART</span>
              <span>BRANDING</span>
            </div>

          </div>
        </div>
      </div>
      <div class="hero__card hero__card--pink">
        <div class="hero__card-body">
          <p class="hero__card-title">Technology</p>
          <p class="hero__card-copy">Websites, apps, and games built to work beautifully and move ideas forward.</p>
          <div class="hero__card-extra">
            <div class="hero__card-tags">
              <span>WEBSITES</span>
              <span>APPS</span>
              <span>GAMES</span>
            </div>

          </div>
        </div>
      </div>

      <div class="hero__character" data-hero="character">
        <img src="${assets.hero.character}" alt="Scripta character" />
      </div>

      <p class="hero__to" aria-hidden="true">TO</p>
      <p class="hero__t" aria-hidden="true">T</p>
      <p class="hero__ideas hero__line" data-hero="line">IDEAS</p>
      <p class="hero__jp hero__line" data-hero="line">想いをカタチに。</p>
      <div class="hero__white-bar" data-hero="bar"></div>

      <nav class="nav" data-widget="navbar">
        <img class="nav__logo" src="${assets.hero.logo}" alt="" />
        <p class="nav__wordmark">SCRIPTA</p>
        <div class="nav__links">
          <a class="nav__link is-active" data-nav="link" data-target="hero" href="#hero">HOME</a>
          <a class="nav__link" data-nav="link" data-target="services" href="#services">ABOUT US</a>
          <a class="nav__link" data-nav="link" data-target="audience" href="#audience">OUR SERVICES</a>
          <a class="nav__link" data-nav="link" data-target="process" href="#process">PORTFOLIO</a>
          <a class="nav__link is-dark" data-nav="link" data-target="faq" href="#faq"><span class="nav__link-light">PA</span>GES</a>
          <a class="nav__link is-dark" data-nav="link" data-target="pricing" href="#pricing">CONTACT US</a>
        </div>
        <div class="nav__underline" data-nav="underline"></div>
        <button class="nav__cta" type="button">Start a Project</button>
      </nav>

      <div class="hero__bar hero__bar--white" data-hero="rail"></div>
      <div class="hero__bar hero__bar--thin-dark"></div>
      <div class="hero__bar hero__bar--thin-black"></div>
      <div class="hero__bar hero__bar--lime" data-hero="rail"></div>
      <div class="hero__bar hero__bar--purple"></div>

      <img class="hero__card-img hero__card-img--code" src="${assets.hero.cardCode}" alt="" />
      <img class="hero__card-img hero__card-img--ruler" src="${assets.hero.cardRuler}" alt="" />
      <img class="hero__card-img hero__card-img--book" src="${assets.hero.cardBook}" alt="" />

      <div class="social" data-widget="social">
        <a class="social__icon" data-social="icon" href="#" aria-label="Figma"><img src="${assets.icons.figma}" alt="" /></a>
        <a class="social__icon social__icon--github" data-social="icon" href="#" aria-label="Github"><img src="${assets.hero.iconGithub}" alt="" /></a>
        <a class="social__icon social__icon--instagram" data-social="icon" href="#" aria-label="Instagram"><img src="${assets.icons.instagram}" alt="" /></a>
        <a class="social__icon social__icon--twitch" data-social="icon" href="#" aria-label="Twitch"><img src="${assets.icons.twitch}" alt="" /></a>
        <a class="social__icon social__icon--twitter" data-social="icon" href="#" aria-label="Twitter"><img src="${assets.icons.twitter}" alt="" /></a>
      </div>
    `;
  }

  init(): void {
    const navEl = this.query<HTMLElement>('[data-widget="navbar"]');
    const socialEl = this.query<HTMLElement>('[data-widget="social"]');
    this.navbar = new Navbar(navEl, []);
    this.navbar.init();
    this.social = new SocialRail(socialEl);
    this.social.init();

    this.gsapCtx = gsap.context(() => {
      // A1-A3 hero load choreography
      const lines = this.queryAll('[data-hero="line"]');
      gsap.from(lines, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
      });
      const charImg = this.query('[data-hero="character"] img');
      gsap.fromTo(
        charImg,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
      );
      const bar = this.query('[data-hero="bar"]');
      gsap.from(bar, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        ease: 'power2.out',
      });

      // A6 character parallax - subtle smooth parallax ("gerak dikit")
      gsap.to(this.query('[data-hero="character"]'), {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: this.root,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // A7 left rails grow with scroll
      this.queryAll('[data-hero="rail"]').forEach((rail, i) => {
        gsap.fromTo(
          rail,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: this.root,
              start: 'top top',
              end: '50% top',
              scrub: 0.5,
            },
            delay: i * 0.1,
          },
        );
      });

      // A5 marquee infinite loop
      const track = this.query('[data-marquee="track"]');
      const half = track.scrollWidth / 4;
      gsap.to(track, {
        x: -half,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    });
    ScrollTrigger.refresh();
  }

  reveal(): void {
    // hero load animations already play on init; nothing extra on scroll enter
  }

  destroy(): void {
    this.navbar?.destroy();
    this.social?.destroy();
    this.killGsap();
  }
}
