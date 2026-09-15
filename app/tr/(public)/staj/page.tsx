import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Ücretsiz Staj Değerlendirmesi — 14 Yaş ve Üstü Lise Öğrencileri',
  description:
    'Lise öğrencileri için ücretsiz 34 soruluk uyarlanabilir staj değerlendirmesi. Teknoloji, İş Dünyası, Veri Analitiği veya Dijital Pazarlama alanlarında staj hazırlığını 35 dakikada keşfet.',
  keywords: [
    'lise stajı',
    'staj değerlendirmesi',
    'staj hazırlığı',
    'staj başvurusu lise',
    'kariyer testi lise',
    'ücretsiz staj değerlendirmesi',
    'staj yetenek testi',
    'staj hazırlık testi',
    'teknoloji stajı lise',
    'iş deneyimi değerlendirmesi',
    'lise öğrencisi staj',
    '14 yaş staj',
    'staj hazırlık raporu',
    'kariyer rehberliği lise',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/staj`,
    languages: {
      tr: `${BASE_URL}/tr/staj`,
      'en-GB': `${BASE_URL}/internship`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/staj`,
    siteName: 'Eduentry',
    title: 'Ücretsiz Staj Değerlendirmesi — Eduentry',
    description:
      '14 yaş ve üstü lise öğrencileri için ücretsiz uyarlanabilir değerlendirme. Yetenek, alan bilgisi ve iş yeri becerileri genelinde kişiselleştirilmiş staj hazırlık raporu.',
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/tr/staj/opengraph-image`, width: 1200, height: 630, alt: 'Ücretsiz Staj Değerlendirmesi — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ücretsiz Staj Değerlendirmesi — Eduentry',
    description: '14 yaş ve üstü lise öğrencileri için 34 soruluk ücretsiz uyarlanabilir değerlendirme. 35 dakikada staj izini bul.',
    images: [`${BASE_URL}/tr/staj/opengraph-image`],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/tr/staj#service`,
  name: 'Staj Hazırlık Değerlendirmesi',
  description:
    '14 yaş ve üstü lise öğrencileri için ücretsiz 34 soruluk uyarlanabilir değerlendirme. Genel yetenek, alan bilgisi, iş yeri becerileri ve ilgi profilini dört staj izinde ölçer: Teknoloji, İş Dünyası, Veri Analitiği ve Dijital Pazarlama.',
  provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/tr/staj`,
  inLanguage: 'tr',
  audience: { '@type': 'EducationalAudience', audienceType: '14 yaş ve üstü lise öğrencileri' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/tr` },
    { '@type': 'ListItem', position: 2, name: 'Staj Değerlendirmesi', item: `${BASE_URL}/tr/staj` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Staj değerlendirmesi ücretsiz mi?',
      acceptedAnswer: { '@type': 'Answer', text: 'Evet, değerlendirme tüm öğrenciler için tamamen ücretsizdir. Abonelik, gizli ücret veya premium seviye yoktur.' },
    },
    {
      '@type': 'Question',
      name: 'Staj değerlendirmesi kime yönelik?',
      acceptedAnswer: { '@type': 'Answer', text: 'Değerlendirme, Teknoloji, İş Dünyası, Veri Analitiği veya Dijital Pazarlama alanlarında iş deneyimi ya da staj yerleştirmesine hazırlanan 14 yaş ve üstü lise öğrencileri için tasarlanmıştır.' },
    },
    {
      '@type': 'Question',
      name: 'Staj değerlendirmesi ne kadar sürer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Değerlendirme, dört aşamada 34 uyarlanabilir sorudan oluşur ve yaklaşık 35 dakika sürer. Tamamen devam ettirilebilir olduğundan öğrenciler durdurup oturumlar arasında devam edebilir.' },
    },
    {
      '@type': 'Question',
      name: 'Hangi staj izleri mevcut?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dört staj izi mevcuttur: Teknoloji, İş Dünyası, Veri Analitiği ve Dijital Pazarlama. Değerlendirme, genel yetenek ve iş yeri becerilerinin yanı sıra ilgili alan bilgisini test ederek seçilen ize uyum sağlar.' },
    },
    {
      '@type': 'Question',
      name: 'Hazırlık raporu neler içeriyor?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kişiselleştirilmiş hazırlık raporu; hazırlık seviyesi (Staja Hazır, Gelişiyor veya Destek Gerekiyor), öğrencinin performansına ilişkin yapay zeka tarafından oluşturulan bir özet ve her değerlendirme aşamasına ait güçlü yönleri ve bir gelişim alanını kapsayan aşamalara göre içgörüler içerir.' },
    },
    {
      '@type': 'Question',
      name: 'Staj değerlendirmesi üniversite başvurularına yardımcı oluyor mu?',
      acceptedAnswer: { '@type': 'Answer', text: 'Evet. Değerlendirme, öğrencilere profesyonel ortamlara hazırlıklarını anlama, güçlü yönlerini belirleme ve kişisel beyanlarında dile getirebilecekleri içgörüler kazanma imkânı sunar. Russell Group üniversiteleri rekabetçi programların kabul kılavuzlarında iş deneyimine açıkça atıfta bulunmaktadır.' },
    },
    {
      '@type': 'Question',
      name: 'Lise öğrencisi olarak staj için kaç yaşında başvurmalıyım?',
      acceptedAnswer: { '@type': 'Answer', text: 'Araştırmalar, ilk yapılandırılmış staj için 14–16 yaşını optimal pencere olarak gösteriyor. Bu erken başlangıç, deneyimi pekiştirme, üstüne inşa etme ve üniversite başvurusuna gelişmiş bir profesyonel anlatıyla ulaşma zamanı tanıyor.' },
    },
    {
      '@type': 'Question',
      name: 'Stajyer maaşı ne kadar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Stajyer maaşı şirkete, sektöre ve stajın ücretli olup olmadığına göre değişir. Türkiye\'de birçok şirket artık stajyerlerine ücret ödüyor. Ulusal Staj Programı kapsamındaki pozisyonlar genellikle asgari ücretle orantılı ödeme yapar.' },
    },
    {
      '@type': 'Question',
      name: 'Staj sigortası zorunlu mu?',
      acceptedAnswer: { '@type': 'Answer', text: 'Üniversite zorunlu stajlarında staj sigortası okul tarafından sağlanır ve iş kazası ile meslek hastalığına karşı öğrenciyi güvence altına alır. Lise gönüllü stajlarında sigorta yükümlülüğü şirkete göre değişir.' },
    },
    {
      '@type': 'Question',
      name: 'Staj defteri nedir?',
      acceptedAnswer: { '@type': 'Answer', text: 'Staj defteri, üniversite zorunlu stajlarında öğrencilerin günlük olarak doldurmak zorunda olduğu resmi belgedir. Stajda yapılan çalışmalar gün gün kaydedilir ve staj sonunda iş yeri tarafından onaylanıp okula teslim edilmeden zorunlu staj tamamlanmış sayılmaz.' },
    },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: 'Teknoloji', desc: 'Yazılım geliştirme, sistem düşüncesi ve teknik problem çözme yetkinliği.' },
  { key: 'business', icon: '📈', label: 'İş Dünyası', desc: 'Ticaret anlayışı, stratejik düşünme ve organizasyonel iletişim.' },
  { key: 'data_analytics', icon: '📊', label: 'Veri Analitiği', desc: 'Nicel akıl yürütme, veri yorumlama ve kanıta dayalı karar verme.' },
  { key: 'digital_marketing', icon: '📣', label: 'Dijital Pazarlama', desc: 'Kitle analizi, içerik stratejisi ve dijital kanal yönetimi.' },
]

