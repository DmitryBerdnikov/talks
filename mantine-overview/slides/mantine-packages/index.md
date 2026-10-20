---
layout: print-editorial
printPoster: true
class: print-rest-mantine-packages
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
  import DeckIcon from '../../components/DeckIcon.vue'
</script>

# <span class="print-ink-text">Расширения</span>

<!-- prettier-ignore -->
<ul class="package-list">
  <li>
    <span class="package-icon package-icon-calendar"><DeckIcon name="calendar" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/dates/getting-started/">@mantine/dates</a>
      <span>Выбор даты и времени, календари</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-chart"><DeckIcon name="chart" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/charts/getting-started/">@mantine/charts</a>
      <span>Графики и визуализация данных на основе recharts</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-bell"><DeckIcon name="bell" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/notifications/">@mantine/notifications</a>
      <span>Система уведомлений</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-code"><DeckIcon name="code" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/code-highlight/code-highlight/">@mantine/code-highlight</a>
      <span>Подсветка кода</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-search"><DeckIcon name="search" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/spotlight/">@mantine/spotlight</a>
      <span>Панель управления и поиска (<code>Ctrl + K</code>)</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-carousel"><DeckIcon name="carousel" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/carousel/">@mantine/carousel</a>
      <span>Карусель на основе embla-carousel</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-upload"><DeckIcon name="upload" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/dropzone/">@mantine/dropzone</a>
      <span>Загрузка файлов на основе react-dropzone</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-window"><DeckIcon name="window" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/modals/">@mantine/modals</a>
      <span>Управление модальными окнами</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-text"><DeckIcon name="text" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/tiptap/">@mantine/tiptap</a>
      <span>Текстовый редактор на основе tiptap</span>
    </div>
  </li>
  <li>
    <span class="package-icon package-icon-progress"><DeckIcon name="progress" :size="26" /></span>
    <div class="package-copy">
      <a href="https://mantine.dev/x/nprogress/">@mantine/nprogress</a>
      <span>Индикатор прогресса навигации</span>
    </div>
  </li>
</ul>
<p class="package-community">
  <DeckLink href="https://mantine.dev/x/extensions/#community-extensions">Расширения сообщества</DeckLink>
</p>

<style>
  .slidev-layout.print-editorial.print-rest-mantine-packages {
    padding-bottom: 24px;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.editorial-body) {
    height: 100%;
    gap: 28px;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(h1) {
    font-size: var(--font-size-heading);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-list) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 82px);
    grid-auto-flow: column;
    column-gap: 48px;
    row-gap: 0;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-list > li) {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    align-items: center;
    gap: 16px;
    padding: 14px 0 !important;
    border-top: 1px solid var(--color-border-primary);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-list > li::before) {
    display: none;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon) {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-calendar) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-chart) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-bell) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-code) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-search) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-carousel) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-upload) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-window) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-text) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-icon-progress) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-copy > a) {
    display: block;
    color: var(--color-text);
    font-size: var(--font-size-sm);
    font-weight: 800;
    letter-spacing: -0.035em;
    text-decoration: none;
    line-height: 1.15;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-copy span) {
    display: block;
    margin-top: 4px;
    font-weight: 400;
    font-size: var(--font-size-xs);
    line-height: 1.15;
    color: var(--color-text-muted);
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(.package-copy code) {
    color: inherit;
  }
  .slidev-layout.print-editorial.print-rest-mantine-packages :deep(p.package-community) {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--color-text-muted);
    font-weight: 400;
    font-size: var(--font-size-xs);
    line-height: 1.15;
  }
</style>
