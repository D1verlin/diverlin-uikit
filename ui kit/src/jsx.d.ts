/* Framework-agnostic JSX / TSX Custom Element Typings for @diverlin/uikit */

type DvAttrProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  id?: string;
  class?: string;
  className?: string;
  style?: string | Record<string, string | number>;
  slot?: string;
  accent?: 'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset' | string;
  gradient?: boolean;
  children?: unknown;
};

export interface DiverlinIntrinsicElements {
  'dv-button': DvAttrProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    full?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }>;
  'dv-icon-button': DvAttrProps<{
    icon?: string;
    label?: string;
    variant?: 'secondary' | 'ghost' | 'primary';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>;
  'dv-button-group': DvAttrProps<{ gap?: string }>;
  'dv-theme-toggle': DvAttrProps<{ size?: 'sm' | 'md' | 'lg'; 'show-label'?: boolean }>;
  'dv-copy-button': DvAttrProps<{ value?: string; label?: string; size?: 'sm' | 'md' | 'lg'; variant?: 'secondary' | 'ghost' }>;

  'dv-field': DvAttrProps<{ label?: string; hint?: string; error?: string; required?: boolean }>;
  'dv-input': DvAttrProps<{
    type?: string;
    value?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    name?: string;
  }>;
  'dv-textarea': DvAttrProps<{
    value?: string;
    placeholder?: string;
    rows?: number | string;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
  }>;
  'dv-select': DvAttrProps<{
    value?: string;
    options?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    error?: boolean;
  }>;
  'dv-number-input': DvAttrProps<{
    value?: number | string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>;
  'dv-search': DvAttrProps<{
    value?: string;
    placeholder?: string;
    shortcut?: string;
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    disabled?: boolean;
  }>;
  'dv-file-picker': DvAttrProps<{
    label?: string;
    hint?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
  }>;
  'dv-color-picker': DvAttrProps<{ value?: string; swatches?: string; disabled?: boolean }>;
  'dv-combobox': DvAttrProps<{
    value?: string;
    options?: string;
    placeholder?: string;
    multiple?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>;
  'dv-date-picker': DvAttrProps<{
    value?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>;
  'dv-otp-input': DvAttrProps<{
    length?: number | string;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>;
  'dv-checkbox': DvAttrProps<{ checked?: boolean; disabled?: boolean; label?: string; name?: string; value?: string }>;
  'dv-radio': DvAttrProps<{ checked?: boolean; disabled?: boolean; label?: string; name?: string; value?: string }>;
  'dv-toggle': DvAttrProps<{ checked?: boolean; disabled?: boolean; label?: string }>;
  'dv-slider': DvAttrProps<{
    min?: number | string;
    max?: number | string;
    step?: number | string;
    value?: number | string;
    label?: string;
    'show-value'?: boolean;
    stepped?: boolean;
    marks?: boolean | string;
    disabled?: boolean;
  }>;

  'dv-container': DvAttrProps<{ size?: 'sm' | 'md' | 'lg' | 'xl'; padding?: 'none' | 'sm' | 'md' | 'lg' }>;
  'dv-stack': DvAttrProps<{
    direction?: 'vertical' | 'horizontal';
    gap?: string | number;
    align?: string;
    justify?: string;
    wrap?: boolean;
  }>;
  'dv-grid': DvAttrProps<{ cols?: string | number; 'min-width'?: string; gap?: string | number }>;
  'dv-card': DvAttrProps<{
    variant?: 'surface' | 'elevated' | 'outline';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    interactive?: boolean;
    horizontal?: boolean;
  }>;
  'dv-app-shell': DvAttrProps<{ 'sidebar-width'?: string }>;
  'dv-aspect-ratio': DvAttrProps<{ ratio?: string; radius?: 'none' | 'sm' | 'md' | 'lg'; fit?: string }>;
  'dv-carousel': DvAttrProps<{ gap?: string | number; step?: number | string }>;
  'dv-split-pane': DvAttrProps<{ value?: number | string; min?: number | string; max?: number | string }>;

  'dv-tabs': DvAttrProps<{ value?: string; items?: string; variant?: 'segmented' | 'underline' }>;
  'dv-segmented': DvAttrProps<{ value?: string; items?: string }>;
  'dv-breadcrumbs': DvAttrProps<{ items?: string }>;
  'dv-pagination': DvAttrProps<{ page?: number | string; total?: number | string }>;
  'dv-steps': DvAttrProps<{ steps?: string; current?: number | string }>;
  'dv-nav-rail': DvAttrProps<{
    items?: string;
    value?: string;
    expanded?: boolean;
    justify?: 'top' | 'center' | 'bottom' | 'between';
  }>;

  'dv-heading': DvAttrProps<{
    level?: 'display' | '1' | '2' | '3' | '4';
    font?: 'display' | 'sans' | 'alt';
    align?: 'left' | 'center' | 'right';
    balance?: boolean;
  }>;
  'dv-text': DvAttrProps<{
    variant?: 'body' | 'secondary' | 'muted' | 'sm' | 'xs' | 'mono';
    font?: 'sans' | 'alt' | 'mono';
    tabular?: boolean;
    pretty?: boolean;
    inline?: boolean;
  }>;
  'dv-icon': DvAttrProps<{ name?: string; size?: number | string; 'stroke-width'?: number | string }>;
  'dv-badge': DvAttrProps<{ variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info'; size?: 'sm' | 'md' }>;
  'dv-tag': DvAttrProps<{ selected?: boolean; removable?: boolean; disabled?: boolean }>;
  'dv-avatar': DvAttrProps<{ src?: string; alt?: string; name?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }>;
  'dv-divider': DvAttrProps<{ orientation?: 'horizontal' | 'vertical'; spacing?: 'none' | 'sm' | 'md' | 'lg' }>;
  'dv-skeleton': DvAttrProps<{
    variant?: 'text' | 'rect' | 'circle';
    preset?: 'card' | 'profile' | 'article';
    lines?: number | string;
    width?: string;
    height?: string;
  }>;
  'dv-progress': DvAttrProps<{ value?: number | string; max?: number | string; label?: string; 'show-value'?: boolean }>;
  'dv-spinner': DvAttrProps<{ size?: 'sm' | 'md' | 'lg'; label?: string }>;
  'dv-kbd': DvAttrProps;
  'dv-code': DvAttrProps<{ lang?: string; code?: string }>;
  'dv-stat': DvAttrProps<{ label?: string; value?: string; delta?: string; trend?: 'up' | 'down' | 'neutral'; hint?: string }>;
  'dv-table': DvAttrProps<{ dense?: boolean; sortable?: boolean }>;
  'dv-timeline': DvAttrProps<{ items?: string }>;
  'dv-tree': DvAttrProps<{ items?: string; selected?: string }>;

  'dv-alert': DvAttrProps<{ variant?: 'info' | 'success' | 'warning' | 'danger'; title?: string; dismissible?: boolean }>;
  'dv-modal': DvAttrProps<{ open?: boolean; title?: string; size?: 'sm' | 'md' | 'lg' }>;
  'dv-drawer': DvAttrProps<{ open?: boolean; title?: string; side?: 'left' | 'right' }>;
  'dv-dropdown': DvAttrProps<{ open?: boolean; align?: 'left' | 'right' }>;
  'dv-popover': DvAttrProps<{ open?: boolean }>;
  'dv-tooltip': DvAttrProps<{ text?: string; position?: 'top' | 'bottom' }>;
  'dv-accordion': DvAttrProps<{ title?: string; open?: boolean }>;
  'dv-empty': DvAttrProps<{ icon?: string; title?: string; description?: string }>;
  'dv-confirm': DvAttrProps<{
    open?: boolean;
    title?: string;
    description?: string;
    'confirm-text'?: string;
    'cancel-text'?: string;
    variant?: 'primary' | 'danger';
    prompt?: boolean;
    placeholder?: string;
    value?: string;
  }>;
  'dv-command': DvAttrProps<{ open?: boolean; items?: string; placeholder?: string }>;
  'dv-context-menu': DvAttrProps<{ items?: string }>;
  'dv-bottom-sheet': DvAttrProps<{ open?: boolean; title?: string }>;

  'dv-blur-text': DvAttrProps<{ text?: string; by?: 'words' | 'chars'; delay?: number | string; direction?: 'top' | 'bottom' }>;
  'dv-split-text': DvAttrProps<{ text?: string; by?: 'chars' | 'words'; stagger?: number | string }>;
  'dv-decrypted-text': DvAttrProps<{ text?: string; trigger?: 'hover' | 'mount' | 'both'; speed?: number | string }>;
  'dv-rolling-text': DvAttrProps<{ text?: string; stagger?: number | string }>;
  'dv-rotating-text': DvAttrProps<{ prefix?: string; words?: string; interval?: number | string }>;
  'dv-count-up': DvAttrProps<{ from?: number | string; to?: number | string; duration?: number | string; prefix?: string; suffix?: string }>;
  'dv-true-focus': DvAttrProps<{ text?: string; mode?: 'hover' | 'auto'; interval?: number | string }>;
  'dv-typewriter': DvAttrProps<{ words?: string; speed?: number | string; loop?: boolean }>;

  'dv-magnetic': DvAttrProps<{ strength?: number | string; disabled?: boolean }>;
  'dv-spotlight-card': DvAttrProps<{ size?: number | string; padding?: 'sm' | 'md' | 'lg' }>;
  'dv-tilt-card': DvAttrProps<{ 'max-tilt'?: number | string; padding?: 'sm' | 'md' | 'lg' }>;
  'dv-marquee': DvAttrProps<{ items?: string; speed?: number | string; direction?: 'left' | 'right'; 'pause-on-hover'?: boolean }>;
  'dv-dock': DvAttrProps<{ items?: string; 'base-size'?: number | string; 'max-size'?: number | string }>;
  'dv-card-stack': DvAttrProps<{ items?: string; 'fan-on-hover'?: boolean }>;
  'dv-expandable-tabs': DvAttrProps<{ items?: string; value?: string }>;
  'dv-compare-slider': DvAttrProps<{ value?: number | string }>;

  'dv-circular-text': DvAttrProps<{ text?: string; radius?: number | string; speed?: number | string }>;
  'dv-variable-proximity': DvAttrProps<{ text?: string; radius?: number | string }>;
  'dv-text-pressure': DvAttrProps<{ text?: string; radius?: number | string }>;
  'dv-split-flap': DvAttrProps<{ text?: string; speed?: number | string }>;
  'dv-shiny-text': DvAttrProps<{ text?: string; speed?: number | string }>;
  'dv-echo-text': DvAttrProps<{ text?: string; layers?: number | string }>;
  'dv-scroll-velocity': DvAttrProps<{ text?: string; speed?: number | string }>;

  'dv-click-spark': DvAttrProps<{ count?: number | string; radius?: number | string }>;
  'dv-pixel-card': DvAttrProps<{ title?: string; subtitle?: string; cols?: number | string }>;
  'dv-animated-list': DvAttrProps<{ items?: string; selected?: string }>;
  'dv-folder': DvAttrProps<{ label?: string; open?: boolean }>;
  'dv-slide-button': DvAttrProps<{ label?: string; 'success-label'?: string; gradient?: boolean; accent?: string }>;
  'dv-cursor-trail': DvAttrProps<{ label?: string }>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends DiverlinIntrinsicElements {}
  }
}
