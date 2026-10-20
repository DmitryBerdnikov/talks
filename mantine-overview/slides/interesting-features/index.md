---
layout: print-detail
printPoster: true
class: print-rest-interesting-features explanatory-lead
---

<script setup>
  import ResultVisual from '../../components/result-visual.vue'
  import ComparisonReveal from '../../components/comparison-reveal.vue'
  import standard from './button-standard-hd.jpg'
  import contrast from './button-autocontrast-hd.jpg'
</script>

# <span class="print-ink-text">Autocontrast</span>

Автоматически выбирает чёрный или белый цвет текста в зависимости от яркости фона

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 1">
<template #first>
<section class="contrast-example">
<div class="contrast-panel">
<ResultVisual :src="standard" class="contrast-preview" />

<!-- prettier-ignore -->
```tsx
<Button
  color="yellow"
>
  Mantine
</Button>
```

</div>
</section>
</template>
<template #second>
<section class="contrast-example">
<div class="contrast-panel">
<ResultVisual :src="contrast" class="contrast-preview" />

<!-- prettier-ignore -->
```tsx {*|3}
<Button
  color="yellow"
  autoContrast
>
  Mantine
</Button>
```

</div>
</section>
</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-interesting-features {
    --code-context-opacity: 1;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.editorial-body > p) {
    text-wrap: balance;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.contrast-panel) {
    display: grid;
    grid-template-rows: 160px 200px;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.contrast-preview) {
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
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.contrast-preview img) {
    display: block;
    width: 100%;
    height: 100%;
    max-height: none;
    margin: 0;
    object-fit: contain;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(.slidev-code-wrapper) {
    min-width: 0;
    margin: 0 !important;
  }
  .slidev-layout.print-detail.print-rest-interesting-features :deep(pre.slidev-code) {
    height: 100%;
    overflow: visible;
    border: 0;
    border-radius: 0 !important;
    font-size: 21px !important;

    padding: 20px 24px !important;
  }
</style>
