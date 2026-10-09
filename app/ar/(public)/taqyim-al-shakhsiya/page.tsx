import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/ar/auth/register`

export const metadata: Metadata = {
  title: 'تقييم شخصية الطفل | اختبار نقاط القوة VIA — Eduentry',
  description:
    'اكتشف نقاط القوة الفريدة لشخصية طفلك من خلال تقييمنا العلمي المدعوم بالذكاء الاصطناعي. الأعمار 6–20. استبيان مجاني للوالدين. تقرير نمو شخصي فوري.',
  keywords: [
    'تقييم شخصية الطفل',
    'اختبار نقاط القوة VIA',
    'نقاط القوة والضعف لدى الطفل',
    'اختبار شخصية الطفل المجاني',
    'نقاط القوة VIA للأطفال',
    'تقييم شخصية الطفل أونلاين',
    'أدوات التربية الشخصية',
    'اختبار علم النفس الإيجابي للطفل',
    'تقييم تطور الطفل',
    'تقرير الذكاء الاصطناعي لشخصية الطفل',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
    siteName: 'Eduentry',
    title: 'تقييم شخصية الطفل | اختبار نقاط القوة VIA — Eduentry',
    description: 'اكتشف نقاط القوة الفريدة لشخصية طفلك من خلال تقييمنا العلمي المدعوم بالذكاء الاصطناعي. الأعمار 6–20.',
    locale: 'ar_SA',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'تقييم شخصية الطفل — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تقييم شخصية الطفل | اختبار نقاط القوة VIA — Eduentry',
    description: 'اكتشف نقاط القوة الفريدة لشخصية طفلك من خلال تقييمنا العلمي المدعوم بالذكاء الاصطناعي. الأعمار 6–20.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'لماذا يُقيَّم الاختبار من قِبَل الوالد بدلاً من الطفل نفسه؟',
    a: 'تتغير تصورات الأطفال لأنفسهم بسرعة، ويمكن للأطفال الصغار التشتت بسهولة أو سوء فهم تنسيقات الاستبيانات. كوالد، توفر ملاحظاتك اليومية لسلوكياتهم الواقعية الأساس الأكثر استقراراً ودقةً للتقييم.',
  },
  {
    q: 'ماذا لو كان طفلي يقع على حافة فئة عمرية؟',
    a: 'يحسب نظامنا العمر الدقيق حتى اليوم باستخدام تاريخ الميلاد. الأسئلة محسّنة رياضياً لتلك المرحلة التطورية بالذات. ثق في الفئة التي يحددها النظام!',
  },
  {
    q: 'كم مرة يجب أن أعيد هذا التقييم لطفلي؟',
    a: 'نوصي بإعادة الاختبار مرة كل 6 إلى 12 شهراً أو عند انتقاله إلى فئة عمرية جديدة. يتيح لك هذا تتبع كيفية نمو نقاط قوة شخصيته وتطورها بمرور الوقت.',
  },
  {
    q: 'هل هذا التقييم مدعوم علمياً؟',
    a: 'نعم. أسئلتنا مُكيَّفة من إطار نقاط القوة VIA — أحد أدوات علم النفس الإيجابي الأكثر مراجعةً من قِبَل الأقران في العالم. وقد تم التحقق منه عبر ثقافات مختلفة واستخدامه في دراسات نُشرت في كبريات المجلات النفسية.',
  },
  {
    q: 'كيف تُحمى خصوصية طفلي؟',
    a: 'لا نشارك بيانات طفلك أو نبيعها أبداً. تُخزَّن الردود بأمان وتُستخدم فقط لإنشاء تقريرك الشخصي. لا تُشارَك أي بيانات مع أطراف ثالثة أو معلنين أو مؤسسات أكاديمية.',
  },
  {
    q: 'ماذا يجب أن أفعل بعد رؤية النتائج؟',
    a: 'ابدأ بأفضل 3 تمارين يوصي بها الذكاء الاصطناعي في التقرير. جرِّب واحدة لمدة أسبوع ولاحظ أي تغييرات في ثقة طفلك أو تفاعله. عُد إلى التقرير كلما احتجت إلى أفكار جديدة — التمارين مُصمَّمة لتنتسج بشكل طبيعي في الروتين اليومي للأسرة.',
  },
]

const VIRTUES = [
  {
    label: 'الحكمة',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['الفضول', 'الإبداع', 'حب التعلم', 'المنظور', 'الحكم'],
  },
  {
    label: 'الشجاعة',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['الشجاعة', 'المثابرة', 'الصدق', 'الحيوية'],
  },
  {
    label: 'الإنسانية',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['الحب', 'اللطف', 'الذكاء الاجتماعي'],
  },
  {
    label: 'العدالة',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['العمل الجماعي', 'الإنصاف', 'القيادة'],
  },
  {
    label: 'الاعتدال',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['العفو', 'التواضع', 'الحكمة العملية', 'ضبط النفس'],
  },
  {
    label: 'التسامي',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['تقدير الجمال', 'الامتنان', 'الأمل', 'الفكاهة', 'الروحانية'],
  },
]

const TIERS = [
  { label: 'مبتدئ', age: '6–9 سنوات', traits: '12 سمة أساسية', questions: '24 سؤالاً', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'متوسط', age: '10–13 سنة', traits: '15 سمة', questions: '30 سؤالاً', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'مراهق', age: '14–17 سنة', traits: '20 سمة', questions: '40 سؤالاً', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'شاب بالغ', age: '18–20 سنة', traits: 'جميع الـ 24 سمة', questions: '48 سؤالاً', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function TaqyimAlShakhsiyaPage() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">نقاط القوة VIA · الأعمار 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            اكتشف نقاط القوة الفريدة<br />
            <span className="text-[#4F46E5]">لشخصية طفلك</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            تقييم شخصي علمي مدعوم بالذكاء الاصطناعي، مُصمَّم خصيصاً للمرحلة التطورية لطفلك.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            ابدأ التقييم المجاني
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            هل لديك حساب بالفعل؟{' '}
            <Link href="/ar/auth/login" className="text-[#4F46E5] hover:underline font-medium">تسجيل الدخول</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">لماذا الشخصية أهم من الدرجات</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            كآباء، نركز في الغالب على الدرجات المدرسية. لكن النتائج الأكاديمية لا تروي سوى جزء من القصة. يأتي النجاح الحقيقي والمرونة من شخصية الطفل وعاداته العاطفية ونقاط قوة شخصيته. يساعدك تقييمنا على النظر إلى ما وراء الدرجات لترى مَن يصبح طفلك — مُسلِّطاً الضوء على &ldquo;نقاط قوته الجوهرية&rdquo; ومحدداً بدقة &ldquo;مجالات نموه&rdquo;.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">كيف يعمل</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '١',
                title: 'توجيه ذكي حسب العمر 🗓️',
                desc: 'أثناء التسجيل، أدخل تاريخ ميلاد طفلك. يحسب نظامنا تلقائياً مرحلته التطورية ويُعيِّنه للمستوى الصحيح.',
              },
              {
                step: '٢',
                title: 'استبيان الوالدين لـ 5 دقائق ⭐',
                desc: 'ستجيب على سلسلة من الأسئلة السريعة المبنية على الملاحظة حول سلوكيات تراها كل يوم. لا تخمين، ولا اختبار مُجهِد لطفلك.',
              },
              {
                step: '٣',
                title: 'تقرير النمو بالذكاء الاصطناعي 🤖',
                desc: 'يُحلِّل ذكاؤنا الاصطناعي المتقدم مُدخلاتك وفق نموذج نفسي معترف به عالمياً لإنشاء خارطة طريق مخصصة ومفصَّلة مليئة بتمارين تربوية قابلة للتطبيق.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">مبنيّ على المعيار الذهبي لعلم النفس الإيجابي</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            تُطبِّق منصتنا إطار نقاط القوة VIA المعترف به عالمياً، والذي طوّره علماء النفس الرواد الدكتور مارتن سيليغمان والدكتور نيل مايرسون. يُستخدم في أكثر من 190 دولة من قِبَل الباحثين والمعلمين، ويُحدِّد هذا النموذج 24 سمة عالمية مجمَّعة تحت 6 فضائل أساسية: الحكمة، الشجاعة، الإنسانية، العدالة، الاعتدال، والتسامي.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">مُعيَّر بدقة لكل مرحلة من مراحل الطفولة</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">ما الذي ستحصل عليه</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'أفضل 5 نقاط قوة جوهرية', desc: 'المجالات التي يتألق فيها طفلك بشكل طبيعي.' },
              { icon: '🌱', title: 'أدنى 3 محاور للنمو', desc: 'رؤى لطيفة حول نقاط عمائهم أو ضعفهم الحالي.' },
              { icon: '🤖', title: 'مجموعة أدوات ذكاء اصطناعي قابلة للتطبيق', desc: 'تمارين واقعية ومخصصة يمكنك ممارستها في المنزل لمساعدتهم على الازدهار.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">الأسئلة الشائعة</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">هل أنت مستعد لاكتشاف مَن هو طفلك حقاً؟</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            ابدأ التقييم المجاني
          </Link>
        </div>
      </section>
    </div>
  )
}
