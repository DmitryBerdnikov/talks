---
layout: print-poster
printPoster: true
class: print-rest-extension-examples
---

# <span class="print-ink-text">Расширения</span>

<div class="extension-gallery">
  <section>
    <h2>@mantine/dates</h2>
    <img src="./dates-showcase.png" alt="" />
  </section>
  <section>
    <h2>@mantine/charts</h2>
    <img src="./charts-showcase.png" alt="" />
  </section>
  <section>
    <h2>@mantine/tiptap</h2>
    <img src="./tiptap-showcase.png" alt="" />
  </section>
</div>

<style>
  .print-rest-extension-examples .extension-gallery {
    display: grid;
    grid-template-columns: 1fr 1.05fr 1fr;
    gap: 26px;
    margin-top: 58px;
  }
  .print-rest-extension-examples .extension-gallery h2 {
    font-size: var(--font-size-xl);
    line-height: 1.15;
    margin-bottom: 22px;
    white-space: nowrap;
  }
  .print-rest-extension-examples .extension-gallery img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 17px;
    box-shadow: 0 6px 20px var(--color-surface-subtle);
  }
  .print-slide-container .slidev-layout.print-rest-extension-examples .extension-gallery img {
    box-shadow: none;
  }
  @media print {
    .slidev-layout.print-rest-extension-examples .extension-gallery img {
      box-shadow: none;
    }
  }
</style>
