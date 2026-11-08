import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Staj Rehberi 2026: Nasıl Bulunur, Başvuru, Defteri, Sigortası — Eduentry',
  description:
    'Staj nasıl bulunur? Lise ve üniversite öğrencileri için 2026 kapsamlı rehber: CV yazımı, mülakat hazırlığı, staj defteri, staj sigortası, yurtdışı staj ve sektöre özel ipuçları.',
  keywords: [
    'staj nasıl bulunur',
    'staj rehberi',
    'lise stajı',
    'zorunlu staj',
    'staj defteri',
    'yurtdışı staj',
    'staj başvurusu',
    'staj sigortası',
    'staj CV',
    'staj mülakatı',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/staj`,
    languages: {
      tr: `${BASE_URL}/tr/staj`,
      'x-default': `${BASE_URL}/tr/staj`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/staj`,
    siteName: 'Eduentry',
    title: 'Staj Rehberi 2026 — Eduentry',
    description: 'Lise ve üniversite öğrencileri için kapsamlı staj rehberi: nasıl bulunur, CV, mülakat, defteri, sigortası.',
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Staj Rehberi 2026 — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staj Rehberi 2026 — Eduentry',
    description: 'Lise ve üniversite öğrencileri için kapsamlı staj rehberi.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Staj Rehberi 2026',
  description: 'Lise ve üniversite öğrencileri için kapsamlı staj rehberi',
  url: `${BASE_URL}/tr/staj`,
  publisher: {
    '@type': 'Organization',
    name: 'Eduentry',
    url: BASE_URL,
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Staj nasıl bulunur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Staj bulmanın en verimli yolları: üniversite kariyer merkezi (kurumsal anlaşmalar aracılığıyla ilanlar), LinkedIn Jobs, Kariyer.net ve Youthall platformları, doğrudan şirket başvurusu. Büyük şirketlerin yaz stajları için başvurular Eylül–Kasım döneminde açılır.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lise öğrencisi staj yapabilir mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Türkiye\'de mesleki ve teknik lise öğrencileri için staj yasal bir müfredat gereğidir. Genel lise öğrencileri ise gönüllü veya gayri resmi yerleştirmelerle iş deneyimi edinebilir. Yurt dışı uzaktan stajlar 14–17 yaş arası öğrencilere de açıktır.',
      },
    },
    {
      '@type': 'Question',
      name: 'Staj defteri zorunlu mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Üniversite zorunlu stajlarında evet — staj defteri olmadan staj tamamlanmış sayılmaz. Lise gönüllü stajlarında yasal zorunluluk yoktur ancak tutulması tavsiye edilir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Yurtdışı staj için ne gerekir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erasmus+ için üniversitenize kayıtlı olmak ve motivasyon mektubu + transkript sunmak gerekir. AIESEC ve IAESTE ise öğrenci örgütleri aracılığıyla eşleştirme yapar. Uzaktan stajlar için ise yalnızca orta düzey İngilizce ve internet bağlantısı yeterlidir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Staj sigortasını kim öder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Üniversite zorunlu stajlarında sigorta okul tarafından yaptırılır ve prim ödemeleri devlete aittir. Lise gönüllü stajlarında sigorta yükümlülüğü firmaya aittir.',
      },
    },
  ],
}

type PostLink = { slug: string; title: string; desc: string }

const FINDING: PostLink[] = [
  { slug: 'staj-nasil-bulunur', title: 'Staj Nasıl Bulunur?', desc: 'Kariyer.net, Youthall, LinkedIn ve doğrudan başvuru — sektöre göre takvim.' },
  { slug: 'lise-staji-nasil-bulunur', title: 'Lise Stajı Nasıl Bulunur?', desc: 'Türkiye ve yurt dışı için adım adım rehber. CV olmadan başvuru yöntemleri.' },
  { slug: 'yaz-staji-lise-ogrencisi', title: 'Yaz Stajı 2026', desc: 'Başvuru takvimleri, hangi sektörler yaz programı sunuyor, uzaktan seçenekler.' },
  { slug: 'ogrenci-staj-nasil-bulunur', title: 'Öğrenci Olarak Staj Nasıl Bulunur?', desc: 'Ebeveynler için tam rehber: nereden başlanır, ne zaman başvurulur.' },
  { slug: 'ogrenciyken-staj-bulmanin-yeni-nesil-yolu', title: 'Öğrenciyken Staj Bulmanın Yeni Nesil Yolu', desc: 'Dijital platformlar ve modern arama yöntemleri.' },
]

