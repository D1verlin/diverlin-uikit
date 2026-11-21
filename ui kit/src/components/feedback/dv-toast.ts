import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export type DvToastVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export interface DvToastOptions {
  message: string;
  variant?: DvToastVariant;
  duration?: number;
}

export class DvToastContainer extends DvBaseElement {
  protected static get componentStyles(): string {
    return `
      :host {
        position: fixed;
        bottom: var(--dv-space-5);
        right: var(--dv-space-5);
        z-index: var(--dv-z-toast);
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
        max-width: min(380px, calc(100vw - 32px));
        pointer-events: none;
      }
      .toast {
        pointer-events: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: 12px 14px;
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-md);
        font-size: var(--dv-text-sm);
        animation: dv-toast-in var(--dv-duration-base) var(--dv-ease);
      }
      .variant-success .msg-dot { color: var(--dv-success); }
      .variant-warning .msg-dot { color: var(--dv-warning); }
      .variant-danger .msg-dot { color: var(--dv-danger); }
      .variant-info .msg-dot { color: var(--dv-info); }
      button {
        background: none;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 2px;
        display: inline-flex;
      }
      button:hover { color: var(--dv-text-primary); }
      @keyframes dv-toast-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  public addToast(opts: DvToastOptions): void {
    const { message, variant = 'neutral', duration = 3500 } = opts;
    const list = this.root.querySelector('.list');
    if (!list) return;

    const el = document.createElement('div');
    el.className = `toast variant-${variant}`;
    el.setAttribute('role', 'status');
    el.innerHTML = `
      <span>${escapeHtml(message)}</span>
      <button type="button" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.x}</svg>
      </button>
    `;

    const close = () => el.remove();
    el.querySelector('button')?.addEventListener('click', close);
    list.appendChild(el);

    if (duration > 0) {
      window.setTimeout(close, duration);
    }
  }

  protected render(): void {
    if (!this.root.querySelector('.list')) {
      this.root.innerHTML = `<div class="list" style="display:flex;flex-direction:column;gap:8px;"></div>`;
    }
  }
}

defineElement('dv-toast-container', DvToastContainer);

export function showToast(opts: DvToastOptions): void {
  if (typeof document === 'undefined') return;
  let container = document.querySelector('dv-toast-container') as DvToastContainer | null;
  if (!container) {
    container = document.createElement('dv-toast-container') as DvToastContainer;
    document.body.appendChild(container);
  }
  container.addToast(opts);
}
