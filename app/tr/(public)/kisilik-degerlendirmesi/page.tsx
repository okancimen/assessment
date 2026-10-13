import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import GuestStartForm from '@/app/personality-assessment/GuestStartForm'
import { SAMPLE_TRAIT_SCORES, SAMPLE_PEER_AVG } from '@/lib/sample-personality'
import type { Trait } from '@/lib/personality-questions'

const BASE_URL = 'https://eduentry.com'

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

const SAMPLE_STRENGTHS = [
  { name: 'Merak', pct: 84, color: 'bg-blue-500' },
  { name: 'Yaratıcılık', pct: 72, color: 'bg-purple-500' },
  { name: 'Canlılık', pct: 66, color: 'bg-orange-500' },
  { name: 'İyilik', pct: 58, color: 'bg-pink-500' },
  { name: 'Umut', pct: 51, color: 'bg-amber-500' },
]

// 24-trait radar geometry for the hero mockup (sample profile + age average)
const RADAR_TRAITS = Object.keys(SAMPLE_TRAIT_SCORES) as Trait[]
const RADAR_CX = 120
const RADAR_CY = 120
const RADAR_R = 92
function radarPoint(i: number, value: number): [number, number] {
  const angle = (-90 + i * (360 / RADAR_TRAITS.length)) * (Math.PI / 180)
  const r = (value / 5) * RADAR_R
  return [RADAR_CX + r * Math.cos(angle), RADAR_CY + r * Math.sin(angle)]
}
function radarPolygon(values: number[]): string {
  return values.map((v, i) => radarPoint(i, v).map((n) => n.toFixed(1)).join(',')).join(' ')
}
const RADAR_SCORE_PTS = radarPolygon(RADAR_TRAITS.map((t) => SAMPLE_TRAIT_SCORES[t]))
const RADAR_AVG_PTS = radarPolygon(RADAR_TRAITS.map((t) => SAMPLE_PEER_AVG[t]))
const RADAR_AXES = RADAR_TRAITS.map((_, i) => radarPoint(i, 5))

export default function KisilikDegerlendirmesiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[1fr_340px] lg:gap-12 lg:items-center">

          {/* Left: Copy + Form */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-indigo-700 tracking-wide">VIA Güçlü Yönleri · 6–20 Yaş</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
              Çocuğunuzun Kim Olduğunu<br />
              <span className="text-[#4F46E5]">Bilimsel Olarak Keşfedin</span>
            </h1>
            <p className="text-lg text-[#6e6e73] mb-6 leading-relaxed max-w-lg">
              Yapay zeka destekli, VIA çerçevesine dayalı kişilik değerlendirmesi. Sadece 5 dakika. Çocuğunuzun katılımı gerekmez.
            </p>
            <GuestStartForm locale="tr" />
            <p className="mt-3 text-sm text-[#6e6e73]">
              Emin değil misiniz?{' '}
              <Link href="/tr/kisilik-ornek-rapor" className="text-[#4F46E5] hover:underline font-medium">Örnek raporu görün</Link>
            </p>
            <p className="mt-1 text-sm text-[#6e6e73]">
              Zaten hesabınız var mı?{' '}
              <Link href="/tr/auth/login" className="text-[#4F46E5] hover:underline font-medium">Giriş yap</Link>
            </p>
          </div>

          {/* Right: Sample Report Preview */}
          <div className="hidden lg:block mt-10 lg:mt-0">
            <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600 shrink-0">A</div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">Ali · 9 Yaş</p>
                  <p className="text-xs text-[#6e6e73]">Örnek rapor</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1">Karakter Profili · 24 özellik</p>
              <svg viewBox="0 0 240 240" className="w-full" role="img" aria-label="24 karakter özelliği için örnek radar grafiği, çocuğun profili ve yaş ortalaması ile">
                {/* web rings */}
                {[0.25, 0.5, 0.75, 1].map((f) => (
                  <circle key={f} cx={RADAR_CX} cy={RADAR_CY} r={RADAR_R * f} fill="none" stroke="#e5e7eb" strokeWidth="1" />
                ))}
                {/* 24 axes */}
                <g stroke="#eef2ff" strokeWidth="1">
                  {RADAR_AXES.map(([x, y], i) => (
                    <line key={i} x1={RADAR_CX} y1={RADAR_CY} x2={x.toFixed(1)} y2={y.toFixed(1)} />
                  ))}
                </g>
                {/* age average — dotted, no fill */}
                <polygon points={RADAR_AVG_PTS} fill="none" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 2" strokeLinejoin="round" />
                {/* child's sample profile — solid */}
                <polygon points={RADAR_SCORE_PTS} fill="rgba(79,70,229,0.15)" stroke="#4F46E5" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              {/* legend */}
              <div className="flex items-center justify-center gap-4 mt-1 text-[10px] text-[#6e6e73]">
                <span className="flex items-center gap-1.5">
                  <span className="block w-4 h-0.5 rounded-full bg-[#4F46E5]" /> Çocuğunuz
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="2" viewBox="0 0 16 2"><line x1="0" y1="1" x2="16" y2="1" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 2" /></svg>
                  Yaş ortalaması
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                {SAMPLE_STRENGTHS.slice(0, 3).map((s) => (
                  <span key={s.name} className="text-[10px] font-medium text-[#4338CA] bg-indigo-50 rounded-full px-2 py-0.5">
                    {s.name} {s.pct}%
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#f5f5f7]">
                <p className="text-xs text-[#6e6e73] leading-relaxed italic">
                  &ldquo;Ali&rsquo;nin doğal merakı ve yaratıcı zihni, onu bağımsız düşünmeye yöneltiyor. En çok keşif odaklı etkinliklerde parlıyor.&rdquo;
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="text-xs bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 font-medium">VIA Çerçevesi</span>
                <span className="text-xs bg-green-50 text-green-600 rounded-full px-3 py-1 font-medium">24 Özellik</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#6e6e73]">
            {[
              'Ücretsiz değerlendirme',
              'Çocuğun katılımı gerekmez',
              'VIA pozitif psikoloji',
              '190+ ülkede kullanılıyor',
              '5 dakika sürer',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Notlar Hikayenin Yalnızca Bir Kısmını Anlatır</h2>
            <p className="text-base text-[#6e6e73] leading-relaxed">
              Ebeveyn olarak çoğunlukla okul notlarına odaklanırız. Ancak gerçek başarı ve dayanıklılık, bir çocuğun karakterinden, duygusal alışkanlıklarından ve kişilik güçlerinden gelir. Değerlendirmemiz, notların ötesine bakarak çocuğunuzun doğal olarak parladığı <strong className="text-[#1d1d1f] font-semibold">Öne Çıkan Güçleri</strong> ve büyüme potansiyeli olan <strong className="text-[#1d1d1f] font-semibold">Gelişim Alanlarını</strong> ortaya koyar.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 grid grid-cols-2 gap-4">
            {[
              { label: 'Akademik Not', sub: 'O günün anlık fotoğrafı', accent: false },
              { label: 'Karakter Gücü', sub: 'Kim olduklarını yansıtır', accent: true },
              { label: 'Sınav: 85 / 100', sub: 'Nasıl hissettiklerine bağlı değişir', accent: false },
              { label: 'Merak Puanı: 84%', sub: 'Zaman içinde tutarlı kalır', accent: true },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl border p-4 ${c.accent ? 'border-indigo-200 bg-indigo-50' : 'border-[#d2d2d7] bg-white'}`}>
                <p className={`font-semibold text-sm mb-1 ${c.accent ? 'text-indigo-700' : 'text-[#6e6e73]'}`}>{c.label}</p>
                <p className="text-xs text-[#6e6e73] leading-relaxed">{c.sub}</p>
              </div>
            ))}
          </div>
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
                title: 'Yaş Bazlı Yönlendirme',
                desc: "Kayıt sırasında çocuğunuzun doğum tarihini girin. Sistemimiz gelişim aşamasını otomatik hesaplayarak doğru kademeye atar.",
              },
              {
                step: '2',
                title: '5 Dakikalık Ebeveyn Anketi',
                desc: 'Her gün gördüğünüz davranışlara ilişkin hızlı, gözlem tabanlı 1–5 yıldız soruları. Tahmin yok, çocuğunuz için stresli bir sınav yok.',
              },
              {
                step: '3',
                title: 'Yapay Zeka Destekli Büyüme Raporu',
                desc: 'Girdileriniz, küresel olarak tanınan psikolojik modele göre analiz edilir. Uygulanabilir ebeveynlik egzersizleriyle kişiselleştirilmiş bir yol haritası alırsınız.',
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
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Pozitif Psikolojinin Altın Standardı</h2>
          <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
            Platformumuz, öncü psikologlar Dr. Martin Seligman ve Dr. Neal Mayerson tarafından geliştirilen VIA Güçlü Yönleri çerçevesini uyarlar. 190&apos;dan fazla ülkede araştırmacılar ve eğitimciler tarafından kullanılan bu model, 6 temel erdem altında 24 evrensel özelliği tanımlar.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Personality + Academics */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Akademik Başarı ve Kişilik: Ayrı Değil, Tamamlayıcı</h2>
          <p className="text-base text-[#6e6e73] leading-relaxed mb-6">
            Duckworth ve Seligman&apos;ın (2005) araştırması öz disiplinin IQ&apos;dan daha iyi GPA öngörücüsü olduğunu; Park ve Peterson&apos;ın (2009) çalışması ise öğrenme sevgisini akademik başarıyla en güçlü ilişkili kişilik özelliği olarak belirledi. Karakterin akademik sonuçlarla bağlantısı, araştırmalar tarafından tutarlı biçimde doğrulanıyor.
          </p>
          <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
            Akademik değerlendirme çocuğunuzun <em>şu anda nerede olduğunu</em> gösterir — hangi konular güçlü, hangilerinde boşluk var, uluslararası kıyaslamada kaçıncı yüzdelikte. Kişilik değerlendirmesi ise çocuğunuzun <em>nasıl bir öğrenci olduğunu</em> gösterir — azim, merak, öz denetim, öğrenme sevgisi. İkisi birlikte çok daha eksiksiz bir tablo oluşturur.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                dot: 'bg-blue-500',
                title: 'Akademik Değerlendirme',
                sub: 'Şu an nerede?',
                desc: 'Sözel akıl yürütme, matematik, İngilizce — yaş normuna göre standartlaştırılmış puan ve uluslararası kıyaslama.',
                href: '/tr/akademik-degerlendirme',
                cta: 'Akademik Değerlendirmeyi Başlat →',
              },
              {
                dot: 'bg-[#4F46E5]',
                title: 'Kişilik Değerlendirmesi',
                sub: 'Nasıl bir öğrenci?',
                desc: '24 VIA karakter özelliği — azim, merak, öz denetim, öğrenme sevgisi. Ebeveyn gözlemi, 5 dakika.',
                href: null,
                cta: null,
              },
              {
                dot: 'bg-emerald-500',
                title: 'Tam Tablo',
                sub: 'Potansiyel nerede?',
                desc: 'Akademik konum + kişilik profili birlikte okunduğunda yatırımın nereye yapılacağı çok daha netleşir.',
                href: null,
                cta: null,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col">
                <div className={`w-3 h-3 rounded-full ${item.dot} mb-4`} />
                <h3 className="text-base font-bold text-[#1d1d1f] mb-0.5">{item.title}</h3>
                <p className="text-xs font-semibold text-[#4F46E5] mb-2">{item.sub}</p>
                <p className="text-sm text-[#6e6e73] leading-relaxed flex-1">{item.desc}</p>
                {item.href && (
                  <a href={item.href} className="mt-4 text-sm font-semibold text-[#4F46E5] hover:underline">{item.cta}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Değerlendirme Metodolojisi</h2>
          <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
            Kişilik değerlendirmemiz, pozitif psikolojinin en kapsamlı biçimde araştırılmış çerçevesi olan VIA Karakter Güçleri metodolojisini gelişim psikolojisinden alınan yaş kademelemesiyle birleştirir.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'VIA Güçlü Yönler Çerçevesi',
                body: 'Dr. Martin Seligman ve Dr. Neal Mayerson tarafından geliştirilen VIA sınıflandırması, 50\'den fazla kültürde doğrulanmış 24 evrensel karakter özelliğini tanımlar. Ölçüm, tanı değil gelişim odaklıdır: hiçbir özellik "iyi" veya "kötü" değildir; profil hangi güçlerin öne çıktığını, hangilerinin yatırım beklediğini gösterir.',
              },
              {
                title: 'Ebeveyn Gözlemi Yöntemi',
                body: 'Çocuklar kendi kişilik özelliklerini güvenilir biçimde değerlendiremez — öz algı hızla değişir, küçük çocuklar soyut sorulara tutarsız yanıtlar verir. Günlük davranışları gözlemleyen ebeveyn çok daha kararlı ve güvenilir bir kaynak sağlar. Her soru gözlemlenebilir gerçek dünya davranışlarına dayanır.',
              },
              {
                title: 'Yaşa Göre Kademelendirme',
                body: '6 yaşında ve 16 yaşında kişilik gelişimi çok farklıdır. Sistem dört kademede kalibre edilmiştir: 6–9 yaş (12 temel özellik, 24 soru), 10–13 yaş (15 özellik, 30 soru), 14–17 yaş (20 özellik, 40 soru), 18–20 yaş (tüm 24 özellik, 48 soru). Her kademe o gelişim döneminin en belirgin özelliklerini kapsar.',
              },
              {
                title: 'Yapay Zeka Destekli Kişiselleştirme',
                body: 'Ham puanlar otomatik olarak yorumlanamaz. Yapay zeka katmanı çocuğun yaş kademesine ve belirli profil kombinasyonuna göre özelleştirilmiş büyüme aktiviteleri ve ebeveynlik önerileri üretir. Aynı "merak yüksek" profili, farklı bir ikincil özellikle birleştiğinde farklı bir eylem planı üretir.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6">
                <h3 className="text-base font-bold text-[#1d1d1f] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6e6e73] leading-relaxed">
            Akademik değerlendirmemizin teknik metodolojisi (2 parametreli Madde Yanıt Teorisi, MAP tahmini, standartlaştırılmış puanlama) için{' '}
            <a href="/tr/metodoloji" className="text-[#4F46E5] font-medium hover:underline">metodoloji sayfamızı</a> ziyaret edin.
          </p>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Çocukluğun Her Aşamasına Özel</h2>
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
              { dot: 'bg-indigo-500', title: 'En Güçlü 5 Yön', desc: "Çocuğunuzun doğal olarak parladığı alanlar." },
              { dot: 'bg-emerald-500', title: 'Geliştirilebilecek 3 Alan', desc: "Kör noktaları veya mevcut zayıflıkları hakkında nazik bilgiler." },
              { dot: 'bg-violet-500', title: 'Uygulanabilir Yapay Zeka Planı', desc: "Evde uygulayabileceğiniz, çocuğunuzun profiline özel gerçek dünya egzersizleri." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className={`w-3 h-3 rounded-full ${item.dot} mb-4`} />
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Çocuğunuzun gerçekte kim olduğunu keşfetmeye hazır mısınız?</h2>
          <p className="text-indigo-200 mb-8 text-base">Ücretsiz. Hesap gerekmez. 5 dakika sürer.</p>
          <Link
            href="/tr/kisilik-degerlendirmesi"
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Ücretsiz Değerlendirmeyi Başlat
          </Link>
        </div>
      </section>
    </>
  )
}
