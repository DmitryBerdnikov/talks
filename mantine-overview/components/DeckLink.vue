<script setup lang="ts">
import { Link } from '@lucide/vue'

defineProps<{ href: string }>()
</script>

<template>
  <a :href="href" class="deck-link"><slot /><Link class="deck-link-icon" aria-hidden="true" /></a>
</template>

<style scoped>
.slidev-layout a.deck-link {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
  font-weight: 400;
  line-height: 1.3;
  text-decoration: none;
}
.slidev-layout a.deck-link:hover {
  color: var(--color-text);
}
.slidev-layout a.deck-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
.deck-link > .deck-link-icon {
  display: inline-block;
  width: 0.65em;
  height: 0.65em;
  margin-left: 0.25em;
  vertical-align: -0.04em;
  stroke-width: 2;
  pointer-events: none;
}
</style>
