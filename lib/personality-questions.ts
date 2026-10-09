import { getAge } from './utils'

export type Trait =
  | 'curiosity' | 'creativity' | 'love_of_learning' | 'perspective' | 'judgment'
  | 'bravery' | 'perseverance' | 'honesty' | 'zest'
  | 'love' | 'kindness' | 'social_intelligence'
  | 'teamwork' | 'fairness' | 'leadership'
  | 'forgiveness' | 'humility' | 'prudence' | 'self_regulation'
  | 'appreciation_of_beauty' | 'gratitude' | 'hope' | 'humor' | 'spirituality'

export type Tier = 1 | 2 | 3 | 4

export interface PQuestion {
  key: string
  trait: Trait
  text: string
}

export const TRAIT_LABELS: Record<Trait, string> = {
  curiosity:              'Curiosity',
  creativity:             'Creativity',
  love_of_learning:       'Love of Learning',
  perspective:            'Perspective',
  judgment:               'Judgment',
  bravery:                'Bravery',
  perseverance:           'Perseverance',
  honesty:                'Honesty',
  zest:                   'Zest',
  love:                   'Love',
  kindness:               'Kindness',
  social_intelligence:    'Social Intelligence',
  teamwork:               'Teamwork',
  fairness:               'Fairness',
  leadership:             'Leadership',
  forgiveness:            'Forgiveness',
  humility:               'Humility',
  prudence:               'Prudence',
  self_regulation:        'Self-Regulation',
  appreciation_of_beauty: 'Appreciation of Beauty',
  gratitude:              'Gratitude',
  hope:                   'Hope',
  humor:                  'Humor',
  spirituality:           'Spirituality',
}

export const TRAIT_DESCRIPTIONS: Record<Trait, string> = {
  curiosity:              'A deep desire to explore and understand the world.',
  creativity:             'Finding new and original ways to think and make things.',
  love_of_learning:       'A passion for mastering new skills and knowledge.',
  perspective:            'Offering wise counsel and seeing the bigger picture.',
  judgment:               'Thinking things through and examining ideas from all angles.',
  bravery:                'Acting despite fear, doubt, or difficulty.',
  perseverance:           'Finishing what you start, even when it is hard.',
  honesty:                'Speaking the truth and living with integrity.',
  zest:                   'Approaching life with energy and enthusiasm.',
  love:                   'Valuing deep, caring relationships with others.',
  kindness:               'Doing good for others — being generous and caring.',
  social_intelligence:    'Understanding feelings and knowing how to fit in socially.',
  teamwork:               'Working well as part of a group toward shared goals.',
  fairness:               'Treating everyone equally and justly.',
  leadership:             'Organising groups and encouraging them to get things done.',
  forgiveness:            'Letting go of hurt and giving people second chances.',
  humility:               'Not seeking the spotlight and acknowledging your own limits.',
  prudence:               'Being careful about choices and avoiding undue risks.',
  self_regulation:        'Managing your emotions, impulses, and habits.',
  appreciation_of_beauty: 'Noticing and being moved by beauty all around you.',
  gratitude:              'Being aware of and thankful for the good in life.',
  hope:                   'Believing in and working toward a bright future.',
  humor:                  'Bringing lightness and laughter to yourself and others.',
  spirituality:           'Having beliefs about a higher purpose and meaning in life.',
}

export const TRAIT_VIRTUE: Record<Trait, string> = {
  curiosity: 'Wisdom', creativity: 'Wisdom', love_of_learning: 'Wisdom',
  perspective: 'Wisdom', judgment: 'Wisdom',
  bravery: 'Courage', perseverance: 'Courage', honesty: 'Courage', zest: 'Courage',
  love: 'Humanity', kindness: 'Humanity', social_intelligence: 'Humanity',
  teamwork: 'Justice', fairness: 'Justice', leadership: 'Justice',
  forgiveness: 'Temperance', humility: 'Temperance', prudence: 'Temperance', self_regulation: 'Temperance',
  appreciation_of_beauty: 'Transcendence', gratitude: 'Transcendence',
  hope: 'Transcendence', humor: 'Transcendence', spirituality: 'Transcendence',
}

