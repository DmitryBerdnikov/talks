---
layout: print-css
printPoster: true
class: print-css-variables
---

<script setup>
  import DeckLink from '../../components/DeckLink.vue'
</script>

<h1><span class="print-ink-text">Что внутри CSS</span></h1>
<div class="css-section">
  <p class="css-section-number"><span class="print-ink-text">2/4</span></p>
  <h2>Переменные</h2>
</div>

<!-- prettier-ignore -->
```css
:root,
:host {
  --mantine-z-index-app: 100;
  --mantine-z-index-modal: 200;
  --mantine-color-white: #fff;
  --mantine-color-black: #000;
  --mantine-line-height: 1.55;
  --mantine-font-family:
    -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji;
}
```

<DeckLink
  class="css-source"
  href="https://github.com/mantinedev/mantine/blob/master/packages/@mantine/core/src/core/MantineProvider/default-css-variables.css">default-css-variables.css</DeckLink>
