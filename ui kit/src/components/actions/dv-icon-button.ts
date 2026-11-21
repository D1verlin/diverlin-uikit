import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvIconButton extends DvBaseElement {
  static observedAttributes = ['icon', 'label', 'variant', 'size', 'disabled'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--dv-radius-sm);
        border: none;
        cursor: pointer;
        background: transparent;
        color: var(--dv-text-secondary);
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      button:active:not(:disabled) {
        transform: translateY(1px);
      }
      button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .size-sm { width: 30px; height: 30px; }
      .size-md { width: 36px; height: 36px; }
      .size-lg { width: 42px; height: 42px; }

      .variant-secondary {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-secondary:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }
      .variant-ghost:hover:not(:disabled) {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-primary:hover:not(:disabled) {
        background: var(--dv-accent-hover);
      }
    `;
  }

  protected render(): void {
    const icon = this.attr('icon');
    const label = this.attr('label', icon || 'Action');
    const variant = this.attr('variant', 'secondary');
    const size = this.attr('size', 'md');
    const disabled = this.boolAttr('disabled');
    const iconSize = size === 'sm' ? 15 : size === 'lg' ? 20 : 17;
    const svgInner = DV_ICONS[icon];

    this.root.innerHTML = `
      <button
        type="button"
        class="size-${size} variant-${variant}"
        aria-label="${escapeHtml(label)}"
        title="${escapeHtml(label)}"
        ${disabled ? 'disabled' : ''}
      >
        ${
          svgInner
            ? `<svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svgInner}</svg>`
            : '<slot></slot>'
        }
      </button>
    `;
  }
}

defineElement('dv-icon-button', DvIconButton);
