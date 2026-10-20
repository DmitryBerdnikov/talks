---
layout: print-css
printPoster: true
class: print-css-baseline
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

<h1><span class="print-ink-text">Что внутри CSS</span></h1>
<div class="css-section">
  <p class="css-section-number"><span class="print-ink-text">1/4</span></p>
  <h2>Базовые стили</h2>
</div>

<!-- prettier-ignore -->
```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}
```

<DeckLink
  class="css-source"
  href="https://github.com/mantinedev/mantine/blob/master/packages/@mantine/core/src/core/MantineProvider/baseline.css">baseline.css</DeckLink>
