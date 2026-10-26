<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
        role="dialog" aria-modal="true" :aria-label="project.title">
        <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" @click="$emit('close')" />
        <div ref="panel" tabindex="-1"
          class="modal-panel relative bg-white w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl outline-none">
          <div class="h-56 sm:h-64 relative overflow-hidden rounded-t-3xl">
            <ProjectVisual :name="project.cartoon" />
            <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:rotate-90 transition-transform"
              aria-label="Cerrar" @click="$emit('close')">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="p-6 sm:p-10 flex flex-col gap-6">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold" :class="toneBadge[project.accent]">{{ project.badge }}</span>
                <span class="text-xs font-semibold text-on-surface-variant">{{ project.org }}</span>
              </div>
              <h3 class="font-heading text-2xl sm:text-3xl font-bold">{{ project.title }}</h3>
              <p class="text-sm text-on-surface-variant leading-relaxed mt-3">{{ project.summary }}</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-4 rounded-2xl bg-surface-container-low border border-line">
                <span class="text-[11px] uppercase font-bold tracking-wider text-on-surface-variant">Rol</span>
                <p class="font-semibold text-sm mt-1">{{ project.details.role }}</p>
              </div>
              <div class="p-4 rounded-2xl bg-surface-container-low border border-line">
                <span class="text-[11px] uppercase font-bold tracking-wider text-on-surface-variant">Periodo</span>
                <p class="font-semibold text-sm mt-1">{{ project.details.period }}</p>
              </div>
            </div>

            <div>
              <h4 class="font-heading font-bold text-lg flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">flag</span> El reto
              </h4>
              <p class="text-sm text-on-surface-variant leading-relaxed mt-2">{{ project.details.challenge }}</p>
            </div>

            <div>
              <h4 class="font-heading font-bold text-lg flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">task_alt</span> Qué hice
              </h4>
              <ul class="mt-3 space-y-2">
                <li v-for="(c, i) in project.details.contributions" :key="c"
                  class="contrib flex gap-3 p-3 rounded-2xl bg-surface-container-low/60 text-sm" :style="{ animationDelay: `${0.15 + i * 0.08}s` }">
                  <span class="w-6 h-6 shrink-0 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">{{ i + 1 }}</span>
                  {{ c }}
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="s in project.details.stack" :key="s" class="chip">{{ s }}</span>
            </div>

            <a href="#contacto" class="btn bg-primary text-white self-start hover:bg-[#1f4a43]" @click="$emit('close')">
              <span class="material-symbols-outlined text-[18px]">chat</span> Hablemos de un proyecto similar
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ProjectVisual from './ProjectVisual.vue'
import { toneBadge } from '../tones'

const props = defineProps({ project: { type: Object, default: null } })
const emit = defineEmits(['close'])
const panel = ref(null)

const onKey = (e) => {
  if (e.key === 'Escape' && props.project) emit('close')
}

watch(
  () => props.project,
  async (p) => {
    document.body.style.overflow = p ? 'hidden' : ''
    if (p) {
      await nextTick()
      panel.value?.focus()
    }
  }
)

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.contrib { animation: rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes rise { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: none; } }
</style>
