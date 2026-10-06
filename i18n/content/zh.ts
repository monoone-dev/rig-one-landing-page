import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — 面向编程智能体的 macOS 控制室',
      description: '在同一张画布上为 Claude Code 和 Codex 搭建工作流，对着你 Mac 上的项目运行，看每个智能体并行工作。面向 Apple Silicon，免费。',
    },
    features: {
      title: '功能 — RigOne',
      description: '可视化工作流、真正的并行运行、可复用的智能体、由 RigOne 自己运行的检查、留在独立分支上的改动、触发器，以及比终端留存更久的证据。',
      breadcrumb: '功能',
    },
    docs: {
      title: '文档 — RigOne',
      description: '安装 RigOne，搭建第一个工作流，对着项目运行并查看结果。包括概念、安全模型、磁盘上的文件和故障排查。',
      breadcrumb: '文档',
    },
    compare: {
      title: 'RigOne 与其他运行编程智能体的方式对比',
      description: 'RigOne 与单独使用智能体 CLI、并行智能体桌面应用、终端会话管理器和云端编程智能体有何不同，以及各自的取舍。',
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
    titleStrong: '一张图',
    titleSoft: '掌管全部工作。',
    sub: 'RigOne 是面向编程智能体的原生控制室。智能体只需定义一次，放到画布上，连好步骤，再对着你 Mac 上的项目运行这张图。',
    download: '下载 macOS 版',
    docsCta: '阅读文档',
    note: '免费 · macOS 13+ · 已签名并公证',
    illustrationLabel: '运行界面：左边是工作流的计划，右边是智能体说的话。',
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
    lead: '运行什么、同时运行几个、最多花多少钱，都由你决定。',
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
          '在运行开始前设定它最多能花多少钱',
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
    title: 'RigOne 与其他运行编程智能体的方式',
    lead: '运行单个智能体，或并排运行多个智能体，都有不错的工具。RigOne 适合那种由一系列步骤组成、你想反复运行的工作。',
    caption: 'RigOne 与四类运行编程智能体的工具对比',
    capability: '能力',
    columns: ['单独使用智能体 CLI', '并行智能体桌面应用', '终端会话管理器', '云端编程智能体'],
    examples: ['Claude Code、Codex CLI', '例如 Conductor', '例如 Claude Squad', '例如 Codex cloud、Copilot coding agent'],
    labels: { yes: '是', partial: '部分', no: '否', unknown: '未说明' },
    notStated: '未公开说明',
    rows: {
      local: {
        criterion: '在你自己的 Mac 和文件夹上工作',
        cells: ['', '', '', '', '在服务商的沙盒中运行'],
      },
      mix: {
        criterion: '在一个工作流里同时使用 Claude Code 和 Codex',
        cells: ['', '每个会话一家供应商', '并排运行，不在同一流程中', '并排运行，不在同一流程中', '每项服务一家供应商'],
      },
      graph: {
        criterion: '可保存并反复运行的多步骤工作流',
        cells: ['可视化的图', '脚本、钩子和子智能体', '', '', ''],
      },
      isolated: {
        criterion: '在隔离的代码副本中并行工作',
        cells: ['每个步骤一个工作区', '由你自己管理的 worktree', '每个智能体一个 worktree', '每个智能体一个 worktree', '每个任务一个沙盒'],
      },
      checks: {
        criterion: '由工具运行的检查，与智能体的说法分开',
        cells: ['“什么都没运行”绝不算通过', '借助你自己的钩子', '', '', '在拉取请求上运行 CI'],
      },
      budget: {
        criterion: '每次运行的花费上限与并发数',
        cells: ['', '仅有按会话的限制', '', '', '套餐限制'],
      },
      platforms: {
        criterion: '平台',
        cells: ['macOS 13+、Apple Silicon', 'macOS、Linux、Windows', 'macOS', 'macOS、Linux', '浏览器'],
      },
      price: {
        criterion: '价格',
        cells: ['免费；使用你的 Claude Code 或 Codex 套餐', '包含在供应商套餐中', '见该产品的网站', '免费，开源', '包含在供应商套餐中'],
      },
    },
    footnoteHtml: '按工具类别对比，依据 2026 年 10 月的公开文档。具体产品各有不同，且变化很快。发现错误？<a href="{issues}">告诉我们</a>。',
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
        answer: 'RigOne 本身在你的 Mac 上运行，并在你的文件夹里工作。它启动的智能体是 Claude Code 和 Codex，所以它们读取的代码会发给各自的服务商，与你在终端里运行它们时完全一样。',
      },
      {
        question: '要花多少钱？',
        answer: 'RigOne 可以免费下载和使用。运行时使用你自己的 Claude Code 或 Codex 套餐，你还可以在运行开始前设定它最多能花多少钱。',
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
