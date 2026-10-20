---
layout: print-detail
printPoster: true
class: print-rest-theme-spacing explanatory-lead
---

# <span class="print-ink-text">Размеры</span>

Настройка размеров и брейкпоинтов через createTheme

<!-- prettier-ignore -->
```tsx {all|4-6|8-11}
import { createTheme, rem, em } from '@mantine/core';

export const theme = createTheme({
  spacing: {
    md: rem('12px'),
  },

  breakpoints: {
    xs: em('400px'),
    xl: em('1600px'),
  },
});
```

<style>
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(h1) {
    margin-bottom: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(.slidev-code-wrapper) {
    position: relative;
    width: 100%;
  }
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(pre.slidev-code) {
    line-height: 1.25 !important;
    padding: 32px 36px !important;
  }
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(pre.slidev-code code) {
    position: relative;
    isolation: isolate;
    display: block;
    columns: auto;
    white-space: normal !important;
  }
  .slidev-layout.print-detail.print-rest-theme-spacing :deep(pre.slidev-code .line) {
    display: block;
    min-height: 1lh;
    white-space: pre !important;
  }
</style>
