<template>
  <div class="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
    <div class="h-full bg-gradient-to-r from-primary via-primary-container to-secondary-container origin-left"
      :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const progress = ref(0)
let frame
const update = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? window.scrollY / max : 0
  })
}
onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', update))
</script>
