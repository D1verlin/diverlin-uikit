---
name: diverlin-design-system
description: Visual design rules, 2-theme tokens (light, dark), local Google Fonts typography (Onest, Montserrat Alternates, Dela Gothic One), and strict Anti-AI-Slop rules for Diverlin UI Kit. Always read before designing or styling interfaces.
---

# Diverlin Design System & Anti-AI-Slop Rules

## 1. Two Themes
Switch themes via `data-theme` on `<html>`:
- `light`: clean white (`#ffffff`), subtle surface (`#f5f6f8`), charcoal accent (`#18181b`).
- `dark`: deep graphite (`#0a0a0c`), elevated surface (`#18181d`), crisp light accent (`#f4f4f6`).

Both themes guarantee **>= 4.5:1** contrast for `--dv-text-primary`, `--dv-text-secondary`, and `--dv-text-muted`. Never hardcode hex colors — always use `--dv-*` CSS variables.

## 2. Local Typography (Google Fonts Bundled Locally)
Fonts are bundled locally as `.woff2` inside `@diverlin/uikit` (no external CDN requests):
- **`Onest`** (`--dv-font-sans`): primary font for all UI controls, body copy, labels, and tables.
- **`Montserrat Alternates`** (`--dv-font-alt`): secondary expressive font for occasional accents or editorial callouts.
- **`Dela Gothic One`** (`--dv-font-display`): display font strictly for major headings (`level="display"`, `level="1"`, `level="2"`) and large hero/section statements.
- **Monospace** (`--dv-font-mono`): strictly for code, IDs, and tabular data. Always add `tabular` or `.dv-tabular` (`font-variant-numeric: tabular-nums`) to numbers, prices, tables, and metrics.

## 3. Anti-AI-Slop Design Rules (Strict)

### Colors, Accents & Opt-in Gradients
- Default aesthetic is monochrome (`mono`), with 6 opt-in accent presets (`cobalt`, `emerald`, `amber`, `rose`, `violet`, `sunset`) available globally (`data-accent="<preset>"`, `setAccent()`) or locally on any component (`accent="<preset>"`).
- Calm 2-tone `135deg` gradients (`--dv-gradient-accent`, `--dv-gradient-surface`, `--dv-gradient-text`) can be enabled per component via the `gradient` attribute. NO neon glow and NO decorative glassmorphism (`backdrop-filter`).
- NO pastel/colored box backgrounds + colored borders for statuses (`background: var(--dv-success-bg); border-color: var(--dv-success-border);`). Use neutral surfaces (`var(--dv-surface)` / `var(--dv-surface-elevated)`), applying semantic colors only to text or icons.
- Do NOT use "cream background + forest green/terracotta + serif" unless explicitly requested by a brandbook.
- Avoid low-contrast gray text (minimum **4.5:1** contrast).

### Composition & Grid
- Do NOT wrap everything in cards and borders. **Nested cards are forbidden.** Use a **borderless, tonal surface-based design** (`--dv-bg`, `--dv-surface`, `--dv-surface-elevated`), grouping elements via spacing (`--dv-space-*`), alignment, and typographic hierarchy rather than `border` boxes.
- Keep navigation menus, headers, footers, inputs, and buttons borderless (use tonal surface shifts on hover and `--dv-focus-ring` on focus).
- **NO app version badges** (e.g. `v1.0.0`) in the header.
- Do NOT use the cliché "centered Hero + badge + grid of 3 identical icon cards".
- **NO one-sided decorative borders** (`border-left: 3px solid ...`) on cards, alerts, or callouts. Use uniform `1px solid var(--dv-border)` or borderless surfaces.
- Do NOT apply large pill/2xl border-radii (`rounded-2xl` / `full`) to everything indiscriminately; use restrained radii (`--dv-radius-xs: 4px`, `sm: 6px`, `md: 8px`, `lg: 12px`).

### Typography
- NO Inter / Roboto / Geist defaults.
- NO tiny ALL-CAPS eyebrow labels above every heading.
- Do NOT highlight a single word inside a heading with a different color or italic serif.

### Decor & Animations
- **NO** emoji as UI icons and NO oversized colored icon containers.
- **NO** empty hype badges (`NEW`, `AI`, `BETA`) and **NO** pulsing dots or decorative status dots (`LIVE`).
- **NO** `transition: all`, NO `scale` on card hover, and NO entrance animation on every block.
- Animate **only** `transform` and `opacity` (`120–240ms`), and always respect `prefers-reduced-motion`.

### Copy & Content
- NO fake testimonials, fake company logos, or invented metrics. If data is missing, leave a clean slot with `TODO`.
- NO marketing clichés ("revolutionary", "take it to the next level"), NO em-dashes (`—`) in UI copy, write numbers as digits, and name CTA buttons with concrete actions ("Сохранить", "Копировать код", not "Отправить").
