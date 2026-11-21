import '@diverlin/uikit/styles';
import '@diverlin/uikit';
import {
  initTheme,
  setTheme,
  getTheme,
  initAccent,
  setAccent,
  getAccent,
  watchSystemTheme,
  showToast,
  confirmDialog,
  promptDialog,
  type DvTheme,
  type DvAccent,
} from '@diverlin/uikit';
import { COMPONENT_DOCS, type ComponentDoc } from './catalog';
import './site.css';

initTheme('light');
initAccent('mono');
watchSystemTheme();

const ACCENT_PRESETS: Array<{ id: DvAccent; label: string; color: string }> = [
  { id: 'mono', label: 'Моно', color: '#71717a' },
  { id: 'cobalt', label: 'Кобальт', color: '#2563eb' },
  { id: 'emerald', label: 'Изумруд', color: '#059669' },
  { id: 'amber', label: 'Янтарь', color: '#d97706' },
  { id: 'rose', label: 'Роза', color: '#e11d48' },
  { id: 'violet', label: 'Фиолет', color: '#7c3aed' },
  { id: 'sunset', label: 'Закат', color: '#ea580c' },
];

const TOKEN_SWATCHES = [
  { name: '--dv-bg', label: 'Основной фон' },
  { name: '--dv-surface', label: 'Поверхность' },
  { name: '--dv-surface-elevated', label: 'Приподнятая поверхность' },
  { name: '--dv-border', label: 'Граница' },
  { name: '--dv-text-primary', label: 'Основной текст' },
  { name: '--dv-text-secondary', label: 'Вторичный текст' },
  { name: '--dv-accent', label: 'Акцент' },
  { name: '--dv-danger', label: 'Ошибка' },
];

const SPACING_STEPS = [
  { token: '--dv-space-1', px: 4 },
  { token: '--dv-space-2', px: 8 },
  { token: '--dv-space-3', px: 12 },
  { token: '--dv-space-4', px: 16 },
  { token: '--dv-space-6', px: 24 },
  { token: '--dv-space-8', px: 32 },
  { token: '--dv-space-12', px: 48 },
];

function groupComponents(): Map<string, ComponentDoc[]> {
  const map = new Map<string, ComponentDoc[]>();
  for (const doc of COMPONENT_DOCS) {
    const list = map.get(doc.category) ?? [];
    list.push(doc);
    map.set(doc.category, list);
  }
  return map;
}

