---
layout: print-detail
printPoster: true
class: print-rest-component-structure
clicks: 3
---

<script setup>
  import ComparisonReveal from '../../components/comparison-reveal.vue'
</script>

# <span class="print-ink-text">Как устроен компонент</span>

<!-- prettier-ignore-start -->

<ComparisonReveal :expanded="$clicks >= 1">
<template #first>
<section class="anatomy-column original">

<div class="anatomy-heading">
  <h2>Использование компонента</h2>
  <p>Передаём пропсы в компонент</p>
</div>

<div class="anatomy-panel">
<div class="anatomy-result">
  <div class="anatomy-input-example">
    <label for="anatomy-email">Email</label>
    <p class="anatomy-description">Доступен только gmail</p>
    <input id="anatomy-email" placeholder="Введите email" aria-invalid="true" readonly />
    <p class="anatomy-error">Неверный email</p>
  </div>
</div>

<!-- prettier-ignore -->
```tsx {all|1-5,10|6-9} {at: 2}
<Input.Wrapper
  label="Email"
  description="Доступен только gmail"
  error="Неверный email"
>
  <Input
    placeholder="Введите email"
    error
  />
</Input.Wrapper>
```

</div>
</section>

</template>
<template #second>
<section class="anatomy-column markup">

<div class="anatomy-heading">
  <h2>Структура в HTML</h2>
  <p>Компонент рендерит разметку (упрощённо)</p>
</div>

<!-- prettier-ignore -->
```tsx {all|1-6,15-16|8-13} {at: 2}
<div class="root">
  <label class="label">Email</label>

  <p class="description">
    Доступен только gmail
  </p>

  <div class="wrapper">
    <input
      class="input"
      placeholder="Введите email"
    />
  </div>

  <p class="error">Неверный email</p>
</div>
```

</section>
</template>
</ComparisonReveal>

<!-- prettier-ignore-end -->

<style>
  .slidev-layout.print-detail.print-rest-component-structure :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-column) {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 4px;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-heading) {
    min-height: 72px;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-heading h2) {
    color: var(--color-text);
    font-size: 26px;
    letter-spacing: -0.02em;
    line-height: 1.15;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-heading p) {
    margin-top: 5px;
    color: var(--color-text-muted);
    font-size: 18px;
    line-height: 1.2;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(pre.slidev-code) {
    font-size: 20px !important;
    line-height: 1.15 !important;
    padding: 20px 16px !important;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(pre.slidev-code .line) {
    white-space: pre !important;
  }

  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-panel) {
    display: grid;
    overflow: hidden;
    border: 1px solid var(--color-demo-border);
    border-radius: 16px;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.slidev-code-wrapper) {
    margin: 0 !important;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.markup pre.slidev-code) {
    min-height: 382px;
    height: auto;
    font-size: 19px !important;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-panel pre.slidev-code) {
    height: 100%;
    border: 0;
    border-radius: 0 !important;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-result) {
    display: grid;
    place-items: center;
    padding: 24px 28px;
    background: var(--color-background);
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-input-example) {
    width: 100%;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-input-example label) {
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-description),
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-error) {
    margin: 2px 0 6px;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 400;
    letter-spacing: 0;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-description) {
    color: #868e96;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-error) {
    margin: 6px 0 0;
    color: #ff4d4f;
  }
  .slidev-layout.print-detail.print-rest-component-structure :deep(.anatomy-input-example input) {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #ff4d4f;
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    background: var(--color-background);
    color: #ff4d4f;
    font: inherit;
    font-size: 16px;
  }
  .slidev-layout.print-detail.print-rest-component-structure
    :deep(.anatomy-input-example input::placeholder) {
    color: inherit;
    opacity: 1;
  }
</style>
