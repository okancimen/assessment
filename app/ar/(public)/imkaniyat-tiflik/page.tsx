import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/ar/auth/register`

export const metadata: Metadata = {
  title: 'نقاط قوة وضعف طفلك — اختبار مجاني',
  description:
    'اكتشف نقاط قوة وضعف طفلك في 35 دقيقة. تقييم معرفي وفق PISA وSAT وGCSE — تقرير فوري بدعم الذكاء الاصطناعي.',
  keywords: [
    'ما هي نقاط قوة وضعف طفلي',
    'نقاط قوة طفلي',
    'نقاط ضعف طفلي',
    'تقييم معرفي للأطفال',
    'اختبار أطفال مجاني',
    'تقييم PISA للأطفال',
    'اختبار إمكانيات الطفل',
    'اختبار القدرة المعرفية مجاني',
    'تقييم أكاديمي للأطفال',
    'اختبار التفكير اللفظي للأطفال',
    'اختبار تكيفي للأطفال',
    'اختبار ذكاء الأطفال مجاني',
    'مقارنة المعايير الدولية',
    'تحليل درجات الطفل المدرسية',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar/imkaniyat-tiflik`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ar/imkaniyat-tiflik`,
    siteName: 'Eduentry',
    title: 'ما هي نقاط قوة وضعف طفلي؟ — اختبار معرفي مجاني',
    description: 'اكتشف نقاط قوة وضعف طفلك في 35 دقيقة. تقييم معرفي تكيفي مجاني وفق معايير PISA وSAT وGCSE.',
    locale: 'ar_AE',
    images: [{ url: `${BASE_URL}/ar/tadrib/opengraph-image`, width: 1200, height: 630, alt: 'التقييم المعرفي لطفلك — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ما هي نقاط قوة وضعف طفلي؟ — اختبار معرفي مجاني',
    description: 'اكتشف نقاط قوة وضعف طفلك في 35 دقيقة. تقييم معرفي تكيفي مجاني وفق معايير PISA وSAT وGCSE.',
    images: [`${BASE_URL}/ar/tadrib/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'القراءة والمحو الأمية',
    desc: 'فهم القراءة والقواعد النحوية والمفردات. القدرة على تحليل النصوص واستخلاص الاستنتاجات.',
  },
  {
    icon: '📐',
    title: 'الرياضيات والتفكير العددي',
    desc: 'الحساب والجبر والهندسة وتفسير البيانات. التفكير العددي المستقل عن المنهج الدراسي.',
  },
  {
    icon: '🧠',
    title: 'التفكير اللفظي',
    desc: 'التماثلات والتصنيفات والمنطق اللفظي. القدرة على التفكير وإقامة العلاقات من خلال اللغة.',
  },
  {
    icon: '🔷',
    title: 'التفكير المكاني غير اللفظي',
    desc: 'التعرف على الأنماط والتفكير المكاني والمصفوفات المجردة. المجال المعرفي الأكثر أهمية لمجالات STEM.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'الاختبار التكيفي بالحاسوب (CAT)',
    desc: 'يتم اختيار كل سؤال في الوقت الفعلي بناءً على الإجابة السابقة. إجابة صحيحة ← سؤال أصعب. إجابة خاطئة ← إعادة معايرة. يحدد النظام بدقة المستوى الحقيقي لقدرة طفلك في 25–35 سؤالاً.',
  },
  {
    title: 'نموذج IRT اللوجستي ثنائي المعامل (2PL)',
    desc: 'تتم معايرة كل سؤال باستخدام نظرية الاستجابة للفقرة ثنائية المعامل ومعلومات فيشر، مما ينتج تقديراً للقدرة (ثيتا) بفترة ثقة معروفة. النتائج ليست درجات خام — بل قياسات قدرة موثوقة إحصائياً.',
  },
  {
    title: 'مقياس المعيار العالمي',
    desc: 'مقياس قياسي بمتوسط = 100 وانحراف معياري = 15. مقارن بمعايير دولية متوافقة مع UK 11+/GCSE وتوقعات الصفوف في الولايات المتحدة ومستويات PISA والاستعداد لبرنامج IB.',
  },
]

