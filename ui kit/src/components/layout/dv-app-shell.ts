import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvAppShell extends DvBaseElement {
  static observedAttributes = ['sidebar-width'];

  private _mobileOpen = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; min-height: 100dvh; background: var(--dv-bg); color: var(--dv-text-primary); overflow-x: clip; }
      .shell { display: flex; flex-direction: column; min-height: 100dvh; width: 100%; }
      .header {
        position: sticky;
        top: 0;
        z-index: var(--dv-z-sticky);
        background: var(--dv-bg);
        min-height: 56px;
        display: flex;
        align-items: center;
        padding: var(--dv-space-2) var(--dv-space-3);
        gap: var(--dv-space-2);
      }
      .menu-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        flex-shrink: 0;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .menu-btn:active { transform: scale(0.96); }
      .header-content { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: var(--dv-space-2); }
      .body { display: flex; flex: 1; position: relative; min-width: 0; }
      .sidebar {
        position: fixed;
        top: 56px;
        left: 0;
        bottom: 0;
        width: min(84vw, var(--_sidebar-w, 260px));
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        padding: var(--dv-space-4) var(--dv-space-3) var(--dv-space-8);
        overflow-y: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        z-index: var(--dv-z-overlay);
        transform: translateX(-105%);
        transition: transform var(--dv-duration-base) var(--dv-ease);
      }
      .sidebar.open { transform: translateX(0); }
      .backdrop {
        display: none;
        position: fixed;
        inset: 56px 0 0 0;
        background: rgba(0, 0, 0, 0.42);
        z-index: calc(var(--dv-z-overlay) - 1);
      }
      .backdrop.open { display: block; }
      .main {
        flex: 1;
        min-width: 0;
        max-width: 100%;
        padding: var(--dv-space-5) var(--dv-space-3) var(--dv-space-10);
      }
      @media (min-width: 640px) {
        .header { padding-inline: var(--dv-space-4); gap: var(--dv-space-3); }
        .main { padding: var(--dv-space-6) var(--dv-space-5) var(--dv-space-10); }
      }
      @media (min-width: 960px) {
        .header { padding-inline: var(--dv-space-6); }
        .menu-btn { display: none; }
        .backdrop { display: none !important; }
        .sidebar {
          position: sticky;
          top: 56px;
          width: var(--_sidebar-w, 240px);
          height: calc(100dvh - 56px);
          background: transparent;
          box-shadow: none;
          padding: var(--dv-space-6) var(--dv-space-4) var(--dv-space-6) var(--dv-space-6);
          transform: translateX(0);
          flex-shrink: 0;
        }
        .main { padding: var(--dv-space-8) var(--dv-space-8) var(--dv-space-12); }
      }
    `;
  }

  public closeSidebar(): void {
    this._mobileOpen = false;
    this.syncOpen();
  }

  private syncOpen(): void {
    this.root.querySelector('.sidebar')?.classList.toggle('open', this._mobileOpen);
    this.root.querySelector('.backdrop')?.classList.toggle('open', this._mobileOpen);
  }

  protected render(): void {
    const sidebarWidth = this.attr('sidebar-width', '250px');
    this.root.innerHTML = `
      <div class="shell" style="--_sidebar-w:${sidebarWidth}">
        <header class="header">
          <button type="button" class="menu-btn" aria-label="Toggle navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.menu}</svg>
          </button>
          <div class="header-content"><slot name="header"></slot></div>
        </header>
        <div class="body">
          <div class="backdrop"></div>
          <aside class="sidebar"><slot name="sidebar"></slot></aside>
          <main class="main"><slot></slot></main>
        </div>
      </div>
    `;

    this.root.querySelector('.menu-btn')?.addEventListener('click', () => {
      this._mobileOpen = !this._mobileOpen;
      this.syncOpen();
    });
    this.root.querySelector('.backdrop')?.addEventListener('click', () => {
      this.closeSidebar();
    });
  }
}

defineElement('dv-app-shell', DvAppShell);
