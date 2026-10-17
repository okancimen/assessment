import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/ar`

export const metadata: Metadata = {
  title: { absolute: 'تقييم التدريب المهني — تقرير ذكاء اصطناعي مجاني | Eduentry.ai' },
  description:
    'تقييم مجاني بالذكاء الاصطناعي لطلاب المرحلة الثانوية من 14 إلى 18 عاماً. 34 سؤالاً في التكنولوجيا والأعمال والبيانات والتسويق. تقرير شخصي فوري.',
  keywords: [
    'تقييم تدريب طلاب الثانوية الإمارات',
    'تدريب مجاني طلاب المدرسة',
    'تقرير ذكاء اصطناعي جاهزية التدريب',
    'تدريب التكنولوجيا طلاب الثانوية',
    'تدريب الأعمال 14 15 16 17 18 سنة',
    'تدريب تحليل البيانات',
    'تدريب التسويق الرقمي',
    'تقييم تكيفي التوجيه المهني',
    'اختبار القدرة طلاب الثانوية مجاني',
    'خبرة عملية مدرسة ثانوية',
    'تدريب صيفي طلاب الإمارات',
    'تقرير شخصي مهارات مهنية',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: PAGE_URL, ru: `${BASE_URL}/ru`, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'ar_AE',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR', 'ru_RU', 'zh_CN'],
    title: 'تقييم التدريب المهني — تقرير ذكاء اصطناعي مجاني | Eduentry.ai',
    description: 'تقييم مجاني بالذكاء الاصطناعي لطلاب الثانوية من 14 إلى 18 عاماً. 34 سؤالاً تكيفياً في 4 مجالات. تقرير شخصي فوري.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — تقييم جاهزية التدريب المهني' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تقييم التدريب المهني — تقرير ذكاء اصطناعي مجاني | Eduentry.ai',
    description: 'تقييم مجاني بالذكاء الاصطناعي لطلاب الثانوية من 14 إلى 18 عاماً. 34 سؤالاً، تقرير شخصي فوري.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/ar/taqniya',
  business: '/ar/aamal',
  data_analytics: '/ar/bayanat',
  digital_marketing: '/ar/tawiq',
}

const TRACK_LABELS_AR: Record<string, string> = {
  tech: 'التكنولوجيا',
  business: 'الأعمال',
  data_analytics: 'تحليل البيانات',
  digital_marketing: 'التسويق الرقمي',
}

const TRACK_DESCRIPTIONS_AR: Record<string, string> = {
  tech: 'منطق البرمجة، الخوارزميات، الأمن السيبراني، تصميم UX وتطوير البرمجيات',
  business: 'تحليل السوق، الثقافة المالية، دراسات الحالة والاستراتيجية التجارية',
  data_analytics: 'قراءة الرسوم البيانية، الإحصاء، الاستدلال من الجداول، أساسيات SQL وتفسير البيانات',
  digital_marketing: 'SEO، استراتيجية وسائل التواصل الاجتماعي، تسويق المحتوى وتخطيط الحملات',
}

const PHASES = [
  { n: '01', label: 'الكفاءة العامة',   qs: 10, desc: 'الاستدلال اللفظي والعددي',                 tag: 'معرفي' },
  { n: '02', label: 'المعرفة التخصصية', qs: 10, desc: 'المعرفة التطبيقية الخاصة بالمجال',         tag: 'تقني' },
  { n: '03', label: 'المهارات المهنية', qs: 8,  desc: 'سيناريوهات حقيقية من بيئة العمل (SJT)',   tag: 'سلوكي' },
  { n: '04', label: 'ملف الاهتمامات',   qs: 6,  desc: 'أسلوب العمل ورسم خريطة التفضيلات',       tag: 'شخصية' },
]

const FAQS = [
  { q: 'هل التقييم مجاني؟',                    a: 'نعم — مجاني دائماً للطلاب. لا رسوم خفية، ولا اشتراكات، ولا مستويات مدفوعة.' },
  { q: 'لمن هذا التقييم؟',                      a: 'لطلاب المرحلة الثانوية من 14 إلى 18 عاماً الراغبين في اكتساب خبرة مهنية من خلال التدريب.' },
  { q: 'كم من الوقت يستغرق؟',                   a: '34 سؤالاً في أربع مراحل، حوالي 20 دقيقة. التقييم قابل للاستئناف بالكامل — يمكنك إيقافه وإكماله في أي وقت.' },
  { q: 'أي مجال يجب أن أختار؟',                 a: 'عند التقديم، يمكنك ترتيب ما يصل إلى ثلاثة تفضيلات. تساعد مرحلة ملف الاهتمامات أيضاً في تحديد المجال الأنسب لك — وسيعكس التقرير ذلك.' },
  { q: 'متى أتلقى تقريري؟',                     a: 'فوراً بعد الانتهاء. بمجرد إكمال الـ34 سؤالاً، يُحسب الذكاء الاصطناعي النتيجة على الفور ويصبح التقرير متاحاً في حسابك — دون انتظار.' },
  { q: 'هل يمكنني ذكر التقييم في سيرتي الذاتية؟', a: 'نعم. يتضمن تقرير الجاهزية نتيجة قابلة للقياس وتفصيلاً للمهارات حسب المجال يمكنك ذكرهما مباشرةً في طلباتك. يدرجه كثير من طلابنا في خطابات التقديم والمقابلات.' },
  { q: 'هل يجب أن أكون في المملكة المتحدة؟',   a: 'التقييم مفتوح لأي طالب من 14 إلى 18 عاماً. التدريب متاح حالياً في المملكة المتحدة، لذا ستحتاج إلى القدرة على العمل هناك للحضور الفعلي — لكن التقييم والتقرير متاحان للجميع.' },
]

const internshipPosts = BLOG_POSTS_AR.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'ar',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'تقييم التدريب المهني — تقرير ذكاء اصطناعي مجاني | Eduentry.ai',
  description: 'تقييم مجاني بالذكاء الاصطناعي لطلاب الثانوية من 14 إلى 18 عاماً. 34 سؤالاً تكيفياً في 4 مجالات. تقرير شخصي فوري.',
  inLanguage: 'ar',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'تقييم جاهزية التدريب المهني',
  url: PAGE_URL,
  description: 'تقييم تكيفي مجاني من 34 سؤالاً بالذكاء الاصطناعي لطلاب الثانوية من 14 إلى 18 عاماً. يقيّم الكفاءة والمعرفة التخصصية والمهارات المهنية وملف الاهتمامات في أربعة مجالات: التكنولوجيا، الأعمال، تحليل البيانات، والتسويق الرقمي.',
  inLanguage: 'ar',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'طلاب المرحلة الثانوية من 14 إلى 18 عاماً' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'تقييم تعليمي',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'كيف تحصل على تدريب مهني مع Eduentry.ai',
  description: 'تقييم تكيفي مجاني من 34 سؤالاً لطلاب الثانوية من 14 إلى 18 عاماً. أربع خطوات من التسجيل حتى الحصول على التدريب.',
  inLanguage: 'ar',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'أنشئ حسابك', text: 'أنشئ حسابك المجاني على Eduentry.ai في أقل من دقيقة — دون بيانات دفع.' },
    { '@type': 'HowToStep', position: 2, name: 'قدِّم طلبك', text: 'أخبرنا من أنت، ومدرستك، وتفضيلاتك من بين التكنولوجيا والأعمال وتحليل البيانات والتسويق الرقمي.' },
    { '@type': 'HowToStep', position: 3, name: 'أكمل التقييم', text: '34 سؤالاً تكيفياً في أربع مراحل: الكفاءة العامة، المعرفة التخصصية، المهارات المهنية، وملف الاهتمامات. حوالي 20 دقيقة. استأنف متى تشاء.' },
    { '@type': 'HowToStep', position: 4, name: 'تلقَّ تقريرك', text: 'احصل على تقرير جاهزيتك الشخصي المُعدّ بالذكاء الاصطناعي مع مستوى جاهزيتك، وتفصيل المراحل، وتوزيع التدريب.' },
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

export default function ArabicHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white" lang="ar" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-0 sm:blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              مخصص · مجاني · 20 دقيقة
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">اكتسب خبرة مهنية</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">حقيقية.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            تقييم تكيفي من 34 سؤالاً مصمم لطلاب المرحلة الثانوية فوق 14 عاماً. اكتشف مستوى جاهزيتك في أربعة مجالات مهنية واحصل على تقرير شخصي.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              التقديم مجاناً
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              عرض نموذج تقرير
            </a>
          </div>

          {/* Terminal card — LTR content */}
          <div className="max-w-md mx-auto" dir="ltr">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1 text-left">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">نتيجة توضيحية — نتائجك ستكون مخصصة لك</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// المسارات المتاحة</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              أربعة مسارات.<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">تقييم واحد.</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              ← مقارنة كل المسارات
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_AR[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_AR[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      ← استكشاف
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// العملية</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            ثلاث خطوات للوصول.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'سجّل وتقدّم',    desc: 'أنشئ حسابك المجاني. أخبرنا من أنت، ومدرستك، وتفضيلاتك للمسارات.' },
              { n: '02', title: 'أجرِ التقييم',    desc: '34 سؤالاً تكيفياً في أربع مراحل. استأنف في أي وقت — دون ضغط زمني.' },
              { n: '03', title: 'تلقَّ تقريرك',    desc: 'تقرير جاهزية مُعدّ بالذكاء الاصطناعي مع الدرجات والرؤى ومطابقة التدريب.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6" dir="ltr">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// هيكل التقييم</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            ما الذي تتوقعه.
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0" dir="ltr">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-left flex-shrink-0" dir="ltr">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">سؤال</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">المجموع: 34 سؤالاً · ~20 دقيقة · قابل للاستئناف بالكامل</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// نتائج التقرير</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                تقريرك.<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">فوراً.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                بمجرد الانتهاء من آخر سؤال، تُحسب درجة الذكاء الاصطناعي على الفور. بدون انتظار. بدون بريد إلكتروني. تقريرك الكامل جاهز في حسابك خلال ثوانٍ.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                ابدأ التقييم
                <svg className="w-4 h-4 text-[#7C3AED] rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: 'مستوى الجاهزية — جاهز للتدريب، في طور التطوير، أو يحتاج دعماً' },
                { icon: '◆', text: 'فقرة ملخص شخصية كتبها الذكاء الاصطناعي' },
                { icon: '◆', text: 'بطاقات رؤى لكل مرحلة مع نقاط القوة ومجالات النمو' },
                { icon: '◆', text: 'ملف توافق المسار الذي يُظهر أين تتميز' },
                { icon: '◆', text: 'رابط تقرير قابل للمشاركة للتقديم والخطابات' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// الأدلة</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            لماذا تهم التجربة المبكرة.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: 'أقل احتمالاً لأن يكون الطلاب عاطلين في سن 19 ممن لديهم 4+ تجارب عمل قبل سن 16', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'من أصحاب العمل يرون أن خبرة التدريب مهمة عند توظيف الخريجين الجدد', source: 'NACE, 2023' },
              { stat: '70%', desc: 'معدل أعلى في الحصول على عروض عمل قبل التخرج لدى الطلاب ذوي خبرة التدريب', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3" dir="ltr">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20" dir="ltr">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// أبحاث</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">آخر المقالات.</h2>
              <Link href="https://eduentry.com/ar/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                ← عرض الكل
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/ar/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3" dir="ltr">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ar-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// أسئلة شائعة</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">أسئلة.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            مجاني للطلاب · دون بطاقة
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            تقدّم الآن.<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">إنه مجاني.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34 سؤالاً. 20 دقيقة. تقرير ذكاء اصطناعي شخصي وخطوتك الأولى نحو خبرة مهنية حقيقية.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            ابدأ طلبك
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
