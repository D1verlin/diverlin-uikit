import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*+=';

export class DvDecryptedText extends DvBaseElement {
  static observedAttributes = ['text', 'trigger', 'speed'];

  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .txt {
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-h3);
        font-weight: 600;
        color: var(--dv-text-primary);
        cursor: pointer;
        user-select: none;
      }
      .cipher {
        color: var(--dv-text-muted);
      }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearInterval(this._timer);
  }

  public scramble(): void {
    const target = this.attr('text', 'DIVERLIN_SYSTEM_READY');
    const speed = Math.max(15, this.numAttr('speed', 35));
    const el = this.root.querySelector('.txt');
    if (!el) return;

    if (this._timer) window.clearInterval(this._timer);
    let step = 0;

    this._timer = window.setInterval(() => {
      const html = Array.from(target)
        .map((ch, idx) => {
          if (ch === ' ') return ' ';
          if (idx < Math.floor(step)) return escapeHtml(ch);
          const rand = CHARSET[Math.floor(Math.random() * CHARSET.length)];
          return `<span class="cipher">${escapeHtml(rand)}</span>`;
        })
        .join('');
      el.innerHTML = html;
      step += 0.5;
      if (step >= target.length) {
        if (this._timer) window.clearInterval(this._timer);
        el.textContent = target;
      }
    }, speed);
  }

  protected render(): void {
    const text = this.attr('text', 'DIVERLIN_SYSTEM_READY');
    const trigger = this.attr('trigger', 'hover');

    this.root.innerHTML = `<span class="txt">${escapeHtml(text)}</span>`;

    const el = this.root.querySelector('.txt')!;
    el.addEventListener('mouseenter', () => {
      if (trigger === 'hover' || trigger === 'both') this.scramble();
    });
    el.addEventListener('click', () => this.scramble());

    if (trigger === 'mount' || trigger === 'both') {
      this.scramble();
    }
  }
}

defineElement('dv-decrypted-text', DvDecryptedText);
