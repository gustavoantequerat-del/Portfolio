<template>
  <footer class="relative w-full bg-surface-container-low border-t border-line pt-20 pb-14 overflow-hidden">
    <!-- llama caminando por el borde superior -->
    <div class="llama-track absolute top-1 left-0 w-24 h-24 pointer-events-none" aria-hidden="true">
      <LlamaCartoon class="w-full h-full" />
    </div>

    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
        <div class="md:col-span-5 flex flex-col gap-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">{{ profile.initials }}</div>
            <span class="font-heading font-bold text-lg">{{ profile.name }}</span>
          </div>
          <p class="text-sm text-on-surface-variant max-w-sm leading-relaxed">
            {{ profile.role }} enfocado en hacer la tecnología descentralizada y las herramientas financieras complejas accesibles, comprensibles y familiares.
          </p>
          <span class="pt-2 text-xs text-on-surface-variant">{{ profile.location }} · Remoto Global ({{ profile.timezone }})</span>
        </div>

        <div class="md:col-span-3 flex flex-col gap-3">
          <span class="text-xs font-bold uppercase tracking-wider">Navegación</span>
          <ul class="space-y-2 text-sm">
            <li v-for="l in nav" :key="l.href">
              <a :href="l.href" class="text-on-surface-variant hover:text-primary hover:pl-1 transition-all">{{ l.label }}</a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4 flex flex-col gap-3">
          <span class="text-xs font-bold uppercase tracking-wider">Redes & Contacto</span>
          <div class="flex flex-col gap-2 text-sm">
            <a v-for="c in contacts" :key="c.label" :href="c.href" target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-line text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all">
              <span>{{ c.label }}</span>
              <span class="text-xs font-mono truncate">{{ c.value }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
        <span>© {{ year }} {{ profile.name }}. Diseñado con calidez, rigor y sensibilidad visual.</span>
        <span class="flex items-center gap-1">Hecho en La Paz, Bolivia <span class="heart">❤</span> con Vue 3 + Express</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import LlamaCartoon from './cartoons/LlamaCartoon.vue'

const props = defineProps({ profile: { type: Object, required: true } })
const year = new Date().getFullYear()

const nav = [
  { href: '#proyectos', label: 'Proyectos & Casos' },
  { href: '#experiencia', label: 'Experiencia Laboral' },
  { href: '#stack', label: 'Stack & Habilidades' },
  { href: '#logros', label: 'Logros & Certificaciones' }
]
const contacts = computed(() => [
  { label: 'LinkedIn', value: `/${props.profile.linkedinHandle}`, href: props.profile.linkedin },
  { label: 'Email', value: props.profile.email, href: `mailto:${props.profile.email}` },
  { label: 'WhatsApp', value: props.profile.phone, href: props.profile.whatsapp }
])
</script>

<style scoped>
.llama-track { animation: stroll 28s linear infinite; }
.heart { display: inline-block; color: #994619; animation: beat 1.2s ease-in-out infinite; }
@keyframes stroll {
  0% { transform: translateX(-120px); }
  100% { transform: translateX(calc(100vw + 20px)); }
}
@keyframes beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
</style>
