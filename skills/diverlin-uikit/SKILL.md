---
name: diverlin-uikit
description: Use @diverlin/uikit Web Components (<dv-*>) and pure CSS tokens (--dv-*) to build framework-agnostic web interfaces in HTML, React, Vue, or Svelte. Trigger when creating or updating UI with Diverlin UI Kit.
---

# Diverlin UI Kit (`@diverlin/uikit`)

`@diverlin/uikit` is a zero-dependency Web Components + Pure CSS design system. Every component is a native Custom Element (`<dv-*>`) styled through CSS custom properties (`--dv-*`).

## Installation & Setup

### Quick Install from GitHub
```bash
npm install github:D1verlin/diverlin-uikit
```
- **Live Interactive Guideline & Docs**: https://d1verlin.github.io/diverlin-uikit/
- **GitHub Repository**: https://github.com/D1verlin/diverlin-uikit

### ESM (Vite / React / Vue / Svelte / Vanilla TS)

```ts
import '@diverlin/uikit/styles';
import '@diverlin/uikit';
import { initTheme, setTheme, initAccent, setAccent, showToast } from '@diverlin/uikit';

initTheme('light');  // 'light' | 'dark'
initAccent('mono');  // 'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset'
```

You can also import only specific categories:
- `@diverlin/uikit/actions`
- `@diverlin/uikit/inputs`
- `@diverlin/uikit/layout`
- `@diverlin/uikit/navigation`
- `@diverlin/uikit/feedback`
- `@diverlin/uikit/data-display`
- `@diverlin/uikit/effects`

### Switching Themes & Accents

Set `data-theme` (`'light' | 'dark'`) and optional `data-accent` (`'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset'`) on `<html>`:

```ts
import { setTheme, setAccent } from '@diverlin/uikit';
setTheme('dark');
setAccent('emerald');
```

Any `<dv-*>` element also accepts per-component `accent="<preset>"` and `gradient` attributes:

```html
<dv-button variant="primary" accent="emerald" gradient>Сохранить</dv-button>
<dv-heading level="1" accent="cobalt" gradient>Заголовок</dv-heading>
<dv-card accent="violet" gradient>Контент</dv-card>
```

## Component Catalog

### Data Display & Typography
- `<dv-heading level="display|1|2|3|4" font="display|sans|alt" align="left|center|right" balance>`
- `<dv-text variant="body|secondary|muted|sm|xs|mono" font="sans|alt|mono" tabular pretty inline>`
- `<dv-icon name="check|x|search|sun|moon|palette|menu|plus|minus|info|alert-triangle|alert-circle|check-circle|copy|external-link|eye|eye-off|sliders|user|settings|trash|edit|arrow-right|arrow-left|home|layers|code|layout" size="18">`
- `<dv-badge variant="neutral|accent|success|warning|danger|info" size="sm|md">`
- `<dv-tag selected removable disabled>`
- `<dv-code lang="html|ts" code="...">`
- `<dv-stat label="..." value="1 284" delta="+14%" trend="up|down|neutral" hint="...">`
- `<dv-avatar src="..." name="Имя Фамилия" size="sm|md|lg|xl">`
- `<dv-divider orientation="horizontal|vertical" spacing="none|sm|md|lg">`
- `<dv-skeleton variant="text|rect|circle" preset="card|profile|article" lines="3" width="100%" height="14px">`
- `<dv-progress value="64" max="100" label="Прогресс" show-value>`
- `<dv-spinner size="sm|md|lg" label="...">`
- `<dv-kbd>Ctrl</dv-kbd>`
- `<dv-timeline items='[{"title":"...","time":"14:10","icon":"check-circle"}]'>`
- `<dv-tree items='[{"id":"src","label":"src","children":[...]}]' selected="...">`
- `<dv-table dense sortable>` — wrap a native `<table>` inside `<dv-table>` for automatic tonal rows, `tabular-nums`, and column sorting.

### Actions
- `<dv-button variant="primary|secondary|ghost|danger" size="sm|md|lg" disabled loading full type="button|submit">`
- `<dv-icon-button icon="copy" label="Копировать" variant="secondary|ghost|primary" size="sm|md|lg">`
- `<dv-button-group gap="8px">`
- `<dv-theme-toggle size="sm|md|lg" show-label>`
- `<dv-copy-button value="..." label="..." variant="secondary|ghost" size="sm|md|lg">`

