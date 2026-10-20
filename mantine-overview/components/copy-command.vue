<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'
import { onBeforeUnmount, ref } from 'vue'

const props = defineProps<{ command: string }>()
const copied = ref(false)
const failed = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command)
    copied.value = true
    failed.value = false
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 1500)
  } catch {
    failed.value = true
  }
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <div class="copy-command">
    <slot />
    <button
      type="button"
      class="copy-button"
      :aria-label="
        copied ? 'Скопировано' : failed ? 'Повторить копирование' : 'Скопировать команду'
      "
      @click="copy"
    >
      <component :is="copied ? Check : Copy" :size="20" :stroke-width="1.8" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.copy-command {
  position: relative;
  padding-right: 68px;
}
.copy-button {
  position: absolute;
  top: 50%;
  right: 18px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--color-code-comment);
  cursor: pointer;
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 150ms ease-out;
}
.copy-command:hover .copy-button,
.copy-command:focus-within .copy-button {
  opacity: 1;
}
.copy-button:hover,
.copy-button:focus-visible {
  background: var(--color-code-highlight);
  color: var(--color-code-text);
}
.copy-button:focus-visible {
  outline: 2px solid var(--color-code-comment);
  outline-offset: 3px;
}
@media (hover: none) {
  .copy-button {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .copy-button {
    transition: none;
  }
}
</style>
