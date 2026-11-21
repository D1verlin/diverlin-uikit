export type DvTheme = 'light' | 'dark';
export type DvAccent = 'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset';

const STORAGE_KEY = 'dv-theme';
const ACCENT_STORAGE_KEY = 'dv-accent';
const VALID_THEMES: ReadonlySet<DvTheme> = new Set(['light', 'dark']);
const VALID_ACCENTS: ReadonlySet<DvAccent> = new Set([
  'mono',
  'cobalt',
  'emerald',
  'amber',
  'rose',
  'violet',
  'sunset',
]);

export function isDvTheme(value: unknown): value is DvTheme {
  return typeof value === 'string' && VALID_THEMES.has(value as DvTheme);
}

export function isDvAccent(value: unknown): value is DvAccent {
  return typeof value === 'string' && VALID_ACCENTS.has(value as DvAccent);
}

export function getTheme(): DvTheme {
  if (typeof document === 'undefined') return 'light';
  const current = document.documentElement.getAttribute('data-theme');
  return isDvTheme(current) ? current : 'light';
}

export function setTheme(theme: DvTheme, persist = true): DvTheme {
  const next: DvTheme = isDvTheme(theme) ? theme : 'light';
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.dispatchEvent(
      new CustomEvent('dv-theme-change', { detail: { theme: next } }),
    );
  }
  if (persist && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage restrictions
    }
  }
  return next;
}

export function getAccent(): DvAccent {
  if (typeof document === 'undefined') return 'mono';
  const current = document.documentElement.getAttribute('data-accent');
  return isDvAccent(current) ? current : 'mono';
}

export function setAccent(accent: DvAccent, persist = true): DvAccent {
  const next: DvAccent = isDvAccent(accent) ? accent : 'mono';
  if (typeof document !== 'undefined') {
    if (next === 'mono') {
      document.documentElement.removeAttribute('data-accent');
    } else {
      document.documentElement.setAttribute('data-accent', next);
    }
    document.documentElement.dispatchEvent(
      new CustomEvent('dv-accent-change', { detail: { accent: next } }),
    );
  }
  if (persist && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, next);
    } catch {
      // Ignore storage restrictions
    }
  }
  return next;
}

export function initAccent(fallback: DvAccent = 'mono'): DvAccent {
  if (typeof localStorage !== 'undefined') {
    try {
      const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
      if (isDvAccent(saved)) {
        return setAccent(saved, false);
      }
    } catch {
      // Ignore storage restrictions
    }
  }
  return setAccent(fallback, false);
}

export function initTheme(fallback: DvTheme = 'light'): DvTheme {
  if (typeof localStorage !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isDvTheme(saved)) {
        return setTheme(saved, false);
      }
    } catch {
      // Ignore storage restrictions
    }
  }
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return setTheme('dark', false);
  }
  return setTheme(fallback, false);
}

export function watchSystemTheme(): () => void {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = (e: MediaQueryListEvent) => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // ignore
    }
    setTheme(e.matches ? 'dark' : 'light', false);
  };
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
}