const grouped = groupComponents();

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <dv-app-shell id="shell" sidebar-width="240px">
    <div slot="header" class="site-header-row">
      <a href="#/overview" class="site-brand">
        <dv-icon name="layers" size="20"></dv-icon>
        <span class="site-brand-title">Diverlin UI</span>
      </a>

      <div class="site-header-actions">
        <dv-button id="global-search-btn" variant="secondary" size="sm">
          <dv-icon name="search" size="14"></dv-icon>
          <span class="search-btn-label">Поиск</span>
          <span class="search-btn-kbd"><dv-kbd>Alt+K</dv-kbd></span>
        </dv-button>
        <div class="header-accent-wrap">
          <dv-select
            id="accent-switcher"
            size="sm"
            value="${getAccent()}"
            options='${JSON.stringify(ACCENT_PRESETS.map((a) => ({ label: a.label, value: a.id })))}'
          ></dv-select>
        </div>
        <div class="header-theme-desktop">
          <dv-segmented
            id="theme-switcher"
            value="${getTheme()}"
            items='[{"id":"light","label":"Светлая"},{"id":"dark","label":"Тёмная"}]'
          ></dv-segmented>
        </div>
        <div class="header-theme-mobile">
          <dv-theme-toggle id="theme-toggle-mobile" size="sm"></dv-theme-toggle>
        </div>
      </div>
    </div>

    <nav slot="sidebar" aria-label="Навигация по документации">
      <div class="sidebar-group">
        <div class="sidebar-group-title">Основы</div>
        <a class="sidebar-link" data-route="/overview" href="#/overview"><dv-icon name="home" size="15"></dv-icon>Состав</a>
        <a class="sidebar-link" data-route="/typography" href="#/typography"><dv-icon name="edit" size="15"></dv-icon>Типографика</a>
        <a class="sidebar-link" data-route="/tokens" href="#/tokens"><dv-icon name="palette" size="15"></dv-icon>Токены цвета</a>
        <a class="sidebar-link" data-route="/spacing" href="#/spacing"><dv-icon name="layout" size="15"></dv-icon>Отступы и сетка</a>
        <a class="sidebar-link" data-route="/effects" href="#/effects"><dv-icon name="sliders" size="15"></dv-icon>Эффекты и ховер</a>
        <a class="sidebar-link" data-route="/templates" href="#/templates"><dv-icon name="layers" size="15"></dv-icon>Шаблоны экранов</a>
      </div>

      ${Array.from(grouped.entries())
        .map(
          ([cat, docs]) => `
        <div class="sidebar-group">
          <div class="sidebar-group-title">${cat}</div>
          ${docs
            .map(
              (d) =>
                `<a class="sidebar-link" data-route="/components/${d.slug}" href="#/components/${d.slug}">${d.name}</a>`,
            )
            .join('')}
        </div>
      `,
        )
        .join('')}
    </nav>

    <dv-container size="lg" padding="none">
      <div id="page-root"></div>

      <footer class="site-footer">
        <dv-text variant="muted" inline>Diverlin UI Kit</dv-text>
        <dv-text variant="muted" inline>Web Components + Pure CSS</dv-text>
      </footer>
    </dv-container>
  </dv-app-shell>

  <dv-modal id="demo-modal" title="Подтверждение действия" size="sm">
    <dv-text variant="secondary">
      Модальное окно закрывается по клавише Escape, клику по фону или кнопке закрытия.
    </dv-text>
    <div slot="footer">
      <dv-button variant="secondary" id="btn-close-modal">Закрыть</dv-button>
      <dv-button variant="primary" id="btn-confirm-modal">Подтвердить</dv-button>
    </div>
  </dv-modal>

  <dv-drawer id="demo-drawer" title="Боковая панель" side="right">
    <dv-stack gap="4">
      <dv-text variant="secondary">Контент выдвижной панели адаптируется к активной теме.</dv-text>
      <dv-button variant="secondary" id="btn-close-drawer">Закрыть панель</dv-button>
    </dv-stack>
  </dv-drawer>

  <dv-command
    id="demo-cmd"
    items='[{"id":"overview","label":"Перейти к составу","icon":"home","shortcut":"1"},{"id":"inputs","label":"Открыть формы ввода","icon":"code","shortcut":"2"},{"id":"theme","label":"Переключить тему","icon":"palette","shortcut":"T"}]'
  ></dv-command>

  <dv-command id="global-cmd" placeholder="Найти компонент или раздел..."></dv-command>

  <dv-bottom-sheet id="demo-sheet" title="Быстрые фильтры">
    <dv-stack gap="4">
      <dv-text variant="secondary">Нижняя шторка закрывается по клавише Escape, клику по фону или кнопке закрытия.</dv-text>
      <dv-toggle label="Только активные" checked></dv-toggle>
      <dv-button variant="primary" id="btn-close-sheet">Применить</dv-button>
    </dv-stack>
  </dv-bottom-sheet>
`;

const pageRoot = document.getElementById('page-root')!;
const shell = document.getElementById('shell') as HTMLElement & { closeSidebar?: () => void };

function renderOverview(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="6">
      <dv-stack gap="3">
        <dv-heading level="display" font="display">Diverlin UI</dv-heading>
        <dv-text variant="secondary">
          Документация и песочница Web Components (&lt;dv-*&gt;) и CSS-токенов (--dv-*).
          Выберите компонент в меню слева для настройки параметров, просмотра спеки и кода подключения.
        </dv-text>
      </dv-stack>

      <dv-code lang="ts" code="import '@diverlin/uikit/styles';\nimport '@diverlin/uikit';\nimport { initTheme } from '@diverlin/uikit';\n\ninitTheme('light');"></dv-code>

      <dv-table>
        <table>
          <thead>
            <tr>
              <th>Модуль</th>
              <th>Импорт</th>
              <th>Компоненты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Actions</td>
              <td>@diverlin/uikit/actions</td>
              <td>Button, IconButton, ButtonGroup</td>
            </tr>
            <tr>
              <td>Inputs</td>
              <td>@diverlin/uikit/inputs</td>
              <td>Input, Textarea, Select, NumberInput, Checkbox, Radio, Toggle, Slider, Field</td>
            </tr>
            <tr>
              <td>Navigation</td>
              <td>@diverlin/uikit/navigation</td>
              <td>Tabs, Segmented, Breadcrumbs, Pagination, Steps</td>
            </tr>
            <tr>
              <td>Data Display</td>
              <td>@diverlin/uikit/data-display</td>
              <td>Heading, Text, Icon, Badge, Tag, Avatar, Skeleton, Progress, Spinner, Table, Code, Kbd</td>
            </tr>
            <tr>
              <td>Layout & Feedback</td>
              <td>@diverlin/uikit/layout, /feedback</td>
              <td>AppShell, Container, Stack, Grid, Card, Alert, Toast, Modal, Drawer, Dropdown, Popover, Tooltip, Accordion, Empty</td>
            </tr>
          </tbody>
        </table>
      </dv-table>
    </dv-stack>
  `;
}

