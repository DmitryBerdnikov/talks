<script setup lang="ts">
import PrintPoster from './print-poster.vue'
</script>

<template>
  <PrintPoster class="print-editorial">
    <div class="editorial-body"><slot /></div>
    <div v-if="$slots.left || $slots.right" class="editorial-columns">
      <div class="editorial-column"><slot name="left" /></div>
      <div class="editorial-column"><slot name="right" /></div>
    </div>
  </PrintPoster>
</template>

<style scoped>
.print-editorial :deep(.print-content) {
  display: flex;
  flex-direction: column;
  gap: var(--slide-gap-md);
}
.editorial-body,
.editorial-column {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--slide-gap-md);
  min-width: 0;
}
.editorial-body:empty {
  display: none;
}
.editorial-columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--slide-gap-xl);
  min-height: 0;
  flex: 1;
}
.print-editorial :deep(h1) {
  max-width: 1030px;
  font-size: var(--slide-heading-size);
  line-height: 1.04;
}
.print-editorial.provider-explainer :deep(.editorial-body) {
  gap: var(--slide-gap-md);
}
.print-editorial.provider-explainer :deep(h1) {
  font-size: var(--font-size-heading-compact);
}
.print-editorial.provider-explainer :deep(.editorial-body > :is(h2, p)) {
  color: var(--color-text-muted);
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 1.3;
}
.print-editorial.explanatory-lead :deep(.editorial-body > p:first-of-type) {
  color: var(--color-text-muted);
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 1.3;
}
.print-editorial :deep(h2),
.print-editorial :deep(h3) {
  margin: 0;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.12;
}
.print-editorial :deep(p),
.print-editorial :deep(li) {
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.015em;
}
.print-editorial :deep(ul),
.print-editorial :deep(ol) {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.print-editorial :deep(ul > li) {
  position: relative;
  padding-left: 26px;
}
.print-editorial :deep(ul > li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 13px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-danger);
}
.print-editorial :deep(ol) {
  padding-left: 27px;
}
.print-editorial :deep(ol > li) {
  padding-left: 5px;
}
.print-editorial :deep(ol > li::marker) {
  color: var(--color-danger);
  font-weight: 800;
}
.print-editorial :deep(p code),
.print-editorial :deep(li code),
.print-editorial :deep(td code),
.print-editorial :deep(th code),
.print-editorial :deep(h1 code),
.print-editorial :deep(h2 code),
.print-editorial :deep(h3 code) {
  padding: 0;
  background: transparent;
  color: var(--color-primary);
  font-size: var(--font-size-inline-code);
  line-height: inherit;
}
.print-editorial :deep(h1 code) {
  font-family: inherit;
  font-size: inherit;
}
.print-editorial :deep(.slidev-code-wrapper) {
  min-width: 0;
  margin: 0;
}
.print-editorial :deep(pre.slidev-code) {
  margin: 0;
  padding: 26px 28px !important;
  font-size: var(--font-size-md) !important;
  line-height: 1.25 !important;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-variant-ligatures: none;
  tab-size: 2;
}
.print-editorial :deep(pre.slidev-code code),
.print-editorial :deep(pre.slidev-code .line) {
  line-height: inherit !important;
  white-space: pre-wrap !important;
  overflow-wrap: anywhere;
}
.print-editorial :deep(.result-visual) {
  max-width: 100%;
  margin: 0;
  flex-shrink: 0;
}
.print-editorial :deep(.result-visual img) {
  max-height: 180px;
  object-position: left center;
}
.print-editorial :deep(p > img) {
  max-width: 100%;
  max-height: 390px;
  object-fit: contain;
  object-position: left center;
}
.print-editorial :deep(p:has(> a:only-child)) {
  font-size: var(--font-size-xs);
}
.print-editorial :deep(a) {
  text-decoration: underline;
}
.print-editorial :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-md);
  font-variant-numeric: tabular-nums;
}
.print-editorial :deep(th),
.print-editorial :deep(td) {
  padding: 15px 16px;
  border: 0;
  border-bottom: 1px solid var(--color-border-primary);
  text-align: left;
}
.print-editorial :deep(th) {
  color: var(--color-primary);
  font-weight: 800;
}
.print-editorial :deep(tr:last-child td) {
  border: 0;
}
.print-editorial :deep(tr:has(td:only-child:empty)) {
  display: none;
}
.print-editorial.print-chapter :deep(.print-content) {
  justify-content: center;
}
.print-editorial.print-chapter :deep(h1) {
  max-width: 1010px;
  font-size: var(--slide-heading-size);
  line-height: 1.03;
}
.print-editorial.print-chapter :deep(h1::after) {
  content: '';
  display: block;
  width: 34px;
  height: 34px;
  margin-top: 36px;
  background: var(--color-danger);
  border-radius: 50%;
}
.print-editorial.print-chapter :deep(p) {
  max-width: 960px;
  font-size: var(--font-size-lg);
}
</style>
