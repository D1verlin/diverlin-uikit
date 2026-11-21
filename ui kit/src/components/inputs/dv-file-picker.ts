import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvFilePicker extends DvBaseElement {
  static observedAttributes = ['label', 'hint', 'accept', 'multiple', 'disabled'];

  private _files: File[] = [];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .wrap { display: flex; flex-direction: column; gap: var(--dv-space-3); }
      .dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--dv-space-2);
        padding: var(--dv-space-6) var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        text-align: center;
        cursor: pointer;
        transition:
          transform var(--dv-duration-fast) var(--dv-ease),
          opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .dropzone:hover:not(.disabled) {
        background: var(--dv-surface-hover);
      }
      .dropzone.dragover:not(.disabled) {
        background: var(--dv-surface-active);
        transform: scale(0.992);
      }
      .dropzone.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .dropzone:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      .icon {
        color: var(--dv-text-muted);
        display: inline-flex;
      }
      .title {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
      }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-muted);
      }
      input[type='file'] {
        display: none;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .file-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-2) var(--dv-space-3);
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        animation: dv-file-in var(--dv-duration-base) var(--dv-ease);
      }
      .file-meta {
        display: flex;
        align-items: baseline;
        gap: var(--dv-space-2);
        min-width: 0;
      }
      .file-name {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .file-size {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
        flex-shrink: 0;
      }
      .remove-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        flex-shrink: 0;
      }
      .remove-btn:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      @keyframes dv-file-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  get files(): File[] {
    return [...this._files];
  }

  private formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private addFiles(fileList: FileList | null): void {
    if (!fileList || fileList.length === 0) return;
    const incoming = Array.from(fileList);
    this._files = this.boolAttr('multiple') ? [...this._files, ...incoming] : [incoming[0]];
    this.renderFileList();
    this.emit('dv-change', { files: this.files });
  }

  private renderFileList(): void {
    const listEl = this.root.querySelector('.list');
    if (!listEl) return;
    listEl.innerHTML = this._files
      .map(
        (f, idx) => `
      <div class="file-item">
        <div class="file-meta">
          <span class="file-name">${escapeHtml(f.name)}</span>
          <span class="file-size">${this.formatSize(f.size)}</span>
        </div>
        <button type="button" class="remove-btn" data-idx="${idx}" aria-label="Удалить файл">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.x}</svg>
        </button>
      </div>
    `,
      )
      .join('');

    listEl.querySelectorAll<HTMLButtonElement>('.remove-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        this._files.splice(idx, 1);
        this.renderFileList();
        this.emit('dv-change', { files: this.files });
      });
    });
  }

  protected render(): void {
    const label = this.attr('label', 'Перетащите файлы сюда или выберите на устройстве');
    const hint = this.attr('hint', '');
    const accept = this.attr('accept', '');
    const multiple = this.boolAttr('multiple');
    const disabled = this.boolAttr('disabled');

    this.root.innerHTML = `
      <div class="wrap">
        <div class="dropzone ${disabled ? 'disabled' : ''}" tabindex="${disabled ? -1 : 0}" role="button" aria-label="${escapeHtml(label)}">
          <span class="icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.plus}</svg>
          </span>
          <span class="title">${escapeHtml(label)}</span>
          ${hint ? `<span class="hint">${escapeHtml(hint)}</span>` : ''}
          <input type="file" ${accept ? `accept="${escapeHtml(accept)}"` : ''} ${multiple ? 'multiple' : ''} ${disabled ? 'disabled' : ''} />
        </div>
        <div class="list"></div>
      </div>
    `;

    this.renderFileList();

    if (disabled) return;

    const zone = this.root.querySelector<HTMLElement>('.dropzone')!;
    const input = this.root.querySelector<HTMLInputElement>('input[type="file"]')!;

    zone.addEventListener('click', () => input.click());
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });

    input.addEventListener('change', () => {
      this.addFiles(input.files);
      input.value = '';
    });

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('dragover');
    });
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      this.addFiles(e.dataTransfer?.files ?? null);
    });
  }
}

defineElement('dv-file-picker', DvFilePicker);
