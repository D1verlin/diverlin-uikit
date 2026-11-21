import { describe, it, expect, beforeEach } from 'vitest';
import '../src/index';
import { setTheme, getTheme, setAccent, getAccent } from '../src/core/theme';

describe('@diverlin/uikit', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setTheme('light', false);
  });

  it('switches themes and emits dv-theme-change', () => {
    let seen = '';
    document.documentElement.addEventListener(
      'dv-theme-change',
      (e) => {
        seen = (e as CustomEvent<{ theme: string }>).detail.theme;
      },
      { once: true },
    );

    setTheme('dark', false);
    expect(getTheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(seen).toBe('dark');
  });

  it('dv-input preserves inner input element and emits dv-input on typing', () => {
    const el = document.createElement('dv-input');
    document.body.appendChild(el);

    const inner = el.shadowRoot!.querySelector('input')!;
    let lastVal = '';
    el.addEventListener('dv-input', (e) => {
      lastVal = (e as CustomEvent<{ value: string }>).detail.value;
    });

    inner.value = 'a';
    inner.dispatchEvent(new Event('input', { bubbles: true }));
    expect(el.shadowRoot!.querySelector('input')).toBe(inner);

    inner.value = 'ab';
    inner.dispatchEvent(new Event('input', { bubbles: true }));
    expect(el.shadowRoot!.querySelector('input')).toBe(inner);
    expect(lastVal).toBe('ab');
  });

  it('dv-toggle toggles checked state and emits dv-change', () => {
    const el = document.createElement('dv-toggle');
    document.body.appendChild(el);

    let detail: { checked: boolean } | null = null;
    el.addEventListener('dv-change', (e) => {
      detail = (e as CustomEvent<{ checked: boolean }>).detail;
    });

    const btn = el.shadowRoot!.querySelector('button')!;
    btn.click();
    expect(el.hasAttribute('checked')).toBe(true);
    expect(detail).toEqual({ checked: true });

    btn.click();
    expect(el.hasAttribute('checked')).toBe(false);
    expect(detail).toEqual({ checked: false });
  });

  it('dv-otp-input emits dv-complete when all cells are filled', () => {
    const el = document.createElement('dv-otp-input');
    el.setAttribute('length', '4');
    document.body.appendChild(el);

    let completed = '';
    el.addEventListener('dv-complete', (e) => {
      completed = (e as CustomEvent<{ value: string }>).detail.value;
    });

    const inputs = Array.from(el.shadowRoot!.querySelectorAll('input'));
    expect(inputs.length).toBe(4);

    ['1', '2', '3', '4'].forEach((digit, idx) => {
      inputs[idx].value = digit;
      inputs[idx].dispatchEvent(new Event('input', { bubbles: true }));
    });

    expect(completed).toBe('1234');
  });

  it('dv-tree collapses and expands root node cleanly', () => {
    const el = document.createElement('dv-tree');
    el.setAttribute(
      'items',
      JSON.stringify([
        { id: 'src', label: 'src', children: [{ id: 'core', label: 'core' }] },
      ]),
    );
    document.body.appendChild(el);

    const getBtn = (id: string) => el.shadowRoot!.querySelector<HTMLButtonElement>(`button[data-id="${id}"]`);
    expect(getBtn('core')).not.toBeNull();

    getBtn('src')!.click();
    expect(getBtn('core')).toBeNull();

    getBtn('src')!.click();
    expect(getBtn('core')).not.toBeNull();
  });

  it('dv-table sorts rows when sortable is enabled', () => {
    const el = document.createElement('dv-table');
    el.setAttribute('sortable', '');
    el.innerHTML = `
      <table>
        <thead><tr><th>Name</th><th>Size</th></tr></thead>
        <tbody>
          <tr><td>Beta</td><td>20</td></tr>
          <tr><td>Alpha</td><td>5</td></tr>
        </tbody>
      </table>
    `;
    document.body.appendChild(el);

    let sortedCol = -1;
    el.addEventListener('dv-sort', (e) => {
      sortedCol = (e as CustomEvent<{ column: number }>).detail.column;
    });

    const thSize = el.querySelectorAll('th')[1];
    thSize.click();

    expect(sortedCol).toBe(1);
    const firstRowText = el.querySelector('tbody tr td')?.textContent;
    expect(firstRowText).toBe('Alpha');
  });

  it('dv-select opens menu and selects an option', () => {
    const el = document.createElement('dv-select');
    el.setAttribute('options', JSON.stringify([{ label: 'Prod', value: 'prod' }, { label: 'Stage', value: 'stage' }]));
    document.body.appendChild(el);

    let selected = '';
    el.addEventListener('dv-change', (e) => {
      selected = (e as CustomEvent<{ value: string }>).detail.value;
    });

    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    expect(el.shadowRoot!.querySelector('.menu')!.classList.contains('open')).toBe(true);

    el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.option')[1].click();
    expect(selected).toBe('stage');
    expect(el.getAttribute('value')).toBe('stage');
  });

  it('dv-combobox filters options and toggles multi-select chips', () => {
    const el = document.createElement('dv-combobox');
    el.setAttribute('multiple', '');
    el.setAttribute('value', 'ts');
    el.setAttribute('options', JSON.stringify([{ label: 'TypeScript', value: 'ts' }, { label: 'Vue', value: 'vue' }]));
    document.body.appendChild(el);

    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.search-input')!;
    input.value = 'vue';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const opts = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.option');
    expect(opts.length).toBe(1);
    opts[0].click();
    expect(el.getAttribute('value')).toBe('ts,vue');
  });

  it('dv-date-picker selects a date from calendar', () => {
    const el = document.createElement('dv-date-picker');
    el.setAttribute('value', '2026-11-21');
    document.body.appendChild(el);

    let nextDate = '';
    el.addEventListener('dv-change', (e) => {
      nextDate = (e as CustomEvent<{ value: string }>).detail.value;
    });

    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    el.shadowRoot!.querySelector<HTMLButtonElement>('.day[data-iso="2026-11-25"]')!.click();
    expect(nextDate).toBe('2026-11-25');
  });

  it('dv-slider updates value via keyboard arrows', () => {
    const el = document.createElement('dv-slider');
    el.setAttribute('min', '0');
    el.setAttribute('max', '100');
    el.setAttribute('step', '10');
    el.setAttribute('value', '50');
    document.body.appendChild(el);

    const area = el.shadowRoot!.querySelector<HTMLElement>('.slider-area')!;
    area.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(el.getAttribute('value')).toBe('60');
  });

  it('dv-confirm emits dv-confirm on ok button', () => {
    const el = document.createElement('dv-confirm');
    el.setAttribute('open', '');
    document.body.appendChild(el);

    let confirmed = false;
    el.addEventListener('dv-confirm', () => {
      confirmed = true;
    });

    el.shadowRoot!.querySelector<HTMLButtonElement>('.btn-ok')!.click();
    expect(confirmed).toBe(true);
    expect(el.hasAttribute('open')).toBe(false);
  });

  it('dv-command filters commands and emits dv-select', () => {
    const el = document.createElement('dv-command');
    el.setAttribute('open', '');
    el.setAttribute('items', JSON.stringify([{ id: 'a', label: 'Alpha' }, { id: 'b', label: 'Beta' }]));
    document.body.appendChild(el);

    let picked = '';
    el.addEventListener('dv-select', (e) => {
      picked = (e as CustomEvent<{ id: string }>).detail.id;
    });

    const inp = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
    inp.value = 'bet';
    inp.dispatchEvent(new Event('input', { bubbles: true }));

    const items = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.item');
    expect(items.length).toBe(1);
    items[0].click();
    expect(picked).toBe('b');
  });

  it('dv-copy-button emits dv-copy and toggles copied state', async () => {
    const el = document.createElement('dv-copy-button');
    el.setAttribute('value', 'secret');
    el.setAttribute('label', 'Copy');
    document.body.appendChild(el);

    let copiedVal = '';
    el.addEventListener('dv-copy', (e) => {
      copiedVal = (e as CustomEvent<{ value: string }>).detail.value;
    });

    el.shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await new Promise((r) => setTimeout(r, 0));
    expect(copiedVal).toBe('secret');
  });

  it('dv-blur-text splits text into animated units', () => {
    const el = document.createElement('dv-blur-text');
    el.setAttribute('text', 'Alpha Beta Gamma');
    el.setAttribute('by', 'words');
    document.body.appendChild(el);

    const units = el.shadowRoot!.querySelectorAll('.unit');
    expect(units.length).toBe(3);
  });

  it('dv-card-stack cycles cards on click and emits dv-change', () => {
    const el = document.createElement('dv-card-stack');
    document.body.appendChild(el);

    let activeIndex = -1;
    el.addEventListener('dv-change', (e) => {
      activeIndex = (e as CustomEvent<{ activeIndex: number }>).detail.activeIndex;
    });

    el.shadowRoot!.querySelector<HTMLElement>('.deck')!.click();
    expect(activeIndex).toBe(1);
  });

  it('dv-expandable-tabs expands clicked tab and emits dv-change', () => {
    const el = document.createElement('dv-expandable-tabs');
    el.setAttribute('value', 'home');
    document.body.appendChild(el);

    let active = '';
    el.addEventListener('dv-change', (e) => {
      active = (e as CustomEvent<{ value: string }>).detail.value;
    });

    const tabs = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.tab');
    tabs[1].click();
    expect(active).toBe('layers');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('switches global accent presets and emits dv-accent-change', () => {
    let seen = '';
    document.documentElement.addEventListener(
      'dv-accent-change',
      (e) => {
        seen = (e as CustomEvent<{ accent: string }>).detail.accent;
      },
      { once: true },
    );

    setAccent('emerald', false);
    expect(getAccent()).toBe('emerald');
    expect(document.documentElement.getAttribute('data-accent')).toBe('emerald');
    expect(seen).toBe('emerald');

    setAccent('mono', false);
    expect(getAccent()).toBe('mono');
    expect(document.documentElement.hasAttribute('data-accent')).toBe(false);
  });
});
