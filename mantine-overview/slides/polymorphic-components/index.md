---
layout: print-detail
printPoster: true
class: print-rest-polymorphic-components
clicks: 1
---

<script setup>
  import ComparisonReveal from '../../components/comparison-reveal.vue'
</script>

# <span class="print-ink-text">Polymorphic components</span>

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 1">
<template #first>

<!-- prettier-ignore -->
```tsx
<Button component="div">
  Сохранить
</Button>
```

</template>
<template #second>

<div class="source-image"><img src="./sarcastic-smile.png" alt="" /></div>
</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.editorial-body) {
    gap: 40px;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.comparison-reveal) {
    align-items: center;
    min-height: 370px;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.comparison-arrow) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.comparison-first) {
    grid-column: 1;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.comparison-second) {
    grid-column: 3;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(.source-image img) {
    display: block;
    width: 420px;
    height: auto;
    margin: 0 auto;
    object-fit: contain;
    border-radius: 14px;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-components :deep(pre.slidev-code) {
    font-size: 26px !important;
    line-height: 1.4 !important;
    padding: 32px 24px !important;
  }
</style>
