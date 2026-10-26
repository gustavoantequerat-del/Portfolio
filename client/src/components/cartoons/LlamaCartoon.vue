<template>
  <svg viewBox="0 0 120 120" class="llama" role="img" aria-label="Llama boliviana con chullo caminando">
    <g class="bounce">
      <!-- patas -->
      <rect class="leg-a" x="34" y="78" width="8" height="30" rx="4" fill="#e9dccb" />
      <rect class="leg-b" x="46" y="78" width="8" height="30" rx="4" fill="#d9c9b4" />
      <rect class="leg-b" x="68" y="78" width="8" height="30" rx="4" fill="#e9dccb" />
      <rect class="leg-a" x="80" y="78" width="8" height="30" rx="4" fill="#d9c9b4" />
      <!-- cuerpo lanudo -->
      <ellipse cx="62" cy="72" rx="34" ry="20" fill="#fbf4ea" />
      <circle cx="36" cy="66" r="10" fill="#fbf4ea" />
      <circle cx="54" cy="58" r="11" fill="#fbf4ea" />
      <circle cx="74" cy="58" r="11" fill="#fbf4ea" />
      <circle cx="92" cy="66" r="9" fill="#fbf4ea" />
      <!-- manta aguayo -->
      <rect x="48" y="58" width="30" height="16" rx="3" fill="#994619" />
      <rect x="48" y="62" width="30" height="3" fill="#f5b83d" />
      <rect x="48" y="68" width="30" height="3" fill="#3d7068" />
      <circle class="tail" cx="28" cy="64" r="6" fill="#fbf4ea" />
      <!-- cuello y cabeza -->
      <g class="head">
        <rect x="86" y="30" width="14" height="40" rx="7" fill="#fbf4ea" />
        <ellipse cx="100" cy="30" rx="13" ry="11" fill="#fbf4ea" />
        <ellipse cx="108" cy="34" rx="6" ry="5" fill="#f1e3d1" />
        <circle cx="98" cy="27" r="2.2" fill="#1e1b18" class="eye" />
        <path d="M106 37 q2 2 4 0" fill="none" stroke="#1e1b18" stroke-width="1.4" stroke-linecap="round" />
        <circle cx="94" cy="32" r="2.5" fill="#f4a38a" opacity="0.6" />
        <!-- chullo -->
        <path d="M88 22 C88 8 112 8 112 22 Z" fill="#235750" />
        <rect x="88" y="18" width="24" height="4" fill="#ff9561" />
        <path d="M89 22 l-2 10 M111 22 l2 8" stroke="#235750" stroke-width="3" stroke-linecap="round" />
        <circle cx="100" cy="7" r="3.5" fill="#ff9561" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.llama { overflow: visible; }
* { transform-box: fill-box; }
.bounce { animation: step 0.6s ease-in-out infinite; }
.leg-a { transform-origin: 50% 0%; animation: walk 0.6s ease-in-out infinite alternate; }
.leg-b { transform-origin: 50% 0%; animation: walk 0.6s ease-in-out infinite alternate-reverse; }
.head { transform-origin: 30% 100%; animation: nod 1.2s ease-in-out infinite; }
.tail { transform-origin: 100% 50%; animation: wiggle 0.6s ease-in-out infinite; }
.eye { transform-origin: center; animation: blink 3.5s infinite; }
@keyframes step { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
@keyframes walk { from { transform: rotate(-14deg); } to { transform: rotate(14deg); } }
@keyframes nod { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-5deg); } }
@keyframes blink { 0%, 92%, 100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); } }
</style>
