---
layout: print-editorial
printPoster: true
class: print-rest-customization-theme explanatory-lead
---

# <span class="print-ink-text">Кастомизация</span>

Настраиваем дизайн-систему через createTheme

<!-- prettier-ignore -->
```tsx {all|4-5}
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});

<MantineProvider theme={theme}>
  Hello world
</MantineProvider>
```

<style>
  .slidev-layout.print-editorial.print-rest-customization-theme {
    --slide-heading-size: var(--font-size-heading);
  }
  .slidev-layout.print-editorial.print-rest-customization-theme :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-editorial.print-rest-customization-theme :deep(.slidev-code-wrapper) {
    position: relative;
    width: 100%;
  }
  .slidev-layout.print-editorial.print-rest-customization-theme :deep(pre.slidev-code) {
    margin-top: 0;
    padding: 30px 26px !important;
    font-size: var(--font-size-md) !important;
    line-height: 1.32 !important;
  }
  .slidev-layout.print-editorial.print-rest-customization-theme :deep(pre.slidev-code code) {
    position: relative;
    isolation: isolate;
    display: block;
    white-space: normal !important;
  }
  .slidev-layout.print-editorial.print-rest-customization-theme :deep(pre.slidev-code .line) {
    display: block;
    min-height: 1lh;
    white-space: pre !important;
  }
</style>
