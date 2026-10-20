---
layout: print-detail
printPoster: true
class: print-rest-useful-links
---

# <span class="print-ink-text">Полезные ссылки</span>

<ul class="resource-list">
  <li>
    <a href="https://mantine.dev">https://mantine.dev</a
    ><span>Основной сайт и документация Mantine</span>
  </li>
  <li>
    <a href="https://ui.mantine.dev">https://ui.mantine.dev</a
    ><span> Mantine UI, коллекция готовых секций и составных UI-блоков на Mantine</span>
  </li>
  <li>
    <a href="https://mantine.dev/x/extensions/">https://mantine.dev/x/extensions/</a
    ><span>Каталог официальных расширений и расширений сообщества</span>
  </li>
</ul>

<style>
  .slidev-layout.print-detail.print-rest-useful-links :deep(.editorial-body) {
    height: 100%;
    gap: 36px;
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list > li) {
    display: grid;
    grid-template-columns: 410px minmax(0, 1fr);
    align-items: center;
    gap: 40px;
    padding: 24px 0;
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list > li + li) {
    border-top: 1px solid var(--color-border);
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list > li::before) {
    display: none;
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list > li > a) {
    font-size: var(--font-size-sm);
    font-weight: 800;
    color: var(--color-primary);
    text-decoration: none;
    overflow-wrap: anywhere;
  }
  .slidev-layout.print-detail.print-rest-useful-links :deep(.resource-list > li > span) {
    color: var(--color-text);
    font-size: var(--font-size-sm);
    line-height: 1.35;
    text-wrap: balance;
  }
</style>
