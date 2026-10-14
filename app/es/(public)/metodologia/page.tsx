import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Metodología de evaluación: IRT y VIA',
  description: 'Evaluación académica adaptativa con TRI de 2 parámetros y evaluación de la personalidad con el marco VIA de Fortalezas del Carácter — dos metodologías distintas para niños de 6 a 17 años.',
  keywords: 'Teoría de Respuesta al Ítem niños, evaluación adaptativa TRI, puntuación estandarizada niños, estimación MAP, metodología evaluación educativa, prueba adaptativa',
  alternates: {
    canonical: `${BASE_URL}/es/metodologia`,
    languages: { es: `${BASE_URL}/es/metodologia`, 'en-GB': `${BASE_URL}/methodology`, tr: `${BASE_URL}/tr/metodoloji`, fr: `${BASE_URL}/fr/methodologie`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Cómo funciona Eduentry — Metodología de evaluación adaptativa IRT',
    description: 'TRI de 2 parámetros, estimación MAP, puntuación estandarizada (media 100, DT 15) y comparación internacional con el currículo del Reino Unido, PISA, EE.UU. e IB.',
    url: `${BASE_URL}/es/metodologia`,
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo funciona Eduentry — Metodología de evaluación adaptativa IRT',
    description: 'TRI de 2 parámetros, estimación MAP, puntuación estandarizada (media 100, DT 15) y comparación internacional con el currículo del Reino Unido, PISA, EE.UU. e IB.',
    images: [`${BASE_URL}/es/metodologia/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/es` },
    { '@type': 'ListItem', position: 2, name: 'Metodología', item: `${BASE_URL}/es/metodologia` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es la evaluación adaptativa?', acceptedAnswer: { '@type': 'Answer', text: 'La evaluación adaptativa es una tecnología que calibra cada pregunta en tiempo real según las respuestas previas del niño. A diferencia de los tests tradicionales con un conjunto fijo de preguntas, este método ajusta el nivel de dificultad al rendimiento real de cada estudiante.' } },
    { '@type': 'Question', name: '¿Qué es la Teoría de Respuesta al Ítem (TRI)?', acceptedAnswer: { '@type': 'Answer', text: 'La Teoría de Respuesta al Ítem (TRI) es una teoría de medición que modela cada pregunta según sus propiedades estadísticas: dificultad, discriminación y factor de azar. Las evaluaciones de Eduentry se basan en la TRI para ofrecer estimaciones de habilidad precisas y comparables con benchmarks internacionales.' } },
    { '@type': 'Question', name: '¿Cómo funciona la metodología de Eduentry?', acceptedAnswer: { '@type': 'Answer', text: 'A medida que el niño responde cada pregunta, el sistema actualiza la estimación de habilidad al instante y ajusta la dificultad de la siguiente pregunta. Esto permite obtener mediciones más precisas que los tests estándar con muchas menos preguntas.' } },
    { '@type': 'Question', name: '¿Las evaluaciones están alineadas con estándares internacionales?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los resultados de Eduentry están diseñados para ser comparables con estándares internacionales como PISA, el Currículo Nacional del Reino Unido y el IB. Se presentan puntuaciones normalizadas y clasificaciones percentiles globales.' } },
    { '@type': 'Question', name: '¿Qué es el marco VIA de Fortalezas del Carácter?', acceptedAnswer: { '@type': 'Answer', text: 'El marco VIA de Fortalezas del Carácter fue desarrollado por los pioneros de la psicología positiva Dr. Martin Seligman y Dr. Neal Mayerson. Identifica 24 rasgos de carácter universales agrupados en 6 virtudes fundamentales: Sabiduría, Coraje, Humanidad, Justicia, Templanza y Trascendencia. Ha sido validado entre culturas y es utilizado por investigadores en más de 190 países.' } },
    { '@type': 'Question', name: '¿Por qué la evaluación de personalidad la completan los padres, no el niño?', acceptedAnswer: { '@type': 'Answer', text: 'Las autopercepciones de los niños — especialmente entre los 6 y 13 años — cambian rápidamente y pueden ser inconsistentes. La observación parental refleja la perspectiva objetiva de quien ve al niño cada día, produciendo un perfil de carácter más estable y preciso.' } },
  ],
}

