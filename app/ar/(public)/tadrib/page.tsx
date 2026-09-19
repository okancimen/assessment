import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'تقييم استعداد التدريب المجاني — Eduentry',
  description:
    'تقييم تكيفي مجاني من 34 سؤالاً لطلاب المرحلة الثانوية من عمر 14 عاماً. اكتشف مجالك المثالي — التقنية، الأعمال، البيانات أو التسويق الرقمي — في 35 دقيقة. تقرير شخصي فوري.',
  keywords: [
    'تدريب طالب ثانوي',
    'تدريب صيفي طلاب',
    'كيف تجد تدريباً',
    'تقييم استعداد التدريب',
    'تجربة عمل مدرسة ثانوية',
    'تدريب تقنية طلاب',
    'تدريب تسويق رقمي',
    'تدريب بيانات طلاب',
    'خبرة مهنية مبكرة',
    'تدريب الإمارات طلاب',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar/tadrib`,
    languages: {
      ar: `${BASE_URL}/ar/tadrib`,
      'en-GB': `${BASE_URL}/internship`,
      tr: `${BASE_URL}/tr/staj`,
      fr: `${BASE_URL}/fr/stage`,
      es: `${BASE_URL}/es/practicas`,
      ru: `${BASE_URL}/ru/stazhirovka`,
      zh: `${BASE_URL}/zh/shixi`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'تقييم استعداد التدريب المجاني — Eduentry',
    description: 'تقييم تكيفي مجاني من 34 سؤالاً لطلاب الثانوية من عمر 14 عاماً. تقرير شخصي في 35 دقيقة.',
    url: `${BASE_URL}/ar/tadrib`,
    locale: 'ar_AE',
    images: [{ url: `${BASE_URL}/ar/tadrib/opengraph-image`, width: 1200, height: 630, alt: 'تقييم استعداد التدريب — Eduentry' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/ar/tadrib#service`,
  name: 'تقييم استعداد التدريب — Eduentry',
  description: 'تقييم تكيفي مجاني من 34 سؤالاً لطلاب الثانوية من عمر 14 عاماً. يقيس القدرات العامة والمعرفة المتخصصة والمهارات المهنية وملف الاهتمام. تقرير شخصي فوري.',
  url: `${BASE_URL}/ar/tadrib`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  audience: { '@type': 'Audience', audienceType: 'طلاب المرحلة الثانوية من عمر 14 عاماً فأكثر' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
    { '@type': 'ListItem', position: 2, name: 'التدريب', item: `${BASE_URL}/ar/tadrib` },
  ],
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/ar/tadrib#webpage`,
  url: `${BASE_URL}/ar/tadrib`,
  name: 'تقييم استعداد التدريب المجاني — Eduentry',
  description: 'تقييم تكيفي مجاني من 34 سؤالاً لطلاب المرحلة الثانوية من عمر 14 عاماً. اكتشف مجالك المثالي في 35 دقيقة.',
  inLanguage: 'ar',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/ar/tadrib#service` },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'هل التقييم مجاني فعلاً؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، مجاني تماماً. بدون اشتراكات أو رسوم مخفية أو مستويات مدفوعة. أنشئ حساباً مجانياً وابدأ فوراً.' } },
    { '@type': 'Question', name: 'من أي عمر يمكن التقدم للتدريب؟', acceptedAnswer: { '@type': 'Answer', text: 'في دول الخليج، تقبل كثير من الشركات المتدربين من طلاب الثانوية من عمر 14 إلى 18 عاماً، خاصة في المبادرات الصيفية والمناطق الحرة. يختلف الحد الأدنى من شركة لأخرى؛ كثير من شركات الناشئة والشركات التقنية أكثر مرونة من الشركات الكبرى.' } },
    { '@type': 'Question', name: 'كيف أجد تدريباً في الإمارات أو السعودية؟', acceptedAnswer: { '@type': 'Answer', text: 'أكثر الطرق فعالية: (1) التواصل المباشر بالبريد الإلكتروني مع الشركات الصغيرة والمتوسطة — رسالة مختصرة ومخصصة تحصل على رد في كثير من الأحيان؛ (2) برامج التدريب الصيفي في المناطق الحرة؛ (3) مبادرات الشباب الحكومية مثل برامج أبوظبي وسيف؛ (4) مرشد الأكاديمي أو مستشار التوجيه المهني في مدرستك.' } },
    { '@type': 'Question', name: 'ما المجال المناسب لي؟', acceptedAnswer: { '@type': 'Answer', text: 'يساعدك تقييم Eduentry على تحديد مجالك المثالي من أربعة: التقنية، الأعمال، تحليل البيانات، والتسويق الرقمي. يقيس قدراتك ومعرفتك المتخصصة ومهاراتك في بيئة العمل لتوجيهك نحو المجال الأنسب لك.' } },
    { '@type': 'Question', name: 'كم يستغرق التقييم؟', acceptedAnswer: { '@type': 'Answer', text: 'التقييم مكون من 34 سؤالاً تكيفياً في 4 مراحل ويستغرق نحو 35 دقيقة. يمكن إيقافه واستئنافه في أي وقت دون الحاجة لإعادة البدء.' } },
    { '@type': 'Question', name: 'ماذا يتضمن تقرير الاستعداد؟', acceptedAnswer: { '@type': 'Answer', text: 'يتضمن التقرير الشخصي: مستوى استعدادك (مستعد للتدريب، في طور التطوير، أو يحتاج دعماً)، ملخصاً بالذكاء الاصطناعي لأدائك، وتحليلاً لكل مرحلة مع نقاط قوتك ومجالات التحسين.' } },
    { '@type': 'Question', name: 'هل يساعد التدريب في القبول الجامعي؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. خبرة العمل الموثقة تعزز ملف الطالب الجامعي بشكل ملحوظ، خاصة للتخصصات التجارية والتقنية والإعلامية. تُثبت مبادرتك ونضجك المهني — وهي صفات يصعب إثباتها بالدرجات الأكاديمية وحدها.' } },
    { '@type': 'Question', name: 'متى أتقدم للتدريب الصيفي؟', acceptedAnswer: { '@type': 'Answer', text: 'للشركات الكبرى، تُفتح طلبات الالتحاق بين يناير ومارس — الأماكن تمتلئ بسرعة. الشركات الصغيرة والمتوسطة تقبل الطلبات طوال العام مع تركز أكبر في الفترة من فبراير إلى مايو. الأفضل التقدم قبل 3-6 أشهر.' } },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: 'التقنية', desc: 'تطوير البرمجيات والتفكير المنظومي وحل المشكلات التقنية.' },
  { key: 'business', icon: '📈', label: 'الأعمال', desc: 'التجارة والتفكير الاستراتيجي والتواصل المؤسسي.' },
  { key: 'data', icon: '📊', label: 'تحليل البيانات', desc: 'الاستدلال الكمي وتفسير البيانات واتخاذ القرارات المبنية على الأدلة.' },
  { key: 'marketing', icon: '📣', label: 'التسويق الرقمي', desc: 'تحليل الجمهور واستراتيجية المحتوى وإدارة القنوات الرقمية.' },
]

