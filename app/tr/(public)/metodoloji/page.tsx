import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Değerlendirme Metodolojisi: IRT ve VIA',
  description: '2 parametreli MYT ile uyarlanabilir akademik değerlendirme ve VIA Karakter Güçleri çerçevesiyle kişilik değerlendirmesi — 6–17 yaş için iki farklı metodoloji.',
  keywords: 'madde yanıt teorisi çocuklar, uyarlanabilir test MYT, standartlaştırılmış puan çocuklar, MAP tahmini, VIA karakter güçleri, ebeveyn değerlendirmesi, eğitim değerlendirme metodolojisi',
  alternates: {
    canonical: `${BASE_URL}/tr/metodoloji`,
    languages: { 'en-GB': `${BASE_URL}/methodology`, es: `${BASE_URL}/es/metodologia`, fr: `${BASE_URL}/fr/methodologie`, tr: `${BASE_URL}/tr/metodoloji`, ar: `${BASE_URL}/ar/manhajiyya`, ru: `${BASE_URL}/ru/metodologiya`, zh: `${BASE_URL}/zh/fangfalun`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Eduentry nasıl çalışır — Uyarlanabilir IRT değerlendirme metodolojisi',
    description: '2 parametreli MYT, MAP tahmini, standartlaştırılmış puan (ortalama 100, SS 15) ve İngiltere müfredatı, PISA, ABD ve IB ile uluslararası karşılaştırma.',
    url: `${BASE_URL}/tr/metodoloji`,
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry nasıl çalışır — Uyarlanabilir IRT değerlendirme metodolojisi',
    description: '2 parametreli MYT, MAP tahmini, standartlaştırılmış puan (ortalama 100, SS 15) ve İngiltere müfredatı, PISA, ABD ve IB ile uluslararası karşılaştırma.',
    images: [`${BASE_URL}/tr/metodoloji/opengraph-image`],
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

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Uyarlamalı test nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Uyarlamalı test, her soruyu çocuğun önceki yanıtlarına göre gerçek zamanlı olarak kalibre eden bir değerlendirme teknolojisidir. Geleneksel testlerin aksine, bu yöntem sabit bir soru seti kullanmaz; bunun yerine zorluk seviyesini her öğrencinin gerçek performansına göre ayarlar.' } },
    { '@type': 'Question', name: 'Madde Tepki Teorisi (MTT) nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Madde Tepki Teorisi (MTT), her soruyu güçlük, ayırt edicilik ve şans faktörü gibi istatistiksel özelliklere göre modelleyen bir ölçme teorisidir. Eduentry\'nin değerlendirmeleri, uluslararası benchmarklarla karşılaştırılabilir hassas yetenek tahminleri sunmak için MTT\'ye dayanmaktadır.' } },
    { '@type': 'Question', name: 'Eduentry\'nin metodolojisi nasıl işler?', acceptedAnswer: { '@type': 'Answer', text: 'Çocuk her soruyu yanıtladıkça sistem, yetenek tahminini anlık olarak günceller ve bir sonraki sorunun güçlük seviyesini ayarlar. Bu süreç, çok daha az soruyla standart testlerden daha doğru ölçümler elde edilmesini sağlar.' } },
    { '@type': 'Question', name: 'Değerlendirmeler uluslararası standartlarla uyumlu mu?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Eduentry\'nin sonuçları PISA, İngiltere Ulusal Müfredatı ve IB gibi uluslararası standartlarla karşılaştırılabilecek şekilde tasarlanmıştır. Standart skorlar ve küresel yüzdelik dilim sıralamaları sunulmaktadır.' } },
    { '@type': 'Question', name: 'VIA Karakter Güçleri çerçevesi nedir?', acceptedAnswer: { '@type': 'Answer', text: 'VIA Karakter Güçleri, Dr. Martin Seligman ve Dr. Neal Mayerson tarafından geliştirilen pozitif psikoloji çerçevesidir. 6 temel erdem altında gruplanmış 24 evrensel karakter özelliğini tanımlar: Bilgelik, Cesaret, İnsanlık, Adalet, Ölçülülük ve Aşkınlık. 190\'dan fazla ülkede araştırmacılar tarafından kullanılmaktadır.' } },
    { '@type': 'Question', name: 'Kişilik değerlendirmesi neden çocuk değil ebeveyn tarafından doldurulur?', acceptedAnswer: { '@type': 'Answer', text: 'Çocukların öz algıları — özellikle 6–13 yaş grubunda — hızla değişir ve tutarsız olabilir. Ebeveyn gözlemi, her gün çocuğu gören birinin nesnel bakış açısını yansıtır ve daha istikrarlı, doğru bir karakter profili ortaya çıkarır.' } },
  ],
}

