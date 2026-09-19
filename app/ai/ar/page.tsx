import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/ar`

export const metadata: Metadata = {
  title: 'تقييم التدريب المهني — تقرير ذكاء اصطناعي مجاني | Eduentry.ai',
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

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
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
  { label: 'الكفاءة العامة',        qs: 10, desc: 'الاستدلال اللفظي والعددي',                       img: '/phases/general-aptitude.jpg' },
  { label: 'المعرفة التخصصية',      qs: 10, desc: 'المعرفة التطبيقية الخاصة بالمجال',               img: '/phases/domain-knowledge.jpg' },
  { label: 'المهارات المهنية',      qs: 8,  desc: 'سيناريوهات حقيقية من بيئة العمل (SJT)',          img: '/phases/workplace-skills.jpg' },
  { label: 'ملف الاهتمامات',        qs: 6,  desc: 'أسلوب العمل ورسم خريطة التفضيلات',              img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: 'هل التقييم مجاني؟',                    a: 'نعم — مجاني دائماً للطلاب. لا رسوم خفية، ولا اشتراكات، ولا مستويات مدفوعة.' },
  { q: 'لمن هذا التقييم؟',                      a: 'لطلاب المرحلة الثانوية من 14 إلى 18 عاماً الراغبين في اكتساب خبرة مهنية من خلال التدريب.' },
  { q: 'كم من الوقت يستغرق؟',                   a: '34 سؤالاً في أربع مراحل، حوالي 35 دقيقة. التقييم قابل للاستئناف بالكامل — يمكنك إيقافه وإكماله في أي وقت.' },
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
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'كيف تحصل على تدريب مهني مع Eduentry.ai',
  description: 'تقييم تكيفي مجاني من 34 سؤالاً لطلاب الثانوية من 14 إلى 18 عاماً. أربع خطوات من التسجيل حتى الحصول على التدريب.',
  inLanguage: 'ar',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'أنشئ حسابك', text: 'أنشئ حسابك المجاني على Eduentry.ai في أقل من دقيقة — دون بيانات دفع.' },
    { '@type': 'HowToStep', position: 2, name: 'قدِّم طلبك', text: 'أخبرنا من أنت، ومدرستك، وتفضيلاتك من بين التكنولوجيا والأعمال وتحليل البيانات والتسويق الرقمي.' },
    { '@type': 'HowToStep', position: 3, name: 'أكمل التقييم', text: '34 سؤالاً تكيفياً في أربع مراحل: الكفاءة العامة، المعرفة التخصصية، المهارات المهنية، وملف الاهتمامات. حوالي 35 دقيقة. استأنف متى تشاء.' },
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
    <main className="flex-1" lang="ar" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            ذكاء اصطناعي · مجاني · 35 دقيقة
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            احصل على<br />تدريب حقيقي.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            تقييم تكيفي من 34 سؤالاً مصمم لطلاب الثانوية فوق 14 عاماً. اكتشف مستوى جاهزيتك في أربعة مجالات مهنية واحصل على تقرير شخصي بالذكاء الاصطناعي.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              التقديم مجاناً ←
            </Link>
          </div>
          <p className="text-xs text-[#6e6e73] mt-6">مجاني للطلاب · بدون بطاقة · النتائج في 35 دقيقة</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">المجالات المتاحة</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8 leading-tight">
            أربعة مسارات.<br />تقييم واحد.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track, i) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_AR[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                      priority={i < 2}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_AR[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_AR[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">اعرف المزيد ←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">الخطوات</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            تدريبك في ثلاث خطوات.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: '٠١', title: 'سجّل وقدِّم',         desc: 'أنشئ حسابك المجاني وأخبرنا من أنت ومدرستك وتفضيلاتك.' },
              { n: '٠٢', title: 'أكمل التقييم',         desc: '34 سؤالاً تكيفياً في أربع مراحل. استأنف متى تشاء.' },
              { n: '٠٣', title: 'تلقَّ تقريرك',         desc: 'احصل على تقرير جاهزيتك الشخصي بالذكاء الاصطناعي وتوزيع التدريب.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">التقييم</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            ما ينتظرك.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-left flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">سؤال</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">المجموع: 34 سؤالاً · ~35 دقيقة · قابل للاستئناف بالكامل بين الجلسات</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">النتائج</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            ما ستحصل عليه.
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                'مستوى الجاهزية — جاهز للتدريب، قيد التطوير، أو يحتاج دعماً',
                'فقرة ملخص شخصية معدّة بالذكاء الاصطناعي',
                'بطاقات تحليل مع نقاط القوة ومجالات التحسين لكل مرحلة',
                'ملف ملاءمة حسب المجال يوضح أين تحقق أعلى نتائج',
                'رابط تقرير قابل للمشاركة لطلبات التدريب وخطابات التقديم',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">الأدلة</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            لماذا البداية المبكرة مهمة.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: 'الطلاب الذين يكتسبون 4 خبرات مع أصحاب العمل قبل سن 16 لديهم احتمال أقل 5 مرات للبطالة في سن 19', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: '83% من أصحاب العمل يعتبرون خبرة التدريب مهمة عند توظيف حديثي التخرج', source: 'NACE, 2023' },
              { stat: '70%', desc: 'الطلاب ذوو خبرة التدريب يتلقون عروض عمل قبل التخرج بمعدل أعلى بـ70%', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">أبحاث</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
              أحدث مقالات المدونة.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/ar/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ar-AE', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/ar/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                عرض جميع مقالات التدريب ←
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">الأسئلة الشائعة.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            قدِّم الآن.<br />إنه مجاني.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 سؤالاً. 35 دقيقة. تقرير شخصي بالذكاء الاصطناعي والخطوة الأولى نحو تدريب حقيقي.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            ابدأ التقديم ←
          </Link>
        </div>
      </section>
    </main>
  )
}
