import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/tr`

export const metadata: Metadata = {
  title: 'İngiltere Staj Değerlendirmesi — Ücretsiz Yapay Zeka Raporu | Eduentry.ai',
  description:
    '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli staj hazırlık değerlendirmesi. 34 uyarlanabilir soru, 35 dakika. Teknoloji, İş, Veri ve Pazarlama alanları. Anında kişiselleştirilmiş rapor.',
  keywords: [
    'İngiltere staj değerlendirmesi',
    'ücretsiz staj hazırlık testi lise öğrencisi',
    'yapay zeka staj hazırlık raporu',
    'lise öğrencisi staj İngiltere',
    'teknoloji stajı 14 15 16 17 18 yaş',
    'iş dünyası stajı lise öğrencisi',
    'veri analitiği stajı lise',
    'dijital pazarlama stajı öğrenci',
    'staj yerleştirme öğrenci',
    'kariyer hazırlığı değerlendirmesi',
    'iş deneyimi değerlendirme lise',
    'ücretsiz yetenek testi öğrenci',
    'staj başvurusu kişisel beyan',
    'uyarlanabilir değerlendirme öğrenci kariyer',
    'lise staj fırsatları İngiltere',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { tr: PAGE_URL, 'en-GB': BASE_URL, es: `${BASE_URL}/es`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'tr_TR',
    title: 'İngiltere Staj Değerlendirmesi — Ücretsiz Yapay Zeka Raporu | Eduentry.ai',
    description: '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli staj hazırlık değerlendirmesi. 34 soru, 4 aşama. Anında kişiselleştirilmiş hazırlık raporu.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Staj Hazırlık Değerlendirmesi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İngiltere Staj Değerlendirmesi — Ücretsiz Yapay Zeka Raporu | Eduentry.ai',
    description: '14–18 yaş öğrenciler için ücretsiz staj hazırlık değerlendirmesi. 34 soru, anında kişiselleştirilmiş rapor.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/tr/tech',
  business: '/tr/business',
  data_analytics: '/tr/data-analytics',
  digital_marketing: '/tr/digital-marketing',
}

const TRACK_LABELS_TR: Record<string, string> = {
  tech: 'Teknoloji',
  business: 'İş Dünyası',
  data_analytics: 'Veri Analitiği',
  digital_marketing: 'Dijital Pazarlama',
}

const TRACK_DESCRIPTIONS_TR: Record<string, string> = {
  tech: 'Kodlama mantığı, algoritmalar, siber güvenlik, UX tasarımı ve yazılım geliştirme',
  business: 'Pazar analizi, finansal okuryazarlık, iş senaryoları ve ticari strateji',
  data_analytics: 'Grafik okuma, istatistik, tablo mantığı, SQL temelleri ve veri yorumlama',
  digital_marketing: 'SEO, sosyal medya stratejisi, içerik pazarlaması ve kampanya planlaması',
}

const PHASES = [
  { label: 'Genel Yetenek',       qs: 10, desc: 'Sözel ve sayısal muhakeme',          img: '/phases/general-aptitude.jpg' },
  { label: 'Alan Bilgisi',         qs: 10, desc: 'Alana özgü uygulamalı bilgi',        img: '/phases/domain-knowledge.jpg' },
  { label: 'İş Yeri Becerileri',  qs: 8,  desc: 'Gerçek iş yeri senaryoları (SJT)',   img: '/phases/workplace-skills.jpg' },
  { label: 'İlgi Profili',         qs: 6,  desc: 'Çalışma tarzı ve tercih haritalama', img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: 'Değerlendirme ücretsiz mi?',         a: 'Evet — öğrenciler için her zaman ücretsizdir. Gizli ücret, abonelik veya ücretli katman yoktur.' },
  { q: 'Kimler için?',                        a: 'Profesyonel deneyim kazanmak isteyen 14–18 yaş arası lise öğrencileri (9. sınıftan 12. sınıfa kadar).' },
  { q: 'Ne kadar sürer?',                     a: 'Dört aşamada 34 soru, yaklaşık 35 dakika. Değerlendirme tamamen devam ettirilebilir — istediğin zaman durdurup devam edebilirsin.' },
  { q: 'Hangi alanı seçmeliyim?',             a: 'Başvururken en fazla üç alan tercihini sıralarsın. İlgi Profili aşaması da en uygun olduğun yeri belirlemeye yardımcı olur — raporun bunu yansıtır.' },
  { q: 'Hazırlık raporum ne zaman gelir?',    a: 'Değerlendirmeyi tamamladıktan hemen sonra. 34 sorunun tamamını bitirdiğinde yapay zeka puanlama anında çalışır ve raporun hesabında hazır olur — bekleme süresi yoktur.' },
  { q: 'Değerlendirmemi özgeçmişimde kullanabilir miyim?', a: 'Evet. Hazırlık raporun, başvurularında doğrudan referans gösterebileceğin ölçülebilir bir puan ve alan bazlı beceri dökümü içerir. Pek çok öğrencimiz bunu kişisel beyanlara ve işe alım görüşmelerine taşıyor.' },
  { q: 'İngilizcem yeterli olmasa da başvurabilir miyim?', a: 'Değerlendirme şu an İngilizce olarak sunulmaktadır; ancak İngiltere iş dünyasının gerçek ortamında kullanılan dil budur. Sorular sade ve anlaşılır bir dille yazılmıştır. İngilizce anlama düzeyin günlük konuşma seviyesindeyse değerlendirmeyi rahatlıkla tamamlayabilirsin.' },
]

const internshipPosts = BLOG_POSTS_TR.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'tr',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'İngiltere Staj Değerlendirmesi — Ücretsiz Yapay Zeka Raporu | Eduentry.ai',
  description: '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli staj hazırlık değerlendirmesi. 34 soru, 4 aşama. Anında kişiselleştirilmiş hazırlık raporu.',
  inLanguage: 'tr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Staj Hazırlık Değerlendirmesi',
  url: PAGE_URL,
  description: '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli 34 soruluk uyarlanabilir değerlendirme. Teknoloji, İş Dünyası, Veri Analitiği ve Dijital Pazarlama alanlarında yetenek, alan bilgisi, iş yeri becerileri ve ilgi profili ölçülür.',
  inLanguage: 'tr',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: '14–18 yaş lise öğrencileri' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Eğitim Değerlendirmesi',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Eduentry.ai ile İngiltere'de staja nasıl yerleşilir",
  description: '14–18 yaş lise öğrencileri için ücretsiz 34 soruluk uyarlanabilir değerlendirme. Kayıttan staj yerleştirme eşleşmesine dört adım.',
  inLanguage: 'tr',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Kayıt ol', text: 'Ücretsiz Eduentry.ai hesabını bir dakikadan kısa sürede oluştur — ödeme bilgisi gerekmez.' },
    { '@type': 'HowToStep', position: 2, name: 'Başvur', text: 'Kendin, okulun ve Teknoloji, İş Dünyası, Veri Analitiği veya Dijital Pazarlama alanlarındaki tercihlerini bize anlat.' },
    { '@type': 'HowToStep', position: 3, name: 'Değerlendirmeyi tamamla', text: 'Dört aşamada 34 uyarlanabilir soru: Genel Yetenek, Alan Bilgisi, İş Yeri Becerileri ve İlgi Profili. Yaklaşık 35 dakika. İstediğin zaman devam et.' },
    { '@type': 'HowToStep', position: 4, name: 'Raporunu al', text: 'Hazırlık seviyesi, aşama bazlı döküm ve staj yerleştirme eşleşmesi içeren yapay zeka tarafından yazılmış kişiselleştirilmiş hazırlık raporunu al.' },
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

export default function TurkishHomePage() {
  return (
    <main className="flex-1" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            Yapay Zeka Destekli · Ücretsiz · 35 Dakika
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Gerçek bir staja<br />yer bul.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            14 yaş üstü lise öğrencileri için tasarlanmış 34 soruluk uyarlanabilir değerlendirme. Dört profesyonel alandaki hazırlık düzeyini keşfet ve kişiselleştirilmiş yapay zeka raporu al.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Ücretsiz başvur →
            </Link>
          </div>
          <p className="text-xs text-[#86868b] mt-6">Öğrenciler için ücretsiz · Kart gerekmez · 35 dakikada sonuç</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Mevcut alanlar</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16 leading-tight">
            Dört yol.<br />Tek değerlendirme.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_TR[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_TR[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_TR[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">Daha fazla →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Süreç</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Dört adımda yerleştirme.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Kayıt ol',                  desc: 'Ücretsiz hesabını bir dakikadan kısa sürede oluştur.' },
              { n: '02', title: 'Başvur',                     desc: 'Kendin, okulun ve alan tercihlerinin hakkında bilgi ver.' },
              { n: '03', title: 'Değerlendirmeyi tamamla',   desc: 'Dört aşamada 34 uyarlanabilir soru. İstediğin zaman devam et.' },
              { n: '04', title: 'Raporunu al',                desc: 'Yapay zeka tarafından yazılmış kişiselleştirilmiş hazırlık raporu ve yerleştirme eşleşmeni al.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Değerlendirme</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Neler beklediğini öğren.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">soru</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">Toplam: 34 soru · ~35 dakika · Oturumlar arasında tam devam ettirilebilir</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Sonuçlar</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Neler alacaksın.
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                'Hazırlık seviyesi — Staja Hazır, Gelişmekte ya da Destek Gerekiyor',
                'Yapay zeka tarafından yazılmış kişiselleştirilmiş özet paragraf',
                'Her aşama için güçlü yönler ve gelişim alanları içeren içgörü kartları',
                'En yüksek puan aldığın alanı gösteren alan uyum profili',
                'Başvurular ve kişisel ifadeler için paylaşılabilir rapor bağlantısı',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Kanıt</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Erken deneyimin neden önemi var.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: '16 yaşından önce 4+ işveren deneyimi yaşayan öğrencilerin 19 yaşında NEET olma olasılığı 5 kat daha az', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: "İşverenlerin %83'ü yeni mezunları işe alırken staj deneyimini önemli buluyor", source: 'NACE, 2023' },
              { stat: '70%', desc: 'Staj deneyimi olan öğrencilerde mezuniyetten önce iş teklifi alma oranı %70 daha yüksek', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Araştırma</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
              Blogdan son yazılar.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/tr/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/tr/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                Tüm staj makalelerini görüntüle →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">Sorular.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Hemen başvur.<br />Ücretsiz.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 soru. 35 dakika. Kişiselleştirilmiş yapay zeka raporu ve gerçek bir staja doğru ilk adım.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            Başvuruyu başlat →
          </Link>
        </div>
      </section>
    </main>
  )
}
