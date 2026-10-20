---
layout: default
printPoster: true
class: print-rest-component-theme-styles
---

<script setup>
  import result from './global-theme.png'
</script>

# <span class="print-ink-text">Глобальная стилизация</span>

<div class="theme-panel">
<div class="theme-code">

<!-- prettier-ignore -->
```tsx {*|4-6|7|8-10|11-15}
const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
      classNames: { wrapper: styles.wrapper },
      styles: {
        input: { fontSize: '18px' },
      },
      vars: () => ({
        wrapper: {
          '--input-height': '56px',
        },
      }),
    }),
  },
})
```

</div>

<div class="theme-result">
  <img :src="result" alt="" />
</div>
</div>

<style>
  .slidev-layout.print-rest-component-theme-styles {
    padding: var(--slide-gutter-top) var(--slide-gutter-x);
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-theme-styles h1 {
    margin: 0 0 36px;
    padding: 0;
    color: var(--color-primary);
    font-size: var(--font-size-heading-sm);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.04;
  }
  .slidev-layout.print-rest-component-theme-styles .print-ink-text {
    display: inline-block;
    padding: 12px 18px;
    margin: -12px -18px;
    mask-image: url('../../assets/print/ink-wear-mask.png');
    mask-mode: luminance;
    mask-size: 640px 640px;
    mask-repeat: repeat;
  }
  .slidev-layout.print-rest-component-theme-styles .theme-panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(0, 1fr);
    align-items: center;
    height: 458px;
    padding: 0;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-theme-styles .theme-code {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-width: 0;
    height: 100%;
    padding: 4px 20px;
    background: var(--color-code-background);
  }
  .slidev-layout.print-rest-component-theme-styles .theme-code .slidev-code-wrapper {
    width: 100%;
    min-width: 0;
  }
  .slidev-layout.print-rest-component-theme-styles pre.slidev-code {
    border: 0;
    border-radius: 0 !important;
    padding: 8px 12px !important;
    font-size: 17px !important;
    line-height: 1.3 !important;
  }
  .slidev-layout.print-rest-component-theme-styles pre.slidev-code code {
    display: block;
    line-height: inherit !important;
    white-space: normal !important;
  }
  .slidev-layout.print-rest-component-theme-styles pre.slidev-code .line {
    display: block !important;
    min-height: 1lh;
    line-height: inherit !important;
    white-space: pre !important;
  }
  .slidev-layout.print-rest-component-theme-styles .theme-result {
    min-width: 0;
    display: flex;
    align-items: center;
    align-self: stretch;
    box-sizing: border-box;
    height: 100%;
    min-height: 0;
    margin: 0;
    padding: 24px 32px 24px 44px;
    border-radius: 0;
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-theme-styles .theme-result img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }
</style>
