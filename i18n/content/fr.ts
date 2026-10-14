import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — agents Claude Code et Codex en parallèle sur votre Mac',
      description: 'Salle de contrôle macOS native pour agents de code : composez un flux pour Claude Code et Codex sur une toile et lancez-le en parallèle sur votre projet. Gratuit.',
    },
    features: {
      title: 'Fonctions de RigOne : flux visuels, agents en parallèle, vérifications',
      description: 'Flux visuels, exécutions en parallèle, objectifs Auto, agents réutilisables, vérifications par RigOne, changements sur leur propre branche, tableaux et déclencheurs.',
      breadcrumb: 'Fonctions',
    },
    docs: {
      title: 'Documentation de RigOne et tutoriel pas à pas',
      description: 'Installez RigOne et suivez le tutoriel pas à pas : créez un agent, composez un flux, lancez-le sur votre Mac et confiez un objectif à Auto. Référence complète.',
      breadcrumb: 'Documentation',
    },
    compare: {
      title: 'RigOne face à Superset, Conductor, Nimbalyst, Codex et Cursor',
      description: 'RigOne face à Superset, Conductor, Nimbalyst, l’app Codex et Cursor Cloud Agents : exécutions locales, deux fournisseurs, flux, vérifications et dépenses.',
      breadcrumb: 'Comparer',
    },
    changelog: {
      title: 'Journal des versions de RigOne : notes et sommes de contrôle',
      description: 'Chaque version de RigOne : ce qui a changé, ce qu’il faut faire en mettant à jour, et la somme de contrôle du build signé et notarisé.',
      breadcrumb: 'Journal des versions',
    },
    ogImageAlt: 'RigOne — un graphe commande le travail. Une salle de contrôle macOS pour agents de code.',
  },
  common: {
    skipToContent: 'Aller au contenu',
    homeAria: 'Accueil RigOne',
    primaryNav: 'Menu principal',
    footerNav: 'Pied de page',
    language: 'Langue',
    englishOnly: 'Cette page est rédigée en anglais.',
  },
  nav: {
    features: 'Fonctions',
    docs: 'Docs',
    compare: 'Comparer',
    faq: 'FAQ',
    changelog: 'Versions',
    github: 'GitHub',
    issues: 'Signaler un problème',
    download: 'Télécharger',
  },
  theme: {
    label: 'Thème',
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Version {version} disponible',
    audience: 'Pour les développeurs qui utilisent déjà Claude Code ou Codex',
    titleStrong: 'Faites travailler vos agents de code en équipe,',
    titleSoft: 'pas un terminal à la fois.',
    sub: 'RigOne est une app Mac gratuite qui transforme Claude Code et Codex en un flux que vous pouvez relancer : des étapes en parallèle, chacune dans sa propre copie de votre code, avec des vérifications que RigOne lance lui-même avant que quoi que ce soit n’atteigne votre branche.',
    problemsLabel: 'Ce que RigOne règle',
    problems: [
      { problem: 'Jongler entre les terminaux', answer: 'Une seule fenêtre planifie, lance et montre chaque agent.' },
      { problem: 'Des agents dans le même checkout', answer: 'Chaque étape travaille dans sa propre copie ; le résultat attend sur une branche.' },
      { problem: 'Un « fini » douteux', answer: 'C’est RigOne qui lance les vérifications, pas l’agent.' },
    ],
    download: 'Télécharger pour macOS',
    docsCta: 'Lire la documentation',
    note: 'Gratuit · macOS 13+ · signé et notarisé',
    chips: ['Vérifié par RigOne', '3 agents à la fois', 'Rien de poussé'],
  },
  trust: {
    aria: 'Ce sur quoi vous pouvez compter',
    items: [
      'Tourne sur votre Mac, dans votre dossier',
      'Claude Code et Codex à égalité',
      'Rien n’arrive sur votre branche tant que vous ne le prenez pas',
      'Signé avec un Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Pourquoi RigOne',
    title: 'C’est le graphe qui décide, pas le moteur',
    lead: 'L’ordre, les branches parallèles, les reprises et les points de contrôle viennent du flux que vous avez enregistré. Aucune étape n’est codée en dur, et aucun agent ne note son propre travail.',
    items: {
      graph: {
        title: 'Des flux que l’on voit',
        body: 'Étapes d’agent, vérifications et points de contrôle sur une seule toile. Une flèche veut dire « s’exécute après », et rien d’autre.',
        link: 'Flux visuels',
      },
      peers: {
        title: 'Deux fournisseurs, une exécution',
        body: 'Mélangez Claude Code et Codex dans le même flux — l’un écrit, l’autre donne un second avis.',
        link: 'Agents réutilisables',
      },
      parallel: {
        title: 'Vraiment en même temps',
        body: 'Les étapes qui ne dépendent pas l’une de l’autre démarrent ensemble, jusqu’à la limite que vous fixez.',
        link: 'Exécutions en parallèle',
      },
      checks: {
        title: 'Des vérifications, pas des promesses',
        body: 'Un agent peut dire « terminé ». Seules les vérifications lancées par RigOne peuvent dire que les tests sont passés.',
        link: 'Vérifications',
      },
      branches: {
        title: 'Votre branche reste la vôtre',
        body: 'Chaque étape travaille dans sa propre copie du code. Ce qu’elle a changé attend sur une branche jusqu’à ce que vous le preniez.',
        link: 'Où vont les changements',
      },
      evidence: {
        title: 'Des traces après coup',
        body: 'Reçus, passations et un paquet de diagnostic restent sur le disque une fois la sortie du terminal disparue.',
        link: 'Traces',
      },
    },
    seeAll: 'Voir toutes les fonctions',
  },
  how: {
    eyebrow: 'Comment ça marche',
    title: 'Trois étapes, et seule la troisième dépense de l’argent',
    lead: 'Vous décidez de ce qui s’exécute, de combien en même temps et du moment où être prévenu de la dépense.',
    steps: [
      {
        title: 'Écrivez un agent',
        body: 'Un travail, une instruction. Choisissez Claude Code ou Codex, le modèle, l’effort et ce qu’il a le droit de toucher.',
      },
      {
        title: 'Alignez les agents',
        body: 'Cette rangée est un flux. Les branches qui ne dépendent pas l’une de l’autre s’exécutent en même temps.',
      },
      {
        title: 'Lancez et regardez',
        body: 'Pointez le graphe vers un dossier de ce Mac. Répondez quand un agent demande ; tout le reste continue.',
      },
    ],
  },
  screens: {
    eyebrow: 'Écrans',
    title: 'Voyez-le avant de le télécharger',
    lead: 'L’app telle qu’elle est livrée aujourd’hui, avec l’apparence Minimalist par défaut. Chaque écran fonctionne en clair et en sombre.',
    label: 'Écrans de l’app',
    items: {
      run: {
        tab: 'Run',
        title: 'Lancez un flux, ou parlez-en d’abord',
        body: 'Le plan à gauche, la conversation avec le Lead à droite. Choisissez combien d’agents travaillent à la fois et quand prévenir de la dépense, puis appuyez sur Run workflow.',
        alt: 'L’écran Run pendant l’exécution de Ship a feature : trois étapes terminées et Second opinion au travail ; dans le fil, ce que chaque agent a dit, et le Lead demande s’il faut livrer le correctif maintenant ou faire le ménage d’abord.',
      },
      agents: {
        tab: 'Agents',
        title: 'Tout le rôle sur un seul écran',
        body: 'Ses instructions, la CLI, le modèle et l’effort avec lesquels il travaille, s’il peut modifier des fichiers ou accéder au web, et quand il abandonne.',
        alt: 'L’écran Agents : quatre rôles dans une liste à côté de Scout, qui tourne avec Claude Code et lit le code avant que quiconque le modifie.',
      },
      canvas: {
        tab: 'Canvas',
        title: 'Un flux que vous voyez',
        body: 'Des étapes sur un canevas, reliées par des flèches qui signifient « s’exécute après ». Après Fix, les tests et un second avis de l’autre fournisseur tournent en même temps.',
        alt: 'Le canevas de Ship a feature : Reproduce, puis Fix, puis Tests pass et Second opinion côte à côte.',
      },
      workflows: {
        tab: 'Workflows',
        title: 'Des flux que vous relancez',
        body: 'Chaque flux enregistré avec ses étapes et ses agents. Celui que vous lancez le plus prend toute la largeur.',
        alt: 'L’écran Workflows : Fix a bug en haut avec ses trois étapes, Review a pull request et Ship a feature en dessous.',
      },
      settings: {
        tab: 'Settings',
        title: 'Des réglages dans leur propre fenêtre',
        body: 'Des catégories pour le travail, le compte et l’app. Choisissez l’apparence Minimalist ou Studio, en clair, en sombre ou selon macOS.',
        alt: 'Settings → Appearance : les thèmes Minimalist et Studio, et System, Light ou Dark.',
      },
    },
  },
  honest: {
    eyebrow: 'Conçu pour échouer honnêtement',
    title: 'Les échecs sont des défauts du produit, pas du bruit de terminal',
    lead: 'Ce que RigOne refuse de faire en silence.',
    items: {
      scopes: { title: 'Les portées d’écriture qui se recouvrent', body: 'sont refusées avant le démarrage du premier processus.' },
      cancel: { title: 'L’annulation', body: 'arrête tout le groupe de processus, puis vérifie qu’il est bien mort.' },
      timeouts: { title: 'Les délais dépassés', body: 'passent par le même arrêt supervisé que l’annulation.' },
      secrets: { title: 'Prompts et secrets', body: 'passent par stdin, jamais par les arguments de la ligne de commande.' },
      env: { title: 'L’environnement des processus enfants', body: 'est reconstruit depuis une liste explicite.' },
      unknown: { title: 'Les événements inconnus d’un fournisseur', body: 'sont enregistrés et ignorés au lieu de faire planter l’exécution.' },
      green: { title: 'Un code de sortie vert', body: 'sans preuve que les tests ont tourné n’est pas accepté comme vérification verte.' },
      files: { title: 'Les fichiers font foi ;', body: 'l’index SQLite peut être supprimé et reconstruit.' },
    },
  },
  features: {
    eyebrow: 'Fonctions',
    title: 'Tout ce qu’une exécution demande, dans une seule fenêtre',
    lead: 'RigOne construit, exécute et enregistre des flux pour agents de code. Voici ce que fait chaque partie aujourd’hui.',
    items: {
      canvas: {
        eyebrow: 'Flux',
        title: 'Flux visuels',
        body: 'Composez un flux sur une toile et enregistrez-le comme un graphe que vous pouvez relancer. Une étape peut être un agent, une vérification ou un point de contrôle où vous décidez.',
        points: [
          'Une flèche veut dire « s’exécute après » — l’ordre vient du graphe',
          'Boucles, chemins conditionnels et reprises avec une limite',
          'Une étape qui reçoit plusieurs flèches lit chaque passation reçue',
          'Lancez plusieurs copies d’une étape (×3) quand vous voulez plus d’une version',
        ],
      },
      parallel: {
        eyebrow: 'Exécution',
        title: 'De vraies exécutions en parallèle',
        body: 'Les branches indépendantes se chevauchent dans le temps au lieu d’attendre leur tour derrière un seul exécutant.',
        points: [
          'Choisissez combien d’agents peuvent travailler en même temps',
          'Un avertissement quand une exécution atteint le montant choisi',
          'Modèles et niveaux d’effort sont vérifiés auprès de votre CLI installée avant le démarrage de toute étape',
        ],
      },
      run: {
        eyebrow: 'Écran d’exécution',
        title: 'Une exécution que l’on peut lire',
        body: 'Le plan à gauche, chaque carte nommant l’étape qu’elle attend. À droite, ce qu’a dit chaque agent, dans l’ordre, avec la question qui a arrêté l’exécution épinglée là où vous y répondrez.',
        points: [
          'Questions, commandes lancées, sortie et dépenses restent ensemble',
          'Les résultats disent ce qui s’est passé : terminé, échoué, arrêté ou non exécuté',
          'Un agent principal peut discuter avec vous — seul /run lance le travail',
        ],
      },
      auto: {
        eyebrow: 'Auto',
        title: 'D’une phrase à un résultat vérifié',
        body: 'Donnez un objectif au Lead. Auto choisit les rôles et les compétences nécessaires, construit des flux ordinaires pour chaque partie et continue jusqu’à ce que les vérifications et les revues prouvent le travail. C’est RigOne qui décide qu’un objectif est vérifié, pas le Lead.',
        points: [
          'Chaque décision qui vous attend est dans une seule liste : Needs you',
          'Revue de design : acceptez les captures du testeur, ou cliquez sur un endroit et dites ce qui doit changer',
          'Patiente quand le fournisseur est saturé ou qu’une limite d’usage est atteinte, puis reprend',
          'Skip permissions active ou coupe l’accès complet pour toute l’exécution Auto',
        ],
      },
      agents: {
        eyebrow: 'Agents',
        title: 'Des agents réutilisables',
        body: 'Définissez un rôle une fois et réutilisez-le dans chaque flux. Tout le rôle — ses consignes, son modèle, son accès aux fichiers — est à l’écran quand vous l’ouvrez.',
        points: [
          'Fournisseur, modèle, effort, délai et accès ou non au web',
          'Accès aux fichiers à partir de « lecture seule »',
          'Serveurs d’outils (connexions) et compétences choisis parmi ceux du projet',
          'Importez une configuration d’un autre projet sans copier ni secrets ni historique',
        ],
      },
      knowledge: {
        eyebrow: 'Savoir',
        title: 'Un savoir propre au projet',
        body: 'Notes et compétences vivent sur le disque avec le projet. Une note suggérée par un agent n’arrive dans un prompt futur qu’après votre accord.',
        points: [
          'Les notes vont dans chaque prompt ; les compétences servent quand elles conviennent au travail',
          'Ensembles de contexte nommés à partir de texte, de Markdown, d’images et de PDF',
          'Voyez quel contexte une exécution a réellement utilisé',
        ],
      },
      checks: {
        eyebrow: 'Vérifications',
        title: 'Des vérifications lancées par RigOne lui-même',
        body: 'Quand une étape se termine, RigOne lance les vérifications — il ne demande pas à l’agent si cela a marché. Ce qu’a dit l’agent, ce qu’ont trouvé les vérifications et ce que vous avez approuvé ne sont jamais confondus.',
        points: [
          '« Rien n’a tourné » est un résultat à part, jamais une réussite',
          'Un second avis d’un autre fournisseur peut soulever des doutes, mais jamais approuver',
          'La même erreur deux fois arrête les reprises',
        ],
      },
      branches: {
        eyebrow: 'Espaces de travail',
        title: 'Les changements attendent sur leur propre branche',
        body: 'Chaque étape travaille dans sa propre copie de votre code, pour que les agents ne se gênent pas. À la fin de l’exécution, le travail attend sur une branche de votre projet.',
        points: [
          'Rien n’est poussé',
          'Rien n’arrive sur votre propre branche tant que vous ne le prenez pas',
          'Un vrai conflit nomme les branches où le travail est gardé',
        ],
      },
      boards: {
        eyebrow: 'Boards',
        title: 'Des tableaux partagés, chiffrés sur votre Mac',
        body: 'Tâches, commentaires et membres sur un tableau Kanban ou par sprints. Lancez une tâche comme flux ou comme objectif Auto dans un dossier de ce Mac, et sa progression s’affiche sur le tableau pour tous.',
        points: [
          'Chiffré et signé sur votre Mac ; le serveur ne relaie que du texte chiffré',
          'Invitez des membres comme Editor ou Viewer, et approuvez chaque nouvel appareil',
          'Fonctionne hors ligne et envoie les changements au retour de la connexion',
          'La seule partie de RigOne qui demande un compte MonoOne',
        ],
      },
      triggers: {
        eyebrow: 'Déclencheurs',
        title: 'Déclencheurs et reprise',
        body: 'Lancez un flux quand un ticket Linear vous est assigné, vérifié toutes les 1, 5, 15 ou 60 minutes. Le travail interrompu est repris par le même chemin de démarrage, pas par un second moteur.',
        points: [
          'Un ticket lance une exécution, même après un redémarrage',
          'La clé d’API est saisie une fois et n’est plus jamais affichée',
          'Supprimer un déclencheur annule ce qui attendait, de façon visible',
        ],
      },
      lab: {
        eyebrow: 'Labo',
        title: 'Essayez un agent sur votre propre code',
        body: 'Choisissez un agent et RigOne rédige des cas de test à partir de votre projet, pour voir si une modification de cet agent a amélioré le travail.',
        points: [
          'Les cas viennent de votre code, pas d’un benchmark générique',
          'Comparez un agent avant et après l’avoir modifié',
        ],
      },
      evidence: {
        eyebrow: 'Traces',
        title: 'Des traces qui survivent au terminal',
        body: 'Chaque exécution laisse un dossier que vous pouvez ouvrir : ce que chaque étape a transmis, les réponses complètes, les journaux et un fichier de résultats.',
        points: [
          'Reçus d’exécution et pièces jointes complètes pour les longues réponses',
          'La preuve que les processus annulés ont vraiment disparu',
          'Un paquet de diagnostic à copier en un clic',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Comparer',
    title: 'RigOne face à Superset, Conductor, Nimbalyst, Codex et Cursor',
    lead: 'Plusieurs bons outils lancent des agents de code côte à côte. RigOne sert quand le travail est une suite d’étapes que vous voulez relancer, avec des vérifications qu’il lance lui-même.',
    caption: 'RigOne comparé à Superset, Conductor, Nimbalyst, l’app OpenAI Codex et Cursor Cloud Agents',
    capability: 'Fonction',
    examples: ['App de bureau, code consultable', 'App pour Mac', 'App de bureau, licence MIT', 'L’app de bureau d’OpenAI', 'Agents cloud dans Cursor'],
    labels: { yes: 'Oui', partial: 'En partie', no: 'Non', unknown: 'Non précisé' },
    notStated: 'Non précisé publiquement',
    rows: {
      local: {
        criterion: 'Fonctionne sur votre Mac et dans votre dossier',
        cells: ['', 'En local par défaut', 'Espaces cloud avec Pro', 'App de bureau ; synchro pour les équipes', 'Plus Codex Cloud', 'Machines cloud uniquement'],
      },
      mix: {
        criterion: 'Claude Code et Codex dans un même flux',
        cells: ['', 'Côte à côte, un agent par espace', 'Côte à côte, un agent par espace', 'Sessions en parallèle, un agent chacune', 'Codex uniquement', 'L’agent maison de Cursor'],
      },
      graph: {
        criterion: 'Flux en plusieurs étapes enregistré et relançable',
        cells: ['Graphe visuel', 'Préréglages et scripts ; automatisations avec Pro', 'Scripts de préparation et d’exécution', 'Commandes slash', 'Automatisations planifiées', ''],
      },
      isolated: {
        criterion: 'Travail en parallèle dans des copies isolées du code',
        cells: ['Un espace de travail par étape', 'Un worktree par espace', 'Un espace par tâche', 'Worktree facultatif par session', 'Worktrees', 'Une machine par agent'],
      },
      checks: {
        criterion: 'Vérifications lancées par l’outil, distinctes de ce qu’affirme l’agent',
        cells: ['« Rien n’a tourné » n’est jamais une réussite', 'Scripts de préparation et d’exécution', 'Affiche l’état de la CI et de la pull request', '', 'Scripts de préparation', 'L’agent teste son propre travail'],
      },
      budget: {
        criterion: 'Alerte de dépense et parallélisme par exécution',
        cells: ['Un avertissement par exécution', '', '', '', 'Limites du forfait', 'Une limite de dépense, sans limite de parallélisme'],
      },
      boards: {
        criterion: 'Tableau de tâches partagé et suivi des tickets',
        cells: ['Tableaux chiffrés, déclencheurs Linear', 'Linear et Slack avec Pro', 'Tickets Linear et GitHub', 'Kanban des sessions', 'Linear et GitHub', 'Linear, GitHub et Slack'],
      },
      platforms: {
        criterion: 'Plateformes',
        cells: ['macOS 13+, Apple Silicon', 'macOS ; Linux expérimental', 'macOS', 'macOS, Windows, Linux', 'macOS, Windows, Linux', 'Cloud'],
      },
      price: {
        criterion: 'Prix',
        cells: ['Gratuit ; utilise votre forfait Claude Code ou Codex', 'Gratuit ; Pro 20 $ par personne et par mois', 'Gratuit ; Pro 50 $ par mois', 'Gratuit, licence MIT', 'Inclus dans les forfaits ChatGPT', 'Forfait Cursor payant plus tarifs API'],
      },
    },
    footnoteHtml: 'D’après la documentation publique et les tarifs de chaque produit, vérifiés en octobre 2026. Les produits évoluent vite ; « Non précisé » signifie que nous n’avons rien trouvé de public. Une erreur ? <a href="{issues}">Dites-le-nous</a>.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
    leadHtml: 'Plus de détails dans la <a href="{docs}">documentation</a>. Il manque quelque chose ? <a href="{issues}">Ouvrez un ticket</a>.',
    items: [
      {
        question: 'De quoi ai-je besoin pour utiliser RigOne ?',
        answer: 'Un Mac avec Apple Silicon et macOS 13 ou plus récent, et au moins une CLI d’agent installée et connectée : Claude Code ou Codex.',
      },
      {
        question: 'RigOne envoie-t-il mon code quelque part ?',
        answer: 'RigOne lui-même tourne sur votre Mac et travaille dans votre dossier. Les agents qu’il lance sont Claude Code et Codex : le code qu’ils lisent part chez leurs fournisseurs exactement comme si vous les lanciez dans un terminal. Boards, la seule partie qui demande un compte, chiffre tâches et commentaires sur votre Mac avant qu’ils ne le quittent.',
      },
      {
        question: 'Combien ça coûte ?',
        answer: 'RigOne est gratuit à télécharger et à utiliser. Les exécutions utilisent votre propre forfait Claude Code ou Codex, et RigOne vous prévient quand une exécution atteint le montant choisi.',
      },
      {
        question: 'Un agent va-t-il pousser vers mon dépôt ?',
        answer: 'Non. Chaque étape travaille dans sa propre copie du code, et le résultat attend sur une branche de votre projet. Rien n’est poussé, et rien n’arrive sur votre propre branche tant que vous ne le prenez pas.',
      },
      {
        question: 'Puis-je utiliser seulement Claude Code, ou seulement Codex ?',
        answer: 'Oui. Une seule CLI installée et connectée suffit. Mélanger les deux est utile quand vous voulez qu’un fournisseur écrive et que l’autre donne un second avis.',
      },
      {
        question: 'L’app est-elle dans ma langue ?',
        answer: 'Oui, dans les neuf mêmes langues que ce site. Elle suit la langue de macOS, et vous pouvez en choisir une autre dans Settings → Appearance. Ce que les agents écrivent pendant une exécution reste en anglais.',
      },
      {
        question: 'Existe-t-il une version Windows, Linux ou Intel ?',
        answer: 'Pas aujourd’hui. RigOne est conçu pour macOS 13 ou plus récent sur Apple Silicon.',
      },
      {
        question: 'J’utilisais Loadout. Que deviennent mes données ?',
        answer: 'Loadout est l’ancien nom de RigOne. La version 1.1.0 déplace votre bibliothèque de ~/.loadout vers ~/.rig-one au premier lancement, et le dossier .loadout/ de chaque projet vers .rig-one/ quand vous l’ouvrez. macOS voit RigOne comme une nouvelle application et redemande donc les autorisations.',
      },
    ],
  },
  cta: {
    title: 'Mettez vos agents sur une seule toile',
    lead: 'Gratuit pour les Mac Apple Silicon. Signé avec un Apple Developer ID et notarisé par Apple.',
    download: 'Télécharger pour macOS',
    docs: 'Lire la documentation',
    compare: 'Voir la comparaison',
    note: 'Nécessite Claude Code ou Codex installé et connecté.',
  },
  changelog: {
    eyebrow: 'Journal des versions',
    title: 'Ce qui a changé, version par version',
    lead: 'Chaque version indique ce qui a changé, ce qu’il faut faire en mettant à jour, et la somme de contrôle du build signé. Les builds antérieurs à 1.1.0 sont sortis sous le nom Loadout.',
    download: 'Télécharger la dernière version',
    github: 'Versions sur GitHub',
    latest: 'Dernière',
    englishNote: 'Les notes de version sont rédigées en anglais.',
    versions: 'Versions',
    show: 'Afficher les versions',
    all: 'Toutes',
    featureReleases: 'Fonctions',
    patchReleases: 'Correctifs',
    count: 'Versions :',
    empty: 'Aucune version de ce type.',
    showOlder: 'Afficher les versions plus anciennes',
    package: 'Paquet',
    copyChecksum: 'Copier le SHA-256',
    copied: 'Copié',
  },
  docs: {
    eyebrow: 'Documentation',
    title: 'Utiliser RigOne',
    lead: 'Installez-le, créez un flux, lancez-le sur un projet et lisez ce qui s’est passé.',
    tutorial: 'Commencer le tutoriel pas à pas',
    onThisPage: 'Sur cette page',
    englishNote: 'La documentation est rédigée en anglais.',
    helpHtml: 'Quelque chose n’est pas clair ou est faux ici ? <a href="{issues}">Ouvrez un ticket</a>.',
  },
  footer: {
    tagline: 'macOS d’abord · local d’abord · votre propre code',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Site sous licence <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
