<template>
  <div class="slidev-layout print-poster">
    <div class="print-content"><slot /></div>
  </div>
</template>

<style scoped>
.print-poster {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: var(--slide-gutter-top) var(--slide-gutter-x) var(--slide-gutter-bottom);
  background: var(--color-background);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
}
.print-poster.print-title::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('../assets/print/reference-paper-hd.png') center / cover no-repeat;
  filter: grayscale(1);
  mix-blend-mode: multiply;
  opacity: 0.2;
  pointer-events: none;
}
.print-content {
  position: relative;
  z-index: 1;
  height: 100%;
}
.print-poster :deep(h1),
.print-poster :deep(h2),
.print-poster :deep(p),
.print-poster :deep(ul),
.print-poster :deep(li) {
  margin: 0;
  padding: 0;
  color: inherit;
  border: 0;
}
.print-poster :deep(h1) {
  color: var(--color-primary);
  font-size: var(--slide-heading-size);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.04em;
}
.print-poster :deep(h2) {
  font-weight: 800;
  letter-spacing: -0.035em;
}
.print-poster :deep(p),
.print-poster :deep(li) {
  line-height: 1.3;
}
.print-poster :deep(ul) {
  list-style: none;
}
.print-poster :deep(a) {
  color: inherit;
  text-decoration-color: var(--color-danger);
  text-underline-offset: 6px;
}
.print-poster :deep(a:focus-visible) {
  outline: 3px solid var(--color-danger);
  outline-offset: 5px;
}
/* Маска снимает краску только с набора; HTML-текст остаётся редактируемым. */
.print-poster :deep(.print-ink-text) {
  display: inline-block;
  /* Запас для глифов, выходящих за advance width при плотном наборе. */
  padding: 12px 18px;
  margin: -12px -18px;
  mask-image: url('../assets/print/ink-wear-mask.png');
  mask-mode: luminance;
  mask-size: 640px 640px;
  mask-repeat: repeat;
}
.print-poster :deep(::selection) {
  background: var(--color-danger);
  color: var(--color-text-inverse);
}
</style>
