---
layout: print-poster
printPoster: true
class: print-installation
---

<script setup>
  import CopyCommand from '../../components/copy-command.vue'
</script>

<h1><span class="print-ink-text">Установка</span></h1>
<!-- prettier-ignore -->
<CopyCommand class="install-command" command="npm install @mantine/core @mantine/hooks">
  <span class="install-prompt" aria-hidden="true">$</span>
  <code>npm install <span class="install-package">@mantine/core @mantine/hooks</span></code>
</CopyCommand>

<!-- prettier-ignore -->
```tsx {all|1-2|6,8}
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export function App() {
  return (
    <MantineProvider>
      Hello world
    </MantineProvider>
  );
}
```

<style>
  .print-installation .slidev-code code,
  .print-installation .slidev-code .line {
    line-height: inherit !important;
  }
  .print-installation .install-command {
    --color-code-background: #eeeded;
    --color-code-border: #d9dadd;
    --color-code-highlight: #dfe1e3;
    --color-code-text: var(--color-text);
    --color-code-comment: var(--color-text);
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 32px;
    margin-bottom: 28px;
    max-width: 980px;
    padding: 18px 68px 18px 28px;
    background: var(--color-code-background);
    border: 1px solid var(--color-code-border);
    border-radius: var(--code-radius);
  }
  .print-installation .install-command code {
    color: var(--color-code-text);
    background: transparent;
    font-size: var(--font-size-md);
    font-weight: 400;
  }
  .print-installation .install-prompt {
    color: var(--color-code-comment);
    font-family: var(--slidev-code-font-family, monospace);
    font-size: var(--font-size-md);
    font-weight: 400;
  }
  .print-installation .install-npm {
    color: var(--color-code-text);
    font-weight: 400;
  }
  .print-installation .install-package {
    font-weight: 600;
  }
  .print-installation .slidev-code-wrapper {
    max-width: 980px;
  }
  .print-installation .slidev-code-wrapper pre.slidev-code {
    padding: 26px 32px !important;
    font-size: var(--font-size-md) !important;
    line-height: 1.27 !important;
  }
</style>
