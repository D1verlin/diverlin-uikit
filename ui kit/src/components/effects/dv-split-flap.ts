import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

const FLAP_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';

export class DvSplitFlap extends DvBaseElement {
  static observedAttributes = ['text', 'speed'];

  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .board {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px;
        cursor: pointer;
        user-select: none;
      }
      .tile {
        position: relative;
        width: 32px;
        height: 42px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: 1.1rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--dv-shadow-sm);
      }
      .tile::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 1px;
        background: var(--dv-bg);
        opacity: 0.55;
      }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearInterval(this._timer);
  }

  public flip(): void {
    const target = this.attr('text', 'DEPARTURE 24').toUpperCase();
    const speed = Math.max(20, this.numAttr('speed', 40));
    const tiles = Array.from(this.root.querySelectorAll<HTMLElement>('.tile'));
    if (!tiles.length) return;

    if (this._timer) window.clearInterval(this._timer);
    let ticks = 0;

    this._timer = window.setInterval(() => {
      ticks++;
      let allDone = true;
      tiles.forEach((tile, idx) => {
        const goal = target[idx] ?? ' ';
        if (ticks >= idx * 2 + 6) {
          tile.textContent = goal;
        } else {
          allDone = false;
          tile.textContent = FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)];
        }
      });
      if (allDone && this._timer) {
        window.clearInterval(this._timer);
      }
    }, speed);
  }

  protected render(): void {
    const target = this.attr('text', 'DEPARTURE 24').toUpperCase();

    this.root.innerHTML = `
      <div class="board" role="button" tabindex="0" aria-label="${escapeHtml(target)}">
        ${Array.from(target)
          .map((ch) => `<span class="tile" aria-hidden="true">${escapeHtml(ch)}</span>`)
          .join('')}
      </div>
    `;

    const board = this.root.querySelector('.board')!;
    board.addEventListener('click', () => this.flip());
    board.addEventListener('mouseenter', () => this.flip());
    this.flip();
  }
}

defineElement('dv-split-flap', DvSplitFlap);
