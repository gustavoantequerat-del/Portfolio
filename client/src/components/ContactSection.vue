<template>
  <section id="contacto" class="section">
    <div v-reveal class="bg-white rounded-3xl border border-line shadow-[0_16px_50px_rgb(0,0,0,0.05)] overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-surface-container-low border-b lg:border-b-0 lg:border-r border-line flex flex-col justify-between gap-8">
          <div class="space-y-4">
            <span class="eyebrow bg-secondary/10 text-secondary">Contacto Directo</span>
            <h2 class="font-heading text-2xl sm:text-3xl font-bold tracking-tight">¿Tienes un nuevo proyecto o desafío en mente?</h2>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              Disponible para consultorías en Web3/DeFi, diseño de sistemas de producto y posiciones full-time en equipos de alto impacto.
            </p>

            <div class="space-y-3 pt-3">
              <div class="p-3.5 bg-white rounded-2xl border border-line flex items-center justify-between gap-2 hover:border-primary/50 transition-colors">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-9 h-9 shrink-0 rounded-full bg-emerald-50 text-primary flex items-center justify-center">
                    <span class="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div class="min-w-0">
                    <span class="text-[10px] text-on-surface-variant uppercase font-semibold block">Email Directo</span>
                    <span class="text-xs font-bold block truncate">{{ profile.email }}</span>
                  </div>
                </div>
                <button class="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all"
                  :class="copied ? 'bg-primary text-white' : 'bg-surface-container hover:bg-primary hover:text-white'"
                  title="Copiar al portapapeles" @click="copyEmail">
                  <span class="material-symbols-outlined text-[14px]">{{ copied ? 'check' : 'content_copy' }}</span>
                  {{ copied ? '¡Copiado!' : 'Copiar' }}
                </button>
              </div>

              <a v-for="c in channels" :key="c.label" :href="c.href" target="_blank" rel="noopener noreferrer"
                class="p-3.5 bg-white rounded-2xl border border-line flex items-center justify-between group transition-colors" :class="c.hover">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center" :class="c.iconClass">
                    <span class="material-symbols-outlined text-[18px]">{{ c.icon }}</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-on-surface-variant uppercase font-semibold block">{{ c.label }}</span>
                    <span class="text-xs font-bold">{{ c.value }}</span>
                  </div>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[18px]">arrow_outward</span>
              </a>

              <a :href="profile.cvUrl" download
                class="p-3.5 bg-white rounded-2xl border border-line flex items-center justify-between group hover:border-secondary/50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-orange-50 text-secondary flex items-center justify-center">
                    <span class="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-on-surface-variant uppercase font-semibold block">Curriculum</span>
                    <span class="text-xs font-bold">Descargar CV (PDF)</span>
                  </div>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-all text-[18px]">download</span>
              </a>
            </div>
          </div>
          <div class="text-xs text-on-surface-variant flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Tiempo de respuesta usual: menos de 24 horas
          </div>
        </div>

        <div class="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <Transition name="fade" mode="out-in">
            <div v-if="status === 'sent'" key="sent" class="flex flex-col items-center text-center gap-4 py-6">
              <div class="w-56 h-40"><MailCartoon sent /></div>
              <h3 class="font-heading text-2xl font-bold">¡Mensaje en camino! ✈️</h3>
              <p class="text-sm text-on-surface-variant max-w-sm">Gracias, {{ sentName }}. Te responderé a la brevedad en el correo que dejaste.</p>
              <button class="btn bg-surface-container hover:bg-surface-container-high" @click="status = 'idle'">
                <span class="material-symbols-outlined text-[18px]">edit</span> Enviar otro mensaje
              </button>
            </div>

            <form v-else key="form" class="space-y-4" novalidate @submit.prevent="submit">
              <div class="pb-2 border-b border-line-soft flex items-center justify-between gap-4">
                <div>
                  <h3 class="font-heading text-lg font-bold">Envía un mensaje</h3>
                  <p class="text-xs text-on-surface-variant">Conversemos sobre requerimientos, metas y tiempos de entrega.</p>
                </div>
                <div class="w-20 h-14 shrink-0 hidden sm:block"><MailCartoon /></div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label for="c-name" class="text-xs font-bold block">Nombre / Empresa *</label>
                  <input id="c-name" v-model="form.name" class="input" :class="{ 'shake !border-secondary': errors.name }"
                    placeholder="Ej. Satoshi Nakamoto o Fondo VC" autocomplete="name" />
                  <p v-if="errors.name" class="text-xs text-secondary">{{ errors.name }}</p>
                </div>
                <div class="space-y-1.5">
                  <label for="c-email" class="text-xs font-bold block">Correo Electrónico *</label>
                  <input id="c-email" v-model="form.email" type="email" class="input" :class="{ 'shake !border-secondary': errors.email }"
                    placeholder="nombre@dominio.com" autocomplete="email" />
                  <p v-if="errors.email" class="text-xs text-secondary">{{ errors.email }}</p>
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="c-type" class="text-xs font-bold block">Tipo de Proyecto o Colaboración</label>
                <select id="c-type" v-model="form.type" class="input">
                  <option v-for="t in projectTypes" :key="t">{{ t }}</option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label for="c-msg" class="text-xs font-bold block">Mensaje & Alcance Estimado *</label>
                <textarea id="c-msg" v-model="form.message" rows="4" class="input" :class="{ 'shake !border-secondary': errors.message }"
                  placeholder="Describe brevemente tus requerimientos, tiempos deseados y qué reto necesitas resolver..." />
                <p v-if="errors.message" class="text-xs text-secondary">{{ errors.message }}</p>
              </div>

              <!-- honeypot anti-spam -->
              <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

              <p v-if="serverError" class="text-xs font-semibold text-secondary bg-orange-50 border border-orange-200 rounded-2xl px-4 py-3">
                {{ serverError }}
              </p>

              <button type="submit" :disabled="status === 'sending'"
                class="w-full btn justify-center bg-primary hover:bg-[#1f4a43] text-white shadow-md hover:shadow-lg disabled:opacity-70 group">
                <span class="material-symbols-outlined text-[18px] transition-transform"
                  :class="status === 'sending' ? 'animate-spin' : 'group-hover:translate-x-1 group-hover:-translate-y-1'">
                  {{ status === 'sending' ? 'progress_activity' : 'send' }}
                </span>
                {{ status === 'sending' ? 'Enviando…' : `Enviar Mensaje a ${firstName}` }}
              </button>
            </form>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import MailCartoon from './cartoons/MailCartoon.vue'

