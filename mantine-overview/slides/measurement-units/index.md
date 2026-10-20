---
layout: print-detail
printPoster: true
class: print-rest-measurement-units
---

# <span class="print-ink-text">Единицы измерения</span>

<div class="units-columns">
  <section>
    <div class="unit-lettering">
      <svg class="unit-guides" viewBox="0 0 520 280" aria-hidden="true">
        <circle cx="390" cy="144" r="98" fill="currentColor" opacity="0.08" />
        <g fill="none" stroke="currentColor" stroke-width="1" opacity="0.16" stroke-dasharray="4 4">
          <path d="M0 103H520M0 232H520M-4 28V244M170 28V244M242 28V244M474 28V244" />
        </g>
        <path
          d="M-4 64H170M-4 54V74M170 54V74"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          opacity="0.5"
        />
      </svg>
      <h2><span class="print-ink-text">rem</span></h2>
    </div>
    <p>Для всего, кроме медиавыражений</p>
    <p class="unit-description">
      Вычисляется относительно размера шрифта корневого элемента (<code>html</code>)
    </p>
  </section>
  <section class="unit-secondary">
    <div class="unit-lettering">
      <svg class="unit-guides" viewBox="0 0 440 280" aria-hidden="true">
        <circle cx="294" cy="157" r="72" fill="currentColor" opacity="0.08" />
        <g fill="none" stroke="currentColor" stroke-width="1" opacity="0.16" stroke-dasharray="4 4">
          <path d="M0 124H440M0 232H440M-8 64V244M125 64V244M330 64V244" />
        </g>
        <path
          d="M-8 88H125M-8 78V98M125 78V98"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          opacity="0.5"
        />
      </svg>
      <h2><span class="print-ink-text">em</span></h2>
    </div>
    <p>Для медиавыражений</p>
    <p class="unit-description">
      В медиазапросах вычисляется относительно исходного размера шрифта браузера
    </p>
  </section>
</div>

<style>
  .slidev-layout.print-detail.print-rest-measurement-units :deep(h1) {
    color: var(--color-text);
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.editorial-body) {
    height: 100%;
    gap: 24px;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.units-columns) {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    align-items: start;
    position: relative;
    gap: 64px;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.units-columns::after) {
    content: '';
    position: absolute;
    top: 40px;
    bottom: 0;
    left: calc((100% - 64px) * 1.15 / 2.15 + 32px);
    width: 1px;
    background: var(--color-border-primary);
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.unit-lettering) {
    position: relative;
    display: flex;
    align-items: end;
    height: 250px;
    padding-bottom: 12px;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.unit-guides) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: var(--color-primary);
    pointer-events: none;
    overflow: visible;
    transform: translateX(-24px);
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.units-columns h2) {
    position: relative;
    margin: 0;
    color: var(--color-primary);
    font-size: var(--font-size-metric);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.unit-secondary h2) {
    font-size: 184px;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.units-columns p) {
    max-width: 100%;
    margin: 12px 0 0;
    color: var(--color-text);
    font-size: var(--font-size-xl);
    font-weight: 750;
    letter-spacing: -0.035em;
    line-height: 1.2;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.units-columns .unit-description) {
    margin-top: 16px;
    color: var(--color-text-muted);
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: 1.35;
  }
  .slidev-layout.print-detail.print-rest-measurement-units :deep(.unit-description code) {
    color: inherit;
    font-size: 1em;
    white-space: nowrap;
  }
</style>
