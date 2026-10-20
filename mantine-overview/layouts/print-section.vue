<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import PrintPoster from './print-poster.vue'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <PrintPoster class="print-section">
    <div class="section-number" aria-hidden="true">
      <span class="print-ink-text">{{ String($frontmatter.sectionNumber).padStart(2, '0') }}</span>
    </div>
    <div class="section-title"><slot /></div>
  </PrintPoster>
</template>

<style scoped>
.print-section :deep(.print-content) {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  align-items: center;
  gap: 56px;
}
.section-number {
  color: color-mix(in srgb, var(--color-text-muted) 65%, var(--color-background));
  font-size: var(--font-size-metric);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}
.section-title {
  min-width: 0;
}
.print-section :deep(h1) {
  color: var(--color-primary);
  margin: 0;
  padding: 0;
  font-size: var(--slide-heading-size);
  font-weight: 900;
  line-height: 1.04;
}
</style>
