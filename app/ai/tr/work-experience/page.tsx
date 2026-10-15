import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/tr/work-experience`

export const metadata: Metadata = {
  title: { absolute: 'Üniversite Çalışma Deneyimi & Global Burs Programı — Eduentry.ai' },
  description:
    '20 dakikalık AI Staj Hazırlık Testini tamamla. İlk %10’e giren üniversite öğrencileri Magenta Networks aracılığıyla Singapur teknoloji teslimları üzerinde çalıştıkları 3 aylık hibrit burs programına seçilir.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Üniversite Çalışma Deneyimi & Global Burs Programı — Eduentry.ai',
    description: 'AI destekli kariyer bursu. 20 dk test → ilk %10 Singapur teknoloji ekipleriyle 3 aylık hibrit burs programına seçilir.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai Üniversite Burs Programı' }],
  },
}

const TRACKS = [
  {
    icon: '⬡',
    title: 'YZ & Yazılım Mühendisliği',
    desc: 'Kod analizi, asenkron git iş akışları, sistem tasarım mantığı ve API entegrasyon problem çözme.',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    href: 'https://eduentry.ai/tr/teknoloji',
  },
  {
    icon: '◉',
    title: 'Veri Analitiği & Mühendisliği',
    desc: 'Python, SQL, veri boru hattı akıl yürütme, grafik yorumlama ve istatistiksel karar verme.',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
    href: 'https://eduentry.ai/tr/veri-analitigi',
  },
  {
    icon: '◇',
    title: 'Dijital Büyüme & Pazarlama',
    desc: 'SEO, AI içerik iş akışları, kampanya analitiği, huni optimizasyonu ve performans raporlama.',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
    href: 'https://eduentry.ai/tr/dijital-pazarlama',
  },
  {
    icon: '◈',
    title: 'İş Geliştirme & Teknoloji Araştırması',
    desc: 'Pazar araştırması, müşteri iletişimleri, rekabet analizi ve teknik şartname yazımı.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    href: 'https://eduentry.ai/tr/is-dunyasi',
  },
]

const FAQS = [
  {
    q: 'Başvuru için kim uygun?',
    a: 'Dünya genelinde herhangi bir üniversite öğrencisi — 1. Yıldan Son Yıla ve Yerleşim Yılına kadar — uygundur. Not ortalaması şartı yoktur. Test tek filtredir: en yüksek puan alanların %10\'u bursa davet edilir.',
  },
  {
    q: 'Burs ne kadar zaman gerektiriyor?',
    a: '3 aylık program boyunca haftada 10–15 saat. %80\'i canlı müşteri teslimlarında uzaktan uygulama (Jira, Slack, GitHub). %20\'si haftalık mentorluk toplantıları ve Singapur teknoloji liderleriyle Capstone Demo Günü.',
  },
  {
    q: 'Başvurmanın veya katılmanın maliyeti var mı?',
    a: 'Cohort 1 tamamen ücretsiz — hem AI testi hem de bursun kendisi. Eduentry tüm katılım masraflarını karşılıyor. Hiçbir aşamada ücret yok.',
  },
  {
    q: 'Bursun ardından ne olur?',
    a: 'Burs sahipleri doğrulanmış Eduentry.ai Burs Sertifikası, ayrıntılı beceri raporu ve Magenta Networks referansı alır. Yüksek performanslı burs sahipleri Magenta Networks\'ün İngiltere ve Singapur ekipleriyle doğrudan işe alım görüşmeleri için önceliklendirilir.',
  },
  {
    q: '48 saatlik mikro görev nedir?',
    a: 'Kısa listeye alınan adaylar (AI testinin ilk %10\'u) seçilen alana uygun gerçek bir Jira/GitHub görevi alır. Bu pratik, zaman sınırlı bir alıştırmadır — test değil. Tamamlanması yaklaşık 2–4 saat sürer.',
  },
  {
    q: 'Cohort 1 ne zaman başlıyor?',
    a: 'Cohort 1, 10 Ocak 2027\'de başlıyor. Başvurular şu an açık. Bu cohort için sadece 10 burs yeri mevcut.',
  },
]

export default function WorkExperienceTRPage() {
  return (
    <main className="flex-1 bg-black text-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center px-6 pt-24 pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.12] blur-[140px]" style={{ background: '#A78BFA' }} />
        <div className="pointer-events-none absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: '#4141DD' }} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-widest mb-10"
            style={{
              border: '1px solid rgba(167,139,250,0.5)',
              background: 'rgba(167,139,250,0.08)',
              color: '#A78BFA',
              boxShadow: '0 0 24px rgba(167,139,250,0.15)',
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
            COHORT 1 — 10 OCAK 2027'DE BAŞLIYOR &nbsp;·&nbsp; 10 ÖZEL BURS YERİ
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
            Üniversite Kariyerini<br />
            <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #4141DD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Global Teknoloji Merkezlerine Bağla
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            20 dakikalık AI Staj Hazırlık Testini tamamla. İlk %10'e giren öğrenciler Magenta Networks aracılığıyla canlı Singapur teknoloji teslimları üzerinde çalıştıkları
            <strong className="text-white"> 3 Aylık Hibrit Burs Programı'na</strong> seçilir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/tr/work-experience/apply"
              className="px-8 py-4 rounded-xl font-semibold text-black text-base transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
                boxShadow: '0 0 32px rgba(167,139,250,0.35)',
              }}
            >
              Ücretsiz AI Testini Başlat (20 Dk)
            </Link>
            <a
              href="#cohort"
              className="px-8 py-4 rounded-xl font-semibold text-white text-base border border-white/20 hover:bg-white/[0.06] transition-all"
            >
              Cohort 1 Yapısını Gör
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-xs text-white/30 uppercase tracking-widest font-mono">Güvenilenler</span>
            <a href="https://mgnnetworks.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 opacity-80 transition-opacity cursor-pointer group">
              <Image src="/logos/magenta-networks.png" alt="Magenta Networks" width={28} height={28} className="rounded-sm opacity-90" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.1))' }} />
              <span className="text-sm text-white/60 font-medium group-hover:text-white/90 group-hover:underline transition-colors">Magenta Networks</span>
            </a>
            <div className="flex items-center gap-1.5">
              <span className="text-[#A78BFA] text-sm">✦</span>
              <span className="text-sm text-white/60">Claude AI Uyarlanabilir Motoru</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#60A5FA] text-sm">⬡</span>
              <span className="text-sm text-white/60">Jira & Slack Entegrasyonu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#34D399] text-sm">✓</span>
              <span className="text-sm text-white/60">GDPR Uyumlu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Alanlar ────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">DEĞERLENDİRME ALANLARI</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Kariyer Alanını Seç</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Değerlendirmen seçtiğin alana göre kalibre edilir. Sorular ezberlemeyi değil, gerçek dünyadaki uygulamalı düşünmeyi test eder.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {TRACKS.map((t) => (
              <a
                key={t.title}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-7 backdrop-blur-sm transition-transform hover:-translate-y-0.5 block"
                style={{ background: t.bg, border: `1px solid ${t.border}` }}
              >
                <div className="text-3xl mb-4" style={{ color: t.color }}>{t.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                <p className="mt-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: t.color }}>
                  Daha fazla →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Burs Modeli ─────────────────────────────────────────────────── */}
      <section id="cohort" className="px-6 py-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">PROGRAM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">3 Aylık Hibrit Burs</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Uzaktan öncelikli, küresel mentorlu, sonuç odaklı.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 border border-[#A78BFA]/20 bg-[#A78BFA]/[0.04]">
              <div className="text-5xl font-black text-[#A78BFA] mb-4">80<span className="text-3xl">%</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Uzaktan Uygulama</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Gerçek Magenta Networks angajmanları için canlı müşteri teslimları üzerinde çalış. Küresel teknoloji ekipleri tarafından kullanılan aynı yığın — Jira, Slack ve GitHub — aracılığıyla yönetilir.
              </p>
              <ul className="space-y-2">
                {['Canlı müşteri projeleri', 'Jira görev yönetimi', 'GitHub versiyon kontrolü', 'Slack asenkron iletişim'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[#A78BFA]" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 border border-[#4141DD]/20 bg-[#4141DD]/[0.04]">
              <div className="text-5xl font-black text-[#818CF8] mb-4">20<span className="text-3xl">%</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Global Mentorluk & Toplantılar</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Singapur teknoloji liderleriyle haftalık kod ve strateji incelemeleri. Burs sahiplerinin teslimlarını Magenta Networks paydaşlarına sunduğu Capstone Demo Günü ile tamamlanır.
              </p>
              <ul className="space-y-2">
                {['Haftalık mentor incelemeleri', 'Singapur teknoloji liderleri', 'Capstone Demo Günü', 'Doğrulanmış burs sertifikası'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[#818CF8]" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seçim Süreci ─────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">SEÇİM SÜRECİ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">2 Aşamalı Değerlendirme</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Titiz, hızlı ve adil. Toplam zaman yatırımı 5 saatin altında.</p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-[calc(50%-1px)] top-16 bottom-16 w-px bg-gradient-to-b from-[#A78BFA]/40 to-[#4141DD]/20" />
            <div className="space-y-6">
              <div className="relative flex sm:flex-row flex-col gap-6">
                <div className="sm:w-1/2 sm:pr-10 sm:text-right">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] mb-2">
                    <span className="w-6 h-6 rounded-full border border-[#A78BFA]/50 flex items-center justify-center text-[10px] font-bold">01</span>
                    AŞAMA BİR
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">20 Dakikalık Uyarlanabilir AI Testi</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    2PL Madde Tepki Teorisi modeli kullanarak sert ve sosyal becerileri değerlendirir. Dört aşama: Genel Yetenek, Alan Bilgisi, Sosyal Beceriler (SJT) ve İlgi Profili.
                  </p>
                  <p className="mt-3 text-xs text-white/40">Ücretsiz · Başlamak için giriş gerekmez</p>
                </div>
                <div className="hidden sm:flex sm:w-1/2 items-start justify-start sm:pl-10 pt-1">
                  <div className="rounded-xl px-4 py-2 text-xs font-mono border border-[#A78BFA]/20 bg-[#A78BFA]/[0.06] text-[#A78BFA]">
                    Anında AI İstihdam Edilebilirlik Raporu (PDF)
                  </div>
                </div>
              </div>

              <div className="relative flex sm:flex-row flex-col gap-6">
                <div className="hidden sm:flex sm:w-1/2 items-start justify-end sm:pr-10 pt-1">
                  <div className="rounded-xl px-4 py-2 text-xs font-mono border border-[#4141DD]/30 bg-[#4141DD]/[0.06] text-[#818CF8]">
                    Yalnızca ilk %10 davet edilir
                  </div>
                </div>
                <div className="sm:w-1/2 sm:pl-10">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#818CF8] mb-2">
                    <span className="w-6 h-6 rounded-full border border-[#818CF8]/50 flex items-center justify-center text-[10px] font-bold">02</span>
                    AŞAMA İKİ
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">48 Saatlik Pratik Mikro Görev</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seçtiğin alana atanmış gerçek Jira/GitHub görevi. Yalnızca kısa listeye alınan adaylar için. 2–4 saat sürer. Değerlendiriciler Magenta Networks mühendisleri ve stratejistleridir.
                  </p>
                  <p className="mt-3 text-xs text-white/40">Sonuç → Cohort Seçim Uygunluğu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/tr/work-experience/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black text-base transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)', boxShadow: '0 0 32px rgba(167,139,250,0.3)' }}
            >
              Ücretsiz Teste Başla →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SSS ─────────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">SSS</p>
            <h2 className="text-3xl font-bold text-white">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border border-white/[0.08] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none text-white font-medium hover:bg-white/[0.03] transition-colors">
                  {faq.q}
                  <span className="text-white/40 group-open:rotate-45 transition-transform duration-200 text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.05] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daha Fazla Oku ────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#050505] border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">DAHA FAZLA OKU</p>
            <h2 className="text-3xl font-bold text-white">Bursun Arkasındaki Araştırma</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">Gerçek iş deneyiminin neden önemli olduğuna dair kanıt ve rehberler.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'OECD Araştırması: Erken İş Deneyiminin Kariyer Sonuçları Üzerindeki Gizli Gücü',
                desc: 'OECD verilerinin onlarca yılı, 20 yaşından önce yapılandırılmış iş deneyimi edinen öğrenciler için uzun vadeli kazanç ve kariyer yolu hakkında ne söylüyor.',
                href: '/tr/insights/oecd-teenage-work-experience-career-outcomes',
                tag: 'Araştırma',
                color: '#A78BFA',
              },
              {
                title: 'PISA 2025: Notlar Neden Düşüyor ve Çözüm Neden İş Deneyimi?',
                desc: 'Küresel akademik performans düşüyor. Veriler, sınıf öğreniminin tek başına kapatamadiği yapısal bir açığa işaret ediyor.',
                href: '/tr/insights/pisa-2025-work-experience-student-readiness',
                tag: 'Veri',
                color: '#60A5FA',
              },
              {
                title: 'Kariyer İçin 3 Aylık Bursun Yarı Zamanlı İşten Neden Daha İyi Olduğu',
                desc: 'OECD araştırması yapılandırılmış ve yapılandırılmamış iş deneyimini ayırt ediyor. Kariyer sonuçlarındaki fark büyük.',
                href: '/tr/insights/oecd-teenage-part-time-work-benefits',
                tag: 'Araştırma',
                color: '#34D399',
              },
              {
                title: 'Kariyerini Gerçekten İlerletecek Burs Programını Nasıl Bulursun?',
                desc: 'Tüm burslar eşit değil. Üç ayını boşa harcayan programlardan bileşik büyüten programları ayıran şey nedir?',
                href: '/tr/insights/how-to-find-internship-as-student',
                tag: 'Rehber',
                color: '#F59E0B',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col justify-between rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
              >
                <div>
                  <span className="inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full mb-4 border" style={{ color: post.color, borderColor: `${post.color}40`, background: `${post.color}12` }}>
                    {post.tag}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-white/90">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>
                <p className="mt-5 text-xs font-medium group-hover:underline" style={{ color: post.color }}>Oku →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] px-6 py-10 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">EDUENTRY.AI</span>
            <span className="text-white/20">×</span>
            <a href="https://mgnnetworks.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group">
              <Image src="/logos/magenta-networks.png" alt="Magenta Networks" width={22} height={22} className="rounded-sm" />
              <span className="text-sm text-white/40 group-hover:text-white/70 group-hover:underline transition-colors">Magenta Networks</span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/tr" className="hover:text-white/70 transition-colors">Ana Sayfa</Link>
            <Link href="/about" className="hover:text-white/70 transition-colors">Hakkında</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Gizlilik</Link>
            <a href="https://mgnnetworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 hover:underline transition-colors">Magenta Networks</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
