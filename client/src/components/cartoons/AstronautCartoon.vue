<template>
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" class="w-full h-full" role="img" aria-label="Astronauta flotando con un trofeo">
    <defs>
      <linearGradient id="space-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1b2a3a" />
        <stop offset="1" stop-color="#23463f" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#space-bg)" />

    <g fill="#fff">
      <circle v-for="(s, i) in stars" :key="i" class="star" :cx="s[0]" :cy="s[1]" :r="s[2]" :style="{ animationDelay: `${s[3]}s` }" />
    </g>

    <!-- estrella fugaz -->
    <g class="shooting">
      <line x1="0" y1="0" x2="34" y2="0" stroke="#ffdbcc" stroke-width="2" stroke-linecap="round" />
      <circle cx="34" cy="0" r="2.5" fill="#fff" />
    </g>

    <!-- planeta con anillo -->
    <g class="planet">
      <circle cx="262" cy="160" r="46" fill="#ff9561" />
      <path d="M232 140 q18 -10 40 -4" fill="none" stroke="#ffb694" stroke-width="6" stroke-linecap="round" />
      <circle cx="280" cy="178" r="8" fill="#e47c48" />
      <circle cx="248" cy="170" r="5" fill="#e47c48" />
      <ellipse cx="262" cy="160" rx="72" ry="13" fill="none" stroke="#ffdbcc" stroke-width="4" transform="rotate(-14 262 160)" />
    </g>

    <!-- luna orbitando -->
    <g class="orbit">
      <circle cx="262" cy="160" r="9" fill="#d5e8cb" transform="translate(-86 -40)" />
    </g>

    <!-- astronauta -->
    <g class="astro">
      <!-- cuerda -->
      <path d="M118 120 C 90 150 60 120 40 160" fill="none" stroke="#9cd1c7" stroke-width="2" stroke-dasharray="4 4" />
      <rect x="96" y="96" width="44" height="40" rx="12" fill="#cfd6d4" />
      <rect x="104" y="100" width="40" height="46" rx="16" fill="#fff" />
      <rect x="114" y="114" width="20" height="12" rx="3" fill="#ff9561" />
      <circle cx="119" cy="120" r="2" fill="#fff" />
      <circle cx="128" cy="120" r="2" fill="#235750" />
      <!-- piernas -->
      <rect x="106" y="138" width="14" height="22" rx="7" fill="#fff" class="leg-l" />
      <rect x="128" y="138" width="14" height="22" rx="7" fill="#fff" class="leg-r" />
      <rect x="104" y="154" width="18" height="8" rx="4" fill="#bfc8c5" class="leg-l" />
      <rect x="126" y="154" width="18" height="8" rx="4" fill="#bfc8c5" class="leg-r" />
      <!-- brazo con trofeo -->
      <g class="arm">
        <rect x="140" y="104" width="30" height="13" rx="6.5" fill="#fff" />
        <circle cx="172" cy="110" r="7" fill="#bfc8c5" />
        <g transform="translate(164 80)">
          <path d="M4 0 h16 v8 a8 8 0 0 1 -16 0 z" fill="#f5b83d" />
          <path d="M4 3 h-4 a4 4 0 0 0 4 6 M20 3 h4 a4 4 0 0 1 -4 6" fill="none" stroke="#f5b83d" stroke-width="2" />
          <rect x="10" y="15" width="4" height="6" fill="#d99a20" />
          <rect x="6" y="21" width="12" height="4" rx="1" fill="#d99a20" />
          <text x="12" y="10" text-anchor="middle" font-size="7" font-weight="700" fill="#7a2f01" font-family="DM Sans, sans-serif">1</text>
        </g>
      </g>
      <rect x="86" y="108" width="22" height="13" rx="6.5" fill="#fff" />
      <!-- casco -->
      <circle cx="124" cy="80" r="28" fill="#fff" />
      <rect x="104" y="68" width="40" height="26" rx="13" fill="#235750" />
      <path d="M110 74 q6 -4 12 -2" fill="none" stroke="#9cd1c7" stroke-width="3" stroke-linecap="round" />
      <circle cx="130" cy="84" r="2.2" fill="#b7ede3" class="blink" />
      <circle cx="139" cy="84" r="2.2" fill="#b7ede3" class="blink" />
      <line x1="124" y1="52" x2="124" y2="44" stroke="#cfd6d4" stroke-width="3" />
      <circle cx="124" cy="42" r="4" fill="#ff9561" class="beacon" />
    </g>
  </svg>
</template>

<script setup>
const stars = [
  [20, 24, 1.6, 0], [60, 60, 1.2, 0.6], [96, 22, 2, 1.2], [150, 30, 1.3, 0.3], [190, 64, 1.8, 1.8],
  [222, 20, 1.2, 0.9], [300, 38, 1.6, 1.5], [30, 120, 1.4, 2], [70, 180, 1.2, 0.4], [180, 170, 1.5, 1.1],
  [210, 110, 1.1, 2.2], [286, 92, 1.3, 0.7]
]
</script>

<style scoped>
* { transform-box: fill-box; }
.star { transform-origin: center; animation: twinkle 2.6s ease-in-out infinite; }
.astro { transform-origin: center; animation: drift 6s ease-in-out infinite; }
.arm { transform-origin: 0% 50%; animation: cheer 2s ease-in-out infinite; }
.leg-l { transform-origin: 50% 0%; animation: kick 2.4s ease-in-out infinite; }
.leg-r { transform-origin: 50% 0%; animation: kick 2.4s ease-in-out infinite reverse; }
.beacon { animation: beacon 1.2s ease-in-out infinite; }
.blink { transform-origin: center; animation: blink 4s infinite; }
.planet { transform-origin: center; animation: float 7s ease-in-out infinite; }
.orbit { transform-box: view-box; transform-origin: 262px 160px; animation: spin 9s linear infinite; }
.shooting { transform-box: view-box; animation: shoot 5s ease-in 1s infinite; opacity: 0; }

@keyframes drift {
  0%, 100% { transform: translate(0, 0) rotate(-6deg); }
  50% { transform: translate(10px, -12px) rotate(6deg); }
}
@keyframes cheer {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-22deg); }
}
@keyframes kick {
  0%, 100% { transform: rotate(8deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes beacon {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
@keyframes blink {
  0%, 92%, 100% { transform: scaleY(1); }
  96% { transform: scaleY(0.1); }
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes shoot {
  0% { transform: translate(40px, 10px) rotate(20deg); opacity: 0; }
  5% { opacity: 1; }
  30% { transform: translate(260px, 100px) rotate(20deg); opacity: 0; }
  100% { opacity: 0; }
}
</style>
