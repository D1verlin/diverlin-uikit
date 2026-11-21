import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvButton extends DvBaseElement {
  static observedAttributes = ['variant', 'size', 'disabled', 'loading', 'full', 'type'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      :host([full]) { display: flex; width: 100%; }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--dv-space-2);
        width: 100%;
        font-family: var(--dv-font-sans);
        font-weight: 500;
        border-radius: var(--dv-radius-sm);
        border: none;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
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

      .size-sm { height: 32px; padding: 0 12px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 16px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 20px; font-size: var(--dv-text-body); }

      .variant-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-primary:hover:not(:disabled) {
        background: var(--dv-accent-hover);
      }

      .variant-secondary {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-secondary:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }

      .variant-ghost {
        background: transparent;
        color: var(--dv-text-secondary);
      }
      .variant-ghost:hover:not(:disabled) {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }

      .variant-danger {
        background: var(--dv-surface);
        color: var(--dv-danger);
      }
      .variant-danger:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }

      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: dv-spin 0.65s linear infinite;
      }

      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `;
  }

  protected render(): void {
    const variant = this.attr('variant', 'primary');
    const size = this.attr('size', 'md');
    const disabled = this.boolAttr('disabled') || this.boolAttr('loading');
    const loading = this.boolAttr('loading');
    const type = this.attr('type', 'button');

    this.root.innerHTML = `
      <button
        type="${type}"
        class="size-${size} variant-${variant}"
        ${disabled ? 'disabled' : ''}
        aria-busy="${loading}"
      >
        ${loading ? '<span class="spinner" aria-hidden="true"></span>' : ''}
        <slot></slot>
      </button>
    `;
  }
}

defineElement('dv-button', DvButton);
