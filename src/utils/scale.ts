/** Keeps the 1728px stage proportional on smaller viewports. */
export class StageScaler {
  private readonly stageW = 1728;
  private observer?: ResizeObserver;

  apply = (): void => {
    const vw = window.innerWidth;
    const scale = vw / this.stageW;
    const left = 0;
    const root = document.documentElement;
    root.style.setProperty('--stage-scale', String(scale));
    root.style.setProperty('--stage-left', `${left}px`);
    window.dispatchEvent(new CustomEvent('stage:rescale', { detail: { scale } }));
  };

  start(): void {
    this.apply();
    this.observer = new ResizeObserver(this.apply);
    this.observer.observe(document.documentElement);
    window.addEventListener('resize', this.apply);
  }

  destroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('resize', this.apply);
  }
}