function renderTypography(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="6">
      <dv-stack gap="2">
        <dv-heading level="1" font="display">Типографика и шрифты</dv-heading>
        <dv-text variant="secondary">Локальные woff2-шрифты (кириллица и латиница) без внешних запросов.</dv-text>
      </dv-stack>

      <dv-grid cols="auto-fit" min-width="240px" gap="4">
        <div class="controls-panel">
          <dv-text variant="xs">Dela Gothic One</dv-text>
          <dv-heading level="3" font="display">Заголовок</dv-heading>
          <dv-text variant="sm">Для level="display", "1" и "2".</dv-text>
        </div>
        <div class="controls-panel">
          <dv-text variant="xs">Onest</dv-text>
          <dv-heading level="4" font="sans">Основной текст</dv-heading>
          <dv-text variant="sm" tabular>Цифры 123 456.78 через tabular-nums.</dv-text>
        </div>
        <div class="controls-panel">
          <dv-text variant="xs">Montserrat Alternates</dv-text>
          <dv-heading level="4" font="alt">Вспомогательный</dv-heading>
          <dv-text font="alt" variant="sm">Точечное применение в интерфейсе.</dv-text>
        </div>
      </dv-grid>

      <dv-stack direction="horizontal" gap="2" align="center" wrap>
        <dv-text variant="sm" inline>Клавиши &lt;dv-kbd&gt;:</dv-text>
        <dv-kbd>Ctrl</dv-kbd>
        <dv-text variant="muted" inline>+</dv-text>
        <dv-kbd>K</dv-kbd>
        <dv-kbd>Esc</dv-kbd>
      </dv-stack>
    </dv-stack>
  `;
}

function renderTokens(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="8">
      <dv-stack gap="2">
        <dv-heading level="1" font="display">Токены цвета и градиенты</dv-heading>
        <dv-text variant="secondary">
          По умолчанию используется монохром (mono). При желании можно включить глобальный акцент (data-accent) или точечные атрибуты accent и gradient на отдельных компонентах.
        </dv-text>
      </dv-stack>

      <dv-stack gap="3">
        <dv-heading level="3" font="sans">1. Акцентные пресеты (кликните для проверки)</dv-heading>
        <dv-button-group>
          ${ACCENT_PRESETS.map(
            (a) => `
            <dv-button variant="${getAccent() === a.id ? 'primary' : 'secondary'}" size="sm" data-set-accent="${a.id}">
              <span style="width:10px;height:10px;border-radius:50%;background:${a.color};display:inline-block;"></span>
              <span>${a.label} (${a.id})</span>
            </dv-button>
          `,
          ).join('')}
        </dv-button-group>
      </dv-stack>

      <dv-stack gap="3">
        <dv-heading level="3" font="sans">2. Спокойные 2-тоновые градиенты</dv-heading>
        <dv-grid cols="auto-fit" min-width="240px" gap="4">
          <div class="swatch">
            <div class="swatch-color" style="height:64px;background: var(--dv-gradient-accent);"></div>
            <div class="swatch-meta">
              <dv-text variant="sm">Градиент акцента (кнопки, прогресс, слайдер)</dv-text>
              <dv-text variant="mono">--dv-gradient-accent</dv-text>
            </div>
          </div>
          <div class="swatch">
            <div class="swatch-color" style="height:64px;background: var(--dv-gradient-surface);"></div>
            <div class="swatch-meta">
              <dv-text variant="sm">Градиент поверхности (карточки и блоки)</dv-text>
              <dv-text variant="mono">--dv-gradient-surface</dv-text>
            </div>
          </div>
          <div class="swatch">
            <div class="swatch-color" style="height:64px;display:flex;align-items:center;padding-inline:14px;background:var(--dv-surface);">
              <dv-heading level="3" font="display" gradient>Градиент текста</dv-heading>
            </div>
            <div class="swatch-meta">
              <dv-text variant="sm">Градиент заголовков и эффектов</dv-text>
              <dv-text variant="mono">--dv-gradient-text</dv-text>
            </div>
          </div>
        </dv-grid>
      </dv-stack>

      <dv-stack gap="3">
        <dv-heading level="3" font="sans">3. Базовые токены поверхности</dv-heading>
        <div class="swatch-grid">
          ${TOKEN_SWATCHES.map(
            (s) => `
            <div class="swatch">
              <div class="swatch-color" style="background: var(${s.name});"></div>
              <div class="swatch-meta">
                <dv-text variant="sm">${s.label}</dv-text>
                <dv-text variant="mono">${s.name}</dv-text>
              </div>
            </div>
          `,
          ).join('')}
        </div>
      </dv-stack>
    </dv-stack>
  `;

  pageRoot.querySelectorAll<HTMLElement>('[data-set-accent]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = (btn.dataset.setAccent ?? 'mono') as DvAccent;
      setAccent(next);
      document.getElementById('accent-switcher')?.setAttribute('value', next);
      renderTokens();
    });
  });
}

