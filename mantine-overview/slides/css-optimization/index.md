---
layout: print-poster
printPoster: true
class: print-css-optimization
---

<h1><span class="print-ink-text">Оптимизация CSS</span></h1>
<p class="optimization-intro slide-subtitle">Подключить только необходимые стили</p>

<!-- prettier-ignore -->
```ts
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```

<style>
  .print-css-optimization .optimization-intro {
    max-width: 980px;
    margin-top: 20px;
    font-size: var(--font-size-xl);
    font-weight: 650;
    letter-spacing: -0.025em;
    margin-bottom: 40px;
  }

  .print-css-optimization .slidev-code-wrapper pre.slidev-code {
    padding: 44px 30px !important;
    font-size: var(--font-size-md) !important;
    line-height: 1.65 !important;
  }
</style>
