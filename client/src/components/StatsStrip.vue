<template>
  <section class="section">
    <div v-reveal:zoom class="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-line shadow-sm">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#efe9e2]">
        <StatItem v-for="(s, i) in stats" :key="s.label" :stat="s" :class="i > 0 ? 'md:pl-8' : ''" />
      </div>
    </div>

    <!-- cinta de tecnologías -->
    <div class="mt-8 overflow-hidden mask-fade" aria-hidden="true">
      <div class="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
        <span v-for="(t, i) in [...ticker, ...ticker]" :key="i"
          class="px-4 py-2 rounded-full bg-white border border-line text-xs font-semibold text-on-surface-variant whitespace-nowrap flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full" :class="i % 3 === 0 ? 'bg-secondary' : i % 3 === 1 ? 'bg-primary' : 'bg-amber-500'" />
          {{ t }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import StatItem from './StatItem.vue'

const props = defineProps({
  stats: { type: Array, required: true },
  skills: { type: Array, default: () => [] }
})

const ticker = computed(() => props.skills.flatMap((s) => s.items))
</script>

<style scoped>
.mask-fade {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
