<template>
  <section id="stack" class="section">
    <SectionHeader eyebrow="Capacidades Técnicas" title="Stack & Habilidades">
      <div class="flex flex-wrap gap-1.5 p-1.5 rounded-3xl sm:rounded-full bg-surface-container border border-line" role="tablist">
        <button v-for="f in filters" :key="f.id" role="tab" :aria-selected="filter === f.id"
          class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
          :class="filter === f.id ? 'bg-primary text-white shadow-sm scale-105' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'"
          @click="filter = f.id">
          {{ f.label }}
        </button>
      </div>
    </SectionHeader>

    <TransitionGroup name="list" tag="div" class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(s, i) in visible" :key="s.id" v-reveal="i * 80"
        class="group bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-line-soft mb-4">
            <span class="text-xs font-bold uppercase tracking-wider" :class="toneText[s.tone]">{{ s.index }} · {{ s.id === 'ux' ? 'Diseño' : s.title.split(' ')[0] }}</span>
            <span class="w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-transform" :class="toneIcon[s.tone]">
              <span class="material-symbols-outlined text-[18px]">{{ s.icon }}</span>
            </span>
          </div>
          <h4 class="font-heading text-lg font-bold mb-1.5">{{ s.title }}</h4>
          <p class="text-xs text-on-surface-variant mb-4 leading-relaxed">{{ s.description }}</p>
          <ul class="flex flex-wrap gap-2 text-xs font-medium">
            <li v-for="(item, j) in s.items" :key="item"
              class="skill-pill px-3 py-1.5 rounded-xl bg-surface-container-low border border-[#ebe4dc] hover:bg-white hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              :style="{ animationDelay: `${j * 40}ms` }">
              {{ item }}
            </li>
          </ul>
        </div>
        <span class="text-[11px] text-on-surface-variant mt-5 pt-3 border-t border-line-soft block">{{ s.footer }}</span>
      </div>
    </TransitionGroup>

    <!-- idiomas -->
    <div v-reveal class="mt-6 flex flex-wrap items-center gap-3 text-sm">
      <span class="material-symbols-outlined text-secondary">translate</span>
      <span v-for="l in languages" :key="l.name" class="chip !text-sm">
        <strong>{{ l.name }}</strong> · {{ l.level }}
      </span>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { toneIcon, toneText } from '../tones'

const props = defineProps({
  skills: { type: Array, required: true },
  languages: { type: Array, default: () => [] }
})

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'ux', label: 'Product & UX' },
  { id: 'web3', label: 'Web3 & DeFi' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' }
]
const filter = ref('all')
const visible = computed(() => (filter.value === 'all' ? props.skills : props.skills.filter((s) => s.id === filter.value)))
</script>

<style scoped>
.skill-pill { animation: pop-in 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
</style>
