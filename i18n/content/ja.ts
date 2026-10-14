import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — コーディングエージェントのための macOS 管制室',
      description: 'Claude Code と Codex のワークフローをひとつのキャンバスで組み、Mac 上のプロジェクトに対して実行し、すべてのエージェントが並列で働く様子を見られます。Apple Silicon 向けで無料です。',
    },
    features: {
      title: '機能 — RigOne',
      description: '目に見えるワークフロー、本物の並列実行、Auto のゴール、使い回せるエージェント、RigOne 自身が走らせるチェック、専用のブランチに残る変更、共有ボード、トリガー、そしてターミナルより長く残る証拠。',
      breadcrumb: '機能',
    },
    docs: {
      title: 'ドキュメント — RigOne',
      description: 'RigOne をインストールし、最初のワークフローを組み、プロジェクトに対して実行して結果を読みます。概念、安全モデル、ディスク上のファイル、トラブルシューティング。',
      breadcrumb: 'ドキュメント',
    },
    compare: {
      title: 'RigOne と Superset、Conductor、Codex、Cursor の比較',
      description: 'RigOne と Superset、Conductor、OpenAI Codex アプリ、Cursor Cloud Agents の違い：ローカル実行、ひとつのワークフローでの Claude Code と Codex、保存できるワークフロー、チェック、費用、そしてそれぞれのトレードオフ。',
      breadcrumb: '比較',
    },
    changelog: {
      title: '変更履歴 — RigOne',
      description: 'RigOne の全リリース：何が変わったか、アップデート時にすること、署名・公証済みビルドのチェックサム。',
      breadcrumb: '変更履歴',
    },
    ogImageAlt: 'RigOne — ひとつのグラフが仕事を束ねる。コーディングエージェントのための macOS 管制室。',
  },
  common: {
    skipToContent: '本文へスキップ',
    homeAria: 'RigOne ホーム',
    primaryNav: 'メインメニュー',
    footerNav: 'フッター',
    language: '言語',
    englishOnly: 'このページは英語で書かれています。',
  },
  nav: {
    features: '機能',
    docs: 'ドキュメント',
    compare: '比較',
    faq: 'よくある質問',
    changelog: '変更履歴',
    github: 'GitHub',
    issues: '問題を報告',
    download: 'ダウンロード',
  },
  theme: {
    label: 'テーマ',
    light: 'ライト',
    dark: 'ダーク',
    system: 'システム',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: '{version} を公開しました',
    titleStrong: 'ひとつのグラフが',
    titleSoft: '仕事を束ねる。',
    sub: 'RigOne はコーディングエージェントのためのネイティブな管制室です。エージェントは一度定義するだけ。キャンバスに置き、ステップをつなぎ、Mac 上のプロジェクトに対してグラフを実行します。',
    download: 'macOS 版をダウンロード',
    docsCta: 'ドキュメントを読む',
    note: '無料 · macOS 13+ · 署名・公証済み',
    illustrationLabel: '実行画面：左にワークフローの計画、右にエージェントの発言。',
  },
  trust: {
    aria: '安心できる点',
    items: [
      'あなたの Mac で、あなたのフォルダに対して動く',
      'Claude Code と Codex を対等に扱う',
      'あなたが取り込むまで、ブランチには何も入らない',
      'Apple Developer ID で署名済み',
    ],
  },
  unique: {
    eyebrow: 'RigOne を選ぶ理由',
    title: '決めるのはエンジンではなくグラフ',
    lead: '順序、並列の枝、リトライ、チェックポイントは、保存したワークフローから決まります。段階が決め打ちされることはなく、自分の仕事を自分で採点するエージェントもいません。',
    items: {
      graph: {
        title: '目に見えるワークフロー',
        body: 'エージェントのステップ、チェック、チェックポイントをひとつのキャンバスに。矢印の意味は「この後に実行」だけです。',
        link: '目に見えるワークフロー',
      },
      peers: {
        title: '二つのベンダーを、ひとつの実行で',
        body: '同じワークフローで Claude Code と Codex を組み合わせられます。片方が書き、もう片方がセカンドオピニオンを出します。',
        link: '使い回せるエージェント',
      },
      parallel: {
        title: '本当に同時に',
        body: '互いに依存しないステップは、設定した上限までまとめて始まります。',
        link: '並列実行',
      },
      checks: {
        title: '約束ではなくチェック',
        body: 'エージェントは「完了」と言えます。テストが通ったと言えるのは、RigOne が走らせるチェックだけです。',
        link: 'チェック',
      },
      branches: {
        title: 'あなたのブランチはあなたのもの',
        body: '各ステップはコードの専用コピーで作業します。変更はブランチに置かれ、あなたが取り込むまで待ちます。',
        link: '変更の行き先',
      },
      evidence: {
        title: '後から確かめられる証拠',
        body: 'ターミナルの出力が消えた後も、記録、引き継ぎ、診断一式はディスクに残ります。',
        link: '証拠',
      },
    },
    seeAll: 'すべての機能を見る',
  },
  how: {
    eyebrow: '使い方',
    title: '三段階。お金がかかるのは三つ目だけです',
    lead: '何を実行するか、同時にいくつ動かすか、いくらで費用を警告するかは、あなたが決めます。',
    steps: [
      {
        title: 'エージェントを書く',
        body: 'ひとつの仕事に、ひとつの指示。Claude Code か Codex、モデル、思考の深さ、触れてよい範囲を選びます。',
      },
      {
        title: 'エージェントを並べる',
        body: 'その並びがワークフローです。互いに依存しない枝は同時に走ります。',
      },
      {
        title: '実行して見守る',
        body: 'この Mac のフォルダにグラフを向けます。エージェントが尋ねたら答え、ほかはそのまま進みます。',
      },
    ],
  },
  screens: {
    eyebrow: '画面',
    title: 'ダウンロードの前に見てみる',
    lead: 'いま配布しているアプリの画面です。外観は標準の Minimalist。どの画面もライトとダークの両方で動きます。',
    label: 'アプリの画面',
    items: {
      run: {
        tab: 'Run',
        title: 'ワークフローを実行する、または先に相談する',
        body: '左に計画、右に Lead との会話。同時に働くエージェントの数と、費用を警告する金額を決めて、Run workflow を押します。',
        alt: 'ダークモードの Run 画面：左に 4 ステップの計画、下に /run、/ask、/stop があるコマンドバー。',
      },
      agents: {
        tab: 'Agents',
        title: '役割のすべてがひとつの画面に',
        body: '指示、使う CLI・モデル・エフォート、ファイルを変更できるか、Web にアクセスできるか、いつ打ち切るか。',
        alt: 'ダークモードの Agents 画面：4 つの役割の一覧と、Claude Code で動く Scout の役割。',
      },
      workflows: {
        tab: 'Workflows',
        title: 'もう一度実行するワークフロー',
        body: '保存したワークフローとそのステップ、エージェント。いちばんよく実行するものが横幅いっぱいに表示されます。',
        alt: 'ライトモードの Workflows 画面：上に Fix a bug、その下に Review a pull request と Ship a feature。',
      },
      settings: {
        tab: 'Settings',
        title: '独立したウィンドウの設定',
        body: '作業、アカウント、アプリのカテゴリ。Minimalist か Studio の外観を、ライト、ダーク、または macOS に合わせて選べます。',
        alt: 'ライトモードの Settings → Appearance：Minimalist と Studio のテーマ、そして System、Light、Dark。',
      },
    },
  },
  honest: {
    eyebrow: '正直に失敗するための設計',
    title: '失敗はターミナルの雑音ではなく、製品の失敗として扱う',
    lead: 'RigOne が黙ってはやらないこと。',
    items: {
      scopes: { title: '書き込み範囲の重なりは', body: '最初のプロセスが始まる前に拒否されます。' },
      cancel: { title: '取り消しは', body: 'プロセスグループ全体を終了させ、そのうえで確かに終わったことを確認します。' },
      timeouts: { title: 'タイムアウトは', body: '取り消しと同じ、監視つきの終了処理を通ります。' },
      secrets: { title: 'プロンプトと秘密情報は', body: '標準入力を通り、コマンドライン引数には決して乗りません。' },
      env: { title: '子プロセスの環境は', body: '明示した許可リストから組み直されます。' },
      unknown: { title: '未知のベンダーイベントは', body: '実行を落とさず、記録したうえで無視されます。' },
      green: { title: '緑の終了コードは', body: 'テストが本当に走った証拠がなければ、合格のチェックとは認めません。' },
      files: { title: '正となるのはファイルです。', body: 'SQLite のインデックスは削除して作り直せます。' },
    },
  },
  features: {
    eyebrow: '機能',
    title: '実行に必要なものを、ひとつのウィンドウに',
    lead: 'RigOne はコーディングエージェントのワークフローを組み、実行し、記録します。各部分がいま何をするのかを紹介します。',
    items: {
      canvas: {
        eyebrow: 'ワークフロー',
        title: '目に見えるワークフロー',
        body: 'キャンバスでワークフローを組み、何度でも実行できるグラフとして保存します。ステップにはエージェント、チェック、あなたが判断するチェックポイントを置けます。',
        points: [
          '矢印の意味は「この後に実行」。順序はグラフが決めます',
          'ループ、条件分岐、上限つきのリトライ',
          '矢印が複数入るステップは、受け取った引き継ぎをすべて読みます',
          '複数の案がほしいときは、ひとつのステップを複数（×3）実行できます',
        ],
      },
      parallel: {
        eyebrow: '実行',
        title: '本物の並列実行',
        body: '依存しない枝は、ひとりの実行者の後ろで順番待ちをせず、時間の上で重なって進みます。',
        points: [
          '同時に動かせるエージェントの数を選べます',
          '実行が設定した金額に達したら警告',
          'どのステップも始まる前に、モデルと思考の深さをインストール済みの CLI と照らし合わせます',
        ],
      },
      run: {
        eyebrow: '実行画面',
        title: '読める実行',
        body: '左に計画。各カードには、どのステップを待っているかが書かれています。右には各エージェントの発言が順に並び、実行を止めた質問はあなたが答える場所に留められます。',
        points: [
          '質問、起動したコマンド、出力、費用がひとまとまりに',
          '結果は何が起きたかを示します：完了、失敗、停止、未実行',
          'リードエージェントと相談できます。作業を始めるのは /run だけです',
        ],
      },
      auto: {
        eyebrow: 'Auto',
        title: 'ひと言から、検証済みの結果まで',
        body: 'Lead にゴールを伝えます。Auto は必要な役割とスキルを選び、各部分のために普通のワークフローを組み、チェックとレビューが成果を証明するまで続けます。ゴールが検証済みかどうかを決めるのは Lead ではなく RigOne です。',
        points: [
          'あなたの判断を待つものは、ひとつのリストにまとまります：Needs you',
          'デザインレビュー：テスターのスクリーンショットを承認するか、場所をクリックして直してほしい点を書く',
          '提供元の混雑や利用上限を待ってから、続きを進めます',
          'Skip permissions で Auto の実行全体のフルアクセスをオン・オフ',
        ],
      },
      agents: {
        eyebrow: 'エージェント',
        title: '使い回せるエージェント',
        body: '役割は一度定義すれば、どのワークフローでも再利用できます。開くと、その役割のすべて（指示、モデル、ファイル権限）が画面に表示されます。',
        points: [
          'ベンダー、モデル、思考の深さ、制限時間、ウェブへのアクセスの可否',
          'ファイル権限は「見るだけ」から段階的に',
          'ツールサーバー（接続）とスキルは、プロジェクトにあるものから選択',
          '秘密情報や履歴をコピーせずに、別のプロジェクトから設定を取り込めます',
        ],
      },
      knowledge: {
        eyebrow: '知識',
        title: 'プロジェクトに属する知識',
        body: 'メモとスキルはプロジェクトと一緒にディスクに置かれます。エージェントが提案したメモは、あなたが承認して初めて以後のプロンプトに入ります。',
        points: [
          'メモはすべてのプロンプトに入り、スキルは作業に合うときに使われます',
          'テキスト、Markdown、画像、PDF から名前つきのコンテキストセットを作れます',
          '実行が実際にどのコンテキストを使ったかを確認できます',
        ],
      },
      checks: {
        eyebrow: 'チェック',
        title: 'RigOne 自身が走らせるチェック',
        body: 'ステップが終わると、RigOne はうまくいったかをエージェントに尋ねるのではなく、チェックを走らせます。エージェントの発言、チェックの結果、あなたの承認が混ざることはありません。',
        points: [
          '「何も実行されなかった」は独立した結果で、合格にはなりません',
          '別ベンダーのセカンドオピニオンは懸念を示せますが、承認はできません',
          '同じエラーが二度出たらリトライを止めます',
        ],
      },
      branches: {
        eyebrow: 'ワークスペース',
        title: '変更は専用のブランチで待つ',
        body: '各ステップはコードの専用コピーで作業するので、エージェント同士がぶつかりません。実行が終わると、成果はプロジェクト内のブランチで待っています。',
        points: [
          '何もプッシュされません',
          'あなたが取り込むまで、あなたのブランチには何も入りません',
          '本当に衝突したときは、成果が残っているブランチを示します',
        ],
      },
      boards: {
        eyebrow: 'Boards',
        title: 'Mac 上で暗号化される共有ボード',
        body: 'Kanban またはスプリントのボードで、タスク、コメント、メンバーを扱います。この Mac のフォルダでタスクをワークフローか Auto のゴールとして開始すると、進み具合がメンバー全員のボードに表示されます。',
        points: [
          'Mac 上で暗号化・署名され、サーバーは暗号文を中継するだけ',
          'メンバーを Editor か Viewer として招待し、新しいデバイスはそれぞれ承認',
          'オフラインでも動き、接続が戻ったら変更を送ります',
          'RigOne の中で MonoOne アカウントが必要なのはここだけ',
        ],
      },
      triggers: {
        eyebrow: 'トリガー',
        title: 'トリガーと復旧',
        body: 'Linear の課題があなたに割り当てられたらワークフローを開始します。確認は 1、5、15、60 分ごとから選べます。中断した作業は、別のエンジンではなく同じ開始経路で復旧します。',
        points: [
          'ひとつの課題が始める実行はひとつ。再起動後も同じです',
          'API キーは一度書き込むと二度と表示されません',
          'トリガーを削除すると、待っていたものは目に見える形で取り消されます',
        ],
      },
      lab: {
        eyebrow: 'ラボ',
        title: '自分のコードでエージェントを試す',
        body: 'エージェントを選ぶと、RigOne がプロジェクトからテストケースを下書きします。そのエージェントへの変更で仕事が良くなったかを確かめられます。',
        points: [
          'ケースは汎用のベンチマークではなく、あなたのコードから作られます',
          '編集の前後でエージェントを比べられます',
        ],
      },
      evidence: {
        eyebrow: '証拠',
        title: 'ターミナルより長く残る証拠',
        body: 'どの実行も、開いて確かめられるフォルダを残します。各ステップが引き継いだもの、回答の全文、ログ、結果ファイルです。',
        points: [
          '実行の記録と、長い回答の添付ファイル全体',
          '取り消したプロセスが確かに終わったことの証明',
          'ワンクリックでコピーできる診断一式',
        ],
      },
    },
  },
  compare: {
    eyebrow: '比較',
    title: 'RigOne と Superset、Conductor、Codex、Cursor の比較',
    lead: 'コーディングエージェントを並べて動かせる良いツールはいくつもあります。RigOne が向いているのは、何度も実行したい一連のステップからなる作業を、RigOne 自身が走らせるチェックとともに進めたいときです。',
    caption: 'RigOne と Superset、Conductor、OpenAI Codex アプリ、Cursor Cloud Agents の比較',
    capability: '機能',
    examples: ['デスクトップアプリ、ソース公開', 'Mac アプリ', 'OpenAI のデスクトップアプリ', 'Cursor のクラウドエージェント'],
    labels: { yes: 'あり', partial: '一部', no: 'なし', unknown: '記載なし' },
    notStated: '公開情報に記載なし',
    rows: {
      local: {
        criterion: '自分の Mac とフォルダで動く',
        cells: ['', '標準はローカル', 'Pro でクラウドのワークスペース', 'Codex Cloud も利用可', 'クラウドの VM のみ'],
      },
      mix: {
        criterion: 'ひとつのワークフローで Claude Code と Codex を使う',
        cells: ['', '並べて実行、ワークスペースごとに 1 エージェント', '並べて実行、ワークスペースごとに 1 エージェント', 'Codex のみ', 'Cursor 独自のエージェント'],
      },
      graph: {
        criterion: '保存して何度でも実行できる多段階のワークフロー',
        cells: ['ビジュアルなグラフ', 'プリセットとスクリプト。Pro で自動化', 'セットアップと実行のスクリプト', '定期実行の自動化', ''],
      },
      isolated: {
        criterion: 'コードの隔離されたコピーでの並列作業',
        cells: ['ステップごとにワークスペース', 'ワークスペースごとに worktree', 'タスクごとにワークスペース', 'Worktree', 'エージェントごとに VM'],
      },
      checks: {
        criterion: 'エージェントの主張とは別に、ツールが走らせるチェック',
        cells: ['「何も実行されなかった」は合格にならない', 'セットアップと実行のスクリプト', 'CI とプルリクエストの状態を表示', 'セットアップスクリプト', 'エージェントが自分の仕事をテスト'],
      },
      budget: {
        criterion: '実行ごとの費用の警告と同時実行数',
        cells: ['実行ごとの警告', '', '', 'プランの上限', '支出上限あり、同時実行数の上限なし'],
      },
      boards: {
        criterion: '共有タスクボードと課題管理',
        cells: ['暗号化されたボード、Linear トリガー', 'Pro で Linear と Slack', 'Linear と GitHub の課題', 'Linear と GitHub', 'Linear、GitHub、Slack'],
      },
      platforms: {
        criterion: 'プラットフォーム',
        cells: ['macOS 13 以降、Apple Silicon', 'macOS。Linux は試験提供', 'macOS', 'macOS、Windows、Linux', 'クラウド'],
      },
      price: {
        criterion: '価格',
        cells: ['無料。Claude Code または Codex のプランを使用', '無料。Pro は 1 人あたり月 20 ドル', '無料。Pro は月 50 ドル', 'ChatGPT のプランに含まれる', 'Cursor の有料プランと API 料金'],
      },
    },
    footnoteHtml: '各製品の公開ドキュメントと価格をもとに、2026 年 10 月に確認しました。製品はすぐに変わります。「記載なし」は公開情報が見つからなかったことを意味します。誤りを見つけたら<a href="{issues}">お知らせください</a>。',
  },
  faq: {
    eyebrow: 'よくある質問',
    title: 'よく聞かれること',
    leadHtml: '詳しくは<a href="{docs}">ドキュメント</a>へ。載っていないことは<a href="{issues}">課題を作成</a>してください。',
    items: [
      {
        question: 'RigOne を動かすには何が必要ですか？',
        answer: 'Apple Silicon 搭載で macOS 13 以降の Mac と、インストールしてサインイン済みのエージェント CLI（Claude Code または Codex）が少なくともひとつ必要です。',
      },
      {
        question: 'RigOne はコードをどこかに送りますか？',
        answer: 'RigOne 自体はあなたの Mac で動き、あなたのフォルダで作業します。起動するエージェントは Claude Code と Codex なので、それらが読むコードは、ターミナルで実行したときとまったく同じように各提供元に送られます。アカウントが必要な唯一の部分である Boards は、タスクとコメントを Mac から出る前に暗号化します。',
      },
      {
        question: '費用はいくらですか？',
        answer: 'RigOne は無料でダウンロードして使えます。実行にはご自身の Claude Code または Codex のプランを使い、実行が設定した金額に達すると RigOne が警告します。',
      },
      {
        question: 'エージェントがリポジトリにプッシュすることはありますか？',
        answer: 'ありません。各ステップはコードの専用コピーで作業し、結果はプロジェクト内のブランチで待ちます。何もプッシュされず、あなたが取り込むまで、あなたのブランチには何も入りません。',
      },
      {
        question: 'Claude Code だけ、または Codex だけでも使えますか？',
        answer: '使えます。インストールしてサインイン済みの CLI がひとつあれば十分です。片方のベンダーに書かせ、もう片方にセカンドオピニオンを出させたいときは、両方を組み合わせると便利です。',
      },
      {
        question: 'アプリは自分の言語で使えますか？',
        answer: 'はい。このサイトと同じ 9 言語に対応しています。macOS の言語に従い、Settings → Appearance で別の言語も選べます。実行中にエージェントが書く内容は英語のままです。',
      },
      {
        question: 'Windows、Linux、Intel 版はありますか？',
        answer: '今のところありません。RigOne は Apple Silicon 搭載で macOS 13 以降の Mac 向けに作られています。',
      },
      {
        question: 'Loadout を使っていました。データはどうなりますか？',
        answer: 'Loadout は RigOne の以前の名前です。バージョン 1.1.0 は、初回起動時にライブラリを ~/.loadout から ~/.rig-one へ移し、各プロジェクトフォルダを開いたときにその .loadout/ を .rig-one/ へ移します。macOS は RigOne を新しいアプリとみなすため、権限をもう一度求めます。',
      },
    ],
  },
  cta: {
    title: 'エージェントをひとつのキャンバスに',
    lead: 'Apple Silicon 搭載の Mac 向けで無料。Apple Developer ID で署名され、Apple の公証を受けています。',
    download: 'macOS 版をダウンロード',
    docs: 'ドキュメントを読む',
    compare: 'ほかとの比較',
    note: 'Claude Code または Codex のインストールとサインインが必要です。',
  },
  changelog: {
    eyebrow: '変更履歴',
    title: 'リリースごとの変更点',
    lead: '各リリースには、何が変わったか、アップデート時にすること、署名済みビルドのチェックサムが書かれています。1.1.0 より前のビルドは Loadout という名前で公開されました。',
    download: '最新版をダウンロード',
    github: 'GitHub のリリース',
    latest: '最新',
    englishNote: 'リリースノートは英語で書かれています。',
    versions: 'バージョン',
    show: '表示するリリース',
    all: 'すべて',
    featureReleases: '機能',
    patchReleases: '修正',
    count: 'リリース数：',
    empty: 'この種類のリリースはありません。',
    showOlder: '以前のリリースを表示',
    package: 'パッケージ',
    copyChecksum: 'SHA-256 をコピー',
    copied: 'コピーしました',
  },
  docs: {
    eyebrow: 'ドキュメント',
    title: 'RigOne の使い方',
    lead: 'インストールし、ワークフローを組み、プロジェクトに対して実行し、何が起きたかを読みます。',
    onThisPage: 'このページの内容',
    englishNote: 'ドキュメントは英語で書かれています。',
    helpHtml: 'わかりにくい点や誤りがあれば<a href="{issues}">課題を作成</a>してください。',
  },
  footer: {
    tagline: 'macOS ファースト · ローカルファースト · あなた自身のコード',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>。ウェブサイトは <a href="{license}">AGPL-3.0</a> で公開しています。',
  },
} satisfies SiteContent
