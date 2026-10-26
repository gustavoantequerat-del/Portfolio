import { onBeforeUnmount, onMounted, ref } from 'vue'

// Consulta periódica del simulador PULSE en el backend.
export function usePulse(interval = 3000) {
  const pulse = ref(null)
  let timer

  const fetchPulse = async () => {
    if (document.hidden) return
    try {
      const res = await fetch('/api/pulse')
      if (res.ok) pulse.value = await res.json()
    } catch {
      // si el backend no responde mantenemos el último valor
    }
  }

  onMounted(() => {
    fetchPulse()
    timer = setInterval(fetchPulse, interval)
  })
  onBeforeUnmount(() => clearInterval(timer))

  return { pulse }
}
