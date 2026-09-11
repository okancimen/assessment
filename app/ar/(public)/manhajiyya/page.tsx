import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'منهجية التقييم — كيف يعمل Eduentry',
  description: 'كيف يستخدم Eduentry نظرية الاستجابة للبند (IRT) ثنائية المعلمة وتقدير MAP لإنتاج درجات أكاديمية معيارية للأطفال من 6 إلى 17 عاماً، مقارنةً دولياً.',
  keywords: 'نظرية الاستجابة للبند أطفال, تقييم تكيفي IRT, درجة معيارية أطفال, تقدير MAP, منهجية تقييم تعليمية, اختبار تكيفي',
  alternates: {
    canonical: `${BASE_URL}/ar/manhajiyya`,
    languages: { ar: `${BASE_URL}/ar/manhajiyya`, 'en-GB': `${BASE_URL}/methodology`, tr: `${BASE_URL}/tr/metodoloji`, es: `${BASE_URL}/es/metodologia`, fr: `${BASE_URL}/fr/methodologie`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'كيف يعمل Eduentry — منهجية التقييم التكيفي IRT',
    description: 'IRT ثنائي المعلمة، تقدير MAP، درجة معيارية (متوسط 100، الانحراف المعياري 15) ومقارنة دولية مع المنهج البريطاني وPISA والأمريكي وIB.',
    url: `${BASE_URL}/ar/manhajiyya`,
    locale: 'ar_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كيف يعمل Eduentry — منهجية التقييم التكيفي IRT',
    description: 'IRT ثنائي المعلمة، تقدير MAP، درجة معيارية (متوسط 100، الانحراف المعياري 15) ومقارنة دولية مع المنهج البريطاني وPISA والأمريكي وIB.',
    images: [`${BASE_URL}/ar/manhajiyya/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
    { '@type': 'ListItem', position: 2, name: 'المنهجية', item: `${BASE_URL}/ar/manhajiyya` },
  ],
}

export default function ManhajiyyaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="ar" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/ar" className="hover:text-[#1d1d1f]">الرئيسية</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">المنهجية</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">المنهجية</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">كيف يعمل التقييم التكيفي في Eduentry</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          يستخدم Eduentry نفس المنهجية القياسية النفسية المستخدمة في التقييمات المعرفية المهنية —
          نظرية الاستجابة للبند مع أسئلة تكيفية — لإنتاج درجات دقيقة وقابلة للمقارنة دولياً للأطفال من 6 إلى 17 عاماً.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* Adaptive Testing */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">التقييم التكيفي</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            على عكس الاختبار الثابت حيث يُجيب جميع الأطفال على نفس الأسئلة، يتكيف Eduentry في الوقت الفعلي.
            بعد كل إجابة، يُحدّث النظام تقديره لمستوى كفاءة الطفل ويختار السؤال التالي لتوفير أقصى دقة للقياس عند هذا المستوى.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            هذا يعني أن الطفل الذي يُجيب بشكل صحيح يحصل على أسئلة أصعب؛ والطفل الذي يُخطئ يحصل على أسئلة أسهل. النتيجة: أسئلة أقل مطلوبة لتحقيق نفس دقة القياس مقارنةً بالاختبار التقليدي ثابت الطول.
          </p>
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#4F46E5] mb-2">الميزة الرئيسية</p>
            <p className="text-[#1d1d1f] text-sm leading-relaxed">
              اختبار تكيفي من 15 سؤالاً يمكن أن يُعادل دقة اختبار ثابت من 100 سؤال،
              لأن كل سؤال مختار ليكون الأكثر إفادةً لهذا الطفل تحديداً.
            </p>
          </div>
        </section>

        {/* IRT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">نظرية الاستجابة للبند (IRT)</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            يستخدم Eduentry <strong className="text-[#1d1d1f]">النموذج اللوجستي ثنائي المعلمة (2PL IRT)</strong> — نفس النموذج
            المستخدم في PISA والتقييمات المعيارية واسعة النطاق وعلماء النفس التعليميين المهنيين.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">كل سؤال له معلمتان:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">الصعوبة (b)</strong> — مستوى الكفاءة الذي يكون عنده الطفل عنده 50% احتمال للإجابة الصحيحة.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">التمييز (a)</strong> — مدى تمييز السؤال للأطفال الذين هم أقل وأعلى مستوى بقليل من حد الصعوبة.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73] leading-relaxed">
            يستخدم تقدير الكفاءة <strong className="text-[#1d1d1f]">تقدير Maximum A Posteriori (MAP)</strong> مع توزيع أولي طبيعي معياري. بعد كل إجابة، يتم تحديث التوزيع اللاحق للكفاءة عبر نظرية Bayes، ويُؤخذ تقدير MAP كتقدير حالي للكفاءة.
          </p>
        </section>

        {/* Scoring Scale */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">مقياس الدرجات</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            تُحوَّل تقديرات الكفاءة الخام لـ IRT (θ) إلى مقياس معياري
            بـ <strong className="text-[#1d1d1f]">متوسط 100 وانحراف معياري 15</strong> — نفس المقياس المستخدم في
            CAT4 والاختبارات المعيارية لـ 11+ والتقييمات المعرفية المهنية مثل WISC وWASI.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-right py-3 px-4 font-semibold text-[#1d1d1f]">نطاق الدرجة</th>
                  <th className="text-right py-3 px-4 font-semibold text-[#1d1d1f]">التصنيف</th>
                  <th className="text-right py-3 px-4 font-semibold text-[#1d1d1f]">المئيني</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5f7]">
                <tr className="bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                  <td className="py-3 px-4 text-emerald-700">استثنائي</td>
                  <td className="py-3 px-4 text-[#6e6e73]">المئيني 90+</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">110-119</td>
                  <td className="py-3 px-4 text-blue-700">أعلى من المتوسط</td>
                  <td className="py-3 px-4 text-[#6e6e73]">المئيني 75-90</td>
                </tr>
                <tr className="bg-[#eef2ff]">
                  <td className="py-3 px-4 font-semibold text-[#4F46E5]">95-109</td>
                  <td className="py-3 px-4 text-[#4F46E5]">في المتوسط</td>
                  <td className="py-3 px-4 text-[#6e6e73]">المئيني 37-73</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">85-94</td>
                  <td className="py-3 px-4 text-amber-700">دون المتوسط</td>
                  <td className="py-3 px-4 text-[#6e6e73]">المئيني 16-37</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-3 px-4 font-semibold text-red-700">أقل من 85</td>
                  <td className="py-3 px-4 text-red-700">يحتاج دعماً</td>
                  <td className="py-3 px-4 text-[#6e6e73]">أقل من المئيني 16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6e6e73] mt-3">
            68% من الأطفال يحصلون على درجة بين 85 و115 (في ±1 انحراف معياري من المتوسط).
          </p>
        </section>

        {/* International Benchmarks */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">المراجع الدولية</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            يُقارن Eduentry كل نطاق درجة بأربعة أطر تعليمية معترف بها دولياً،
            مما يُعطي الأسر سياقاً عالمياً لأداء أطفالهم.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                flag: '🇬🇧',
                name: 'المنهج الوطني البريطاني',
                detail: 'تُقارن الدرجات بـ: أقل من المستوى المتوقع / يقترب / يحقق / فوق / قادر جداً. درجات المدارس الانتقائية التنافسية عادةً 115+.',
                color: 'border-blue-100 bg-blue-50',
              },
              {
                flag: '🇺🇸',
                name: 'مستويات الصفوف الأمريكية',
                detail: 'تُقارن الدرجات بـ: أقل من / يقترب من / عند / فوق / أعلى بكثير من مستوى الصف، متوافقة مع Common Core ومستويات الكفاءة في NAEP.',
                color: 'border-violet-100 bg-violet-50',
              },
              {
                flag: '🌍',
                name: 'PISA (OECD)',
                detail: 'تُقارن الدرجات بمستويات الكفاءة في PISA من 1 إلى 6. متوسط OECD يُقابل تقريباً المستوى 3، ما يُعادل درجة معيارية قريبة من 100.',
                color: 'border-emerald-100 bg-emerald-50',
              },
              {
                flag: '🎓',
                name: 'برنامج IB',
                detail: 'تُشير الدرجات إلى الاستعداد لبرنامج السنوات المتوسطة في IB، أو المستوى القياسي في IB، أو مواد المستوى المتقدم في برنامج الدبلوما.',
                color: 'border-amber-100 bg-amber-50',
              },
            ].map(({ flag, name, detail, color }) => (
              <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
                  <span className="font-semibold text-[#1d1d1f] text-sm">{name}</span>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you learn */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">ما ستتعلمه من النتائج</h2>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'الدرجة المعيارية وفئة الأداء', desc: 'درجة على مقياس متوسط 100 والانحراف المعياري 15، مصنفة في إحدى الفئات الخمس: يحتاج دعماً (70-84)، دون المتوسط (85-94)، في المتوسط (95-109)، أعلى من المتوسط (110-119)، أو استثنائي (120+).' },
              { title: 'الترتيب المئيني العالمي', desc: 'كيف يُقارن الطالب بأقرانه من نفس العمر حول العالم، معبراً عنه كمئيني (مثلاً أفضل 10%، أفضل 25%).' },
              { title: 'التفاصيل لكل مادة', desc: 'درجات وفئات أداء فردية للغة الإنجليزية والرياضيات والتفكير اللفظي والتفكير غير اللفظي.' },
              { title: 'المقارنة الدولية', desc: 'الدرجة مقارنةً بمستويات المنهج الوطني البريطاني والمعادلات الأمريكية للصفوف الدراسية ومستويات كفاءة PISA والاستعداد لبرنامج IB.' },
              { title: 'توصيات شخصية من الذكاء الاصطناعي', desc: 'توصيات دراسية محددة بناءً على ملف أداء الطالب، تُبرز المجالات الأكثر احتمالاً لتحسين الدرجة الإجمالية.' },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] block" />
                </span>
                <span className="text-[#6e6e73] leading-relaxed">
                  <strong className="text-[#1d1d1f]">{title}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Blog */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">من المدونة</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/ar/blog/cat4-dalil-shamil', label: 'دليل شامل لاختبار CAT4 في الإمارات', desc: 'هيكل الاختبار والمدارس التي تستخدمه وكيفية التحضير للحصول على أفضل النتائج.' },
            { href: '/ar/blog/staj-mubakir-tatawwur-mahni', label: 'التدريب المبكر وتطور الطفل', desc: 'لماذا التدريب في سن 14-16 يُحدث فرقاً جوهرياً في المسيرة المهنية المستقبلية.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">اعرف الترتيب المئيني لطفلك</h2>
        <p className="text-[#6e6e73] mb-6">تقييم مجاني · 6-17 عاماً · نتائج في 90 دقيقة</p>
        <Link href="/ar/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          ابدأ التقييم المجاني
        </Link>
      </div>
    </main>
  )
}
