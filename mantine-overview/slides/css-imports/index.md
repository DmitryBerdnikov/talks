---
layout: print-poster
printPoster: true
class: print-rest-css-imports
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

<h1><span class="print-ink-text">Оптимизация CSS</span></h1>
<p class="imports-intro slide-subtitle">И дальше подключаем точечно стили компонента</p>

<div class="imports-image-panel">
  <img src="./css-imports.png" alt="" />
</div>

<DeckLink class="imports-source" href="https://mantine.dev/styles/css-files-list/">https://mantine.dev/styles/css-files-list/</DeckLink>

<style>
  .print-rest-css-imports .imports-intro {
    max-width: 980px;
    margin-top: 20px;
    font-size: var(--font-size-xl);
    font-weight: 650;
    letter-spacing: -0.025em;
    margin-bottom: 24px;
  }
  .print-rest-css-imports .imports-image-panel {
    width: 100%;
    padding: 0;
    background: #242424;
    border-radius: 12px;
    overflow: hidden;
  }
  .print-rest-css-imports .imports-image-panel img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 340px;
    max-width: 100%;
    margin: 0;
    object-fit: contain;
    object-position: left center;
  }
  .print-rest-css-imports .imports-source {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
