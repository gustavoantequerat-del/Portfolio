<template>
  <div class="relative bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-line shadow-card overflow-hidden tilt-card"
    @mousemove="onMove" @mouseleave="resetTilt" :style="tiltStyle">
    <div class="flex items-center justify-between pb-4 border-b border-line-soft">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full bg-emerald-50 text-primary flex items-center justify-center">
          <span class="material-symbols-outlined text-[18px]">query_stats</span>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider">PULSE Monitor</h3>
          <p class="text-[11px] text-on-surface-variant">Bolivia P2P Crypto Spreads</p>
        </div>
      </div>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-primary text-[11px] font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        En Vivo
      </span>
    </div>

    <div class="mt-4 p-4 rounded-2xl bg-surface-container-low border border-[#ebe4dc] flex flex-col gap-2">
      <div class="flex justify-between items-baseline">
        <span class="text-xs text-on-surface-variant font-medium">Liquidez {{ pulse?.pair ?? 'USDT/BOB' }}</span>
        <span class="text-xs font-bold px-2 py-0.5 rounded-full transition-colors"
          :class="(pulse?.change ?? 0) >= 0 ? 'text-primary bg-emerald-100/60' : 'text-secondary bg-orange-100/70'">
          {{ (pulse?.change ?? 0) >= 0 ? '+' : '' }}{{ (pulse?.change ?? 0).toFixed(2) }}%
        </span>
      </div>
      <div class="flex items-baseline gap-2">
        <span class="font-heading text-2xl font-bold tabular-nums" :class="flash">{{ displayRate.toFixed(2) }} BOB</span>
        <span class="text-xs text-on-surface-variant">por USDT</span>
      </div>
      <svg class="w-full h-12 pt-2" viewBox="0 0 280 40" preserveAspectRatio="none" aria-hidden="true">
        <path :d="spark.area" fill="rgb(43 94 86 / 0.08)" class="spark-path" />
        <path :d="spark.line" fill="none" stroke="#2b5e56" stroke-width="2.5" stroke-linecap="round" class="spark-path" />
      </svg>
    </div>

    <div class="grid grid-cols-2 gap-3 mt-3">
      <div class="p-3.5 rounded-2xl bg-surface-container-low/70 border border-[#ebe4dc]">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs mb-1">
          <span class="material-symbols-outlined text-[16px] text-amber-600">bolt</span> Gas Tracker
        </div>
        <div class="font-heading text-lg font-bold tabular-nums">{{ pulse?.gasGwei ?? '—' }} Gwei</div>
        <span class="text-[11px] font-medium" :class="(pulse?.gasGwei ?? 0) < 16 ? 'text-primary' : 'text-amber-700'">
          {{ (pulse?.gasGwei ?? 0) < 16 ? 'Congestión baja' : 'Congestión media' }}
        </span>
      </div>
      <div class="p-3.5 rounded-2xl bg-surface-container-low/70 border border-[#ebe4dc]">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs mb-1">
          <span class="material-symbols-outlined text-[16px] text-primary">swap_horiz</span> Mejor spread
        </div>
        <div class="font-heading text-lg font-bold">{{ bestExchange?.name ?? '—' }}</div>
        <span class="text-[11px] text-on-surface-variant tabular-nums">
          {{ bestExchange ? `${bestExchange.sell.toFixed(2)} / ${bestExchange.buy.toFixed(2)}` : '' }}
        </span>
      </div>
    </div>

    <div class="mt-3 p-3 rounded-2xl bg-[#fcfaf7] border border-[#ebe4dc] text-xs space-y-1.5">
      <div class="grid grid-cols-3 text-on-surface-variant font-medium text-[11px] px-1">
        <span>Orden P2P</span><span class="text-center">Monto</span><span class="text-right">Estado</span>
      </div>
      <TransitionGroup name="order" tag="div" class="space-y-1.5 relative">
        <div v-for="o in pulse?.orders?.slice(0, 2) ?? []" :key="o.id"
          class="grid grid-cols-3 items-center bg-white p-2 rounded-xl border border-line-soft">
          <span class="font-semibold tabular-nums">{{ o.price.toFixed(2) }} {{ o.side }}</span>
          <span class="text-on-surface-variant text-center tabular-nums">{{ o.amount.toLocaleString('es-BO') }} USDT</span>
          <span class="justify-self-end px-2 py-0.5 rounded-full text-[10px] font-bold"
            :class="o.status === 'Completada' ? 'bg-emerald-100 text-primary' : 'bg-amber-100 text-amber-800'">{{ o.status }}</span>
        </div>
      </TransitionGroup>
    </div>

    <div class="mt-4 pt-3 border-t border-line-soft flex items-center justify-between text-xs">
      <span class="text-on-surface-variant text-[11px] flex items-center gap-1">
        <span class="material-symbols-outlined text-[14px]">science</span> Vista previa · datos de demostración
      </span>
      <a class="text-secondary font-semibold hover:underline flex items-center gap-0.5 group" href="#proyectos">
        Ver caso <span class="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { usePulse } from '../composables/usePulse'
import { sparklinePath } from '../composables/useSparkline'

const { pulse } = usePulse(3000)
const displayRate = ref(9.84)
const flash = ref('')

// Interpola el precio mostrado hacia el nuevo valor y lo "destella" según suba o baje.
watch(
  () => pulse.value?.rate,
  (next, prev) => {
    if (next == null) return
    if (prev != null && next !== prev) {
      flash.value = next > prev ? 'text-primary' : 'text-secondary'
      setTimeout(() => (flash.value = ''), 700)
    }
    const from = displayRate.value
    const start = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - start) / 600)
      displayRate.value = from + (next - from) * p
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
)

const spark = computed(() => sparklinePath(pulse.value?.history ?? [], 280, 40))
const bestExchange = computed(() => {
  const list = pulse.value?.exchanges ?? []
  return [...list].sort((a, b) => a.buy - a.sell - (b.buy - b.sell))[0]
})

// Pequeño efecto 3D al mover el cursor sobre la tarjeta.
const tilt = ref({ x: 0, y: 0 })
const tiltStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${tilt.value.y}deg) rotateY(${tilt.value.x}deg)`
}))
const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  tilt.value = {
    x: ((e.clientX - r.left) / r.width - 0.5) * 6,
    y: -((e.clientY - r.top) / r.height - 0.5) * 6
  }
}
const resetTilt = () => (tilt.value = { x: 0, y: 0 })
</script>

<style scoped>
.tilt-card { transition: transform 0.25s ease-out, box-shadow 0.3s; }
.spark-path { transition: d 0.6s ease; }
.order-enter-active, .order-leave-active { transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1); }
.order-enter-from { opacity: 0; transform: translateY(-12px); }
.order-leave-to { opacity: 0; transform: translateY(12px); }
.order-leave-active { position: absolute; left: 0; right: 0; }
</style>
