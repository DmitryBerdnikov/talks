# Работа с презентацией

## Слайды и компоненты

- Один слайд — одна папка `slides/short-title/` со стабильным названием по смыслу в kebab-case, без номера слайда.
- В `index.md` храни frontmatter, текст, Markdown/HTML, уникальный `<style>` и заметки докладчика. HTML-комментарий с заметками должен быть последним блоком.
- Изображения и компоненты, нужные только одному слайду, размещай рядом. Картинки подключай относительными путями, Vue-компоненты — явным импортом в `<script setup>`.
- Главный `slides.md` содержит общие настройки и явный порядок подключений через `src`. Первый слайд подключается в блоке общих настроек, без пустого слайда перед ним.
- Единственный источник порядка — подключения в `slides.md`. При добавлении или перестановке слайдов меняй только нужные подключения; существующие папки не переименовывай. Порядок файлов в папке `slides/` не влияет на показ.
- Повторяемые макеты размещай в `layouts/`, компоненты для нескольких слайдов — в `components/`. Дополнительные файлы создавай по необходимости.
- Сохраняй содержание, заметки, ссылки, логотип и оформление при структурных изменениях. Содержание доклада сверяй с `../mantine.md`; новые фактические утверждения проверяй по первичным источникам.
- В ссылках не добавляй метки источника ChatGPT (`utm_source=chatgpt.com`, `source=chatgpt` и аналогичные); удаляй их при переносе ссылок, сохраняя остальные параметры и якоря.

## Тексты автора — обязательное правило

- Видимый текст слайдов переноси дословно из `../mantine.md` или из явно предоставленной автором замены. Не добавляй другие тексты, пояснения, подписи и текст для UI-макетов.
- Без прямого запроса автора запрещены переформулировки, сокращения, переводы, изменение слов, порядка слов и пунктуации. Разрешены переносы строк и типографическое выделение без изменения текста.
- Если текст не помещается, меняй компоновку или разделяй материал на слайды, сохраняя весь авторский текст. Это правило имеет приоритет над рекомендациями ниже о сокращении содержания.
- Инструкции по оформлению и служебные пометки из исходника не превращай в текст слайда. Сохраняй исходные подписи внутри предоставленных изображений и автоматическую нумерацию презентации.
- Перед завершением сверяй весь видимый текст с авторским источником, а не только смысл.

## Стили и нумерация

- Общие цвета, типографика и отступы — в `style.css`; глобальные селекторы ограничивай `.slidev-layout`, кроме CSS-переменных в `:root`.
- Стили макета — в его Vue-файле внутри `<style scoped>`; содержимое слотов оформляй через адресный `:deep()`.
- Уникальные стили — в `<style>` своего `index.md`. Для элементов, создаваемых макетом, используй адресный `:deep()`. Учитывай специфичность и проверяй отсутствие влияния на другие слайды.
- Логотип и его стили — в `global-top.vue`. Счётчик — в `slide-top.vue`, снизу справа, в формате `1 / 8`; полоса прогресса в этом же файле использует отношение `$page / total`.
- Номер счётчика получай из локального `$page`, количество — из `useNav().total`. Используй публичные API `@slidev/client`; не дублируй счётчик в слайдах и не прописывай числа вручную.

## Проверка изменений

- Используй конфигурацию Prettier проекта: `pnpm format`, затем `pnpm format:check` и `pnpm build` для изменений слайдов, стилей и кода.
- Парсер `slidev` применяется только к `slides.md` и `slides/**/index.md`; обычные документы остаются Markdown. У важных примеров кода сохраняй переносы и соответствие подсветки номерам строк; при необходимости используй `<!-- prettier-ignore -->`.
- После визуальных изменений проверь затронутые слайды в браузере: обрезание текста, контраст, отступы, пересечения с логотипом и счётчиком.
- После изменения структуры или счётчика проверь порядок, переходы вперёд/назад, прямое открытие слайда, обзор и режим докладчика с заметками и предпросмотром следующего слайда.

## Качество скриншотов

- Скриншоты интерфейсов делай из работающего локального Mantine-проекта сразу с запасом разрешения: минимум 2×, предпочтительно 3× от размера изображения на холсте слайда 1200 × 675.
- Увеличивай плотность пикселей при захвате или масштаб рендеринга исходного интерфейса. Не увеличивай готовый маленький растр для имитации качества.
- Для текста, кнопок и тонких границ предпочитай PNG без потерь. Если инструмент сохраняет только JPEG, используй максимальное доступное качество и рендеринг 3×; перекодирование JPEG в PNG не улучшает качество.
- Перед захватом дождись загрузки шрифтов, стилей и изображений. Обрезай скриншот по нужному компоненту, сохраняя необходимые отступы и все его края.
- После подключения проверь изображение в браузере в составе слайда: надписи должны быть чёткими, границы — без размытия и артефактов сжатия. При недостаточном качестве пересними исходный интерфейс.

# Presentation Design Guidelines

Use a modern **Swiss editorial / technical minimalism** style.

The deck should feel like a carefully designed technology conference presentation:
clean, structured, spacious, precise and slightly editorial.

## Visual system

- Background: `#FFFFFF`
- Main text: `#242735`
- Muted text: `#686B73`
- Primary accent: blue `#0047BB`
- Secondary brand accent: Fuse8 yellow `#F5C84C`
- Use yellow sparingly; blue is the main presentation accent
- Large bold sans-serif typography
- Strong alignment and clear visual hierarchy
- Lots of whitespace
- Minimal shadows and gradients
- Fuse8 logo fixed in the top-right corner
- Slide number/progress should remain subtle and consistent

## Technical graphics

Use subtle **technical / construction-line graphics** as part of the visual language.

Prefer:

