<template>
  <section id="inicio" class="section">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <div class="w-full lg:w-7/12 flex flex-col gap-6">
        <div class="hero-in inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant text-xs text-on-surface-variant font-medium" style="--d: 0.1s">
          <span class="material-symbols-outlined text-[16px] text-secondary animate-bounce">location_on</span>
          {{ profile.location }} · Disponible Globalmente ({{ profile.timezone }})
        </div>

        <div class="space-y-3">
          <h1 class="hero-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]" style="--d: 0.2s">
            {{ profile.headline.lead }}
            <span class="relative inline-grid align-bottom">
              <Transition name="slide-word" mode="out-in">
                <span :key="wordIndex" class="text-secondary italic font-normal whitespace-nowrap">{{ words[wordIndex] }}</span>
              </Transition>
              <svg class="absolute -bottom-1 left-0 w-full h-2 text-secondary/30" preserveAspectRatio="none" viewBox="0 0 100 8" aria-hidden="true">
                <path class="draw-line" d="M0 6 C 30 1, 70 1, 100 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" />
              </svg>
            </span>
          </h1>
          <p class="hero-in text-base sm:text-lg text-on-surface-variant leading-relaxed pt-2 max-w-xl" style="--d: 0.35s">
            Hola, soy <strong class="text-on-surface font-semibold">{{ profile.name }}</strong> — {{ profile.summary }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2.5 pt-1">
          <div v-for="(h, i) in profile.highlights" :key="h.text"
            class="hero-in group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-line shadow-sm text-xs font-semibold hover:-translate-y-0.5 hover:shadow-md transition-all"
            :style="{ '--d': `${0.45 + i * 0.08}s` }">
            <span class="material-symbols-outlined text-[17px] group-hover:animate-wiggle" :class="iconColor[h.tone]">{{ h.icon }}</span>
            {{ h.text }}
          </div>
        </div>

        <div class="hero-in flex flex-wrap items-center gap-3.5 pt-3" style="--d: 0.7s">
          <a class="btn bg-secondary hover:bg-[#b5522a] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 group" href="#proyectos">
            <span class="material-symbols-outlined text-[20px] group-hover:rotate-180 transition-transform duration-500">explore</span>
            Ver Casos de Estudio
          </a>
          <a class="btn bg-white hover:bg-surface-container border border-line shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
            :href="profile.cvUrl" download>
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:translate-y-0.5 transition-transform">download</span>
            Descargar CV
          </a>
        </div>
      </div>

      <div class="w-full lg:w-5/12 relative">
        <div class="hero-in relative z-10 flex items-end gap-3 -mb-6 ml-2 sm:ml-6" style="--d: 0.5s">
          <AvatarCartoon class="w-28 sm:w-32 shrink-0" />
          <div class="bubble mb-16 px-4 py-2.5 bg-white border border-line rounded-2xl rounded-bl-sm shadow-card text-sm font-semibold">
            ¡Hola! 👋 Mira PULSE en acción
          </div>
        </div>
        <div class="hero-in" style="--d: 0.6s">
          <PulseCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import AvatarCartoon from './cartoons/AvatarCartoon.vue'
import PulseCard from './PulseCard.vue'

const props = defineProps({ profile: { type: Object, required: true } })

const iconColor = { amber: 'text-amber-500', primary: 'text-primary', secondary: 'text-secondary' }
const words = computed(() => props.profile.headline.highlight)
const wordIndex = ref(0)
let timer

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    wordIndex.value = (wordIndex.value + 1) % words.value.length
  }, 3200)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.hero-in { animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0s); }
.bubble { animation: pop-in 0.6s 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both, float 4s 2s ease-in-out infinite; }
@keyframes rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
</style>
