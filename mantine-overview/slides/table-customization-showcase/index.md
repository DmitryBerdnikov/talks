---
layout: print-poster
printPoster: true
class: print-table-customization-showcase
---

<script setup>
  import ThemeComparison from '../../components/theme-comparison.vue'
  import defaultImage from './default-theme.png'
  import customImage from './custom-theme.png'
</script>

# <span class="print-ink-text">Возможности кастомизации</span>

<ThemeComparison :default-image="defaultImage" :custom-image="customImage" :inset="16" />

<style>
  .print-table-customization-showcase {
    --slide-heading-size: var(--font-size-heading-sm);
  }
</style>