const PHASES = [
  { label: 'Genel Yetenek', desc: '10 soru · Sözel ve sayısal akıl yürütme', icon: '🧠' },
  { label: 'Alan Bilgisi', desc: '10 soru · İze özgü uygulamalı bilgi', icon: '📚' },
  { label: 'İş Yeri Becerileri', desc: '8 soru · Gerçek iş yeri senaryoları (SJT)', icon: '🤝' },
  { label: 'İlgi Profili', desc: '6 soru · Çalışma tarzı ve tercih haritalama', icon: '🎯' },
]

const STAJ_TURLERI = [
  {
    icon: '☀️',
    title: 'Yaz Stajı',
    desc: 'Yaz tatilinde bir şirkette mesleki bilgini artırmak için yapılan kısa dönemli staj. Genellikle 2–8 hafta sürer ve tam zamanlı çalışma deneyimi sunar. Lise öğrencileri için en erişilebilir başlangıç noktasıdır.',
    link: '/tr/blog/yaz-staji-lise-ogrencisi',
  },
  {
    icon: '💻',
    title: 'Online Staj',
    desc: 'Stajyerin iş yerine fiziksel olarak gitmeden uzaktan çalıştığı staj modeli. Teknoloji, dijital pazarlama ve veri analitiği alanlarında yaygındır. Coğrafi kısıtlama olmadan global şirketlere erişim sağlar.',
    link: null,
  },
  {
    icon: '📅',
    title: 'Uzun Dönem Staj',
    desc: 'En az 6 ay ile 1 yıl arasında süren, şirketin ihtiyacına göre planlanan staj türü. Üniversite öğrencileri ve yeni mezunlara yönelik olup gerçek proje sorumluluğu ve derinlemesine sektör deneyimi sunar.',
    link: null,
  },
  {
    icon: '🇹🇷',
    title: 'Ulusal Staj Programı (USP)',
    desc: 'Türkiye\'de devlet destekli ulusal staj programları kapsamında sunulan fırsatlar. Büyük ölçekli şirketler ve kamu kurumlarının aynı anda çok sayıda stajyer aldığı, yapılandırılmış programlardır.',
    link: null,
  },
  {
    icon: '🤝',
    title: 'Gönüllü Staj',
    desc: 'Üniversite tarafından zorunlu kılınmayan, öğrencinin kendi inisiyatifiyle yaptığı staj türü. Zorunlu stajdan farklı olarak notu etkilemez ancak kariyer gelişimi ve üniversite başvuruları için son derece değerlidir.',
    link: null,
  },
  {
    icon: '🎓',
    title: 'Zorunlu Staj',
    desc: 'Üniversite tarafından bölümün gereği olarak belirlenen dönemde yaptırılan, not sistemine dahil edilen staj. Staj sigortası genellikle okul tarafından sağlanır. Staj defteri tutmak zorunludur.',
    link: '/tr/blog/staj-defteri-nasil-doldurulur',
  },
]

