import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/tr/auth/register`

export const metadata: Metadata = {
  title: 'Çocuğumun Gerçek Bilişsel Durumu: Ücretsiz Değerlendirme',
  description:
    'Çocuğunuzun gerçek bilişsel durumunu bir saat içinde öğrenin. PISA, SAT ve GCSE standartlarıyla akranlarına göre tam konumunu gösteren ücretsiz bilişsel değerlendirme.',
  keywords: [
    'çocuğumun bilişsel durumu nedir',
    'çocuğun akranlar arasındaki akademik konumu',
    'çocuk bilişsel durum testi',
    'çocuk bilişsel değerlendirme',
    'ücretsiz çocuk testi',
    'PISA değerlendirme çocuk',
    'çocuk potansiyeli testi',
    'bilişsel yetenek testi ücretsiz',
    'çocuk akademik değerlendirme',
    'sözel akıl yürütme testi çocuk',
    'adaptif test çocuk',
    'çocuk IQ testi ücretsiz',
    'uluslararası norm kıyaslama',
    'çocuk karnesi not analizi',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
    languages: {
      'en-GB': `${BASE_URL}/your-childs-potential`,
      es: `${BASE_URL}/es/potencial-de-tu-hijo`,
      fr: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
      tr: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
      ar: `${BASE_URL}/ar/imkaniyat-tiflik`,
      ru: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
      zh: `${BASE_URL}/zh/haizi-de-qianli`,
      'x-default': `${BASE_URL}/your-childs-potential`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
    siteName: 'Eduentry',
    title: 'Çocuğumun Bilişsel Durumu Nedir? — Ücretsiz Akademik Değerlendirme',
    description: 'Çocuğunuzun gerçek bilişsel durumunu bir saat içinde öğrenin. PISA, SAT ve GCSE standartlarına göre akranlarıyla karşılaştırmalı ücretsiz değerlendirme.',
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/tr/opengraph-image`, width: 1200, height: 630, alt: 'Çocuğunuzun Bilişsel Değerlendirmesi — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çocuğumun Bilişsel Durumu Nedir? — Ücretsiz Akademik Değerlendirme',
    description: 'Çocuğunuzun gerçek bilişsel durumunu bir saat içinde öğrenin. PISA, SAT ve GCSE standartlarına göre akranlarıyla karşılaştırmalı ücretsiz değerlendirme.',
    images: [`${BASE_URL}/tr/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'İngilizce & Okuryazarlık',
    desc: 'Okuma kavrayışı, dilbilgisi ve kelime dağarcığı. Metinleri analiz etme ve çıkarımda bulunma becerisi.',
  },
  {
    icon: '📐',
    title: 'Matematik & Sayısal Düşünme',
    desc: 'Aritmetik, cebir, geometri ve veri yorumlama. Müfredat bilgisinden bağımsız sayısal akıl yürütme.',
  },
  {
    icon: '🧠',
    title: 'Sözel Akıl Yürütme',
    desc: 'Analogiler, sınıflandırmalar ve sözel mantık. Dil aracılığıyla düşünme ve ilişki kurma kapasitesi.',
  },
  {
    icon: '🔷',
    title: 'Sözel Olmayan Uzamsal Mantık',
    desc: 'Örüntü tanıma, uzamsal akıl yürütme ve soyut matrisler. STEM alanları için en kritik bilişsel alan.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Bilgisayar Uyarlanabilir Testi (CAT)',
    desc: 'Her soru, önceki yanıta göre gerçek zamanlı olarak seçilir. Doğru yanıt → daha zor soru. Yanlış yanıt → yeniden kalibrasyon. Sistem, 25–35 soruda çocuğunuzun gerçek yetenek düzeyini yüksek hassasiyetle belirler.',
  },
  {
    title: '2 Parametreli Lojistik IRT Modeli (2PL)',
    desc: '2PL Madde Tepki Teorisi ve Fisher Bilgisi kullanarak her soru kalibre edilir, bilinen güven aralığıyla bir yetenek tahmini (theta) üretir. Sonuçlar ham puan değil — istatistiksel olarak güvenilir yetenek ölçümüdür.',
  },
  {
    title: 'Küresel Standart Ölçek',
    desc: 'Ortalama = 100, SS = 15 standart ölçek. UK 11+/GCSE, ABD Sınıf Beklentileri, PISA Seviyeleri ve IB Program Hazırlığı ile hizalanmış uluslararası normlara göre kıyaslanır.',
  },
]

const FAQS = [
  {
    q: 'Çocuğumun bilişsel durum değerlendirmesi ne gösteriyor?',
    a: 'Değerlendirme, çocuğunuzun üç bağımsız bilişsel alandaki mevcut konumunu ortaya koyar: sözel akıl yürütme (dil kavrama ve analoji), sayısal muhakeme (örüntü tanıma ve matematiksel mantık) ve görsel-uzamsal düşünme (şekil analizi ve 3D ilişkiler). Her alan için uluslararası yaş normuna göre ayrı bir yüzdelik dilim skoru üretilir — bir şeyi "zayıflık" olarak etiketlemek yerine dünya genelindeki akranlarına kıyasla tam konumunu gösterir.',
  },
  {
    q: 'Karne notları çocuğumun gerçek potansiyelini gösterir mi?',
    a: 'Hayır. Karne notları kristalize zekayı ölçer — öğrenilmiş ve tekrar üretilen bilgiyi. Buna karşın pek çok zeki çocuk, akıl yürütme, örüntü tanıma ve problem çözme gibi okul sınavlarının nadiren ölçtüğü akışkan zekada üstündür. Bu yüzden yüksek potansiyelli çocukların önemli bir kısmı kötü notlarla gelebilir.',
  },
  {
    q: 'Değerlendirme ücretsiz mi?',
    a: 'Evet, tamamen ücretsiz. Kayıt zorunludur ancak herhangi bir ücret, abonelik veya gizli maliyet bulunmamaktadır. Test tamamlandıktan sonra anında dört alanlı bilişsel profil raporu üretilir.',
  },
  {
    q: 'Test ne kadar sürer?',
    a: 'En fazla bir saat. Uyarlanabilir format, standart çoktan seçmeli testlere kıyasla daha az soruyla daha doğru ölçüm yapar. Test kaydedilebilir — çocuğunuz dilediğinde kaldığı yerden devam edebilir.',
  },
  {
    q: 'Hangi yaş grubuna uygundur?',
    a: '6–17 yaş arası çocuklar için uygundur. Sistem her yaş grubuna göre otomatik olarak kalibre olur; sorular çocuğun düzeyine uyum sağlar.',
  },
  {
    q: 'Rapor bana ne söyler?',
    a: 'Rapor; dört bilişsel alanda uluslararası yaş normuna göre yüzdelik dilim skorlarını, en güçlü alanı, gelişim öncelikli alanı ve her domain için AI tarafından üretilmiş ebeveyn içgörülerini içerir. Okul seçiminden hedefli destekle ilgili kararlar almaya kadar somut bir rehber sunar.',
  },
  {
    q: 'Bu test okul sınavlarından nasıl farklı?',
    a: 'Okul sınavları belirli bir müfredattaki bilgiyi ölçer. Bu test ise müfredat bilgisinden bağımsız bilişsel potansiyeli — çocuğun nasıl düşündüğünü — ölçer. Farklı ülkelerdeki veya farklı okul sistemlerindeki çocukları adil biçimde karşılaştırmanıza olanak tanır.',
  },
  {
    q: 'Çocuğumun uzamsal zekası yüksek ama notları kötü. Normal mi?',
    a: 'Evet, oldukça yaygın. Yüksek uzamsal zeka genellikle standart akademik testlerde hafife alınır. OECD verilerine göre akışkan muhakemede üst çeyrekte yer alan ama okul başarımında alt yarıda kalan öğrenciler tüm öğrencilerin %12–18\'ini oluşturmaktadır — okul sistemlerinin kronik olarak küçümsediği bir grup.',
  },
  {
    q: 'Sonuçları okulla paylaşabilir miyim?',
    a: 'Evet. Standartlaştırılmış bir değerlendirmeden elde edilen rapor, öğretmen toplantılarını ve rehberlik görüşmelerini dönüştürür. "Uzamsal akıl yürütmede 97. yüzdelik" bilgisi, "zeki görünüyor ama dağınık" ifadesine kıyasla çok daha güçlü bir savunuculuk aracıdır.',
  },
  {
    q: 'Üstün zekâyı veya özel yetenekleri tespit eder mi?',
    a: 'Evet. Tüm üç alanda 90. yüzdelik dilimin üzerinde skor alan çocuklar üstün zekâ programı adaylığı için güçlü bir gösterge sergiler. Test aynı zamanda skor örüntülerindeki tutarsızlıkları da yakalayarak disleksi, diskalkuli veya çift istisnailik (twice-exceptional) gibi durumlar için uzman değerlendirmesine yönlendirir.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/tr/cocugunuzun-potansiyeli#webpage`,
  url: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
  name: 'Çocuğumun Bilişsel Durumu Nedir? — Ücretsiz Akademik Değerlendirme',
  description: 'Çocuğunuzun gerçek bilişsel durumunu bir saat içinde öğrenin. PISA, SAT ve GCSE standartlarına göre akranlarıyla karşılaştırmalı ücretsiz değerlendirme.',
  inLanguage: 'tr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/tr/cocugunuzun-potansiyeli#service`,
  name: 'Çocuk Bilişsel Değerlendirmesi',
  description: '6–17 yaş arası çocuklar için ücretsiz uyarlanabilir bilişsel değerlendirme. Sözel, sayısal ve uzamsal akıl yürütmeyi PISA, SAT ve GCSE standartlarına göre kıyaslar.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
  inLanguage: 'tr',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/tr` },
    { '@type': 'ListItem', position: 2, name: 'Çocuğunuzun Potansiyeli', item: `${BASE_URL}/tr/cocugunuzun-potansiyeli` },
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
  { href: '/tr/blog/cocugunuzun-guclu-yonlerini-ucretsiz-test-ile-kesfet', tag: 'Değerlendirme', title: 'Ücretsiz Akademik Test: Çocuğunuzun Gerçek Bilişsel Durumunu Bir Saat İçinde Keşfedin' },
  { href: '/tr/blog/zeki-cocuk-neden-basarisiz-olur', tag: 'Rehber', title: 'Zeki Çocuk Neden Başarısız Olur? Ebeveyn Rehberi' },
  { href: '/tr/blog/cocugunuzun-gizli-guclerini-kesfetmek-yeni-nesil-veli-rehberi', tag: 'Rehber', title: 'Çocuğunuzun Gizli Güçlerini Keşfedin: Yeni Nesil Veli Rehberi' },
]

export default function CocugunuzunPotansiyeliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Magenta Networks badge bar ────────────────────────────── */}
      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">Powered by</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (Singapore)</span>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Ücretsiz Bilişsel Değerlendirme</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Çocuğunuzun Gerçek<br />
            <span className="text-indigo-600">Bilişsel Durumunu</span><br />
            Keşfedin
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bilişsel yeteneği ve akademik hazırlığı uluslararası <strong>PISA, SAT ve GCSE</strong> standartlarına göre bir saat içinde kıyaslayın. Karne notlarının gösteremediği gerçek potansiyeli ortaya çıkarın.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Bilişsel Potansiyeli Değerlendir (Ücretsiz)
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            Ücretsiz Uluslararası Kıyaslama &nbsp;•&nbsp; %100 Gizli &nbsp;•&nbsp; Anında AI Destekli Bilişsel Profil PDF
          </p>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'Standart IRT Modelleri' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'Singapur Tescilli Kuruluş' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'Uyarlanabilir Test Motoru' },
            { icon: '🔒', label: 'GDPR Uyumlu', sub: 'Öğrenci Verisi Gizliliği' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900">{b.label}</span>
              <span className="text-[11px] text-gray-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED SNIPPET SECTION ─────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Çocuğumun Bilişsel Durumu Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Çocuğunuzun bilişsel durumu üç bağımsız alanda değerlendirilir:</strong> sözel akıl yürütme (dil kavrama ve analoji), sayısal muhakeme (örüntü tanıma ve matematiksel mantık) ve görsel-uzamsal düşünme (şekil analizi ve 3D ilişkiler). Ücretsiz adaptif test, her alan için uluslararası yaş normuna göre ayrı bir yüzdelik dilim skoru üretir — çocuğunuzun dünya genelindeki akranlarına kıyasla tam olarak nerede durduğunu gösterir.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Karne notları bu soruyu cevaplayamaz — çünkü notlar belirli bir okulda, belirli bir öğretmenin verdiği müfredattaki bilgiyi ölçer. Uluslararası standartlarda bilişsel potansiyeli ölçmez. OECD verilerine göre akışkan muhakemede üst çeyrekte yer almasına karşın okul başarımında alt yarıda kalan öğrenciler tüm öğrencilerin <strong>%12–18&apos;ini</strong> oluşturmaktadır — okul sistemlerinin kronik olarak küçümsediği bir grup.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Ücretsiz değerlendirmeyi başlat →
          </Link>
        </div>
      </section>

      {/* ── 4 DOMAINS ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Neyi Değerlendiriyoruz?</h2>
            <p className="text-gray-500 text-base">Dört bağımsız bilişsel alan — her biri ayrı uluslararası yüzdelik dilim skoru ile ölçülür.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Eduentry&apos;nin Bilimsel Temeli</h2>
            <p className="text-gray-500 text-base">Neden sıradan testlerden ve anketlerden farklı?</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            Aynı test mimarisi <strong>NWEA MAP</strong> ve <strong>CAT4</strong> gibi dünya genelinde 10 milyondan fazla öğrenciye uygulanan standart değerlendirmelerde de kullanılmaktadır. John Hattie&apos;nin 900&apos;den fazla çalışmayı kapsayan meta analizi, tanısal değerlendirmenin etki büyüklüğünü 0.67 olarak belirlemiştir — eğitimde en yüksek etkili müdahaleler arasında yer almaktadır.
          </p>
        </div>
      </section>

      {/* ── REPORT PREVIEW ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Örnek Rapor: Küresel Yetenek Profili</h2>
          <p className="text-gray-500 text-base mb-10">Test tamamlandığında ebeveynler dört alanda yüzdelik dilim sıralamalarını gösteren ayrıntılı bir rapor alır — çocuğun dünya genelindeki akranları arasındaki tam bilişsel konumunu ortaya koyar.</p>

          <Link href="/tr/ornek-rapor" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Küresel Yetenek Profili</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · Bilişsel Değerlendirme Raporu</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'İngilizce & Okuryazarlık', score: '87', pct: '82. Yüzdelik' },
                    { label: 'Matematik & Sayısal', score: '94', pct: '91. Yüzdelik' },
                    { label: 'Sözel Akıl Yürütme', score: '79', pct: '74. Yüzdelik' },
                    { label: 'Uzamsal Mantık', score: '112', pct: '97. Yüzdelik' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 En Güçlü Alan: Uzamsal Mantık</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">Çocuğunuz, örüntü tanıma ve uzamsal muhakemede uluslararası yaş normunun çok üzerinde performans gösteriyor. Bu alan STEM, mühendislik ve tasarım ile güçlü korelasyon taşıyor.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">Tam örnek raporu görüntüle →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              Bilişsel Potansiyeli Değerlendir (Ücretsiz)
            </Link>
            <p className="mt-3 text-xs text-gray-500">Ücretsiz Uluslararası Kıyaslama &nbsp;•&nbsp; %100 Gizli &nbsp;•&nbsp; Anında AI Destekli Bilişsel Profil PDF</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{q}</span>
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">İlgili Rehberler</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1">Magenta Networks Pte Ltd (Singapore)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
          Ücretsiz değerlendirmeyi başlat →
        </Link>
      </div>
    </>
  )
}
