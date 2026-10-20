---
layout: print-editorial
printPoster: true
class: print-drawbacks
---

<script setup>
  import { Atom, SlidersHorizontal, Puzzle } from '@lucide/vue'
</script>

<h1><span class="print-ink-text">Недостатки</span></h1>
<ul class="drawbacks-list">
  <li>
    <span class="drawback-icon drawback-react"
      ><Atom :size="30" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <span>Только для React</span>
  </li>
  <li>
    <span class="drawback-icon drawback-customization"
      ><SlidersHorizontal :size="30" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <span>Гибкая кастомизация требует времени на изучение</span>
  </li>
  <li>
    <span class="drawback-icon drawback-scenarios"
      ><Puzzle :size="30" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <span>Не все сложные сценарии закрываются из коробки</span>
  </li>
</ul>

<style>
  .slidev-layout.print-editorial.print-drawbacks :deep(.editorial-body) {
    gap: 48px;
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(h1) {
    color: var(--color-danger-strong);
    font-size: var(--font-size-heading);
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawbacks-list) {
    display: grid;
    gap: 0;
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawbacks-list > li) {
    display: grid;
    grid-template-columns: 60px minmax(0, 1fr);
    align-items: center;
    gap: 24px;
    min-height: 124px;
    padding: 24px 0;
    border-top: 1px solid var(--color-border-primary);
    font-size: var(--font-size-lg);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.28;
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawbacks-list > li::before) {
    display: none;
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawback-icon) {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawback-react) {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawback-customization) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-editorial.print-drawbacks :deep(.drawback-scenarios) {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
</style>
