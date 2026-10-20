---
layout: print-detail
printPoster: true
class: print-rest-style-props
---

<script setup>
  import { Ban, SlidersHorizontal, Gauge } from '@lucide/vue'
</script>

# <span class="print-ink-text">Style props</span>

::left::

| Пропсы                | CSS-свойства               |
| --------------------- | -------------------------- |
| `m`, `mt`, `mb`, `mx` | `margin`                   |
| `p`, `pt`, `pb`, `px` | `padding`                  |
| `w`, `h`              | `width`, `height`          |
| `bg`, `c`             | `background`, `color`      |
| `fz`, `fw`            | `font-size`, `font-weight` |
| `display`, `opacity`  | `display`, `opacity`       |

::right::

<ul class="style-props-notes">
  <li>
    <span class="style-props-icon"><Ban :size="22" :stroke-width="1.8" aria-hidden="true" /></span>
    <div>Не предназначены для основной стилизации</div>
  </li>
  <li>
    <span class="style-props-icon"
      ><SlidersHorizontal :size="22" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      Рекомендуется использовать не более <span style="text-wrap: nowrap">3–4</span> пропсов на
      компонент
    </div>
  </li>
  <li>
    <span class="style-props-icon"
      ><Gauge :size="22" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      Могут быть проблемы с производительностью, особенно при использовании адаптивных пропсов
      <span class="style-props-hint">Может помочь deduplicateInlineStyles</span>
    </div>
  </li>
</ul>

<style>
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-columns) {
    position: relative;
    grid-template-columns: 540px minmax(0, 1fr);
    gap: 56px;
    align-items: start;
    padding-top: 28px;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-column:last-child) {
    padding-top: 12px;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-columns::before) {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 568px;
    width: 1px;
    background: var(--color-border-primary);
    pointer-events: none;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(table) {
    font-size: var(--font-size-sm);
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(th),
  .slidev-layout.print-detail.print-rest-style-props :deep(td) {
    padding: 12px;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(th),
  .slidev-layout.print-detail.print-rest-style-props :deep(td:first-child code) {
    color: var(--color-text);
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(td:last-child code) {
    color: var(--color-text-muted);
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.style-props-hint) {
    display: block;
    margin-top: 8px;
    color: color-mix(in srgb, var(--color-text-muted) 80%, var(--color-background));
    font-size: var(--font-size-xs);
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-column li) {
    color: var(--color-text);
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
    padding-left: 0;
    font-size: var(--font-size-sm);
    line-height: 1.35;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-column li::before) {
    content: none;
  }
  .slidev-layout.print-detail.print-rest-style-props
    :deep(.style-props-notes > li:first-child > div) {
    align-self: center;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.style-props-icon) {
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 12px;
    color: #c4454d;
    background: #ffe3e5;
  }
  .slidev-layout.print-detail.print-rest-style-props
    :deep(.style-props-notes > li:nth-child(2) .style-props-icon) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-detail.print-rest-style-props
    :deep(.style-props-notes > li:nth-child(3) .style-props-icon) {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.style-props-icon svg) {
    width: 28px;
    height: 28px;
    stroke-width: 1.8;
  }
  .slidev-layout.print-detail.print-rest-style-props :deep(.editorial-column ul) {
    gap: 36px;
  }
</style>
