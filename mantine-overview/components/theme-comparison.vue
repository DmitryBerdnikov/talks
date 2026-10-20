<script setup lang="ts">
withDefaults(
  defineProps<{
    defaultImage: string
    customImage: string
    inset?: number
    withBorder?: boolean
  }>(),
  {
    inset: 0,
  },
)
</script>

<template>
  <div
    class="theme-comparison"
    :class="{ 'with-border': withBorder }"
    :style="withBorder ? `--image-inset: ${inset}px` : ''"
  >
    <section>
      <div class="theme-image"><img :src="defaultImage" alt="" /></div>
      <h2>Дефолтная тема</h2>
    </section>
    <section>
      <div class="theme-image"><img :src="customImage" alt="" /></div>
      <h2>Кастомная тема</h2>
    </section>
  </div>
</template>

<style scoped>
.theme-comparison {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;
  align-items: start;
  margin-top: 28px;
}
.theme-image {
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 640 / 500;
  padding: var(--image-inset);
  overflow: hidden;
  border-radius: 14px;
  background: #fff;
}

.with-border .theme-image {
  border: 1px solid var(--color-border);
}

.theme-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.theme-comparison h2 {
  color: var(--color-text-muted);
  margin: 18px 0 0;
  font-size: var(--font-size-lg);
  line-height: 1.15;
  text-align: center;
}
</style>
