export type DvTheme = 'light' | 'dark';
export type DvAccent = 'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset';
export declare function isDvTheme(value: unknown): value is DvTheme;
export declare function isDvAccent(value: unknown): value is DvAccent;
export declare function getTheme(): DvTheme;
export declare function setTheme(theme: DvTheme, persist?: boolean): DvTheme;
export declare function getAccent(): DvAccent;
export declare function setAccent(accent: DvAccent, persist?: boolean): DvAccent;
export declare function initAccent(fallback?: DvAccent): DvAccent;
export declare function initTheme(fallback?: DvTheme): DvTheme;
export declare function watchSystemTheme(): () => void;
//# sourceMappingURL=theme.d.ts.map