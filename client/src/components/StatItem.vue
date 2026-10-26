<template>
  <div ref="el" class="flex flex-col gap-1 items-start">
    <span class="font-heading text-3xl lg:text-4xl font-bold tabular-nums" :class="toneText[stat.tone]">
      {{ display }}{{ stat.suffix }}
    </span>
    <span class="text-xs font-bold uppercase tracking-wider" :class="toneText[stat.tone === 'on-surface' ? 'neutral' : stat.tone]">{{ stat.label }}</span>
    <span class="text-xs text-on-surface-variant">{{ stat.detail }}</span>
  </div>
</template>

<script setup>
import { useCountUp } from '../composables/useCountUp'
import { toneText } from '../tones'

const props = defineProps({ stat: { type: Object, required: true } })
const { el, display } = useCountUp(props.stat.value, props.stat.value > 100 ? 2200 : 1400)
</script>
