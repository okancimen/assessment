export type PersonalityLocale = 'en' | 'fr' | 'es' | 'ar' | 'tr' | 'ru' | 'zh'

export interface PersonalityI18n {
  dir: 'ltr' | 'rtl'
  // Landing
  landingTitle: string
  landingSubtitle: string
  landingCta: string
  loginFirst: string
  // Start page
  startTitle: (childName: string) => string
  startSubtitle: (age: number) => string
  startWhatTitle: string
  startWhatDesc: string
  startTraitsTitle: string
  startTierLabel: (tier: number) => string
  startBtn: string
  // Question page
  questionOf: (current: number, total: number) => string
  ratingLabels: [string, string, string, string, string]
  nextBtn: string
  backBtn: string
  submitBtn: string
  // Results page
  resultsTitle: (childName: string) => string
  topStrengthsTitle: string
  growthAreasTitle: string
  aiSummaryTitle: string
  printBtn: string
  backToDashboard: string
  strengthsSection: string
  traitScore: string
}

const EN: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: 'Discover your child\'s character strengths',
  landingSubtitle: 'A research-backed personality assessment that reveals what your child is truly great at — and where they can grow.',
  landingCta: 'Start the assessment',
  loginFirst: 'Sign in to get started',
  startTitle: (n) => `${n}'s Strengths Assessment`,
  startSubtitle: (age) => `Age ${age} · Parent-rated · Takes 15–20 minutes`,
  startWhatTitle: 'What this assessment measures',
  startWhatDesc: 'You\'ll rate your child on a set of character traits — things like kindness, curiosity, perseverance, and leadership. There are no right or wrong answers. Answer based on what you observe day to day.',
  startTraitsTitle: 'Traits covered',
  startTierLabel: (t) => ['', 'Core strengths', 'Core & advanced strengths', 'Comprehensive strengths', 'Full character profile'][t],
  startBtn: 'Start assessment',
  questionOf: (c, t) => `Question ${c} of ${t}`,
  ratingLabels: ['Not at all', 'Rarely', 'Sometimes', 'Often', 'Very much'],
  nextBtn: 'Next',
  backBtn: 'Back',
  submitBtn: 'See results',
  resultsTitle: (n) => `${n}'s Strengths Profile`,
  topStrengthsTitle: 'Top strengths',
  growthAreasTitle: 'Areas to nurture',
  aiSummaryTitle: 'Personality summary',
  printBtn: 'Download / Print report',
  backToDashboard: 'Back to dashboard',
  strengthsSection: 'All traits',
  traitScore: 'Score',
}

const FR: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: 'Découvrez les forces de caractère de votre enfant',
  landingSubtitle: 'Une évaluation de personnalité fondée sur la recherche qui révèle les véritables atouts de votre enfant et ses axes de développement.',
  landingCta: "Commencer l'évaluation",
  loginFirst: 'Connectez-vous pour commencer',
  startTitle: (n) => `Évaluation des forces de ${n}`,
  startSubtitle: (age) => `${age} ans · Évalué par le parent · 15–20 minutes`,
  startWhatTitle: 'Ce que mesure cette évaluation',
  startWhatDesc: "Vous évaluerez votre enfant sur un ensemble de traits de caractère — comme la gentillesse, la curiosité, la persévérance et le leadership. Il n'y a pas de bonnes ou mauvaises réponses. Répondez selon ce que vous observez au quotidien.",
  startTraitsTitle: 'Traits évalués',
  startTierLabel: (t) => ['', 'Forces essentielles', 'Forces essentielles et avancées', 'Forces complètes', 'Profil de caractère complet'][t],
  startBtn: "Commencer l'évaluation",
  questionOf: (c, t) => `Question ${c} sur ${t}`,
  ratingLabels: ['Pas du tout', 'Rarement', 'Parfois', 'Souvent', 'Tout à fait'],
  nextBtn: 'Suivant',
  backBtn: 'Retour',
  submitBtn: 'Voir les résultats',
  resultsTitle: (n) => `Profil de forces de ${n}`,
  topStrengthsTitle: 'Principales forces',
  growthAreasTitle: "Axes de développement",
  aiSummaryTitle: 'Résumé de personnalité',
  printBtn: 'Télécharger / Imprimer',
  backToDashboard: 'Retour au tableau de bord',
  strengthsSection: 'Tous les traits',
  traitScore: 'Score',
}

