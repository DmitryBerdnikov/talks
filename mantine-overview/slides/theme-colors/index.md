---
layout: print-editorial
printPoster: true
class: print-rest-theme-colors
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

# <span class="print-ink-text">Цветовая палитра</span>

<div class="palette-example">
  <div class="blue-palette">
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #e7f5ff"><span>0</span></div>
      <code>#e7f5ff</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #d0ebff"><span>1</span></div>
      <code>#d0ebff</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #a5d8ff"><span>2</span></div>
      <code>#a5d8ff</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #74c0fc"><span>3</span></div>
      <code>#74c0fc</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #4dabf7"><span>4</span></div>
      <code>#4dabf7</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch" style="background: #339af0"><span>5</span></div>
      <code>#339af0</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch palette-swatch-dark" style="background: #228be6">
        <span>6</span>
      </div>
      <code>#228be6</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch palette-swatch-dark" style="background: #1c7ed6">
        <span>7</span>
      </div>
      <code>#1c7ed6</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch palette-swatch-dark" style="background: #1971c2">
        <span>8</span>
      </div>
      <code>#1971c2</code>
    </div>
    <div class="palette-shade">
      <div class="palette-swatch palette-swatch-dark" style="background: #1864ab">
        <span>9</span>
      </div>
      <code>#1864ab</code>
    </div>
  </div>
</div>

<div class="palette-footer">
  <p>За основу взята концепция open-color</p>
  <p>В colors-generator задаём основной цвет и получаем 10 оттенков</p>
</div>

<div class="palette-links">
  <DeckLink href="https://yeun.github.io/open-color/">open-color</DeckLink>
  <DeckLink href="https://mantine.dev/colors-generator/">colors-generator</DeckLink>
</div>

<style>
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.editorial-body) {
    height: 100%;
    gap: 0;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-example) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 20px 0 28px;
    min-height: 0;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.blue-palette) {
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: 4px;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-shade) {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-swatch) {
    display: flex;
    align-items: flex-end;
    height: 136px;
    padding: 14px;
    color: var(--color-text);
    font-size: var(--font-size-xl);
    font-weight: 750;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-swatch-dark) {
    color: var(--color-text-inverse);
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-shade > code) {
    padding: 0;
    background: transparent;
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-align: center;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-footer) {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 48px;
    padding-top: 22px;
    border-top: 1px solid var(--color-border);
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-footer p) {
    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 1.35;
  }
  .slidev-layout.print-editorial.print-rest-theme-colors :deep(.palette-links) {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    flex-shrink: 0;
    gap: 48px;
    margin-top: 18px;
  }
</style>
