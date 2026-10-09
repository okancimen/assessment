import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/es/auth/register`

export const metadata: Metadata = {
  title: 'Evaluación de Personalidad Infantil | Test de Fortalezas VIA — Eduentry',
  description:
    'Descubre las fortalezas de carácter únicas de tu hijo con nuestra evaluación de personalidad científica e impulsada por IA. Edades 6–20. Encuesta gratuita para padres. Informe personalizado instantáneo.',
  keywords: [
    'evaluación de personalidad infantil',
    'test de fortalezas de carácter VIA',
    'fortalezas y debilidades del niño',
    'test de personalidad infantil gratuito',
    'fortalezas VIA en niños',
    'evaluación de carácter infantil online',
    'herramientas de crianza personalidad',
    'test de psicología positiva infantil',
    'evaluación del desarrollo infantil',
    'informe de personalidad IA infantil',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/evaluacion-de-personalidad`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/es/evaluacion-de-personalidad`,
    siteName: 'Eduentry',
    title: 'Evaluación de Personalidad Infantil | Test de Fortalezas VIA — Eduentry',
    description:
      'Descubre las fortalezas de carácter únicas de tu hijo con nuestra evaluación de personalidad IA. Edades 6–20. Encuesta gratuita para padres.',
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Evaluación de Personalidad Infantil — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evaluación de Personalidad Infantil | Test de Fortalezas VIA — Eduentry',
    description:
      'Descubre las fortalezas de carácter únicas de tu hijo con nuestra evaluación de personalidad IA. Edades 6–20. Encuesta gratuita para padres.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: '¿Por qué este test lo evalúa el padre en lugar del niño?',
    a: 'Las autopercepciones de los niños cambian rápidamente y los más pequeños pueden distraerse fácilmente o malinterpretar los formatos de cuestionarios. Como padre, tus observaciones diarias de sus comportamientos reales proporcionan la línea de base más estable y precisa para una evaluación.',
  },
  {
    q: '¿Qué pasa si mi hijo está justo en el límite de un grupo de edad?',
    a: 'Nuestro sistema calcula la edad exacta al día usando la fecha de nacimiento. Las preguntas están matemáticamente optimizadas para ese nivel de desarrollo preciso. ¡Confía en el grupo que el sistema asigna!',
  },
  {
    q: '¿Con qué frecuencia debo repetir esta evaluación para mi hijo?',
    a: 'Recomendamos repetir el test cada 6 a 12 meses o cuando pase a un nuevo grupo de edad. Esto te permite rastrear cómo sus fortalezas de carácter crecen y evolucionan con el tiempo.',
  },
  {
    q: '¿Esta evaluación está respaldada por la ciencia?',
    a: 'Sí. Nuestras preguntas están adaptadas del marco de Fortalezas de Carácter VIA — uno de los instrumentos de psicología positiva más rigurosamente revisados por pares en el mundo. Ha sido validado a través de culturas y utilizado en estudios publicados en las principales revistas psicológicas.',
  },
  {
    q: '¿Cómo se protege la privacidad de mi hijo?',
    a: 'Nunca compartimos ni vendemos los datos de tu hijo. Las respuestas se almacenan de forma segura y se usan únicamente para generar tu informe personalizado. Ningún dato se comparte con terceros, anunciantes o instituciones académicas.',
  },
  {
    q: '¿Qué debo hacer después de ver los resultados?',
    a: 'Empieza con los 3 primeros ejercicios recomendados por la IA en el informe. Prueba uno durante una semana y anota cualquier cambio en la confianza o el compromiso de tu hijo. Vuelve al informe cuando necesites ideas nuevas — los ejercicios están diseñados para integrarse naturalmente en las rutinas familiares diarias.',
  },
]

const VIRTUES = [
  {
    label: 'Sabiduría',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['Curiosidad', 'Creatividad', 'Amor por el aprendizaje', 'Perspectiva', 'Juicio'],
  },
  {
    label: 'Valor',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['Valentía', 'Perseverancia', 'Honestidad', 'Vitalidad'],
  },
  {
    label: 'Humanidad',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['Amor', 'Amabilidad', 'Inteligencia social'],
  },
  {
    label: 'Justicia',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['Trabajo en equipo', 'Imparcialidad', 'Liderazgo'],
  },
  {
    label: 'Templanza',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['Perdón', 'Humildad', 'Prudencia', 'Autorregulación'],
  },
  {
    label: 'Trascendencia',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['Apreciación de la belleza', 'Gratitud', 'Esperanza', 'Humor', 'Espiritualidad'],
  },
]

const TIERS = [
  { label: 'Junior', age: '6–9 años', traits: '12 rasgos fundamentales', questions: '24 preguntas', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Intermedio', age: '10–13 años', traits: '15 rasgos', questions: '30 preguntas', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Adolescente', age: '14–17 años', traits: '20 rasgos', questions: '40 preguntas', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Adulto Joven', age: '18–20 años', traits: 'Los 24 rasgos', questions: '48 preguntas', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function EvaluacionDePersonalidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Fortalezas VIA · Edades 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Descubre las Fortalezas Únicas<br />
            <span className="text-[#4F46E5]">de Tu Hijo</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            Una evaluación de carácter científica e impulsada por IA, perfectamente adaptada a la etapa de desarrollo de tu hijo.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Comenzar evaluación gratuita
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/es/auth/login" className="text-[#4F46E5] hover:underline font-medium">Iniciar sesión</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Por Qué el Carácter Importa Más que las Notas</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Como padres, a menudo nos enfocamos completamente en las calificaciones. Pero las puntuaciones académicas sólo cuentan parte de la historia. El verdadero éxito y la resiliencia provienen del carácter, los hábitos emocionales y las fortalezas de personalidad del niño. Nuestra evaluación te ayuda a mirar más allá de las notas para ver en quién se está convirtiendo tu hijo — destacando sus &ldquo;Fortalezas Firma&rdquo; e identificando sus &ldquo;Áreas de Crecimiento&rdquo;.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Cómo funciona</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Asignación inteligente por edad 🗓️',
                desc: 'Durante el registro, simplemente ingresa la fecha de nacimiento de tu hijo. Nuestro sistema calcula automáticamente su etapa de desarrollo y lo asigna al nivel correcto.',
              },
              {
                step: '2',
                title: 'Encuesta parental de 5 min ⭐',
                desc: 'Responderás una serie de preguntas rápidas y basadas en observación sobre comportamientos que ves cada día. Sin suposiciones, sin pruebas estresantes para tu hijo.',
              },
              {
                step: '3',
                title: 'Informe de crecimiento con IA 🤖',
                desc: 'Nuestra IA avanzada analiza tus respuestas según un modelo psicológico reconocido mundialmente para generar una hoja de ruta personalizada llena de ejercicios prácticos.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Basado en el Estándar Oro de la Psicología Positiva</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Nuestra plataforma adapta el mundialmente reconocido marco de Fortalezas de Carácter VIA, desarrollado por los psicólogos pioneros Dr. Martin Seligman y Dr. Neal Mayerson. Utilizado en más de 190 países por investigadores y educadores, este modelo identifica 24 rasgos universales agrupados bajo 6 virtudes fundamentales: Sabiduría, Valor, Humanidad, Justicia, Templanza y Trascendencia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Perfectamente Calibrado para Cada Etapa de la Infancia</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Lo que obtienes</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Top 5 Fortalezas Firma', desc: 'Las áreas donde tu hijo brilla naturalmente.' },
              { icon: '🌱', title: 'Bottom 3 Pilares de Crecimiento', desc: 'Perspectivas suaves sobre sus puntos ciegos o debilidades actuales.' },
              { icon: '🤖', title: 'Kit de herramientas IA accionable', desc: 'Ejercicios reales y personalizados que puedes practicar en casa para ayudarlos a prosperar.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
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

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Listo para descubrir quién es realmente tu hijo?</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Comenzar evaluación gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
