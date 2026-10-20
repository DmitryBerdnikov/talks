---
layout: print-poster
printPoster: true
class: print-approaches-overview
---

# <span class="print-ink-text">Подходы к созданию UI</span>

<div class="print-approach-list">
  <section v-click="1">
    <h2>Самописный UI</h2>
  </section>
  <section v-click="2">
    <h2>Headless</h2>
    <p>Base UI, Radix UI, TanStack Table</p>
  </section>
  <section v-click="3">
    <h2>Source-owned<br />component systems</h2>
    <p>shadcn</p>
  </section>
  <section v-click="4" class="print-chosen">
    <h2>Полноценные<br />UI-библиотеки</h2>
    <p>Mantine, Ant Design, MUI</p>
  </section>
</div>

<style>
  .print-approaches-overview h1 {
    padding-top: 22px;
  }
  .print-approaches-overview .print-approach-list {
    margin-top: 35px;
  }
  .print-approaches-overview .print-approach-list section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 95px;
    border-top: 1px solid var(--color-border-primary);
  }
  .print-approaches-overview .print-approach-list h2 {
    font-size: var(--font-size-xl);
    line-height: 1.04;
  }
  .print-approaches-overview .print-approach-list p {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    font-weight: 500;
  }
  .print-approaches-overview .print-approach-list .print-chosen {
    position: relative;
    min-height: 118px;
    padding: 14px 22px;
    margin: 0 -22px;
    background: var(--color-primary);
    color: var(--color-text-inverse);
    border: 0;
  }
  .print-approaches-overview .print-approach-list .print-chosen p {
    color: var(--color-text-inverse);
  }
</style>
