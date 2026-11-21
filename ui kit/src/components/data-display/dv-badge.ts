import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvBadge extends DvBaseElement {
  static observedAttributes = ['variant', 'size'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-1);
        font-family: var(--dv-font-sans);
        font-weight: 500;
        font-variant-numeric: tabular-nums;
        border-radius: var(--dv-radius-xs);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        white-space: nowrap;
        line-height: 1;
      }
      .size-sm { padding: 4px 8px; font-size: var(--dv-text-xs); }
      .size-md { padding: 6px 11px; font-size: var(--dv-text-sm); }

      .variant-accent {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-success { color: var(--dv-success); }
      .variant-warning { color: var(--dv-warning); }
      .variant-danger { color: var(--dv-danger); }
      .variant-info { color: var(--dv-info); }
    `;
  }

  protected render(): void {
    const variant = this.attr('variant', 'neutral');
    const size = this.attr('size', 'sm');
    this.root.innerHTML = `<span class="badge variant-${variant} size-${size}"><slot></slot></span>`;
  }
}

defineElement('dv-badge', DvBadge);
