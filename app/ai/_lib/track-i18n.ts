export type TrackId = 'tech' | 'business' | 'data-analytics' | 'digital-marketing'
export type Locale = 'tr' | 'es'

interface Role { title: string; skills: string; salary: string }
interface DomainTopic { n: string; topic: string; detail: string }
interface Faq { q: string; a: string }
interface Phase { phase: string; q: number; measure: string }
interface Profile { title: string; body: string }
interface OtherTrack { href: string; label: string; desc: string }

export interface TrackData {
  meta: { title: string; description: string }
  hero: { badge: string; h1: string; p: string; cta: string; blogLink: string; trust: string[] }
  stats: { stat: string; label: string }[]
  domain: { heading: string; intro: string; topics: DomainTopic[] }
  roles: { heading: string; intro: string; list: Role[] }
  whoFor: { heading: string; intro: string; profiles: Profile[] }
  phases: { heading: string; intro: string; rows: Phase[] }
  faq: { heading: string; list: Faq[] }
  otherTracks: { heading: string; list: OtherTrack[] }
  blog: { heading: string }
  finalCta: { h2: string; p: string; btn: string; footnote: string }
  breadcrumb: { home: string; track: string }
}

// ─── TURKISH ────────────────────────────────────────────────────────────────

const TR: Record<TrackId, TrackData> = {
  'tech': {
    meta: {
      title: 'Teknoloji Staj Değerlendirmesi — Teknoloji Hazırlık Raporu Al',
      description: '14–18 yaş arası öğrenciler için ücretsiz yapay zeka destekli teknoloji staj değerlendirmesi. Kodlama mantığı, algoritmalar, siber güvenlik, UX ve yazılım becerileri. Gerçek bir teknoloji stajı bul.',
    },
    hero: {
      badge: 'Teknoloji Alanı',
      h1: 'Teknoloji stajına hazır olduğunu kanıtla.',
      p: 'İngiltere teknoloji sektörü 1,7 milyon kişiyi istihdam ediyor ve işverenler güvenebilecekleri genç yeteneklere ihtiyaç duyuyor. Ücretsiz 34 soruluk değerlendirmemiz, her başvuruyu destekleyecek ölçülebilir bir hazırlık puanı ve kişiselleştirilmiş yapay zeka raporu sağlar.',
      cta: 'Ücretsiz başvur — Teknoloji alanı →',
      blogLink: 'Staj rehberlerini oku',
      trust: ['✓ Öğrenciler için ücretsiz', '✓ 14–18 yaş', '✓ 35 dakika', '✓ Yapay zeka puanlaması', '✓ Kişiselleştirilmiş hazırlık raporu'],
    },
    stats: [
      { stat: '1,7M', label: "İngiltere'deki teknoloji iş sayısı" },
      { stat: '%72', label: 'İşverenlerin beceri açığı yaşadığını bildirme oranı' },
      { stat: '£45k+', label: 'Ort. yazılım geliştirici maaşı' },
      { stat: '10×', label: 'Üst üste teknoloji istihdamı büyümesi (yıl)' },
    ],
    domain: {
      heading: 'Teknoloji alanı ne ölçer.',
      intro: '10 senaryo bazlı soru — herhangi bir teknoloji stajyerinin ilk gününde karşılaşacağı temel konuları kapsar.',
      topics: [
        { n: '01', topic: 'Algoritma ve Hesaplamalı Düşünce', detail: 'Kod yollarını izle, çıktıyı tahmin et, farklı yaklaşımların verimliliğini değerlendir.' },
        { n: '02', topic: 'Veri Tipleri ve Değişkenler', detail: "Tamsayıların, stringlerin, boolean'ların ve dizilerin gerçek senaryolarda nasıl davrandığını anla." },
        { n: '03', topic: 'Döngüler ve Koşullar', detail: 'For/while döngülerini ve if/else dallarını oku — kodun ne çıktı üreteceğini tahmin et.' },
        { n: '04', topic: 'Hata Ayıklama ve Hata Analizi', detail: 'Kısa bir kod parçasındaki mantık hatasını veya sözdizimi hatasını bul.' },
        { n: '05', topic: 'Yazılım Geliştirme Yaşam Döngüsü', detail: 'Görevleri (kullanıcı hikayeleri, QA, dağıtım) doğru SDLC aşamasıyla eşleştir.' },
        { n: '06', topic: 'Siber Güvenlik Temelleri', detail: 'Kimlik avı, SQL enjeksiyonu ve diğer yaygın tehdit kalıplarını tanı.' },
        { n: '07', topic: 'Ağ Temelleri', detail: 'DNS, HTTP, IP adresleri ve verinin internet üzerinde nasıl seyahat ettiğini anla.' },
        { n: '08', topic: 'UX ve Arayüz Tasarımı', detail: 'Mockup kararlarını değerlendir — hangi düzen kullanıcı hedefine daha iyi hizmet eder.' },
        { n: '09', topic: 'Teknoloji Araç Seçimi', detail: 'Tanımlanan bir problem için doğru aracı (veritabanı, çerçeve, hizmet) seç.' },
        { n: '10', topic: 'Teknoloji Etiği ve Dijital Vatandaşlık', detail: 'GDPR, yapay zeka önyargısı, erişilebilirlik gereksinimleri ve dijital refahla ilgili durumları değerlendir.' },
      ],
    },
    roles: {
      heading: 'Teknoloji stajının götürdüğü yerler.',
      intro: 'İlk teknoloji stajın bir sıçrama tahtasıdır. Teknoloji alanı adaylarımızın ilerleyen dönemde güvence altına aldığı pozisyonlar:',
      list: [
        { title: 'Junior Yazılım Geliştirici', skills: 'Python, JavaScript, versiyon kontrolü, kod incelemesi', salary: '£28k–£45k' },
        { title: 'BT Destek Analisti', skills: 'Sorun giderme, ağ, bilet sistemleri, son kullanıcı desteği', salary: '£22k–£32k' },
        { title: 'Siber Güvenlik Analisti', skills: 'Tehdit tespiti, SIEM araçları, güvenlik açığı taraması, olay yanıtı', salary: '£35k–£60k' },
        { title: 'UX / UI Tasarımcı', skills: 'Figma, kullanıcı araştırması, wireframing, erişilebilirlik, tasarım sistemleri', salary: '£30k–£55k' },
        { title: 'Veri Mühendisi', skills: 'SQL, ETL hattı, bulut altyapısı, veri modelleme', salary: '£40k–£70k' },
        { title: 'QA / Test Mühendisi', skills: 'Test otomasyonu, hata raporlama, Selenium, regresyon testi', salary: '£28k–£48k' },
      ],
    },
    whoFor: {
      heading: 'Teknoloji alanı kimler için.',
      intro: "Dolu bir yarışma özgeçmişine ihtiyaç yoktur. Bir teknolog gibi düşünebildiğini kanıtlaman gerekiyor — bu değerlendirme tam olarak bunu ölçer.",
      profiles: [
        { title: 'Öz öğreniciler', body: 'Kendi başına bir şeyler inşa ettin — Scratch, Python öğreticileri, oyun modları, web siteleri. Hiç resmi stajın olmadı ama teknolojiyle problem çözmeyi biliyorsun. Bu değerlendirme o kendi kendine öğrenilen yeteneğe güvenilir, doğrulanabilir bir puan verir.' },
        { title: 'GCSE Bilgisayar Bilimi öğrencisi', body: "GCSE'de Bilgisayar Bilimi okuyor ya da okumak üzeresin ve teorik bilgini destekleyecek gerçek iş deneyimi istiyorsun. Alan soruları aynı kavramsal düzeyde hazırlanmış — senaryo bazlı, ezber değil." },
        { title: 'Meraklı problem çözücüler', body: "Bilişimi resmi olarak öğrenmedin ama doğal olarak analitiksin — bulmacaları seviyorsun, şeylerin nasıl çalıştığını merak ediyorsun. Genel yetenek aşamaları senin için tasarlandı. Merak ve muhakeme burada önemlidir." },
      ],
    },
    phases: {
      heading: '34 sorunun tamamı.',
      intro: 'Uyarlanabilir değerlendirme soru zorluğunu gerçek zamanlı olarak ayarlar. Her adımda sana uygun biçimde zorlanırsın ve raporun tam olarak nerede öne çıktığını yansıtır.',
      rows: [
        { phase: 'Genel Yetenek', q: 10, measure: 'Sözel muhakeme, sayısal muhakeme, örüntü tanıma' },
        { phase: 'Teknoloji Alanı', q: 10, measure: 'Kodlama mantığı, siber güvenlik, UX, ağ, etik' },
        { phase: 'İş Yeri Becerileri', q: 8, measure: 'Durumsal yargı, iletişim, baskı altında takım çalışması' },
        { phase: 'İlgi Profili', q: 6, measure: 'Alan uyumu, motivasyon, öğrenme stili, rol uygunluğu' },
      ],
    },
    faq: {
      heading: 'Sıkça sorulan sorular.',
      list: [
        { q: 'Teknoloji alanını almak için kod yazmayı bilmem gerekiyor mu?', a: 'Hayır — değerlendirme hesaplamalı düşünceyi ve mantıksal akıl yürütmeyi ölçer, programlama sözdizimini değil. Hiç kodlama deneyimi olmayan öğrenciler düzenli olarak en yüksek dilimde puan alır. Bununla birlikte, daha önce kod yazdıysan alan soruları daha tanıdık gelecektir.' },
        { q: "14–18 yaş öğrencilerine staj teklif eden teknoloji şirketleri nasıl bulunur?", a: "Binlerce İngiliz şirketi lise öğrencileri için yapılandırılmış iş deneyimi ve staj programları yürütüyor — Google, Microsoft ve Amazon gibi küresel firmalardan yerel teknoloji start-up ve scale-up'ların finanse ettiği programlara kadar. Birçoğu özellikle değerlendirme verisiyle başvurularını destekleyebilen öğrencileri arıyor." },
        { q: 'Teknoloji alanı GCSE Bilgisayar Bilimi ile nasıl karşılaştırılır?', a: "Alan soruları benzer kavramları (algoritmalar, veri, ağlar) kapsar ancak sınav tarzı değil, senaryo bazlıdır. Kavramı gerçek bir iş durumuna uygularsın. GCSE CS okumayan öğrenciler yine de iyi performans gösterebilir — senaryolar erişilebilir tasarlanmıştır." },
        { q: 'Eduentry hazırlık raporum üniversite Bilgisayar Bilimi başvurusuna yardımcı olur mu?', a: "Ölçülebilir becerilerin kanıtı ve yapılandırılmış iş deneyimi, özellikle post-92 ve Russell Group üniversitelerinde giderek daha fazla değer görüyor. Hazırlık raporun, kişisel beyanda ve mülakatda referans gösterebileceğin somut bir materyal sağlar." },
        { q: 'Daha iyi puan almak için yeniden değerlendirme alabilir miyim?', a: 'Her hesap bir tam değerlendirme hakkı alır. Bu, raporunun gerçek performansı yansıtmasını sağlar — işverenlerin değer verdiği de budur. Hazır değilsen blogumuzda Teknoloji alanı için hedefli hazırlık rehberleri mevcuttur.' },
      ],
    },
    otherTracks: {
      heading: 'Diğer staj alanları',
      list: [
        { href: '/tr/is-dunyasi',          label: 'İş Dünyası',        desc: 'Strateji, finans, operasyon' },
        { href: '/tr/veri-analitigi',    label: 'Veri Analitiği',    desc: 'Veri, istatistik, içgörüler' },
        { href: '/tr/dijital-pazarlama', label: 'Dijital Pazarlama', desc: 'SEO, sosyal medya, kampanyalar' },
      ],
    },
    blog: { heading: 'Daha fazla okuma' },
    finalCta: {
      h2: 'Teknoloji stajın burada başlıyor.',
      p: 'Ücretsiz 34 soruluk değerlendirme. Yapay zeka hazırlık raporu. Gerçek yerleştirme fırsatları. Başlamak için CV gerekmez.',
      btn: 'Ücretsiz başvur — Teknoloji alanı →',
      footnote: '14–18 yaş tüm öğrenciler için ücretsiz · 35 dakika · Anında sonuç',
    },
    breadcrumb: { home: 'Ana Sayfa', track: 'Teknoloji Alanı' },
  },

  'business': {
    meta: {
      title: 'İş Dünyası Staj Değerlendirmesi — İş Hazırlık Raporu Al',
      description: '14–18 yaş arası öğrenciler için ücretsiz yapay zeka destekli iş dünyası staj değerlendirmesi. Pazar analizi, finansal okuryazarlık, iş senaryoları ve strateji. Gerçek bir iş stajı bul.',
    },
    hero: {
      badge: 'İş Dünyası Alanı',
      h1: 'Ticari olarak hazır olduğunu kanıtla.',
      p: "İşletme yönetimi İngiltere'nin en popüler derece konusu — bu da staj rekabetini kıyasıya kılıyor. Değerlendirmemiz, güçlü adayları öne çıkaran ticari farkındalık ve analitik düşünceyi ölçer ve bunu kanıtlayan güvenilir bir rapor sağlar.",
      cta: 'Ücretsiz başvur — İş Dünyası alanı →',
      blogLink: 'Staj rehberlerini oku',
      trust: ['✓ Öğrenciler için ücretsiz', '✓ 14–18 yaş', '✓ 35 dakika', '✓ Yapay zeka puanlaması', '✓ Kişiselleştirilmiş hazırlık raporu'],
    },
    stats: [
      { stat: '%68', label: 'İşverenlerin iş deneyimini en önemli işe alım faktörü olarak değerlendirme oranı (CBI)' },
      { stat: '%100', label: 'FTSE 100 şirketlerinin resmi öğrenci programı yürütme oranı' },
      { stat: '85k', label: 'Her yıl İngiltere\'de verilen işletme derecesi sayısı' },
      { stat: '£38k', label: "Londra'da ort. iş analisti başlangıç maaşı" },
    ],
    domain: {
      heading: 'İş Dünyası alanı ne ölçer.',
      intro: '10 senaryo bazlı soru — her iş stajyerinin ofisteki ilk günden itibaren ihtiyaç duyduğu ticari muhakeme, finansal okuryazarlık ve stratejik düşünceyi kapsar.',
      topics: [
        { n: '01', topic: 'Pazar Analizi', detail: 'Pazar büyüklüğü verilerini, büyüme oranlarını ve rekabetçi ortamları yorumlayarak iş sonuçlarına ulaş.' },
        { n: '02', topic: 'Finansal Okuryazarlık', detail: 'Temel bir gelir tablosunu oku, brüt marj ile net kar farkını anla ve nakit akışı senaryolarını yorumla.' },
        { n: '03', topic: 'İş Senaryosu Muhakemesi', detail: "İki rekabetçi seçeneği YG, risk ve stratejik uyum kullanarak değerlendir — daha iyi öneriyi seç." },
        { n: '04', topic: 'SWOT ve Rekabetçi Analiz', detail: 'Verilen bir senaryodan güçlü ve zayıf yönleri, fırsatları ve tehditleri belirle; rakip avantajlarını tespit et.' },
        { n: '05', topic: 'Müşteri ve Paydaş Düşüncesi', detail: 'Bir senaryodaki gerçek paydaşı ve onlara en önemli sonucu belirle.' },
        { n: '06', topic: 'Operasyonlar ve Tedarik Zinciri', detail: 'Basit süreç akışlarında darboğazları, stok yönetimini ve operasyonel verimliliği anla.' },
        { n: '07', topic: 'İş İletişimi', detail: 'Farklı iş hedef kitleleriyle iletişim kurmak için doğru kanalı, tonu ve formatı seç.' },
        { n: '08', topic: 'Girişimcilik ve İnovasyon', detail: 'Yeni bir ürün fikrini fizibilite, pazar talebi ve rekabet avantajı açısından değerlendir.' },
        { n: '09', topic: 'Risk Yönetimi', detail: 'Bir iş senaryosundaki temel riski belirle ve en uygun azaltma stratejisini seç.' },
        { n: '10', topic: 'İş Bulgularını Sunma', detail: 'Bir brief\'ten bulguları nasıl yapılandırıp sunacağına karar ver — hedef kitle, format, ana mesaj.' },
      ],
    },
    roles: {
      heading: 'İş Dünyası stajının götürdüğü yerler.',
      intro: 'Akademik kariyerinin erken döneminde bir iş stajı ticari olgunluğa işaret eder. İş Dünyası alanı adaylarımızın peşinden gittiği pozisyonlar:',
      list: [
        { title: 'İş Analisti', skills: 'Gereksinim toplama, süreç haritalama, paydaş iletişimi, Excel modelleme', salary: '£28k–£42k' },
        { title: 'Junior Finansal Analist', skills: 'Finansal modelleme, varyans analizi, tahminleme, raporlama', salary: '£30k–£48k' },
        { title: 'Operasyon Koordinatörü', skills: 'Lojistik, tedarikçi yönetimi, süreç optimizasyonu, zamanlama', salary: '£24k–£35k' },
        { title: 'Strateji ve Planlama Analisti', skills: 'Pazar araştırması, rekabetçi analiz, senaryo planlaması, sunumlar', salary: '£32k–£50k' },
        { title: 'İK İdarecisi', skills: 'İşe alım koordinasyonu, çalışan ilişkileri, politika uyumu, HRIS sistemleri', salary: '£22k–£32k' },
        { title: 'Yönetim Danışmanı Analisti', skills: 'Problem yapılandırma, müşteri iletişimi, veri sentezi, slayt setleri', salary: '£38k–£60k' },
      ],
    },
    whoFor: {
      heading: 'İş Dünyası alanı kimler için.',
      intro: 'Ticari farkındalık sınıflarda öğretilmez — dünyanın nasıl çalıştığına dikkat ederek gelişir. Bu seni tanımlıyorsa, bu alan senin için yapıldı.',
      profiles: [
        { title: 'Güncel olayları takip edenler', body: "Financial Times, BBC Business veya The Economist okuyorsun ve şirketlerin neden bu kararları aldığını düşünüyorsun. Zaten ticari sezgin var — bu değerlendirme ona güvenilir, doğrulanmış bir puan verir." },
        { title: 'Ekonomi veya İşletme öğrencisi', body: "GCSE veya A-level'de Ekonomi, İşletme veya Muhasebe okuyorsun ve teorik bilgine bağlam katacak gerçek iş deneyimi istiyorsun. Alan soruları tam olarak öğrendiklerini zorlamak ve ödüllendirmek için hazırlandı." },
        { title: 'Girişimci ruhlu öğrenciler', body: 'Okul işletmesi kurdun, online bir şeyler sattın veya etkinlikler düzenledin. Sonuç üretmenin ne anlama geldiğini anlıyorsun. Bu değerlendirme o pratik deneyime işverenlerin üzerinde hareket edebileceği ölçülebilir bir puan verir.' },
      ],
    },
    phases: {
      heading: '34 sorunun tamamı.',
      intro: 'Uyarlanabilir motor soru zorluğunu gerçek zamanlı olarak ayarlar. Sonuç, yalnızca ortalamanı değil tavanını doğru biçimde yansıtan bir rapordur.',
      rows: [
        { phase: 'Genel Yetenek', q: 10, measure: 'Sözel muhakeme, sayısal muhakeme, veri yorumlama' },
        { phase: 'İş Dünyası Alanı', q: 10, measure: 'Pazar analizi, finansal okuryazarlık, strateji, operasyonlar' },
        { phase: 'İş Yeri Becerileri', q: 8, measure: 'Durumsal yargı, profesyonel iletişim, önceliklendirme' },
        { phase: 'İlgi Profili', q: 6, measure: 'Alan uyumu, kariyer motivasyonu, tercih edilen çalışma stili' },
      ],
    },
    faq: {
      heading: 'Sıkça sorulan sorular.',
      list: [
        { q: 'İş Dünyası alanını almak için İşletme veya Ekonomi A-level gerekiyor mu?', a: "Hiç de değil. İş Dünyası alanı ticari farkındalık ve muhakeme üzerine kuruludur — haber okuyarak, şirketlerin nasıl çalıştığını anlayarak ve kararları analitik biçimde düşünerek geliştirilen beceriler. A-level ekonomisi yardımcı olur, ancak bunu almayan öğrenciler düzenli olarak en yüksek dilimde puan alır." },
        { q: "14–18 yaş öğrencilerine iş stajı teklif eden şirket türleri hangileridir?", a: "Tüm FTSE 100 şirketleri resmi iş deneyimi programları yürütür ve çoğunun özel öğrenci yolları vardır. Bunların yanı sıra hukuk firmaları, danışmanlık şirketleri, bankalar, sigorta şirketleri, perakendeciler ve her sektördeki KOBİ'ler yapılandırılmış programlar aracılığıyla öğrencileri yerleştirir." },
        { q: "Ticari farkındalık değerlendirmede nasıl ölçülür?", a: "Ticari farkındalık olgusal hatırlama yerine senaryo bazlı sorularla ölçülür. Bir durum verilir — bir karar veren şirket, piyasa değişimi, müşteri şikayeti — ve bunun içinden muhakeme etmen istenir. Haftada bir kez kaliteli gazete okumak iş kelime dağarcığını ezberlemeye göre daha iyi hazırlıktır." },
        { q: 'Eduentry raporumu finans veya hukuk firması başvurusunda kullanabilir miyim?', a: "Evet. Büyük finans ve hukuk firmalarındaki Spring Insight programları ve iş deneyimi haftaları giderek artan biçimde değerlendirilmiş hazırlık kanıtı istiyor. Eduentry raporu, kişisel beyanını destekleyen güvenilir bir üçüncü taraf yetenek ve alan bilgisi ölçümü sağlar." },
        { q: 'İş Dünyası alanı ile Veri Analitiği alanı arasındaki fark nedir?', a: "İş Dünyası strateji, finans, operasyonlar ve paydaş düşüncesine odaklanır — nicel destekli nitel muhakeme. Veri Analitiği grafik okuma, istatistiksel çıkarım ve veri kümelerinden içgörü elde etmeye vurgu yapar. Her ikisine de ilgi duyuyorsan, İlgi Profili aşaması birincil uyumunu netleştirmeye yardımcı olur." },
      ],
    },
    otherTracks: {
      heading: 'Diğer staj alanları',
      list: [
        { href: '/tr/teknoloji',              label: 'Teknoloji',         desc: 'Kodlama, algoritmalar, siber güvenlik' },
        { href: '/tr/veri-analitigi',    label: 'Veri Analitiği',    desc: 'Veri, istatistik, içgörüler' },
        { href: '/tr/dijital-pazarlama', label: 'Dijital Pazarlama', desc: 'SEO, sosyal medya, kampanyalar' },
      ],
    },
    blog: { heading: 'Daha fazla okuma' },
    finalCta: {
      h2: 'İş dünyası stajın burada başlıyor.',
      p: 'Ücretsiz 34 soruluk değerlendirme. Yapay zeka hazırlık raporu. Gerçek yerleştirme fırsatları. Başlamak için CV gerekmez.',
      btn: 'Ücretsiz başvur — İş Dünyası alanı →',
      footnote: '14–18 yaş tüm öğrenciler için ücretsiz · 35 dakika · Anında sonuç',
    },
    breadcrumb: { home: 'Ana Sayfa', track: 'İş Dünyası Alanı' },
  },

  'data-analytics': {
    meta: {
      title: 'Veri Analitiği Staj Değerlendirmesi — Veri Hazırlık Raporu Al',
      description: '14–18 yaş arası öğrenciler için ücretsiz yapay zeka destekli veri analitiği staj değerlendirmesi. Grafik okuma, istatistik, elektronik tablo mantığı, SQL temelleri ve veri anlatımı. Gerçek bir veri stajı bul.',
    },
    hero: {
      badge: 'Veri Analitiği Alanı',
      h1: 'Veriyi karara dönüştürebildiğini kanıtla.',
      p: "Veri analisti pozisyonları 2022–2024 yılları arasında İngiltere'de %40 büyüdü — ancak şirketlerin %82'si doğru becerilere sahip adaylar bulamadıklarını söylüyor. Değerlendirmemiz veri okuryazarlığını, istatistiksel muhakemeni ve içgörü iletişimini ölçer ve işverenlerin üzerinde hareket edebileceği bir rapor sağlar.",
      cta: 'Ücretsiz başvur — Veri Analitiği alanı →',
      blogLink: 'Staj rehberlerini oku',
      trust: ['✓ Öğrenciler için ücretsiz', '✓ 14–18 yaş', '✓ 35 dakika', '✓ Yapay zeka puanlaması', '✓ Kişiselleştirilmiş hazırlık raporu'],
    },
    stats: [
      { stat: '%40', label: "İngiltere'de 2022–2024 veri analisti pozisyonu büyümesi" },
      { stat: '2,7M', label: "İngiltere'de 2028'e kadar beklenen veri işi sayısı" },
      { stat: '%82', label: 'Veri okuryazarı aday bulamayan şirket oranı' },
      { stat: '£55k', label: "Londra'da ort. kıdemli veri analisti maaşı" },
    ],
    domain: {
      heading: 'Veri Analitiği alanı ne ölçer.',
      intro: '10 senaryo bazlı soru — grafik okumadan SQL mantığına, bulgunu teknik olmayan bir paydaşa iletmeye kadar junior bir veri analistinin ilk haftasında kullandığı her beceriyi kapsar.',
      topics: [
        { n: '01', topic: 'Grafik ve Çizelge Okuma', detail: 'Çubuk grafikler, çizgi grafikler, dağılım grafikleri ve ısı haritalarını yorumla — ana içgörüyü hızlı ve doğru biçimde çıkar.' },
        { n: '02', topic: 'Açıklayıcı İstatistik', detail: 'Ortalama, medyan, mod, aralık ve aykırı değerlerle çalış — her birinin ne söylediğini ve ne zaman yanıltıcı olduğunu anla.' },
        { n: '03', topic: 'Veri Kalitesi ve Hatalar', detail: 'Bir veri kümesindeki hatalı satırı tespit et, eksik değerleri belirle ve veri kalitesi sorunlarının etkisini değerlendir.' },
        { n: '04', topic: 'Elektronik Tablo Mantığı', detail: 'EĞER işlevleri, DÜŞEYARA ve ETOPLA formüllerinin mantığını izle — hangi çıktıyı ürettiklerini tahmin et.' },
        { n: '05', topic: 'SQL Temelleri', detail: 'WHERE, GROUP BY ve JOIN içeren SELECT sorgularını oku ve yorumla — bir sorgunun hangi veriyi döndürdüğünü belirle.' },
        { n: '06', topic: 'Veri Etiği ve Gizlilik', detail: "GDPR ilkelerini uygula, izin ve anonimleştirme sorunlarını belirle ve haksız önyargı oluşturan veri kümelerini tespit et." },
        { n: '07', topic: 'Görselleştirme Tasarımı', detail: 'Belirli bir veri kümesi ve iletişim hedefi için doğru grafik türünü seç — neden diğerlerinin yanıltıcı olacağını açıkla.' },
        { n: '08', topic: 'İstatistiksel Çıkarım', detail: 'Korelasyonu nedensellikten ayırt et, karıştırıcı değişkenleri belirle ve bir çalışmadan çıkarılan sonuçları değerlendir.' },
        { n: '09', topic: 'Veriden İş İçgörüsü', detail: 'Bir veri kümesi özetinden temel iş bulgusunu belirle ve bir tavsiyeye dönüştür.' },
        { n: '10', topic: 'Veri Anlatımı', detail: 'Bir veri anlatısı yapılandır — neyle başlayacağını, neyi çıkaracağını ve hikayeyi en iyi anlatan görselleştirmeyi seç.' },
      ],
    },
    roles: {
      heading: 'Veri Analitiği stajının götürdüğü yerler.',
      intro: 'Veri okuryazarlığı modern ekonominin en aktarılabilir becerisidir. Veri Analitiği alanı adaylarımızın peşinden gittiği pozisyonlar — sektör fark etmeksizin:',
      list: [
        { title: 'Junior Veri Analisti', skills: 'SQL, Excel, temel Python, veri temizleme, gösterge paneli oluşturma, paydaş raporlama', salary: '£28k–£45k' },
        { title: 'İş Zekası Analisti', skills: 'Power BI, Tableau, veri modelleme, KPI takibi, yönetici gösterge panelleri', salary: '£32k–£52k' },
        { title: 'Pazar Araştırma Analisti', skills: 'Anket tasarımı, veri toplama, segmentasyon, rekabetçi karşılaştırma', salary: '£26k–£40k' },
        { title: 'Raporlama Analisti', skills: 'Otomatik raporlama, Excel/Google Sheets, veri uzlaştırma, SLA takibi', salary: '£24k–£38k' },
        { title: 'Veri Kalite Analisti', skills: 'Veri doğrulama, anomali tespiti, ana veri yönetimi, dokümantasyon', salary: '£26k–£42k' },
        { title: 'Lisans Veri Bilimci (kariyer yolu)', skills: 'İstatistiksel modelleme, Python/R, ML hattı, deney tasarımı', salary: '£40k–£70k' },
      ],
    },
    whoFor: {
      heading: 'Veri Analitiği alanı kimler için.',
      intro: '"Bu veri bize gerçekte ne söylüyor?" diye soran biri olman gerekiyor — matematikçi olman değil. Bu senin doğal içgüdünseyse, bu alan rekabet avantajındır.',
      profiles: [
        { title: 'Sayılara meraklı öğrenciler', body: 'Bilgide doğal olarak örüntü arıyorsun. Excel\'i temel özelliklerinin ötesinde kullandın, bir makaledeki istatistiğin tutarsız olduğunu fark ediyorsun ve "bunu nasıl biliyorlar?" diye soruyorsun. Bu değerlendirme o içgüdüyü doğrulanmış bir puanla onaylıyor.' },
        { title: 'Matematik veya Fen Bilimleri öğrencisi', body: 'Matematik, İstatistik, Fizik veya Biyoloji\'nde güçsün ve bu becerileri iş bağlamında uygulayan bir kariyer yolu arıyorsun. Veri analitiği tam bu köprü — ve işverenler gerçek dünya maruziyetine sahip analitik öğrencileri aktif olarak arıyor.' },
        { title: 'Elektronik tablo uzmanları', body: "Google Sheets veya Excel'i ciddiye aldın — modeller oluşturuyor, verileri takip ediyor, bir proje veya girişim için grafikler oluşturuyorsun. Değerlendirme tam olarak bu pratik veri içgüdülerini ödüllendirmek üzere tasarlandı." },
      ],
    },
    phases: {
      heading: '34 sorunun tamamı.',
      intro: 'Uyarlanabilir motor ilerledikçe seviyeni öğrenir, böylece her soru seni doğru biçimde zorlar — kolay soruları tekrarlamaz.',
      rows: [
        { phase: 'Genel Yetenek', q: 10, measure: 'Sözel muhakeme, sayısal muhakeme, mantıksal çıkarım' },
        { phase: 'Veri Analitiği Alanı', q: 10, measure: 'Grafikler, istatistik, SQL, görselleştirme, veri etiği' },
        { phase: 'İş Yeri Becerileri', q: 8, measure: 'Durumsal yargı, paydaş iletişimi, baskı altında doğruluk' },
        { phase: 'İlgi Profili', q: 6, measure: 'Alan uyumu, tercih edilen veri araçları, çalışma stili' },
      ],
    },
    faq: {
      heading: 'Sıkça sorulan sorular.',
      list: [
        { q: 'Veri Analitiği alanını almak için Python veya SQL bilmem gerekiyor mu?', a: "Düşündüğün seviyede değil. SQL soruları sorguları okuyup yorumlamayı ister — sıfırdan yazmayı değil. Python alan bölümünde yer almıyor. Excel'i ciddiye aldıysan, Google Sheets formülleriyle çalıştıysan veya okulda herhangi bir veri çalışması yaptıysan iyi hazırlanmışsın demektir." },
        { q: "İngiltere'de öğrenci veri stajyeri alan şirketler hangileridir?", a: "Veri rolleri her sektörde mevcuttur — Tesco ve ASOS gibi perakendeciler, HSBC ve Barclays gibi bankalar, NHS güvenleri, HMRC ve teknoloji şirketleri, öğrenciler için veri staj programları yürütüyor. Birçok KOBİ de proje bazlı çalışmalar için öğrenci veri stajyeri alıyor. Veri okuryazarı adayların azlığı, kanıtlanmış becerilere sahip lise öğrencilerinin bile öne çıkmasını sağlıyor." },
        { q: 'Veri analitiği sadece Excel kullanmaktan nasıl farklıdır?', a: "Excel bir araçtır — veri analitiği bir düşünme biçimidir. Alan, bir veri kümesinden doğru soruyu sorma, hataları tespit etme, doğru görselleştirmeyi seçme ve verinin gerçekte ne anlama geldiğini iletme yeteneğini test eder. Bu beceriler Excel, Python, Power BI veya başka herhangi bir araç kullansan da geçerlidir." },
        { q: 'Hazırlık raporum Veri Bilimi veya İstatistik derecesine girmeme yardımcı olur mu?', a: "Matematik, İstatistik ve Veri Bilimi programları, giderek daha fazla sınav sonuçlarının ötesinde analitik düşünce kanıtı arıyor. Güçlü veri muhakemesi ve istatistiksel çıkarım becerileri gösteren doğrulanmış bir değerlendirme puanı, UCAS başvuruna referans gösterebileceğin somut bir kanıt noktası sağlar." },
        { q: 'Veri Analitiği ile Teknoloji alanı arasındaki fark nedir?', a: "Veri Analitiği, yapılandırılmış veriden içgörüleri yorumlamaya, görselleştirmeye ve iletmeye odaklanır — sektörün analitik ve iş zekası tarafına daha yakın. Teknoloji, kodlama mantığı, yazılım geliştirme, siber güvenlik ve sistem tasarımına odaklanır. Her ikisine de çekiliyorsan, ideal gününü açıklayan birini seç: veri kümeleri ve gösterge panelleriyle mi çalışmak, yoksa yazılım ve sistemler mi inşa etmek?" },
      ],
    },
    otherTracks: {
      heading: 'Diğer staj alanları',
      list: [
        { href: '/tr/teknoloji',              label: 'Teknoloji',         desc: 'Kodlama, algoritmalar, siber güvenlik' },
        { href: '/tr/is-dunyasi',          label: 'İş Dünyası',        desc: 'Strateji, finans, operasyon' },
        { href: '/tr/dijital-pazarlama', label: 'Dijital Pazarlama', desc: 'SEO, sosyal medya, kampanyalar' },
      ],
    },
    blog: { heading: 'Daha fazla okuma' },
    finalCta: {
      h2: 'Veri stajın burada başlıyor.',
      p: 'Ücretsiz 34 soruluk değerlendirme. Yapay zeka hazırlık raporu. Gerçek yerleştirme fırsatları. Başlamak için CV gerekmez.',
      btn: 'Ücretsiz başvur — Veri Analitiği alanı →',
      footnote: '14–18 yaş tüm öğrenciler için ücretsiz · 35 dakika · Anında sonuç',
    },
    breadcrumb: { home: 'Ana Sayfa', track: 'Veri Analitiği Alanı' },
  },

  'digital-marketing': {
    meta: {
      title: 'Dijital Pazarlama Staj Değerlendirmesi — Pazarlama Hazırlık Raporu Al',
      description: '14–18 yaş arası öğrenciler için ücretsiz yapay zeka destekli dijital pazarlama staj değerlendirmesi. SEO, sosyal medya stratejisi, içerik pazarlaması, analitik ve kampanya planlaması. Gerçek bir pazarlama stajı bul.',
    },
    hero: {
      badge: 'Dijital Pazarlama Alanı',
      h1: 'Kitle büyüterek sonuç ürettiğini kanıtla.',
      p: "İngiltere dijital reklam harcaması 2023'te 29,6 milyar sterline ulaştı — ve bu paranın her bir kururuşu kanalları, kitleleri ve ölçümü anlayan insanlara ihtiyaç duyuyor. Ücretsiz değerlendirmemiz bunu kanıtlıyor, işverenlerinin seni tanımadan önce üzerinde hareket edebileceği bir raporla.",
      cta: 'Ücretsiz başvur — Dijital Pazarlama alanı →',
      blogLink: 'Staj rehberlerini oku',
      trust: ['✓ Öğrenciler için ücretsiz', '✓ 14–18 yaş', '✓ 35 dakika', '✓ Yapay zeka puanlaması', '✓ Kişiselleştirilmiş hazırlık raporu'],
    },
    stats: [
      { stat: '£29,6Mrd', label: "İngiltere'de 2023 dijital reklam harcaması (IAB)" },
      { stat: '%32', label: '2021–2024 yılları arasında dijital pazarlama rolü büyümesi' },
      { stat: '%77', label: 'Dijital becerili aday bulamayan pazarlama işe alım yetkilisi oranı' },
      { stat: 'İlk 5', label: 'En hızlı büyüyen iş unvanı: Sosyal Medya Yöneticisi (LinkedIn UK)' },
    ],
    domain: {
      heading: 'Dijital Pazarlama alanı ne ölçer.',
      intro: '10 senaryo bazlı soru — organik aramadan ücretli sosyal medyaya, e-postaya kadar her önemli dijital kanalı kapsar. Her soru seni gerçek bir pazarlama kararının içine koyar.',
      topics: [
        { n: '01', topic: 'SEO Temelleri', detail: "Sayfanın arama sıralamasını en çok etkileyen sayfa içi ve teknik faktörleri belirle — ve hangi yaygın varsayımların yanlış olduğunu." },
        { n: '02', topic: 'Sosyal Medya Stratejisi', detail: 'Belirli bir hedef kitle, marka ve kampanya hedefi için doğru platform ve içerik formatını seç.' },
        { n: '03', topic: 'İçerik Pazarlaması', detail: 'Bir içerik parçasının belirtilen hedefine hizmet edip etmeyeceğini değerlendir — ve neden etmeyeceğini teşhis et.' },
        { n: '04', topic: 'E-posta Pazarlaması', detail: 'Açılma oranlarını, tıklama oranlarını ve abonelik iptal trendlerini yorumla — metriklerin kampanya sağlığı hakkında ne işaret ettiğini belirle.' },
        { n: '05', topic: 'Ücretli Reklamcılık', detail: "Tıklama başına maliyet, dönüşüm oranı, ROAS ve kitle hedeflemeyi anla — bir harcama tahsisi kararı ver." },
        { n: '06', topic: 'Analitik ve KPI\'lar', detail: 'Bir Google Analytics gösterge panelini oku ve ana içgörüyü belirle — oturumlar vs. kullanıcılar, hemen çıkma oranı, hedef tamamlamaları.' },
        { n: '07', topic: 'Marka Tutarlılığı ve Mesajlaşma', detail: 'Hangi reklam metni, görsel veya gönderinin marka yönergelerini ihlal ettiğini belirle — marka sesiyle uyumlu hale getirmek için yeniden çerçevele.' },
        { n: '08', topic: 'Metin Yazarlığı ve Ses Tonu', detail: 'Zayıf bir başlık veya CTA\'yı, tanımlanan hedef kitle ve kanal için daha etkileyici hale getirmek üzere yeniden yaz.' },
        { n: '09', topic: 'Kampanya Planlaması', detail: "Bir ürün lansman kampanyasını kanallar arasında sırala, bütçeyi aşamalar arasında tahsis et ve bağımlılıkları belirle." },
        { n: '10', topic: 'Dijital Etik ve Uyumluluk', detail: 'GDPR, ASA yönergelerini ve influencer ifşa kurallarını uygula — hangi içeriğin veya veri pratiğinin uyumsuz olduğunu belirle.' },
      ],
    },
    roles: {
      heading: 'Dijital Pazarlama stajının götürdüğü yerler.',
      intro: 'Dijital pazarlama, net uzmanlaşma yollarına sahip geniş bir alandır. Birden fazla kanalı kapsayan bir stajla başla — sonra en iyisi olduğun kanalda uzmanlaş.',
      list: [
        { title: 'Sosyal Medya Yöneticisi', skills: 'Platform stratejisi, içerik programlama, topluluk yönetimi, ücretli sosyal, analitik', salary: '£25k–£42k' },
        { title: 'İçerik Oluşturucu / Yazar', skills: 'SEO metin yazarlığı, blog stratejisi, e-posta bültenleri, video senaryoları, marka sesi', salary: '£22k–£38k' },
        { title: 'SEO Analisti', skills: "Anahtar kelime araştırması, sayfa içi optimizasyon, teknik SEO, bağlantı kurma, GA4/GSC", salary: '£26k–£45k' },
        { title: 'Dijital Pazarlama Uzmanı', skills: 'Çok kanallı kampanyalar, performans takibi, A/B testi, CRM entegrasyonu', salary: '£24k–£38k' },
        { title: 'PPC / Ücretli Medya Analisti', skills: 'Google Ads, Meta Ads, kitle hedefleme, teklif stratejisi, ROAS optimizasyonu', salary: '£28k–£48k' },
        { title: 'E-posta Pazarlama Koordinatörü', skills: 'Segmentasyon, otomatik akışlar, konu satırı A/B testi, teslim edilebilirlik, Klaviyo', salary: '£24k–£36k' },
      ],
    },
    whoFor: {
      heading: 'Dijital Pazarlama alanı kimler için.',
      intro: 'En iyi dijital pazarlamacılar yaratıcı içgüdüyü analitik düşünceyle birleştirir. Her ikisine de çekiliyorsan, bu alan tam olarak bu kombinasyonu ödüllendirir.',
      profiles: [
        { title: 'İçerik odaklı yaratıcılar', body: "Bir YouTube kanalı kurdun, TikTok hesabı yürüttün, blog yazdın veya bir okul ya da topluluk projesi için içerik oluşturdun. İnsanların neden durup meşgul olduğunu sezgisel olarak anlıyorsun. Bu değerlendirme o yaratıcı içgüdüye ticari bir puan verir." },
        { title: 'Analitik düşünceli pazarlamacılar', body: "Pazarlamanın arkasındaki veriye ilgi duyuyorsun — neden bazı kampanyalar diğerlerini geçiyor, reklam harcamaları gelire nasıl çevrilir, etkileşim metrikleri gerçekte ne anlama geliyor. Yalnızca üretmek değil, sonuçları ölçmek istiyorsun." },
        { title: 'Çok yönlü öğrenciler', body: "İngilizce, Medya Araştırmaları veya İşletme'de güçsün ve yazma, strateji ve teknolojiyi harmanlayan bir kariyer istiyorsun. Dijital pazarlama, üçünün de eşit derecede önemli olduğu — ve genişliğin ödüllendirildiği, cezalandırılmadığı — nadir alanlardan biridir." },
      ],
    },
    phases: {
      heading: '34 sorunun tamamı.',
      intro: 'Uyarlanabilir zorluk, değerlendirmenin seviyeni gerçek zamanlı olarak kalibre etmesi anlamına gelir — hazırlık raporun gerçek performansı yansıtır, şansı değil.',
      rows: [
        { phase: 'Genel Yetenek', q: 10, measure: 'Sözel muhakeme, sayısal muhakeme, okuma anlayışı' },
        { phase: 'Dijital Pazarlama Alanı', q: 10, measure: 'SEO, sosyal medya, içerik, analitik, ücretli medya, etik' },
        { phase: 'İş Yeri Becerileri', q: 8, measure: 'Durumsal yargı, müşteri iletişimi, son teslim tarihi yönetimi' },
        { phase: 'İlgi Profili', q: 6, measure: 'Kanal tercihi, yaratıcı vs. analitik denge, rol uygunluğu' },
      ],
    },
    faq: {
      heading: 'Sıkça sorulan sorular.',
      list: [
        { q: 'Bu alanda iyi olmak için büyük bir sosyal medya takipçi kitlesine ihtiyaç var mı?', a: "Kesinlikle hayır. Değerlendirme dijital pazarlama hakkında stratejik düşünceyi ölçer — neden belirli kararların işe yaradığını, hangi metriklerin başarıyı işaret ettiğini, bir kampanyanın nasıl planlanacağını. Kendi sosyal hesapların sezgi geliştirmeye yardımcı olur, ancak 100k takipçi içerik stratejisinin neden işe yaradığını anlamanın yerini tutmaz." },
        { q: "14–18 yaş öğrencilerine dijital pazarlama stajı teklif eden şirket türleri hangileridir?", a: "Neredeyse her işletmenin artık dijital pazarlama ihtiyacı var — e-ticaret markaları, ajanslar, SaaS şirketleri, perakendeciler, hayır kurumları ve yerel işletmeler öğrenci iş deneyimi yürütüyor. Dijital pazarlama ajansları genellikle belirli proje haftaları için öğrenci alır, bu da sana aynı anda birden fazla müşteri sektörüne maruz kalma fırsatı sunar." },
        { q: "Değerlendirme Google Search Console kullanmadıysam SEO'yu nasıl test eder?", a: "SEO soruları kavramsal — arama sıralamalarını neyin etkilediğini anlayıp anlamadığını test eder, belirli bir aracı çalıştırıp çalıştıramayacağını değil. Bir web sitesinin diğerinin üzerinde neden sıralandığını merak ettiysen veya merakla SEO hakkında okuduysan, temel bilgiye sahipsin demektir. Araca özgü bilgi işte öğrenilir." },
        { q: 'Hazırlık raporum pazarlama derecesi veya çıraklık başvurusuna yardımcı olur mu?', a: "Her ikisine de. Pazarlama ve medya dereceleri, yalnızca tahmini notların ötesinde giderek artan biçimde gösterilmiş dijital okuryazarlığa değer veriyor. Ajanslar ve şirket içi pazarlama ekiplerindeki derece çıraklıkları özellikle uygulamalı ticari farkındalık gösterebilen adayları arıyor — Eduentry raporu tam olarak bu kanıtı sağlar." },
        { q: 'Yazarlık ve yaratıcılıktan keyif alıyorsam Dijital Pazarlama doğru alan mı?', a: "Evet — ancak ticari bir bakış açısıyla. En iyi dijital pazarlamacılar yaratıcı içgüdüyü analitik titizlikle birleştirir. Alan her ikisini de test eder: metin yazarlığı ve ses tonu soruları yaratıcı yargıyı ödüllendirir, analitik ve KPI soruları ise yaratıcılığın işe yarayıp yaramadığını ölçme yeteneğini. Yalnızca birinde güçsense, rapor tam olarak nerede gelişmen gerektiğini gösterir." },
      ],
    },
    otherTracks: {
      heading: 'Diğer staj alanları',
      list: [
        { href: '/tr/teknoloji',           label: 'Teknoloji',      desc: 'Kodlama, algoritmalar, siber güvenlik' },
        { href: '/tr/is-dunyasi',       label: 'İş Dünyası',     desc: 'Strateji, finans, operasyon' },
        { href: '/tr/veri-analitigi', label: 'Veri Analitiği', desc: 'Veri, istatistik, içgörüler' },
      ],
    },
    blog: { heading: 'Daha fazla okuma' },
    finalCta: {
      h2: 'Dijital pazarlama stajın burada başlıyor.',
      p: 'Ücretsiz 34 soruluk değerlendirme. Yapay zeka hazırlık raporu. Gerçek yerleştirme fırsatları. Başlamak için CV gerekmez.',
      btn: 'Ücretsiz başvur — Dijital Pazarlama alanı →',
      footnote: '14–18 yaş tüm öğrenciler için ücretsiz · 35 dakika · Anında sonuç',
    },
    breadcrumb: { home: 'Ana Sayfa', track: 'Dijital Pazarlama Alanı' },
  },
}

