import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Sobre Eduentry — Evaluación académica gratuita para niños',
  description: 'Eduentry es una plataforma de evaluación adaptativa gratuita para estudiantes de 6 a 17 años. Puntuaciones estandarizadas comparadas con el currículo nacional del Reino Unido, PISA y los estándares IB.',
  keywords: ['sobre Eduentry', 'plataforma evaluación niños gratuita', 'referencia académica internacional', 'prueba adaptativa niños', 'evaluación académica 6 17 años', 'evaluación prácticas instituto'],
  alternates: {
    canonical: `${BASE_URL}/es/sobre-nosotros`,
    languages: { es: `${BASE_URL}/es/sobre-nosotros`, 'en-GB': `${BASE_URL}/about`, tr: `${BASE_URL}/tr/hakkimizda`, 'x-default': `${BASE_URL}/about` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Sobre Eduentry — Evaluación académica gratuita para niños',
    description: 'Evaluaciones académicas adaptativas gratuitas comparadas con los estándares del Reino Unido, PISA e IB. Puntuaciones estandarizadas y clasificaciones percentiles internacionales.',
    url: `${BASE_URL}/es/sobre-nosotros`,
    locale: 'es_ES',
  },
}

export default function SobreNosotrosPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="es">

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/es" className="hover:text-[#1d1d1f]">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Sobre nosotros</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          Gratuita para todas las familias
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
          Evaluación académica gratuita<br />
          <span className="text-[#4F46E5]">para todos los niños, en todo el mundo</span>
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Eduentry ofrece a los padres una visión clara y comparada internacionalmente de la situación académica de su hijo — sin coste, en menos de 30 minutos.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 bg-[#f5f5f7] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Nuestra misión</h2>
        <p className="text-[#6e6e73] leading-relaxed text-lg">
          Cada niño merece saber dónde está — no sólo respecto a sus compañeros de clase, sino comparado con niños del Reino Unido y a nivel internacional. Las evaluaciones estandarizadas profesionales han sido tradicionalmente caras e inaccesibles. Eduentry hace que esta comparación sea gratuita, inmediata y disponible para cualquier familia con conexión a internet.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Cómo funciona</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Preguntas adaptativas',
              body: 'Nuestra IA genera preguntas calibradas a la edad del alumno y ajusta la dificultad en tiempo real según sus respuestas — el mismo enfoque utilizado en PISA y las evaluaciones MAP.',
            },
            {
              step: '02',
              title: 'Puntuación IRT',
              body: 'Usamos la Teoría de Respuesta al Ítem (TRI) de 2 parámetros para producir una puntuación estandarizada (media 100, DT 15) estadísticamente comparable entre grupos de edad y sesiones.',
            },
            {
              step: '03',
              title: 'Referencias internacionales',
              body: 'Las puntuaciones se mapean en percentiles basados en el Currículo Nacional del Reino Unido, PISA, el currículo común de EE.UU. y los marcos del IB — para ver exactamente dónde se sitúa el alumno globalmente.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="space-y-3">
              <div className="text-3xl font-bold text-[#c7d2fe]">{step}</div>
              <h3 className="font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Cuatro materias, una imagen completa</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'Inglés', desc: 'Comprensión, gramática, ortografía, puntuación y vocabulario — alineado con KS1–KS4 del Reino Unido y Cambridge IGCSE.' },
            { label: 'Matemáticas', desc: 'Operaciones numéricas, álgebra, geometría, fracciones y manejo de datos — comparado con la numeración PISA.' },
            { label: 'Razonamiento verbal', desc: 'Analogías, relaciones de palabras, secuencias y lógica — evaluados en el 11+, gramática y exámenes de acceso a colegios privados.' },
            { label: 'Razonamiento no verbal', desc: 'Reconocimiento de patrones, matrices, secuencias y razonamiento espacial — evalúa la resolución de problemas independiente del lenguaje.' },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{label}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Basada en ciencia probada</h2>
        <div className="space-y-4 text-[#6e6e73] leading-relaxed">
          <p>
            Las preguntas de evaluación son generadas por <strong className="text-[#1d1d1f]">Claude AI</strong> (Anthropic), restringidas al tema exacto, nivel de dificultad y rango de edad determinado por nuestro motor IRT. Cada pregunta se calibra en tiempo real — cuando un alumno responde correctamente, la siguiente pregunta es más difícil; cuando tiene dificultades, se vuelve más fácil.
          </p>
          <p>
            Este enfoque adaptativo significa pruebas más cortas con mayor precisión estadística. Una evaluación típica de Eduentry lleva 20–30 minutos por las cuatro materias y produce una puntuación tan fiable como una prueba de formato fijo de 90 minutos.
          </p>
          <p>
            Lee más sobre nuestra metodología de puntuación en la <Link href="/es/metodologia" className="text-[#4F46E5] hover:underline">página de metodología</Link>.
          </p>
        </div>
      </section>

      {/* Ages */}
      <section className="mb-16 border border-[#d2d2d7] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">De 6 a 17 años</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Eduentry se adapta a niños y jóvenes en todos los cursos de primaria y secundaria. Las preguntas se generan para el nivel Key Stage del Reino Unido o el año escolar internacional correspondiente:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { range: '6–7 años',  label: 'KS1 / Años 1–2' },
            { range: '8–10 años', label: 'KS2 / Años 3–5' },
            { range: '11–13 años',label: 'KS3 / Años 7–9' },
            { range: '14–16 años',label: 'KS4 / Años 10–11' },
          ].map(({ range, label }) => (
            <div key={range} className="bg-[#f5f5f7] rounded-xl p-4 text-center">
              <div className="font-semibold text-[#1d1d1f]">{range}</div>
              <div className="text-[#6e6e73] mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship section */}
      <section className="mb-16 bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Evaluación de prácticas — para estudiantes de 14+</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Además de la evaluación académica, Eduentry ofrece una evaluación adaptativa de preparación para prácticas de 34 preguntas para estudiantes de instituto mayores de 14 años. Cubre aptitud general, conocimientos del sector, habilidades profesionales y perfil de intereses en cuatro áreas: Tecnología, Empresa, Análisis de datos y Marketing digital.
        </p>
        <Link href="/es" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
          Saber más sobre la evaluación de prácticas →
        </Link>
      </section>

      {/* Artículos del blog */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Del blog</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/es/blog/como-se-compara-tu-hijo-a-nivel-mundial', label: '¿Cómo se compara tu hijo a nivel mundial?', desc: 'Guía para padres sobre comparativas internacionales: PISA, currículo del Reino Unido e IB.' },
            { href: '/es/blog/practicas-instituto-beneficios-universidad', label: 'Prácticas en el instituto y la universidad', desc: 'Cómo la experiencia laboral temprana mejora las solicitudes universitarias.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Empieza la evaluación gratuita de tu hijo</h2>
        <p className="text-indigo-200 mb-8 text-lg">20–30 minutos. Sin pago. Resultados inmediatos.</p>
        <Link href="/es/auth/register" className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg">
          Empezar gratis
        </Link>
      </section>

    </main>
  )
}
