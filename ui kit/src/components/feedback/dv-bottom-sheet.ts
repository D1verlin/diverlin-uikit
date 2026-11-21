import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvBottomSheet extends DvBaseElement {
  static observedAttributes = ['open', 'title'];

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
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: flex-end;
        justify-content: center;
      }
      .backdrop.open { display: flex; }
      .sheet {
        width: 100%;
        max-width: 640px;
        max-height: 85dvh;
        background: var(--dv-surface-elevated);
        border-radius: var(--dv-radius-lg) var(--dv-radius-lg) 0 0;
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
        animation: dv-sheet-up var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-sheet-up {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .handle-wrap {
        display: flex;
        justify-content: center;
        padding-top: 10px;
      }
      .handle {
        width: 36px;
        height: 4px;
        border-radius: 999px;
        background: var(--dv-surface-active);
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--dv-space-3) var(--dv-space-5);
      }
      .title {
        margin: 0;
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .close {
        background: transparent;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        border-radius: var(--dv-radius-xs);
        display: inline-flex;
      }
      .close:hover { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      .body {
        padding: 0 var(--dv-space-5) var(--dv-space-6);
        overflow-y: auto;
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
    const title = this.attr('title', '');

    this.root.innerHTML = `
      <div class="backdrop ${open ? 'open' : ''}">
        <div class="sheet" role="dialog" aria-modal="true" aria-label="${escapeHtml(title || 'Bottom sheet')}">
          <div class="handle-wrap"><div class="handle" aria-hidden="true"></div></div>
          <div class="header">
            <h2 class="title">${escapeHtml(title)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
        </div>
      </div>
    `;

    this.root.querySelector('.close')?.addEventListener('click', () => this.close());
    this.root.querySelector('.backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.close();
    });
  }
}

defineElement('dv-bottom-sheet', DvBottomSheet);
