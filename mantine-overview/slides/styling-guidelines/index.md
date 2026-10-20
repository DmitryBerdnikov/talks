---
layout: print-detail
printPoster: true
class: print-rest-styling-guidelines
---

# <span class="print-ink-text">Как лучше стилизовать</span>

CSS Modules — рекомендуемый способ стилизации

::left::

### Локальная стилизация

<ol class="styling-rows">
  <li>
    <div class="styling-row-head">
      <span>Props:</span
      ><span class="styling-chip"
        ><code>variant</code>, <code>size</code>, <code>radius</code>, <code>color</code></span
      >
    </div>
  </li>
  <li>
    <div class="styling-row-head">
      <span>Style Props:</span
      ><span class="styling-chip"><code>mt</code>, <code>w</code>, <code>p</code></span>
    </div>
    <span class="styling-note">Для простых CSS-свойств</span>
  </li>
  <li>
    <div class="styling-row-head">
      <span>CSS Modules:</span
      ><span class="styling-chip"><code>className</code> / <code>classNames</code></span>
    </div>
    <span class="styling-note">Основной способ кастомизации</span>
  </li>
  <li>
    <div class="styling-row-head">
      <span>CSS-переменные:</span><span class="styling-chip"><code>vars</code></span>
    </div>
  </li>
  <li>
    <div class="styling-row-head">
      <span>Inline-стили:</span
      ><span class="styling-chip"><code>style</code>, <code>styles</code></span>
    </div>
  </li>
</ol>

::right::

### Глобальная стилизация

<ol class="styling-rows">
  <li>
    <div class="styling-row-head"><code>createTheme</code></div>
    <span class="styling-note">Цвета, типографика, отступы, радиусы</span>
  </li>
  <li>
    <div class="styling-row-head"><code>defaultProps</code></div>
    <span class="styling-note">Значения пропсов компонентов по умолчанию</span>
  </li>
  <li>
    <div class="styling-row-head">
      <span>CSS Modules + <code>Component.extend({ classNames })</code></span>
    </div>
    <span class="styling-note">Глобальная кастомизация отдельных компонентов</span>
  </li>
  <li>
    <div class="styling-row-head"><code>vars</code></div>
    <span class="styling-note">Настройка поддерживаемых CSS-переменных через тему</span>
  </li>
  <li>
    <div class="styling-row-head"><code>styles</code></div>
    <span class="styling-note">Глобальная стилизация внутренних элементов через inline-стили</span>
  </li>
</ol>

<style>
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(h1) {
    color: var(--color-text);
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.print-content) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.editorial-body) {
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.editorial-body > p) {
    font-size: 28px;
    font-weight: 400;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.editorial-columns) {
    gap: 48px;
    align-items: start;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.editorial-column) {
    gap: 18px;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(h3) {
    font-size: 30px;
    line-height: 1.1;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(ol) {
    gap: 0;
    grid-auto-rows: 72px;
    padding: 0;
    list-style: none;
    counter-reset: styling-point;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(ol > li) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0 10px 52px;
    counter-increment: styling-point;
    position: relative;
    border-top: 1px solid var(--color-border);
    font-size: 18px;
    font-weight: 650;
    line-height: 1.25;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(ol > li::before) {
    content: counter(styling-point);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: #ecece8;
    color: #55585b;
    font-weight: 650;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.styling-row-head) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    min-height: 30px;
    font-size: 19px;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.styling-chip) {
    flex-shrink: 0;
    color: var(--color-primary);
    font-size: inherit;
    line-height: inherit;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(.styling-note) {
    display: block;
    margin-top: -2px;
    color: var(--color-text-muted);
    font-size: 14px;
    line-height: 1.3;
    font-weight: 400;
  }
  .slidev-layout.print-detail.print-rest-styling-guidelines :deep(li code) {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: 650;
  }
</style>
