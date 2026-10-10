import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/tr/auth/register`

export const metadata: Metadata = {
  title: 'Çocuk Kişilik Değerlendirmesi | VIA Güçlü Yönler Testi — Eduentry',
  description:
    "Çocuğunuzun benzersiz güçlü yönlerini yapay zeka destekli, bilimsel kişilik değerlendirmemizle keşfedin. 6–20 yaş. Ücretsiz ebeveyn anketi. Anında kişiselleştirilmiş büyüme raporu.",
  keywords: [
    'çocuk kişilik değerlendirmesi',
    'VIA güçlü yönler testi',
    'çocuğun güçlü ve zayıf yönleri',
    'ücretsiz çocuk kişilik testi',
    'çocuklar için VIA güçlü yönleri',
    'çevrimiçi çocuk kişilik değerlendirmesi',
    'ebeveynlik araçları kişilik',
    'pozitif psikoloji çocuk testi',
    'çocuk gelişimi değerlendirmesi',
    'yapay zeka çocuk kişilik raporu',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
    siteName: 'Eduentry',
    title: 'Çocuk Kişilik Değerlendirmesi | VIA Güçlü Yönler Testi — Eduentry',
    description: "Çocuğunuzun benzersiz kişilik özelliklerini yapay zeka destekli değerlendirmemizle keşfedin. 6–20 yaş.",
    locale: 'tr_TR',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Çocuk Kişilik Değerlendirmesi — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çocuk Kişilik Değerlendirmesi | VIA Güçlü Yönler Testi — Eduentry',
    description: "Çocuğunuzun benzersiz kişilik özelliklerini yapay zeka destekli değerlendirmemizle keşfedin. 6–20 yaş.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Bu neden çocuğun kendisi için değil, ebeveyn tarafından değerlendirilen bir test?',
    a: "Çocukların öz algıları hızla değişir ve küçük çocuklar anket formatlarını kolayca yanlış anlayabilir veya dikkatlerini dağıtabilirler. Bir ebeveyn olarak, günlük gerçek dünya davranışlarına yönelik gözlemleriniz bir değerlendirme için en istikrarlı ve doğru temeli sağlar.",
  },
  {
    q: 'Çocuğum bir yaş grubunun tam sınırındaysa ne olur?',
    a: 'Sistemimiz, Doğum Tarihi kullanarak yaşı tam olarak güne kadar hesaplar. Sorular, bu kesin gelişim dilimi için matematiksel olarak optimize edilmiştir. Sistemin atadığı gruba güvenin!',
  },
  {
    q: "Çocuğum için bu değerlendirmeyi ne sıklıkla yeniden yapmalıyım?",
    a: "Her 6 ila 12 ayda bir veya yeni bir yaş grubuna geçtiğinde testi yeniden yapmanızı öneririz. Bu, güçlü yönlerin zaman içinde nasıl büyüdüğünü ve geliştiğini takip etmenizi sağlar.",
  },
  {
    q: 'Bu değerlendirme bilimsel olarak destekleniyor mu?',
    a: <>Evet. Sorularımız, dünyanın en kapsamlı biçimde hakemli değerlendirmesi olan{' '}<a href="https://www.viacharacter.org/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-600">VIA Kişilik Özellikleri</a>{' '}çerçevesinden uyarlanmıştır. Kültürler arası doğrulanmış olup önde gelen psikoloji dergilerinde yayımlanan çalışmalarda kullanılmaktadır.</>,
  },
  {
    q: 'Çocuğumun gizliliği nasıl korunuyor?',
    a: "Çocuğunuzun verilerini asla paylaşmıyor veya satmıyoruz. Yanıtlar güvenli biçimde saklanır ve yalnızca kişiselleştirilmiş raporunuzu oluşturmak için kullanılır. Hiçbir veri üçüncü taraflarla, reklamverenlerle veya akademik kurumlarla paylaşılmaz.",
  },
  {
    q: 'Sonuçları gördükten sonra ne yapmalıyım?',
    a: "Rapordan yapay zeka tarafından önerilen ilk 3 egzersizle başlayın. Bir tanesini bir hafta boyunca deneyin ve çocuğunuzun özgüven veya ilgisindeki değişimleri gözlemleyin. Taze fikirlere ihtiyaç duyduğunuzda rapora geri dönün; egzersizler günlük aile rutinlerine doğal biçimde dahil edilecek şekilde tasarlanmıştır.",
  },
]

const VIRTUES = [
  {
    label: 'Bilgelik',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['Merak', 'Yaratıcılık', 'Öğrenme Sevgisi', 'Perspektif', 'Yargılama'],
  },
  {
    label: 'Cesaret',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['Cesur Olmak', 'Azim', 'Dürüstlük', 'Canlılık'],
  },
  {
    label: 'İnsanlık',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['Sevgi', 'İyilik', 'Sosyal Zeka'],
  },
  {
    label: 'Adalet',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['Takım Çalışması', 'Adil Olmak', 'Liderlik'],
  },
  {
    label: 'Ölçülülük',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['Bağışlama', 'Alçakgönüllülük', 'İhtiyat', 'Özdenetim'],
  },
  {
    label: 'Aşkınlık',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['Güzelliği Takdir', 'Şükran', 'Umut', 'Mizah', 'Maneviyat'],
  },
]

const TIERS = [
  { label: 'Junior', age: '6–9 yaş', traits: '12 temel özellik', questions: '24 soru', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Orta', age: '10–13 yaş', traits: '15 özellik', questions: '30 soru', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Ergen', age: '14–17 yaş', traits: '20 özellik', questions: '40 soru', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Genç Yetişkin', age: '18–20 yaş', traits: 'Tüm 24 özellik', questions: '48 soru', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function KisilikDegerlendirmesiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">VIA Güçlü Yönleri · 6–20 Yaş</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Çocuğunuzun Benzersiz Güçlerini<br />
            <span className="text-[#4F46E5]">Keşfedin</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            Çocuğunuzun gelişim aşamasına mükemmel biçimde uyarlanmış, yapay zeka destekli, bilimsel bir kişilik değerlendirmesi.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Ücretsiz Değerlendirmeyi Başlat
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            Zaten hesabınız var mı?{' '}
            <Link href="/tr/auth/login" className="text-[#4F46E5] hover:underline font-medium">Giriş yap</Link>
          </p>
          <p className="mt-6 text-sm text-[#6e6e73] bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-3 max-w-md mx-auto">
            📋 <strong className="text-[#1d1d1f]">Çocuğunuzun katılımı gerekmez.</strong> Bu, yalnızca ebeveynin dolduracağı kısa bir anket. Tahminen 5 dakika sürer.
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Neden Karakter Notlardan Daha Önemli?</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Ebeveyn olarak çoğunlukla tamamen okul notlarına odaklanırız. Ancak akademik puanlar hikayenin yalnızca bir bölümünü anlatır. Gerçek başarı ve dayanıklılık, bir çocuğun karakterinden, duygusal alışkanlıklarından ve kişilik güçlerinden gelir. Değerlendirmemiz, notların ötesine bakarak çocuğunuzun kim olduğunu görmenize yardımcı olur — doğal olarak üstün olduklarını (&ldquo;Öne Çıkan Özellikler&rdquo;) ve &ldquo;Gelişim Alanlarını&rdquo; ortaya koyar.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Nasıl Çalışır</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Akıllı Yaş Yönlendirmesi 🗓️',
                desc: "Kayıt sırasında çocuğunuzun Doğum Tarihini girin. Sistemimiz gelişim aşamasını otomatik olarak hesaplar ve doğru değerlendirme kademesine atar.",
              },
              {
                step: '2',
                title: '5 Dakikalık Ebeveyn Anketi ⭐',
                desc: 'Her gün gördüğünüz davranışlara ilişkin hızlı, gözlem tabanlı, 1-5 yıldız sorularını yanıtlayacaksınız. Tahmin yok, çocuğunuz için stresli bir sınav yok.',
              },
              {
                step: '3',
                title: 'Yapay Zeka Destekli Büyüme Raporu 🤖',
                desc: 'Gelişmiş yapay zekamız, girdilerinizi küresel olarak tanınan bir psikolojik modele göre analiz ederek uygulanabilir ebeveynlik egzersizleriyle dolu kişiselleştirilmiş bir yol haritası oluşturur.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Pozitif Psikolojinin Altın Standardı Üzerine Kurulu</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Platformumuz, öncü psikologlar Dr. Martin Seligman ve Dr. Neal Mayerson tarafından geliştirilen dünyaca ünlü VIA Güçlü Yönleri çerçevesini uyarlar. Araştırmacılar ve eğitimciler tarafından 190&apos;dan fazla ülkede kullanılan bu model, 6 temel erdem altında gruplanmış 24 evrensel özelliği tanımlar: Bilgelik, Cesaret, İnsanlık, Adalet, Ölçülülük ve Aşkınlık.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Çocukluğun Her Aşamasına Mükemmel Kalibre Edilmiş</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Elinizde Ne Olacak</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'En Güçlü 5 Yönü', desc: "Çocuğunuzun doğal olarak parladığı alanlar." },
              { icon: '🌱', title: 'Geliştirilebilecek 3 Özelliği', desc: "Kör noktaları veya mevcut zayıflıkları hakkında nazik bilgiler." },
              { icon: '🤖', title: 'Uygulanabilir Yapay Zeka Araç Seti', desc: "Onların gelişmesine yardımcı olmak için evde uygulayabileceğiniz özelleştirilmiş, gerçek dünya egzersizleri." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
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

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Çocuğunuzun gerçekte kim olduğunu keşfetmeye hazır mısınız?</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Ücretsiz Değerlendirmeyi Başlat
          </Link>
        </div>
      </section>
    </>
  )
}
