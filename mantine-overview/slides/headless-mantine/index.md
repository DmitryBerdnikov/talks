---
layout: print-detail
printPoster: true
class: print-rest-headless-mantine explanatory-lead
---

<script setup>
  import ResultVisual from '../../components/result-visual.vue'
  import ComparisonReveal from '../../components/comparison-reveal.vue'
  import styled from './button-styled-hd.jpg'
  import unstyled from './button-unstyled-hd.jpg'
</script>

# <span class="print-ink-text">Headless mantine</span>

`unstyled` — отключает стандартные стили Mantine,<br />сохраняя функциональность компонента

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 1">
<template #first>
<section class="headless-example">
<div class="headless-panel">
<ResultVisual :src="styled" class="headless-preview" />

<!-- prettier-ignore -->
```tsx
<Button>
  Сохранить
</Button>
```

</div>
</section>
</template>
<template #second>
<section class="headless-example">
<div class="headless-panel">
<ResultVisual :src="unstyled" class="headless-preview" />

<!-- prettier-ignore -->
```tsx {*|1}
<Button unstyled>
  Сохранить
</Button>
```

</div>
</section>
</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-headless-mantine {
    --code-context-opacity: 1;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.editorial-body > p) {
    max-width: 1040px;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.headless-panel) {
    display: grid;
    grid-template-rows: 160px 200px;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.headless-preview) {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 160px;
    border: 0;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.headless-preview img) {
    display: block;
    width: 100%;
    height: 100%;
    max-height: none;
    margin: 0;
    object-fit: contain;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(.slidev-code-wrapper) {
    min-width: 0;
    margin: 0 !important;
  }
  .slidev-layout.print-detail.print-rest-headless-mantine :deep(pre.slidev-code) {
    height: 100%;
    overflow: visible;
    border: 0;
    border-radius: 0 !important;
    padding: 20px 24px !important;
  }
</style>
