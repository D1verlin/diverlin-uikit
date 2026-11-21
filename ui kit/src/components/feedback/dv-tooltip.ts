import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvTooltip extends DvBaseElement {
  static observedAttributes = ['text', 'position'];

  protected static get componentStyles(): string {
    return `
      :host { position: relative; display: inline-flex; }
      .tip {
        position: absolute;
        left: 50%;
        z-index: var(--dv-z-tooltip);
        padding: 5px 9px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-size: var(--dv-text-xs);
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .pos-top {
        bottom: calc(100% + 6px);
        transform: translateX(-50%) translateY(3px);
      }
      .pos-bottom {
        top: calc(100% + 6px);
        transform: translateX(-50%) translateY(-3px);
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text');
    const pos = this.attr('position', 'top');
    this.root.innerHTML = `
      <slot></slot>
      ${text ? `<span class="tip pos-${pos}" role="tooltip">${escapeHtml(text)}</span>` : ''}
    `;
  }
}

defineElement('dv-tooltip', DvTooltip);
