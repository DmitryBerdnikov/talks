---
layout: print-detail
printPoster: true
class: print-rest-measurement-helpers
---

# <span class="print-ink-text">Единицы измерения</span>

::left::

<p>TypeScript <span class="helper-package">(@mantine/core)</span></p>

<!-- prettier-ignore -->
```ts
import { rem, em } from '@mantine/core';

// calc(1rem * var(--mantine-scale))
rem('16px')

// 1em
em('16px')
```

::right::

<p>CSS <span class="helper-package">(postcss-preset-mantine)</span></p>

<!-- prettier-ignore -->
```mantine-css
// calc(1rem * var(--mantine-scale))
rem(16px);

// 1em
em(16px);
```

<style>
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(h1) {
    color: var(--color-text);
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(.editorial-columns) {
    align-items: start;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 56px;
    flex: none;
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(.editorial-column) {
    gap: 28px;
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(.editorial-column > p) {
    min-height: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 8px;
    font-size: var(--font-size-2xl);
    line-height: 1;
    font-weight: 800;
    color: var(--color-primary);
    letter-spacing: -0.035em;
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(.helper-package) {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.015em;
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(pre.slidev-code) {
    height: 255px;
    padding: 20px !important;
    font-size: 19px !important;
    line-height: 1.6 !important;
  }
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(pre.slidev-code code),
  .slidev-layout.print-detail.print-rest-measurement-helpers :deep(pre.slidev-code .line) {
    white-space: pre !important;
    overflow-wrap: normal;
  }
</style>
