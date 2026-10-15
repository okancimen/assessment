import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/tr/insights`

export const metadata: Metadata = {
  title: { absolute: 'İçgörüler — Staj & Burs Araştırması | Eduentry.ai' },
  description:
    'Lise öğrencileri için staj hazırlığına ve üniversite burs adayları için kanıta dayalı araştırma ve pratik rehberler.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'İçgörüler — Staj & Burs Araştırması | Eduentry.ai',
    description: 'Öğrenciler için staj hazırlığı ve iş deneyimi üzerine kanıta dayalı rehberler.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai Görüşler' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eduentrycom',
    creator: '@eduentrycom',
    title: 'İçgörüler — Staj & Burs Araştırması | Eduentry.ai',
    description: 'Lise öğrencileri ve üniversite burs adayları için kanıta dayalı staj hazırlık araştırmaları ve pratik rehberler.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const HIGH_SCHOOL_POSTS = [
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Lise Stajı Üniversite Başvurunu Nasıl Değiştirir?',
    desc: 'Erken staj deneyiminin üniversite sonuçlarını nasıl şekillendirdiği — kabul sürecinden ilk yıl performansına.',
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'Üniversiteden Önce Teknoloji Stajı Nasıl Alınır?',
    desc: 'Gerçek teknoloji deneyimi isteyen öğrenciler için adım adım rehber — seçicilerin gerçekte ne aradığı dahil.',
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: '16 Yaşında İş Deneyimi: Yerleşimden Portfolyoya',
    desc: 'İş stajından en fazla faydayı sağlamak için gereken her şey — nasıl bulunur ve gösterecek bir şey nasıl inşa edilir.',
  },
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Dijital Pazarlama İş Deneyimi: Gerçekte Ne Yapacaksın?',
    desc: 'Dijital pazarlama stajının gerçekte nasıl göründüğü — içerik üretiminden kampanya analizine.',
  },
  {
    slug: 'how-to-get-internship-no-experience-high-school',
    title: 'Hiç Deneyimin Yokken İlk Stajını Nasıl Alırsın?',
    desc: 'Ne söyleyeceksin, nereye bakacaksın ve önceki deneyimin yokken nasıl öne çıkacaksın.',
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: 'Notlar Artık Yeterli Değil: 16 Yaşında Nasıl Farklılaşırsın?',
    desc: 'Erken kariyer avantajı inşa eden öğrencileri bekleyenlerden ayıran şeyin verilere dayalı bir incelemesi.',
  },
]

const FELLOWSHIP_POSTS = [
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'OECD Araştırması: Erken İş Deneyiminin Kariyer Sonuçları Üzerindeki Gizli Gücü',
    desc: 'OECD verilerinin onlarca yılı, 20 yaşından önce yapılandırılmış iş deneyimi edinen öğrencilerin uzun vadeli kazanç ve kariyer yolu hakkında ne söylüyor.',
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: 'PISA 2025: Notlar Neden Düşüyor ve Eksik Cevap Neden İş Deneyimi?',
    desc: 'Küresel akademik performans düşüyor. Veriler, sınıf öğreniminin tek başına kapatamadiği yapısal bir açığa işaret ediyor.',
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'Kariyerini Gerçekten İlerletecek Burs Programını Nasıl Bulursun?',
    desc: 'Başvurular, outreach ve staj yeri alan adayları diğerlerinden ayıran sinyalleri kapsayan pratik rehber.',
  },
  {
    slug: 'oecd-teenage-part-time-work-benefits',
    title: 'Kariyer İçin 3 Aylık Bursun Yarı Zamanlı İşten Neden Daha İyi Olduğu',
    desc: 'OECD araştırması yapılandırılmış ve yapılandırılmamış iş deneyimini ayırt ediyor. Kariyer sonuçlarındaki fark büyük.',
  },
]

const BLOG_POSTS = [
  { slug: 'early-internship-child-development-career',      title: 'Erken Yaşta Stajın Neden Önemli Olduğu',                    tag: 'Araştırma' },
  { slug: 'business-work-experience-year-12',               title: '12. Sınıfta İş Deneyimi: Rehber',                            tag: 'Rehber'    },
  { slug: 'how-to-start-business-at-16',                    title: '16 Yaşında İş Hayatına Nasıl Başlanır?',                     tag: 'Strateji' },
  { slug: 'summer-activities-ambitious-children',           title: 'Akademik Açıdan Hırslı Çocuklar için Yaz Aktiviteleri',      tag: 'Rehber'    },
  { slug: 'habits-to-avoid-future-unemployment',            title: 'İşsizliği Önlemek İçin Öğrencilerin Şimdi Edinmesi Gereken 8 Alışkanlık', tag: 'Araştırma' },
  { slug: 'high-school-internship-benefits-university',     title: 'Lise Stajlarının Neden Önemli Olduğu',                       tag: 'Araştırma' },
  { slug: 'how-to-get-tech-internship-before-university',   title: 'Üniversiteden Önce Teknoloji Stajı Nasıl Alınır?',           tag: 'Rehber'    },
  { slug: 'business-work-experience-high-school-uk',        title: 'Lisede İş Deneyimi',                                         tag: 'Rehber'    },
  { slug: 'digital-marketing-work-experience-student-reviews', title: 'Dijital Pazarlama İş Deneyimi',                           tag: 'Deneyim'  },
  { slug: 'how-to-get-internship-no-experience-high-school', title: 'Deneyimsiz Staj Nasıl Alınır?',                             tag: 'Rehber'    },
  { slug: 'how-to-differentiate-yourself-at-15',            title: '15 Yaşında Nasıl Farklılaşırsın?',                           tag: 'Strateji' },
  { slug: 'oecd-teenage-work-experience-career-outcomes',   title: 'OECD Araştırması: Erken İş Deneyiminin Gizli Gücü',          tag: 'Araştırma' },
  { slug: 'pisa-2025-work-experience-student-readiness',    title: 'PISA 2025: İş Deneyimi Neden Eksik Cevap?',                  tag: 'Araştırma' },
  { slug: 'how-to-find-internship-as-student',              title: 'Öğrenci Olarak Staj Nasıl Bulunur?',                         tag: 'Rehber'    },
  { slug: 'oecd-teenage-part-time-work-benefits',           title: 'Gençler için Yarı Zamanlı Çalışmanın OECD Destekli Faydaları', tag: 'Araştırma' },
]

const TAG_COLORS: Record<string, string> = {
  Araştırma: '#A78BFA',
  Rehber:    '#60A5FA',
  Strateji:  '#34D399',
  Deneyim:   '#F59E0B',
}

export default function InsightsTRPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-[140px]" style={{ background: '#A78BFA' }} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-4">İÇGÖRÜLER</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">Araştırma & Rehberler</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Lise staj başvurucuları ve üniversite burs adayları için kanıta dayalı araştırma ve pratik rehberler.
          </p>
        </div>
      </section>

      {/* Bölüm 1: Lise Stajı */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#60A5FA] mb-2">BÖLÜM 1</p>
              <h2 className="text-2xl font-bold text-white">Lise Stajı</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg">14–18 yaş arası gerçek iş deneyimi edinmek isteyen öğrenciler için rehberler ve araştırmalar.</p>
            </div>
            <Link href="/apply" className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/[0.06] transition-colors whitespace-nowrap">
              Staj Başvurusu →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIGH_SCHOOL_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/tr/insights/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#60A5FA]/30 transition-all"
              >
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#60A5FA] group-hover:underline">Oku →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bölüm 2: Üniversite Burs Programı */}
      <section className="px-6 py-16 border-t border-white/[0.04] bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-2">BÖLÜM 2</p>
              <h2 className="text-2xl font-bold text-white">Üniversite Burs Programı</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg">3 aylık Magenta Networks bursuna başvuran üniversite öğrencileri için araştırma ve strateji.</p>
            </div>
            <Link href="/tr/work-experience/apply" className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[#A78BFA]/30 text-[#A78BFA] hover:bg-[#A78BFA]/10 transition-colors whitespace-nowrap">
              Burs Başvurusu →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FELLOWSHIP_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/tr/insights/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#A78BFA]/30 transition-all"
              >
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#A78BFA] group-hover:underline">Oku →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kariyer Rehberi */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#34D399] mb-2">KARİYER REHBERİ</p>
              <h2 className="text-2xl font-bold text-white">Kariyer Rehberi</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg">Ulusal Staj Programı, Kariyer Kapısı ve kariyer planlaması üzerine pratik rehberler.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/tr/insights/uluslararasi-staj-programi-2026"
              className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#34D399]/30 transition-all"
            >
              <div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">
                  Uluslararası Staj 2026: Yurt Dışı ve Remote Staj mı, Ulusal Staj mı?
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  USP ile Eduentry.ai arasındaki farklar, remote staj imkânları ve kariyer hedeflerine göre doğru seçim. Kariyer koçundan karşılaştırmalı rehber.
                </p>
              </div>
              <p className="mt-4 text-xs font-medium text-[#34D399] group-hover:underline">Oku →</p>
            </Link>
            <Link
              href="/tr/insights/ulusal-staj-programi-rehberi"
              className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#34D399]/30 transition-all"
            >
              <div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">
                  Ulusal Staj Programı 2026: Nedir, Kimler Başvurabilir, Ne Zaman?
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  USP 2026 başvuru şartları, kimler başvurabilir, ne zaman başvurulur ve Kariyer Kapısı'nda nasıl öne çıkılır? Kariyer koçu bakış açısıyla adım adım rehber.
                </p>
              </div>
              <p className="mt-4 text-xs font-medium text-[#34D399] group-hover:underline">Oku →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bölüm 3: Blogdan */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-widest text-white/30 mb-2">BÖLÜM 3</p>
            <h2 className="text-2xl font-bold text-white">Blogdan</h2>
            <p className="mt-2 text-sm text-gray-400">Eduentry.com'daki tüm staj ve kariyer gelişimi makaleleri.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => {
              const color = TAG_COLORS[post.tag] ?? '#fff'
              return (
                <a
                  key={post.slug}
                  href={`https://eduentry.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl p-5 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  <div>
                    <span
                      className="inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full mb-3 border"
                      style={{ color, borderColor: `${color}40`, background: `${color}10` }}
                    >
                      {post.tag}
                    </span>
                    <h3 className="text-white/80 font-medium text-sm leading-snug group-hover:text-white transition-colors">{post.title}</h3>
                  </div>
                  <p className="mt-4 text-xs font-medium group-hover:underline" style={{ color }}>
                    Eduentry.com'da Oku →
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