export default function MetodolojiPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/tr" className="hover:text-[#1d1d1f]">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Metodoloji</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">Metodoloji</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Eduentry değerlendirmeleri nasıl çalışır</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          Eduentry iki ayrı metodoloji kullanır: akademik beceriler için <strong className="text-[#1d1d1f]">Madde Yanıt Teorisi</strong> temelli
          uyarlanabilir değerlendirme; karakter özellikleri için <strong className="text-[#1d1d1f]">VIA Karakter Güçleri</strong> çerçevesine
          dayalı ebeveyn gözlem anketi. Her biri farklı bir soruya yanıt verir.
        </p>
      </div>

      {/* Methodology switcher cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border-2 border-[#4F46E5] bg-[#eef2ff] p-6">
          <p className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-2">Metodoloji 1</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">IRT Akademik Değerlendirme</h2>
          <p className="text-sm text-[#6e6e73] leading-relaxed">Uyarlanabilir sorular ve 2PL MYT ile standartlaştırılmış akademik puan — ortalama 100, SS 15 ölçeğinde, uluslararası kıyaslamalı.</p>
        </div>
        <div className="rounded-2xl border-2 border-violet-300 bg-violet-50 p-6">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-2">Metodoloji 2</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">VIA Karakter Güçleri Değerlendirmesi</h2>
          <p className="text-sm text-[#6e6e73] leading-relaxed">Ebeveyn gözlemine dayalı anket ile 24 evrensel karakter özelliğinin profillemesi — tek bir puan yerine güçlü yönler sıralaması.</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* ── METHODOLOGY 1 ── */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider bg-[#eef2ff] border border-[#c7d2fe] rounded-full px-3 py-1">Metodoloji 1 — IRT Akademik Değerlendirme</span>
        </div>

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
                  <h3 className="font-semibold text-[#1d1d1f] text-sm">{name}</h3>
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
          <p className="text-[#6e6e73]">
            Bunların hepsini tek bir sayfada görmek ister misiniz?{' '}
            <Link href="/tr/ornek-rapor" className="text-[#4F46E5] hover:underline font-medium">Örnek raporu inceleyin →</Link>
          </p>
        </section>

        {/* Subjects */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Değerlendirilen dersler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'İngilizce', icon: '📚', detail: 'Okuma anlama, dilbilgisi, kelime hazinesi, yazım ve yazılı dil kuralları.' },
              { name: 'Matematik', icon: '🔢', detail: 'Aritmetik, cebir, geometri, istatistik ve matematiksel problem çözme.' },
              { name: 'Sözel Akıl Yürütme', icon: '💬', detail: 'Kelime analogisi, sınıflandırma, mantık dizileri ve dil temelli problem çözme.' },
              { name: 'Sözel Olmayan Akıl Yürütme', icon: '🔷', detail: 'Örüntü tanıma, uzamsal akıl yürütme, matris tamamlama ve görsel mantık.' },
            ].map(({ name, icon, detail }) => (
              <div key={name} className="bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{icon}</span>
                  <h3 className="font-semibold text-[#1d1d1f]">{name}</h3>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODOLOGY 2 ── */}
        <div className="flex items-center gap-3 pt-4">
          <span className="text-xs font-bold text-violet-600 uppercase tracking-wider bg-violet-50 border border-violet-200 rounded-full px-3 py-1">Metodoloji 2 — VIA Karakter Güçleri Değerlendirmesi</span>
        </div>

        {/* Kişilik değerlendirmesi */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Kişilik değerlendirmesi metodolojisi</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Kişilik güçleri değerlendirmesi, akademik MYT değerlendirmesinden temelden farklı bir yaklaşım kullanır. Bilgi ve akıl yürütme becerisini ölçmek yerine, çocuğun karakter özelliklerini <strong className="text-[#1d1d1f]">ebeveyn gözlemine</strong> dayalı bir anket aracılığıyla ölçer — çocuğu her gün gören kişi tarafından doldurulur.
          </p>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">VIA Kişilik Güçleri çerçevesi</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Değerlendirme, pozitif psikolojinin öncüleri Dr. Martin Seligman ve Dr. Neal Mayerson tarafından geliştirilen VIA Kişilik Güçleri çerçevesine dayanır. Bu çerçeve, 6 temel erdem altında gruplandırılmış 24 evrensel karakter özelliğini tanımlar: Bilgelik, Cesaret, İnsanlık, Adalet, Ölçülülük ve Aşkınlık. 190&apos;dan fazla ülkede araştırmacılar tarafından kullanılmaktadır.
          </p>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">Ebeveyn değerlendirmesi tasarımı</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Ebeveynler, çocuklarında her gün gözlemledikleri davranışlar için 1–5 yıldız derecelendirmeli kısa bir anketi doldurur. Çocuğun ankete katılması gerekmez. Bu tasarım bilinçlidir: çocukların öz algıları hızla değişir ve ebeveyn gözlemi, özellikle 6–13 yaş grubunda, daha istikrarlı ve doğru bir temel sağlar.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Sorular çocuğun gelişim aşamasına göre kalibre edilmiştir. Dört yaş kademesi, her aşamada karakterin nasıl geliştiğiyle hem kelime dağarcığını hem de değerlendirilen özellikleri eşleştirir:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {([
              { tier: 'Junior', age: '6–9 yaş', traits: '12 özellik', questions: '24 soru', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { tier: 'Orta', age: '10–13 yaş', traits: '15 özellik', questions: '30 soru', color: 'bg-green-50 border-green-200 text-green-700' },
              { tier: 'Ergen', age: '14–17 yaş', traits: '20 özellik', questions: '40 soru', color: 'bg-purple-50 border-purple-200 text-purple-700' },
              { tier: 'Genç Yetişkin', age: '18–20 yaş', traits: 'Tüm 24 özellik', questions: '48 soru', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ] as const).map((t) => (
              <div key={t.tier} className={`rounded-xl border p-3 text-center ${t.color}`}>
                <p className="font-bold text-sm mb-0.5">{t.tier}</p>
                <p className="text-xs opacity-80">{t.age}</p>
                <p className="text-xs mt-1">{t.traits}</p>
                <p className="text-xs">{t.questions}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#1d1d1f] mb-3 mt-6">Rapor neleri gösterir</h3>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Akademik değerlendirmeden farklı olarak kişilik raporu tek bir standartlaştırılmış puan üretmez. Özellikler birbirlerine göre sıralanır ve şunlar elde edilir:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">En Güçlü 5 Yön</strong> — çocuğun en yüksek puan aldığı özellikler; doğal mükemmellik alanları ve üzerine inşa edilecek temel.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Geliştirilebilecek 3 Alan</strong> — gelişim potansiyeli en yüksek özellikler; eksiklik vurgusu yerine nazik bir çerçevelemeyle.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Yapay Zeka Destekli Egzersizler</strong> — çocuğun özgün güç profiline özel, evde uygulanabilecek gerçek dünya aktiviteleri.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73]">
            Çocuğunuzun karakter profilinin nasıl göründüğünü görmek ister misiniz?{' '}
            <Link href="/tr/kisilik-degerlendirmesi" className="text-[#4F46E5] hover:underline font-medium">Ücretsiz kişilik değerlendirmesini başlatın →</Link>
          </p>
        </section>

        {/* Şeffaflık */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Şeffaflık</h2>
          <div className="space-y-4">
            <p className="text-[#6e6e73] leading-relaxed">
              Eduentry, her öğrencinin akademik yeteneklerini doğru biçimde yansıtan güçlü ve uyarlanabilir bir değerlendirme yaklaşımı sunar.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Geleneksel değerlendirmeler çoğunlukla sabit soru setleriyle sınırlıdır; bu durum sonuçların öğrencinin gerçek yetenekten çok soruların güçlük düzeyinden etkilenmesine yol açabilir. Eduentry, her öğrencinin yanıtlarına göre soru güçlüğünü sürekli olarak ayarlayan yapay zeka destekli bir uyarlanabilir motor aracılığıyla bu sınırlamayı ortadan kaldırır. Böylece sonuçlar testin yapısından değil, öğrencinin gerçek potansiyelinden kaynaklanır.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Eduentry&apos;nin metodolojisi CAT4, GL Assessment ve WISC&apos;ten farklılık gösterse de sonuçlar, eğitim planlaması ve karar alma süreçleri için güvenilir ve uygulanabilir bir temel sağlar. Resmi tanı değerlendirmesinin gerektiği durumlarda Eduentry, yerleşik psikometrik araçları değerli bir şekilde tamamlar.
            </p>
          </div>
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
        <p className="text-[#6e6e73] mb-6">Ücretsiz değerlendirme · 6–17 yaş · Bir saatte sonuçlar</p>
        <Link href="/tr/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          Ücretsiz değerlendirmeyi başlat
        </Link>
      </div>
    </main>
  )
}
