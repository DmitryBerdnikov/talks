---
layout: print-css
printPoster: true
class: print-css-global
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

<h1><span class="print-ink-text">Что внутри CSS</span></h1>
<div class="css-section">
  <p class="css-section-number"><span class="print-ink-text">3/4</span></p>
  <h2>Глобальные стили</h2>
</div>

<!-- prettier-ignore -->
```css
.mantine-focus-auto {
  &:focus-visible {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: 2px;
  }
}

.mantine-focus-never:focus {
  outline: none;
}
```

<DeckLink
  class="css-source"
  href="https://github.com/mantinedev/mantine/blob/master/packages/@mantine/core/src/core/MantineProvider/global.css">global.css</DeckLink>
