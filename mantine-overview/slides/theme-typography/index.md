---
layout: print-detail
printPoster: true
class: print-rest-theme-typography
---

# <span class="print-ink-text">Типографика</span>

::left::

По умолчанию используются системные шрифты

<!-- prettier-ignore -->
```css-font-stack
--mantine-font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
```

::right::

Можно переопределить с помощью настройки fontFamily

<!-- prettier-ignore -->
```tsx
const theme = createTheme({
	fontFamily: 'Roboto, sans-serif'
})
```

<style>
  .slidev-layout.print-detail.print-rest-theme-typography :deep(.editorial-columns) {
    gap: 80px;
    align-items: start;
    padding-top: 16px;
  }
  .slidev-layout.print-detail.print-rest-theme-typography :deep(.editorial-column) {
    gap: 28px;
  }
  .slidev-layout.print-detail.print-rest-theme-typography :deep(.editorial-column > p:first-child) {
    min-height: 72px;
    color: var(--color-text);
    font-size: var(--font-size-md);
    font-weight: 750;
    line-height: 1.3;
  }
  .slidev-layout.print-detail.print-rest-theme-typography :deep(pre.slidev-code) {
    height: 216px;
    padding: 24px !important;
    font-size: 21px !important;
    line-height: 1.4 !important;
  }
</style>
