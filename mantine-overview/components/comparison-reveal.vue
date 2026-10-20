<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineProps<{ expanded: boolean }>()
</script>

<template>
  <div class="comparison-reveal" :class="{ 'is-expanded': expanded }">
    <div class="comparison-first"><slot name="first" /></div>
    <ArrowRight class="comparison-arrow" :size="40" :stroke-width="2.75" aria-hidden="true" />
    <div class="comparison-second" :inert="!expanded"><slot name="second" /></div>
  </div>
</template>

<style scoped>
.comparison-reveal {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 48px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}
.comparison-first,
.comparison-second {
  min-width: 0;
}
.comparison-first {
  transform: translateX(calc(50% + 48px));
  transition: transform 350ms ease-out;
}
.comparison-second,
.comparison-arrow {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 350ms ease-out,
    visibility 0s linear 350ms;
}
.comparison-arrow {
  width: 40px;
  align-self: center;
  justify-self: center;
  color: color-mix(in srgb, var(--color-text-muted) 55%, var(--color-background));
}
.is-expanded .comparison-first {
  transform: translateX(0);
  transition-delay: 0ms;
}
.is-expanded .comparison-second,
.is-expanded .comparison-arrow {
  opacity: 1;
  visibility: visible;
  transition:
    opacity 350ms ease-out,
    visibility 0s linear;
}
@media (prefers-reduced-motion: reduce) {
  .comparison-first,
  .comparison-second,
  .comparison-arrow {
    transition: none;
  }
}
</style>