const ES: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: 'Descubre las fortalezas de carácter de tu hijo',
  landingSubtitle: 'Una evaluación de personalidad respaldada por la investigación que revela en qué destaca realmente tu hijo y dónde puede crecer.',
  landingCta: 'Comenzar la evaluación',
  loginFirst: 'Inicia sesión para empezar',
  startTitle: (n) => `Evaluación de fortalezas de ${n}`,
  startSubtitle: (age) => `${age} años · Valorado por el padre/madre · 15–20 minutos`,
  startWhatTitle: 'Qué mide esta evaluación',
  startWhatDesc: 'Valorarás a tu hijo en un conjunto de rasgos de carácter — como amabilidad, curiosidad, perseverancia y liderazgo. No hay respuestas correctas ni incorrectas. Responde según lo que observas día a día.',
  startTraitsTitle: 'Rasgos evaluados',
  startTierLabel: (t) => ['', 'Fortalezas esenciales', 'Fortalezas esenciales y avanzadas', 'Fortalezas completas', 'Perfil de carácter completo'][t],
  startBtn: 'Iniciar evaluación',
  questionOf: (c, t) => `Pregunta ${c} de ${t}`,
  ratingLabels: ['Para nada', 'Raramente', 'A veces', 'A menudo', 'Totalmente'],
  nextBtn: 'Siguiente',
  backBtn: 'Atrás',
  submitBtn: 'Ver resultados',
  resultsTitle: (n) => `Perfil de fortalezas de ${n}`,
  topStrengthsTitle: 'Principales fortalezas',
  growthAreasTitle: 'Áreas de desarrollo',
  aiSummaryTitle: 'Resumen de personalidad',
  printBtn: 'Descargar / Imprimir informe',
  backToDashboard: 'Volver al panel',
  strengthsSection: 'Todos los rasgos',
  traitScore: 'Puntuación',
}

const AR: PersonalityI18n = {
  dir: 'rtl',
  landingTitle: 'اكتشف نقاط قوة شخصية طفلك',
  landingSubtitle: 'تقييم شخصية مدعوم بالبحث العلمي يكشف عن مواهب طفلك الحقيقية ومجالات نموه.',
  landingCta: 'ابدأ التقييم',
  loginFirst: 'سجّل الدخول للبدء',
  startTitle: (n) => `تقييم نقاط قوة ${n}`,
  startSubtitle: (age) => `${age} سنة · تقييم الوالدين · ١٥–٢٠ دقيقة`,
  startWhatTitle: 'ما الذي يقيسه هذا التقييم',
  startWhatDesc: 'ستقيّم طفلك على مجموعة من السمات الشخصية — مثل اللطف والفضول والمثابرة والقيادة. لا توجد إجابات صحيحة أو خاطئة. أجب بناءً على ما تلاحظه يومياً.',
  startTraitsTitle: 'السمات المقيّمة',
  startTierLabel: (t) => ['', 'نقاط القوة الأساسية', 'النقاط الأساسية والمتقدمة', 'نقاط القوة الشاملة', 'الملف الشخصي الكامل'][t],
  startBtn: 'ابدأ التقييم',
  questionOf: (c, t) => `سؤال ${c} من ${t}`,
  ratingLabels: ['لا أبداً', 'نادراً', 'أحياناً', 'كثيراً', 'دائماً'],
  nextBtn: 'التالي',
  backBtn: 'رجوع',
  submitBtn: 'عرض النتائج',
  resultsTitle: (n) => `ملف نقاط قوة ${n}`,
  topStrengthsTitle: 'أبرز نقاط القوة',
  growthAreasTitle: 'مجالات النمو',
  aiSummaryTitle: 'ملخص الشخصية',
  printBtn: 'تنزيل / طباعة التقرير',
  backToDashboard: 'العودة إلى لوحة التحكم',
  strengthsSection: 'جميع السمات',
  traitScore: 'النتيجة',
}

