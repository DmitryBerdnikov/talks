---
layout: print-poster
printPoster: true
class: print-customization-showcase
---

<script setup>
  import ThemeComparison from '../../components/theme-comparison.vue'
  import defaultImage from './default-theme.png'
  import customImage from './custom-theme.png'
</script>

# <span class="print-ink-text">Возможности кастомизации</span>

<ThemeComparison withBorder :default-image="defaultImage" :custom-image="customImage" />

<style>
  .print-customization-showcase {
    --slide-heading-size: var(--font-size-heading-sm);
  }
</style>
