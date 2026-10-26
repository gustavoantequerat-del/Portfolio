<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-5 text-center px-4">
    <template v-if="!error">
      <div class="loader-logo w-16 h-16 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center shadow-card">
        GA
      </div>
      <div class="w-10 h-2 rounded-full bg-on-surface/10 loader-shadow" />
      <p class="text-sm text-on-surface-variant">Preparando el portfolio…</p>
    </template>
    <template v-else>
      <span class="material-symbols-outlined text-5xl text-secondary">cloud_off</span>
      <p class="font-heading text-xl font-bold">No pude conectar con el servidor</p>
      <p class="text-sm text-on-surface-variant max-w-sm">Asegúrate de que la API de Express esté corriendo (<code>npm run dev</code>).</p>
      <button class="btn bg-primary text-white" @click="$emit('retry')">
        <span class="material-symbols-outlined text-[18px]">refresh</span> Reintentar
      </button>
    </template>
  </div>
</template>

<script setup>
defineProps({ error: { type: [Object, Error, null], default: null } })
defineEmits(['retry'])
</script>

<style scoped>
.loader-logo { animation: hop 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate; }
.loader-shadow { animation: squish 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate; }
@keyframes hop { from { transform: translateY(0) scale(1.05, 0.95); } to { transform: translateY(-36px) scale(0.97, 1.03); } }
@keyframes squish { from { transform: scaleX(1.2); opacity: 0.6; } to { transform: scaleX(0.6); opacity: 0.25; } }
</style>
