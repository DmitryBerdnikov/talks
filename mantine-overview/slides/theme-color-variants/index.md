---
layout: print-detail
printPoster: true
class: print-rest-theme-color-variants explanatory-lead
---

# <span class="print-ink-text">Цветовая палитра</span>

Компоненты используют разные оттенки палитры в зависимости от варианта и цветовой схемы

<div class="palette-map">
  <div class="palette-map-ramp">
    <div class="map-shade" style="background: #e7f5ff"><code>blue[0]</code></div>
    <div class="map-shade" style="background: #d0ebff"><code>blue[1]</code></div>
    <div class="map-shade" style="background: #a5d8ff"><code>blue[2]</code></div>
    <div class="map-shade" style="background: #74c0fc"><code>blue[3]</code></div>
    <div class="map-shade" style="background: #4dabf7"><code>blue[4]</code></div>
    <div class="map-shade map-shade-dark" style="background: #339af0"><code>blue[5]</code></div>
    <div class="map-shade map-shade-dark" style="background: #228be6"><code>blue[6]</code></div>
    <div class="map-shade map-shade-dark" style="background: #1c7ed6"><code>blue[7]</code></div>
    <div class="map-shade map-shade-dark" style="background: #1971c2"><code>blue[8]</code></div>
    <div class="map-shade map-shade-dark" style="background: #1864ab"><code>blue[9]</code></div>
  </div>
  <svg class="palette-map-links" viewBox="0 0 1072 90" fill="none" aria-hidden="true">
    <path d="M266.5 0 V12 Q266.5 18 260.5 18 H128 Q122 18 122 24 V86" />
    <circle cx="266.5" cy="0" r="3" />
    <path d="M697.7 0 V30 Q697.7 36 691.7 36 H404 Q398 36 398 42 V86" />
    <circle cx="697.7" cy="0" r="3" />
    <path d="M805.5 0 V48 Q805.5 54 799.5 54 H680 Q674 54 674 60 V86" />
    <circle cx="805.5" cy="0" r="3" />
    <path d="M1021.1 0 V66 Q1021.1 72 1015.1 72 H956 Q950 72 950 78 V86" />
    <circle cx="1021.1" cy="0" r="3" />
  </svg>
  <div class="palette-map-examples">
    <section class="map-example">
      <div class="map-button-space">
        <button type="button" class="map-button map-button-2">Button</button>
      </div>
      <h2><code>subtle</code></h2>
      <p class="map-state">hover</p>
      <p class="map-hex">#A5D8FF · фон</p>
    </section>
    <section class="map-example">
      <div class="map-button-space">
        <button type="button" class="map-button map-button-6">Button</button>
      </div>
      <h2><code>filled</code></h2>
      <p class="map-state">default</p>
      <p class="map-hex">#228BE6 · фон</p>
    </section>
    <section class="map-example">
      <div class="map-button-space">
        <button type="button" class="map-button map-button-7">Button</button>
      </div>
      <h2><code>filled</code></h2>
      <p class="map-state">hover</p>
      <p class="map-hex">#1C7ED6 · фон</p>
    </section>
    <section class="map-example">
      <div class="map-button-space">
        <button type="button" class="map-button map-button-9">Button</button>
      </div>
      <h2><code>subtle</code></h2>
      <p class="map-state">default</p>
      <p class="map-hex">#1864AB · текст</p>
    </section>
  </div>
</div>

<style>
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.print-content),
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.editorial-body) {
    gap: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.editorial-body > p) {
    max-width: 980px;
    margin-top: 24px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map) {
    position: relative;
    margin-top: 32px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map-ramp) {
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: 6px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-shade) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    color: var(--color-text);
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-shade-dark) {
    color: #fff;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-shade code) {
    padding: 0;
    color: inherit;
    background: transparent;
    font-size: var(--font-size-xs);
    line-height: 1;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map-links) {
    position: absolute;
    top: 54px;
    left: 0;
    width: 100%;
    height: 90px;
    overflow: visible;
    pointer-events: none;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map-links path) {
    stroke: #228be6;
    stroke-width: 1.5px;
    opacity: 0.4;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map-links circle) {
    fill: #228be6;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.palette-map-examples) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
    margin-top: 90px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-example) {
    min-width: 0;
    text-align: center;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button-space) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button) {
    min-width: 172px;
    height: 64px;
    padding: 0 24px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-family: inherit;
    font-size: var(--font-size-md);
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button-2) {
    background: #a5d8ff;
    color: #1864ab;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button-6) {
    background: #228be6;
    color: #fff;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button-7) {
    background: #1c7ed6;
    color: #fff;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button-9) {
    background: transparent;
    color: #1864ab;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-button:focus-visible) {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-hex) {
    margin-top: 10px;
    color: var(--color-text-muted);
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: var(--font-size-xs);
    line-height: 1.3;
    letter-spacing: 0;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-example h2) {
    margin-top: 18px;
    color: var(--color-text);
    font-size: var(--font-size-md);
    line-height: 1.2;
  }
  .slidev-layout.print-detail.print-rest-theme-color-variants :deep(.map-state) {
    margin-top: 6px;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    line-height: 1.3;
  }
</style>
