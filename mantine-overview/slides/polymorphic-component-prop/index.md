---
layout: print-detail
printPoster: true
class: print-rest-polymorphic-component-prop explanatory-lead
clicks: 3
---

<script setup>
  import ComparisonReveal from '../../components/comparison-reveal.vue'
</script>

# <span class="print-ink-text">Polymorphic components</span>

Полиморфные компоненты позволяют менять корневой элемент через проп `component`

<!-- prettier-ignore-start -->

<ComparisonReveal v-click="1" :expanded="$clicks >= 3">
<template #first>
<div class="polymorphic-source" :class="{ 'has-error': $clicks < 2 }">
<div class="code-caption">tsx</div>

<div v-if="$clicks < 2" key="button">

<!-- prettier-ignore -->
```tsx
<Button
  href="https://mantine.dev/"
  target="_blank"
>
  Mantine
</Button>
```

</div>
<div v-else key="anchor">

<!-- prettier-ignore -->
```tsx {2}
<Button
  component="a"
  href="https://mantine.dev/"
  target="_blank"
>
  Mantine
</Button>
```

</div>
</div>
</template>
<template #second>

<div class="code-caption">html (упрощенно)</div>

<!-- prettier-ignore -->
```html
<a
  href="https://mantine.dev/"
  target="_blank"
>
  Mantine
</a>
```

</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop {
    --code-context-opacity: 1;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(.editorial-body > p) {
    max-width: 1040px;
    text-wrap: balance;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(.code-caption) {
    color: var(--color-text-muted);
    font-size: 18px;
    font-weight: 600;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(.comparison-reveal) {
    align-items: start;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop
    :deep(.has-error .line:nth-child(n + 2):nth-child(-n + 3)) {
    text-decoration: underline wavy #ef4444;
    text-underline-offset: 5px;
    text-decoration-thickness: 1.5px;
  }
  .slidev-layout.print-detail.print-rest-polymorphic-component-prop :deep(pre.slidev-code) {
    min-height: 310px;
    font-size: 21px !important;
    line-height: 1.35 !important;
    padding: 24px !important;
  }
</style>
