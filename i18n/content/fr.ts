import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — une salle de contrôle macOS pour agents de code',
      description: 'Composez un flux pour Claude Code et Codex sur une seule toile, lancez-le sur un projet de votre Mac et regardez chaque agent travailler en parallèle. Gratuit pour Apple Silicon.',
    },
    features: {
      title: 'Fonctions — RigOne',
      description: 'Flux visuels, vraies exécutions en parallèle, agents réutilisables, vérifications lancées par RigOne lui-même, travail gardé sur sa propre branche, déclencheurs et traces qui survivent au terminal.',
      breadcrumb: 'Fonctions',
    },
    docs: {
      title: 'Documentation — RigOne',
      description: 'Installez RigOne, créez votre premier flux, lancez-le sur un projet et lisez les résultats. Concepts, modèle de sécurité, fichiers sur le disque et dépannage.',
      breadcrumb: 'Documentation',
    },
    compare: {
      title: 'RigOne comparé aux autres façons de lancer des agents de code',
      description: 'Ce qui distingue RigOne d’une CLI d’agent seule, des applications de bureau pour agents en parallèle, des gestionnaires de sessions de terminal et des agents de code dans le cloud — avec les compromis.',
      breadcrumb: 'Comparer',
    },
    changelog: {
      title: 'Journal des versions — RigOne',
      description: 'Chaque version de RigOne : ce qui a changé, ce qu’il faut faire en mettant à jour, et la somme de contrôle du build signé et notarisé.',
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
    titleStrong: 'Un graphe',
    titleSoft: 'commande le travail.',
    sub: 'RigOne est une salle de contrôle native pour agents de code. Définissez un agent une fois, posez-le sur la toile, reliez les étapes et lancez le graphe sur un projet de votre Mac.',
    download: 'Télécharger pour macOS',
    docsCta: 'Lire la documentation',
    note: 'Gratuit · macOS 13+ · signé et notarisé',
    illustrationLabel: 'L’écran d’exécution : le plan d’un flux à gauche, ce que disent les agents à droite.',
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
    lead: 'Vous décidez de ce qui s’exécute, de combien en même temps et de ce que cela peut coûter.',
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
          'Fixez le maximum qu’une exécution peut dépenser avant qu’elle démarre',
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
    title: 'RigOne et les autres façons de lancer des agents de code',
    lead: 'Il existe de bons outils pour lancer un agent, ou plusieurs côte à côte. RigOne sert quand le travail est une suite d’étapes que vous voulez relancer.',
    caption: 'RigOne comparé à quatre types d’outils pour lancer des agents de code',
    capability: 'Fonction',
    columns: ['CLI d’agent seule', 'Applications de bureau pour agents en parallèle', 'Gestionnaires de sessions de terminal', 'Agents de code dans le cloud'],
    examples: ['Claude Code, Codex CLI', 'p. ex. Conductor', 'p. ex. Claude Squad', 'p. ex. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Oui', partial: 'En partie', no: 'Non', unknown: 'Non précisé' },
    notStated: 'Non précisé publiquement',
    rows: {
      local: {
        criterion: 'Fonctionne sur votre Mac et dans votre dossier',
        cells: ['', '', '', '', 'Tourne dans le bac à sable du fournisseur'],
      },
      mix: {
        criterion: 'Claude Code et Codex dans un même flux',
        cells: ['', 'Un fournisseur par session', 'Côte à côte, pas dans un même flux', 'Côte à côte, pas dans un même flux', 'Un fournisseur par service'],
      },
      graph: {
        criterion: 'Flux en plusieurs étapes enregistré et relançable',
        cells: ['Graphe visuel', 'Scripts, hooks et sous-agents', '', '', ''],
      },
      isolated: {
        criterion: 'Travail en parallèle dans des copies isolées du code',
        cells: ['Un espace de travail par étape', 'Des worktrees que vous gérez', 'Un worktree par agent', 'Un worktree par agent', 'Un bac à sable par tâche'],
      },
      checks: {
        criterion: 'Vérifications lancées par l’outil, distinctes de ce qu’affirme l’agent',
        cells: ['« Rien n’a tourné » n’est jamais une réussite', 'Avec vos propres hooks', '', '', 'CI sur la pull request'],
      },
      budget: {
        criterion: 'Limite de dépense et de concurrence par exécution',
        cells: ['', 'Limites par session seulement', '', '', 'Limites de l’abonnement'],
      },
      platforms: {
        criterion: 'Plateformes',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Navigateur'],
      },
      price: {
        criterion: 'Prix',
        cells: ['Gratuit ; utilise votre abonnement Claude Code ou Codex', 'Inclus dans l’abonnement du fournisseur', 'Voir le site du produit', 'Gratuit, open source', 'Inclus dans l’abonnement du fournisseur'],
      },
    },
    footnoteHtml: 'Comparaison par type d’outil, d’après la documentation publique, en octobre 2026. Chaque produit diffère et évolue vite. Vous avez trouvé une erreur ? <a href="{issues}">Dites-le-nous</a>.',
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
        answer: 'RigOne lui-même tourne sur votre Mac et travaille dans votre dossier. Les agents qu’il lance sont Claude Code et Codex : le code qu’ils lisent part chez leurs fournisseurs exactement comme si vous les lanciez dans un terminal.',
      },
      {
        question: 'Combien ça coûte ?',
        answer: 'RigOne est gratuit à télécharger et à utiliser. Les exécutions utilisent votre propre abonnement Claude Code ou Codex, et vous pouvez fixer le maximum qu’une exécution peut dépenser avant qu’elle démarre.',
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
  },
  docs: {
    eyebrow: 'Documentation',
    title: 'Utiliser RigOne',
    lead: 'Installez-le, créez un flux, lancez-le sur un projet et lisez ce qui s’est passé.',
    onThisPage: 'Sur cette page',
    englishNote: 'La documentation est rédigée en anglais.',
    helpHtml: 'Quelque chose n’est pas clair ou est faux ici ? <a href="{issues}">Ouvrez un ticket</a>.',
  },
  footer: {
    tagline: 'macOS d’abord · local d’abord · votre propre code',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Site sous licence <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
