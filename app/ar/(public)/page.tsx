import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — منصة التقييم الأكاديمي واستعداد التدريب',
  description:
    'تقييمات تكيفية مجانية لكل مرحلة تعليمية — مقارنة أكاديمية دولية للأعمار 6-17، وتقييم استعداد التدريب للطلاب فوق 14 عاماً.',
  keywords: [
    'تقييم أكاديمي مجاني أطفال',
    'مرجع دولي أطفال الإمارات',
    'درجة معيارية مئيني',
    'تقييم تكيفي PISA GCSE',
    'اختبار CAT4 الإمارات',
    'مرجع أكاديمي 6 17 سنة',
    'تقييم استعداد التدريب الثانوي',
    'اختبار قدرات تدريب ثانوي',
    'تقييم التوجيه المهني طلاب',
    'اختبار مجاني تقييم أطفال',
    'تفكير لفظي غير لفظي اختبار',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar`,
    languages: { ar: `${BASE_URL}/ar`, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/ar`,
    title: 'Eduentry — منصة التقييم الأكاديمي واستعداد التدريب',
    description: 'تقييمات تكيفية مجانية مبنية على نفس العلم المستخدم في PISA وGCSE وSAT. مقارنة أكاديمية للأعمار 6-17 وتقييم التدريب للطلاب فوق 14 عاماً.',
    locale: 'ar_AE',
    images: [{ url: `${BASE_URL}/ar/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — منصة التقييم الأكاديمي واستعداد التدريب' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry — منصة التقييم الأكاديمي واستعداد التدريب',
    description: 'تقييمات تكيفية مجانية مبنية على نفس العلم المستخدم في PISA وGCSE وSAT. مقارنة أكاديمية للأعمار 6-17 وتقييم التدريب للطلاب فوق 14 عاماً.',
    images: [`${BASE_URL}/ar/opengraph-image`],
  },
}

const SUBJECT_LABELS_AR: Record<string, string> = {
  english:             'اللغة الإنجليزية',
  mathematics:         'الرياضيات',
  verbal_reasoning:    'التفكير اللفظي',
  nonverbal_reasoning: 'التفكير غير اللفظي',
}

const SUBJECT_DESCRIPTIONS_AR: Record<string, string> = {
  english:             'الفهم والقراءة والقواعد والإملاء وعلامات الترقيم',
  mathematics:         'العمليات الحسابية والجبر والهندسة ومعالجة البيانات',
  verbal_reasoning:    'حل المشكلات بالكلمات والتفكير النقدي',
  nonverbal_reasoning: 'التعرف على الأنماط باستخدام الأشكال والعناصر البصرية المجردة',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const BELL_SUBJECTS_AR = [
  { score: 103, label: 'إنجليزي',   color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'رياضيات',   color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'لفظي',      color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'غير لفظي',  color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_AR = [
  { q: 'هل Eduentry مجاني؟', a: 'نعم، مجاني بالكامل. لا اشتراكات، لا رسوم خفية، لا مستويات مدفوعة. أنشئ حساباً مجانياً، أضف ملف طفلك وابدأ التقييم دون أي تكلفة.' },
  { q: 'ما المواد التي يشملها التقييم الأكاديمي؟', a: 'اللغة الإنجليزية (الفهم والقراءة والقواعد والمفردات)، والرياضيات (الحساب والجبر والهندسة وحل المسائل)، والتفكير اللفظي (الاستدلال والتصنيف والتسلسل)، والتفكير غير اللفظي (الأنماط والاستدلال المكاني والمصفوفات). كل مادة تتضمن 15 سؤالاً تكيفياً.' },
  { q: 'ما معنى الترتيب المئيني؟', a: 'يُظهر الترتيب المئيني كيف يُقارن طفلك بجميع الأطفال من نفس العمر. درجة المئين 80 تعني أن طفلك حقق نتائج أفضل من 80% من الأطفال في نفس عمره. يستخدم Eduentry مقياساً معيارياً بمتوسط 100 وانحراف معياري 15 — نفس المقياس المستخدم في PISA ومعظم التقييمات المهنية.' },
  { q: 'ما تقييم التدريب؟', a: 'تقييم تكيفي منفصل مكون من 34 سؤالاً لطلاب الثانوية فوق 14 عاماً. يُقيّم الكفاءة العامة والمعرفة القطاعية والمهارات المهنية وملف الاهتمامات في أربعة مجالات: التكنولوجيا، والأعمال، وتحليل البيانات، والتسويق الرقمي. تشمل النتائج تقريراً شخصياً عن مستوى الاستعداد ورؤى مهنية بالذكاء الاصطناعي.' },
  { q: 'كم من الوقت يستغرق كل تقييم؟', a: 'التقييم الأكاديمي يتضمن 60 سؤالاً في 4 مواد — يُنهيه معظم الأطفال في 60-90 دقيقة. تقييم التدريب يتضمن 34 سؤالاً — يُنهيه معظم الطلاب في حوالي 35 دقيقة. يتم حفظ التقدم تلقائياً، مما يتيح إيقافهما واستئنافهما في أي وقت.' },
  { q: 'كيف تعمل التقنية التكيفية؟', a: 'يستخدم Eduentry نموذج نظرية الاستجابة للبند ثنائي المعلمة (2PL) مع تقدير MAP — نفس النموذج المستخدم في PISA وGCSE وSAT. بعد كل إجابة، يُحدّث النظام تقديره لمستوى الطالب ويختار السؤال التالي لتعظيم دقة القياس.' },
  { q: 'هل يمكنني إضافة عدة أطفال؟', a: 'نعم. يمكن لحساب ولي الأمر الواحد أن يتضمن عدة ملفات للأطفال. كل طفل لديه سجل تقييماته الخاصة ودرجاته وتوصياته الشخصية. لا يوجد حد لعدد الأطفال الذين يمكنك إضافتهم.' },
  { q: 'هل بياناتي خاصة وآمنة؟', a: 'نعم. جميع البيانات مخزنة بأمان مع حماية على مستوى الصف — أنت وحدك من يمكنه الوصول إلى نتائجك. لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة. الخدمة متوافقة تماماً مع لوائح حماية البيانات.' },
  { q: 'ما أهمية التقييم لطلاب المدارس في الإمارات؟', a: 'يُساعد Eduentry الطلاب في الإمارات على فهم مستوياتهم مقارنةً بالمعايير البريطانية والأمريكية والدولية — المعايير ذاتها التي تستخدمها المدارس الدولية المرموقة في قبولها. كما يساعد في التحضير لاختبارات مثل CAT4 وISEB.' },
  { q: 'كيف أبدأ التقييم؟', a: 'أنشئ حساباً مجانياً في دقيقتين، أضف اسم طفلك وتاريخ ميلاده، وابدأ التقييم. النظام يتكيف تلقائياً مع مستوى طفلك ويُنتج نتائج مفصلة بعد الانتهاء مباشرة.' },
]

const FAQ_SCHEMA_AR = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_AR.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

export default function ArabicHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="ar" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_AR) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            تقييمات لكل مرحلة من مراحل التعلم
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            التقييم الصحيح،
            <br />
            <span className="text-[#4F46E5]">في الوقت المناسب.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            تقييمات تكيفية مجانية مبنية على نفس العلم المستخدم في PISA وGCSE وSAT.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-right">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                التقييم الأكاديمي
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                كيف يُقارن طفلك بالمستوى العالمي؟
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                مقارنة بالمعايير البريطانية والأمريكية وPISA وIB — درجات معيارية وترتيب مئيني في الإنجليزية والرياضيات والتفكير اللفظي وغير اللفظي.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60 سؤالاً تكيفياً</span>
                <span>·</span>
                <span>4 مواد</span>
                <span>·</span>
                <span>6-17 عاماً</span>
                <span>·</span>
                <span>مجاني</span>
              </div>
              <CtaLink
                href="/ar/auth/register"
                label="hero_academic_ar"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                ابدأ التقييم المجاني
              </CtaLink>
              <Link href="#akadimi" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                اعرف المزيد ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  تقييم التدريب
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  جديد
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                هل طفلك في الثانوية جاهز لسوق العمل؟
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                تقييم تكيفي من 34 سؤالاً حول الكفاءة العامة والمعرفة القطاعية والمهارات المهنية وملف الاهتمامات. تقرير استعداد شخصي ورؤى مهنية بالذكاء الاصطناعي.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34 سؤالاً تكيفياً</span>
                <span>·</span>
                <span>4 مجالات مهنية</span>
                <span>·</span>
                <span>14+ عاماً</span>
                <span>·</span>
                <span>مجاني</span>
              </div>
              <a
                href="https://eduentry.ai/ar"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                اكتشف البرنامج
              </a>
              <Link href="#tadrib" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                اعرف المزيد ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          مبني على نفس علم PISA وGCSE وSAT &nbsp;·&nbsp; خصوصية البيانات مضمونة &nbsp;·&nbsp; مجاني بالكامل
        </p>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'Eduentry أعطانا صورة واضحة جداً عن مستوى ابنتنا مقارنةً بالمعايير الدولية. كنا نبحث عن هذا منذ فترة.', name: 'أم سارة', location: 'دبي، الإمارات' },
              { quote: 'التقييم دقيق ومفيد جداً. عرفنا بالضبط أين نحتاج للتحسين قبل اختبارات القبول في المدرسة الجديدة.', name: 'أبو خالد', location: 'أبوظبي، الإمارات' },
              { quote: 'أداة رائعة ومجانية. نتائج التقييم ساعدتنا في اختيار المدرسة المناسبة لمستوى طفلنا.', name: 'أم أحمد', location: 'الرياض، السعودية' },
            ].map(({ quote, name, location }) => (
              <div key={name} className="bg-[#f5f5f7] rounded-3xl p-6">
                <p className="text-sm text-[#1d1d1f] leading-relaxed mb-4 italic">&ldquo;{quote}&rdquo;</p>
                <div className="text-xs font-semibold text-[#1d1d1f]">{name}</div>
                <div className="text-xs text-[#636366]">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic section ──────────────────────────────────────────────── */}
      <section id="akadimi" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">التقييم الأكاديمي · 6-17 عاماً</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                اكتشف أين يقف طفلك<br />على المستوى الدولي.
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                تقييم تكيفي مجاني يقيس الإنجليزية والرياضيات والتفكير اللفظي وغير اللفظي مقارنةً بالمعايير البريطانية والأمريكية وPISA وIB. تشمل النتائج درجة معيارية وترتيباً مئينياً وتوصيات من الذكاء الاصطناعي.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/ar/auth/register"
                  label="academic_section_ar"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  ابدأ التقييم المجاني
                </CtaLink>
                <Link href="/ar/manhajiyya" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  كيف تعمل الدرجة ←
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">مثال على النتيجة</p>
                    <p className="font-bold text-white mt-1">أحمد · 11 عاماً</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">أعلى من المتوسط</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'إنجليزي',    score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'رياضيات',   score: 119, color: '#0D9488', pct: 90 },
                    { label: 'لفظي',      score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'غير لفظي', score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">مدعوم من</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_AR} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              أربع مواد. رؤية شاملة.
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              المجالات الأربعة التي تُقيّمها PISA وTIMSS والمناهج البريطانية والأمريكية —
              كل منها يتكيف في صعوبته لتحديد المستوى الدقيق لطفلك.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_AR[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_AR[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="manhajiyya" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">العلم وراء الدرجة</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              مبني على نفس علم<br />التقييمات الدولية.
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              يستخدم Eduentry نفس النماذج القياسية النفسية المستخدمة في PISA وGCSE وSAT —
              لتكون نتائج طفلك قابلة للمقارنة مباشرةً بالمعايير الدولية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'نموذج IRT ثنائي المعلمة', desc: 'كل سؤال له صعوبة وتمييز معايَران. تعكس الدرجات صعوبة الأسئلة التي تمت الإجابة عليها بشكل صحيح — وليس فقط المجموع الخام.', tag: 'مستخدم في PISA · SAT · GCSE', color: '#4F46E5' },
              { title: 'خوارزمية تكيفية في الوقت الفعلي', desc: 'تُختار الأسئلة باستخدام معلومات Fisher لتعظيم دقة القياس. كل إجابة تُحدّث تقدير الكفاءة وتختار السؤال الأمثل التالي.', tag: 'تقييم تكيفي بالحاسوب', color: '#0D9488' },
              { title: 'المقارنة الدولية', desc: 'تستخدم الدرجات نفس مقياس PISA (متوسط 100، الانحراف المعياري 15). تُقارن النتائج بالمنهج الوطني البريطاني والأمريكي ومستويات PISA وIB.', tag: 'UK · US · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">ماذا تعني الدرجة؟</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70-84',   label: 'يحتاج دعماً',       color: '#EF4444', bg: '#fef2f2' },
                { range: '85-94',   label: 'دون المتوسط',        color: '#F97316', bg: '#fff7ed' },
                { range: '95-109',  label: 'في المتوسط',         color: '#EAB308', bg: '#fefce8' },
                { range: '110-119', label: 'أعلى من المتوسط',    color: '#22C55E', bg: '#f0fdf4' },
                { range: '120-130', label: 'استثنائي',           color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              68% من الأطفال يحصلون على درجة بين 85 و115 (ضمن انحراف معياري واحد من المتوسط)
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section id="kayfa-yamal" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">التقييم الأكاديمي · سهل البدء</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              من التسجيل إلى النتائج<br />في أقل من ساعتين.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'أنشئ حساباً مجانياً', desc: 'سجل كولي أمر وأضف اسم طفلك وتاريخ ميلاده. يتكيف التقييم تلقائياً مع عمره الدقيق.' },
              { step: '02', title: 'يجري طفلك 4 اختبارات تكيفية', desc: '60 سؤالاً في أربع مواد، يُجريها في المنزل بوتيرته الخاصة. كل سؤال يتكيف — أصعب عند الإجابة الصحيحة، وأسهل عند الخطأ.' },
              { step: '03', title: 'اكتشف السياق الدولي', desc: 'درجات معيارية، ومراجع دولية للمنهج البريطاني والأمريكي وPISA وIB، وتوصيات من الذكاء الاصطناعي، وتقرير قابل للطباعة.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/ar/auth/register" label="how_it_works_ar" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              ابدأ التقييم المجاني ←
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ────────────────────────────────────────────── */}
      <section id="tadrib" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              تقييم التدريب · جديد
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              اكتشف مستوى استعدادك للتدريب.
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              تقييم تكيفي من 34 سؤالاً للطلاب فوق 14 عاماً. اكتشف كفاءتك ونقاط قوتك في مجالات التخصص ومهاراتك المهنية والقطاع الأنسب لك — مع تقرير شخصي من الذكاء الاصطناعي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'أنشئ حساب طالب مجانياً', desc: 'سجل بنفسك أو اقبل دعوة من والديك. أضف مدرستك وصفك الدراسي وتفضيلاتك المهنية وبيان شخصي موجز عن أهدافك.' },
              { step: '02', title: 'أكمل 4 مراحل للتقييم', desc: 'الكفاءة العامة والمعرفة القطاعية والمهارات المهنية (SJT) وملف الاهتمامات — 34 سؤالاً تكيفياً. قابل للاستئناف، يستغرق حوالي 35 دقيقة.' },
              { step: '03', title: 'استلم تقرير استعدادك', desc: 'احصل على مستوى استعدادك للتدريب وملخص نقاط قوتك المُولَّد بالذكاء الاصطناعي ورؤى شخصية في كل مرحلة.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'التكنولوجيا',      color: '#4F46E5' },
              { label: 'الأعمال',          color: '#0D9488' },
              { label: 'تحليل البيانات',   color: '#7C3AED' },
              { label: 'التسويق الرقمي',   color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://eduentry.ai/ar" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              ابدأ تقييم التدريب ←
            </a>
          </div>
        </div>
      </section>

      {/* ── What you get ──────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">ما ستحصل عليه</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">التقييم الأكاديمي</p>
              <ul className="space-y-3">
                {[
                  'درجة معيارية على مقياس 85-130',
                  'ترتيب مئيني للعمر الدقيق',
                  'تفاصيل لكل مادة في المجالات الأربعة',
                  'مراجع دولية — UK وUS وPISA وIB',
                  'توصيات دراسية من الذكاء الاصطناعي',
                  'تقرير شامل قابل للطباعة',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/ar/auth/register" label="what_you_get_academic_ar" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  ابدأ مجاناً ←
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">تقييم التدريب</p>
              <ul className="space-y-3">
                {[
                  'مستوى الاستعداد — جاهز / قيد التطوير / يحتاج دعماً',
                  'ملخص مهني مُولَّد بالذكاء الاصطناعي',
                  'رؤى لكل مرحلة — الكفاءة والمجال والمهارات المهنية',
                  'مطابقة المجال في 4 قطاعات مهنية',
                  'نقاط القوة الشخصية ومحاور التحسين',
                  'تقرير صالح للاستخدام في طلبات الجامعات',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <a href="https://eduentry.ai/ar" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  ابدأ التقييم ←
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">أسئلة.</h2>
          </div>
          <div className="space-y-2">
            {FAQ_AR.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            هل تريد فهم منهجية التقييم؟{' '}
            <Link href="/ar/manhajiyya" className="text-[#4F46E5] hover:underline font-medium">
              اقرأ كيف يعمل Eduentry ←
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">أحدث المقالات</h2>
            <Link href="/ar/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">عرض الكل ←</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_AR.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/ar/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">التقييم الأكاديمي</p>
            <h2 className="text-2xl font-bold text-white mb-3">اكتشف أين يقف طفلك على المستوى الدولي.</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">سياق دولي شامل في أقل من ساعتين.</p>
            <CtaLink href="/ar/auth/register" label="bottom_cta_academic_ar" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              ابدأ التقييم المجاني ←
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">تقييم التدريب</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">اكتشف مستوى استعداد طفلك للتدريب المهني.</h2>
            <p className="text-[#636366] text-sm mb-8">تقرير شخصي ورؤى بالذكاء الاصطناعي في 35 دقيقة.</p>
            <a href="https://eduentry.ai/ar" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              ابدأ التقييم ←
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
