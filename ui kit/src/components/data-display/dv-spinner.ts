import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvSpinner extends DvBaseElement {
  static observedAttributes = ['size', 'label'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; align-items: center; gap: var(--dv-space-2); }
      .spinner {
        border-radius: 50%;
        border: 2px solid var(--dv-border);
        border-top-color: var(--dv-text-primary);
        animation: dv-spin 0.65s linear infinite;
        flex-shrink: 0;
      }
      .size-sm { width: 14px; height: 14px; }
      .size-md { width: 20px; height: 20px; }
      .size-lg { width: 28px; height: 28px; border-width: 2.5px; }
      .label { font-size: var(--dv-text-sm); color: var(--dv-text-secondary); }
      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `;
  }

  protected render(): void {
    const size = this.attr('size', 'md');
    const label = this.attr('label');
    this.root.innerHTML = `
      <span class="spinner size-${size}" role="status" aria-label="${escapeHtml(label || 'Loading')}"></span>
      ${label ? `<span class="label">${escapeHtml(label)}</span>` : ''}
    `;
  }
}

defineElement('dv-spinner', DvSpinner);
