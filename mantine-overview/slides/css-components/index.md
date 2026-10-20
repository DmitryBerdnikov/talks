---
layout: print-css
printPoster: true
class: print-css-components
---

<h1><span class="print-ink-text">Что внутри CSS</span></h1>
<div class="css-section">
  <p class="css-section-number"><span class="print-ink-text">4/4</span></p>
  <h2>CSS компонента</h2>
</div>

<!-- prettier-ignore -->
```css
.m_77c9d27d {
  height: var(--button-height);
  padding-inline: var(--button-padding-x);
  border-radius: var(--button-radius);
  font-size: var(--button-fz);
  font-weight: 600;
  cursor: pointer;
}

.m_77c9d27d:where([data-disabled]) {
  cursor: not-allowed;
  opacity: 0.6;
}
```