function renderSpacing(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="6">
      <dv-stack gap="2">
        <dv-heading level="1" font="display">Отступы и сетка</dv-heading>
        <dv-text variant="secondary">Шкала кратна 4px. Группировка строится на отступах без вложенных рамок.</dv-text>
      </dv-stack>

      <dv-stack gap="3">
        ${SPACING_STEPS.map(
          (st) => `
          <div class="spacing-row">
            <div style="width:130px;"><dv-text variant="mono">${st.token}</dv-text></div>
            <div style="width:48px;"><dv-text tabular variant="sm">${st.px}px</dv-text></div>
            <div class="spacing-bar" style="width:${st.px * 3}px;"></div>
          </div>
        `,
        ).join('')}
      </dv-stack>
    </dv-stack>
  `;
}

function renderEffects(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="8">
      <dv-stack gap="2">
        <dv-heading level="1" font="display">Эффекты текста и ховера</dv-heading>
        <dv-text variant="secondary">
          CSS-утилиты только на transform и opacity (120–240ms) с поддержкой prefers-reduced-motion. Без glow и цветных градиентов.
        </dv-text>
      </dv-stack>

      <dv-stack gap="4">
        <dv-heading level="3" font="sans">1. Эффекты для текста</dv-heading>
        <dv-grid cols="auto-fit" min-width="260px" gap="4">
          <dv-card variant="surface" padding="md">
            <dv-stack gap="3">
              <dv-text variant="xs">.dv-link-underline</dv-text>
              <div>
                <a class="dv-link-underline" href="#/effects">Наведите на ссылку для подчёркивания</a>
              </div>
              <dv-text variant="mono">.dv-link-underline</dv-text>
            </dv-stack>
          </dv-card>

          <dv-card variant="surface" padding="md">
            <dv-stack gap="3">
              <dv-text variant="xs">.dv-text-shimmer</dv-text>
              <div class="dv-text-shimmer" style="font-weight:600;font-size:1.05rem;">
                Нейтральный тональный перелив
              </div>
              <dv-text variant="mono">.dv-text-shimmer</dv-text>
            </dv-stack>
          </dv-card>

          <dv-card variant="surface" padding="md">
            <dv-stack gap="3">
              <dv-text variant="xs">.dv-text-reveal + .dv-truncate-2</dv-text>
              <div class="dv-text-reveal dv-truncate-2" style="font-size:14px;color:var(--dv-text-secondary);">
                Длинный текст аккуратно обрезается на второй строке без резких скачков при первом появлении блока на экране.
              </div>
              <dv-text variant="mono">.dv-text-reveal / .dv-truncate-2</dv-text>
            </dv-stack>
          </dv-card>
        </dv-grid>
      </dv-stack>

      <dv-stack gap="4">
        <dv-heading level="3" font="sans">2. Ховер-эффекты и микровзаимодействия</dv-heading>
        <dv-grid cols="auto-fit" min-width="240px" gap="4">
          <dv-card variant="surface" padding="md" class="dv-hover-lift">
            <dv-stack gap="2">
              <dv-text variant="sm">Подъём при наведении</dv-text>
              <dv-text variant="mono">.dv-hover-lift</dv-text>
            </dv-stack>
          </dv-card>

          <dv-card variant="surface" padding="md" class="dv-hover-arrow">
            <dv-stack gap="2">
              <div style="display:flex;align-items:center;gap:6px;font-size:14px;font-weight:500;">
                <span>Сдвиг стрелки</span>
                <span class="dv-arrow"><dv-icon name="arrow-right" size="15"></dv-icon></span>
              </div>
              <dv-text variant="mono">.dv-hover-arrow + .dv-arrow</dv-text>
            </dv-stack>
          </dv-card>

          <dv-card variant="surface" padding="md" class="dv-pressable">
            <dv-stack gap="2">
              <dv-text variant="sm">Тактильное нажатие (кликните)</dv-text>
              <dv-text variant="mono">.dv-pressable</dv-text>
            </dv-stack>
          </dv-card>
        </dv-grid>
      </dv-stack>

      <dv-stack gap="3">
        <dv-heading level="3" font="sans">3. Фокус на активном пункте списка (.dv-hover-dim-group)</dv-heading>
        <div class="dv-hover-dim-group" style="display:flex;flex-direction:column;gap:6px;max-width:360px;">
          <div style="padding:10px 14px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);cursor:pointer;">Первый элемент списка</div>
          <div style="padding:10px 14px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);cursor:pointer;">Второй элемент списка</div>
          <div style="padding:10px 14px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);cursor:pointer;">Третий элемент списка</div>
        </div>
      </dv-stack>

      <dv-code lang="html" code='<a class="dv-link-underline">Ссылка</a>\n<div class="dv-text-shimmer">Загрузка...</div>\n<div class="dv-hover-lift">Карточка</div>\n<div class="dv-hover-dim-group">...</div>'></dv-code>
    </dv-stack>
  `;
}

