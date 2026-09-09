import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import TestimonialsCarouselTR from '@/components/landing/TestimonialsCarouselTR'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — Akademik ve Staj Değerlendirme Platformu',
  description:
    'Tüm öğrenim aşamalarındaki öğrenciler için ücretsiz uyarlanabilir değerlendirmeler — 6–17 yaş arası çocuklar için uluslararası akademik kıyaslama ve 14 yaş üstü lise öğrencileri için staj değerlendirmesi.',
  keywords: [
    'ücretsiz akademik değerlendirme çocuklar',
    'uluslararası kıyaslama çocuklar İngiltere',
    'standartlaştırılmış puan yüzdelik dilim',
    'uyarlanabilir değerlendirme PISA GCSE',
    '11+ hazırlık ücretsiz test',
    'akademik kıyaslama 6 17 yaş',
    'lise staj değerlendirmesi hazırlık',
    'staj yetenek testi lise',
    'kariyer rehberliği değerlendirme öğrenci',
    'ücretsiz çocuk değerlendirme testi',
    'sözel sözel olmayan akıl yürütme test',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr`,
    languages: { tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, 'en-GB': BASE_URL, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/tr`,
    title: 'Eduentry — Akademik ve Staj Değerlendirme Platformu',
    description: 'PISA, GCSE ve SAT ile aynı bilime dayalı ücretsiz uyarlanabilir değerlendirmeler. 6–17 yaş için akademik kıyaslama ve 14 yaş üstü için staj değerlendirmesi.',
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/tr/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — Akademik ve Staj Değerlendirme Platformu' }],
  },
}

const SUBJECT_LABELS_TR: Record<string, string> = {
  english:             'İngilizce',
  mathematics:         'Matematik',
  verbal_reasoning:    'Sözel Akıl Yürütme',
  nonverbal_reasoning: 'Sözel Olmayan Akıl Yürütme',
}

const SUBJECT_DESCRIPTIONS_TR: Record<string, string> = {
  english:             'Okuduğunu anlama, dilbilgisi, yazım ve noktalama',
  mathematics:         'Sayı işlemleri, cebir, geometri ve veri işleme',
  verbal_reasoning:    'Kelimelerle problem çözme ve eleştirel düşünme',
  nonverbal_reasoning: 'Soyut şekil ve görsel unsurlar kullanarak örüntü tanıma',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}


