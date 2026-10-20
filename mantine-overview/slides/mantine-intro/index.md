---
layout: print-poster
printPoster: true
printInverse: true
class: print-mantine-intro
---

<script setup>
  import { Atom, Zap, CodeXml, Palette, Smartphone, Layers } from '@lucide/vue'
</script>

# <span class="print-ink-text">Mantine</span>

<p class="print-intro-description slide-subtitle">
  Mantine — библиотека React-компонентов, которую Виталий Ртищев развивает с 2021 года
</p>
<div class="print-intro-columns">
  <ul>
    <li v-click="1">
      <span class="intro-icon intro-react"><Atom aria-hidden="true" /></span
      ><span>Только React</span>
    </li>
    <li v-click="2">
      <span class="intro-icon intro-ssr"><Zap aria-hidden="true" /></span><span>Поддержка SSR</span>
    </li>
    <li v-click="3">
      <span class="intro-icon intro-code"><CodeXml aria-hidden="true" /></span
      ><span>TypeScript и CSS Modules</span>
    </li>
  </ul>
  <ul>
    <li v-click="4">
      <span class="intro-icon intro-palette"><Palette aria-hidden="true" /></span
      ><span>Гибкая кастомизация</span>
    </li>
    <li v-click="5">
      <span class="intro-icon intro-mobile"><Smartphone aria-hidden="true" /></span
      ><span>Mobile-first</span>
    </li>
    <li v-click="6">
      <span class="intro-icon intro-semver"><Layers aria-hidden="true" /></span
      ><a href="https://semver.org/">Semantic Versioning</a>
    </li>
  </ul>
</div>
<div v-click="7" class="print-browsers">
  <span><img src="./chromium.svg" alt="" />Chromium 108+</span>
  <span><img src="./firefox.svg" alt="" />Firefox 101+</span>
  <span><img src="./safari.svg" alt="" />Safari 15.4+</span>
</div>

<style>
  .slidev-layout.print-mantine-intro {
    background: var(--color-background-dark);
    color: var(--color-text-inverse);
  }
  .slidev-layout.print-mantine-intro::after {
    opacity: 0.04;
    mix-blend-mode: soft-light;
  }
  .slidev-layout.print-mantine-intro h1 {
    position: relative;
    display: inline-block;
    font-size: var(--slide-heading-size);
    line-height: 1;
    letter-spacing: -0.05em;
    color: var(--color-text-inverse);
  }
  .print-mantine-intro .print-intro-description {
    color: var(--color-text-on-deep-muted);
    max-width: 1000px;
    font-size: var(--font-size-lg);
    margin-top: 24px;
    font-weight: 500;
  }
  .print-mantine-intro .print-intro-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-top: 38px;
  }
  .print-mantine-intro .print-intro-columns ul {
    display: grid;
    gap: 18px;
  }
  .slidev-layout.print-mantine-intro .print-intro-columns li {
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: var(--font-size-md);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--color-text-inverse);
  }
  .print-mantine-intro .intro-icon {
    display: grid;
    place-items: center;
    flex: 0 0 54px;
    height: 54px;
    border-radius: 15px;
  }
  .print-mantine-intro .intro-icon svg {
    width: 31px;
    height: 31px;
    stroke-width: 1.9;
  }
  .print-mantine-intro .intro-react {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .print-mantine-intro .intro-ssr {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .print-mantine-intro .intro-code {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .print-mantine-intro .intro-palette {
    color: var(--color-icon-purple);
    background: var(--color-icon-purple-background);
  }
  .print-mantine-intro .intro-mobile {
    color: var(--color-icon-green);
    background: var(--color-icon-green-background);
  }
  .print-mantine-intro .intro-semver {
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .print-mantine-intro .print-browsers {
    display: flex;
    gap: 48px;
    margin-top: 30px;
    padding-top: 22px;
    border-top: 1px solid var(--color-border-inverse);
  }
  .print-mantine-intro .print-browsers span {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-text-on-deep-muted);
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
  .print-mantine-intro .print-browsers img {
    width: 34px;
    height: 34px;
  }
  .slidev-layout.print-mantine-intro a {
    text-decoration-color: currentColor;
  }
  .slidev-layout.print-mantine-intro a:focus-visible {
    outline-color: var(--color-text-inverse);
  }
</style>
