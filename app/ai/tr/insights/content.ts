export interface InsightSection {
  heading: string
  body: string
}

export interface InsightPost {
  slug: string
  title: string
  description: string
  tag: 'Lise Stajı' | 'Üniversite Burs Programı' | 'Kariyer Rehberi'
  readTime: string
  sections: InsightSection[]
  cta: { label: string; href: string }
}

export const INSIGHT_POSTS_TR: InsightPost[] = [
  // ── LİSE STAJI ─────────────────────────────────────────────────────────
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Lise Stajı Üniversite Başvurunu Nasıl Değiştirir?',
    description: 'Rekabetçi üniversiteler, sınıf dışında uygulamalı düşünme becerisi kanıtlayabilen adayları ön plana alıyor. Veriler ne diyor — ve 12. sınıfa girmeden önce ne yapabilirsin?',
    tag: 'Lise Stajı',
    readTime: '5 dk',
    sections: [
      {
        heading: 'Notlar artık tek başına yeterli değil',
        body: `Rekabetçi üniversitelerdeki kabul ekipleri, binlerce "tahmin edilen A" öğrencisi görüyor. Öne çıkan adaylar en yüksek tahmin edilen notlara sahip olanlar değil; gerçek bir şeye işaret edebilenler: bir proje, bir staj, ölçülebilir bir çıktı. 10. veya 11. sınıfta yapılan yapılandırılmış bir staj tam da bunu sağlıyor.\n\nKanıtlar tutarlı. Belgelenmiş ve ilgili iş deneyimine sahip öğrenciler, üniversitenin akademik gerekliliklerine daha iyi hazırlanmış, seminerlerde daha özgüvenli ve istatistiksel olarak mezuniyetlerini tamamlama olasılıkları daha yüksek. Bu bir tesadüf değil — stajlar bilgiyi gerçek kısıtlamalar altında uygulamaya zorluyor.`,
      },
      {
        heading: 'Üniversiteler gerçekte neye bakıyor?',
        body: `Kişisel ifadeler iddialarla dolu: "Teknolojiye tutkuyla bağlıyım", "Hızlı tempolu ortamlarda başarılıyım." Kabul ekipleri, kanıt olmaksızın bu iddiaları göz ardı etmek için eğitilmiş.\n\nFarkı yaratan özgüllük. "Üç hafta boyunca bir müşteri kampanyasında çalıştım, üretimde kullanılan metin içerikler yazdım ve sonuçları haftalık incelemede analiz ettim" — bu cümle mülakatları bitirir. Bir bağlamı, bir katkıyı ve yansıtıcı bir sonucu adlandırır; kabul danışmanlarının aradığı üç bileşen bunlar.\n\nBir Eduentry staj yerleşimi tam olarak bu tür referans noktaları oluşturmak için tasarlandı. Ayrıntılı bir değerlendirme raporu, bir yerleşim kaydı ve deneyimini anlatmak için bir format ile çıkıyorsun.`,
      },
      {
        heading: 'Bileşik avantaj',
        body: `İş deneyimi doğrusal değildir — bileşik büyür. 10. sınıfta staj yapan öğrencilerin 11. sınıfta üzerine inşa edecekleri bir şeyleri var. Profesyonel bir ortamda nasıl davranacaklarını biliyorlar, başvurularında gerçek projelere atıfta bulunabiliyorlar ve daha önce mülakata girdikleri için mülakat ortamlarında daha az kaygılı hissediyorlar.\n\nA-level'lerinden sonrasına kadar bekleyen öğrenciler, aynı anda herkes gibi sıfırdan başlıyor. Daha erken başlayanlar zaten iki iterasyon önde.`,
      },
      {
        heading: 'Değerlendirme nasıl çalışıyor?',
        body: `Eduentry stajı, dört konu alanında 34 soruluk uyarlanabilir bir değerlendirme ile başlıyor: sözel yetenek, sayısal akıl yürütme, sosyal beceriler ve seçtiğin alandaki alan bilgisi (Teknoloji, İş, Veri Analitiği veya Dijital Pazarlama).\n\nSonuçların, yaşındaki öğrencilerin küresel kohortuyla karşılaştırılıyor. Rapor, güçlü yönlerinin nerede olduğunu, büyüme alanlarının nerede olduğunu ve hangi alanın profilinle en iyi eşleştiğini söylüyor. En iyi performans gösterenler, partner ağımız aracılığıyla gerçek yerleşimlerle eşleştiriliyor.`,
      },
    ],
    cta: { label: 'Ücretsiz değerlendirmeye başla →', href: '/apply' },
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'Üniversiteden Önce Gerçek Teknoloji Deneyimi Edinmek: Gerçekten İşe Yarayan',
    description: 'Çoğu tavsiye "kod yazmayı öğren" diyor. Bu yeterli değil. Teknoloji seçicilerinin gerçekte neyi ölçtüğünü ve yapılandırılmış bir staja nasıl hazırlanacağını anlat.',
    tag: 'Lise Stajı',
    readTime: '6 dk',
    sections: [
      {
        heading: '"Teknoloji deneyimi" bir seçici için gerçekte ne anlama geliyor?',
        body: `Bir teknoloji şirketi öğrenci başvurularını incelediğinde, Codecademy kursu tamamlamış birini aramıyor. Uygulamalı düşünme arıyor: bu kişi bir problemi okuyabilir mi, bileşenlerine ayırabilir mi ve bir çözüm hakkında akıl yürütebilir mi?\n\nBu beceri, tek bir satır üretim kodu yazmadan önce ölçülebilir. Bir mantık bulmacasına yaklaşımını nasıl açıkladığında, basit bir akış şemasını nasıl okuduğunda ve versiyon kontrolünün neden var olduğunu — sadece var olduğunu değil — anlayıp anlamadığında ortaya çıkıyor.`,
      },
      {
        heading: 'Eduentry teknoloji değerlendirmesinin test ettiği üç şey',
        body: `Teknoloji alanı bölümü, gerçek teknoloji seçicilerinin önem verdiği üç alanı kapsıyor:\n\n1. **Algoritma mantığı** — söz dizimi değil, bir süreç boyunca izleme ve çıktıyı tahmin etme becerisi. Bu her teknik mülakatin temelidir.\n\n2. **Sistem kavramları** — bir veritabanının ne işe yaradığını, bir API'nin ne yaptığını ve yazılım ekiplerinin neden kullandıkları araçları kullandığını anlamak. Bir şey inşa etmiş olman gerekmiyor; ortamı anlamak yeterli.\n\n3. **Hata ayıklama akıl yürütmesi** — neyin yanlış gittiğinin bir tanımı verildiğinde, en olası nedeni belirleyebilir misin? Mühendislerin zamanlarının çoğunu bununla geçirdiği şey bu.`,
      },
      {
        heading: 'Dört haftada nasıl hazırlanılır?',
        body: `Bilgisayar bilimi geçmişine ihtiyacın yok. Dört haftalık kasıtlı pratik gerekiyor:\n\n**1. Hafta:** Mantık ve diziler. Sözel akıl yürütme alıştırmalarını teknoloji odağıyla geliştir — kalıp tanıma, sınıflandırma, analoglar.\n\n**2. Hafta:** Sayı ve veri. Basit tabloları okuma, yüzde değişimlerini hesaplama, bir çubuk grafiği doğru yorumlama pratiği yap.\n\n**3. Hafta:** Teknoloji kavramları. Versiyon kontrolü, HTTP ve ilişkisel veritabanları hakkında Wikipedia makalelerini oku. Ne ve neden'i paragraf düzeyinde anla.\n\n**4. Hafta:** Deneme değerlendirmesi. Eduentry pratik sorularını tamamla ve her açıklamayı gözden geçir — sadece doğru yapıp yapmadığını değil.`,
      },
      {
        heading: 'Güçlü bir sonuçtan sonra ne olur?',
        body: `Teknoloji alanında ilk %30'a giren öğrenciler, partner yerleşimleriyle eşleştiriliyor. Bunlar dosyalama işleri değil — gerçek teknoloji ekipleri içinde adlandırılmış bir süpervizör, bir proje brifingi ve tamamlama sonrasında referans mektubu olan yapılandırılmış dört ila altı haftalık deneyimler.\n\nGüçlü bir Eduentry sonucu aynı zamanda her gelecekteki başvuruda atıfta bulunabileceğin bir şey veriyor: kendi kendine bildirilen bir iddia değil, doğrulanmış bir alan puanı.`,
      },
    ],
    cta: { label: 'Teknoloji değerlendirmesine başla →', href: '/apply' },
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: '16 Yaşında İş Deneyimi: Yerleşimden Portfolyoya',
    description: 'Birini takip ettiğin bir hafta iş deneyimi sayılmaz. Yapılandırılmış bir yerleşim nasıl görünür — ve bunu gösterecek ne elde etmelisin?',
    tag: 'Lise Stajı',
    readTime: '5 dk',
    sections: [
      {
        heading: 'Çoğu "iş deneyimi" neden sayılmıyor?',
        body: `Üniversiteler ve işverenler iş deneyimi istediğinde, aile arkadaşının ofisinde bir hafta telefon açmak demiyorlar. Gerçek iş problemleriyle belgelenmiş etkileşim kastediyorlar: sana verilen bir görev, katkıda bulunduğun bir süreç ve tanımlayabileceğin bir sonuç.\n\nFark önemli. "Bana rakip analiz brifingi verildi ve bulgularımı ticaret ekibine sundum" diyen bir öğrenci deneyim tarif ediyor. "Bir hafta boyunca bir yöneticiyi takip ettim" diyen bir öğrenci gözlem tarif ediyor.`,
      },
      {
        heading: 'Eduentry iş alanının değerlendirdiği şeyler',
        body: `İş alanı bölümü, gerçek ticari karar almayı destekleyen kavramları test ediyor:\n\n- **Pazar akıl yürütmesi** — arz, talep, rekabet ve bir iş modelinin neden uygulanabilir olduğu\n- **Finansal okuryazarlık** — kavramsal düzeyde bir kar-zarar okuma, marjı ve geliri anlama\n- **İş davası düşüncesi** — birbiriyle rekabet eden öncelikleri olan bir senaryoda, hangi eylem sonucu maksimize eder?\n- **Profesyonel iletişim** — doğru ton, doğru kanal, tanımlanmış bir hedef için doğru ayrıntı düzeyi`,
      },
      {
        heading: 'Yerleşimden portfolyo oluşturmak',
        body: `Gösterecek hiçbir şey olmadan biten bir yerleşim kaçırılmış bir fırsattır. Başlamadan önce süpervizörünle üç konuda mutabık ol:\n\n1. Baştan sona sahip olacağın bir görev\n2. İşlerin iyi gittiğini ölçmenin bir yolu\n3. Sonucu başvurularda referans verme izni\n\nMütevazı bir teslimat bile — tek sayfalık bir pazar özeti, bir dizi toplantı notu, basit bir analiz — ne yapmakla görevlendirildiğini, ne yaptığını ve sonucunda ne olduğunu açıklayabildiğinde bir portfolyo öğesi haline gelir.`,
      },
      {
        heading: 'Eduentry değerlendirmeyi yerleşimle nasıl bağlıyor?',
        body: `Değerlendirme sadece bir test değil — bir profil oluşturuyor. İş alanında iyi puan alan öğrenciler, profilleriyle uyumlu partner ağımızdaki yerleşimlerle eşleştiriliyor: gerçek organizasyonlar içinde ticari roller, araştırma projeleri ve müşteriye yönelik görevler.\n\nSüpervizörünün görebileceği doğrulanmış bir puanla yerleşime başlıyorsun. Adlandırılmış sonuçlara bağlı bir referansla ayrılıyorsun.`,
      },
    ],
    cta: { label: 'İş hazırlığını değerlendir →', href: '/apply' },
  },
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Dijital Pazarlama İş Deneyimi: Gerçekte Ne Yapacaksın?',
    description: 'Instagram\'da paylaşım yapmak dijital pazarlama iş deneyimi sayılmıyor. Gerçek bir yerleşim neye benziyor — ve Eduentry değerlendirmesi hazırlığını nasıl ölçüyor?',
    tag: 'Lise Stajı',
    readTime: '5 dk',
    sections: [
      {
        heading: 'Sosyal medya ile pazarlama arasındaki uçurum',
        body: `Dijital pazarlama yerleşimi için başvuran çoğu öğrenci şöyle bir şey söylüyor: "Sosyal medya hesaplarını yönetiyorum ve algoritmaların nasıl çalıştığını anlıyorum." Seçiciler bunu her gün düzinelerce kez duyuyor.\n\nGerçekte aradıkları farklı: bir kampanya brifingi okuyabilir misin, performans verilerini yorumlayabilir misin ve bir öneri yapabilir misin? Erişim problemi ile etkileşim problemi arasındaki farkı anlayabilir misin? Bir performans kampanyasında neden gösterim sayısından daha fazla tıklama oranının önemli olduğunu biliyor musun?`,
      },
      {
        heading: 'Dijital Pazarlama alanının değerlendirdiği dört şey',
        body: `Eduentry Dijital Pazarlama alan bölümü dört alanı test ediyor:\n\n1. **Analitik yorumlama** — bir gösterge panosu okuma ve sayıların bir sonraki karar için ne anlama geldiğini belirleme\n2. **Platform mekaniği** — erişim, etkileşim, TO, CPM ve dönüşüm oranını birbirine karıştırmadan anlama\n3. **İçerik stratejisi** — mesajı tanımlanmış bir hedefi hizmet edecek şekilde kitleye ve platforma eşleştirme\n4. **SEO temelleri** — anahtar kelimelerin ne yaptığı, geri bağlantıların ne olduğu ve site yapısının bir arama motoruna neden önem verdiği`,
      },
      {
        heading: 'Gerçek bir yerleşim nasıl görünüyor?',
        body: `Yapılandırılmış Eduentry dijital pazarlama yerleşimlerindeki öğrenciler genellikle üç görev türünden biriyle çalışıyor:\n\n- **Kampanya analizi** — canlı bir kampanyanın sonuçlarını inceleme ve neyin işe yaradığı ve neyin değiştirileceği hakkında kısa bir rapor yazma\n- **İçerik üretimi** — belirli marka yönergeleri ve ölçülebilir bir hedef olan bir brifing için metin kopyası veya içerik oluşturma\n- **Kitle araştırması** — müşteri davranış verilerini analiz etme ve ekip için bir özet üretme\n\nHer görevin bir brifingi, son tarihi ve incelemesi var. Gösterebileceğin çıktıyla yerleşimi tamamlıyorsun.`,
      },
      {
        heading: 'Yerleşimi referansa nasıl dönüştürürsün?',
        body: `Yerleşiminin sonunda, süpervizöründen üzerinde çalıştığın görevi ve sonucu adlandıran yazılı bir referans isteyin. Tek bir cümle bile — "Rakip analizi, Q4 planlama oturumumuzda kullanıldı" — genel "ekibimizde harika biriydik" cümlesinden çok daha değerlidir.\n\nBunu Eduentry değerlendirme raporunla eşleştirdiğinde doğrulanabilir bir kaydın olur: test edilmiş yetenek puanın ve adlandırılmış bir organizasyona bağlı gerçek bir teslimat.`,
      },
    ],
    cta: { label: 'Pazarlama değerlendirmesine başla →', href: '/apply' },
  },
  {
    slug: 'how-to-get-internship-no-experience-high-school',
    title: 'Hiç Deneyimin Yokken İlk Stajını Nasıl Alırsın?',
    description: 'Erken kariyer döneminin paradoksu: deneyim kazanmak için deneyime ihtiyacın var. Okulu bitirmeden önce bu döngüyü nasıl kırarsın?',
    tag: 'Lise Stajı',
    readTime: '5 dk',
    sections: [
      {
        heading: '"Deneyimsizlik" problemi düşündüğün gibi değil',
        body: `Şirketler deneyimli adaylar istediklerinde, genellikle tam olarak işi daha önce yapmış birini kastetmiyorlar. Adayın profesyonel bir ortamda işlev görebileceğine dair kanıt istiyorlar — yani bir brifing alıp, iş yapıp ve sürekli denetim olmadan bir çıktı üretebileceğine.\n\nBu kanıt önceki bir işten gelmek zorunda değil. Ölçülebilir bir sonucu olan bir okul projesinden, bir yarışmadan, kişisel bir girişimden veya temel yeteneği gösteren doğrulanmış bir değerlendirme sonucundan gelebilir.`,
      },
      {
        heading: 'Eduentry değerlendirmesinin ne yerine geçtiği',
        body: `Eduentry değerlendirmesi, önceki iş deneyimi olmayan öğrenciler için açıkça tasarlanmış. CV sorusu yok, önceki rolleri listeleme zorunluluğu yok.\n\nBunun yerine dört şeyi doğrudan ölçüyor: kelimeleri nasıl akıl yürüttüğünü, sayıları nasıl ele aldığını, profesyonel bir ortamda nasıl davranacağını ve seçtiğin alan hakkında ne kadar bilgi sahibi olduğunu. Bu alanların herhangi birinde güçlü bir sonuç, bir seçicinin harekete geçebileceği kanıttır — daha önce hiç iş tutmamış olsan bile.`,
      },
      {
        heading: 'Bu hafta yapabileceğin üç şey',
        body: `**1. Değerlendirmeyi tamamla.** Puanın güvenilir bir veri noktasıdır. Teknoloji alanında 78. yüzdelik dilim alan bilgisi sonucu, herhangi bir başvuruda atıfta bulunabileceğin bir şeydir.\n\n**2. Bir spesifik çıktı oluştur.** İki haftada tamamlayabileceğin bir proje seç — kısa bir rapor, küçük bir web sitesi, önem verdiğin bir şeyin veri analizi. Kalite, somut bir şeyi tanımlayabilmekten daha az önemlidir.\n\n**3. E-postayı yaz.** Çoğu lise öğrencisi şirketlerle hiç doğrudan iletişime geçmiyor. "Lise eğitimim sürüyor, [alan] ile ilgileniyorum, Eduentry değerlendirmesinde ilk çeyreğe girdim ve kısa bir yerleşim için başvurmak istiyorum" diyen kısa ve spesifik bir e-posta, onu alan çoğu kişi tarafından okunacak.`,
      },
      {
        heading: 'İlk yerleşimden sonra ne olur?',
        body: `İlk yerleşim en zoru. Ondan sonra sana kefil olabilecek bir süpervizörün, katkıda bulunduğun bir çalışman ve sonraki her başvuruda anlatabileceğin bir hikayene olacak.\n\n10. sınıfta Eduentry yerleşimi tamamlayan öğrenciler, 12. sınıf üniversite mülakatlarına iki yıllık bileşik deneyim ve gerçek bir organizasyondan referansla geliyor. Bu, deneyim aramaya A-level sonuçlarından sonra başlayan bir öğrencinin yapısal olarak farklı bir başvurusudur.`,
      },
    ],
    cta: { label: 'Deneyimsiz başvur →', href: '/apply' },
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: '16 Yaşında Öne Çıkmak: Değerlendirme Notlarından Daha Fazla Neden Önemli',
    description: 'Her rekabetçi başvurucunun iyi notları var. Yerleşimi istediklerini alan öğrencilerin farklı bir şeyi var — ve bu ölçülebilir.',
    tag: 'Lise Stajı',
    readTime: '4 dk',
    sections: [
      {
        heading: 'Tahmin edilen notların problemi',
        body: `15 veya 16 yaşında, rekabetçi bir yerleşim için başvuran neredeyse her öğrencinin iyi tahmin edilen notları var. Seçiciler bunu biliyor — bu yüzden tahmin edilen notların kısa listeye alma aşamasında neredeyse hiçbir ayırt edici gücü yok.\n\nSeçicilerin gerçekte aradığı şey, notların işe yaramadığı yerde çalışan bir sinyaldir: uygulamalı akıl yürütme, profesyonel yargı, alan merakı. Bunlar notların ölçmediği ve çoğu öğrencinin göstermeyi düşünmediği şeyler.`,
      },
      {
        heading: 'Aday listesine alınan adayları gerçekte ne ayırıyor?',
        body: `Eduentry yerleşim verilerine göre, tutarlı olarak kısa listeye alınan öğrenciler üç özelliği paylaşıyor:\n\n1. **Kanıtlarla spesifik bir ilgiyi tanımlayabiliyorlar.** "Teknolojiyle ilgileniyorum" değil, "Önem verdiğim bir proje için fiyat verilerini takip etmek amacıyla küçük bir web kazıyıcı inşa ediyorum."\n\n2. **Doğrulanmış bir yetenek sinyalleri var.** Üçüncü taraf değerlendirme sonucu, kendi beyan ettiğin beceri iddiasından daha güvenilir çünkü sahte yapmak daha zor.\n\n3. **Erken başvuruyorlar ve takip ediyorlar.** Çoğu öğrenci son tarihe kadar bekler. Yerleşim alan öğrenciler erken başvuruyor, spesifik e-postalar yazıyor ve bir kez takip ediyor.`,
      },
      {
        heading: 'Eduentry raporu sana nasıl güvenilir bir sinyal veriyor?',
        body: `Eduentry değerlendirmesi, dört konu alanının her biri için yüzdelik dilim puanı ve profilini en iyi hangi dört kariyer alanının karşıladığını belirleyen bir alan uyum puanı üretiyor.\n\nBu rapor somut bir eserdir. Alan bilgisi puanını bir başvuru e-postasında alıntılayabilirsin. Kişisel bir ifadeye ekleyebilirsin. Veri analitiğiyle neden ilgilendiğini soran birine mülakata yanıt verebilirsin — "Eduentry veri analitiği değerlendirmesinde 82. yüzdelik dilime girdim" spesifik, doğrulanabilir bir cevap.`,
      },
      {
        heading: 'Pencere düşündüğünden daha hızlı kapanıyor',
        body: `Gelecek yıl seninle aynı yerleşimler için başvuranlar arasında zaten bir tane yapmış olanlar olacak. Bu mülakata kapatmak zor bir fark.\n\nŞimdi — 15 veya 16 yaşında — başlamanın avantajı, hâlâ ilk yapan kişi olacak kadar erken olman.`,
      },
    ],
    cta: { label: 'Eduentry profilini al →', href: '/apply' },
  },

  // ── ÜNİVERSİTE BURS PROGRAMI ────────────────────────────────────────────
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'OECD Kariyer Verileri Burs Başvuruna Ne Anlam Katıyor?',
    description: 'On yıllık OECD araştırması, 25 yaşından önce yapılandırılmış iş deneyiminin yaşam boyu kariyer yolu üzerinde orantısız bir etki yarattığını gösteriyor. Üniversiteli biri için bu şu an ne anlama geliyor?',
    tag: 'Üniversite Burs Programı',
    readTime: '6 dk',
    sections: [
      {
        heading: 'Hesabı değiştiren OECD bulgusu',
        body: `OECD'nin boylamsal kariyer çalışmaları, eğitim sürasında yapılandırılmış iş deneyimini erken kariyer hızlanmasının en güçlü öngörücülerinden biri olarak sürekli tanımlıyor. Mekanizma gizemli değil: eğitimleri sırasında gerçek iş yapan öğrenciler, ilk işlerine zaten profesyonel bir ortamda nasıl işlev gördüklerini bilerek geliyor.\n\nBileşik etki önemli. Mezuniyetten önce yapılandırılmış yerleşim yapmış öğrenciler, daha yüksek başlangıç maaşları, ilk yönetici rolüne daha hızlı terfi ve ilk beş yılda daha düşük kariyer değiştirme oranları bildiriyor — eşdeğer akademik kayıtlara ama yapılandırılmış deneyimi olmayan öğrencilere göre.`,
      },
      {
        heading: 'Neden "yapılandırılmış" anahtar kelime?',
        body: `Her iş deneyimi bu sonuçları üretmiyor. Yarı zamanlı bar işi dayanıklılık ve zaman yönetimi oluşturuyor. Yapılandırılmamış ofis bağlantısı aşinalık oluşturuyor. İkisi de OECD çalışmalarının tanımladığı kariyer hızlanmasını üretmiyor.\n\nBunu üreten şey yapılandırılmış deneyim: tanımlanmış bir proje, adlandırılmış bir süpervizör, açık geri bildirim döngüleri ve ayrıldıktan sonra var olan bir teslimat. Magenta Networks bursu tam olarak bu model üzerine inşa edilmiş — gerçek müşteri teslimlarında %80 uygulama, Singapur merkezli teknoloji liderlerinden %20 mentorluk ve sonunda bir Capstone Demo Günü.`,
      },
      {
        heading: 'Üniversitede özellikle ne anlama geliyor?',
        body: `OECD verileri, yapılandırılmış iş deneyimi için optimal pencerenin 19 ile 22 arasında olduğunu öne sürüyor — gerçek iş verilecek kadar güvenilir olduğun ama öğrenmenin kariyerinin geri kalanına bileşik hale gelmesi için hâlâ yeterince erken olduğun yıllar.\n\n2. veya yerleşim yılındaki bir burs tam olarak bu pencerenin ortasına denk geliyor. Akademik olarak yetiştirilmiş ama henüz deneyimli işe alımlarla rekabet etmiyorsun. Üç aylık bir bursta oluşturduğun beceriler ve referanslar, sonraki her başvurunun temeli haline geliyor.`,
      },
      {
        heading: 'Burs bir kariyer yatırımı olarak',
        body: `Magenta Networks bursu geleneksel anlamda ücretli değil — maaş yok. Ancak OECD çerçevesi bunun hakkında düşünmenin yanlış yolu olduğunu öne sürüyor. Yatırım üç aylık uygulamalı çalışma, getiri ise doğrulanmış bir teslimat, Singapur teknoloji organizasyonundan adlandırılmış referans ve verinin tanımladığı kariyer yolundaki hızlandırılmış pozisyon.\n\nÇoğu aday için soru bursu yapıp yapmamak değil — değerlendirmenin ilk %10'una girip giremeyecekleri.`,
      },
    ],
    cta: { label: 'Bursa başvur →', href: '/work-experience/apply' },
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: 'PISA 2025: Bir Bursun Kapatabileceği Beceri Açığı',
    description: 'PISA 2025, araştırmanın tarihindeki en dik küresel uygulamalı akıl yürütme puanı düşüşünü gösterdi. Üniversite öğrencileri için bu ne anlama geliyor — ve yapılandırılmış iş deneyimi bunu nasıl ele alıyor?',
    tag: 'Üniversite Burs Programı',
    readTime: '5 dk',
    sections: [
      {
        heading: 'PISA 2025 gerçekte ne buldu?',
        body: `PISA 2025, araştırmanın 2000 yılında başlamasından bu yana ortalama okuma ve matematik puanlarında tek bir döngüdeki en büyük düşüşü kaydetti. Düşüş bir bölgeyle sınırlı değildi — OECD üye ülkelerinde genel olarak tutarlıydı ve uygulamalı akıl yürütme ve veri yorumlama alanlarında özellikle keskin düşüşlerle birlikte geldi.\n\nRapor yazarları muhtemel neden hakkında açıktı: kritik gelişim yılları sekteye uğramış ve daha geniş bir uygulamalı öğrenme yerine müfredatı daraltarak yanıt veren bir eğitim sistemi.`,
      },
      {
        heading: 'Uygulamalı akıl yürütme açığı',
        body: `İşverenler için en önemli PISA bulgusu uygulamalı akıl yürütme puanı — alışılmamış bir problemi alma, mevcut verilerden akıl yürütme ve savunulabilir bir sonuca varma becerisi. Bu puan, alan bilgisi puanlarından daha büyük bir marjla düştü; bu da "teoriyi biliyor" ile "bunu baskı altında uygulayabiliyor" arasındaki uçurun genişlediği anlamına geliyor.\n\nİşverenler yeni mezunları işe aldıklarında tam da bunu bildiriyor: içerik hatırlayabilen ama belirsizlik koşullarında harekete geçmekte zorlanan adaylar. Gerçek müşteri angajmanının içine koyan, gerçek bir brifingle ve gerçek bir son tarihle bir burs, bu açığa en doğrudan yanıttır.`,
      },
      {
        heading: 'Eduentry fellowship değerlendirmesi neyi test ediyor?',
        body: `Burs değerlendirmesi, lisansüstü düzeyde kalibre edilmiş — lise staj değerlendirmesinden daha zor ve kasıtlı olarak PISA verilerinin azaldığını belirlediği becerilere odaklanmış.\n\nSözel akıl yürütme bölümü eleştirel argüman analizini test ediyor, kelime analogilerini değil. Sayısal bölüm veri yorumlama ve finansal oran akıl yürütmesini test ediyor. Durumsal yargı bölümü belirsiz senaryolarda profesyonel karar vermeyi test ediyor. Alan bölümü, alana aşinalık beklentisiyle burs alanında uygulamalı bilgiyi test ediyor.\n\nGüçlü bir sonuç tam olarak PISA verilerinin kıt olduğunu söylediği şeyi işaret ediyor: gerçekçi koşullar altında uygulamalı akıl yürütme kapasitesi.`,
      },
      {
        heading: 'Neden şimdi önemli?',
        body: `PISA düşüşü, açığı proaktif olarak kapatan öğrenciler için özel bir fırsat yaratıyor. Uygulamalı akıl yürütme puanlarının ortalamada daha düşük olduğu bir kohortta, kanıtlanabilir uygulamalı deneyime sahip bir aday, beş yıl önce olduğundan çok daha belirgin öne çıkıyor.\n\nBurs, açığı kapatmanın en hızlı yollarından biri — her hafta deneyimli pratisyenler tarafından incelenen üç aylık gerçek uygulamalı çalışma, herhangi bir ek nitelikten çok daha önemli bir sinyal üretiyor.`,
      },
    ],
    cta: { label: 'Burs değerlendirmesini tamamla →', href: '/work-experience/apply' },
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'Kariyerini Gerçekten İlerletecek Burs Programını Bulmak',
    description: 'Tüm burslar ve stajlar eşit değil. Üç ayını boşa harcayan programlardan kariyerini bileşik büyüten programları ayıran şey nedir?',
    tag: 'Üniversite Burs Programı',
    readTime: '5 dk',
    sections: [
      {
        heading: 'İyi programları kötü olanlardan ayıran üç soru',
        body: `Çoğu üniversite öğrencisi programları marka adına, burs miktarına ve konuma göre değerlendiriyor. Bunlar işe yaramaz kriterler değil, ama yanlış birincil filtreler.\n\nBir programın kariyerini gerçekten ilerletip ilerletmeyeceğini tahmin eden üç soru:\n\n1. **Bir teslimatın sahibi olacak mısın?** Üzerinde çalıştığın için var olan somut bir şeyi işaret edemiyorsan, deneyim mülakata katılmaya hayatta kalmayacak.\n\n2. **Spesifik referans verebilecek adlandırılmış bir süpervizörün olacak mı?** İK departmanlarından gelen genel referanslar hiçbir ağırlık taşımıyor. Çalışmayı tanımlayabilen kıdemli bir uygulayıcıdan spesifik referans taşıyor.\n\n3. **Beceriler bileşik büyüyecek mi?** Gerçek bir ekibin araçlarına, süreçlerine ve karar verme süreçlerine seni maruz bırakan program inşa edecek bir şey veriyor. Maruz kalmadan seni meşgul tutan program hiçbir şey vermiyor.`,
      },
      {
        heading: 'Program açıklamalarındaki kırmızı bayraklar',
        body: `Bir program açıklamasındaki bu ifadeler bileşik büyümeyen bir deneyimin işaretleri:\n\n- "Ekip üyelerini gölgelersin" — gözlem deneyim değil\n- "İş genelindeki projeleri destekleyeceksin" — sahiplik yok, teslimat yok\n- "Kültürümüz hakkında öğrenmek için harika bir fırsat" — kültür bir beceri değil\n- "Esnek ve çeşitli rol" — hesap verebilirlik olmayan tanımsız kapsam anlamına geliyor\n\nBununla karşılaştır: "[Ekip] içinde belirli bir projede görevlendirileceksiniz, Jira aracılığıyla yönetilecek, haftalık incelemeler ve sonunda sunum yapılacak." Bu iş tanımı.`,
      },
      {
        heading: 'Magenta Networks bursu nasıl yapılandırılmış?',
        body: `Burs, bileşik deneyim üretmek için tasarlanmış bir model üzerine çalışıyor:\n\n**%80 uygulama.** Gerçek Magenta Networks angajmanlarında canlı müşteri teslimları üzerinde çalışıyorsun. Kalıcı ekip tarafından kullanılan aynı yığın — Jira, Slack ve GitHub — aracılığıyla yönetiliyor. Çıktıların üretime giriyor, çekmeceye değil.\n\n**%20 mentorluk.** Singapur merkezli teknoloji ve strateji liderleriyle haftalık birebir görüşmeler. Çalışmanla ilgili açık geri bildirim. Teslimatlarını Magenta Networks paydaşlarına sunduğun son bir Capstone Demo Günü.\n\n**Çıkış teslimabı.** Doğrulanmış burs sertifikası, ayrıntılı beceri raporu ve Magenta Networks'teki adlandırılmış süpervizöründen referans.`,
      },
      {
        heading: 'Ne zaman başvuracaksın ve ne bekliyorsun?',
        body: `Burs seçici — değerlendirme puanlarının ilk %10'u. Değerlendirme 20 dakika sürüyor ve başvurulması ücretsiz. Başvurmak için CV veya önceki iş deneyimine ihtiyacın yok.\n\nGiriş süreci, kimlik bilgilerini değil uygulamalı akıl yürütme kapasitesini belirlemek için tasarlandı. Güçlü değerlendirme puanları ama önceki deneyimi olmayan öğrenciler seçildi. Etkileyici özgeçmişleri ama zayıf değerlendirme puanları olan öğrenciler seçilmedi.`,
      },
    ],
    cta: { label: 'Bursa başvur →', href: '/work-experience/apply' },
  },
  {
    slug: 'oecd-teenage-part-time-work-benefits',
    title: 'Kariyer İçin 3 Aylık Bursun Yarı Zamanlı İşten Neden Daha İyi Olduğu',
    description: 'İş deneyimiyle ilgili OECD araştırması, yapılandırılmış ve yapılandırılmamış maruz kalma arasındaki farkı ortaya koyuyor. Kariyer sonuçlarındaki fark çoğu öğrencinin beklediğinden büyük.',
    tag: 'Üniversite Burs Programı',
    readTime: '4 dk',
    sections: [
      {
        heading: 'OECD yapılandırılmamış iş deneyimi hakkında ne söylüyor?',
        body: `OECD'nin genç istihdamına ilişkin araştırması, iki tür iş deneyimini tutarlı olarak ayırt ediyor: öğrencinin tanımlanmış bir rolü, süpervizörü ve spesifik bir öğrenme hedefi olduğu yapılandırılmış yerleşimler — ve yarı zamanlı hizmet işlerini, geçici işleri ve genel ofis desteğini içeren yapılandırılmamış maruz kalma.\n\nHer ikisinin de değeri var. Yapılandırılmamış iş mali bağımsızlık, dayanıklılık ve organizasyonların zemin düzeyinde nasıl işlediğini anlama oluşturuyor. Ancak kariyer hızlanma etkisi — daha hızlı terfi, daha yüksek başlangıç maaşı, beş yılda daha büyük iş tatmini — yapılandırılmış deneyim için çok daha güçlü.`,
      },
      {
        heading: 'Neden yarı zamanlı iş aynı sinyalleri üretmiyor?',
        body: `Kafeteryada veya perakendede yarı zamanlı iş profesyonel başvuruda kullanmak zor. Teslimat işin her gün sıfırlanması nedeniyle kolayca tanımlanamıyor. Proje yok çünkü proje yok. Süpervizörünüzden spesifik bir sonuca katkınızı adlandıran referans isteyemiyorsunuz.\n\nBu yarı zamanlı çalışmanın eleştirisi değil — ne olduğunun ve ne olmadığının tanımı. Belirli kapasiteleri iyi oluşturuyor. Bir mezun işe alımcısının aradığı türde sinyal üretmiyor.`,
      },
      {
        heading: 'Üç aylık yapılandırılmış burs ne üretiyor?',
        body: `OECD araştırması, tanımlanmış bir proje, açık geri bildirim ve adlandırılmış süpervizörle üç aylık yapılandırılmış yerleşimin on iki veya daha fazla aylık yapılandırılmamış maruz kalmaya eşdeğer kariyer sonuçları ürettiğini öne sürüyor.\n\nMekanizma yoğunluk: gerçek bir müşteri angajmanının içinde üç ayda yüzlerce profesyonel karar alıyorsun, bunların çoğu hakkında açık geri bildirim alıyorsun ve gittikten sonra var olan çalışmalar üretiyorsun. Bu uygulamalı deneyim yoğunluğu öğrenme eğrisini sıkıştıran şey.`,
      },
      {
        heading: 'Yapılandırılmış yatırım olarak burs',
        body: `Magenta Networks bursu tam olarak OECD'nin yüksek getirili olarak tanımladığı model etrafında tasarlandı: tanımlanmış teslimablar, haftalık süpervizör geri bildirimi, paydaşlara son sunum ve doğrulanmış çıkış kaydı.\n\nYarı zamanlı iş ile burs arasında seçim yapan bir üniversite öğrencisi için OECD çerçevesi kullanışlıdır: her ikisi de zaman gerektiriyor. Biri devredilebilir kimlik bilgileri ve spesifik referans üretiyor. Diğeri gelir ve genel profesyonel deneyim üretiyor. Hiçbiri yanlış değil — ama kariyer yolunu hızlandırmak hedeflerin buysa eşdeğer değiller.`,
      },
    ],
    cta: { label: 'Burs yapısını gör →', href: '/work-experience' },
  },

  // ── KARİYER REHBERİ ─────────────────────────────────────────────────────
  {
    slug: 'uluslararasi-staj-programi-2026',
    title: 'Uluslararası Staj 2026: Yurt Dışı ve Uzaktan Staj mı, Ulusal Staj mı?',
    description: 'Uluslararası staj programı 2026 rehberi: yurt dışı staj ile Ulusal Staj Programı arasındaki farklar, uzaktan staj imkânları ve hangisini seçmen gerektiği. Kariyer koçundan karşılaştırmalı rehber.',
    tag: 'Kariyer Rehberi',
    readTime: '9 dk',
    sections: [
      {
        heading: 'Mezun olmadan önce fark yaratmak isteyenler için',
        body: `Kariyer koçları, üniversite öğrencilerine düzenli olarak aynı soruyla karşılaşıyor: "Mezun olmadan önce nasıl fark yaratabilirim?"\n\nCevap her seferinde aynı noktaya geliyor: Doğru staj tecrübesi.\n\nAma 2026'da "herhangi bir staj" artık yetmiyor. Üniversite öğrencilerinin önünde iki farklı kulvarda iki büyük fırsat bulunuyor: Bir tarafta devletin sunduğu [Ulusal Staj Programı](/tr/insights/ulusal-staj-programi-rehberi), diğer tarafta Singapur merkezli teknoloji grubu MGN Networks bünyesinde geliştirilen, yapay zeka destekli uluslararası staj platformu [Eduentry.ai](/tr/work-experience).\n\nBu yazıda lokasyon, dil, kullanılan araçlar ve kariyer hedefleri açısından iki yol karşılaştırılıyor — ve net bir karar çerçevesi sunuluyor.`,
      },
      {
        heading: "Uluslararası Staj Nedir ve 2026'da Neden Bu Kadar Önemli?",
        body: `Uluslararası staj; Türkiye sınırlarının dışındaki bir şirkette veya uzaktan çalışarak uluslararası standartlarda deneyim kazanma sürecidir. Yurt dışı ofise gitmek zorunlu değildir — uzaktan staj imkânları sayesinde kampüsünden ayrılmadan küresel bir ekipte yer alabilirsin.\n\n2026'da uluslararası stajın önemi neden arttı? Birkaç somut neden:\n\n**1. İşverenler araç biliyor musun diye soruyor.** Slack, Jira, GitHub, Notion — bunlar artık CV'de "bonus" değil, temel beklenti. Uluslararası staj bu araçları gerçek iş ortamında kullanmayı öğretiyor.\n\n**2. İngilizce artık yeterli değil, kanıtlanması gerekiyor.** B2 sertifikan var ama hiç İngilizce iş ortamında çalışmadın mı? İşverenler farkı anlıyor. Uluslararası staj bu boşluğu kapatıyor.\n\n**3. Küresel network, lokal ağdan daha hızlı büyüyor.** Singapur, Londra veya Amsterdam'daki bir ekiple çalışmış olmak, seni hem yurt içi hem yurt dışı fırsatlar için görünür kılıyor.`,
      },
      {
        heading: "Ulusal Staj Programı: Türkiye'de Güçlü Bir Başlangıç",
        body: `Ulusal Staj Programı, Cumhurbaşkanlığı İnsan Kaynakları Ofisi koordinesinde yürütülen, liyakat esaslı ve objektif bir eşleşme sunan millî kariyer platformudur. Türkiye'de kariyerine güçlü bir zemin kurmak isteyenler için doğru adrestir.\n\n**Güçlü yönleri:**\n- Türkiye'deki kamu ve özel sektörün kapılarını açar\n- Torpilsiz, yetkinlik esaslı sistem\n- Yasal güvence: iş kazası sigortası ve stajyer ödemesi dahil\n- Türkçe kurumsal iletişim ve yerel iş hukuku deneyimi\n- [Kariyer Kapısı](https://kariyerkapisi.cbiko.gov.tr) üzerinden kolay başvuru\n\n**Dikkat edilmesi gerekenler:**\n- Çalışma modeli fiziksel ofis varlığı gerektirir\n- Kullanılan araçlar genellikle MS Office ve yerel kurumsal sistemler\n- Uluslararası network oluşturma fırsatı sınırlı\n\nTürkiye piyasasında kariyer kurmak, yerel kurumsal yapıları öğrenmek ve güçlü bir CV referansı edinmek isteyenler için Ulusal Staj Programı mükemmel bir ilk adımdır.`,
      },
      {
        heading: 'Uluslararası Staj (Eduentry.ai): Sınır Ötesi Kariyer Fırsatı',
        body: `Singapur merkezli MGN Networks teknoloji grubunun geliştirdiği [Eduentry.ai](/tr/work-experience), yapay zeka tabanlı değerlendirme ve eşleşme algoritmasıyla çalışan yeni nesil bir uluslararası staj platformudur. Hedefin sınırları aşmak ve uluslararası ölçekteki şirketlerin radarına girmekse bu platform tam sana göre.\n\n**Güçlü yönleri:**\n- Tamamen uzaktan staj imkânı — kampüsten ayrılmana gerek yok\n- Singapur, Asya-Pasifik ve Avrupa merkezli projeler\n- Slack, Jira, GitHub, Notion, Figma gibi küresel araçları gerçek iş ortamında öğrenme\n- Uluslararası İngilizce iş ortamı ve çok kültürlü ekip deneyimi\n- Yapay zeka destekli adaptif değerlendirme — torpilsiz, yetkinlik odaklı seçim\n- [20 dakikalık ücretsiz bir testle başvuru](/tr/work-experience/apply)\n\n**Dikkat edilmesi gerekenler:**\n- İngilizce iletişim becerisi gerektirir\n- Uzaktan çalışma disiplini ve öz motivasyon şart\n- Seçim rekabetli: en iyi %10 kabul edilir\n\nEduentry.ai sadece bir staj bulma aracı değil; uluslararası düzeyde işe hazır olup olmadığının nesnel bir aynası. MGN Networks'ün küresel ağı seni dünya standartlarında test ediyor.`,
      },
      {
        heading: 'Ulusal Staj Programı ile Uluslararası Staj: Detaylı Karşılaştırma',
        body: `İki programın temel farkları aşağıda yan yana görülebilir.\n\n| Kriter | Ulusal Staj Programı | Uluslararası Staj (Eduentry.ai) |\n|--------|----------------------|---------------------------------|\n| Lokasyon | Türkiye içi, fiziksel ofis | Küresel, tam uzaktan veya hibrit |\n| İletişim Dili | Türkçe, kurumsal yerel | İleri düzey İngilizce |\n| Kullanılan Araçlar | MS Office, yerel ERP/CRM | Slack, Jira, GitHub, Notion, Figma, AI |\n| Değerlendirme | Not ortalaması + akademik başarı | Yapay zeka destekli yetkinlik testi |\n| Kazandırdığı Vizyon | Türkiye iş piyasası ve yerel network | Küresel teknoloji kültürü, uluslararası network |\n| CV'ye Katkısı | Yerli işverenlere güçlü referans | Hem yerli hem yabancıya doğrulanmış deneyim |`,
      },
      {
        heading: 'Uzaktan Staj İmkânları: Kampüsten Çıkmadan Dünyaya Açıl',
        body: `"Yurt dışı staj yapmak istiyorum ama maddi imkânım yok" diyenlerin sayısı azımsanmaz. İşte tam burada uzaktan staj imkânları devreye giriyor.\n\nEduentry.ai modelinde stajın tamamen uzaktan yürütülüyor. Singapur ofisine uçman gerekmiyor. Yurt dışı vizesi, konaklama veya uçak bileti sorunu yok. Laptop'ın ve internet bağlantın varsa, uluslararası bir ekipte yer alabilirsin.\n\nBu ne anlama geliyor? Aynı anda üniversitede okurken, hatta dönem sonu sınavlarına hazırlanırken küresel bir projede çalışmak mümkün. Uzaktan staj imkânları, uluslararası deneyimi artık bir ayrıcalık olmaktan çıkarıp herkes için erişilebilir hale getiriyor.\n\nUzaktan çalışmanın getirdiği ek beceriler de CV'nde güçlü bir yer tutuyor: asenkron iletişim, zaman yönetimi, çok zaman dilimli takım koordinasyonu. Bunlar 2026 iş dünyasının en çok aradığı soft skills arasında.`,
      },
      {
        heading: 'Hangisini Seçmelisin? Koçun Karar Rehberi',
        body: `Hangi programın daha uygun olduğu, hedeflere göre şu şekilde değerlendirilebilir.\n\n**"Hedefim Türkiye'de güçlü bir kurumda kariyer kurmak" diyenler için:**\nUlusal Staj Programı birinci tercih olmalıdır. Fiziksel sahada bulunmak, Türkçe kurumsal dili öğrenmek ve yerel piyasada güçlü referanslar edinmek sağlam bir zemin kuruyor.\n\n**"Yurt dışında veya uzaktan çalışmak, uluslararası araçları kullanmak istiyorum" diyenler için:**\nEduentry.ai doğru kulvardır. Küresel şirketlerin beklediği araçlara hakim olmak ve İngilizce iş ortamına girmek, rakiplerin fersah fersah önüne geçirir.\n\n**"İkisini de istiyorum" diyenler için:**\nÇift kanat stratejisi en akıllı hamledir.`,
      },
      {
        heading: 'Çift Kanat Stratejisi: Hem Ulusal Hem Uluslararası',
        body: `En akıllı kariyer hamlesi iki programı birden kullanmaktır. Ve bu, düşünüldüğünden çok daha mümkün.\n\nDönem içinde [Ulusal Staj Programı](/tr/insights/ulusal-staj-programi-rehberi) aracılığıyla Türkiye'deki köklü bir kurumda saha deneyimi edinilirken, yazın veya eş zamanlı olarak [Eduentry.ai](/tr/work-experience/apply) üzerinden MGN Networks ağıyla uluslararası bir projeye uzaktan katkı sunulabilir.\n\nSonuç? CV'de hem güçlü yerel referans hem doğrulanmış uluslararası deneyim yer alıyor. İşveren görüşmelerinde hem Türkçe kurumsal iletişim hem İngilizce profesyonel ortam deneyimi aktarılabiliyor.\n\n2026'da şirketler artık yalnızca diplomaya bakmıyor. Hangi araçların bilindiğine, hangi dilde problem çözülebildiğine ve nereden çalışılırsa çalışılsın verim üretilip üretilemediğine bakıyor. Çift kanat stratejisi bu üç soruya en güçlü yanıtı veriyor.`,
      },
    ],
    cta: { label: 'Uluslararası Staj için Başvur →', href: '/work-experience/apply' },
  },
  {
    slug: 'ulusal-staj-programi-rehberi',
    title: 'Ulusal Staj Programı 2026: Nedir, Kimler Başvurabilir, Ne Zaman?',
    description: 'Ulusal Staj Programı (USP) 2026 nedir, başvuru şartları nelerdir, kimler başvurabilir ve ne zaman başvurulur? Kariyer koçu bakış açısıyla adım adım rehber.',
    tag: 'Kariyer Rehberi',
    readTime: '8 dk',
    sections: [
      {
        heading: 'Torpile değil yetkinliğe dayalı: Herkese eşit fırsat',
        body: `Üniversitenin ortasında bir yol ayrımı çok tanıdık bir his. Bir yanda staj zorunluluğu, öte yanda "Nereye başvursam?", "Beni kim alır ki?", "CV'm yeterince iyi mi?" soruları.\n\nBu sorular, harekete geçmemiş her yetenekli öğrencinin kafasında dolaşır. Fark yaratan şey bu soruları sormak değil — doğru sistemi bulup o sistemi nasıl kullanacağını öğrenmektir.\n\nUlusal Staj Programı 2026, tam da bu noktada devreye giriyor. Arkası olan, bağlantısı güçlü, CV'si parlak öğrencilere değil — yetkinliğini kanıtlayabilen herkese eşit fırsat sunan millî bir kariyer platformudur. Bu yazıda şu sorulara yanıt aranıyor: Ulusal Staj Programı nedir? Başvuru şartları nelerdir? Kimler başvurabilir? Ne zaman başvurulur? Ve en önemlisi: nasıl öne çıkılır?`,
      },
      {
        heading: 'Ulusal Staj Programı Nedir?',
        body: `Ulusal Staj Programı; Cumhurbaşkanlığı İnsan Kaynakları Ofisi tarafından yürütülen, fırsat eşitliği, şeffaflık ve liyakat ilkelerini temel alan millî bir kariyer platformudur. Öğrencilerin hem kamu kurumlarında hem de özel sektörde staj imkânına ulaşmasını sağlar.\n\nPeki klasik staj ilanlarından farkı ne?\n\nNormal süreçte şöyle işler: İlan açılır, CV gönderilir, işveren isime bakar, üniversiteye bakar, belki tanıdığı biri referans verir. Torpil işler, fırsat eşitsizliği kaçınılmaz olur.\n\nUlusal Staj Programı'nda ise sistem şöyle çalışır: Tek bir genel başvuru yapılır. Sistem yetkinlikleri puanlar. Kimlik bilgileri gizlenerek profil işveren havuzuna sunulur. Kurumlar adayı adı, soyadı, üniversitesi olmadan — yalnızca yetkinlik puanlarıyla değerlendirir. Teklifler doğrudan adaya gelir.\n\nBu ne demek? Demek ki Ulusal Staj Programı 2026'da avantaj; torpilden değil, profilin ne kadar eksiksiz ve doğru doldurulduğundan geliyor. Bu da tamamen öğrencinin kontrolünde.`,
      },
      {
        heading: '2026 Başvuru Şartları: Kimler Başvurabilir?',
        body: `Ulusal Staj Programı 2026 başvuru şartları nelerdir? Aklındaki "Ben uygun muyum?" sorusuna net yanıt verelim.\n\n**Lisans öğrencileri:** Örgün eğitim veren bölümlerin 2., 3. veya 4. sınıf öğrencileri başvurabilir.\n\n**Ön lisans öğrencileri:** Örgün eğitim veren programların 1. veya 2. sınıf öğrencileri uygun.\n\n**Yurt dışında okuyanlar:** Yurt dışındaki üniversitelerde yükseköğrenimine devam eden Türk vatandaşı veya Mavi Kart sahibi öğrenciler de sisteme dahil.\n\nEn çok sorulan soru şu: "Bölümümde zorunlu staj yok, ben de başvurabilir miyim?" Cevap: Evet. Ulusal Staj Programı başvuru şartları arasında zorunlu staj şartı aranmaz. Gönüllü staj yapmak isteyen her öğrenci sisteme katılabilir.\n\nYani ne bölümün ne üniversiten ne de not ortalaman seni otomatik olarak dışarıda bırakır. Kimler başvurabilir sorusunun kısa cevabı şu: uygun sınıfta örgün eğitim gören her üniversite öğrencisi.`,
      },
      {
        heading: 'Ulusal Staj Programı 2026 Ne Zaman Başvurulur?',
        body: `"Ulusal Staj Programı ne zaman başvurulur?" sorusu, öğrencilerin en sık aradığı sorular arasında. İşte bilinmesi gerekenler:\n\nUlusal Staj Programı yıl boyunca aktif bir platform olup başvuru dönemleri periyodik olarak açılır. 2026 yılı başvuru takvimi için tek yapılması gereken [Kariyer Kapısı](https://kariyerkapisi.cbiko.gov.tr)'nı düzenli takip etmektir. Duyurular e-posta bildirimi olarak da iletilir — bu yüzden sisteme kayıt sırasında bildirim tercihlerini açık bırakmak önemlidir.\n\n**Önemli pratik not:** Kariyer Kapısı'na önceden kayıt olmuş ve profilini doldurmuş olan öğrenciler, başvuru dönemi açıldığında anında harekete geçebilir. Dönemi beklerken profili hazır tutmak, açılış gününde çok ciddi bir avantaj sağlar.\n\nStaj tarih aralıkları sisteme girilirken yaz dönemi, sömestr arası veya akademik yıl içi gibi farklı zaman dilimleri seçilebilir. Ne zaman staj yapılabileceğini önceden planlamak süreci kolaylaştırır.`,
      },
      {
        heading: 'Adım Adım Başvuru Süreci: Kariyer Kapısı\'na Giriş\'ten Onaya',
        body: `Başvuru sürecini beş adıma indirgedim. Her adımı okurken şunu düşün: "Bunu bugün yapabilir miyim?" Çünkü yapabilirsin.\n\n**1. Kariyer Kapısı'na Giriş Yap**\n[Kariyer Kapısı](https://kariyerkapisi.cbiko.gov.tr)'na giderek e-Devlet şifrenle sisteme giriş yap. e-Devlet şifren yoksa PTT'den temin edebilirsin — beş dakikalık bir işlem.\n\n**2. e-Devlet Aşamasını Tamamla**\nSistem otomatik olarak akademik verilerini çeker: not ortalaması, yabancı dil belgesi, lise bilgisi gibi. Bu verileri kontrol et, doğruysa onayla. Yanlış bir veri görürsen kaynağını (öğrenci bilgi sistemi vb.) güncellemen gerekebilir.\n\n**3. Başvuru Formunu Doldur — Eksik Bırakma**\nİşte fark yaratan adım bu. Eğitim dışı her kazanımını buraya ekle: katıldığın kulüpler, yürüttüğün projeler, aldığın sertifikalar, sportif veya sanatsal faaliyetler. Küçük gördüğün her şey bir puan. Puanların toplamı seni öne taşır.\n\n**4. Şehir ve Tarih Tercihlerini Belirle**\nStaj yapabileceğin illeri, ilçeleri ve tarih aralıklarını ekle. Ne kadar geniş tutarsan o kadar fazla kurumun önüne çıkarsın.\n\n**5. Onayla ve Takip Et**\nBaşvurunu onayladıktan sonra sistem bildirimleri ve e-posta takibini aktif hale getir. Bir teklif geldiğinde belirli bir süren var — o süreyi kaçırma.`,
      },
      {
        heading: 'Öne Çıkmak İçin 3 Kritik İpucu',
        body: `Ulusal Staj Programı'nda işverenler adayları değerlendirirken adı, üniversiteyi, hatta fotoğrafı görmez. Sadece yetkinlik puanlarını ve profil verilerini görür. Bu da şu anlama geliyor: profilini en eksiksiz hale getiren kazanır.\n\n**1. Belgelerini Mutlaka Yükle**\nDil sınavı sonuçların (YDS, YÖKDİL, TOEFL vb.), Coursera/Udemy sertifikaların, proje katılım belgelerin, topluluk üyeliklerini kanıtlayan belgeler — bunların her biri puanına doğrudan yansır. Yüklemediğin belge, olmayan belge sayılır.\n\n**2. Erken Tamamla, Son Güne Bırakma**\nYüklenen belgeler yapay zeka modelleri ve yetkililer tarafından incelenir. Hatalı bir belge yüklendiğinde düzeltme yapabilmek için zamana ihtiyacın var. Başvurunu son haftaya bırakırsan, hatanı düzeltme şansını kaybedebilirsin.\n\n**3. [Kariyer Kapısı](https://kariyerkapisi.cbiko.gov.tr)'nı Haftalık Rutin Haline Getir**\nTeklif geldiğinde sistemde onay/ret için belirlenmiş bir süre var. Bu süreyi kaçıranlar tekliften düşer. Haftada bir kez Kariyer Kapısı'na girmek — bu kadar küçük bir alışkanlık — seni büyük bir fırsattan mahrum etmekten korur.`,
      },
      {
        heading: 'Staj Yaparken Bilmen Gereken 3 Şey',
        body: `Başvuru sürecini geçip stajı aldıktan sonra da bazı pratik detaylar önemli.\n\n**Sigorta:** Program kapsamında staj yapan tüm öğrencilerin iş kazası ve meslek hastalığı sigortası yasal çerçevede karşılanır. Yani sağlık güvencen var.\n\n**Ücret:** Kamu kurumlarında yapılan stajlarda asgari ücret kanunu çerçevesinde stajyer ödemesi yapılır. Ücretsiz çalışmıyorsun.\n\n**Süre:** Stajlar minimum 20 iş günü olarak planlanır. Kısa ama yoğun — ve doğru kullanılırsa özgeçmişinde çok yer kaplayan bir deneyim.`,
      },
      {
        heading: 'Bir Sonraki Adım: Harekete Geçmek',
        body: `Kariyer araştırmaları, başarılı kariyer yolculuklarının hep küçük ama kararlı bir adımla başladığını gösteriyor. Kimse sihirli bir günde tam hazır olarak kariyer hayatına girmiyor.\n\nÖğrencilerin zihninde dönen soru genellikle aynı: "Ama henüz hazır değilim." Oysa hazır olmanın yolu, başlamaktan geçiyor. Kariyer Kapısı'na giriş yapmak, sistemi incelemek, belgeleri bir yere not almak — bunların her biri o "hazır" noktaya taşıyan adımlar.\n\nGeleceği şansa bırakmak gerekmez. Torpile ihtiyaç yok — ihtiyaç olan şey doğru sistemi doğru kullanmaktır. Ve o sistem şu an, hiçbir ayrım gözetmeksizin, herkesi bekliyor.`,
      },
      {
        heading: 'Uluslararası Staj Deneyimi İçin Farklı Bir Yol',
        body: `Ulusal Staj Programı, Türkiye'deki kamu ve özel sektör kapılarını aralamaktadır. [Uluslararası staj](/tr/insights/uluslararasi-staj-programi-2026) arayanlar içinse farklı bir yol daha mevcut.\n\nEduentry'nin [Magenta Networks Fellowship](/tr/work-experience) programı; Singapur merkezli bir teknoloji şirketinde 3 aylık hibrit staj imkânı sunuyor. [20 dakikalık ücretsiz bir yapay zeka değerlendirmesi](/tr/work-experience/apply)yle başvuruluyor — torpil yok, tanıdık yok. Yalnızca yetkinlik.\n\nHem ulusal hem uluslararası deneyimi birleştirmek isteyenler için iki yolu birden takip etmek en akıllıca hamledir. Kariyer yolculuğunda her kapıyı açık tutmak seçenekleri çoğaltır.`,
      },
    ],
    cta: { label: 'Uluslararası Fellowship için Başvur →', href: '/work-experience/apply' },
  },
]

export const INSIGHT_SLUGS_TR = INSIGHT_POSTS_TR.map(p => p.slug)