// Traits per tier (cumulative)
const TIER1_TRAITS: Trait[] = [
  'curiosity', 'creativity', 'kindness', 'bravery', 'fairness',
  'gratitude', 'zest', 'love', 'teamwork', 'perseverance', 'humor', 'honesty',
]
const TIER2_TRAITS: Trait[] = [...TIER1_TRAITS, 'love_of_learning', 'leadership', 'self_regulation']
const TIER3_TRAITS: Trait[] = [...TIER2_TRAITS, 'judgment', 'social_intelligence', 'forgiveness', 'hope', 'perspective']
const TIER4_TRAITS: Trait[] = [...TIER3_TRAITS, 'appreciation_of_beauty', 'humility', 'prudence', 'spirituality']

export const TRAITS_BY_TIER: Record<Tier, Trait[]> = {
  1: TIER1_TRAITS,
  2: TIER2_TRAITS,
  3: TIER3_TRAITS,
  4: TIER4_TRAITS,
}

type QuestionLocale = 'en' | 'fr' | 'es' | 'ar' | 'tr' | 'ru' | 'zh'

// Question texts per trait — 2 questions each
// Written from a parent's perspective
const QUESTION_TEXT_I18N: Record<QuestionLocale, Record<Trait, [string, string]>> = {
  en: {
  curiosity: [
    'My child asks lots of questions about how things work.',
    'My child gets excited when they discover something new.',
  ],
  creativity: [
    'My child loves making up stories, drawings, or new games.',
    'My child finds different or surprising ways to solve problems.',
  ],
  kindness: [
    'My child tries to help others when they are sad or hurt.',
    'My child shares willingly with friends or siblings.',
  ],
  bravery: [
    'My child tries things even when they feel nervous.',
    'My child stands up for what they think is right.',
  ],
  fairness: [
    'My child gets upset when rules are not fair.',
    'My child treats everyone the same, no matter who they are.',
  ],
  gratitude: [
    'My child says thank you and appreciates what others do for them.',
    'My child often notices the good things in their life.',
  ],
  zest: [
    'My child throws themselves into activities with lots of energy.',
    'My child seems excited and lively in most things they do.',
  ],
  love: [
    'My child shows a lot of warmth and affection to those close to them.',
    'My child feels happy when people they care about are doing well.',
  ],
  teamwork: [
    'My child enjoys working together with others.',
    'My child does their fair share when working in a group.',
  ],
  perseverance: [
    'My child keeps trying even when something is difficult.',
    'My child finishes tasks they start, even when they get bored.',
  ],
  humor: [
    'My child loves to laugh and make others laugh.',
    'My child uses funny observations to lighten the mood.',
  ],
  honesty: [
    'My child tells the truth even when it is difficult.',
    'My child does what they say they will do.',
  ],
  love_of_learning: [
    'My child loves mastering new skills and topics beyond what school requires.',
    'My child seeks out interesting information just because they are curious.',
  ],
  leadership: [
    'My child naturally takes charge in group situations.',
    'My child encourages others and helps the group stay focused.',
  ],
  self_regulation: [
    'My child can manage their emotions in difficult situations.',
    'My child thinks before reacting rather than acting on impulse.',
  ],
  judgment: [
    'My child looks at all sides of an issue before making a decision.',
    'My child is willing to change their mind when they get new information.',
  ],
  social_intelligence: [
    'My child understands how people are feeling and adjusts their approach accordingly.',
    'My child knows the right thing to say or do in most social situations.',
  ],
  forgiveness: [
    'My child lets go of grudges and moves on after conflicts.',
    'My child gives people a second chance when they make mistakes.',
  ],
  hope: [
    'My child believes that good things will happen in their future.',
    'My child stays positive even when things go wrong.',
  ],
  perspective: [
    'My child thinks about the bigger picture when dealing with problems.',
    'Others come to my child for advice because they offer a thoughtful view.',
  ],
  appreciation_of_beauty: [
    'My child notices and appreciates beauty in art, music, nature, or everyday life.',
    'My child is moved by excellence in creative works or the natural world.',
  ],
  humility: [
    'My child does not seek to be the centre of attention.',
    'My child acknowledges their mistakes and limitations honestly.',
  ],
  prudence: [
    'My child thinks carefully about long-term consequences before making decisions.',
    'My child avoids choices they might later regret.',
  ],
  spirituality: [
    'My child has a clear sense of meaning and purpose in life.',
    'My child finds comfort and strength in their beliefs or values.',
  ],
  },
  tr: {
    curiosity: ['Çocuğum işlerin nasıl çalıştığı hakkında çok soru sorar.', 'Çocuğum yeni bir şey keşfettiğinde heyecanlanır.'],
    creativity: ['Çocuğum hikayeler, çizimler veya yeni oyunlar uydurmayı sever.', 'Çocuğum sorunları farklı veya şaşırtıcı yollarla çözer.'],
    kindness: ['Çocuğum üzgün veya yaralı olduğunda başkalarına yardım etmeye çalışır.', 'Çocuğum arkadaşları veya kardeşleriyle isteyerek paylaşır.'],
    bravery: ['Çocuğum gergin hissetse bile bir şeyleri dener.', 'Çocuğum doğru olduğunu düşündüğü şey için hakkını savunur.'],
    fairness: ['Çocuğum kurallar adil olmadığında üzülür.', 'Çocuğum kim olursa olsun herkese eşit davranır.'],
    gratitude: ['Çocuğum teşekkür eder ve başkalarının yaptıklarını takdir eder.', 'Çocuğum hayatındaki güzel şeyleri sık sık fark eder.'],
    zest: ['Çocuğum etkinliklere çok enerjiyle katılır.', 'Çocuğum yaptığı çoğu şeyde heyecanlı ve canlı görünür.'],
    love: ['Çocuğum yakınlarına çok sevgi ve şefkat gösterir.', 'Önem verdiği kişiler iyi olduğunda çocuğum mutlu olur.'],
    teamwork: ['Çocuğum başkalarıyla birlikte çalışmaktan zevk alır.', 'Çocuğum bir grupta çalışırken üzerine düşeni yapar.'],
    perseverance: ['Çocuğum bir şey zor olduğunda bile denemeye devam eder.', 'Çocuğum sıkılsa bile başladığı görevleri tamamlar.'],
    humor: ['Çocuğum gülmeyi ve başkalarını güldürmeyi sever.', 'Çocuğum ortamı hafifletmek için komik gözlemler yapar.'],
    honesty: ['Çocuğum zor olsa bile doğruyu söyler.', 'Çocuğum söylediklerini yapar.'],
    love_of_learning: ['Çocuğum okul müfredatının ötesinde yeni beceriler ve konular öğrenmekten zevk alır.', 'Çocuğum sadece merakından dolayı ilginç bilgiler araştırır.'],
    leadership: ['Çocuğum grup ortamlarında doğal olarak inisiyatif alır.', 'Çocuğum başkalarını cesaretlendirir ve grubun odaklanmasına yardımcı olur.'],
    self_regulation: ['Çocuğum zor durumlarda duygularını yönetebilir.', 'Çocuğum dürtüsel davranmak yerine tepki vermeden önce düşünür.'],
    judgment: ['Çocuğum karar vermeden önce bir konunun tüm yönlerine bakar.', 'Çocuğum yeni bilgi edindiğinde fikrini değiştirmeye hazırdır.'],
    social_intelligence: ['Çocuğum insanların nasıl hissettiğini anlar ve yaklaşımını buna göre ayarlar.', 'Çocuğum çoğu sosyal durumda doğru şeyi söyler veya yapar.'],
    forgiveness: ['Çocuğum çatışmalardan sonra kırgınlıklarını bırakır ve devam eder.', 'Çocuğum hata yapan insanlara ikinci bir şans verir.'],
    hope: ['Çocuğum gelecekte iyi şeyler olacağına inanır.', 'Çocuğum işler ters gittiğinde bile olumlu kalır.'],
    perspective: ['Çocuğum sorunlarla uğraşırken büyük resmi düşünür.', 'Başkaları düşünceli bir bakış açısı sunduğu için çocuğumdan tavsiye ister.'],
    appreciation_of_beauty: ['Çocuğum sanatta, müzikte, doğada veya günlük hayatta güzelliği fark eder ve takdir eder.', 'Çocuğum yaratıcı eserlerdeki veya doğal dünyadaki mükemmelliği görünce etkilenir.'],
    humility: ['Çocuğum ilgi odağı olmayı aramaz.', 'Çocuğum hatalarını ve sınırlarını dürüstçe kabul eder.'],
    prudence: ['Çocuğum karar vermeden önce uzun vadeli sonuçları dikkatlice düşünür.', 'Çocuğum ileride pişman olabileceği seçimlerden kaçınır.'],
    spirituality: ['Çocuğum hayatta net bir anlam ve amaç duygusuna sahiptir.', 'Çocuğum inançlarında veya değerlerinde güç ve teselli bulur.'],
  },
  fr: {
    curiosity: ["Mon enfant pose beaucoup de questions sur le fonctionnement des choses.", "Mon enfant est enthousiaste lorsqu'il/elle découvre quelque chose de nouveau."],
    creativity: ["Mon enfant aime inventer des histoires, dessiner ou créer de nouveaux jeux.", "Mon enfant trouve des façons différentes ou surprenantes de résoudre les problèmes."],
    kindness: ["Mon enfant essaie d'aider les autres quand ils sont tristes ou blessés.", "Mon enfant partage volontiers avec ses amis ou frères et sœurs."],
    bravery: ["Mon enfant essaie des choses même quand il/elle se sent nerveux/se.", "Mon enfant défend ce qu'il/elle pense être juste."],
    fairness: ["Mon enfant se met en colère quand les règles ne sont pas justes.", "Mon enfant traite tout le monde de la même façon, peu importe qui c'est."],
    gratitude: ["Mon enfant dit merci et apprécie ce que les autres font pour lui/elle.", "Mon enfant remarque souvent les bonnes choses dans sa vie."],
    zest: ["Mon enfant se lance dans les activités avec beaucoup d'énergie.", "Mon enfant semble enthousiaste et plein(e) de vie dans la plupart des choses qu'il/elle fait."],
    love: ["Mon enfant montre beaucoup de chaleur et d'affection à ceux qui lui sont proches.", "Mon enfant est heureux/se quand les gens qu'il/elle aime vont bien."],
    teamwork: ["Mon enfant aime travailler avec les autres.", "Mon enfant fait sa part quand il/elle travaille en groupe."],
    perseverance: ["Mon enfant continue d'essayer même quand quelque chose est difficile.", "Mon enfant termine les tâches qu'il/elle commence, même quand il/elle s'ennuie."],
    humor: ["Mon enfant adore rire et faire rire les autres.", "Mon enfant utilise des observations amusantes pour alléger l'atmosphère."],
    honesty: ["Mon enfant dit la vérité même quand c'est difficile.", "Mon enfant fait ce qu'il/elle dit qu'il/elle fera."],
    love_of_learning: ["Mon enfant aime maîtriser de nouvelles compétences et sujets au-delà de ce que l'école exige.", "Mon enfant cherche des informations intéressantes juste parce qu'il/elle est curieux/se."],
    leadership: ["Mon enfant prend naturellement les commandes dans les situations de groupe.", "Mon enfant encourage les autres et aide le groupe à rester concentré."],
    self_regulation: ["Mon enfant peut gérer ses émotions dans des situations difficiles.", "Mon enfant réfléchit avant de réagir plutôt que d'agir impulsivement."],
    judgment: ["Mon enfant examine tous les aspects d'un problème avant de prendre une décision.", "Mon enfant est prêt(e) à changer d'avis lorsqu'il/elle obtient de nouvelles informations."],
    social_intelligence: ["Mon enfant comprend comment les gens se sentent et adapte son approche en conséquence.", "Mon enfant sait quoi dire ou faire dans la plupart des situations sociales."],
    forgiveness: ["Mon enfant laisse tomber les rancœurs et passe à autre chose après un conflit.", "Mon enfant donne une seconde chance aux personnes qui font des erreurs."],
    hope: ["Mon enfant croit que de bonnes choses se produiront dans son avenir.", "Mon enfant reste positif(ve) même quand les choses tournent mal."],
    perspective: ["Mon enfant pense à la vue d'ensemble face aux problèmes.", "Les autres consultent mon enfant pour un avis réfléchi."],
    appreciation_of_beauty: ["Mon enfant remarque et apprécie la beauté dans l'art, la musique, la nature ou la vie quotidienne.", "Mon enfant est touché(e) par l'excellence dans les œuvres créatives ou le monde naturel."],
    humility: ["Mon enfant ne cherche pas à être le centre d'attention.", "Mon enfant reconnaît honnêtement ses erreurs et ses limites."],
    prudence: ["Mon enfant réfléchit soigneusement aux conséquences à long terme avant de prendre des décisions.", "Mon enfant évite les choix dont il/elle pourrait se repentir plus tard."],
    spirituality: ["Mon enfant a un sens clair du sens et du but dans la vie.", "Mon enfant trouve réconfort et force dans ses croyances ou ses valeurs."],
  },
  es: {
    curiosity: ['Mi hijo/a hace muchas preguntas sobre cómo funcionan las cosas.', 'Mi hijo/a se emociona cuando descubre algo nuevo.'],
    creativity: ['Mi hijo/a disfruta inventando historias, dibujos o juegos nuevos.', 'Mi hijo/a encuentra formas diferentes o sorprendentes de resolver problemas.'],
    kindness: ['Mi hijo/a intenta ayudar a los demás cuando están tristes o heridos.', 'Mi hijo/a comparte de buena gana con amigos o hermanos.'],
    bravery: ['Mi hijo/a prueba cosas aunque se sienta nervioso/a.', 'Mi hijo/a defiende lo que cree que es correcto.'],
    fairness: ['Mi hijo/a se molesta cuando las reglas no son justas.', 'Mi hijo/a trata a todos por igual, sin importar quién sea.'],
    gratitude: ['Mi hijo/a da las gracias y aprecia lo que otros hacen por él/ella.', 'Mi hijo/a a menudo nota las cosas buenas en su vida.'],
    zest: ['Mi hijo/a se lanza a las actividades con mucha energía.', 'Mi hijo/a parece entusiasta y lleno/a de vida en la mayoría de las cosas que hace.'],
    love: ['Mi hijo/a muestra mucho cariño y afecto a quienes le son cercanos.', 'Mi hijo/a se siente feliz cuando las personas que le importan están bien.'],
    teamwork: ['Mi hijo/a disfruta trabajar junto a otros.', 'Mi hijo/a pone de su parte cuando trabaja en grupo.'],
    perseverance: ['Mi hijo/a sigue intentándolo aunque algo sea difícil.', 'Mi hijo/a termina las tareas que empieza, aunque se aburra.'],
    humor: ['Mi hijo/a adora reír y hacer reír a los demás.', 'Mi hijo/a usa observaciones divertidas para aligerar el ambiente.'],
    honesty: ['Mi hijo/a dice la verdad aunque sea difícil.', 'Mi hijo/a hace lo que dice que hará.'],
    love_of_learning: ['Mi hijo/a disfruta aprendiendo nuevas habilidades y temas más allá de lo que exige la escuela.', 'Mi hijo/a busca información interesante simplemente porque tiene curiosidad.'],
    leadership: ['Mi hijo/a toma la iniciativa de forma natural en situaciones de grupo.', 'Mi hijo/a anima a los demás y ayuda al grupo a mantenerse enfocado.'],
    self_regulation: ['Mi hijo/a puede manejar sus emociones en situaciones difíciles.', 'Mi hijo/a piensa antes de reaccionar en lugar de actuar impulsivamente.'],
    judgment: ['Mi hijo/a examina todos los aspectos de un asunto antes de tomar una decisión.', 'Mi hijo/a está dispuesto/a a cambiar de opinión cuando recibe nueva información.'],
    social_intelligence: ['Mi hijo/a entiende cómo se sienten las personas y ajusta su enfoque en consecuencia.', 'Mi hijo/a sabe qué decir o hacer en la mayoría de las situaciones sociales.'],
    forgiveness: ['Mi hijo/a deja ir los rencores y sigue adelante después de los conflictos.', 'Mi hijo/a da una segunda oportunidad a las personas que cometen errores.'],
    hope: ['Mi hijo/a cree que le pasarán cosas buenas en el futuro.', 'Mi hijo/a se mantiene positivo/a incluso cuando las cosas van mal.'],
    perspective: ['Mi hijo/a piensa en el panorama general al enfrentarse a los problemas.', 'Los demás acuden a mi hijo/a en busca de consejo por su visión reflexiva.'],
    appreciation_of_beauty: ['Mi hijo/a nota y aprecia la belleza en el arte, la música, la naturaleza o la vida cotidiana.', 'Mi hijo/a se conmueve por la excelencia en obras creativas o el mundo natural.'],
    humility: ['Mi hijo/a no busca ser el centro de atención.', 'Mi hijo/a reconoce honestamente sus errores y limitaciones.'],
    prudence: ['Mi hijo/a reflexiona detenidamente sobre las consecuencias a largo plazo antes de tomar decisiones.', 'Mi hijo/a evita elecciones de las que podría arrepentirse más tarde.'],
    spirituality: ['Mi hijo/a tiene un claro sentido de significado y propósito en la vida.', 'Mi hijo/a encuentra consuelo y fuerza en sus creencias o valores.'],
  },
  ar: {
    curiosity: ['يطرح طفلي الكثير من الأسئلة حول كيفية عمل الأشياء.', 'يتحمس طفلي عندما يكتشف شيئاً جديداً.'],
    creativity: ['يحب طفلي اختراع القصص والرسومات أو الألعاب الجديدة.', 'يجد طفلي طرقاً مختلفة أو مفاجئة لحل المشكلات.'],
    kindness: ['يحاول طفلي مساعدة الآخرين عندما يكونون حزينين أو مؤلمين.', 'يتشارك طفلي بسعادة مع الأصدقاء أو الأشقاء.'],
    bravery: ['يجرب طفلي الأشياء حتى عندما يشعر بالتوتر.', 'يدافع طفلي عما يعتقد أنه صواب.'],
    fairness: ['يضايق طفلي عندما لا تكون القواعد عادلة.', 'يعامل طفلي الجميع بالمساواة بغض النظر عن هويتهم.'],
    gratitude: ['يقول طفلي شكراً ويقدّر ما يفعله الآخرون له.', 'كثيراً ما يلاحظ طفلي الأشياء الجيدة في حياته.'],
    zest: ['ينخرط طفلي في الأنشطة بطاقة كبيرة.', 'يبدو طفلي متحمساً ونشيطاً في معظم ما يفعله.'],
    love: ['يُظهر طفلي الكثير من الدفء والمودة لمن هم قريبون منه.', 'يشعر طفلي بالسعادة عندما يكون المقربون منه بخير.'],
    teamwork: ['يستمتع طفلي بالعمل مع الآخرين.', 'يؤدي طفلي نصيبه العادل عند العمل ضمن مجموعة.'],
    perseverance: ['يواصل طفلي المحاولة حتى عندما يكون الأمر صعباً.', 'يُنهي طفلي المهام التي يبدأها حتى عندما يشعر بالملل.'],
    humor: ['يحب طفلي الضحك وإضحاك الآخرين.', 'يستخدم طفلي ملاحظات مضحكة لتخفيف التوتر.'],
    honesty: ['يقول طفلي الحقيقة حتى عندما تكون صعبة.', 'يفعل طفلي ما يقول إنه سيفعله.'],
    love_of_learning: ['يحب طفلي اكتساب مهارات ومواضيع جديدة بما يتجاوز ما تتطلبه المدرسة.', 'يبحث طفلي عن معلومات مثيرة للاهتمام بدافع الفضول فقط.'],
    leadership: ['يتولى طفلي قيادة المجموعة بشكل طبيعي.', 'يشجع طفلي الآخرين ويساعد المجموعة على البقاء منتبهة.'],
    self_regulation: ['يستطيع طفلي إدارة مشاعره في المواقف الصعبة.', 'يفكر طفلي قبل أن يتفاعل بدلاً من التصرف باندفاع.'],
    judgment: ['ينظر طفلي إلى جميع جوانب المسألة قبل اتخاذ قرار.', 'يكون طفلي مستعداً لتغيير رأيه عند الحصول على معلومات جديدة.'],
    social_intelligence: ['يفهم طفلي مشاعر الناس ويكيّف أسلوبه وفقاً لذلك.', 'يعرف طفلي ما يجب قوله أو فعله في معظم المواقف الاجتماعية.'],
    forgiveness: ['يتخلص طفلي من الضغائن ويمضي قدماً بعد النزاعات.', 'يمنح طفلي الناس فرصة ثانية عندما يرتكبون أخطاء.'],
    hope: ['يؤمن طفلي بأن أشياء جيدة ستحدث في مستقبله.', 'يبقى طفلي متفائلاً حتى عندما تسوء الأمور.'],
    perspective: ['يفكر طفلي في الصورة الأكبر عند التعامل مع المشكلات.', 'يلجأ الآخرون إلى طفلي للحصول على رأي متأمل.'],
    appreciation_of_beauty: ['يلاحظ طفلي الجمال ويقدّره في الفن والموسيقى والطبيعة أو الحياة اليومية.', 'يتأثر طفلي بالتميز في الأعمال الإبداعية أو العالم الطبيعي.'],
    humility: ['لا يسعى طفلي لأن يكون مركز الاهتمام.', 'يعترف طفلي بأخطائه وحدوده بصدق.'],
    prudence: ['يفكر طفلي بعناية في العواقب طويلة الأمد قبل اتخاذ القرارات.', 'يتجنب طفلي الخيارات التي قد يندم عليها لاحقاً.'],
    spirituality: ['لدى طفلي إحساس واضح بالمعنى والهدف في الحياة.', 'يجد طفلي الراحة والقوة في معتقداته أو قيمه.'],
  },
  ru: {
    curiosity: ['Мой ребёнок задаёт много вопросов о том, как устроен мир.', 'Мой ребёнок радуется, когда открывает для себя что-то новое.'],
    creativity: ['Мой ребёнок любит придумывать истории, рисовать или изобретать новые игры.', 'Мой ребёнок находит неожиданные и оригинальные способы решения задач.'],
    kindness: ['Мой ребёнок старается помочь другим, когда те грустят или получили травму.', 'Мой ребёнок охотно делится с друзьями или братьями и сёстрами.'],
    bravery: ['Мой ребёнок пробует что-то новое, даже если волнуется.', 'Мой ребёнок отстаивает то, что считает правильным.'],
    fairness: ['Мой ребёнок расстраивается, когда правила несправедливы.', 'Мой ребёнок относится ко всем одинаково, вне зависимости от того, кто это.'],
    gratitude: ['Мой ребёнок говорит «спасибо» и ценит то, что делают для него другие.', 'Мой ребёнок часто замечает хорошее в своей жизни.'],
    zest: ['Мой ребёнок с большой энергией берётся за занятия.', 'Мой ребёнок выглядит оживлённым и радостным в большинстве дел.'],
    love: ['Мой ребёнок проявляет много тепла и привязанности к близким.', 'Мой ребёнок радуется, когда дела у его близких идут хорошо.'],
    teamwork: ['Мой ребёнок любит работать вместе с другими.', 'Мой ребёнок вносит свой вклад при работе в группе.'],
    perseverance: ['Мой ребёнок продолжает стараться, даже когда что-то трудно.', 'Мой ребёнок доводит начатые дела до конца, даже когда скучно.'],
    humor: ['Мой ребёнок обожает смеяться и смешить других.', 'Мой ребёнок использует забавные наблюдения, чтобы разрядить обстановку.'],
    honesty: ['Мой ребёнок говорит правду, даже когда это трудно.', 'Мой ребёнок делает то, что обещает.'],
    love_of_learning: ['Мой ребёнок любит осваивать новые навыки и темы, выходящие за рамки школьной программы.', 'Мой ребёнок ищет интересную информацию просто из любопытства.'],
    leadership: ['Мой ребёнок естественно берёт на себя инициативу в групповых ситуациях.', 'Мой ребёнок подбадривает других и помогает группе не отвлекаться.'],
    self_regulation: ['Мой ребёнок умеет справляться со своими эмоциями в трудных ситуациях.', 'Мой ребёнок думает, прежде чем реагировать, а не действует импульсивно.'],
    judgment: ['Мой ребёнок рассматривает все стороны вопроса, прежде чем принять решение.', 'Мой ребёнок готов изменить своё мнение при получении новой информации.'],
    social_intelligence: ['Мой ребёнок понимает, как чувствуют себя люди, и соответствующим образом выстраивает общение.', 'Мой ребёнок знает, что сказать или сделать в большинстве социальных ситуаций.'],
    forgiveness: ['Мой ребёнок отпускает обиды и движется дальше после конфликтов.', 'Мой ребёнок даёт людям второй шанс, когда они ошибаются.'],
    hope: ['Мой ребёнок верит, что в его будущем произойдут хорошие события.', 'Мой ребёнок сохраняет позитивный настрой, даже когда что-то идёт не так.'],
    perspective: ['Мой ребёнок видит общую картину при решении проблем.', 'Другие обращаются к моему ребёнку за советом, ценя его взвешенный взгляд.'],
    appreciation_of_beauty: ['Мой ребёнок замечает и ценит красоту в искусстве, музыке, природе или повседневной жизни.', 'Мой ребёнок восхищается мастерством в творческих работах или природном мире.'],
    humility: ['Мой ребёнок не стремится быть в центре внимания.', 'Мой ребёнок честно признаёт свои ошибки и ограничения.'],
    prudence: ['Мой ребёнок тщательно обдумывает долгосрочные последствия, прежде чем принять решение.', 'Мой ребёнок избегает выборов, о которых может пожалеть позже.'],
    spirituality: ['У моего ребёнка есть чёткое ощущение смысла и цели в жизни.', 'Мой ребёнок находит утешение и силу в своих убеждениях или ценностях.'],
  },
  zh: {
    curiosity: ['我的孩子经常问关于事物运作方式的问题。', '我的孩子在发现新事物时会感到兴奋。'],
    creativity: ['我的孩子喜欢编故事、画画或发明新游戏。', '我的孩子会以不同或出人意料的方式解决问题。'],
    kindness: ['当别人伤心或受伤时，我的孩子会尝试去帮助他们。', '我的孩子愿意与朋友或兄弟姐妹分享。'],
    bravery: ['即使感到紧张，我的孩子也会尝试新事物。', '我的孩子会为自己认为正确的事情挺身而出。'],
    fairness: ['当规则不公平时，我的孩子会感到不满。', '我的孩子无论面对谁都一视同仁。'],
    gratitude: ['我的孩子会说谢谢，并感谢别人为他/她所做的事。', '我的孩子经常注意到生活中美好的事情。'],
    zest: ['我的孩子以充沛的精力投入各项活动。', '我的孩子在大多数事情上都显得充满热情和活力。'],
    love: ['我的孩子对亲近的人表现出很多温暖和爱意。', '当在意的人过得好时，我的孩子会感到高兴。'],
    teamwork: ['我的孩子喜欢与他人合作。', '我的孩子在团队合作时会尽自己的一份力。'],
    perseverance: ['即使遇到困难，我的孩子也会坚持尝试。', '即使感到无聊，我的孩子也会完成已开始的任务。'],
    humor: ['我的孩子喜欢大笑，也喜欢逗别人笑。', '我的孩子会用有趣的观察来活跃气氛。'],
    honesty: ['即使很难，我的孩子也会说实话。', '我的孩子会做到自己说过的事。'],
    love_of_learning: ['我的孩子喜欢掌握超出学校要求的新技能和知识。', '我的孩子会纯粹出于好奇去探索有趣的信息。'],
    leadership: ['我的孩子在团队环境中自然而然地承担领导角色。', '我的孩子会鼓励他人，并帮助团队保持专注。'],
    self_regulation: ['在困难情况下，我的孩子能够管理自己的情绪。', '我的孩子会先思考再反应，而不是冲动行事。'],
    judgment: ['在做决定之前，我的孩子会全面审视问题的各个方面。', '当获得新信息时，我的孩子愿意改变看法。'],
    social_intelligence: ['我的孩子能理解别人的感受，并相应地调整自己的方式。', '在大多数社交场合，我的孩子知道该说什么或做什么。'],
    forgiveness: ['在冲突之后，我的孩子能放下怨恨并继续前行。', '当别人犯错时，我的孩子会给予第二次机会。'],
    hope: ['我的孩子相信未来会有好事发生。', '即使事情出了差错，我的孩子也能保持乐观。'],
    perspective: ['在处理问题时，我的孩子会从全局角度思考。', '他人会向我的孩子寻求建议，因为他/她能提供深思熟虑的见解。'],
    appreciation_of_beauty: ['我的孩子会注意并欣赏艺术、音乐、自然或日常生活中的美。', '我的孩子会被创意作品或自然世界中的精彩所打动。'],
    humility: ['我的孩子不刻意寻求成为关注的焦点。', '我的孩子能坦诚地承认自己的错误和不足。'],
    prudence: ['在做决定之前，我的孩子会仔细考虑长期后果。', '我的孩子会避免可能让自己后悔的选择。'],
    spirituality: ['我的孩子对生命的意义和目的有清晰的感知。', '我的孩子从自己的信仰或价值观中找到慰藉和力量。'],
  },
}

