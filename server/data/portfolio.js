// Contenido del portfolio basado en el CV de Gustavo Antequera.
// Editar aquí actualiza todo el sitio (el cliente lo consume vía /api/portfolio).

export const profile = {
  name: 'Gustavo Antequera',
  initials: 'GA',
  role: 'Product Designer & Especialista Web3',
  shortRole: 'Product & Web3 UX',
  location: 'La Paz, Bolivia',
  timezone: 'UTC-4',
  available: true,
  email: 'gustavo.antequera.t@gmail.com',
  phone: '+591 77222870',
  whatsapp: 'https://wa.me/59177222870',
  linkedin: 'https://linkedin.com/in/gustavo-antequeramolina',
  linkedinHandle: 'in/gustavo-antequeramolina',
  cvUrl: '/cv/CV_Gustavo_Antequera_ES.pdf',
  headline: {
    lead: 'Diseñando interfaces que hacen la complejidad',
    highlight: ['amigable y humana.', 'clara y confiable.', 'accesible para todos.']
  },
  summary:
    'Ingeniero Informático (UMSA) especializado en diseño de producto y desarrollo de soluciones web modernas y ecosistemas descentralizados (Web3). Combino interfaces intuitivas (UX/UI) con una ingeniería backend robusta en DeFi, tokenización y SaaS de datos en vivo.',
  highlights: [
    { icon: 'trophy', tone: 'amber', text: '1er Lugar NASA Space Apps 2025' },
    { icon: 'security', tone: 'primary', text: 'DeFi, Tokenización & Riesgo Cripto' },
    { icon: 'school', tone: 'secondary', text: 'Ingeniería Informática UMSA' }
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Avanzado (Técnico)' }
  ]
}

export const stats = [
  { value: 1, suffix: 'er', label: 'Lugar NASA Space Apps', detail: 'La Paz 2025 · Simulaciones 3D', tone: 'secondary' },
  { value: 6, suffix: '', label: 'Productos Construidos', detail: 'SaaS, DeFi, ERP, LMS & Landing', tone: 'primary' },
  { value: 11, suffix: '', label: 'Certificaciones', detail: 'Web3, DeFi, Cloud & Diseño', tone: 'on-surface' },
  { value: 2026, suffix: '', label: 'Egresado UMSA', detail: 'Lic. Ingeniería Informática', tone: 'amber' }
]

