---
layout: print-poster
printPoster: true
printInverse: true
class: print-css-size-comparison
---

<h1><span class="print-ink-text">CSS</span></h1>

<div class="css-vertical-chart">
  <section class="css-chart-group">
    <div class="css-chart-bars">
      <div class="css-chart-item raw">
        <div class="css-chart-bar" style="--bar-height: 100%">
          <span class="css-chart-value">248,33 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item gzip">
        <div class="css-chart-bar" style="--bar-height: 14.54516%">
          <span class="css-chart-value">36,12 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item brotli">
        <div class="css-chart-bar" style="--bar-height: 11.78271%">
          <span class="css-chart-value">29,26 <small>кБ</small></span>
        </div>
      </div>
    </div>
    <h2>Полный <code>styles.css</code></h2>
  </section>
  <section class="css-chart-group">
    <div class="css-chart-bars">
      <div class="css-chart-item raw">
        <div class="css-chart-bar" style="--bar-height: 22.71977%">
          <span class="css-chart-value">56,42 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item gzip">
        <div class="css-chart-bar" style="--bar-height: 3.69669%">
          <span class="css-chart-value">9,18 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item brotli">
        <div class="css-chart-bar" style="--bar-height: 2.98796%">
          <span class="css-chart-value">7,42 <small>кБ</small></span>
        </div>
      </div>
    </div>
    <h2>Базовые + 15 файлов</h2>
  </section>
  <section class="css-chart-group">
    <div class="css-chart-bars">
      <div class="css-chart-item raw">
        <div class="css-chart-bar" style="--bar-height: 10.20819%">
          <span class="css-chart-value">25,35 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item gzip">
        <div class="css-chart-bar" style="--bar-height: 1.73962%">
          <span class="css-chart-value">4,32 <small>кБ</small></span>
        </div>
      </div>
      <div class="css-chart-item brotli">
        <div class="css-chart-bar" style="--bar-height: 1.27653%">
          <span class="css-chart-value">3,17 <small>кБ</small></span>
        </div>
      </div>
    </div>
    <h2>3 базовых файла</h2>
  </section>
</div>
<div class="css-chart-legend">
  <span class="raw"><i aria-hidden="true"></i>Без сжатия</span>
  <span class="gzip"><i aria-hidden="true"></i>gzip</span>
  <span class="brotli"><i aria-hidden="true"></i>Brotli</span>
</div>

<style>
  .slidev-layout.print-css-size-comparison {
    --chart-raw: var(--color-accent-on-deep);
    --chart-gzip: #c4a7ed;
    --chart-brotli: #82d5b5;
    background: var(--color-background-dark);
    color: var(--color-text-inverse);
  }
  .slidev-layout.print-css-size-comparison::after {
    opacity: 0.12;
    mix-blend-mode: soft-light;
  }
  .slidev-layout.print-css-size-comparison h1 {
    color: var(--color-text-inverse);
  }
  .print-css-size-comparison .raw {
    --series-color: var(--chart-raw);
  }
  .print-css-size-comparison .gzip {
    --series-color: var(--chart-gzip);
  }
  .print-css-size-comparison .brotli {
    --series-color: var(--chart-brotli);
  }
  .print-css-size-comparison .css-chart-legend {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
    color: var(--color-text-on-dark);
    font-size: var(--font-size-sm);
  }
  .print-css-size-comparison .css-chart-legend span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 6px 16px;
  }
  .print-css-size-comparison .css-chart-legend i {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--series-color);
  }
  .print-css-size-comparison .css-vertical-chart {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    margin-top: 60px;
  }
  .print-css-size-comparison .css-chart-bars {
    display: flex;
    align-items: end;
    gap: 18px;
    height: 340px;
    border-bottom: 1px solid var(--color-border-inverse);
  }
  .print-css-size-comparison .css-chart-item {
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 1;
    min-width: 0;
    height: 100%;
  }
  .print-css-size-comparison .css-chart-bar {
    position: relative;
    width: 62px;
    height: calc(var(--bar-height) * 300 / 340);
    min-height: 3px;
    background: var(--series-color);
  }
  .print-css-size-comparison .css-chart-value {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 12px;
    color: var(--color-text-inverse);
    font-size: 23px;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.025em;
    line-height: 1.05;
    white-space: nowrap;
  }
  .print-css-size-comparison .css-chart-value small {
    color: var(--color-text-on-deep-muted);
    font-size: 14px;
    font-weight: 450;
    letter-spacing: 0;
  }
  .slidev-layout.print-css-size-comparison .css-chart-group h2 {
    margin-top: 18px;
    color: var(--color-text-on-dark);
    font-size: var(--font-size-md);
    font-weight: 550;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-align: center;
  }
  .print-css-size-comparison .css-chart-group h2 code {
    color: inherit;
    background: none;
    padding: 0;
    font: inherit;
  }
</style>
