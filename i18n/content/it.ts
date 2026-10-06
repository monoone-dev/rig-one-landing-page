import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — una sala di controllo per macOS per agenti di codice',
      description: 'Componi un flusso per Claude Code e Codex sulla stessa tela, eseguilo su un progetto sul tuo Mac e guarda ogni agente lavorare in parallelo. Gratis per Apple Silicon.',
    },
    features: {
      title: 'Funzioni — RigOne',
      description: 'Flussi visivi, esecuzioni davvero in parallelo, agenti riutilizzabili, controlli eseguiti da RigOne stesso, lavoro tenuto su un ramo a parte, trigger e prove che sopravvivono al terminale.',
      breadcrumb: 'Funzioni',
    },
    docs: {
      title: 'Documentazione — RigOne',
      description: 'Installa RigOne, crea il tuo primo flusso, eseguilo su un progetto e leggi i risultati. Concetti, modello di sicurezza, file su disco e risoluzione dei problemi.',
      breadcrumb: 'Documentazione',
    },
    compare: {
      title: 'RigOne a confronto con gli altri modi di eseguire agenti di codice',
      description: 'In che cosa RigOne si distingue da una CLI di agente da sola, dalle app desktop per agenti in parallelo, dai gestori di sessioni di terminale e dagli agenti di codice nel cloud — con i compromessi.',
      breadcrumb: 'Confronto',
    },
    changelog: {
      title: 'Novità delle versioni — RigOne',
      description: 'Ogni versione di RigOne: che cosa è cambiato, che cosa fare quando aggiorni e il checksum della build firmata e notarizzata.',
      breadcrumb: 'Novità delle versioni',
    },
    ogImageAlt: 'RigOne — un grafo comanda il lavoro. Una sala di controllo per macOS per agenti di codice.',
  },
  common: {
    skipToContent: 'Vai al contenuto',
    homeAria: 'Home di RigOne',
    primaryNav: 'Menu principale',
    footerNav: 'Piè di pagina',
    language: 'Lingua',
    englishOnly: 'Questa pagina è scritta in inglese.',
  },
  nav: {
    features: 'Funzioni',
    docs: 'Documentazione',
    compare: 'Confronto',
    faq: 'FAQ',
    changelog: 'Versioni',
    github: 'GitHub',
    issues: 'Segnala un problema',
    download: 'Scarica',
  },
  theme: {
    label: 'Tema',
    light: 'Chiaro',
    dark: 'Scuro',
    system: 'Sistema',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Versione {version} disponibile',
    titleStrong: 'Un grafo',
    titleSoft: 'comanda il lavoro.',
    sub: 'RigOne è una sala di controllo nativa per agenti di codice. Definisci un agente una volta, mettilo sulla tela, collega i passi ed esegui il grafo su un progetto sul tuo Mac.',
    download: 'Scarica per macOS',
    docsCta: 'Leggi la documentazione',
    note: 'Gratis · macOS 13+ · firmato e notarizzato',
    illustrationLabel: 'La schermata di esecuzione: il piano di un flusso a sinistra, quello che dicono gli agenti a destra.',
  },
  trust: {
    aria: 'Su che cosa puoi contare',
    items: [
      'Gira sul tuo Mac, nella tua cartella',
      'Claude Code e Codex alla pari',
      'Niente arriva sul tuo ramo finché non lo prendi tu',
      'Firmato con Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Perché RigOne',
    title: 'Decide il grafo, non il motore',
    lead: 'Ordine, rami paralleli, ritentativi e checkpoint vengono dal flusso che hai salvato. Nessun passo è scritto nel codice e nessun agente valuta il proprio lavoro.',
    items: {
      graph: {
        title: 'Flussi che si vedono',
        body: 'Passi di agente, controlli e checkpoint sulla stessa tela. Una freccia significa «viene eseguito dopo», e nient’altro.',
        link: 'Flussi visivi',
      },
      peers: {
        title: 'Due fornitori, un’esecuzione',
        body: 'Combina Claude Code e Codex nello stesso flusso — uno scrive, l’altro dà un secondo parere.',
        link: 'Agenti riutilizzabili',
      },
      parallel: {
        title: 'Davvero nello stesso momento',
        body: 'I passi che non dipendono l’uno dall’altro partono insieme, fino al limite che imposti.',
        link: 'Esecuzioni in parallelo',
      },
      checks: {
        title: 'Controlli, non promesse',
        body: 'Un agente può dire «fatto». Solo i controlli eseguiti da RigOne possono dire che i test sono passati.',
        link: 'Controlli',
      },
      branches: {
        title: 'Il tuo ramo resta tuo',
        body: 'Ogni passo lavora nella propria copia del codice. Quello che ha cambiato aspetta su un ramo finché non lo prendi tu.',
        link: 'Dove finiscono le modifiche',
      },
      evidence: {
        title: 'Prove a posteriori',
        body: 'Ricevute, passaggi di consegne e un pacchetto diagnostico restano su disco quando l’output del terminale non c’è più.',
        link: 'Prove',
      },
    },
    seeAll: 'Vedi tutte le funzioni',
  },
  how: {
    eyebrow: 'Come funziona',
    title: 'Tre passi, e solo il terzo spende soldi',
    lead: 'Decidi tu che cosa viene eseguito, quanti alla volta e quanto può costare.',
    steps: [
      {
        title: 'Scrivi un agente',
        body: 'Un lavoro, un’istruzione. Scegli Claude Code o Codex, il modello, l’impegno e che cosa può toccare.',
      },
      {
        title: 'Metti gli agenti in fila',
        body: 'Quella fila è un flusso. I rami che non dipendono l’uno dall’altro vengono eseguiti nello stesso momento.',
      },
      {
        title: 'Esegui e guarda',
        body: 'Punta il grafo a una cartella di questo Mac. Rispondi quando un agente chiede; tutto il resto continua.',
      },
    ],
  },
  honest: {
    eyebrow: 'Fatto per fallire con onestà',
    title: 'I guasti sono guasti del prodotto, non rumore del terminale',
    lead: 'Quello che RigOne si rifiuta di fare in silenzio.',
    items: {
      scopes: { title: 'Gli ambiti di scrittura sovrapposti', body: 'vengono rifiutati prima che parta il primo processo.' },
      cancel: { title: 'L’annullamento', body: 'termina l’intero gruppo di processi e poi verifica che sia morto.' },
      timeouts: { title: 'I timeout', body: 'passano dallo stesso arresto supervisionato dell’annullamento.' },
      secrets: { title: 'Prompt e segreti', body: 'passano da stdin, mai dagli argomenti della riga di comando.' },
      env: { title: 'Gli ambienti dei processi figli', body: 'vengono ricostruiti da una lista esplicita di voci consentite.' },
      unknown: { title: 'Gli eventi sconosciuti del fornitore', body: 'vengono registrati e ignorati invece di far fallire l’esecuzione.' },
      green: { title: 'Un codice di uscita verde', body: 'senza prova che i test siano stati eseguiti non vale come controllo verde.' },
      files: { title: 'I file sono la fonte di verità;', body: 'l’indice SQLite si può eliminare e ricostruire.' },
    },
  },
  features: {
    eyebrow: 'Funzioni',
    title: 'Tutto quello che serve a un’esecuzione, in una sola finestra',
    lead: 'RigOne costruisce, esegue e registra flussi per agenti di codice. Ecco che cosa fa oggi ogni parte.',
    items: {
      canvas: {
        eyebrow: 'Flussi',
        title: 'Flussi visivi',
        body: 'Componi un flusso su una tela e salvalo come un grafo da rieseguire. Un passo può essere un agente, un controllo o un checkpoint in cui decidi tu.',
        points: [
          'Una freccia significa «viene eseguito dopo» — l’ordine viene dal grafo',
          'Cicli, percorsi condizionali e ritentativi con un limite',
          'Un passo con più frecce in entrata legge ogni passaggio di consegne che riceve',
          'Esegui più copie di un passo (×3) quando vuoi più di un tentativo',
        ],
      },
      parallel: {
        eyebrow: 'Esecuzione',
        title: 'Esecuzioni davvero in parallelo',
        body: 'I rami indipendenti si sovrappongono nel tempo invece di fare la coda dietro a un solo esecutore.',
        points: [
          'Scegli quanti agenti possono lavorare insieme',
          'Imposta il massimo che un’esecuzione può spendere prima che parta',
          'Modelli e livelli di impegno vengono verificati sulla CLI installata prima che parta qualsiasi passo',
        ],
      },
      run: {
        eyebrow: 'Schermata di esecuzione',
        title: 'Un’esecuzione che si legge',
        body: 'Il piano a sinistra, con ogni scheda che indica il passo che aspetta. A destra, quello che ha detto ogni agente, in ordine, con la domanda che ha fermato l’esecuzione fissata dove risponderai.',
        points: [
          'Domande, comandi avviati, output e spesa restano insieme',
          'Gli esiti dicono che cosa è successo: fatto, fallito, fermato o non eseguito',
          'Un agente principale può discutere le cose con te — solo /run avvia il lavoro',
        ],
      },
      agents: {
        eyebrow: 'Agenti',
        title: 'Agenti riutilizzabili',
        body: 'Definisci un ruolo una volta e riusalo in ogni flusso. L’intero ruolo — le sue istruzioni, il suo modello, il suo accesso ai file — è sullo schermo quando lo apri.',
        points: [
          'Fornitore, modello, impegno, timeout e se può accedere al web',
          'Accesso ai file a partire da «solo lettura»',
          'Server di strumenti (connessioni) e abilità scelti tra quelli del progetto',
          'Importa una configurazione da un altro progetto senza copiare segreti o cronologia',
        ],
      },
      knowledge: {
        eyebrow: 'Conoscenza',
        title: 'Conoscenza legata al progetto',
        body: 'Note e abilità stanno su disco insieme al progetto. Una nota suggerita da un agente arriva in un prompt futuro solo dopo che l’hai approvata.',
        points: [
          'Le note entrano in ogni prompt; le abilità si usano quando servono al lavoro',
          'Insiemi di contesto con un nome, da testo, Markdown, immagini e PDF',
          'Guarda quale contesto ha davvero usato un’esecuzione',
        ],
      },
      checks: {
        eyebrow: 'Controlli',
        title: 'Controlli eseguiti da RigOne stesso',
        body: 'Quando un passo finisce, RigOne esegue i controlli — non chiede all’agente se ha funzionato. Quello che ha detto l’agente, quello che hanno trovato i controlli e quello che hai approvato non si confondono mai.',
        points: [
          '«Non è stato eseguito nulla» è un esito a sé, mai un successo',
          'Un secondo parere di un altro fornitore può sollevare dubbi, ma mai approvare',
          'Lo stesso errore due volte ferma i ritentativi',
        ],
      },
      branches: {
        eyebrow: 'Spazi di lavoro',
        title: 'Le modifiche aspettano su un ramo a parte',
        body: 'Ogni passo lavora nella propria copia del tuo codice, così gli agenti non si intralciano. Quando l’esecuzione finisce, il lavoro aspetta su un ramo del tuo progetto.',
        points: [
          'Non viene fatto nessun push',
          'Niente arriva sul tuo ramo finché non lo prendi tu',
          'Un conflitto reale indica i rami in cui è conservato il lavoro',
        ],
      },
      triggers: {
        eyebrow: 'Trigger',
        title: 'Trigger e ripristino',
        body: 'Avvia un flusso quando ti viene assegnata una issue di Linear, controllata ogni 1, 5, 15 o 60 minuti. Il lavoro interrotto viene ripreso dallo stesso percorso di avvio, non da un secondo motore.',
        points: [
          'Una issue avvia un’esecuzione, anche dopo un riavvio',
          'La chiave API si scrive una volta e non viene più mostrata',
          'Eliminare un trigger annulla in modo visibile ciò che era in attesa',
        ],
      },
      lab: {
        eyebrow: 'Laboratorio',
        title: 'Prova un agente sul tuo codice',
        body: 'Scegli un agente e RigOne prepara casi di test a partire dal tuo progetto, così vedi se una modifica a quell’agente ha migliorato il lavoro.',
        points: [
          'I casi vengono dal tuo codice, non da un benchmark generico',
          'Confronta un agente prima e dopo averlo modificato',
        ],
      },
      evidence: {
        eyebrow: 'Prove',
        title: 'Prove che sopravvivono al terminale',
        body: 'Ogni esecuzione lascia una cartella che puoi aprire: che cosa ha passato ogni passo, le risposte complete, i log e un file di risultati.',
        points: [
          'Ricevute di esecuzione e allegati completi per le risposte lunghe',
          'La prova che i processi annullati non ci sono più davvero',
          'Un pacchetto diagnostico da copiare con un clic',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Confronto',
    title: 'RigOne e gli altri modi di eseguire agenti di codice',
    lead: 'Esistono buoni strumenti per eseguire un agente, o molti fianco a fianco. RigOne serve quando il lavoro è una sequenza di passi che vuoi rieseguire.',
    caption: 'RigOne a confronto con quattro tipi di strumenti per eseguire agenti di codice',
    capability: 'Funzione',
    columns: ['CLI di agente da sola', 'App desktop per agenti in parallelo', 'Gestori di sessioni di terminale', 'Agenti di codice nel cloud'],
    examples: ['Claude Code, Codex CLI', 'ad es. Conductor', 'ad es. Claude Squad', 'ad es. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Sì', partial: 'In parte', no: 'No', unknown: 'Non indicato' },
    notStated: 'Non indicato pubblicamente',
    rows: {
      local: {
        criterion: 'Funziona sul tuo Mac e nella tua cartella',
        cells: ['', '', '', '', 'Gira nella sandbox del fornitore'],
      },
      mix: {
        criterion: 'Claude Code e Codex nello stesso flusso',
        cells: ['', 'Un fornitore per sessione', 'Fianco a fianco, non in un unico flusso', 'Fianco a fianco, non in un unico flusso', 'Un fornitore per servizio'],
      },
      graph: {
        criterion: 'Flusso a più passi salvato e rieseguibile',
        cells: ['Grafo visivo', 'Script, hook e subagenti', '', '', ''],
      },
      isolated: {
        criterion: 'Lavoro in parallelo in copie isolate del codice',
        cells: ['Uno spazio di lavoro per passo', 'Worktree gestiti da te', 'Un worktree per agente', 'Un worktree per agente', 'Una sandbox per attività'],
      },
      checks: {
        criterion: 'Controlli eseguiti dallo strumento, separati da ciò che afferma l’agente',
        cells: ['«Non è stato eseguito nulla» non è mai un successo', 'Con i tuoi hook', '', '', 'CI sulla pull request'],
      },
      budget: {
        criterion: 'Limite di spesa e di concorrenza per esecuzione',
        cells: ['', 'Solo limiti per sessione', '', '', 'Limiti del piano'],
      },
      platforms: {
        criterion: 'Piattaforme',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Browser'],
      },
      price: {
        criterion: 'Prezzo',
        cells: ['Gratis; usa il tuo piano Claude Code o Codex', 'Incluso nel piano del fornitore', 'Vedi il sito del prodotto', 'Gratis, open source', 'Incluso nel piano del fornitore'],
      },
    },
    footnoteHtml: 'Confronto per tipo di strumento, basato sulla documentazione pubblica, a ottobre 2026. I singoli prodotti sono diversi e cambiano in fretta. Hai trovato un errore? <a href="{issues}">Diccelo</a>.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Domande frequenti',
    leadHtml: 'Altro nella <a href="{docs}">documentazione</a>. Manca qualcosa? <a href="{issues}">Apri una issue</a>.',
    items: [
      {
        question: 'Che cosa serve per usare RigOne?',
        answer: 'Un Mac con Apple Silicon e macOS 13 o successivo, e almeno una CLI di agente installata e con accesso effettuato: Claude Code o Codex.',
      },
      {
        question: 'RigOne invia il mio codice da qualche parte?',
        answer: 'RigOne in sé gira sul tuo Mac e lavora nella tua cartella. Gli agenti che avvii sono Claude Code e Codex, quindi il codice che leggono va ai loro fornitori esattamente come se li eseguissi in un terminale.',
      },
      {
        question: 'Quanto costa?',
        answer: 'RigOne è gratis da scaricare e da usare. Le esecuzioni usano il tuo piano Claude Code o Codex, e puoi impostare il massimo che un’esecuzione può spendere prima che parta.',
      },
      {
        question: 'Un agente farà push sul mio repository?',
        answer: 'No. Ogni passo lavora nella propria copia del codice e il risultato aspetta su un ramo del tuo progetto. Non viene fatto nessun push e niente arriva sul tuo ramo finché non lo prendi tu.',
      },
      {
        question: 'Posso usare solo Claude Code, o solo Codex?',
        answer: 'Sì. Basta una CLI installata e con accesso effettuato. Combinarle è utile quando vuoi che un fornitore scriva e l’altro dia un secondo parere.',
      },
      {
        question: 'Esiste una versione per Windows, Linux o Intel?',
        answer: 'Non oggi. RigOne è fatto per macOS 13 o successivo su Apple Silicon.',
      },
      {
        question: 'Usavo Loadout. Che fine fanno i miei dati?',
        answer: 'Loadout è il nome precedente di RigOne. La versione 1.1.0 sposta la tua libreria da ~/.loadout a ~/.rig-one al primo avvio, e la cartella .loadout/ di ogni progetto in .rig-one/ quando lo apri. macOS vede RigOne come una nuova app, quindi chiede di nuovo i permessi.',
      },
    ],
  },
  cta: {
    title: 'Metti i tuoi agenti sulla stessa tela',
    lead: 'Gratis per i Mac con Apple Silicon. Firmato con Apple Developer ID e notarizzato da Apple.',
    download: 'Scarica per macOS',
    docs: 'Leggi la documentazione',
    compare: 'Come si confronta',
    note: 'Richiede Claude Code o Codex installato e con accesso effettuato.',
  },
  changelog: {
    eyebrow: 'Novità delle versioni',
    title: 'Che cosa è cambiato, versione per versione',
    lead: 'Ogni versione dice che cosa è cambiato, che cosa fare quando aggiorni e il checksum della build firmata. Le build precedenti alla 1.1.0 sono uscite con il nome Loadout.',
    download: 'Scarica l’ultima versione',
    github: 'Versioni su GitHub',
    latest: 'Ultima',
    englishNote: 'Le note di versione sono scritte in inglese.',
  },
  docs: {
    eyebrow: 'Documentazione',
    title: 'Usare RigOne',
    lead: 'Installalo, crea un flusso, eseguilo su un progetto e leggi che cosa è successo.',
    onThisPage: 'In questa pagina',
    englishNote: 'La documentazione è scritta in inglese.',
    helpHtml: 'Qualcosa qui non è chiaro o è sbagliato? <a href="{issues}">Apri una issue</a>.',
  },
  footer: {
    tagline: 'prima macOS · prima locale · il tuo codice',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Sito con licenza <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
