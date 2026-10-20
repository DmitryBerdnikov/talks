---
layout: print-poster
printPoster: true
class: print-customization-main-point
---

<div class="customization-main-point-center">
  <h1><span class="print-ink-text">И самое главное</span></h1>
</div>

<style>
  .print-customization-main-point .customization-main-point-center {
    position: absolute;
    inset: calc(-1 * var(--slide-gutter-top)) calc(-1 * var(--slide-gutter-x))
      calc(-1 * var(--slide-gutter-bottom));
    display: grid;
    place-items: center;
    text-align: center;
  }
  .print-customization-main-point h1 {
    font-size: var(--font-size-heading);
    line-height: 1.12;
    color: var(--color-text);
  }
</style>
