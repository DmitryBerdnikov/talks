---
layout: print-poster
printPoster: true
class: print-title
---

<div class="print-hand" aria-hidden="true">
  <img class="print-hand-image" src="./reference-hand-edge-complete.png" alt="" />
</div>

<h1 class="print-title-heading">
  <span class="print-ink-text print-wordmark">Mant<span class="print-wordmark-i">i</span>ne</span
  ><br />удобный UI<br />для React
</h1>
<div class="print-author">Дмитрий Бердников</div>

<style>
  .slidev-layout.print-title {
    background: var(--color-background-paper);
  }
  .print-title .print-title-heading {
    position: absolute;
    top: 110px;
    left: -4px;
    font-size: var(--font-size-heading);
    font-weight: 800;
    color: var(--color-text);
    line-height: 0.98;
  }
  .print-title .print-wordmark {
    display: inline-block;
    color: var(--color-primary);
    font-size: var(--font-size-wordmark);
    font-weight: 900;
    line-height: 1.04;
    letter-spacing: -0.055em;
  }
  /* Красный круг заменяет точку i; исходная синяя точка не должна выступать. */
  .print-title .print-wordmark-i {
    display: inline-block;
    clip-path: inset(0.33em 0 0 0);
  }
  .print-title .print-hand {
    z-index: 2;
    position: absolute;
    width: 595px;
    top: -52px;
    right: 22px;
    transform: scale(0.9);
    transform-origin: center top;
  }
  .print-title .print-hand-image {
    display: block;
    /* Добавлены 96 px справа и 40 px сверху; исходная рука остаётся на месте. */
    width: calc(100% * 2058 / 1962);
    max-width: none;
    height: auto;
    transform: translateY(calc(-100% * 40 / 841));
  }
  .print-title .print-author {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }
</style>