export default function MetodologiaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/es" className="hover:text-[#1d1d1f]">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Metodología</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">Metodología</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Cómo funciona la evaluación adaptativa de Eduentry</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          Eduentry utiliza dos metodologías distintas: evaluación adaptativa basada en la <strong className="text-[#1d1d1f]">Teoría de Respuesta al Ítem</strong> para
          competencias académicas; cuestionario de observación parental basado en el marco de <strong className="text-[#1d1d1f]">Fortalezas del Carácter VIA</strong> para
          rasgos de carácter. Cada una responde una pregunta diferente.
        </p>
      </div>

      {/* Methodology switcher cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border-2 border-[#4F46E5] bg-[#eef2ff] p-6">
          <p className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-2">Metodología 1</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">Evaluación académica IRT</h2>
          <p className="text-sm text-[#6e6e73] leading-relaxed">Puntuación académica estandarizada mediante preguntas adaptativas y TRI 2PL — escala media 100, DT 15, con comparación internacional.</p>
        </div>
        <div className="rounded-2xl border-2 border-violet-300 bg-violet-50 p-6">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-2">Metodología 2</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">Evaluación VIA de Fortalezas del Carácter</h2>
          <p className="text-sm text-[#6e6e73] leading-relaxed">Perfil de 24 rasgos de carácter universales mediante cuestionario de observación parental — clasificación de fortalezas en lugar de una puntuación única.</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* ── METHODOLOGY 1 ── */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider bg-[#eef2ff] border border-[#c7d2fe] rounded-full px-3 py-1">Metodología 1 — Evaluación académica IRT</span>
        </div>

        {/* Adaptive Testing */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Evaluación adaptativa</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            A diferencia de una prueba fija donde todos los niños responden las mismas preguntas, Eduentry se adapta en tiempo real.
            Después de cada respuesta, el sistema actualiza su estimación del nivel de habilidad del niño y selecciona
            la siguiente pregunta para proporcionar la máxima precisión de medición en ese nivel.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Esto significa que un niño que responde correctamente recibe preguntas más difíciles; uno que tiene dificultades
            recibe preguntas más fáciles. El resultado: se necesitan menos preguntas para lograr la misma precisión de medición
            que una prueba tradicional de longitud fija.
          </p>
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#4F46E5] mb-2">Ventaja principal</p>
            <p className="text-[#1d1d1f] text-sm leading-relaxed">
              Una prueba adaptativa de 15 preguntas puede igualar la precisión de una prueba fija de 100 preguntas,
              porque cada pregunta se elige para ser maximalmente informativa para ese niño específico.
            </p>
          </div>
        </section>

        {/* IRT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Teoría de Respuesta al Ítem (TRI)</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Eduentry usa el <strong className="text-[#1d1d1f]">modelo logístico de 2 parámetros (2PL TRI)</strong> — el mismo modelo
            utilizado por PISA, evaluaciones estandarizadas a gran escala y psicólogos educativos profesionales.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">Cada pregunta tiene dos parámetros:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Dificultad (b)</strong> — el nivel de habilidad en el que un niño tiene un 50% de probabilidad de responder correctamente.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Discriminación (a)</strong> — qué tan bien diferencia la pregunta entre niños justo por debajo y justo por encima del umbral de dificultad.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73] leading-relaxed">
            La estimación de habilidad usa la <strong className="text-[#1d1d1f]">estimación de Máximo A Posteriori (MAP)</strong> con una
            distribución a priori normal estándar. Después de cada respuesta, la distribución posterior sobre la habilidad se
            actualiza mediante el teorema de Bayes, y la estimación MAP se toma como estimación de habilidad actual.
          </p>
        </section>

        {/* Scoring Scale */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Escala de puntuación</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Las estimaciones de habilidad IRT brutas (θ) se transforman a una escala estandarizada con
            <strong className="text-[#1d1d1f]"> media 100 y desviación típica 15</strong> — la misma escala usada por
            CAT4, las pruebas estandarizadas del 11+ y evaluaciones cognitivas profesionales como WISC y WASI.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Rango de puntuación</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Banda</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Percentil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5f7]">
                <tr className="bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                  <td className="py-3 px-4 text-emerald-700">Excepcional</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentil 90+</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">110–119</td>
                  <td className="py-3 px-4 text-blue-700">Por encima de la media</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentil 75–90</td>
                </tr>
                <tr className="bg-[#eef2ff]">
                  <td className="py-3 px-4 font-semibold text-[#4F46E5]">95–109</td>
                  <td className="py-3 px-4 text-[#4F46E5]">Media</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentil 37–73</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">85–94</td>
                  <td className="py-3 px-4 text-amber-700">Por debajo de la media</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentil 16–37</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-3 px-4 font-semibold text-red-700">Menos de 85</td>
                  <td className="py-3 px-4 text-red-700">Necesita apoyo</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Por debajo del percentil 16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6e6e73] mt-3">
            El 68% de los niños puntúa entre 85 y 115 (dentro de ±1 desviación típica de la media).
          </p>
        </section>

        {/* International Benchmarks */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Referencias internacionales</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Eduentry mapea cada banda de puntuación a cuatro marcos educativos reconocidos internacionalmente,
            dando a las familias un contexto global del rendimiento de su hijo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                flag: '🇬🇧',
                name: 'Currículo Nacional del Reino Unido',
                detail: 'Las puntuaciones se mapean a: por debajo del nivel esperado / aproximándose / alcanzando / por encima / muy capaz. Las puntuaciones competitivas para acceso a escuelas de gramática son generalmente 115+.',
                color: 'border-blue-100 bg-blue-50',
              },
              {
                flag: '🇺🇸',
                name: 'Niveles de grado de EE.UU.',
                detail: 'Las puntuaciones se mapean a: por debajo / aproximándose / en / por encima / significativamente por encima del nivel de grado, alineadas con el Common Core y los descriptores de competencia NAEP.',
                color: 'border-violet-100 bg-violet-50',
              },
              {
                flag: '🌍',
                name: 'PISA (OCDE)',
                detail: 'Las puntuaciones se mapean a los niveles de competencia PISA del 1 al 6. El rendimiento medio de la OCDE corresponde aproximadamente al Nivel 3, equivalente a una puntuación estandarizada cercana a 100.',
                color: 'border-emerald-100 bg-emerald-50',
              },
              {
                flag: '🎓',
                name: 'Programa IB',
                detail: 'Las puntuaciones indican preparación para el Programa de Años Intermedios del IB, el Nivel Estándar del IB, o las asignaturas de Nivel Superior del Programa del Diploma.',
                color: 'border-amber-100 bg-amber-50',
              },
            ].map(({ flag, name, detail, color }) => (
              <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
                  <h3 className="font-semibold text-[#1d1d1f] text-sm">{name}</h3>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you learn */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Qué aprendes con los resultados</h2>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'Puntuación estandarizada y categoría de rendimiento', desc: 'Una puntuación en la escala media-100, DT-15, clasificada en una de cinco bandas: Necesita apoyo (70–84), Por debajo de la media (85–94), Media (95–109), Por encima de la media (110–119) o Excepcional (120+).' },
              { title: 'Clasificación percentil global', desc: 'Cómo rinde el alumno en comparación con sus compañeros de la misma edad en todo el mundo, expresado como percentil (p.ej. top 10%, top 25%).' },
              { title: 'Desglose detallado por materia', desc: 'Puntuaciones individuales y bandas de rendimiento para Inglés, Matemáticas, Razonamiento Verbal y Razonamiento No Verbal.' },
              { title: 'Comparación internacional', desc: 'La puntuación mapeada a los niveles del Currículo Nacional del Reino Unido, equivalentes de grado de EE.UU., niveles de competencia PISA y preparación para el programa IB.' },
              { title: 'Recomendaciones personalizadas generadas por IA', desc: 'Recomendaciones de estudio específicas basadas en el perfil de rendimiento del alumno, destacando las áreas con mayor probabilidad de mejorar la puntuación global.' },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] block" />
                </span>
                <span className="text-[#6e6e73] leading-relaxed">
                  <strong className="text-[#1d1d1f]">{title}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[#6e6e73]">
            ¿Quieres verlo todo en una sola página?{' '}
            <Link href="/es/informe-de-ejemplo" className="text-[#4F46E5] hover:underline font-medium">Consulta el informe de ejemplo →</Link>
          </p>
        </section>

        {/* Materias evaluadas */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Materias evaluadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Inglés', icon: '📚', detail: 'Comprensión lectora, gramática, vocabulario, ortografía y convenciones del lenguaje escrito.' },
              { name: 'Matemáticas', icon: '🔢', detail: 'Aritmética, álgebra, geometría, estadística y resolución de problemas matemáticos.' },
              { name: 'Razonamiento Verbal', icon: '💬', detail: 'Analogías de palabras, clasificación, series lógicas y resolución de problemas basados en lenguaje.' },
              { name: 'Razonamiento No Verbal', icon: '🔷', detail: 'Reconocimiento de patrones, razonamiento espacial, completar matrices y lógica visual.' },
            ].map(({ name, icon, detail }) => (
              <div key={name} className="bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{icon}</span>
                  <h3 className="font-semibold text-[#1d1d1f]">{name}</h3>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODOLOGY 2 ── */}
        <div className="flex items-center gap-3 pt-4">
          <span className="text-xs font-bold text-violet-600 uppercase tracking-wider bg-violet-50 border border-violet-200 rounded-full px-3 py-1">Metodología 2 — Evaluación VIA de Fortalezas del Carácter</span>
        </div>

        {/* Evaluación de personalidad */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Metodología de la evaluación de personalidad</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            La evaluación de fortalezas del carácter utiliza un enfoque fundamentalmente distinto al de la evaluación académica adaptativa IRT. En lugar de medir el conocimiento y el razonamiento, cuantifica los rasgos de carácter de un niño mediante <strong className="text-[#1d1d1f]">observación parental estructurada</strong> — completada por el adulto que ve al niño cada día.
          </p>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">El marco VIA de fortalezas del carácter</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            La evaluación se basa en el marco VIA de Fortalezas del Carácter, desarrollado por los pioneros de la psicología positiva Dr. Martin Seligman y Dr. Neal Mayerson. Identifica 24 rasgos de carácter universales agrupados en 6 virtudes fundamentales: Sabiduría, Coraje, Humanidad, Justicia, Templanza y Trascendencia. Ha sido validado entre culturas y es utilizado por investigadores en más de 190 países.
          </p>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">Diseño del cuestionario para padres</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Los padres completan un breve cuestionario de observación con valoraciones de 1 a 5 estrellas sobre los comportamientos que observan en su hijo cada día. El niño no participa directamente. Este diseño es intencional: las autopercepciones de los niños cambian rápidamente, y la observación parental ofrece una base más estable — especialmente para los 6–13 años.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Las preguntas están calibradas al estadio de desarrollo del niño. Cuatro grupos de edad adaptan el vocabulario y los rasgos evaluados a cómo el carácter se desarrolla típicamente en cada etapa:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {([
              { tier: 'Junior', age: '6–9 años', traits: '12 rasgos', questions: '24 preguntas', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { tier: 'Intermedio', age: '10–13 años', traits: '15 rasgos', questions: '30 preguntas', color: 'bg-green-50 border-green-200 text-green-700' },
              { tier: 'Adolescente', age: '14–17 años', traits: '20 rasgos', questions: '40 preguntas', color: 'bg-purple-50 border-purple-200 text-purple-700' },
              { tier: 'Joven adulto', age: '18–20 años', traits: '24 rasgos', questions: '48 preguntas', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ] as const).map((t) => (
              <div key={t.tier} className={`rounded-xl border p-3 text-center ${t.color}`}>
                <p className="font-bold text-sm mb-0.5">{t.tier}</p>
                <p className="text-xs opacity-80">{t.age}</p>
                <p className="text-xs mt-1">{t.traits}</p>
                <p className="text-xs">{t.questions}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">Lo que produce el informe</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            A diferencia de la evaluación académica, el informe de personalidad no produce una puntuación estandarizada única. Clasifica los rasgos entre sí y genera:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Top 5 de fortalezas principales</strong> — los rasgos donde el niño obtiene las puntuaciones más altas, sus áreas de excelencia natural.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">3 áreas de crecimiento</strong> — los rasgos con mayor potencial de desarrollo, presentados con enfoque constructivo en lugar de déficit.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Ejercicios generados por IA</strong> — actividades prácticas adaptadas al perfil único de fortalezas del niño, realizables en casa.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73]">
            ¿Quieres ver cómo es el perfil de carácter de tu hijo?{' '}
            <Link href="/es/evaluacion-de-personalidad" className="text-[#4F46E5] hover:underline font-medium">Iniciar la evaluación de personalidad gratuita →</Link>
          </p>
        </section>

        {/* Transparencia */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Transparencia</h2>
          <div className="space-y-4">
            <p className="text-[#6e6e73] leading-relaxed">
              Eduentry ofrece un enfoque de evaluación robusto y adaptativo que refleja con precisión las capacidades académicas de cada alumno.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Las evaluaciones tradicionales suelen estar limitadas por conjuntos de preguntas fijas, lo que puede hacer que los resultados reflejen la dificultad del test en lugar de las capacidades reales del alumno. Eduentry elimina esta limitación mediante un motor adaptativo impulsado por IA que ajusta continuamente la dificultad de las preguntas según las respuestas de cada alumno. Así, los resultados reflejan el potencial real del alumno, no la estructura del test.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Aunque la metodología de Eduentry difiere de CAT4, GL Assessment y WISC, los resultados proporcionan una base fiable y procesable para la planificación educativa y la toma de decisiones. Cuando se requiere una evaluación diagnóstica formal, Eduentry complementa de forma valiosa las herramientas psicométricas establecidas.
            </p>
          </div>
        </section>

      </div>

      {/* Artículos del blog */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Del blog</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/es/blog/como-se-compara-tu-hijo-a-nivel-mundial', label: '¿Cómo se compara tu hijo a nivel mundial?', desc: 'Guía sobre benchmarks internacionales: PISA, currículo UK e IB explicados para padres.' },
            { href: '/es/blog/practicas-instituto-beneficios-universidad', label: 'Prácticas en el instituto y la universidad', desc: 'Por qué las puntuaciones estandarizadas importan en el acceso universitario.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Ver el percentil de tu hijo</h2>
        <p className="text-[#6e6e73] mb-6">Evaluación gratuita · De 6 a 17 años · Resultados en una hora</p>
        <Link href="/es/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          Empezar evaluación gratuita
        </Link>
      </div>
    </main>
  )
}
