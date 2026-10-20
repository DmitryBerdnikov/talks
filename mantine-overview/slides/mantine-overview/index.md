---
layout: print-poster
printPoster: true
class: print-mantine-overview
---

<script setup>
  import { ClipboardList, SunMoon } from '@lucide/vue'
</script>

<p class="print-overview-version">На момент версии 9.7.0</p>
<div class="print-overview-numbers">
  <section>
    <h2><span class="print-ink-text">148</span></h2>
    <p>компонентов</p>
  </section>
  <section>
    <h2><span class="print-ink-text">82</span></h2>
    <p>хука</p>
  </section>
</div>
<div class="print-overview-features">
  <section>
    <span class="print-overview-icon print-overview-icon-form">
      <ClipboardList :size="26" :stroke-width="1.8" aria-hidden="true" />
    </span>
    <p>Управление <span>состоянием форм</span></p>
  </section>
  <section>
    <span class="print-overview-icon print-overview-icon-theme">
      <SunMoon :size="26" :stroke-width="1.8" aria-hidden="true" />
    </span>
    <p><span>Светлая</span> и <span>тёмная</span> темы</p>
  </section>
</div>

<style>
  .print-mantine-overview .print-overview-version {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
  .print-mantine-overview .print-overview-numbers {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-top: 50px;
  }
  .print-mantine-overview .print-overview-numbers::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 4px;
    left: 50%;
    width: 2px;
    background: var(--color-border-primary);
    transform: translateX(-50%);
  }
  .print-mantine-overview .print-overview-numbers section {
    text-align: left;
  }
  .print-mantine-overview .print-overview-numbers h2 {
    color: var(--color-primary);
    font-size: 272px;
    font-weight: 900;
    line-height: 0.9;
    letter-spacing: -0.04em;
    font-variant-numeric: lining-nums;
  }
  .print-mantine-overview .print-overview-numbers p {
    color: var(--color-text-muted);
    margin-top: 0;
    font-size: var(--font-size-2xl);
    font-weight: 600;
    letter-spacing: -0.025em;
  }
  .print-mantine-overview .print-overview-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-top: 38px;
    padding-top: 36px;
    border-top: 1px solid var(--color-border-primary);
  }
  .print-mantine-overview .print-overview-features p {
    font-size: var(--font-size-md);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }
  .print-mantine-overview .print-overview-features section {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .print-mantine-overview .print-overview-icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
  }
  .print-mantine-overview .print-overview-icon-form {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .print-mantine-overview .print-overview-icon-theme {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
</style>
