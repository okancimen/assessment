import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/tr/auth/register`

export const metadata: Metadata = {
  title: 'Çocuğunuzun Bilişsel Güçlü ve Zayıf Yönlerini Keşfedin — Ücretsiz Değerlendirme',
  description:
    'Çocuğunuzun gerçek bilişsel potansiyelini keşfedin. PISA, SAT ve GCSE standartlarına göre kıyaslamalı ücretsiz uyarlanabilir değerlendirme. 35 dakikada anında AI destekli rapor.',
  keywords: [
    'çocuğumun güçlü yönleri',
    'çocuğumun zayıf yönleri',
    'çocuk bilişsel değerlendirme',
    'ücretsiz çocuk testi',
    'PISA değerlendirme',
    'çocuk potansiyeli testi',
    'bilişsel yetenek testi',
    'çocuk akademik değerlendirme',
    'sözel akıl yürütme testi',
    'sayısal akıl yürütme',
    'görsel uzamsal zeka',
    'çocuk IQ testi ücretsiz',
    'uluslararası norm kıyaslama',
    'adaptif test çocuk',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
    siteName: 'Eduentry',
    title: 'Çocuğunuzun Bilişsel Güçlü ve Zayıf Yönlerini Keşfedin',
    description: 'PISA, SAT ve GCSE standartlarına göre ücretsiz uyarlanabilir bilişsel değerlendirme. 35 dakikada anında rapor.',
    locale: 'tr_TR',
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

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/tr/cocugunuzun-potansiyeli#webpage`,
  url: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
  name: 'Çocuğunuzun Bilişsel Güçlü ve Zayıf Yönlerini Keşfedin',
  description: 'PISA, SAT ve GCSE standartlarına göre ücretsiz uyarlanabilir bilişsel değerlendirme.',
  inLanguage: 'tr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

export default function CocugunuzunPotansiyeliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

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
            Çocuğunuzun Gerçek Bilişsel<br />
            <span className="text-indigo-600">Güçlü ve Zayıf Yönlerini</span><br />
            Keşfedin
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bilişsel yeteneği ve akademik hazırlığı uluslararası <strong>PISA, SAT ve GCSE</strong> standartlarına göre 2 saatten kısa sürede kıyaslayın.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Bilişsel Potansiyeli Değerlendir (Ücretsiz)
          </Link>

          <p className="mt-4 text-xs text-gray-400">
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

      {/* ── 4 DOMAINS ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Neyi Değerlendiriyoruz?</h2>
            <p className="text-gray-500 text-base">Dört bağımsız bilişsel alan — her biri ayrı uluslararası yüzdelik dilim skoru ile ölçülür.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Eduentry&apos;nin Bilimsel Temeli</h2>
            <p className="text-gray-500 text-base">Neden sıradan testlerden ve anketlerden farklı?</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORT PREVIEW ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Örnek Rapor: Küresel Yetenek Profili</h2>
          <p className="text-gray-500 text-base mb-10">Test tamamlandığında ebeveynler dört alanda yüzdelik dilim sıralamalarını ve güçlü/gelişim alanlarını gösteren ayrıntılı bir rapor alır.</p>

          {/* Report mockup */}
          <Link href="/sample-report" className="block group">
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
            <p className="mt-3 text-xs text-gray-400">Ücretsiz Uluslararası Kıyaslama &nbsp;•&nbsp; %100 Gizli &nbsp;•&nbsp; Anında AI Destekli Bilişsel Profil PDF</p>
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
