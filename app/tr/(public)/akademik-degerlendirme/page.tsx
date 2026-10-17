import type { Metadata } from 'next'
import Link from 'next/link'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Ücretsiz Çocuk Akademik Değerlendirmesi | Yapay Zeka Destekli Test — Eduentry',
  description:
    'Çocuğunuzun İngilizce, Matematik, Sözel ve Sözel Olmayan Muhakeme alanlarındaki akademik düzeyini ölçün. 6–20 yaş. Kayıt gerekmez. Anında sonuçlar.',
  keywords: [
    'çocuk akademik değerlendirmesi',
    'ücretsiz akademik test çocuklar',
    'uyarlamalı akademik test',
    'yapay zeka akademik değerlendirme',
    'çocuk matematik ingilizce testi',
    'sözel muhakeme testi çocuklar',
    'sözel olmayan muhakeme testi',
    'ilkokul değerlendirmesi',
    'çocuk akademik yetenek testi',
    'okul hazırlık testi online',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/akademik-degerlendirme`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/akademik-degerlendirme`,
    siteName: 'Eduentry',
    title: 'Ücretsiz Çocuk Akademik Değerlendirmesi | Yapay Zeka Destekli Test — Eduentry',
    description: 'Çocuğunuzun akademik seviyesini 4 alanda ölçün. 6–20 yaş. Kayıt gerekmez.',
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Çocuk Akademik Değerlendirmesi — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ücretsiz Çocuk Akademik Değerlendirmesi | Yapay Zeka Destekli Test — Eduentry',
    description: 'Çocuğunuzun akademik seviyesini 4 alanda ölçün. 6–20 yaş. Kayıt gerekmez.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'Değerlendirme hangi konuları kapsar?',
    a: 'Test dört temel alanı kapsar: İngilizce (anlama, dil bilgisi, yazım), Matematik (sayı işlemleri, cebir, geometri), Sözel Muhakeme ve Sözel Olmayan Muhakeme.',
  },
  {
    q: 'Uyarlamalı zorluk nasıl çalışır?',
    a: "Yapay zekamız, Madde Tepki Teorisi'ni (IRT) kullanarak çocuğunuzun yanıtlarına göre soru zorluğunu gerçek zamanlı olarak ayarlar. Bu, sabit bir testten çok daha hassas bir yetenek tahmini sağlar.",
  },
  {
    q: 'Test ne kadar sürer?',
    a: 'Her konuda 15 soru olmak üzere toplamda 60 soru bulunur. Çoğu çocuk 25–35 dakikada tamamlar.',
  },
  {
    q: 'Başlamak için hesap açmam gerekiyor mu?',
    a: "Hayır. Yalnızca çocuğunuzun adı ve yaşıyla hemen başlayabilirsiniz. Değerlendirme sonrasında özet bir skor görürsünüz. Tam konu analizi ve YZ önerileri için ücretsiz hesap oluşturabilirsiniz.",
  },
]

export default function TrAkademikDegerlendirmePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Yapay Zeka · 4 Konu · 6–20 Yaş</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Çocuğunuzun Akademik<br />
            <span className="text-[#4F46E5]">Gerçek Seviyesini Öğrenin</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            İngilizce, Matematik, Sözel ve Sözel Olmayan Muhakemeyi kapsayan uyarlanabilir bir değerlendirme — İngiltere&apos;deki seçici okullarla aynı standart ölçekte puanlanır. Hesap gerekmez ve ilerlemeniz otomatik kaydedilir.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-[#6e6e73] mb-5">
            {['Ücretsiz · kayıt gerekmez', 'Anında standardize skor', 'İstediğiniz zaman duraklatın', '6–20 yaş'].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {t}
              </span>
            ))}
          </div>
          <GuestAcademicStartForm locale="tr" />
          <p className="mt-1 text-sm text-[#6e6e73]">
            Zaten hesabınız var mı?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Giriş yapın</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Nasıl Çalışır?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Ad ve Yaş Girin', desc: 'Hesap gerekmez. Sadece çocuğunuzun adı ve yaşı yeterli.' },
              { step: '2', title: 'Uyarlamalı Sorular', desc: "Yapay zeka, IRT kullanarak her soruyu çocuğunuzun gerçek seviyesine göre ayarlar." },
              { step: '3', title: 'Anında Sonuçlar', desc: 'Genel standardize skor ve konu bazlı sonuçları hemen görün. Tam analiz için ücretsiz kayıt olun.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Sıkça Sorulan Sorular</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Çocuğunuzun akademik temelini bugün keşfedin</h2>
          <p className="text-indigo-200 mb-6 text-sm">Yukarıya ad ve yaş girin — 35 dakika içinde sonuçlar hazır.</p>
          <a href="#guest-name" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            Ücretsiz Değerlendirmeyi Başlat
          </a>
        </div>
      </section>

    </>
  )
}
