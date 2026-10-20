<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <figure class="result-visual" aria-hidden="true"><img :src="src" alt="" /></figure>
</template>

<style scoped>
.result-visual {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: #fff;
}
.result-visual img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
}
</style>