function renderTemplates(): void {
  pageRoot.innerHTML = `
    <dv-stack gap="8">
      <dv-stack gap="2">
        <dv-heading level="1" font="display">Шаблоны экранов</dv-heading>
        <dv-text variant="secondary">Готовые композиции из компонентов @diverlin/uikit без рамок и лишнего шума.</dv-text>
      </dv-stack>

      <dv-stack gap="4">
        <dv-heading level="3" font="sans">1. Дашборд с метриками и таблицей</dv-heading>
        <dv-grid cols="auto-fit" min-width="190px" gap="4">
          <dv-stat label="Активные пользователи" value="2 418" delta="+11.4%" trend="up"></dv-stat>
          <dv-stat label="Конверсия" value="4.82%" delta="+0.6%" trend="up"></dv-stat>
          <dv-stat label="Ошибки API" value="0.04%" delta="-0.02%" trend="down"></dv-stat>
        </dv-grid>
        <dv-table sortable>
          <table>
            <thead>
              <tr><th>Сервис</th><th>Регион</th><th>Задержка (ms)</th></tr>
            </thead>
            <tbody>
              <tr><td>auth-gateway</td><td>eu-central</td><td>18</td></tr>
              <tr><td>media-cdn</td><td>us-east</td><td>42</td></tr>
              <tr><td>billing-worker</td><td>eu-west</td><td>29</td></tr>
            </tbody>
          </table>
        </dv-table>
      </dv-stack>

      <dv-grid cols="auto-fit" min-width="300px" gap="6">
        <dv-card variant="surface" padding="lg">
          <dv-stack gap="4">
            <dv-heading level="3" font="sans">2. Вход с OTP-кодом</dv-heading>
            <dv-field label="Email">
              <dv-input type="email" placeholder="name@company.com"></dv-input>
            </dv-field>
            <dv-field label="Код подтверждения">
              <dv-otp-input id="tpl-otp" length="6"></dv-otp-input>
            </dv-field>
            <dv-button variant="primary" full id="tpl-login-btn">Войти в аккаунт</dv-button>
          </dv-stack>
        </dv-card>

        <dv-card variant="surface" padding="lg">
          <dv-stack gap="4">
            <dv-heading level="3" font="sans">3. Настройки профиля</dv-heading>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
              <div style="display:flex;align-items:center;gap:12px;">
                <dv-avatar name="Алиса Волкова" size="md"></dv-avatar>
                <div>
                  <dv-text variant="body">Алиса Волкова</dv-text>
                  <dv-text variant="xs">alisa@diverlin.dev</dv-text>
                </div>
              </div>
              <dv-theme-toggle size="sm" show-label></dv-theme-toggle>
            </div>
            <dv-toggle label="Уведомления на почту" checked></dv-toggle>
            <dv-toggle label="Двухфакторная защита" checked></dv-toggle>
            <dv-button variant="secondary" id="tpl-save-btn">Сохранить настройки</dv-button>
          </dv-stack>
        </dv-card>
      </dv-grid>
    </dv-stack>
  `;

  document.getElementById('tpl-otp')?.addEventListener('dv-complete', (e) => {
    const code = (e as CustomEvent<{ value: string }>).detail.value;
    showToast({ message: `Код введён: ${code}`, variant: 'info' });
  });
  document.getElementById('tpl-login-btn')?.addEventListener('click', () => {
    showToast({ message: 'Вход выполнен', variant: 'success' });
  });
  document.getElementById('tpl-save-btn')?.addEventListener('click', () => {
    showToast({ message: 'Настройки профиля сохранены', variant: 'success' });
  });
}

