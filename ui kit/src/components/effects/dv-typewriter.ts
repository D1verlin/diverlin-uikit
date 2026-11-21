import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvTypewriter extends DvBaseElement {
  static observedAttributes = ['words', 'speed', 'loop'];

  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        align-items: center;
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-h3);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .cursor {
        display: inline-block;
        width: 2px;
        height: 1.15em;
        margin-left: 3px;
        background: var(--dv-accent);
        animation: dv-blink 0.9s steps(2, start) infinite;
      }
      @keyframes dv-blink {
        to { opacity: 0; }
      }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearTimeout(this._timer);
  }

  private getWords(): string[] {
    try {
      const parsed = JSON.parse(this.attr('words', '["Web Components","Pure CSS Tokens","Zero Dependencies"]'));
      return Array.isArray(parsed) && parsed.length ? parsed.map(String) : ['Diverlin UI'];
    } catch {
      return ['Diverlin UI'];
    }
  }

  protected render(): void {
    if (this._timer) window.clearTimeout(this._timer);
    const words = this.getWords();
    const speed = Math.max(25, this.numAttr('speed', 70));
    const loop = this.hasAttribute('loop') ? this.boolAttr('loop') : true;

    this.root.innerHTML = `<span class="wrap"><span class="txt">${escapeHtml(words[0])}</span><span class="cursor" aria-hidden="true"></span></span>`;
    const txtEl = this.root.querySelector('.txt')!;

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const currentWord = words[wordIdx];
      if (!deleting) {
        charIdx++;
        txtEl.textContent = currentWord.slice(0, charIdx);
        if (charIdx >= currentWord.length) {
          if (!loop && wordIdx === words.length - 1) return;
          deleting = true;
          this._timer = window.setTimeout(tick, 1100);
          return;
        }
      } else {
        charIdx--;
        txtEl.textContent = currentWord.slice(0, charIdx);
        if (charIdx <= 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      this._timer = window.setTimeout(tick, deleting ? speed / 2 : speed);
    };

    txtEl.textContent = '';
    this._timer = window.setTimeout(tick, speed);
  }
}

defineElement('dv-typewriter', DvTypewriter);
