export interface ControlDef {
  key: string;
  label: string;
  type: 'select' | 'boolean' | 'text' | 'number';
  options?: string[];
  defaultValue: string | boolean | number;
}

export interface SpecRow {
  name: string;
  type: string;
  defaultVal: string;
  description: string;
}

export interface ComponentDoc {
  slug: string;
  name: string;
  category: string;
  importPath: string;
  description: string;
  controls: ControlDef[];
  supportsAccent?: boolean;
  supportsGradient?: boolean;
  renderPreview: (state: Record<string, string | boolean | number>) => string;
  buildCode: (state: Record<string, string | boolean | number>) => string;
  specs: SpecRow[];
  events?: string[];
}

export const COMPONENT_DOCS: ComponentDoc[] = [
  {
    slug: 'button',
    name: 'Button',
    category: 'Действия',
    importPath: "import '@diverlin/uikit/actions';",
    description: 'Кнопка для запуска действий и отправки форм. Поддерживает четыре варианта и состояние загрузки.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'variant', label: 'Вариант', type: 'select', options: ['primary', 'secondary', 'ghost', 'danger'], defaultValue: 'primary' },
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'label', label: 'Текст', type: 'text', defaultValue: 'Сохранить' },
      { key: 'loading', label: 'Загрузка', type: 'boolean', defaultValue: false },
      { key: 'disabled', label: 'Отключена', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-button variant="${s.variant}" size="${s.size}" ${s.loading ? 'loading' : ''} ${s.disabled ? 'disabled' : ''}>${s.label}</dv-button>`,
    buildCode: (s) =>
      `<dv-button variant="${s.variant}" size="${s.size}"${s.loading ? ' loading' : ''}${s.disabled ? ' disabled' : ''}>${s.label}</dv-button>`,
    specs: [
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", defaultVal: "'primary'", description: 'Визуальный стиль кнопки' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Высота и отступы' },
      { name: 'loading', type: 'boolean', defaultVal: 'false', description: 'Показывает спиннер и блокирует клик' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Отключает взаимодействие' },
      { name: 'full', type: 'boolean', defaultVal: 'false', description: 'Растягивает на всю ширину' },
    ],
  },
  {
    slug: 'icon-button',
    name: 'IconButton',
    category: 'Действия',
    importPath: "import '@diverlin/uikit/actions';",
    description: 'Компактная кнопка с иконкой и обязательным aria-label для доступности.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'icon', label: 'Иконка', type: 'select', options: ['settings', 'search', 'copy', 'plus', 'trash', 'edit'], defaultValue: 'settings' },
      { key: 'variant', label: 'Вариант', type: 'select', options: ['primary', 'secondary', 'ghost'], defaultValue: 'primary' },
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'disabled', label: 'Отключена', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-icon-button icon="${s.icon}" label="Действие" variant="${s.variant}" size="${s.size}" ${s.disabled ? 'disabled' : ''}></dv-icon-button>`,
    buildCode: (s) =>
      `<dv-icon-button icon="${s.icon}" label="Действие" variant="${s.variant}" size="${s.size}"${s.disabled ? ' disabled' : ''}></dv-icon-button>`,
    specs: [
      { name: 'icon', type: 'string', defaultVal: "''", description: 'Имя встроенной SVG-иконки' },
      { name: 'label', type: 'string', defaultVal: "'Action'", description: 'Текст для aria-label и title' },
      { name: 'variant', type: "'secondary' | 'ghost' | 'primary'", defaultVal: "'secondary'", description: 'Стиль кнопки' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Размер 30 / 36 / 42 px' },
    ],
  },
  {
    slug: 'input',
    name: 'Input & Textarea',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Текстовые поля ввода с мягким фокусом и сохранением курсора при вводе.',
    controls: [
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Введите текст...' },
      { key: 'error', label: 'Ошибка', type: 'boolean', defaultValue: false },
      { key: 'disabled', label: 'Отключено', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:360px;display:flex;flex-direction:column;gap:12px;">
        <dv-field label="Текстовое поле" ${s.error ? 'error="Проверьте корректность значения"' : ''}>
          <dv-input size="${s.size}" placeholder="${s.placeholder}" ${s.error ? 'error' : ''} ${s.disabled ? 'disabled' : ''}></dv-input>
        </dv-field>
        <dv-textarea rows="2" placeholder="Многострочный ввод" ${s.error ? 'error' : ''} ${s.disabled ? 'disabled' : ''}></dv-textarea>
      </div>
    `,
    buildCode: (s) =>
      `<dv-field label="Текстовое поле"${s.error ? ' error="Проверьте значение"' : ''}>\n  <dv-input size="${s.size}" placeholder="${s.placeholder}"${s.error ? ' error' : ''}${s.disabled ? ' disabled' : ''}></dv-input>\n</dv-field>`,
    specs: [
      { name: 'type', type: "'text' | 'email' | 'password' | 'number' | 'search'", defaultVal: "'text'", description: 'Тип поля' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Высота поля' },
      { name: 'error', type: 'boolean', defaultVal: 'false', description: 'Состояние ошибки' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Блокировка ввода' },
    ],
    events: ['dv-input', 'dv-change'],
  },
  {
    slug: 'select',
    name: 'Select',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Кастомный выпадающий список с плавным появлением меню, поддержкой клавиатуры и тем.',
    controls: [
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Выберите окружение' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:320px;">
        <dv-select
          size="${s.size}"
          placeholder="${s.placeholder}"
          ${s.disabled ? 'disabled' : ''}
          options='[{"label":"Production","value":"prod"},{"label":"Staging","value":"stage"},{"label":"Development","value":"dev"}]'
        ></dv-select>
      </div>
    `,
    buildCode: (s) =>
      `<dv-select\n  size="${s.size}"\n  placeholder="${s.placeholder}"${s.disabled ? '\n  disabled' : ''}\n  options='[{"label":"Production","value":"prod"},{"label":"Staging","value":"stage"}]'\n></dv-select>`,
    specs: [
      { name: 'value', type: 'string', defaultVal: "''", description: 'Выбранное значение' },
      { name: 'options', type: 'JSON Array', defaultVal: '[]', description: 'Массив { label, value, disabled? }' },
      { name: 'placeholder', type: 'string', defaultVal: "'Выберите значение'", description: 'Текст до выбора' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Высота триггера' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'number-input',
    name: 'NumberInput',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Числовой ввод со степперами +/- и выравниванием цифр tabular-nums.',
    controls: [
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'min', label: 'Минимум', type: 'number', defaultValue: 0 },
      { key: 'max', label: 'Максимум', type: 'number', defaultValue: 20 },
      { key: 'step', label: 'Шаг', type: 'number', defaultValue: 1 },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-number-input value="4" min="${s.min}" max="${s.max}" step="${s.step}" size="${s.size}" ${s.disabled ? 'disabled' : ''}></dv-number-input>`,
    buildCode: (s) =>
      `<dv-number-input value="4" min="${s.min}" max="${s.max}" step="${s.step}" size="${s.size}"${s.disabled ? ' disabled' : ''}></dv-number-input>`,
    specs: [
      { name: 'value', type: 'number', defaultVal: '0', description: 'Текущее число' },
      { name: 'min / max', type: 'number', defaultVal: '±Infinity', description: 'Границы значения' },
      { name: 'step', type: 'number', defaultVal: '1', description: 'Шаг изменения' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'toggles',
    name: 'Toggle, Checkbox & Radio',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Переключатели состояния с плавной анимацией без пересоздания DOM.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'checked', label: 'Активен', type: 'boolean', defaultValue: true },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <dv-stack direction="horizontal" gap="6" wrap>
        <dv-toggle label="Переключатель" ${s.checked ? 'checked' : ''} ${s.disabled ? 'disabled' : ''}></dv-toggle>
        <dv-checkbox label="Чекбокс" ${s.checked ? 'checked' : ''} ${s.disabled ? 'disabled' : ''}></dv-checkbox>
        <dv-radio name="demo-r" value="1" label="Опция A" ${s.checked ? 'checked' : ''} ${s.disabled ? 'disabled' : ''}></dv-radio>
        <dv-radio name="demo-r" value="2" label="Опция B" ${s.disabled ? 'disabled' : ''}></dv-radio>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-toggle label="Переключатель"${s.checked ? ' checked' : ''}${s.disabled ? ' disabled' : ''}></dv-toggle>\n<dv-checkbox label="Чекбокс"${s.checked ? ' checked' : ''}${s.disabled ? ' disabled' : ''}></dv-checkbox>`,
    specs: [
      { name: 'checked', type: 'boolean', defaultVal: 'false', description: 'Состояние включения' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Блокирует переключение' },
      { name: 'label', type: 'string', defaultVal: "''", description: 'Подпись справа' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'slider',
    name: 'Slider',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Эластичный слайдер с плавным перетягиванием и ступенчатый режим с отметинами.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'stepped', label: 'Ступенчатый с отметинами', type: 'boolean', defaultValue: true },
      { key: 'step', label: 'Шаг', type: 'number', defaultValue: 25 },
      { key: 'showValue', label: 'Показать значение', type: 'boolean', defaultValue: true },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:420px;">
        <dv-slider
          label="${s.stepped ? 'Ступенчатый слайдер' : 'Плавный эластичный слайдер'}"
          min="0"
          max="100"
          step="${s.step}"
          value="50"
          ${s.stepped ? 'stepped marks' : ''}
          ${s.showValue ? 'show-value' : ''}
          ${s.disabled ? 'disabled' : ''}
        ></dv-slider>
      </div>
    `,
    buildCode: (s) =>
      `<dv-slider\n  label="Значение"\n  min="0"\n  max="100"\n  step="${s.step}"\n  value="50"${s.stepped ? '\n  stepped\n  marks' : ''}${s.showValue ? '\n  show-value' : ''}${s.disabled ? '\n  disabled' : ''}\n></dv-slider>`,
    specs: [
      { name: 'min / max / step', type: 'number', defaultVal: '0 / 100 / 1', description: 'Диапазон и шаг' },
      { name: 'stepped', type: 'boolean', defaultVal: 'false', description: 'Привязка к шагам' },
      { name: 'marks', type: 'boolean | JSON', defaultVal: 'false', description: 'Отметины и подписи на треке' },
      { name: 'show-value', type: 'boolean', defaultVal: 'false', description: 'Вывод числа справа' },
    ],
    events: ['dv-input', 'dv-change'],
  },
  {
    slug: 'tabs',
    name: 'Tabs & Segmented',
    category: 'Навигация',
    importPath: "import '@diverlin/uikit/navigation';",
    description: 'Вкладки (segmented и underline) и отдельный переключатель сегментов со скользящим ползунком.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'variant', label: 'Вариант Tabs', type: 'select', options: ['segmented', 'underline'], defaultValue: 'segmented' },
    ],
    renderPreview: (s) => `
      <dv-stack gap="5" style="width:100%;max-width:420px;">
        <dv-tabs variant="${s.variant}" value="overview" items='[{"id":"overview","label":"Обзор"},{"id":"specs","label":"Спеки"},{"id":"code","label":"Код"}]'></dv-tabs>
        <dv-segmented value="week" items='[{"id":"day","label":"День"},{"id":"week","label":"Неделя"},{"id":"month","label":"Месяц"}]'></dv-segmented>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-tabs variant="${s.variant}" value="overview" items='[{"id":"overview","label":"Обзор"},{"id":"specs","label":"Спеки"}]'></dv-tabs>\n<dv-segmented value="week" items='[{"id":"day","label":"День"},{"id":"week","label":"Неделя"}]'></dv-segmented>`,
    specs: [
      { name: 'value', type: 'string', defaultVal: "''", description: 'Активный id' },
      { name: 'items', type: 'JSON Array', defaultVal: '[]', description: 'Список { id, label }' },
      { name: 'variant (dv-tabs)', type: "'segmented' | 'underline'", defaultVal: "'segmented'", description: 'Стиль вкладок' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'breadcrumbs',
    name: 'Breadcrumbs, Pagination & Steps',
    category: 'Навигация',
    importPath: "import '@diverlin/uikit/navigation';",
    description: 'Навигационная цепочка, постраничный переход и пошаговый индикатор.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'step', label: 'Текущий шаг Steps', type: 'number', defaultValue: 1 },
      { key: 'page', label: 'Страница Pagination', type: 'number', defaultValue: 2 },
    ],
    renderPreview: (s) => `
      <dv-stack gap="5" style="width:100%;">
        <dv-breadcrumbs items='[{"label":"Главная","href":"#/overview"},{"label":"Навигация","href":"#/components/breadcrumbs"},{"label":"Текущая"}]'></dv-breadcrumbs>
        <dv-steps current="${s.step}" steps='["Данные","Настройки","Проверка","Готово"]'></dv-steps>
        <dv-pagination page="${s.page}" total="7"></dv-pagination>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-breadcrumbs items='[{"label":"Главная","href":"#/overview"},{"label":"Раздел"}]'></dv-breadcrumbs>\n<dv-steps current="${s.step}" steps='["Данные","Настройки","Готово"]'></dv-steps>\n<dv-pagination page="${s.page}" total="7"></dv-pagination>`,
    specs: [
      { name: 'items (breadcrumbs)', type: 'JSON Array', defaultVal: '[]', description: 'Массив { label, href? }' },
      { name: 'current / steps', type: 'number / JSON', defaultVal: '0 / []', description: 'Активный шаг и подписи' },
      { name: 'page / total', type: 'number', defaultVal: '1 / 1', description: 'Текущая и всего страниц' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Заглушки загрузки с готовыми пресетами (profile, card, article) и многострочным текстом.',
    controls: [
      { key: 'preset', label: 'Пресет', type: 'select', options: ['card', 'profile', 'article', 'lines'], defaultValue: 'card' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:340px;">
        ${s.preset === 'lines' ? '<dv-skeleton lines="4"></dv-skeleton>' : `<dv-skeleton preset="${s.preset}"></dv-skeleton>`}
      </div>
    `,
    buildCode: (s) =>
      s.preset === 'lines' ? `<dv-skeleton lines="4"></dv-skeleton>` : `<dv-skeleton preset="${s.preset}"></dv-skeleton>`,
    specs: [
      { name: 'preset', type: "'card' | 'profile' | 'article'", defaultVal: "''", description: 'Готовая композиция' },
      { name: 'lines', type: 'number', defaultVal: '0', description: 'Число строк текста' },
      { name: 'variant', type: "'text' | 'rect' | 'circle'", defaultVal: "'text'", description: 'Базовая форма' },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/layout';",
    description: 'Контейнер карточки со слотами header, media и footer, а также горизонтальным режимом.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'variant', label: 'Вариант', type: 'select', options: ['elevated', 'surface', 'outline'], defaultValue: 'elevated' },
      { key: 'padding', label: 'Отступ', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'interactive', label: 'Интерактивная', type: 'boolean', defaultValue: true },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:360px;">
        <dv-card variant="${s.variant}" padding="${s.padding}" ${s.interactive ? 'interactive' : ''}>
          <div slot="header"><dv-heading level="4" font="sans">Заголовок карточки</dv-heading></div>
          <dv-text variant="secondary">Основной контент располагается внутри карточки без вложенных рамок.</dv-text>
          <div slot="footer" style="display:flex;justify-content:flex-end;">
            <dv-button size="sm" variant="secondary">Открыть</dv-button>
          </div>
        </dv-card>
      </div>
    `,
    buildCode: (s) =>
      `<dv-card variant="${s.variant}" padding="${s.padding}"${s.interactive ? ' interactive' : ''}>\n  <div slot="header">Заголовок</div>\n  Контент\n  <div slot="footer">Действие</div>\n</dv-card>`,
    specs: [
      { name: 'variant', type: "'elevated' | 'surface' | 'outline'", defaultVal: "'elevated'", description: 'Стиль поверхности' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Внутренние отступы' },
      { name: 'horizontal', type: 'boolean', defaultVal: 'false', description: 'Горизонтальное расположение' },
      { name: 'interactive', type: 'boolean', defaultVal: 'false', description: 'Подсветка границы при наведении' },
    ],
  },
  {
    slug: 'data-display',
    name: 'Avatar, Badge, Tag & Progress',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Аватары с подписями, нейтральные бейджи, интерактивные теги, прогресс-бар и спиннер.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'progress', label: 'Прогресс (%)', type: 'number', defaultValue: 68 },
    ],
    renderPreview: (s) => `
      <dv-stack gap="5" style="width:100%;max-width:440px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <dv-avatar name="Алиса Волкова" size="md"></dv-avatar>
          <div>
            <dv-text variant="body">Алиса Волкова</dv-text>
            <dv-text variant="xs">Дизайнер систем</dv-text>
          </div>
        </div>
        <dv-stack direction="horizontal" gap="2" wrap>
          <dv-badge variant="neutral">Нейтральный</dv-badge>
          <dv-badge variant="accent">Акцент</dv-badge>
          <dv-badge variant="success">Успешно</dv-badge>
          <dv-tag selected>Web Components</dv-tag>
          <dv-tag removable>Удаляемый тег</dv-tag>
          <dv-spinner size="sm" label="Загрузка"></dv-spinner>
        </dv-stack>
        <dv-progress label="Выполнение задачи" value="${s.progress}" show-value></dv-progress>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-avatar name="Алиса Волкова" size="md"></dv-avatar>\n<dv-badge variant="neutral">Статус</dv-badge>\n<dv-tag removable>Тег</dv-tag>\n<dv-progress label="Выполнение" value="${s.progress}" show-value></dv-progress>`,
    specs: [
      { name: 'name / src (avatar)', type: 'string', defaultVal: "''", description: 'Имя для инициалов или URL фото' },
      { name: 'removable (tag)', type: 'boolean', defaultVal: 'false', description: 'Кнопка удаления тега' },
      { name: 'value / max (progress)', type: 'number', defaultVal: '0 / 100', description: 'Текущее значение прогресса' },
    ],
  },
  {
    slug: 'overlays',
    name: 'Modal, Drawer, Dropdown & Popover',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/feedback';",
    description: 'Всплывающие окна, выдвижная панель, выпадающее меню, поповер, тултип, алерты и аккордеон.',
    controls: [
      { key: 'alertVariant', label: 'Тип Alert', type: 'select', options: ['info', 'success', 'warning', 'danger'], defaultValue: 'info' },
    ],
    renderPreview: (s) => `
      <dv-stack gap="4" style="width:100%;">
        <dv-alert variant="${s.alertVariant}" title="Уведомление без рамок" dismissible>
          Чистая тональная поверхность без обводок и пульсирующих точек; цвет выделяет только иконку.
        </dv-alert>
        <dv-button-group>
          <dv-button variant="secondary" id="pg-open-modal">Модальное окно</dv-button>
          <dv-button variant="secondary" id="pg-open-drawer">Боковая панель</dv-button>
          <dv-button variant="secondary" id="pg-toast">Тост</dv-button>
          <dv-dropdown>
            <dv-button slot="trigger" variant="secondary">Меню</dv-button>
            <button class="dropdown-item" type="button">Дублировать</button>
            <button class="dropdown-item" type="button">Экспорт</button>
          </dv-dropdown>
          <dv-popover>
            <dv-button slot="trigger" variant="ghost">Поповер</dv-button>
            <dv-text variant="sm">Контент внутри &lt;dv-popover&gt; закрывается по Escape.</dv-text>
          </dv-popover>
        </dv-button-group>
        <dv-accordion title="Раскрывающийся блок (Accordion)">
          Плавное появление контента через opacity и transform.
        </dv-accordion>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-alert variant="${s.alertVariant}" title="Заголовок" dismissible>Текст сообщения</dv-alert>\n<dv-popover>\n  <dv-button slot="trigger">Поповер</dv-button>\n  <div>Контент</div>\n</dv-popover>`,
    specs: [
      { name: 'open', type: 'boolean', defaultVal: 'false', description: 'Видимость Modal / Drawer / Dropdown / Popover' },
      { name: 'side (drawer)', type: "'left' | 'right'", defaultVal: "'right'", description: 'Сторона выезда панели' },
      { name: 'dismissible (alert)', type: 'boolean', defaultVal: 'false', description: 'Кнопка закрытия алерта' },
    ],
    events: ['dv-close', 'dv-dismiss', 'dv-toggle'],
  },
  {
    slug: 'search',
    name: 'SearchBox',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Строка поиска с плавной кнопкой очистки, индикатором загрузки и подсказкой горячей клавиши.',
    controls: [
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Поиск компонентов...' },
      { key: 'shortcut', label: 'Шорткат', type: 'text', defaultValue: 'Alt+K' },
      { key: 'loading', label: 'Загрузка', type: 'boolean', defaultValue: false },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:380px;">
        <dv-search size="${s.size}" placeholder="${s.placeholder}" shortcut="${s.shortcut}" ${s.loading ? 'loading' : ''} ${s.disabled ? 'disabled' : ''}></dv-search>
      </div>
    `,
    buildCode: (s) =>
      `<dv-search size="${s.size}" placeholder="${s.placeholder}"${s.shortcut ? ` shortcut="${s.shortcut}"` : ''}${s.loading ? ' loading' : ''}${s.disabled ? ' disabled' : ''}></dv-search>`,
    specs: [
      { name: 'value', type: 'string', defaultVal: "''", description: 'Текст запроса' },
      { name: 'shortcut', type: 'string', defaultVal: "''", description: 'Подсказка клавиши справа' },
      { name: 'loading', type: 'boolean', defaultVal: 'false', description: 'Показывает спиннер вместо лупы' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Высота поля' },
    ],
    events: ['dv-input', 'dv-change', 'dv-submit', 'dv-clear'],
  },
  {
    slug: 'file-picker',
    name: 'FilePicker',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Зона загрузки файлов с drag-and-drop, списком выбранных файлов и удалением.',
    controls: [
      { key: 'multiple', label: 'Несколько файлов', type: 'boolean', defaultValue: true },
      { key: 'hint', label: 'Подсказка', type: 'text', defaultValue: 'PNG, JPG или PDF до 10 MB' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:420px;">
        <dv-file-picker label="Перетащите файлы сюда или нажмите" hint="${s.hint}" ${s.multiple ? 'multiple' : ''} ${s.disabled ? 'disabled' : ''}></dv-file-picker>
      </div>
    `,
    buildCode: (s) =>
      `<dv-file-picker\n  label="Перетащите файлы сюда"\n  hint="${s.hint}"${s.multiple ? '\n  multiple' : ''}${s.disabled ? '\n  disabled' : ''}\n></dv-file-picker>`,
    specs: [
      { name: 'multiple', type: 'boolean', defaultVal: 'false', description: 'Выбор нескольких файлов' },
      { name: 'accept', type: 'string', defaultVal: "''", description: 'Фильтр расширений / MIME' },
      { name: 'hint', type: 'string', defaultVal: "''", description: 'Пояснение под заголовком' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'color-picker',
    name: 'ColorPicker',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Выбор цвета с палитрой пресетов, спектром и синхронизированным hex-полем.',
    controls: [
      { key: 'value', label: 'Цвет (Hex)', type: 'text', defaultValue: '#4f46e5' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-color-picker value="${s.value}" ${s.disabled ? 'disabled' : ''}></dv-color-picker>`,
    buildCode: (s) =>
      `<dv-color-picker value="${s.value}"${s.disabled ? ' disabled' : ''}></dv-color-picker>`,
    specs: [
      { name: 'value', type: 'string', defaultVal: "'#18181b'", description: 'Текущий hex-цвет' },
      { name: 'swatches', type: 'JSON Array', defaultVal: '12 цветов', description: 'Пользовательская палитра пресетов' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Блокирует выбор' },
    ],
    events: ['dv-input', 'dv-change'],
  },
  {
    slug: 'nav-rail',
    name: 'NavigationRail',
    category: 'Навигация',
    importPath: "import '@diverlin/uikit/navigation';",
    description: 'Компактная вертикальная панель навигации с тултипами и привязкой элементов к верху, центру и низу.',
    controls: [
      { key: 'mode', label: 'Расположение', type: 'select', options: ['split', 'top', 'center', 'bottom'], defaultValue: 'split' },
      { key: 'expanded', label: 'Развёрнутая панель', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => {
      const items =
        s.mode === 'split'
          ? '[{"id":"home","label":"Главная","icon":"home","align":"top"},{"id":"layers","label":"Компоненты","icon":"layers","align":"center"},{"id":"code","label":"Код","icon":"code","align":"center"},{"id":"settings","label":"Настройки","icon":"settings","align":"bottom"}]'
          : '[{"id":"home","label":"Главная","icon":"home"},{"id":"layers","label":"Компоненты","icon":"layers"},{"id":"settings","label":"Настройки","icon":"settings"}]';
      return `
      <div style="height:300px;display:flex;align-items:stretch;">
        <dv-nav-rail
          value="home"
          ${s.mode !== 'split' ? `justify="${s.mode}"` : ''}
          ${s.expanded ? 'expanded' : ''}
          items='${items}'
        ></dv-nav-rail>
      </div>
    `;
    },
    buildCode: (s) =>
      `<dv-nav-rail\n  value="home"${s.mode !== 'split' ? `\n  justify="${s.mode}"` : ''}${s.expanded ? '\n  expanded' : ''}\n  items='[{"id":"home","label":"Главная","icon":"home","align":"top"},{"id":"layers","label":"Компоненты","icon":"layers","align":"center"},{"id":"settings","label":"Настройки","icon":"settings","align":"bottom"}]'\n></dv-nav-rail>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '[]', description: 'Массив { id, label, icon, align?: "top"|"center"|"bottom" }' },
      { name: 'justify', type: "'top' | 'center' | 'bottom' | 'between'", defaultVal: "'top'", description: 'Общее выравнивание при отсутствии align у пунктов' },
      { name: 'value', type: 'string', defaultVal: "''", description: 'Активный пункт' },
      { name: 'expanded', type: 'boolean', defaultVal: 'false', description: 'Показывать подписи рядом с иконками' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'confirm',
    name: 'Confirm & Prompt',
    category: 'Лейаут и оверлеи',
    importPath: "import { confirmDialog, promptDialog } from '@diverlin/uikit/feedback';",
    description: 'Императивные и декларативные диалоги подтверждения действий и быстрого ввода.',
    controls: [
      { key: 'variant', label: 'Вариант', type: 'select', options: ['primary', 'danger'], defaultValue: 'danger' },
    ],
    renderPreview: (s) => `
      <dv-button-group>
        <dv-button variant="secondary" id="pg-confirm-btn" data-variant="${s.variant}">Открыть Confirm</dv-button>
        <dv-button variant="secondary" id="pg-prompt-btn">Открыть Prompt</dv-button>
      </dv-button-group>
    `,
    buildCode: (s) =>
      `const ok = await confirmDialog({\n  title: 'Удалить элемент?',\n  description: 'Действие нельзя будет отменить.',\n  confirmText: 'Удалить',\n  variant: '${s.variant}',\n});`,
    specs: [
      { name: 'title / description', type: 'string', defaultVal: "''", description: 'Заголовок и пояснение' },
      { name: 'variant', type: "'primary' | 'danger'", defaultVal: "'primary'", description: 'Стиль кнопки подтверждения' },
      { name: 'prompt', type: 'boolean', defaultVal: 'false', description: 'Включает поле ввода текста' },
    ],
    events: ['dv-confirm', 'dv-cancel'],
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Поиск по опциям с выпадающим списком и поддержкой множественного выбора (чипы).',
    controls: [
      { key: 'multiple', label: 'Мультиселект', type: 'boolean', defaultValue: true },
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:380px;">
        <dv-combobox
          size="${s.size}"
          ${s.multiple ? 'multiple value="react,ts"' : 'value="ts"'}
          ${s.disabled ? 'disabled' : ''}
          options='[{"label":"TypeScript","value":"ts"},{"label":"React","value":"react"},{"label":"Vue","value":"vue"},{"label":"Svelte","value":"svelte"},{"label":"Web Components","value":"wc"}]'
        ></dv-combobox>
      </div>
    `,
    buildCode: (s) =>
      `<dv-combobox\n  size="${s.size}"${s.multiple ? '\n  multiple\n  value="react,ts"' : '\n  value="ts"'}${s.disabled ? '\n  disabled' : ''}\n  options='[{"label":"TypeScript","value":"ts"},{"label":"React","value":"react"}]'\n></dv-combobox>`,
    specs: [
      { name: 'multiple', type: 'boolean', defaultVal: 'false', description: 'Выбор нескольких значений с чипами' },
      { name: 'value', type: 'string', defaultVal: "''", description: 'Значение или список через запятую' },
      { name: 'options', type: 'JSON Array', defaultVal: '[]', description: 'Массив { label, value }' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'date-picker',
    name: 'DatePicker',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Выбор даты через встроенный безрамочный календарь с навигацией по месяцам.',
    controls: [
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-date-picker size="${s.size}" value="2026-11-21" ${s.disabled ? 'disabled' : ''}></dv-date-picker>`,
    buildCode: (s) =>
      `<dv-date-picker size="${s.size}" value="2026-11-21"${s.disabled ? ' disabled' : ''}></dv-date-picker>`,
    specs: [
      { name: 'value', type: 'string (YYYY-MM-DD)', defaultVal: "''", description: 'Выбранная дата в ISO' },
      { name: 'placeholder', type: 'string', defaultVal: "'Выберите дату'", description: 'Текст до выбора' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Высота триггера' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'stat',
    name: 'Stat',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Блок числового показателя с выравниванием цифр tabular-nums и опциональной дельтой.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'trend', label: 'Тренд', type: 'select', options: ['up', 'down', 'neutral'], defaultValue: 'up' },
      { key: 'value', label: 'Значение', type: 'text', defaultValue: '1 284' },
      { key: 'delta', label: 'Дельта', type: 'text', defaultValue: '+14.2%' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:260px;">
        <dv-stat label="Активные сессии" value="${s.value}" delta="${s.delta}" trend="${s.trend}" hint="За последние 7 дней"></dv-stat>
      </div>
    `,
    buildCode: (s) =>
      `<dv-stat label="Активные сессии" value="${s.value}" delta="${s.delta}" trend="${s.trend}" hint="За 7 дней"></dv-stat>`,
    specs: [
      { name: 'label / value', type: 'string', defaultVal: "'' / '0'", description: 'Подпись и основное число' },
      { name: 'delta / trend', type: "string / 'up'|'down'|'neutral'", defaultVal: "'' / 'neutral'", description: 'Изменение и цвет акцента' },
      { name: 'hint', type: 'string', defaultVal: "''", description: 'Дополнительное пояснение' },
    ],
  },
  {
    slug: 'aspect-ratio',
    name: 'AspectRatio',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/layout';",
    description: 'Контейнер с фиксированными пропорциями сторон для медиа и превью.',
    controls: [
      { key: 'ratio', label: 'Пропорции', type: 'select', options: ['16/9', '4/3', '1/1', '21/9'], defaultValue: '16/9' },
      { key: 'radius', label: 'Скругление', type: 'select', options: ['none', 'sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:340px;">
        <dv-aspect-ratio ratio="${s.ratio}" radius="${s.radius}">
          <div style="display:flex;align-items:center;justify-content:center;color:var(--dv-text-muted);font-size:14px;">${s.ratio}</div>
        </dv-aspect-ratio>
      </div>
    `,
    buildCode: (s) =>
      `<dv-aspect-ratio ratio="${s.ratio}" radius="${s.radius}">\n  <img src="..." alt="..." />\n</dv-aspect-ratio>`,
    specs: [
      { name: 'ratio', type: 'string', defaultVal: "'16/9'", description: 'CSS aspect-ratio' },
      { name: 'radius', type: "'none' | 'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Скругление углов' },
    ],
  },
  {
    slug: 'command',
    name: 'Command & ContextMenu',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/feedback';",
    description: 'Палитра команд с быстрым поиском и контекстное меню по правому клику.',
    controls: [],
    renderPreview: () => `
      <dv-stack gap="4" style="width:100%;">
        <dv-button-group>
          <dv-button variant="secondary" id="pg-open-cmd">Открыть палитру команд</dv-button>
        </dv-button-group>
        <dv-context-menu id="pg-ctx" items='[{"id":"copy","label":"Копировать"},{"id":"dup","label":"Дублировать"},{"id":"del","label":"Удалить","danger":true}]'>
          <div style="padding:28px;border-radius:var(--dv-radius-md);background:var(--dv-surface);text-align:center;">
            <dv-text variant="secondary">Нажмите правой кнопкой мыши на эту область</dv-text>
          </div>
        </dv-context-menu>
      </dv-stack>
    `,
    buildCode: () =>
      `<dv-command id="cmd" items='[{"id":"theme","label":"Сменить тему","shortcut":"T"}]'></dv-command>\n<dv-context-menu items='[{"id":"copy","label":"Копировать"}]'>\n  <div>Область</div>\n</dv-context-menu>`,
    specs: [
      { name: 'open (command)', type: 'boolean', defaultVal: 'false', description: 'Открытие палитры (.show() / .close())' },
      { name: 'items', type: 'JSON Array', defaultVal: '[]', description: 'Список команд или пунктов меню' },
    ],
    events: ['dv-select', 'dv-close'],
  },
  {
    slug: 'otp-input',
    name: 'OTP Input',
    category: 'Формы ввода',
    importPath: "import '@diverlin/uikit/inputs';",
    description: 'Ввод кода подтверждения по ячейкам с автопереходом фокуса и вставкой из буфера обмена.',
    controls: [
      { key: 'length', label: 'Длина кода', type: 'number', defaultValue: 6 },
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'disabled', label: 'Отключён', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-otp-input length="${s.length}" size="${s.size}" ${s.disabled ? 'disabled' : ''}></dv-otp-input>`,
    buildCode: (s) =>
      `<dv-otp-input length="${s.length}" size="${s.size}"${s.disabled ? ' disabled' : ''}></dv-otp-input>`,
    specs: [
      { name: 'length', type: 'number', defaultVal: '6', description: 'Количество ячеек (2–8)' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Размер ячеек' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Блокирует ввод' },
    ],
    events: ['dv-input', 'dv-complete'],
  },
  {
    slug: 'timeline',
    name: 'Timeline',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Вертикальная лента событий с соединительной линией, иконками или нумерацией и временем в tabular-nums.',
    controls: [
      { key: 'variant', label: 'Маркеры', type: 'select', options: ['icons', 'numbered', 'minimal'], defaultValue: 'icons' },
      { key: 'dense', label: 'Компактный', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:440px;">
        <dv-timeline variant="${s.variant}" ${s.dense ? 'dense' : ''} items='[{"title":"Инициализация пакета","time":"14:10","description":"Настроены токены тем и локальные шрифты.","icon":"layers"},{"title":"Сборка Web Components","time":"14:25","description":"Скомпилированы 70 модулей без runtime-зависимостей.","icon":"code"},{"title":"Проверка в браузере","time":"14:40","description":"Проверены темы и клавиатурная навигация.","icon":"check-circle"}]'></dv-timeline>
      </div>
    `,
    buildCode: (s) =>
      `<dv-timeline\n  variant="${s.variant}"${s.dense ? '\n  dense' : ''}\n  items='[{"title":"Событие","time":"14:10","description":"Описание","icon":"check-circle"}]'\n></dv-timeline>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '[]', description: 'Массив { title, time?, description?, icon? }' },
      { name: 'variant', type: "'icons' | 'numbered' | 'minimal'", defaultVal: "'icons'", description: 'Вид маркеров на линии' },
      { name: 'dense', type: 'boolean', defaultVal: 'false', description: 'Уменьшенные отступы между шагами' },
    ],
  },
  {
    slug: 'tree',
    name: 'Tree',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Древовидный список вложенных узлов с раскрытием, сворачиванием и выбором активного элемента.',
    controls: [
      { key: 'expandAll', label: 'Раскрыть все узлы', type: 'boolean', defaultValue: false },
      { key: 'showIcons', label: 'Показывать иконки', type: 'boolean', defaultValue: true },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:300px;">
        <dv-tree ${s.expandAll ? 'expand-all' : ''} show-icons="${s.showIcons}" items='[{"id":"src","label":"src","icon":"layers","children":[{"id":"core","label":"core","icon":"code","children":[{"id":"theme","label":"theme.ts"},{"id":"icons","label":"icons.ts"}]},{"id":"styles","label":"styles","icon":"palette"}]}]'></dv-tree>
      </div>
    `,
    buildCode: (s) =>
      `<dv-tree${s.expandAll ? ' expand-all' : ''} show-icons="${s.showIcons}" items='[{"id":"src","label":"src","children":[{"id":"theme","label":"theme.ts"}]}]'></dv-tree>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '[]', description: 'Иерархия { id, label, icon?, children? }' },
      { name: 'selected', type: 'string', defaultVal: "''", description: 'id выбранного узла' },
      { name: 'expand-all', type: 'boolean', defaultVal: 'false', description: 'Раскрыть всё дерево по умолчанию' },
      { name: 'show-icons', type: 'boolean', defaultVal: 'true', description: 'Отображение иконок узлов' },
    ],
    events: ['dv-select'],
  },
  {
    slug: 'table',
    name: 'Table (Sortable)',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Таблица с тональным чередованием строк, tabular-nums и сортировкой по клику на заголовок.',
    controls: [
      { key: 'sortable', label: 'Сортировка', type: 'boolean', defaultValue: true },
      { key: 'dense', label: 'Компактная', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) => `
      <div style="width:100%;">
        <dv-table ${s.sortable ? 'sortable' : ''} ${s.dense ? 'dense' : ''}>
          <table>
            <thead>
              <tr><th>Компонент</th><th>Категория</th><th>Размер (kB)</th></tr>
            </thead>
            <tbody>
              <tr><td>dv-button</td><td>Actions</td><td>5.99</td></tr>
              <tr><td>dv-slider</td><td>Inputs</td><td>14.20</td></tr>
              <tr><td>dv-modal</td><td>Feedback</td><td>11.40</td></tr>
            </tbody>
          </table>
        </dv-table>
      </div>
    `,
    buildCode: (s) =>
      `<dv-table${s.sortable ? ' sortable' : ''}${s.dense ? ' dense' : ''}>\n  <table>...</table>\n</dv-table>`,
    specs: [
      { name: 'sortable', type: 'boolean', defaultVal: 'false', description: 'Сортировка по клику на th' },
      { name: 'dense', type: 'boolean', defaultVal: 'false', description: 'Уменьшенные отступы ячеек' },
    ],
    events: ['dv-sort'],
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/layout';",
    description: 'Горизонтальный слайдер со snap-прокруткой и кнопками навигации.',
    controls: [
      { key: 'step', label: 'Шаг прокрутки (px)', type: 'number', defaultValue: 260 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:480px;">
        <dv-carousel step="${s.step}" gap="4">
          <div style="width:220px;padding:20px;border-radius:var(--dv-radius-md);background:var(--dv-surface);">Слайд 1</div>
          <div style="width:220px;padding:20px;border-radius:var(--dv-radius-md);background:var(--dv-surface);">Слайд 2</div>
          <div style="width:220px;padding:20px;border-radius:var(--dv-radius-md);background:var(--dv-surface);">Слайд 3</div>
          <div style="width:220px;padding:20px;border-radius:var(--dv-radius-md);background:var(--dv-surface);">Слайд 4</div>
        </dv-carousel>
      </div>
    `,
    buildCode: (s) =>
      `<dv-carousel step="${s.step}" gap="4">\n  <div>Слайд 1</div>\n  <div>Слайд 2</div>\n</dv-carousel>`,
    specs: [
      { name: 'step', type: 'number', defaultVal: '280', description: 'Сдвиг в пикселях по клику' },
      { name: 'gap', type: 'string | number', defaultVal: "'4'", description: 'Отступ между слайдами' },
    ],
  },
  {
    slug: 'code-kbd',
    name: 'Code & Kbd',
    category: 'Данные',
    importPath: "import '@diverlin/uikit/data-display';",
    description: 'Блок кода со встроенной кнопкой копирования и отображение горячих клавиш.',
    controls: [
      { key: 'lang', label: 'Язык', type: 'select', options: ['ts', 'html', 'css'], defaultValue: 'ts' },
    ],
    renderPreview: (s) => `
      <dv-stack gap="4" style="width:100%;">
        <dv-code lang="${s.lang}" code="import { setTheme } from '@diverlin/uikit';\nsetTheme('dark');"></dv-code>
        <dv-stack direction="horizontal" gap="2" align="center">
          <dv-kbd>Alt</dv-kbd>
          <dv-text variant="muted" inline>+</dv-text>
          <dv-kbd>K</dv-kbd>
          <dv-text variant="sm" inline>Быстрый поиск по документации</dv-text>
        </dv-stack>
      </dv-stack>
    `,
    buildCode: (s) =>
      `<dv-code lang="${s.lang}" code="setTheme('dark');"></dv-code>\n<dv-kbd>Alt</dv-kbd> + <dv-kbd>K</dv-kbd>`,
    specs: [
      { name: 'lang', type: 'string', defaultVal: "'html'", description: 'Подпись языка в шапке блока' },
      { name: 'code', type: 'string', defaultVal: "''", description: 'Текст кода для отображения и копирования' },
    ],
    events: ['dv-copy'],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/feedback';",
    description: 'Всплывающая текстовая подсказка при наведении или фокусе с клавиатуры.',
    controls: [
      { key: 'position', label: 'Позиция', type: 'select', options: ['top', 'bottom'], defaultValue: 'top' },
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Подсказка над элементом' },
    ],
    renderPreview: (s) => `
      <dv-tooltip text="${s.text}" position="${s.position}">
        <dv-button variant="secondary">Наведите курсор</dv-button>
      </dv-tooltip>
    `,
    buildCode: (s) =>
      `<dv-tooltip text="${s.text}" position="${s.position}">\n  <dv-button variant="secondary">Кнопка</dv-button>\n</dv-tooltip>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Текст подсказки' },
      { name: 'position', type: "'top' | 'bottom'", defaultVal: "'top'", description: 'Расположение относительно триггера' },
    ],
  },
  {
    slug: 'grid-stack',
    name: 'Grid & Stack',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/layout';",
    description: 'Адаптивная сетка с auto-fit и флекс-стек на базе 4px-шкалы отступов.',
    controls: [
      { key: 'gap', label: 'Отступ (gap)', type: 'select', options: ['2', '4', '6', '8'], defaultValue: '4' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;">
        <dv-grid cols="auto-fit" min-width="140px" gap="${s.gap}">
          <div style="padding:16px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);">Блок 1</div>
          <div style="padding:16px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);">Блок 2</div>
          <div style="padding:16px;border-radius:var(--dv-radius-sm);background:var(--dv-surface);">Блок 3</div>
        </dv-grid>
      </div>
    `,
    buildCode: (s) =>
      `<dv-grid cols="auto-fit" min-width="240px" gap="${s.gap}">\n  <div>Элемент 1</div>\n  <div>Элемент 2</div>\n</dv-grid>`,
    specs: [
      { name: 'cols / min-width (grid)', type: 'string', defaultVal: "'auto-fit' / '260px'", description: 'Колонки или минимальная ширина' },
      { name: 'direction (stack)', type: "'vertical' | 'horizontal'", defaultVal: "'vertical'", description: 'Направление стека' },
      { name: 'gap', type: 'number | string', defaultVal: "'4'", description: 'Шаг шкалы --dv-space-*' },
    ],
  },
  {
    slug: 'copy-button',
    name: 'CopyButton',
    category: 'Действия',
    importPath: "import '@diverlin/uikit/actions';",
    description: 'Кнопка копирования в буфер обмена с плавной сменой иконки на галочку.',
    controls: [
      { key: 'variant', label: 'Вариант', type: 'select', options: ['secondary', 'ghost'], defaultValue: 'secondary' },
      { key: 'size', label: 'Размер', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { key: 'label', label: 'Подпись', type: 'text', defaultValue: 'Копировать токен' },
    ],
    renderPreview: (s) =>
      `<dv-copy-button value="dv_live_token_9481" label="${s.label}" variant="${s.variant}" size="${s.size}"></dv-copy-button>`,
    buildCode: (s) =>
      `<dv-copy-button value="dv_live_token_9481" label="${s.label}" variant="${s.variant}" size="${s.size}"></dv-copy-button>`,
    specs: [
      { name: 'value', type: 'string', defaultVal: "''", description: 'Копируемая строка' },
      { name: 'label', type: 'string', defaultVal: "''", description: 'Текст кнопки (если пустой — только иконка)' },
      { name: 'variant', type: "'secondary' | 'ghost'", defaultVal: "'secondary'", description: 'Стиль кнопки' },
    ],
    events: ['dv-copy'],
  },
  {
    slug: 'bottom-sheet',
    name: 'BottomSheet',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/feedback';",
    description: 'Нижняя выдвижная шторка для мобильных сценариев и быстрых действий.',
    controls: [],
    renderPreview: () => `
      <dv-button variant="secondary" id="pg-open-sheet">Открыть BottomSheet</dv-button>
    `,
    buildCode: () =>
      `<dv-bottom-sheet id="sheet" title="Фильтры">\n  <div>Содержимое шторки</div>\n</dv-bottom-sheet>`,
    specs: [
      { name: 'open', type: 'boolean', defaultVal: 'false', description: 'Видимость шторки (.show() / .close())' },
      { name: 'title', type: 'string', defaultVal: "''", description: 'Заголовок шторки' },
    ],
    events: ['dv-close'],
  },
  {
    slug: 'split-pane',
    name: 'SplitPane',
    category: 'Лейаут и оверлеи',
    importPath: "import '@diverlin/uikit/layout';",
    description: 'Две панели с перетягиваемым разделителем для редакторов и дашбордов.',
    controls: [
      { key: 'value', label: 'Ширина левой панели (%)', type: 'number', defaultValue: 40 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;height:200px;">
        <dv-split-pane value="${s.value}" min="25" max="75">
          <div slot="left"><dv-text variant="sm">Левая панель</dv-text></div>
          <div slot="right"><dv-text variant="sm">Правая панель</dv-text></div>
        </dv-split-pane>
      </div>
    `,
    buildCode: (s) =>
      `<dv-split-pane value="${s.value}" min="25" max="75">\n  <div slot="left">Левая панель</div>\n  <div slot="right">Правая панель</div>\n</dv-split-pane>`,
    specs: [
      { name: 'value', type: 'number', defaultVal: '50', description: 'Доля левой панели в %' },
      { name: 'min / max', type: 'number', defaultVal: '20 / 80', description: 'Ограничения перетягивания' },
    ],
    events: ['dv-resize'],
  },
  {
    slug: 'blur-text',
    name: 'BlurText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Плавное проявление заголовка из размытия по словам или по символам.',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Проявление текста из размытия' },
      { key: 'by', label: 'Разбиение', type: 'select', options: ['words', 'chars'], defaultValue: 'words' },
      { key: 'direction', label: 'Направление', type: 'select', options: ['bottom', 'top'], defaultValue: 'bottom' },
      { key: 'delay', label: 'Задержка (ms)', type: 'number', defaultValue: 60 },
    ],
    renderPreview: (s) =>
      `<dv-blur-text text="${s.text}" by="${s.by}" direction="${s.direction}" delay="${s.delay}"></dv-blur-text>`,
    buildCode: (s) =>
      `<dv-blur-text text="${s.text}" by="${s.by}" direction="${s.direction}" delay="${s.delay}"></dv-blur-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Отображаемая фраза' },
      { name: 'by', type: "'words' | 'chars'", defaultVal: "'words'", description: 'Анимация по словам или символам' },
      { name: 'direction', type: "'bottom' | 'top'", defaultVal: "'bottom'", description: 'Направление выезда' },
      { name: 'delay', type: 'number', defaultVal: '55', description: 'Шаг задержки в мс' },
    ],
  },
  {
    slug: 'split-text',
    name: 'SplitText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Каскадный выезд букв или слов из маски снизу вверх.',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Каскадная типографика' },
      { key: 'by', label: 'Разбиение', type: 'select', options: ['chars', 'words'], defaultValue: 'chars' },
      { key: 'stagger', label: 'Шаг (ms)', type: 'number', defaultValue: 28 },
    ],
    renderPreview: (s) =>
      `<dv-split-text text="${s.text}" by="${s.by}" stagger="${s.stagger}"></dv-split-text>`,
    buildCode: (s) =>
      `<dv-split-text text="${s.text}" by="${s.by}" stagger="${s.stagger}"></dv-split-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Текст заголовка' },
      { name: 'by', type: "'chars' | 'words'", defaultVal: "'chars'", description: 'По буквам или словам' },
      { name: 'stagger', type: 'number', defaultVal: '28', description: 'Задержка между элементами (мс)' },
    ],
  },
  {
    slug: 'decrypted-text',
    name: 'DecryptedText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Матричная расшифровка текста через перебор символов при наведении или появлении.',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'DIVERLIN_SYSTEM_READY' },
      { key: 'trigger', label: 'Триггер', type: 'select', options: ['hover', 'mount', 'both'], defaultValue: 'both' },
      { key: 'speed', label: 'Скорость (ms)', type: 'number', defaultValue: 35 },
    ],
    renderPreview: (s) =>
      `<dv-decrypted-text text="${s.text}" trigger="${s.trigger}" speed="${s.speed}"></dv-decrypted-text>`,
    buildCode: (s) =>
      `<dv-decrypted-text text="${s.text}" trigger="${s.trigger}" speed="${s.speed}"></dv-decrypted-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Итоговая строка' },
      { name: 'trigger', type: "'hover' | 'mount' | 'both'", defaultVal: "'hover'", description: 'Условие запуска' },
      { name: 'speed', type: 'number', defaultVal: '35', description: 'Интервал шага в мс' },
    ],
  },
  {
    slug: 'rolling-text',
    name: 'RollingText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Двухслойный вертикальный переворот букв волной при наведении курсора (Skiper Text Roll).',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Наведите курсор' },
      { key: 'stagger', label: 'Волна (ms)', type: 'number', defaultValue: 16 },
    ],
    renderPreview: (s) =>
      `<dv-rolling-text text="${s.text}" stagger="${s.stagger}"></dv-rolling-text>`,
    buildCode: (s) =>
      `<dv-rolling-text text="${s.text}" stagger="${s.stagger}"></dv-rolling-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Текст для переворота' },
      { name: 'stagger', type: 'number', defaultVal: '16', description: 'Задержка волны по буквам (мс)' },
    ],
  },
  {
    slug: 'rotating-text',
    name: 'RotatingText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Циклическая вертикальная смена ключевых слов внутри заголовка.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'prefix', label: 'Префикс', type: 'text', defaultValue: 'Дизайн:' },
      { key: 'interval', label: 'Интервал (ms)', type: 'number', defaultValue: 2000 },
    ],
    renderPreview: (s) =>
      `<dv-rotating-text prefix="${s.prefix}" interval="${s.interval}" words='["Чистый","Безрамочный","Быстрый"]'></dv-rotating-text>`,
    buildCode: (s) =>
      `<dv-rotating-text prefix="${s.prefix}" interval="${s.interval}" words='["Чистый","Безрамочный","Быстрый"]'></dv-rotating-text>`,
    specs: [
      { name: 'prefix', type: 'string', defaultVal: "''", description: 'Статичная часть слева' },
      { name: 'words', type: 'JSON Array', defaultVal: '[]', description: 'Массив сменяемых слов' },
      { name: 'interval', type: 'number', defaultVal: '2200', description: 'Период смены в мс' },
    ],
  },
  {
    slug: 'count-up',
    name: 'CountUp',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Анимированный числовой счётчик с выравниванием tabular-nums и плавным замедлением.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'to', label: 'Конечное число', type: 'number', defaultValue: 4820 },
      { key: 'duration', label: 'Длительность (ms)', type: 'number', defaultValue: 1200 },
      { key: 'suffix', label: 'Суффикс', type: 'text', defaultValue: '+' },
    ],
    renderPreview: (s) =>
      `<dv-count-up from="0" to="${s.to}" duration="${s.duration}" suffix="${s.suffix}"></dv-count-up>`,
    buildCode: (s) =>
      `<dv-count-up from="0" to="${s.to}" duration="${s.duration}" suffix="${s.suffix}"></dv-count-up>`,
    specs: [
      { name: 'from / to', type: 'number', defaultVal: '0 / 1280', description: 'Начальное и конечное значение' },
      { name: 'duration', type: 'number', defaultVal: '1200', description: 'Время анимации в мс' },
      { name: 'prefix / suffix', type: 'string', defaultVal: "''", description: 'Строка до и после числа' },
    ],
  },
  {
    slug: 'true-focus',
    name: 'TrueFocus',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Фокус на активном слове с мягким размытием соседних слов и скользящей тональной подложкой.',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Фраза', type: 'text', defaultValue: 'Фокус На Главном Элементе' },
      { key: 'mode', label: 'Режим', type: 'select', options: ['hover', 'auto'], defaultValue: 'hover' },
    ],
    renderPreview: (s) =>
      `<dv-true-focus text="${s.text}" mode="${s.mode}"></dv-true-focus>`,
    buildCode: (s) =>
      `<dv-true-focus text="${s.text}" mode="${s.mode}"></dv-true-focus>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Слова через пробел' },
      { name: 'mode', type: "'hover' | 'auto'", defaultVal: "'hover'", description: 'По наведению или автоцикл' },
      { name: 'interval', type: 'number', defaultVal: '1600', description: 'Интервал автоцикла в мс' },
    ],
  },
  {
    slug: 'typewriter',
    name: 'Typewriter',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Печатная машинка с циклической печатью и удалением фраз.',
    supportsAccent: true,
    controls: [
      { key: 'speed', label: 'Скорость печати (ms)', type: 'number', defaultValue: 65 },
      { key: 'loop', label: 'Повторять по кругу', type: 'boolean', defaultValue: true },
    ],
    renderPreview: (s) =>
      `<dv-typewriter speed="${s.speed}" loop="${s.loop}" words='["Web Components","Pure CSS Tokens","Zero Runtime Deps"]'></dv-typewriter>`,
    buildCode: (s) =>
      `<dv-typewriter speed="${s.speed}" loop="${s.loop}" words='["Web Components","Pure CSS Tokens"]'></dv-typewriter>`,
    specs: [
      { name: 'words', type: 'JSON Array', defaultVal: '[]', description: 'Список фраз' },
      { name: 'speed', type: 'number', defaultVal: '70', description: 'Скорость набора одного символа (мс)' },
      { name: 'loop', type: 'boolean', defaultVal: 'true', description: 'Бесконечный цикл' },
    ],
  },
  {
    slug: 'magnetic',
    name: 'Magnetic',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Магнитный контейнер, притягивающий вложенную кнопку или иконку к курсору мыши.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'strength', label: 'Сила притяжения', type: 'select', options: ['0.2', '0.35', '0.5'], defaultValue: '0.35' },
    ],
    renderPreview: (s) => `
      <dv-magnetic strength="${s.strength}">
        <dv-button variant="primary" size="lg">Наведите и поводите курсором</dv-button>
      </dv-magnetic>
    `,
    buildCode: (s) =>
      `<dv-magnetic strength="${s.strength}">\n  <dv-button variant="primary">Магнитная кнопка</dv-button>\n</dv-magnetic>`,
    specs: [
      { name: 'strength', type: 'number', defaultVal: '0.35', description: 'Коэффициент смещения за курсором' },
      { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Отключает эффект' },
    ],
  },
  {
    slug: 'spotlight-card',
    name: 'SpotlightCard',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Безрамочная карточка с мягким монохромным пятном подсветки поверхности под курсором.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'size', label: 'Радиус пятна (px)', type: 'number', defaultValue: 240 },
      { key: 'padding', label: 'Отступ', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'lg' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:360px;">
        <dv-spotlight-card size="${s.size}" padding="${s.padding}">
          <dv-stack gap="2">
            <dv-heading level="4" font="sans">Тональный прожектор</dv-heading>
            <dv-text variant="secondary">Поводите курсором по карточке: подсветка строится на полутонах темы без неона.</dv-text>
          </dv-stack>
        </dv-spotlight-card>
      </div>
    `,
    buildCode: (s) =>
      `<dv-spotlight-card size="${s.size}" padding="${s.padding}">\n  <div>Контент карточки</div>\n</dv-spotlight-card>`,
    specs: [
      { name: 'size', type: 'number', defaultVal: '240', description: 'Радиус пятна в пикселях' },
      { name: 'padding', type: "'sm' | 'md' | 'lg'", defaultVal: "'lg'", description: 'Внутренний отступ' },
    ],
  },
  {
    slug: 'tilt-card',
    name: 'TiltCard',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Карточка с плавным 3D-наклоном в сторону курсора.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'maxTilt', label: 'Угол наклона (deg)', type: 'number', defaultValue: 10 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:340px;">
        <dv-tilt-card max-tilt="${s.maxTilt}" padding="lg">
          <dv-stack gap="2">
            <dv-heading level="4" font="sans">3D Перспектива</dv-heading>
            <dv-text variant="secondary">Наклон рассчитывается относительно центра карточки и плавно возвращается в 0°.</dv-text>
          </dv-stack>
        </dv-tilt-card>
      </div>
    `,
    buildCode: (s) =>
      `<dv-tilt-card max-tilt="${s.maxTilt}" padding="lg">\n  <div>Контент</div>\n</dv-tilt-card>`,
    specs: [
      { name: 'max-tilt', type: 'number', defaultVal: '10', description: 'Максимальный угол наклона в градусах' },
      { name: 'padding', type: "'sm' | 'md' | 'lg'", defaultVal: "'lg'", description: 'Внутренний отступ' },
    ],
  },
  {
    slug: 'marquee',
    name: 'Marquee',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Бесконечная бегущая лента элементов с паузой при наведении.',
    controls: [
      { key: 'direction', label: 'Направление', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
      { key: 'speed', label: 'Длительность цикла (s)', type: 'number', defaultValue: 16 },
      { key: 'pause', label: 'Пауза при наведении', type: 'boolean', defaultValue: true },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:460px;">
        <dv-marquee direction="${s.direction}" speed="${s.speed}" pause-on-hover="${s.pause}"></dv-marquee>
      </div>
    `,
    buildCode: (s) =>
      `<dv-marquee direction="${s.direction}" speed="${s.speed}" pause-on-hover="${s.pause}"></dv-marquee>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '6 элементов', description: 'Список строк для ленты' },
      { name: 'direction', type: "'left' | 'right'", defaultVal: "'left'", description: 'Направление движения' },
      { name: 'speed', type: 'number', defaultVal: '16', description: 'Время полного цикла в секундах' },
    ],
  },
  {
    slug: 'dock',
    name: 'Dock',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Плавающая панель иконок с волновым увеличением элементов рядом с курсором.',
    controls: [
      { key: 'baseSize', label: 'Базовый размер (px)', type: 'number', defaultValue: 42 },
      { key: 'maxSize', label: 'Макс. размер (px)', type: 'number', defaultValue: 58 },
    ],
    renderPreview: (s) =>
      `<dv-dock base-size="${s.baseSize}" max-size="${s.maxSize}"></dv-dock>`,
    buildCode: (s) =>
      `<dv-dock base-size="${s.baseSize}" max-size="${s.maxSize}"></dv-dock>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '5 иконок', description: 'Массив { id, label, icon }' },
      { name: 'base-size / max-size', type: 'number', defaultVal: '42 / 58', description: 'Размеры иконок в покое и под курсором' },
    ],
    events: ['dv-select'],
  },
  {
    slug: 'card-stack',
    name: 'CardStack',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Интерактивная стопка карточек с веерным раскрытием при наведении и перелистыванием по клику.',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'fan', label: 'Веер при наведении', type: 'boolean', defaultValue: true },
    ],
    renderPreview: (s) =>
      `<dv-card-stack fan-on-hover="${s.fan}"></dv-card-stack>`,
    buildCode: (s) =>
      `<dv-card-stack fan-on-hover="${s.fan}"></dv-card-stack>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '3 карточки', description: 'Массив { title, subtitle?, meta? }' },
      { name: 'fan-on-hover', type: 'boolean', defaultVal: 'true', description: 'Раскрывать стопку веером при наведении' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'expandable-tabs',
    name: 'ExpandableTabs',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Компактные иконочные вкладки с плавным раскрытием подписи активного пункта (Skiper UI).',
    controls: [
      { key: 'value', label: 'Активная вкладка', type: 'select', options: ['home', 'layers', 'code', 'settings'], defaultValue: 'home' },
    ],
    renderPreview: (s) =>
      `<dv-expandable-tabs value="${s.value}"></dv-expandable-tabs>`,
    buildCode: (s) =>
      `<dv-expandable-tabs value="${s.value}"></dv-expandable-tabs>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '4 вкладки', description: 'Массив { id, label, icon }' },
      { name: 'value', type: 'string', defaultVal: "''", description: 'id активной вкладки' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'compare-slider',
    name: 'CompareSlider',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Интерактивная шторка сравнения двух состояний («До / После») с перетягиванием.',
    supportsAccent: true,
    controls: [
      { key: 'value', label: 'Позиция шторки (%)', type: 'number', defaultValue: 50 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:440px;">
        <dv-compare-slider value="${s.value}">
          <div slot="before"><dv-heading level="3" font="display">ДО</dv-heading></div>
          <div slot="after"><dv-heading level="3" font="display">ПОСЛЕ</dv-heading></div>
        </dv-compare-slider>
      </div>
    `,
    buildCode: (s) =>
      `<dv-compare-slider value="${s.value}">\n  <div slot="before">До</div>\n  <div slot="after">После</div>\n</dv-compare-slider>`,
    specs: [
      { name: 'value', type: 'number', defaultVal: '50', description: 'Положение разделителя (0–100%)' },
      { name: 'slot="before" / "after"', type: 'slot', defaultVal: '-', description: 'Левый и правый слои' },
    ],
    events: ['dv-change'],
  },
  {
    slug: 'circular-text',
    name: 'CircularText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Кольцевой текст с плавным вращением и ускорением при наведении (React Bits).',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст по кругу', type: 'text', defaultValue: 'DIVERLIN UI KIT • WEB COMPONENTS • ' },
      { key: 'radius', label: 'Радиус (px)', type: 'number', defaultValue: 62 },
      { key: 'speed', label: 'Длительность оборота (s)', type: 'number', defaultValue: 14 },
    ],
    renderPreview: (s) =>
      `<dv-circular-text text="${s.text}" radius="${s.radius}" speed="${s.speed}"></dv-circular-text>`,
    buildCode: (s) =>
      `<dv-circular-text text="${s.text}" radius="${s.radius}" speed="${s.speed}"></dv-circular-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Строка символов по окружности' },
      { name: 'radius', type: 'number', defaultVal: '62', description: 'Радиус кольца в пикселях' },
      { name: 'speed', type: 'number', defaultVal: '14', description: 'Время полного оборота в секундах' },
    ],
  },
  {
    slug: 'variable-proximity',
    name: 'VariableProximity',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Символы плавно меняют насыщенность и масштаб по мере приближения курсора (React Bits).',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Наведите курсор на буквы' },
      { key: 'radius', label: 'Радиус реакции (px)', type: 'number', defaultValue: 110 },
    ],
    renderPreview: (s) =>
      `<dv-variable-proximity text="${s.text}" radius="${s.radius}"></dv-variable-proximity>`,
    buildCode: (s) =>
      `<dv-variable-proximity text="${s.text}" radius="${s.radius}"></dv-variable-proximity>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Текст строки' },
      { name: 'radius', type: 'number', defaultVal: '110', description: 'Радиус влияния курсора в px' },
    ],
  },
  {
    slug: 'text-pressure',
    name: 'TextPressure',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Упругая вертикальная деформация букв под давлением курсора (React Bits).',
    supportsAccent: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'PRESSURE WAVE' },
      { key: 'radius', label: 'Радиус (px)', type: 'number', defaultValue: 130 },
    ],
    renderPreview: (s) =>
      `<dv-text-pressure text="${s.text}" radius="${s.radius}"></dv-text-pressure>`,
    buildCode: (s) =>
      `<dv-text-pressure text="${s.text}" radius="${s.radius}"></dv-text-pressure>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "'PRESSURE WAVE'", description: 'Крупный заголовок' },
      { name: 'radius', type: 'number', defaultVal: '130', description: 'Зона деформации вокруг курсора' },
    ],
  },
  {
    slug: 'split-flap',
    name: 'SplitFlapText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Механическое перещёлкивание карточек с буквами в стиле табло аэропорта (React Bits).',
    controls: [
      { key: 'text', label: 'Текст табло', type: 'text', defaultValue: 'DIVERLIN 26' },
      { key: 'speed', label: 'Скорость (ms)', type: 'number', defaultValue: 40 },
    ],
    renderPreview: (s) =>
      `<dv-split-flap text="${s.text}" speed="${s.speed}"></dv-split-flap>`,
    buildCode: (s) =>
      `<dv-split-flap text="${s.text}" speed="${s.speed}"></dv-split-flap>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "'DEPARTURE 24'", description: 'Строка на табло' },
      { name: 'speed', type: 'number', defaultVal: '40', description: 'Интервал перещёлкивания в мс' },
    ],
  },
  {
    slug: 'shiny-text',
    name: 'ShinyText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Сдержанный хромированный тональный блик по тексту (React Bits).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'Хромированный тональный блик' },
      { key: 'speed', label: 'Длительность (s)', type: 'number', defaultValue: 3 },
    ],
    renderPreview: (s) =>
      `<dv-shiny-text text="${s.text}" speed="${s.speed}"></dv-shiny-text>`,
    buildCode: (s) =>
      `<dv-shiny-text text="${s.text}" speed="${s.speed}"></dv-shiny-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Текст с переливом' },
      { name: 'speed', type: 'number', defaultVal: '3', description: 'Период пробега блика в секундах' },
    ],
  },
  {
    slug: 'echo-text',
    name: 'EchoText',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Многослойное тональное эхо заголовка, смещающееся за курсором мыши (React Bits).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'text', label: 'Текст', type: 'text', defaultValue: 'ECHO DEPTH' },
      { key: 'layers', label: 'Число слоёв', type: 'number', defaultValue: 4 },
    ],
    renderPreview: (s) =>
      `<dv-echo-text text="${s.text}" layers="${s.layers}"></dv-echo-text>`,
    buildCode: (s) =>
      `<dv-echo-text text="${s.text}" layers="${s.layers}"></dv-echo-text>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "'ECHO DEPTH'", description: 'Текст заголовка' },
      { name: 'layers', type: 'number', defaultVal: '4', description: 'Количество эхо-слоёв (2–6)' },
    ],
  },
  {
    slug: 'scroll-velocity',
    name: 'ScrollVelocity',
    category: 'Текстовые эффекты',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Двухрядная встречная типографическая лента с ускорением при наведении (React Bits / Skiper).',
    controls: [
      { key: 'text', label: 'Текст ленты', type: 'text', defaultValue: 'DIVERLIN DESIGN SYSTEM • ZERO RUNTIME •' },
      { key: 'speed', label: 'Скорость (s)', type: 'number', defaultValue: 16 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:460px;">
        <dv-scroll-velocity text="${s.text}" speed="${s.speed}"></dv-scroll-velocity>
      </div>
    `,
    buildCode: (s) =>
      `<dv-scroll-velocity text="${s.text}" speed="${s.speed}"></dv-scroll-velocity>`,
    specs: [
      { name: 'text', type: 'string', defaultVal: "''", description: 'Повторяющаяся фраза' },
      { name: 'speed', type: 'number', defaultVal: '16', description: 'Длительность цикла в секундах' },
    ],
  },
  {
    slug: 'click-spark',
    name: 'ClickSpark',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Геометрический разлёт лучей-искр в точке клика (React Bits).',
    controls: [
      { key: 'count', label: 'Число лучей', type: 'number', defaultValue: 8 },
      { key: 'radius', label: 'Радиус разлёта (px)', type: 'number', defaultValue: 28 },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:380px;">
        <dv-click-spark count="${s.count}" radius="${s.radius}">
          <dv-text variant="secondary">Кликните в любом месте этой области</dv-text>
        </dv-click-spark>
      </div>
    `,
    buildCode: (s) =>
      `<dv-click-spark count="${s.count}" radius="${s.radius}">\n  <div>Кликните здесь</div>\n</dv-click-spark>`,
    specs: [
      { name: 'count', type: 'number', defaultVal: '8', description: 'Количество лучей (4–16)' },
      { name: 'radius', type: 'number', defaultVal: '28', description: 'Дальность разлёта в px' },
    ],
  },
  {
    slug: 'pixel-card',
    name: 'PixelCard',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Карточка с диагональной волной пиксельной сетки при наведении (React Bits).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'title', label: 'Заголовок', type: 'text', defaultValue: 'Pixel Transition' },
      { key: 'cols', label: 'Колонки сетки', type: 'number', defaultValue: 10 },
    ],
    renderPreview: (s) =>
      `<dv-pixel-card title="${s.title}" cols="${s.cols}"></dv-pixel-card>`,
    buildCode: (s) =>
      `<dv-pixel-card title="${s.title}" cols="${s.cols}"></dv-pixel-card>`,
    specs: [
      { name: 'title / subtitle', type: 'string', defaultVal: "''", description: 'Заголовок и подзаголовок' },
      { name: 'cols', type: 'number', defaultVal: '10', description: 'Плотность сетки (6–16)' },
    ],
  },
  {
    slug: 'animated-list',
    name: 'AnimatedList',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Каскадный интерактивный список с плавным смещением при наведении и выбором (React Bits).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [],
    renderPreview: () =>
      `<dv-animated-list></dv-animated-list>`,
    buildCode: () =>
      `<dv-animated-list items='["Пункт 1","Пункт 2","Пункт 3"]'></dv-animated-list>`,
    specs: [
      { name: 'items', type: 'JSON Array', defaultVal: '4 элемента', description: 'Массив строк списка' },
      { name: 'selected', type: 'string', defaultVal: "''", description: 'Активный пункт' },
    ],
    events: ['dv-select'],
  },
  {
    slug: 'folder',
    name: 'Folder',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Интерактивная папка с веерным выдвижением листов при наведении или клике (React Bits).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'label', label: 'Подпись папки', type: 'text', defaultValue: 'Проект Diverlin' },
      { key: 'open', label: 'Открыта', type: 'boolean', defaultValue: false },
    ],
    renderPreview: (s) =>
      `<dv-folder label="${s.label}" ${s.open ? 'open' : ''}></dv-folder>`,
    buildCode: (s) =>
      `<dv-folder label="${s.label}"${s.open ? ' open' : ''}></dv-folder>`,
    specs: [
      { name: 'label', type: 'string', defaultVal: "'Проект Diverlin'", description: 'Название под папкой' },
      { name: 'open', type: 'boolean', defaultVal: 'false', description: 'Состояние раскрытия' },
    ],
    events: ['dv-toggle'],
  },
  {
    slug: 'slide-button',
    name: 'SlideButton',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Кнопка подтверждения перетягиванием ползунка вправо (Skiper UI).',
    supportsAccent: true,
    supportsGradient: true,
    controls: [
      { key: 'label', label: 'Текст до свайпа', type: 'text', defaultValue: 'Проведите для отправки' },
      { key: 'successLabel', label: 'Текст после', type: 'text', defaultValue: 'Отправлено' },
    ],
    renderPreview: (s) =>
      `<dv-slide-button label="${s.label}" success-label="${s.successLabel}"></dv-slide-button>`,
    buildCode: (s) =>
      `<dv-slide-button label="${s.label}" success-label="${s.successLabel}"></dv-slide-button>`,
    specs: [
      { name: 'label', type: 'string', defaultVal: "'Проведите для отправки'", description: 'Текст внутри трека' },
      { name: 'success-label', type: 'string', defaultVal: "'Отправлено'", description: 'Текст после доведения до конца' },
    ],
    events: ['dv-confirm'],
  },
  {
    slug: 'cursor-trail',
    name: 'CursorTrail',
    category: 'Интерактив и ховер',
    importPath: "import '@diverlin/uikit/effects';",
    description: 'Затухающий шлейф из тональных карточек-меток за курсором мыши (React Bits / Skiper UI).',
    controls: [
      { key: 'label', label: 'Текст метки', type: 'text', defaultValue: 'DIVERLIN' },
    ],
    renderPreview: (s) => `
      <div style="width:100%;max-width:420px;">
        <dv-cursor-trail label="${s.label}"></dv-cursor-trail>
      </div>
    `,
    buildCode: (s) =>
      `<dv-cursor-trail label="${s.label}"></dv-cursor-trail>`,
    specs: [
      { name: 'label', type: 'string', defaultVal: "'DIVERLIN'", description: 'Префикс создаваемых меток' },
    ],
  },
];
