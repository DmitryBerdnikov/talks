---
layout: print-poster
printPoster: true
printInverse: true
class: print-bundle-size
---

<h1><span class="print-ink-text">Замеры</span></h1>
<div class="bundle-chart">
  <section>
    <h2>Без сжатия</h2>
    <div class="bundle-bars">
      <div class="bundle-bar js" style="--bar-height: 30px">
        <span>24,97 <small>кБ</small></span>
      </div>
      <div class="bundle-bar css" style="--bar-height: 300px">
        <span>248,33 <small>кБ</small></span>
      </div>
    </div>
  </section>
  <section>
    <h2>gzip</h2>
    <div class="bundle-bars">
      <div class="bundle-bar js" style="--bar-height: 9px">
        <span>7,48 <small>кБ</small></span>
      </div>
      <div class="bundle-bar css" style="--bar-height: 44px">
        <span>36,12 <small>кБ</small></span>
      </div>
    </div>
  </section>
  <section>
    <h2>Brotli</h2>
    <div class="bundle-bars">
      <div class="bundle-bar js" style="--bar-height: 8px">
        <span>6,59 <small>кБ</small></span>
      </div>
      <div class="bundle-bar css" style="--bar-height: 35px">
        <span>29,26 <small>кБ</small></span>
      </div>
    </div>
  </section>
</div>
<div class="bundle-legend"><span>Mantine JS</span><span>CSS Mantine</span></div>

<style>
  .slidev-layout.print-bundle-size {
    background: var(--color-background-dark);
    color: var(--color-text-inverse);
  }
  .slidev-layout.print-bundle-size::after {
    opacity: 0.12;
    mix-blend-mode: soft-light;
  }
  .slidev-layout.print-bundle-size h1 {
    color: var(--color-text-inverse);
  }
  .print-bundle-size .bundle-legend {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
    font-size: var(--font-size-sm);
    font-weight: 450;
  }
  .print-bundle-size .bundle-legend span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 6px 16px;
    color: var(--color-text-on-dark);
    text-align: center;
  }
  .print-bundle-size .bundle-legend span::before {
    content: '';
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #f7df1e;
  }
  .print-bundle-size .bundle-legend span:last-child::before {
    background: #6aadff;
  }
  .print-bundle-size .bundle-chart {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 46px;
    margin-top: 60px;
  }
  .print-bundle-size .bundle-chart section {
    display: flex;
    flex-direction: column-reverse;
  }
  .print-bundle-size .bundle-chart h2 {
    color: var(--color-text-on-dark);
    font-size: var(--font-size-md);
    font-weight: 550;
    letter-spacing: -0.02em;
    margin-top: 18px;
    line-height: 1.1;
    text-align: center;
  }
  .print-bundle-size .bundle-bars {
    display: flex;
    align-items: end;
    gap: 26px;
    height: 340px;
    padding: 0 12px;
    border-bottom: 1px solid var(--color-border-inverse);
  }
  .print-bundle-size .bundle-bar {
    position: relative;
    width: 116px;
    height: var(--bar-height);
    background: #f7df1e;
  }
  .print-bundle-size .bundle-bar.css {
    background: #6aadff;
  }
  .print-bundle-size .bundle-bar span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: var(--font-size-lg);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.025em;
  }
  .print-bundle-size .bundle-bar.css > span {
    color: var(--color-text-inverse);
    font-weight: 800;
  }
  .print-bundle-size .bundle-bar small {
    color: var(--color-text-on-dark);
    font-size: var(--font-size-xs);
    font-weight: 450;
    letter-spacing: 0;
  }
</style>
