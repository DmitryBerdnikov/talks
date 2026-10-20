---
layout: print-detail
printPoster: true
class: print-rest-theme-sizes
---

<script setup>
  const sizes = [
    { name: 'xs', pixels: '10px', rem: '0.625rem', height: 60 },
    { name: 'sm', pixels: '12px', rem: '0.75rem', height: 72 },
    { name: 'md', pixels: '16px', rem: '1rem', height: 96 },
    { name: 'lg', pixels: '20px', rem: '1.25rem', height: 120 },
    { name: 'xl', pixels: '32px', rem: '2rem', height: 192 },
  ]
</script>

# <span class="print-ink-text">Размеры</span>

<div class="size-scale">
  <section v-for="size in sizes" :key="size.name" class="size-column">
    <p class="size-measurements">
      <strong>{{ size.pixels }}</strong>
      <span>{{ size.rem }}</span>
    </p>
    <svg class="size-dimension" viewBox="0 0 180 28" preserveAspectRatio="none" aria-hidden="true">
      <path d="M1 14H179M1 1V27M179 1V27" fill="none" stroke="currentColor" stroke-width="1" />
    </svg>
    <div class="size-bar" :style="{ height: `${size.height}px` }"></div>
    <h2><span class="print-ink-text">{{ size.name }}</span></h2>
  </section>
</div>

<p class="size-footnote">
  <strong>theme.spacing</strong> при базовом размере шрифта <strong>16px</strong> и
  <strong>scale: 1</strong>
</p>

<style>
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-footnote) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -16px;
    padding-top: 22px;
    border-top: 1px solid var(--color-border-primary);
    text-align: left;
    color: var(--color-text-muted);
    font-size: 18px;
    line-height: 1.5;
    font-weight: 350;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-footnote strong) {
    color: inherit;
    font-weight: 700;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-footnote > span) {
    font-size: 18px;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-scale) {
    position: absolute;
    top: 136px;
    left: 0;
    right: 0;
    height: 340px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-items: end;
    gap: 44px;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-column) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 0;
    text-align: center;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-measurements) {
    display: grid;
    gap: 4px;
    color: var(--color-primary);
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: -0.025em;
    font-variant-numeric: tabular-nums;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-measurements strong) {
    font-weight: 750;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-measurements > span) {
    color: color-mix(in srgb, var(--color-primary) 40%, var(--color-text-muted));
    font-size: 18px;
    font-weight: 450;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-dimension) {
    width: 100%;
    height: 28px;
    margin: 14px 0 12px;
    color: var(--color-primary);
    opacity: 0.4;
    pointer-events: none;
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-bar) {
    border-top: 4px solid var(--color-primary);
    border-radius: 4px;
    background: color-mix(in srgb, var(--color-primary) 14%, var(--color-background));
  }
  .slidev-layout.print-detail.print-rest-theme-sizes :deep(.size-column h2) {
    margin-top: 24px;
    color: var(--color-text);
    font-size: 36px;
    font-weight: 850;
    line-height: 1.1;
  }
</style>