const PHASES = [
  { label: 'القدرة العامة', desc: '10 أسئلة · الاستدلال اللفظي والكمي', icon: '🧠' },
  { label: 'المعرفة المتخصصة', desc: '10 أسئلة · المعرفة التطبيقية في المجال', icon: '📚' },
  { label: 'المهارات المهنية', desc: '8 أسئلة · مواقف حقيقية في بيئة العمل', icon: '🤝' },
  { label: 'ملف الاهتمام', desc: '6 أسئلة · أسلوب العمل وخريطة التفضيلات', icon: '🎯' },
]

const TYPES_TADRIB = [
  { icon: '☀️', title: 'التدريب الصيفي', desc: 'تدريب خلال إجازة الصيف، عادةً من 2 إلى 8 أسابيع. أكثر الأنواع إتاحةً لطلاب الثانوية. مثالي لاستكشاف قطاع قبل اختيار التخصص الجامعي.', link: '/ar/blog/staj-sayf-imarat' },
  { icon: '💻', title: 'التدريب عن بُعد', desc: 'تدريب عبر الإنترنت دون الحاجة للحضور. شائع جداً في مجالات التقنية والتسويق الرقمي والبيانات. يتيح الوصول إلى شركات خارج نطاق المدينة أو البلد.', link: null },
  { icon: '🏢', title: 'التدريب التقني', desc: 'تدريب في شركات التقنية والناشئة والمناطق الحرة. لا يشترط دائماً معرفة البرمجة — هناك أدوار تقنية كثيرة لا تتطلب كتابة كود.', link: '/ar/blog/staj-taqniya-imarat' },
  { icon: '🏦', title: 'التدريب المالي', desc: 'محاسبة وتحليل مالي وخدمات مصرفية. طلب مرتفع في الشركات الصغيرة والمتوسطة وشركات التقنية المالية. باب للدخول إلى أكثر القطاعات أجراً.', link: '/ar/blog/staj-tamwil-imarat' },
  { icon: '📱', title: 'التدريب في التسويق الرقمي', desc: 'إدارة منصات التواصل الاجتماعي وإنشاء المحتوى والـ SEO. قطاع عالي الطلب على الكفاءات الشبابية ذات المعرفة الرقمية الفطرية.', link: '/ar/blog/staj-tadwiq-raqmi' },
  { icon: '📊', title: 'التدريب في تحليل البيانات', desc: 'جمع البيانات وتحليلها وتصويرها بيانياً. لا يستلزم برمجة متقدمة — Excel وجداول Google كافية للبداية.', link: '/ar/blog/staj-tahlil-bayanat' },
]

