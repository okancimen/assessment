import type { SampleReportContent } from '../types'

const content: SampleReportContent = {
  locale: 'tr',
  path: '/tr/ornek-rapor',
  inLanguage: 'tr',
  ogLocale: 'tr_TR',
  meta: {
    title: 'Örnek Değerlendirme Raporu: Ne Alacağınızı Görün',
    description: 'Gerçek bir Eduentry değerlendirme raporunu inceleyin — standart puan, yüzdelik dilim, ders bazında döküm, konu analizi ve kişiselleştirilmiş öneriler.',
    keywords: ['örnek değerlendirme raporu', 'eduentry rapor örneği', 'çocuk değerlendirme raporu örneği', 'standart puan raporu', 'yüzdelik dilim raporu', 'ücretsiz çocuk testi sonucu'],
    ogTitle: 'Örnek Değerlendirme Raporu — Eduentry',
    ogDescription: 'Çocuğunuzun raporunun tam olarak nasıl göründüğünü görün — standart puan, ders dökümü ve kişiselleştirilmiş öneriler.',
  },
  childName: 'Alex',
  completedDate: '14 Eylül 2026',

  banner: 'Hayali bir çocuk için örnek rapor — ne alacağınızı tam olarak görebilmeniz için.',
  bannerCta: 'Çocuğunuzun gerçek raporunu alın →',
  breadcrumbHome: 'Ana sayfa',
  breadcrumbCurrent: 'Örnek Rapor',

  sampleBadge: 'Örnek rapor · {name}, {age} yaş',
  heading: '{name} — Değerlendirme Sonuçları',
  completedLine: 'Tamamlanma: {date} · 60 soru · 4 ders',
  overall: 'Genel',
  topPercent: '{age} yaş grubunda ilk %{pct}',

  subjects: {
    english:             { label: 'İngilizce',                  shortLabel: 'İngilizce',     topics: ['Okuduğunu anlama', 'Dilbilgisi ve noktalama', 'Kelime bilgisi'] },
    mathematics:         { label: 'Matematik',                  shortLabel: 'Matematik',     topics: ['Aritmetik ve sayılar', 'Kesirler ve ondalıklar', 'Sözel problemler'] },
    verbal_reasoning:    { label: 'Sözel Akıl Yürütme',         shortLabel: 'Sözel',         topics: ['Kelime analojileri', 'Harf dizileri', 'Kelime ilişkileri'] },
    nonverbal_reasoning: { label: 'Sözel Olmayan Akıl Yürütme', shortLabel: 'Sözel Olmayan', topics: ['Şekil matrisleri', 'Seriler ve diziler', 'Şekil analojileri'] },
  },
  bands: ['Destek gerekiyor', 'Ortalamanın altında', 'Ortalama', 'Ortalamanın üstünde', 'Olağanüstü'],
  bellBands: ['Destek', 'Ort. altı', 'Ortalama', 'Ort. üstü', 'Olağanüstü'],
  percentileFormat: '%{n}',

  insights: [
    { label: 'Karma profil', text: 'Güçlü Sözel Akıl Yürütme (122) genel puanı yukarı çekiyor, ancak Matematik (84) aşağı çekiyor — profilde belirgin güçlü ve zayıf alanlar var.' },
    { label: 'Belirgin güç: Sözel', text: 'Sözel Akıl Yürütmede SAS 122, Alex\'i 10 yaş grubunda ilk %8\'e yerleştiriyor.' },
    { label: 'Matematik ilgi bekliyor', text: 'Matematikte SAS 84, Destek gerekiyor bandında. Kesirler ve sözel problemlerde başarı %40 — düzenli günlük çalışmayla bu açık kapanabilir.' },
  ],
  bellTitle: 'Puan dağılımı · Yüzdelik dilim',

  intlHeading: 'Uluslararası bağlam',
  intl: {
    uk:   ['İngiltere Ulusal Müfredatı', 'Genel olarak beklenen seviyede, ancak belirgin biçimde dengesiz bir profil — Sözel alan grammar school düzeyinde, Matematik yaşa göre beklenenin altında.'],
    us:   ['ABD Sınıf Seviyesi', 'Genel olarak sınıf seviyesinde; ülke genelinde ilk %30–35 içinde, dersler arasında önemli farklılıklar var.'],
    pisa: ['PISA (OECD)', 'PISA 3. Seviye — çoğu alanda sağlam bir performans, giderilmesi gereken belirli eksikler var.'],
    ib:   ['IB Programı', 'IB için büyük olasılıkla uygun; ancak İleri Düzey (HL) Matematik seçilmeden önce matematik temellerinin güçlendirilmesi gerekir.'],
  },
  intlFootnote: '{score} genel standart puanına dayanır · yol gösterici niteliktedir, tanı koymaz',

  subjectsHeading: 'Ders puanları',
  correctOf: '{total} sorudan {raw} doğru',
  topicsLabel: 'Konular',
  avgDifficulty: 'ort. zorluk {d}/10',

  recsHeading: 'Kişiselleştirilmiş öneriler',
  recsSub: 'Konu bazında performansa göre',
  recsTarget: 'odaklı çalışmayla hedef',
  actionPlan: 'Eylem planı',
  recommendations: {
    english: {
      priority: 'Odak Alanı',
      scorePotential: '+5–7 SAS',
      headline: 'Geniş okuma ile kelime dağarcığını geliştirin',
      rationale: 'Kelime bilgisi %60 ile en zayıf konu — İngilizce puanını potansiyelinin altında tutuyor. Okuduğunu anlama ve dilbilgisi sağlam; bu hedefli bir eksik.',
      actions: [
        'Her gün bir kurgu dışı makale okuyun (çocuklara yönelik haber siteleri, bilim dergileri) — bağlam içinde öğrenilen kelimeler listelerden daha kalıcıdır',
        'Bir kelime defteri tutun: haftada 5 yeni kelime, tanımı ve her biri için bir örnek cümle',
        'Çıkarım odaklı okuduğunu anlama soruları çözün — yalnızca "cevabı bul" değil, "yazar ne ima ediyor" sorusu',
      ],
    },
    verbal_reasoning: {
      priority: 'Koru ve Geliştir',
      scorePotential: '+3–5 SAS',
      headline: 'Bu gücü yarışmalara ve bulmacalara yönlendirin',
      rationale: 'SAS 122 zaten Olağanüstü bandında ve ilk %8 içinde. Buradaki amaç eksik kapatmak değil, ileri taşımak — beceriyi baskı altında keskin tutmak ve ölçeğin en üstüne doğru zorlamak.',
      actions: [
        'Okul içi veya ulusal bir kelime/bulmaca yarışmasına katılın — rekabet ortamı, normal çalışmanın ötesinde performansı keskinleştirir',
        'Yaş seviyesinin bir iki yıl üstündeki kitapları okuyun — bu, rahat tanıma yerine gerçek anlam çıkarımı gerektirir',
        'Süreyi %10 kısaltarak zamanlı sözel akıl yürütme denemeleri yapın; SAS 122 ile SAS 126+ arasındaki farkı yaratan hız payını kazanın',
      ],
    },
    nonverbal_reasoning: {
      priority: 'Hızlı Kazanım',
      scorePotential: '+5–8 SAS',
      headline: 'Şekil analojilerini düzeltin — tek zayıf nokta, büyük etki',
      rationale: 'Şekil analojileri %60, matrisler ve seriler ise %70–80. Bu tek soru tipi darboğaz. Özellikle bunu hedeflemek Sözel Olmayan Akıl Yürütmeyi Olağanüstü bandına taşıyabilir.',
      actions: [
        'Her gün 10 dakika yalnızca şekil analojisi soruları çalışın — karışık deneme setleri değil',
        'Her soruda seçeneklere bakmadan önce dönüşümü kelimelerle anlatın ("90° döndü ve bir nokta eklendi")',
        'Sezgisel uzamsal düşünmeyi geliştirmek için Tangram veya desen blokları gibi fiziksel bulmacalar kullanın',
      ],
    },
    mathematics: {
      priority: 'Odak Alanı',
      scorePotential: '+8–12 SAS',
      headline: 'Zor konulara geçmeden önce sayı temellerini sağlamlaştırın',
      rationale: 'Üç konunun tamamı %60\'ın altında — kesirler ve sözel problemlerde %40, temel sayı kavramındaki eksiklerin ilerlemeyi engellediğini gösteriyor. Öncelik daha zor sorular değil, temelleri güçlendirmek.',
      actions: [
        'Çarpım tablosu ve zihinden işlemler için günde 15 dakika ayırın; 12×12\'ye kadar tüm işlemler anında gelene kadar — bu, kesirlerin ve sözel problemlerin kilidini açar',
        'Yazılı işlemlere geçmeden önce görsel kesir modelleri (kesir şeritleri, pizza dilimleri) kullanın — kavram, algoritmadan önce gelmeli',
        'Her gün bir sözel problem çözün: sayıları daire içine alın, sorulanın altını çizin, işlem yazmadan önce bir şekil çizin',
      ],
    },
  },

  scoreGuide: 'Puan rehberi',
  faqHeading: 'Sıkça Sorulan Sorular',
  faq: [
    {
      q: 'Eduentry değerlendirme raporu neleri gösteriyor?',
      a: 'Rapor; çocuğunuzun standart puanını (ortalama 100, standart sapma 15), uluslararası akranlara göre yüzdelik dilimini, İngilizce, Matematik, Sözel Akıl Yürütme ve Sözel Olmayan Akıl Yürütme ders puanlarını, konu bazında dökümleri ve yapay zekâ ile oluşturulan kişiselleştirilmiş gelişim önerilerini gösterir.',
    },
    {
      q: 'Standart puan nedir?',
      a: 'Standart puan (SAS), ham puanı çocuğun karşılaştığı soruların zorluğuna göre düzeltir ve farklı oturumlar arasında adil karşılaştırma sağlar. Eduentry, GL Assessment ve CAT4 gibi yaygın değerlendirmelerle uyumlu olarak ortalaması 100, standart sapması 15 olan bir ölçek kullanır. 100 puan, çocuğun yaş grubunun tam ortalamasında olduğu anlamına gelir.',
    },
    {
      q: 'Rapordaki yüzdelik dilim ne anlama geliyor?',
      a: 'Yüzdelik dilim, aynı yaştaki çocukların ne kadarının çocuğunuzdan düşük puan aldığını gösterir. Örneğin 68. yüzdelik dilim, çocuğunuzun akranlarının %68\'inden yüksek puan aldığı anlamına gelir. Yüzdelikler Eduentry\'nin uluslararası norm verilerinden türetilir ve ham yüzde puanından daha net bir tablo sunar.',
    },
    {
      q: 'Çocuğumun ders puanlarını nasıl yorumlamalıyım?',
      a: 'Her ders puanı beş banttan birine düşer: Destek gerekiyor (70–84), Ortalamanın altında (85–94), Ortalama (95–109), Ortalamanın üstünde (110–119) ve Olağanüstü (120–130). Rapor her dersin içindeki konu dökümlerini de gösterir; böylece hangi alanların güçlü, hangilerinin hedefli çalışma gerektirdiğini tam olarak görürsünüz.',
    },
    {
      q: 'Değerlendirme hangi yaş aralığı için tasarlandı?',
      a: 'Eduentry değerlendirmesi 7–14 yaş arası çocuklar için tasarlanmıştır ve ilkokul ile ortaokulun ilk yıllarını kapsar. Sorular, zorluk kalibrasyonu ve norm verileri yaşa göre ayarlanır; böylece standart puan çocuğunuzun yıl ve ay olarak yaşına göre performansını adil biçimde yansıtır.',
    },
    {
      q: 'Raporu çocuğumun öğretmeni veya okuluyla paylaşabilir miyim?',
      a: 'Evet. Raporu PDF olarak indirebilir veya bir bağlantıyla öğretmen, özel ders öğretmeni ya da okul kabul ekibiyle paylaşabilirsiniz. Rapor hem standart değerlendirmelere aşina eğitimcilerin hem de bu konuda deneyimi olmayan ebeveynlerin kolayca okuyabileceği şekilde tasarlanmıştır.',
    },
    {
      q: 'Değerlendirmeyi tamamlamak ne kadar sürer?',
      a: 'Tam değerlendirme dört derste 60 sorudan oluşur ve genellikle 40–60 dakika sürer. Çocuklar gerektiğinde ara verip sonra devam edebilir. Tüm sorular gönderildiğinde rapor otomatik olarak oluşturulur ve sonuçlar genellikle 90 dakika içinde hazır olur.',
    },
    {
      q: 'Değerlendirme gerçekten ücretsiz mi?',
      a: 'Evet, temel değerlendirme ve tam rapor tamamen ücretsizdir. Kayıt sırasında kredi kartı istenmez. Eduentry ücretsiz raporu, ebeveynlerin isteğe bağlı koçluk veya çalışma kaynaklarını değerlendirmeden önce çocuklarının akademik profilini anlayabilmesi için sunar.',
    },
    {
      q: 'Raporu aldıktan sonra ne yapmalıyım?',
      a: 'Önce, çocuğunuzun konu puanlarına göre en yüksek gelişim potansiyeli olan alanları önceliklendiren kişiselleştirilmiş öneriler bölümünü okuyun. Ortalama veya Ortalamanın üstündeki derslerden önce Destek gerekiyor bandındaki derslere odaklanın. Raporu çocuğunuzun öğretmeniyle paylaşın; böylece sınıf veya özel ders çalışmaları belirlenen eksiklerle uyumlu hale gelir.',
    },
    {
      q: 'Bu çevrimiçi değerlendirme profesyonel bir psikometrik testle karşılaştırıldığında ne kadar doğru?',
      a: 'Eduentry, profesyonel uyarlanabilir değerlendirmelerde kullanılan istatistiksel çerçeve olan Madde Yanıt Teorisini (MAP kestirimli 2 Parametreli Lojistik model) kullanır. Dersler arasındaki göreli güçlü ve zayıf yönleri belirlemek için çok uygundur. Ancak klinik veya eğitim psikoloğu tarafından uygulanan bir tanı aracı değil, yol gösterici bir tarama aracıdır. Özel eğitim desteği gibi kararlar için uzman bir profesyonel tarafından resmi değerlendirme yapılması önerilir.',
    },
  ],

  ctaBadge: 'Ücretsiz · Kredi kartı gerekmez · Bir saatte sonuç',
  ctaHeading: 'Çocuğunuzun gerçek raporunu alın — ücretsiz',
  ctaText: 'Bu örnek size formatı gösterir. Çocuğunuzun raporunda kendi gerçek puanları, gerçek konu dökümleri ve cevaplarına dayalı özel öneriler yer alır.',
  ctaButton: 'Ücretsiz değerlendirmeyi başlat →',

  aboutHeading: 'Bu değerlendirme hakkında',
  aboutText: 'Puanlar MAP kestirimli 2 Parametreli Lojistik MYT modeliyle hesaplanır. Standart puan ölçeğinin ortalaması 100, standart sapması 15\'tir ve GL Assessment ile CAT4 normlarıyla uyumludur. Puanlar 70–130 aralığıyla sınırlandırılır. Sonuçlar yol gösterici niteliktedir, tanı koymaz.',
}

export default content
