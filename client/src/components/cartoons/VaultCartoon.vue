<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Bóveda DeFi recibiendo monedas">
    <rect width="320" height="200" fill="#e8f3ef" />
    <circle cx="60" cy="40" r="50" fill="#d5e8cb" opacity="0.6" />
    <circle cx="290" cy="180" r="60" fill="#b7ede3" opacity="0.5" />

    <!-- gráfico de staking -->
    <g opacity="0.9">
      <rect v-for="(h, i) in bars" :key="i" class="bar" :x="22 + i * 16" :y="180 - h" width="10" :height="h" rx="3"
        fill="#9cd1c7" :style="{ animationDelay: `${i * 0.15}s` }" />
    </g>

    <!-- monedas cayendo -->
    <g v-for="(c, i) in coins" :key="'c' + i" class="coin" :style="{ animationDelay: `${c.delay}s` }">
      <circle :cx="c.x" cy="20" r="11" fill="#f5b83d" stroke="#d99a20" stroke-width="2.5" />
      <text :x="c.x" y="24.5" text-anchor="middle" font-size="12" font-weight="700" fill="#7a2f01" font-family="DM Sans, sans-serif">{{ c.symbol }}</text>
    </g>

    <!-- bóveda con cara -->
    <g class="vault">
      <rect x="120" y="76" width="104" height="96" rx="20" fill="#235750" />
      <rect x="130" y="86" width="84" height="76" rx="14" fill="#3d7068" />
      <rect x="156" y="70" width="32" height="8" rx="4" fill="#1e1b18" />
      <g class="dial">
        <circle cx="172" cy="132" r="20" fill="#b7ede3" />
        <circle cx="172" cy="132" r="13" fill="#9cd1c7" />
        <rect x="170" y="114" width="4" height="10" rx="2" fill="#235750" />
        <rect x="170" y="140" width="4" height="10" rx="2" fill="#235750" />
        <rect x="154" y="130" width="10" height="4" rx="2" fill="#235750" />
        <rect x="180" y="130" width="10" height="4" rx="2" fill="#235750" />
      </g>
      <g class="eyes">
        <circle cx="156" cy="102" r="4" fill="#fff" />
        <circle cx="188" cy="102" r="4" fill="#fff" />
        <circle cx="157" cy="103" r="2" fill="#1e1b18" />
        <circle cx="189" cy="103" r="2" fill="#1e1b18" />
      </g>
      <rect x="132" y="170" width="16" height="10" rx="4" fill="#194f48" />
      <rect x="196" y="170" width="16" height="10" rx="4" fill="#194f48" />
    </g>

    <!-- escudo -->
    <g class="shield">
      <path d="M262 50 l22 8 v16 c0 16 -10 26 -22 30 c-12 -4 -22 -14 -22 -30 v-16 z" fill="#994619" />
      <path d="M252 76 l7 7 l14 -15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </svg>
</template>

<script setup>
const bars = [24, 36, 30, 48, 58, 70]
const coins = [
  { x: 160, delay: 0, symbol: 'Ξ' },
  { x: 184, delay: 1.1, symbol: '₿' },
  { x: 172, delay: 2.2, symbol: '$' }
]
</script>

<style scoped>
* { transform-box: fill-box; }
.coin { animation: drop 3.3s cubic-bezier(0.55, 0, 0.75, 0.3) infinite; opacity: 0; }
.vault { transform-origin: 50% 100%; animation: gulp 3.3s ease-in-out infinite; }
.dial { transform-origin: center; animation: spin 6s linear infinite; }
.eyes { transform-origin: center; animation: blink 3.6s infinite; }
.bar { transform-origin: 50% 100%; animation: grow 2.8s ease-in-out infinite alternate; }
.shield { transform-origin: center; animation: float-rotate 4s ease-in-out infinite; }
@keyframes drop {
  0% { transform: translateY(-30px); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translateY(54px); opacity: 1; }
  50%, 100% { transform: translateY(60px) scale(0.3); opacity: 0; }
}
@keyframes gulp {
  0%, 40%, 60%, 100% { transform: scale(1, 1); }
  48% { transform: scale(1.06, 0.93); }
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes blink {
  0%, 90%, 100% { transform: scaleY(1); }
  94% { transform: scaleY(0.1); }
}
@keyframes grow {
  from { transform: scaleY(0.55); }
  to { transform: scaleY(1); }
}
</style>
