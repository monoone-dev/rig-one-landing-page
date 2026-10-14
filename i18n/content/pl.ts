import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — sterownia agentów kodujących dla macOS',
      description: 'Zbuduj workflow dla Claude Code i Codex na jednej kanwie, uruchom go na projekcie na swoim Macu i patrz, jak każdy agent pracuje równolegle. Za darmo na Apple Silicon.',
    },
    features: {
      title: 'Możliwości — RigOne',
      description: 'Wizualne workflow, prawdziwie równoległe biegi, cele w trybie Auto, agenci do wielokrotnego użytku, sprawdzenia uruchamiane przez samo RigOne, praca na osobnej gałęzi, wspólne tablice, wyzwalacze i ślad, który przeżywa terminal.',
      breadcrumb: 'Możliwości',
    },
    docs: {
      title: 'Dokumentacja — RigOne',
      description: 'Zainstaluj RigOne, zbuduj pierwszy workflow, uruchom go na projekcie i przeczytaj wyniki. Pojęcia, model bezpieczeństwa, pliki na dysku i rozwiązywanie problemów.',
      breadcrumb: 'Dokumentacja',
    },
    compare: {
      title: 'RigOne a Superset, Conductor, Nimbalyst, Codex i Cursor',
      description: 'Jak RigOne wypada na tle Superset, Conductor, Nimbalyst, aplikacji OpenAI Codex i Cursor Cloud Agents: lokalne biegi, Claude Code i Codex w jednym workflow, zapisane workflow, sprawdzenia i koszty — razem z kompromisami.',
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
    audience: 'Dla deweloperów, którzy już używają Claude Code lub Codex',
    titleStrong: 'Prowadź agentów kodujących jak zespół,',
    titleSoft: 'a nie terminal po terminalu.',
    sub: 'RigOne to darmowa aplikacja na Maca, która zamienia Claude Code i Codex w workflow do ponownego uruchamiania: kroki równolegle, każdy na własnej kopii kodu, ze sprawdzeniami, które RigOne uruchamia samo, zanim cokolwiek trafi na twoją gałąź.',
    problemsLabel: 'Co RigOne naprawia',
    problems: [
      { problem: 'Żonglowanie terminalami', answer: 'Jedno okno planuje, uruchamia i pokazuje każdego agenta.' },
      { problem: 'Agenci w jednym checkoucie', answer: 'Każdy krok pracuje na własnej kopii; wynik czeka na gałęzi.' },
      { problem: '„Gotowe”, któremu nie ufasz', answer: 'Sprawdzenia uruchamia RigOne, nie agent.' },
    ],
    download: 'Pobierz na macOS',
    docsCta: 'Przeczytaj dokumentację',
    note: 'Za darmo · macOS 13+ · podpisane i notaryzowane',
    chips: ['Sprawdzenia uruchamia RigOne', '3 agentów naraz', 'Nic nie wypchnięte'],
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
    lead: 'To ty decydujesz, co się uruchamia, ile naraz i kiedy ostrzec o kosztach.',
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
  screens: {
    eyebrow: 'Ekrany',
    title: 'Zobacz, zanim pobierzesz',
    lead: 'Aplikacja taka, jaka jest dziś, w domyślnym wyglądzie Minimalist. Każdy ekran działa w jasnym i ciemnym trybie.',
    label: 'Ekrany aplikacji',
    items: {
      run: {
        tab: 'Run',
        title: 'Uruchom workflow albo najpierw go omów',
        body: 'Plan po lewej, rozmowa z Leadem po prawej. Ustaw, ilu agentów może pracować naraz i kiedy ostrzec o kosztach, a potem naciśnij Run workflow.',
        alt: 'Ekran Run w trybie ciemnym: czterokrokowy plan po lewej i pasek poleceń z /run, /ask i /stop na dole.',
      },
      agents: {
        tab: 'Agents',
        title: 'Cała rola na jednym ekranie',
        body: 'Jej instrukcje, CLI, model i wysiłek, z jakimi działa, czy może zmieniać pliki i sięgać do sieci, oraz kiedy się poddaje.',
        alt: 'Ekran Agents w trybie ciemnym: lista czterech ról obok roli Scout, która działa z Claude Code.',
      },
      workflows: {
        tab: 'Workflows',
        title: 'Workflow, które uruchamiasz znowu',
        body: 'Każdy zapisany workflow z krokami i agentami. Ten uruchamiany najczęściej zajmuje całą szerokość.',
        alt: 'Ekran Workflows w trybie jasnym: Fix a bug na górze, Review a pull request i Ship a feature pod nim.',
      },
      settings: {
        tab: 'Settings',
        title: 'Ustawienia we własnym oknie',
        body: 'Kategorie dla pracy, konta i aplikacji. Wybierz wygląd Minimalist albo Studio, w trybie jasnym, ciemnym lub zgodnym z macOS.',
        alt: 'Settings → Appearance w trybie jasnym: motywy Minimalist i Studio oraz System, Light albo Dark.',
      },
    },
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
          'Ostrzeżenie, gdy bieg dojdzie do ustawionej kwoty',
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
      auto: {
        eyebrow: 'Auto',
        title: 'Od jednego zdania do sprawdzonego wyniku',
        body: 'Daj Leadowi cel. Auto dobiera potrzebne role i umiejętności, buduje zwykłe workflow dla każdej części i działa, aż sprawdzenia i przeglądy potwierdzą pracę. O tym, czy cel jest sprawdzony, decyduje RigOne, nie Lead.',
        points: [
          'Każda decyzja, która czeka na ciebie, jest na jednej liście: Needs you',
          'Przegląd wyglądu: zaakceptuj zrzuty ekranu testera albo kliknij miejsce i napisz, co zmienić',
          'Przeczekuje przeciążonego dostawcę albo limit użycia i pracuje dalej',
          'Skip permissions włącza albo wyłącza pełny dostęp dla całego biegu Auto',
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
      boards: {
        eyebrow: 'Boards',
        title: 'Wspólne tablice, szyfrowane na twoim Macu',
        body: 'Zadania, komentarze i członkowie na tablicy Kanban albo ze sprintami. Uruchom zadanie jako workflow albo cel Auto w folderze na tym Macu, a postęp zobaczy na tablicy każdy członek.',
        points: [
          'Szyfrowane i podpisywane na twoim Macu; serwer przekazuje tylko szyfrogram',
          'Zapraszaj członków jako Editor albo Viewer i zatwierdzaj każde nowe urządzenie',
          'Działa offline i wysyła zmiany, gdy wróci połączenie',
          'Jedyna część RigOne, która wymaga konta MonoOne',
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
    title: 'RigOne na tle Superset, Conductor, Nimbalyst, Codex i Cursor',
    lead: 'Kilka dobrych narzędzi uruchamia agentów kodujących obok siebie. RigOne jest na sytuacje, gdy praca to ciąg kroków, który chcesz uruchamiać ponownie, ze sprawdzeniami, które uruchamia samo.',
    caption: 'RigOne w porównaniu z Superset, Conductor, Nimbalyst, aplikacją OpenAI Codex i Cursor Cloud Agents',
    capability: 'Możliwość',
    examples: ['Aplikacja desktopowa, kod dostępny', 'Aplikacja na Maca', 'Aplikacja desktopowa, licencja MIT', 'Aplikacja desktopowa OpenAI', 'Agenci w chmurze w Cursorze'],
    labels: { yes: 'Tak', partial: 'Częściowo', no: 'Nie', unknown: 'Nie podano' },
    notStated: 'Nie podano publicznie',
    rows: {
      local: {
        criterion: 'Działa na twoim Macu i w twoim folderze',
        cells: ['', 'Domyślnie lokalnie', 'Przestrzenie w chmurze w Pro', 'Aplikacja desktopowa; synchronizacja dla zespołów', 'Plus Codex Cloud', 'Tylko maszyny w chmurze'],
      },
      mix: {
        criterion: 'Claude Code i Codex w jednym workflow',
        cells: ['', 'Obok siebie, jeden agent na przestrzeń', 'Obok siebie, jeden agent na przestrzeń', 'Równoległe sesje, po jednym agencie', 'Tylko Codex', 'Własny agent Cursora'],
      },
      graph: {
        criterion: 'Zapisany wieloetapowy workflow do ponownego uruchomienia',
        cells: ['Wizualny graf', 'Presety i skrypty; automatyzacje w Pro', 'Skrypty setup i run', 'Polecenia slash', 'Zaplanowane automatyzacje', ''],
      },
      isolated: {
        criterion: 'Równoległa praca na odizolowanych kopiach kodu',
        cells: ['Jedna przestrzeń robocza na krok', 'Jedno worktree na przestrzeń', 'Jedna przestrzeń na zadanie', 'Opcjonalne worktree na sesję', 'Worktree', 'Jedna maszyna na agenta'],
      },
      checks: {
        criterion: 'Sprawdzenia uruchamiane przez narzędzie, niezależnie od deklaracji agenta',
        cells: ['„Nic się nie wykonało” nigdy nie jest zaliczeniem', 'Skrypty setup i run', 'Pokazuje status CI i pull requestu', '', 'Skrypty setup', 'Agent sam testuje swoją pracę'],
      },
      budget: {
        criterion: 'Ostrzeżenie o kosztach i współbieżność na bieg',
        cells: ['Ostrzeżenie na bieg', '', '', '', 'Limity planu', 'Limit wydatków, bez limitu współbieżności'],
      },
      boards: {
        criterion: 'Wspólna tablica zadań i tracker zgłoszeń',
        cells: ['Szyfrowane tablice, wyzwalacze Linear', 'Linear i Slack w Pro', 'Zgłoszenia z Linear i GitHuba', 'Kanban sesji', 'Linear i GitHub', 'Linear, GitHub i Slack'],
      },
      platforms: {
        criterion: 'Platformy',
        cells: ['macOS 13+, Apple Silicon', 'macOS; Linux eksperymentalnie', 'macOS', 'macOS, Windows, Linux', 'macOS, Windows, Linux', 'Chmura'],
      },
      price: {
        criterion: 'Cena',
        cells: ['Za darmo; korzysta z twojego planu Claude Code lub Codex', 'Za darmo; Pro 20 USD za osobę miesięcznie', 'Za darmo; Pro 50 USD miesięcznie', 'Za darmo, licencja MIT', 'W planach ChatGPT', 'Płatny plan Cursora plus ceny API'],
      },
    },
    footnoteHtml: 'Na podstawie publicznej dokumentacji i cenników każdego produktu, sprawdzone w październiku 2026. Produkty szybko się zmieniają; „Nie podano” znaczy, że nie znaleźliśmy nic publicznego. Widzisz błąd? <a href="{issues}">Daj nam znać</a>.',
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
        answer: 'Samo RigOne działa na twoim Macu i pracuje w twoim folderze. Uruchamiani agenci to Claude Code i Codex, więc kod, który czytają, trafia do ich dostawców dokładnie tak, jak przy uruchomieniu ich w terminalu. Boards, jedyna część wymagająca konta, szyfruje zadania i komentarze na twoim Macu, zanim go opuszczą.',
      },
      {
        question: 'Ile to kosztuje?',
        answer: 'RigOne można pobrać i używać za darmo. Biegi korzystają z twojego planu Claude Code albo Codex, a RigOne ostrzega, gdy bieg dojdzie do ustawionej kwoty.',
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
        question: 'Czy aplikacja jest w moim języku?',
        answer: 'Tak, w tych samych dziewięciu językach co ta strona. Aplikacja idzie za językiem macOS, a inny można wybrać w Settings → Appearance. To, co agenci piszą w biegu, zostaje po angielsku.',
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
    versions: 'Wersje',
    show: 'Pokaż wydania',
    all: 'Wszystkie',
    featureReleases: 'Funkcje',
    patchReleases: 'Poprawki',
    count: 'Wydania:',
    empty: 'Brak wydań tego rodzaju.',
    showOlder: 'Pokaż starsze wydania',
    package: 'Paczka',
    copyChecksum: 'Kopiuj SHA-256',
    copied: 'Skopiowano',
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
