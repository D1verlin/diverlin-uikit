import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvConfirmOptions {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'primary' | 'danger';
}

export interface DvPromptOptions extends DvConfirmOptions {
  placeholder?: string;
  defaultValue?: string;
}

export class DvConfirm extends DvBaseElement {
  static observedAttributes = [
    'open',
    'title',
    'description',
    'confirm-text',
    'cancel-text',
    'variant',
    'prompt',
    'placeholder',
    'value',
  ];

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.boolAttr('open')) {
      this.resolveCancel();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.52);
        display: none;
        align-items: center;
        justify-content: center;
        padding: var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        max-width: 400px;
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-lg);
        box-shadow: var(--dv-shadow-lg);
        padding: var(--dv-space-5);
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-4);
        animation: dv-confirm-in var(--dv-duration-base) var(--dv-ease);
      }
      .head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--dv-space-3);
      }
      .title {
        margin: 0;
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .desc {
        margin: 0;
        font-size: var(--dv-text-sm);
        line-height: var(--dv-leading-sm);
        color: var(--dv-text-secondary);
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
      .prompt-input {
        width: 100%;
        height: 38px;
        padding: 0 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        outline: none;
      }
      .prompt-input:focus {
        box-shadow: var(--dv-focus-ring);
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .btn {
        height: 36px;
        padding: 0 14px;
        border: none;
        border-radius: var(--dv-radius-sm);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .btn:active { transform: translateY(1px); }
      .btn-cancel {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .btn-cancel:hover { background: var(--dv-surface-hover); }
      .btn-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .btn-primary:hover { background: var(--dv-accent-hover); }
      .btn-danger {
        background: var(--dv-surface);
        color: var(--dv-danger);
      }
      .btn-danger:hover { background: var(--dv-surface-hover); }
      @keyframes dv-confirm-in {
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

  private resolveCancel(): void {
    this.removeAttribute('open');
    this.emit('dv-cancel');
  }

  private resolveConfirm(): void {
    const inp = this.root.querySelector<HTMLInputElement>('.prompt-input');
    const value = inp ? inp.value : undefined;
    this.removeAttribute('open');
    this.emit('dv-confirm', { value });
  }

  protected render(): void {
    const open = this.boolAttr('open');
    const title = this.attr('title', 'Подтверждение');
    const description = this.attr('description', '');
    const confirmText = this.attr('confirm-text', 'Подтвердить');
    const cancelText = this.attr('cancel-text', 'Отмена');
    const variant = this.attr('variant', 'primary');
    const isPrompt = this.boolAttr('prompt');
    const placeholder = this.attr('placeholder', '');
    const value = this.attr('value', '');

    this.root.innerHTML = `
      <div class="backdrop ${open ? 'open' : ''}">
        <div class="dialog" role="alertdialog" aria-modal="true" aria-label="${escapeHtml(title)}">
          <div class="head">
            <h2 class="title">${escapeHtml(title)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS.x}</svg>
            </button>
          </div>
          ${description ? `<p class="desc">${escapeHtml(description)}</p>` : ''}
          ${isPrompt ? `<input type="text" class="prompt-input" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(value)}" />` : ''}
          <div class="actions">
            <button type="button" class="btn btn-cancel">${escapeHtml(cancelText)}</button>
            <button type="button" class="btn btn-${variant === 'danger' ? 'danger' : 'primary'} btn-ok">${escapeHtml(confirmText)}</button>
          </div>
        </div>
      </div>
    `;

    this.root.querySelector('.close')?.addEventListener('click', () => this.resolveCancel());
    this.root.querySelector('.btn-cancel')?.addEventListener('click', () => this.resolveCancel());
    this.root.querySelector('.btn-ok')?.addEventListener('click', () => this.resolveConfirm());
    this.root.querySelector('.backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.resolveCancel();
    });

    const inp = this.root.querySelector<HTMLInputElement>('.prompt-input');
    if (open && inp) {
      requestAnimationFrame(() => inp.focus());
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.resolveConfirm();
      });
    }
  }
}

defineElement('dv-confirm', DvConfirm);

export function confirmDialog(opts: DvConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const el = document.createElement('dv-confirm') as DvConfirm;
    el.setAttribute('title', opts.title);
    if (opts.description) el.setAttribute('description', opts.description);
    if (opts.confirmText) el.setAttribute('confirm-text', opts.confirmText);
    if (opts.cancelText) el.setAttribute('cancel-text', opts.cancelText);
    if (opts.variant) el.setAttribute('variant', opts.variant);
    el.setAttribute('open', '');

    const cleanup = (res: boolean) => {
      el.remove();
      resolve(res);
    };
    el.addEventListener('dv-confirm', () => cleanup(true), { once: true });
    el.addEventListener('dv-cancel', () => cleanup(false), { once: true });
    document.body.appendChild(el);
  });
}

export function promptDialog(opts: DvPromptOptions): Promise<string | null> {
  return new Promise((resolve) => {
    const el = document.createElement('dv-confirm') as DvConfirm;
    el.setAttribute('title', opts.title);
    el.setAttribute('prompt', '');
    if (opts.description) el.setAttribute('description', opts.description);
    if (opts.confirmText) el.setAttribute('confirm-text', opts.confirmText);
    if (opts.cancelText) el.setAttribute('cancel-text', opts.cancelText);
    if (opts.placeholder) el.setAttribute('placeholder', opts.placeholder);
    if (opts.defaultValue) el.setAttribute('value', opts.defaultValue);
    el.setAttribute('open', '');

    el.addEventListener(
      'dv-confirm',
      (e) => {
        const val = (e as CustomEvent<{ value?: string }>).detail?.value ?? '';
        el.remove();
        resolve(val);
      },
      { once: true },
    );
    el.addEventListener(
      'dv-cancel',
      () => {
        el.remove();
        resolve(null);
      },
      { once: true },
    );
    document.body.appendChild(el);
  });
}
