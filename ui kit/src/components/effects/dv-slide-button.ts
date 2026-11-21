import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvSlideButton extends DvBaseElement {
  static observedAttributes = ['label', 'success-label'];

  private _dragging = false;
  private _done = false;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; width: 100%; max-width: 280px; }
      .track {
        position: relative;
        height: 46px;
        width: 100%;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        user-select: none;
        touch-action: none;
      }
      .text {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        pointer-events: none;
      }
      .track.done .text {
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .thumb {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 38px;
        height: 38px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
        transform: translateX(var(--_x, 0px));
        transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .thumb.dragging {
        transition: none;
        cursor: grabbing;
      }
    `;
  }

  public reset(): void {
    this._done = false;
    this.render();
  }

  protected render(): void {
    const label = this.attr('label', 'Проведите для отправки');
    const successLabel = this.attr('success-label', 'Отправлено');

    this.root.innerHTML = `
      <div class="track ${this._done ? 'done' : ''}">
        <span class="text">${escapeHtml(this._done ? successLabel : label)}</span>
        <div class="thumb" role="slider" tabindex="0" aria-label="${escapeHtml(label)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${this._done ? DV_ICONS.check : DV_ICONS['arrow-right']}</svg>
        </div>
      </div>
    `;

    const track = this.root.querySelector<HTMLElement>('.track')!;
    const thumb = this.root.querySelector<HTMLElement>('.thumb')!;
    let startX = 0;

    thumb.addEventListener('pointerdown', (e: PointerEvent) => {
      if (this._done) {
        this.reset();
        return;
      }
      this._dragging = true;
      startX = e.clientX;
      thumb.classList.add('dragging');
      thumb.setPointerCapture(e.pointerId);
    });

    thumb.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this._dragging) return;
      const max = Math.max(0, track.clientWidth - 46);
      const dx = Math.min(max, Math.max(0, e.clientX - startX));
      thumb.style.setProperty('--_x', `${dx}px`);
      if (dx >= max * 0.92) {
        this._dragging = false;
        this._done = true;
        thumb.classList.remove('dragging');
        thumb.style.setProperty('--_x', `${max}px`);
        this.root.querySelector('.text')!.textContent = successLabel;
        thumb.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.check}</svg>`;
        track.classList.add('done');
        this.emit('dv-confirm');
      }
    });

    const release = () => {
      if (!this._dragging) return;
      this._dragging = false;
      thumb.classList.remove('dragging');
      if (!this._done) {
        thumb.style.setProperty('--_x', '0px');
      }
    };
    thumb.addEventListener('pointerup', release);
    thumb.addEventListener('pointercancel', release);
  }
}

defineElement('dv-slide-button', DvSlideButton);
