# @diverlin/uikit

Framework-agnostic Web Components (`<dv-*>`) and pure CSS design system (`--dv-*`) with `light` and `dark` themes, bundled local fonts (`Onest`, `Montserrat Alternates`, `Dela Gothic One`), and zero runtime dependencies.

## Usage in Vite / React / Vue / Svelte

```ts
import '@diverlin/uikit/styles';
import '@diverlin/uikit';
import { initTheme, setTheme, showToast } from '@diverlin/uikit';

initTheme('light'); // 'light' | 'dark'
```

Subpath imports are also available (`@diverlin/uikit/actions`, `/inputs`, `/layout`, `/navigation`, `/feedback`, `/data-display`).

## Usage in Plain HTML (No Build Step)

```html
<link rel="stylesheet" href="./dist/assets/styles.css" />
<script src="./dist/diverlin.global.js"></script>

<dv-button variant="primary">Сохранить</dv-button>
<script>
  DiverlinUI.initTheme('light');
</script>
```
