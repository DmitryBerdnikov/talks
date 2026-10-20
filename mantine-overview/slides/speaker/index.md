---
layout: print-poster
printPoster: true
class: print-speaker
---

<script setup>
  import { CalendarDays, Heart, ChartNoAxesColumnIncreasing } from '@lucide/vue'
</script>

<div class="print-speaker-copy">
  <h1>
    <span class="print-ink-text">Дмитрий<br />Бердников</span>
  </h1>
  <p class="print-role">Фронтенд-лид в Fuse8</p>
  <ul class="print-facts">
    <li>
      <span class="speaker-fact-icon speaker-fact-calendar"
        ><CalendarDays aria-hidden="true" /></span
      ><span>В вебе с 2017 года</span>
    </li>
    <li>
      <span class="speaker-fact-icon speaker-fact-heart"><Heart aria-hidden="true" /></span
      ><span>Люблю удобные интерфейсы</span>
    </li>
    <li>
      <span class="speaker-fact-icon speaker-fact-chart"
        ><ChartNoAxesColumnIncreasing aria-hidden="true" /></span
      ><span>Развиваю фронтенд в компании</span>
    </li>
  </ul>
</div>
<div class="print-portrait">
  <div class="speaker-portrait-frame"><img src="./portrait.jpg" alt="Дмитрий Бердников" /></div>
</div>

<style>
  .print-speaker .print-speaker-copy {
    position: absolute;
    top: 58px;
    left: 0;
    width: 570px;
  }
  .print-speaker h1 {
    padding-right: 0;
    font-size: var(--font-size-heading-profile);
    line-height: 0.99;
    letter-spacing: -0.045em;
  }
  .print-speaker .print-role {
    margin-top: 20px;
    color: var(--color-text-muted);
    font-size: 29px;
    font-weight: 600;
    letter-spacing: -0.025em;
  }
  .print-speaker .print-facts {
    display: grid;
    gap: 16px;
    margin-top: 42px;
  }
  .print-speaker .print-facts li {
    display: flex;
    align-items: center;
    gap: 24px;
    color: var(--color-text);
    font-size: var(--font-size-md);
    letter-spacing: -0.025em;
  }
  .print-speaker .speaker-fact-icon {
    display: grid;
    place-items: center;
    flex: 0 0 52px;
    height: 52px;
    border-radius: 16px;
  }
  .print-speaker .speaker-fact-icon svg {
    width: 27px;
    height: 27px;
    stroke-width: 2;
  }
  .print-speaker .speaker-fact-calendar {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .print-speaker .speaker-fact-heart {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .print-speaker .speaker-fact-heart svg {
    fill: currentColor;
  }
  .print-speaker .speaker-fact-chart {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .print-speaker .speaker-fact-chart svg {
    stroke-width: 4;
  }
  .print-speaker .print-portrait {
    position: absolute;
    top: 58px;
    right: 0;
    width: 458px;
    height: 452px;
    isolation: isolate;
  }
  .print-speaker .print-portrait::before,
  .print-speaker .print-portrait::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 30px;
    background: var(--color-background-blue);
    pointer-events: none;
  }
  .print-speaker .print-portrait::before {
    inset: -30px -24px 94px 92px;
    transform: rotate(5deg);
    opacity: 0.8;
  }
  .print-speaker .print-portrait::after {
    inset: 112px 54px -24px -28px;
    transform: rotate(-9deg);
    opacity: 0.9;
  }
  .print-speaker .speaker-portrait-frame {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
  }
  .print-speaker .print-portrait img {
    display: block;
    width: 100%;
    height: calc(100% + 18px);
    max-height: none;
    object-fit: cover;
    transform: translateY(-18px);
  }
</style>
