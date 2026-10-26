<template>
  <section id="experiencia" class="section">
    <div class="bg-surface-container-low rounded-3xl p-6 sm:p-10 md:p-12 border border-line">
      <SectionHeader
        eyebrow="Carrera & Responsabilidades"
        title="Trayectoria Profesional"
        tone="primary"
        description="Diseño y desarrollo de producto para consultoría Web3, plataformas enterprise y proyectos propios."
      />

      <div ref="timeline" class="relative">
        <!-- línea de tiempo que se dibuja con el scroll -->
        <div class="absolute left-[11px] top-2 bottom-2 w-0.5 bg-line rounded-full hidden sm:block" aria-hidden="true">
          <div class="w-full bg-gradient-to-b from-primary to-secondary rounded-full origin-top transition-transform duration-150"
            :style="{ height: '100%', transform: `scaleY(${progress})` }" />
        </div>

        <ol class="flex flex-col gap-4">
          <li v-for="(job, i) in experience" :key="job.role + job.period" class="relative sm:pl-12">
            <span class="hidden sm:flex absolute left-0 top-7 w-6 h-6 rounded-full border-4 border-surface-container-low items-center justify-center"
              :class="job.current ? 'bg-primary' : 'bg-outline-variant'" aria-hidden="true">
              <span v-if="job.current" class="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
            </span>

            <div v-reveal:right="i * 60" class="bg-white rounded-2xl p-6 sm:p-7 border border-line shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-4 flex flex-col gap-1.5">
                  <span class="px-3 py-1 rounded-full text-xs font-bold self-start" :class="toneBadge[job.current ? 'primary' : job.tone]">
                    {{ job.period }}<template v-if="job.current"> · Activo</template>
                  </span>
                  <h3 class="font-heading text-xl font-bold pt-1">{{ job.company }}</h3>
                  <p class="text-xs font-semibold text-on-surface-variant">{{ job.role }}</p>
                </div>
                <div class="lg:col-span-8 flex flex-col gap-3">
                  <p class="text-sm">{{ job.summary }}</p>
                  <ul class="text-xs sm:text-sm text-on-surface-variant space-y-2 list-disc pl-4 marker:text-primary">
                    <li v-for="b in job.bullets" :key="b">{{ b }}</li>
                  </ul>
                  <div class="flex flex-wrap gap-2 pt-2 text-xs text-on-surface-variant">
                    <span v-for="t in job.tags" :key="t" class="px-2.5 py-0.5 rounded-full bg-surface-container">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <!-- Educación -->
      <div class="mt-12">
        <h3 v-reveal class="font-heading text-xl font-bold mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">school</span> Educación
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="(e, i) in education" :key="e.title" v-reveal="i * 100"
            class="bg-white rounded-2xl p-6 border border-line shadow-sm hover:shadow-md transition-all">
            <span class="text-xs font-bold text-secondary">{{ e.period }}</span>
            <h4 class="font-heading text-lg font-bold mt-1">{{ e.title }}</h4>
            <p class="text-xs font-semibold text-on-surface-variant">{{ e.school }}</p>
            <p class="text-sm text-on-surface-variant mt-2">{{ e.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { toneBadge } from '../tones'

defineProps({
  experience: { type: Array, required: true },
  education: { type: Array, default: () => [] }
})

const timeline = ref(null)
const progress = ref(0)
let frame

const update = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    if (!timeline.value) return
    const r = timeline.value.getBoundingClientRect()
    const vh = window.innerHeight
    progress.value = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height))
  })
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', update))
</script>
