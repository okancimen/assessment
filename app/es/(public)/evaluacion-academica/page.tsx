import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Evaluación Académica Gratuita para Niños | Test Adaptativo IA — Eduentry',
  description:
    'Mide las habilidades académicas de tu hijo en inglés, matemáticas, razonamiento verbal y no verbal. 6–20 años. Sin registro. Resultados instantáneos.',
  keywords: [
    'evaluación académica niños',
    'test académico gratuito niños',
    'test adaptativo IA niño',
    'evaluación matemáticas inglés niño',
    'test razonamiento verbal niños',
    'test razonamiento no verbal niños',
    'evaluación escolar primaria',
    'test aptitud escolar niño',
    'evaluación cognitiva niño online',
    'test nivel escolar gratis',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/evaluacion-academica`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/es/evaluacion-academica`,
    siteName: 'Eduentry',
    title: 'Evaluación Académica Gratuita para Niños | Test Adaptativo IA — Eduentry',
    description: 'Mide las habilidades académicas de tu hijo en 4 materias. 6–20 años. Sin registro.',
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Evaluación Académica Niños — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evaluación Académica Gratuita para Niños | Test Adaptativo IA — Eduentry',
    description: 'Mide las habilidades académicas de tu hijo en 4 materias. 6–20 años. Sin registro.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: '¿Qué materias cubre la evaluación?',
    a: 'La evaluación cubre cuatro materias principales: inglés (comprensión, gramática, ortografía), matemáticas (operaciones, álgebra, geometría), razonamiento verbal y razonamiento no verbal.',
  },
  {
    q: '¿Cómo funciona la dificultad adaptativa?',
    a: 'Nuestra IA utiliza la Teoría de Respuesta al Ítem (TRI) para ajustar la dificultad de las preguntas en tiempo real según las respuestas de tu hijo, proporcionando una estimación de capacidad mucho más precisa que un test fijo.',
  },
  {
    q: '¿Cuánto tiempo dura la evaluación?',
    a: 'Cada materia tiene 15 preguntas, 60 en total. La mayoría de los niños la completan en 25–35 minutos.',
  },
  {
    q: '¿Necesito crear una cuenta para empezar?',
    a: 'No. Comienza de inmediato con solo el nombre y la edad de tu hijo. Después de la evaluación verás una puntuación resumen. Crea una cuenta gratuita para desbloquear el análisis completo y las recomendaciones de IA.',
  },
]

export default function EsEvaluacionAcademicaPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNav locale="es" />

      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">IA Adaptativa · 4 Materias · 6–20 Años</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Conoce el Nivel Académico<br />
            <span className="text-[#4F46E5]">Real de Tu Hijo</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            60 preguntas adaptativas sobre inglés, matemáticas, razonamiento verbal y no verbal — puntuadas en la misma escala estandarizada que los colegios selectivos del Reino Unido.
          </p>
          <GuestAcademicStartForm locale="es" />
          <p className="mt-2 text-sm text-[#6e6e73]">
            ¿Ya tienes cuenta?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Iniciar sesión</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">¿Cómo Funciona?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Introduce nombre y edad', desc: 'Sin cuenta. Solo el nombre y la edad de tu hijo.' },
              { step: '2', title: 'Preguntas adaptativas', desc: 'La IA ajusta la dificultad en tiempo real usando TRI, apuntando al nivel real de tu hijo.' },
              { step: '3', title: 'Resultados instantáneos', desc: 'Ve la puntuación global y por materia al instante. Regístrate gratis para el análisis completo.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Listo para descubrir la base académica de tu hijo?</h2>
          <Link href="/es/evaluacion-academica" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            Iniciar evaluación gratuita
          </Link>
        </div>
      </section>

      <PublicFooter locale="es" />
    </div>
  )
}
