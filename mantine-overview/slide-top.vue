<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'

const { $page, $frontmatter } = useSlideContext()
const { total } = useNav()
</script>

<template>
  <div
    class="slide-progress"
    :class="{
      'slide-progress-dark': $frontmatter.darkSurface,
      'slide-progress-print': $frontmatter.printPoster,
      'slide-progress-print-inverse': $frontmatter.printInverse,
    }"
    role="progressbar"
    aria-label="Прогресс презентации"
    :aria-valuenow="$page"
    :aria-valuemin="0"
    :aria-valuemax="total"
    :aria-valuetext="`Слайд ${$page} из ${total}`"
  >
    <div class="slide-progress-fill" :style="{ width: `${($page / total) * 100}%` }" />
  </div>
  <div
    v-if="$page !== 1"
    class="slide-counter"
    :class="{
      'slide-counter-dark': $frontmatter.darkSurface,
      'slide-counter-print': $frontmatter.printPoster,
      'slide-counter-print-inverse': $frontmatter.printInverse,
    }"
    :aria-label="`Слайд ${$page} из ${total}`"
  >
    <span class="slide-counter-current">{{ String($page).padStart(2, '0') }}</span>
    <span class="slide-counter-divider" aria-hidden="true">/</span>
    <span class="slide-counter-total">{{ String(total).padStart(2, '0') }}</span>
  </div>
</template>

<style scoped>
.slide-progress {
  position: absolute;
  inset: auto 0 0;
  height: 5px;
  z-index: 20;
  background: var(--color-border);
  pointer-events: none;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.slide-progress-fill {
  height: 100%;
  background: var(--color-primary);
}
.slide-progress-dark {
  background: var(--color-border-inverse);
}
.slide-counter.slide-counter-dark {
  color: var(--color-text-on-dark);
}
.slide-counter {
  position: absolute;
  right: 64px;
  bottom: 16px;
  z-index: 20;
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: var(--color-text-muted);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: var(--font-size-xs);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  line-height: 1;
  pointer-events: none;
}
.slide-counter-divider {
  font-weight: 400;
}
.slide-progress-print {
  height: 3px;
  background: var(--color-border);
}
.slide-progress-print .slide-progress-fill {
  background: var(--color-primary);
}
.slide-counter-print {
  color: var(--color-text-muted);
}
.slide-progress-print-inverse {
  background: var(--color-border-inverse);
}
.slide-progress-print-inverse .slide-progress-fill {
  background: var(--color-background);
}
.slide-counter-print-inverse {
  color: var(--color-text-inverse);
}
</style>
