import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/es/auth/register`

export const metadata: Metadata = {
  title: 'Fortalezas y Debilidades de tu Hijo — Test Cognitivo Gratuito',
  description:
    'Descubre las fortalezas y debilidades de tu hijo en 35 minutos. Evaluación cognitiva gratuita comparada con PISA, SAT y GCSE — informe IA instantáneo.',
  keywords: [
    'cuáles son las fortalezas y debilidades de mi hijo',
    'fortalezas de mi hijo',
    'debilidades de mi hijo',
    'evaluación cognitiva infantil',
    'test gratuito para niños',
    'evaluación PISA niños',
    'test de potencial infantil',
    'test de habilidad cognitiva gratuito',
    'evaluación académica infantil',
    'test de razonamiento verbal niños',
    'test adaptativo niños',
    'test de inteligencia infantil gratuito',
    'comparativa norma internacional',
    'análisis de notas escolares niños',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/potencial-de-tu-hijo`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/es/potencial-de-tu-hijo`,
    siteName: 'Eduentry',
    title: '¿Cuáles son las Fortalezas y Debilidades de mi Hijo? — Test Cognitivo Gratuito',
    description:
      'Descubre las fortalezas y debilidades de tu hijo en 35 minutos. Evaluación cognitiva adaptativa gratuita comparada con estándares PISA, SAT y GCSE.',
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/es/opengraph-image`, width: 1200, height: 630, alt: 'Evaluación Cognitiva de tu Hijo — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuáles son las Fortalezas y Debilidades de mi Hijo? — Test Cognitivo Gratuito',
    description:
      'Descubre las fortalezas y debilidades de tu hijo en 35 minutos. Evaluación cognitiva adaptativa gratuita comparada con estándares PISA, SAT y GCSE.',
    images: [`${BASE_URL}/es/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'Lectura y Alfabetización',
    desc: 'Comprensión lectora, gramática y vocabulario. Habilidad para analizar textos y realizar inferencias.',
  },
  {
    icon: '📐',
    title: 'Matemáticas y Razonamiento Numérico',
    desc: 'Aritmética, álgebra, geometría e interpretación de datos. Razonamiento numérico independiente del currículo.',
  },
  {
    icon: '🧠',
    title: 'Razonamiento Verbal',
    desc: 'Analogías, clasificaciones y lógica verbal. Capacidad de pensar a través del lenguaje y establecer relaciones.',
  },
  {
    icon: '🔷',
    title: 'Razonamiento Espacial No Verbal',
    desc: 'Reconocimiento de patrones, razonamiento espacial y matrices abstractas. El dominio más crítico para STEM.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Test Adaptativo por Computadora (CAT)',
    desc: 'Cada pregunta se selecciona en tiempo real según la respuesta anterior. Correcta → pregunta más difícil. Incorrecta → recalibración. El sistema determina el verdadero nivel de habilidad de tu hijo con alta precisión en 25–35 preguntas.',
  },
  {
    title: 'Modelo Logístico de 2 Parámetros IRT (2PL)',
    desc: 'Cada pregunta se calibra usando la Teoría de Respuesta al Ítem 2PL e Información de Fisher, produciendo una estimación de habilidad (theta) con un intervalo de confianza conocido. Los resultados son mediciones de habilidad estadísticamente fiables, no puntuaciones brutas.',
  },
  {
    title: 'Escala Estándar Global',
    desc: 'Escala estándar con Media = 100, DT = 15. Comparado con normas internacionales alineadas con UK 11+/GCSE, Expectativas de Grado de EE. UU., Niveles PISA y preparación para el Programa IB.',
  },
]

const FAQS = [
  {
    q: '¿Cuáles son las fortalezas y debilidades académicas de mi hijo?',
    a: 'Las fortalezas y debilidades académicas de tu hijo se miden en tres dominios cognitivos independientes: razonamiento verbal (comprensión del lenguaje y analogías), razonamiento numérico (reconocimiento de patrones y lógica matemática) y pensamiento visual-espacial (análisis de formas y relaciones 3D). El test adaptativo gratuito produce una puntuación percentil separada para cada dominio basada en normas internacionales de edad.',
  },
  {
    q: '¿Las notas escolares muestran el verdadero potencial de mi hijo?',
    a: 'No. Las notas escolares miden la inteligencia cristalizada: conocimiento aprendido y reproducido. Sin embargo, muchos niños inteligentes destacan en inteligencia fluida: razonamiento, reconocimiento de patrones y resolución de problemas que los exámenes escolares rara vez miden. Por eso una proporción significativa de niños con alto potencial puede tener malas notas.',
  },
  {
    q: '¿La evaluación es gratuita?',
    a: 'Sí, completamente gratuita. Se requiere registro pero no hay ninguna tarifa, suscripción ni coste oculto. Al completar el test, se genera de forma instantánea un informe de perfil cognitivo de cuatro dominios.',
  },
  {
    q: '¿Cuánto tiempo dura el test?',
    a: 'Aproximadamente 35 minutos. El formato adaptativo realiza menos mediciones pero más precisas que los tests de opción múltiple estándar. El test se puede guardar: tu hijo puede continuar desde donde lo dejó.',
  },
  {
    q: '¿Para qué grupo de edad es adecuado?',
    a: 'Adecuado para niños de 6 a 17 años. El sistema se calibra automáticamente para cada grupo de edad; las preguntas se adaptan al nivel del niño.',
  },
  {
    q: '¿Qué me dice el informe?',
    a: 'El informe incluye: puntuaciones percentiles en cuatro dominios cognitivos según normas internacionales de edad, dominio más fuerte, área de desarrollo prioritaria e información generada por IA para padres en cada dominio. Proporciona una guía concreta para todo, desde la elección de escuela hasta las decisiones de apoyo específico.',
  },
  {
    q: '¿En qué se diferencia este test de los exámenes escolares?',
    a: 'Los exámenes escolares miden el conocimiento de un currículo específico. Este test mide el potencial cognitivo —cómo piensa el niño— independientemente del conocimiento curricular. Permite comparar de forma justa a niños de diferentes países o sistemas escolares.',
  },
  {
    q: 'Mi hijo tiene una inteligencia espacial alta pero malas notas. ¿Es normal?',
    a: 'Sí, es muy habitual. La alta inteligencia espacial suele estar infravalorada por los tests académicos estándar. Según datos de la OCDE, los estudiantes en el cuartil superior de razonamiento fluido pero en la mitad inferior del rendimiento escolar representan entre el 12% y el 18% de todos los estudiantes, un grupo cronicamente subestimado por los sistemas escolares.',
  },
  {
    q: '¿Puedo compartir los resultados con la escuela?',
    a: 'Sí. Un informe de una evaluación estandarizada transforma las reuniones de padres y maestros y las sesiones de orientación. "Percentil 97 en razonamiento espacial" es una herramienta de defensa mucho más poderosa que "parece inteligente pero está disperso".',
  },
  {
    q: '¿Identifica la superdotación o los talentos especiales?',
    a: 'Sí. Los niños que puntúan por encima del percentil 90 en los tres dominios muestran una fuerte indicación para la candidatura a programas para superdotados. El test también detecta inconsistencias en los patrones de puntuación, orientando hacia una evaluación especializada para condiciones como dislexia, discalculia o doble excepcionalidad.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/es/potencial-de-tu-hijo#webpage`,
  url: `${BASE_URL}/es/potencial-de-tu-hijo`,
  name: '¿Cuáles son las Fortalezas y Debilidades de mi Hijo? — Test Cognitivo Gratuito',
  description: 'Descubre las fortalezas y debilidades de tu hijo en 35 minutos. Evaluación cognitiva adaptativa gratuita comparada con estándares PISA, SAT y GCSE.',
  inLanguage: 'es',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/es/potencial-de-tu-hijo#service`,
  name: 'Evaluación Cognitiva Infantil',
  description: 'Evaluación cognitiva adaptativa gratuita para niños de 6 a 17 años. Compara el razonamiento verbal, numérico y espacial con los estándares PISA, SAT y GCSE.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/es/potencial-de-tu-hijo`,
  inLanguage: 'es',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/es` },
    { '@type': 'ListItem', position: 2, name: 'Potencial de Tu Hijo', item: `${BASE_URL}/es/potencial-de-tu-hijo` },
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

const RELATED_POSTS = [
  { href: '/es/blog/test-academico-gratuito-fortalezas-debilidades-hijo', tag: 'Evaluación', title: 'Test Académico Gratuito: Descubre las Fortalezas y Debilidades de tu Hijo' },
  { href: '/es/blog/descubrir-fortalezas-ocultas-hijo-guia-moderna-padres', tag: 'Guía', title: 'Descubre las Fortalezas Ocultas de tu Hijo: Guía Moderna para Padres' },
  { href: '/es/blog/actividades-verano-ninos-academicamente-ambiciosos', tag: 'Guía', title: 'Actividades de Verano para Niños Académicamente Ambiciosos' },
]

export default function PotencialDeTuHijoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">Desarrollado por</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (Singapur)</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Evaluación Cognitiva Gratuita</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Descubre el Verdadero Potencial<br />
            <span className="text-indigo-600">Cognitivo de tu Hijo</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Compara la habilidad cognitiva y la preparación académica con los estándares internacionales <strong>PISA, SAT y GCSE</strong> en 35 minutos. Revela el potencial real que las notas escolares no pueden mostrar.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Evaluar Potencial Cognitivo (Gratis)
          </Link>

          <p className="mt-4 text-xs text-gray-400">
            Comparativa Internacional Gratuita &nbsp;•&nbsp; 100% Privado &nbsp;•&nbsp; Perfil Cognitivo PDF con IA Instantáneo
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'Modelos IRT Estándar' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'Entidad Registrada en Singapur' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'Motor de Test Adaptativo' },
            { icon: '🔒', label: 'Cumple con GDPR', sub: 'Privacidad de Datos del Alumno' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900">{b.label}</span>
              <span className="text-[11px] text-gray-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuáles son las Fortalezas y Debilidades de mi Hijo?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Las fortalezas y debilidades académicas de tu hijo se miden en tres dominios cognitivos independientes:</strong> razonamiento verbal (comprensión del lenguaje y analogías), razonamiento numérico (reconocimiento de patrones y lógica matemática) y pensamiento visual-espacial (análisis de formas y relaciones 3D). El test adaptativo gratuito produce una puntuación percentil separada para cada dominio basada en normas internacionales de edad, mostrando claramente dónde brilla de verdad y dónde el apoyo específico marcará la mayor diferencia.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Las notas escolares no pueden responder a esta pregunta: miden el conocimiento de un currículo específico impartido por un profesor concreto en una escuela determinada. No miden el potencial cognitivo según estándares internacionales. Según datos de la OCDE, los estudiantes en el cuartil superior de razonamiento fluido pero en la mitad inferior del rendimiento escolar representan entre el <strong>12% y el 18%</strong> de todos los estudiantes, un grupo cronicamente subestimado por los sistemas escolares. El metaanálisis de John Hattie de más de 900 estudios sitúa el tamaño del efecto de la evaluación diagnóstica en 0,67, entre las intervenciones de mayor impacto en educación.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Iniciar evaluación gratuita →
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">¿Qué Evaluamos?</h2>
            <p className="text-gray-500 text-base">Cuatro dominios cognitivos independientes, cada uno medido con una puntuación percentil internacional separada.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">La Base Científica de Eduentry</h2>
            <p className="text-gray-500 text-base">¿Por qué es diferente de los tests y cuestionarios ordinarios?</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            La misma arquitectura de test se utiliza en evaluaciones estandarizadas aplicadas a más de 10 millones de estudiantes en todo el mundo, como <strong>NWEA MAP</strong> y <strong>CAT4</strong>. El metaanálisis de John Hattie que abarca más de 900 estudios sitúa el tamaño del efecto de la evaluación diagnóstica en 0,67, entre las intervenciones de mayor impacto en educación.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Informe de Muestra: Perfil de Habilidad Global</h2>
          <p className="text-gray-500 text-base mb-10">Al completar el test, los padres reciben un informe detallado con clasificaciones percentiles en cuatro dominios junto con fortalezas y áreas de desarrollo.</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Perfil de Habilidad Global</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · Informe de Evaluación Cognitiva</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Lectura y Alfabetización', score: '87', pct: 'Percentil 82' },
                    { label: 'Matemáticas y Numérico', score: '94', pct: 'Percentil 91' },
                    { label: 'Razonamiento Verbal', score: '79', pct: 'Percentil 74' },
                    { label: 'Razonamiento Espacial', score: '112', pct: 'Percentil 97' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 Dominio más Fuerte: Razonamiento Espacial</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">El niño se desempeña significativamente por encima de la norma de edad internacional en reconocimiento de patrones y razonamiento espacial. Esta área tiene una fuerte correlación con STEM, ingeniería y diseño.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">Ver informe de muestra completo →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              Evaluar Potencial Cognitivo (Gratis)
            </Link>
            <p className="mt-3 text-xs text-gray-400">Comparativa Internacional Gratuita &nbsp;•&nbsp; 100% Privado &nbsp;•&nbsp; Perfil Cognitivo PDF con IA Instantáneo</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{q}</span>
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Guías Relacionadas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1">Magenta Networks Pte Ltd (Singapur)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
          Iniciar evaluación gratuita →
        </Link>
      </div>
    </>
  )
}