const props = defineProps({
  profile: { type: Object, required: true },
  projectTypes: { type: Array, default: () => [] }
})

const firstName = computed(() => props.profile.name.split(' ')[0])
const channels = computed(() => [
  { label: 'WhatsApp Directo', value: props.profile.phone, href: props.profile.whatsapp, icon: 'chat', iconClass: 'bg-emerald-50 text-emerald-600', hover: 'hover:border-emerald-500' },
  { label: 'LinkedIn', value: props.profile.linkedinHandle, href: props.profile.linkedin, icon: 'work', iconClass: 'bg-blue-50 text-blue-600', hover: 'hover:border-blue-500' }
])

const form = reactive({ name: '', email: '', type: props.projectTypes[0] ?? '', message: '', website: '' })
const errors = ref({})
const serverError = ref('')
const status = ref('idle')
const sentName = ref('')
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.profile.email)
  } catch {
    window.prompt('Copia el correo:', props.profile.email)
  }
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

const validate = () => {
  const e = {}
  if (form.name.trim().length < 2) e.name = 'Cuéntame tu nombre o empresa.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Ese correo no parece válido.'
  if (form.message.trim().length < 10) e.message = 'El mensaje debe tener al menos 10 caracteres.'
  errors.value = e
  return Object.keys(e).length === 0
}

const submit = async () => {
  serverError.value = ''
  if (!validate()) return
  status.value = 'sending'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) {
      if (body.errors) errors.value = body.errors
      throw new Error(body.error || 'Revisa los campos marcados.')
    }
    sentName.value = form.name.trim().split(' ')[0]
    Object.assign(form, { name: '', email: '', message: '', website: '' })
    status.value = 'sent'
  } catch (err) {
    serverError.value = err.message || 'No se pudo enviar. Escríbeme directo al correo.'
    status.value = 'idle'
  }
}
</script>

<style scoped>
.shake { animation: shake 0.4s ease-in-out; }
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
</style>
