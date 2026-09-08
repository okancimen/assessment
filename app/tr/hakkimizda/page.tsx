import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Hakkımızda — Çocuklar için ücretsiz akademik değerlendirme',
  description: 'Eduentry, 6–17 yaş arası öğrenciler için ücretsiz uyarlanabilir değerlendirme platformudur. Standartlaştırılmış puanlar İngiltere ulusal müfredatı, PISA ve IB standartlarıyla karşılaştırılır.',
  keywords: ['Eduentry hakkında', 'çocuklar için ücretsiz değerlendirme platformu', 'uluslararası akademik kıyaslama', 'uyarlanabilir test çocuklar', 'akademik değerlendirme 6 17 yaş', 'lise staj değerlendirmesi'],
  alternates: {
    canonical: `${BASE_URL}/tr/hakkimizda`,
    languages: { tr: `${BASE_URL}/tr/hakkimizda`, 'en-GB': `${BASE_URL}/about`, 'x-default': `${BASE_URL}/about` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Hakkımızda — Çocuklar için ücretsiz akademik değerlendirme',
    description: 'Ücretsiz uyarlanabilir akademik değerlendirmeler İngiltere, PISA ve IB standartlarıyla karşılaştırılır. Standartlaştırılmış puanlar ve uluslararası yüzdelik dilim sıralamaları.',
    url: `${BASE_URL}/tr/hakkimizda`,
    locale: 'tr_TR',
  },
}