function renderComponentPage(doc: ComponentDoc): void {
  const state: Record<string, string | boolean | number> = {
    _accent: 'default',
    _gradient: false,
  };
  for (const c of doc.controls) {
    state[c.key] = c.defaultValue;
  }

  pageRoot.innerHTML = `
    <dv-stack gap="6">
      <dv-stack gap="2">
        <dv-breadcrumbs items='[{"label":"Компоненты","href":"#/overview"},{"label":"${doc.category}"},{"label":"${doc.name}"}]'></dv-breadcrumbs>
        <dv-heading level="1" font="display">${doc.name}</dv-heading>
        <dv-text variant="secondary">${doc.description}</dv-text>
      </dv-stack>

      <dv-stack gap="2">
        <dv-heading level="4" font="sans">Подключение</dv-heading>
        <dv-code lang="ts" code="${doc.importPath}"></dv-code>
      </dv-stack>

      <dv-stack gap="3">
        <dv-heading level="4" font="sans">Предпросмотр и кастомизация</dv-heading>
        <div class="workbench ${!doc.controls.length && !doc.supportsAccent && !doc.supportsGradient ? 'no-controls' : ''}">
          <div class="preview-stage" id="comp-preview"></div>
          ${
            doc.controls.length || doc.supportsAccent || doc.supportsGradient
              ? `<div class="controls-panel" id="comp-controls">
                  <dv-text variant="xs">Параметры</dv-text>
                </div>`
              : ''
          }
        </div>
      </dv-stack>

      <dv-stack gap="2">
        <dv-heading level="4" font="sans">Код</dv-heading>
        <div id="comp-code-wrap"></div>
      </dv-stack>

      <dv-stack gap="2">
        <dv-heading level="4" font="sans">Спеки</dv-heading>
        <dv-table>
          <table>
            <thead>
              <tr>
                <th>Атрибут</th>
                <th>Тип</th>
                <th>По умолчанию</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              ${doc.specs
                .map(
                  (sp) => `
                <tr>
                  <td>${sp.name}</td>
                  <td>${sp.type}</td>
                  <td>${sp.defaultVal}</td>
                  <td>${sp.description}</td>
                </tr>
              `,
                )
                .join('')}
            </tbody>
          </table>
        </dv-table>
        ${
          doc.events?.length
            ? `<dv-text variant="sm">События: ${doc.events.map((e) => `<code>${e}</code>`).join(', ')}</dv-text>`
            : ''
        }
      </dv-stack>
    </dv-stack>
  `;

  const previewEl = document.getElementById('comp-preview')!;
  const controlsEl = document.getElementById('comp-controls');
  const codeWrapEl = document.getElementById('comp-code-wrap')!;

  const controlInputs = new Map<string, HTMLElement>();

  const decorateExtraAttrs = (rawCode: string): string => {
    const extra: string[] = [];
    if (doc.supportsAccent && state._accent && state._accent !== 'default') extra.push(`accent="${state._accent}"`);
    if (doc.supportsGradient && state._gradient) extra.push('gradient');
    if (!extra.length) return rawCode;
    return rawCode.replace(/^(<dv-[a-z-]+)/m, `$1 ${extra.join(' ')}`);
  };

  const updateCodeOnly = () => {
    const code = decorateExtraAttrs(doc.buildCode(state));
    codeWrapEl.innerHTML = '';
    const codeEl = document.createElement('dv-code');
    codeEl.setAttribute('lang', 'html');
    codeEl.setAttribute('code', code);
    codeWrapEl.appendChild(codeEl);
  };

  const updatePreviewAndCode = () => {
    previewEl.innerHTML = doc.renderPreview(state);
    previewEl.querySelectorAll<HTMLElement>('*').forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (tag.startsWith('dv-') && tag !== 'dv-text' && tag !== 'dv-heading' && tag !== 'dv-stack' && tag !== 'dv-grid') {
        if (doc.supportsAccent && state._accent && state._accent !== 'default') {
          el.setAttribute('accent', String(state._accent));
        } else {
          el.removeAttribute('accent');
        }
        if (doc.supportsGradient && state._gradient) el.setAttribute('gradient', '');
        else el.removeAttribute('gradient');
      }
    });
    updateCodeOnly();

    // Two-way sync from preview -> parameters & code
    const firstPreviewCtrl = previewEl.querySelector<HTMLElement>('*');
    if (firstPreviewCtrl && 'value' in state) {
      firstPreviewCtrl.addEventListener('dv-change', (e) => {
        const val = (e as CustomEvent<{ value?: string | number }>).detail?.value;
        if (val !== undefined && typeof val !== 'object') {
          state.value = val;
          const bound = controlInputs.get('value');
          if (bound) bound.setAttribute('value', String(val));
          updateCodeOnly();
        }
      });
    }

    if (doc.slug === 'overlays') {
      document.getElementById('pg-toast')?.addEventListener('click', () => {
        showToast({ message: 'Уведомление от Diverlin UI', variant: 'info' });
      });
      document.getElementById('pg-open-modal')?.addEventListener('click', () => {
        (document.getElementById('demo-modal') as HTMLElement & { show: () => void }).show();
      });
      document.getElementById('pg-open-drawer')?.addEventListener('click', () => {
        (document.getElementById('demo-drawer') as HTMLElement & { show: () => void }).show();
      });
    }

    if (doc.slug === 'confirm') {
      document.getElementById('pg-confirm-btn')?.addEventListener('click', async (e) => {
        const variant = (e.currentTarget as HTMLElement).dataset.variant === 'danger' ? 'danger' : 'primary';
        const ok = await confirmDialog({
          title: 'Подтвердить действие?',
          description: 'Вы можете закрыть это окно клавишей Escape или кликом по фону.',
          confirmText: variant === 'danger' ? 'Удалить' : 'Подтвердить',
          variant,
        });
        showToast({ message: ok ? 'Подтверждено' : 'Отменено', variant: ok ? 'info' : 'neutral' });
      });
      document.getElementById('pg-prompt-btn')?.addEventListener('click', async () => {
        const name = await promptDialog({
          title: 'Новое название',
          placeholder: 'Введите имя проекта...',
          confirmText: 'Сохранить',
        });
        if (name !== null) {
          showToast({ message: `Сохранено: ${name || '(пусто)'}`, variant: 'success' });
        }
      });
    }

    if (doc.slug === 'command') {
      document.getElementById('pg-open-cmd')?.addEventListener('click', () => {
        (document.getElementById('demo-cmd') as HTMLElement & { show: () => void }).show();
      });
      document.getElementById('pg-ctx')?.addEventListener('dv-select', (e) => {
        const id = (e as CustomEvent<{ id: string }>).detail.id;
        showToast({ message: `Выбран пункт: ${id}`, variant: 'info' });
      });
    }

    if (doc.slug === 'bottom-sheet') {
      document.getElementById('pg-open-sheet')?.addEventListener('click', () => {
        (document.getElementById('demo-sheet') as HTMLElement & { show: () => void }).show();
      });
    }
  };

  if (controlsEl) {
    for (const ctrl of doc.controls) {
      if (ctrl.type === 'select' && ctrl.options) {
        const field = document.createElement('dv-field');
        field.setAttribute('label', ctrl.label);
        const sel = document.createElement('dv-select');
        sel.setAttribute('size', 'sm');
        sel.setAttribute('value', String(state[ctrl.key]));
        sel.setAttribute('options', JSON.stringify(ctrl.options));
        sel.addEventListener('dv-change', (e) => {
          state[ctrl.key] = (e as CustomEvent<{ value: string }>).detail.value;
          updatePreviewAndCode();
        });
        field.appendChild(sel);
        controlsEl.appendChild(field);
        controlInputs.set(ctrl.key, sel);
      } else if (ctrl.type === 'boolean') {
        const tog = document.createElement('dv-toggle');
        tog.setAttribute('label', ctrl.label);
        if (state[ctrl.key]) tog.setAttribute('checked', '');
        tog.addEventListener('dv-change', (e) => {
          state[ctrl.key] = (e as CustomEvent<{ checked: boolean }>).detail.checked;
          updatePreviewAndCode();
        });
        controlsEl.appendChild(tog);
        controlInputs.set(ctrl.key, tog);
      } else if (ctrl.type === 'text') {
        const field = document.createElement('dv-field');
        field.setAttribute('label', ctrl.label);
        const inp = document.createElement('dv-input');
        inp.setAttribute('size', 'sm');
        inp.setAttribute('value', String(state[ctrl.key]));
        inp.addEventListener('dv-input', (e) => {
          state[ctrl.key] = (e as CustomEvent<{ value: string }>).detail.value;
          updatePreviewAndCode();
        });
        field.appendChild(inp);
        controlsEl.appendChild(field);
        controlInputs.set(ctrl.key, inp);
      } else if (ctrl.type === 'number') {
        const field = document.createElement('dv-field');
        field.setAttribute('label', ctrl.label);
        const num = document.createElement('dv-number-input');
        num.setAttribute('size', 'sm');
        num.setAttribute('value', String(state[ctrl.key]));
        num.addEventListener('dv-change', (e) => {
          state[ctrl.key] = (e as CustomEvent<{ value: number }>).detail.value;
          updatePreviewAndCode();
        });
        field.appendChild(num);
        controlsEl.appendChild(field);
        controlInputs.set(ctrl.key, num);
      }
    }

    if (doc.supportsAccent) {
      const accentField = document.createElement('dv-field');
      accentField.setAttribute('label', 'Акцент (accent)');
      const accentSel = document.createElement('dv-select');
      accentSel.setAttribute('size', 'sm');
      accentSel.setAttribute('value', 'default');
      accentSel.setAttribute(
        'options',
        JSON.stringify([
          { label: 'По умолчанию', value: 'default' },
          ...ACCENT_PRESETS.map((a) => ({ label: `${a.label} (${a.id})`, value: a.id })),
        ]),
      );
      accentSel.addEventListener('dv-change', (e) => {
        state._accent = (e as CustomEvent<{ value: string }>).detail.value;
        updatePreviewAndCode();
      });
      accentField.appendChild(accentSel);
      controlsEl.appendChild(accentField);
    }

    if (doc.supportsGradient) {
      const gradToggle = document.createElement('dv-toggle');
      gradToggle.setAttribute('label', 'Градиент (gradient)');
      gradToggle.addEventListener('dv-change', (e) => {
        state._gradient = (e as CustomEvent<{ checked: boolean }>).detail.checked;
        updatePreviewAndCode();
      });
      controlsEl.appendChild(gradToggle);
    }
  }

  updatePreviewAndCode();
}

