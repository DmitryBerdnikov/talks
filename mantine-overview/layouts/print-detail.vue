<script setup lang="ts">
import PrintEditorial from './print-editorial.vue'
</script>

<template>
  <PrintEditorial class="print-detail">
    <slot />
    <template v-if="$slots.left" #left><slot name="left" /></template>
    <template v-if="$slots.right" #right><slot name="right" /></template>
  </PrintEditorial>
</template>

<style scoped>
.print-detail :deep(.print-content) {
  gap: var(--slide-gap-lg);
}
.print-detail :deep(.editorial-body),
.print-detail :deep(.editorial-column) {
  gap: var(--slide-gap-md);
}
.print-detail :deep(.editorial-columns) {
  gap: var(--slide-gap-2xl);
  align-items: start;
}
.print-detail :deep(h1) {
  font-size: var(--slide-heading-size);
  line-height: 1.04;
}
.print-detail :deep(h1 code) {
  font-weight: inherit;
}
.print-detail :deep(h2),
.print-detail :deep(h3) {
  font-size: var(--font-size-lg);
}
.print-detail :deep(p),
.print-detail :deep(li) {
  font-size: var(--font-size-md);
  line-height: 1.35;
}
.print-detail :deep(pre.slidev-code) {
  box-sizing: border-box;
  padding: 24px !important;
  font-size: var(--font-size-sm) !important;
  line-height: 1.3 !important;
}
.print-detail :deep(.result-visual) {
  width: 100%;
}
.print-detail :deep(.result-visual img) {
  max-height: 280px;
}
.print-detail :deep(ul > li::before) {
  top: 0.52em;
  width: 6px;
  height: 6px;
}
</style>
