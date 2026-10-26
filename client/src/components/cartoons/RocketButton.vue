<template>
  <Transition name="fade">
    <button
      v-show="visible"
      class="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white border border-line shadow-card flex items-center justify-center hover:-translate-y-1 transition-transform"
      :class="{ launching }"
      aria-label="Volver arriba"
      title="Volver arriba"
      @click="launch"
    >
      <svg viewBox="0 0 40 56" class="rocket w-7 h-10" aria-hidden="true">
        <g class="flame">
          <path d="M14 42 C14 50 20 56 20 56 C20 56 26 50 26 42 Z" fill="#ff9561" />
          <path d="M17 42 C17 47 20 51 20 51 C20 51 23 47 23 42 Z" fill="#ffdb8a" />
        </g>
        <path d="M20 2 C30 10 32 24 28 40 H12 C8 24 10 10 20 2 Z" fill="#fff" stroke="#235750" stroke-width="2.5" />
        <circle cx="20" cy="20" r="5" fill="#9cd1c7" stroke="#235750" stroke-width="2" />
        <path d="M12 30 L4 40 L12 40 Z M28 30 L36 40 L28 40 Z" fill="#994619" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)
const launching = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 700
}

const launch = () => {
  launching.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => (launching.value = false), 1100)
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.flame { transform-box: fill-box; transform-origin: 50% 0%; animation: flicker 0.18s ease-in-out infinite alternate; }
button:hover .rocket { animation: shake 0.3s linear infinite; }
.launching .rocket { animation: liftoff 1.1s cubic-bezier(0.5, 0, 0.75, 0) forwards; }
@keyframes flicker { from { transform: scaleY(0.75); } to { transform: scaleY(1.15); } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-1px); } 75% { transform: translateX(1px); } }
@keyframes liftoff {
  0% { transform: translateY(0); }
  60% { transform: translateY(-120px); opacity: 1; }
  61% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
