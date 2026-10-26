<template>
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-line mb-10">
    <div v-reveal:left>
      <span class="eyebrow" :class="tone === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'">
        {{ eyebrow }}
      </span>
      <h2 class="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">{{ title }}</h2>
    </div>
    <div v-reveal:right="100">
      <slot>
        <p class="text-sm text-on-surface-variant max-w-md">{{ description }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
  tone: { type: String, default: 'secondary' }
})
</script>
