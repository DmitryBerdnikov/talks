---
layout: print-editorial
printPoster: true
class: print-rest-provider-output provider-explainer
---

# <span class="print-ink-text">Что делает MantineProvider</span>

Предоставляет тему, управляет цветовой схемой и добавляет CSS-переменные

<!-- prettier-ignore -->
```html {all|3-4}
<body>
	<div id="root">
		<style data-mantine-styles="true"></style>
		<style data-mantine-styles="classes"></style>
	</div>
</body>
```

<style>
  .slidev-layout.print-editorial.print-rest-provider-output :deep(.slidev-code-wrapper) {
    margin-top: 0;
  }
  .slidev-layout.print-editorial.print-rest-provider-output :deep(pre.slidev-code) {
    padding: 42px 36px !important;
    line-height: 1.45 !important;
  }
</style>
