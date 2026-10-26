// v-reveal: aparece el elemento con una animación al entrar en pantalla.
// Uso: v-reveal, v-reveal="150" (retraso en ms), v-reveal:left, v-reveal:zoom
const REVEAL_VARIANTS = ['reveal-up', 'reveal-left', 'reveal-right', 'reveal-zoom']
let observer

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        el.classList.add('is-visible')
        observer.unobserve(el)
        // Al terminar, quitamos las clases para que no pisen los transform/transition de hover.
        const delay = parseFloat(el.style.transitionDelay) || 0
        setTimeout(() => {
          el.classList.remove('reveal', 'is-visible', ...REVEAL_VARIANTS)
          el.style.transitionDelay = ''
        }, delay + 900)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  return observer
}

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal', `reveal-${binding.arg || 'up'}`)
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
