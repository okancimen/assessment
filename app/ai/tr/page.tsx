import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/tr`

export const metadata: Metadata = {
  title: { absolute: 'İngiltere Staj Değerlendirmesi — Ücretsiz Yapay Zeka Raporu | Eduentry.ai' },
  description:
    '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli staj hazırlık değerlendirmesi. 34 uyarlanabilir soru, 20 dakika. Teknoloji, İş, Veri ve Pazarlama alanları. Anında kişiselleştirilmiş rapor.',
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
    languages: { 'en-GB': BASE_URL, tr: PAGE_URL, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, ru: `${BASE_URL}/ru`, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'tr_TR',
    alternateLocale: ['en_GB', 'es_ES', 'fr_FR', 'ar_AE', 'ru_RU', 'zh_CN'],
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

const TRACK_SLUGS: Record<string, string> = {
  tech: '/tr/teknoloji',
  business: '/tr/is-dunyasi',
  data_analytics: '/tr/veri-analitigi',
  digital_marketing: '/tr/dijital-pazarlama',
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

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡', business: '◈', data_analytics: '◉', digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const PHASES = [
  { label: 'Genel Yetenek',      qs: 10, desc: 'Sözel ve sayısal muhakeme' },
  { label: 'Alan Bilgisi',        qs: 10, desc: 'Alana özgü uygulamalı bilgi' },
  { label: 'İş Yeri Becerileri', qs: 8,  desc: 'Gerçek iş yeri senaryoları (SJT)' },
  { label: 'İlgi Profili',        qs: 6,  desc: 'Çalışma tarzı ve tercih haritalama' },
]

const FAQS = [
  { q: 'Değerlendirme ücretsiz mi?',         a: 'Evet — öğrenciler için her zaman ücretsizdir. Gizli ücret, abonelik veya ücretli katman yoktur.' },
  { q: 'Kimler için?',                        a: 'Profesyonel deneyim kazanmak isteyen 14–18 yaş arası lise öğrencileri (9. sınıftan 12. sınıfa kadar).' },
  { q: 'Ne kadar sürer?',                     a: 'Dört aşamada 34 soru, yaklaşık 20 dakika. Değerlendirme tamamen devam ettirilebilir — istediğin zaman durdurup devam edebilirsin.' },
  { q: 'Hangi alanı seçmeliyim?',             a: 'Başvururken en fazla üç alan tercihini sıralarsın. İlgi Profili aşaması da en uygun olduğun yeri belirlemeye yardımcı olur — raporun bunu yansıtır.' },
  { q: 'Hazırlık raporum ne zaman gelir?',    a: 'Değerlendirmeyi tamamladıktan hemen sonra. 34 sorunun tamamını bitirdiğinde yapay zeka puanlama anında çalışır ve raporun hesabında hazır olur.' },
  { q: 'Değerlendirmemi özgeçmişimde kullanabilir miyim?', a: 'Evet. Hazırlık raporun, başvurularında doğrudan referans gösterebileceğin ölçülebilir bir puan ve alan bazlı beceri dökümü içerir.' },
  { q: 'İngilizcem yeterli olmasa da başvurabilir miyim?', a: 'Değerlendirme İngilizce olarak sunulmaktadır. Sorular sade ve anlaşılır bir dille yazılmıştır. Günlük konuşma seviyesinde İngilizce yeterlidir.' },
]

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
  description: '14–18 yaş lise öğrencileri için ücretsiz yapay zeka destekli 34 soruluk uyarlanabilir değerlendirme.',
  inLanguage: 'tr',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: '14–18 yaş lise öğrencileri' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Eğitim Değerlendirmesi',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Eduentry.ai ile İngiltere'de staja nasıl yerleşilir",
  inLanguage: 'tr',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Kayıt ol', text: 'Ücretsiz Eduentry.ai hesabını oluştur.' },
    { '@type': 'HowToStep', position: 2, name: 'Başvur', text: 'Kendin ve tercihlerini paylaş.' },
    { '@type': 'HowToStep', position: 3, name: 'Değerlendirmeyi tamamla', text: '34 soru, 4 aşama, ~20 dakika.' },
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

const internshipPosts = BLOG_POSTS_TR.slice(0, 3)

export default function TurkishHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              Kişiselleştirilmiş · Ücretsiz · 20 Dakika
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Gerçek bir iş tecrübesi</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">edin.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            14 yaş üstü lise öğrencileri için 34 soruluk uyarlanabilir değerlendirme. Dört profesyonel alandaki hazırlık düzeyini keşfet ve kişiselleştirilmiş rapor al.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link href="/apply" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]">
              Ücretsiz başvur
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="https://eduentry.com/sample-report" className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all">
              Örnek raporu gör
            </a>
          </div>
          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30"><span className="text-[#818CF8]">❯</span> eduentry assess --track tech --age 16</div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between"><span className="text-white/40">General Aptitude</span><span className="text-[#4ade80]">87 / 100</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Domain Knowledge</span><span className="text-[#4ade80]">74 / 100</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Workplace Skills</span><span className="text-[#4ade80]">91 / 100</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Interest Profile</span><span className="text-[#4ade80]">88 / 100</span></div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">Örnek çıktı — sonuçlar sana özel</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Mevcut alanlar</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">Dört yol.<br /><span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Tek değerlendirme.</span></h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">Tüm alanları karşılaştır →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link key={track} href={TRACK_SLUGS[track]} className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_TR[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_TR[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>Daha fazla →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Süreç</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">Üç adımda yerleştirme.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'Kayıt ol ve başvur',       desc: 'Ücretsiz hesabını oluştur. Kendin, okulun ve alan tercihlerini paylaş.' },
              { n: '02', title: 'Değerlendirmeyi tamamla',  desc: '34 uyarlanabilir soru, dört aşama. İstediğin zaman devam et.' },
              { n: '03', title: 'Raporunu al',               desc: 'Kişiselleştirilmiş hazırlık raporu ve staj yerleştirme eşleşmen anında hazır.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Değerlendirme yapısı</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Neler beklediğini öğren.</h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}>
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm mb-0.5">{phase.label}</h3>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">soru</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">Toplam: 34 soru · ~20 dakika · Tam devam ettirilebilir</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Rapor içeriği</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">Raporun.<br /><span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Anında.</span></h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">Son soruyu tamamladığın anda puanlama başlar. Bekleme yok. Saniyeler içinde hesabında hazır.</p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Değerlendirmeyi başlat
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                'Hazırlık seviyesi — Staja Hazır, Gelişmekte ya da Destek Gerekiyor',
                'Kişiselleştirilmiş özet paragraf',
                'Her aşama için güçlü yönler ve gelişim alanları',
                'En yüksek puan aldığın alanı gösteren alan uyum profili',
                'Başvurular için paylaşılabilir rapor bağlantısı',
              ].map(text => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Kanıt</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Erken deneyimin neden önemi var.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: '16 yaşından önce 4+ işveren deneyimi olan öğrencilerin 19 yaşında NEET olma ihtimali 5 kat daha az', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: "İşverenlerin %83'ü yeni mezunları işe alırken staj deneyimini önemli buluyor", source: 'NACE, 2023' },
              { stat: '70%', desc: 'Staj deneyimi olan öğrencilerde mezuniyetten önce iş teklifi alma oranı %70 daha yüksek', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Araştırma</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Blogdan son yazılar.</h2>
              <Link href="https://eduentry.com/tr/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">Tümünü gör →</Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link key={post.slug} href={`https://eduentry.com/tr/blog/${post.slug}`} className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                    <span>·</span><span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// SSS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Sorular.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details key={q} className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}>
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            Öğrenciler için ücretsiz · Kart gerekmez
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Hemen başvur.<br /><span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">Ücretsiz.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">34 soru. 20 dakika. Kişiselleştirilmiş rapor ve gerçek bir iş tecrübesine doğru ilk adım.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]">
            Başvuruyu başlat
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
