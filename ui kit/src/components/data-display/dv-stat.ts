import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvStat extends DvBaseElement {
  static observedAttributes = ['label', 'value', 'delta', 'trend', 'hint'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .stat {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-1);
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      .label {
        font-size: var(--dv-text-xs);
        font-weight: 500;
        color: var(--dv-text-muted);
      }
      .row {
        display: flex;
        align-items: baseline;
        gap: var(--dv-space-3);
        flex-wrap: wrap;
      }
      .value {
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-h2);
        font-weight: 700;
        line-height: 1.15;
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
      }
      .delta {
        font-size: var(--dv-text-xs);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .trend-up { color: var(--dv-success); }
      .trend-down { color: var(--dv-danger); }
      .trend-neutral { color: var(--dv-text-muted); }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-secondary);
      }
    `;
  }

  protected render(): void {
    const label = this.attr('label', '');
    const value = this.attr('value', '0');
    const delta = this.attr('delta', '');
    const trend = this.attr('trend', 'neutral');
    const hint = this.attr('hint', '');

    this.root.innerHTML = `
      <div class="stat">
        ${label ? `<div class="label">${escapeHtml(label)}</div>` : ''}
        <div class="row">
          <span class="value">${escapeHtml(value)}</span>
          ${delta ? `<span class="delta trend-${trend}">${escapeHtml(delta)}</span>` : ''}
        </div>
        ${hint ? `<div class="hint">${escapeHtml(hint)}</div>` : ''}
      </div>
    `;
  }
}

defineElement('dv-stat', DvStat);
