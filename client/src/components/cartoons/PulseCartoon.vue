<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Moneda animada corriendo sobre un gráfico de precios">
    <rect width="320" height="200" fill="#eef4f1" />
    <g stroke="#dfe9e5" stroke-width="1">
      <line v-for="i in 5" :key="'h' + i" x1="0" :y1="i * 34" x2="320" :y2="i * 34" />
    </g>
    <!-- velas -->
    <g v-for="(c, i) in candles" :key="i" class="candle" :style="{ animationDelay: `${i * 0.12}s` }">
      <line :x1="c.x + 4" :y1="c.y - 8" :x2="c.x + 4" :y2="c.y + c.h + 8" :stroke="c.up ? '#3d7068' : '#e47c48'" stroke-width="1.5" />
      <rect :x="c.x" :y="c.y" width="8" :height="c.h" rx="2" :fill="c.up ? '#3d7068' : '#ff9561'" />
    </g>
    <!-- línea de precio -->
    <path class="trend" d="M0 160 C40 150 60 120 100 126 C140 132 160 92 200 96 C240 100 260 60 320 56" fill="none"
      stroke="#235750" stroke-width="3.5" stroke-linecap="round" />
    <path d="M0 160 C40 150 60 120 100 126 C140 132 160 92 200 96 C240 100 260 60 320 56 L320 200 L0 200 Z" fill="rgb(43 94 86 / 0.08)" />

    <!-- moneda que surfea la línea -->
    <g class="rider">
      <g class="coin-buddy">
        <ellipse cx="0" cy="22" rx="12" ry="3" fill="#1e1b18" opacity="0.15" />
        <line x1="-6" y1="10" x2="-9" y2="20" stroke="#1e1b18" stroke-width="3" stroke-linecap="round" class="leg-a" />
        <line x1="6" y1="10" x2="9" y2="20" stroke="#1e1b18" stroke-width="3" stroke-linecap="round" class="leg-b" />
        <circle cx="0" cy="-2" r="16" fill="#f5b83d" stroke="#d99a20" stroke-width="3" />
        <text x="0" y="-5" text-anchor="middle" font-size="8" font-weight="700" fill="#7a2f01" font-family="DM Sans, sans-serif">USDT</text>
        <circle cx="-5" cy="3" r="2" fill="#1e1b18" />
        <circle cx="5" cy="3" r="2" fill="#1e1b18" />
        <path d="M-4 8 q4 3 8 0" fill="none" stroke="#1e1b18" stroke-width="1.8" stroke-linecap="round" />
      </g>
    </g>

    <g class="badge">
      <rect x="230" y="14" width="76" height="24" rx="12" fill="#fff" stroke="#e8e2d9" />
      <circle cx="244" cy="26" r="4" fill="#3d7068" class="live" />
      <text x="254" y="30" font-size="10" font-weight="700" fill="#235750" font-family="DM Sans, sans-serif">LIVE P2P</text>
    </g>
  </svg>
</template>

<script setup>
const candles = [
  { x: 24, y: 120, h: 26, up: true }, { x: 52, y: 110, h: 18, up: false }, { x: 80, y: 100, h: 30, up: true },
  { x: 108, y: 112, h: 16, up: false }, { x: 136, y: 86, h: 32, up: true }, { x: 164, y: 80, h: 20, up: true },
  { x: 192, y: 88, h: 14, up: false }, { x: 220, y: 66, h: 28, up: true }, { x: 248, y: 58, h: 22, up: true },
  { x: 276, y: 50, h: 18, up: false }
]
</script>

<style scoped>
.candle { transform-box: fill-box; transform-origin: 50% 100%; animation: candle 2.6s ease-in-out infinite alternate; }
.trend { stroke-dasharray: 420; animation: trace 4s ease-in-out infinite; }
.rider {
  offset-path: path('M0 160 C40 150 60 120 100 126 C140 132 160 92 200 96 C240 100 260 60 320 56');
  offset-rotate: 0deg;
  animation: ride 6s ease-in-out infinite;
}
.coin-buddy { transform: translateY(-22px); }
.leg-a { transform-box: fill-box; transform-origin: 50% 0%; animation: run 0.3s ease-in-out infinite alternate; }
.leg-b { transform-box: fill-box; transform-origin: 50% 0%; animation: run 0.3s ease-in-out infinite alternate-reverse; }
.live { animation: beacon 1.2s ease-in-out infinite; }
@keyframes candle { from { transform: scaleY(0.7); } to { transform: scaleY(1.1); } }
@keyframes trace { 0% { stroke-dashoffset: 420; } 50%, 100% { stroke-dashoffset: 0; } }
@keyframes ride { 0% { offset-distance: 2%; } 50% { offset-distance: 96%; } 100% { offset-distance: 2%; } }
@keyframes run { from { transform: rotate(-25deg); } to { transform: rotate(25deg); } }
@keyframes beacon { 50% { opacity: 0.25; } }
</style>
