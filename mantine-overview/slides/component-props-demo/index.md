---
layout: print-detail
printPoster: true
class: print-rest-component-props-demo
clicks: 1
---

<script setup>
  import ResultVisual from '../../components/result-visual.vue'
  import ComparisonReveal from '../../components/comparison-reveal.vue'
  import inputBase from './input-base.png'
  import inputFilled from './input-filled.png'
</script>

# <span class="print-ink-text">Пропсы компонентов</span>

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 1">
<template #first>
<section class="props-example original">

<h2 class="props-title">Базовый компонент</h2>

<div class="props-panel">
<ResultVisual :src="inputBase" class="input-preview" />

<!-- prettier-ignore -->
```tsx
<Input
  placeholder="Введите email"
/>
```

</div>
</section>

</template>
<template #second>

<section class="props-example customized">

<h2 class="props-title">Кастомизация через пропсы</h2>

<div class="props-panel">
<ResultVisual :src="inputFilled" class="input-preview filled" />

<!-- prettier-ignore -->
```tsx {*|3-5}
<Input
  placeholder="Введите email"
  variant="filled"
  radius="xl"
  size="lg"
/>
```

</div>
</section>
</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.props-example) {
    display: grid;
    gap: 16px;
    min-width: 0;
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.props-title) {
    color: var(--color-text);
    font-size: 26px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.props-panel) {
    display: grid;
    grid-template-rows: 144px 236px;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.slidev-code-wrapper) {
    margin: 0 !important;
    min-width: 0;
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(pre.slidev-code) {
    height: 100%;
    border: 0;
    border-radius: 0 !important;
    padding: 24px !important;
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.input-preview) {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 144px;
    padding: 16px;
    border: 0;
    border-radius: 0;
    background: var(--color-background);
    box-shadow: none;
  }
  .slidev-layout.print-detail.print-rest-component-props-demo :deep(.input-preview img) {
    display: block;
    width: 100%;
    max-height: none;
    height: auto;
    border: 0;
    border-radius: 0;
  }
</style>
