---
layout: print-editorial
printPoster: true
class: print-rest-theme-palette
---

<script setup>
  // DEFAULT_COLORS: packages/@mantine/core/src/core/MantineProvider/default-colors.ts
  const palette = [
    { name: 'dark', color: '#2e2e2e' },
    { name: 'gray', color: '#868e96' },
    { name: 'red', color: '#fa5252' },
    { name: 'pink', color: '#e64980' },
    { name: 'grape', color: '#be4bdb' },
    { name: 'violet', color: '#7950f2' },
    { name: 'indigo', color: '#4c6ef5' },
    { name: 'blue', color: '#228be6' },
    { name: 'cyan', color: '#15aabf' },
    { name: 'teal', color: '#12b886' },
    { name: 'green', color: '#40c057' },
    { name: 'lime', color: '#82c91e' },
    { name: 'yellow', color: '#fab005' },
    { name: 'orange', color: '#fd7e14' },
  ]
</script>

# <span class="print-ink-text">Цветовая палитра</span>

<div class="palette-names">
  <div
    v-for="color in palette"
    :key="color.name"
    class="palette-color"
    :class="{ 'palette-color-dark-text': ['cyan', 'teal', 'green', 'lime', 'yellow', 'orange'].includes(color.name) }"
    :style="{ background: color.color }"
  >
    <span>{{ color.name }}</span>
  </div>
</div>

**14 цветов × 10 оттенков**

<style>
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.editorial-body) {
    height: 100%;
    gap: 24px;
  }
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.editorial-body > p) {
    text-align: center;
    font-size: var(--font-size-lg);
    line-height: 1.1;
    letter-spacing: -0.035em;
  }
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.palette-names) {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    flex: 1;
    min-height: 0;
    gap: 0;
    margin-top: 12px;
  }
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.palette-color) {
    display: flex;
    min-height: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    color: var(--color-text-inverse);
  }
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.palette-color > span) {
    color: inherit;
    font-size: var(--font-size-md);
    font-weight: 750;
    line-height: 1.1;
  }
  .slidev-layout.print-editorial.print-rest-theme-palette :deep(.palette-color-dark-text) {
    color: var(--color-text);
  }
</style>
