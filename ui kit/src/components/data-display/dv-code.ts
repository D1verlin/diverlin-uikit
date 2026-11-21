import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvCode extends DvBaseElement {
  static observedAttributes = ['lang', 'code'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .box {
        position: relative;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        padding: var(--dv-space-4);
        overflow-x: auto;
      }
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--dv-space-2);
      }
      .lang {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        color: var(--dv-text-muted);
      }
      .copy {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: 12px;
        cursor: pointer;
      }
      .copy:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      pre {
        margin: 0;
        font-family: var(--dv-font-mono);
        font-size: 13px;
        line-height: 1.55;
        color: var(--dv-text-primary);
        white-space: pre;
      }
    `;
  }

  protected render(): void {
    const lang = this.attr('lang', 'html');
    const code = this.attr('code') || this.textContent?.trim() || '';

    this.root.innerHTML = `
      <div class="box">
        <div class="head">
          <span class="lang">${escapeHtml(lang)}</span>
          <button type="button" class="copy">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS.copy}</svg>
            <span>Копировать</span>
          </button>
        </div>
        <pre><code>${escapeHtml(code)}</code></pre>
      </div>
    `;

    const btn = this.root.querySelector('.copy')!;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code);
        const span = btn.querySelector('span');
        if (span) {
          span.textContent = 'Скопировано';
          setTimeout(() => { span.textContent = 'Копировать'; }, 1500);
        }
        this.emit('dv-copy', { code });
      } catch {
        // ignore clipboard error
      }
    });
  }
}

defineElement('dv-code', DvCode);