- thin SVG lines
- alignment guides
- geometric grids
- oversized circles and arcs
- cropped geometry at slide edges
- simple diagrams and schematic shapes

Technical lines:

- color: `#0047BB`
- opacity: `0.06–0.12`
- stroke: `1–1.5px`
- SVG only

Keep decorative geometry restrained:
usually 1 large geometric element and 2–4 guide lines per slide.

Graphics should feel integrated into the composition, not added as decoration.

Avoid dense grids or obvious engineering-blueprint backgrounds.

## Main rule

Do not make slides look like Markdown rendered on a white background.

Every slide should have an intentional composition.

Visual hierarchy should be obvious within 3–5 seconds.

Use visuals when they make the idea easier to understand:

- UI mockups
- diagrams
- code snippets
- tables
- charts
- comparisons
- component schematics
- subtle geometric graphics

Do not add visuals only to fill empty space.

Whitespace is part of the design.

## Layout

Do not repeat the exact same composition on every slide.

Alternate between:

- text + visual
- asymmetric editorial layout
- 2-column comparison
- 3–4 concept blocks
- big statement
- comparison matrix
- UI example
- code + result
- full-width diagram

One slide = one main idea.

Prefer asymmetric layouts over perfectly centered compositions.

Use shared alignment guides across slides so the deck feels like one system.

For regular content slides, align the title to the canvas insets in `theme.css`:
`--slide-gutter-top: 54px` and `--slide-gutter-x: 64px` on the 1200 × 675 slide canvas.
Use the shared `--slide-gap-*` variables for repeated spacing roles; keep layout-specific
exceptions only when the composition requires them.

## Typography

- Standard H1: `80px`; dense content H1: `64px`; compact technical H1: `52px`
- Use the matching `--font-size-heading*` variables from `theme.css`, including special display sizes
- H2: choose the established role size from `26px`, `30px`, or `36px`
- Explanatory lead text: `26px`, weight `500`, muted `#686B73`, with `24px` from the title
- Body: usually `26px`; small supporting text: `18–22px`
- Keep ordinary headings Mantine blue `#0047BB`; use dark text for a deliberate editorial contrast
- Use palette variables for presentation UI; keep literal colors only in demonstrated libraries, code, screenshots, and diagrams where the exact color is content
- Bold or semibold headings
- Tight heading line-height
- Comfortable body line-height
- Keep line lengths reasonably short

Avoid long paragraphs.

Prefer short statements and 2–5 concise points.

Do not shrink typography just to fit more content.
Reduce content instead.

## Icons

- Use one icon set Lucide
- SVG only
- Consistent stroke width
- Consistent visual size
- No emoji
- No decorative icon collections
- Use icons only when they improve scanning or meaning

## UI mockups

UI examples should look realistic but simplified.

Use real interface patterns such as:

- buttons
- inputs
- forms
- tables
- dialogs
- badges
- tabs
- navigation

Show only the UI necessary to explain the point.

Avoid recreating an entire application when one component is enough.

UI mockups should visually match the presentation:
clean borders, restrained radius, minimal shadows.

## Cards

Do not put every piece of content inside a card.

Prefer:

- whitespace
- typography
- alignment
- thin separators
- subtle background differences

Cards should be used only when they communicate a meaningful grouping.

Avoid dashboard-style grids unless the slide is actually showing a dashboard.

## Library slides

For slides about UI libraries, prefer:

Title  
Short description

Key idea | Visual example  
Text | UI / code / diagram

Then finish with:

**Когда выбрать** — one concise conclusion.

Suggested visual language:

- Самописный UI → component schematic
- Headless → architecture / primitives diagram
- shadcn → component source + rendered result
- Mantine → polished form / component composition
- Ant Design → dense enterprise table / admin interface

Avoid using the same generic card layout for every library.

## Code slides

Code should be treated as a visual element.

- Show only relevant lines
- Use syntax highlighting
- Keep font large
- Highlight the important part
- Avoid screenshots of code
- Prefer actual HTML/CSS/code rendering

When useful, pair:

`code → rendered result`

## Slidev implementation

Prefer:

1. HTML/CSS
2. SVG
3. raster images only when necessary

Use reusable components for:

- slide decoration
- logo
- slide number
- progress
- repeated diagrams
- code blocks

Decorative geometry should preferably be SVG.

Do not use PNG for simple lines, circles, grids or geometric shapes.

Keep decorative SVG behind content with `pointer-events: none`.

## Composition rules

- Align elements deliberately
- Reuse common vertical and horizontal guides
- Do not center everything
- Allow elements to extend or crop beyond slide edges
- Large geometric shapes may be partially visible
- Avoid filling every empty area
- Prefer one strong visual gesture over many small decorations

## Avoid

- generic PowerPoint templates
- Markdown-like layouts
- large text walls
- tiny fonts
- emoji icons
- random gradients
- heavy shadows
- excessive rounded cards
- excessive borders
- unnecessary illustrations
- too many accent colors
- symmetrical layouts on every slide
- decorative graphics without meaning
- identical layouts across the deck

## Quality check

Before finishing a slide, check:

1. Is the main idea understandable in 3–5 seconds?
2. Is there unnecessary text?
3. Is the hierarchy obvious?
4. Would a visual explain something better?
5. Does every visual have a purpose?
6. Is everything readable from a conference screen?
7. Is there enough whitespace?
8. Does the slide belong to the same visual system as the rest of the deck?
9. Are technical lines subtle rather than dominant?
10. Does the slide feel designed rather than templated?

## Core principles

**One slide = one idea.**

**Whitespace is intentional.**

**Do not replace visual design with lists.**

**Do not add visuals just because there is empty space.**

**Prefer precision and restraint over decoration.**
