<template>
  <svg viewBox="0 0 200 220" class="avatar" role="img" aria-label="Ilustración de Gustavo saludando con su laptop">
    <!-- destellos -->
    <g class="spark" style="animation-delay: 0s"><path d="M30 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" fill="#ff9561" /></g>
    <g class="spark" style="animation-delay: 0.8s"><path d="M172 40 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" fill="#3d7068" /></g>
    <circle class="spark" style="animation-delay: 1.4s" cx="176" cy="150" r="4" fill="#ffb694" />

    <g class="body">
      <!-- torso -->
      <path d="M50 220 C50 168 68 142 100 142 C132 142 150 168 150 220 Z" fill="#235750" />
      <path d="M86 144 L100 162 L114 144" fill="none" stroke="#194f48" stroke-width="3" stroke-linecap="round" />
      <line x1="94" y1="156" x2="92" y2="176" stroke="#b7ede3" stroke-width="2.5" stroke-linecap="round" />
      <line x1="106" y1="156" x2="108" y2="176" stroke="#b7ede3" stroke-width="2.5" stroke-linecap="round" />
      <rect x="92" y="112" width="16" height="18" rx="6" fill="#e8b48f" />

      <!-- brazo que saluda -->
      <g class="wave">
        <line x1="140" y1="158" x2="168" y2="114" stroke="#235750" stroke-width="17" stroke-linecap="round" />
        <circle cx="170" cy="106" r="10" fill="#f2c29b" />
        <path d="M164 98 q-2 -8 4 -9" fill="none" stroke="#e8b48f" stroke-width="3" stroke-linecap="round" />
      </g>

      <!-- cabeza -->
      <g class="head">
        <circle cx="63" cy="84" r="7" fill="#e8b48f" />
        <circle cx="137" cy="84" r="7" fill="#e8b48f" />
        <circle cx="100" cy="80" r="37" fill="#f2c29b" />
        <path d="M62 80 C56 46 80 34 102 36 C128 36 146 54 138 82 C132 66 118 58 104 62 C92 54 74 60 62 80 Z" fill="#2b211c" />
        <path d="M84 52 C92 44 106 44 112 50" fill="none" stroke="#4a3a31" stroke-width="3" stroke-linecap="round" />
        <path d="M80 74 q8 -5 15 -1" fill="none" stroke="#2b211c" stroke-width="3" stroke-linecap="round" />
        <path d="M105 73 q8 -4 15 1" fill="none" stroke="#2b211c" stroke-width="3" stroke-linecap="round" />
        <g class="eyes">
          <ellipse cx="88" cy="85" rx="4.2" ry="5.2" fill="#1e1b18" />
          <ellipse cx="112" cy="85" rx="4.2" ry="5.2" fill="#1e1b18" />
          <circle cx="89.5" cy="83" r="1.4" fill="#fff" />
          <circle cx="113.5" cy="83" r="1.4" fill="#fff" />
        </g>
        <circle cx="79" cy="97" r="5.5" fill="#f4a38a" opacity="0.6" />
        <circle cx="121" cy="97" r="5.5" fill="#f4a38a" opacity="0.6" />
        <path d="M89 99 Q100 110 111 99" fill="#994619" stroke="#1e1b18" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- laptop -->
      <g class="laptop">
        <rect x="54" y="168" width="88" height="50" rx="7" fill="#e9e1dc" stroke="#bfc8c5" stroke-width="2" />
        <circle cx="98" cy="193" r="9" fill="#994619" />
        <text x="98" y="197" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="DM Sans, sans-serif">GA</text>
        <circle cx="58" cy="182" r="9" fill="#f2c29b" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.avatar { overflow: visible; }
.body { animation: bob 4s ease-in-out infinite; }
.wave {
  transform-box: fill-box;
  transform-origin: 0% 100%;
  animation: wave 1.6s ease-in-out infinite;
}
.head {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: tilt 4s ease-in-out infinite;
}
.eyes {
  transform-box: fill-box;
  transform-origin: center;
  animation: blink 4.5s infinite;
}
.spark {
  transform-box: fill-box;
  transform-origin: center;
  animation: twinkle 2.4s ease-in-out infinite;
}
@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30%, 50% { transform: rotate(-14deg); }
  20%, 40% { transform: rotate(12deg); }
}
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
@keyframes blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
}
</style>
