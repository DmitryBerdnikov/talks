---
layout: print-detail
printPoster: true
class: print-rest-theme-headings
---

# <span class="print-ink-text">Типографика</span>

<!-- prettier-ignore -->
```tsx {all|2-5|7-14}
const theme = createTheme({
  fontSizes: {
    sm: rem('14px'),
    md: rem('16px'),
  },

  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem('34px') },
    },
  },
});
```

<style>
  .slidev-layout.print-detail.print-rest-theme-headings :deep(.print-content) {
    justify-content: flex-start;
  }
  .slidev-layout.print-detail.print-rest-theme-headings :deep(.editorial-body) {
    max-width: 940px;
    gap: 40px;
  }
  .slidev-layout.print-detail.print-rest-theme-headings :deep(pre.slidev-code) {
    padding: 20px 28px !important;
  }
  .slidev-layout.print-detail.print-rest-theme-headings :deep(pre.slidev-code code) {
    display: block;
    columns: auto;
    white-space: normal !important;
  }
  .slidev-layout.print-detail.print-rest-theme-headings :deep(pre.slidev-code .line) {
    display: block;
    min-height: 1lh;
    white-space: pre-wrap !important;
  }
</style>
