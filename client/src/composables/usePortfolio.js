import { ref } from 'vue'

export function usePortfolio() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  const load = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/portfolio')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      data.value = await res.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  load()
  return { data, error, loading, reload: load }
}
