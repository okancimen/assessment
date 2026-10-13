// Per-locale marketing copy + AI-summary text for the public personality
// sample report. Trait/virtue labels come from getPersonalityI18n; the numeric
// profile is shared from lib/sample-personality.ts.

export type SampleLocale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

export interface SamplePersonalityContent {
  bannerLabel: string
  introHeading: string
  introBody: string
  introCtaLabel: string
  profileSubLabel: string
  closingHeading: string
  closingBody: string
  closingCtaLabel: string
  academicSampleLabel: string
  metaTitle: string
  metaDescription: string
  aiSummary: string
}

// Localized sample-report URLs (this page), for hreflang + cross-links.
export const SAMPLE_PERSONALITY_PATHS: Record<SampleLocale, string> = {
  en: '/sample-report/personality',
  tr: '/tr/kisilik-ornek-rapor',
  es: '/es/informe-de-ejemplo-personalidad',
  fr: '/fr/exemple-rapport-personnalite',
  ar: '/ar/namudhaj-taqrir-shakhsiya',
  ru: '/ru/primer-otcheta-lichnosti',
  zh: '/zh/xingge-yangben-baogao',
}

// Personality assessment landing (guest flow) per locale.
export const PERSONALITY_ASSESSMENT_PATHS: Record<SampleLocale, string> = {
  en: '/personality-assessment',
  tr: '/tr/kisilik-degerlendirmesi',
  es: '/es/evaluacion-de-personalidad',
  fr: '/fr/evaluation-de-personnalite',
  ar: '/ar/taqyim-al-shakhsiya',
  ru: '/ru/otsenka-lichnosti',
  zh: '/zh/xingge-pinggu',
}

// Academic sample report per locale (cross-link target).
export const ACADEMIC_SAMPLE_PATHS: Record<SampleLocale, string> = {
  en: '/sample-report',
  tr: '/tr/ornek-rapor',
  es: '/es/informe-de-ejemplo',
  fr: '/fr/exemple-de-rapport',
  ar: '/ar/taqrir-namudhaji',
  ru: '/ru/primer-otcheta',
  zh: '/zh/yangben-baogao',
}

