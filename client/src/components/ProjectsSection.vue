<template>
  <section id="proyectos" class="section">
    <SectionHeader
      eyebrow="Portafolio Seleccionado"
      title="Casos de Estudio & Proyectos"
      description="Sistemas digitales complejos transformados en experiencias claras, cálidas y confiables para el usuario."
    />

    <div class="flex flex-col gap-8">
      <!-- Proyecto destacado -->
      <article v-if="featured" v-reveal
        class="group card p-6 lg:p-10 hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer"
        tabindex="0" @click="open(featured)" @keydown.enter="open(featured)">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 flex flex-col gap-5">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold" :class="toneBadge.primary">{{ featured.badge }}</span>
              <span class="text-xs font-semibold text-on-surface-variant">{{ featured.org }}</span>
            </div>
            <div>
              <h3 class="font-heading text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">{{ featured.title }}</h3>
              <p class="text-sm text-on-surface-variant leading-relaxed mt-3">{{ featured.summary }}</p>
            </div>
            <div class="grid grid-cols-3 gap-2.5 pt-2">
              <div v-for="(m, i) in featured.metrics" :key="m.label" v-reveal:zoom="i * 100"
                class="p-3 rounded-2xl bg-surface-container-low border border-[#ebe4dc] hover:-translate-y-1 transition-transform">
                <span class="font-heading text-base sm:text-lg font-bold block" :class="i === 1 ? 'text-primary' : ''">{{ m.value }}</span>
                <span class="text-[11px] text-on-surface-variant font-medium">{{ m.label }}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="t in featured.tags" :key="t" class="chip">{{ t }}</span>
            </div>
            <div class="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
              {{ featured.cta }}
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-2xl overflow-hidden border border-line shadow-sm bg-surface-container-high">
              <div class="px-4 py-2.5 bg-white border-b border-line flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-red-300" />
                  <span class="w-3 h-3 rounded-full bg-amber-300" />
                  <span class="w-3 h-3 rounded-full bg-emerald-300" />
                  <span class="text-[11px] text-on-surface-variant ml-2 font-mono hidden sm:inline">pulse · blockfinity</span>
                </div>
                <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">WEBSOCKET ACTIVO</span>
              </div>
              <div class="relative h-[260px] sm:h-[340px] overflow-hidden">
                <div class="w-full h-full group-hover:scale-105 transition-transform duration-700">
                  <ProjectVisual :name="featured.cartoon" />
                </div>
                <div class="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-line shadow-sm flex items-center justify-between">
                  <div>
                    <span class="text-[10px] uppercase font-bold text-secondary tracking-wider block">Módulo Diseñado</span>
                    <span class="text-xs font-semibold">Índices P2P & Gráficas en Vivo</span>
                  </div>
                  <span class="material-symbols-outlined text-primary text-[20px]">layers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Resto de proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="(p, i) in rest" :key="p.id" v-reveal="(i % 2) * 120"
          class="group card p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          :class="hoverBorder[p.accent]" tabindex="0" @click="open(p)" @keydown.enter="open(p)">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold" :class="toneBadge[p.accent]">{{ p.badge }}</span>
              <span class="text-xs text-on-surface-variant font-medium text-right">{{ p.org }}</span>
            </div>
            <div>
              <h3 class="font-heading text-xl font-bold transition-colors" :class="hoverText[p.accent]">{{ p.title }}</h3>
              <p class="text-sm text-on-surface-variant mt-2 leading-relaxed">{{ p.summary }}</p>
            </div>
            <div class="h-52 rounded-2xl overflow-hidden border border-line relative bg-surface-container-low">
              <div class="w-full h-full group-hover:scale-105 transition-transform duration-500">
                <ProjectVisual :name="p.cartoon" />
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>
          <div class="pt-6 border-t border-line-soft mt-6 flex items-center justify-between text-sm font-semibold"
            :class="p.accent === 'on-surface' ? 'text-on-surface' : toneText[p.accent]">
            {{ p.cta }}
            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </article>
      </div>
    </div>

    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import ProjectVisual from './ProjectVisual.vue'
import ProjectModal from './ProjectModal.vue'
import { toneBadge, toneText } from '../tones'

const props = defineProps({ projects: { type: Array, required: true } })

const featured = computed(() => props.projects.find((p) => p.featured))
const rest = computed(() => props.projects.filter((p) => !p.featured))
const selected = ref(null)
const open = (p) => (selected.value = p)

const hoverBorder = {
  primary: 'hover:border-primary/40',
  secondary: 'hover:border-secondary/40',
  'on-surface': 'hover:border-on-surface/30'
}
const hoverText = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
  'on-surface': 'group-hover:text-primary'
}
</script>
