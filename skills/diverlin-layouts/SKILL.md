---
name: diverlin-layouts
description: Responsive layout patterns, 4px spacing scale, AppShell dashboards, landing pages, and form grids using Diverlin UI Kit (<dv-container>, <dv-stack>, <dv-grid>, <dv-app-shell>).
---

# Diverlin Layouts & Responsiveness

## 1. Spacing Scale (4px Base)
Use CSS variables or `<dv-stack gap="4">` / `<dv-grid gap="6">` numeric shorthands:
- `1` = `4px` (tight icon-text gap)
- `2` = `8px` (compact control group)
- `3` = `12px` (form field vertical rhythm)
- `4` = `16px` (default stack/grid gap)
- `6` = `24px` (card/section internal spacing)
- `8` = `32px` (subsection separation)
- `12` = `48px` (major section separation)
- `16` = `64px` (page-level vertical rhythm)

## 2. Responsive Grid Without Media-Query Boilerplate
Use `<dv-grid cols="auto-fit" min-width="260px" gap="4">` for adaptive grids that automatically collapse to 1 column on mobile:

```html
<dv-grid cols="auto-fit" min-width="280px" gap="6">
  <div>...</div>
  <div>...</div>
</dv-grid>
```

## 3. Application Shell (`<dv-app-shell>`)
For dashboards, admin panels, and documentation sites:
- Breakpoint at `960px`: below `960px`, the sidebar collapses into an off-canvas drawer toggled by the built-in header menu button.
- Place navigation links inside `slot="sidebar"`, brand + theme switcher inside `slot="header"`, and page content in the default slot.

## 4. Layout Hygiene
- Prefer asymmetric or editorial two-column splits (e.g. `1.4fr 1fr` or sidebar + content) over repetitive 3-card grids.
- Separate sections using generous whitespace (`32px–64px`) or `<dv-divider>` rather than wrapping every section in a `<dv-card>`.
- Never nest `<dv-card>` inside `<dv-card>`.