// ─── SPANISH ────────────────────────────────────────────────────────────────

const ES: Record<TrackId, TrackData> = {
  'tech': {
    meta: {
      title: 'Evaluación de prácticas en Tecnología — Obtén tu informe de preparación tecnológica',
      description: 'Evaluación de prácticas en tecnología gratuita con IA para estudiantes de 14 a 18 años. Lógica de programación, algoritmos, ciberseguridad, UX y habilidades de software. Consigue unas prácticas tecnológicas reales.',
    },
    hero: {
      badge: 'Área Tecnología',
      h1: 'Demuestra que estás listo para unas prácticas tecnológicas.',
      p: 'El sector tecnológico del Reino Unido emplea a 1,7 millones de personas y los empleadores necesitan desesperadamente talento junior en quien confiar. Nuestra evaluación gratuita de 34 preguntas te da una puntuación de preparación medible y un informe de IA personalizado para respaldar cada solicitud.',
      cta: 'Solicitar gratis — área Tecnología →',
      blogLink: 'Leer guías de prácticas',
      trust: ['✓ Gratuita para estudiantes', '✓ 14–18 años', '✓ 35 minutos', '✓ Puntuación con IA', '✓ Informe de preparación personalizado'],
    },
    stats: [
      { stat: '1,7M', label: 'empleos tecnológicos en el Reino Unido' },
      { stat: '72%', label: 'de empleadores reportan escasez de habilidades' },
      { stat: '£45k+', label: 'salario medio de desarrollador de software' },
      { stat: '10×', label: 'años consecutivos de crecimiento en contratación tecnológica' },
    ],
    domain: {
      heading: 'Qué evalúa el área de Tecnología.',
      intro: '10 preguntas basadas en escenarios que cubren los temas fundamentales con los que se enfrenta cualquier becario de tecnología en su primer día.',
      topics: [
        { n: '01', topic: 'Algoritmos y pensamiento computacional', detail: 'Traza rutas de código, predice la salida, evalúa la eficiencia de distintos enfoques.' },
        { n: '02', topic: 'Tipos de datos y variables', detail: 'Comprende cómo se comportan los enteros, cadenas, booleanos y arrays en escenarios reales.' },
        { n: '03', topic: 'Bucles y condicionales', detail: 'Lee bucles for/while y ramas if/else — predice qué salida produce el código.' },
        { n: '04', topic: 'Depuración y análisis de errores', detail: 'Identifica el error lógico o de sintaxis en un fragmento de código breve.' },
        { n: '05', topic: 'Ciclo de vida del desarrollo de software', detail: 'Asigna tareas (historias de usuario, QA, despliegue) a la fase correcta del SDLC.' },
        { n: '06', topic: 'Fundamentos de ciberseguridad', detail: 'Identifica patrones de phishing, inyección SQL y otras amenazas comunes.' },
        { n: '07', topic: 'Fundamentos de redes', detail: 'Comprende DNS, HTTP, direcciones IP y cómo viajan los datos por internet.' },
        { n: '08', topic: 'UX y diseño de interfaces', detail: 'Evalúa decisiones en un mockup — qué diseño sirve mejor al objetivo del usuario.' },
        { n: '09', topic: 'Selección de herramientas tecnológicas', detail: 'Elige la herramienta correcta (base de datos, framework, servicio) para un problema descrito.' },
        { n: '10', topic: 'Ética tecnológica y ciudadanía digital', detail: 'Navega situaciones de GDPR, sesgo de IA, requisitos de accesibilidad y bienestar digital.' },
      ],
    },
    roles: {
      heading: 'A dónde lleva una práctica en Tecnología.',
      intro: 'Tus primeras prácticas tecnológicas son una plataforma de lanzamiento. Estos son los roles que consiguen nuestros mejores candidatos del área Tecnología:',
      list: [
        { title: 'Desarrollador de software junior', skills: 'Python, JavaScript, control de versiones, revisión de código', salary: '£28k–£45k' },
        { title: 'Analista de soporte informático', skills: 'Resolución de problemas, redes, sistemas de tickets, soporte a usuarios', salary: '£22k–£32k' },
        { title: 'Analista de ciberseguridad', skills: 'Detección de amenazas, herramientas SIEM, análisis de vulnerabilidades, respuesta a incidentes', salary: '£35k–£60k' },
        { title: 'Diseñador UX / UI', skills: 'Figma, investigación de usuarios, wireframing, accesibilidad, sistemas de diseño', salary: '£30k–£55k' },
        { title: 'Ingeniero de datos', skills: 'SQL, pipelines ETL, infraestructura en la nube, modelado de datos', salary: '£40k–£70k' },
        { title: 'Ingeniero QA / Tester', skills: 'Automatización de pruebas, informes de errores, Selenium, pruebas de regresión', salary: '£28k–£48k' },
      ],
    },
    whoFor: {
      heading: 'Para quién es el área Tecnología.',
      intro: 'No necesitas un CV lleno de competiciones. Necesitas demostrar que puedes pensar como un tecnólogo — y eso es exactamente lo que mide esta evaluación.',
      profiles: [
        { title: 'El programador autodidacta', body: 'Has construido cosas por tu cuenta — Scratch, tutoriales de Python, mods de juegos, sitios web. Nunca has tenido unas prácticas formales pero sabes resolver problemas con tecnología. Esta evaluación le da a esa habilidad autodidacta una puntuación creíble y verificable.' },
        { title: 'El estudiante de GCSE Computer Science', body: 'Estás estudiando (o a punto de estudiar) Informática en GCSE y quieres experiencia laboral real para complementar la teoría. Las preguntas del dominio están planteadas al mismo nivel conceptual — basadas en escenarios, no en memorización.' },
        { title: 'El resolvedor de problemas curioso', body: 'No has estudiado informática formalmente pero eres naturalmente analítico — disfrutas los puzzles, la lógica, descubrir cómo funcionan las cosas. Las fases de aptitud general fueron diseñadas pensando en ti. La curiosidad y el razonamiento importan aquí.' },
      ],
    },
    phases: {
      heading: 'Las 34 preguntas, desglosadas.',
      intro: 'Nuestra evaluación adaptativa ajusta la dificultad de las preguntas en tiempo real. Serás desafiado de forma adecuada en cada paso, y tu informe reflejará exactamente dónde destacaste.',
      rows: [
        { phase: 'Aptitud general', q: 10, measure: 'Razonamiento verbal, razonamiento numérico, reconocimiento de patrones' },
        { phase: 'Dominio Tecnología', q: 10, measure: 'Lógica de código, ciberseguridad, UX, redes, ética' },
        { phase: 'Habilidades profesionales', q: 8, measure: 'Juicio situacional, comunicación, trabajo en equipo bajo presión' },
        { phase: 'Perfil de intereses', q: 6, measure: 'Idoneidad para el área, motivación, estilo de aprendizaje, encaje de rol' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes.',
      list: [
        { q: '¿Necesito saber programar para hacer el área Tecnología?', a: 'No — la evaluación mide el pensamiento computacional y el razonamiento lógico, no la sintaxis de programación. Los estudiantes sin experiencia en programación obtienen regularmente puntuaciones en el nivel más alto. Dicho esto, si ya has escrito código antes, las preguntas del dominio te resultarán más familiares.' },
        { q: '¿Qué tipos de empresas tecnológicas ofrecen prácticas a estudiantes de 14 a 18 años?', a: 'Miles de empresas del Reino Unido tienen programas estructurados de experiencia laboral y prácticas para estudiantes de instituto — desde empresas globales como Google, Microsoft y Amazon hasta programas financiados por start-ups y scale-ups tecnológicas locales. Muchas buscan específicamente estudiantes que puedan respaldar su solicitud con datos de evaluación.' },
        { q: '¿Cómo se compara el área Tecnología con el GCSE de Informática?', a: 'Las preguntas del dominio se basan en conceptos similares (algoritmos, datos, redes) pero están planteadas en forma de escenarios, no como examen. Aplicas el concepto a una situación laboral real. Los estudiantes que no han estudiado GCSE CS también pueden rendir bien — los escenarios están diseñados para ser accesibles.' },
        { q: '¿Mi informe de preparación de Eduentry me ayudará con una solicitud universitaria de Informática?', a: 'La evidencia de experiencia laboral estructurada y habilidades medibles es cada vez más valorada por los equipos de admisión de Informática, especialmente en universidades post-92 y del Russell Group. Tu informe de preparación te da un artefacto concreto al que hacer referencia en la carta de presentación y las entrevistas.' },
        { q: '¿Puedo repetir la evaluación si quiero una mejor puntuación?', a: 'Cada cuenta recibe una evaluación completa. Esto garantiza que tu informe refleje el rendimiento real, que es lo que valoran los empleadores. Si no estás listo, nuestro blog tiene guías de preparación específicas para el área Tecnología.' },
      ],
    },
    otherTracks: {
      heading: 'Otras áreas de prácticas',
      list: [
        { href: '/es/empresa',          label: 'Empresa',           desc: 'Estrategia, finanzas, operaciones' },
        { href: '/es/analisis-de-datos',    label: 'Análisis de datos', desc: 'Datos, estadística, insights' },
        { href: '/es/marketing-digital', label: 'Marketing digital', desc: 'SEO, redes sociales, campañas' },
      ],
    },
    blog: { heading: 'Lecturas recomendadas' },
    finalCta: {
      h2: 'Tus prácticas tecnológicas empiezan aquí.',
      p: 'Evaluación gratuita de 34 preguntas. Informe de preparación con IA. Oportunidades de colocación reales. No necesitas CV para empezar.',
      btn: 'Solicitar gratis — área Tecnología →',
      footnote: 'Gratuita para todos los estudiantes de 14 a 18 años · 35 minutos · Resultados instantáneos',
    },
    breadcrumb: { home: 'Inicio', track: 'Área Tecnología' },
  },

  'business': {
    meta: {
      title: 'Evaluación de prácticas en Empresa — Obtén tu informe de preparación empresarial',
      description: 'Evaluación de prácticas en empresa gratuita con IA para estudiantes de 14 a 18 años. Análisis de mercado, alfabetización financiera, razonamiento en casos de negocio y estrategia. Consigue unas prácticas empresariales reales.',
    },
    hero: {
      badge: 'Área Empresa',
      h1: 'Demuestra que estás listo comercialmente.',
      p: 'Administración de Empresas es la carrera universitaria más popular del Reino Unido — lo que hace que la competencia por las prácticas sea feroz. Nuestra evaluación mide la conciencia comercial y el pensamiento analítico que diferencia a los candidatos sólidos, y te da un informe creíble para demostrarlo.',
      cta: 'Solicitar gratis — área Empresa →',
      blogLink: 'Leer guías de prácticas',
      trust: ['✓ Gratuita para estudiantes', '✓ 14–18 años', '✓ 35 minutos', '✓ Puntuación con IA', '✓ Informe de preparación personalizado'],
    },
    stats: [
      { stat: '68%', label: 'de empleadores valoran la experiencia laboral como su principal factor de contratación (CBI)' },
      { stat: '100%', label: 'de empresas del FTSE 100 tienen programas formales para estudiantes' },
      { stat: '85k', label: 'títulos de empresa concedidos en el Reino Unido cada año — más que cualquier otra materia' },
      { stat: '£38k', label: 'salario inicial medio de analista de negocio en Londres' },
    ],
    domain: {
      heading: 'Qué evalúa el área de Empresa.',
      intro: '10 preguntas basadas en escenarios que cubren el razonamiento comercial, la alfabetización financiera y el pensamiento estratégico que cualquier becario de empresa necesita desde su primer día.',
      topics: [
        { n: '01', topic: 'Análisis de mercado', detail: 'Interpreta datos de tamaño de mercado, tasas de crecimiento y panoramas competitivos para extraer conclusiones empresariales.' },
        { n: '02', topic: 'Alfabetización financiera', detail: 'Lee una cuenta de resultados básica, entiende la diferencia entre margen bruto y beneficio neto, e interpreta escenarios de flujo de caja.' },
        { n: '03', topic: 'Razonamiento en casos de negocio', detail: 'Evalúa dos opciones competidoras usando ROI, riesgo y encaje estratégico — elige la mejor recomendación.' },
        { n: '04', topic: 'DAFO y análisis competitivo', detail: 'Identifica fortalezas, debilidades, oportunidades y amenazas a partir de un escenario; detecta ventajas competidoras.' },
        { n: '05', topic: 'Pensamiento sobre clientes y partes interesadas', detail: 'Identifica cuál es el verdadero stakeholder en un escenario y qué resultado le importa más.' },
        { n: '06', topic: 'Operaciones y cadena de suministro', detail: 'Comprende cuellos de botella, gestión de inventario y eficiencia operativa en flujos de proceso sencillos.' },
        { n: '07', topic: 'Comunicación empresarial', detail: 'Elige el canal, tono y formato correctos para comunicarse con distintas audiencias empresariales.' },
        { n: '08', topic: 'Emprendimiento e innovación', detail: 'Evalúa una idea de nuevo producto en cuanto a viabilidad, demanda de mercado y ventaja competitiva.' },
        { n: '09', topic: 'Gestión de riesgos', detail: 'Identifica el riesgo principal en un escenario empresarial y selecciona la mitigación más adecuada.' },
        { n: '10', topic: 'Presentación de conclusiones empresariales', detail: 'Decide cómo estructurar y presentar los hallazgos a partir de un brief — audiencia, formato, mensaje clave.' },
      ],
    },
    roles: {
      heading: 'A dónde lleva una práctica en Empresa.',
      intro: 'Unas prácticas empresariales al inicio de tu carrera académica demuestran madurez comercial. Estos son los roles que persiguen nuestros mejores candidatos del área Empresa:',
      list: [
        { title: 'Analista de negocio', skills: 'Recopilación de requisitos, mapeo de procesos, comunicación con stakeholders, modelado en Excel', salary: '£28k–£42k' },
        { title: 'Analista financiero junior', skills: 'Modelado financiero, análisis de varianzas, previsiones, reporting', salary: '£30k–£48k' },
        { title: 'Coordinador de operaciones', skills: 'Logística, gestión de proveedores, optimización de procesos, programación', salary: '£24k–£35k' },
        { title: 'Analista de estrategia y planificación', skills: 'Investigación de mercado, análisis competitivo, planificación de escenarios, presentaciones', salary: '£32k–£50k' },
        { title: 'Administrativo de RRHH', skills: 'Coordinación de selección, relaciones laborales, cumplimiento de políticas, sistemas HRIS', salary: '£22k–£32k' },
        { title: 'Analista de consultoría de gestión', skills: 'Estructuración de problemas, comunicación con clientes, síntesis de datos, presentaciones', salary: '£38k–£60k' },
      ],
    },
    whoFor: {
      heading: 'Para quién es el área Empresa.',
      intro: 'La conciencia comercial no se enseña en las aulas — se desarrolla prestando atención a cómo funciona el mundo. Si eso te describe, esta área fue hecha para ti.',
      profiles: [
        { title: 'El lector de actualidad', body: 'Lees el Financial Times, BBC Business o The Economist y te encuentras pensando en por qué las empresas toman las decisiones que toman. Ya tienes intuición comercial — esta evaluación le da una puntuación creíble y verificada.' },
        { title: 'El estudiante de Economía o Empresariales', body: "Estás estudiando Economía, Empresariales o Contabilidad en GCSE o A-level y quieres experiencia laboral real para dar contexto a tu conocimiento teórico. Las preguntas del dominio están calibradas para desafiar y recompensar exactamente lo que has estado aprendiendo." },
        { title: 'El estudiante emprendedor', body: 'Has montado una empresa escolar, vendido algo online u organizado eventos. Entiendes lo que significa entregar resultados. Esta evaluación le da a esa experiencia práctica una puntuación medible que los empleadores pueden utilizar.' },
      ],
    },
    phases: {
      heading: 'Las 34 preguntas, desglosadas.',
      intro: 'Nuestro motor adaptativo ajusta la dificultad de las preguntas en tiempo real. El resultado es un informe que refleja con precisión tu techo — no solo tu media.',
      rows: [
        { phase: 'Aptitud general', q: 10, measure: 'Razonamiento verbal, razonamiento numérico, interpretación de datos' },
        { phase: 'Dominio Empresa', q: 10, measure: 'Análisis de mercado, finanzas, estrategia, operaciones' },
        { phase: 'Habilidades profesionales', q: 8, measure: 'Juicio situacional, comunicación profesional, priorización' },
        { phase: 'Perfil de intereses', q: 6, measure: 'Idoneidad para el área, motivación profesional, estilo de trabajo preferido' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes.',
      list: [
        { q: '¿Necesito A-level de Empresariales o Economía para hacer el área Empresa?', a: 'En absoluto. El área Empresa se basa en la conciencia comercial y el razonamiento — habilidades que se desarrollan leyendo las noticias, entendiendo cómo funcionan las empresas y pensando en las decisiones de forma analítica. El A-level de economía ayuda, pero los estudiantes sin él obtienen regularmente puntuaciones en el nivel más alto.' },
        { q: '¿Qué tipos de empresas ofrecen prácticas empresariales a estudiantes de 14 a 18 años?', a: 'Todas las empresas del FTSE 100 tienen programas formales de experiencia laboral y la mayoría tiene vías específicas para estudiantes. Además, firmas de abogados, consultoras, bancos, aseguradoras, retailers y pymes de todos los sectores colocan a estudiantes a través de esquemas estructurados.' },
        { q: '¿Cómo se evalúa la conciencia comercial en la evaluación?', a: "La conciencia comercial se evalúa mediante preguntas basadas en escenarios, no en memorización de hechos. Se te presenta una situación — una empresa ante una decisión, un cambio de mercado, una queja de un cliente — y se te pide que razones a través de ella. Leer un periódico de calidad una vez a la semana es mejor preparación que memorizar vocabulario empresarial." },
        { q: '¿Puedo usar mi informe de Eduentry para solicitar prácticas en una firma financiera o jurídica?', a: 'Sí. Los programas de Spring Insight y las semanas de experiencia laboral en las principales firmas financieras y jurídicas solicitan cada vez más evidencia de preparación evaluada. Tu informe de Eduentry proporciona una medición fiable de terceros de tu aptitud y conocimiento del dominio, complementando tu carta de presentación.' },
        { q: '¿Cuál es la diferencia entre el área Empresa y el área Análisis de datos?', a: "Empresa se centra en estrategia, finanzas, operaciones y pensamiento sobre stakeholders — razonamiento cualitativo con apoyo cuantitativo. Análisis de datos enfatiza la lectura de gráficos, la inferencia estadística y la obtención de insights de conjuntos de datos. Si te atraen ambas, la fase de Perfil de intereses te ayudará a clarificar tu encaje principal." },
      ],
    },
    otherTracks: {
      heading: 'Otras áreas de prácticas',
      list: [
        { href: '/es/tecnologia',              label: 'Tecnología',        desc: 'Programación, algoritmos, ciberseguridad' },
        { href: '/es/analisis-de-datos',    label: 'Análisis de datos', desc: 'Datos, estadística, insights' },
        { href: '/es/marketing-digital', label: 'Marketing digital', desc: 'SEO, redes sociales, campañas' },
      ],
    },
    blog: { heading: 'Lecturas recomendadas' },
    finalCta: {
      h2: 'Tus prácticas empresariales empiezan aquí.',
      p: 'Evaluación gratuita de 34 preguntas. Informe de preparación con IA. Oportunidades de colocación reales. No necesitas CV para empezar.',
      btn: 'Solicitar gratis — área Empresa →',
      footnote: 'Gratuita para todos los estudiantes de 14 a 18 años · 35 minutos · Resultados instantáneos',
    },
    breadcrumb: { home: 'Inicio', track: 'Área Empresa' },
  },

  'data-analytics': {
    meta: {
      title: 'Evaluación de prácticas en Análisis de datos — Obtén tu informe de preparación en datos',
      description: 'Evaluación de prácticas en análisis de datos gratuita con IA para estudiantes de 14 a 18 años. Lectura de gráficos, estadística, razonamiento con hojas de cálculo, fundamentos de SQL y comunicación de datos. Consigue unas prácticas de datos reales.',
    },
    hero: {
      badge: 'Área Análisis de datos',
      h1: 'Demuestra que puedes convertir datos en decisiones.',
      p: 'Los roles de analista de datos crecieron un 40% en el Reino Unido entre 2022 y 2024, pero el 82% de las empresas dice que no encuentra candidatos con las habilidades adecuadas. Nuestra evaluación gratuita mide tu alfabetización en datos, razonamiento estadístico y comunicación de insights, y produce un informe que los empleadores pueden utilizar.',
      cta: 'Solicitar gratis — área Análisis de datos →',
      blogLink: 'Leer guías de prácticas',
      trust: ['✓ Gratuita para estudiantes', '✓ 14–18 años', '✓ 35 minutos', '✓ Puntuación con IA', '✓ Informe de preparación personalizado'],
    },
    stats: [
      { stat: '40%', label: 'crecimiento en roles de analista de datos en el Reino Unido 2022–2024' },
      { stat: '2,7M', label: 'empleos de datos previstos en el Reino Unido para 2028' },
      { stat: '82%', label: 'de empresas no encuentran candidatos con alfabetización en datos' },
      { stat: '£55k', label: 'salario medio de analista de datos sénior en Londres' },
    ],
    domain: {
      heading: 'Qué evalúa el área de Análisis de datos.',
      intro: '10 preguntas basadas en escenarios que cubren cada habilidad que usa un analista de datos junior en su primera semana — desde leer gráficos hasta escribir lógica SQL o comunicar un hallazgo a un stakeholder no técnico.',
      topics: [
        { n: '01', topic: 'Lectura de gráficos y diagramas', detail: 'Interpreta gráficos de barras, líneas, dispersión y mapas de calor — extrae el insight clave de forma rápida y precisa.' },
        { n: '02', topic: 'Estadística descriptiva', detail: 'Trabaja con media, mediana, moda, rango y valores atípicos — comprende qué dice cada uno y cuándo engaña.' },
        { n: '03', topic: 'Calidad de datos y errores', detail: 'Detecta la fila incorrecta en un conjunto de datos, identifica valores faltantes y evalúa el impacto de los problemas de calidad de los datos.' },
        { n: '04', topic: 'Razonamiento con hojas de cálculo', detail: 'Sigue la lógica de funciones SI, BUSCARV y SUMAR.SI — predice qué resultado producen.' },
        { n: '05', topic: 'Fundamentos de SQL', detail: 'Lee e interpreta consultas SELECT con WHERE, GROUP BY y JOIN — determina qué datos devuelve una consulta.' },
        { n: '06', topic: 'Ética de datos y privacidad', detail: 'Aplica principios del GDPR, identifica problemas de consentimiento y anonimización, y detecta conjuntos de datos que crean sesgo injusto.' },
        { n: '07', topic: 'Diseño de visualizaciones', detail: 'Elige el tipo de gráfico correcto para un conjunto de datos y objetivo de comunicación dados, y explica por qué los otros inducirían a error.' },
        { n: '08', topic: 'Inferencia estadística', detail: 'Distingue correlación de causalidad, identifica variables de confusión y evalúa las conclusiones de un estudio.' },
        { n: '09', topic: 'Insight empresarial a partir de datos', detail: 'A partir de un resumen de datos, identifica el hallazgo empresarial clave y tradúcelo en una recomendación.' },
        { n: '10', topic: 'Narrativa con datos', detail: 'Estructura una historia con datos — elige con qué empezar, qué eliminar y qué visualización cuenta mejor la historia.' },
      ],
    },
    roles: {
      heading: 'A dónde lleva una práctica en Análisis de datos.',
      intro: 'La alfabetización en datos es la habilidad más transferible de la economía moderna. Estos son los roles que persiguen nuestros mejores candidatos del área Análisis de datos — en todos los sectores:',
      list: [
        { title: 'Analista de datos junior', skills: 'SQL, Excel, Python básico, limpieza de datos, creación de dashboards, reporting a stakeholders', salary: '£28k–£45k' },
        { title: 'Analista de inteligencia empresarial', skills: 'Power BI, Tableau, modelado de datos, seguimiento de KPIs, dashboards para dirección', salary: '£32k–£52k' },
        { title: 'Analista de investigación de mercado', skills: 'Diseño de encuestas, recopilación de datos, segmentación, benchmarking competitivo', salary: '£26k–£40k' },
        { title: 'Analista de reporting', skills: 'Reporting automatizado, Excel/Google Sheets, conciliación de datos, seguimiento de SLAs', salary: '£24k–£38k' },
        { title: 'Analista de calidad de datos', skills: 'Validación de datos, detección de anomalías, gestión de datos maestros, documentación', salary: '£26k–£42k' },
        { title: 'Científico de datos de licenciatura (trayectoria)', skills: 'Modelado estadístico, Python/R, pipelines de ML, diseño de experimentos', salary: '£40k–£70k' },
      ],
    },
    whoFor: {
      heading: 'Para quién es el área Análisis de datos.',
      intro: 'No necesitas ser matemático — necesitas ser alguien que pregunta "¿qué nos dicen realmente estos datos?". Si ese es tu instinto natural, esta área es tu ventaja competitiva.',
      profiles: [
        { title: 'El estudiante curioso con los números', body: "Buscas naturalmente patrones en la información. Has usado Excel más allá de lo básico, notas cuando una estadística en un artículo no cuadra, y te encuentras preguntando '¿cómo saben eso?'. Esta evaluación valida ese instinto con una puntuación verificada." },
        { title: 'El estudiante de Matemáticas o Ciencias', body: "Eres fuerte en Matemáticas, Estadística, Física o Biología y buscas una trayectoria profesional que aplique esas habilidades en un contexto empresarial. El análisis de datos es ese puente — y los empleadores buscan activamente a estudiantes analíticos con exposición al mundo real." },
        { title: 'El usuario avanzado de hojas de cálculo', body: "Has usado Google Sheets o Excel en serio — construyendo modelos, haciendo seguimiento de datos, creando gráficos para un proyecto o iniciativa. Tienes instintos prácticos de datos que la evaluación está específicamente diseñada para recompensar." },
      ],
    },
    phases: {
      heading: 'Las 34 preguntas, desglosadas.',
      intro: 'El motor adaptativo aprende tu nivel a medida que avanzas, de modo que cada pregunta está calibrada para desafiarte con precisión — no para reciclar preguntas fáciles.',
      rows: [
        { phase: 'Aptitud general', q: 10, measure: 'Razonamiento verbal, razonamiento numérico, inferencia lógica' },
        { phase: 'Dominio Análisis de datos', q: 10, measure: 'Gráficos, estadística, SQL, visualización, ética de datos' },
        { phase: 'Habilidades profesionales', q: 8, measure: 'Juicio situacional, comunicación con stakeholders, precisión bajo presión' },
        { phase: 'Perfil de intereses', q: 6, measure: 'Idoneidad para el área, herramientas de datos preferidas, estilo de trabajo' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes.',
      list: [
        { q: '¿Necesito saber Python o SQL para hacer el área Análisis de datos?', a: "No al nivel que podrías pensar. Las preguntas de SQL piden leer e interpretar consultas, no escribirlas desde cero. Python no aparece en la sección del dominio. Si has usado Excel con seriedad, trabajado con fórmulas de Google Sheets, o hecho algún trabajo de datos en el colegio, estás bien preparado." },
        { q: '¿Qué empresas contratan a becarios de datos estudiantes en el Reino Unido?', a: 'Los roles de datos existen en todos los sectores — retailers como Tesco y ASOS, bancos como HSBC y Barclays, el NHS, HMRC y empresas tecnológicas tienen programas de prácticas de datos para estudiantes. Muchas pymes también contratan a becarios de datos estudiantes para trabajos basados en proyectos. La escasez de candidatos con alfabetización en datos hace que incluso un estudiante de instituto con habilidades demostradas destaque.' },
        { q: '¿En qué se diferencia el análisis de datos de simplemente usar Excel?', a: "Excel es una herramienta — el análisis de datos es una forma de pensar. El dominio evalúa tu capacidad para hacer la pregunta correcta a un conjunto de datos, detectar errores, elegir la visualización correcta y comunicar lo que los datos realmente significan. Esas habilidades se aplican tanto si usas Excel, Python, Power BI o cualquier otra herramienta." },
        { q: '¿El informe de preparación me ayudará a entrar en una carrera de Ciencia de datos o Estadística?', a: 'Los programas de Matemáticas, Estadística y Ciencia de datos buscan cada vez más evidencia de pensamiento analítico más allá de las calificaciones de exámenes. Una puntuación de evaluación verificada que demuestre un sólido razonamiento con datos y habilidades de inferencia estadística le da a tu solicitud universitaria un punto de evidencia concreto al que hacer referencia.' },
        { q: '¿Cuál es la diferencia entre las áreas Análisis de datos y Tecnología?', a: "Análisis de datos se centra en interpretar, visualizar y comunicar insights a partir de datos estructurados — más cercano al lado del analista y la inteligencia empresarial del sector. Tecnología se centra en la lógica de código, el desarrollo de software, la ciberseguridad y el diseño de sistemas. Si te atraen ambas, elige la que describe tu día ideal: trabajar con conjuntos de datos y dashboards, o construir software y sistemas." },
      ],
    },
    otherTracks: {
      heading: 'Otras áreas de prácticas',
      list: [
        { href: '/es/tecnologia',              label: 'Tecnología',        desc: 'Programación, algoritmos, ciberseguridad' },
        { href: '/es/empresa',          label: 'Empresa',           desc: 'Estrategia, finanzas, operaciones' },
        { href: '/es/marketing-digital', label: 'Marketing digital', desc: 'SEO, redes sociales, campañas' },
      ],
    },
    blog: { heading: 'Lecturas recomendadas' },
    finalCta: {
      h2: 'Tus prácticas de datos empiezan aquí.',
      p: 'Evaluación gratuita de 34 preguntas. Informe de preparación con IA. Oportunidades de colocación reales. No necesitas CV para empezar.',
      btn: 'Solicitar gratis — área Análisis de datos →',
      footnote: 'Gratuita para todos los estudiantes de 14 a 18 años · 35 minutos · Resultados instantáneos',
    },
    breadcrumb: { home: 'Inicio', track: 'Área Análisis de datos' },
  },

  'digital-marketing': {
    meta: {
      title: 'Evaluación de prácticas en Marketing digital — Obtén tu informe de preparación en marketing',
      description: 'Evaluación de prácticas en marketing digital gratuita con IA para estudiantes de 14 a 18 años. SEO, estrategia en redes sociales, marketing de contenidos, analítica y planificación de campañas. Consigue unas prácticas de marketing reales.',
    },
    hero: {
      badge: 'Área Marketing digital',
      h1: 'Demuestra que puedes hacer crecer una audiencia y generar resultados.',
      p: 'El gasto en publicidad digital en el Reino Unido alcanzó 29.600 millones de libras en 2023 — y cada libra necesita personas que entiendan canales, audiencias y medición. Nuestra evaluación gratuita demuestra que eres una de ellas, con un informe que los empleadores pueden usar antes incluso de haberte conocido.',
      cta: 'Solicitar gratis — área Marketing digital →',
      blogLink: 'Leer guías de prácticas',
      trust: ['✓ Gratuita para estudiantes', '✓ 14–18 años', '✓ 35 minutos', '✓ Puntuación con IA', '✓ Informe de preparación personalizado'],
    },
    stats: [
      { stat: '£29.600M', label: 'gasto en publicidad digital en el Reino Unido en 2023 (IAB)' },
      { stat: '32%', label: 'crecimiento en roles de marketing digital 2021–2024' },
      { stat: '77%', label: 'de los responsables de contratación en marketing no encuentran candidatos con habilidades digitales' },
      { stat: 'Top 5', label: 'titulaciones de mayor crecimiento: Social Media Manager (LinkedIn UK)' },
    ],
    domain: {
      heading: 'Qué evalúa el área de Marketing digital.',
      intro: '10 preguntas basadas en escenarios que abarcan todos los canales digitales principales — desde búsqueda orgánica hasta social pagado y email. Cada pregunta te sitúa ante una decisión real de marketing.',
      topics: [
        { n: '01', topic: 'Fundamentos de SEO', detail: "Identifica qué factores on-page y técnicos afectan más al posicionamiento en buscadores — y qué suposiciones habituales son mitos." },
        { n: '02', topic: 'Estrategia en redes sociales', detail: 'Elige la plataforma y el formato de contenido correctos para una audiencia, marca y objetivo de campaña dados.' },
        { n: '03', topic: 'Marketing de contenidos', detail: "Evalúa si un contenido servirá a su objetivo declarado — y diagnostica por qué no lo haría." },
        { n: '04', topic: 'Email marketing', detail: 'Interpreta tasas de apertura, tasas de clics y tendencias de bajas — identifica qué señalan las métricas sobre la salud de la campaña.' },
        { n: '05', topic: 'Publicidad de pago', detail: 'Entiende el coste por clic, la tasa de conversión, el ROAS y la segmentación de audiencia — toma una decisión de asignación de presupuesto.' },
        { n: '06', topic: 'Analítica y KPIs', detail: 'Lee un panel de Google Analytics e identifica el insight clave — sesiones vs. usuarios, tasa de rebote, objetivos completados.' },
        { n: '07', topic: 'Consistencia de marca y mensajería', detail: 'Identifica qué texto del anuncio, visual o publicación incumple las directrices de marca — y reformúlalo para alinearlo con la voz de marca.' },
        { n: '08', topic: 'Redacción y tono de voz', detail: 'Reescribe un titular o CTA débil para que sea más persuasivo para la audiencia y canal específicos descritos.' },
        { n: '09', topic: 'Planificación de campañas', detail: 'Secuencia una campaña de lanzamiento de producto entre canales, asigna el presupuesto entre fases e identifica dependencias.' },
        { n: '10', topic: 'Ética digital y cumplimiento normativo', detail: 'Aplica el GDPR, las directrices de la ASA y las reglas de divulgación de influencers — identifica qué práctica de contenido o datos es no conforme.' },
      ],
    },
    roles: {
      heading: 'A dónde lleva una práctica en Marketing digital.',
      intro: 'El marketing digital es un campo amplio con trayectorias de especialización claras. Empieza con unas prácticas que te expongan a múltiples canales — luego especialízate en el que mejor se te da.',
      list: [
        { title: 'Responsable de redes sociales', skills: 'Estrategia de plataforma, programación de contenidos, gestión de comunidad, social pagado, analítica', salary: '£25k–£42k' },
        { title: 'Creador de contenidos / Redactor', skills: 'Redacción SEO, estrategia de blog, boletines de email, guiones de vídeo, voz de marca', salary: '£22k–£38k' },
        { title: 'Analista SEO', skills: 'Investigación de palabras clave, optimización on-page, SEO técnico, construcción de enlaces, GA4/GSC', salary: '£26k–£45k' },
        { title: 'Especialista en marketing digital', skills: 'Campañas multicanal, seguimiento de rendimiento, pruebas A/B, integración CRM', salary: '£24k–£38k' },
        { title: 'Analista PPC / Medios de pago', skills: 'Google Ads, Meta Ads, segmentación de audiencia, estrategia de pujas, optimización de ROAS', salary: '£28k–£48k' },
        { title: 'Coordinador de email marketing', skills: 'Segmentación, flujos automatizados, pruebas A/B de asuntos, entregabilidad, Klaviyo', salary: '£24k–£36k' },
      ],
    },
    whoFor: {
      heading: 'Para quién es el área Marketing digital.',
      intro: 'Los mejores especialistas en marketing digital combinan instinto creativo con pensamiento analítico. Si te atraen ambos lados, esta área recompensa exactamente esa combinación.',
      profiles: [
        { title: 'El creador de contenidos', body: "Has creado un canal de YouTube, gestionado una cuenta de TikTok, escrito un blog o creado contenido para un proyecto escolar o comunitario. Entiendes intuitivamente qué hace que la gente se detenga y se involucre. Esta evaluación le da a ese instinto creativo una puntuación comercial." },
        { title: 'El especialista en marketing analítico', body: "Te atrae el dato detrás del marketing — por qué algunas campañas superan a otras, cómo el gasto publicitario se traduce en ingresos, qué señalan realmente las métricas de engagement. Quieres un rol donde midas resultados, no solo los produzcas." },
        { title: 'El estudiante polifacético', body: "Eres fuerte en Lengua, Comunicación o Empresariales, y quieres una carrera que combine redacción, estrategia y tecnología. El marketing digital es uno de los pocos campos donde los tres importan por igual — y donde la amplitud se recompensa, no se penaliza." },
      ],
    },
    phases: {
      heading: 'Las 34 preguntas, desglosadas.',
      intro: 'La dificultad adaptativa significa que la evaluación se calibra a tu nivel en tiempo real — tu informe de preparación refleja el rendimiento real, no la suerte.',
      rows: [
        { phase: 'Aptitud general', q: 10, measure: 'Razonamiento verbal, razonamiento numérico, comprensión lectora' },
        { phase: 'Dominio Marketing digital', q: 10, measure: 'SEO, redes sociales, contenido, analítica, medios de pago, ética' },
        { phase: 'Habilidades profesionales', q: 8, measure: 'Juicio situacional, comunicación con clientes, gestión de plazos' },
        { phase: 'Perfil de intereses', q: 6, measure: 'Preferencia de canal, equilibrio creativo/analítico, encaje de rol' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes.',
      list: [
        { q: '¿Necesito tener muchos seguidores en redes sociales para rendir bien en esta área?', a: 'En absoluto. La evaluación mide el pensamiento estratégico sobre marketing digital — por qué ciertas decisiones funcionan, qué métricas señalan el éxito, cómo planificar una campaña. Tener tus propias cuentas ayuda a desarrollar la intuición, pero 100k seguidores no sustituyen a entender por qué funciona una estrategia de contenido.' },
        { q: '¿Qué tipos de empresas ofrecen prácticas de marketing digital a estudiantes?', a: 'Casi todos los negocios tienen ya necesidades de marketing digital — marcas de e-commerce, agencias, empresas SaaS, retailers, ONGs y negocios locales organizan experiencias laborales para estudiantes. Las agencias de marketing digital suelen contratar a estudiantes para semanas de proyecto definidas, lo que te da exposición simultánea a múltiples industrias de clientes.' },
        { q: "¿Cómo evalúa el SEO la evaluación si no he usado Google Search Console?", a: "Las preguntas de SEO son conceptuales — evalúan si entiendes qué afecta al posicionamiento en buscadores, no si sabes operar una herramienta específica. Si alguna vez has investigado por qué un sitio web aparece por encima de otro, o has leído sobre SEO por curiosidad, ya tienes la base. El conocimiento específico de herramientas se puede aprender en el trabajo." },
        { q: '¿Mi informe de preparación me ayudará a entrar en una carrera o aprendizaje de marketing?', a: 'Ambos. Las carreras y títulos de medios de comunicación valoran cada vez más la alfabetización digital demostrada más allá de las notas previstas. Los aprendizajes de grado en agencias y equipos de marketing internos buscan específicamente candidatos que puedan demostrar conciencia comercial aplicada — tu informe de Eduentry proporciona exactamente esa evidencia.' },
        { q: '¿El Marketing digital es el área correcta si me gusta escribir y la creatividad?', a: "Sí — pero con un enfoque comercial. Los mejores especialistas en marketing digital combinan el instinto creativo con el rigor analítico. El dominio evalúa ambos: las preguntas de redacción y tono de voz recompensan el juicio creativo, mientras que las de analítica y KPIs recompensan tu capacidad para medir si la creatividad funcionó. Si solo eres fuerte en uno, el informe te mostrará exactamente dónde desarrollarte." },
      ],
    },
    otherTracks: {
      heading: 'Otras áreas de prácticas',
      list: [
        { href: '/es/tecnologia',           label: 'Tecnología',        desc: 'Programación, algoritmos, ciberseguridad' },
        { href: '/es/empresa',       label: 'Empresa',           desc: 'Estrategia, finanzas, operaciones' },
        { href: '/es/analisis-de-datos', label: 'Análisis de datos', desc: 'Datos, estadística, insights' },
      ],
    },
    blog: { heading: 'Lecturas recomendadas' },
    finalCta: {
      h2: 'Tus prácticas de marketing digital empiezan aquí.',
      p: 'Evaluación gratuita de 34 preguntas. Informe de preparación con IA. Oportunidades de colocación reales. No necesitas CV para empezar.',
      btn: 'Solicitar gratis — área Marketing digital →',
      footnote: 'Gratuita para todos los estudiantes de 14 a 18 años · 35 minutos · Resultados instantáneos',
    },
    breadcrumb: { home: 'Inicio', track: 'Área Marketing digital' },
  },
}

export const TRACK_I18N: Record<Locale, Record<TrackId, TrackData>> = { tr: TR, es: ES }