const TR: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: 'Çocuğunuzun karakter güçlerini keşfedin',
  landingSubtitle: 'Araştırmaya dayalı bir kişilik değerlendirmesi — çocuğunuzun gerçek yeteneklerini ve gelişim alanlarını ortaya koyar.',
  landingCta: 'Değerlendirmeyi başlat',
  loginFirst: 'Başlamak için giriş yapın',
  startTitle: (n) => `${n}'in Güçlü Yönler Değerlendirmesi`,
  startSubtitle: (age) => `${age} yaş · Ebeveyn değerlendirmesi · 15–20 dakika`,
  startWhatTitle: 'Bu değerlendirme neyi ölçer',
  startWhatDesc: 'Çocuğunuzu nezaket, merak, azim ve liderlik gibi bir dizi karakter özelliği üzerinden değerlendireceksiniz. Doğru veya yanlış cevap yoktur. Günlük hayatta gözlemlediğinize göre cevaplayın.',
  startTraitsTitle: 'Değerlendirilen özellikler',
  startTierLabel: (t) => ['', 'Temel güçler', 'Temel ve ileri güçler', 'Kapsamlı güçler', 'Tam karakter profili'][t],
  startBtn: 'Değerlendirmeyi başlat',
  questionOf: (c, t) => `Soru ${c} / ${t}`,
  ratingLabels: ['Hiç değil', 'Nadiren', 'Bazen', 'Çoğunlukla', 'Her zaman'],
  nextBtn: 'İleri',
  backBtn: 'Geri',
  submitBtn: 'Sonuçları gör',
  resultsTitle: (n) => `${n}'in Güçlü Yönler Profili`,
  topStrengthsTitle: 'En güçlü yönler',
  growthAreasTitle: 'Gelişim alanları',
  aiSummaryTitle: 'Kişilik özeti',
  printBtn: 'İndir / Yazdır',
  backToDashboard: 'Panele dön',
  strengthsSection: 'Tüm özellikler',
  traitScore: 'Puan',
}

const RU: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: 'Откройте сильные стороны характера вашего ребёнка',
  landingSubtitle: 'Научно обоснованная оценка личности, которая раскрывает истинные таланты ребёнка и области роста.',
  landingCta: 'Начать оценку',
  loginFirst: 'Войдите, чтобы начать',
  startTitle: (n) => `Оценка сильных сторон ${n}`,
  startSubtitle: (age) => `${age} лет · Оценивается родителем · 15–20 минут`,
  startWhatTitle: 'Что измеряет эта оценка',
  startWhatDesc: 'Вы оцените ребёнка по набору черт характера — таких как доброта, любопытство, настойчивость и лидерство. Нет правильных или неправильных ответов. Отвечайте, основываясь на ежедневных наблюдениях.',
  startTraitsTitle: 'Оцениваемые черты',
  startTierLabel: (t) => ['', 'Основные сильные стороны', 'Основные и расширенные', 'Комплексные сильные стороны', 'Полный профиль характера'][t],
  startBtn: 'Начать оценку',
  questionOf: (c, t) => `Вопрос ${c} из ${t}`,
  ratingLabels: ['Совсем нет', 'Редко', 'Иногда', 'Часто', 'Всегда'],
  nextBtn: 'Далее',
  backBtn: 'Назад',
  submitBtn: 'Посмотреть результаты',
  resultsTitle: (n) => `Профиль сильных сторон ${n}`,
  topStrengthsTitle: 'Главные сильные стороны',
  growthAreasTitle: 'Области для развития',
  aiSummaryTitle: 'Краткое описание личности',
  printBtn: 'Скачать / Распечатать',
  backToDashboard: 'Вернуться на панель',
  strengthsSection: 'Все черты',
  traitScore: 'Балл',
}

const ZH: PersonalityI18n = {
  dir: 'ltr',
  landingTitle: '发现孩子的性格优势',
  landingSubtitle: '基于研究的性格评估，揭示孩子真正擅长的领域以及可以成长的方向。',
  landingCta: '开始评估',
  loginFirst: '登录以开始',
  startTitle: (n) => `${n}的优势评估`,
  startSubtitle: (age) => `${age}岁 · 家长评分 · 15–20分钟`,
  startWhatTitle: '此评估衡量什么',
  startWhatDesc: '您将从善良、好奇心、坚韧和领导力等一系列性格特质对孩子进行评分。没有对错之分，请根据您日常观察到的情况作答。',
  startTraitsTitle: '评估的特质',
  startTierLabel: (t) => ['', '核心优势', '核心与进阶优势', '全面优势', '完整性格档案'][t],
  startBtn: '开始评估',
  questionOf: (c, t) => `第${c}题，共${t}题`,
  ratingLabels: ['完全不像', '很少', '有时', '经常', '非常符合'],
  nextBtn: '下一题',
  backBtn: '返回',
  submitBtn: '查看结果',
  resultsTitle: (n) => `${n}的优势档案`,
  topStrengthsTitle: '主要优势',
  growthAreasTitle: '成长空间',
  aiSummaryTitle: '性格总结',
  printBtn: '下载 / 打印报告',
  backToDashboard: '返回主页',
  strengthsSection: '所有特质',
  traitScore: '得分',
}

const TRANSLATIONS: Record<PersonalityLocale, PersonalityI18n> = {
  en: EN, fr: FR, es: ES, ar: AR, tr: TR, ru: RU, zh: ZH,
}

export function getPersonalityI18n(locale?: string): PersonalityI18n {
  return TRANSLATIONS[(locale as PersonalityLocale) ?? 'en'] ?? EN
}
