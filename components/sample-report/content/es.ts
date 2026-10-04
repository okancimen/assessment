import type { SampleReportContent } from '../types'

const content: SampleReportContent = {
  locale: 'es',
  path: '/es/informe-de-ejemplo',
  inLanguage: 'es',
  ogLocale: 'es_ES',
  meta: {
    title: 'Informe de Evaluación de Ejemplo: Mira lo que Recibirás',
    description: 'Mira un informe de evaluación real de Eduentry: puntuación estandarizada, percentil, desglose por materia, análisis por temas y recomendaciones personalizadas.',
    keywords: ['informe de evaluación de ejemplo', 'ejemplo de informe eduentry', 'ejemplo de informe de evaluación infantil', 'informe de puntuación estandarizada', 'informe de percentil', 'resultados de test gratuito para niños'],
    ogTitle: 'Informe de Evaluación de Ejemplo — Eduentry',
    ogDescription: 'Mira exactamente cómo es el informe de tu hijo: puntuación estandarizada, desglose por materia y recomendaciones personalizadas.',
  },
  childName: 'Alex',
  completedDate: '14 de septiembre de 2026',

  banner: 'Informe de ejemplo de un niño ficticio, para que veas exactamente lo que recibirás.',
  bannerCta: 'Obtén el informe real de tu hijo →',
  breadcrumbHome: 'Inicio',
  breadcrumbCurrent: 'Informe de ejemplo',

  sampleBadge: 'Informe de ejemplo · {name}, {age} años',
  heading: 'Resultados de la evaluación de {name}',
  completedLine: 'Completado el {date} · 60 preguntas · 4 materias',
  overall: 'Global',
  topPercent: 'Top {pct}% para {age} años',

  subjects: {
    english:             { label: 'Inglés',                   shortLabel: 'Inglés',       topics: ['Comprensión lectora', 'Gramática y puntuación', 'Vocabulario'] },
    mathematics:         { label: 'Matemáticas',              shortLabel: 'Matemáticas',  topics: ['Aritmética y números', 'Fracciones y decimales', 'Problemas verbales'] },
    verbal_reasoning:    { label: 'Razonamiento Verbal',      shortLabel: 'Verbal',       topics: ['Analogías de palabras', 'Secuencias de letras', 'Relaciones entre palabras'] },
    nonverbal_reasoning: { label: 'Razonamiento No Verbal',   shortLabel: 'No verbal',    topics: ['Matrices de figuras', 'Series y secuencias', 'Analogías de figuras'] },
  },
  bands: ['Necesita apoyo', 'Por debajo de la media', 'Media', 'Por encima de la media', 'Excepcional'],
  bellBands: ['Apoyo', 'Bajo media', 'Media', 'Sobre media', 'Excepcional'],
  percentileFormat: 'P{n}',

  insights: [
    { label: 'Perfil mixto', text: 'Un Razonamiento Verbal fuerte (122) eleva la puntuación global, pero Matemáticas (84) la baja: el perfil muestra altibajos claros.' },
    { label: 'Fortaleza clara: Verbal', text: 'Un SAS de 122 en Razonamiento Verbal sitúa a Alex en el 8% superior para su edad de 10 años.' },
    { label: 'Matemáticas requiere atención', text: 'Un SAS de 84 en Matemáticas está en la banda Necesita apoyo. Fracciones y problemas verbales obtuvieron un 40%: la práctica diaria y enfocada puede cerrar esta brecha.' },
  ],
  bellTitle: 'Distribución de puntuaciones · Percentil',

  intlHeading: 'Contexto internacional',
  intl: {
    uk:   ['Currículo Nacional del Reino Unido', 'Trabaja en el nivel esperado en general, con un perfil notablemente desigual: Verbal al nivel de grammar school, Matemáticas por debajo de lo esperado para su edad.'],
    us:   ['Nivel de grado (EE. UU.)', 'En general, al nivel de su grado; dentro del 30–35% superior nacional, con una variación importante entre materias.'],
    pisa: ['PISA (OCDE)', 'Nivel 3 de PISA: buen rendimiento en la mayoría de las áreas, con carencias concretas que abordar.'],
    ib:   ['Programa IB', 'Probablemente apto para el IB, aunque convendría reforzar las bases de Matemáticas antes de elegir Matemáticas de Nivel Superior.'],
  },
  intlFootnote: 'Basado en una puntuación estandarizada global de {score} · orientativo, no diagnóstico',

  subjectsHeading: 'Puntuaciones por materia',
  correctOf: '{raw} correctas de {total}',
  topicsLabel: 'Temas',
  avgDifficulty: 'dificultad media {d}/10',

  recsHeading: 'Recomendaciones personalizadas',
  recsSub: 'Basadas en el rendimiento por temas',
  recsTarget: 'objetivo con práctica enfocada',
  actionPlan: 'Plan de acción',
  recommendations: {
    english: {
      priority: 'Área de enfoque',
      scorePotential: '+5–7 SAS',
      headline: 'Ampliar el vocabulario con lectura variada',
      rationale: 'El vocabulario es el tema más débil, con un 60%, y está frenando la puntuación de Inglés. La comprensión y la gramática son sólidas: se trata de una carencia concreta.',
      actions: [
        'Leer a diario un artículo de no ficción (noticias para jóvenes, revistas de divulgación): las palabras nuevas en contexto se retienen mejor que en listas',
        'Llevar un cuaderno de vocabulario: 5 palabras nuevas por semana, con su definición y una frase de ejemplo',
        'Practicar preguntas de comprensión inferencial: no solo "encuentra la respuesta", sino "¿qué insinúa el autor?"',
      ],
    },
    verbal_reasoning: {
      priority: 'Mantener y ampliar',
      scorePotential: '+3–5 SAS',
      headline: 'Canalizar esta fortaleza hacia la lectura exigente y los retos',
      rationale: 'Un SAS de 122 ya es Excepcional y está en el 8% superior. El objetivo no es reforzar, sino ampliar: mantener la habilidad afilada bajo presión y acercarse a lo más alto de la escala.',
      actions: [
        'Participar en un concurso escolar o nacional de palabras o pasatiempos: la competición agudiza el rendimiento más allá de la práctica habitual',
        'Leer libros uno o dos años por encima de su edad: obliga a inferir el significado en lugar de reconocerlo cómodamente',
        'Hacer pruebas cronometradas de razonamiento verbal con un 10% menos de tiempo para ganar el margen de velocidad que separa un SAS de 122 de uno de 126+',
      ],
    },
    nonverbal_reasoning: {
      priority: 'Mejora rápida',
      scorePotential: '+5–8 SAS',
      headline: 'Corregir las analogías de figuras: un punto débil, gran impacto',
      rationale: 'Las analogías de figuras obtuvieron un 60%, mientras que matrices y series lograron un 70–80%. Este tipo de pregunta es el cuello de botella. Trabajarlo de forma específica puede llevar el Razonamiento No Verbal a la banda Excepcional.',
      actions: [
        'Practicar solo analogías de figuras durante 10 minutos al día, no ejercicios mixtos',
        'En cada pregunta, describir la transformación con palabras antes de mirar las opciones ("ha girado 90° y ha ganado un punto")',
        'Usar puzles espaciales físicos, como el Tangram o bloques de patrones, para desarrollar un razonamiento espacial intuitivo',
      ],
    },
    mathematics: {
      priority: 'Área de enfoque',
      scorePotential: '+8–12 SAS',
      headline: 'Consolidar las bases numéricas antes de avanzar a temas más difíciles',
      rationale: 'Los tres temas están por debajo del 60%: el 40% en fracciones y problemas verbales indica que las lagunas en el sentido numérico básico frenan el progreso. La prioridad es reforzar los fundamentos, no practicar preguntas más difíciles.',
      actions: [
        'Dedicar 15 minutos diarios a las tablas de multiplicar y al cálculo mental hasta dominar al instante todo hasta 12×12: esto desbloquea las fracciones y los problemas',
        'Usar modelos visuales de fracciones (barras, pizzas) antes de los procedimientos escritos: el concepto debe ir antes que el algoritmo',
        'Resolver un problema verbal al día: rodear los números, subrayar lo que se pregunta y hacer un dibujo antes de escribir cualquier operación',
      ],
    },
  },

  scoreGuide: 'Guía de puntuaciones',
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Qué muestra el informe de evaluación de Eduentry?',
      a: 'El informe muestra la puntuación estandarizada de tu hijo (media 100, DT 15), su percentil frente a compañeros de todo el mundo, las puntuaciones por materia en Inglés, Matemáticas, Razonamiento Verbal y Razonamiento No Verbal, el desglose por temas y recomendaciones de mejora personalizadas generadas con IA.',
    },
    {
      q: '¿Qué es una puntuación estandarizada?',
      a: 'Una puntuación estandarizada (SAS) ajusta la puntuación bruta según la dificultad de las preguntas que recibió el niño, lo que permite comparar de forma justa entre distintas sesiones. Eduentry utiliza una escala con media 100 y desviación típica 15, coherente con evaluaciones muy utilizadas como GL Assessment y CAT4. Una puntuación de 100 significa que el niño rindió exactamente en la media de su grupo de edad.',
    },
    {
      q: '¿Qué significa el percentil del informe?',
      a: 'El percentil indica qué proporción de niños de la misma edad obtuvo una puntuación inferior a la de tu hijo. Por ejemplo, el percentil 68 significa que tu hijo superó al 68% de sus compañeros. Los percentiles se basan en los datos de baremación internacional de Eduentry y ofrecen una imagen más clara que un simple porcentaje de aciertos.',
    },
    {
      q: '¿Cómo interpreto las puntuaciones por materia de mi hijo?',
      a: 'Cada puntuación se sitúa en una de cinco bandas: Necesita apoyo (70–84), Por debajo de la media (85–94), Media (95–109), Por encima de la media (110–119) y Excepcional (120–130). El informe también muestra el desglose por temas dentro de cada materia, para que veas exactamente qué áreas son fuertes y cuáles necesitan práctica específica.',
    },
    {
      q: '¿Para qué edades está diseñada la evaluación?',
      a: 'La evaluación de Eduentry está diseñada para niños de 7 a 14 años, abarcando primaria y los primeros cursos de secundaria. Las preguntas, la calibración de la dificultad y los baremos se ajustan por edad, de modo que la puntuación estandarizada refleja con justicia el rendimiento según la edad exacta de tu hijo en años y meses.',
    },
    {
      q: '¿Puedo compartir el informe con el profesor o el colegio de mi hijo?',
      a: 'Sí. Puedes descargar el informe en PDF o compartir un enlace con un profesor, tutor o el equipo de admisiones de un colegio. El informe está pensado para que lo entiendan tanto los educadores familiarizados con las evaluaciones estandarizadas como los padres que no lo están.',
    },
    {
      q: '¿Cuánto se tarda en completar la evaluación?',
      a: 'La evaluación completa consta de 60 preguntas en cuatro materias y suele durar entre 40 y 60 minutos. Los niños pueden hacer una pausa y continuar más tarde. El informe se genera automáticamente al enviar todas las preguntas y los resultados suelen estar listos en 90 minutos.',
    },
    {
      q: '¿La evaluación es realmente gratuita?',
      a: 'Sí, la evaluación principal y el informe completo son totalmente gratuitos. No se pide tarjeta de crédito al registrarse. Eduentry ofrece el informe gratuito para que los padres entiendan el perfil académico de su hijo antes de decidir si quieren explorar recursos opcionales de apoyo o práctica.',
    },
    {
      q: '¿Qué debo hacer después de recibir el informe?',
      a: 'Empieza por la sección de recomendaciones personalizadas, que prioriza las áreas con mayor potencial de mejora según las puntuaciones por tema de tu hijo. Céntrate primero en las materias de la banda Necesita apoyo antes que en las de Media o Por encima de la media. Comparte el informe con su profesor o tutor para alinear el trabajo en clase o las clases particulares con las carencias detectadas.',
    },
    {
      q: '¿Qué precisión tiene esta evaluación online frente a un test psicométrico profesional?',
      a: 'Eduentry utiliza la Teoría de Respuesta al Ítem (modelo logístico de 2 parámetros con estimación MAP), el mismo marco estadístico de las evaluaciones adaptativas profesionales. Es muy adecuada para identificar fortalezas y debilidades relativas entre materias. Sin embargo, es una herramienta orientativa de cribado, no un diagnóstico clínico ni administrado por un psicólogo educativo. Para decisiones como el apoyo a necesidades educativas especiales, se recomienda una evaluación formal por parte de un profesional cualificado.',
    },
  ],

  ctaBadge: 'Gratis · Sin tarjeta · Resultados en una hora',
  ctaHeading: 'Obtén el informe real de tu hijo, gratis',
  ctaText: 'Este ejemplo te muestra el formato. El informe de tu hijo incluirá sus puntuaciones reales, el desglose real por temas y recomendaciones específicas basadas en sus respuestas.',
  ctaButton: 'Empezar evaluación gratuita →',

  aboutHeading: 'Sobre esta evaluación',
  aboutText: 'Las puntuaciones se calculan con un modelo TRI logístico de 2 parámetros con estimación MAP. La escala de puntuación estandarizada tiene media 100 y desviación típica 15, coherente con los baremos de GL Assessment y CAT4. Las puntuaciones se limitan al rango 70–130. Los resultados son orientativos, no diagnósticos.',
}

export default content
