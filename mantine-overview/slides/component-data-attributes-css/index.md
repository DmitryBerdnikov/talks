---
layout: default
printPoster: true
class: print-rest-component-data-attributes-css
clicks: 2
---

<script setup>
  import { Mail } from '@lucide/vue'
</script>

# <span class="print-ink-text">Data-атрибуты</span>

<div class="attributes-panel">
  <div class="attributes-result">
    <div class="attributes-input-example">
      <label for="attributes-email">Email</label>
      <div class="attributes-input-field">
        <input id="attributes-email" placeholder="Введите email" aria-invalid="true" readonly />
        <Mail :size="20" :stroke-width="1.8" aria-hidden="true" />
      </div>
    </div>
  </div>
  <div class="attributes-code">
    <div class="attributes-jsx">
      <!-- prettier-ignore -->

```tsx {all|5|8} {at: 1}
<Input.Wrapper label="Email">
  <Input
    placeholder="Введите email"
    classNames={{ input: styles.input }}
    variant="filled"
    size="lg"
    rightSection={<Icon name="mail" />}
    error
  />
</Input.Wrapper>
```

</div>
<div class="attributes-css">
  <!-- prettier-ignore -->

```css {all|1-3|5-8} {at: 1}
.input[data-variant='filled'] {
  background-color: #f1f5f9;
}

.input[data-error] {
  border: 1px solid #ef4444;
  background-color: #fff5f5;
}
```

</div>
</div>
</div>

<style>
  .slidev-layout.print-rest-component-data-attributes-css {
    padding: var(--slide-gutter-top) var(--slide-gutter-x);
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-data-attributes-css h1 {
    margin: 0 0 36px;
    padding: 0;
    color: var(--color-primary);
    font-size: var(--font-size-heading-sm);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.04;
  }
  .slidev-layout.print-rest-component-data-attributes-css .print-ink-text {
    display: inline-block;
    padding: 12px 18px;
    margin: -12px -18px;
    mask-image: url('../../assets/print/ink-wear-mask.png');
    mask-mode: luminance;
    mask-size: 640px 640px;
    mask-repeat: repeat;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-panel {
    display: grid;
    grid-template-rows: 144px minmax(0, 1fr);
    height: 458px;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-result {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: var(--color-background);
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-input-example {
    width: 506px;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-input-example label {
    display: block;
    margin-bottom: 4px;
    color: #202321;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-input-field {
    position: relative;
    color: #ef4444;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-input-field input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 0 48px 0 18px;
    border: 1px solid #ef4444;
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    background: #fff5f5;
    color: inherit;
    font: inherit;
    font-size: 20px;
  }
  .slidev-layout.print-rest-component-data-attributes-css
    .attributes-input-field
    input::placeholder {
    color: inherit;
    opacity: 1;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-input-field svg {
    position: absolute;
    top: 18px;
    right: 18px;
    pointer-events: none;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-code {
    display: grid;
    grid-template-columns: 1.08fr 1fr;
    padding: 20px 32px;
    background: var(--color-code-background);
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-jsx {
    min-width: 0;
    padding-right: 28px;
    border-right: 1px solid #314052;
  }
  .slidev-layout.print-rest-component-data-attributes-css .attributes-css {
    min-width: 0;
    padding-left: 32px;
  }
  .slidev-layout.print-rest-component-data-attributes-css .slidev-code-wrapper {
    margin: 0 !important;
  }
  .slidev-layout.print-rest-component-data-attributes-css pre.slidev-code {
    border: 0;
    border-radius: 0 !important;
    padding: 0 !important;
    font-size: 20px !important;
    line-height: 1.35 !important;
    overflow: visible !important;
  }
  .slidev-layout.print-rest-component-data-attributes-css pre.slidev-code code {
    display: block;
    line-height: inherit !important;
    white-space: normal !important;
  }
  .slidev-layout.print-rest-component-data-attributes-css pre.slidev-code .line {
    display: block !important;
    min-height: 1lh;
    line-height: inherit !important;
    white-space: pre !important;
  }
</style>
