<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Furgoneta ecológica avanzando con burbujas">
    <rect width="320" height="200" fill="#eaf5ee" />
    <circle class="sun" cx="270" cy="42" r="20" fill="#ffdb8a" />
    <!-- colinas -->
    <path d="M0 150 C60 120 110 130 160 145 C220 160 270 125 320 140 L320 200 L0 200 Z" fill="#d5e8cb" />
    <!-- carretera -->
    <rect x="0" y="168" width="320" height="32" fill="#bfc8c5" />
    <g class="road">
      <rect v-for="i in 10" :key="i" :x="(i - 1) * 40" y="182" width="22" height="4" rx="2" fill="#fff" />
    </g>

    <!-- burbujas -->
    <circle v-for="(b, i) in bubbles" :key="i" class="bubble" :cx="b[0]" cy="120" :r="b[1]" fill="#fff"
      stroke="#9cd1c7" stroke-width="2" :style="{ animationDelay: `${b[2]}s` }" />

    <!-- furgoneta -->
    <g class="van">
      <path d="M96 118 h86 a12 12 0 0 1 12 12 v6 l26 4 a10 10 0 0 1 8 10 v16 a6 6 0 0 1 -6 6 h-132 a6 6 0 0 1 -6 -6 v-36 a12 12 0 0 1 12 -12 z" fill="#235750" />
      <path d="M194 128 l20 10 h-20 z" fill="#b7ede3" />
      <rect x="104" y="126" width="34" height="16" rx="4" fill="#b7ede3" />
      <rect x="146" y="126" width="34" height="16" rx="4" fill="#b7ede3" />
      <text x="140" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="DM Sans, sans-serif">EcoWash</text>
      <path d="M118 148 c4 -8 12 -8 12 0 c0 5 -6 8 -6 8 s-6 -3 -6 -8z" fill="#9cd1c7" />
      <circle cx="222" cy="150" r="3" fill="#ffdb8a" />
      <g class="wheel"><circle cx="120" cy="172" r="12" fill="#1e1b18" /><circle cx="120" cy="172" r="5" fill="#bfc8c5" /><rect x="118.5" y="162" width="3" height="20" fill="#707977" /></g>
      <g class="wheel"><circle cx="200" cy="172" r="12" fill="#1e1b18" /><circle cx="200" cy="172" r="5" fill="#bfc8c5" /><rect x="198.5" y="162" width="3" height="20" fill="#707977" /></g>
    </g>
    <!-- humo de hojas -->
    <g class="leaf"><path d="M80 158 c-10 -2 -14 -10 -12 -16 c8 0 14 6 12 16z" fill="#5b6c55" /></g>
  </svg>
</template>

<script setup>
const bubbles = [[120, 6, 0], [150, 9, 0.6], [180, 5, 1.2], [140, 4, 1.8], [200, 7, 0.9]]
</script>

<style scoped>
* { transform-box: fill-box; }
.van { animation: bump 0.5s ease-in-out infinite; }
.wheel { transform-origin: center; animation: spin 0.6s linear infinite; }
.road { animation: road 0.8s linear infinite; }
.bubble { transform-origin: center; animation: bubble 2.4s ease-out infinite; opacity: 0; }
.leaf { transform-origin: center; animation: leaf 1.6s ease-out infinite; }
.sun { transform-origin: center; animation: twinkle 4s ease-in-out infinite; }
@keyframes bump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes road {
  from { transform: translateX(0); }
  to { transform: translateX(-40px); }
}
@keyframes bubble {
  0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translate(-30px, -90px) scale(1.2); opacity: 0; }
}
@keyframes leaf {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate(-50px, -20px) rotate(-120deg); opacity: 0; }
}
</style>
