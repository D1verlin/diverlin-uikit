import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvScrollVelocity extends DvBaseElement {
  static observedAttributes = ['text', 'speed'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; overflow: hidden; }
      .stack {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
        user-select: none;
      }
      .row {
        display: flex;
        overflow: hidden;
        gap: var(--dv-space-6);
      }
      .track {
        display: flex;
        gap: var(--dv-space-6);
        flex-shrink: 0;
        min-width: 100%;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
        white-space: nowrap;
        animation: dv-vel-scroll var(--_spd, 16s) linear infinite;
      }
      .row.reverse .track {
        animation-direction: reverse;
        color: var(--dv-text-muted);
      }
      .stack:hover .track {
        animation-duration: calc(var(--_spd, 16s) * 0.45);
      }
      @keyframes dv-vel-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - var(--dv-space-6))); }
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text', 'DIVERLIN DESIGN SYSTEM • ZERO RUNTIME •');
    const speed = Math.max(4, this.numAttr('speed', 16));
    const chunk = `<span>${escapeHtml(text)}</span><span>${escapeHtml(text)}</span>`;

    this.root.innerHTML = `
      <div class="stack" style="--_spd:${speed}s">
        <div class="row">
          <div class="track">${chunk}</div>
          <div class="track" aria-hidden="true">${chunk}</div>
        </div>
        <div class="row reverse">
          <div class="track">${chunk}</div>
          <div class="track" aria-hidden="true">${chunk}</div>
        </div>
      </div>
    `;
  }
}

defineElement('dv-scroll-velocity', DvScrollVelocity);
