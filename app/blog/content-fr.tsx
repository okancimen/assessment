import React from 'react'
import Link from 'next/link'
import { Bullet, Callout, Check } from './blog-components'

export const FR_CONTENT: Record<string, React.ReactNode> = {

  'high-school-internship-benefits-university': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        En France comme dans le reste de l'Europe, l'accès aux formations supérieures les plus sélectives devient chaque année plus compétitif. Les lycéens qui arrivent en terminale avec uniquement de bonnes notes se retrouvent souvent en compétition avec des candidats qui ont, en plus, une vraie expérience professionnelle. Ce guide examine pourquoi les stages au lycée comptent autant — et comment en tirer le meilleur parti.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le stage au lycée : beaucoup plus qu'une ligne sur un CV</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'idée reçue est que le stage d'un lycéen n'est qu'une formalité — une case à cocher. La réalité est bien différente. Une expérience professionnelle bien choisie et bien vécue développe des compétences que l'école ne peut pas enseigner : la gestion de l'ambiguïté, la communication avec des adultes dans un contexte professionnel, et la capacité à livrer un résultat concret avec des ressources limitées.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ces compétences sont précisément celles que mesurent les jurys de grandes écoles en entretien, et celles que les universités recherchent dans les lettres de motivation des candidats aux masters sélectifs.
        </p>
        <Callout>
          <strong className="text-indigo-900">Chiffre clé :</strong> Selon Education and Employers (2023), les lycéens qui ont eu au moins quatre contacts significatifs avec des professionnels avant l'âge de 16 ans ont cinq fois moins de risques de se retrouver sans emploi, formation ou éducation à 19 ans.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que les universités et grandes écoles regardent vraiment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les équipes d'admission des formations sélectives reçoivent des milliers de dossiers avec des notes excellentes. Pour différencier les candidats, elles cherchent des preuves de maturité, d'initiative et d'intérêt réel pour un domaine. L'expérience professionnelle est l'une des rares façons de fournir ces preuves concrètes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La différence entre une bonne lettre de motivation et une lettre médiocre, c'est la spécificité. Un candidat qui écrit "j'ai passé trois semaines dans une équipe produit d'une startup et j'ai observé comment les décisions techniques impactent l'expérience utilisateur" est crédible. Un candidat qui écrit "je suis passionné par la technologie depuis toujours" l'est beaucoup moins.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>L'expérience professionnelle fournit du contenu spécifique et crédible pour la lettre de motivation</Check>
          <Check>Elle démontre de l'initiative personnelle, pas seulement de l'obéissance académique</Check>
          <Check>Elle prouve une capacité à naviguer dans des environnements adultes</Check>
          <Check>Elle aide le candidat à articuler un projet professionnel cohérent</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La fenêtre optimale : pourquoi commencer tôt</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La question n'est pas "dois-je faire un stage ?" mais "quand dois-je commencer ?". La recherche sur le développement de l'adolescent identifie les 14-16 ans comme la fenêtre optimale pour une première expérience professionnelle structurée.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          À cet âge, la distance entre le monde scolaire et le monde professionnel est maximale — et c'est précisément là que l'apprentissage est le plus intense. Un élève de 15 ans qui passe trois semaines dans une entreprise en retire des insights qu'un élève de 17 ans dans la même situation assimile moins profondément, simplement parce que le gap est moins grand.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Commencer à 14-15 ans laisse aussi le temps d'agir sur ce qu'on apprend : explorer un second secteur, développer des compétences liées, affiner son projet professionnel avant les candidatures de terminale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment choisir son stage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'erreur la plus courante est de choisir un stage par facilité plutôt que par intérêt. Un stage chez un proche dans un secteur qui ne vous attire pas produit peu d'apprentissage et peu de matière pour vos candidatures ultérieures.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La bonne approche est de commencer par identifier deux ou trois secteurs qui vous intéressent genuinement, puis de chercher des organisations dans ces secteurs — grandes ou petites — qui pourraient vous accueillir. Les petites structures offrent souvent plus de responsabilités et de diversité de missions que les grandes entreprises.
        </p>
        <Callout color="emerald">
          <strong>Conseil pratique :</strong> Contactez directement les entreprises par e-mail personnalisé. Montrez que vous avez fait des recherches sur leur activité et expliquez pourquoi LEUR secteur vous intéresse spécifiquement. Les PME répondent souvent favorablement aux approches directes et sincères.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment valoriser son expérience de stage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un stage bien vécu mais mal valorisé ne produit pas les résultats escomptés. Pendant votre stage, tenez un journal des tâches accomplies, des observations faites et des questions soulevées. Identifiez deux ou trois moments spécifiques où vous avez contribué à quelque chose de concret.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>Notez les chiffres : combien de personnes avez-vous rencontré ? Quel problème avez-vous aidé à résoudre ?</Bullet>
          <Bullet>Identifiez ce que vous avez appris sur le secteur que vous ne saviez pas avant</Bullet>
          <Bullet>Demandez un bref retour écrit à votre tuteur de stage pour vos candidatures</Bullet>
          <Bullet>Réfléchissez à comment cette expérience renforce ou modifie votre projet professionnel</Bullet>
        </ul>
      </section>
    </>
  ),

  'business-work-experience-high-school-uk': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Le secteur de l'entreprise est l'un des plus accessibles pour les lycéens cherchant une première expérience professionnelle — et l'un des plus formateurs. De la start-up en pleine croissance au cabinet comptable local, en passant par les directions financières des grandes organisations, les opportunités sont nombreuses si l'on sait où chercher et comment se présenter.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'une expérience en entreprise pour un lycéen ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'expérience professionnelle en entreprise pour les lycéens va bien au-delà du simple "stage d'observation". Dans les meilleures structures, les lycéens stagiaires sont impliqués dans des projets réels, participent à des réunions d'équipe, et sont encouragés à poser des questions et à proposer des idées.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les missions typiques incluent : analyse de données de ventes ou de marché, aide à la préparation de présentations, recherche concurrentielle, assistance à la gestion des réseaux sociaux de l'entreprise, ou participation à des appels clients. La diversité dépend de la taille et de l'ouverture de l'organisation.
        </p>
        <Callout>
          <strong className="text-indigo-900">Conseil :</strong> Lors de votre premier contact, demandez explicitement si des missions structurées avec un livrable défini vous seront confiées. Un stage où vous avez un "vrai projet" est infiniment plus formateur qu'un stage d'observation passive.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Où trouver un stage en entreprise</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plusieurs canaux s'offrent aux lycéens en France et dans les pays francophones :
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Candidature directe par e-mail aux PME de votre région — très efficace, surtout pour les structures de 10 à 100 personnes</Check>
          <Check>Programmes formels des grandes organisations (BNP Paribas, Danone, L'Oréal ont des programmes lycéens)</Check>
          <Check>Votre conseiller d'orientation — sous-utilisé mais souvent une mine de contacts</Check>
          <Check>Junior-entreprises des grandes écoles qui collaborent parfois avec des lycéens</Check>
          <Check>Réseaux familiaux et amicaux — sans complexe, c'est ainsi que se fait une grande partie des premières expériences</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que vous allez apprendre</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Au-delà des compétences techniques, une expérience en entreprise développe des compétences transversales précieuses : comment fonctionne une réunion professionnelle, comment se comporter en open space, comment envoyer un e-mail formel, comment gérer plusieurs tâches simultanément. Ces évidences pour un professionnel expérimenté sont loin d'être évidentes pour un lycéen — et les acquérir tôt fait toute la différence.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous apprendrez également quelque chose d'essentiel : si ce secteur vous donne de l'énergie ou vous en coûte. Cette clarté professionnelle est précieuse bien avant les choix d'orientation.
        </p>
      </section>
    </>
  ),

  'how-to-differentiate-yourself-at-15': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Se démarquer à 15 ans n'est pas une question de chance ou de talent extraordinaire. C'est une question de timing et de stratégie. À cet âge, la plupart des lycéens ne pensent pas encore activement à leur profil professionnel — ce qui crée une fenêtre d'opportunité réelle pour ceux qui commencent maintenant.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi 15 ans est le bon moment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          À 15 ans, vous avez deux ans devant vous avant les candidatures de terminale. C'est suffisant pour acquérir une expérience professionnelle, développer une compétence spécifique, et construire un récit cohérent autour de votre projet. La plupart de vos camarades commenceront à y penser en classe de terminale — avec un an de retard.
        </p>
        <Callout>
          <strong className="text-indigo-900">L'avantage cumulatif :</strong> Les bénéfices de l'expérience professionnelle s'accumulent dans le temps. Un lycéen qui commence à 15 ans aura, à 18 ans, non seulement une expérience mais aussi le temps d'avoir réfléchi à ce qu'elle signifie, de l'avoir approfondie, et de l'avoir intégrée dans un projet professionnel structuré.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les cinq leviers pour se démarquer</h2>
        <ul className="space-y-3 mb-6">
          <Check>Expérience professionnelle réelle (stage, bénévolat avec responsabilités, projet entrepreneurial)</Check>
          <Check>Maîtrise démontrable d'une compétence technique (code, design, analyse de données, langues)</Check>
          <Check>Résultats dans des compétitions académiques ou parascolaires</Check>
          <Check>Responsabilité de leadership réelle (délégué de classe avec bilan, président d'une association)</Check>
          <Check>Score d'évaluation objectif qui objective vos aptitudes de façon crédible</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il ne s'agit pas de cocher toutes ces cases — une ou deux bien exécutées valent mieux que cinq superficielles. L'authenticité et la spécificité sont toujours plus convaincantes que la longueur d'une liste d'activités.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment trouver un stage à 15 ans sans réseau</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La candidature directe par e-mail fonctionne bien mieux que les lycéens ne le croient. Les PME locales reçoivent peu de candidatures spontanées de lycéens motivés — et la rareté crée de la valeur. Un e-mail bien rédigé, personnalisé, qui montre une connaissance réelle de l'entreprise et un intérêt sincère pour son secteur génère souvent une réponse positive.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Structure de l'e-mail idéal : une phrase d'accroche sur pourquoi CETTE entreprise vous intéresse spécifiquement, deux phrases sur vous (classe, matières fortes, ce qui vous attire dans leur domaine), et une demande claire de rendez-vous téléphonique ou de visite pour discuter d'une opportunité de stage.
        </p>
      </section>
    </>
  ),

  'how-to-start-business-at-16': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        L'idée de créer son entreprise à 16 ans peut sembler ambitieuse — voire irréaliste. Et pourtant, des milliers de lycéens en France et dans les pays francophones génèrent chaque année de vrais revenus grâce à des activités entrepreneuriales qu'ils ont lancées seuls. Ce guide vous explique comment faire de même, étape par étape.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi créer une entreprise à 16 ans ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'expérience entrepreneuriale développe des compétences que ni l'école ni même les stages ne peuvent enseigner : la gestion de l'incertitude, la vente, la relation client, la comptabilité de base, et surtout la résistance à l'échec. Ces compétences sont hautement valorisées par les universités, les grandes écoles et les employeurs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un lycéen qui a créé une vraie entreprise — même petite — a quelque chose de concret et de différenciant à mettre en avant dans ses candidatures. Il peut parler de vrais clients, de vrais problèmes résolus, de vrais apprentissages. C'est d'une valeur incomparable face à des déclarations abstraites de motivation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quelles activités sont réalistes à 16 ans ?</h2>
        <ul className="space-y-3 mb-6">
          <Check>Services numériques : création de sites web, graphisme, gestion de réseaux sociaux pour des commerçants locaux</Check>
          <Check>Cours particuliers : maths, langues, musique — vous avez des compétences que d'autres veulent acquérir</Check>
          <Check>Photographie et vidéo : couverture d'événements, photos de profil professionnelles, contenu pour entreprises</Check>
          <Check>Revente en ligne : achat-revente de produits sélectifs sur Vinted, eBay, ou des plateformes spécialisées</Check>
          <Check>Création de contenu : blog, chaîne YouTube ou compte Instagram dans une niche spécifique</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les aspects légaux et pratiques</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          En France, un mineur peut exercer une activité commerciale avec l'autorisation parentale. La micro-entreprise (auto-entrepreneur) est la structure la plus simple : inscription gratuite en ligne sur autoentrepreneur.urssaf.fr, aucun capital minimum requis, comptabilité simplifiée.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les mineurs, les parents doivent co-signer la déclaration. Les revenus sont à déclarer mais bénéficient d'un abattement forfaitaire selon l'activité (71% pour les ventes, 50% pour les services). En pratique, pour des revenus modestes de lycéen, la pression fiscale est minime.
        </p>
        <Callout color="amber">
          <strong>Important :</strong> Parlez de votre projet à vos parents et demandez leur soutien actif. Au-delà de l'aspect légal, ils peuvent vous aider avec des aspects pratiques (compte bancaire, contrats) et être un excellent premier réseau professionnel.
        </Callout>
      </section>
    </>
  ),

  'how-does-your-child-compare-globally': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Votre enfant a de bonnes notes dans son école — mais comment se compare-t-il réellement à des élèves du même âge en France, en Europe, et dans le monde ? La réponse à cette question est souvent surprenante, et toujours utile pour planifier efficacement son parcours éducatif.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le problème avec les notes scolaires seules</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les notes scolaires sont des indicateurs relatifs — relatives à l'établissement, au professeur, et aux élèves de la classe. Un 15/20 dans un lycée peu exigeant ne signifie pas la même chose qu'un 15/20 dans un lycée sélectif. Et ni l'un ni l'autre ne vous dit où se situe votre enfant par rapport à la moyenne nationale ou internationale.
        </p>
        <Callout>
          <strong className="text-indigo-900">Le paradoxe des bonnes notes :</strong> Des recherches montrent que des enfants avec d'excellentes notes locales se retrouvent parfois déstabilisés lorsqu'ils rejoignent des filières très sélectives — non par manque de capacité, mais parce que personne ne leur avait jamais dit où ils se situaient vraiment. Un repère international précoce évite cette surprise.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les référentiels internationaux clés</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plusieurs systèmes permettent de comparer les élèves à l'échelle internationale :
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>PISA (OCDE)</strong> : évalue les compétences en lecture, mathématiques et sciences des élèves de 15 ans dans 80+ pays. Moyenne OCDE : 500 points.</Bullet>
          <Bullet><strong>TIMSS</strong> : évalue les mathématiques et les sciences en CM1 et 4e, avec une comparaison internationale des acquis scolaires.</Bullet>
          <Bullet><strong>CAT4 (UK)</strong> : évaluation cognitive utilisée dans de nombreuses écoles britanniques, avec scores normalisés (moyenne 100, écart-type 15).</Bullet>
          <Bullet><strong>Eduentry</strong> : évaluation adaptive en ligne, même échelle que CAT4, disponible en français, mesure 4 domaines cognitifs.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment interpréter un score standardisé</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'échelle utilisée par Eduentry et les grandes évaluations cognitives internationales : moyenne 100, écart-type 15. Concrètement :
        </p>
        <ul className="space-y-3 mb-6">
          <Check>85-94 : En dessous de la moyenne — des points d'amélioration clairs à travailler</Check>
          <Check>95-109 : Dans la moyenne internationale — une base solide pour progresser</Check>
          <Check>110-119 : Au-dessus de la moyenne — bien positionné pour les filières sélectives</Check>
          <Check>120+ : Exceptionnel — dans le top 10% à l'échelle internationale</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          68% des enfants se situent entre 85 et 115 (±1 écart-type de la moyenne). Ce qui compte n'est pas un seul score ponctuel, mais la trajectoire dans le temps.
        </p>
      </section>
    </>
  ),

  'stage-lyceen-france-comment-trouver': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Trouver un stage de qualité en tant que lycéen en France demande de la méthode, de la persévérance, et une bonne dose de personnalisation. Ce guide vous donne les outils concrets pour décrocher une expérience qui fera réellement la différence dans votre parcours.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le cadre légal du stage lycéen en France</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          En France, le stage pour les lycéens de l'enseignement général prend généralement la forme d'une "séquence d'observation" d'une à deux semaines, encadrée par une convention tripartite entre le lycée, l'entreprise et l'élève. Cette convention est obligatoire — sans elle, vous ne pouvez légalement pas être accueilli dans une entreprise.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Des stages plus longs sont possibles pendant les vacances scolaires, notamment l'été. Pour les lycéens de voie professionnelle, des périodes de formation en milieu professionnel (PFMP) de plusieurs semaines font partie intégrante du cursus.
        </p>
        <Callout>
          <strong className="text-indigo-900">Checklist administrative :</strong> Convention de stage (fournie par votre lycée), numéro de SIRET de l'entreprise, signature du chef d'établissement, et si vous êtes mineur, signature de vos parents ou tuteurs légaux.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les cinq canaux pour trouver un stage</h2>
        <ul className="space-y-3 mb-6">
          <Check>Candidature directe par e-mail personnalisé aux PME locales de votre secteur d'intérêt</Check>
          <Check>Votre conseiller d'orientation — souvent sous-utilisé, il a des contacts employeurs que beaucoup d'élèves ignorent</Check>
          <Check>Le réseau familial et amical — sans complexe, c'est une ressource légitime que les professionnels eux-mêmes utilisent</Check>
          <Check>Les plateformes en ligne : CIDJ, Studyrama, LinkedIn (pour les 14+)</Check>
          <Check>Les associations locales, mairies et structures publiques qui accueillent souvent des stagiaires lycéens</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rédiger un e-mail de candidature qui obtient une réponse</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La clé est la personnalisation. Un e-mail générique envoyé à cent entreprises obtient moins de réponses qu'un e-mail spécifique envoyé à dix entreprises soigneusement choisies. Cet e-mail doit toujours être accompagné d'un <a href="/fr/blog/cv-stage-lyceen-16-ans" className="text-indigo-600 hover:underline font-medium">CV lycéen bien structuré</a> — notre guide complet vous explique exactement quoi y inclure, même sans expérience professionnelle.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Structure efficace : ouvrez avec une phrase montrant que vous connaissez l'entreprise ("J'ai découvert votre travail sur [projet spécifique]..."), expliquez en deux phrases pourquoi ce secteur vous intéresse genuinement, précisez les dates souhaitées et la durée, et demandez un entretien téléphonique ou une visite pour en discuter.
        </p>
        <Callout color="emerald">
          <strong>À éviter absolument :</strong> "Je cherche un stage pour valider mon année" ou "je suis intéressé par tous les secteurs". Ces formulations signalent un manque de motivation et de préparation. Soyez spécifique, soyez sincère.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment objectiver votre profil</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          À 16 ans, vous n'avez pas encore de CV élaboré. Mais vous pouvez démontrer votre aptitude de façon crédible avec un score d'évaluation professionnel. L'évaluation Eduentry mesure votre aptitude générale, vos connaissances sectorielles et vos compétences professionnelles — et produit un rapport que vous pouvez partager avec les entreprises. Si vous décrochez un entretien, notre <a href="/fr/blog/entretien-stage-lyceen-conseils" className="text-indigo-600 hover:underline font-medium">guide de préparation à l'entretien de stage</a> vous aidera à aborder cette étape avec confiance.
        </p>
      </section>
    </>
  ),

  'cv-stage-lyceen-16-ans': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Rédiger un CV convaincant quand on n'a pas encore d'expérience professionnelle est l'un des défis les plus fréquents des lycéens. La bonne nouvelle : les recruteurs qui accueillent des stagiaires lycéens n'attendent pas un CV de cadre expérimenté. Ils cherchent de la clarté, de l'honnêteté et des signaux d'aptitude.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Structure d'un CV lycéen efficace</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un CV lycéen doit tenir sur une seule page, avec une mise en page aérée et professionnelle. Les sections à inclure, dans l'ordre :
        </p>
        <ul className="space-y-3 mb-6">
          <Check>En-tête : Nom, âge, classe, coordonnées, e-mail professionnel</Check>
          <Check>Formation : Lycée actuel, matières fortes, mentions obtenues</Check>
          <Check>Compétences : Langues (avec niveau honnête), outils informatiques, compétences techniques</Check>
          <Check>Activités et responsabilités : Associations, sports, projets personnels avec impact mesurable</Check>
          <Check>Évaluations et certifications : Score Eduentry, certifications en ligne, tests de langue</Check>
          <Check>Centres d'intérêt : Brefs et authentiques, en lien avec le secteur visé</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transformer les activités scolaires en atouts CV</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chaque activité dans laquelle vous avez pris des responsabilités réelles mérite une mention. L'erreur est de minimiser ces expériences parce qu'elles semblent "seulement scolaires". En réalité, un délégué de classe qui a organisé une réunion parents-professeurs a exercé des compétences de médiation, de gestion de conflits et de communication — des compétences professionnelles réelles.
        </p>
        <Callout>
          <strong className="text-indigo-900">Méthode STAR :</strong> Pour chaque activité, décrivez la Situation, la Tâche que vous avez accomplie, les Actions que vous avez menées, et les Résultats obtenus. Cette structure transforme des expériences ordinaires en démonstrations de compétences concrètes.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La lettre de motivation : là où tout se joue</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un CV lycéen bien structuré ouvre la porte. La lettre de motivation fait entrer. Elle doit être personnalisée pour chaque entreprise, d'une demi-page maximum, et doit répondre à trois questions : Pourquoi cette entreprise ? Pourquoi ce secteur ? Qu'est-ce que vous pouvez apporter pendant ce stage ? Une fois votre dossier complet, la prochaine étape est de <a href="/fr/blog/entretien-stage-lyceen-conseils" className="text-indigo-600 hover:underline font-medium">vous préparer à l'entretien</a> — notre guide couvre les questions incontournables et comment y répondre efficacement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Évitez les formules toutes faites. Montrez que vous avez fait des recherches. Mentionnez un projet, un produit, ou un aspect de l'activité de l'entreprise qui vous intéresse genuinement. Cette spécificité est ce qui distingue les candidatures sélectionnées des candidatures éliminées.
        </p>
      </section>
    </>
  ),

  'entretien-stage-lyceen-conseils': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        L'entretien de stage est souvent la première expérience d'entretien professionnel d'un lycéen — et donc naturellement stressante. Mais avec la bonne préparation, cet exercice devient une occasion de démontrer votre maturité et votre motivation, et non une épreuve à subir.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La préparation : l'anti-stress le plus efficace</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le stress d'un entretien vient principalement de l'impréparation. Assurez-vous d'abord que votre <a href="/fr/blog/cv-stage-lyceen-16-ans" className="text-indigo-600 hover:underline font-medium">CV lycéen</a> est finalisé — les recruteurs y font souvent référence pendant l'entretien. Ensuite, plus vous avez répondu à voix haute aux questions prévisibles, moins l'entretien vous semblera intimidant. Pratiquez avec un parent, un ami, ou devant un miroir — la répétition à voix haute est fondamentale.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant l'entretien, consacrez 30 minutes à rechercher l'entreprise : leur site web, leurs réseaux sociaux, un article récent sur eux. Préparez deux ou trois questions spécifiques à poser sur leur activité. Cela montre de l'intérêt réel et vous distingue des candidats qui n'ont fait aucune recherche.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les questions incontournables et comment y répondre</h2>
        <ul className="space-y-4 mb-6">
          <li>
            <p className="font-semibold text-gray-900 mb-1">"Parlez-moi de vous"</p>
            <p className="text-gray-700 text-sm leading-relaxed">Préparez un résumé de 2 minutes : qui vous êtes, vos matières fortes, ce qui vous intéresse, pourquoi ce secteur. Soyez concret et authentique.</p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 mb-1">"Pourquoi voulez-vous faire un stage chez nous ?"</p>
            <p className="text-gray-700 text-sm leading-relaxed">Mentionnez quelque chose de spécifique sur l'entreprise que vous avez découvert lors de vos recherches. "J'ai vu que vous venez de lancer [produit X]..." est infiniment plus convaincant que "j'aime votre secteur".</p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 mb-1">"Quels sont vos points forts et axes d'amélioration ?"</p>
            <p className="text-gray-700 text-sm leading-relaxed">Soyez honnête sur vos forces avec des exemples concrets. Pour les axes d'amélioration, choisissez quelque chose de réel mais que vous travaillez activement à améliorer.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le jour de l'entretien : détails qui comptent</h2>
        <ul className="space-y-3 mb-6">
          <Check>Arrivez 10 minutes en avance — jamais en retard, même légèrement</Check>
          <Check>Tenue soignée et appropriée au secteur — en doute, optez pour le conservateur</Check>
          <Check>Téléphone en mode silencieux, rangé dans la poche</Check>
          <Check>Apportez un exemplaire de votre CV et un carnet pour noter</Check>
          <Check>Regardez votre interlocuteur dans les yeux, parlez lentement et clairement</Check>
        </ul>
        <Callout color="emerald">
          <strong>Après l'entretien :</strong> Envoyez un bref e-mail de remerciement dans les 24 heures. Simple, sincère, et concis. Peu de candidats le font — et ceux qui le font laissent une impression durable.
        </Callout>
      </section>
    </>
  ),

  'stage-marketing-digital-lyceen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Le marketing digital est l'un des secteurs les plus accessibles et les plus formateurs pour un premier stage lycéen. C'est un domaine où la curiosité et la créativité comptent autant que l'expérience technique — et où un lycéen peut rapidement apporter une réelle valeur ajoutée.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi le marketing digital est idéal pour un premier stage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le marketing digital englobe de nombreuses disciplines : création de contenu, gestion des réseaux sociaux, SEO (référencement naturel), publicité en ligne, analyse de données, e-mail marketing. Cette diversité en fait un terrain d'apprentissage exceptionnel — et signifie que même sans compétences techniques avancées, vous pouvez contribuer de façon utile dès le premier jour.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          De plus, les lycéens d'aujourd'hui sont des "natifs numériques" qui comprennent intuitivement les réseaux sociaux, les tendances en ligne et les comportements des consommateurs jeunes — une perspective précieuse que beaucoup d'équipes marketing apprécient.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que vous allez apprendre</h2>
        <ul className="space-y-3 mb-6">
          <Check>Comment une stratégie de contenu est planifiée et exécutée</Check>
          <Check>Les bases de Google Analytics et l'interprétation des données de trafic</Check>
          <Check>La création de visuels professionnels avec des outils comme Canva ou Figma</Check>
          <Check>Le fonctionnement d'une campagne publicitaire (Facebook Ads, Google Ads)</Check>
          <Check>La rédaction pour le web : concision, appels à l'action, optimisation pour la lecture mobile</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Où postuler</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les agences de marketing digital (petites structures de 5-20 personnes) sont les employeurs les plus ouverts aux lycéens stagiaires. Elles ont besoin d'aide pour la production de contenu et apprécient les candidats curieux et autonomes. Cherchez des agences locales, contactez-les directement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les startups e-commerce sont également d'excellents terrains de stage — elles ont souvent de petites équipes où chaque membre porte plusieurs casquettes, ce qui vous permettra de toucher à de nombreux aspects du marketing digital. Avant de postuler, préparez un <a href="/fr/blog/cv-stage-lyceen-16-ans" className="text-indigo-600 hover:underline font-medium">CV lycéen adapté</a> et entraînez-vous pour <a href="/fr/blog/entretien-stage-lyceen-conseils" className="text-indigo-600 hover:underline font-medium">l'entretien</a>.
        </p>
        <Callout color="amber">
          <strong>Conseil :</strong> Avant de postuler, créez un mini-portfolio. Analysez les réseaux sociaux d'une marque que vous admirez et rédigez trois suggestions d'amélioration concrètes. Joindre ce document à votre candidature montre de l'initiative et du jugement — deux qualités très recherchées.
        </Callout>
      </section>
    </>
  ),

  'stage-data-analyse-lyceen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        La data science est l'un des domaines professionnels avec les meilleures perspectives des prochaines décennies — et il est plus accessible qu'on ne le croit pour un lycéen ambitieux. Ce guide vous explique comment entrer dans ce secteur fascinant dès le lycée.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi la data est un excellent choix de stage lycéen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Presque toutes les organisations génèrent aujourd'hui plus de données qu'elles ne peuvent en analyser. Il y a donc une vraie demande pour des personnes capables de travailler avec des données — même de façon basique. Un lycéen rigoureux, à l'aise avec les mathématiques et curieux, peut apporter une réelle valeur dans une équipe data.
        </p>
        <Callout>
          <strong className="text-indigo-900">Perspective de carrière :</strong> Selon le Forum Économique Mondial, l'analyste de données est l'un des cinq métiers dont la demande croîtra le plus vite d'ici 2027. Les compétences acquises aujourd'hui vous donnent une longueur d'avance considérable.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compétences à développer avant votre stage</h2>
        <ul className="space-y-3 mb-6">
          <Check>Excel avancé : VLOOKUP, tableaux croisés dynamiques, graphiques — utilisé dans 90% des équipes data</Check>
          <Check>Notions de Python : la bibliothèque Pandas pour manipuler des données, Matplotlib pour les visualisations</Check>
          <Check>SQL de base : SELECT, WHERE, JOIN — la langue universelle des bases de données</Check>
          <Check>Google Data Studio ou Looker Studio : créer des tableaux de bord visuels, entièrement gratuit</Check>
          <Check>Statistiques descriptives : moyenne, médiane, distribution — les bases mathématiques de tout</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Où trouver un stage data lycéen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les startups analytiques, les agences de marketing digital avec des équipes data, et les départements analytics des e-commerçants sont vos meilleures cibles. Les grandes entreprises ont généralement des processus de recrutement trop formels pour les lycéens.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Montrez votre aptitude avant de postuler : complétez un ou deux projets sur Kaggle (plateforme de data science avec des datasets publics), et présentez vos analyses dans votre candidature. C'est la preuve la plus convaincante de vos capacités.
        </p>
      </section>
    </>
  ),

  'intelligence-artificielle-futur-emploi-jeunes': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        L'intelligence artificielle est le sujet le plus discuté — et le plus mal compris — quand il s'agit de l'avenir du travail. Pour les lycéens qui planifient leur orientation, comprendre honnêtement ce qui change, ce qui persiste et ce qu'il faut développer est une information stratégique de première importance.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que l'IA peut et ne peut pas faire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'IA générative (ChatGPT, Claude, Gemini) excelle dans des tâches précises : rédaction de textes sur des sujets connus, analyse de données structurées, génération de code à partir de spécifications claires, traduction, résumé. Ces capacités vont continuer à s'améliorer rapidement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          En revanche, l'IA reste limitée sur des dimensions cruciales : le jugement contextuel complexe (décider dans une situation ambiguë avec des enjeux éthiques), la relation humaine authentique (empathie, confiance, négociation), la créativité qui transgresse les patterns connus, et l'exécution dans des environnements physiques imprévisibles.
        </p>
        <Callout>
          <strong className="text-indigo-900">Cadre de pensée :</strong> Au lieu de demander "quels métiers l'IA va-t-elle supprimer ?", demandez "quelles tâches de ce métier l'IA va-t-elle automatiser ?" — et concentrez-vous sur les tâches restantes qui exigent du jugement humain.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les compétences durables à l'ère de l'IA</h2>
        <ul className="space-y-3 mb-6">
          <Check>Pensée critique : évaluer la fiabilité des informations, raisonner en présence d'incertitude</Check>
          <Check>Intelligence émotionnelle : comprendre et gérer les relations humaines complexes</Check>
          <Check>Créativité transgressive : générer des idées qui n'existent pas encore dans les données d'entraînement</Check>
          <Check>Collaboration et leadership : coordonner des équipes humaines vers un objectif commun</Check>
          <Check>Maîtrise de l'IA comme outil : savoir déléguer efficacement à l'IA et évaluer ses outputs</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que les lycéens doivent faire maintenant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La meilleure stratégie est paradoxalement celle de l'hybridation : développer une compétence technique solide dans un domaine (code, data, design) combinée avec des soft skills que l'IA ne peut pas reproduire. Un designer qui comprend le code et sait diriger une équipe est beaucoup plus résilient qu'un designer qui fait uniquement de la création graphique.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les stages et expériences professionnelles deviennent encore plus importants à l'ère de l'IA : ils développent précisément les compétences situationnelles, relationnelles et de jugement que l'automatisation ne peut pas reproduire.
        </p>
      </section>
    </>
  ),

  'stage-ete-france-lyceen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        L'été est le moment idéal pour acquérir une première expérience professionnelle sérieuse : vous avez du temps, aucune contrainte scolaire, et les entreprises sont souvent plus disposées à accueillir des stagiaires pendant cette période. Mais pour en tirer le maximum, la préparation doit commencer bien avant juin.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Planifier dès janvier : pourquoi si tôt ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les meilleurs stages d'été pour lycéens se trouvent en janvier-mars, pas en mai-juin. Les entreprises planifient leurs ressources plusieurs mois à l'avance, et les managers qui seraient heureux d'accueillir un stagiaire lycéen en juillet sont souvent déjà complets si vous les contactez en juin.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La recherche précoce vous offre également le choix : si vous contactez dix entreprises en janvier, vous avez de bonnes chances de décrocher l'opportunité qui vous intéresse le plus. Ceux qui cherchent en mai doivent souvent accepter ce qui reste.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Secteurs les plus accessibles pour un stage d'été lycéen</h2>
        <ul className="space-y-3 mb-6">
          <Check>Commerce et retail : présence physique dans des magasins ou showrooms, excellent pour développer la relation client</Check>
          <Check>Communication et marketing : agences locales, startups — souvent ouvertes et flexibles</Check>
          <Check>Associations et ONG : missions avec impact direct, développement de compétences organisationnelles</Check>
          <Check>Administrations et collectivités : accueil souvent formalisé, bonnes conditions de stage</Check>
          <Check>Cabinets professionnels locaux (avocats, experts-comptables, architectes) : excellent pour comprendre un métier de l'intérieur</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Maximiser l'apprentissage pendant votre stage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La qualité de l'apprentissage dépend autant de votre attitude que de l'organisation. Soyez proactif dans votre curiosité : posez des questions sur le "pourquoi" derrière les tâches, pas seulement le "comment". Demandez à rencontrer des personnes dans d'autres équipes pour comprendre l'organisation dans sa globalité.
        </p>
        <Callout color="emerald">
          <strong>Conseil pratique :</strong> Tenez un journal de stage quotidien — 10 minutes par soir pour noter ce que vous avez appris, ce qui vous a surpris, et une question que vous voulez poser le lendemain. Ce journal deviendra une ressource précieuse pour vos candidatures et entretiens ultérieurs.
        </Callout>
      </section>
    </>
  ),

  'stage-finance-banque-lyceen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        La finance est souvent perçue comme un secteur inaccessible pour les lycéens — réservé aux étudiants de grandes écoles avec des connexions établies. Cette perception est partiellement vraie pour les grandes institutions, mais complètement fausse pour l'écosystème financier plus large. Ce guide vous explique comment naviguer dans ce secteur fascinant.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre l'écosystème financier</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La "finance" couvre un spectre très large : de la banque d'investissement internationale (très sélective) aux PME avec une direction financière de trois personnes (très accessibles). Entre les deux : cabinets comptables, fintechs, assurances, mutuelles, courtiers, family offices. C'est dans ce milieu de spectre que se trouvent les meilleures opportunités pour un lycéen motivé.
        </p>
        <Callout>
          <strong className="text-indigo-900">Opportunité souvent négligée :</strong> Les cabinets d'expertise comptable locaux accueillent régulièrement des lycéens stagiaires. Ils offrent une vision complète de la gestion financière des entreprises — et une excellente préparation pour des études en école de commerce ou en université économique.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que vous allez développer</h2>
        <ul className="space-y-3 mb-6">
          <Check>La rigueur analytique : en finance, les approximations ont des conséquences réelles</Check>
          <Check>La maîtrise d'Excel à un niveau avancé</Check>
          <Check>La compréhension des états financiers : compte de résultat, bilan, tableau de trésorerie</Check>
          <Check>La discrétion professionnelle : vous travaillez avec des données confidentielles</Check>
          <Check>Une vision concrète de la façon dont les décisions financières impactent la stratégie</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Se préparer avant le stage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Quelques actions concrètes avant votre premier contact avec une organisation financière : maîtrisez Excel (tableaux croisés dynamiques, formules VLOOKUP), lisez les bases de la comptabilité (il existe d'excellents résumés en ligne), et entraînez-vous à lire les comptes annuels d'une entreprise publique (disponibles sur Pappers.fr pour les sociétés françaises).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette préparation montre sérieux et motivation — et vous permettra de poser des questions pertinentes dès les premiers jours, ce qui impressionne toujours les tuteurs de stage.
        </p>
      </section>
    </>
  ),

  'score-pisa-france-analyse': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Les résultats PISA 2022 ont fait couler beaucoup d'encre : une baisse des scores dans la plupart des pays, des débats sur le niveau scolaire, et beaucoup de confusion sur ce que ces chiffres signifient réellement pour votre enfant. Ce guide démêle le vrai du faux et vous donne des outils concrets pour interpréter ces résultats.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que dit vraiment PISA sur la France</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les résultats PISA 2022 montrent que la France se situe légèrement en dessous de la moyenne OCDE en mathématiques (490 vs 472 pour la moyenne — la France fait mieux que la moyenne mais moins bien que certains voisins européens), et dans la moyenne en lecture et sciences.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plus important que le classement absolu : la France présente l'une des inégalités scolaires les plus marquées de l'OCDE. L'écart de performance entre les élèves favorisés et défavorisés est parmi les plus importants des pays développés — ce qui signifie que la position individuelle de votre enfant dans cette distribution varie considérablement selon son contexte.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi les notes scolaires ne suffisent pas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La principale limite des notes scolaires est leur variabilité : un 15/20 dans un lycée de banlieue défavorisée et un 15/20 dans un lycée parisien sélectif correspondent souvent à des niveaux de compétences très différents. Cette variabilité est documentée dans les rapports de l'Inspection générale.
        </p>
        <Callout>
          <strong className="text-indigo-900">L'utilité d'une mesure standardisée :</strong> Un score sur une échelle standardisée (comme PISA ou Eduentry) donne une position objective indépendante du contexte local. Il ne remplace pas les notes scolaires mais les complète avec un repère de référence internationale.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Que faire avec cette information ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Connaître la position internationale de votre enfant n'est pas une fin en soi — c'est un point de départ pour une action ciblée. Si votre enfant est dans la moyenne ou en dessous, les recommandations IA d'Eduentry identifient les domaines spécifiques où concentrer les efforts. Si votre enfant est au-dessus de la moyenne, un score précis peut l'encourager à viser des filières plus ambitieuses qu'il n'aurait envisagées autrement.
        </p>
      </section>
    </>
  ),

  'grandes-ecoles-orientation-lyceen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        La question "grande école ou université ?" est l'une des plus importantes de l'orientation post-bac en France — et l'une des plus mal posées. En réalité, les deux voies mènent à d'excellentes carrières, et le choix dépend de qui vous êtes, ce que vous voulez faire, et comment vous apprenez le mieux. Ce guide vous aide à y voir clair.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les grandes différences : au-delà des clichés</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les grandes écoles (HEC, Polytechnique, Sciences Po, Centrale, ESSEC...) sont caractérisées par : la sélectivité (concours), les petits effectifs, des cursus très structurés, des réseaux alumni puissants, et une insertion professionnelle rapide dans des postes à responsabilité.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les universités sont caractérisées par : l'accessibilité (baccalauréat suffisant pour l'entrée), des effectifs importants, une liberté pédagogique plus grande, une excellence reconnue mondialement pour la recherche, et des parcours qui peuvent mener aux mêmes destinations professionnelles avec des trajectoires différentes.
        </p>
        <Callout>
          <strong className="text-indigo-900">Le mythe à déconstruire :</strong> L'idée que seules les grandes écoles mènent au succès est fausse. Beaucoup de dirigeants d'entreprises de premier plan, de chercheurs reconnus et d'entrepreneurs à succès sont passés par l'université. Ce qui compte, c'est ce que vous faites de votre formation, pas uniquement son nom.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les classes préparatoires : la voie royale mais exigeante</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour accéder aux grandes écoles scientifiques (Polytechnique, Centrale, Mines) et commerciales (HEC, ESSEC, EDHEC), la voie classique passe par deux années de classes préparatoires (CPGE) après le bac. C'est une formation intensive, sélective, et formatrice — mais qui exige un investissement personnel considérable.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>MPSI/MP : pour les futurs ingénieurs et scientifiques (maths, physique)</Check>
          <Check>PCSI/PC : pour l'ingénierie avec une orientation physique-chimie</Check>
          <Check>BCPST : pour les écoles d'agronomie, vétérinaires et certaines écoles d'ingénieurs</Check>
          <Check>ECG/ECS : pour les écoles de commerce (ex-EC)</Check>
          <Check>Khâgne/Hypokhâgne : pour les ENS et Sciences Po (lettres et sciences humaines)</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Se préparer dès la première</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Quelle que soit la voie choisie, se préparer tôt fait une différence. En première et terminale : excellez dans les matières phares de votre projet (maths pour les voies scientifiques, économie et histoire pour les voies commerciales), enrichissez votre profil avec des expériences professionnelles, et, si possible, obtenez un score d'évaluation standardisé qui vous situe objectivement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour Parcoursup, les dossiers avec des expériences professionnelles documentées et des compétences démontrables se distinguent parmi les milliers de candidatures purement académiques.
        </p>
      </section>
    </>
  ),

  'pisa-2025-work-experience-student-readiness': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        En septembre 2026, l&apos;OCDE a publié les résultats de PISA 2025 — et le monde de l&apos;éducation a reçu un signal d&apos;alarme sans précédent. Plus de 760 000 élèves dans 91 pays, représentant 33 millions de jeunes de 15 ans, ont participé à la plus grande évaluation éducative internationale jamais organisée. Le verdict est sans appel : les scores moyens de l&apos;OCDE en lecture, en mathématiques et en sciences sont à leurs niveaux les plus bas depuis la création du programme. La lecture a reculé de 28 points depuis 2015. Les mathématiques ont perdu 22 points. Ces chiffres ne sont pas des variations statistiques mineures — ils représentent plus d&apos;une année scolaire perdue par génération.
      </p>
      <p className="text-gray-700 leading-relaxed">
        La réaction instinctive des systèmes éducatifs face à de tels résultats est prévisible : plus de cours, plus de devoirs, plus d&apos;examens. Plus de pression académique. Mais PISA 2025 lui-même suggère que cette réponse est non seulement insuffisante — elle est potentiellement contre-productive. Car les données révèlent quelque chose de plus profond qu&apos;une simple baisse de performances scolaires : une déconnexion croissante entre ce que l&apos;école enseigne et les compétences dont les jeunes ont réellement besoin pour réussir dans la vie adulte. Et parmi les solutions que les recherches internationales identifient avec constance, une ressort avec une clarté particulière&nbsp;: l&apos;expérience professionnelle précoce.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Cet article examine ce que PISA 2025 révèle vraiment sur la préparation des élèves, pourquoi les compétences que les employeurs demandent et celles que les écoles développent divergent de plus en plus, et comment l&apos;expérience professionnelle structurée — accessible dès 14 ans — peut combler cet écart de façon mesurable.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que PISA 2025 a trouvé : au-delà des gros titres</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les chiffres globaux de PISA 2025 sont frappants, mais les données sous-jacentes révèlent des dynamiques encore plus préoccupantes. La baisse de 28 points en lecture entre 2015 et 2025 masque un changement qualitatif dans la façon dont les jeunes lisent. La proportion d&apos;élèves pratiquant la &laquo;&nbsp;lecture rapide&nbsp;&raquo; — parcourir les textes en privilégiant la vitesse à la compréhension profonde — a presque doublé, passant de 4,5 % à 9 % des élèves de l&apos;OCDE. Ce n&apos;est pas simplement lire moins bien. C&apos;est développer des habitudes cognitives fondamentalement différentes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le résultat le plus révélateur concerne l&apos;intelligence artificielle. PISA 2025 est le premier cycle à examiner systématiquement l&apos;utilisation de l&apos;IA par les élèves. La découverte centrale : les élèves qui utilisent l&apos;IA pour des tâches scolaires spécifiques — résumer des textes, rédiger des travaux, faire des recherches — obtiennent environ 20 points de moins en sciences que leurs pairs qui effectuent ces tâches par leur propre effort cognitif. Vingt points PISA correspondent approximativement à une année scolaire complète. En d&apos;autres termes, déléguer le travail cognitif à l&apos;IA pour les devoirs coûte aux élèves l&apos;équivalent d&apos;une année d&apos;apprentissage.
        </p>
        <Callout color="amber">
          <strong>Les chiffres clés de PISA 2025 :</strong> 760 000 élèves, 91 pays, 33 millions de jeunes représentés. Lecture&nbsp;: &minus;28 points depuis 2015. Mathématiques&nbsp;: &minus;22 points depuis 2015. Utiliser l&apos;IA pour les devoirs&nbsp;: &minus;20 points en sciences. Seulement 46 % des élèves vérifient les sources ET privilégient les preuves scientifiques.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          La dimension géographique des résultats est également instructive. Les meilleurs performeurs — la Chine (BSJZ), Singapour, l&apos;Estonie, le Japon, la Corée du Sud, le Royaume-Uni — partagent des caractéristiques communes&nbsp;: des attentes académiques élevées, une forte culture de l&apos;effort, et des environnements scolaires qui limitent la distraction numérique pendant les heures de cours. 28 % des élèves de l&apos;OCDE déclarent que leurs camarades sont distraits par des appareils numériques pendant la plupart ou la totalité des cours de sciences. Dans les pays les mieux classés, ce chiffre est significativement plus bas.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il y a néanmoins des résultats positifs. 76 % des élèves de l&apos;OCDE déclarent se sentir appartenir à leur école — un chiffre en légère amélioration depuis 2022. Et les élèves qui bénéficient d&apos;une éducation à la littératie en IA obtiennent de légèrement meilleures performances que leurs pairs. La technologie n&apos;est pas le problème en soi. La façon dont elle est utilisée — pour remplacer la réflexion plutôt que pour la stimuler — l&apos;est.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les compétences que les employeurs veulent — et que PISA mesure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il existe une convergence remarquable entre ce que PISA évalue et ce que les employeurs déclarent rechercher. Ce n&apos;est pas une coïncidence — PISA a été conçu pour mesurer non pas la maîtrise du programme scolaire, mais la capacité à appliquer les connaissances dans des contextes réels et non structurés. C&apos;est précisément la définition de ce que les entreprises appellent &laquo;&nbsp;employabilité&nbsp;&raquo;.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les enquêtes auprès des employeurs — du Forum Économique Mondial aux grandes associations patronales européennes — identifient systématiquement les mêmes priorités&nbsp;: pensée critique et résolution de problèmes complexes, communication claire et persuasive, capacité à apprendre de façon autonome, collaboration et travail en équipe, et conscience professionnelle — comprendre comment fonctionnent les organisations. Ces compétences ne sont pas enseignées explicitement dans la plupart des curricula scolaires. Elles se développent par la pratique, dans des contextes réels.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Pensée critique&nbsp;: évaluer des informations contradictoires et prendre des décisions fondées sur des preuves</Check>
          <Check>Résolution de problèmes&nbsp;: identifier et résoudre des problèmes non structurés sans réponse prédéfinie</Check>
          <Check>Communication&nbsp;: transmettre des idées clairement à des publics variés, à l&apos;écrit et à l&apos;oral</Check>
          <Check>Conscience professionnelle&nbsp;: comprendre comment les organisations fonctionnent et créent de la valeur</Check>
          <Check>Résilience et adaptabilité&nbsp;: faire face à l&apos;échec, s&apos;adapter aux changements imprévus, persévérer</Check>
          <Check>Maîtrise des outils numériques&nbsp;: utiliser la technologie de façon critique et productive</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          La baisse des scores PISA en lecture et en mathématiques n&apos;est pas qu&apos;une statistique abstraite. Elle signifie concrètement que les élèves arrivent à 18 ans avec une capacité réduite à comprendre des textes complexes, à raisonner quantitativement, et à évaluer la fiabilité de l&apos;information — les fondations mêmes de l&apos;employabilité dans l&apos;économie du XXIe siècle.
        </p>
        <Callout color="indigo">
          <strong>La convergence cruciale&nbsp;:</strong> Les compétences que PISA mesure — raisonnement appliqué, compréhension de l&apos;écrit dans des contextes réels, pensée scientifique — sont exactement celles que les employeurs placent en tête de leurs priorités. Les deux mesurent la même chose&nbsp;: la capacité à fonctionner efficacement dans le monde réel.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi l&apos;expérience professionnelle précoce change tout</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La recherche sur les effets de l&apos;expérience professionnelle précoce sur les jeunes est cohérente sur plusieurs décennies et dans plusieurs contextes culturels. Organisation Education and Employers, basée au Royaume-Uni, a suivi des milliers de jeunes et constaté que ceux qui ont eu au moins quatre contacts significatifs avec des professionnels avant l&apos;âge de 16 ans ont cinq fois moins de risques de ne pas être en emploi, formation ou éducation à 19 ans. Cinq fois moins.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          D&apos;autres recherches montrent que l&apos;expérience professionnelle structurée développe précisément les compétences que PISA identifie comme déficitaires. La lecture critique s&apos;améliore quand les jeunes lisent des documents professionnels réels avec des enjeux réels — des e-mails, des rapports, des propositions. La résolution de problèmes se développe quand les problèmes ont des conséquences réelles et ne comportent pas de solution prédéfinie. La communication s&apos;affine quand elle doit convaincre de vraies personnes plutôt que satisfaire un correcteur.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il y a aussi une dimension motivationnelle que les données PISA confirment indirectement. La désengagement scolaire — visible dans la baisse du sentiment d&apos;appartenance chez certaines catégories d&apos;élèves — est l&apos;un des facteurs identifiés dans le déclin des performances. Les jeunes qui voient comment leurs apprentissages s&apos;appliquent dans le monde réel développent une motivation intrinsèque que l&apos;école seule peine à générer.
        </p>
        <Callout color="emerald">
          <strong>Données Education and Employers (2024)&nbsp;:</strong> Les lycéens qui ont eu au moins quatre contacts significatifs avec des professionnels avant 16 ans ont cinq fois moins de risques de se retrouver sans emploi, formation ou éducation à 19 ans. L&apos;effet est encore plus marqué pour les élèves de milieux défavorisés.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La crise d&apos;engagement et le travail réel comme solution</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;une des révélations les moins commentées de PISA 2025 concerne non pas les performances brutes mais l&apos;engagement. La quasi-disparition des performances de haut niveau dans certains pays, combinée à la montée de la &laquo;&nbsp;lecture rapide&nbsp;&raquo; et à la dépendance à l&apos;IA pour le travail cognitif, pointe vers un problème d&apos;engagement profond — pas simplement de capacité.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les élèves qui n&apos;utilisent pas l&apos;IA pour leurs devoirs et qui maintiennent de bonnes performances ne sont pas nécessairement plus intelligents. Ils sont souvent plus engagés — ils trouvent une raison intrinsèque de faire l&apos;effort cognitif que l&apos;apprentissage exige. Cette motivation intrinsèque a une source connue&nbsp;: la perception de la pertinence. Quand un jeune comprend pourquoi une compétence compte dans le monde réel, il est infiniment plus disposé à faire l&apos;effort de l&apos;acquérir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;expérience professionnelle crée cette pertinence de façon directe et irréfutable. Un lycéen qui passe deux semaines dans une équipe de communication d&apos;une entreprise et rédige de vrais textes pour de vrais lecteurs comprend immédiatement pourquoi la clarté, la précision et la capacité à évaluer l&apos;information importent. Ce n&apos;est plus théorique. C&apos;est opérationnel.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>L&apos;expérience professionnelle rend les apprentissages scolaires pertinents et motivants</Bullet>
          <Bullet>Elle développe la motivation intrinsèque — la condition nécessaire à un apprentissage profond</Bullet>
          <Bullet>Elle expose les jeunes à des problèmes non structurés que les manuels scolaires n&apos;offrent jamais</Bullet>
          <Bullet>Elle construit la résilience face à l&apos;échec dans des contextes à faibles enjeux</Bullet>
          <Bullet>Elle donne un contexte concret aux compétences académiques, rendant leur développement significatif</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La fenêtre d&apos;âge critique&nbsp;: 14-16 ans</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La recherche sur le développement adolescent identifie une fenêtre particulièrement féconde pour la première expérience professionnelle&nbsp;: entre 14 et 16 ans. À cet âge, plusieurs facteurs se combinent de façon unique. Le cerveau adolescent est en pleine période de restructuration des circuits de motivation et de récompense — une période d&apos;une plasticité exceptionnelle. Les expériences vécues à cet âge ont tendance à laisser des empreintes durables sur les orientations professionnelles et les valeurs du travail.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          De plus, commencer à 14-16 ans laisse le temps d&apos;exploiter l&apos;expérience. Un élève qui fait un premier stage à 15 ans a devant lui deux à trois ans pour approfondir ce qu&apos;il a découvert, explorer d&apos;autres secteurs, développer des compétences spécifiques, et construire un récit professionnel cohérent avant ses candidatures universitaires. Un élève qui commence à 17-18 ans n&apos;a pas ce temps de maturation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est également l&apos;âge auquel l&apos;écart entre les élèves engagés et désengagés commence à se creuser de façon mesurable. Les données PISA montrent que le sentiment d&apos;appartenance scolaire — l&apos;un des prédicteurs les plus forts de la performance — est particulièrement fragile entre 14 et 16 ans, surtout pour les filles. L&apos;expérience professionnelle peut jouer un rôle de réancrage en donnant aux jeunes une identité compétente en dehors du cadre scolaire.
        </p>
        <Callout color="indigo">
          <strong>La fenêtre optimale&nbsp;:</strong> La recherche sur le développement adolescent identifie 14-16 ans comme la période la plus fertile pour une première expérience professionnelle structurée. C&apos;est l&apos;âge auquel le gap entre l&apos;école et le monde du travail est maximal — et donc l&apos;apprentissage potentiel aussi.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que PISA 2025 signifie pour les familles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les parents qui lisent les résultats de PISA 2025, la tentation naturelle est de réagir en ajoutant de la pression académique — plus de cours particuliers, plus de temps d&apos;étude, plus de préparation aux examens. Cette réaction est compréhensible mais insuffisante. Car PISA ne mesure pas la maîtrise du programme — il mesure la capacité à mobiliser des connaissances dans des situations réelles. Et aucun cours particulier ne peut enseigner cette capacité aussi efficacement que de vivre de vraies situations professionnelles.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ce que les données suggèrent pour les familles est différent&nbsp;: maintenir des attentes académiques élevées, certainement — mais les combiner avec des expériences qui rendent ces attentes significatives. Un jeune qui comprend pourquoi les mathématiques comptent parce qu&apos;il a vu comment une équipe financière les utilise est bien plus motivé à les maîtriser qu&apos;un jeune à qui on dit simplement qu&apos;elles seront importantes &laquo;&nbsp;plus tard&nbsp;&raquo;.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il y a aussi la question de la position individuelle. PISA mesure des moyennes nationales. Ce qui compte pour votre famille, c&apos;est de savoir où votre enfant se situe dans cette distribution — et si les compétences qu&apos;il développe à l&apos;école le préparent réellement aux exigences du monde professionnel. Cette information individuelle ne peut pas venir de PISA. Elle doit venir d&apos;une évaluation personnalisée.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Encouragez une première expérience professionnelle dès 14-15 ans, même courte</Check>
          <Check>Privilégiez les expériences avec de vraies responsabilités plutôt que l&apos;observation passive</Check>
          <Check>Discutez régulièrement de ce que votre enfant observe dans ses expériences professionnelles</Check>
          <Check>Évaluez objectivement les compétences de préparation professionnelle de votre enfant</Check>
          <Check>Combinez les attentes académiques avec des expériences qui les rendent concrètes</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Eduentry rend l&apos;expérience professionnelle accessible</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;un des obstacles les plus fréquents à l&apos;expérience professionnelle précoce est la crédibilité. Comment un lycéen de 14 ou 15 ans, sans CV ni références, peut-il convaincre une organisation de lui confier une vraie responsabilité ? C&apos;est précisément le problème qu&apos;Eduentry a conçu pour résoudre.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;évaluation de préparation au stage d&apos;Eduentry — disponible sur <strong>eduentry.com/internship</strong> — est conçue spécifiquement pour les élèves de 14 à 18 ans encore au lycée. En 25 minutes, l&apos;évaluation adaptative mesure trois dimensions de la préparation professionnelle&nbsp;: la communication (capacité à transmettre des idées clairement et de façon professionnelle), la résolution de problèmes (approche face à des défis non structurés), et la conscience professionnelle (compréhension du fonctionnement des organisations et des attentes professionnelles).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          À l&apos;issue de l&apos;évaluation, chaque élève reçoit un rapport personnalisé comprenant un score de préparation, un bilan détaillé des compétences, et des recommandations adaptées aux opportunités de stage correspondant à son profil. Ce rapport peut être partagé avec des employeurs potentiels — fournissant une preuve objective d&apos;aptitude là où un lycéen n&apos;a pas encore de CV à montrer.
        </p>
        <Callout color="emerald">
          <strong>Ce que mesure l&apos;évaluation Eduentry Internship&nbsp;:</strong> Communication professionnelle, résolution de problèmes dans des contextes réels, conscience organisationnelle et professionnelle. 34 questions adaptatives, 25 minutes, rapport personnalisé immédiat. Accessible à partir de 14 ans, entièrement gratuit.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le modèle d&apos;Eduentry s&apos;inscrit directement dans ce que les données PISA 2025 recommandent&nbsp;: objectiver la préparation individuelle plutôt que se fier uniquement aux notes scolaires, et créer des ponts entre les compétences scolaires et les attentes professionnelles réelles. L&apos;évaluation ne remplace pas l&apos;expérience — elle crée les conditions pour qu&apos;elle devienne accessible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les compétences qui compteront à l&apos;ère de l&apos;IA</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 introduit pour la première fois l&apos;évaluation de la &laquo;&nbsp;résolution computationnelle de problèmes&nbsp;&raquo; — la capacité à raisonner de façon algorithmique, à manipuler des séquences logiques, à comprendre comment les systèmes d&apos;information fonctionnent. C&apos;est une reconnaissance explicite que les compétences numériques ne sont plus optionnelles. Elles font partie de la littératie de base du XXIe siècle.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mais les données sur l&apos;IA dans PISA 2025 ajoutent une nuance cruciale. Ce n&apos;est pas la maîtrise des outils numériques qui importe le plus — c&apos;est le jugement sur comment et quand les utiliser. Les élèves qui obtiennent les meilleurs résultats dans les pays leaders ne sont pas ceux qui évitent l&apos;IA. Ce sont ceux qui l&apos;utilisent de façon critique et sélective, pour amplifier leur propre pensée plutôt que pour la remplacer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette distinction — utiliser l&apos;IA pour penser mieux plutôt que pour ne pas penser — est précisément ce que l&apos;expérience professionnelle enseigne naturellement. Dans un environnement professionnel réel, utiliser l&apos;IA pour ne pas réfléchir a des conséquences immédiates et visibles&nbsp;: les erreurs coûtent, les clients remarquent, les managers évaluent. Le feedback professionnel enseigne la responsabilité cognitive que l&apos;environnement scolaire, avec sa tolérance pour l&apos;erreur anonyme, peine à inculquer.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>La pensée critique — évaluer, comparer, synthétiser — est la compétence la moins automatisable</Bullet>
          <Bullet>La communication interpersonnelle authentique reste irremplaçable par les systèmes d&apos;IA actuels</Bullet>
          <Bullet>Le jugement situationnel — savoir quoi faire dans des contextes ambigu et à forts enjeux — exige l&apos;expérience réelle</Bullet>
          <Bullet>La créativité transgressive — trouver des solutions inédites — se développe face à de vrais problèmes</Bullet>
          <Bullet>La maîtrise critique de l&apos;IA — savoir quand et comment l&apos;utiliser — est une compétence professionnelle en soi</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le paradoxe que PISA 2025 met en lumière est le suivant&nbsp;: à l&apos;époque où l&apos;IA est la plus puissante qu&apos;elle n&apos;ait jamais été, les compétences fondamentales que PISA mesure — lire profondément, raisonner quantitativement, penser scientifiquement — n&apos;ont jamais été aussi importantes. Ce n&apos;est pas parce que l&apos;IA ne peut pas les faire. C&apos;est parce que sans ces fondations, on ne peut pas évaluer ce que l&apos;IA produit, corriger ses erreurs, ou prendre les décisions que la machine ne peut pas prendre.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les élèves qui entrent dans la vie adulte avec une expérience professionnelle réelle, une capacité à lire et raisonner de façon critique, et un jugement sur l&apos;utilisation responsable des outils numériques sont les mieux équipés pour naviguer dans cette économie. Ces compétences ne s&apos;acquièrent pas en ajoutant des heures de cours. Elles s&apos;acquièrent en faisant — en assumant de vraies responsabilités, dans de vrais contextes, avec de vraies conséquences.
        </p>
        <Callout color="indigo">
          <strong>La compétence de l&apos;ère IA&nbsp;:</strong> Ce n&apos;est pas savoir utiliser l&apos;IA. C&apos;est savoir quand ne pas la laisser penser à sa place. Cette distinction — qui exige un jugement, une expérience et une conscience de ses propres compétences — est précisément ce que l&apos;expérience professionnelle développe que l&apos;école ne peut pas.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 est un signal d&apos;alarme. Mais c&apos;est aussi une carte. Il indique précisément les compétences qui font défaut et celles qui sont le plus précieuses dans l&apos;économie du XXIe siècle. La réponse adaptée n&apos;est pas de travailler plus sur les mêmes exercices scolaires. C&apos;est de créer les conditions dans lesquelles les jeunes développent les compétences que l&apos;école seule ne peut pas enseigner — par l&apos;expérience réelle, par la responsabilité, par le contact avec le monde professionnel.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour les familles qui lisent ces lignes&nbsp;: la question n&apos;est pas de savoir si votre enfant a besoin d&apos;expérience professionnelle précoce. Les données PISA et les recherches sur le développement adolescent répondent unanimement par l&apos;affirmative. La question est de savoir quand commencer — et pour la grande majorité des élèves, la réponse est&nbsp;: maintenant, et avec les outils qui rendent cette expérience accessible dès 14 ans.
        </p>
      </section>
    </>
  ),

  'pisa-2025-crise-education-mondiale-ce-que-les-parents-doivent-savoir': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        En septembre 2026, l&apos;OCDE a publié les résultats de PISA 2025 — le Programme International pour le Suivi des Acquis des élèves — et le bilan a stupéfié ministres, directeurs d&apos;établissements et parents. Pour la première fois dans l&apos;histoire de cette évaluation, les pays de l&apos;OCDE ont enregistré simultanément leurs moyennes les plus basses dans les trois domaines fondamentaux : mathématiques, lecture et sciences. Plus de 760 000 élèves dans 91 pays et économies ont participé, représentant 33 millions de jeunes de 15 ans dans le monde. L&apos;ampleur du programme rend impossible tout rejet de ces résultats comme simple bruit statistique.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Il ne s&apos;agit pas d&apos;un accident passager. C&apos;est l&apos;accélération d&apos;une tendance décennale qui s&apos;est construite à travers plusieurs cycles PISA successifs, amplifiée par les années de pandémie et aggravée par les changements structurels dans la façon dont les jeunes lisent, apprennent et interagissent avec la technologie. Les chercheurs de l&apos;OCDE eux-mêmes qualifient ces résultats de &ldquo;signal d&apos;alarme&rdquo; pour les systèmes éducatifs qui ont laissé la distraction, l&apos;apprentissage superficiel et l&apos;utilisation non critique de l&apos;IA éroder les compétences fondamentales dont chaque enfant a besoin pour réussir dans la vie adulte.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Pour les parents, la question immédiate n&apos;est pas abstraite. Elle est personnelle. Que signifient ces résultats pour votre enfant ? Si les moyennes nationales baissent, où se situe votre enfant dans cette distribution — et que pouvez-vous faire ? Cet article passe en revue les résultats de PISA 2025 domaine par domaine, explique ce que les données signifient concrètement pour les familles et pourquoi comprendre la position individuelle de votre enfant n&apos;a jamais été aussi important qu&apos;aujourd&apos;hui.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que PISA et pourquoi est-ce important ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA est le Programme International pour le Suivi des Acquis des élèves de l&apos;OCDE, mené tous les trois ans depuis 2000. Il évalue les élèves de 15 ans — l&apos;âge auquel la plupart des élèves dans les pays développés approchent de la fin de la scolarité obligatoire — en mathématiques, compréhension de l&apos;écrit et sciences. En 2025, 91 pays et économies ont participé, et les résultats représentent environ 33 millions d&apos;élèves dans le monde. Aucune autre étude éducative n&apos;approche cette échelle ou cette rigueur méthodologique.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA est important parce que c&apos;est le seul véritable étalon mondial. Les examens nationaux vous indiquent comment les enfants se comparent au sein du propre système d&apos;un pays — utile, mais limité. PISA pose les mêmes questions à tous les élèves dans les mêmes conditions et place chaque score sur la même échelle internationale. Lorsque Singapour obtient 563 en résolution computationnelle de problèmes et que la moyenne de l&apos;OCDE est 500, cet écart est réel et mesurable. Pour les parents qui prennent des décisions éducatives, PISA fournit le seul point de référence fiable sur la position d&apos;un système national dans un contexte mondial.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La crise des mathématiques : 22 points perdus en une décennie</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les scores moyens en mathématiques de l&apos;OCDE ont chuté de 22 points entre 2015 et 2025. Pour comprendre ce que cela signifie concrètement : les chercheurs estiment qu&apos;environ 20 points PISA correspondent à peu près à une année de scolarité. Une baisse de 22 points signifie que le jeune de 15 ans moyen dans les pays de l&apos;OCDE fonctionne désormais à un niveau mathématique équivalent à plus d&apos;un an en retard par rapport à son homologue d&apos;il y a dix ans. Ce n&apos;est pas une erreur de mesure. C&apos;est un effondrement systémique et transnational des résultats en mathématiques.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les meilleurs performeurs restent concentrés en Asie de l&apos;Est. Les juridictions chinoises — Pékin, Shanghai, Jiangsu et Zhejiang, connues collectivement sous le nom de B-S-J-Z — et Singapour continuent de mener le monde par un écart considérable. L&apos;Estonie, le Japon, la Corée du Sud, Macao (Chine), Taipei chinois et le Royaume-Uni figurent également dans le top dix mondial. Ces systèmes éducatifs se caractérisent par des attentes élevées, une forte qualité des enseignants, une culture qui prend les mathématiques au sérieux et une distraction numérique relativement limitée pendant les heures d&apos;école.
        </p>
        <Callout color="amber">
          <strong>La règle de l&apos;année scolaire :</strong> Chaque 20 points PISA équivaut approximativement à une année de scolarité. La baisse de 22 points en maths de l&apos;OCDE depuis 2015 signifie que l&apos;enfant moyen entre aujourd&apos;hui dans la vie adulte avec plus d&apos;un an de moins de capacité mathématique que l&apos;enfant moyen de 2015 — malgré le même nombre d&apos;années passées à l&apos;école.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;effondrement de la lecture : 28 points — et un nouveau type d&apos;illettrisme</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La baisse en lecture est plus prononcée qu&apos;en mathématiques, et ses implications sont plus larges. Les scores moyens de lecture de l&apos;OCDE ont chuté de 28 points entre 2015 et 2025 — l&apos;équivalent d&apos;environ un an et demi de scolarité. Mais le chiffre brut sous-estime le problème, car PISA 2025 a également révélé un changement qualitatif dans la façon dont les jeunes lisent. La proportion d&apos;élèves qui font preuve de &ldquo;lecture hâtive&rdquo; — lire rapidement mais inexactement, en privilégiant la vitesse à la compréhension — a presque doublé entre 2018 et 2025, atteignant 9 % des élèves de l&apos;OCDE.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorsque PISA a demandé aux élèves comment ils évaluent les informations qu&apos;ils rencontrent, seulement 46 % ont déclaré vérifier la crédibilité de la source ET préférer les preuves scientifiques lors de l&apos;évaluation des affirmations. 37 % supplémentaires vérifient les sources mais s&apos;en remettent finalement au bon sens plutôt qu&apos;aux preuves scientifiques. 11 % font confiance à l&apos;autorité scientifique sans vérifier les sources. Et 5 % ne font ni l&apos;un ni l&apos;autre. En d&apos;autres termes, moins de la moitié des jeunes de 15 ans dans les pays de l&apos;OCDE ont les habitudes d&apos;évaluation nécessaires pour naviguer dans un environnement informationnel dominé par les résultats de l&apos;IA et la désinformation virale.
        </p>
        <Callout color="rose">
          <strong>Seulement 46 % des élèves de l&apos;OCDE</strong> vérifient à la fois la crédibilité des sources et préfèrent les preuves scientifiques lors de l&apos;évaluation des informations. À une époque où l&apos;IA peut générer en quelques secondes des textes convaincants mais entièrement fabriqués, c&apos;est l&apos;écart de compétences fondamental avec les enjeux les plus élevés.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sciences : un tableau mixte, avec de vrais points positifs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les sciences ont montré un déclin global plus modéré dans les pays de l&apos;OCDE depuis 2015. L&apos;histoire la plus intéressante se situe au niveau des pays. Quatre pays — le Royaume-Uni, la Turquie, la République slovaque et le Costa Rica — ont démontré une amélioration mesurable de leurs scores en sciences depuis le cycle PISA 2022. C&apos;est un signal réellement positif que certains systèmes éducatifs vont dans la bonne direction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 a également introduit un nouveau domaine pour la première fois : la résolution computationnelle de problèmes. Cela évaluait la capacité des élèves à réfléchir systématiquement à des problèmes impliquant des algorithmes, des données et des séquences logiques. Environ deux tiers des élèves de l&apos;OCDE ont atteint le Niveau 3 ou supérieur, et environ un quart a atteint les Niveaux 5 ou 6. Les juridictions les mieux classées étaient Macao (Chine) avec 572, Singapour avec 563 et B-S-J-Z chinois avec 560, bien au-dessus de la moyenne de l&apos;OCDE de 500.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;IA en classe : une arme à double tranchant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 est le premier cycle à examiner systématiquement l&apos;utilisation de l&apos;IA par les élèves, et les résultats sont plus nuancés — et plus préoccupants — que la plupart des commentateurs ne l&apos;ont suggéré. 46 % des élèves de l&apos;OCDE déclarent utiliser des chatbots d&apos;IA chaque semaine ou plus souvent. C&apos;est presque la moitié de tous les jeunes de 15 ans dans le monde développé qui consultent régulièrement des outils d&apos;IA. Lorsque PISA a examiné la relation entre l&apos;utilisation de l&apos;IA et les performances académiques, il a trouvé une association négative frappante pour une catégorie spécifique : utiliser l&apos;IA pour des tâches scolaires particulières.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les élèves qui utilisent régulièrement l&apos;IA pour résumer des textes, rédiger des travaux ou faire des recherches obtiennent environ 20 points de moins en sciences que les élèves qui n&apos;utilisent pas l&apos;IA pour ces tâches. C&apos;est environ une année complète de scolarité en retard par rapport à leurs pairs qui effectuent les mêmes tâches par leur propre effort cognitif. Le mécanisme n&apos;est pas difficile à comprendre : quand l&apos;IA fait le travail cognitif qui construit les connaissances et les compétences, l&apos;élève est court-circuité. La tâche est accomplie mais l&apos;apprentissage n&apos;a pas lieu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mais le tableau n&apos;est pas uniformément négatif. Les élèves qui utilisent l&apos;IA à des fins générales d&apos;apprentissage — exploration, explication, réponse à des questions — affichent des performances similaires aux élèves qui n&apos;utilisent pas l&apos;IA. Et les élèves qui bénéficient d&apos;une éducation à la littératie en IA à l&apos;école obtiennent de légèrement meilleures performances. Le problème n&apos;est pas l&apos;IA elle-même. Le problème est la substitution : utiliser l&apos;IA pour éviter l&apos;effort cognitif qui produit l&apos;apprentissage. Il y a aussi une dimension d&apos;équité préoccupante : l&apos;éducation à la littératie en IA est disproportionnellement accessible aux élèves de milieux socialement avantagés, créant une nouvelle &ldquo;fracture IA&rdquo;.
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet>
            <strong>46 % des élèves de l&apos;OCDE</strong> utilisent des chatbots d&apos;IA chaque semaine ou plus souvent.
          </Bullet>
          <Bullet>
            <strong>~20 points de moins en sciences</strong> sont associés à l&apos;utilisation de l&apos;IA pour des tâches scolaires spécifiques — l&apos;équivalent d&apos;environ une année de scolarité en retard.
          </Bullet>
          <Bullet>
            <strong>L&apos;utilisation générale de l&apos;IA</strong> à des fins d&apos;apprentissage ne montre pas d&apos;association négative significative sur les performances.
          </Bullet>
          <Bullet>
            <strong>28 % des élèves</strong> déclarent que leurs camarades sont distraits par des appareils numériques pendant la plupart ou la totalité des cours de sciences.
          </Bullet>
        </ul>
        <Callout color="amber">
          <strong>Le piège des devoirs par IA :</strong> PISA 2025 a constaté qu&apos;utiliser l&apos;IA pour résumer, rédiger et faire des recherches est associé à un retard d&apos;une année scolaire complète par rapport aux pairs qui font le travail eux-mêmes. Le raccourci semble efficace. Le coût cognitif est invisible — jusqu&apos;à ce qu&apos;il apparaisse dans un résultat d&apos;examen.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentiment d&apos;appartenance : le facteur caché de la réussite scolaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un résultat de PISA 2025 qui reçoit moins d&apos;attention médiatique que les baisses de scores est également important : le rôle de l&apos;appartenance dans les résultats académiques. 76 % des élèves de l&apos;OCDE déclarent se sentir appartenir à leur école — et ce chiffre s&apos;est amélioré depuis 2022. L&apos;Espagne a enregistré le sentiment d&apos;appartenance le plus élevé de l&apos;OCDE à 90 %, tandis que le Danemark, la Pologne, l&apos;Italie et la Lituanie ont enregistré les taux les plus bas, avec 64 % ou moins des élèves se sentant appartenir. L&apos;écart entre les sexes est notable : les filles rapportent constamment un sentiment d&apos;appartenance scolaire plus faible que les garçons dans les pays de l&apos;OCDE. Un élève qui ne se sent pas appartenir à son école est beaucoup moins susceptible de s&apos;engager profondément dans l&apos;apprentissage et de persévérer face aux difficultés.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi évaluer votre enfant n&apos;a jamais été aussi crucial</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA montre des moyennes nationales. Il ne peut pas — et ne peut pas — vous dire quoi que ce soit sur les enfants individuellement. En tant que parent, la baisse de 22 points en mathématiques dans toute l&apos;OCDE est un contexte, pas une réponse. La question qui compte pour votre famille est de savoir où se situe votre enfant dans cette distribution, et si l&apos;éducation qu&apos;il reçoit construit les compétences que PISA 2025 montre comme les plus à risque.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La variation au sein des pays est le chiffre que la plupart des parents ne connaissent pas, et c&apos;est le chiffre qui compte le plus. Dans un pays typique de l&apos;OCDE, l&apos;écart entre les élèves les plus et les moins performants dépasse 200 points PISA — l&apos;équivalent de plus de dix ans de scolarité dans une seule cohorte d&apos;âge. Sans une évaluation individuelle, toutes les décisions éducatives importantes — cours particuliers, choix d&apos;école, sélection des matières, aspirations universitaires — sont prises sans l&apos;information la plus importante : où se situe vraiment votre enfant.
        </p>
        <Callout color="indigo">
          La moyenne PISA vous parle des systèmes. Eduentry vous parle de votre enfant.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Évaluez votre enfant avec Eduentry : gratuit et scientifiquement fondé</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry est une plateforme d&apos;évaluation adaptative construite spécifiquement pour donner aux parents les informations au niveau individuel que PISA ne peut pas fournir. Elle utilise la Théorie de la Réponse à l&apos;Item (TRI) — la même méthodologie psychométrique qui sous-tend PISA — pour placer chaque enfant de 6 à 17 ans sur la même échelle internationale. L&apos;évaluation s&apos;adapte en temps réel aux réponses de chaque enfant, prenant environ 20 minutes, et fournit un score standardisé et un rang percentile mondial. La première évaluation est entièrement gratuite, sans inscription requise.
        </p>
        <ul className="space-y-4 mb-6">
          <Check>
            <strong>Mathématiques</strong> — raisonnement numérique et résolution de problèmes alignés sur le cadre PISA
          </Check>
          <Check>
            <strong>Anglais</strong> — compréhension de lecture et compétences linguistiques
          </Check>
          <Check>
            <strong>Raisonnement verbal</strong> — pensée logique appliquée au langage, fort prédicteur du potentiel académique
          </Check>
          <Check>
            <strong>Raisonnement non verbal</strong> — raisonnement abstrait et spatial indépendant de la langue
          </Check>
          <Check>
            <strong>Rang percentile mondial</strong> — place votre enfant sur la même échelle internationale que PISA
          </Check>
          <Check>
            <strong>Gratuit, sans inscription requise</strong> — l&apos;évaluation complète prend environ 20 minutes
          </Check>
        </ul>
        <div className="mt-6 mb-2">
          <Link href="/fr#academique" className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#4338CA] transition-colors">
            Commencer l&apos;évaluation gratuite
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion : un signal d&apos;alarme, pas un motif de désespoir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les résultats de PISA 2025 sont sobres. Le déclin simultané dans les trois domaines fondamentaux, le quasi-doublement de la &ldquo;lecture hâtive&rdquo;, l&apos;écart de performance lié à l&apos;IA, la vulnérabilité des adolescents à la désinformation — pris ensemble, ces résultats décrivent une génération de jeunes dont les compétences fondamentales sont sous une pression réelle. Mais les mêmes données qui identifient la crise identifient aussi ce qui fonctionne : des attentes élevées, de solides relations enseignants-élèves, une culture de lecture profonde et critique, et une approche de la technologie qui construit des compétences plutôt que de les remplacer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          En tant que parent, l&apos;action la plus puissante que vous pouvez prendre maintenant est de passer des statistiques nationales à la position individuelle de votre propre enfant. PISA raconte l&apos;histoire mondiale. Ce que vous devez savoir, c&apos;est votre chapitre. L&apos;évaluation adaptative d&apos;Eduentry prend 20 minutes, est entièrement gratuite et place votre enfant sur la même échelle internationale que PISA. Une fois que vous savez où se situe votre enfant, vous pouvez agir avec précision plutôt qu&apos;avec anxiété.
        </p>
      </section>
    </>
  ),

  'pisa-c-est-quoi-resultats-2025-reussite-professionnelle': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Cela fait plus de vingt ans que je travaille avec des élèves. En tout ce temps, j&apos;ai observé une constante : les familles suivent de très près les notes scolaires, mais savent rarement où se situe leur enfant par rapport au reste du monde. PISA existe précisément pour répondre à cette question — et les réponses ne sont pas toujours confortables.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Cet article ne cherche pas à alarmer. Mais en tant qu&apos;éducateur, j&apos;ai l&apos;obligation d&apos;être honnête : il existe un écart réel entre ce que les systèmes éducatifs enseignent et ce que PISA mesure. Et cet écart, si on l&apos;ignore, a des conséquences professionnelles concrètes. Le voir clairement est la première étape pour le combler.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que PISA ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA est l&apos;acronyme de <em>Programme for International Student Assessment</em> — Programme International pour le Suivi des Acquis des élèves. C&apos;est une évaluation conçue et coordonnée par l&apos;OCDE (Organisation de Coopération et de Développement Économiques) qui se déroule tous les trois ans dans 91 pays auprès d&apos;élèves de 15 ans. Environ 690 000 jeunes y participent par cycle, sélectionnés via des échantillons représentatifs de chaque système éducatif.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ce qui distingue PISA d&apos;un examen ordinaire, c&apos;est son approche : il ne mesure pas ce que les élèves ont mémorisé, mais leur capacité à <em>appliquer</em> ces connaissances à des situations du monde réel. Un problème de mathématiques PISA ne demande pas combien font 327 × 14 ; il demande comment calculer le trajet le plus économique en train en utilisant une tarification par tranches. Un exercice de lecture ne consiste pas à résumer un texte littéraire ; il s&apos;agit d&apos;évaluer la crédibilité de deux sources contradictoires sur un sujet scientifique.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA évalue trois domaines principaux : les mathématiques, la compréhension de lecture et les sciences. En 2025, un quatrième domaine a été ajouté : la résolution de problèmes computationnels, qui reflète la demande croissante du marché du travail en matière de pensée algorithmique et de maîtrise des environnements numériques.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La méthodologie utilisée est la Théorie de Réponse à l&apos;Item (TRI). Contrairement aux tests à score fixe, la TRI adapte les questions au niveau de l&apos;élève, ce qui permet de mesurer avec précision aussi bien les élèves très en dessous que très au-dessus de la moyenne sur une même échelle internationale standardisée.
        </p>
        <Callout>
          <strong className="text-indigo-900">À noter :</strong> PISA n&apos;évalue pas les élèves individuellement — il travaille avec des échantillons représentatifs pour comparer les systèmes éducatifs nationaux. Aucun enfant n&apos;obtient de « résultat PISA » officiel. Mais il est possible d&apos;estimer où il se situerait, comme nous l&apos;expliquerons plus loin.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que PISA 2025 ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 est le cycle le plus récent de l&apos;évaluation. Les élèves ont été évalués durant l&apos;année scolaire 2024–2025, et les résultats ont été publiés en 2026. À l&apos;échelle mondiale, les données révèlent une tendance préoccupante : les scores moyens de l&apos;OCDE en lecture et en mathématiques ont baissé par rapport aux cycles précédents. La baisse cumulée depuis 2015 dépasse les 20 points dans les deux matières — une différence équivalente à près d&apos;une année complète d&apos;apprentissage.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les systèmes éducatifs d&apos;Asie orientale continuent de dominer nettement : Singapour, le Japon et la Corée du Sud occupent de façon constante les premières places en mathématiques, lecture et sciences. L&apos;écart entre ces pays et la moyenne de l&apos;OCDE s&apos;est encore creusé en 2025.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La nouveauté la plus marquante de ce cycle est l&apos;introduction de la résolution de problèmes computationnels. Les résultats dans ce domaine révèlent des différences significatives entre pays — et un signal clair sur quels systèmes préparent leurs élèves à l&apos;économie numérique et lesquels ne le font pas.
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>Lecture</strong> — La moyenne OCDE a reculé par rapport à 2022. Environ 69 % des élèves atteignent le Niveau 2 (seuil minimum de compétence). Un sur trois est en dessous.</Check>
          <Check><strong>Mathématiques</strong> — 65 % des élèves OCDE atteignent le Niveau 2. Environ un sur trois reste sous le minimum fonctionnel.</Check>
          <Bullet><strong>Résolution de problèmes computationnels</strong> — Nouveau domaine en 2025. Différences très marquées entre pays. Les systèmes à faible intégration numérique accusent particulièrement le retard.</Bullet>
          <Bullet><strong>Haut niveau (Niveaux 5–6)</strong> — Seuls 8 % des élèves OCDE en mathématiques. La compétitivité mondiale dans ce segment est très concentrée en Asie orientale.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA 2026, ça existe ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Non. Il n&apos;existe pas de PISA 2026. La confusion est compréhensible et très fréquente : les résultats de PISA 2025 ont été publiés en 2026, ce qui pousse beaucoup de personnes à chercher « PISA 2026 » en croyant qu&apos;il s&apos;agit du cycle le plus récent.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA suit un cycle triennal : PISA 2019, PISA 2022, PISA 2025. Le prochain cycle sera <strong>PISA 2028</strong>, avec des résultats prévus pour 2029. Si votre enfant a entre 12 et 15 ans aujourd&apos;hui, il fera partie de la cohorte évaluée lors de ce cycle — ou aura déjà terminé le lycée quand les résultats seront publiés. La fenêtre pour agir sur sa préparation est ouverte maintenant.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA et réussite professionnelle : un lien plus profond qu&apos;on ne le croit</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Quand j&apos;affirme que la performance au PISA est liée à la réussite professionnelle, ce n&apos;est pas une intuition. C&apos;est une conclusion tirée des données — et le lien est plus précis qu&apos;on pourrait le supposer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La clé, c&apos;est ce que PISA mesure : non pas la mémorisation de contenus, mais l&apos;<em>application des connaissances à des contextes nouveaux</em>. Comparez cette définition avec ce que les employeurs disent qu&apos;il leur manque le plus chez les jeunes diplômés : pensée analytique, capacité à résoudre des problèmes ambigus, compréhension d&apos;informations complexes, raisonnement sur des preuves. C&apos;est exactement la même liste.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les recherches de l&apos;OCDE montrent de manière constante que les pays avec des scores PISA plus élevés affichent aussi une productivité horaire plus importante et des salaires moyens plus élevés ajustés en parité de pouvoir d&apos;achat. La corrélation n&apos;est pas parfaite — beaucoup de facteurs entrent en jeu — mais la tendance est robuste et se maintient même quand on contrôle d&apos;autres indicateurs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le Niveau 2 de PISA — considéré comme le seuil minimum de compétence — définit un élève qui « peut interpréter et reconnaître, sans instructions directes, comment une situation simple peut être représentée mathématiquement. » Quand je lis cette définition, je pense immédiatement au marché du travail : gérer un budget, lire un contrat, interpréter un graphique de ventes. Le Niveau 2, c&apos;est le minimum pour s&apos;en sortir professionnellement — et les emplois les plus intéressants exigent bien plus.
        </p>
        <Callout>
          <strong className="text-indigo-900">Le signal le plus inquiétant de 2025 :</strong> La résolution de problèmes computationnels. Dans un marché du travail où l&apos;IA prend en charge les tâches les plus mécaniques, la capacité à penser algorithmiquement — concevoir des processus, interpréter des données, comprendre le fonctionnement des systèmes numériques — devient un différenciateur fondamental. Les systèmes éducatifs qui ne développent pas cette compétence placent leurs élèves en situation de désavantage pour les emplois qui existeront en 2030.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qui m&apos;inquiète vraiment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les données de PISA 2025 qui m&apos;inquiètent le plus ne sont pas les titres sur la baisse de la moyenne. Ce sont les percentiles internes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          En mathématiques, la moyenne OCDE d&apos;élèves atteignant le Niveau 2 — le minimum fonctionnel — est de 65 %. Cela signifie qu&apos;environ un élève de 15 ans sur trois dans les pays de l&apos;OCDE ne peut pas effectuer des opérations mathématiques de base appliquées à des situations du quotidien. Ce n&apos;est pas un problème marginal ; c&apos;est structurel.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          À l&apos;autre extrémité, seuls 8 % des élèves atteignent le Niveau 5 ou 6 en mathématiques — les niveaux à partir desquels on peut prétendre aux secteurs les plus exigeants du marché du travail mondial. La concentration de ces talents en Asie orientale n&apos;est pas une anomalie statistique ; c&apos;est le résultat de systèmes éducatifs qui priorisent systématiquement l&apos;application des connaissances.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Et voici le paradoxe central que j&apos;observe dans mon travail quotidien : les écoles enseignent les connaissances, mais n&apos;apprennent pas toujours à les <em>utiliser</em>. Les examens traditionnels récompensent la reproduction fidèle du contenu. PISA récompense le transfert. Le marché du travail, comme PISA, récompense le transfert — et le système éducatif, dans beaucoup de pays, continue d&apos;optimiser pour la reproduction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 révèle aussi que plus de 20 % des élèves dans les pays de l&apos;OCDE estiment que l&apos;école ne les a pas préparés à la vie adulte. Ce n&apos;est pas un sentiment isolé — c&apos;est un signal que le fossé entre l&apos;apprentissage scolaire et les exigences réelles est perçu par les élèves eux-mêmes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Si votre enfant avait passé le PISA, où se situerait-il dans le classement mondial ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA n&apos;évalue pas les élèves individuellement : il travaille avec des échantillons représentatifs à l&apos;échelle nationale. Cela signifie que votre enfant n&apos;aura jamais de « résultat PISA » officiel. Mais c&apos;est une question légitime et, avec les bons outils, il est possible d&apos;y répondre : <em>s&apos;il avait participé, dans quel percentile mondial se situerait-il ?</em>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour y répondre, il faut utiliser la même méthodologie que PISA : la Théorie de Réponse à l&apos;Item (TRI). La TRI est un système de mesure adaptatif qui ajuste les questions en temps réel selon les réponses de l&apos;élève, permettant de positionner avec précision sur une même échelle internationale aussi bien les élèves très en dessous que très au-dessus de la moyenne.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;évaluation académique d&apos;Eduentry est construite exactement sur cette méthodologie. Pour les enfants de 6 à 17 ans, elle présente des questions adaptatives en mathématiques, compréhension de lecture et raisonnement ; à la fin, elle génère un score standardisé aligné sur l&apos;échelle internationale du PISA. Le résultat ne dit pas où se situe votre enfant dans sa classe — il dit où il se situe par rapport aux 690 000 élèves évalués dans 91 pays.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">Comment lire le score :</strong> Un score de 100 équivaut à la moyenne internationale. 115 correspond approximativement au percentile 84 mondial (top 16 %). 130 correspond approximativement au percentile 98 (top 2 %). La note du bulletin scolaire regarde vers l&apos;intérieur — vers la classe. Cette évaluation regarde vers l&apos;extérieur — vers le monde.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;évaluation dure 20 à 30 minutes, est entièrement gratuite et ne requiert aucune inscription préalable. Les résultats incluent des scores par domaine et un comparatif en percentile mondial.
        </p>
        <div className="mt-6 mb-2">
          <a href="/fr#academique" className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#4338CA] transition-colors">
            Découvrez où se situe votre enfant — gratuitement
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment développer ce que mesure le PISA</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Je dis toujours la même chose aux familles : il ne s&apos;agit pas de préparer son enfant au PISA en faisant des simulations de PISA. Les compétences qu&apos;il évalue — appliquer des connaissances à des contextes nouveaux, raisonner sur des preuves, résoudre des problèmes avec des informations incomplètes — se développent dans des environnements réels, pas dans des cahiers d&apos;exercices.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;environnement le plus puissant pour développer ces compétences, c&apos;est l&apos;expérience professionnelle réelle. Un élève qui passe quatre semaines à travailler dans une entreprise pratique exactement ce que mesure le PISA : gérer des tâches avec des consignes ambiguës, interpréter des informations provenant de sources multiples, communiquer des idées à des personnes ayant des niveaux de connaissance différents, prendre des décisions avec des données incomplètes. Le contexte scolaire ne peut pas simuler cela efficacement.
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>Compréhension de lecture appliquée</strong> — Lire un e-mail client, interpréter un brief, résumer une réunion. On l&apos;apprend en classe ; on la consolide au travail.</Bullet>
          <Bullet><strong>Raisonnement mathématique</strong> — Analyser des données de ventes, calculer des marges, comparer des budgets. Les chiffres prennent du sens quand ils ont des conséquences réelles.</Bullet>
          <Bullet><strong>Résolution de problèmes</strong> — Faire face à une situation imprévue, chercher des alternatives, décider sous incertitude. Cela ne se pratique que dans des environnements avec de vraies conséquences.</Bullet>
          <Bullet><strong>Pensée computationnelle</strong> — Comprendre des processus, interpréter des données, utiliser des outils numériques avec discernement. C&apos;est l&apos;écart le plus préoccupant de PISA 2025, et il se comble ici.</Bullet>
        </ul>
        <Callout color="emerald">
          <strong className="text-emerald-900">Recommandation pratique :</strong> L&apos;expérience professionnelle structurée avant 17 ans ne concurrence pas les études académiques — elle les complète. Les élèves qui ont travaillé en milieu professionnel comprennent <em>à quoi sert</em> ce qu&apos;ils apprennent en classe. Ce lien est le catalyseur le plus puissant de l&apos;apprentissage profond. Vous pouvez explorer le programme de stage sur{' '}
          <a href="/fr/stage" className="text-indigo-600 underline hover:text-indigo-800">eduentry.ai/fr/stage</a>.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025 documente une réalité que les éducateurs observent depuis des années dans les salles de classe : les systèmes éducatifs enseignent bien les contenus, mais ont du mal à développer la capacité à les appliquer. Cet écart a des conséquences — non pas comme abstraction statistique, mais parce qu&apos;il définit la différence entre un jeune qui entre sur le marché du travail avec des outils fonctionnels et un autre qui entre avec des connaissances sans ancrage.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les familles qui comprennent cela ont un avantage réel : elles peuvent agir avant que l&apos;écart ne devienne coûteux. Savoir où se situe votre enfant sur l&apos;échelle internationale, développer les compétences que le marché valorise, et connecter l&apos;apprentissage académique à une expérience professionnelle réelle — ces trois choses ensemble constituent la préparation la plus solide pour 2030. Et les trois sont accessibles maintenant, pendant que la fenêtre est encore ouverte.
        </p>
      </section>
    </>
  ),

  'what-is-a-standardised-score': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Si votre enfant a récemment passé une évaluation scolaire — un test CAT4 à l'école, un exercice de préparation au 11+, ou un bilan diagnostique en ligne — vous avez probablement vu apparaître un « score standardisé » à côté du pourcentage de bonnes réponses. La plupart des parents ignorent le score standardisé et se concentrent sur le pourcentage. C'est pourtant le score standardisé qui vous dit quelque chose de réel sur la position de votre enfant.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un score standardisé ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un score standardisé indique comment votre enfant s'est comporté par rapport à un grand groupe de référence d'enfants du même âge — et non pas simplement quel pourcentage de questions il a réussi. La plupart des évaluations éducatives utilisent une échelle avec une moyenne de 100 et un écart-type de 15. Un score de 115 signifie donc toujours la même chose, quel que soit le test passé ou son niveau de difficulté.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les tests qui utilisent cette échelle incluent le CAT4 (très répandu dans les écoles britanniques et internationales), le CogAT (États-Unis), le NWEA MAP, les tests 11+ GL Assessment au Royaume-Uni, ainsi que l'évaluation Eduentry. Cette standardisation commune permet des comparaisons significatives entre tests différents.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le problème des scores bruts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un score brut — par exemple 43 bonnes réponses sur 60 — ne vous dit qu'une chose : votre enfant a répondu correctement à 72 % des questions de ce test particulier ce jour-là. Il ne vous dit pas si le test était facile ou difficile. Il ne vous dit pas comment les autres enfants du même âge ont performé. Il ne vous permet pas de comparer ce résultat avec un test différent passé trois mois plus tard.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le score standardisé, lui, tient compte de l'âge, de la difficulté du test et des performances du groupe de référence. Deux enfants qui répondent correctement à 43 questions sur 60 peuvent recevoir des scores standardisés très différents s'ils ont un écart d'âge de 18 mois ou s'ils ont passé des tests de difficulté différente.
        </p>
        <Callout>
          <strong className="text-indigo-900">L'essentiel à retenir :</strong> Le score standardisé place votre enfant sur un pied d'égalité avec d'autres enfants exactement du même âge, indépendamment de la difficulté du test. C'est une mesure comparative juste ; le score brut ne l'est pas.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">L'échelle standardisée : repères essentiels</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Presque toutes les évaluations standardisées utilisées dans les écoles britanniques et internationales utilisent la même échelle : une moyenne de 100 et un écart-type de 15. Cette échelle est commune au CAT4, au GL Assessment 11+, au NFER, aux tests WISC-V et à Eduentry.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">100</div>
            <div className="text-sm text-indigo-600 font-medium">Moyenne</div>
            <div className="text-xs text-gray-500 mt-1">50e percentile</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">15</div>
            <div className="text-sm text-indigo-600 font-medium">Écart-type</div>
            <div className="text-xs text-gray-500 mt-1">unité de dispersion</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">68 %</div>
            <div className="text-sm text-indigo-600 font-medium">Entre 85 et 115</div>
            <div className="text-xs text-gray-500 mt-1">dans un écart-type</div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Plage de scores</th>
                <th className="text-left p-4 font-semibold text-gray-700">Classification</th>
                <th className="text-left p-4 font-semibold text-gray-700">Percentile approx.</th>
                <th className="text-left p-4 font-semibold text-gray-700">% de la population</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['130+', 'Très supérieur', 'Top 2 %', '~2 %'],
                ['120–129', 'Supérieur', '91e–98e', '~7 %'],
                ['110–119', 'Au-dessus de la moyenne', '75e–91e', '~16 %'],
                ['95–109', 'Dans la moyenne', '37e–63e', '~25 %'],
                ['85–94', 'En dessous de la moyenne', '16e–36e', '~16 %'],
                ['70–84', 'Faible / nécessite un soutien', '2e–15e', '~14 %'],
              ].map(([range, label, pct, pop]) => (
                <tr key={range} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono font-semibold text-gray-900">{range}</td>
                  <td className="p-4 text-gray-700">{label}</td>
                  <td className="p-4 text-gray-500">{pct}</td>
                  <td className="p-4 text-gray-400">{pop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Propriété importante de cette échelle : chaque pas de 15 points représente exactement un écart-type. Un score de 115 (un écart-type au-dessus de la moyenne) correspond à environ le 84e percentile. Un score de 130 (deux écarts-types) correspond à environ le 98e percentile. Ces correspondances sont constantes sur tous les tests qui utilisent cette échelle.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un percentile ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le percentile est la façon la plus intuitive d'interpréter un score standardisé. Le percentile de votre enfant indique le pourcentage d'enfants du même âge qu'il a dépassés. Un score au <strong>84e percentile</strong> signifie que votre enfant a fait mieux que 84 % des enfants de son âge.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Deux idées reçues à corriger. Première : le 50e percentile n'est pas un « mauvais » score — il signifie exactement dans la moyenne, ni mieux ni moins bien que la moitié des enfants du même âge. Beaucoup de parents voient un score au 50e percentile et pensent que leur enfant est en difficulté. Deuxième : le percentile n'est pas la même chose que le pourcentage de bonnes réponses. Un enfant qui répond correctement à 70 % des questions peut se retrouver au 85e percentile si le test était difficile, ou au 30e si le test était facile.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700 mb-4">
          {[
            ['Score standardisé 130', '98e percentile', 'Top 2 % des enfants du même âge'],
            ['Score standardisé 120', '91e percentile', 'Top 9 %'],
            ['Score standardisé 115', '84e percentile', 'Plage compétitive grammar school'],
            ['Score standardisé 110', '75e percentile', 'Au-dessus de la moyenne'],
            ['Score standardisé 100', '50e percentile', 'Exactement dans la moyenne'],
            ['Score standardisé 90', '25e percentile', 'En dessous de la moyenne'],
          ].map(([score, pct, note]) => (
            <li key={score} className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="font-medium">{score}</span>
              <span className="text-indigo-600 font-medium">{pct}</span>
              <span className="text-gray-400 text-xs">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le score standardisé selon l'âge (SAS)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le SAS (Standard Age Score) est le format spécifique utilisé par GL Assessment pour le 11+ au Royaume-Uni. Il introduit un ajustement supplémentaire : l'âge exact de l'enfant en mois au moment du test.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cela est important car les enfants qui passent le 11+ en septembre de la Year 6 ont des âges qui vont d'environ 10 ans et 2 mois à 11 ans et 1 mois — une différence de développement significative à cet âge. Les recherches montrent constamment que les enfants les plus âgés d'une cohorte surpassent les plus jeunes aux tests standardisés, non pas en raison d'une plus grande aptitude, mais d'un avantage développemental.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">Implication pratique pour les parents :</strong> Si votre enfant est né en été, ne paniquez pas quand un camarade né en septembre semble mieux performer. Le SAS compense cet écart en comparant chaque enfant uniquement avec des enfants nés dans la même plage de mois — pas avec toute la cohorte.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment utiliser le score de votre enfant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorsque vous recevez un score standardisé, l'erreur la plus courante est de l'interpréter comme une caractéristique fixe de votre enfant. Un score au 65e percentile aujourd'hui ne signifie pas que votre enfant sera au 65e percentile dans 12 mois. Les scores standardisés à cet âge sont réellement sensibles à la préparation ciblée — en particulier en raisonnement verbal et en mathématiques.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Utilisez le score de façon diagnostique. Un enfant qui score en dessous de 95 en raisonnement verbal et au-dessus de 115 en mathématiques a besoin d'un plan de préparation très différent d'un enfant qui score 108 dans les quatre domaines. Le percentile vous dit où il en est. Le détail par matière vous dit sur quoi travailler. Pour explorer les niveaux requis dans les écoles sélectives britanniques, consultez notre guide sur les{' '}
          <Link href="/fr/blog/ecoles-selectionnees-uk-2026" className="text-indigo-600 hover:underline">
            critères d'admission des écoles sélectives UK 2026
          </Link>.
        </p>
      </section>
    </>
  ),

  'nwea-map-scores-explained': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Si l'école de votre enfant utilise les tests NWEA MAP Growth, vous avez probablement reçu un rapport affichant un « score RIT » et un percentile — et vous vous êtes demandé ce que ces chiffres signifient vraiment. Ce guide explique comment interpréter les scores RIT, ce qui est considéré comme dans la norme ou avancé, et comment utiliser les résultats pour soutenir l'apprentissage de votre enfant.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce que le test NWEA MAP Growth ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA MAP (Measures of Academic Progress) Growth est un test d'évaluation adaptatif informatisé développé par la Northwest Evaluation Association. Utilisé par plus de 9 millions d'élèves aux États-Unis de la maternelle à la terminale, il mesure la lecture, les mathématiques, l'usage de la langue et les sciences. Contrairement aux tests fixes, MAP s'adapte en temps réel — chaque question s'ajuste au niveau de l'enfant en fonction de sa réponse précédente, de sorte que le test est toujours calibré avec précision.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ce test est particulièrement répandu dans les écoles américaines et dans certains établissements bilingues et internationaux du Canada, de la Belgique et de la Suisse. La plupart des écoles administrent le MAP Growth deux à trois fois par an — généralement en automne, en hiver et au printemps. Cela permet de suivre non seulement le niveau actuel de l'enfant, mais aussi sa progression, qui est souvent l'information la plus utile.
        </p>
        <Callout>
          <strong className="text-indigo-900">Atout majeur du MAP :</strong> Contrairement à la plupart des tests scolaires, MAP vous dit non seulement où se situe votre enfant, mais aussi à quelle vitesse il progresse — et si cette progression est dans la norme, au-dessus ou en dessous par rapport aux élèves de son niveau dans le pays.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un score RIT ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le score produit par MAP Growth s'appelle un score RIT (abréviation de Rasch Unit). Ce n'est pas un pourcentage et ce n'est pas un équivalent de niveau scolaire. C'est une position sur une échelle à intervalles égaux qui couvre l'ensemble du cursus de la maternelle à la terminale — la même échelle continue de la petite enfance jusqu'au lycée.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un enfant typique en début de maternelle commence avec un score RIT en mathématiques d'environ 140–150. À la fin du CM2 (Grade 5 américain), la moyenne se situe autour de 210–215. En fin de 4e (Grade 8), la moyenne est d'environ 218–222. L'échelle est continue et cohérente : un score RIT de 210 en mathématiques représente exactement le même niveau de connaissances qu'il appartienne à un élève de CM1 ou de 6e.
        </p>
        <Callout>
          <strong className="text-indigo-900">L'atout clé du score RIT :</strong> Comme l'échelle est cohérente entre tous les niveaux, vous pouvez directement comparer le score RIT d'un enfant aux normes de son niveau — et voir non seulement s'il est au niveau, mais de combien il est en avance ou en retard. Un élève de CE2 avec un RIT de mathématiques de 220 performe au niveau d'un élève de 5e.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Repères de scores RIT par niveau scolaire</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Le tableau suivant présente les normes nationales NWEA 2020 — les scores RIT moyens pour les élèves américains en début d'année, ainsi que ce qui représente une performance solide (environ le 75e percentile). Les équivalences françaises sont approximatives.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Niveau (équiv. France)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Maths (moy.)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Maths (75e %ile)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Lecture (moy.)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Lecture (75e %ile)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Maternelle', '144', '154', '139', '150'],
                ['CP', '163', '173', '158', '170'],
                ['CE1', '178', '188', '169', '181'],
                ['CE2', '188', '199', '177', '191'],
                ['CM1', '197', '208', '185', '199'],
                ['CM2', '205', '216', '191', '206'],
                ['6e', '211', '222', '197', '212'],
                ['5e', '215', '226', '201', '217'],
                ['4e', '218', '229', '204', '220'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-4 text-gray-600">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400">Source : NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">RIT et percentile : quelle différence ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le rapport MAP de votre enfant affiche à la fois un score RIT et un percentile. Ces deux mesures sont liées mais mesurent des choses différentes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>score RIT</strong> est une mesure absolue — il indique où se situe votre enfant sur la progression des connaissances de la maternelle au lycée, quel que soit son niveau scolaire. Un RIT de 215 en mathématiques signifie toujours le même niveau de compréhension mathématique.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>percentile</strong> est une mesure relative — il compare le score RIT de votre enfant aux normes nationales pour les élèves du même niveau à la même période de l'année. Utilisez le RIT pour comprendre le niveau de contenu que votre enfant est prêt à aborder. Utilisez le percentile pour comprendre comment votre enfant se compare à ses pairs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre la progression</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L'une des fonctionnalités les plus précieuses du MAP est le suivi de la progression dans le temps. La progression typique du score RIT de mathématiques entre l'automne et le printemps :
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong>Maternelle–CE1 :</strong> environ 10–12 points RIT par an (croissance rapide en début de littératie et numératie)</Bullet>
          <Bullet><strong>CE2–CM2 :</strong> environ 6–8 points RIT par an (la progression ralentit à mesure que le contenu devient plus complexe)</Bullet>
          <Bullet><strong>6e–4e :</strong> environ 3–5 points RIT par an (la progression ralentit significativement au collège)</Bullet>
          <Bullet><strong>Lycée :</strong> environ 1–3 points RIT par an (proche du plafond de l'échelle pour les élèves avancés)</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Un enfant qui progresse davantage que ces normes affiche une croissance accélérée. Un enfant qui ne gagne que 2 points RIT dans une année où 7 est la norme peut avoir besoin d'un soutien supplémentaire, même si son score absolu est encore au-dessus de la moyenne de son niveau.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Scores MAP élevés et identification des élèves à haut potentiel</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dans de nombreux districts scolaires américains, un score MAP Growth élevé est l'un des indicateurs clés qui déclenchent une orientation vers un programme pour élèves à haut potentiel. Les seuils courants sont le 90e ou le 95e percentile dans une ou plusieurs matières. Si votre enfant se situe à ces niveaux, demandez explicitement à l'école si une évaluation pour ces programmes est appropriée — certains districts déclenchent automatiquement ce processus, d'autres nécessitent une initiative parentale.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour une vue d'ensemble complète du processus d'évaluation et des autres tests utilisés aux côtés du MAP dans le cadre des programmes surdoués, consultez notre{' '}
          <Link href="/fr/blog/guide-evaluation-programmes-surdoues" className="text-indigo-600 hover:underline">
            guide d'évaluation pour les programmes surdoués
          </Link>.
        </p>
      </section>
    </>
  ),

  'gifted-program-testing-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Les programmes pour élèves à haut potentiel (EHP) comptent parmi les placements les plus recherchés dans l'éducation publique américaine — et le processus de qualification peut être déroutant pour les familles qui y font face pour la première fois. Ce guide explique comment fonctionnent ces programmes, quels tests sont utilisés, quels scores sont nécessaires et comment préparer votre enfant efficacement. Il s'adresse particulièrement aux familles francophones résidant aux États-Unis, au Canada ou dans des établissements internationaux utilisant ces évaluations.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un programme pour élèves à haut potentiel ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un programme EHP (Gifted and Talented en anglais) est un placement éducatif structuré pour les enfants identifiés comme exceptionnellement avancés sur le plan académique ou cognitif. L'identification se fait généralement par des tests d'aptitude et de compétences tels que le CogAT, le WISC-V, l'OLSAT ou le NNAT. Aux États-Unis, l'identification se fait au niveau du district scolaire et nécessite généralement d'atteindre des seuils de score dans les 2 à 5 % supérieurs selon plusieurs critères — et non pas un seul résultat de test.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { type: 'Programme de retrait partiel', desc: 'Les élèves restent dans leur classe ordinaire mais sont retirés pour un enseignement spécialisé EHP quelques heures par semaine. Le format le plus courant à l\'école primaire.' },
            { type: 'Classe EHP dédiée', desc: 'Une classe entièrement consacrée aux élèves EHP, au sein d\'une école ordinaire. Les élèves identifiés passent toute la journée ensemble. Format plus intensif que le retrait partiel.' },
            { type: 'École EHP spécialisée (magnet school)', desc: 'Une école entièrement dédiée aux élèves surdoués, nécessitant généralement une candidature et un test d\'admission séparé. L\'entrée y est la plus compétitive.' },
            { type: 'Différenciation en classe ordinaire', desc: 'Certains districts fournissent un enrichissement via l\'enseignement différencié plutôt qu\'un placement séparé. L\'identification existe mais ne résulte pas en une désignation EHP formelle.' },
          ].map(({ type, desc }) => (
            <div key={type} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{type}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <Callout color="amber">
          <strong className="text-amber-800">Particularité américaine :</strong> L'éducation des élèves surdoués n'est pas mandatée au niveau fédéral aux États-Unis. Chaque État définit ses propres critères, et les processus varient significativement d'un district à l'autre. Vérifiez toujours les critères spécifiques de votre district en premier lieu.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment les enfants sont-ils identifiés ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La plupart des districts utilisent un processus d'identification multi-critères plutôt qu'un seul score de test. Un processus typique se déroule en quatre étapes :
        </p>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Orientation', detail: 'Un enseignant, un parent ou l\'élève lui-même initie une demande d\'évaluation EHP. De nombreux districts ont une fenêtre formelle d\'orientation chaque année — généralement en automne.' },
            { step: '2', title: 'Évaluation de présélection', detail: 'Le district administre un test de présélection collectif (CogAT, NNAT ou OLSAT) pour identifier les élèves susceptibles de se qualifier pour une évaluation plus approfondie.' },
            { step: '3', title: 'Évaluation formelle', detail: 'Les élèves qui dépassent le seuil de présélection reçoivent une évaluation plus complète — souvent un test de QI individuel (WISC-V ou Stanford-Binet) administré par un psychologue scolaire.' },
            { step: '4', title: 'Comité de placement', detail: 'Un comité examine les résultats des tests avec les évaluations des enseignants, les performances académiques, le portfolio et d\'autres critères pour formuler une recommandation de placement.' },
          ].map(({ step, title, detail }) => (
            <div key={step} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center flex-shrink-0">{step}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les principaux tests utilisés pour l'identification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Voici les tests que votre enfant est le plus susceptible de rencontrer dans ce processus, et ce que chacun mesure :
        </p>
        <div className="space-y-5">
          {[
            {
              name: 'CogAT (Cognitive Abilities Test)',
              publisher: 'Riverside Insights',
              detail: 'Le test de présélection collectif le plus utilisé aux États-Unis. Mesure le raisonnement verbal (analogies, classification), le raisonnement quantitatif (séries de nombres) et le raisonnement non verbal (matrices de figures). Pour l\'admissibilité EHP, la plupart des districts exigent un score composite au 95e percentile ou plus.',
            },
            {
              name: 'NWEA MAP Growth',
              publisher: 'Northwest Evaluation Association',
              detail: 'Test adaptatif mesurant la lecture, les mathématiques, l\'usage de la langue et les sciences. Les scores sont reportés en unités RIT. Un score au 95e percentile ou plus dans une matière spécifique déclenche souvent une orientation EHP dans les districts qui utilisent MAP comme principal outil de présélection.',
            },
            {
              name: 'WISC-V (Wechsler Intelligence Scale for Children)',
              publisher: 'Pearson',
              detail: 'Évaluation de QI individuelle administrée par un psychologue scolaire ou clinique agréé. Produit un QI total (FSIQ) et plusieurs scores composites. La plupart des programmes EHP rigoureux exigent un FSIQ ≥ 130 (98e percentile ou plus). Ne peut pas être préparé de la même façon que les tests de compétences.',
            },
            {
              name: 'OLSAT (Otis-Lennon School Ability Test)',
              publisher: 'NCS Pearson',
              detail: 'Utilisé principalement dans le programme Gifted & Talented de New York et certains autres districts. Mesure le raisonnement verbal et non verbal. Le programme EHP de NYC exige historiquement un score composite au 97e percentile ou plus pour les programmes de district, et au 99e percentile pour les programmes à l\'échelle de la ville.',
            },
            {
              name: 'NNAT (Naglieri Nonverbal Ability Test)',
              publisher: 'Pearson',
              detail: 'Test de raisonnement non verbal utilisant des matrices de motifs abstraits. Souvent utilisé avec l\'OLSAT ou le CogAT. Les scores sont indépendants de la langue, ce qui le rend particulièrement utile pour les élèves dont l\'anglais n\'est pas la langue maternelle — notamment les familles francophones récemment arrivées aux États-Unis.',
            },
          ].map(({ name, publisher, detail }) => (
            <div key={name} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-0.5">{name}</div>
              <div className="text-xs text-indigo-600 font-medium mb-3">{publisher}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quel score votre enfant doit-il atteindre ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le seuil varie considérablement selon le type de programme et le district. À titre indicatif général :
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Type de programme</th>
                <th className="text-left p-4 font-semibold text-gray-700">Seuil percentile typique</th>
                <th className="text-left p-4 font-semibold text-gray-700">Score standardisé équivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Programme de retrait partiel (district typique)', '90e–95e percentile', '120–125'],
                ['Classe EHP dédiée', '95e–97e percentile', '125–128'],
                ['École magnet EHP compétitive', '97e–99e percentile', '128–135'],
                ['NYC Gifted & Talented (programme municipal)', '99e percentile+', '135+'],
                ['Programmes très surdoués (type Davidson Academy)', '99,9e percentile', '145+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[0]}</td>
                  <td className="p-4 text-indigo-700 font-medium">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong className="text-indigo-900">Important :</strong> De nombreux districts utilisent des critères multiples — les scores de tests ne sont qu'un élément, pas le seul. Certains enfants qui manquent de peu le seuil numérique sont placés dans des programmes EHP sur la base d'évaluations solides des enseignants ou d'un portfolio. Si votre enfant est à la limite, il vaut la peine de demander une réunion avec le coordinateur EHP.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment préparer votre enfant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La préparation aux tests EHP est un sujet nuancé. Les évaluations de QI comme le WISC-V ne peuvent pas être préparées de façon significative — elles mesurent l'aptitude cognitive, pas les connaissances acquises. En revanche, le CogAT, le NNAT et l'OLSAT sont plus sensibles à la pratique, car ils testent des compétences de raisonnement influencées par l'exposition et la répétition.
        </p>
        <ul className="space-y-4 mb-4">
          <Check><strong>Commencez par un bilan diagnostique.</strong> Utilisez une évaluation standardisée gratuite (comme Eduentry) pour établir le niveau percentile actuel de votre enfant avant d'investir dans des matériaux de préparation. Cela vous dit à quelle distance du seuil vous vous situez et si l'identification EHP est un objectif réaliste à court terme.</Check>
          <Check><strong>Pratiquez le format spécifique du test utilisé.</strong> Différents tests utilisent différents formats. Les analogies verbales du CogAT sont différentes des matrices du NNAT. Utilisez des matériaux de pratique officiels pour le test spécifique de votre district.</Check>
          <Check><strong>Développez les compétences sous-jacentes sur la durée.</strong> La lecture extensive (pour le vocabulaire), les puzzles mathématiques (pour la batterie quantitative) et les puzzles spatiaux comme les Lego et tangrams (pour les batteries non verbales) sont plus efficaces sur 12 mois que le bachotage intensif les semaines précédant le test.</Check>
          <Check><strong>Pratiquez sur ordinateur.</strong> La plupart des tests EHP actuels sont administrés sur ordinateur. Les enfants qui n'ont pratiqué que sur papier peuvent avoir du mal avec le timing et l'interface des tests numériques.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Si votre enfant ne se qualifie pas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ne pas se qualifier pour un programme EHP ne signifie pas que votre enfant n'est pas brillant ou capable d'une performance académique exceptionnelle. L'identification EHP à 5 ou 7 ans est un instantané des performances d'un enfant sur des tests spécifiques à un moment précis — ce n'est pas un plafond permanent.
        </p>
        <p className="text-gray-700 leading-relaxed">
          De nombreux enfants qui ne se qualifient pas initialement à 6 ou 7 ans se qualifient lors d'une réévaluation à 8 ou 9 ans. Concentrez-vous sur le développement des compétences sous-jacentes et de la curiosité intellectuelle. Pour comprendre comment les scores NWEA MAP s'inscrivent dans les orientations EHP, consultez notre{' '}
          <Link href="/fr/blog/scores-nwea-map-expliques" className="text-indigo-600 hover:underline">
            guide sur les scores NWEA MAP
          </Link>.
        </p>
      </section>
    </>
  ),

  'grammar-school-entry-requirements-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        « Quel score mon enfant doit-il obtenir ? » est la première question que se posent toutes les familles qui préparent le 11+ au Royaume-Uni. La réponse honnête est : cela dépend de la région, de l'école spécifique et du niveau de compétition de l'année. Mais il existe des repères clairs — et ce guide les couvre tous. Pour les familles francophones vivant au Royaume-Uni ou envisageant d'y scolariser leur enfant, comprendre ce système est indispensable.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionne la sélection dans les grammar schools ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les grammar schools en Angleterre sont légalement autorisées à sélectionner la totalité de leurs élèves sur la base des aptitudes académiques. La plupart utilisent l'examen 11+ — passé en septembre ou octobre de la Year 6 (environ 10-11 ans) — comme instrument de sélection principal. Un enfant qui score au-dessus du seuil formel de réussite de l'école est placé sur le « registre sélectif ».
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Être sur le registre sélectif est nécessaire mais pas suffisant pour obtenir une place. Les écoles surdemandées classent ensuite les candidats sélectifs selon des critères secondaires, généralement dans cet ordre : enfants pris en charge (looked-after children) ; frères et sœurs déjà scolarisés dans l'école ; proximité géographique de l'école.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Distinction essentielle :</strong> Le seuil de réussite et le score compétitif sont deux chiffres différents. Le seuil est le plancher. Le score compétitif est ce qui obtient réellement une place dans une école spécifique surdemandée. À Londres, un enfant peut scorer 125 au SAS et ne pas obtenir de place parce que d'autres enfants ayant scoré 128 habitent plus près.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quels organismes d'examens sont utilisés ?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { board: 'GL Assessment', areas: 'Kent, Essex, Hertfordshire, la plupart des écoles individuelles', notes: 'Produit un Score Standardisé selon l\'Âge (SAS), ajusté pour l\'âge exact en mois. Teste le raisonnement verbal, non verbal, l\'anglais et les mathématiques dans des épreuves séparées. Le format 11+ le plus répandu en Angleterre.' },
            { board: 'CEM (Université de Durham)', areas: 'Buckinghamshire, certaines écoles de Birmingham', notes: 'Produit un score standardisé selon l\'âge. Les questions mélangent aptitude verbale, raisonnement numérique et raisonnement spatial sans labellisation par matière. Délibérément plus difficile à préparer avec les cahiers d\'exercices classiques.' },
            { board: 'ISEB Common Pre-Test', areas: 'Écoles indépendantes et certaines académies sélectives', notes: 'Teste l\'anglais, les mathématiques, le raisonnement verbal et non verbal séparément. Utilisé pour les admissions à 11 et 13 ans dans les écoles indépendantes. Format adaptatif informatisé.' },
            { board: 'Épreuves propres à l\'école', areas: 'Fondation King Edward\'s (Birmingham), certaines écoles de Londres', notes: 'Rédigées par l\'école elle-même. Teste généralement l\'anglais et les mathématiques à un niveau significativement au-dessus du programme national. Plus difficile à préparer, car il n\'y a pas de matériaux de pratique officiels.' },
          ].map(({ board, areas, notes }) => (
            <div key={board} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-1">{board}</div>
              <div className="text-xs font-medium text-indigo-600 mb-2">{areas}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Repères de scores par région — 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Les plages suivantes sont indicatives sur la base des seuils de réussite typiques et des niveaux de compétition historiques. Les seuils individuels des écoles changent d'une année à l'autre selon la cohorte. Vérifiez toujours directement la politique d'admission publiée par l'école cible.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Région</th>
                <th className="text-left p-4 font-semibold text-gray-700">Organisme d'examen</th>
                <th className="text-left p-4 font-semibold text-gray-700">SAS cible</th>
                <th className="text-left p-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kent', 'GL Assessment', '115–121', '32 grammar schools. Les seuils varient selon l\'école et la ville. Judd et Tonbridge Grammar sont parmi les plus compétitives.'],
                ['Buckinghamshire', 'CEM', '118+', '13 écoles. Comté entièrement sélectif. Le test CEM est plus difficile à préparer que les épreuves GL Assessment.'],
                ['Londres (Barnet)', 'GL Assessment', '121–132', 'QE Boys et Henrietta Barnett sont parmi les écoles publiques les plus sélectives d\'Angleterre.'],
                ['Londres (Sutton)', 'GL Assessment', '118–125', 'Nonsuch, Wallington, Wilson\'s, Sutton Grammar partagent un seul test via le Sutton Consortium.'],
                ['Birmingham (Fondation KE)', 'Épreuves propres', '119+', 'Les écoles de la Fondation King Edward\'s sont très sélectives avec des épreuves d\'anglais et de mathématiques propres.'],
                ['Essex', 'GL Assessment', '112–118', 'Colchester Royal Grammar, Westcliff High. Moins de compétition qu\'à Londres ou dans le Kent.'],
                ['Hertfordshire', 'GL Assessment', '111–115', 'Dame Alice Owen\'s, Watford Grammar. La distance est un facteur clé de départage.'],
                ['Gloucestershire', 'GL Assessment', '113–118', 'Pate\'s Grammar est la plus sélective. Les quatre écoles utilisent GL Assessment.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 font-mono font-semibold text-indigo-700">{row[2]}</td>
                  <td className="p-4 text-gray-500 text-xs leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Score de réussite vs score compétitif</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il existe une distinction importante entre réussir le 11+ et être compétitif pour une place. Réussir — scorer au-dessus du seuil formel — signifie qu'un enfant est académiquement apte à un enseignement de grammar school. Être compétitif signifie scorer assez haut pour effectivement obtenir une place dans une école spécifique surdemandée, compte tenu des critères secondaires.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dans les zones moins compétitives (une partie de l'Essex, du Hertfordshire, du Gloucestershire), réussir et être compétitif sont à peu près équivalents. Dans les zones très compétitives (Londres, les meilleures écoles du Kent), le score compétitif est significativement au-dessus du seuil publié. À Queen Elizabeth's Boys, le seuil officiel peut être SAS 111, mais le candidat médian admis score plutôt 127–130.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La zone frontière et le recours</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La plupart des écoles opèrent une bande frontière informelle — typiquement 2 à 4 points SAS de chaque côté du seuil formel. Les enfants dans cette bande peuvent se voir offrir une place via les critères secondaires normaux s'ils habitent suffisamment près.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si votre enfant ne se voit pas offrir une place, vous avez le droit de faire appel. Une évaluation standardisée indépendante passée autour de la date du 11+ — montrant un score plus élevé que le résultat officiel — est l'une des pièces de preuve les plus utiles dans un recours. Elle fournit un repère objectif suggérant que le résultat de l'examen était une sous-performance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour comprendre comment les scores standardisés fonctionnent et ce que signifient les percentiles, consultez notre{' '}
          <Link href="/fr/blog/qu-est-ce-qu-un-score-standardise" className="text-indigo-600 hover:underline">
            guide sur les scores standardisés
          </Link>.
        </p>
      </section>
    </>
  ),

  'uae-cat4-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Le CAT4 (Cognitive Abilities Test 4) est l'évaluation académique la plus répandue dans les écoles de programme britannique aux Émirats arabes unis et dans les établissements britanniques internationaux du monde entier. Si votre enfant fréquente une école internationale britannique à Dubaï, Abu Dhabi, Sharjah, ou dans n'importe quel autre pays utilisant le programme anglais, il sera presque certainement amené à passer le CAT4. Ce guide explique ce que mesure le CAT4, comment les scores sont rapportés et comment les écoles utilisent les résultats.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce que le CAT4 ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le Cognitive Abilities Test 4 (CAT4) est publié par GL Assessment, le principal éditeur britannique d'évaluations éducatives. Il est conçu pour mesurer le raisonnement dans quatre domaines cognitifs distincts — verbal, quantitatif, non verbal et spatial — plutôt que les connaissances académiques dans des matières spécifiques. Parce qu'il ne s'agit pas d'un test de connaissances, un enfant qui a fréquenté différentes écoles dans différents pays peut être évalué avec précision, ce qui le rend particulièrement adapté aux familles expatriées.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le CAT4 est utilisé dans plus de 3 000 écoles aux Émirats arabes unis, en Arabie Saoudite et dans toute la région Moyen-Orient et Afrique du Nord. Il est également présent dans les écoles britanniques internationales d'Europe, d'Asie et d'Afrique. Le test est administré sur papier ou sur ordinateur (CAT4 Digital), prend environ 2h30 réparties en deux sessions, et les résultats sont corrigés centralement par GL Assessment contre un groupe de référence britannique.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les écoles reçoivent des rapports détaillés montrant les scores individuels de chaque élève et comment chacun se compare aux élèves britanniques du même âge. C'est ce groupe de référence qui rend les résultats particulièrement utiles pour les familles francophones envisageant une scolarisation au Royaume-Uni ou dans d'autres établissements britanniques.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les quatre batteries expliquées</h2>
        <div className="space-y-5 mb-6">
          {[
            {
              battery: 'Batterie verbale',
              tests: 'Classification verbale, Analogies verbales',
              measures: 'La capacité à raisonner avec des mots, des concepts de langage et des relations verbales. Un enfant qui score bien sur la batterie verbale peut identifier des schémas dans la façon dont les mots se rapportent les uns aux autres — par exemple, reconnaître que « médecin : hôpital » a la même relation que « pilote : cockpit ».',
              note: 'Dépendante de la langue. Les locuteurs non natifs d\'anglais scorent généralement moins bien sur cette batterie. Les écoles doivent en tenir compte pour les élèves dont l\'anglais n\'est pas la langue maternelle, notamment les élèves francophones.',
            },
            {
              battery: 'Batterie quantitative',
              tests: 'Séries de nombres, Analogies numériques',
              measures: 'La capacité à raisonner avec des nombres et des relations numériques. Ce n\'est pas un test de connaissances mathématiques — il ne teste pas l\'arithmétique ni l\'algèbre. Il teste si un enfant peut identifier et prolonger des schémas numériques.',
              note: 'Moins dépendante de la langue que la batterie verbale. Un enfant faible en anglais mais fort en raisonnement mathématique performe souvent mieux ici que sur la batterie verbale.',
            },
            {
              battery: 'Batterie non verbale',
              tests: 'Classification de figures, Matrices de figures',
              measures: 'La capacité à raisonner avec des formes et des motifs abstraits. Les questions montrent des séquences ou des groupes de figures géométriques et demandent à l\'enfant d\'identifier quelle figure complète le motif. Complètement indépendante de la langue.',
              note: 'Souvent la batterie la plus équitable pour les élèves dont l\'anglais n\'est pas la langue maternelle. Un score non verbal élevé par rapport au score verbal peut indiquer une forte aptitude au raisonnement partiellement masquée par des facteurs linguistiques.',
            },
            {
              battery: 'Batterie spatiale',
              tests: 'Analyse de figures (pliage de papier), Reconnaissance de figures',
              measures: 'La capacité à raisonner sur l\'espace 2D et 3D — à faire mentalement pivoter, plier ou manipuler des formes. Cette batterie est unique au CAT4 parmi les principaux tests cognitifs et mesure une dimension du raisonnement non capturée par les autres tests.',
              note: 'L\'aptitude spatiale est associée au succès dans les matières STEM, en particulier les mathématiques, la physique et l\'ingénierie. Un score spatial élevé avec des scores verbaux plus faibles peut indiquer un élève qui excellera dans les matières techniques.',
            },
          ].map(({ battery, tests, measures, note }) => (
            <div key={battery} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-1">{battery}</div>
              <div className="text-xs text-indigo-600 font-medium mb-3">Tests : {tests}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{measures}</p>
              <div className="bg-gray-50 rounded-lg px-4 py-3 text-xs text-gray-500 leading-relaxed">{note}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment les scores sont-ils rapportés ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le CAT4 rapporte des Scores Standardisés selon l'Âge (SAS) pour chaque batterie et un SAS moyen global. L'échelle SAS a une moyenne de 100 et un écart-type de 15 — la même échelle utilisée par les tests de QI et la plupart des évaluations cognitives professionnelles. Cette échelle commune rend les scores directement comparables à d'autres évaluations standardisées.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Plage SAS</th>
                <th className="text-left p-4 font-semibold text-gray-700">Stanine</th>
                <th className="text-left p-4 font-semibold text-gray-700">Description</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['127+', '9', 'Très élevé', '4 %'],
                ['119–126', '8', 'Élevé', '7 %'],
                ['112–118', '7', 'Au-dessus de la moyenne', '12 %'],
                ['104–111', '6', 'Légèrement au-dessus de la moyenne', '17 %'],
                ['96–103', '5', 'Dans la moyenne', '20 %'],
                ['89–95', '4', 'Légèrement en dessous de la moyenne', '17 %'],
                ['81–88', '3', 'En dessous de la moyenne', '12 %'],
                ['74–80', '2', 'Faible', '7 %'],
                ['<74', '1', 'Très faible', '4 %'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono text-indigo-700 font-medium">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-center">{row[1]}</td>
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[2]}</td>
                  <td className="p-4 text-gray-500">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          En plus du SAS et du stanine, le CAT4 produit un profil CAT4 — une représentation visuelle des quatre scores de batteries les uns par rapport aux autres. Un profil plat (les quatre batteries similaires) est courant. Un profil irrégulier (différences significatives entre batteries) peut indiquer des forces ou des défis d'apprentissage spécifiques et constitue un bon point de départ pour une conversation avec l'école.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment les écoles utilisent les résultats CAT4</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dans les écoles britanniques internationales (aux Émirats comme ailleurs), le CAT4 est utilisé de trois façons principales :
        </p>
        <ul className="space-y-4 mb-4">
          <Bullet><strong>Sélection à l'admission :</strong> Certaines écoles utilisent le CAT4 dans leur processus d'admission, en particulier pour les candidatures en Year 7+ (entrée au secondaire). Un SAS moyen en dessous d'un certain seuil — typiquement autour de 90–95 — peut indiquer qu'un enfant aura du mal avec le programme académique de l'école.</Bullet>
          <Bullet><strong>Groupes de niveau :</strong> De nombreuses écoles britanniques utilisent le CAT4 pour former des groupes de niveau dans les matières principales, en particulier en Year 7 et Year 8. Le profil CAT4 d'un enfant peut informer dans quel groupe il est placé pour les mathématiques, l'anglais et les sciences.</Bullet>
          <Bullet><strong>Identifier la sous-réussite :</strong> L'une des utilisations les plus puissantes du CAT4 est l'identification des élèves qui performent en dessous de leur potentiel cognitif. Si un enfant score un SAS élevé au CAT4 mais sous-performe académiquement, cet écart (parfois appelé « écart potentiel-performance ») déclenche une investigation — y a-t-il une différence d'apprentissage, un problème de bien-être ou une barrière linguistique ?</Bullet>
        </ul>
        <Callout color="emerald">
          <strong className="text-emerald-900">Contexte KHDA :</strong> La KHDA (Knowledge and Human Development Authority) — qui supervise les écoles privées à Dubaï — utilise les données des évaluations standardisées incluant le CAT4 dans son cadre d'inspection scolaire. Les écoles qui utilisent efficacement les données CAT4 pour combler les écarts potentiel-performance tendent à recevoir de meilleures notes d'inspection. Comprendre les scores CAT4 de votre enfant vous permet de mieux dialoguer avec l'équipe pédagogique.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment préparer votre enfant au CAT4</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le CAT4 est un test de raisonnement, pas un test de connaissances, ce qui limite les possibilités de préparation. Cependant, la familiarité avec les formats de questions — en particulier les batteries non verbale et spatiale — produit de modestes améliorations de score.
        </p>
        <ul className="space-y-3">
          <Check>Exposez votre enfant aux puzzles de matrices de figures et de classification de figures (les livres de raisonnement non verbal de type QI sont largement disponibles en ligne). Ces puzzles reflètent directement la batterie non verbale du CAT4.</Check>
          <Check>Pratiquez les séries de nombres et les questions d'analogies numériques pour renforcer la batterie quantitative.</Check>
          <Check>Pour la batterie spatiale, les jouets de construction (Lego, Magformers), les activités de pliage de papier et les puzzles spatiaux 3D développent la compétence sous-jacente progressivement.</Check>
          <Check>Ne tentez pas de « préparer » la batterie verbale par des exercices de vocabulaire anglais intensifs si l'anglais n'est pas la langue maternelle de votre enfant. Les écoles doivent tenir compte du statut EAL (English as Additional Language) dans l'interprétation des scores de la batterie verbale.</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Pour comprendre comment les scores standardisés comme le SAS fonctionnent et ce que signifient les percentiles, consultez notre{' '}
          <Link href="/fr/blog/qu-est-ce-qu-un-score-standardise" className="text-indigo-600 hover:underline">
            guide complet sur les scores standardisés
          </Link>.
        </p>
      </section>
    </>
  ),

  'understanding-child-strengths-weaknesses-high-school': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        La transition du collège au lycée — de la Troisième vers la Seconde, autour de l'âge de quinze ans — est l'une des bifurcations les plus lourdes de conséquences du parcours scolaire français. C'est à ce moment précis que s'opèrent les grandes orientations : filière générale, technologique ou professionnelle. Et pourtant, la grande majorité des parents abordent cette étape armés d'un seul outil de diagnostic : le bulletin de notes. Or le bulletin de notes est, par construction, une mesure relative à la classe, au professeur et à l'établissement. Il dit ce que fait votre enfant par rapport à ses camarades immédiats — il ne dit pas ce qu'il est capable de faire, ni quel type de raisonnement lui est naturellement accessible. En d'autres termes, le bulletin révèle la performance relative passée, mais dissimule le profil cognitif sous-jacent qui devrait informer les décisions d'orientation à venir. Comprendre ce profil avant l'entrée au lycée n'est pas une démarche réservée aux familles qui s'inquiètent — c'est un acte de préparation éclairée pour tout parent qui souhaite accompagner son enfant avec précision plutôt qu'avec espoir.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi la transition vers le lycée est-elle un moment décisif ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dans la littérature de psychologie de l'éducation, les écarts de réussite ont tendance à se creuser plutôt qu'à se résorber au fil du temps. Ce phénomène, décrit par les sociologues sous le nom d'effet Matthieu (<em>Matthew effect</em>), traduit une réalité concrète : les élèves qui disposent de bases solides dans un domaine cognitif progressent plus vite que ceux qui y sont fragiles, non pas parce qu'ils travaillent davantage, mais parce que chaque nouvel apprentissage s'intègre dans un réseau de connaissances et de schèmes de raisonnement déjà constitués. L'inverse est tout aussi vrai : une fragilité non identifiée en raisonnement verbal, par exemple, ne se rattrape pas spontanément — elle s'aggrave à mesure que les exigences de lecture complexe augmentent.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La France présente à cet égard une particularité structurelle importante : l'orientation en fin de Troisième est l'un des moments où la trajectoire scolaire se formalise avec le plus d'irréversibilité. Les résultats PISA montrent que les systèmes éducatifs qui segmentent tôt les élèves produisent des inégalités plus marquées que ceux qui différencient tardivement. Dans ce contexte, les familles qui anticipent l'orientation en connaissant précisément le profil cognitif de leur enfant ont un avantage structurel réel sur celles qui attendent les résultats du brevet des collèges pour réagir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le brevet des collèges lui-même — bien qu'utile comme signal de maîtrise du socle commun — souffre des mêmes limites que le bulletin : c'est une mesure de performance académique accumulée, pas une carte des aptitudes cognitives naturelles. Un élève peut obtenir de bons résultats au brevet grâce à un travail assidu dans un environnement scolaire favorable, tout en présentant des zones de fragilité cognitive qui ne se manifesteront qu'en Seconde, quand les exigences de raisonnement abstrait augmentent et que le volume de travail dépasse les capacités de compensation par l'effort seul.
        </p>
        <Callout>
          <strong className="text-indigo-900">L'identification précoce bat l'intervention réactive.</strong> La recherche longitudinale sur l'apprentissage montre de façon constante que les interventions menées avant qu'un problème ne soit manifeste produisent des effets deux à trois fois supérieurs à celles menées après l'apparition des difficultés scolaires visibles.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'entend-on par « aptitudes naturelles » — et ce que cela ne signifie pas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La notion d'aptitude cognitive est souvent mal comprise — soit sur-interprétée comme un destin fixé génétiquement, soit, par réaction, rejetée comme illusoire au nom d'un constructivisme radical. La réalité est plus nuancée, et la psychologie différentielle contemporaine offre un cadre rigoureux pour l'appréhender.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le modèle de Cattell-Horn-Carroll (CHC), qui fait consensus en psychométrie, distingue deux grands types d'intelligence : l'<strong>intelligence fluide</strong> (<em>Gf</em>), soit la capacité à raisonner face à des problèmes nouveaux, indépendamment des connaissances acquises, et l'<strong>intelligence cristallisée</strong> (<em>Gc</em>), soit la somme des connaissances, du vocabulaire et des procédures intellectuelles accumulés par l'expérience et l'éducation. L'intelligence fluide est largement héréditaire et relativement stable ; l'intelligence cristallisée est profondément influençable par l'environnement et l'apprentissage. La distinction est fondamentale pour les parents : un enfant peut avoir une intelligence fluide élevée mais une intelligence cristallisée limitée (sous-stimulation, bilinguisme récent, lacunes curriculaires) — ou l'inverse.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les travaux de Howard Gardner sur les intelligences multiples complètent cette perspective en rappelant que l'aptitude cognitive ne se résume pas au raisonnement logico-mathématique et verbal : les intelligences musicale, kinesthésique, interpersonnelle ou naturaliste constituent des forces réelles, même si elles sont moins directement mesurées par les évaluations standardisées. Ces dimensions méritent d'être reconnues dans la construction du projet éducatif de l'enfant.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enfin, le concept de <em>growth mindset</em> développé par Carol Dweck ne contredit pas l'existence de différences d'aptitude — il contextualise leur portée. Dweck montre que la croyance en la plasticité de ses propres capacités est elle-même un facteur prédictif de réussite indépendamment du niveau d'aptitude initial. Autrement dit, connaître son profil cognitif ne doit pas produire de fatalisme, mais une orientation stratégique : s'appuyer sur ses forces, travailler ses fragilités avec méthode, et mettre en place les formes d'<strong>étayage</strong> (<em>scaffolding</em>) appropriées aux domaines où la progression est plus lente.
        </p>
        <Callout color="emerald">
          <strong>Ce que « aptitude naturelle » ne signifie pas :</strong> un plafond fixé, une intelligence unique et hiérarchique, ou une prédiction déterministe de la trajectoire scolaire. C'est une photographie des préférences et de la facilité de traitement actuelles dans des domaines cognitifs distincts — une carte de départ, pas une destinée.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les quatre domaines cognitifs qui prédisent la réussite au lycée</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les grandes évaluations cognitives standardisées — CAT4, CogAT, WISC-V, ainsi que l'évaluation adaptative Eduentry — convergent vers quatre domaines dont le pouvoir prédictif sur la réussite académique au lycée est le mieux documenté dans la littérature psychométrique.
        </p>
        <ul className="space-y-5 mb-6">
          <li>
            <p className="font-semibold text-gray-900 mb-1">1. Le raisonnement verbal</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Il mesure la capacité à manipuler des concepts linguistiques — analogies, classification de termes, compréhension d'inférences, déduction à partir d'informations partiellement explicites. C'est le domaine le plus fortement corrélé à la réussite en lettres, langues, droit, sciences humaines, et à la compréhension des consignes dans toutes les disciplines. Un élève à fort raisonnement verbal décode rapidement des textes complexes, repère les relations logiques implicites et produit des arguments structurés. La faiblesse dans ce domaine se manifeste typiquement par une lenteur sur les exercices de compréhension de texte, une difficulté à reformuler des consignes, et une tendance à « réciter » sans interpréter.
            </p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 mb-1">2. Le raisonnement numérique et quantitatif</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Distinct de la maîtrise des automatismes arithmétiques appris à l'école, le raisonnement quantitatif évalue la capacité à percevoir des relations numériques, à extrapoler des patterns, à raisonner sur des quantités abstraites. C'est le prédicteur principal de la réussite en mathématiques de lycée, en physique, en sciences économiques, en statistiques. Un élève fort dans ce domaine « voit » la structure d'un problème avant d'en avoir identifié les données. Une fragilité ici ne signifie pas l'incapacité à faire des mathématiques — elle signifie que l'automatisation des procédures devra compenser une moindre intuition quantitative.
            </p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 mb-1">3. La mémoire de travail</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              La mémoire de travail est la capacité à maintenir et manipuler des informations en mémoire à court terme pendant qu'on effectue une tâche cognitive. Elle est souvent décrite comme la « surface de travail » du cerveau. Sa capacité est l'un des prédicteurs les plus robustes de la réussite scolaire globale, indépendamment du domaine. Un élève avec une mémoire de travail élevée peut suivre un raisonnement en plusieurs étapes sans perdre le fil, traiter plusieurs contraintes simultanées dans un problème complexe, et intégrer de nouvelles informations sans saturation. Les difficultés de mémoire de travail — souvent confondues avec de l'inattention ou un manque d'effort — sont l'une des causes les plus fréquentes de difficultés scolaires non identifiées.
            </p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 mb-1">4. Le raisonnement non verbal et spatial</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Il évalue la capacité à percevoir des relations entre formes, à effectuer des rotations mentales, à comprendre des structures dans l'espace. Ce domaine est particulièrement prédictif de la réussite dans les filières scientifiques et techniques — physique, chimie, SVT, technologie, arts plastiques — mais aussi de la rapidité d'adaptation à des systèmes nouveaux. Un élève spatialement fort comprend les schémas, plans et représentations graphiques de façon intuitive. Il est souvent sous-évalué par les évaluations scolaires classiques, qui privilégient les performances verbales et calculatoires.
            </p>
          </li>
        </ul>
        <Callout color="indigo">
          <strong>Pourquoi les quatre domaines ensemble ?</strong> Un profil cognitif révèle non seulement les forces mais aussi les déséquilibres. Un enfant avec un fort raisonnement verbal et une faible mémoire de travail a un profil très différent d'un enfant avec les mêmes scores moyens répartis uniformément — et ses besoins de préparation le sont tout autant.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signes observables à la maison et à l'école</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les parents n'ont pas besoin d'une formation en psychologie pour commencer à observer des indicateurs des forces cognitives de leur enfant. Ces signaux sont présents dans les comportements quotidiens, à condition de savoir quoi chercher.
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet>
            <strong>Raisonnement verbal fort :</strong> l'enfant aime les jeux de mots, les devinettes et les débats. Il reformule spontanément les explications. Il réussit mieux les épreuves de compréhension que les calculs. À la table du dîner, il argumentera avec précision et cherchera à nuancer les positions.
          </Bullet>
          <Bullet>
            <strong>Raisonnement quantitatif fort :</strong> il perçoit rapidement les patterns dans les séries numériques. Il trouve souvent des raccourcis dans les calculs. Il aime les jeux de stratégie et les puzzles logiques. À l'inverse, un enfant qui travaille les maths avec acharnement sans que les résultats aux contrôles ne reflètent l'effort peut présenter une fragilité dans ce domaine que compense l'effort — jusqu'à un certain niveau.
          </Bullet>
          <Bullet>
            <strong>Mémoire de travail limitée :</strong> l'enfant perd le fil dans les problèmes à plusieurs étapes. Il oublie les consignes intermédiaires. Il est très performant dans les exercices courts et routiniers, mais se « noie » quand la complexité des instructions augmente. Ces comportements sont souvent interprétés à tort comme du manque de concentration ou de la négligence.
          </Bullet>
          <Bullet>
            <strong>Raisonnement spatial fort :</strong> l'enfant excelle naturellement en géométrie, en technologie, en arts visuels. Il construit des Lego complexes sans les instructions. Il s'oriente facilement dans l'espace et comprend les plans. Son intelligence est souvent invisible dans les évaluations verbales traditionnelles.
          </Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          La différence entre les difficultés sur les devoirs à la maison et les difficultés lors des contrôles est elle-même un signal : un enfant qui réussit bien à la maison mais échoue aux contrôles présente souvent une faiblesse de mémoire de travail aggravée par le stress de l'évaluation. À l'inverse, un enfant qui réussit aux contrôles sans travailler beaucoup a probablement un profil cognitif sous-exploité par le niveau de sa classe actuelle.
        </p>
      </section>

      <section>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Découvrez à quoi ressemble un profil cognitif en pratique</p>
            <p className="text-sm text-gray-600">Un exemple de rapport d'évaluation montre exactement comment les scores verbaux, numériques, de mémoire de travail et spatiaux sont présentés — et ce qu'ils signifient pour la préparation de votre enfant.</p>
          </div>
          <Link href="https://eduentry.com/sample-report" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Voir un exemple de rapport
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi les notes scolaires sont une carte insuffisante</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le problème central du bulletin de notes — même excellent — est qu'il s'agit d'une mesure intra-classe et non d'une <strong>évaluation normative</strong> sur une population élargie. Un 15/20 en mathématiques dans un collège de zone rurale avec une classe de quinze élèves n'est pas équivalent à un 15/20 dans un collège parisien sélectif de trente élèves préparant les meilleurs lycées. Cette variabilité est documentée et considérable : les études de l'OCDE sur les données PISA montrent que l'écart de niveau entre des élèves ayant les mêmes notes dans deux établissements différents peut représenter jusqu'à deux ans de scolarité.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ce phénomène est connu en psychologie de l'éducation sous le nom d'effet <em>big fish, small pond</em> (gros poisson, petite mare) : un élève qui excelle dans un environnement peu exigeant développe une confiance en soi calibrée sur des comparaisons locales — et risque un choc de réalité lors de l'entrée dans un lycée plus sélectif ou lors de l'orientation vers des filières compétitives.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un autre angle aveugle des notes scolaires est la sous-identification des troubles des apprentissages et des besoins éducatifs particuliers (EBEP, anciennement NEP). Des élèves présentant une dyslexie légère, un trouble de l'attention (TDA/H) ou une faiblesse de mémoire de travail peuvent maintenir des notes correctes par une compensation sur-apprise — au prix d'un effort disproportionné qui devient insoutenable au lycée quand les volumes de travail augmentent. L'identification de ces profils par une évaluation cognitive ciblée permet de mettre en place des aménagements pédagogiques avant la rupture scolaire, plutôt qu'après.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La distinction entre mesure relative et <strong>rang centile</strong> sur une norme nationale ou internationale est fondamentale pour les parents : un score au 65e centile national signifie que votre enfant se situe au-dessus de 65 % des élèves du même âge en France — indépendamment de sa note dans sa classe et de la sélectivité de son établissement. C'est cette information-là qui devrait structurer les décisions d'orientation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Traduire un profil cognitif en plan de préparation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Connaître le profil cognitif de son enfant n'a de valeur que s'il se traduit en actions concrètes. Voici comment opérationnaliser cette connaissance dans les décisions de préparation.
        </p>
        <ul className="space-y-4 mb-6">
          <Check>
            <strong>Choix de filière :</strong> un profil à forte dominante verbale avec un raisonnement spatial limité s'épanouira davantage en filière générale avec spécialité humanités ou sciences humaines qu'en filière avec forte composante mathématique-physique. Inversement, un profil à forte composante quantitative et spatiale peut souffrir dans une filière qui valorise uniquement la production écrite longue.
          </Check>
          <Check>
            <strong>Adaptation des méthodes de travail :</strong> un enfant avec une mémoire de travail limitée bénéficiera d'une organisation matérielle rigoureuse — fiches de résumé, décomposition des tâches complexes en sous-étapes, répétition espacée. Un enfant avec un fort raisonnement spatial apprend mieux par les représentations visuelles et les schémas que par les textes linéaires. Ces adaptations ne sont pas des accommodements — elles sont des optimisations cognitives.
          </Check>
          <Check>
            <strong>Quand solliciter un soutien spécialisé :</strong> si une fragilité identifiée dans un domaine cognitif s'accompagne d'un stress scolaire élevé ou d'une dégradation visible des performances, l'orientation vers un psychologue scolaire ou un neuropsychologue pour une évaluation approfondie (bilan WISC-V) est indiquée. L'école peut également mettre en place un plan d'accompagnement personnalisé (PAP) pour les élèves présentant des troubles avérés.
          </Check>
          <Check>
            <strong>Comment parler au professeur principal :</strong> lors de l'entretien d'orientation en Troisième, venir avec un profil cognitif documenté — même issu d'une évaluation en ligne — permet d'engager une conversation précise plutôt que générale. Les professeurs principaux apprécient les parents qui arrivent avec des données spécifiques plutôt qu'une anxiété diffuse.
          </Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>métacognition</strong> — la conscience par l'élève lui-même de ses propres processus de pensée et de ses stratégies d'apprentissage — est l'une des variables les mieux documentées dans la recherche sur l'efficacité de l'apprentissage (Hattie, 2009). Partager avec son enfant les conclusions de son profil cognitif, de façon adaptée à son âge, contribue directement à développer cette capacité métacognitive : l'enfant apprend non seulement quoi apprendre, mais comment apprendre.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que la recherche dit sur l'identification précoce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La méta-analyse de John Hattie sur les effets éducatifs (<em>Visible Learning</em>, 2009, mise à jour en 2023) constitue la revue de littérature la plus exhaustive sur ce qui fonctionne dans l'éducation — plus de 1 200 méta-analyses couvrant des dizaines de millions d'élèves. Parmi les interventions avec les tailles d'effet (<em>effect sizes</em>) les plus élevées figurent systématiquement celles qui améliorent la connaissance qu'a l'élève de lui-même et de ses propres processus d'apprentissage : les retours formatifs ciblés (d = 0,73), l'évaluation par les pairs (d = 0,55), et les programmes de développement métacognitif (d = 0,69). La connaissance du profil cognitif crée précisément les conditions de ces interventions à fort impact.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les études longitudinales de l'OCDE, notamment celles s'appuyant sur les données PISA entre cohortes, montrent que la confiance académique à 15 ans est un prédicteur robuste de la trajectoire éducative et professionnelle jusqu'à 30 ans — au-delà même du niveau de compétence brut. Cette confiance n'est pas un sentiment vague : elle est ancrée dans une connaissance précise de ses propres forces et dans l'expérience de réussites alignées sur son profil réel. Les élèves qui entrent au lycée avec une image juste d'eux-mêmes — ni sur-estimée ni sous-estimée — s'adaptent mieux aux exigences nouvelles et récupèrent plus vite des difficultés ponctuelles.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les données PISA pour la France mettent en évidence un écart de confiance académique particulièrement important entre les élèves français et ceux des pays asiatiques les mieux classés. Les élèves français ont tendance à sous-estimer leurs compétences — un phénomène lié, selon les chercheurs de l'OCDE, à une culture de la note qui valorise la perfection plutôt que la progression, et qui expose les élèves à de fréquentes évaluations à enjeux sans leur fournir de repères normatifs clairs. Donner à l'enfant un point de repère objectif — un rang centile sur une échelle normative — contribue directement à corriger cette distorsion de perception.
        </p>
      </section>

      <section>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Découvrez le niveau réel de votre enfant — gratuitement</p>
            <p className="text-sm text-gray-600">L'évaluation adaptative d'Eduentry compare les capacités verbales, numériques et de raisonnement de votre enfant à celles de ses pairs internationaux. 20–30 minutes. Sans inscription.</p>
          </div>
          <Link href="https://eduentry.com/#academic" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Commencer l'évaluation gratuite
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides associés</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/fr/blog/comment-se-compare-votre-enfant" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <p className="font-semibold text-gray-900 text-sm mb-1">Comment votre enfant se compare à l'échelle mondiale ?</p>
            <p className="text-xs text-gray-500 leading-relaxed">Comprendre les référentiels internationaux et ce que révèle vraiment la position de votre enfant par rapport à ses pairs.</p>
          </Link>
          <Link href="/fr/blog/score-pisa-france-analyse" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <p className="font-semibold text-gray-900 text-sm mb-1">Scores PISA France : ce que ça veut dire</p>
            <p className="text-xs text-gray-500 leading-relaxed">Analyse des résultats PISA pour la France et leur interprétation concrète pour les familles et les choix d'orientation.</p>
          </Link>
          <Link href="/fr/blog/qu-est-ce-qu-un-score-standardise" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <p className="font-semibold text-gray-900 text-sm mb-1">Qu'est-ce qu'un score standardisé ?</p>
            <p className="text-xs text-gray-500 leading-relaxed">Guide pour les parents sur l'échelle normative, les rangs centiles et comment interpréter les résultats d'une évaluation cognitive.</p>
          </Link>
        </div>
      </section>
    </>
  ),

  '65-jobs-ai-cannot-automate': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        En septembre 2026, alors que le Forum Économique Mondial publiait son rapport annuel sur l&apos;avenir de l&apos;emploi, une statistique a dominé tous les débats dans les médias, les salles de classe et les dîners de famille : 40 % des emplois mondiaux seront perturbés par l&apos;intelligence artificielle d&apos;ici 2030. Pour les parents d&apos;élèves en seconde, en première ou en terminale, ce chiffre résonne avec une intensité particulière. L&apos;orientation de votre enfant, les filières que vous envisagez ensemble, les investissements éducatifs que vous faites — tout cela se fait dans l&apos;ombre d&apos;une transformation économique dont personne ne connaît encore précisément les contours.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Mais voici ce que les gros titres ne disent pas, et que les données du Bureau of Labor Statistics américain révèlent avec une clarté remarquable : parmi les centaines de métiers analysés, 65 d&apos;entre eux affichent une probabilité d&apos;automatisation de exactement 0,0 %. Zéro. Ces métiers ne sont pas simplement &laquo;&nbsp;difficiles à automatiser&nbsp;&raquo; — ils sont, selon les chercheurs et les données disponibles, structurellement imperméables à l&apos;automatisation par l&apos;IA dans un horizon prévisible. Ils ne représentent pas des niches marginales ou des métiers en déclin. Ils couvrent les secteurs les plus essentiels et les plus en croissance de nos économies : la santé, l&apos;éducation, le design, l&apos;ingénierie, la sécurité publique.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Cet article vous présente ces 65 métiers, explique pourquoi l&apos;IA ne peut fondamentalement pas les remplacer, et — surtout — ce que cela signifie concrètement pour les choix éducatifs de votre enfant dans le système français : les matières à valoriser au lycée, les filières à envisager via Parcoursup, et les compétences transversales à développer dès maintenant pour positionner votre enfant sur la trajectoire de ces professions d&apos;avenir.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi l&apos;IA ne peut pas remplacer ces 65 métiers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de parcourir la liste, il est utile de comprendre la mécanique sous-jacente. L&apos;intelligence artificielle actuelle — y compris les systèmes les plus sophistiqués — repose sur la reconnaissance de patterns dans des données historiques. Elle excelle dans les tâches répétitives, codifiables, et celles qui peuvent être décomposées en séquences d&apos;instructions claires. Elle échoue structurellement là où ces conditions ne sont pas réunies.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les chercheurs qui ont calculé les probabilités d&apos;automatisation métier par métier identifient quatre caractéristiques qui, combinées, rendent un emploi imperméable à l&apos;automatisation. Ces quatre caractéristiques se retrouvent dans les 65 métiers que nous allons examiner :
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">L&apos;intelligence émotionnelle</p>
              <p className="text-gray-700 text-sm leading-relaxed">La capacité à percevoir, comprendre et répondre aux états émotionnels d&apos;un autre être humain — avec empathie, nuance et présence authentique — reste hors de portée des systèmes IA actuels et prévisibles. Un chirurgien qui rassure un patient avant une opération, un conseiller d&apos;orientation qui détecte l&apos;anxiété derrière une question anodine, un kinésithérapeute qui ajuste son approche au vécu de son patient : ces interactions exigent une humanité que l&apos;IA ne peut pas simuler efficacement.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">La lecture de la situation</p>
              <p className="text-gray-700 text-sm leading-relaxed">Le jugement contextuel complexe — savoir quoi faire quand la situation est ambiguë, les enjeux sont élevés et l&apos;information est incomplète — est une capacité proprement humaine. Un pompier qui évalue la structure d&apos;un bâtiment en feu, un médecin urgentiste qui priorise les patients lors d&apos;un afflux massif, un directeur d&apos;établissement qui gère une crise : ces décisions ne peuvent pas être algorithmisées.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Le travail créatif ancré dans l&apos;humain</p>
              <p className="text-gray-700 text-sm leading-relaxed">La créativité qui transgresse les patterns existants — qui crée quelque chose de fondamentalement nouveau en réponse à des besoins humains uniques — reste une prérogative humaine. Un architecte qui conçoit un espace pour une famille avec des besoins spécifiques, un chorégraphe qui crée un langage corporel pour explorer une thématique sociale, un scénographe qui transforme un espace en expérience immersive : ces créations ne peuvent pas être générées par des systèmes qui interpolent des données existantes.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">La forte variabilité quotidienne des tâches</p>
              <p className="text-gray-700 text-sm leading-relaxed">Certains métiers présentent une variabilité si élevée que chaque journée de travail est fondamentalement différente de la précédente. L&apos;automatisation est possible là où les tâches sont prévisibles et répétitives. Un sage-femme qui accompagne des accouchements ne vit jamais exactement la même situation deux fois. Un urbaniste qui conçoit des espaces publics doit répondre à des contraintes uniques à chaque projet. Cette variabilité est une barrière structurelle à l&apos;automatisation.</p>
            </div>
          </li>
        </ul>
        <Callout color="indigo">
          <strong>Le contexte français :</strong> Le système de santé français — considéré parmi les meilleurs du monde — fait face à des tensions de recrutement majeures. La France manque de médecins, d&apos;infirmiers et de professionnels de santé mentale dans de nombreuses régions. Ces tensions ne vont qu&apos;augmenter avec le vieillissement de la population. Les métiers de santé résistants à l&apos;IA sont aussi, en France, parmi les métiers les plus en tension sur le marché du travail.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les 65 métiers par catégorie</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ces 65 métiers ont tous en commun une probabilité d&apos;automatisation de 0,0 % selon les données du Bureau of Labor Statistics américain. Nous les avons regroupés en six catégories pour faciliter la réflexion sur les trajectoires éducatives.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Santé (33 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La santé représente à elle seule plus de la moitié des 65 métiers à 0 % de probabilité d&apos;automatisation. Ce n&apos;est pas un hasard. Les métiers de la santé réunissent à des degrés divers les quatre caractéristiques évoquées plus haut : intelligence émotionnelle, jugement clinique contextuel, adaptabilité constante aux situations individuelles de chaque patient, et exécution dans des environnements physiques exigeant une dextérité et un discernement impossibles à robotiser dans leur globalité. L&apos;IA peut analyser des images médicales ou aider au diagnostic différentiel, mais elle ne peut pas créer la relation thérapeutique, décider dans l&apos;urgence avec des informations incomplètes, ni adapter physiquement un traitement au corps singulier d&apos;un patient.
        </p>
        <Callout color="indigo">
          <strong>Chiffre BLS 2024 :</strong> Les infirmiers praticiens (Nurse Practitioners) affichent une croissance projetée de +40 % entre 2024 et 2034, avec un salaire médian de 129 210 $ aux États-Unis. En France, les infirmiers en pratique avancée (IPA), récemment créés, connaissent un développement similaire. Ce métier cumule protection maximale contre l&apos;automatisation et croissance exceptionnelle.
        </Callout>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Infirmiers Praticiens (Infirmiers en Pratique Avancée)</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Assistants Médicaux</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants en Soins Infirmiers</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Conseillers en Santé Mentale</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Ergothérapeutes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Orthésistes et Prothésistes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Sages-Femmes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Kinésithérapeutes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Art-Thérapeutes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Musicothérapeutes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Assistants Sociaux (Santé Mentale)</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Assistants Sociaux (Santé)</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Dermatologues</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Psychiatres</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Neurologues</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Infirmiers Psychiatriques Spécialisés</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Infirmiers Cliniciens Spécialisés</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Infirmiers de Soins Intensifs</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Ambulanciers</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Techniciens Médicaux d&apos;Urgence</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chirurgiens Maxillo-Faciaux</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chirurgiens Orthopédiques</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Prothésistes Dentaires</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chirurgiens Généraux</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chirurgiens-Dentistes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Neuropsychologues Cliniciens</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Neuropsychologues</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Hospitalistes (Médecins Hospitaliers)</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Médecins en Rééducation</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Médecins en Médecine Préventive</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Médecins du Sport</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chirurgiens Pédiatriques</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Gynécologues-Obstétriciens</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Éducation (6 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;éducation figure dans la liste des métiers à 0 % d&apos;automatisation non pas pour tous ses profils, mais pour ceux qui requièrent la plus haute dimension humaine et relationnelle. Les enseignants en psychologie, en anthropologie, en arts et en travail social ne transmettent pas simplement des contenus — ils guident des processus de transformation intellectuelle et personnelle qui exigent une présence humaine authentique, une adaptation constante à la singularité de chaque apprenant, et une modélisation de postures que les outils numériques ne peuvent pas incarner. Les directeurs d&apos;établissements scolaires, quant à eux, exercent une fonction de leadership communautaire qui réunit toutes les dimensions résistantes à l&apos;IA : jugement contextuel complexe, intelligence émotionnelle, gestion de crise, et vision stratégique ancrée dans une réalité humaine locale.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants de Psychologie</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants d&apos;Anthropologie et Archéologie</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants d&apos;Architecture</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants des Arts, du Théâtre et de la Musique</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Enseignants en Travail Social</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Directeurs d&apos;Établissements Scolaires</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Services Créatifs et Personnels (7 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ces métiers se trouvent à l&apos;intersection de la créativité humaine et de l&apos;interaction personnelle directe. Un chorégraphe ne crée pas un spectacle dans l&apos;abstrait — il travaille avec des corps humains réels, dans un dialogue constant entre intention artistique et capacités physiques uniques de chaque interprète. Un designer d&apos;intérieur traduit les besoins, les rêves et les contraintes d&apos;une famille ou d&apos;une organisation en espaces habitables. Un thérapeute récréatif utilise le jeu, le sport et les activités créatives comme outils thérapeutiques pour des populations vulnérables. La dimension hautement personnalisée de ces métiers — leur ancrage dans des interactions humaines singulières et imprévisibles — constitue leur meilleure protection contre l&apos;automatisation.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Chorégraphes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Entraîneurs et Scouts Sportifs</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Coordinateurs Fitness et Bien-être</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Designers d&apos;Intérieur</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Thérapeutes Récréatifs</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Scénographes et Concepteurs d&apos;Expositions</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Responsables Activités Religieuses</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Ingénierie et Design (6 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;ingénierie et le design comptent parmi les domaines où l&apos;IA apporte le plus de valeur ajoutée en termes d&apos;outils — modélisation, simulation, génération de plans. Et pourtant, plusieurs profils d&apos;ingénieurs et d&apos;architectes affichent une probabilité d&apos;automatisation de 0 %. La raison : l&apos;IA peut générer des options, mais elle ne peut pas assumer la responsabilité professionnelle, exercer le jugement éthique sur les compromis sécuritaires et environnementaux, ni intégrer les contraintes humaines, politiques et contextuelles qui définissent tout grand projet d&apos;infrastructure ou d&apos;architecture. L&apos;ingénieur biomédical qui conçoit une prothèse sur mesure pour un patient spécifique, l&apos;architecte paysagiste qui crée un espace public en dialogue avec les habitants : ces missions ne se réduisent pas à de l&apos;optimisation algorithmique.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Ingénieurs Biomédicaux</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Ingénieurs du Génie Civil</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Ingénieurs des Transports</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Physiciens</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Architectes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Architectes Paysagistes</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Sécurité Publique et Management (7 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La gestion des urgences et de la sécurité publique est l&apos;un des domaines les plus résistants à toute forme d&apos;automatisation. Ces métiers opèrent dans des environnements radicalement imprévisibles, avec des enjeux vitaux directs et une nécessité de décision instantanée dans des conditions de pression extrême. Aucun algorithme, aussi sophistiqué soit-il, ne peut remplacer le jugement d&apos;un chef de pompiers qui décide d&apos;engager ou de retirer son équipe dans un bâtiment en feu, ni la responsabilité d&apos;un directeur de gestion des urgences qui coordonne une réponse à une catastrophe naturelle impliquant des dizaines d&apos;agences. Les directeurs généraux figurent dans cette liste parce que la direction d&apos;une organisation exige la synthèse de dimensions humaines, politiques et stratégiques que l&apos;IA ne peut pas intégrer dans leur complexité.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Directeurs Généraux</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Directeurs Sécurité</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Superviseurs de Police</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Superviseurs des Pompiers</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Directeurs de Gestion des Urgences</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Pompiers</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Gardes Forestiers</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Autres (6 métiers)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette dernière catégorie regroupe des métiers qui, tout en étant très différents les uns des autres, partagent une caractéristique commune : ils opèrent à l&apos;interface entre des systèmes complexes — humains, naturels, urbains, sociaux — et exigent un jugement qui intègre des dimensions irréductiblement qualitatives. L&apos;urbaniste qui planifie un quartier doit tenir compte non seulement de données quantitatives, mais des aspirations, des identités et des conflits d&apos;une communauté. Le pédologue et botaniste travaille dans des écosystèmes d&apos;une complexité que les modèles actuels ne capturent pas entièrement. Le conseiller d&apos;orientation accompagne des choix de vie qui impliquent des valeurs, des aspirations et des peurs que seul un être humain peut vraiment entendre.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Urbanistes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Pédologues et Botanistes</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Spécialistes en EPS Adaptée</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Constructeurs de Bâtiments Préfabriqués</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Conseillers d&apos;Orientation</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>Animateurs Loisirs</li>
        </ul>
      </section>

      <section>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Découvrez les forces de votre enfant — gratuitement</p>
            <p className="text-sm text-gray-600">L&apos;évaluation adaptative Eduentry identifie les aptitudes verbales, numériques et de raisonnement de votre enfant sur la même échelle internationale que les grandes évaluations cognitives. Un exemple de rapport complet est disponible sans inscription.</p>
          </div>
          <Link href="/sample-report" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Voir un exemple de rapport
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que cela signifie pour l&apos;éducation de votre enfant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ces 65 métiers ne sont pas réservés à des élèves extraordinaires ou à des familles avec des ressources particulières. La grande majorité d&apos;entre eux sont accessibles à travers des filières du système éducatif français standard — à condition de choisir les bonnes spécialités au lycée, de comprendre les prérequis de Parcoursup, et de développer les bonnes compétences transversales dès maintenant.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Les matières clés au lycée</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La réforme du baccalauréat 2021 a remplacé les filières L, ES et S par un système de spécialités choisi par chaque élève. Ce changement est particulièrement important pour les familles qui visent les métiers résistants à l&apos;IA, car les prérequis de Parcoursup pour les filières concernées sont très spécifiques. Voici comment orienter ces choix :
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour toute la filière santé — médecine, pharmacie, maïeutique, masso-kinésithérapie et les nouvelles études de santé via la PASS (Parcours Accès Spécifique Santé) et la LAS (Licence avec option Accès Santé) — les spécialités SVT et Physique-Chimie sont quasiment incontournables. Le bac doit afficher une solide maîtrise des sciences de la vie et des sciences exactes. La psychologie, discipline de plus en plus présente dans les lycées français sous forme d&apos;option ou de spécialité dans certains établissements, ouvre directement vers les métiers de santé mentale et de neuropsychologie. Il ne faut pas négliger non plus les mathématiques : si la médecine est moins mathématique que l&apos;ingénierie, les statistiques biomédicales, l&apos;épidémiologie et les neurosciences computationnelles exigent un niveau solide.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les métiers d&apos;architecture et de design d&apos;intérieur, la combinaison arts plastiques, mathématiques et physique est la plus cohérente. L&apos;architecture s&apos;appuie sur des compétences à la fois techniques (structures, calculs) et créatives (conception, représentation). Les admissions en école d&apos;architecture se font via Parcoursup, avec un dossier qui valorise fortement le portfolio artistique et l&apos;excellence académique dans les matières scientifiques.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les métiers d&apos;ingénierie — biomédicale, génie civil, transports — la voie classique est la filière scientifique forte avec classes préparatoires ou admission directe en école d&apos;ingénieurs via Parcoursup. Les spécialités mathématiques expertes, physique-chimie et SVT constituent le socle. Les ingénieurs biomédicaux en particulier ont un profil hybride — biologie et ingénierie — qui bénéficie d&apos;une combinaison SVT-Mathématiques-Physique dès le lycée.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les métiers sportifs — médecin du sport, coordinateur fitness, entraîneur sportif — l&apos;EPS joue bien sûr un rôle central, mais les dossiers Parcoursup pour les STAPS (Sciences et Techniques des Activités Physiques et Sportives) valorisent aussi les résultats en SVT et en psychologie. Le niveau sportif pratiqué et documenté est un vrai atout.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Parcoursup et les prérequis concrets</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parcoursup a transformé l&apos;accès à l&apos;enseignement supérieur en France depuis 2018. Pour les familles qui lisent cet article, plusieurs points pratiques méritent d&apos;être soulignés. Les PASS et LAS ont remplacé la PACES (le numerus clausus de la première année de médecine) depuis la rentrée 2020. Ces nouvelles formations sont plus diversifiées dans leur recrutement mais restent très sélectives. Un profil solide en SVT, physique-chimie et mathématiques, combiné avec un dossier scolaire homogène et un projet de santé bien articulé dans la lettre de motivation, constitue le meilleur atout.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour les écoles d&apos;architecture, le concours national d&apos;entrée a été supprimé au profit d&apos;une admission sur dossier via Parcoursup. Le portfolio artistique, qui n&apos;est pas évalué dans le cadre scolaire classique, doit être développé en parallèle. Les élèves qui commencent à construire un portfolio dès la seconde ou la première ont un avantage structurel sur ceux qui y pensent seulement en terminale.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Les compétences transversales à développer au lycée</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Au-delà des matières académiques, les 65 métiers à 0 % d&apos;automatisation partagent des exigences de compétences transversales que le lycée peut commencer à cultiver activement. La première d&apos;entre elles est l&apos;empathie appliquée — la capacité à se mettre à la place d&apos;autrui et à en tirer des conclusions pratiques. Cette compétence se développe par les expériences de bénévolat, les stages, les responsabilités associatives, et toute forme d&apos;engagement dans des contextes humains variés. Les lycéens qui ont accompli des actions de service — aide aux personnes âgées, travail avec des enfants en difficulté, engagement associatif sérieux — développent naturellement les fondations de l&apos;intelligence émotionnelle.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La deuxième compétence transversale est le raisonnement sous incertitude — la capacité à prendre des décisions pertinentes quand l&apos;information est incomplète et les enjeux sont réels. Elle se développe dans les situations qui exigent un engagement personnel réel, pas uniquement dans les exercices scolaires avec une réponse correcte attendue. Les activités sportives de compétition, les projets créatifs à livrer, les expériences professionnelles avec de vraies responsabilités — tous ces contextes développent ce type de raisonnement que l&apos;école traditionnelle cultive peu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La troisième compétence est la communication complexe — pas simplement savoir s&apos;exprimer, mais savoir adapter son message à son interlocuteur, gérer les malentendus, négocier des compromis et expliquer des réalités complexes à des non-spécialistes. Cette compétence est au cœur de tous les métiers de la santé, de l&apos;éducation et du management. Elle se développe par la pratique délibérée : prises de parole en public, débats, travaux de groupe avec des livrables réels, échanges avec des professionnels lors de stages.
        </p>
        <Callout color="indigo">
          <strong>Le paradoxe de la préparation :</strong> Les compétences les plus résistantes à l&apos;IA ne sont pas les plus académiques. Elles sont relationnelles, émotionnelles et situationnelles. Un lycéen qui développe ces compétences en dehors de l&apos;école — par le sport, le bénévolat, les arts, les stages — construit une résilience professionnelle que aucun algorithme ne peut remplacer.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il faut enfin souligner l&apos;importance croissante de la maîtrise de l&apos;IA comme outil dans ces mêmes métiers. Les médecins qui utilisent intelligemment les outils d&apos;IA pour l&apos;aide au diagnostic, les architectes qui intègrent la génération paramétrique dans leur processus créatif, les ingénieurs qui utilisent la simulation IA pour optimiser leurs conceptions : tous ces professionnels ne sont pas menacés par l&apos;IA. Ils l&apos;utilisent pour amplifier ce que seul un être humain peut faire — le jugement, la créativité, la relation. Au lycée, apprendre à travailler <em>avec</em> les outils d&apos;IA de façon critique et sélective — et non à les éviter ou à s&apos;y soumettre — est une compétence stratégique de première importance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre enfant : prêt pour l&apos;avenir ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les données sont rassurantes : les 65 métiers à 0 % de probabilité d&apos;automatisation couvrent des secteurs essentiels, bien rémunérés et en pleine croissance. La santé connaît une pénurie structurelle de professionnels en France. L&apos;ingénierie verte et l&apos;architecture durable offrent des perspectives exceptionnelles à l&apos;heure de la transition écologique. Les métiers de la santé mentale — psychologues, psychiatres, conseillers — ont une demande qui explose dans toutes les démographies, toutes les régions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mais connaître la liste des métiers d&apos;avenir n&apos;est que le point de départ. Ce qui importe pour votre enfant, c&apos;est de savoir où il en est aujourd&apos;hui : quelles sont ses aptitudes naturelles, ses forces cognitives, ses domaines de développement ? Est-il plus à l&apos;aise avec le raisonnement verbal ou quantitatif ? Présente-t-il les bases de raisonnement spatial qui ouvrent la voie à l&apos;ingénierie et à l&apos;architecture ? Ses compétences de communication sont-elles au niveau des exigences des filières santé ?
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ces questions ne sont pas abstraites. Elles ont des réponses concrètes et mesurables — et connaître ces réponses avant les choix d&apos;orientation de première et de terminale offre un avantage décisif. Un élève qui sait précisément où se situent ses forces peut cibler ses efforts, choisir ses spécialités de façon stratégique, et construire un dossier Parcoursup qui reflète un projet cohérent plutôt qu&apos;une liste de vœux disparates.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La question n&apos;est pas &laquo;&nbsp;mon enfant sera-t-il remplacé par un robot ?&nbsp;&raquo;. La vraie question est : &laquo;&nbsp;mon enfant développe-t-il les compétences qui seront les plus précieuses dans l&apos;économie de demain ?&nbsp;&raquo; Les données sont claires sur ce qui résiste à l&apos;IA. Ce qui reste à déterminer, c&apos;est comment positionner votre enfant sur cette trajectoire — avec précision, avec anticipation, et avec les bonnes informations.
        </p>
        <Callout color="indigo">
          <strong>WEF Rapport 2025 :</strong> 40 % des emplois mondiaux seront perturbés par l&apos;IA d&apos;ici 2030. Dans le même temps, 65 métiers affichent une probabilité d&apos;automatisation de 0,0 %. La question pour chaque famille n&apos;est pas de choisir entre l&apos;IA et l&apos;humain — c&apos;est de positionner son enfant là où l&apos;humain est irremplaçable.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;évaluation adaptative gratuite d&apos;Eduentry compare les compétences de raisonnement verbal, numérique et de résolution de problèmes de votre enfant avec celles de ses pairs à l&apos;international. En 20 à 30 minutes, sans inscription préalable, vous obtenez un profil cognitif détaillé qui vous montre exactement où se trouvent ses points forts — et lesquels correspondent aux exigences des filières menant aux métiers les plus protégés de l&apos;IA. C&apos;est une information que vous pouvez utiliser dès aujourd&apos;hui pour orienter les choix de spécialités, préparer l&apos;entretien d&apos;orientation et construire un projet d&apos;avenir qui tient compte à la fois des talents de votre enfant et des réalités du marché du travail de demain.
        </p>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Votre enfant est-il prêt pour l&apos;avenir ?</p>
            <p className="text-sm text-gray-600">L&apos;évaluation adaptative gratuite d&apos;Eduentry compare les compétences de raisonnement verbal, numérique et de résolution de problèmes de votre enfant avec celles de ses pairs à l&apos;international — et vous montre exactement où se trouvent ses points forts.</p>
          </div>
          <Link href="/#academic" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Commencer l&apos;évaluation gratuite de votre enfant
          </Link>
        </div>
      </section>
    </>
  ),

  'oecd-teenage-work-experience-career-outcomes': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        La question que la plupart des parents ne posent pas n&apos;est pas &ldquo;mon enfant doit-il faire des études supérieures ?&rdquo;, mais &ldquo;doit-il d&apos;abord acquérir une expérience professionnelle ?&rdquo;. Une nouvelle recherche de l&apos;OCDE apporte la réponse la plus complète à ce jour : les adolescents qui acquièrent une expérience professionnelle structurée avant 16 ans gagnent davantage tout au long de leur carrière, trouvent un emploi stable plus rapidement, et développent des compétences qu&apos;aucune salle de classe ne peut enseigner.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que dit réellement la recherche</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;OCDE a passé en revue 47 études longitudinales examinant le lien entre l&apos;expérience professionnelle scolaire et les résultats d&apos;emploi à l&apos;âge adulte. Le verdict : <strong>40 études sur 47</strong> ont trouvé de meilleurs résultats pour les élèves ayant participé à des programmes de travail structurés par rapport à ceux qui n&apos;y ont pas participé. C&apos;est un taux de cohérence de 85 % à travers des recherches indépendantes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La prime salariale est tangible. Les élèves qui acquièrent une expérience précoce gagnent <strong>5 à 10 % de plus</strong> à l&apos;embauche. Sur 40 ans de carrière, cette prime s&apos;accumule en un avantage réel sur toute une vie.
        </p>
        <Callout color="indigo">
          85 % des études longitudinales confirment : une expérience professionnelle structurée avant 16 ans améliore de façon mesurable les résultats d&apos;emploi à l&apos;âge adulte.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les lacunes en compétences que l&apos;expérience comble</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;OCDE identifie des compétences spécifiques que l&apos;expérience professionnelle développe là où l&apos;enseignement formel échoue : compétences techniques en contexte réel, travail d&apos;équipe sous vraies contraintes, communication hors de la sphère des pairs, et confiance professionnelle.
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>Compétences techniques en contexte</strong> — appliquer les connaissances scolaires à de vraies contraintes et échéances</Check>
          <Check><strong>Communication professionnelle</strong> — rédiger des e-mails, présenter à des adultes, gérer les retours</Check>
          <Check><strong>Travail d&apos;équipe sous pression</strong> — collaborer avec des personnes non choisies vers des objectifs non définis par soi</Check>
          <Check><strong>Clarté sur la carrière</strong> — découvrir ce que l&apos;on veut (et ne veut pas) avant les engagements coûteux des études supérieures</Check>
          <Check><strong>Crédibilité du CV</strong> — preuves concrètes que les employeurs valorisent plus que les qualités autodéclarées</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le problème d&apos;accès : les réseaux familiaux ne doivent pas dicter les résultats</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Environ 50 % des adolescents en Espagne, en Italie et au Brésil</strong> n&apos;ont aucune expérience professionnelle à 15 ans. Le mécanisme est bien documenté : lorsque les écoles n&apos;organisent pas systématiquement l&apos;accès à des stages, celui-ci dépend des réseaux familiaux. Les enfants d&apos;avocats, de médecins et de cadres peuvent appeler les collègues de leurs parents ; ceux de travailleurs de service, de parents isolés et de nouveaux immigrants ne le peuvent pas.
        </p>
        <Callout color="amber">
          Lorsque les écoles n&apos;organisent pas systématiquement des programmes de stage, les réseaux familiaux déterminent qui y a accès. L&apos;OCDE décrit cela comme le principal moteur des inégalités dans les résultats de carrière précoce.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Étapes pratiques pour les parents</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si votre enfant a entre 14 et 18 ans, les données de l&apos;OCDE ont une implication pratique directe : attendre que l&apos;école organise l&apos;expérience est une stratégie sous-optimale. L&apos;expérience professionnelle efficace nécessite une préparation préalable. Un élève non préparé en milieu de travail apprend moins et laisse une moins bonne impression.
        </p>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 my-6">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Votre enfant est-il prêt pour un stage ?</p>
            <p className="text-sm text-gray-600">L&apos;évaluation gratuite d&apos;Eduentry identifie les aptitudes, les connaissances spécialisées et les compétences professionnelles — et produit un rapport partageable directement avec les employeurs.</p>
          </div>
          <Link href="/fr/stage" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Commencer l&apos;évaluation gratuite
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fr/blog/stage-experience-professionnelle-lycee', tag: 'Recherche', title: 'Expérience professionnelle en entreprise au lycée : tout ce que vous devez savoir' },
            { href: '/fr/blog/stages-lycee-avantages-universite', tag: 'Guide', title: 'Stages au lycée : bénéfices et université' },
            { href: '/fr/blog/oecd-travail-partiel-adolescents-avantages', tag: 'Recherche', title: 'Jobs à temps partiel pour ados : les avantages confirmés par l\'OCDE' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

  'oecd-teenage-part-time-work-benefits': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Beaucoup de parents supposent qu&apos;un job à temps partiel pendant les études est une distraction. La recherche de l&apos;OCDE raconte une autre histoire : les adolescents qui travaillent à temps partiel au lycée développent une culture financière, une confiance professionnelle et des compétences de carrière que leurs pairs non-travailleurs ne construisent tout simplement pas. Le message clé des données n&apos;est pas de savoir s&apos;il faut travailler — c&apos;est comment travailler d&apos;une façon qui maximise ce que votre enfant retire de l&apos;expérience.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que la recherche OCDE révèle sur les adolescents qui travaillent à temps partiel</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La recherche de l&apos;OCDE sur le travail à temps partiel des adolescents identifie trois formes d&apos;expérience professionnelle disponibles au lycée : les stages et placements organisés par l&apos;école, le bénévolat dans la communauté, et l&apos;emploi rémunéré à temps partiel. Les trois montrent des résultats positifs quand ils sont bien structurés — mais le travail rémunéré a un avantage unique : il expose les jeunes à une vraie responsabilité économique.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les élèves qui travaillent à temps partiel montrent systématiquement un développement plus solide des compétences professionnelles, une meilleure confiance dans leur carrière et de meilleures décisions financières à l&apos;âge adulte. Les données valent pour des pays de l&apos;OCDE aux conditions de marché du travail très différentes, ce qui suggère que le mécanisme, c&apos;est l&apos;expérience elle-même — pas le type de travail ou l&apos;économie.
        </p>
        <Callout color="indigo">
          La recherche OCDE confirme : les adolescents qui travaillent à temps partiel pendant leurs études développent des compétences professionnelles et une confiance professionnelle qui persistent dans l&apos;emploi adulte.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 bénéfices prouvés du travail à temps partiel pendant les études</h2>
        <ul className="space-y-4 mb-6">
          <Check><strong>Culture financière</strong> — Gérer de l&apos;argent gagné enseigne la gestion de budget, l&apos;épargne et la valeur du travail d&apos;une façon qu&apos;aucun exercice scolaire ne peut répliquer.</Check>
          <Check><strong>Clarté sur la carrière</strong> — Découvrir ce qu&apos;on aime (et n&apos;aime pas) à 16 ans coûte infiniment moins cher que de le découvrir à 22 ans après un diplôme raté.</Check>
          <Check><strong>Compétences professionnelles</strong> — Communication, ponctualité, service client et travail avec des adultes hors de sa tranche d&apos;âge se développent bien plus vite dans une vraie situation de travail.</Check>
          <Check><strong>Crédibilité du CV</strong> — Les employeurs peuvent vérifier l&apos;historique professionnel. L&apos;expérience donne des preuves objectives qui pèsent bien plus que les qualités auto-déclarées dans les candidatures.</Check>
          <Check><strong>Confiance adulte</strong> — Évoluer dans un environnement professionnel — suivre des directives, gérer des délais, intégrer des retours — construit un type de confiance que les activités scolaires ne peuvent pas pleinement remplacer.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Combien d&apos;heures ? La plage optimale selon l&apos;OCDE pour les lycéens qui travaillent</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;un des apports les plus utiles de la recherche de l&apos;OCDE est le seuil horaire. Les élèves travaillant environ <strong>1 à 15 heures par semaine</strong> pendant le trimestre obtiennent des résultats académiques comparables ou légèrement meilleurs que leurs pairs non-travailleurs. C&apos;est contraire à l&apos;intuition que tout travail nuit aux études.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La raison est probablement structurelle : les élèves qui travaillent sont généralement mieux organisés, plus motivés à gérer des priorités concurrentes, et plus engagés dans les études parce qu&apos;ils ont un contexte concret pour leurs apprentissages. Les effets négatifs apparaissent à des horaires plus élevés — travailler systématiquement 20 heures ou plus par semaine est associé à des notes moins bonnes et à un moins bon bien-être — et quand le travail entre directement en conflit avec les périodes d&apos;examens.
        </p>
        <Callout color="amber">
          La plage productive selon l&apos;OCDE : jusqu&apos;à ~15 heures par semaine pendant les cours. Le travail à horaires élevés (20+/semaine) a des effets négatifs sur les notes et le bien-être — l&apos;objectif, c&apos;est la qualité de l&apos;expérience, pas le maximum d&apos;heures.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quels jobs à temps partiel produisent les meilleurs résultats pour les adolescents</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tous les jobs ne sont pas équivalents en termes de développement. La recherche OCDE identifie plusieurs facteurs qui prédisent de meilleurs résultats :
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>Rôles proches de la carrière visée</strong> — Travailler dans un domaine d&apos;intérêt réel développe à la fois les connaissances sectorielles et les compétences professionnelles.</Bullet>
          <Bullet><strong>Encadrés et structurés</strong> — Les rôles avec un mentor professionnel défini, des responsabilités claires et des retours réguliers donnent un meilleur développement de compétences.</Bullet>
          <Bullet><strong>En contact avec la clientèle</strong> — Tout rôle nécessitant une communication régulière avec des personnes hors de la tranche d&apos;âge de l&apos;élève construit les compétences de communication les plus valorisées.</Bullet>
          <Bullet><strong>Avec le soutien de l&apos;école</strong> — Quand les établissements guident et suivent activement le travail à temps partiel de leurs élèves, les résultats s&apos;améliorent significativement.</Bullet>
        </ul>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 my-6">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Quelle orientation professionnelle convient le mieux à votre enfant ?</p>
            <p className="text-sm text-gray-600">Avant de choisir un job, l&apos;évaluation gratuite d&apos;Eduentry identifie les aptitudes, les connaissances sectorielles et les compétences professionnelles — pour qu&apos;il vise un travail qui construit les bonnes bases.</p>
          </div>
          <Link href="/fr/stage" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Commencer l&apos;évaluation gratuite
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fr/blog/oecd-experience-professionnelle-adolescents-resultats-carriere', tag: 'Recherche', title: 'OCDE : l\'expérience professionnelle des ados booste les revenus de 5–10 %' },
            { href: '/fr/blog/stage-experience-professionnelle-lycee', tag: 'Guide', title: 'Expérience professionnelle en entreprise au lycée : tout ce que vous devez savoir' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

  'discover-school-age-childs-hidden-strengths': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Votre enfant vient peut-être de commencer l&apos;école primaire, prépare des examens au collège, ou planifie son avenir au lycée. Quelle que soit l&apos;étape, une question hante l&apos;esprit de tous les parents : &ldquo;Pour quoi mon enfant a-t-il vraiment un talent — et dans quels domaines rencontre-t-il des difficultés ?&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed">
        Les bulletins scolaires et les examens blancs ne nous donnent que les notes actuelles. Mais comprendre le vrai potentiel mental d&apos;un enfant — ses forces cognitives et ses axes de développement — demande beaucoup plus qu&apos;une note. Cela nécessite une méthodologie moderne.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Les Principaux Défis des Familles dans la Vie Scolaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Au cours du parcours scolaire de votre enfant, vous avez probablement remarqué au moins l&apos;un de ces schémas :
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>&ldquo;Travaille beaucoup mais ne performe pas en examen&rdquo; :</strong> De nombreux enfants qui passent des heures à leur bureau ne peuvent pas transformer cet effort en résultats — parce que l&apos;anxiété aux examens ou la mauvaise gestion du temps, et non le manque d&apos;effort, se dresse entre eux et leur vrai potentiel.</Bullet>
          <Bullet><strong>Le potentiel caché (le piège de l&apos;apprentissage par c&oelig;ur) :</strong> Les programmes scolaires se concentrent souvent sur la mémorisation de formules et de faits. Un enfant avec un raisonnement logique ou une intelligence spatiale remarquables peut passer totalement inaperçu — parce que le système n&apos;est pas conçu pour trouver ces forces.</Bullet>
          <Bullet><strong>Perdre du temps sur les mauvaises choses :</strong> Quand les parents ne savent pas exactement où un enfant rencontre des difficultés — dans la résolution de problèmes elle-même, ou simplement dans la lecture et la compréhension de l&apos;énoncé —, ils appliquent de mauvaises méthodes d&apos;étude et, sans le vouloir, découragent l&apos;enfant.</Bullet>
          <Bullet><strong>L&apos;anxiété face à l&apos;avenir et la compétition mondiale :</strong> Le monde évolue rapidement. Savoir seulement où se situe votre enfant dans sa classe ou son école ne suffit plus à le préparer pour le paysage international de demain.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La Solution : L&apos;Évaluation Adaptive qui Cartographie Forces et Axes de Développement</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le monde éducatif s&apos;éloigne des examens uniformes pour tous. La méthodologie de Tests Adaptatifs par IA d&apos;Eduentry est conçue précisément pour ce moment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plutôt que de passer un examen traditionnel, le système s&apos;adapte en temps réel à chaque réponse. Quand un enfant répond correctement, les questions deviennent plus difficiles ; quand il a des difficultés, le système se recalibre. Résultat : le profil cognitif réel de l&apos;enfant — son plafond et ses forces — émerge sans anxiété, en une fraction du temps.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette méthodologie mesure les quatre domaines fondamentaux qui déterminent directement la réussite scolaire et la carrière future :
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>1. Raisonnement verbal</strong> — la capacité de penser en mots : compréhension de lecture, inférence logique et utilisation précise du langage.</Bullet>
          <Bullet><strong>2. Raisonnement non verbal</strong> — raisonner à partir de formes, de graphiques et de modèles visuels. Ce domaine est l&apos;indicateur le plus puissant du futur succès en logiciels, ingénierie, design et IA.</Bullet>
          <Bullet><strong>3. Compétences mathématiques</strong> — logique numérique et rapidité dans la résolution analytique de problèmes.</Bullet>
          <Bullet><strong>4. Maîtrise de l&apos;anglais</strong> — les compétences linguistiques de votre enfant mesurées selon des standards internationaux : exactement où il se situe à l&apos;échelle mondiale, pas seulement dans sa classe.</Bullet>
        </ul>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 my-6">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Découvrez le profil cognitif de votre enfant — gratuitement</p>
            <p className="text-sm text-gray-600">Évaluation adaptive pour les 6–17 ans. Raisonnement verbal, non verbal, mathématiques et anglais mesurés selon des références internationales — sans inscription.</p>
          </div>
          <Link href="/fr#academique" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Commencer l&apos;évaluation gratuite
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Cette Feuille de Route Vous Rend un Parent Plus Efficace</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le rapport détaillé que vous recevez après l&apos;évaluation vous donne un système de navigation pour l&apos;éducation de votre enfant :
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>Investissez dans les bons domaines.</strong> Quand vous découvrez que votre enfant a un raisonnement non verbal très élevé, vous pouvez canaliser cette force tôt — en l&apos;orientant vers des clubs de codage, de robotique ou de design, développant cet avantage avant que quiconque ne l&apos;ait identifié.</Check>
          <Check><strong>Traitez les faiblesses avant qu&apos;elles ne deviennent des échecs.</strong> Le domaine cognitif où un enfant sous-performe — que ce soit l&apos;attention, la logique verbale ou autre — peut être identifié avant qu&apos;il ne génère de mauvaises notes ou une crise scolaire. Cela signifie un soutien calme et ciblé plutôt que la panique.</Check>
          <Check><strong>Prenez les décisions importantes avec des données, pas des suppositions.</strong> En voyant exactement où se situe votre enfant par rapport à ses pairs dans le monde entier, vous pouvez prendre des décisions importantes — choix du lycée, objectifs universitaires, plans d&apos;études à l&apos;étranger — sur la base de preuves scientifiques plutôt que d&apos;ouï-dire.</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Les axes de développement d&apos;un enfant en âge scolaire ne sont pas un bilan d&apos;échecs — ce sont des domaines de potentiel qui attendent le bon type de soutien pour se transformer. Avec la carte cognitive objective qu&apos;Eduentry fournit, vous pouvez cesser de pousser votre enfant à &ldquo;travailler plus&rdquo; et devenir le parent informé qui se tient à ses côtés précisément là où il en a le plus besoin.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides Connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fr/blog/comment-se-compare-votre-enfant', tag: 'Guide', title: "Comment se compare votre enfant à l'échelle mondiale ?" },
            { href: '/fr/blog/comprendre-forces-faiblesses-enfant-lycee', tag: 'Guide', title: "Forces et faiblesses : préparer l'entrée au lycée" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
}

export function getFrenchBlogContent(slug: string): React.ReactNode {
  return FR_CONTENT[slug] ?? null
}
