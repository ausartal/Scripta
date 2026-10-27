import { Component } from '@/core/Component';
import type { SectionId } from '@/types';

/**
 * A full-bleed vertical band of the one-page site (maps 1:1 to a Figma frame).
 * Creates its own <section> root under the given parent.
 */
export abstract class Section extends Component {
  abstract readonly id: SectionId;

  constructor(parent: HTMLElement) {
    super(document.createElement('section'));
    parent.appendChild(this.root);
    this.root.style.cssText = 'position:absolute;left:0;width:1728px;';
  }

  abstract render(): void;

  /** ScrollTrigger-driven entrance, wired during init(). */
  abstract reveal(): void;

  get top(): number {
    return this.root.offsetTop;
  }

  get height(): number {
    return this.root.offsetHeight;
  }
}