const APPLICATION: PostLink[] = [
  { slug: 'staj-icin-cv-nasil-yazilir', title: 'Staj İçin CV Nasıl Yazılır?', desc: '16–18 yaş öğrenciler için şablon ve örnekler. Deneyim olmadan hangi başlıklar kullanılır.' },
  { slug: 'staj-mulakati-hazirlik-rehberi', title: 'Staj Mülakatına Nasıl Hazırlanılır?', desc: 'En sık sorulan sorular ve deneyim olmadan nasıl cevap verilir.' },
  { slug: 'staja-hazirlik-guclu-yonlerini-bul', title: 'Staja Başvurmadan Önce: Güçlü Yönlerini Keşfet', desc: 'Hangi sektöre uygunsun? Sistematik öz değerlendirme yöntemi.' },
  { slug: 'deneyimsiz-lisede-staj-ve-is-tecrubesi', title: 'Hiç Deneyim Olmadan Staj ve İş Tecrübesi', desc: 'Sıfırdan iş deneyimi kazanmanın pratik yolları.' },
]

const SECTORS: PostLink[] = [
  { slug: 'uluslararasi-staj-programlari', title: 'Yurtdışı Staj 2026: Erasmus+, AIESEC, IAESTE', desc: 'Türk öğrenciler için şartlar, takvim ve başvuru rehberi.' },
  { slug: 'universiteden-once-teknoloji-staji', title: 'Üniversite Öncesi Teknoloji Stajı', desc: 'Teknoloji sektöründe staj bulma rehberi.' },
  { slug: 'siber-guvenlik-staji-nasil-bulunur', title: 'Siber Güvenlik Stajı Nasıl Bulunur?', desc: 'Lise öğrencileri için siber güvenlik alanına giriş.' },
  { slug: 'dijital-pazarlama-staji-nasil-bulunur', title: 'Dijital Pazarlama Stajı Nasıl Bulunur?', desc: 'Sosyal medya ve içerik pazarlama alanında staj fırsatları.' },
]

const PROCESS: PostLink[] = [
  { slug: 'staj-defteri-nasil-doldurulur', title: 'Staj Defteri Nasıl Doldurulur?', desc: 'Günlük format, örnek ifadeler, kim imzalar, staj fişi ve zarfı açıklamalı.' },
  { slug: 'staj-sigortasi-nedir', title: 'Staj Sigortası Nedir?', desc: 'Kim öder, neyi kapsar, emekliliğe etkisi — lise ve üniversite öğrencileri için.' },
  { slug: 'stajyer-maasi-ne-kadar', title: 'Stajyer Maaşı Ne Kadar?', desc: '2026 Türkiye staj ücreti, asgari ücret ile ilişkisi ve sektöre göre farklar.' },
]

const WHY: PostLink[] = [
  { slug: 'erken-yas-staj-cocuk-gelisimi-kariyer', title: 'Erken Yaşta Stajın Önemi', desc: 'Nörobilim ve kariyer verileri: 14–16 yaşında başlamanın biriken avantajı.' },
  { slug: 'lise-staji-faydalari-universite', title: 'Lise Stajlarının Önemi', desc: 'Üniversite kabulüne etkisi ve öz yeterlilik araştırmaları.' },
]