export default function HakkimizdaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="tr">

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/tr" className="hover:text-[#1d1d1f]">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Hakkımızda</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          Tüm aileler için ücretsiz
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
          Dünya genelindeki tüm çocuklar için<br />
          <span className="text-[#4F46E5]">ücretsiz akademik değerlendirme</span>
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Eduentry, ebeveynlere çocuklarının akademik durumuna dair net ve uluslararası kıyaslamalı bir bakış açısı sunar — ücretsiz, 30 dakikadan kısa sürede.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 bg-[#f5f5f7] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Misyonumuz</h2>
        <p className="text-[#6e6e73] leading-relaxed text-lg">
          Her çocuk nerede durduğunu hak ediyor — yalnızca sınıf arkadaşlarına göre değil, İngiltere genelindeki ve uluslararası düzeydeki diğer çocuklarla karşılaştırmalı olarak. Profesyonel standartlaştırılmış değerlendirmeler geleneksel olarak pahalı ve erişilmez olmuştur. Eduentry, bu karşılaştırmayı internete erişimi olan her aile için ücretsiz, anında ve erişilebilir hâle getirir.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Nasıl çalışır</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Uyarlanabilir sorular',
              body: 'Yapay zekamız öğrencinin yaşına göre kalibre edilmiş sorular üretir ve yanıtlara göre zorluğu gerçek zamanlı olarak ayarlar — PISA ve MAP değerlendirmelerinde kullanılan yaklaşımın aynısı.',
            },
            {
              step: '02',
              title: 'IRT puanlaması',
              body: 'Standartlaştırılmış puan üretmek için 2 parametreli Madde Yanıt Teorisi (MYT) kullanıyoruz (ortalama 100, SS 15) — yaş grupları ve oturumlar arasında istatistiksel olarak karşılaştırılabilir.',
            },
            {
              step: '03',
              title: 'Uluslararası kıyaslamalar',
              body: 'Puanlar, İngiltere Ulusal Müfredatı, PISA, ABD ortak müfredatı ve IB çerçevelerine dayalı yüzdelik dilimlere eşlenir — öğrencinin küresel düzeyde tam olarak nerede durduğunu görmek için.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="space-y-3">
              <div className="text-3xl font-bold text-[#c7d2fe]">{step}</div>
              <h3 className="font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Dört ders, eksiksiz bir tablo</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'İngilizce', desc: 'Okuduğunu anlama, dilbilgisi, yazım, noktalama ve kelime bilgisi — İngiltere KS1–KS4 ve Cambridge IGCSE ile uyumlu.' },
            { label: 'Matematik', desc: 'Sayı işlemleri, cebir, geometri, kesirler ve veri işleme — PISA sayısal ölçütleriyle karşılaştırmalı.' },
            { label: 'Sözel Akıl Yürütme', desc: 'Analoglar, kelime ilişkileri, diziler ve mantık — 11+, gramer okulu ve özel okul giriş sınavlarında değerlendirilen beceriler.' },
            { label: 'Sözel Olmayan Akıl Yürütme', desc: 'Örüntü tanıma, matrisler, diziler ve uzamsal akıl yürütme — dil bağımsız problem çözmeyi değerlendirir.' },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{label}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Kanıtlanmış bilime dayalı</h2>
        <div className="space-y-4 text-[#6e6e73] leading-relaxed">
          <p>
            Değerlendirme soruları, MYT motorumuz tarafından belirlenen tam konu, zorluk seviyesi ve yaş aralığıyla kısıtlanmış olarak <strong className="text-[#1d1d1f]">Claude AI</strong> (Anthropic) tarafından üretilir. Her soru gerçek zamanlı olarak kalibre edilir — bir öğrenci doğru yanıt verdiğinde sonraki soru daha zor, zorlandığında daha kolay olur.
          </p>
          <p>
            Bu uyarlanabilir yaklaşım, daha kısa süreli testlerle daha yüksek istatistiksel hassasiyet sağlar. Tipik bir Eduentry değerlendirmesi dört ders için 20–30 dakika sürer ve 90 dakikalık sabit formatlı bir testle karşılaştırılabilir güvenilirlikte puan üretir.
          </p>
          <p>
            Puanlama metodolojimiz hakkında daha fazla bilgi için <Link href="/tr/metodoloji" className="text-[#4F46E5] hover:underline">metodoloji sayfamızı</Link> okuyun.
          </p>
        </div>
      </section>

      {/* Ages */}
      <section className="mb-16 border border-[#d2d2d7] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">6 ile 17 yaş arası</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Eduentry, tüm ilk ve ortaöğretim sınıflarındaki çocuk ve gençlere uyum sağlar. Sorular İngiltere Anahtar Aşama seviyesine veya denk uluslararası okul yılına göre üretilir:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { range: '6–7 yaş',  label: 'KS1 / Yıl 1–2' },
            { range: '8–10 yaş', label: 'KS2 / Yıl 3–5' },
            { range: '11–13 yaş',label: 'KS3 / Yıl 7–9' },
            { range: '14–16 yaş',label: 'KS4 / Yıl 10–11' },
          ].map(({ range, label }) => (
            <div key={range} className="bg-[#f5f5f7] rounded-xl p-4 text-center">
              <div className="font-semibold text-[#1d1d1f]">{range}</div>
              <div className="text-[#6e6e73] mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship section */}
      <section className="mb-16 bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Staj Değerlendirmesi — 14 yaş ve üstü için</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Akademik değerlendirmenin yanı sıra Eduentry, 14 yaş üstü lise öğrencileri için 34 soruluk uyarlanabilir staj hazırlık değerlendirmesi sunar. Dört alanda genel yetenek, alan bilgisi, iş yeri becerileri ve ilgi profilini kapsar: Teknoloji, İş Dünyası, Veri Analitiği ve Dijital Pazarlama.
        </p>
        <Link href="/tr" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
          Staj değerlendirmesi hakkında daha fazla bilgi →
        </Link>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Çocuğunuzun ücretsiz değerlendirmesini başlatın</h2>
        <p className="text-indigo-200 mb-8 text-lg">20–30 dakika. Ücret yok. Anlık sonuçlar.</p>
        <Link href="/auth/register" className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg">
          Ücretsiz başla
        </Link>
      </section>

    </main>
  )
}
