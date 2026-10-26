<template>
  <header class="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
    <div class="max-w-6xl mx-auto nav-enter">
      <nav
        class="bg-white/80 backdrop-blur-xl border border-line rounded-full px-4 sm:px-5 flex items-center justify-between transition-all duration-300"
        :class="scrolled ? 'py-2 shadow-card' : 'py-3 shadow-soft'"
        aria-label="Principal"
      >
        <a class="group flex items-center gap-3" href="#inicio">
          <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-primary font-bold group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
            {{ profile.initials }}
          </div>
          <div class="flex flex-col">
            <span class="font-heading font-semibold text-sm tracking-tight group-hover:text-primary transition-colors">{{ profile.name }}</span>
            <span class="text-[11px] text-on-surface-variant font-medium">{{ profile.shortRole }}</span>
          </div>
        </a>

        <div class="hidden md:flex relative items-center gap-1 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/60">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            :class="active === link.id ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="flex items-center gap-2">
          <div v-if="profile.available" class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-primary text-xs font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Disponible
          </div>
          <a class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary hover:bg-[#1f4a43] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all group" href="#contacto">
            Conversemos
            <span class="material-symbols-outlined text-[16px] group-hover:rotate-45 transition-transform">arrow_outward</span>
          </a>
          <button
            class="md:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center"
            :aria-expanded="open"
            aria-label="Abrir menú"
            @click="open = !open"
          >
            <span class="material-symbols-outlined text-[20px]">{{ open ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </nav>

      <Transition name="menu">
        <div v-if="open" class="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-line rounded-3xl p-3 shadow-card flex flex-col gap-1">
          <a
            v-for="(link, i) in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="menu-item px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between"
            :class="active === link.id ? 'bg-emerald-50 text-primary' : 'text-on-surface hover:bg-surface-container-low'"
            :style="{ animationDelay: `${i * 50}ms` }"
            @click="open = false"
          >
            {{ link.label }}
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({ profile: { type: Object, required: true } })

const links = [
  { id: 'proyectos', label: 'Trabajos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'stack', label: 'Stack' },
  { id: 'logros', label: 'Logros' },
  { id: 'contacto', label: 'Contacto' }
]

const open = ref(false)
const scrolled = ref(false)
const active = ref('')
let io

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  ;['inicio', ...links.map((l) => l.id)].forEach((id) => {
    const el = document.getElementById(id)
    if (el) io.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  io?.disconnect()
})
</script>

<style scoped>
.nav-enter { animation: drop-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes drop-in { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: none; } }
.menu-enter-active, .menu-leave-active { transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-10px) scale(0.97); }
.menu-item { animation: pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
</style>