const FAQS = [
  {
    q: 'ما هي نقاط القوة والضعف الأكاديمية لطفلي؟',
    a: 'تُقاس نقاط القوة والضعف الأكاديمية لطفلك في ثلاثة مجالات معرفية مستقلة: التفكير اللفظي (فهم اللغة والتماثلات) والتفكير العددي (التعرف على الأنماط والمنطق الرياضي) والتفكير البصري المكاني (تحليل الأشكال والعلاقات ثلاثية الأبعاد). ينتج الاختبار التكيفي المجاني درجة مئوية منفصلة لكل مجال مقارنةً بالمعايير الدولية للفئة العمرية.',
  },
  {
    q: 'هل تكشف الدرجات المدرسية عن الإمكانيات الحقيقية لطفلي؟',
    a: 'لا. الدرجات تقيس الذكاء المتبلور — المعرفة المكتسبة والمُعاد إنتاجها. في المقابل، يتفوق كثير من الأطفال الأذكياء في الذكاء السيال: التفكير والتعرف على الأنماط وحل المشكلات الذي نادراً ما تقيسه الامتحانات المدرسية. لهذا السبب قد يحصل الأطفال ذوو الإمكانيات العالية على درجات ضعيفة.',
  },
  {
    q: 'هل التقييم مجاني؟',
    a: 'نعم، مجاني تماماً. التسجيل مطلوب ولكن لا توجد رسوم أو اشتراكات أو تكاليف خفية. يتم إنشاء تقرير ملف معرفي بأربعة مجالات فور الانتهاء من الاختبار.',
  },
  {
    q: 'كم من الوقت يستغرق الاختبار؟',
    a: 'حوالي 35 دقيقة. يوفر التنسيق التكيفي قياسات أكثر دقة بعدد أقل من الأسئلة مقارنةً باختبارات الاختيار من متعدد القياسية. الاختبار قابل للحفظ — يمكن لطفلك الاستمرار من حيث توقف.',
  },
  {
    q: 'ما الفئة العمرية المناسبة له؟',
    a: 'للأطفال الذين تتراوح أعمارهم بين 6 و17 عاماً. يتم معايرة النظام تلقائياً لكل فئة عمرية؛ تتكيف الأسئلة مع مستوى الطفل.',
  },
  {
    q: 'ماذا يخبرني التقرير؟',
    a: 'يتضمن التقرير درجات مئوية في أربعة مجالات معرفية مقارنةً بالمعايير الدولية للفئة العمرية، والمجال الأقوى، ومجال التطوير ذي الأولوية، ورؤى الوالدين المولّدة بالذكاء الاصطناعي لكل مجال. دليل عملي لاختيار المدرسة واتخاذ قرارات بشأن الدعم المستهدف.',
  },
  {
    q: 'كيف يختلف هذا عن الاختبارات المدرسية؟',
    a: 'تقيس الاختبارات المدرسية معرفة منهج دراسي محدد. يقيس هذا الاختبار الإمكانيات المعرفية — كيف يفكر الطفل — بصرف النظر عن المنهج. يتيح مقارنة عادلة بين الأطفال من دول أو أنظمة تعليمية مختلفة.',
  },
  {
    q: 'طفلي لديه ذكاء مكاني عالٍ لكن درجاته ضعيفة. هل هذا طبيعي؟',
    a: 'شائع جداً. الذكاء المكاني العالي غالباً ما يُقلَّل من شأنه في الاختبارات الأكاديمية القياسية. وفقاً لبيانات منظمة التعاون الاقتصادي والتنمية، يمثل الطلاب في الربع الأعلى من التفكير السيال لكن في النصف الأدنى من التحصيل الدراسي 12–18% من جميع الطلاب — مجموعة يُقلل منها النظام التعليمي باستمرار.',
  },
  {
    q: 'هل يمكنني مشاركة النتائج مع المدرسة؟',
    a: 'نعم. تقرير التقييم الموحد يحول اجتماعات أولياء الأمور مع المعلمين. "المئين السابع والتسعون في التفكير المكاني" هو أداة مناصرة أقوى بكثير من "يبدو ذكياً لكن متشتتاً."',
  },
  {
    q: 'هل يحدد الموهبة أو المواهب الخاصة؟',
    a: 'نعم. تسجيل أعلى من المئين التسعين في المجالات الثلاثة هو مؤشر قوي للتأهل لبرنامج الموهوبين. يكشف الاختبار أيضاً عن التناقضات في أنماط الدرجات، موجهاً نحو تقييم متخصص لعسر القراءة أو عسر الحساب أو الاستثنائية المزدوجة.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/ar/imkaniyat-tiflik#webpage`,
  url: `${BASE_URL}/ar/imkaniyat-tiflik`,
  name: 'ما هي نقاط قوة وضعف طفلي؟ — اختبار معرفي مجاني',
  description: 'اكتشف نقاط قوة وضعف طفلك في 35 دقيقة. تقييم معرفي تكيفي مجاني وفق معايير PISA وSAT وGCSE.',
  inLanguage: 'ar',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/ar/imkaniyat-tiflik#service`,
  name: 'التقييم المعرفي للأطفال',
  description: 'تقييم معرفي تكيفي مجاني للأطفال من سن 6 إلى 17 عاماً. يقارن التفكير اللفظي والعددي والمكاني وفق معايير PISA وSAT وGCSE.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/ar/imkaniyat-tiflik`,
  inLanguage: 'ar',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
    { '@type': 'ListItem', position: 2, name: 'إمكانيات طفلك', item: `${BASE_URL}/ar/imkaniyat-tiflik` },
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

const RELATED_POSTS = [
  { href: '/ar/blog/ikhtibar-akademi-majani-quwat-duaf-tiflak', tag: 'تقييم', title: 'اختبار أكاديمي مجاني: اكتشف نقاط قوة وضعف طفلك' },
  { href: '/ar/blog/iktishaf-mawahib-tiflak-dalil-walidain-jadid', tag: 'دليل', title: 'اكتشاف مواهب طفلك: دليل الوالدين الحديث' },
  { href: '/ar/blog/tifl-dhaki-darajat-saiya', tag: 'دليل', title: 'طفل ذكي، درجات سيئة: دليل للوالدين' },
]

export default function ImkaniyatTiflikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide" dir="rtl">
        <span className="opacity-60">مدعوم من</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (سنغافورة)</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider" dir="rtl">تقييم معرفي مجاني</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4" dir="rtl">
            اكتشف نقاط القوة والضعف المعرفية الحقيقية لطفلك
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed" dir="rtl">
            قارن القدرات المعرفية والاستعداد الأكاديمي وفق المعايير الدولية <strong>PISA وSAT وGCSE</strong> في 35 دقيقة. اكشف الإمكانيات الحقيقية التي لا تظهرها الدرجات المدرسية.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            <span dir="rtl">تقييم الإمكانيات المعرفية (مجاناً)</span>
          </Link>

          <p className="mt-4 text-xs text-gray-400" dir="rtl">
            مقارنة دولية مجانية &nbsp;•&nbsp; سري 100% &nbsp;•&nbsp; تقرير PDF فوري للملف المعرفي
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'نماذج IRT القياسية' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'كيان مسجل في سنغافورة' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'محرك الاختبار التكيفي' },
            { icon: '🔒', label: 'متوافق مع GDPR', sub: 'خصوصية بيانات الطلاب' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900" dir="rtl">{b.label}</span>
              <span className="text-[11px] text-gray-500" dir="rtl">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ما هي نقاط قوة وضعف طفلي؟</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>تُقاس نقاط القوة والضعف الأكاديمية لطفلك في ثلاثة مجالات معرفية مستقلة:</strong> التفكير اللفظي (فهم اللغة والتماثلات) والتفكير العددي (التعرف على الأنماط والمنطق الرياضي) والتفكير البصري المكاني (تحليل الأشكال والعلاقات ثلاثية الأبعاد). ينتج الاختبار التكيفي المجاني درجة مئوية منفصلة لكل مجال مقارنةً بالمعايير الدولية للفئة العمرية — يُظهر بوضوح أين هو قوي حقاً وأين سيُحدث الدعم الموجَّه أكبر فرق.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            لا تستطيع الدرجات المدرسية الإجابة على هذا السؤال — لأنها تقيس معرفة منهج دراسي محدد في مدرسة بعينها. لا تقيس الإمكانيات المعرفية وفق المعايير الدولية. وفقاً لبيانات منظمة التعاون الاقتصادي والتنمية، يمثل الطلاب في الربع الأعلى من التفكير السيال لكن في النصف الأدنى من التحصيل الدراسي <strong>12–18%</strong> من جميع الطلاب — مجموعة يُقلل منها النظام التعليمي باستمرار. تحدد التحليل التلوي لجون هاتي (أكثر من 900 دراسة) حجم تأثير التقييم التشخيصي بـ 0.67 — من بين أعلى التدخلات التعليمية تأثيراً.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            ابدأ التقييم المجاني ←
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">ماذا نقيس؟</h2>
            <p className="text-gray-500 text-base">أربعة مجالات معرفية مستقلة — كل منها يُقاس بدرجة مئوية دولية منفصلة.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all" dir="rtl">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">الأساس العلمي لـ Eduentry</h2>
            <p className="text-gray-500 text-base">لماذا يختلف عن الاختبارات والاستبيانات العادية؟</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6" dir="rtl">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed" dir="rtl">
            تُستخدم نفس بنية الاختبار في <strong>NWEA MAP</strong> و<strong>CAT4</strong>، وهي تقييمات قياسية مطبّقة على أكثر من 10 ملايين طالب حول العالم. يحدد التحليل التلوي لجون هاتي الذي يشمل أكثر من 900 دراسة حجم تأثير التقييم التشخيصي بـ 0.67 — من بين أعلى التدخلات تأثيراً في التعليم.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3" dir="rtl">نموذج تقرير: ملف الموهبة العالمي</h2>
          <p className="text-gray-500 text-base mb-10" dir="rtl">عند اكتمال الاختبار، يتلقى الوالدان تقريراً مفصلاً يُظهر التصنيفات المئوية في أربعة مجالات ونقاط القوة ومجالات التطوير.</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-right">
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                  <div dir="rtl">
                    <p className="text-white font-bold text-sm">ملف الموهبة العالمي</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · تقرير التقييم المعرفي</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'الإنجليزية والمحو الأمية', score: '87', pct: 'المئين 82' },
                    { label: 'الرياضيات والعددي', score: '94', pct: 'المئين 91' },
                    { label: 'التفكير اللفظي', score: '79', pct: 'المئين 74' },
                    { label: 'التفكير المكاني', score: '112', pct: 'المئين 97' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-right shadow-sm" dir="rtl">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-right" dir="rtl">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 المجال الأقوى: التفكير المكاني</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">يُظهر طفلك أداءً يفوق بكثير معيار الفئة العمرية الدولية في التعرف على الأنماط والتفكير المكاني. يرتبط هذا المجال ارتباطاً قوياً بمجالات STEM والهندسة والتصميم.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline" dir="rtl">عرض نموذج التقرير الكامل ←</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              <span dir="rtl">تقييم الإمكانيات المعرفية (مجاناً)</span>
            </Link>
            <p className="mt-3 text-xs text-gray-400" dir="rtl">مقارنة دولية مجانية &nbsp;•&nbsp; سري 100% &nbsp;•&nbsp; تقرير PDF فوري للملف المعرفي</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" dir="rtl">الأسئلة الشائعة</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                  <span className="text-sm font-semibold text-gray-900 leading-snug" dir="rtl">{q}</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed" dir="rtl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto" dir="rtl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">أدلة ذات صلة</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2" dir="rtl">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug" dir="rtl">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1" dir="rtl">Magenta Networks Pte Ltd (سنغافورة)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors" dir="rtl">
          ابدأ التقييم المجاني ←
        </Link>
      </div>
    </>
  )
}