export function getTier(dateOfBirth: string): Tier {
  const age = getAge(dateOfBirth)
  if (age <= 9)  return 1
  if (age <= 13) return 2
  if (age <= 17) return 3
  return 4
}

export function getQuestions(tier: Tier, locale?: string): PQuestion[] {
  const texts = QUESTION_TEXT_I18N[(locale as QuestionLocale) ?? 'en'] ?? QUESTION_TEXT_I18N.en
  return TRAITS_BY_TIER[tier].flatMap((trait) =>
    texts[trait].map((text, i) => ({
      key: `${trait}_${i + 1}`,
      trait,
      text,
    }))
  )
}

export function computeTraitScores(answers: { question_key: string; score: number }[]): Record<Trait, number> {
  const sums: Record<string, number> = {}
  const counts: Record<string, number> = {}
  for (const { question_key, score } of answers) {
    const trait = question_key.replace(/_\d+$/, '')
    sums[trait] = (sums[trait] ?? 0) + score
    counts[trait] = (counts[trait] ?? 0) + 1
  }
  const result: Record<string, number> = {}
  for (const trait of Object.keys(sums)) {
    result[trait] = Math.round((sums[trait] / counts[trait]) * 10) / 10
  }
  return result as Record<Trait, number>
}

export function getTopStrengths(scores: Record<Trait, number>, n = 3): Trait[] {
  return (Object.entries(scores) as [Trait, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([t]) => t)
}

export function getGrowthAreas(scores: Record<Trait, number>, n = 2): Trait[] {
  return (Object.entries(scores) as [Trait, number][])
    .sort((a, b) => a[1] - b[1])
    .slice(0, n)
    .map(([t]) => t)
}
