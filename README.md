# Diverlin UI Kit (`@diverlin/uikit`)

Универсальный фреймворк-независимый Web UI Kit на базе **нативных Web Components (`<dv-*>`)** и **чистых CSS-переменных (`--dv-*`)** без runtime-зависимостей.

- **Живой гайдлайн и документация (GitHub Pages)**: [https://d1verlin.github.io/diverlin-uikit/](https://d1verlin.github.io/diverlin-uikit/)
- **Репозиторий**: [https://github.com/D1verlin/diverlin-uikit](https://github.com/D1verlin/diverlin-uikit)

---

## Быстрая установка в новый проект

Устанавливается напрямую из GitHub одной командой (скомпилированный `dist/` уже включён в корень репозитория, сборка при установке не требуется):

```bash
npm install github:D1verlin/diverlin-uikit
```

### Подключение в Vite / React / Vue / Svelte / Next.js

```ts
import '@diverlin/uikit/styles';
import '@diverlin/uikit';
import { initTheme, setTheme, initAccent, setAccent, showToast } from '@diverlin/uikit';

initTheme('light');  // 'light' | 'dark'
initAccent('mono');  // 'mono' | 'cobalt' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sunset'
```

Доступен модульный импорт отдельных категорий (Tree-shaking):
- `@diverlin/uikit/actions`
- `@diverlin/uikit/inputs`
- `@diverlin/uikit/layout`
- `@diverlin/uikit/navigation`
- `@diverlin/uikit/data-display`
- `@diverlin/uikit/feedback`
- `@diverlin/uikit/effects`

### Подключение JSX-типов (React / Preact / TypeScript)

Добавьте в `vite-env.d.ts` или `global.d.ts`:

```ts
/// <reference types="@diverlin/uikit" />
```

### Подключение без сборщика (чистый HTML)

Скачайте `uikit.css` и `diverlin.global.js` из `dist/` или [GitHub Releases](https://github.com/D1verlin/diverlin-uikit/releases):

```html
<link rel="stylesheet" href="./uikit.css" />
<script src="./diverlin.global.js"></script>

<dv-button variant="primary" accent="cobalt" gradient>Сохранить</dv-button>
<script>
  DiverlinUI.setTheme('dark');
  DiverlinUI.setAccent('cobalt');
</script>
```

---

## Установка скиллов для ИИ-агента (Antigravity / Cursor / Claude Code)

В папке [`skills/`](./skills) находятся 4 модульных скилла:
1. **`diverlin-uikit`** — каталог всех 70+ компонентов `<dv-*>`, атрибутов, слотов и событий.
2. **`diverlin-design-system`** — правила безрамочного тонального дизайна, 2 темы (`light`/`dark`), 6 акцентов, `oklch`-градиенты, локальные шрифты (`Onest`, `Dela Gothic One`, `Montserrat Alternates`) и Anti-AI-Slop правила.
3. **`diverlin-layouts`** — композиция экранов, дашбордов, таблиц и `dv-app-shell`.
4. **`diverlin-a11y-motion`** — анимации (`transform`/`opacity`, `120–240ms`), эффекты и доступность.

### Глобальная установка скиллов на ПК (Windows PowerShell)

```powershell
npm run install:skills
# или напрямую:
Copy-Item -Path ".\skills\*" -Destination "$HOME\.gemini\config\skills\" -Recurse -Force
```

После глобальной установки в любом новом проекте достаточно написать агенту:
> *«Собери интерфейс на базе `diverlin-uikit` и `diverlin-design-system`»*

---

## Разработка и сборка монорепозитория

- `ui kit/` — исходный код библиотеки `@diverlin/uikit` и тесты Vitest (`17/17`).
- `guideline website/` — интерактивный многостраничный сайт гайдлайна и документации.
- `skills/` — 4 модульных скилла для ИИ-агента.

```bash
npm run build   # Сборка @diverlin/uikit, обновление корневого ./dist и сборка сайта гайдлайна
npm test        # Запуск unit-тестов Vitest
```
