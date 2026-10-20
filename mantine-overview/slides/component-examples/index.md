---
layout: print-poster
printPoster: true
class: print-component-examples
---

# <span class="print-ink-text">@mantine/core</span>

<div class="print-component-columns">
  <section>
    <h2>Inputs</h2>
    <img src="./inputs.png" alt="" />
  </section>
  <section>
    <h2>Buttons</h2>
    <img src="./buttons.png" alt="" />
  </section>
  <section>
    <h2>Data display</h2>
    <img src="./data-display.png" alt="" />
  </section>
</div>

<style>
  .print-component-examples .print-component-columns {
    display: grid;
    grid-template-columns: 1fr 1.05fr 1fr;
    gap: 26px;
    margin-top: 58px;
  }
  .print-component-examples .print-component-columns h2 {
    font-size: var(--font-size-xl);
    line-height: 1.15;
    margin-bottom: 22px;
    white-space: nowrap;
  }
  .print-component-examples .print-component-columns img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 17px;
    box-shadow: 0 6px 20px var(--color-surface-subtle);
  }
  .print-slide-container .slidev-layout.print-component-examples .print-component-columns img {
    box-shadow: none;
  }
  @media print {
    .slidev-layout.print-component-examples .print-component-columns img {
      box-shadow: none;
    }
  }
</style>
