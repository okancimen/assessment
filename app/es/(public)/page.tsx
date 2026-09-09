import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import TestimonialsCarouselES from '@/components/landing/TestimonialsCarouselES'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — Plataforma de evaluación académica y prácticas',
  description:
    'Evaluaciones adaptativas gratuitas para estudiantes en todas las etapas — comparación académica internacional para edades de 6 a 17 años, y evaluación de prácticas para estudiantes de instituto mayores de 14 años.',
  keywords: [
    'evaluación académica gratuita niños',
    'referencia internacional niños Reino Unido',
    'puntuación estandarizada percentil',
    'evaluación adaptativa PISA GCSE',
    'preparación 11+ prueba gratuita',
    'referencia académica 6 17 años',
    'evaluación preparación prácticas instituto',
    'prueba aptitud prácticas instituto',
    'evaluación orientación profesional estudiantes',
    'prueba gratuita evaluación niños',
    'razonamiento verbal no verbal prueba',
  ],
  alternates: {
    canonical: `${BASE_URL}/es`,
    languages: { es: `${BASE_URL}/es`, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/es`,
    title: 'Eduentry — Plataforma de evaluación académica y prácticas',
    description: 'Evaluaciones adaptativas gratuitas basadas en la misma ciencia que PISA, GCSE y SAT. Comparación académica para edades de 6 a 17 años y prácticas para mayores de 14.',
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — Plataforma de evaluación académica y prácticas' }],
  },
}

const SUBJECT_LABELS_ES: Record<string, string> = {
  english:             'Inglés',
  mathematics:         'Matemáticas',
  verbal_reasoning:    'Razonamiento Verbal',
  nonverbal_reasoning: 'Razonamiento No Verbal',
}

const SUBJECT_DESCRIPTIONS_ES: Record<string, string> = {
  english:             'Comprensión, gramática, ortografía y puntuación',
  mathematics:         'Operaciones numéricas, álgebra, geometría y manejo de datos',
  verbal_reasoning:    'Resolución de problemas con palabras y pensamiento crítico',
  nonverbal_reasoning: 'Reconocimiento de patrones usando formas y elementos visuales abstractos',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}


const BELL_SUBJECTS_ES = [
  { score: 103, label: 'Inglés',     color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'Mates',      color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'Verbal',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'No-Verb.',   color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_ES = [
  { q: '¿Es gratuito Eduentry?', a: 'Sí, completamente gratuito. Sin suscripciones, cargos ocultos ni niveles premium. Crea una cuenta gratuita, añade el perfil de tu hijo y empieza la evaluación sin coste alguno.' },
  { q: '¿Qué materias cubre la evaluación académica?', a: 'Inglés (comprensión lectora, gramática, vocabulario), Matemáticas (aritmética, álgebra, geometría, resolución de problemas), Razonamiento Verbal (analogías, clasificaciones, secuencias) y Razonamiento No Verbal (patrones, razonamiento espacial, matrices). Cada materia tiene 15 preguntas adaptativas.' },
  { q: '¿Qué es una clasificación percentil?', a: 'Una clasificación percentil muestra cómo se compara tu hijo con todos los niños de su misma edad. Una puntuación en el percentil 80 significa que tu hijo rindió mejor que el 80% de los niños de esa edad. Eduentry usa una escala estandarizada con media 100 y desviación típica 15 — la misma escala usada por PISA y la mayoría de evaluaciones profesionales.' },
  { q: '¿Qué es la evaluación de prácticas?', a: 'Una evaluación adaptativa separada de 34 preguntas para estudiantes de instituto mayores de 14 años. Evalúa aptitud general, conocimientos del sector, habilidades profesionales y perfil de intereses en cuatro áreas: Tecnología, Empresa, Análisis de datos y Marketing digital. Los resultados incluyen un informe de preparación personalizado e información sobre la orientación profesional generada por IA.' },
  { q: '¿Puedo usar Eduentry para preparar el 11+?', a: 'Sí. Las cuatro materias — Inglés, Matemáticas, Razonamiento Verbal y Razonamiento No Verbal — reflejan directamente la estructura del examen 11+ utilizado por las escuelas de gramática en Inglaterra. Eduentry te da una puntuación estandarizada y una clasificación percentil para que sepas exactamente dónde está tu hijo antes del examen real.' },
  { q: '¿Qué puntuación se considera buena?', a: 'Una puntuación de 100 es exactamente la media. 95–109 es el rango medio, 110–119 es Por encima de la media, y 120+ es Excepcional. Para el acceso a escuelas de gramática mediante el 11+, las puntuaciones competitivas son típicamente 115 o más — aunque las escuelas más selectivas en zonas como Londres exigen 127+.' },
  { q: '¿Cuánto tiempo lleva cada evaluación?', a: 'La evaluación académica tiene 60 preguntas en 4 materias — la mayoría de los niños la completan en 60–90 minutos. La evaluación de prácticas tiene 34 preguntas — la mayoría de los estudiantes la terminan en unos 35 minutos. El progreso se guarda automáticamente, así que ambas se pueden pausar y reanudar en cualquier momento.' },
  { q: '¿Cómo funciona la tecnología adaptativa?', a: 'Eduentry usa la Teoría de Respuesta al Ítem Logística de 2 Parámetros (2PL) con estimación MAP — el mismo modelo usado en PISA, GCSE y SAT. Después de cada respuesta, el sistema actualiza su estimación de la habilidad del estudiante y selecciona la siguiente pregunta para maximizar la precisión de medición.' },
  { q: '¿Puedo añadir más de un hijo?', a: 'Sí. Una sola cuenta de padres puede incluir múltiples perfiles de hijos. Cada hijo tiene su propio historial de evaluaciones, puntuaciones y recomendaciones personalizadas. No hay límite en el número de hijos que puedes añadir.' },
  { q: '¿Son privados mis datos?', a: 'Sí. Todos los datos se almacenan de forma segura con seguridad a nivel de fila — solo tú puedes acceder a tus resultados. No vendemos ni compartimos datos con terceros. El servicio cumple plenamente con el RGPD.' },
]

const FAQ_SCHEMA_ES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ES.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

export default function SpanishHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_ES) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            Evaluaciones para cada etapa del aprendizaje
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            La evaluación correcta,
            <br />
            <span className="text-[#4F46E5]">en el momento correcto.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Evaluaciones adaptativas gratuitas basadas en la misma ciencia que PISA, GCSE y SAT.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                Evaluación Académica
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                ¿Cómo se compara tu hijo a nivel mundial?
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                Comparado con los estándares del Reino Unido, EE.UU., PISA e IB — puntuaciones estandarizadas
                y clasificaciones percentiles en Inglés, Matemáticas, Razonamiento Verbal y No Verbal.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60 preguntas adaptativas</span>
                <span>·</span>
                <span>4 materias</span>
                <span>·</span>
                <span>De 6 a 17 años</span>
                <span>·</span>
                <span>Gratis</span>
              </div>
              <CtaLink
                href="/es/auth/register"
                label="hero_academic_es"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                Empezar evaluación gratuita
              </CtaLink>
              <Link href="#academica" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                Saber más ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  Evaluación de Prácticas
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Nuevo
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                ¿Está tu estudiante listo para el mundo laboral?
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                Una evaluación adaptativa de 34 preguntas sobre aptitud, conocimientos del sector, habilidades
                profesionales y perfil de intereses. Informe de preparación personalizado e información de IA sobre la carrera.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34 preguntas adaptativas</span>
                <span>·</span>
                <span>4 áreas profesionales</span>
                <span>·</span>
                <span>14+ años</span>
                <span>·</span>
                <span>Gratis</span>
              </div>
              <Link
                href="/es"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Conocer el programa
              </Link>
              <Link href="#practicas" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                Saber más ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          Basada en la misma ciencia que PISA, GCSE &amp; SAT &nbsp;·&nbsp; Cumple con el RGPD &nbsp;·&nbsp; Gratuita
        </p>
      </section>

      {/* ── Social proof ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialsCarouselES />
        </div>
      </section>

      {/* ── Academic section ──────────────────────────────────────────────── */}
      <section id="academica" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">Evaluación Académica · De 6 a 17 años</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                Descubre dónde está tu hijo<br />a nivel internacional.
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                Una evaluación adaptativa gratuita que mide Inglés, Matemáticas, Razonamiento Verbal y No Verbal
                comparado con los estándares del Reino Unido, EE.UU., PISA e IB. Los resultados incluyen una puntuación
                estandarizada, clasificación percentil y recomendaciones generadas por IA.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/es/auth/register"
                  label="academic_section_es"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Empezar evaluación gratuita
                </CtaLink>
                <Link href="/es/metodologia" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  Cómo funciona la puntuación →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">Resultado de muestra</p>
                    <p className="font-bold text-white mt-1">Emma · 11 años</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Por encima de la media</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Inglés',                  score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Matemáticas',              score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Raz. Verbal',              score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'Raz. No Verbal',           score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">Desarrollado por</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_ES} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Cuatro materias. Una imagen global.
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              Las cuatro áreas evaluadas por PISA, TIMSS y los currículos nacionales del Reino Unido y EE.UU. —
              cada una se adapta en dificultad para identificar el nivel exacto de tu hijo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_ES[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_ES[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="metodologia" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">La ciencia detrás de la puntuación</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Basada en la misma ciencia que<br />las evaluaciones internacionales.
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              Eduentry utiliza los mismos modelos psicométricos que PISA, GCSE y SAT —
              para que los resultados de tu hijo sean directamente comparables con los estándares internacionales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Modelo TRI de 2 Parámetros', desc: 'Cada pregunta tiene una dificultad y discriminación calibradas. Las puntuaciones reflejan la dificultad de las preguntas respondidas correctamente — no sólo el recuento bruto.', tag: 'Usado en PISA · SAT · GCSE', color: '#4F46E5' },
              { title: 'Algoritmo Adaptativo en Tiempo Real', desc: 'Las preguntas se seleccionan usando la Información de Fisher para maximizar la precisión de medición. Cada respuesta actualiza la estimación de habilidad y selecciona la siguiente pregunta óptima.', tag: 'Evaluación Adaptativa por Ordenador', color: '#0D9488' },
              { title: 'Comparación Internacional', desc: 'Las puntuaciones usan la misma escala media-100, DT-15 que PISA. Los resultados se mapean al Currículo Nacional del Reino Unido, expectativas de grado de EE.UU., niveles de competencia PISA y preparación para el IB.', tag: 'Reino Unido · EE.UU. · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">Qué significa la puntuación</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Necesita apoyo',         color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'Por debajo de la media', color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Media',                  color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Por encima de la media', color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Excepcional',            color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              El 68% de los niños puntúa entre 85–115 (dentro de 1 desviación típica de la media)
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section id="como-funciona" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Evaluación Académica · Fácil de empezar</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Del registro a los resultados<br />en menos de dos horas.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Crea una cuenta gratuita', desc: 'Regístrate como padre/madre y añade el nombre y fecha de nacimiento de tu hijo. La evaluación se adapta automáticamente a su edad exacta.' },
              { step: '02', title: 'Tu hijo hace 4 pruebas adaptativas', desc: '60 preguntas en cuatro materias, realizadas en casa a su propio ritmo. Cada pregunta se adapta — más difícil con respuestas correctas, más fácil con incorrectas.' },
              { step: '03', title: 'Descubre el contexto global', desc: 'Puntuaciones estandarizadas, referencias internacionales para el Reino Unido, EE.UU., PISA e IB, recomendaciones generadas por IA e informe imprimible.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/es/auth/register" label="how_it_works_es" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Empezar evaluación gratuita →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ────────────────────────────────────────────── */}
      <section id="practicas" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Evaluación de Prácticas · Nuevo
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Descubre tu preparación para las prácticas.
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              Una evaluación adaptativa de 34 preguntas para estudiantes de instituto mayores de 14 años. Descubre tu aptitud,
              fortalezas por área, habilidades profesionales y el área más adecuada para ti — con un informe de IA personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Crea una cuenta de estudiante gratuita', desc: 'Regístrate tú mismo o acepta la invitación de tus padres. Rellena tu colegio, curso, preferencias de área y una breve declaración personal sobre tus objetivos.' },
              { step: '02', title: 'Completa 4 fases de evaluación', desc: 'Aptitud general, conocimientos del sector, habilidades profesionales (SJT) y perfil de intereses — 34 preguntas adaptativas en total. Completamente reanudable, lleva unos 35 minutos.' },
              { step: '03', title: 'Recibe tu informe de preparación', desc: 'Obtén tu nivel de preparación para prácticas, un resumen de tus fortalezas generado por IA y perspectivas personalizadas por fase sobre aptitud, área y habilidades profesionales.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Tecnología',         color: '#4F46E5' },
              { label: 'Empresa',            color: '#0D9488' },
              { label: 'Análisis de datos',  color: '#7C3AED' },
              { label: 'Marketing digital',  color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/internship/apply" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Solicitar evaluación de prácticas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What you get ──────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">Qué obtienes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">Evaluación Académica</p>
              <ul className="space-y-3">
                {[
                  'Puntuación estandarizada en una escala de 85–130',
                  'Clasificación percentil por edad exacta',
                  'Desglose por materia en las 4 áreas',
                  'Referencias internacionales — Reino Unido, EE.UU., PISA, IB',
                  'Recomendaciones de estudio generadas por IA',
                  'Informe completo imprimible',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/es/auth/register" label="what_you_get_academic_es" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  Empezar gratis →
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">Evaluación de Prácticas</p>
              <ul className="space-y-3">
                {[
                  'Nivel de preparación — Listo para prácticas / En desarrollo / Necesita apoyo',
                  'Párrafo de resumen de carrera generado por IA',
                  'Perspectivas por fase — aptitud, área, habilidades profesionales',
                  'Coincidencia de área en las 4 áreas profesionales',
                  'Fortalezas personalizadas y áreas de mejora',
                  'Informe que puedes usar en tu solicitud universitaria',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <Link href="/internship/apply" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  Solicitar evaluación →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">Preguntas.</h2>
          </div>
          <div className="space-y-2">
            {FAQ_ES.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            ¿Quieres entender la metodología de puntuación?{' '}
            <Link href="/es/metodologia" className="text-[#4F46E5] hover:underline font-medium">
              Lee cómo funciona Eduentry →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">Lo último del blog</h2>
            <Link href="/es/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">Ver todo →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_ES.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/es/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">Evaluación Académica</p>
            <h2 className="text-2xl font-bold text-white mb-3">Descubre dónde está tu hijo — a nivel global.</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">Contexto internacional completo en menos de 2 horas.</p>
            <CtaLink href="/es/auth/register" label="bottom_cta_academic_es" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Empezar evaluación gratuita →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Evaluación de Prácticas</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Descubre la preparación para prácticas de tu estudiante.</h2>
            <p className="text-[#636366] text-sm mb-8">Informe personalizado e información de IA en 35 minutos.</p>
            <Link href="/internship/apply" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              Solicitar evaluación →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
