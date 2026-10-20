---
layout: print-detail
printPoster: true
class: print-rest-component-data-attributes
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

# <span class="print-ink-text">Styles API в документации</span>

<div class="attributes-image">
  <div class="attributes-image-panel">
    <img src="./input-data-attributes.png" alt="" />
  </div>
</div>

<p class="attributes-caption">Для стилизации состояний и вариантов компонентов через CSS</p>

<DeckLink href="https://mantine.dev/core/input/?t=styles-api">Input — Styles API</DeckLink>

<style>
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.editorial-body) {
    height: 100%;
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.attributes-caption) {
    margin: -8px 0 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    font-weight: 500;
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.deck-link) {
    position: absolute;
    bottom: -12px;
    left: 0;
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.attributes-image) {
    display: block;
    flex: none;
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.attributes-image-panel) {
    width: 100%;
    padding: 0;
    background: #242424;
    border-radius: 12px;
    overflow: hidden;
  }
  .slidev-layout.print-detail.print-rest-component-data-attributes :deep(.attributes-image img) {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 410px;
    margin: 0;
    object-fit: contain;
    object-position: left center;
  }
</style>