export const projects = [
  {
    id: 'pulse',
    featured: true,
    title: 'PULSE — P2P Crypto Market Intelligence',
    org: 'Blockfinity Advisors',
    badge: 'Destacado 2026',
    accent: 'primary',
    cartoon: 'pulse',
    summary:
      'SaaS que muestra índices del mercado P2P cripto con gráficas en vivo de exchanges como Binance, BitByte y KuCoin. Seguimiento de spreads y precios en moneda local (BOB/USDT) pensado para decisiones rápidas.',
    metrics: [
      { value: 'En vivo', label: 'Gráficas' },
      { value: '3+', label: 'Exchanges P2P' },
      { value: 'BOB/USDT', label: 'Mercado local' }
    ],
    tags: ['Web3 SaaS', 'Real-Time Data', 'Dashboards', 'Design System'],
    cta: 'Explorar el caso completo',
    details: {
      role: 'Desarrollador Web3 & Product Designer',
      period: '2025 – 2026',
      challenge:
        'Los precios P2P de cripto en Bolivia cambian constantemente y están dispersos entre varios exchanges. El reto era reunirlos en una sola vista legible y en tiempo real.',
      contributions: [
        'Desarrollo del SaaS con gráficas en vivo de múltiples exchanges P2P.',
        'Diseño de índices y comparativas de spreads para el par BOB/USDT.',
        'Componentes de dashboard reutilizables para monitoreo de riesgo cripto.'
      ],
      stack: ['Vue / React', 'Vite', 'Node.js', 'Figma', 'APIs de exchanges']
    }
  },
  {
    id: 'nasa',
    title: 'NASA Space Apps — Simulaciones 3D Interactivas',
    org: 'NASA Space Apps Challenge',
    badge: '🏆 1er Lugar La Paz 2025',
    accent: 'secondary',
    cartoon: 'astronaut',
    summary:
      'Proyecto ganador de la sede La Paz: simulaciones 3D interactivas construidas con datos abiertos de la NASA, con una interfaz pensada para explorar fenómenos espaciales de forma intuitiva.',
    tags: ['3D Web', 'Datos NASA', 'UX Prototyping', 'Hackathon'],
    cta: 'Explorar solución ganadora',
    details: {
      role: 'Diseñador & Desarrollador',
      period: 'Octubre 2025',
      challenge:
        'Convertir datos científicos complejos en una experiencia interactiva comprensible en el tiempo límite de un hackathon.',
      contributions: [
        'Desarrollo de las simulaciones 3D interactivas.',
        'Prototipado UI/UX y narrativa visual de la solución.',
        'Presentación final ante el jurado: 1er lugar en La Paz.'
      ],
      stack: ['JavaScript', 'WebGL / 3D', 'Figma', 'Datos abiertos NASA']
    }
  },
  {
    id: 'defi',
    title: 'Dashboards de Riesgo Cripto & DeFi',
    org: 'Blockfinity Advisors',
    badge: 'Arquitectura Web3',
    accent: 'primary',
    cartoon: 'vault',
    summary:
      'Dashboards de monitoreo de riesgo cripto, arquitecturas DeFi y tokenización. Interfaces que traducen métricas complejas en información clara para inversores y equipos internos.',
    tags: ['DeFi UX', 'Tokenización', 'Riesgo Cripto', 'Figma'],
    cta: 'Ver arquitectura & riesgo',
    details: {
      role: 'Product Designer',
      period: '2026 – Actualidad',
      challenge:
        'Hacer comprensibles conceptos como colateral, liquidez y riesgo de contraparte sin perder precisión técnica.',
      contributions: [
        'Diseño UX/UI para plataformas DeFi y de riesgo cripto.',
        'Definición del sistema de diseño, wireframes y prototipos interactivos.',
        'Visualizaciones para modelos de tokenización.'
      ],
      stack: ['Figma', 'Design Systems', 'Prototipado', 'DeFi']
    }
  },
  {
    id: 'nexum',
    title: 'Nexum LMS & Landing Corporativa',
    org: 'Blockfinity Advisors',
    badge: 'Educación Web3',
    accent: 'secondary',
    cartoon: 'nexum',
    summary:
      'Landing page corporativa de Blockfinity y landing de Nexum, el LMS de la empresa con cursos de matriz de riesgo Web3, DeFi y estrategias de tokenización.',
    tags: ['Landing Page', 'LMS', 'Responsive', 'Branding'],
    cta: 'Ver landing & LMS',
    details: {
      role: 'Desarrollador Web3 — Pasante',
      period: 'Nov 2025 – Jun 2026',
      challenge: 'Comunicar una oferta educativa técnica (Web3) de forma cálida y confiable.',
      contributions: [
        'Desarrollo de la landing page corporativa de Blockfinity.',
        'Desarrollo de la landing page de Nexum, el LMS de la empresa.',
        'Componentes responsivos y consistentes con la identidad de marca.'
      ],
      stack: ['Vue', 'Vite', 'CSS moderno', 'Figma']
    }
  },
  {
    id: 'omnia',
    title: 'OMNIA — ERP / CRM para Corredora de Seguros',
    org: 'InAdvance (DAMA International)',
    badge: 'B2B Enterprise',
    accent: 'on-surface',
    cartoon: 'omnia',
    summary:
      'Colaboración en Omnia, un ERP/CRM para la corredora de seguros InAdvance: desarrollo web y gestión de datos de los módulos de la plataforma.',
    tags: ['Enterprise ERP', 'Gestión de Datos', 'B2B Workflow', 'SQL'],
    cta: 'Explorar módulos',
    details: {
      role: 'Desarrollador y Asistente Web de Datos',
      period: 'Feb 2026 – Jun 2026',
      challenge: 'Ordenar grandes volúmenes de información de pólizas, clientes y procesos en módulos claros.',
      contributions: [
        'Desarrollo web de módulos de la plataforma Omnia.',
        'Gestión y modelado de datos de los módulos.',
        'Trabajo colaborativo con el equipo de InAdvance.'
      ],
      stack: ['Desarrollo Web', 'SQL', 'Modelado de datos']
    }
  },
  {
    id: 'ecowash',
    title: 'EcoWash — Landing Full Stack',
    org: 'Freelance',
    badge: 'Consumer Web',
    accent: 'secondary',
    cartoon: 'eco',
    summary:
      'Diseño y desarrollo full-stack de la landing page de EcoWash: frontend responsivo e integración con backend para un servicio de lavado ecológico.',
    tags: ['Full Stack', 'Responsive', 'Mobile First', 'Conversión'],
    cta: 'Ver caso EcoWash',
    details: {
      role: 'Desarrollador Full Stack',
      period: 'Freelance',
      challenge: 'Una landing atractiva y rápida que convierta visitas móviles en clientes.',
      contributions: [
        'Diseño de la landing y su identidad visual.',
        'Frontend responsivo, mobile first.',
        'Integración con backend.'
      ],
      stack: ['HTML / CSS / JS', 'Node.js', 'Figma']
    }
  }
]

