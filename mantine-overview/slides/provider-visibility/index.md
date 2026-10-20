---
layout: print-editorial
printPoster: true
class: print-rest-provider-visibility provider-explainer
---

# <span class="print-ink-text">data-mantine-styles="classes"</span>

## Глобальные классы для управления видимостью элементов с помощью медиавыражений

<!-- prettier-ignore -->
```html
<style data-mantine-styles="classes">
  @media (min-width: 48em) {
    .mantine-hidden-from-sm {
      display: none !important;
    }
  }

  @media (max-width: 47.99375em) {
    .mantine-visible-from-sm {
      display: none !important;
    }
  }
</style>
```

<style>
  .slidev-layout.print-editorial.print-rest-provider-visibility :deep(pre.slidev-code) {
    font-size: var(--font-size-sm) !important;
    padding: 22px 36px !important;
  }
</style>