function PostGrid({ posts }: { posts: PostLink[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/tr/blog/${p.slug}`}
          className="group block rounded-xl border border-gray-200 bg-white p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
        >
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 text-sm leading-snug mb-1">
            {p.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
        </Link>
      ))}
    </div>
  )
}

const FAQS = [
  {
    q: 'Staj nasıl bulunur?',
    a: 'En verimli yollar: üniversite kariyer merkezi (protokol anlaşmaları aracılığıyla ilanlar), LinkedIn Jobs, Kariyer.net ve Youthall. Büyük şirketlerin yaz stajları için başvurular Eylül–Kasım döneminde açılır; KOBİ ve startup\'lar yıl boyu başvuru kabul eder.',
  },
  {
    q: 'Lise öğrencisi staj yapabilir mi?',
    a: 'Evet. Mesleki ve teknik lise öğrencileri için staj zorunlu müfredattır. Genel lise öğrencileri gönüllü veya gayri resmi yerleştirmelerle iş deneyimi edinebilir. Yurt dışı uzaktan stajlar 14–17 yaş arası öğrencilere de açıktır.',
  },
  {
    q: 'Staj defteri zorunlu mu, nasıl doldurulur?',
    a: 'Üniversite zorunlu stajlarında evet. Her çalışma günü doldurulur: o gün yapılan işler, öğrenilen beceriler ve yönetici yorumları. Öğrenci, kurum sorumlusu ve okul koordinatörü tarafından imzalanır. Staj defteri, staj fişi ve staj zarfıyla birlikte teslim edilir.',
  },
  {
    q: 'Staj sigortasını kim öder?',
    a: 'Üniversite zorunlu stajlarında sigorta okul tarafından yaptırılır, prim ödemeleri devlete aittir. Lise gönüllü stajlarında yükümlülük firmaya aittir. Staj sigortası iş kazası ve meslek hastalığı risklerini kapsar.',
  },
  {
    q: 'Yurtdışı staj için ne gerekir?',
    a: 'Erasmus+ için üniversitenize kayıtlı olmak, motivasyon mektubu ve transkript gerekir. AIESEC ve IAESTE öğrenci örgütleri aracılığıyla eşleştirir. Uzaktan stajlar için orta düzey İngilizce ve internet bağlantısı yeterlidir. Başvurular genellikle 6–12 ay öncesinden yapılmalıdır.',
  },
  {
    q: 'Staj için CV nasıl hazırlanır?',
    a: 'Tek sayfa yeterlidir. Bölümler: iletişim bilgileri, öğrenim (okul, sınıf, ortalama), ilgili dersler veya projeler, yetkinlikler (diller, yazılımlar) ve öğretmen referansı. İş deneyimi olmayan öğrenciler "İlgili Deneyim" başlığını kullanarak okul projeleri, gönüllülük ve kişisel projeleri dahil edebilir.',
  },
]

export default function TRStajPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 mb-4">
              2026 Güncel
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Staj Rehberi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lise ve üniversite öğrencileri için staj bulma, başvuru hazırlama ve staj sürecini yönetme rehberi. Tüm sorularınıza veri destekli yanıtlar.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-12 rounded-2xl bg-indigo-600 p-6 sm:p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-2">Hangi staja en uygunsun?</h2>
            <p className="text-indigo-100 text-sm mb-4">
              34 soruluk ücretsiz uyarlanabilir değerlendirme. Yetenek, ilgi alanı ve hazırlık düzeyini 20 dakikada ölç.
            </p>
            <a
              href="https://eduentry.ai/tr"
              className="inline-block rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors"
            >
              Ücretsiz değerlendirmeyi başlat →
            </a>
          </div>

          {/* Section: Staj Bulma */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Staj Nasıl Bulunur?</h2>
            <p className="text-sm text-gray-500 mb-4">Platform ve başvuru stratejileri</p>
            <PostGrid posts={FINDING} />
          </section>

          {/* Section: Başvuru Hazırlığı */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Başvuru Hazırlığı</h2>
            <p className="text-sm text-gray-500 mb-4">CV, mülakat ve öz değerlendirme</p>
            <PostGrid posts={APPLICATION} />
          </section>

          {/* Section: Sektöre Özel */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Sektöre ve Programa Göre</h2>
            <p className="text-sm text-gray-500 mb-4">Yurt dışı, teknoloji, dijital pazarlama</p>
            <PostGrid posts={SECTORS} />
          </section>

          {/* Section: Staj Sürecinde */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Staj Sürecinde</h2>
            <p className="text-sm text-gray-500 mb-4">Defteri, sigortası, ücreti</p>
            <PostGrid posts={PROCESS} />
          </section>

          {/* Section: Neden Staj? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Staj Neden Önemli?</h2>
            <p className="text-sm text-gray-500 mb-4">Araştırma ve kariyer verileri</p>
            <PostGrid posts={WHY} />
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Başvurmadan önce hazır mısın?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Eduentry&apos;nin ücretsiz staj hazırlık değerlendirmesi, güçlü yönlerini ve gelişim alanlarını nesnel biçimde ölçer. İşe alım uzmanlarına seni tanımadan önce yeteneğini kanıtla.
            </p>
            <a
              href="https://eduentry.ai/tr"
              className="inline-block rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Ücretsiz değerlendirmeyi başlat
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
