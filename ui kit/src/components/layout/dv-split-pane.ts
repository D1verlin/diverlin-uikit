import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvSplitPane extends DvBaseElement {
  static observedAttributes = ['value', 'min', 'max'];

  private _dragging = false;
  private _syncing = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; height: 100%; }
      .split {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 180px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .split.dragging {
        user-select: none;
        cursor: col-resize;
      }
      .pane {
        min-width: 0;
        overflow: auto;
        padding: var(--dv-space-4);
      }
      .left { flex: 0 0 var(--_split, 50%); }
      .right { flex: 1; }
      .divider {
        width: 12px;
        flex-shrink: 0;
        cursor: col-resize;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        touch-action: none;
        outline: none;
      }
      .grip {
        width: 3px;
        height: 32px;
        border-radius: 999px;
        background: var(--dv-surface-active);
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .divider:hover .grip,
      .divider.dragging .grip,
      .divider:focus-visible .grip {
        transform: scaleY(1.25);
        background: var(--dv-text-muted);
      }
    `;
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.split')) {
      if (this._syncing) return;
      const min = this.numAttr('min', 20);
      const max = this.numAttr('max', 80);
      const clamped = Math.round(Math.min(max, Math.max(min, Number(newValue ?? 50))));
      this.syncVisual(clamped);
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private syncVisual(val: number): void {
    const split = this.root.querySelector<HTMLElement>('.split');
    const div = this.root.querySelector<HTMLElement>('.divider');
    if (split) split.style.setProperty('--_split', `${val}%`);
    if (div) div.setAttribute('aria-valuenow', String(val));
  }

  protected render(): void {
    const min = this.numAttr('min', 20);
    const max = this.numAttr('max', 80);
    const val = Math.min(max, Math.max(min, this.numAttr('value', 50)));

    this.root.innerHTML = `
      <div class="split" style="--_split:${val}%">
        <div class="pane left"><slot name="left"></slot></div>
        <div class="divider" role="separator" aria-orientation="vertical" aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${val}" tabindex="0">
          <div class="grip"></div>
        </div>
        <div class="pane right"><slot name="right"></slot></div>
      </div>
    `;

    const split = this.root.querySelector<HTMLElement>('.split')!;
    const div = this.root.querySelector<HTMLElement>('.divider')!;

    const updatePct = (clientX: number) => {
      const rect = split.getBoundingClientRect();
      if (rect.width <= 0) return;
      const raw = ((clientX - rect.left) / rect.width) * 100;
      const clamped = Math.round(Math.min(max, Math.max(min, raw)));
      this.syncVisual(clamped);
      this._syncing = true;
      this.setAttribute('value', String(clamped));
      this._syncing = false;
      this.emit('dv-resize', { value: clamped });
    };

    div.addEventListener('pointerdown', (e: PointerEvent) => {
      e.preventDefault();
      this._dragging = true;
      split.classList.add('dragging');
      div.classList.add('dragging');
      div.setPointerCapture(e.pointerId);
      updatePct(e.clientX);
    });

    div.addEventListener('pointermove', (e: PointerEvent) => {
      if (this._dragging) updatePct(e.clientX);
    });

    const end = (e: PointerEvent) => {
      if (!this._dragging) return;
      this._dragging = false;
      split.classList.remove('dragging');
      div.classList.remove('dragging');
      if (div.hasPointerCapture(e.pointerId)) {
        div.releasePointerCapture(e.pointerId);
      }
    };
    div.addEventListener('pointerup', end);
    div.addEventListener('pointercancel', end);

    div.addEventListener('keydown', (e: KeyboardEvent) => {
      const cur = this.numAttr('value', 50);
      let next = cur;
      if (e.key === 'ArrowRight') next = Math.min(max, cur + 5);
      else if (e.key === 'ArrowLeft') next = Math.max(min, cur - 5);
      else return;
      e.preventDefault();
      this.syncVisual(next);
      this._syncing = true;
      this.setAttribute('value', String(next));
      this._syncing = false;
      this.emit('dv-resize', { value: next });
    });
  }
}

defineElement('dv-split-pane', DvSplitPane);
