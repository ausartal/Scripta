/** Keeps the 1728px stage proportional on viewports and dynamically scales stage height. */
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

    const stage = document.getElementById('stage');
    if (stage) {
      let totalH = 0;
      const sections = stage.querySelectorAll('section');
      sections.forEach((sec) => {
        totalH += (sec as HTMLElement).offsetHeight;
      });
      if (totalH > 0) {
        root.style.setProperty('--stage-h', `${totalH}px`);
      }
    }

    window.dispatchEvent(new CustomEvent('stage:rescale', { detail: { scale } }));
  };

  start(): void {
    this.apply();
    this.observer = new ResizeObserver(this.apply);
    this.observer.observe(document.documentElement);
    const stage = document.getElementById('stage');
    if (stage) {
      this.observer.observe(stage);
    }
    window.addEventListener('resize', this.apply);
  }

  destroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('resize', this.apply);
  }
}
