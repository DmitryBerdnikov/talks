---
layout: print-detail
printPoster: true
class: print-rest-style-props-example
---

<script setup>
  import { Box, Braces, Paintbrush } from '@lucide/vue'
</script>

# <span class="print-ink-text">Style props</span>

::left::

<ul class="style-props-points">
  <li>
    <span class="prop-icon prop-icon-blue"><Box aria-hidden="true" /></span
    ><span>Доступны во всех <br />компонентах mantine</span>
  </li>
  <li>
    <span class="prop-icon prop-icon-purple"><Braces aria-hidden="true" /></span
    ><span>Один проп — один CSS-стиль</span>
  </li>
  <li>
    <span class="prop-icon prop-icon-green"><Paintbrush aria-hidden="true" /></span
    ><span>Применяются как inline-стили</span>
  </li>
</ul>

::right::

<!-- prettier-ignore -->
```tsx
<Box
  w={300}
  mx="auto"
  py="lg"
  c="teal.9"
  bg={{
    base: 'blue.0',
    md: 'teal.0',
  }}
>
  Пример
</Box>
```

<style>
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.editorial-columns) {
    align-items: start;
    gap: 64px;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.editorial-column ul) {
    gap: 0;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.editorial-column li) {
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 24px 0;
    border-top: 1px solid var(--color-border);
    font-size: 26px;
    font-weight: 650;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.prop-icon) {
    display: grid;
    place-items: center;
    flex: 0 0 72px;
    height: 72px;
    border-radius: 16px;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.prop-icon svg) {
    width: 36px;
    height: 36px;
    stroke-width: 1.8;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.prop-icon-blue) {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.prop-icon-purple) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.prop-icon-green) {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(.editorial-column li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-style-props-example :deep(pre.slidev-code) {
    font-size: 20px !important;
    padding: 20px !important;
  }
</style>
