import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvTrueFocus extends DvBaseElement {
  static observedAttributes = ['text', 'mode', 'interval'];

  private _activeIdx = 0;
  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .stage {
        position: relative;
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.45em;
        padding: 8px 12px;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
      }
      .word {
        position: relative;
        z-index: 1;
        padding: 2px 6px;
        cursor: pointer;
        filter: blur(3.5px);
        opacity: 0.42;
        transition: filter 220ms var(--dv-ease), opacity 220ms var(--dv-ease);
      }
      .word.active {
        filter: blur(0px);
        opacity: 1;
      }
      .box {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        pointer-events: none;
        transition:
          transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
          width 220ms cubic-bezier(0.22, 1, 0.36, 1),
          height 220ms cubic-bezier(0.22, 1, 0.36, 1);
      }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearInterval(this._timer);
  }

  private syncBox(): void {
    const words = this.root.querySelectorAll<HTMLElement>('.word');
    const box = this.root.querySelector<HTMLElement>('.box');
    words.forEach((w, idx) => w.classList.toggle('active', idx === this._activeIdx));
    const target = words[this._activeIdx];
    if (target && box) {
      box.style.width = `${target.offsetWidth}px`;
      box.style.height = `${target.offsetHeight}px`;
      box.style.transform = `translate(${target.offsetLeft}px, ${target.offsetTop}px)`;
    }
  }

  protected render(): void {
    if (this._timer) window.clearInterval(this._timer);
    const text = this.attr('text', 'Фокус На Важном Слове');
    const mode = this.attr('mode', 'hover');
    const interval = Math.max(900, this.numAttr('interval', 1600));
    const words = text.split(/\s+/).filter(Boolean);
    this._activeIdx = 0;

    this.root.innerHTML = `
      <div class="stage">
        <div class="box" aria-hidden="true"></div>
        ${words
          .map((w, idx) => `<span class="word ${idx === 0 ? 'active' : ''}" data-idx="${idx}">${escapeHtml(w)}</span>`)
          .join('')}
      </div>
    `;

    requestAnimationFrame(() => this.syncBox());

    this.root.querySelectorAll<HTMLElement>('.word').forEach((w) => {
      w.addEventListener('mouseenter', () => {
        this._activeIdx = Number(w.dataset.idx ?? 0);
        this.syncBox();
      });
    });

    if (mode === 'auto') {
      this._timer = window.setInterval(() => {
        this._activeIdx = (this._activeIdx + 1) % words.length;
        this.syncBox();
      }, interval);
    }
  }
}

defineElement('dv-true-focus', DvTrueFocus);
