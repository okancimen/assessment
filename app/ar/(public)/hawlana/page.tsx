import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'من نحن — Eduentry | تقييم أكاديمي مجاني للأطفال',
  description: 'Eduentry منصة تقييم تكيفية مجانية للطلاب من 6 إلى 17 عاماً. درجات معيارية مقارنةً بالمنهج البريطاني وPISA ومعايير IB.',
  keywords: ['من نحن Eduentry', 'منصة تقييم أطفال مجانية', 'مرجع أكاديمي دولي', 'اختبار تكيفي أطفال', 'تقييم أكاديمي 6 17 سنة', 'تقييم تدريب ثانوي'],
  alternates: {
    canonical: `${BASE_URL}/ar/hawlana`,
    languages: { ar: `${BASE_URL}/ar/hawlana`, 'en-GB': `${BASE_URL}/about`, tr: `${BASE_URL}/tr/hakkimizda`, es: `${BASE_URL}/es/sobre-nosotros`, fr: `${BASE_URL}/fr/a-propos`, 'x-default': `${BASE_URL}/about` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'من نحن — Eduentry | تقييم أكاديمي مجاني للأطفال',
    description: 'تقييمات أكاديمية تكيفية مجانية مقارنةً بالمعايير البريطانية وPISA وIB. درجات معيارية وترتيبات مئينية دولية.',
    url: `${BASE_URL}/ar/hawlana`,
    locale: 'ar_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن — Eduentry | تقييم أكاديمي مجاني للأطفال',
    description: 'تقييمات أكاديمية تكيفية مجانية مقارنةً بالمعايير البريطانية وPISA وIB. درجات معيارية وترتيبات مئينية دولية.',
    images: [`${BASE_URL}/ar/hawlana/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://eduentry.com/ar' },
    { '@type': 'ListItem', position: 2, name: 'من نحن', item: 'https://eduentry.com/ar/hawlana' },
  ],
}

export default function HawlanaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="ar" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/ar" className="hover:text-[#1d1d1f]">الرئيسية</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">من نحن</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          مجاني لجميع الأسر
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
          تقييم أكاديمي مجاني<br />
          <span className="text-[#4F46E5]">لكل طفل في كل مكان</span>
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          يُقدم Eduentry لأولياء الأمور صورة واضحة ومقارنة دولياً لمستوى أطفالهم الأكاديمي — مجاناً وفي أقل من 30 دقيقة.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 bg-[#f5f5f7] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">مهمتنا</h2>
        <p className="text-[#6e6e73] leading-relaxed text-lg">
          كل طفل يستحق أن يعرف موقعه — ليس فقط مقارنةً بزملاء الفصل، بل مقارنةً بالمعايير البريطانية والدولية. التقييمات المعيارية المهنية كانت تاريخياً مكلفة وصعبة الوصول. Eduentry يجعل هذه المقارنة مجانية وفورية ومتاحة لأي أسرة تملك اتصالاً بالإنترنت.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">كيف يعمل</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'أسئلة تكيفية',
              body: 'يُولّد ذكاؤنا الاصطناعي أسئلة معايَرة لعمر الطالب ويُعدّل الصعوبة في الوقت الفعلي بناءً على إجاباته — نفس النهج المستخدم في PISA وتقييمات MAP.',
            },
            {
              step: '02',
              title: 'درجة IRT',
              body: 'نستخدم نظرية الاستجابة للبند (IRT) ثنائية المعلمة لإنتاج درجة معيارية (متوسط 100، الانحراف المعياري 15) قابلة للمقارنة إحصائياً عبر الفئات العمرية والجلسات.',
            },
            {
              step: '03',
              title: 'مراجع دولية',
              body: 'تُحوَّل الدرجات إلى مئينيات مبنية على المنهج الوطني البريطاني وPISA والمنهج الأمريكي المشترك وأطر IB — لترى بالضبط أين يقف الطالب عالمياً.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="space-y-3">
              <div className="text-3xl font-bold text-[#c7d2fe]">{step}</div>
              <h3 className="font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">أربع مواد، صورة كاملة</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'اللغة الإنجليزية', desc: 'الفهم والقواعد والإملاء وعلامات الترقيم والمفردات — متوافق مع KS1-KS4 البريطاني وCambridge IGCSE.' },
            { label: 'الرياضيات', desc: 'العمليات الحسابية والجبر والهندسة والكسور ومعالجة البيانات — مقارنةً بمستوى الأرقام في PISA.' },
            { label: 'التفكير اللفظي', desc: 'الاستدلال والعلاقات بين الكلمات والتسلسل والمنطق — يُقيَّم في اختبار 11+ والمدارس التحضيرية وامتحانات القبول.' },
            { label: 'التفكير غير اللفظي', desc: 'التعرف على الأنماط والمصفوفات والتسلسل والاستدلال المكاني — يُقيّم حل المشكلات المستقل عن اللغة.' },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{label}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">مبني على علم راسخ</h2>
        <div className="space-y-4 text-[#6e6e73] leading-relaxed">
          <p>
            أسئلة التقييم مُولَّدة بواسطة <strong className="text-[#1d1d1f]">Claude AI</strong> (Anthropic)، محدودة بالموضوع الدقيق ومستوى الصعوبة والفئة العمرية التي يحددها محرك IRT لدينا. كل سؤال معايَر في الوقت الفعلي — عند الإجابة الصحيحة يصعب السؤال التالي، وعند الخطأ يصبح أسهل.
          </p>
          <p>
            يعني هذا النهج التكيفي اختبارات أقصر بدقة إحصائية أعلى. يستغرق تقييم Eduentry النموذجي 20-30 دقيقة في المواد الأربعة وينتج درجة موثوقة بقدر اختبار ثابت التنسيق مدته 90 دقيقة.
          </p>
          <p>
            تعرف على منهجية التقييم في <Link href="/ar/manhajiyya" className="text-[#4F46E5] hover:underline">صفحة المنهجية</Link>.
          </p>
        </div>
      </section>

      {/* Ages */}
      <section className="mb-16 border border-[#d2d2d7] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">من 6 إلى 17 عاماً</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          يتكيف Eduentry مع الأطفال والشباب في جميع مراحل التعليم الأساسي والثانوي. تُولَّد الأسئلة لمستوى Key Stage البريطاني أو السنة الدراسية الدولية المقابلة:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { range: '6-7 سنوات',   label: 'KS1 / السنوات 1-2' },
            { range: '8-10 سنوات',  label: 'KS2 / السنوات 3-5' },
            { range: '11-13 سنة',   label: 'KS3 / السنوات 7-9' },
            { range: '14-16 سنة',   label: 'KS4 / السنوات 10-11' },
          ].map(({ range, label }) => (
            <div key={range} className="bg-[#f5f5f7] rounded-xl p-4 text-center">
              <div className="font-semibold text-[#1d1d1f]">{range}</div>
              <div className="text-[#6e6e73] mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship section */}
      <section className="mb-16 bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">تقييم التدريب — لطلاب الثانوية فوق 14 عاماً</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          بالإضافة إلى التقييم الأكاديمي، يُقدم Eduentry تقييم استعداد للتدريب المهني من 34 سؤالاً تكيفياً لطلاب الثانوية فوق 14 عاماً. يشمل الكفاءة العامة والمعرفة القطاعية والمهارات المهنية وملف الاهتمامات في أربعة مجالات: التكنولوجيا والأعمال وتحليل البيانات والتسويق الرقمي.
        </p>
        <Link href="/ar" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
          اعرف المزيد عن تقييم التدريب ←
        </Link>
      </section>

      {/* Blog links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">من المدونة</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/ar/blog/cat4-dalil-shamil', label: 'دليل شامل لاختبار CAT4 في الإمارات', desc: 'كل ما يحتاجه أولياء الأمور والطلاب لفهم هيكل الاختبار والتحضير له.' },
            { href: '/ar/blog/staj-mubakir-tatawwur-mahni', label: 'التدريب المبكر وتطور الطفل', desc: 'لماذا يُحدث التدريب المبكر فرقاً جوهرياً في المسيرة المهنية المستقبلية.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">ابدأ تقييم طفلك المجاني</h2>
        <p className="text-indigo-200 mb-8 text-lg">20-30 دقيقة. بدون دفع. نتائج فورية.</p>
        <Link href="/ar/auth/register" className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg">
          ابدأ مجاناً
        </Link>
      </section>

    </main>
  )
}
