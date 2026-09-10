import React from 'react'
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
          La clé est la personnalisation. Un e-mail générique envoyé à cent entreprises obtient moins de réponses qu'un e-mail spécifique envoyé à dix entreprises soigneusement choisies.
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
          À 16 ans, vous n'avez pas encore de CV élaboré. Mais vous pouvez démontrer votre aptitude de façon crédible avec un score d'évaluation professionnel. L'évaluation Eduentry mesure votre aptitude générale, vos connaissances sectorielles et vos compétences professionnelles — et produit un rapport que vous pouvez partager avec les entreprises.
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
          Un CV lycéen bien structuré ouvre la porte. La lettre de motivation fait entrer. Elle doit être personnalisée pour chaque entreprise, d'une demi-page maximum, et doit répondre à trois questions : Pourquoi cette entreprise ? Pourquoi ce secteur ? Qu'est-ce que vous pouvez apporter pendant ce stage ?
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
          Le stress d'un entretien vient principalement de l'impréparation. Plus vous avez répondu à voix haute aux questions prévisibles, moins l'entretien vous semblera intimidant. Pratiquez avec un parent, un ami, ou devant un miroir — la répétition à voix haute est fondamentale.
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
          Les startups e-commerce sont également d'excellents terrains de stage — elles ont souvent de petites équipes où chaque membre porte plusieurs casquettes, ce qui vous permettra de toucher à de nombreux aspects du marketing digital.
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

}

export function getFrenchBlogContent(slug: string): React.ReactNode {
  return FR_CONTENT[slug] ?? null
}
