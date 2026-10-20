---
layout: print-detail
printPoster: true
class: print-rest-custom-components
clicks: 2
---

<script setup>
  import { Timer, Copy, Keyboard, ToggleLeft, ShieldCheck, ListTree } from '@lucide/vue'
</script>

# <span class="print-ink-text">А ещё</span>

<div class="custom-summary feature-block">
  <h3>Кастомные компоненты</h3>
  <p>
    Создание компонентов через <code>factory</code> из <code>@mantine/core</code> с поддержкой
    стилей и тем Mantine
  </p>
</div>

::left::

<section v-click="1" class="feature-block feature-section">
  <h3>@mantine/hooks</h3>
  <p>Набор готовых React-хуков<br />для типовых задач</p>
  <ul class="feature-list hooks-list">
    <li>
      <span class="feature-icon feature-icon-blue"><Timer aria-hidden="true" /></span>
      <div>
        <code>useDebouncedValue</code
        ><span class="item-description">Обновление значения с задержкой</span>
      </div>
    </li>
    <li>
      <span class="feature-icon feature-icon-purple"><Copy aria-hidden="true" /></span>
      <div>
        <code>useClipboard</code><span class="item-description">Копирование в буфер обмена</span>
      </div>
    </li>
    <li>
      <span class="feature-icon feature-icon-green"><Keyboard aria-hidden="true" /></span>
      <div>
        <code>useHotkeys</code><span class="item-description">Обработка горячих клавиш</span>
      </div>
    </li>
  </ul>
</section>

::right::

<section v-click="2" class="feature-block feature-section">
  <h3>@mantine/form</h3>
  <p>Управление состоянием формы,<br />валидацией и ошибками</p>
  <ul class="feature-list form-list">
    <li>
      <span class="feature-icon feature-icon-blue"><ToggleLeft aria-hidden="true" /></span>
      <div><strong class="item-title">Controlled и uncontrolled режимы</strong></div>
    </li>
    <li>
      <span class="feature-icon feature-icon-purple"><ShieldCheck aria-hidden="true" /></span>
      <div>
        <strong class="item-title">Валидация</strong
        ><span class="item-description"
          >Встроенные проверки и интеграция с Zod и другими библиотеками</span
        >
      </div>
    </li>
    <li>
      <span class="feature-icon feature-icon-green"><ListTree aria-hidden="true" /></span>
      <div><strong class="item-title">Работа с вложенными полями</strong></div>
    </li>
  </ul>
</section>

<style>
  .slidev-layout.print-detail.print-rest-custom-components :deep(h1) {
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.editorial-body) {
    gap: 28px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.custom-summary) {
    padding-bottom: 18px;
    border-bottom: 1px solid var(--color-border-primary);
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-section) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-section > p) {
    min-height: 57px;
    margin: 0;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-block) {
    transition:
      opacity 350ms ease,
      transform 350ms ease;
    transform: translateY(0);
  }
  .slidev-layout.print-detail.print-rest-custom-components
    :deep(.feature-block.slidev-vclick-hidden) {
    transform: translateY(8px);
  }
  @media (prefers-reduced-motion: reduce) {
    .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-block) {
      transition: none;
      transform: none;
    }
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(h3) {
    font-size: 28px;
    line-height: 1.1;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.custom-summary p) {
    margin-top: 12px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.editorial-column) {
    gap: 18px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(p) {
    color: var(--color-text);
    font-size: 21px;
    font-weight: 400;
    line-height: 1.35;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(li) {
    font-size: 20px;
    line-height: 1.35;
    font-weight: 400;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-list) {
    gap: 8px;
    grid-template-rows: 64px minmax(88px, auto) 64px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-list li) {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    align-items: start;
    gap: 14px;
    padding: 8px 0;
    font-size: 18px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-list li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.hooks-list code),
  .slidev-layout.print-detail.print-rest-custom-components :deep(.item-title) {
    display: block;
    color: var(--color-text);
    font-family: inherit;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 650;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.item-description) {
    display: block;
    color: var(--color-text-muted);
    font-size: 18px;
    line-height: 1.25;
  }
  .slidev-layout.print-detail.print-rest-custom-components
    :deep(.feature-list div > .item-description) {
    margin-top: 3px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-icon) {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-icon svg) {
    width: 22px;
    height: 22px;
    stroke-width: 1.8;
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-icon-blue) {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-icon-purple) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.feature-icon-green) {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .slidev-layout.print-detail.print-rest-custom-components :deep(.custom-summary code) {
    padding: 2px 7px;
    border-radius: 6px;
    background: #eeeff0;
    color: #3f4656;
    font-family: monospace;
    font-size: 0.9em;
    font-weight: 400;
  }
</style>
