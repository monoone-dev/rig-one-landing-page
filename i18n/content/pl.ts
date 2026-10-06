import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — sterownia agentów kodujących dla macOS',
      description: 'Zbuduj workflow dla Claude Code i Codex na jednej kanwie, uruchom go na projekcie na swoim Macu i patrz, jak każdy agent pracuje równolegle. Za darmo na Apple Silicon.',
    },
    features: {
      title: 'Możliwości — RigOne',
      description: 'Wizualne workflow, prawdziwie równoległe biegi, agenci do wielokrotnego użytku, sprawdzenia uruchamiane przez samo RigOne, praca na osobnej gałęzi, wyzwalacze i ślad, który przeżywa terminal.',
      breadcrumb: 'Możliwości',
    },
    docs: {
      title: 'Dokumentacja — RigOne',
      description: 'Zainstaluj RigOne, zbuduj pierwszy workflow, uruchom go na projekcie i przeczytaj wyniki. Pojęcia, model bezpieczeństwa, pliki na dysku i rozwiązywanie problemów.',
      breadcrumb: 'Dokumentacja',
    },
    compare: {
      title: 'RigOne w porównaniu z innymi sposobami uruchamiania agentów kodujących',
      description: 'Czym RigOne różni się od samego CLI agenta, aplikacji desktopowych do równoległych agentów, menedżerów sesji terminala i agentów kodujących w chmurze — razem z kompromisami.',
      breadcrumb: 'Porównanie',
    },
    changelog: {
      title: 'Lista zmian — RigOne',
      description: 'Każde wydanie RigOne: co się zmieniło, co zrobić przy aktualizacji i suma kontrolna podpisanej, notaryzowanej paczki.',
      breadcrumb: 'Lista zmian',
    },
    ogImageAlt: 'RigOne — jeden graf trzyma całą pracę. Sterownia agentów kodujących dla macOS.',
  },
  common: {
    skipToContent: 'Przejdź do treści',
    homeAria: 'RigOne — strona główna',
    primaryNav: 'Menu główne',
    footerNav: 'Stopka',
    language: 'Język',
    englishOnly: 'Ta strona jest napisana po angielsku.',
  },
  nav: {
    features: 'Możliwości',
    docs: 'Dokumentacja',
    compare: 'Porównanie',
    faq: 'FAQ',
    changelog: 'Lista zmian',
    github: 'GitHub',
    issues: 'Zgłoś problem',
    download: 'Pobierz',
  },
  theme: {
    label: 'Motyw',
    light: 'Jasny',
    dark: 'Ciemny',
    system: 'Systemowy',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Wersja {version} już jest',
    titleStrong: 'Jeden graf',
    titleSoft: 'trzyma całą pracę.',
    sub: 'RigOne to natywna sterownia agentów kodujących. Opisz agenta raz, postaw go na kanwie, połącz kroki i uruchom graf na projekcie na swoim Macu.',
    download: 'Pobierz na macOS',
    docsCta: 'Przeczytaj dokumentację',
    note: 'Za darmo · macOS 13+ · podpisane i notaryzowane',
    illustrationLabel: 'Ekran biegu: plan workflow po lewej, wypowiedzi agentów po prawej.',
  },
  trust: {
    aria: 'Na czym można polegać',
    items: [
      'Działa na twoim Macu, w twoim folderze',
      'Claude Code i Codex jako równorzędni agenci',
      'Nic nie trafia na twoją gałąź, dopóki tego nie weźmiesz',
      'Podpisane certyfikatem Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Dlaczego RigOne',
    title: 'Decyduje graf, nie silnik',
    lead: 'Kolejność, równoległe gałęzie, ponowienia i punkty kontrolne wynikają z zapisanego workflow. Żaden etap nie jest zaszyty na sztywno i żaden agent nie ocenia własnej pracy.',
    items: {
      graph: {
        title: 'Workflow, które widać',
        body: 'Kroki agentów, sprawdzenia i punkty kontrolne na jednej kanwie. Strzałka oznacza „uruchom po”, i nic więcej.',
        link: 'Wizualne workflow',
      },
      peers: {
        title: 'Dwóch dostawców, jeden bieg',
        body: 'Łącz Claude Code i Codex w jednym workflow — jeden pisze, drugi daje drugą opinię.',
        link: 'Agenci do wielokrotnego użytku',
      },
      parallel: {
        title: 'Naprawdę w tym samym czasie',
        body: 'Kroki, które od siebie nie zależą, startują razem, do ustawionego limitu.',
        link: 'Równoległe biegi',
      },
      checks: {
        title: 'Sprawdzenia, nie obietnice',
        body: 'Agent może powiedzieć „gotowe”. Tylko sprawdzenia uruchomione przez RigOne mogą powiedzieć, że testy przeszły.',
        link: 'Sprawdzenia',
      },
      branches: {
        title: 'Twoja gałąź zostaje twoja',
        body: 'Każdy krok pracuje na własnej kopii kodu. Zmiany czekają na gałęzi, dopóki ich nie weźmiesz.',
        link: 'Gdzie trafiają zmiany',
      },
      evidence: {
        title: 'Ślad po fakcie',
        body: 'Rachunki, przekazania i paczka diagnostyczna zostają na dysku, kiedy wyjście z terminala już zniknęło.',
        link: 'Ślad',
      },
    },
    seeAll: 'Zobacz wszystkie możliwości',
  },
  how: {
    eyebrow: 'Jak to działa',
    title: 'Trzy kroki, a pieniądze wydaje dopiero trzeci',
    lead: 'To ty decydujesz, co się uruchamia, ile naraz i ile może to kosztować.',
    steps: [
      {
        title: 'Napisz agenta',
        body: 'Jedna praca, jedna instrukcja. Wybierz Claude Code lub Codex, model, poziom wysiłku i to, czego wolno mu dotknąć.',
      },
      {
        title: 'Ustaw agentów w rząd',
        body: 'Ten rząd to workflow. Gałęzie, które od siebie nie zależą, idą w tym samym czasie.',
      },
      {
        title: 'Uruchom i patrz',
        body: 'Wskaż grafowi folder na tym Macu. Odpowiedz, kiedy agent zapyta; reszta idzie dalej.',
      },
    ],
  },
  honest: {
    eyebrow: 'Zbudowane tak, żeby padać uczciwie',
    title: 'Awarie to awarie produktu, nie szum w terminalu',
    lead: 'Czego RigOne nie robi po cichu.',
    items: {
      scopes: { title: 'Nachodzące zakresy zapisu', body: 'są odrzucane, zanim ruszy pierwszy proces.' },
      cancel: { title: 'Anulowanie', body: 'kończy całą grupę procesów, a potem sprawdza, że nie żyje.' },
      timeouts: { title: 'Przekroczenia czasu', body: 'przechodzą przez to samo nadzorowane zamykanie co anulowanie.' },
      secrets: { title: 'Prompty i sekrety', body: 'jadą przez stdin, nigdy przez argumenty wiersza poleceń.' },
      env: { title: 'Środowiska procesów potomnych', body: 'są budowane od nowa z jawnej listy dozwolonych zmiennych.' },
      unknown: { title: 'Nieznane zdarzenia od dostawcy', body: 'są zapisywane i pomijane, zamiast wywracać bieg.' },
      green: { title: 'Zielony kod wyjścia', body: 'bez dowodu, że testy się wykonały, nie jest uznawany za zielone sprawdzenie.' },
      files: { title: 'Pliki są źródłem prawdy;', body: 'indeks SQLite można usunąć i zbudować od nowa.' },
    },
  },
  features: {
    eyebrow: 'Możliwości',
    title: 'Wszystko, czego potrzebuje bieg, w jednym oknie',
    lead: 'RigOne buduje, uruchamia i zapisuje workflow dla agentów kodujących. Oto, co dziś robi każda część.',
    items: {
      canvas: {
        eyebrow: 'Workflow',
        title: 'Wizualne workflow',
        body: 'Zbuduj workflow na kanwie i zapisz go jako graf, który można uruchomić ponownie. Krok może być agentem, sprawdzeniem albo punktem kontrolnym, w którym decydujesz ty.',
        points: [
          'Strzałka oznacza „uruchom po” — kolejność wynika z grafu',
          'Pętle, ścieżki warunkowe i ponowienia z limitem',
          'Krok z kilkoma wchodzącymi strzałkami czyta każde otrzymane przekazanie',
          'Uruchom kilka kopii jednego kroku (×3), gdy potrzeba więcej niż jednego podejścia',
        ],
      },
      parallel: {
        eyebrow: 'Wykonanie',
        title: 'Prawdziwie równoległe biegi',
        body: 'Niezależne gałęzie nakładają się w czasie, zamiast czekać w kolejce do jednego wykonawcy.',
        points: [
          'Wybierz, ilu agentów może pracować naraz',
          'Ustaw, ile najwyżej może wydać bieg, zanim wystartuje',
          'Modele i poziomy wysiłku są sprawdzane z zainstalowanym CLI, zanim ruszy jakikolwiek krok',
        ],
      },
      run: {
        eyebrow: 'Ekran biegu',
        title: 'Bieg, który da się czytać',
        body: 'Plan po lewej, a na każdej karcie krok, na który czeka. Po prawej wypowiedzi wszystkich agentów po kolei, a pytanie, które zatrzymało bieg, przypięte tam, gdzie na nie odpowiesz.',
        points: [
          'Pytania, uruchomione komendy, wyjście i koszty są w jednym miejscu',
          'Wyniki mówią, co się stało: gotowe, nieudane, zatrzymane lub nieuruchomione',
          'Agent prowadzący może coś z tobą omówić — pracę rozpoczyna tylko /run',
        ],
      },
      agents: {
        eyebrow: 'Agenci',
        title: 'Agenci do wielokrotnego użytku',
        body: 'Opisz rolę raz i używaj jej w każdym workflow. Cała rola — jej słowa, model i dostęp do plików — jest na ekranie, gdy ją otworzysz.',
        points: [
          'Dostawca, model, poziom wysiłku, limit czasu i to, czy może sięgać do sieci',
          'Dostęp do plików od „tylko patrzenie” w górę',
          'Serwery narzędzi (połączenia) i umiejętności wybierane spośród tych, które ma projekt',
          'Import ustawień z innego projektu bez kopiowania sekretów i historii',
        ],
      },
      knowledge: {
        eyebrow: 'Wiedza',
        title: 'Wiedza przypisana do projektu',
        body: 'Notatki i umiejętności leżą na dysku razem z projektem. Notatka zaproponowana przez agenta trafia do przyszłego promptu dopiero po zatwierdzeniu.',
        points: [
          'Notatki trafiają do każdego promptu; umiejętności są używane, gdy pasują do pracy',
          'Nazwane zestawy kontekstu z tekstu, Markdown, obrazów i PDF',
          'Zobacz, z jakiego kontekstu bieg naprawdę skorzystał',
        ],
      },
      checks: {
        eyebrow: 'Sprawdzenia',
        title: 'Sprawdzenia uruchamiane przez samo RigOne',
        body: 'Gdy krok się kończy, RigOne uruchamia sprawdzenia — nie pyta agenta, czy się udało. To, co powiedział agent, co wykazały sprawdzenia i co zostało zatwierdzone, nigdy się nie miesza.',
        points: [
          '„Nic się nie wykonało” to osobny wynik, nigdy zaliczenie',
          'Druga opinia od innego dostawcy może zgłosić zastrzeżenia, ale nigdy nie zatwierdza',
          'Ten sam błąd dwa razy zatrzymuje ponowienia',
        ],
      },
      branches: {
        eyebrow: 'Przestrzenie robocze',
        title: 'Zmiany czekają na własnej gałęzi',
        body: 'Każdy krok pracuje na własnej kopii kodu, więc agenci nie wchodzą sobie w drogę. Gdy bieg się kończy, praca czeka na gałęzi w projekcie.',
        points: [
          'Nic nie jest wypychane',
          'Nic nie trafia na twoją gałąź, dopóki tego nie weźmiesz',
          'Prawdziwy konflikt podaje gałęzie, na których zachowano pracę',
        ],
      },
      triggers: {
        eyebrow: 'Wyzwalacze',
        title: 'Wyzwalacze i odzyskiwanie',
        body: 'Uruchom workflow, gdy dostaniesz przypisane zgłoszenie w Linear, sprawdzane co 1, 5, 15 lub 60 minut. Przerwana praca jest odzyskiwana tą samą ścieżką startu, nie drugim silnikiem.',
        points: [
          'Jedno zgłoszenie uruchamia jeden bieg, nawet po restarcie',
          'Klucz API wpisuje się raz i nigdy więcej nie jest pokazywany',
          'Usunięcie wyzwalacza widocznie anuluje to, co czekało',
        ],
      },
      lab: {
        eyebrow: 'Laboratorium',
        title: 'Wypróbuj agenta na własnym kodzie',
        body: 'Wybierz agenta, a RigOne przygotuje przypadki testowe z twojego projektu, żeby było widać, czy zmiana w tym agencie poprawiła pracę.',
        points: [
          'Przypadki pochodzą z twojego kodu, nie z ogólnego benchmarku',
          'Porównaj agenta przed edycją i po niej',
        ],
      },
      evidence: {
        eyebrow: 'Ślad',
        title: 'Ślad, który przeżywa terminal',
        body: 'Każdy bieg zostawia folder, który można otworzyć: co przekazał każdy krok, pełne odpowiedzi, logi i plik z wynikami.',
        points: [
          'Rachunki biegów i pełne załączniki przy długich odpowiedziach',
          'Dowód, że anulowane procesy naprawdę zniknęły',
          'Paczka diagnostyczna do skopiowania jednym kliknięciem',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Porównanie',
    title: 'RigOne i inne sposoby uruchamiania agentów kodujących',
    lead: 'Są dobre narzędzia do uruchamiania jednego agenta albo wielu obok siebie. RigOne jest na sytuacje, gdy praca to ciąg kroków, który chcesz uruchamiać ponownie.',
    caption: 'RigOne w porównaniu z czterema rodzajami narzędzi do uruchamiania agentów kodujących',
    capability: 'Możliwość',
    columns: ['Samo CLI agenta', 'Aplikacje desktopowe do równoległych agentów', 'Menedżery sesji terminala', 'Agenci kodujący w chmurze'],
    examples: ['Claude Code, Codex CLI', 'np. Conductor', 'np. Claude Squad', 'np. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Tak', partial: 'Częściowo', no: 'Nie', unknown: 'Nie podano' },
    notStated: 'Nie podano publicznie',
    rows: {
      local: {
        criterion: 'Działa na twoim Macu i w twoim folderze',
        cells: ['', '', '', '', 'Działa w piaskownicy dostawcy'],
      },
      mix: {
        criterion: 'Claude Code i Codex w jednym workflow',
        cells: ['', 'Jeden dostawca na sesję', 'Obok siebie, nie w jednym przepływie', 'Obok siebie, nie w jednym przepływie', 'Jeden dostawca na usługę'],
      },
      graph: {
        criterion: 'Zapisany wieloetapowy workflow do ponownego uruchomienia',
        cells: ['Wizualny graf', 'Skrypty, hooki i subagenci', '', '', ''],
      },
      isolated: {
        criterion: 'Równoległa praca na odizolowanych kopiach kodu',
        cells: ['Jedna przestrzeń robocza na krok', 'Worktree zarządzane samodzielnie', 'Jedno worktree na agenta', 'Jedno worktree na agenta', 'Jedna piaskownica na zadanie'],
      },
      checks: {
        criterion: 'Sprawdzenia uruchamiane przez narzędzie, niezależnie od deklaracji agenta',
        cells: ['„Nic się nie wykonało” nigdy nie jest zaliczeniem', 'Z własnymi hookami', '', '', 'CI na pull requeście'],
      },
      budget: {
        criterion: 'Limit wydatków i współbieżności na bieg',
        cells: ['', 'Tylko limity na sesję', '', '', 'Limity planu'],
      },
      platforms: {
        criterion: 'Platformy',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Przeglądarka'],
      },
      price: {
        criterion: 'Cena',
        cells: ['Za darmo; korzysta z twojego planu Claude Code lub Codex', 'W ramach planu dostawcy', 'Zobacz stronę produktu', 'Za darmo, open source', 'W ramach planu dostawcy'],
      },
    },
    footnoteHtml: 'Porównanie według rodzaju narzędzia, na podstawie publicznej dokumentacji, w październiku 2026. Poszczególne produkty się różnią i szybko się zmieniają. Widzisz błąd? <a href="{issues}">Daj nam znać</a>.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Częste pytania',
    leadHtml: 'Więcej w <a href="{docs}">dokumentacji</a>. Czegoś brakuje? <a href="{issues}">Zgłoś problem</a>.',
    items: [
      {
        question: 'Czego potrzeba, żeby uruchomić RigOne?',
        answer: 'Maca z Apple Silicon i macOS 13 lub nowszym oraz co najmniej jednego zainstalowanego i zalogowanego CLI agenta: Claude Code lub Codex.',
      },
      {
        question: 'Czy RigOne gdzieś wysyła mój kod?',
        answer: 'Samo RigOne działa na twoim Macu i pracuje w twoim folderze. Uruchamiani agenci to Claude Code i Codex, więc kod, który czytają, trafia do ich dostawców dokładnie tak, jak przy uruchomieniu ich w terminalu.',
      },
      {
        question: 'Ile to kosztuje?',
        answer: 'RigOne można pobrać i używać za darmo. Biegi korzystają z twojego planu Claude Code lub Codex, a przed startem można ustawić, ile najwyżej może wydać bieg.',
      },
      {
        question: 'Czy agent wypchnie coś do mojego repozytorium?',
        answer: 'Nie. Każdy krok pracuje na własnej kopii kodu, a wynik czeka na gałęzi w projekcie. Nic nie jest wypychane i nic nie trafia na twoją gałąź, dopóki tego nie weźmiesz.',
      },
      {
        question: 'Czy można używać tylko Claude Code albo tylko Codex?',
        answer: 'Tak. Wystarczy jedno zainstalowane i zalogowane CLI. Oba naraz przydają się, gdy jeden dostawca ma pisać, a drugi dawać drugą opinię.',
      },
      {
        question: 'Czy jest wersja na Windows, Linux albo Intel?',
        answer: 'Obecnie nie. RigOne powstało dla macOS 13 lub nowszego na Apple Silicon.',
      },
      {
        question: 'Korzystam z Loadout. Co z moimi danymi?',
        answer: 'Loadout to wcześniejsza nazwa RigOne. Wersja 1.1.0 przenosi bibliotekę z ~/.loadout do ~/.rig-one przy pierwszym uruchomieniu, a .loadout/ w każdym folderze projektu do .rig-one/ przy jego otwarciu. macOS widzi RigOne jako nową aplikację, więc ponownie prosi o uprawnienia.',
      },
    ],
  },
  cta: {
    title: 'Postaw swoich agentów na jednej kanwie',
    lead: 'Za darmo na Macach z Apple Silicon. Podpisane certyfikatem Apple Developer ID i notaryzowane przez Apple.',
    download: 'Pobierz na macOS',
    docs: 'Przeczytaj dokumentację',
    compare: 'Jak wypada w porównaniu',
    note: 'Wymaga zainstalowanego i zalogowanego Claude Code lub Codex.',
  },
  changelog: {
    eyebrow: 'Lista zmian',
    title: 'Co się zmieniło, wydanie po wydaniu',
    lead: 'Każde wydanie mówi, co się zmieniło, co zrobić przy aktualizacji, i podaje sumę kontrolną podpisanej paczki. Wersje przed 1.1.0 wychodziły pod nazwą Loadout.',
    download: 'Pobierz najnowszą wersję',
    github: 'Wydania na GitHubie',
    latest: 'Najnowsza',
    englishNote: 'Opisy wydań są napisane po angielsku.',
  },
  docs: {
    eyebrow: 'Dokumentacja',
    title: 'Jak korzystać z RigOne',
    lead: 'Zainstaluj, zbuduj workflow, uruchom go na projekcie i przeczytaj, co się stało.',
    onThisPage: 'Na tej stronie',
    englishNote: 'Dokumentacja jest napisana po angielsku.',
    helpHtml: 'Coś tu jest niejasne lub błędne? <a href="{issues}">Zgłoś problem</a>.',
  },
  footer: {
    tagline: 'najpierw macOS · najpierw lokalnie · twój własny kod',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Strona na licencji <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