const BELL_SUBJECTS_TR = [
  { score: 103, label: 'İngilizce', color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'Matematik', color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'Sözel',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'S.Olmayan', color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_TR = [
  { q: 'Eduentry ücretsiz mi?', a: 'Evet, tamamen ücretsiz. Abonelik, gizli ücret veya premium seviye yok. Ücretsiz bir hesap oluşturun, çocuğunuzun profilini ekleyin ve değerlendirmeye ücretsiz başlayın.' },
  { q: 'Akademik değerlendirme hangi dersleri kapsıyor?', a: 'İngilizce (okuduğunu anlama, dilbilgisi, kelime bilgisi), Matematik (aritmetik, cebir, geometri, problem çözme), Sözel Akıl Yürütme (analoglar, sınıflandırmalar, diziler) ve Sözel Olmayan Akıl Yürütme (örüntüler, uzamsal akıl yürütme, matrisler). Her derste 15 uyarlanabilir soru bulunur.' },
  { q: 'Yüzdelik dilim sıralaması nedir?', a: 'Yüzdelik dilim sıralaması, çocuğunuzun aynı yaştaki tüm çocuklarla nasıl karşılaştırıldığını gösterir. 80. yüzdelik dilim puanı, çocuğunuzun o yaş grubundaki çocukların %80\'inden daha iyi performans sergilediği anlamına gelir. Eduentry, ortalama 100 ve standart sapma 15 olan standartlaştırılmış bir ölçek kullanır — PISA ve çoğu profesyonel değerlendirmenin kullandığı ölçeğin aynısı.' },
  { q: 'Staj değerlendirmesi nedir?', a: '14 yaş üstü lise öğrencileri için 34 soruluk ayrı bir uyarlanabilir değerlendirme. Dört alanda genel yetenek, alan bilgisi, iş yeri becerileri ve ilgi profilini ölçer: Teknoloji, İş Dünyası, Veri Analitiği ve Dijital Pazarlama. Sonuçlar kişiselleştirilmiş hazırlık raporu ve yapay zeka tarafından oluşturulan kariyer içgörüleri içerir.' },
  { q: 'Eduentry\'yi 11+ hazırlığı için kullanabilir miyim?', a: 'Evet. Dört ders — İngilizce, Matematik, Sözel Akıl Yürütme ve Sözel Olmayan Akıl Yürütme — İngiltere\'deki gramer okullarının kullandığı 11+ sınav yapısını doğrudan yansıtır. Eduentry size standartlaştırılmış bir puan ve yüzdelik dilim sıralaması verir; böylece gerçek sınav öncesinde çocuğunuzun tam olarak nerede durduğunu bilirsiniz.' },
  { q: 'Hangi puan iyi sayılır?', a: '100 tam ortalamasıdır. 95–109 ortalama aralığıdır, 110–119 ortalamanın üstündedir ve 120+ olağanüstüdür. 11+ aracılığıyla gramer okuluna erişim için rekabetçi puanlar genellikle 115 veya daha yüksektir — ancak Londra gibi bölgelerdeki daha seçici okullar 127+ gerektirebilir.' },
  { q: 'Her değerlendirme ne kadar sürer?', a: 'Akademik değerlendirmede 4 derste 60 soru bulunur — çocukların çoğu 60–90 dakikada tamamlar. Staj değerlendirmesinde 34 soru bulunur — öğrencilerin çoğu yaklaşık 35 dakikada bitirir. İlerleme otomatik olarak kaydedilir, bu nedenle her ikisi de istenildiğinde duraklatılıp devam ettirilebilir.' },
  { q: 'Uyarlanabilir teknoloji nasıl çalışır?', a: 'Eduentry, 2 Parametreli Lojistik MYT (2PL) ile MAP tahmini kullanır — PISA, GCSE ve SAT\'ta kullanılan modelin aynısı. Her yanıtın ardından sistem, öğrencinin yetenek tahmini günceller ve ölçüm hassasiyetini en üst düzeye çıkarmak için bir sonraki soruyu seçer.' },
  { q: 'Birden fazla çocuk ekleyebilir miyim?', a: 'Evet. Tek bir ebeveyn hesabı birden fazla çocuk profili içerebilir. Her çocuğun kendi değerlendirme geçmişi, puanları ve kişiselleştirilmiş önerileri bulunur. Ekleyebileceğiniz çocuk sayısında herhangi bir sınır yoktur.' },
  { q: 'Verilerim gizli mi?', a: 'Evet. Tüm veriler satır düzeyi güvenlikle güvenli biçimde saklanır — yalnızca siz sonuçlarınıza erişebilirsiniz. Verileri üçüncü taraflarla satmaz veya paylaşmayız. Hizmet GDPR ile tam uyumludur.' },
]

const FAQ_SCHEMA_TR = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_TR.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

export default function TurkishHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="tr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_TR) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            Her öğrenim aşaması için değerlendirmeler
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            Doğru değerlendirme,
            <br />
            <span className="text-[#4F46E5]">doğru zamanda.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            PISA, GCSE ve SAT ile aynı bilime dayalı ücretsiz uyarlanabilir değerlendirmeler.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                Akademik Değerlendirme
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                Çocuğunuz dünya genelinde nerede duruyor?
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                İngiltere, ABD, PISA ve IB standartlarıyla karşılaştırmalı — İngilizce, Matematik,
                Sözel ve Sözel Olmayan Akıl Yürütme alanlarında standartlaştırılmış puanlar ve yüzdelik dilim sıralamaları.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60 uyarlanabilir soru</span>
                <span>·</span>
                <span>4 ders</span>
                <span>·</span>
                <span>6–17 yaş</span>
                <span>·</span>
                <span>Ücretsiz</span>
              </div>
              <CtaLink
                href="/tr/auth/register"
                label="hero_academic_tr"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                Ücretsiz değerlendirmeyi başlat
              </CtaLink>
              <Link href="#akademik" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                Daha fazla bilgi ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  Staj Değerlendirmesi
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Yeni
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                Öğrenciniz iş dünyasına hazır mı?
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                Yetenek, alan bilgisi, iş yeri becerileri ve ilgi profili üzerine 34 soruluk uyarlanabilir değerlendirme.
                Kişiselleştirilmiş hazırlık raporu ve yapay zeka kariyer içgörüleri.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34 uyarlanabilir soru</span>
                <span>·</span>
                <span>4 kariyer alanı</span>
                <span>·</span>
                <span>14 yaş+</span>
                <span>·</span>
                <span>Ücretsiz</span>
              </div>
              <a
                href="https://eduentry.ai/tr"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Programı incele
              </a>
              <Link href="#staj" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                Daha fazla bilgi ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          PISA, GCSE &amp; SAT ile aynı bilime dayalı &nbsp;·&nbsp; GDPR uyumlu &nbsp;·&nbsp; Ücretsiz
        </p>
      </section>

      {/* ── Social proof ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialsCarouselTR />
        </div>
      </section>

      {/* ── Academic section ──────────────────────────────────────────────── */}
      <section id="akademik" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">Akademik Değerlendirme · 6–17 Yaş</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                Çocuğunuzun uluslararası<br />konumunu keşfedin.
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                İngiltere, ABD, PISA ve IB standartlarıyla karşılaştırmalı İngilizce, Matematik, Sözel ve Sözel Olmayan
                Akıl Yürütme alanlarını ölçen ücretsiz uyarlanabilir değerlendirme. Sonuçlar standartlaştırılmış puan,
                yüzdelik dilim sıralaması ve yapay zeka önerilerini içerir.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/tr/auth/register"
                  label="academic_section_tr"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Ücretsiz değerlendirmeyi başlat
                </CtaLink>
                <Link href="/tr/metodoloji" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  Puanlama nasıl çalışır →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">Örnek sonuç</p>
                    <p className="font-bold text-white mt-1">Emma · 11 yaşında</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Ortalamanın üstünde</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'İngilizce',   score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Matematik',    score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Sözel',        score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'S.Olmayan',    score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">Tarafından desteklenmektedir</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_TR} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Dört ders. Küresel bir tablo.
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              PISA, TIMSS ve İngiltere ile ABD ulusal müfredatları tarafından değerlendirilen dört alan —
              her biri çocuğunuzun tam seviyesini belirlemek için zorluğa uyum sağlar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_TR[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_TR[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="metodoloji" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Puanlamanın arkasındaki bilim</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Uluslararası değerlendirmelerle<br />aynı bilime dayalı.
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              Eduentry, PISA, GCSE ve SAT ile aynı psikometrik modelleri kullanır —
              bu sayede çocuğunuzun sonuçları uluslararası standartlarla doğrudan karşılaştırılabilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '2 Parametreli MYT Modeli', desc: 'Her sorunun kalibre edilmiş güçlük ve ayırt edicilik değeri vardır. Puanlar yalnızca ham sayıyı değil, doğru yanıtlanan soruların zorluğunu yansıtır.', tag: 'PISA · SAT · GCSE\'de kullanılır', color: '#4F46E5' },
              { title: 'Gerçek Zamanlı Uyarlanabilir Algoritma', desc: 'Sorular ölçüm hassasiyetini en üst düzeye çıkarmak için Fisher Bilgisi kullanılarak seçilir. Her yanıt yetenek tahminini günceller ve optimal sonraki soruyu seçer.', tag: 'Bilgisayar Uyarlamalı Değerlendirme', color: '#0D9488' },
              { title: 'Uluslararası Karşılaştırma', desc: 'Puanlar PISA ile aynı ortalama-100, SS-15 ölçeğini kullanır. Sonuçlar İngiltere Ulusal Müfredatı, ABD sınıf seviyesi, PISA yeterlilik seviyeleri ve IB programı hazırlığına eşlenir.', tag: 'İngiltere · ABD · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">Puan ne anlama gelir</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Destek gerekiyor',      color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'Ortalamanın altında',   color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Ortalama',              color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Ortalamanın üstünde',   color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Olağanüstü',            color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              Çocukların %68'i 85–115 arasında puan alır (ortalamanın 1 standart sapma dahilinde)
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section id="nasil-calisir" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Akademik Değerlendirme · Başlamak kolay</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Kayıttan sonuçlara<br />iki saatten kısa sürede.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Ücretsiz hesap oluşturun', desc: 'Ebeveyn olarak kaydolun ve çocuğunuzun adı ile doğum tarihini ekleyin. Değerlendirme tam yaşına göre otomatik olarak uyum sağlar.' },
              { step: '02', title: 'Çocuğunuz 4 uyarlanabilir test yapar', desc: 'Dört derste 60 soru, evde kendi hızında tamamlanır. Her soru uyum sağlar — doğru yanıtlarda daha zor, yanlışlarda daha kolay.' },
              { step: '03', title: 'Küresel bağlamı keşfedin', desc: 'Standartlaştırılmış puanlar, İngiltere, ABD, PISA ve IB için uluslararası kıyaslamalar, yapay zeka önerileri ve yazdırılabilir rapor.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/tr/auth/register" label="how_it_works_tr" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Ücretsiz değerlendirmeyi başlat →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ────────────────────────────────────────────── */}
      <section id="staj" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Staj Değerlendirmesi · Yeni
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Staj hazırlığını keşfet.
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              14 yaş üstü lise öğrencileri için 34 soruluk uyarlanabilir değerlendirme. Yeteneğini, alan bazlı güçlü yönlerini,
              iş yeri becerilerini ve sana en uygun alanı keşfet — kişiselleştirilmiş yapay zeka raporu ile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Ücretsiz öğrenci hesabı oluşturun', desc: 'Kendiniz kaydolun veya ebeveynlerinizin davetini kabul edin. Okulunuzu, sınıfınızı, alan tercihlerinizi ve hedefleriniz hakkında kısa bir kişisel beyan doldurun.' },
              { step: '02', title: '4 değerlendirme aşamasını tamamlayın', desc: 'Genel yetenek, alan bilgisi, iş yeri becerileri (SJT) ve ilgi profili — toplamda 34 uyarlanabilir soru. Tamamen devam ettirilebilir, yaklaşık 35 dakika sürer.' },
              { step: '03', title: 'Hazırlık raporunuzu alın', desc: 'Staj hazırlık seviyenizi, yapay zeka tarafından oluşturulan güçlü yönler özetini ve yetenek, alan ve iş yeri becerileri üzerine kişiselleştirilmiş aşama içgörülerini alın.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Teknoloji',        color: '#4F46E5' },
              { label: 'İş Dünyası',       color: '#0D9488' },
              { label: 'Veri Analitiği',   color: '#7C3AED' },
              { label: 'Dijital Pazarlama',color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://eduentry.ai/tr" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Staj değerlendirmesine başvur →
            </a>
          </div>
        </div>
      </section>

      {/* ── What you get ──────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">Ne elde edersiniz</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">Akademik Değerlendirme</p>
              <ul className="space-y-3">
                {[
                  '85–130 ölçeğinde standartlaştırılmış puan',
                  'Tam yaşa göre yüzdelik dilim sıralaması',
                  '4 alanda derse göre döküm',
                  'Uluslararası kıyaslamalar — İngiltere, ABD, PISA, IB',
                  'Yapay zeka tarafından oluşturulan çalışma önerileri',
                  'Yazdırılabilir tam rapor',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/tr/auth/register" label="what_you_get_academic_tr" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  Ücretsiz başla →
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">Staj Değerlendirmesi</p>
              <ul className="space-y-3">
                {[
                  'Hazırlık seviyesi — Staja Hazır / Gelişiyor / Destek Gerekiyor',
                  'Yapay zeka tarafından oluşturulan kariyer özet paragrafı',
                  'Aşama içgörüleri — yetenek, alan, iş yeri becerileri',
                  '4 kariyer alanında alan eşleşmesi',
                  'Kişiselleştirilmiş güçlü yönler ve gelişim alanları',
                  'Üniversite başvurularınızda kullanabileceğiniz rapor',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <a href="https://eduentry.ai/tr" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  Değerlendirmeye başvur →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">Sorular.</h2>
          </div>
          <div className="space-y-2">
            {FAQ_TR.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            Puanlama metodolojisini anlamak ister misiniz?{' '}
            <Link href="/tr/metodoloji" className="text-[#4F46E5] hover:underline font-medium">
              Eduentry nasıl çalışır →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">Blogdan son yazılar</h2>
            <Link href="/tr/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">Tümünü gör →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_TR.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/tr/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">Akademik Değerlendirme</p>
            <h2 className="text-2xl font-bold text-white mb-3">Çocuğunuzun küresel konumunu keşfedin.</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">2 saatten kısa sürede eksiksiz uluslararası bağlam.</p>
            <CtaLink href="/tr/auth/register" label="bottom_cta_academic_tr" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Ücretsiz değerlendirmeyi başlat →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Staj Değerlendirmesi</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Öğrencinizin staj hazırlığını keşfedin.</h2>
            <p className="text-[#636366] text-sm mb-8">35 dakikada kişiselleştirilmiş rapor ve yapay zeka içgörüleri.</p>
            <a href="https://eduentry.ai/tr" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              Değerlendirmeye başvur →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
