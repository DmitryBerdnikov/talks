---
layout: print-detail
printPoster: true
class: print-rest-theme-custom-types explanatory-lead
---

<script setup>
const suggestions = [
  'blue', 'cyan', 'dark', 'grape', 'gray', 'green', 'indigo',
  'lime', 'orange', 'pink', 'red', 'teal', 'violet', 'yellow',
]
</script>

# <span class="print-ink-text">Типизация кастомных свойств</span>

Без расширения типов кастомные свойства темы не появляются в автодополнении

<div class="typing-demo">

<!-- prettier-ignore -->
```ts
const theme = useMantineTheme();

theme.colors.
```

<div class="completion-popup" aria-label="Подсказки стандартных цветов Mantine">
  <ul>
    <li v-for="(suggestion, index) in suggestions" :key="suggestion" :class="{ 'is-selected': index === 0 }">{{ suggestion }}</li>
  </ul>
</div>
</div>

<style>
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(h1) {
    font-size: var(--font-size-heading-sm);
    max-width: 990px;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.editorial-body > p) {
    max-width: 950px;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(pre.slidev-code) {
    min-height: 360px;
    font-size: var(--font-size-md) !important;
    line-height: 1.4 !important;
    padding: 32px !important;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.typing-demo) {
    position: relative;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(pre.slidev-code .line:last-child::after) {
    content: '';
    display: inline-block;
    width: 2px;
    height: 1em;
    margin-left: 2px;
    background: var(--color-code-text);
    vertical-align: -3px;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.completion-popup) {
    position: absolute;
    top: 144px;
    left: 235px;
    width: 340px;
    padding: 5px;
    border: 1px solid var(--color-code-border);
    border-radius: 6px;
    background: var(--color-code-background);
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.completion-popup ul) {
    display: block;
    max-height: 196px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    scrollbar-color: var(--color-code-border) transparent;
    scrollbar-width: thin;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.completion-popup li) {
    margin: 0;
    padding: 0 12px;
    color: var(--color-code-text);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0;
    list-style: none;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.completion-popup li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-theme-custom-types :deep(.completion-popup .is-selected) {
    background: var(--color-code-highlight);
  }
</style>