function navigate(): void {
  const hash = window.location.hash.replace(/^#/, '') || '/overview';

  document.querySelectorAll<HTMLAnchorElement>('.sidebar-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-route') === hash);
  });

  if (hash === '/typography') renderTypography();
  else if (hash === '/tokens') renderTokens();
  else if (hash === '/spacing') renderSpacing();
  else if (hash === '/effects') renderEffects();
  else if (hash === '/templates') renderTemplates();
  else if (hash.startsWith('/components/')) {
    const slug = hash.replace('/components/', '');
    const doc = COMPONENT_DOCS.find((d) => d.slug === slug);
    if (doc) renderComponentPage(doc);
    else renderOverview();
  } else {
    renderOverview();
  }

  window.scrollTo({ top: 0 });
  shell.closeSidebar?.();
}

window.addEventListener('hashchange', navigate);
navigate();

document.getElementById('theme-switcher')?.addEventListener('dv-change', (e) => {
  const detail = (e as CustomEvent<{ value: DvTheme }>).detail;
  setTheme(detail.value);
});

document.getElementById('theme-toggle-mobile')?.addEventListener('dv-theme-change', (e) => {
  const detail = (e as CustomEvent<{ theme: DvTheme }>).detail;
  document.getElementById('theme-switcher')?.setAttribute('value', detail.theme);
});