export const experience = [
  {
    company: 'Blockfinity Advisors',
    role: 'Product Designer',
    period: 'Jul 2026 — Actualidad',
    current: true,
    tone: 'primary',
    summary: 'Diseño de producto para soluciones cripto, DeFi y riesgo:',
    bullets: [
      'Diseño de experiencias e interfaces de usuario (UX/UI) para plataformas DeFi y de riesgo cripto.',
      'Definición del sistema de diseño, wireframes y prototipos interactivos.'
    ],
    tags: ['Figma', 'Design Systems', 'DeFi', 'Prototipado']
  },
  {
    company: 'Blockfinity Advisors',
    role: 'Desarrollador Web3 — Pasante',
    period: 'Nov 2025 — Jun 2026',
    tone: 'neutral',
    summary: 'Construcción de productos web para el ecosistema Web3 de la empresa:',
    bullets: [
      'Desarrollo de la landing page corporativa y de la landing page de Nexum, el LMS de la empresa.',
      'Desarrollo de PULSE, un SaaS que muestra índices del mercado P2P con gráficas en vivo de exchanges (Binance, BitByte, KuCoin, etc.).',
      'Dashboards de monitoreo de riesgo cripto, arquitecturas DeFi y tokenización.'
    ],
    tags: ['Vue', 'React', 'Node.js', 'Web3']
  },
  {
    company: 'InAdvance (DAMA International)',
    role: 'Desarrollador y Asistente Web de Datos',
    period: 'Feb 2026 — Jun 2026',
    tone: 'neutral',
    summary: 'Plataforma OMNIA ERP/CRM para corredora de seguros:',
    bullets: [
      'Colaboración en el desarrollo de Omnia, un ERP/CRM para la corredora de seguros InAdvance.',
      'Desarrollo web y gestión de datos de los módulos de la plataforma.'
    ],
    tags: ['Enterprise ERP', 'SQL', 'Gestión de datos']
  },
  {
    company: 'EcoWash',
    role: 'Desarrollador Full Stack',
    period: 'Freelance',
    tone: 'neutral',
    summary: 'Proyecto freelance de punta a punta:',
    bullets: [
      'Diseño y desarrollo full-stack de la landing page de EcoWash: frontend responsivo e integración con backend.'
    ],
    tags: ['Full Stack', 'Responsive', 'Landing']
  },
  {
    company: 'Proyecto Independiente',
    role: 'Diseñador y Desarrollador Web Junior',
    period: 'May 2023 — Dic 2024',
    tone: 'secondary',
    summary: 'Diseño y desarrollo de productos digitales interactivos:',
    bullets: [
      'Ganador del NASA Space Apps Challenge: desarrollo de simulaciones 3D interactivas.',
      'Maquetación y prototipado UI/UX avanzado.'
    ],
    tags: ['3D Web', 'UI/UX', 'Prototipado']
  }
]

