import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Prácticas de Instituto Gratuitas — Evaluación de Preparación | Eduentry',
  description:
    'Evaluación adaptativa gratuita de 34 preguntas para estudiantes de instituto desde 14 años. Descubre tu área ideal — Tecnología, Empresa, Datos o Marketing Digital — en 35 minutos. Informe personalizado instantáneo.',
  keywords: [
    'prácticas instituto',
    'prácticas empresa estudiante',
    'prácticas verano instituto',
    'cómo encontrar prácticas',
    'evaluación prácticas estudiante',
    'experiencia laboral instituto',
    'prácticas tecnología instituto',
    'prácticas marketing digital instituto',
    'prácticas datos instituto',
    'preparar prácticas empresa',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/practicas`,
    languages: {
      es: `${BASE_URL}/es/practicas`,
      'en-GB': `${BASE_URL}/internship`,
      tr: `${BASE_URL}/tr/staj`,
      fr: `${BASE_URL}/fr/stage`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Prácticas de Instituto Gratuitas — Evaluación de Preparación | Eduentry',
    description:
      'Evaluación adaptativa gratuita de 34 preguntas para estudiantes de instituto desde 14 años. Informe personalizado en 35 minutos.',
    url: `${BASE_URL}/es/practicas`,
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/es/practicas/opengraph-image`, width: 1200, height: 630, alt: 'Prácticas de Instituto — Eduentry' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/es/practicas#service`,
  name: 'Evaluación de Preparación para Prácticas — Eduentry',
  description: 'Evaluación adaptativa gratuita de 34 preguntas para estudiantes de instituto desde 14 años. Mide aptitudes generales, conocimiento del sector, competencias profesionales y perfil de intereses. Informe personalizado instantáneo.',
  url: `${BASE_URL}/es/practicas`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Spain' },
  audience: { '@type': 'Audience', audienceType: 'Estudiantes de instituto de 14 años o más' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/es` },
    { '@type': 'ListItem', position: 2, name: 'Prácticas', item: `${BASE_URL}/es/practicas` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿La evaluación es gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, completamente gratuita. Sin suscripciones, tarifas ocultas ni niveles premium. Crea una cuenta gratuita y empieza de inmediato.' } },
    { '@type': 'Question', name: '¿A qué edad se puede hacer prácticas en España?', acceptedAnswer: { '@type': 'Answer', text: 'En España, los estudiantes de secundaria y bachillerato pueden realizar prácticas no laborales desde los 14-15 años con autorización parental. Las prácticas de verano para jóvenes suelen estar disponibles a partir de los 14-16 años según la empresa.' } },
    { '@type': 'Question', name: '¿Cómo encontrar prácticas de instituto?', acceptedAnswer: { '@type': 'Answer', text: 'Las vías más efectivas: (1) candidaturas espontáneas por correo a pymes locales — un email corto y personalizado obtiene respuesta con frecuencia; (2) red familiar y entorno cercano; (3) orientador académico del centro; (4) plataformas online como InfoJobs o LinkedIn para prácticas formales. Las pymes responden mejor que las grandes corporaciones.' } },
    { '@type': 'Question', name: '¿Qué área de prácticas elegir?', acceptedAnswer: { '@type': 'Answer', text: 'La evaluación Eduentry te ayuda a identificar tu área ideal entre cuatro: Tecnología, Empresa, Análisis de Datos y Marketing Digital. Mide tus aptitudes, conocimientos del sector y competencias en el entorno laboral para orientarte hacia el área donde tienes más posibilidades de destacar y disfrutar la experiencia.' } },
    { '@type': 'Question', name: '¿Cuánto tiempo dura la evaluación?', acceptedAnswer: { '@type': 'Answer', text: 'La evaluación tiene 34 preguntas adaptativas en 4 fases y dura unos 35 minutos. Se puede pausar y retomar en cualquier momento — no hace falta terminarla de una vez.' } },
    { '@type': 'Question', name: '¿Qué incluye el informe de preparación?', acceptedAnswer: { '@type': 'Answer', text: 'El informe personalizado incluye: tu nivel de preparación (Listo para Prácticas, En Desarrollo o Necesita Apoyo), un resumen generado por IA sobre tu rendimiento, y análisis por fase con tus puntos fuertes y áreas de mejora.' } },
    { '@type': 'Question', name: '¿Las prácticas ayudan para la universidad?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La experiencia laboral bien documentada refuerza significativamente la candidatura universitaria, especialmente para grados en empresa, tecnología y comunicación. Demuestra iniciativa, madurez y orientación profesional clara — cualidades difíciles de acreditar solo con notas académicas.' } },
    { '@type': 'Question', name: '¿Cuándo buscar prácticas de verano?', acceptedAnswer: { '@type': 'Answer', text: 'Para grandes empresas, conviene postular entre enero y marzo — las plazas se cubren rápido. Las pymes y empresas locales aceptan solicitudes durante todo el año, con mayor actividad de marzo a mayo. Lo ideal es buscar con 3-6 meses de antelación.' } },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: 'Tecnología', desc: 'Desarrollo de software, pensamiento sistémico y resolución de problemas técnicos.' },
  { key: 'business', icon: '📈', label: 'Empresa', desc: 'Negocio, pensamiento estratégico y comunicación organizacional.' },
  { key: 'data', icon: '📊', label: 'Análisis de Datos', desc: 'Razonamiento cuantitativo, interpretación de datos y toma de decisiones basada en evidencia.' },
  { key: 'marketing', icon: '📣', label: 'Marketing Digital', desc: 'Análisis de audiencia, estrategia de contenido y gestión de canales digitales.' },
]

const PHASES = [
  { label: 'Aptitud General', desc: '10 preguntas · Razonamiento verbal y cuantitativo', icon: '🧠' },
  { label: 'Conocimiento del Sector', desc: '10 preguntas · Conocimientos aplicados al área', icon: '📚' },
  { label: 'Competencias Profesionales', desc: '8 preguntas · Situaciones reales en empresa (SJT)', icon: '🤝' },
  { label: 'Perfil de Intereses', desc: '6 preguntas · Estilo de trabajo y mapa de preferencias', icon: '🎯' },
]

const TIPOS_PRACTICAS = [
  { icon: '☀️', title: 'Prácticas de verano', desc: 'Prácticas durante las vacaciones de verano, generalmente 2-8 semanas. El formato más accesible para estudiantes de instituto. Ideal para explorar un sector antes de decidir la carrera universitaria.', link: '/es/blog/practicas-verano-reino-unido-estudiantes' },
  { icon: '💻', title: 'Prácticas en línea', desc: 'Prácticas a distancia sin necesidad de desplazamiento. Muy frecuentes en tecnología, marketing digital y datos. Permiten acceder a empresas sin limitaciones geográficas.', link: null },
  { icon: '🏭', title: 'Prácticas presenciales', desc: 'Experiencia en las instalaciones de la empresa. Contacto directo con el equipo y los procesos internos. La modalidad que mayor impacto tiene en el desarrollo profesional.', link: null },
  { icon: '🏦', title: 'Prácticas en finanzas', desc: 'Contabilidad, análisis financiero y banca. Alta demanda en pymes y fintech que buscan apoyo administrativo o de datos. Puerta de entrada a uno de los sectores mejor remunerados.', link: '/es/blog/practicas-finanzas-banca-instituto' },
  { icon: '📱', title: 'Prácticas en marketing digital', desc: 'Gestión de redes sociales, creación de contenido y SEO. Sectores con alta demanda de perfiles jóvenes con conocimiento nativo digital.', link: '/es/blog/practicas-marketing-digital-instituto' },
  { icon: '📊', title: 'Prácticas en tecnología', desc: 'Desarrollo web, análisis de datos, QA y UX. No siempre requieren programación — hay muchos roles técnicos sin código. Uno de los sectores con mayor proyección.', link: '/es/blog/practicas-tecnologia-antes-universidad' },
]

const GUIDE_SLUGS = [
  'practicas-tempranas-desarrollo-infantil-carrera',
  'cv-para-practicas-con-16-anos',
  'como-superar-entrevista-practicas',
  'practicas-marketing-digital-instituto',
  'practicas-analitica-datos-estudiantes',
  'practicas-finanzas-banca-instituto',
]
const GUIDES = BLOG_POSTS_ES.filter(p => GUIDE_SLUGS.includes(p.slug))
  .sort((a, b) => GUIDE_SLUGS.indexOf(a.slug) - GUIDE_SLUGS.indexOf(b.slug))

export default function ESPracticasLandingPage() {
  return (
    <div className="bg-[#f5f5f7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Plataforma de Evaluación de Prácticas
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Prepara tus prácticas<br />de instituto
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            Evaluación adaptativa de 34 preguntas para estudiantes desde 14 años. Unos 35 minutos para obtener tu informe de preparación personalizado y descubrir tu área ideal.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/es/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Empezar gratis
            </Link>
            <Link href="/es/auth/login" className="text-[#4F46E5] font-semibold text-base hover:underline">
              ¿Ya tienes cuenta? Iniciar sesión
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: 'Menos riesgo de desempleo juvenil a los 19 años para jóvenes con 4+ contactos con empleadores antes de los 16', source: 'Education and Employers, 2018' },
              { stat: '73 %', desc: 'De los empleadores considera la experiencia laboral previa el criterio más importante en una entrevista de trabajo', source: 'Prospects, 2022' },
              { stat: '70 %', desc: 'Más probabilidad de recibir una oferta de empleo antes de graduarse para los estudiantes con experiencia en prácticas', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Áreas disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.key} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{track.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{track.label}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">¿Por qué importa?</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Evidencia de investigación longitudinal sobre la experiencia laboral temprana.</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Las universidades y escuelas de negocio más selectivas valoran explícitamente la experiencia laboral en los procesos de admisión. Un expediente académico fuerte más experiencia práctica real produce mejores resultados de admisión que las notas solas — los datos lo confirman de forma consistente.
              </p>
              <Link href="/es/blog/practicas-instituto-beneficios-universidad" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                Leer el análisis completo →
              </Link>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Tipos de prácticas</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Desde prácticas de verano hasta prácticas en tecnología — cada modalidad tiene sus características.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPOS_PRACTICAS.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    Saber más →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">¿Cómo funciona la evaluación?</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Fase {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Total: 34 preguntas · ~35 minutos · Totalmente pausable</span>
            </div>
          </div>
        </section>

        {/* Guides */}
        {GUIDES.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Guías de prácticas de instituto</h2>
            <p className="text-sm text-[#6e6e73] mb-5">Del CV a la entrevista, de las prácticas de verano al marketing digital — todo lo que necesitas saber.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDES.map((post) => (
                <Link
                  key={post.slug}
                  href={`/es/blog/${post.slug}`}
                  className="group bg-white border border-[#d2d2d7] rounded-2xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/30 transition-colors flex flex-col"
                >
                  <div className="text-xs font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5 self-start mb-3">{post.tags[0]}</div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug group-hover:text-[#4F46E5] transition-colors flex-1">{post.shortTitle}</div>
                  <div className="text-xs text-[#6e6e73] mt-2">{post.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Preguntas frecuentes</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: '¿La evaluación es gratuita?', a: 'Sí, completamente gratuita. Sin suscripciones, tarifas ocultas ni niveles premium. Crea una cuenta gratuita y empieza de inmediato.' },
              { q: '¿A qué edad puedo hacer prácticas?', a: 'En España los estudiantes de secundaria y bachillerato pueden hacer prácticas no laborales desde los 14-15 años con autorización parental. Muchas empresas aceptan estudiantes a partir de los 16.' },
              { q: '¿Qué área elegir?', a: 'Piensa en qué tipo de problemas te gusta resolver: técnicos y lógicos → Tecnología; números y decisiones → Análisis de Datos; comunicación y creatividad → Marketing Digital; organización y estrategia → Empresa. La evaluación te ayudará a confirmar tu orientación con datos objetivos.' },
              { q: '¿Cómo encontrar prácticas?', a: 'Las vías más efectivas: candidaturas espontáneas por email a pymes locales, red familiar, orientador de tu centro y plataformas como InfoJobs. Un email corto y personalizado a pequeñas empresas obtiene respuesta con mucha frecuencia.' },
              { q: '¿Cuánto tiempo dura la evaluación?', a: 'Unos 35 minutos para 34 preguntas en 4 fases. Es totalmente pausable — puedes retomar donde lo dejaste sin volver a empezar.' },
              { q: '¿Qué incluye el informe?', a: 'Tu nivel de preparación (Listo para Prácticas, En Desarrollo o Necesita Apoyo), un resumen IA de tu rendimiento y análisis por fase con puntos fuertes y área de mejora.' },
              { q: '¿Las prácticas ayudan para la universidad?', a: 'Sí. Una experiencia laboral bien documentada refuerza la candidatura universitaria, especialmente para grados en empresa, tecnología y comunicación. Demuestra iniciativa y orientación profesional que las notas solas no transmiten.' },
              { q: '¿Cuándo buscar prácticas de verano?', a: 'Para grandes empresas, entre enero y marzo — las plazas se llenan rápido. Las pymes aceptan solicitudes todo el año, con más actividad de marzo a mayo. Lo ideal es buscar con 3-6 meses de antelación.' },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm text-[#1d1d1f]">{q}</span>
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#4F46E5] rounded-3xl px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Evalúa tu preparación para prácticas hoy</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34 preguntas · 35 minutos · Informe personalizado instantáneo. Completamente gratis.
            </p>
            <Link
              href="/es/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Empezar la evaluación gratuita
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
