<template>
  <svg viewBox="0 0 200 140" class="w-full h-full overflow-visible" role="img" :aria-label="sent ? 'Avión de papel volando con tu mensaje' : 'Sobre esperando tu mensaje'">
    <!-- trayectoria punteada -->
    <path v-if="sent" class="trail" d="M30 110 C70 40 120 130 190 20" fill="none" stroke="#ff9561" stroke-width="2.5"
      stroke-dasharray="6 7" stroke-linecap="round" />

    <g v-if="!sent" class="envelope">
      <rect x="50" y="46" width="100" height="68" rx="10" fill="#fff" stroke="#235750" stroke-width="3" />
      <path d="M52 50 L100 86 L148 50" fill="none" stroke="#235750" stroke-width="3" stroke-linejoin="round" />
      <circle cx="84" cy="98" r="2.5" fill="#1e1b18" />
      <circle cx="116" cy="98" r="2.5" fill="#1e1b18" />
      <path d="M94 104 q6 5 12 0" fill="none" stroke="#1e1b18" stroke-width="2" stroke-linecap="round" />
      <g class="heart">
        <path d="M150 40 c-4 -8 -16 -6 -14 4 c1 6 14 14 14 14 s13 -8 14 -14 c2 -10 -10 -12 -14 -4z" fill="#ff9561" />
      </g>
    </g>

    <g v-else class="plane">
      <path d="M0 0 L44 16 L10 22 Z" fill="#fff" stroke="#235750" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M10 22 L16 34 L22 20" fill="#e9e1dc" stroke="#235750" stroke-width="2.5" stroke-linejoin="round" />
      <circle cx="22" cy="13" r="1.8" fill="#1e1b18" />
    </g>
  </svg>
</template>

<script setup>
defineProps({ sent: { type: Boolean, default: false } })
</script>

<style scoped>
.envelope { transform-box: fill-box; transform-origin: center; animation: float 3.5s ease-in-out infinite; }
.heart { transform-box: fill-box; transform-origin: center; animation: beat 1.2s ease-in-out infinite; }
.trail { stroke-dashoffset: 300; animation: trail 1.8s ease-out forwards; }
.plane {
  offset-path: path('M30 110 C70 40 120 130 190 20');
  offset-rotate: auto;
  animation: fly 1.8s ease-in-out forwards;
}
@keyframes beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
@keyframes trail { to { stroke-dashoffset: 0; } }
@keyframes fly { from { offset-distance: 0%; } to { offset-distance: 100%; } }
</style>
