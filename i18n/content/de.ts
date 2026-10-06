import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — eine macOS-Leitstelle für Coding-Agenten',
      description: 'Bauen Sie einen Workflow für Claude Code und Codex auf einer Leinwand, lassen Sie ihn auf einem Projekt auf Ihrem Mac laufen und sehen Sie jedem Agenten bei der parallelen Arbeit zu. Kostenlos für Apple Silicon.',
    },
    features: {
      title: 'Funktionen — RigOne',
      description: 'Visuelle Workflows, echte parallele Läufe, wiederverwendbare Agenten, Prüfungen, die RigOne selbst ausführt, Arbeit auf einem eigenen Branch, Trigger und Belege, die das Terminal überleben.',
      breadcrumb: 'Funktionen',
    },
    docs: {
      title: 'Dokumentation — RigOne',
      description: 'RigOne installieren, den ersten Workflow bauen, ihn auf einem Projekt ausführen und die Ergebnisse lesen. Konzepte, Sicherheitsmodell, Dateien auf der Festplatte und Fehlerbehebung.',
      breadcrumb: 'Dokumentation',
    },
    compare: {
      title: 'RigOne im Vergleich mit anderen Wegen, Coding-Agenten auszuführen',
      description: 'Worin sich RigOne von einer Agenten-CLI allein, Desktop-Apps für parallele Agenten, Terminal-Sitzungsmanagern und Coding-Agenten in der Cloud unterscheidet — mit den Abwägungen.',
      breadcrumb: 'Vergleich',
    },
    changelog: {
      title: 'Änderungsprotokoll — RigOne',
      description: 'Jede RigOne-Version: was sich geändert hat, was beim Aktualisieren zu tun ist, und die Prüfsumme des signierten, notarisierten Builds.',
      breadcrumb: 'Änderungsprotokoll',
    },
    ogImageAlt: 'RigOne — ein Graph führt die Arbeit. Eine macOS-Leitstelle für Coding-Agenten.',
  },
  common: {
    skipToContent: 'Zum Inhalt springen',
    homeAria: 'RigOne Startseite',
    primaryNav: 'Hauptmenü',
    footerNav: 'Fußzeile',
    language: 'Sprache',
    englishOnly: 'Diese Seite ist auf Englisch verfasst.',
  },
  nav: {
    features: 'Funktionen',
    docs: 'Doku',
    compare: 'Vergleich',
    faq: 'FAQ',
    changelog: 'Änderungen',
    github: 'GitHub',
    issues: 'Problem melden',
    download: 'Download',
  },
  theme: {
    label: 'Darstellung',
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Version {version} ist da',
    titleStrong: 'Ein Graph',
    titleSoft: 'führt die Arbeit.',
    sub: 'RigOne ist eine native Leitstelle für Coding-Agenten. Beschreiben Sie einen Agenten einmal, setzen Sie ihn auf die Leinwand, verbinden Sie die Schritte und lassen Sie den Graphen auf einem Projekt auf Ihrem Mac laufen.',
    download: 'Für macOS laden',
    docsCta: 'Doku lesen',
    note: 'Kostenlos · macOS 13+ · signiert und notarisiert',
    illustrationLabel: 'Der Laufbildschirm: links der Plan eines Workflows, rechts, was die Agenten sagen.',
  },
  trust: {
    aria: 'Worauf Sie sich verlassen können',
    items: [
      'Läuft auf Ihrem Mac, in Ihrem Ordner',
      'Claude Code und Codex gleichberechtigt',
      'Nichts erreicht Ihren Branch, bevor Sie es übernehmen',
      'Signiert mit Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Warum RigOne',
    title: 'Der Graph entscheidet, nicht die Engine',
    lead: 'Reihenfolge, parallele Zweige, Wiederholungen und Checkpoints kommen aus dem gespeicherten Workflow. Keine Phase ist fest eingebaut, und kein Agent bewertet seine eigene Arbeit.',
    items: {
      graph: {
        title: 'Sichtbare Workflows',
        body: 'Agentenschritte, Prüfungen und Checkpoints auf einer Leinwand. Ein Pfeil bedeutet „läuft danach“ und sonst nichts.',
        link: 'Visuelle Workflows',
      },
      peers: {
        title: 'Zwei Anbieter, ein Lauf',
        body: 'Kombinieren Sie Claude Code und Codex im selben Workflow — einer schreibt, der andere gibt eine zweite Meinung ab.',
        link: 'Wiederverwendbare Agenten',
      },
      parallel: {
        title: 'Wirklich gleichzeitig',
        body: 'Schritte, die nicht voneinander abhängen, starten zusammen, bis zu dem von Ihnen gesetzten Limit.',
        link: 'Parallele Läufe',
      },
      checks: {
        title: 'Prüfungen statt Versprechen',
        body: 'Ein Agent kann „fertig“ sagen. Nur die Prüfungen, die RigOne ausführt, können sagen, dass die Tests bestanden sind.',
        link: 'Prüfungen',
      },
      branches: {
        title: 'Ihr Branch bleibt Ihrer',
        body: 'Jeder Schritt arbeitet in einer eigenen Kopie des Codes. Seine Änderungen warten auf einem Branch, bis Sie sie übernehmen.',
        link: 'Wohin Änderungen gehen',
      },
      evidence: {
        title: 'Belege im Nachhinein',
        body: 'Laufbelege, Übergaben und ein Diagnosepaket bleiben auf der Festplatte, wenn die Terminalausgabe längst weg ist.',
        link: 'Belege',
      },
    },
    seeAll: 'Alle Funktionen ansehen',
  },
  how: {
    eyebrow: 'So funktioniert es',
    title: 'Drei Schritte, und nur der dritte kostet Geld',
    lead: 'Sie bestimmen, was läuft, wie viel gleichzeitig und was es kosten darf.',
    steps: [
      {
        title: 'Einen Agenten schreiben',
        body: 'Eine Aufgabe, eine Anweisung. Wählen Sie Claude Code oder Codex, das Modell, den Aufwand und was er anfassen darf.',
      },
      {
        title: 'Agenten in eine Reihe stellen',
        body: 'Diese Reihe ist ein Workflow. Zweige, die nicht voneinander abhängen, laufen gleichzeitig.',
      },
      {
        title: 'Starten und zusehen',
        body: 'Richten Sie den Graphen auf einen Ordner auf diesem Mac. Antworten Sie, wenn ein Agent fragt; der Rest läuft weiter.',
      },
    ],
  },
  honest: {
    eyebrow: 'Gebaut, um ehrlich zu scheitern',
    title: 'Fehler sind Produktfehler, kein Terminalrauschen',
    lead: 'Was RigOne nicht stillschweigend tut.',
    items: {
      scopes: { title: 'Überlappende Schreibbereiche', body: 'werden abgelehnt, bevor der erste Prozess startet.' },
      cancel: { title: 'Ein Abbruch', body: 'beendet die ganze Prozessgruppe und prüft danach, dass sie tot ist.' },
      timeouts: { title: 'Zeitüberschreitungen', body: 'durchlaufen dasselbe überwachte Herunterfahren wie ein Abbruch.' },
      secrets: { title: 'Prompts und Geheimnisse', body: 'gehen über stdin, nie über Kommandozeilenargumente.' },
      env: { title: 'Umgebungen von Kindprozessen', body: 'werden aus einer ausdrücklichen Positivliste neu aufgebaut.' },
      unknown: { title: 'Unbekannte Anbieter-Ereignisse', body: 'werden aufgezeichnet und übergangen, statt den Lauf abstürzen zu lassen.' },
      green: { title: 'Ein grüner Exit-Code', body: 'ohne Nachweis, dass Tests gelaufen sind, gilt nicht als grüne Prüfung.' },
      files: { title: 'Dateien sind die Quelle der Wahrheit;', body: 'der SQLite-Index kann gelöscht und neu aufgebaut werden.' },
    },
  },
  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was ein Lauf braucht, in einem Fenster',
    lead: 'RigOne baut, startet und protokolliert Workflows für Coding-Agenten. Das macht jeder Teil heute.',
    items: {
      canvas: {
        eyebrow: 'Workflows',
        title: 'Visuelle Workflows',
        body: 'Bauen Sie einen Workflow auf einer Leinwand und speichern Sie ihn als Graph, den Sie erneut starten können. Ein Schritt kann ein Agent, eine Prüfung oder ein Checkpoint sein, an dem Sie entscheiden.',
        points: [
          'Ein Pfeil bedeutet „läuft danach“ — die Reihenfolge kommt aus dem Graphen',
          'Schleifen, bedingte Pfade und Wiederholungen mit Limit',
          'Ein Schritt mit mehreren eingehenden Pfeilen liest jede Übergabe, die er erhält',
          'Mehrere Kopien eines Schritts ausführen (×3), wenn Sie mehr als einen Versuch möchten',
        ],
      },
      parallel: {
        eyebrow: 'Ausführung',
        title: 'Echte parallele Läufe',
        body: 'Unabhängige Zweige überlappen sich in der Zeit, statt hinter einem einzigen Arbeiter zu warten.',
        points: [
          'Legen Sie fest, wie viele Agenten gleichzeitig arbeiten dürfen',
          'Legen Sie vor dem Start fest, wie viel ein Lauf höchstens ausgeben darf',
          'Modelle und Aufwandsstufen werden mit Ihrer installierten CLI abgeglichen, bevor ein Schritt startet',
        ],
      },
      run: {
        eyebrow: 'Laufbildschirm',
        title: 'Ein Lauf, den man lesen kann',
        body: 'Links der Plan, jede Karte nennt den Schritt, auf den sie wartet. Rechts, was jeder Agent gesagt hat, der Reihe nach, und die Frage, die den Lauf angehalten hat, dort angeheftet, wo Sie sie beantworten.',
        points: [
          'Fragen, gestartete Befehle, Ausgabe und Kosten bleiben zusammen',
          'Ergebnisse sagen, was passiert ist: fertig, fehlgeschlagen, angehalten oder nicht gelaufen',
          'Ein leitender Agent kann Dinge mit Ihnen besprechen — nur /run startet die Arbeit',
        ],
      },
      agents: {
        eyebrow: 'Agenten',
        title: 'Wiederverwendbare Agenten',
        body: 'Definieren Sie eine Rolle einmal und verwenden Sie sie in jedem Workflow. Die ganze Rolle — ihr Text, ihr Modell, ihr Dateizugriff — steht auf dem Bildschirm, wenn Sie sie öffnen.',
        points: [
          'Anbieter, Modell, Aufwand, Zeitlimit und ob er ins Web darf',
          'Dateizugriff ab „nur ansehen“ aufwärts',
          'Werkzeugserver (Verbindungen) und Fähigkeiten aus dem, was das Projekt hat',
          'Einrichtung aus einem anderen Projekt importieren, ohne Geheimnisse oder Verlauf zu kopieren',
        ],
      },
      knowledge: {
        eyebrow: 'Wissen',
        title: 'Wissen am Projekt',
        body: 'Notizen und Fähigkeiten liegen mit dem Projekt auf der Festplatte. Eine Notiz, die ein Agent vorschlägt, gelangt erst nach Ihrer Freigabe in einen künftigen Prompt.',
        points: [
          'Notizen gehen in jeden Prompt; Fähigkeiten werden genutzt, wenn sie zur Arbeit passen',
          'Benannte Kontext-Sets aus Text, Markdown, Bildern und PDFs',
          'Sehen, welchen Kontext ein Lauf wirklich benutzt hat',
        ],
      },
      checks: {
        eyebrow: 'Prüfungen',
        title: 'Prüfungen, die RigOne selbst ausführt',
        body: 'Wenn ein Schritt endet, führt RigOne die Prüfungen aus — es fragt nicht den Agenten, ob es geklappt hat. Was der Agent gesagt hat, was die Prüfungen gefunden haben und was Sie freigegeben haben, wird nie verwechselt.',
        points: [
          '„Nichts ist gelaufen“ ist ein eigenes Ergebnis, nie ein Bestehen',
          'Eine zweite Meinung von einem anderen Anbieter kann Bedenken anmelden, aber nie freigeben',
          'Derselbe Fehler zweimal beendet die Wiederholungen',
        ],
      },
      branches: {
        eyebrow: 'Arbeitsbereiche',
        title: 'Änderungen warten auf einem eigenen Branch',
        body: 'Jeder Schritt arbeitet in einer eigenen Kopie Ihres Codes, sodass sich Agenten nicht in die Quere kommen. Wenn der Lauf endet, wartet die Arbeit auf einem Branch in Ihrem Projekt.',
        points: [
          'Nichts wird gepusht',
          'Nichts erreicht Ihren eigenen Branch, bevor Sie es übernehmen',
          'Ein echter Konflikt nennt die Branches, auf denen die Arbeit liegt',
        ],
      },
      triggers: {
        eyebrow: 'Trigger',
        title: 'Trigger und Wiederherstellung',
        body: 'Starten Sie einen Workflow, wenn Ihnen ein Linear-Issue zugewiesen wird, geprüft alle 1, 5, 15 oder 60 Minuten. Unterbrochene Arbeit wird über denselben Startweg wiederhergestellt, nicht über eine zweite Engine.',
        points: [
          'Ein Issue startet einen Lauf, auch nach einem Neustart',
          'Der API-Schlüssel wird einmal eingegeben und nie wieder angezeigt',
          'Das Löschen eines Triggers bricht sichtbar ab, was gewartet hat',
        ],
      },
      lab: {
        eyebrow: 'Labor',
        title: 'Einen Agenten am eigenen Code testen',
        body: 'Wählen Sie einen Agenten, und RigOne entwirft Testfälle aus Ihrem Projekt, damit Sie sehen, ob eine Änderung an diesem Agenten die Arbeit verbessert hat.',
        points: [
          'Die Fälle kommen aus Ihrem Code, nicht aus einem allgemeinen Benchmark',
          'Einen Agenten vor und nach der Bearbeitung vergleichen',
        ],
      },
      evidence: {
        eyebrow: 'Belege',
        title: 'Belege, die das Terminal überleben',
        body: 'Jeder Lauf hinterlässt einen Ordner, den Sie öffnen können: was jeder Schritt übergeben hat, die vollständigen Antworten, Logs und eine Ergebnisdatei.',
        points: [
          'Laufbelege und vollständige Anhänge für lange Antworten',
          'Nachweis, dass abgebrochene Prozesse wirklich beendet sind',
          'Ein Diagnosepaket, das sich mit einem Klick kopieren lässt',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Vergleich',
    title: 'RigOne und die anderen Wege, Coding-Agenten auszuführen',
    lead: 'Es gibt gute Werkzeuge, um einen Agenten oder mehrere nebeneinander auszuführen. RigOne ist für Arbeit gedacht, die aus einer Folge von Schritten besteht, die Sie erneut ausführen möchten.',
    caption: 'RigOne im Vergleich mit vier Arten von Werkzeugen zum Ausführen von Coding-Agenten',
    capability: 'Fähigkeit',
    columns: ['Agenten-CLI allein', 'Desktop-Apps für parallele Agenten', 'Terminal-Sitzungsmanager', 'Coding-Agenten in der Cloud'],
    examples: ['Claude Code, Codex CLI', 'z. B. Conductor', 'z. B. Claude Squad', 'z. B. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Ja', partial: 'Teilweise', no: 'Nein', unknown: 'Nicht angegeben' },
    notStated: 'Nicht öffentlich angegeben',
    rows: {
      local: {
        criterion: 'Arbeitet auf Ihrem eigenen Mac und in Ihrem Ordner',
        cells: ['', '', '', '', 'Läuft in der Sandbox des Anbieters'],
      },
      mix: {
        criterion: 'Claude Code und Codex in einem Workflow',
        cells: ['', 'Ein Anbieter pro Sitzung', 'Nebeneinander, nicht in einem Ablauf', 'Nebeneinander, nicht in einem Ablauf', 'Ein Anbieter pro Dienst'],
      },
      graph: {
        criterion: 'Gespeicherter mehrstufiger Workflow, der erneut ausgeführt werden kann',
        cells: ['Visueller Graph', 'Skripte, Hooks und Subagenten', '', '', ''],
      },
      isolated: {
        criterion: 'Parallele Arbeit in isolierten Kopien des Codes',
        cells: ['Ein Arbeitsbereich pro Schritt', 'Selbst verwaltete Worktrees', 'Ein Worktree pro Agent', 'Ein Worktree pro Agent', 'Eine Sandbox pro Aufgabe'],
      },
      checks: {
        criterion: 'Prüfungen durch das Werkzeug, getrennt von der Aussage des Agenten',
        cells: ['„Nichts ist gelaufen“ ist nie ein Bestehen', 'Mit eigenen Hooks', '', '', 'CI im Pull Request'],
      },
      budget: {
        criterion: 'Ausgabenlimit und Parallelität pro Lauf',
        cells: ['', 'Nur Limits pro Sitzung', '', '', 'Limits des Tarifs'],
      },
      platforms: {
        criterion: 'Plattformen',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Browser'],
      },
      price: {
        criterion: 'Preis',
        cells: ['Kostenlos; nutzt Ihren Claude Code- oder Codex-Tarif', 'Im Tarif des Anbieters enthalten', 'Siehe Website des Produkts', 'Kostenlos, Open Source', 'Im Tarif des Anbieters enthalten'],
      },
    },
    footnoteHtml: 'Verglichen nach Art des Werkzeugs, anhand öffentlicher Dokumentation, im Oktober 2026. Einzelne Produkte unterscheiden sich und ändern sich schnell. Einen Fehler gefunden? <a href="{issues}">Sagen Sie es uns</a>.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Häufige Fragen',
    leadHtml: 'Mehr in der <a href="{docs}">Dokumentation</a>. Fehlt etwas? <a href="{issues}">Issue eröffnen</a>.',
    items: [
      {
        question: 'Was brauche ich, um RigOne auszuführen?',
        answer: 'Einen Mac mit Apple Silicon und macOS 13 oder neuer sowie mindestens eine installierte und angemeldete Agenten-CLI: Claude Code oder Codex.',
      },
      {
        question: 'Sendet RigOne meinen Code irgendwohin?',
        answer: 'RigOne selbst läuft auf Ihrem Mac und arbeitet in Ihrem Ordner. Die gestarteten Agenten sind Claude Code und Codex, daher geht der Code, den sie lesen, an deren Anbieter — genau so, als würden Sie sie im Terminal ausführen.',
      },
      {
        question: 'Was kostet es?',
        answer: 'RigOne ist kostenlos herunterzuladen und zu nutzen. Läufe nutzen Ihren eigenen Claude Code- oder Codex-Tarif, und Sie können vor dem Start festlegen, wie viel ein Lauf höchstens ausgeben darf.',
      },
      {
        question: 'Pusht ein Agent in mein Repository?',
        answer: 'Nein. Jeder Schritt arbeitet in einer eigenen Kopie des Codes, und das Ergebnis wartet auf einem Branch in Ihrem Projekt. Nichts wird gepusht, und nichts erreicht Ihren eigenen Branch, bevor Sie es übernehmen.',
      },
      {
        question: 'Kann ich nur Claude Code oder nur Codex verwenden?',
        answer: 'Ja. Eine installierte und angemeldete CLI genügt. Beide zu kombinieren ist nützlich, wenn ein Anbieter schreiben und der andere eine zweite Meinung abgeben soll.',
      },
      {
        question: 'Gibt es eine Version für Windows, Linux oder Intel?',
        answer: 'Derzeit nicht. RigOne ist für macOS 13 oder neuer auf Apple Silicon gebaut.',
      },
      {
        question: 'Ich habe Loadout benutzt. Was passiert mit meinen Daten?',
        answer: 'Loadout ist der frühere Name von RigOne. Version 1.1.0 verschiebt Ihre Bibliothek beim ersten Start von ~/.loadout nach ~/.rig-one und das .loadout/ jedes Projektordners nach .rig-one/, sobald Sie ihn öffnen. macOS sieht RigOne als neue App und fragt deshalb erneut nach Berechtigungen.',
      },
    ],
  },
  cta: {
    title: 'Bringen Sie Ihre Agenten auf eine Leinwand',
    lead: 'Kostenlos für Macs mit Apple Silicon. Signiert mit Apple Developer ID und von Apple notarisiert.',
    download: 'Für macOS laden',
    docs: 'Doku lesen',
    compare: 'Im Vergleich',
    note: 'Benötigt installiertes und angemeldetes Claude Code oder Codex.',
  },
  changelog: {
    eyebrow: 'Änderungsprotokoll',
    title: 'Was sich geändert hat, Version für Version',
    lead: 'Jede Version nennt, was sich geändert hat, was beim Aktualisieren zu tun ist, und die Prüfsumme des signierten Builds. Builds vor 1.1.0 erschienen unter dem Namen Loadout.',
    download: 'Neueste Version laden',
    github: 'Releases auf GitHub',
    latest: 'Neueste',
    englishNote: 'Die Versionshinweise sind auf Englisch verfasst.',
  },
  docs: {
    eyebrow: 'Dokumentation',
    title: 'RigOne verwenden',
    lead: 'Installieren, einen Workflow bauen, ihn auf einem Projekt ausführen und nachlesen, was passiert ist.',
    onThisPage: 'Auf dieser Seite',
    englishNote: 'Die Dokumentation ist auf Englisch verfasst.',
    helpHtml: 'Etwas unklar oder falsch? <a href="{issues}">Issue eröffnen</a>.',
  },
  footer: {
    tagline: 'macOS zuerst · lokal zuerst · Ihr eigener Code',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Website unter <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
