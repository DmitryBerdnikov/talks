---
layout: print-detail
printPoster: true
class: print-rest-styles-api
---

<script setup>
  import ResultVisual from '../../components/result-visual.vue'
  import result0 from './styles-api.png'
</script>

# <span class="print-ink-text">Styles API</span>

::left::

Styles API — механизм для стилизации внутренних элементов компонентов Mantine

- `classNames` — назначение CSS-классов
- `styles` — применение inline-стилей
- `vars` — переопределение CSS-переменных

<ResultVisual :src="result0" class="api-result" />

::right::

<!-- prettier-ignore -->
```tsx {*|4-7|8-10|14-16}
<Input.Wrapper
  label="Email"
  description="Введите email"
  classNames={{
    root: styles.root,
    label: styles.label,
  }}
  styles={{
    description: { color: '#868e96' },
  }}
>
  <Input
    placeholder="name@company.ru"
    vars={() => ({
      wrapper: { '--input-height': '60px' },
    })}
  />
</Input.Wrapper>
```

<style>
  .slidev-layout.print-detail.print-rest-styles-api :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-columns) {
    display: grid;
    flex: none;
    grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
    gap: 42px;
    align-items: stretch;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-column) {
    gap: 0;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-column > p) {
    margin-bottom: 16px;
    font-size: 23px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -0.4px;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-column ul) {
    display: block;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-column li) {
    padding: 10px 0;
    border-top: 1px solid var(--color-border);
    font-size: var(--font-size-sm);
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -0.4px;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.editorial-column li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(li code) {
    font-family: 'Inter', sans-serif;
    font-size: inherit;
    font-weight: 650;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.api-result) {
    width: 100%;
    max-width: 100%;
    margin-top: 16px;
    padding: 12px;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(.api-result img) {
    width: auto;
    max-width: 100%;
    max-height: 160px;
    margin-inline: auto;
  }
  .slidev-layout.print-detail.print-rest-styles-api :deep(pre.slidev-code) {
    flex: 1;
    font-size: 18.5px !important;
    line-height: 1.15 !important;
    padding: 16px !important;
  }
  .slidev-layout.print-detail.print-rest-styles-api
    :deep(.editorial-column:last-child .slidev-code-wrapper) {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 !important;
  }
</style>
