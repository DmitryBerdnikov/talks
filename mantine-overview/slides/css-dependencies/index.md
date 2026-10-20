---
layout: print-editorial
printPoster: true
class: print-rest-css-dependencies
---

<h1><span class="print-ink-text">Некоторые компоненты зависят от других стилей</span></h1>

<!-- prettier-ignore -->
```ts
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
```

<img class="dependencies-meme" src="./dependencies-meme.png" alt="" />

<style>
  .slidev-layout.print-editorial.print-rest-css-dependencies :deep(.print-content) {
    justify-content: center;
  }
  .slidev-layout.print-editorial.print-rest-css-dependencies :deep(.editorial-body) {
    width: 660px;
    gap: 40px;
  }
  .slidev-layout.print-editorial.print-rest-css-dependencies :deep(h1) {
    font-size: var(--font-size-heading-compact);
    line-height: 1.1;
    letter-spacing: -0.035em;
  }
  .slidev-layout.print-editorial.print-rest-css-dependencies :deep(pre.slidev-code) {
    padding: 30px 24px !important;
    font-size: 20px !important;
    line-height: 1.6 !important;
  }
  .slidev-layout.print-editorial.print-rest-css-dependencies :deep(.dependencies-meme) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 360px;
    height: 360px;
    object-fit: contain;
  }
</style>
