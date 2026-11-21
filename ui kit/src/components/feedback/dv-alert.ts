import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvAlert extends DvBaseElement {
  static observedAttributes = ['variant', 'title', 'dismissible'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .alert {
        display: flex;
        align-items: flex-start;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }

      .icon { flex-shrink: 0; margin-top: 2px; display: inline-flex; }
      .variant-info .icon { color: var(--dv-info); }
      .variant-success .icon { color: var(--dv-success); }
      .variant-warning .icon { color: var(--dv-warning); }
      .variant-danger .icon { color: var(--dv-danger); }

      .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
      .title { font-weight: 600; font-size: var(--dv-text-sm); color: var(--dv-text-primary); }
      .desc { font-size: var(--dv-text-sm); color: var(--dv-text-secondary); line-height: var(--dv-leading-sm); }
      .close {
        background: none;
        border: none;
        padding: 4px;
        color: var(--dv-text-muted);
        cursor: pointer;
        border-radius: var(--dv-radius-xs);
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); }
    `;
  }

  protected render(): void {
    const variant = this.attr('variant', 'info');
    const title = this.attr('title');
    const dismissible = this.boolAttr('dismissible');
    const iconName =
      variant === 'success'
        ? 'check-circle'
        : variant === 'warning'
          ? 'alert-triangle'
          : variant === 'danger'
            ? 'alert-circle'
            : 'info';

    this.root.innerHTML = `
      <div class="alert variant-${variant}" role="alert">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS[iconName]}</svg>
        </span>
        <div class="body">
          ${title ? `<div class="title">${escapeHtml(title)}</div>` : ''}
          <div class="desc"><slot></slot></div>
        </div>
        ${
          dismissible
            ? `<button type="button" class="close" aria-label="Dismiss">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.x}</svg>
              </button>`
            : ''
        }
      </div>
    `;

    this.root.querySelector('.close')?.addEventListener('click', () => {
      this.emit('dv-dismiss');
      this.remove();
    });
  }
}

defineElement('dv-alert', DvAlert);