### Inputs & Forms
All inputs emit `dv-input` (live) and `dv-change` (commit) CustomEvents with `event.detail`.
- `<dv-field label="Email" hint="..." error="..." required>`
- `<dv-input type="text|email|password|number|search" value="" placeholder="" size="sm|md|lg" error disabled readonly>`
- `<dv-textarea value="" placeholder="" rows="3" error disabled readonly>`
- `<dv-select value="" placeholder="Выберите..." options='[{"label":"A","value":"a"}]' size="sm|md|lg" error disabled>` (or child `<option>` elements)
- `<dv-checkbox label="..." checked disabled>`
- `<dv-radio name="group" value="a" label="..." checked disabled>`
- `<dv-toggle label="..." checked disabled>`
- `<dv-slider min="0" max="100" step="1" value="50" label="..." show-value stepped marks disabled>`
- `<dv-number-input value="0" min="0" max="100" step="1" size="sm|md|lg" disabled>`
- `<dv-search value="" placeholder="Поиск..." shortcut="Ctrl+K" size="sm|md|lg" loading disabled>`
- `<dv-file-picker label="..." hint="..." accept="..." multiple disabled>`
- `<dv-color-picker value="#18181b" disabled>`
- `<dv-combobox value="ts" options='[...]' multiple size="sm|md|lg" disabled>`
- `<dv-date-picker value="2026-11-21" size="sm|md|lg" disabled>`
- `<dv-otp-input length="6" size="sm|md|lg" disabled>`

### Layout
- `<dv-container size="sm|md|lg|xl" padding="none|sm|md|lg">`
- `<dv-stack direction="vertical|horizontal" gap="4" align="stretch" justify="flex-start" wrap>`
- `<dv-grid cols="auto-fit|1|2|3|4" min-width="260px" gap="4">`
- `<dv-card variant="elevated|surface|outline" padding="none|sm|md|lg" interactive>`
- `<dv-app-shell sidebar-width="250px">` with `slot="header"`, `slot="sidebar"`, and default main slot.
- `<dv-aspect-ratio ratio="16/9|4/3|1/1" radius="none|sm|md|lg">`
- `<dv-carousel step="280" gap="4">`
- `<dv-split-pane value="50" min="20" max="80">` with `slot="left"` and `slot="right"`

### Navigation
- `<dv-tabs value="overview" variant="segmented|underline" items='[{"id":"overview","label":"Обзор"}]'>`
- `<dv-segmented value="day" items='[{"id":"day","label":"День"}]'>`
- `<dv-breadcrumbs items='[{"label":"Главная","href":"#"},{"label":"Раздел"}]'>`
- `<dv-pagination page="1" total="10">`
- `<dv-steps current="1" steps='["Шаг 1","Шаг 2","Шаг 3"]'>`
- `<dv-nav-rail value="home" expanded items='[{"id":"home","label":"Главная","icon":"home"}]'>`

### Feedback & Overlays
- `<dv-alert variant="info|success|warning|danger" title="..." dismissible>`
- `showToast({ message, variant: 'neutral|success|warning|danger|info', duration: 3500 })`
- `<dv-modal open title="..." size="sm|md|lg">` (supports `.show()`, `.close()`, `slot="footer"`)
- `<dv-drawer open title="..." side="right|left">` (supports `.show()`, `.close()`)
- `<dv-dropdown align="left|right">` with `slot="trigger"` and default menu slot
- `<dv-popover open>` with `slot="trigger"` and default content slot
- `<dv-tooltip text="..." position="top|bottom">`
- `<dv-accordion title="..." open>`
- `<dv-empty icon="layers" title="..." description="...">` (supports default action slot)
- `confirmDialog({ title, description, confirmText, variant })` / `promptDialog({ title, placeholder })` / `<dv-confirm>`
- `<dv-command open items='[{"id":"...","label":"...","shortcut":"..."}]'>`
- `<dv-context-menu items='[{"id":"...","label":"...","danger":true}]'>`
- `<dv-bottom-sheet open title="...">` (supports `.show()`, `.close()`)

### Text & Interactive Effect Components (`@diverlin/uikit/effects` — 29 components)
- Text Effects (15): `<dv-blur-text>`, `<dv-split-text>`, `<dv-decrypted-text>`, `<dv-rolling-text>`, `<dv-rotating-text>`, `<dv-count-up>`, `<dv-true-focus>`, `<dv-typewriter>`, `<dv-circular-text>`, `<dv-variable-proximity>`, `<dv-text-pressure>`, `<dv-split-flap>`, `<dv-shiny-text>`, `<dv-echo-text>`, `<dv-scroll-velocity>`
- Interactive & Hover (14): `<dv-magnetic>`, `<dv-spotlight-card>`, `<dv-tilt-card>`, `<dv-marquee>`, `<dv-dock>`, `<dv-card-stack>`, `<dv-expandable-tabs>`, `<dv-compare-slider>`, `<dv-click-spark>`, `<dv-pixel-card>`, `<dv-animated-list>`, `<dv-folder>`, `<dv-slide-button>`, `<dv-cursor-trail>`
- CSS Effect Utilities: `.dv-link-underline`, `.dv-text-reveal`, `.dv-text-shimmer`, `.dv-truncate-2`, `.dv-truncate-3`, `.dv-hover-lift`, `.dv-hover-arrow`, `.dv-hover-dim-group`, `.dv-pressable`