const GUIDE_SLUGS = [
  'staj-mubakir-tatawwur-mahni',
  'sirat-dhatiyya-staj-16',
  'muqabala-staj-nasayih',
  'staj-taqniya-imarat',
  'staj-tadwiq-raqmi',
  'staj-sayf-imarat',
]
const GUIDES = BLOG_POSTS_AR.filter(p => GUIDE_SLUGS.includes(p.slug))
  .sort((a, b) => GUIDE_SLUGS.indexOf(a.slug) - GUIDE_SLUGS.indexOf(b.slug))

export default function ARTadribLandingPage() {
  return (
    <div className="bg-[#f5f5f7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            منصة تقييم التدريب المهني
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            اكتشف استعدادك<br />للتدريب المهني
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            تقييم تكيفي من 34 سؤالاً لطلاب الثانوية من عمر 14 عاماً. نحو 35 دقيقة للحصول على تقرير استعداد شخصي واكتشاف مجالك المثالي.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/ar/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              ابدأ مجاناً
            </Link>
            <Link href="/ar/auth/login" className="text-[#4F46E5] font-semibold text-base hover:underline">
              لديك حساب؟ تسجيل الدخول
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: 'انخفاض خطر البطالة عند 19 عاماً للشباب الذين أجروا 4+ تجارب مع أصحاب العمل قبل سن 16', source: 'Education and Employers, 2018' },
              { stat: '73%', desc: 'من أصحاب العمل يعتبرون الخبرة المهنية السابقة أهم معيار في مقابلات العمل', source: 'Prospects, 2022' },
              { stat: '70%', desc: 'زيادة في احتمال الحصول على عرض عمل قبل التخرج للطلاب الذين أجروا تدريباً', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">المجالات المتاحة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.key} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{track.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{track.label}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">لماذا يهم التدريب المبكر؟</h2>
          <p className="text-sm text-[#6e6e73] mb-5">أدلة من أبحاث طولية حول تأثير الخبرة المهنية المبكرة.</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                تُقدّر الجامعات المرموقة في الإمارات والمملكة العربية السعودية وأوروبا الخبرة المهنية الموثقة في ملفات القبول. الطالب الذي يجمع بين التفوق الأكاديمي والخبرة العملية يتميز بصورة موضوعية لا يمكن للدرجات الأكاديمية وحدها تحقيقها.
              </p>
              <Link href="/ar/blog/staj-mubakir-tatawwur-mahni" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                قراءة التحليل الكامل ←
              </Link>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">أنواع التدريب</h2>
          <p className="text-sm text-[#6e6e73] mb-5">من التدريب الصيفي إلى التدريب عن بُعد — لكل نوع خصائصه.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES_TADRIB.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    اقرأ المزيد ←
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">كيف يعمل التقييم؟</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="mr-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  المرحلة {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">المجموع: 34 سؤالاً · ~35 دقيقة · قابل للإيقاف والاستئناف</span>
            </div>
          </div>
        </section>

        {/* Guides */}
        {GUIDES.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">أدلة التدريب للطلاب</h2>
            <p className="text-sm text-[#6e6e73] mb-5">من السيرة الذاتية إلى المقابلة، ومن التدريب الصيفي إلى التسويق الرقمي — كل ما تحتاج معرفته.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDES.map((post) => (
                <Link
                  key={post.slug}
                  href={`/ar/blog/${post.slug}`}
                  className="group bg-white border border-[#d2d2d7] rounded-2xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/30 transition-colors flex flex-col"
                >
                  <div className="text-xs font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5 self-start mb-3">{post.tags[0]}</div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug group-hover:text-[#4F46E5] transition-colors flex-1">{post.shortTitle}</div>
                  <div className="text-xs text-[#6e6e73] mt-2">{post.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">الأسئلة الشائعة</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: 'هل التقييم مجاني فعلاً؟', a: 'نعم، مجاني تماماً. بدون اشتراكات أو رسوم مخفية أو مستويات مدفوعة. أنشئ حساباً مجانياً وابدأ فوراً.' },
              { q: 'من أي عمر يمكن التقدم للتدريب؟', a: 'في دول الخليج، تقبل كثير من الشركات المتدربين من عمر 14 إلى 18 عاماً، خاصة في البرامج الصيفية والمناطق الحرة. يختلف الحد الأدنى من شركة لأخرى.' },
              { q: 'كيف أختار المجال المناسب؟', a: 'فكر في نوع المشكلات التي تحب حلها: تقنية ومنطقية → التقنية؛ أرقام وقرارات → تحليل البيانات؛ تواصل وإبداع → التسويق الرقمي؛ تنظيم واستراتيجية → الأعمال. يساعدك التقييم على تأكيد توجهك ببيانات موضوعية.' },
              { q: 'كيف أجد تدريباً في الإمارات أو السعودية؟', a: 'أكثر الطرق فعالية: التواصل المباشر بالبريد مع الشركات الصغيرة، برامج التدريب الصيفي في المناطق الحرة، مبادرات الشباب الحكومية، ومستشار التوجيه في مدرستك.' },
              { q: 'كم يستغرق التقييم؟', a: 'نحو 35 دقيقة لـ 34 سؤالاً في 4 مراحل. يمكن إيقافه واستئنافه في أي وقت دون إعادة البدء.' },
              { q: 'ماذا يتضمن تقرير الاستعداد؟', a: 'مستوى استعدادك (مستعد للتدريب، في طور التطوير، أو يحتاج دعماً)، ملخص بالذكاء الاصطناعي لأدائك، وتحليل لكل مرحلة مع نقاط القوة ومجالات التحسين.' },
              { q: 'هل يساعد التدريب في القبول الجامعي؟', a: 'نعم. الخبرة الموثقة تعزز ملف القبول الجامعي، خاصة في التخصصات التقنية والتجارية والإعلامية. تُثبت مبادرتك ونضجك المهني بطريقة لا تستطيع الدرجات الأكاديمية وحدها إثباتها.' },
              { q: 'متى أتقدم للتدريب الصيفي؟', a: 'للشركات الكبرى، تُفتح الطلبات بين يناير ومارس. الشركات الصغيرة تقبل الطلبات طوال العام مع تركز أكبر من فبراير إلى مايو. الأفضل التقدم قبل 3-6 أشهر.' },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm text-[#1d1d1f]">{q}</span>
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#4F46E5] rounded-3xl px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">قيّم استعدادك للتدريب اليوم</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34 سؤالاً · 35 دقيقة · تقرير شخصي فوري. مجاني تماماً.
            </p>
            <Link
              href="/ar/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              ابدأ التقييم المجاني
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
