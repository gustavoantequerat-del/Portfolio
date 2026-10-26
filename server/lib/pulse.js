// Simulador del widget PULSE: genera una caminata aleatoria del par USDT/BOB
// para la vista previa del hero. Son datos de demostración, no de mercado real.

const HISTORY_SIZE = 24
const EXCHANGES = ['Binance', 'BitByte', 'KuCoin']

const round = (n, d = 2) => Math.round(n * 10 ** d) / 10 ** d
const rand = (min, max) => min + Math.random() * (max - min)

let rate = 9.84
const history = Array.from({ length: HISTORY_SIZE }, (_, i) => round(9.7 + i * 0.006 + rand(-0.02, 0.02), 3))
let orders = []
let lastTick = 0

function tick() {
  rate = round(Math.min(10.4, Math.max(9.4, rate + rand(-0.025, 0.028))), 3)
  history.push(rate)
  if (history.length > HISTORY_SIZE) history.shift()

  const side = Math.random() > 0.5 ? 'Compra' : 'Venta'
  orders.unshift({
    id: Date.now(),
    price: round(rate + (side === 'Compra' ? 0.01 : -0.01)),
    side,
    amount: Math.round(rand(500, 15000) / 50) * 50,
    status: Math.random() > 0.35 ? 'Completada' : 'Emparejada'
  })
  orders = orders.slice(0, 3)
}

export function getPulseSnapshot() {
  // Avanza como máximo un paso cada 2.5 s, sin importar cuántos clientes consulten.
  const now = Date.now()
  if (now - lastTick > 2500 || orders.length === 0) {
    tick()
    lastTick = now
  }

  const first = history[0]
  return {
    demo: true,
    pair: 'USDT/BOB',
    rate: round(rate),
    change: round(((rate - first) / first) * 100, 2),
    history: [...history],
    gasGwei: Math.round(rand(9, 22)),
    exchanges: EXCHANGES.map((name) => {
      const spread = rand(0.01, 0.06)
      return { name, buy: round(rate + spread), sell: round(rate - spread) }
    }),
    orders,
    updatedAt: new Date(now).toISOString()
  }
}
