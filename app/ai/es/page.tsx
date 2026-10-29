import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/es`

export const metadata: Metadata = {
  title: { absolute: 'Evaluación de prácticas Reino Unido — Informe de IA gratuito | Eduentry.ai' },
  description:
    'Evaluación de prácticas gratuita con IA para estudiantes de 14 a 18 años. 34 preguntas adaptativas en Tecnología, Empresa, Datos y Marketing. Informe personalizado al instante.',
  keywords: [
    'evaluación preparación prácticas Reino Unido',
    'prácticas gratis estudiantes instituto',
    'informe IA preparación prácticas',
    'prácticas tecnología instituto España',
    'prácticas empresa estudiantes 14 15 16 17 18 años',
    'prácticas análisis de datos instituto',
    'prácticas marketing digital estudiantes',
    'evaluación adaptativa orientación profesional',
    'test aptitud estudiantes gratis',
    'experiencia laboral evaluación instituto',
    'colocación prácticas estudiantes',
    'carta de presentación prácticas estudiantes',
    'prácticas verano jóvenes Reino Unido',
    'evaluación habilidades profesionales adolescentes',
    'informe preparación personalizado estudiantes',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: PAGE_URL, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, ru: `${BASE_URL}/ru`, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'es_ES',
    alternateLocale: ['en_GB', 'tr_TR', 'fr_FR', 'ar_AE', 'ru_RU', 'zh_CN'],
    title: 'Evaluación de prácticas Reino Unido — Informe de IA gratuito | Eduentry.ai',
    description: 'Evaluación de preparación para prácticas gratuita con IA para estudiantes de 14 a 18 años. 34 preguntas adaptativas en 4 áreas. Informe personalizado al instante.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Evaluación de preparación para prácticas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evaluación de prácticas Reino Unido — Informe de IA gratuito | Eduentry.ai',
    description: 'Evaluación de prácticas gratuita con IA para estudiantes de 14 a 18 años. 34 preguntas, informe personalizado al instante.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/es/tecnologia',
  business: '/es/empresa',
  data_analytics: '/es/analisis-de-datos',
  digital_marketing: '/es/marketing-digital',
}

const TRACK_LABELS_ES: Record<string, string> = {
  tech: 'Tecnología',
  business: 'Empresa',
  data_analytics: 'Análisis de datos',
  digital_marketing: 'Marketing digital',
}

const TRACK_DESCRIPTIONS_ES: Record<string, string> = {
  tech: 'Lógica de programación, algoritmos, ciberseguridad, diseño UX y desarrollo de software',
  business: 'Análisis de mercado, alfabetización financiera, casos empresariales y estrategia comercial',
  data_analytics: 'Lectura de gráficos, estadística, razonamiento con tablas, fundamentos de SQL e interpretación de datos',
  digital_marketing: 'SEO, estrategia en redes sociales, marketing de contenidos y planificación de campañas',
}

const PHASES = [
  { n: '01', label: 'Aptitud general',           qs: 10, desc: 'Razonamiento verbal y numérico',               tag: 'Cognitivo' },
  { n: '02', label: 'Conocimientos del sector',  qs: 10, desc: 'Conocimiento aplicado específico del área',    tag: 'Técnico' },
  { n: '03', label: 'Habilidades profesionales', qs: 8,  desc: 'Escenarios reales del entorno laboral (SJT)', tag: 'Comportamental' },
  { n: '04', label: 'Perfil de intereses',        qs: 6,  desc: 'Estilo de trabajo y mapeo de preferencias',   tag: 'Personalidad' },
]

const FAQS = [
  { q: '¿Es gratuita la evaluación?',          a: 'Sí — siempre gratuita para los estudiantes. Sin cargos ocultos, suscripciones ni niveles de pago.' },
  { q: '¿Para quién es?',                       a: 'Para estudiantes de instituto de 14 a 18 años (de 3.º de ESO a 2.º de Bachillerato) que quieran adquirir experiencia profesional.' },
  { q: '¿Cuánto tiempo lleva?',                 a: '34 preguntas en cuatro fases, aproximadamente 20 minutos. La evaluación es completamente reanudable — puedes pausarla y continuarla cuando quieras.' },
  { q: '¿Qué área debo elegir?',                a: 'Al solicitar, puedes ordenar hasta tres preferencias de área. La fase de Perfil de intereses también ayuda a identificar dónde encajas mejor — el informe lo refleja.' },
  { q: '¿Cuándo recibo mi informe de preparación?', a: 'Inmediatamente después de terminar. Una vez que completas las 34 preguntas, la puntuación con IA se ejecuta al instante y el informe queda disponible en tu cuenta — sin esperas.' },
  { q: '¿Puedo usar la evaluación en mi CV?',   a: 'Sí. Tu informe de preparación incluye una puntuación medible y un desglose de habilidades por área que puedes mencionar directamente en tus solicitudes. Muchos de nuestros estudiantes lo incluyen en sus cartas de presentación y entrevistas de trabajo.' },
  { q: '¿Necesito residir en el Reino Unido?',  a: 'La evaluación está abierta a cualquier estudiante de 14 a 18 años. Las prácticas son actualmente en el Reino Unido, por lo que necesitarás poder trabajar allí para la colocación en sí — pero la evaluación y el informe están disponibles para todos.' },
]

const internshipPosts = BLOG_POSTS_ES.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'es',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Evaluación de prácticas Reino Unido — Informe de IA gratuito | Eduentry.ai',
  description: 'Evaluación de preparación para prácticas gratuita con IA para estudiantes de 14 a 18 años. 34 preguntas adaptativas en 4 áreas. Informe personalizado al instante.',
  inLanguage: 'es',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Evaluación de preparación para prácticas',
  url: PAGE_URL,
  description: 'Evaluación adaptativa gratuita de 34 preguntas con IA para estudiantes de instituto de 14 a 18 años. Evalúa aptitud, conocimientos del sector, habilidades profesionales y perfil de intereses en cuatro áreas: Tecnología, Empresa, Análisis de datos y Marketing digital.',
  inLanguage: 'es',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'Estudiantes de instituto de 14 a 18 años' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Evaluación educativa',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo conseguir unas prácticas en el Reino Unido con Eduentry.ai',
  description: 'Evaluación adaptativa gratuita de 34 preguntas para estudiantes de instituto de 14 a 18 años. Cuatro pasos desde el registro hasta la asignación de prácticas.',
  inLanguage: 'es',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Regístrate', text: 'Crea tu cuenta gratuita de Eduentry.ai en menos de un minuto — sin datos de pago.' },
    { '@type': 'HowToStep', position: 2, name: 'Solicita', text: 'Cuéntanos quién eres, tu instituto y tus preferencias de área entre Tecnología, Empresa, Análisis de datos o Marketing digital.' },
    { '@type': 'HowToStep', position: 3, name: 'Completa la evaluación', text: '34 preguntas adaptativas en cuatro fases: Aptitud general, Conocimientos del sector, Habilidades profesionales y Perfil de intereses. Aproximadamente 20 minutos. Reanúdala cuando quieras.' },
    { '@type': 'HowToStep', position: 4, name: 'Recibe tu informe', text: 'Obtén tu informe de preparación personalizado redactado por IA con tu nivel de preparación, desglose por fases y asignación de prácticas.' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function SpanishHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-0 sm:blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              Gratis · 20 minutos · El progreso se guarda automáticamente
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Consigue una</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">experiencia real.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Evaluación adaptativa de 34 preguntas para estudiantes de instituto mayores de 14 años. Descubre tu nivel de preparación en cuatro áreas profesionales y recibe un informe personalizado.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Comenzar evaluación gratis — 20 min
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              Ver un informe de ejemplo
            </a>
          </div>

          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">Resultado de ejemplo — los tuyos son personalizados</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Áreas disponibles</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Cuatro caminos.<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Una evaluación.</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              Comparar todas las áreas →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_ES[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_ES[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      Explorar →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Proceso</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            Tres pasos para conseguirlo.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'Regístrate y solicita',   desc: 'Crea tu cuenta gratuita. Cuéntanos quién eres, tu colegio y tus preferencias de área.' },
              { n: '02', title: 'Completa la evaluación',  desc: '34 preguntas adaptativas en cuatro fases. Reanúdala cuando quieras — sin presión de tiempo.' },
              { n: '03', title: 'Recibe tu informe',       desc: 'Informe de preparación redactado por IA con puntuaciones, insights y tu asignación de prácticas.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Estructura de la evaluación</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Lo que te espera.
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">preguntas</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">Total: 34 preguntas · ~20 minutos · Completamente reanudable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Resultados del informe</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Tu informe.<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Al instante.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                En el momento en que terminas tu última pregunta, la puntuación con IA se ejecuta. Sin esperas. Sin emails. Tu informe completo está en tu cuenta en segundos.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Comenzar la evaluación
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: 'Nivel de preparación — Listo para prácticas, En desarrollo o Necesita apoyo' },
                { icon: '◆', text: 'Párrafo de resumen personalizado redactado por IA' },
                { icon: '◆', text: 'Tarjetas de insights por fase con puntos fuertes y áreas de mejora' },
                { icon: '◆', text: 'Perfil de idoneidad por área que muestra dónde obtienes mayor puntuación' },
                { icon: '◆', text: 'Enlace al informe compartible para solicitudes y cartas de presentación' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Evidencia</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Por qué importa empezar antes.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: 'menos probabilidades de estar en situación NEET a los 19 para estudiantes con 4+ experiencias con empleadores antes de los 16', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'de los empleadores considera importante la experiencia en prácticas al contratar recién graduados', source: 'NACE, 2023' },
              { stat: '70%', desc: 'más tasa de ofertas de trabajo antes de graduarse para estudiantes con experiencia en prácticas', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Investigación</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Últimas del blog.</h2>
              <Link href="https://eduentry.com/es/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                Ver todo →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/es/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Preguntas.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            Gratis para estudiantes · Sin tarjeta
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Solicita ahora.<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">Es gratis.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34 preguntas. 20 minutos. Un informe personalizado con IA y tu primer paso hacia una experiencia real.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            Comenzar evaluación gratis →
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
