---
layout: print-detail
printPoster: true
class: print-rest-theme-scale
---

# <span class="print-ink-text">`scale`</span>

<p class="scale-subtitle">Коэффициент для <strong>rem</strong> размеров</p>

<div class="scale-demo">
<section>

<p>Если базовый размер меняется:</p>

<!-- prettier-ignore -->
```css
html {
  font-size: 10px;
}
```

</section>

<svg class="scale-arrow" viewBox="0 0 50 32" aria-hidden="true">
  <path d="M2 16H46M34 4L46 16 34 28" fill="none" stroke="currentColor" stroke-width="2" />
</svg>

<section>
  <p>Масштаб можно скорректировать:</p>

  <!-- prettier-ignore -->

```ts
const theme = createTheme({
  scale: 1.6,
})
```

</section>
</div>

<p class="scale-default">
  По умолчанию <code>scale: 1</code> — рассчитано на <code>font-size: 16px</code> у корневого
  элемента <code>html</code>
</p>

<style>
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.editorial-body) {
    gap: 16px;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(h1) {
    color: var(--color-primary);
    font-size: var(--font-size-display-term);
    line-height: 1;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(h1 code) {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-subtitle) {
    font-size: var(--font-size-lg);
    font-weight: 400;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-subtitle strong) {
    font-weight: 700;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-demo) {
    position: absolute;
    top: 250px;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 445px 48px minmax(0, 1fr);
    gap: 42px;
    align-items: start;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-demo section) {
    display: grid;
    gap: 20px;
    min-width: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-demo p) {
    color: var(--color-primary);
    font-size: 24px;
    font-weight: 750;
    letter-spacing: -0.025em;
    line-height: 1.25;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-arrow) {
    width: 48px;
    color: var(--color-text-muted);
    align-self: center;
    margin-top: 50px;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(pre.slidev-code) {
    padding: 24px !important;
    line-height: 1.35 !important;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-default) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -16px;
    padding-top: 22px;
    border-top: 1px solid var(--color-border-primary);
    color: var(--color-text-muted);
    font-size: 18px;
    font-weight: 350;
    line-height: 1.5;
  }
  .slidev-layout.print-detail.print-rest-theme-scale :deep(.scale-default code) {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
  }
</style>
