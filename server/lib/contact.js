import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const MESSAGES_FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'messages.json')
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const LIMIT = 5
const WINDOW_MS = 10 * 60 * 1000
const hits = new Map()

export function isRateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > LIMIT
}

export function validateContact(body = {}) {
  const clean = (v, max) => String(v ?? '').trim().slice(0, max)
  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    type: clean(body.type, 120),
    message: clean(body.message, 4000)
  }
  const errors = {}
  if (data.name.length < 2) errors.name = 'Cuéntame tu nombre o empresa.'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Ese correo no parece válido.'
  if (data.message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  return { data, errors, valid: Object.keys(errors).length === 0 }
}

async function sendMail(entry) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false

  const { default: nodemailer } = await import('nodemailer')
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })
  await transporter.sendMail({
    from: `"Portfolio" <${SMTP_USER}>`,
    to: CONTACT_TO || SMTP_USER,
    replyTo: entry.email,
    subject: `Nuevo mensaje del portfolio — ${entry.name}`,
    text: `Nombre: ${entry.name}\nEmail: ${entry.email}\nTipo: ${entry.type}\n\n${entry.message}`
  })
  return true
}

// Exportamos handleContact activa, pero sin llamar a saveMessage
export async function handleContact(data) {
  const entry = { ...data, receivedAt: new Date().toISOString() }
  
  // await saveMessage(entry) <-- Omitido para Vercel
  
  let emailed = false
  try {
    emailed = await sendMail(entry)
  } catch (err) {
    console.error('[contact] No se pudo enviar el correo:', err.message)
  }
  return { emailed }
}