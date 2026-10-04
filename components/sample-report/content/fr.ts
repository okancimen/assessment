import type { SampleReportContent } from '../types'

const content: SampleReportContent = {
  locale: 'fr',
  path: '/fr/exemple-de-rapport',
  inLanguage: 'fr',
  ogLocale: 'fr_FR',
  meta: {
    title: 'Exemple de Rapport d\'Évaluation : Découvrez ce que Vous Recevrez',
    description: 'Découvrez un vrai rapport d\'évaluation Eduentry : score standardisé, rang percentile, détail par matière, analyse par thème et recommandations personnalisées.',
    keywords: ['exemple de rapport d\'évaluation', 'exemple rapport eduentry', 'exemple de bilan scolaire enfant', 'rapport de score standardisé', 'rapport percentile', 'résultats test gratuit enfant'],
    ogTitle: 'Exemple de Rapport d\'Évaluation — Eduentry',
    ogDescription: 'Découvrez exactement à quoi ressemble le rapport de votre enfant : score standardisé, détail par matière et recommandations personnalisées.',
  },
  childName: 'Alex',
  completedDate: '14 septembre 2026',

  banner: 'Exemple de rapport pour un enfant fictif — pour que vous voyiez exactement ce que vous recevrez.',
  bannerCta: 'Obtenez le vrai rapport de votre enfant →',
  breadcrumbHome: 'Accueil',
  breadcrumbCurrent: 'Exemple de rapport',

  sampleBadge: 'Exemple de rapport · {name}, {age} ans',
  heading: 'Résultats d\'évaluation de {name}',
  completedLine: 'Terminé le {date} · 60 questions · 4 matières',
  overall: 'Global',
  topPercent: 'Top {pct} % pour {age} ans',

  subjects: {
    english:             { label: 'Anglais',                  shortLabel: 'Anglais',    topics: ['Compréhension', 'Grammaire et ponctuation', 'Vocabulaire'] },
    mathematics:         { label: 'Mathématiques',            shortLabel: 'Maths',      topics: ['Calcul et nombres', 'Fractions et décimaux', 'Problèmes'] },
    verbal_reasoning:    { label: 'Raisonnement Verbal',      shortLabel: 'Verbal',     topics: ['Analogies de mots', 'Suites de lettres', 'Relations entre mots'] },
    nonverbal_reasoning: { label: 'Raisonnement Non Verbal',  shortLabel: 'Non verbal', topics: ['Matrices de figures', 'Séries et suites', 'Analogies de figures'] },
  },
  bands: ['Nécessite un soutien', 'En dessous de la moyenne', 'Dans la moyenne', 'Au-dessus de la moyenne', 'Exceptionnel'],
  bellBands: ['Soutien', 'Sous moy.', 'Moyenne', 'Sur moy.', 'Exceptionnel'],
  percentileFormat: '{n}e %',

  insights: [
    { label: 'Profil contrasté', text: 'Un Raisonnement Verbal solide (122) tire le score global vers le haut, mais les Mathématiques (84) le font baisser — le profil présente des points forts et faibles nets.' },
    { label: 'Point fort : Verbal', text: 'Un SAS de 122 en Raisonnement Verbal place Alex dans les 8 % supérieurs pour son âge de 10 ans.' },
    { label: 'Les maths demandent de l\'attention', text: 'Un SAS de 84 en Mathématiques se situe dans la bande Nécessite un soutien. Fractions et problèmes à 40 % — une pratique quotidienne ciblée peut combler cet écart.' },
  ],
  bellTitle: 'Distribution des scores · Rang percentile',

  intlHeading: 'Contexte international',
  intl: {
    uk:   ['Programme national britannique', 'Au niveau attendu dans l\'ensemble, avec un profil nettement inégal — Verbal au niveau grammar school, Maths en dessous du niveau attendu pour l\'âge.'],
    us:   ['Niveau scolaire (États-Unis)', 'Globalement au niveau de sa classe ; dans les 30–35 % supérieurs au niveau national, avec de fortes variations entre matières.'],
    pisa: ['PISA (OCDE)', 'PISA niveau 3 — bon niveau dans la plupart des domaines, avec des lacunes précises à traiter.'],
    ib:   ['Programme IB', 'Probablement adapté à l\'IB, mais les bases en mathématiques devraient être consolidées avant de choisir les Mathématiques Niveau Supérieur.'],
  },
  intlFootnote: 'Basé sur un score standardisé global de {score} · indicatif, non diagnostique',

  subjectsHeading: 'Scores par matière',
  correctOf: '{raw} bonnes réponses sur {total}',
  topicsLabel: 'Thèmes',
  avgDifficulty: 'difficulté moy. {d}/10',

  recsHeading: 'Recommandations personnalisées',
  recsSub: 'Basées sur les résultats par thème',
  recsTarget: 'objectif avec une pratique ciblée',
  actionPlan: 'Plan d\'action',
  recommendations: {
    english: {
      priority: 'Axe prioritaire',
      scorePotential: '+5–7 SAS',
      headline: 'Enrichir le vocabulaire par la lecture variée',
      rationale: 'Le vocabulaire est le thème le plus faible à 60 % — il maintient le score d\'Anglais sous son potentiel. Compréhension et grammaire sont solides ; il s\'agit d\'une lacune ciblée.',
      actions: [
        'Lire chaque jour un article documentaire (presse jeunesse, magazines scientifiques) — les mots découverts en contexte se retiennent mieux que les listes',
        'Tenir un carnet de vocabulaire : 5 nouveaux mots par semaine, avec définition et une phrase d\'exemple',
        'S\'entraîner aux questions d\'inférence — pas seulement « trouve la réponse » mais « que sous-entend l\'auteur ? »',
      ],
    },
    verbal_reasoning: {
      priority: 'Maintenir et approfondir',
      scorePotential: '+3–5 SAS',
      headline: 'Mettre ce point fort au service de lectures exigeantes et de défis',
      rationale: 'Un SAS de 122 est déjà Exceptionnel et dans les 8 % supérieurs. L\'objectif n\'est pas de remédier mais d\'approfondir — garder la compétence affûtée sous pression et viser le haut de l\'échelle.',
      actions: [
        'Participer à un concours scolaire ou national de mots ou d\'énigmes — la compétition aiguise la performance au-delà de l\'entraînement habituel',
        'Lire des livres d\'un ou deux ans au-dessus de son âge — cela oblige à déduire le sens plutôt qu\'à le reconnaître',
        'Faire des épreuves chronométrées de raisonnement verbal avec 10 % de temps en moins pour gagner la marge de vitesse qui sépare un SAS de 122 d\'un SAS de 126+',
      ],
    },
    nonverbal_reasoning: {
      priority: 'Gain rapide',
      scorePotential: '+5–8 SAS',
      headline: 'Corriger les analogies de figures — un point faible, un grand impact',
      rationale: 'Les analogies de figures sont à 60 % alors que matrices et séries atteignent 70–80 %. Ce seul type de question constitue le goulot d\'étranglement. Le cibler peut faire passer le Raisonnement Non Verbal dans la bande Exceptionnel.',
      actions: [
        'S\'entraîner uniquement aux analogies de figures 10 minutes par jour — pas d\'exercices mélangés',
        'Pour chaque question, décrire la transformation avec des mots avant de regarder les réponses (« elle a pivoté de 90° et gagné un point »)',
        'Utiliser des casse-têtes spatiaux concrets — Tangram ou blocs de motifs — pour développer un raisonnement spatial intuitif',
      ],
    },
    mathematics: {
      priority: 'Axe prioritaire',
      scorePotential: '+8–12 SAS',
      headline: 'Consolider les bases numériques avant d\'aborder des notions plus difficiles',
      rationale: 'Les trois thèmes sont sous 60 % — les 40 % en fractions et en problèmes montrent que des lacunes dans le sens du nombre freinent la progression. La priorité est de renforcer les fondamentaux, pas d\'enchaîner des questions plus difficiles.',
      actions: [
        'Consacrer 15 minutes par jour aux tables de multiplication et au calcul mental jusqu\'à ce que tout soit automatique jusqu\'à 12×12 — cela débloque fractions et problèmes',
        'Utiliser des représentations visuelles des fractions (bandes, pizzas) avant les procédures écrites — le concept doit précéder l\'algorithme',
        'Résoudre un problème par jour : entourer les nombres, souligner la question, faire un schéma avant d\'écrire le moindre calcul',
      ],
    },
  },

  scoreGuide: 'Guide des scores',
  faqHeading: 'Questions fréquentes',
  faq: [
    {
      q: 'Que montre le rapport d\'évaluation Eduentry ?',
      a: 'Le rapport présente le score standardisé de votre enfant (moyenne 100, écart-type 15), son rang percentile par rapport à des pairs du monde entier, ses scores en Anglais, Mathématiques, Raisonnement Verbal et Raisonnement Non Verbal, le détail par thème et des recommandations personnalisées générées par IA.',
    },
    {
      q: 'Qu\'est-ce qu\'un score standardisé ?',
      a: 'Un score standardisé (SAS) ajuste le score brut en fonction de la difficulté des questions reçues, ce qui permet une comparaison équitable entre différentes passations. Eduentry utilise une échelle de moyenne 100 et d\'écart-type 15, cohérente avec des évaluations reconnues comme GL Assessment et CAT4. Un score de 100 signifie que l\'enfant se situe exactement dans la moyenne de sa tranche d\'âge.',
    },
    {
      q: 'Que signifie le rang percentile dans le rapport ?',
      a: 'Le rang percentile indique la proportion d\'enfants du même âge ayant obtenu un score inférieur à celui de votre enfant. Par exemple, le 68e percentile signifie que votre enfant a fait mieux que 68 % de ses pairs. Les percentiles proviennent des données d\'étalonnage internationales d\'Eduentry et donnent une image plus claire qu\'un simple pourcentage de réussite.',
    },
    {
      q: 'Comment interpréter les scores par matière de mon enfant ?',
      a: 'Chaque score se situe dans l\'une des cinq bandes : Nécessite un soutien (70–84), En dessous de la moyenne (85–94), Dans la moyenne (95–109), Au-dessus de la moyenne (110–119) et Exceptionnel (120–130). Le rapport détaille aussi chaque matière par thème, pour voir précisément les points forts et ceux qui demandent un travail ciblé.',
    },
    {
      q: 'À quelle tranche d\'âge l\'évaluation s\'adresse-t-elle ?',
      a: 'L\'évaluation Eduentry s\'adresse aux enfants de 7 à 14 ans, du primaire au début du secondaire. Les questions, le calibrage de la difficulté et l\'étalonnage sont ajustés à l\'âge, de sorte que le score standardisé reflète équitablement la performance selon l\'âge exact de votre enfant en années et en mois.',
    },
    {
      q: 'Puis-je partager le rapport avec l\'enseignant ou l\'école de mon enfant ?',
      a: 'Oui. Vous pouvez télécharger le rapport en PDF ou partager un lien avec un enseignant, un professeur particulier ou le service des admissions d\'une école. Le rapport est conçu pour être lisible aussi bien par les éducateurs habitués aux évaluations standardisées que par les parents qui ne le sont pas.',
    },
    {
      q: 'Combien de temps dure l\'évaluation ?',
      a: 'L\'évaluation complète comprend 60 questions réparties sur quatre matières et dure généralement entre 40 et 60 minutes. Les enfants peuvent faire une pause et reprendre plus tard. Le rapport est généré automatiquement une fois toutes les réponses envoyées, et les résultats sont généralement prêts en 90 minutes.',
    },
    {
      q: 'L\'évaluation est-elle vraiment gratuite ?',
      a: 'Oui, l\'évaluation principale et le rapport complet sont entièrement gratuits. Aucune carte bancaire n\'est demandée à l\'inscription. Eduentry propose ce rapport gratuit pour que les parents comprennent le profil scolaire de leur enfant avant de décider d\'explorer d\'éventuelles ressources d\'accompagnement ou d\'entraînement.',
    },
    {
      q: 'Que faire après avoir reçu le rapport ?',
      a: 'Commencez par la section des recommandations personnalisées, qui hiérarchise les domaines au plus fort potentiel de progression selon les scores par thème de votre enfant. Concentrez-vous d\'abord sur les matières de la bande Nécessite un soutien avant celles Dans la moyenne ou Au-dessus. Partagez le rapport avec son enseignant ou son professeur particulier pour aligner le travail sur les lacunes identifiées.',
    },
    {
      q: 'Quelle est la fiabilité de cette évaluation en ligne par rapport à un test psychométrique professionnel ?',
      a: 'Eduentry utilise la Théorie de la Réponse à l\'Item (modèle logistique à 2 paramètres avec estimation MAP), le même cadre statistique que les évaluations adaptatives professionnelles. Elle est bien adaptée pour repérer les forces et faiblesses relatives entre matières. Il s\'agit toutefois d\'un outil de dépistage indicatif, et non d\'un diagnostic clinique ou réalisé par un psychologue scolaire. Pour des décisions comme un accompagnement des besoins éducatifs particuliers, une évaluation formelle par un professionnel qualifié est recommandée.',
    },
  ],

  ctaBadge: 'Gratuit · Sans carte bancaire · Résultats en une heure',
  ctaHeading: 'Obtenez le vrai rapport de votre enfant — gratuitement',
  ctaText: 'Cet exemple vous montre le format. Le rapport de votre enfant contiendra ses vrais scores, son détail réel par thème et des recommandations précises basées sur ses réponses.',
  ctaButton: 'Commencer l\'évaluation gratuite →',

  aboutHeading: 'À propos de cette évaluation',
  aboutText: 'Les scores reposent sur un modèle TRI logistique à 2 paramètres avec estimation MAP. L\'échelle de score standardisé a une moyenne de 100 et un écart-type de 15, cohérente avec les normes GL Assessment et CAT4. Les scores sont bornés entre 70 et 130. Les résultats sont indicatifs, non diagnostiques.',
}

export default content
