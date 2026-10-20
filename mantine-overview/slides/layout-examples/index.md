---
layout: print-poster
printPoster: true
class: print-layout-examples
---

# <span class="print-ink-text">@mantine/core</span>

<div class="layout-gallery">
  <section>
    <h2><a href="https://mantine.dev/core/app-shell/">Layout: AppShell</a></h2>
    <img src="./app-shell.svg" alt="" />
  </section>
  <section>
    <h2><a href="https://mantine.dev/core/grid/">Layout: Grid</a></h2>
    <img src="./grid.svg" alt="" />
  </section>
</div>

<style>
  .print-layout-examples .layout-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px;
    margin-top: 44px;
  }
  .print-layout-examples .layout-gallery h2 {
    font-size: var(--font-size-xl);
    line-height: 1.15;
    margin-bottom: 22px;
  }
  .print-layout-examples .layout-gallery img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
