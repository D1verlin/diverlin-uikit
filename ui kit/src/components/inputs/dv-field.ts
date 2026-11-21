import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvField extends DvBaseElement {
  static observedAttributes = ['label', 'hint', 'error', 'required'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .field {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .label {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .req { color: var(--dv-danger); }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-muted);
      }
      .error {
        font-size: var(--dv-text-xs);
        color: var(--dv-danger);
      }
    `;
  }

  protected render(): void {
    const label = this.attr('label');
    const hint = this.attr('hint');
    const error = this.attr('error');
    const required = this.boolAttr('required');

    this.root.innerHTML = `
      <div class="field">
        ${
          label
            ? `<label class="label">${escapeHtml(label)}${required ? '<span class="req" aria-hidden="true">*</span>' : ''}</label>`
            : ''
        }
        <slot></slot>
        ${error ? `<div class="error" role="alert">${escapeHtml(error)}</div>` : hint ? `<div class="hint">${escapeHtml(hint)}</div>` : ''}
      </div>
    `;
  }
}

defineElement('dv-field', DvField);
