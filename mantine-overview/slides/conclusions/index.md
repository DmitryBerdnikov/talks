---
layout: print-detail
printPoster: true
class: print-rest-conclusions
clicks: 5
---

<script setup>
  import { Rocket, Boxes, SlidersHorizontal, Paintbrush, CodeXml } from '@lucide/vue'
</script>

# <span class="print-ink-text">Выводы</span>

Mantine — хороший выбор, когда нужно быстро собрать интерфейс с приятным дизайном из коробки или адаптировать готовые компоненты под собственный дизайн.

<ul class="conclusions-list">
  <li v-click="1">
    <span class="conclusion-icon conclusion-icon-start"
      ><Rocket :size="36" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      <strong>Быстрый старт</strong
      ><span class="conclusion-description">Большая коллекция готовых компонентов</span>
    </div>
  </li>
  <li v-click="2">
    <span class="conclusion-icon conclusion-icon-ecosystem"
      ><Boxes :size="36" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      <strong>Развитая экосистема</strong
      ><span class="conclusion-description">Хуки, формы и дополнительные пакеты</span>
    </div>
  </li>
  <li v-click="3">
    <span class="conclusion-icon conclusion-icon-custom"
      ><SlidersHorizontal :size="36" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      <strong>Гибкая кастомизация</strong
      ><span class="conclusion-description">От настройки темы до собственных компонентов</span>
    </div>
  </li>
  <li v-click="4">
    <span class="conclusion-icon conclusion-icon-style"
      ><Paintbrush :size="36" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      <strong>Гибкая стилизация</strong
      ><span class="conclusion-description"
        >CSS Modules, Styles API, поддержка Tailwind и CSS-in-JS</span
      >
    </div>
  </li>
  <li v-click="5">
    <span class="conclusion-icon conclusion-icon-dx"
      ><CodeXml :size="36" :stroke-width="1.8" aria-hidden="true"
    /></span>
    <div>
      <strong>Хороший DX</strong
      ><span class="conclusion-description">TypeScript, документация и AI-инструменты</span>
    </div>
  </li>
</ul>

<style>
  .slidev-layout.print-detail.print-rest-conclusions :deep(h1) {
    color: var(--color-primary);
    font-size: var(--font-size-heading-sm);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.editorial-body) {
    gap: 28px;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.editorial-body > p) {
    max-width: 1040px;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.35;
    text-wrap: balance;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusions-list) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, 112px);
    grid-auto-flow: column;
    column-gap: 48px;
    row-gap: 0;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusions-list li) {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
    padding: 16px 0;
    border-top: 1px solid var(--color-border-primary);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusions-list li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusions-list strong) {
    display: block;
    color: var(--color-text);
    font-size: 23px;
    line-height: 1.15;
    font-weight: 750;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-description) {
    display: block;
    margin-top: 6px;
    color: var(--color-text-muted);
    font-size: 18px;
    line-height: 1.3;
    font-weight: 400;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon) {
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border-radius: 16px;
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon-start) {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon-ecosystem) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon-custom) {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon-style) {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .slidev-layout.print-detail.print-rest-conclusions :deep(.conclusion-icon-dx) {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
</style>
