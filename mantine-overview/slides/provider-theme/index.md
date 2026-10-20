---
layout: print-editorial
printPoster: true
class: print-rest-provider-theme provider-explainer
clicks: 2
---

<script setup>
  import ComparisonReveal from '../../components/comparison-reveal.vue'
</script>

# <span class="print-ink-text">data-mantine-styles="true"</span>

## CSS-переменные темы

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 2">
<template #first>

<!-- prettier-ignore -->
```tsx {all|2-4|all}
<MantineProvider
  theme={{
    fontSizes: { xs: '12px' }
  }}
>
  Hello world
</MantineProvider>
```

</template>
<template #second>

<!-- prettier-ignore -->
```html
<style data-mantine-styles="true">
  :root, :host{
    --mantine-font-size-xs: 12px;
  }
</style>
```

</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-editorial.print-rest-provider-theme :deep(.comparison-reveal) {
    margin-top: 24px;
    align-items: center;
  }
  .slidev-layout.print-editorial.print-rest-provider-theme
    :deep(.comparison-second pre.slidev-code .line) {
    opacity: 1;
  }
  .slidev-layout.print-editorial.print-rest-provider-theme :deep(pre.slidev-code) {
    box-sizing: border-box;
    height: 288px;
    padding: 24px 16px !important;
    font-size: 22px !important;
    line-height: 1.5 !important;
  }
</style>