export const skills = [
  {
    id: 'ux',
    index: '01',
    title: 'Product & UX/UI',
    icon: 'design_services',
    tone: 'primary',
    description: 'Diseño de producto, sistemas de diseño, wireframes y prototipos interactivos.',
    items: ['Figma', 'Adobe XD', 'Diseño de Producto (UX/UI)', 'Diseño Gráfico', 'Design Systems', 'Jira'],
    footer: 'Wireframes → Prototipo → Sistema'
  },
  {
    id: 'web3',
    index: '02',
    title: 'Web3 & DeFi',
    icon: 'currency_bitcoin',
    tone: 'secondary',
    description: 'Modelos DeFi, tokenización y matrices de riesgo para ecosistemas descentralizados.',
    items: ['Fundamentos DeFi', 'Tokenización', 'Riesgo Cripto', 'Tokens de Ethereum', 'Mercados P2P'],
    footer: 'Especialidad: P2P & Riesgo'
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend',
    icon: 'code',
    tone: 'primary',
    description: 'Interfaces reactivas y fieles al diseño, del prototipo en Figma al código.',
    items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Angular', 'Next.js', 'Vite'],
    footer: 'Component-Driven'
  },
  {
    id: 'backend',
    index: '04',
    title: 'Backend & Sistemas',
    icon: 'terminal',
    tone: 'amber',
    description: 'Bases computacionales de la UMSA: APIs, bases de datos y lenguajes de sistemas.',
    items: ['Node.js', 'PHP', 'Laravel', 'SQL', 'Python', 'C', 'C++', 'Java', 'Git'],
    footer: 'Fundamento: Ing. Informática UMSA'
  }
]

export const education = [
  {
    title: 'Lic. en Ingeniería Informática',
    school: 'Universidad Mayor de San Andrés (UMSA)',
    period: '2023 – 2026',
    detail: 'Egresado. Participación en Microsoft Azure UMSA, GDSC y CLEI 2023.'
  },
  {
    title: 'Bachiller en Humanidades',
    school: 'Colegio Rosa Gattorno',
    period: 'Secundaria',
    detail: 'Educación secundaria concluida previa al ingreso a la universidad.'
  }
]

export const certifications = [
  { name: 'Matriz de Riesgo Web3', issuer: 'Nexum', icon: 'verified', category: 'web3' },
  { name: 'DeFi y Banca', issuer: 'Nexum', icon: 'account_balance', category: 'web3' },
  { name: 'Estrategias de Tokenización', issuer: 'Nexum', icon: 'token', category: 'web3' },
  { name: 'Tokens de Ethereum', issuer: 'Platzi', icon: 'deployed_code', category: 'web3' },
  { name: 'Cisco Networking Academy', issuer: 'Cisco', icon: 'lan', category: 'tech' },
  { name: 'Microsoft Azure NASA', issuer: 'Microsoft', icon: 'cloud_done', category: 'tech' },
  { name: 'Certificado CLEI 2023', issuer: 'CLEI', icon: 'groups', category: 'tech' },
  { name: 'Técnico Medio en Diseño Gráfico', issuer: 'Diseño', icon: 'palette', category: 'design' },
  { name: 'Técnico Superior en Inglés', issuer: 'Idiomas', icon: 'translate', category: 'design' },
  { name: 'Enseñanza Superior', issuer: 'EPA', icon: 'school', category: 'design' },
  { name: 'Liderazgo / Habilidades Blandas', issuer: 'Jazz', icon: 'diversity_3', category: 'design' }
]

export const achievements = [
  {
    icon: 'trophy',
    title: '1er Lugar — NASA Space Apps Challenge',
    detail: 'Sede La Paz, 2025. Simulaciones 3D interactivas con datos abiertos de la NASA.',
    year: '2025',
    tone: 'secondary'
  },
  {
    icon: 'groups',
    title: 'Organización CLEI 2023',
    detail: 'Colaboración en el Congreso Latinoamericano de Informática.',
    year: '2023',
    tone: 'primary'
  },
  {
    icon: 'military_tech',
    title: 'Presidente de Curso',
    detail: 'Liderazgo estudiantil en el Colegio Rosa Gattorno.',
    year: 'Colegio',
    tone: 'amber'
  }
]

export const projectTypes = [
  'Diseño de Producto Web3 & DeFi',
  'Design System en Figma',
  'SaaS / Dashboard de datos en vivo',
  'Landing page o sitio Full Stack',
  'Rol Full-Time / Consultoría'
]

export function getPortfolio() {
  return { profile, stats, projects, experience, skills, education, certifications, achievements, projectTypes }
}
