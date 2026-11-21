import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvDrawer extends DvBaseElement {
  static observedAttributes = ['open', 'title', 'side'];

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
      }
      .backdrop.open { display: block; }
      .panel {
        position: fixed;
        top: 0;
        bottom: 0;
        width: min(380px, 90vw);
        background: var(--dv-surface-elevated);
        border: none;
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
      }
      .side-right { right: 0; animation: dv-drawer-right var(--dv-duration-base) var(--dv-ease); }
      .side-left { left: 0; animation: dv-drawer-left var(--dv-duration-base) var(--dv-ease); }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--dv-space-5) var(--dv-space-5) var(--dv-space-3);
      }
      .title { font-size: var(--dv-text-h4); font-weight: 600; margin: 0; }
      .close {
        background: transparent;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); }
      .body { padding: var(--dv-space-5); overflow-y: auto; flex: 1; }
      @keyframes dv-drawer-right {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes dv-drawer-left {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
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
    const side = this.attr('side', 'right');

    this.root.innerHTML = `
      <div class="backdrop ${open ? 'open' : ''}">
        <div class="panel side-${side}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title || 'Drawer')}">
          <div class="header">
            <h2 class="title">${escapeHtml(title)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.x}</svg>
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

defineElement('dv-drawer', DvDrawer);
