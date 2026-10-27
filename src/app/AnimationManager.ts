import gsap from 'gsap';

/**
 * Registry for every gsap.Context created by components, so the whole
 * animation layer can be torn down in one call.
 */
export class AnimationManager {
  static readonly defaults = {
    ease: 'power3.out',
    duration: 0.8,
  };

  private contexts: gsap.Context[] = [];

  register(ctx: gsap.Context): void {
    this.contexts.push(ctx);
  }

  killAll(): void {
    this.contexts.forEach((ctx) => ctx.revert());
    this.contexts = [];
  }
}

export { gsap };
