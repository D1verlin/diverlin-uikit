import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvProgress extends DvBaseElement {
  static observedAttributes = ['value', 'max', 'label', 'show-value'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .wrap {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .pct {
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
        font-weight: 500;
      }
      .track {
        width: 100%;
        height: 8px;
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-xs);
        overflow: hidden;
      }
      .fill {
        height: 100%;
        background: var(--dv-accent);
        transform-origin: left center;
        transition: transform var(--dv-duration-base) var(--dv-ease);
      }
    `;
  }

  protected render(): void {
    const max = Math.max(1, this.numAttr('max', 100));
    const value = Math.min(max, Math.max(0, this.numAttr('value', 0)));
    const pct = Math.round((value / max) * 100);
    const label = this.attr('label');
    const showValue = this.boolAttr('show-value');

    this.root.innerHTML = `
      <div class="wrap">
        ${
          label || showValue
            ? `<div class="header">
                <span>${escapeHtml(label)}</span>
                ${showValue ? `<span class="pct">${pct}%</span>` : ''}
              </div>`
            : ''
        }
        <div class="track" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${max}">
          <div class="fill" style="transform: scaleX(${value / max})"></div>
        </div>
      </div>
    `;
  }
}

defineElement('dv-progress', DvProgress);