document.getElementById('accent-switcher')?.addEventListener('dv-change', (e) => {
  const detail = (e as CustomEvent<{ value: DvAccent }>).detail;
  setAccent(detail.value);
});

const modal = document.getElementById('demo-modal') as HTMLElement & { close: () => void };
const drawer = document.getElementById('demo-drawer') as HTMLElement & { close: () => void };
document.getElementById('btn-close-modal')?.addEventListener('click', () => modal.close());
document.getElementById('btn-confirm-modal')?.addEventListener('click', () => {
  modal.close();
  showToast({ message: 'Действие подтверждено', variant: 'info' });
});
document.getElementById('btn-close-drawer')?.addEventListener('click', () => drawer.close());
document.getElementById('btn-close-sheet')?.addEventListener('click', () => {
  (document.getElementById('demo-sheet') as HTMLElement & { close: () => void }).close();
});
document.getElementById('demo-cmd')?.addEventListener('dv-select', (e) => {
  const id = (e as CustomEvent<{ id: string }>).detail.id;
  if (id === 'overview') window.location.hash = '#/overview';
  else if (id === 'inputs') window.location.hash = '#/components/input';
  else if (id === 'theme') {
    const next: DvTheme = getTheme() === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.getElementById('theme-switcher')?.setAttribute('value', next);
  }
});

// Global Ctrl+K quick search across all sections & components
const globalCmd = document.getElementById('global-cmd') as HTMLElement & { show: () => void };
const globalItems = [
  { id: '/overview', label: 'Состав и подключение', icon: 'home' },
  { id: '/typography', label: 'Типографика и шрифты', icon: 'edit' },
  { id: '/tokens', label: 'Токены цвета', icon: 'palette' },
  { id: '/spacing', label: 'Отступы и сетка', icon: 'layout' },
  { id: '/effects', label: 'Эффекты и ховер', icon: 'sliders' },
  { id: '/templates', label: 'Шаблоны экранов', icon: 'layers' },
  ...COMPONENT_DOCS.map((d) => ({
    id: `/components/${d.slug}`,
    label: `${d.name} (${d.category})`,
    icon: 'layers',
  })),
];
globalCmd?.setAttribute('items', JSON.stringify(globalItems));

document.getElementById('global-search-btn')?.addEventListener('click', () => globalCmd?.show());
document.addEventListener('keydown', (e) => {
  const isAltK = e.altKey && !e.ctrlKey && !e.metaKey && (e.code === 'KeyK' || e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'л');
  const path = e.composedPath();
  const inEditable = path.some(
    (node) =>
      node instanceof HTMLElement &&
      (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA' || node.isContentEditable),
  );
  const isSlash = !inEditable && !e.altKey && !e.ctrlKey && !e.metaKey && e.key === '/';

  if (isAltK || isSlash) {
    e.preventDefault();
    globalCmd?.show();
  }
});
globalCmd?.addEventListener('dv-select', (e) => {
  const id = (e as CustomEvent<{ id: string }>).detail.id;
  if (id) window.location.hash = `#${id}`;
});
