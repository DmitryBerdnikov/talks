---
layout: print-detail
printPoster: true
class: print-rest-theme-color-usage
---

# <span class="print-ink-text">Работа с цветом</span>

::left::

## В компонентах

<!-- prettier-ignore-start -->

<div class="color-usage-panel">
  <img class="color-usage-preview" src="./component.png" alt="" />

  <!-- prettier-ignore -->

```tsx {all|1|all} {at: 1}
<Button color="indigo.6">
  Сохранить
</Button>
```

</div>

<!-- prettier-ignore-end -->

::right::

## В CSS Modules

<!-- prettier-ignore-start -->

<div class="color-usage-panel">
  <img class="color-usage-preview" src="./css.png" alt="" />

  <!-- prettier-ignore -->

```tsx
<Button className={styles.button}>
  Сохранить
</Button>
```

<!-- prettier-ignore -->
```css {all|all|2-3} {at: 1}
.button {
  background: var(--mantine-color-teal-2);
  color: var(--mantine-color-black);
}
```

</div>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-rest-theme-color-usage {
    --color-code-focus-surround: var(--color-code-background);
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(.editorial-columns) {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    gap: 40px;
    align-items: start;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(.editorial-column) {
    gap: 16px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(h2) {
    font-size: var(--font-size-lg);
    color: var(--color-text);
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(.color-usage-panel) {
    height: 400px;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-code-background);
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(.color-usage-preview) {
    display: block;
    width: 100%;
    height: 128px;
    max-height: none;
    object-fit: contain;
    margin: 0;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(.slidev-code-wrapper) {
    margin: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(pre.slidev-code) {
    border: 0;
    border-radius: 0 !important;
    padding: 16px !important;
    font-size: 23px !important;
    line-height: 1.3 !important;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(pre.slidev-code code) {
    display: block;
    line-height: inherit !important;
    white-space: normal !important;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage :deep(pre.slidev-code .line) {
    display: block;
    line-height: inherit !important;
    white-space: pre !important;
  }
  .slidev-layout.print-detail.print-rest-theme-color-usage
    :deep(.slidev-code-wrapper + .slidev-code-wrapper pre.slidev-code) {
    padding-top: 0 !important;
  }
</style>
