import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — 面向编程智能体的 macOS 控制室',
      description: '在同一张画布上为 Claude Code 和 Codex 搭建工作流，对着你 Mac 上的项目运行，看每个智能体并行工作。面向 Apple Silicon，免费。',
    },
    features: {
      title: '功能 — RigOne',
      description: '可视化工作流、真正的并行运行、Auto 目标、可复用的智能体、由 RigOne 自己运行的检查、留在独立分支上的改动、共享看板、触发器，以及比终端留存更久的证据。',
      breadcrumb: '功能',
    },
    docs: {
      title: '文档 — RigOne',
      description: '安装 RigOne，搭建第一个工作流，对着项目运行并查看结果。包括概念、安全模型、磁盘上的文件和故障排查。',
      breadcrumb: '文档',
    },
    compare: {
      title: 'RigOne 与 Superset、Conductor、Nimbalyst、Codex 和 Cursor 对比',
      description: 'RigOne 与 Superset、Conductor、Nimbalyst、OpenAI Codex 应用和 Cursor Cloud Agents 有何不同：本地运行、同一工作流中的 Claude Code 与 Codex、可保存的工作流、检查和花费，以及各自的取舍。',
      breadcrumb: '对比',
    },
    changelog: {
      title: '更新日志 — RigOne',
      description: 'RigOne 的每个版本：改了什么，更新时要做什么，以及已签名、已公证安装包的校验和。',
      breadcrumb: '更新日志',
    },
    ogImageAlt: 'RigOne — 一张图掌管全部工作。面向编程智能体的 macOS 控制室。',
  },
  common: {
    skipToContent: '跳到正文',
    homeAria: 'RigOne 首页',
    primaryNav: '主菜单',
    footerNav: '页脚',
    language: '语言',
    englishOnly: '本页内容为英文。',
  },
  nav: {
    features: '功能',
    docs: '文档',
    compare: '对比',
    faq: '常见问题',
    changelog: '更新日志',
    github: 'GitHub',
    issues: '报告问题',
    download: '下载',
  },
  theme: {
    label: '主题',
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: '{version} 已发布',
    audience: '为已经在用 Claude Code 或 Codex 的开发者打造',
    titleStrong: '让你的编码智能体像团队一样协作，',
    titleSoft: '而不是一个终端接一个终端。',
    sub: 'RigOne 是一款免费的 Mac 应用，把 Claude Code 和 Codex 变成可以再次运行的工作流：步骤并行，每一步都在你代码的独立副本中进行，并且在任何改动进入你的分支之前，由 RigOne 自己运行检查。',
    problemsLabel: 'RigOne 解决的问题',
    problems: [
      { problem: '在多个终端间来回切换', answer: '一个窗口就能规划、运行并查看每个智能体。' },
      { problem: '智能体挤在同一个检出里', answer: '每一步都在自己的副本中工作，结果留在一个分支上。' },
      { problem: '无法相信的“完成”', answer: '检查由 RigOne 运行，而不是由智能体自己说了算。' },
    ],
    download: '下载 macOS 版',
    docsCta: '阅读文档',
    note: '免费 · macOS 13+ · 已签名并公证',
    chips: ['由 RigOne 运行检查', '同时 3 个智能体', '不会推送任何内容'],
  },
  trust: {
    aria: '你可以放心的几点',
    items: [
      '在你的 Mac 上、对着你的文件夹运行',
      'Claude Code 与 Codex 平起平坐',
      '在你接收之前，什么都不会进入你的分支',
      '使用 Apple Developer ID 签名',
    ],
  },
  unique: {
    eyebrow: '为什么选 RigOne',
    title: '由图决定，而不是由引擎决定',
    lead: '顺序、并行分支、重试和检查点都来自你保存的工作流。没有写死的阶段，也没有智能体给自己的工作打分。',
    items: {
      graph: {
        title: '看得见的工作流',
        body: '智能体步骤、检查和检查点都在同一张画布上。箭头只表示“在之后运行”，别无他意。',
        link: '可视化工作流',
      },
      peers: {
        title: '两家供应商，一次运行',
        body: '在同一个工作流里混用 Claude Code 和 Codex——一个负责写，另一个提供第二意见。',
        link: '可复用的智能体',
      },
      parallel: {
        title: '真正同时进行',
        body: '彼此不依赖的步骤会一起开始，数量不超过你设定的上限。',
        link: '并行运行',
      },
      checks: {
        title: '靠检查，不靠承诺',
        body: '智能体可以说“完成了”。只有 RigOne 运行的检查才能说测试通过了。',
        link: '检查',
      },
      branches: {
        title: '你的分支仍归你',
        body: '每个步骤都在自己的一份代码副本里工作。它的改动留在一个分支上，等你来接收。',
        link: '改动去哪里',
      },
      evidence: {
        title: '事后可查的证据',
        body: '终端输出消失后，回执、交接和诊断包仍留在磁盘上。',
        link: '证据',
      },
    },
    seeAll: '查看全部功能',
  },
  how: {
    eyebrow: '工作方式',
    title: '三步，只有第三步才花钱',
    lead: '运行什么、同时运行几个、花到多少时提醒你，都由你决定。',
    steps: [
      {
        title: '写一个智能体',
        body: '一件事，一条指令。选好 Claude Code 或 Codex、模型、思考深度，以及它能碰什么。',
      },
      {
        title: '把智能体排成一行',
        body: '这一行就是工作流。彼此不依赖的分支会同时运行。',
      },
      {
        title: '运行并观看',
        body: '把图指向这台 Mac 上的一个文件夹。智能体提问时你来回答，其余照常推进。',
      },
    ],
  },
  screens: {
    eyebrow: '界面',
    title: '下载之前先看看',
    lead: '应用如今发布时的样子，使用默认的 Minimalist 外观。每个界面都支持浅色和深色。',
    label: '应用界面',
    items: {
      run: {
        tab: 'Run',
        title: '运行工作流，或先商量一下',
        body: '左边是计划，右边是与 Lead 的对话。设定同时工作的智能体数量和花费提醒的金额，然后按 Run workflow。',
        alt: 'Ship a feature 运行中的 Run 界面：计划中三个步骤已完成，Second opinion 正在工作；对话流里是每个智能体说的话，Lead 在问是现在就发布修复，还是先做清理。',
      },
      agents: {
        tab: 'Agents',
        title: '整个角色都在一个界面上',
        body: '它的指令、所用的 CLI、模型和推理强度、能否修改文件或访问网络，以及何时放弃。',
        alt: 'Agents 界面：四个角色的列表，旁边是使用 Claude Code 运行、在任何人改代码之前先读代码的 Scout。',
      },
      canvas: {
        tab: 'Canvas',
        title: '看得见的工作流',
        body: '画布上的步骤由箭头相连，箭头的意思是“在之后运行”。Fix 之后，测试和来自另一家服务商的第二意见同时运行。',
        alt: 'Ship a feature 的画布：Reproduce，然后 Fix，接着 Tests pass 和 Second opinion 并排运行。',
      },
      workflows: {
        tab: 'Workflows',
        title: '可以再次运行的工作流',
        body: '每个已保存的工作流及其步骤和智能体。最常运行的那个占满整行。',
        alt: 'Workflows 界面：顶部是带三个步骤的 Fix a bug，下方是 Review a pull request 和 Ship a feature。',
      },
      settings: {
        tab: 'Settings',
        title: '独立窗口中的设置',
        body: '按工作、账户和应用分类。选择 Minimalist 或 Studio 外观，浅色、深色或跟随 macOS。',
        alt: 'Settings → Appearance：Minimalist 和 Studio 主题，以及 System、Light 或 Dark。',
      },
    },
  },
  honest: {
    eyebrow: '为诚实地失败而造',
    title: '故障是产品故障，而不是终端里的噪音',
    lead: 'RigOne 拒绝悄悄做的事。',
    items: {
      scopes: { title: '互相重叠的写入范围', body: '在第一个进程启动之前就会被拒绝。' },
      cancel: { title: '取消', body: '会终止整个进程组，然后核实它确实已经结束。' },
      timeouts: { title: '超时', body: '与取消走同一套受监管的关闭流程。' },
      secrets: { title: '提示词与密钥', body: '走 stdin，绝不走命令行参数。' },
      env: { title: '子进程的环境', body: '按一份明确的白名单重建。' },
      unknown: { title: '未知的供应商事件', body: '会被记录并忽略，而不会让运行崩溃。' },
      green: { title: '绿色的退出码', body: '若拿不出测试确实跑过的证据，就不算一次通过的检查。' },
      files: { title: '文件才是事实来源；', body: 'SQLite 索引可以删除后重建。' },
    },
  },
  features: {
    eyebrow: '功能',
    title: '一次运行所需的一切，都在一个窗口里',
    lead: 'RigOne 为编程智能体搭建、运行并记录工作流。下面是各部分目前能做的事。',
    items: {
      canvas: {
        eyebrow: '工作流',
        title: '可视化工作流',
        body: '在画布上搭建工作流，存成一张可以反复运行的图。一个步骤可以是智能体、检查，或由你做决定的检查点。',
        points: [
          '箭头表示“在之后运行”——顺序来自图',
          '循环、条件分支，以及有上限的重试',
          '有多条箭头指入的步骤会读取它收到的每一份交接',
          '想要多个版本时，可以把一个步骤运行多份（×3）',
        ],
      },
      parallel: {
        eyebrow: '执行',
        title: '真正的并行运行',
        body: '互不依赖的分支在时间上重叠，而不是排队等同一个执行者。',
        points: [
          '选择最多可以同时工作的智能体数量',
          '运行花费达到你设定的金额时发出提醒',
          '任何步骤开始前，会先对照你安装的 CLI 检查模型和思考深度',
        ],
      },
      run: {
        eyebrow: '运行界面',
        title: '读得懂的运行',
        body: '左边是计划，每张卡片都写明它在等哪个步骤。右边按顺序列出每个智能体说的话，让运行停下来的问题就钉在你要回答它的位置。',
        points: [
          '提问、启动的命令、输出和花费都放在一起',
          '结果会说明发生了什么：完成、失败、已停止或未运行',
          '主智能体可以和你商量——只有 /run 才会开始工作',
        ],
      },
      auto: {
        eyebrow: 'Auto',
        title: '从一句话到经过验证的结果',
        body: '给 Lead 一个目标。Auto 选出所需的角色和技能，为每个部分搭建普通的工作流，一直推进到检查和审查证明工作成立。目标是否已验证由 RigOne 判断，而不是 Lead。',
        points: [
          '所有等你决定的事都在一个列表里：Needs you',
          '设计审查：接受测试者的截图，或点击某处并写下要改什么',
          '服务商繁忙或达到用量上限时会等待，然后继续',
          'Skip permissions 为整个 Auto 运行开启或关闭完全访问',
        ],
      },
      agents: {
        eyebrow: '智能体',
        title: '可复用的智能体',
        body: '角色只需定义一次，就能在每个工作流里复用。打开它时，整个角色——它的说明、模型和文件权限——都显示在屏幕上。',
        points: [
          '供应商、模型、思考深度、超时，以及是否可以访问网络',
          '文件权限从“只看”往上逐级设定',
          '从项目已有的工具服务器（连接）和技能中挑选',
          '从另一个项目导入配置，不会复制密钥或历史记录',
        ],
      },
      knowledge: {
        eyebrow: '知识',
        title: '属于项目的知识',
        body: '笔记和技能与项目一起存放在磁盘上。智能体建议的笔记，只有经你批准后才会进入之后的提示词。',
        points: [
          '笔记进入每一条提示词；技能在适合当前工作时使用',
          '用文本、Markdown、图片和 PDF 组成有名称的上下文集',
          '查看一次运行实际用到了哪些上下文',
        ],
      },
      checks: {
        eyebrow: '检查',
        title: '由 RigOne 自己运行的检查',
        body: '步骤结束后，RigOne 会运行检查，而不是去问智能体有没有成功。智能体说了什么、检查发现了什么、你批准了什么，三者绝不混淆。',
        points: [
          '“什么都没运行”是单独的结果，绝不算通过',
          '来自另一家供应商的第二意见可以提出疑虑，但永远不能批准',
          '同一个错误出现两次，就停止重试',
        ],
      },
      branches: {
        eyebrow: '工作区',
        title: '改动留在自己的分支上',
        body: '每个步骤都在自己的一份代码副本里工作，所以智能体之间不会互相干扰。运行结束后，成果留在你项目里的一个分支上。',
        points: [
          '不会推送任何东西',
          '在你接收之前，什么都不会进入你自己的分支',
          '真正发生冲突时，会写明保存成果的分支',
        ],
      },
      boards: {
        eyebrow: 'Boards',
        title: '共享看板，在你的 Mac 上加密',
        body: '在 Kanban 或冲刺看板上管理任务、评论和成员。在这台 Mac 的某个文件夹里把任务作为工作流或 Auto 目标启动，进度会显示在看板上，所有成员都能看到。',
        points: [
          '在你的 Mac 上加密并签名；服务器只转发密文',
          '以 Editor 或 Viewer 身份邀请成员，并批准每一台新设备',
          '离线也能用，连接恢复后发送改动',
          'RigOne 中唯一需要 MonoOne 账户的部分',
        ],
      },
      triggers: {
        eyebrow: '触发器',
        title: '触发器与恢复',
        body: '当有 Linear 问题分配给你时启动工作流，每 1、5、15 或 60 分钟检查一次。被中断的工作通过同一条启动路径恢复，而不是靠第二个引擎。',
        points: [
          '一个问题只启动一次运行，重启之后也一样',
          'API 密钥只写入一次，之后不再显示',
          '删除触发器会取消正在等待的内容，并且清楚可见',
        ],
      },
      lab: {
        eyebrow: '实验室',
        title: '在你自己的代码上试用智能体',
        body: '选一个智能体，RigOne 会根据你的项目起草测试用例，让你看出对这个智能体的修改是否让工作变得更好。',
        points: [
          '用例来自你的代码，而不是通用基准测试',
          '对比智能体在你修改前后的表现',
        ],
      },
      evidence: {
        eyebrow: '证据',
        title: '比终端留存更久的证据',
        body: '每次运行都会留下一个你可以打开的文件夹：每个步骤交接了什么、完整的回答、日志和一份结果文件。',
        points: [
          '运行回执，以及长回答的完整附件',
          '已取消的进程确实已经结束的证明',
          '一键复制的诊断包',
        ],
      },
    },
  },
  compare: {
    eyebrow: '对比',
    title: 'RigOne 与 Superset、Conductor、Nimbalyst、Codex 和 Cursor 对比',
    lead: '有不少好工具可以并排运行编码智能体。RigOne 适合那些由一连串步骤组成、你想再次运行的工作，并由它自己运行检查。',
    caption: 'RigOne 与 Superset、Conductor、Nimbalyst、OpenAI Codex 应用和 Cursor Cloud Agents 的对比',
    capability: '能力',
    examples: ['桌面应用，源码可见', 'Mac 应用', '桌面应用，MIT 许可', 'OpenAI 的桌面应用', 'Cursor 的云端智能体'],
    labels: { yes: '是', partial: '部分', no: '否', unknown: '未说明' },
    notStated: '未公开说明',
    rows: {
      local: {
        criterion: '在你自己的 Mac 和文件夹上工作',
        cells: ['', '默认在本地', 'Pro 提供云端工作区', '桌面应用；团队可同步', '另有 Codex Cloud', '仅云端虚拟机'],
      },
      mix: {
        criterion: '在一个工作流里同时使用 Claude Code 和 Codex',
        cells: ['', '并排运行，每个工作区一个智能体', '并排运行，每个工作区一个智能体', '并行会话，每个会话一个智能体', '仅 Codex', 'Cursor 自己的智能体'],
      },
      graph: {
        criterion: '可保存并反复运行的多步骤工作流',
        cells: ['可视化图', '预设和脚本；Pro 提供自动化', '准备和运行脚本', '斜杠命令', '定时自动化', ''],
      },
      isolated: {
        criterion: '在隔离的代码副本中并行工作',
        cells: ['每个步骤一个工作区', '每个工作区一个 worktree', '每个任务一个工作区', '每个会话可选一个 worktree', 'Worktree', '每个智能体一台虚拟机'],
      },
      checks: {
        criterion: '由工具运行的检查，与智能体的说法分开',
        cells: ['“什么都没运行”绝不算通过', '准备和运行脚本', '显示 CI 和拉取请求状态', '', '准备脚本', '由智能体测试自己的工作'],
      },
      budget: {
        criterion: '每次运行的花费提醒和并发数',
        cells: ['每次运行一个提醒', '', '', '', '套餐限额', '有花费上限，无并发限制'],
      },
      boards: {
        criterion: '共享任务看板和问题跟踪',
        cells: ['加密看板，Linear 触发器', 'Pro 支持 Linear 和 Slack', 'Linear 和 GitHub 问题', '会话看板', 'Linear 和 GitHub', 'Linear、GitHub 和 Slack'],
      },
      platforms: {
        criterion: '平台',
        cells: ['macOS 13+，Apple Silicon', 'macOS；Linux 为实验性', 'macOS', 'macOS、Windows、Linux', 'macOS、Windows、Linux', '云端'],
      },
      price: {
        criterion: '价格',
        cells: ['免费；使用你的 Claude Code 或 Codex 套餐', '免费；Pro 每人每月 20 美元', '免费；Pro 每月 50 美元', '免费，MIT 许可', '包含在 ChatGPT 套餐中', 'Cursor 付费套餐加 API 价格'],
      },
    },
    footnoteHtml: '依据各产品公开的文档和价格，于 2026 年 10 月核对。产品变化很快；“未说明”表示我们没有找到公开信息。发现错误？<a href="{issues}">告诉我们</a>。',
  },
  faq: {
    eyebrow: '常见问题',
    title: '大家常问的问题',
    leadHtml: '更多内容见<a href="{docs}">文档</a>。没找到答案？<a href="{issues}">提交一个问题</a>。',
    items: [
      {
        question: '运行 RigOne 需要什么？',
        answer: '一台搭载 Apple Silicon、运行 macOS 13 或更高版本的 Mac，以及至少一个已安装并登录的智能体 CLI：Claude Code 或 Codex。',
      },
      {
        question: 'RigOne 会把我的代码发送到别处吗？',
        answer: 'RigOne 本身在你的 Mac 上运行，并在你的文件夹里工作。它启动的智能体是 Claude Code 和 Codex，所以它们读取的代码会发给各自的服务商，与你在终端里运行它们时完全一样。Boards 是唯一需要账户的部分，任务和评论在离开你的 Mac 之前就已在本机加密。',
      },
      {
        question: '要花多少钱？',
        answer: 'RigOne 可免费下载和使用。运行使用你自己的 Claude Code 或 Codex 套餐，运行花费达到你设定的金额时 RigOne 会提醒你。',
      },
      {
        question: '智能体会推送到我的仓库吗？',
        answer: '不会。每个步骤都在自己的一份代码副本里工作，结果留在你项目里的一个分支上。不会推送任何东西，在你接收之前，什么都不会进入你自己的分支。',
      },
      {
        question: '可以只用 Claude Code，或只用 Codex 吗？',
        answer: '可以。一个已安装并登录的 CLI 就够了。如果你想让一家供应商来写、另一家提供第二意见，同时使用两者会很有用。',
      },
      {
        question: '应用有我的语言吗？',
        answer: '有，与本网站相同的九种语言。它跟随 macOS 的语言，也可以在 Settings → Appearance 中另选一种。智能体在运行中写下的内容仍为英文。',
      },
      {
        question: '有 Windows、Linux 或 Intel 版本吗？',
        answer: '目前没有。RigOne 是为运行 macOS 13 或更高版本的 Apple Silicon Mac 打造的。',
      },
      {
        question: '我用过 Loadout。我的数据会怎样？',
        answer: 'Loadout 是 RigOne 以前的名字。1.1.0 版会在首次启动时把你的资料库从 ~/.loadout 移到 ~/.rig-one，并在你打开每个项目文件夹时把其中的 .loadout/ 移到 .rig-one/。macOS 会把 RigOne 视为一个新应用，所以会再次请求权限。',
      },
    ],
  },
  cta: {
    title: '把你的智能体放到同一张画布上',
    lead: '面向 Apple Silicon Mac，免费。使用 Apple Developer ID 签名，并经 Apple 公证。',
    download: '下载 macOS 版',
    docs: '阅读文档',
    compare: '对比看看',
    note: '需要已安装并登录 Claude Code 或 Codex。',
  },
  changelog: {
    eyebrow: '更新日志',
    title: '每个版本改了什么',
    lead: '每个版本都会说明改了什么、更新时要做什么，以及已签名安装包的校验和。1.1.0 之前的版本以 Loadout 的名称发布。',
    download: '下载最新版',
    github: 'GitHub 上的发布',
    latest: '最新',
    englishNote: '发布说明为英文。',
    versions: '版本',
    show: '显示版本',
    all: '全部',
    featureReleases: '功能',
    patchReleases: '修复',
    count: '版本数：',
    empty: '没有这类版本。',
    showOlder: '显示更早的版本',
    package: '安装包',
    copyChecksum: '复制 SHA-256',
    copied: '已复制',
  },
  docs: {
    eyebrow: '文档',
    title: '使用 RigOne',
    lead: '安装它，搭建工作流，对着项目运行，再查看发生了什么。',
    onThisPage: '本页内容',
    englishNote: '文档为英文。',
    helpHtml: '这里有不清楚或不对的地方？<a href="{issues}">提交一个问题</a>。',
  },
  footer: {
    tagline: 'macOS 优先 · 本地优先 · 你自己的代码',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>。网站采用 <a href="{license}">AGPL-3.0</a> 许可。',
  },
} satisfies SiteContent
