<script setup lang="ts">
import PrintPoster from './print-poster.vue'
</script>

<template>
  <PrintPoster class="print-css"><slot /></PrintPoster>
</template>

<style scoped>
.print-css :deep(h1) {
  font-size: var(--slide-heading-size);
}
.print-css :deep(.print-content) {
  display: grid;
  grid-template-columns: 203px minmax(0, 1fr);
  grid-template-rows: 108px minmax(0, 1fr) 30px;
  column-gap: 28px;
}
.print-css :deep(h1) {
  grid-column: 1 / -1;
}
.print-css :deep(.css-section) {
  padding-top: 8px;
}
.print-css :deep(.css-section-number) {
  color: var(--color-text-muted);
  font-size: var(--font-size-heading-lg);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
}
.print-css :deep(.css-section h2) {
  margin-top: 22px;
  color: var(--color-text-muted);
  font-size: var(--font-size-lg);
  line-height: 1.12;
}
.print-css :deep(.slidev-code-wrapper) {
  min-width: 0;
  align-self: start;
  margin: 0;
}
.print-css :deep(.slidev-code-wrapper pre.slidev-code) {
  box-sizing: border-box;
  height: 414px;
  margin: 0;
  padding: 26px 28px !important;
  font-size: var(--font-size-sm) !important;
  line-height: 1.3 !important;
}
.print-css :deep(.slidev-code code),
.print-css :deep(.slidev-code .line) {
  line-height: inherit !important;
  white-space: pre-wrap !important;
  overflow-wrap: anywhere;
}
.print-css :deep(p:has(> .css-source)) {
  grid-column: 1 / -1;
  align-self: end;
  line-height: 1.3;
}
.print-css :deep(.css-source) {
  grid-column: 1 / -1;
  align-self: end;
  overflow-wrap: anywhere;
  font-size: var(--font-size-xs);
  line-height: 1.3;
}
</style>