const RELATED_POSTS = BLOG_POSTS_TR
  .filter(p => ['erken-yas-staj-cocuk-gelisimi-kariyer', 'staj-icin-cv-nasil-yazilir', 'staj-mulakati-hazirlik-rehberi'].includes(p.slug))
  .slice(0, 3)

export default function TRStajLandingPage() {
  return (
    <div className="bg-[#f5f5f7]" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Staj Değerlendirme Platformu
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Staj hazırlığını<br />keşfet
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            14 yaş ve üstü lise öğrencileri için tasarlanmış 34 soruluk uyarlanabilir değerlendirme. Yaklaşık 35 dakika sürer ve kişiselleştirilmiş bir hazırlık raporu oluşturur.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/tr/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Ücretsiz başla
            </Link>
            <Link
              href="/tr/auth/login"
              className="text-[#4F46E5] font-semibold text-base hover:underline"
            >
              Hesabın var mı? Giriş yap
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: '16 yaş öncesinde 4+ işveren temasıyla 19 yaşında NEET olma olasılığı bu kadar daha düşük', source: 'Education and Employers, 2018' },
              { stat: '%73', desc: 'İngiliz mezun işverenlerinin mülakatta önceki iş deneyimini en önemli faktör olarak değerlendirdiği', source: 'Prospects, 2022' },
              { stat: '%70', desc: 'Staj deneyimi olan öğrencilerin mezuniyet öncesi iş teklifi alma oranındaki artış', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Mevcut staj izleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.key} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{track.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{track.label}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Neden önemli?</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Erken iş deneyimi üzerine boylamsal araştırmadan kanıtlar.</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Russell Group üniversiteleri, rekabetçi programların kabul kılavuzlarında iş deneyimine açıkça atıfta bulunmaktadır. Tıp, hukuk ve teknoloji programlarında bu artık neredeyse zorunlu bir gereklilik hâline gelmiştir — ek bir avantaj değil.
              </p>
              <Link href="/tr/blog/lise-staji-faydalari-universite" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                Tam araştırma analizini oku →
              </Link>
            </div>
          </div>
        </section>

        {/* Staj Türleri */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Staj türleri</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Yaz stajından uzun dönem staja, online stajdan zorunlu staja — her türün kendine özgü özellikleri var.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STAJ_TURLERI.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    Daha fazla oku →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Değerlendirme nasıl işler?</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#1d1d1f] text-sm">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Aşama {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Toplam: 34 soru · ~35 dakika · Tamamen devam ettirilebilir</span>
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Sık sorulan sorular</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: 'Değerlendirme tamamen ücretsiz mi?', a: 'Evet. Abonelik, gizli ücret veya premium seviye yok. Ücretsiz bir hesap oluştur ve hemen başla.' },
              { q: 'Hangi yaşlara uygun?', a: '14 yaş ve üstü tüm lise öğrencilerine uygundur. Değerlendirme farklı bilgi seviyelerine uyum sağlar, bu nedenle 9. sınıftan 13. sınıfa kadar herkes için geçerli.' },
              { q: 'Hangi staj izlerinden birini seçmeliyim?', a: 'Değerlendirme başlamadan önce bir iz seçersin. Hangisini seçeceğinden emin değilsen, staj aramak istediğin sektörü düşün; değerlendirmemiz alan bilgisi testini o sektöre göre uyarlar. Dilersen birden fazla değerlendirme yapabilirsin.' },
              { q: 'Hazırlık raporum ne zaman hazır olur?', a: 'Değerlendirmeyi tamamlar tamamlamaz anında. Rapor, hazırlık seviyeni (Staja Hazır, Gelişiyor veya Destek Gerekiyor), yapay zeka tarafından oluşturulan bir özeti ve her aşamaya ait güçlü yönleri ve bir gelişim alanını içerir.' },
              { q: 'Bu değerlendirme üniversite başvurularıma yardımcı olur mu?', a: 'Evet. Değerlendirme, güçlü yönlerini belirleme, hangi profesyonel ortamlarda öne çıktığını anlama ve kişisel beyanında spesifik olarak dile getirebileceğin içgörüler kazanma imkânı sunar.' },
              { q: 'Değerlendirmeyi kesmem gerekirse ne olur?', a: 'İlerleme otomatik olarak kaydedilir. Kaldığın yerden dilediğin zaman devam edebilirsin — yeniden başlaman gerekmiyor.' },
              { q: 'Stajyer maaşı ne kadar?', a: 'Stajyer maaşı, şirkete, sektöre ve stajın ücretli olup olmadığına göre büyük farklılık gösterir. Türkiye\'de birçok şirket artık stajyerlerine ücret ödüyor. Ulusal Staj Programı (USP) kapsamındaki pozisyonlar genellikle asgari ücretle orantılı ödeme yapar. Lise stajları çoğunlukla gönüllü veya sembolik ödemeli olurken üniversite zorunlu stajlarında ücret daha yaygındır.' },
              { q: 'Staj sigortası zorunlu mu?', a: 'Üniversite zorunlu stajlarında staj sigortası okul tarafından sağlanır ve iş kazası ile meslek hastalığına karşı öğrenciyi güvence altına alır. Lise gönüllü stajlarında sigorta yükümlülüğü şirkete göre değişir. Herhangi bir staj başlamadan önce sigortanın kimin tarafından yapıldığını netleştirmek önemlidir.' },
              { q: 'Staj seferberliği nedir?', a: 'Staj seferberliği, devletin ve özel sektörün iş birliğiyle lise ve üniversite öğrencilerine daha fazla staj imkânı sunmayı hedeflediği kampanya ve programların genel adıdır. Bu kapsamda büyük şirketler aynı anda çok sayıda stajyer alarak yapılandırılmış programlar düzenler. Ulusal Staj Programı (USP) bu seferberliğin en bilinen örneğidir.' },
              { q: 'Staj defteri nedir, zorunlu mu?', a: 'Staj defteri, üniversite zorunlu stajlarında öğrencilerin günlük olarak doldurmak zorunda olduğu resmi belgedir. Stajda yapılan çalışmalar, öğrenilenler ve çalışılan kişiler gün gün kaydedilir. Staj sonunda iş yeri tarafından onaylanıp okula teslim edilmeden zorunlu staj tamamlanmış sayılmaz. Lise gönüllü stajlarında staj defteri zorunlu olmasa da deneyimi belgelemek için tutulması önerilir.' },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm text-[#1d1d1f]">{q}</span>
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related blog posts */}
        {RELATED_POSTS.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">İlgili rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/tr/blog/${post.slug}`}
                  className="border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors"
                >
                  <div className="text-xs font-semibold text-[#4F46E5] mb-2">{post.tags[0]}</div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug">{post.shortTitle ?? post.title}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#4F46E5] rounded-3xl px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Staj hazırlığını bugün ölç</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34 soru · 35 dakika · Anında kişiselleştirilmiş rapor. Tamamen ücretsiz.
            </p>
            <Link
              href="/tr/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Ücretsiz değerlendirmeyi başlat
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