export const SAMPLE_PERSONALITY_I18N: Record<SampleLocale, SamplePersonalityContent> = {
  en: {
    bannerLabel: 'Sample report · fictional child',
    introHeading: 'This is what you’ll get — before you start',
    introBody:
      'Maya is a fictional 11-year-old. We’ve given her a deliberately mixed profile — standout curiosity, kindness and creativity, with self-regulation as an area to nurture — so you can see what the character-strengths report looks like across all 24 VIA traits. Your child’s report will show their real scores.',
    introCtaLabel: 'Start free — about 5 minutes →',
    profileSubLabel: 'Sample profile',
    closingHeading: 'Get your child’s real strengths profile',
    closingBody:
      'Free, about 5 minutes, no account needed. You’ll see their top strengths, growth areas, and a personalised AI summary.',
    closingCtaLabel: 'Start free assessment →',
    academicSampleLabel: 'See the academic sample report',
    metaTitle: 'Sample Personality Report — VIA Character Strengths | Eduentry',
    metaDescription:
      'See exactly what Eduentry’s free character-strengths report looks like before you start — a fictional sample across all 24 VIA traits, 6 virtues, radar chart, peer comparison, and an AI summary.',
    aiSummary: `Maya leads with a bright, questioning mind. Her strongest traits — curiosity, kindness, and creativity — paint the picture of a child who is energised by discovering how things work and quick to bring others along with her. This combination is a real asset: she is the kind of learner who asks "why" one more time than her peers, and the kind of friend who notices when someone is left out.

Her curiosity (4.8/5) is well above the average for her age group, and it pairs naturally with her creativity (4.6/5) — she doesn’t just want to understand things, she wants to make something new with what she learns. Channelled well, this is the engine behind strong writing, inventive problem-solving, and a genuine love of projects. Her kindness (4.7/5) means she tends to use these strengths in the service of others.

The areas to nurture are around self-management rather than ability. Self-regulation (2.3/5) and prudence (2.6/5) sit below the age-group average, which often shows up as big ideas that are hard to finish, or enthusiasm that outruns planning. This is very normal at 11 — the parts of the brain that govern impulse control and forward planning are still developing — and it responds well to gentle structure rather than pressure.

A few simple habits tend to help children with this profile: breaking a project into three visible steps, a short "what’s my plan?" pause before starting, and celebrating finished work as much as new ideas. Pairing her natural curiosity with one small follow-through goal each week builds the self-regulation muscle without dampening the spark that makes her who she is.`,
  },

  tr: {
    bannerLabel: 'Örnek rapor · kurgusal çocuk',
    introHeading: 'Başlamadan önce — elde edeceğiniz şey bu',
    introBody:
      'Maya kurgusal 11 yaşında bir çocuktur. Karakter güçleri raporunun 24 VIA özelliğinin tamamında nasıl göründüğünü görebilmeniz için ona bilinçli olarak karışık bir profil verdik — öne çıkan merak, nezaket ve yaratıcılık, geliştirilecek alan olarak ise öz-düzenleme. Çocuğunuzun raporu gerçek puanlarını gösterecektir.',
    introCtaLabel: 'Ücretsiz başla — yaklaşık 5 dakika →',
    profileSubLabel: 'Örnek profil',
    closingHeading: 'Çocuğunuzun gerçek güçlü yönler profilini alın',
    closingBody:
      'Ücretsiz, yaklaşık 5 dakika, hesap gerekmez. En güçlü yönlerini, gelişim alanlarını ve kişiselleştirilmiş bir yapay zeka özetini göreceksiniz.',
    closingCtaLabel: 'Ücretsiz değerlendirmeyi başlat →',
    academicSampleLabel: 'Akademik örnek raporu görün',
    metaTitle: 'Örnek Kişilik Raporu — VIA Karakter Güçleri | Eduentry',
    metaDescription:
      'Başlamadan önce Eduentry’nin ücretsiz karakter güçleri raporunun nasıl göründüğünü görün — 24 VIA özelliği, 6 erdem, radar grafiği, akran karşılaştırması ve yapay zeka özeti.',
    aiSummary: `Maya, meraklı ve sorgulayan bir zihinle öne çıkıyor. En güçlü özellikleri — merak, nezaket ve yaratıcılık — bir şeylerin nasıl işlediğini keşfetmekten enerji alan ve başkalarını da peşinden sürükleyen bir çocuk tablosu çiziyor. Bu bileşim gerçek bir avantajdır.

Maya’nın merakı (4.8/5) yaş grubunun ortalamasının oldukça üzerinde ve yaratıcılığıyla (4.6/5) doğal olarak örtüşüyor — sadece bir şeyleri anlamak değil, öğrendikleriyle yeni bir şey yaratmak istiyor. Nezaketi (4.7/5), bu güçlü yönleri başkalarının yararına kullandığı anlamına gelir.

Geliştirilecek alanlar yeteneğinden çok öz-yönetimle ilgili. Öz-düzenleme (2.3/5) ve sağgörü (2.6/5) yaş grubu ortalamasının altında; bu genellikle bitirmesi zor büyük fikirler ya da planlamayı aşan bir coşku olarak kendini gösterir. 11 yaşında bu son derece normaldir ve baskı yerine nazik bir yapıyla iyi sonuç verir.

Bu profildeki çocuklara birkaç basit alışkanlık yardımcı olur: bir projeyi üç görünür adıma bölmek, başlamadan önce kısa bir "planım ne?" duraklaması ve biten işi en az yeni fikirler kadar kutlamak. Doğal merakını her hafta küçük bir takip hedefiyle eşleştirmek, onu o yapan kıvılcımı söndürmeden öz-düzenleme kasını güçlendirir.`,
  },

  es: {
    bannerLabel: 'Informe de ejemplo · niña ficticia',
    introHeading: 'Esto es lo que obtendrás — antes de empezar',
    introBody:
      'Maya es una niña ficticia de 11 años. Le hemos dado un perfil deliberadamente variado — curiosidad, amabilidad y creatividad destacadas, con la autorregulación como área a desarrollar — para que veas cómo es el informe de fortalezas de carácter en los 24 rasgos VIA. El informe de tu hijo mostrará sus puntuaciones reales.',
    introCtaLabel: 'Empezar gratis — unos 5 minutos →',
    profileSubLabel: 'Perfil de ejemplo',
    closingHeading: 'Obtén el perfil de fortalezas real de tu hijo',
    closingBody:
      'Gratis, unos 5 minutos, sin necesidad de cuenta. Verás sus principales fortalezas, áreas de crecimiento y un resumen personalizado con IA.',
    closingCtaLabel: 'Empezar evaluación gratuita →',
    academicSampleLabel: 'Ver el informe académico de ejemplo',
    metaTitle: 'Informe de Personalidad de Ejemplo — Fortalezas de Carácter VIA | Eduentry',
    metaDescription:
      'Mira cómo es el informe gratuito de fortalezas de carácter de Eduentry antes de empezar — un ejemplo con los 24 rasgos VIA, 6 virtudes, gráfico radar, comparación con pares y un resumen con IA.',
    aiSummary: `Maya destaca por una mente brillante y curiosa. Sus rasgos más fuertes — curiosidad, amabilidad y creatividad — dibujan a una niña que se entusiasma descubriendo cómo funcionan las cosas y que rápidamente lleva a los demás consigo. Esta combinación es una verdadera ventaja.

Su curiosidad (4.8/5) está muy por encima de la media de su grupo de edad y se combina de forma natural con su creatividad (4.6/5): no solo quiere entender las cosas, quiere crear algo nuevo con lo que aprende. Su amabilidad (4.7/5) significa que suele poner estas fortalezas al servicio de los demás.

Las áreas a desarrollar tienen que ver con la autogestión, no con la capacidad. La autorregulación (2.3/5) y la prudencia (2.6/5) están por debajo de la media de su edad, lo que suele manifestarse como grandes ideas difíciles de terminar o un entusiasmo que se adelanta a la planificación. Es muy normal a los 11 años y responde bien a una estructura suave en lugar de a la presión.

Algunos hábitos sencillos ayudan a los niños con este perfil: dividir un proyecto en tres pasos visibles, una breve pausa de "¿cuál es mi plan?" antes de empezar, y celebrar el trabajo terminado tanto como las ideas nuevas. Combinar su curiosidad natural con una pequeña meta de seguimiento cada semana fortalece la autorregulación sin apagar la chispa que la hace ser quien es.`,
  },

  fr: {
    bannerLabel: 'Rapport exemple · enfant fictif',
    introHeading: 'Voici ce que vous obtiendrez — avant de commencer',
    introBody:
      'Maya est une enfant fictive de 11 ans. Nous lui avons donné un profil volontairement contrasté — curiosité, gentillesse et créativité marquées, avec l’autorégulation comme axe à développer — pour que vous voyiez à quoi ressemble le rapport des forces de caractère sur les 24 traits VIA. Le rapport de votre enfant affichera ses vrais scores.',
    introCtaLabel: 'Commencer — environ 5 minutes →',
    profileSubLabel: 'Profil exemple',
    closingHeading: 'Obtenez le vrai profil de forces de votre enfant',
    closingBody:
      'Gratuit, environ 5 minutes, sans compte. Vous verrez ses principales forces, ses axes de progrès et un résumé personnalisé par IA.',
    closingCtaLabel: 'Commencer l’évaluation gratuite →',
    academicSampleLabel: 'Voir le rapport académique exemple',
    metaTitle: 'Rapport de Personnalité Exemple — Forces de Caractère VIA | Eduentry',
    metaDescription:
      'Découvrez à quoi ressemble le rapport gratuit des forces de caractère d’Eduentry avant de commencer — un exemple sur les 24 traits VIA, 6 vertus, graphique radar, comparaison aux pairs et résumé IA.',
    aiSummary: `Maya se distingue par un esprit vif et curieux. Ses traits les plus forts — curiosité, gentillesse et créativité — dessinent une enfant qui s’énergise en découvrant comment les choses fonctionnent et qui entraîne volontiers les autres avec elle. Cette combinaison est un vrai atout.

Sa curiosité (4,8/5) est bien au-dessus de la moyenne de son âge et s’associe naturellement à sa créativité (4,6/5) : elle ne veut pas seulement comprendre, elle veut créer quelque chose de nouveau avec ce qu’elle apprend. Sa gentillesse (4,7/5) fait qu’elle met souvent ces forces au service des autres.

Les axes à développer concernent l’autogestion plutôt que les capacités. L’autorégulation (2,3/5) et la prudence (2,6/5) sont sous la moyenne de son âge, ce qui se traduit souvent par de grandes idées difficiles à terminer ou un enthousiasme qui devance la planification. C’est très normal à 11 ans et cela répond bien à une structure douce plutôt qu’à la pression.

Quelques habitudes simples aident les enfants à ce profil : découper un projet en trois étapes visibles, une courte pause « quel est mon plan ? » avant de commencer, et célébrer le travail terminé autant que les nouvelles idées. Associer sa curiosité naturelle à un petit objectif de suivi chaque semaine renforce l’autorégulation sans éteindre l’étincelle qui fait ce qu’elle est.`,
  },

  ar: {
    bannerLabel: 'تقرير نموذجي · طفلة خيالية',
    introHeading: 'هذا ما ستحصل عليه — قبل أن تبدأ',
    introBody:
      'مايا طفلة خيالية عمرها 11 عامًا. أعطيناها ملفًا متنوعًا عن قصد — فضول ولطف وإبداع بارزة، مع التنظيم الذاتي كمجال للتطوير — حتى ترى شكل تقرير نقاط القوة عبر جميع سمات VIA الـ 24. تقرير طفلك سيظهر درجاته الحقيقية.',
    introCtaLabel: 'ابدأ مجانًا — حوالي 5 دقائق →',
    profileSubLabel: 'ملف نموذجي',
    closingHeading: 'احصل على ملف نقاط القوة الحقيقي لطفلك',
    closingBody:
      'مجانًا، حوالي 5 دقائق، دون حاجة لحساب. سترى أبرز نقاط قوته ومجالات نموه وملخصًا مخصصًا بالذكاء الاصطناعي.',
    closingCtaLabel: 'ابدأ التقييم المجاني →',
    academicSampleLabel: 'اطلع على التقرير الأكاديمي النموذجي',
    metaTitle: 'تقرير شخصية نموذجي — نقاط القوة الشخصية VIA | Eduentry',
    metaDescription:
      'شاهد شكل تقرير نقاط القوة المجاني من Eduentry قبل أن تبدأ — نموذج عبر سمات VIA الـ 24، 6 فضائل، مخطط رادار، مقارنة بالأقران وملخص بالذكاء الاصطناعي.',
    aiSummary: `تتميز مايا بعقل متوقد وفضولي. سماتها الأقوى — الفضول واللطف والإبداع — ترسم صورة طفلة تستمد طاقتها من اكتشاف كيف تعمل الأشياء وتأخذ الآخرين معها. هذا المزيج ميزة حقيقية.

فضولها (4.8/5) أعلى بكثير من متوسط فئتها العمرية ويتكامل طبيعيًا مع إبداعها (4.6/5): لا تريد فهم الأشياء فحسب، بل صنع شيء جديد بما تتعلمه. ولطفها (4.7/5) يعني أنها توظف هذه النقاط في خدمة الآخرين.

مجالات التطوير تتعلق بإدارة الذات لا بالقدرة. التنظيم الذاتي (2.3/5) والحصافة (2.6/5) دون متوسط العمر، وهو ما يظهر غالبًا كأفكار كبيرة يصعب إنهاؤها. هذا طبيعي جدًا في سن الـ 11 ويستجيب لبنية لطيفة بدلاً من الضغط.

بضع عادات بسيطة تساعد: تقسيم المشروع إلى ثلاث خطوات واضحة، ووقفة قصيرة "ما خطتي؟" قبل البدء، والاحتفاء بالعمل المنجز بقدر الاحتفاء بالأفكار الجديدة.`,
  },

  ru: {
    bannerLabel: 'Пример отчёта · вымышленный ребёнок',
    introHeading: 'Вот что вы получите — ещё до начала',
    introBody:
      'Майя — вымышленная 11-летняя девочка. Мы намеренно дали ей смешанный профиль — яркая любознательность, доброта и творчество, а саморегуляция — как зона роста — чтобы вы увидели, как выглядит отчёт по сильным сторонам по всем 24 чертам VIA. В отчёте вашего ребёнка будут его реальные баллы.',
    introCtaLabel: 'Начать бесплатно — около 5 минут →',
    profileSubLabel: 'Пример профиля',
    closingHeading: 'Получите настоящий профиль сильных сторон вашего ребёнка',
    closingBody:
      'Бесплатно, около 5 минут, без регистрации. Вы увидите его главные сильные стороны, зоны роста и персональное резюме от ИИ.',
    closingCtaLabel: 'Начать бесплатную оценку →',
    academicSampleLabel: 'Смотреть академический пример отчёта',
    metaTitle: 'Пример отчёта о личности — сильные стороны характера VIA | Eduentry',
    metaDescription:
      'Посмотрите, как выглядит бесплатный отчёт Eduentry о сильных сторонах характера — пример по всем 24 чертам VIA, 6 добродетелей, диаграмма-радар, сравнение со сверстниками и резюме от ИИ.',
    aiSummary: `Майя выделяется ярким, пытливым умом. Её самые сильные черты — любознательность, доброта и творчество — рисуют ребёнка, который заряжается энергией, открывая, как устроен мир, и легко увлекает других. Это сочетание — настоящее преимущество.

Её любознательность (4.8/5) заметно выше среднего для её возраста и естественно сочетается с творчеством (4.6/5): она хочет не просто понять, а создать новое из того, что узнала. Доброта (4.7/5) означает, что она часто направляет эти сильные стороны на помощь другим.

Зоны роста касаются самоорганизации, а не способностей. Саморегуляция (2.3/5) и благоразумие (2.6/5) ниже среднего для возраста — это часто проявляется как большие идеи, которые трудно довести до конца. В 11 лет это совершенно нормально и лучше всего откликается на мягкую структуру, а не давление.

Помогают несколько простых привычек: разбить проект на три видимых шага, короткая пауза "каков мой план?" перед началом и празднование завершённой работы наравне с новыми идеями.`,
  },

  zh: {
    bannerLabel: '示例报告 · 虚构孩童',
    introHeading: '这就是你将获得的 — 开始之前',
    introBody:
      'Maya 是一位虚构的11岁孩子。我们特意给她设计了一个混合型档案 — 好奇心、善良和创造力突出，而自我调节则是需要培养的领域 — 让你看到品格优势报告在全部24项VIA特质上的样子。你孩子的报告将显示他们的真实分数。',
    introCtaLabel: '免费开始 — 约5分钟 →',
    profileSubLabel: '示例档案',
    closingHeading: '获取您孩子的真实优势档案',
    closingBody:
      '免费，约5分钟，无需账户。您将看到他们的核心优势、成长领域以及个性化的AI摘要。',
    closingCtaLabel: '开始免费测评 →',
    academicSampleLabel: '查看学术示例报告',
    metaTitle: '性格示例报告 — VIA品格优势 | Eduentry',
    metaDescription:
      '开始前先看看Eduentry免费品格优势报告的样子 — 涵盖全部24项VIA特质、6大美德、雷达图、同龄对比和AI摘要。',
    aiSummary: `Maya 拥有聪慧、爱探究的头脑。她最突出的特质 — 好奇心、善良和创造力 — 勾勒出一个因探索事物运作方式而充满活力、并乐于带动他人的孩子。这种组合是真正的优势。

她的好奇心（4.8/5）远高于同龄组平均水平，并与她的创造力（4.6/5）自然相配：她不仅想理解事物，还想用所学创造新东西。她的善良（4.7/5）意味着她往往将这些优势用于帮助他人。

需要培养的领域关乎自我管理，而非能力。自我调节（2.3/5）和谨慎（2.6/5）低于同龄平均水平，这通常表现为难以完成的宏大想法，或超前于规划的热情。这在11岁非常正常，并且对温和的结构而非压力反应良好。

几个简单的习惯很有帮助：将项目分解为三个可见步骤，开始前短暂停顿问"我的计划是什么？"，并像庆祝新想法一样庆祝已完成的工作。`,
  },
}
