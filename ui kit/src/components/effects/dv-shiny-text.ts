import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvShinyText extends DvBaseElement {
  static observedAttributes = ['text', 'speed'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .shiny {
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        background: linear-gradient(
          110deg,
          var(--dv-text-muted) 25%,
          var(--dv-text-primary) 50%,
          var(--dv-text-muted) 75%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: dv-shine var(--_spd, 3s) linear infinite;
      }
      @keyframes dv-shine {
        from { background-position: 100% 0; }
        to { background-position: -100% 0; }
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text', 'Хромированный тональный блик');
    const speed = Math.max(1, this.numAttr('speed', 3));
    this.root.innerHTML = `<span class="shiny" style="--_spd:${speed}s">${escapeHtml(text)}</span>`;
  }
}

defineElement('dv-shiny-text', DvShinyText);
