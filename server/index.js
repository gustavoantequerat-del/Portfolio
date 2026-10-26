import express from 'express'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPortfolio } from './data/portfolio.js'
import { getPulseSnapshot } from './lib/pulse.js'
import { handleContact, isRateLimited, validateContact } from './lib/contact.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

try {
  process.loadEnvFile?.(join(__dirname, '.env'))
} catch {
  // sin .env: se usan los valores por defecto
}

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.get('/api/portfolio', (_req, res) => {
  res.set('Cache-Control', 'public, max-age=60')
  res.json(getPortfolio())
})

app.get('/api/pulse', (_req, res) => {
  res.set('Cache-Control', 'no-store')
  res.json(getPulseSnapshot())
})

app.post('/api/contact', async (req, res) => {
  // Honeypot: los bots suelen rellenar el campo oculto "website".
  if (req.body?.website) return res.json({ ok: true })

  if (isRateLimited(req.ip)) {
    return res.status(429).json({ ok: false, error: 'Demasiados mensajes. Intenta de nuevo en unos minutos.' })
  }

  const { data, errors, valid } = validateContact(req.body)
  if (!valid) return res.status(422).json({ ok: false, errors })

  try {
    const { emailed } = await handleContact(data)
    res.json({ ok: true, emailed })
  } catch (err) {
    console.error('[contact]', err)
    res.status(500).json({ ok: false, error: 'No se pudo guardar el mensaje. Escríbeme directo al correo.' })
  }
})

app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Ruta no encontrada' }))

// En producción Express sirve el build de Vue (client/dist).
const distDir = join(__dirname, '..', 'client', 'dist')
if (existsSync(distDir)) {
  app.use(express.static(distDir, { maxAge: '7d', index: false }))
  app.get('*', (_req, res) => res.sendFile(join(distDir, 'index.html')))
}

app.listen(PORT, () => {
  console.log(`API del portfolio en http://localhost:${PORT}`)
})
