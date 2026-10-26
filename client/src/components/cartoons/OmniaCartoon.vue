<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Paraguas protegiendo documentos de la lluvia">
    <rect width="320" height="200" fill="#f4ece7" />
    <!-- nube -->
    <g class="cloud">
      <ellipse cx="160" cy="26" rx="70" ry="18" fill="#e0d9d3" />
      <circle cx="130" cy="20" r="18" fill="#e0d9d3" />
      <circle cx="176" cy="14" r="22" fill="#e0d9d3" />
    </g>
    <!-- lluvia -->
    <line v-for="(d, i) in drops" :key="i" class="drop" :x1="d[0]" y1="40" :x2="d[0] - 3" y2="52" stroke="#9cd1c7"
      stroke-width="2.5" stroke-linecap="round" :style="{ animationDelay: `${d[1]}s` }" />

    <!-- paraguas -->
    <g class="umbrella">
      <path d="M90 92 C96 54 224 54 230 92 C220 84 206 84 196 92 C186 84 172 84 160 92 C148 84 134 84 124 92 C114 84 100 84 90 92 Z" fill="#994619" />
      <path d="M124 92 C130 66 150 58 160 58 C150 66 146 80 160 92 C148 84 134 84 124 92 Z" fill="#ff9561" />
      <path d="M196 92 C190 66 170 58 160 58 C170 66 174 80 160 92 C172 84 186 84 196 92 Z" fill="#ff9561" />
      <line x1="160" y1="58" x2="160" y2="50" stroke="#1e1b18" stroke-width="3" stroke-linecap="round" />
      <path d="M160 92 v62 a8 8 0 0 1 -16 0" fill="none" stroke="#1e1b18" stroke-width="3.5" stroke-linecap="round" />
    </g>

    <!-- documentos con cara -->
    <g class="docs">
      <rect x="168" y="118" width="54" height="66" rx="8" fill="#e9e1dc" transform="rotate(8 195 151)" />
      <rect x="172" y="114" width="54" height="66" rx="8" fill="#fff" stroke="#bfc8c5" stroke-width="2" />
      <rect x="182" y="126" width="34" height="5" rx="2.5" fill="#235750" />
      <rect x="182" y="137" width="26" height="4" rx="2" fill="#bfc8c5" />
      <circle cx="190" cy="156" r="2.6" fill="#1e1b18" />
      <circle cx="208" cy="156" r="2.6" fill="#1e1b18" />
      <path d="M193 164 q6 5 12 0" fill="none" stroke="#1e1b18" stroke-width="2.2" stroke-linecap="round" />
      <circle cx="184" cy="162" r="3.5" fill="#f4a38a" opacity="0.6" />
      <circle cx="214" cy="162" r="3.5" fill="#f4a38a" opacity="0.6" />
    </g>

    <!-- tabla de datos -->
    <g class="table">
      <rect x="30" y="118" width="70" height="60" rx="8" fill="#fff" stroke="#e8e2d9" stroke-width="2" />
      <rect x="30" y="118" width="70" height="14" rx="7" fill="#3d7068" />
      <rect v-for="r in 3" :key="r" class="row" x="38" :y="124 + r * 13" width="54" height="6" rx="3" fill="#d5e8cb"
        :style="{ animationDelay: `${r * 0.3}s` }" />
    </g>
  </svg>
</template>

<script setup>
const drops = [[40, 0], [70, 0.5], [110, 0.2], [250, 0.7], [280, 0.1], [300, 0.9], [220, 0.4], [20, 1.1]]
</script>

<style scoped>
* { transform-box: fill-box; }
.drop { animation: rain 1.2s linear infinite; }
.umbrella { transform-origin: 50% 100%; animation: sway 3s ease-in-out infinite; }
.docs { transform-origin: 50% 100%; animation: float 3s ease-in-out infinite; }
.cloud { animation: drift 8s ease-in-out infinite; }
.row { transform-origin: 0% 50%; animation: fill 2.4s ease-in-out infinite alternate; }
@keyframes rain {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(150px); opacity: 0; }
}
@keyframes sway {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
@keyframes drift {
  0%, 100% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
}
@keyframes fill {
  from { transform: scaleX(0.3); }
  to { transform: scaleX(1); }
}
</style>
