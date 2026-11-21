import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvModal extends DvBaseElement {
  static observedAttributes = ['open', 'title', 'size'];

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.boolAttr('open')) {
      this.close();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.55);
        display: none;
        align-items: center;
        justify-content: center;
        padding: var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-lg);
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
        max-height: 90dvh;
        animation: dv-modal-in var(--dv-duration-base) var(--dv-ease);
      }
      .size-sm { max-width: 400px; }
      .size-md { max-width: 540px; }
      .size-lg { max-width: 720px; }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-5) var(--dv-space-5) var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
        margin: 0;
      }
      .close {
        background: transparent;
        border: none;
        border-radius: var(--dv-radius-xs);
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      .close:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .body {
        padding: var(--dv-space-3) var(--dv-space-5) var(--dv-space-5);
        overflow-y: auto;
      }
      .footer {
        padding: 0 var(--dv-space-5) var(--dv-space-5);
        display: flex;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .footer:empty { display: none; }
      @keyframes dv-modal-in {
        from { opacity: 0; transform: translateY(6px) scale(0.985); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
  }

  protected onMount(): void {
    document.addEventListener('keydown', this._onKeyDown);
  }

  protected onUnmount(): void {
    document.removeEventListener('keydown', this._onKeyDown);
  }

  public show(): void {
    this.setAttribute('open', '');
  }

  public close(): void {
    this.removeAttribute('open');
    this.emit('dv-close');
  }

  protected render(): void {
    const open = this.boolAttr('open');
    const title = this.attr('title');
    const size = this.attr('size', 'md');

    this.root.innerHTML = `
      <div class="backdrop ${open ? 'open' : ''}">
        <div class="dialog size-${size}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title || 'Dialog')}">
          <div class="header">
            <h2 class="title">${escapeHtml(title)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;

    this.root.querySelector('.close')?.addEventListener('click', () => this.close());
    this.root.querySelector('.backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.close();
    });
  }
}

defineElement('dv-modal', DvModal);
