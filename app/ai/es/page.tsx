import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/es`

export const metadata: Metadata = {
  title: 'Evaluación de prácticas Reino Unido — Informe de IA gratuito | Eduentry.ai',
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
    languages: { es: PAGE_URL, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'es_ES',
    alternateLocale: ['en_GB', 'tr_TR'],
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

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
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
  { label: 'Aptitud general',         qs: 10, desc: 'Razonamiento verbal y numérico',               img: '/phases/general-aptitude.jpg' },
  { label: 'Conocimientos del sector', qs: 10, desc: 'Conocimiento aplicado específico del área',    img: '/phases/domain-knowledge.jpg' },
  { label: 'Habilidades profesionales', qs: 8, desc: 'Escenarios reales del entorno laboral (SJT)', img: '/phases/workplace-skills.jpg' },
  { label: 'Perfil de intereses',      qs: 6,  desc: 'Estilo de trabajo y mapeo de preferencias',   img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: '¿Es gratuita la evaluación?',          a: 'Sí — siempre gratuita para los estudiantes. Sin cargos ocultos, suscripciones ni niveles de pago.' },
  { q: '¿Para quién es?',                       a: 'Para estudiantes de instituto de 14 a 18 años (de 3.º de ESO a 2.º de Bachillerato) que quieran adquirir experiencia profesional.' },
  { q: '¿Cuánto tiempo lleva?',                 a: '34 preguntas en cuatro fases, aproximadamente 35 minutos. La evaluación es completamente reanudable — puedes pausarla y continuarla cuando quieras.' },
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
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo conseguir unas prácticas en el Reino Unido con Eduentry.ai',
  description: 'Evaluación adaptativa gratuita de 34 preguntas para estudiantes de instituto de 14 a 18 años. Cuatro pasos desde el registro hasta la asignación de prácticas.',
  inLanguage: 'es',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Regístrate', text: 'Crea tu cuenta gratuita de Eduentry.ai en menos de un minuto — sin datos de pago.' },
    { '@type': 'HowToStep', position: 2, name: 'Solicita', text: 'Cuéntanos quién eres, tu instituto y tus preferencias de área entre Tecnología, Empresa, Análisis de datos o Marketing digital.' },
    { '@type': 'HowToStep', position: 3, name: 'Completa la evaluación', text: '34 preguntas adaptativas en cuatro fases: Aptitud general, Conocimientos del sector, Habilidades profesionales y Perfil de intereses. Aproximadamente 35 minutos. Reanúdala cuando quieras.' },
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
    <main className="flex-1" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            Con IA · Gratuita · 35 minutos
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Consigue unas<br />prácticas reales.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            Evaluación adaptativa de 34 preguntas diseñada para estudiantes de instituto mayores de 14 años. Descubre tu nivel de preparación en cuatro áreas profesionales y obtén un informe personalizado con IA.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Solicitar gratis →
            </Link>
          </div>
          <p className="text-xs text-[#86868b] mt-6">Gratuita para estudiantes · Sin tarjeta · Resultados en 35 minutos</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Áreas disponibles</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16 leading-tight">
            Cuatro caminos.<br />Una evaluación.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_ES[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_ES[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_ES[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">Saber más →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">El proceso</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Tu colocación en cuatro pasos.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Regístrate',             desc: 'Crea tu cuenta gratuita en menos de un minuto.' },
              { n: '02', title: 'Solicita',               desc: 'Cuéntanos quién eres, tu colegio y tus preferencias de área.' },
              { n: '03', title: 'Completa la evaluación', desc: '34 preguntas adaptativas en cuatro fases. Continúa cuando quieras.' },
              { n: '04', title: 'Recibe tu informe',      desc: 'Obtén tu informe de preparación personalizado con IA y tu asignación de colocación.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">La evaluación</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Lo que te espera.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">preguntas</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">Total: 34 preguntas · ~35 minutos · Completamente reanudable entre sesiones</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Resultados</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Lo que obtienes.
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                'Nivel de preparación — Listo para prácticas, En desarrollo o Necesita apoyo',
                'Párrafo de resumen personalizado redactado por IA',
                'Tarjetas de insights con puntos fuertes y áreas de mejora para cada fase',
                'Perfil de idoneidad por área que muestra dónde obtienes mayor puntuación',
                'Enlace al informe compartible para solicitudes y cartas de presentación',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">La evidencia</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Por qué importa empezar antes.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: 'Los estudiantes con 4 o más experiencias con empleadores antes de los 16 años tienen 5 veces menos probabilidades de estar en situación NEET a los 19', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'El 83% de los empleadores considera importante la experiencia en prácticas al contratar recién graduados', source: 'NACE, 2023' },
              { stat: '70%', desc: 'Los estudiantes con experiencia en prácticas reciben ofertas de trabajo antes de graduarse a una tasa un 70% mayor', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Investigación</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
              Últimas entradas del blog.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/es/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/es/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                Ver todos los artículos sobre prácticas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">Preguntas frecuentes.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Solicita ahora.<br />Es gratis.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 preguntas. 35 minutos. Informe personalizado con IA y el primer paso hacia unas prácticas reales.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            Empezar la solicitud →
          </Link>
        </div>
      </section>
    </main>
  )
}
