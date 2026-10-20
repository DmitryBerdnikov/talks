---
layout: print-detail
printPoster: true
class: print-rest-theme-type-extension
---

# <span class="print-ink-text">Расширяем типы</span>

mantine.d.ts

<!-- prettier-ignore -->
```tsx {all|1-4|6-8|10-14}
import type {
  DefaultMantineColor,
  MantineColorsTuple,
} from '@mantine/core';

type AppColors =
  | 'brand'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<AppColors, MantineColorsTuple>;
  }
}
```

<style>
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(.editorial-body) {
    gap: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(h1) {
    margin-bottom: 12px;
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(.editorial-body > p) {
    margin-top: 8px;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(.slidev-code-wrapper) {
    width: 100%;
    max-width: 100%;
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(pre.slidev-code) {
    font-size: 20px !important;
    line-height: 1.38 !important;
    padding: 24px !important;
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(pre.slidev-code code) {
    display: block;
    columns: auto;
    white-space: normal !important;
  }
  .slidev-layout.print-detail.print-rest-theme-type-extension :deep(pre.slidev-code .line) {
    display: block;
    min-height: 1lh;
    white-space: pre !important;
  }
</style>
