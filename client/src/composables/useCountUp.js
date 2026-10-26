import { onBeforeUnmount, onMounted, ref } from 'vue'

// Cuenta desde 0 hasta `target` cuando el elemento entra en pantalla.
export function useCountUp(target, duration = 1600) {
  const el = ref(null)
  const display = ref(0)
  let io
  let frame

  const run = () => {
    const start = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 4)
      display.value = Math.round(target * eased)
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      display.value = target
      return
    }
    io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run()
        io.disconnect()
      }
    })
    if (el.value) io.observe(el.value)
  })

  onBeforeUnmount(() => {
    io?.disconnect()
    cancelAnimationFrame(frame)
  })

  return { el, display }
}
