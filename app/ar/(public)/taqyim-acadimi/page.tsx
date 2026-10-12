import type { Metadata } from 'next'
import Link from 'next/link'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'تقييم أكاديمي مجاني للأطفال | اختبار تكيفي بالذكاء الاصطناعي — Eduentry',
  description:
    'قيّم مستوى طفلك الأكاديمي في اللغة الإنجليزية والرياضيات والاستدلال اللفظي وغير اللفظي. أعمار 6–20. بدون تسجيل. نتائج فورية.',
  keywords: [
    'تقييم أكاديمي أطفال',
    'اختبار أكاديمي مجاني للأطفال',
    'اختبار تكيفي ذكاء اصطناعي',
    'تقييم الرياضيات الإنجليزية للأطفال',
    'اختبار الاستدلال اللفظي للأطفال',
    'اختبار الاستدلال غير اللفظي',
    'تقييم المدرسة الابتدائية',
    'اختبار الكفاءة الأكاديمية للطفل',
    'تقييم معرفي للأطفال',
    'اختبار مستوى المدرسة مجاني',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar/taqyim-acadimi`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ar/taqyim-acadimi`,
    siteName: 'Eduentry',
    title: 'تقييم أكاديمي مجاني للأطفال | اختبار تكيفي بالذكاء الاصطناعي — Eduentry',
    description: 'قيّم مستوى طفلك الأكاديمي في 4 مواد. أعمار 6–20. بدون تسجيل.',
    locale: 'ar_SA',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'تقييم أكاديمي للأطفال — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تقييم أكاديمي مجاني للأطفال | اختبار تكيفي بالذكاء الاصطناعي — Eduentry',
    description: 'قيّم مستوى طفلك الأكاديمي في 4 مواد. أعمار 6–20. بدون تسجيل.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'ما المواد التي يغطيها التقييم؟',
    a: 'يغطي التقييم أربع مواد رئيسية: اللغة الإنجليزية (الفهم والقراءة والقواعد والإملاء) والرياضيات (العمليات الحسابية والجبر والهندسة) والاستدلال اللفظي والاستدلال غير اللفظي.',
  },
  {
    q: 'كيف يعمل مستوى الصعوبة التكيفي؟',
    a: 'يستخدم الذكاء الاصطناعي لدينا نظرية الاستجابة للفقرة (IRT) لضبط صعوبة الأسئلة في الوقت الفعلي بناءً على إجابات طفلك، مما يوفر تقديراً أدق بكثير من الاختبار الثابت.',
  },
  {
    q: 'كم من الوقت يستغرق التقييم؟',
    a: 'يتضمن كل موضوع 15 سؤالاً، أي 60 سؤالاً في المجموع. يُكمل معظم الأطفال التقييم في 25–35 دقيقة.',
  },
  {
    q: 'هل أحتاج إلى إنشاء حساب للبدء؟',
    a: 'لا. ابدأ فوراً باسم طفلك وعمره فقط. بعد التقييم ستظهر لك درجة ملخصة. أنشئ حساباً مجانياً لفتح التحليل الكامل وتوصيات الذكاء الاصطناعي.',
  },
]

export default function ArTaqyimAcadimiPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 tracking-wider">ذكاء اصطناعي تكيفي · 4 مواد · 6–20 سنة</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            اعرف المستوى الأكاديمي<br />
            <span className="text-[#4F46E5]">الحقيقي لطفلك</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            تقييم تكيفي يغطي اللغة الإنجليزية والرياضيات والاستدلال اللفظي وغير اللفظي — يُقيَّم على نفس المقياس المعياري المستخدم في المدارس الانتقائية البريطانية. لا حاجة لحساب، ويُحفظ تقدمك تلقائياً.
          </p>
          <GuestAcademicStartForm locale="ar" />
          <p className="mt-3 text-sm text-[#6e6e73]">
            لا حاجة للتسجيل للبدء · أوقف واستأنف في أي وقت
          </p>
          <p className="mt-1 text-sm text-[#6e6e73]">
            لديك حساب بالفعل؟{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">تسجيل الدخول</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">كيف يعمل؟</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '١', title: 'أدخل الاسم والعمر', desc: 'لا حساب مطلوب. فقط الاسم والعمر.' },
              { step: '٢', title: 'أسئلة تكيفية', desc: 'يضبط الذكاء الاصطناعي صعوبة الأسئلة في الوقت الفعلي باستخدام IRT.' },
              { step: '٣', title: 'نتائج فورية', desc: 'اطلع فوراً على الدرجة الإجمالية ودرجات المواد. سجّل مجاناً للحصول على التحليل الكامل.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
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

      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">هل أنت مستعد لاكتشاف المستوى الأكاديمي لطفلك؟</h2>
          <Link href="/ar/taqyim-acadimi" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            ابدأ التقييم المجاني
          </Link>
        </div>
      </section>

    </>
  )
}
