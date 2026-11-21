import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvCarousel extends DvBaseElement {
  static observedAttributes = ['gap', 'step'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .wrap { position: relative; display: flex; flex-direction: column; gap: var(--dv-space-3); }
      .viewport {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        gap: var(--_gap, 16px);
        padding-bottom: 4px;
      }
      ::slotted(*) {
        flex-shrink: 0;
        scroll-snap-align: start;
      }
      .controls {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .nav-btn {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .nav-btn:hover { background: var(--dv-surface-hover); }
      .nav-btn:active { transform: scale(0.94); }
      .nav-btn:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `;
  }

  protected render(): void {
    const gapRaw = this.attr('gap', '4');
    const gap = /^\d+$/.test(gapRaw) ? `var(--dv-space-${gapRaw})` : gapRaw;
    const step = this.numAttr('step', 280);

    this.root.innerHTML = `
      <div class="wrap" style="--_gap:${gap}">
        <div class="viewport"><slot></slot></div>
        <div class="controls">
          <button type="button" class="nav-btn prev" aria-label="Назад">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-left']}</svg>
          </button>
          <button type="button" class="nav-btn next" aria-label="Вперёд">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-right']}</svg>
          </button>
        </div>
      </div>
    `;

    const vp = this.root.querySelector<HTMLElement>('.viewport')!;
    this.root.querySelector('.prev')?.addEventListener('click', () => {
      vp.scrollBy({ left: -step, behavior: 'smooth' });
    });
    this.root.querySelector('.next')?.addEventListener('click', () => {
      vp.scrollBy({ left: step, behavior: 'smooth' });
    });
  }
}

defineElement('dv-carousel', DvCarousel);
