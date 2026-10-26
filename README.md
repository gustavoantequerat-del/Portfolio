# Portfolio — Gustavo Antequera

Product Designer & Especialista Web3 · La Paz, Bolivia.

Portfolio personal construido con **Vue 3 + Vite + Tailwind CSS** en el frontend y **Express** en el backend,
con animaciones de scroll, micro-interacciones y personajes animados (cartoons SVG).

## Estructura

```
.
├── client/                  # Vue 3 + Vite + Tailwind
│   ├── public/cv/           # CV en PDF (descargable desde el sitio)
│   └── src/
│       ├── components/      # Secciones (Hero, Proyectos, Experiencia, Stack, Logros, Contacto…)
│       │   └── cartoons/    # Personajes animados en SVG + CSS
│       ├── composables/     # usePortfolio, usePulse, useCountUp, sparkline
│       └── directives/      # v-reveal (animación al hacer scroll)
└── server/                  # API Express
    ├── data/portfolio.js    # ⬅ TODO el contenido del sitio (editar aquí)
    └── lib/                 # simulador PULSE + manejo del formulario de contacto
```

## Puesta en marcha

Requisitos: Node.js 20.12 o superior.

```bash
npm run install:all   # instala raíz, server y client
npm run dev           # API en :3001 + Vite en :5173 (con proxy /api)
```

Abre http://localhost:5173

### Producción

```bash
npm run build         # genera client/dist
npm start             # Express sirve la API y el build en http://localhost:3001
```

## API

| Método | Ruta             | Descripción                                                    |
| ------ | ---------------- | -------------------------------------------------------------- |
| GET    | `/api/portfolio` | Perfil, proyectos, experiencia, stack, certificaciones, logros |
| GET    | `/api/pulse`     | Datos simulados del widget PULSE (USDT/BOB, órdenes, spreads)  |
| POST   | `/api/contact`   | Formulario de contacto (validación, honeypot y rate limit)     |
| GET    | `/api/health`    | Health check                                                   |

Los mensajes de contacto se guardan en `server/data/messages.json`. Para recibirlos también por correo,
copia `server/.env.example` a `server/.env` y completa los datos SMTP (por ejemplo, una contraseña de
aplicación de Gmail).

> El widget PULSE del hero muestra **datos de demostración** generados por el servidor, no precios reales.

## Animaciones y cartoons

- **Avatar** saludando con su laptop en el hero, con burbuja de diálogo.
- **PULSE**: moneda USDT corriendo sobre un gráfico de velas que se dibuja solo.
- **NASA Space Apps**: astronauta flotando con el trofeo del 1er lugar, luna orbitando y estrella fugaz.
- **DeFi**: bóveda con cara que "traga" monedas Ξ ₿ $.
- **Nexum**: birrete saltando sobre un libro con bloques de tokens.
- **OMNIA**: paraguas protegiendo documentos de la lluvia.
- **EcoWash**: furgoneta ecológica avanzando entre burbujas.
- **Contacto**: sobre con corazón que se transforma en avión de papel al enviar.
- **Footer**: llama boliviana con chullo y aguayo caminando.
- **Volver arriba**: cohete que despega.
- Además: reveal on scroll, contadores animados, palabras rotativas en el titular, tarjeta con efecto 3D,
  timeline que se dibuja con el scroll, filtros con transiciones y barra de progreso de lectura.

Todas las animaciones respetan `prefers-reduced-motion`.
