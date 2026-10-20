---
layout: print-detail
printPoster: true
class: print-rest-styles-api-docs
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

# <span class="print-ink-text">Styles API в документации</span>

<div class="api-docs-images">
  <div class="api-docs-panel">
    <img src="./input-styles-api.png" alt="" />
  </div>
</div>

<DeckLink href="https://mantine.dev/core/input/?t=styles-api">Input — Styles API</DeckLink>

<style>
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(.editorial-body) {
    height: 100%;
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(.api-docs-images) {
    display: block;
    flex: none;
    min-height: 0;
  }
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(.api-docs-panel) {
    width: 100%;
    padding: 0;
    background: #242424;
    border-radius: 12px;
    overflow: hidden;
  }
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(.api-docs-images img) {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: none;
    margin: 0;
    object-fit: contain;
    object-position: left center;
  }
  .slidev-layout.print-detail.print-rest-styles-api-docs :deep(.deck-link) {
    position: absolute;
    bottom: -12px;
    left: 0;
  }
</style>
