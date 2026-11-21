import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvMarquee extends DvBaseElement {
  static observedAttributes = ['items', 'speed', 'direction', 'pause-on-hover'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; overflow: hidden; }
      .marquee {
        display: flex;
        overflow: hidden;
        width: 100%;
        gap: var(--dv-space-3);
      }
      .track {
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        flex-shrink: 0;
        min-width: 100%;
        animation: dv-marquee-scroll var(--_dur, 18s) linear infinite;
      }
      .dir-right .track {
        animation-direction: reverse;
      }
      .pause:hover .track {
        animation-play-state: paused;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        white-space: nowrap;
      }
      @keyframes dv-marquee-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - var(--dv-space-3))); }
      }
    `;
  }

  private getItems(): string[] {
    try {
      const parsed = JSON.parse(this.attr('items', '["Web Components","Pure CSS","Onest","Dela Gothic One","Zero Runtime Deps","Borderless UI"]'));
      return Array.isArray(parsed) && parsed.length ? parsed.map(String) : ['Diverlin UI'];
    } catch {
      return ['Diverlin UI'];
    }
  }

  protected render(): void {
    const items = this.getItems();
    const speed = Math.max(5, this.numAttr('speed', 16));
    const direction = this.attr('direction', 'left');
    const pause = this.hasAttribute('pause-on-hover') ? this.boolAttr('pause-on-hover') : true;

    const pills = items.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join('');

    this.root.innerHTML = `
      <div class="marquee dir-${direction} ${pause ? 'pause' : ''}" style="--_dur:${speed}s">
        <div class="track">${pills}</div>
        <div class="track" aria-hidden="true">${pills}</div>
      </div>
    `;
  }
}

defineElement('dv-marquee', DvMarquee);
