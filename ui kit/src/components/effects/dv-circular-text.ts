import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvCircularText extends DvBaseElement {
  static observedAttributes = ['text', 'radius', 'speed'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; align-items: center; justify-content: center; }
      .ring {
        position: relative;
        width: calc(var(--_r, 64px) * 2 + 28px);
        height: calc(var(--_r, 64px) * 2 + 28px);
        border-radius: 50%;
        animation: dv-ring-spin var(--_spd, 14s) linear infinite;
        cursor: pointer;
        user-select: none;
      }
      .ring:hover {
        animation-duration: calc(var(--_spd, 14s) * 0.45);
      }
      .ch {
        position: absolute;
        left: 50%;
        top: 50%;
        font-family: var(--dv-font-mono);
        font-size: 12px;
        font-weight: 600;
        color: var(--dv-text-primary);
        transform-origin: 0 0;
      }
      @keyframes dv-ring-spin {
        to { transform: rotate(360deg); }
      }
    `;
  }

  protected render(): void {
    const raw = this.attr('text', 'DIVERLIN UI KIT • WEB COMPONENTS • ');
    const text = raw.endsWith(' ') ? raw : `${raw} • `;
    const radius = this.numAttr('radius', 62);
    const speed = Math.max(4, this.numAttr('speed', 14));
    const chars = Array.from(text);
    const stepDeg = 360 / Math.max(1, chars.length);

    this.root.innerHTML = `
      <div class="ring" style="--_r:${radius}px;--_spd:${speed}s" aria-label="${escapeHtml(raw)}">
        ${chars
          .map((ch, i) => {
            const angle = (i * stepDeg).toFixed(2);
            return `<span class="ch" style="transform: rotate(${angle}deg) translateY(-${radius}px) translateX(-50%)" aria-hidden="true">${escapeHtml(ch)}</span>`;
          })
          .join('')}
      </div>
    `;
  }
}

defineElement('dv-circular-text', DvCircularText);
