import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — a macOS control room for coding agents',
      description: 'Build a workflow for Claude Code and Codex on one canvas, run it against a project on your Mac, and watch every agent work in parallel. Free for Apple Silicon.',
    },
    features: {
      title: 'Features — RigOne',
      description: 'Visual workflows, real parallel runs, reusable agents, checks RigOne runs itself, work kept on its own branch, triggers and evidence that outlives the terminal.',
      breadcrumb: 'Features',
    },
    docs: {
      title: 'Documentation — RigOne',
      description: 'Install RigOne, build your first workflow, run it against a project and read the results. Concepts, safety model, files on disk and troubleshooting.',
      breadcrumb: 'Documentation',
    },
    compare: {
      title: 'RigOne compared with other ways to run coding agents',
      description: 'How RigOne differs from an agent CLI on its own, parallel-agent desktop apps, terminal session managers and cloud coding agents — with the trade-offs.',
      breadcrumb: 'Compare',
    },
    changelog: {
      title: 'Changelog — RigOne',
      description: 'Every RigOne release: what changed, what to do when you update, and the checksum of the signed, notarized build.',
      breadcrumb: 'Changelog',
    },
    ogImageAlt: 'RigOne — one graph owns the work. A macOS control room for coding agents.',
  },
  common: {
    skipToContent: 'Skip to content',
    homeAria: 'RigOne home',
    primaryNav: 'Main menu',
    footerNav: 'Footer',
    language: 'Language',
    englishOnly: 'This page is written in English.',
  },
  nav: {
    features: 'Features',
    docs: 'Docs',
    compare: 'Compare',
    faq: 'FAQ',
    changelog: 'Changelog',
    github: 'GitHub',
    issues: 'Report an issue',
    download: 'Download',
  },
  theme: {
    label: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Version {version} is out',
    titleStrong: 'One graph',
    titleSoft: 'owns the work.',
    sub: 'RigOne is a native control room for coding agents. Define an agent once, place it on a canvas, connect the steps, and run the graph against a project on your Mac.',
    download: 'Download for macOS',
    docsCta: 'Read the docs',
    note: 'Free · macOS 13+ · signed and notarized',
    illustrationLabel: 'The Run screen: the plan of a workflow on the left, what the agents say on the right.',
  },
  trust: {
    aria: 'What you can count on',
    items: [
      'Runs on your Mac, against your folder',
      'Claude Code and Codex as peers',
      'Nothing reaches your branch until you take it',
      'Signed with Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Why RigOne',
    title: 'The graph decides, not the engine',
    lead: 'Order, parallel branches, retries and checkpoints come from the workflow you saved. No stage is hard-coded, and no agent grades its own work.',
    items: {
      graph: {
        title: 'Workflows you can see',
        body: 'Agent steps, checks and checkpoints on one canvas. An arrow means “runs after”, and nothing else.',
        link: 'Visual workflows',
      },
      peers: {
        title: 'Two vendors, one run',
        body: 'Mix Claude Code and Codex in the same workflow — one writes, the other gives a second opinion.',
        link: 'Reusable agents',
      },
      parallel: {
        title: 'Really at the same time',
        body: 'Steps that do not depend on each other start together, up to the limit you set.',
        link: 'Parallel runs',
      },
      checks: {
        title: 'Checks, not promises',
        body: 'An agent can say “done”. Only the checks RigOne runs can say the tests passed.',
        link: 'Checks',
      },
      branches: {
        title: 'Your branch stays yours',
        body: 'Each step works in its own copy of the code. What it changed waits on a branch until you take it.',
        link: 'Where changes go',
      },
      evidence: {
        title: 'Evidence after the fact',
        body: 'Receipts, handoffs and a diagnostic bundle stay on disk after the terminal output is gone.',
        link: 'Evidence',
      },
    },
    seeAll: 'See every feature',
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three steps, and only the third one spends money',
    lead: 'You stay in charge of what runs, how many at once and how much it may cost.',
    steps: [
      {
        title: 'Write an agent',
        body: 'One job, one instruction. Pick Claude Code or Codex, the model, the effort and what it may touch.',
      },
      {
        title: 'Put agents in a row',
        body: 'That row is a workflow. Branches that do not depend on each other run at the same time.',
      },
      {
        title: 'Run it and watch',
        body: 'Point the graph at a folder on this Mac. Answer when an agent asks; everything else keeps going.',
      },
    ],
  },
  honest: {
    eyebrow: 'Built to fail honestly',
    title: 'Failures are product failures, not terminal noise',
    lead: 'What RigOne refuses to do quietly.',
    items: {
      scopes: { title: 'Overlapping write scopes', body: 'are refused before the first process starts.' },
      cancel: { title: 'Cancellation', body: 'ends the whole process group and then verifies that it is dead.' },
      timeouts: { title: 'Timeouts', body: 'go through the same supervised shutdown as cancellation.' },
      secrets: { title: 'Prompts and secrets', body: 'go through stdin, never command-line arguments.' },
      env: { title: 'Child environments', body: 'are rebuilt from an explicit allowlist.' },
      unknown: { title: 'Unknown vendor events', body: 'are recorded and ignored instead of crashing the run.' },
      green: { title: 'A green exit code', body: 'without proof that tests ran is not accepted as a green check.' },
      files: { title: 'Files are the source of truth;', body: 'the SQLite index can be deleted and rebuilt.' },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything a run needs, in one window',
    lead: 'RigOne builds, runs and records workflows for coding agents. Here is what each part does today.',
    items: {
      canvas: {
        eyebrow: 'Workflows',
        title: 'Visual workflows',
        body: 'Build a workflow on a canvas and save it as a graph you can run again. A step can be an agent, a check or a checkpoint where you decide.',
        points: [
          'An arrow means “runs after” — order comes from the graph',
          'Loops, conditional paths and retries with a limit',
          'A step with several arrows in reads every handoff it receives',
          'Run several copies of one step (×3) when you want more than one take',
        ],
      },
      parallel: {
        eyebrow: 'Execution',
        title: 'Real parallel runs',
        body: 'Independent branches overlap in time instead of taking turns behind a single worker.',
        points: [
          'Choose how many agents may work at once',
          'Set the most a run may spend before it starts',
          'Models and effort levels are checked against your installed CLI before any step starts',
        ],
      },
      run: {
        eyebrow: 'Run screen',
        title: 'A run you can read',
        body: 'The plan on the left, each card naming the step it waits for. On the right, what every agent said, in order, with the question that stopped the run pinned where you will answer it.',
        points: [
          'Questions, spawned commands, output and spend stay together',
          'Outcomes say what happened: done, failed, stopped or not run',
          'A lead agent can talk things through with you — only /run starts work',
        ],
      },
      agents: {
        eyebrow: 'Agents',
        title: 'Reusable agents',
        body: 'Define a role once and reuse it in every workflow. The whole role — its words, its model, its file access — is on screen when you open it.',
        points: [
          'Vendor, model, effort, timeout and whether it may reach the web',
          'File access from “look only” upwards',
          'Tool servers (connections) and skills picked from what the project has',
          'Import a setup from another project without copying secrets or history',
        ],
      },
      knowledge: {
        eyebrow: 'Knowledge',
        title: 'Project-scoped knowledge',
        body: 'Notes and skills live on disk with the project. A note an agent suggests only reaches a future prompt after you approve it.',
        points: [
          'Notes go into every prompt; skills are used when they fit the work',
          'Named context sets from text, Markdown, images and PDFs',
          'See which context a run actually used',
        ],
      },
      checks: {
        eyebrow: 'Checks',
        title: 'Checks RigOne runs itself',
        body: 'When a step finishes, RigOne runs the checks — it does not ask the agent whether it worked. What the agent said, what the checks found and what you approved are never confused.',
        points: [
          '“Nothing ran” is its own outcome, never a pass',
          'A second opinion from another vendor can raise concerns, but never approve',
          'The same error twice stops the retries',
        ],
      },
      branches: {
        eyebrow: 'Workspaces',
        title: 'Changes wait on their own branch',
        body: 'Each step works in its own copy of your code, so agents cannot trip over each other. When the run ends, the work waits on a branch in your project.',
        points: [
          'Nothing is pushed',
          'Nothing reaches your own branch until you take it',
          'A real conflict names the branches where the work is kept',
        ],
      },
      triggers: {
        eyebrow: 'Triggers',
        title: 'Triggers and recovery',
        body: 'Start a workflow when a Linear issue is assigned to you, checked every 1, 5, 15 or 60 minutes. Interrupted work is recovered through the same start path, not a second engine.',
        points: [
          'One issue starts one run, even after a restart',
          'The API key is written once and never shown again',
          'Deleting a trigger cancels what was waiting, visibly',
        ],
      },
      lab: {
        eyebrow: 'Lab',
        title: 'Try an agent on your own code',
        body: 'Pick an agent and RigOne drafts test cases from your project, so you can see whether a change to that agent made the work better.',
        points: [
          'Cases come from your code, not a generic benchmark',
          'Compare an agent before and after you edit it',
        ],
      },
      evidence: {
        eyebrow: 'Evidence',
        title: 'Evidence that outlives the terminal',
        body: 'Every run leaves a folder you can open: what each step handed over, the full answers, logs and a results file.',
        points: [
          'Run receipts and full attachments for long answers',
          'Proof that cancelled processes are really gone',
          'A diagnostic bundle you can copy in one click',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Compare',
    title: 'RigOne and the other ways to run coding agents',
    lead: 'There are good tools for running one agent, or many side by side. RigOne is for when the work is a sequence of steps you want to run again.',
    caption: 'RigOne compared with four kinds of tool for running coding agents',
    capability: 'Capability',
    columns: ['Agent CLI on its own', 'Parallel-agent desktop apps', 'Terminal session managers', 'Cloud coding agents'],
    examples: ['Claude Code, Codex CLI', 'e.g. Conductor', 'e.g. Claude Squad', 'e.g. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Yes', partial: 'Partly', no: 'No', unknown: 'Not stated' },
    notStated: 'Not stated publicly',
    rows: {
      local: {
        criterion: 'Works on your own Mac and folder',
        cells: ['', '', '', '', 'Runs in the provider’s sandbox'],
      },
      mix: {
        criterion: 'Claude Code and Codex in one workflow',
        cells: ['', 'One vendor per session', 'Side by side, not in one flow', 'Side by side, not in one flow', 'One vendor per service'],
      },
      graph: {
        criterion: 'Saved multi-step workflow you can run again',
        cells: ['Visual graph', 'Scripts, hooks and subagents', '', '', ''],
      },
      isolated: {
        criterion: 'Parallel work in isolated copies of the code',
        cells: ['One workspace per step', 'Worktrees you manage', 'One worktree per agent', 'One worktree per agent', 'One sandbox per task'],
      },
      checks: {
        criterion: 'Checks run by the tool, separate from the agent’s claim',
        cells: ['“Nothing ran” is never a pass', 'With your own hooks', '', '', 'CI on the pull request'],
      },
      budget: {
        criterion: 'Spend limit and concurrency per run',
        cells: ['', 'Per-session limits only', '', '', 'Plan limits'],
      },
      platforms: {
        criterion: 'Platforms',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Browser'],
      },
      price: {
        criterion: 'Price',
        cells: ['Free; uses your Claude Code or Codex plan', 'Included with the vendor plan', 'See the product’s site', 'Free, open source', 'Included with the vendor plan'],
      },
    },
    footnoteHtml: 'Compared by kind of tool, from public documentation, in October 2026. Individual products differ and change quickly. Found a mistake? <a href="{issues}">Tell us</a>.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions people ask',
    leadHtml: 'More in the <a href="{docs}">documentation</a>. Something missing? <a href="{issues}">Open an issue</a>.',
    items: [
      {
        question: 'What do I need to run RigOne?',
        answer: 'A Mac with Apple Silicon and macOS 13 or later, and at least one agent CLI installed and signed in: Claude Code or Codex.',
      },
      {
        question: 'Does RigOne send my code anywhere?',
        answer: 'RigOne itself runs on your Mac and works in your folder. The agents you start are Claude Code and Codex, so the code they read goes to their providers exactly as it would if you ran them in a terminal.',
      },
      {
        question: 'How much does it cost?',
        answer: 'RigOne is free to download and use. Runs use your own Claude Code or Codex plan, and you can set the most a run may spend before it starts.',
      },
      {
        question: 'Will an agent push to my repository?',
        answer: 'No. Each step works in its own copy of the code, and the result waits on a branch in your project. Nothing is pushed, and nothing reaches your own branch until you take it.',
      },
      {
        question: 'Can I use only Claude Code, or only Codex?',
        answer: 'Yes. One installed and signed-in CLI is enough. Mixing both is useful when you want one vendor to write and the other to give a second opinion.',
      },
      {
        question: 'Is there a Windows, Linux or Intel version?',
        answer: 'Not today. RigOne is built for macOS 13 or later on Apple Silicon.',
      },
      {
        question: 'I used Loadout. What happens to my data?',
        answer: 'Loadout is the earlier name of RigOne. Version 1.1.0 moves your library from ~/.loadout to ~/.rig-one on first launch, and each project folder’s .loadout/ to .rig-one/ when you open it. macOS sees RigOne as a new app, so it asks for permissions again.',
      },
    ],
  },
  cta: {
    title: 'Put your agents on one canvas',
    lead: 'Free for Apple Silicon Macs. Signed with Apple Developer ID and notarized by Apple.',
    download: 'Download for macOS',
    docs: 'Read the docs',
    compare: 'How it compares',
    note: 'Needs Claude Code or Codex installed and signed in.',
  },
  changelog: {
    eyebrow: 'Changelog',
    title: 'What changed, release by release',
    lead: 'Each release says what changed, what to do when you update, and the checksum of the signed build. Builds before 1.1.0 were released under the name Loadout.',
    download: 'Download the latest',
    github: 'Releases on GitHub',
    latest: 'Latest',
    englishNote: 'Release notes are written in English.',
  },
  docs: {
    eyebrow: 'Documentation',
    title: 'Using RigOne',
    lead: 'Install it, build a workflow, run it against a project and read what happened.',
    onThisPage: 'On this page',
    englishNote: 'The documentation is written in English.',
    helpHtml: 'Something unclear or wrong here? <a href="{issues}">Open an issue</a>.',
  },
  footer: {
    tagline: 'macOS-first · local-first · your own code',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Website under <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
