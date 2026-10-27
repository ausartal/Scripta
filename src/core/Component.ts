import { gsap } from 'gsap';
import { $, $$ } from '@/utils/dom';

/**
 * Abstract base for every stateful UI piece. Owns a DOM root, a GSAP
 * context (for painless teardown) and an init/destroy lifecycle.
 */
export abstract class Component {
  protected readonly root: HTMLElement;
  protected gsapCtx?: ReturnType<typeof gsap.context>;
  private listeners: Array<() => void> = [];

  constructor(root: HTMLElement) {
    this.root = root;
  }

  abstract init(): void;
  abstract destroy(): void;

  protected query<T extends HTMLElement = HTMLElement>(sel: string): T {
    return $<T>(this.root, sel);
  }

  protected queryAll<T extends HTMLElement = HTMLElement>(sel: string): T[] {
    return $$<T>(this.root, sel);
  }

  protected on(
    target: HTMLElement | Window | Document,
    type: string,
    handler: (ev: Event) => void,
    options?: AddEventListenerOptions,
  ): void {
    target.addEventListener(type, handler, options);
    this.listeners.push(() => target.removeEventListener(type, handler, options));
  }

  protected removeListeners(): void {
    this.listeners.forEach((off) => off());
    this.listeners = [];
  }

  protected killGsap(): void {
    this.gsapCtx?.revert();
    this.gsapCtx = undefined;
  }
}
