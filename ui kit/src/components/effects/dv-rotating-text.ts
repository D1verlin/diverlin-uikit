import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvRotatingText extends DvBaseElement {
  static observedAttributes = ['prefix', 'words', 'interval'];

  private _idx = 0;
  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .row {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
      }
      .pill {
        display: inline-flex;
        align-items: center;
        padding: 4px 14px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .word {
        display: inline-block;
        animation: dv-rot-in 260ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      @keyframes dv-rot-in {
        from { opacity: 0; transform: translateY(65%); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearInterval(this._timer);
  }

  private getWords(): string[] {
    try {
      const parsed = JSON.parse(this.attr('words', '["Быстрый","Чистый","Точный"]'));
      return Array.isArray(parsed) && parsed.length ? parsed.map(String) : ['Быстрый'];
    } catch {
      return ['Быстрый', 'Чистый', 'Точный'];
    }
  }

  protected render(): void {
    if (this._timer) window.clearInterval(this._timer);
    const prefix = this.attr('prefix', 'Интерфейс:');
    const words = this.getWords();
    const interval = Math.max(800, this.numAttr('interval', 2200));
    this._idx = 0;

    this.root.innerHTML = `
      <span class="row">
        ${prefix ? `<span>${escapeHtml(prefix)}</span>` : ''}
        <span class="pill"><span class="word">${escapeHtml(words[0])}</span></span>
      </span>
    `;

    const pill = this.root.querySelector('.pill')!;
    this._timer = window.setInterval(() => {
      this._idx = (this._idx + 1) % words.length;
      pill.innerHTML = `<span class="word">${escapeHtml(words[this._idx])}</span>`;
    }, interval);
  }
}

defineElement('dv-rotating-text', DvRotatingText);
