---
name: diverlin-a11y-motion
description: Accessibility standards, keyboard navigation, focus management, and restrained motion rules for Diverlin UI Kit web applications.
---

# Diverlin Accessibility & Motion

## 1. Contrast & Focus
- Both themes (`light`, `dark`) enforce >= 4.5:1 text contrast.
- Never remove `:focus-visible` outlines. All `<dv-*>` interactive elements use `var(--dv-focus-ring)`.
- Icon-only buttons (`<dv-icon-button>`) MUST always include a descriptive `label` attribute for `aria-label` and `title`.

## 2. Keyboard & Overlays
- `<dv-modal>` and `<dv-drawer>` automatically close on `Escape` and backdrop click, and expose `role="dialog"` + `aria-modal="true"`.
- `<dv-tabs>` uses `role="tablist"`, `role="tab"`, and `aria-selected`.
- `<dv-toggle>` uses `role="switch"` and `aria-checked`.
- `<dv-progress>` exposes `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.

## 3. Motion Discipline
- Only animate `transform` and `opacity`.
- Never use `transition: all`.
- Keep durations between `120ms` (`--dv-duration-fast`), `180ms` (`--dv-duration-base`), and `240ms` (`--dv-duration-slow`) with `--dv-ease`.
- `@diverlin/uikit` globally disables animations and transitions when `@media (prefers-reduced-motion: reduce)` is active.
