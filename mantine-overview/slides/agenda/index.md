---
layout: print-poster
printPoster: true
class: print-agenda
---

# <span class="print-ink-text">Содержание</span>

<ul class="print-agenda-list">
  <li>Обзор Mantine</li>
  <li>Установка</li>
  <li>Настройка темы</li>
  <li>Стилизация компонентов</li>
  <li>Полезные возможности</li>
  <li>Выводы</li>
</ul>

<style>
  .print-agenda h1 {
    font-size: var(--font-size-heading-lg);
    padding-top: 24px;
  }
  .print-agenda .print-agenda-list {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: repeat(3, 116px);
    grid-auto-flow: column;
    counter-reset: agenda-items;
    column-gap: 74px;
    margin-top: 54px;
  }
  .print-agenda .print-agenda-list li {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 78px;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
    font-size: var(--font-size-xl);
    counter-increment: agenda-items;
    font-weight: 750;
    letter-spacing: -0.035em;
    line-height: 1.12;
  }
  .print-agenda .print-agenda-list li:nth-child(3),
  .print-agenda .print-agenda-list li:nth-child(6) {
    border-bottom: 0;
  }
  .print-agenda .print-agenda-list li::before {
    content: counter(agenda-items, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 50%;
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    font-weight: 850;
    font-variant-numeric: tabular-nums;
    line-height: 1;
    transform: translateY(-50%);
  }
</style>
