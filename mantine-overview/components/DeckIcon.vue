<script setup lang="ts">
import {
  Bell,
  Box,
  CalendarDays,
  ChartColumn,
  Check,
  CodeXml,
  FileCode,
  GalleryHorizontalEnd,
  Layers,
  LayoutGrid,
  Lightbulb,
  Minus,
  PanelTop,
  Search,
  Type,
  Upload,
  Users,
  X,
} from '@lucide/vue'

withDefaults(defineProps<{ name: string; size?: number }>(), { size: 28 })
const icons = {
  check: Check,
  cross: X,
  bulb: Lightbulb,
  cube: Box,
  layers: Layers,
  code: CodeXml,
  grid: LayoutGrid,
  file: FileCode,
  calendar: CalendarDays,
  users: Users,
  search: Search,
  chart: ChartColumn,
  bell: Bell,
  carousel: GalleryHorizontalEnd,
  upload: Upload,
  window: PanelTop,
  text: Type,
  progress: Minus,
}
</script>

<template>
  <component
    :is="icons[name as keyof typeof icons] || icons.grid"
    :size="size"
    :stroke-width="1.8"
    aria-hidden="true"
  />
</template>
