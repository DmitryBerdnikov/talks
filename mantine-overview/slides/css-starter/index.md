---
layout: print-editorial
printPoster: true
class: print-rest-css-starter
---

Сначала 15 стилей, остальные — при добавлении
<!-- prettier-ignore -->
```ts
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/FloatingIndicator.css';
import '@mantine/core/styles/ActionIcon.css';
```

<style>
  .slidev-layout.print-editorial.print-rest-css-starter :deep(.editorial-body) {
    gap: 16px;
  }
  .slidev-layout.print-editorial.print-rest-css-starter :deep(.editorial-body > p) {
    max-width: 1020px;
    color: var(--color-primary);
    font-size: 36px;
    font-weight: 750;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }
  .slidev-layout.print-editorial.print-rest-css-starter :deep(pre.slidev-code) {
    font-size: 21px !important;
    line-height: 1.53 !important;
    padding: 14px 28px !important;
  }
</style>
