<template>
  <section id="logros" class="section">
    <SectionHeader
      eyebrow="Reconocimientos"
      title="Logros & Certificaciones"
      description="Distinciones en competencias de innovación y formación continua en Web3, DeFi, cloud y diseño."
    />

    <!-- logros principales -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(a, i) in achievements" :key="a.title" v-reveal:zoom="i * 120"
        class="group relative card p-6 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
        <div class="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"
          :class="toneIcon[a.tone]" aria-hidden="true" />
        <div class="relative">
          <div class="flex items-center justify-between mb-4">
            <span class="w-12 h-12 rounded-2xl flex items-center justify-center trophy" :class="toneIcon[a.tone]">
              <span class="material-symbols-outlined text-[26px]">{{ a.icon }}</span>
            </span>
            <span class="text-xs font-semibold text-on-surface-variant">{{ a.year }}</span>
          </div>
          <h3 class="font-heading text-lg font-bold">{{ a.title }}</h3>
          <p class="text-sm text-on-surface-variant mt-1.5 leading-relaxed">{{ a.detail }}</p>
        </div>
      </div>
    </div>

    <!-- certificaciones -->
    <div class="mt-10 card p-6 sm:p-8">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h3 class="font-heading text-xl font-bold flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">workspace_premium</span> Certificaciones Clave
        </h3>
        <div class="flex gap-1.5 text-xs">
          <button v-for="c in categories" :key="c.id" class="px-3 py-1 rounded-full font-semibold transition-all"
            :class="cat === c.id ? 'bg-on-surface text-white' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'"
            @click="cat = c.id">{{ c.label }}</button>
        </div>
      </div>
      <TransitionGroup name="list" tag="div" class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="c in filtered" :key="c.name"
          class="group flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-[#ebe4dc] hover:bg-white hover:border-primary/40 hover:shadow-sm transition-all">
          <span class="w-10 h-10 shrink-0 rounded-xl bg-white border border-line flex items-center justify-center text-primary group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-[20px]">{{ c.icon }}</span>
          </span>
          <div class="min-w-0">
            <p class="text-sm font-semibold leading-tight">{{ c.name }}</p>
            <p class="text-xs text-on-surface-variant">{{ c.issuer }}</p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { toneIcon } from '../tones'

const props = defineProps({
  achievements: { type: Array, required: true },
  certifications: { type: Array, required: true }
})

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'web3', label: 'Web3' },
  { id: 'tech', label: 'Tech' },
  { id: 'design', label: 'Diseño & más' }
]
const cat = ref('all')
const filtered = computed(() => (cat.value === 'all' ? props.certifications : props.certifications.filter((c) => c.category === cat.value)))
</script>

<style scoped>
.group:hover .trophy { animation: wiggle 0.6s ease-in-out; }
</style>
