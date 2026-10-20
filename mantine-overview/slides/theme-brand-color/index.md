---
layout: print-detail
printPoster: true
class: print-rest-theme-brand-color
---

<script setup>
  import ResultVisual from '../../components/result-visual.vue'
  import result0 from './brand-theme.jpg'
</script>

# <span class="print-ink-text">Кастомный цвет</span>

::left::

<!-- prettier-ignore -->
```tsx {all|2-9|10|11}
const theme = createTheme({
  colors: {
    brand: [
      '#f7efff', '#e8ddf4', '#ccbae2',
      '#b094d0', '#9873c1', '#885fb8',
      '#8154b4', '#6f459f', '#633c8f',
      '#56337f',
    ],
  },
  primaryColor: 'brand',
  primaryShade: { light: 5, dark: 7 },
});
```

::right::

<div class="brand-spectrum" aria-hidden="true">
  <i style="background: #f7efff"></i><i style="background: #e8ddf4"></i
  ><i style="background: #ccbae2"></i><i style="background: #b094d0"></i
  ><i style="background: #9873c1"></i><i style="background: #885fb8"></i
  ><i style="background: #8154b4"></i><i style="background: #6f459f"></i
  ><i style="background: #633c8f"></i><i style="background: #56337f"></i>
</div>

<ResultVisual :src="result0" class="brand-result" />

<style>
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(.editorial-columns) {
    grid-template-columns: 580px minmax(0, 1fr);
    gap: 48px;
    align-items: center;
  }
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(.editorial-column:last-child) {
    gap: 36px;
  }
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(pre.slidev-code) {
    font-size: var(--font-size-sm) !important;
    line-height: 1.3 !important;
    padding: 24px !important;
  }
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(.brand-spectrum) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    height: 74px;
  }
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(.brand-spectrum i) {
    display: block;
  }
  .slidev-layout.print-detail.print-rest-theme-brand-color :deep(.brand-result img) {
    max-height: 280px;
    object-position: center;
  }
</style>
