import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Değerlendirme Metodolojisi — Eduentry nasıl çalışır',
  description: 'Eduentry\'nin 6–17 yaş arası çocuklar için uluslararası kıyaslamalı standartlaştırılmış akademik puanlar üretmek amacıyla 2 parametreli Madde Yanıt Teorisi ve MAP tahmini nasıl kullandığı.',
  keywords: 'madde yanıt teorisi çocuklar, uyarlanabilir test MYT, standartlaştırılmış puan çocuklar, MAP tahmini, eğitim değerlendirme metodolojisi, uyarlanabilir test',
  alternates: {
    canonical: `${BASE_URL}/tr/metodoloji`,
    languages: { tr: `${BASE_URL}/tr/metodoloji`, es: `${BASE_URL}/es/metodologia`, 'en-GB': `${BASE_URL}/methodology`, fr: `${BASE_URL}/fr/methodologie`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Eduentry nasıl çalışır — Uyarlanabilir IRT değerlendirme metodolojisi',
    description: '2 parametreli MYT, MAP tahmini, standartlaştırılmış puan (ortalama 100, SS 15) ve İngiltere müfredatı, PISA, ABD ve IB ile uluslararası karşılaştırma.',
    url: `${BASE_URL}/tr/metodoloji`,
    locale: 'tr_TR',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/tr` },
    { '@type': 'ListItem', position: 2, name: 'Metodoloji', item: `${BASE_URL}/tr/metodoloji` },
  ],
}

export default function MetodolojiPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/tr" className="hover:text-[#1d1d1f]">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Metodoloji</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">Metodoloji</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Eduentry uyarlanabilir değerlendirmesi nasıl çalışır</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          Eduentry, 6–17 yaş arası çocuklar için hassas ve uluslararası kıyaslamalı puanlar üretmek amacıyla
          profesyonel bilişsel değerlendirmelerle aynı psikometrik metodolojiye —
          uyarlanabilir sorularla Madde Yanıt Teorisi — başvurur.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* Adaptive Testing */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Uyarlanabilir değerlendirme</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Tüm çocukların aynı soruları yanıtladığı sabit bir testin aksine Eduentry gerçek zamanlı olarak uyum sağlar.
            Her yanıtın ardından sistem, çocuğun yetenek seviyesine ilişkin tahminini günceller ve
            o seviyede ölçüm hassasiyetini en üst düzeye çıkaracak bir sonraki soruyu seçer.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Bu, doğru yanıt veren bir çocuğun daha zor sorular aldığı, zorlandığında ise daha kolay sorular aldığı anlamına gelir.
            Sonuç: geleneksel sabit uzunluklu bir teste kıyasla aynı ölçüm hassasiyeti için daha az soru gerekmektedir.
          </p>
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#4F46E5] mb-2">Temel avantaj</p>
            <p className="text-[#1d1d1f] text-sm leading-relaxed">
              15 soruluk uyarlanabilir bir test, 100 soruluk sabit bir testin hassasiyetiyle eşleşebilir;
              çünkü her soru o özgün çocuk için en bilgilendirici olacak şekilde seçilir.
            </p>
          </div>
        </section>

        {/* IRT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Madde Yanıt Teorisi (MYT)</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Eduentry, <strong className="text-[#1d1d1f]">2 parametreli lojistik model (2PL MYT)</strong> kullanır — PISA, büyük ölçekli
            standartlaştırılmış değerlendirmeler ve profesyonel eğitim psikologları tarafından kullanılan modelin aynısı.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">Her sorunun iki parametresi vardır:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Güçlük (b)</strong> — bir çocuğun doğru yanıt verme olasılığının %50 olduğu yetenek seviyesi.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Ayırt edicilik (a)</strong> — sorunun güçlük eşiğinin hemen altındaki ve hemen üstündeki çocukları ne kadar iyi ayırt ettiği.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73] leading-relaxed">
            Yetenek tahmini, standart normal önsel dağılımlı <strong className="text-[#1d1d1f]">Maksimum A Posteriori (MAP) tahmini</strong> kullanır.
            Her yanıtın ardından yetenek üzerindeki sonsal dağılım Bayes teoremiyle güncellenir ve MAP tahmini
            mevcut yetenek tahmini olarak alınır.
          </p>
        </section>

        {/* Scoring Scale */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Puanlama ölçeği</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Ham MYT yetenek tahminleri (θ),
            <strong className="text-[#1d1d1f]"> ortalama 100 ve standart sapma 15</strong> olan standartlaştırılmış bir ölçeğe dönüştürülür —
            CAT4, standartlaştırılmış 11+ testleri ve WISC, WASI gibi profesyonel bilişsel değerlendirmelerin kullandığı ölçek.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Puan aralığı</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Bant</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Yüzdelik dilim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5f7]">
                <tr className="bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                  <td className="py-3 px-4 text-emerald-700">Olağanüstü</td>
                  <td className="py-3 px-4 text-[#6e6e73]">90. yüzdelik dilim ve üstü</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">110–119</td>
                  <td className="py-3 px-4 text-blue-700">Ortalamanın üstünde</td>
                  <td className="py-3 px-4 text-[#6e6e73]">75–90. yüzdelik dilim</td>
                </tr>
                <tr className="bg-[#eef2ff]">
                  <td className="py-3 px-4 font-semibold text-[#4F46E5]">95–109</td>
                  <td className="py-3 px-4 text-[#4F46E5]">Ortalama</td>
                  <td className="py-3 px-4 text-[#6e6e73]">37–73. yüzdelik dilim</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">85–94</td>
                  <td className="py-3 px-4 text-amber-700">Ortalamanın altında</td>
                  <td className="py-3 px-4 text-[#6e6e73]">16–37. yüzdelik dilim</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-3 px-4 font-semibold text-red-700">85'in altında</td>
                  <td className="py-3 px-4 text-red-700">Destek gerekiyor</td>
                  <td className="py-3 px-4 text-[#6e6e73]">16. yüzdelik dilimin altında</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6e6e73] mt-3">
            Çocukların %68'i 85 ile 115 arasında puan alır (ortalamadan ±1 standart sapma dahilinde).
          </p>
        </section>

        {/* International Benchmarks */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Uluslararası kıyaslamalar</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Eduentry her puan bandını uluslararası alanda tanınan dört eğitim çerçevesiyle eşleştirir;
            ailelere çocuklarının performansına dair küresel bir bağlam sunar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                flag: '🇬🇧',
                name: 'İngiltere Ulusal Müfredatı',
                detail: 'Puanlar şu kategorilere eşlenir: beklenen seviyenin altında / yaklaşıyor / ulaşıyor / üstünde / yüksek yetenekli. Gramer okuluna giriş için rekabetçi puanlar genellikle 115 ve üstünde.',
                color: 'border-blue-100 bg-blue-50',
              },
              {
                flag: '🇺🇸',
                name: 'ABD Sınıf Seviyeleri',
                detail: 'Puanlar sınıf seviyesinin altında / yaklaşıyor / seviyesinde / üstünde / önemli ölçüde üstünde kategorilerine eşlenir; Common Core ve NAEP yeterlilik tanımlarıyla uyumlu.',
                color: 'border-violet-100 bg-violet-50',
              },
              {
                flag: '🌍',
                name: 'PISA (OECD)',
                detail: 'Puanlar PISA 1–6 yeterlilik seviyelerine eşlenir. OECD ortalama performansı yaklaşık 3. Seviye\'ye karşılık gelir; standartlaştırılmış puan 100\'e yakın.',
                color: 'border-emerald-100 bg-emerald-50',
              },
              {
                flag: '🎓',
                name: 'IB Programı',
                detail: 'Puanlar IB Orta Yıllar Programına, IB Diploma Programı Standart Seviyesine veya Yüksek Seviye derslerine hazırlık düzeyini gösterir.',
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
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Sonuçlardan ne öğrenirsiniz</h2>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'Standartlaştırılmış puan ve performans kategorisi', desc: 'Ortalama-100, SS-15 ölçeğinde bir puan; beş banddan birine yerleştirilmiş: Destek gerekiyor (70–84), Ortalamanın altında (85–94), Ortalama (95–109), Ortalamanın üstünde (110–119) veya Olağanüstü (120+).' },
              { title: 'Küresel yüzdelik dilim sıralaması', desc: 'Öğrencinin tüm dünyadan aynı yaştaki akranlarına kıyasla nasıl bir performans sergilediği, yüzdelik dilim olarak ifade edilir (örn. ilk %10, ilk %25).' },
              { title: 'Derse göre ayrıntılı dökümü', desc: 'İngilizce, Matematik, Sözel Akıl Yürütme ve Sözel Olmayan Akıl Yürütme için ayrı puanlar ve performans bantları.' },
              { title: 'Uluslararası karşılaştırma', desc: 'İngiltere Ulusal Müfredatı seviyeleri, ABD sınıf eşdeğerleri, PISA yeterlilik seviyeleri ve IB programı hazırlık durumuna eşlenen puan.' },
              { title: 'Yapay zeka tarafından oluşturulan kişiselleştirilmiş öneriler', desc: 'Öğrencinin performans profiline dayalı özgün çalışma önerileri; genel puanı iyileştirme olasılığı en yüksek alanlara odaklanır.' },
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

      {/* Blog bağlantıları */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Blogdan</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/tr/blog/cocugunuz-dunyada-nerede-duruyor', label: 'Çocuğunuz Dünyada Nerede Duruyor?', desc: 'PISA, İngiltere ve IB kıyaslamaları hakkında ebeveyn rehberi.' },
            { href: '/tr/blog/lise-staji-faydalari-universite', label: 'Lise Stajının Faydaları ve Üniversite', desc: 'Standartlaştırılmış puanların lise deneyimleriyle nasıl kesiştiği.' },
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
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Çocuğunuzun yüzdelik dilimini görün</h2>
        <p className="text-[#6e6e73] mb-6">Ücretsiz değerlendirme · 6–17 yaş · 90 dakikada sonuçlar</p>
        <Link href="/tr/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          Ücretsiz değerlendirmeyi başlat
        </Link>
      </div>
    </main>
  )
}
