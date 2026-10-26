<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Libro abierto con birrete saltando">
    <rect width="320" height="200" fill="#fff1e8" />
    <circle cx="270" cy="40" r="56" fill="#ffdbcc" opacity="0.7" />
    <circle cx="40" cy="190" r="50" fill="#ffdbcc" opacity="0.5" />

    <!-- bombilla -->
    <g class="bulb">
      <circle cx="262" cy="70" r="26" fill="#ffe7a3" class="glow" />
      <circle cx="262" cy="68" r="15" fill="#f5b83d" />
      <rect x="255" y="81" width="14" height="10" rx="3" fill="#707977" />
      <path d="M257 66 q5 6 10 0" fill="none" stroke="#7a2f01" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- bloques de tokens -->
    <g v-for="(b, i) in blocks" :key="i" class="block" :style="{ animationDelay: `${i * 0.4}s` }">
      <rect :x="b.x" :y="b.y" width="22" height="22" rx="5" :fill="b.c" />
    </g>

    <!-- libro -->
    <g class="book">
      <path d="M90 170 C120 156 150 158 160 168 C170 158 200 156 230 170 L230 110 C200 96 170 98 160 108 C150 98 120 96 90 110 Z" fill="#235750" />
      <path d="M96 164 C122 152 148 154 158 162 L158 112 C148 104 122 102 96 114 Z" fill="#fff" />
      <path d="M224 164 C198 152 172 154 162 162 L162 112 C172 104 198 102 224 114 Z" fill="#faf2ed" />
      <g stroke="#bfc8c5" stroke-width="2.5" stroke-linecap="round">
        <line x1="108" y1="124" x2="146" y2="118" />
        <line x1="108" y1="134" x2="146" y2="128" />
        <line x1="108" y1="144" x2="136" y2="139" />
        <line x1="174" y1="118" x2="212" y2="124" />
        <line x1="174" y1="128" x2="212" y2="134" />
      </g>
      <circle cx="132" cy="150" r="2.6" fill="#1e1b18" />
      <circle cx="188" cy="150" r="2.6" fill="#1e1b18" />
      <path d="M152 156 q8 7 16 0" fill="none" stroke="#1e1b18" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <!-- birrete -->
    <g class="cap">
      <path d="M160 52 L204 70 L160 88 L116 70 Z" fill="#1e1b18" />
      <path d="M136 78 v14 c0 8 48 8 48 0 v-14 l-24 10 z" fill="#33302c" />
      <g class="tassel">
        <line x1="160" y1="70" x2="196" y2="80" stroke="#ff9561" stroke-width="2.5" />
        <line x1="196" y1="80" x2="196" y2="98" stroke="#ff9561" stroke-width="2.5" />
        <circle cx="196" cy="100" r="4" fill="#ff9561" />
      </g>
    </g>
  </svg>
</template>

<script setup>
const blocks = [
  { x: 36, y: 56, c: '#9cd1c7' },
  { x: 62, y: 84, c: '#ff9561' },
  { x: 40, y: 112, c: '#3d7068' }
]
</script>

<style scoped>
* { transform-box: fill-box; }
.cap { transform-origin: 50% 100%; animation: hop 2.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
.tassel { transform-origin: 0% 0%; animation: swing 2.2s ease-in-out infinite; }
.book { transform-origin: 50% 100%; animation: squash 2.2s ease-in-out infinite; }
.glow { transform-origin: center; animation: glow 2s ease-in-out infinite; }
.bulb { transform-origin: center; animation: float 5s ease-in-out infinite; }
.block { transform-origin: center; animation: float-rotate 3.6s ease-in-out infinite; }
@keyframes hop {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  40% { transform: translateY(-24px) rotate(-8deg); }
  60% { transform: translateY(-24px) rotate(6deg); }
}
@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
}
@keyframes squash {
  0%, 100% { transform: scale(1, 1); }
  10%, 90% { transform: scale(1.03, 0.96); }
  50% { transform: scale(1, 1); }
}
@keyframes glow {
  0%, 100% { transform: scale(0.9); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 1; }
}
</style>
