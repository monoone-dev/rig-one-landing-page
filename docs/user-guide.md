# Using RigOne

RigOne is a native macOS IDE for coding agents. This guide covers installing it, a
step-by-step tutorial for your first run, every screen of the app, handing a whole goal to Auto,
following your work from your phone and reading what happened. It describes RigOne 1.11.0. The
website renders this file as its documentation pages.

## Getting started

Install RigOne, check that the download is genuine and open it for the first time.

### What you need

- A Mac with **Apple Silicon** and **macOS 13** or later.
- At least one agent app, installed and signed in: **Claude Code**, **Codex** or **OpenCode**.
  RigOne starts these programs for you; it does not replace them, and runs use your own plan with
  each vendor.
- A project folder on this Mac — usually a Git repository — for the agents to work in.

### Install

1. Download `RigOne_<version>_aarch64.dmg` from the
   [latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest).
2. Open the DMG and drag **RigOne** into **Applications** in the install window.
3. Open it from Applications.

The disk image and the application inside it are both signed with Apple Developer ID, notarized
and stapled. If macOS says the app "cannot be opened" or "is damaged", do not work around it:
delete the file, download it again, and
[open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new) if it happens
again.

### Verify the download

Each release lists the SHA-256 of its DMG and carries a `SHA256SUMS.txt`. In Terminal:

```bash
shasum -a 256 ~/Downloads/RigOne_<version>_aarch64.dmg
spctl --assess --type open --context context:primary-signature -v ~/Downloads/RigOne_<version>_aarch64.dmg
```

The first line must match the checksum in the release notes. The second must answer `accepted`
and `source=Notarized Developer ID`.

### First launch

On first launch RigOne asks your agent apps for their versions. The account button at the bottom
of the sidebar carries a green dot when Claude Code or Codex answers, and **Settings → Health
check** lists everything RigOne needs, with a button to fix what does not work. An empty RigOne
opens on a new task and says in words what each place is waiting for.

macOS asks for each permission the first time it is needed: access to the folders you work in,
sending events to other applications, the microphone if a workflow drives an app that records,
and notifications, which RigOne uses when a decision waits for you while it is in the background.

The interface follows the macOS language. RigOne speaks English, Polish, German, Spanish, French,
Italian, Portuguese, Chinese and Japanese; choose another in **Settings → Appearance**. What agents
and the engine write in a run stays in English, and this guide uses the English names of buttons
and screens.

## Tutorial: your first run, step by step

This tutorial takes you from an empty RigOne to a finished run and a goal handed to Auto. It uses a
small web project as the example; any folder with code works. Plan on about fifteen minutes, most of
it spent watching the agents work. The screenshots show the shipped app with demo data.

### Step 1: open a project and check your agent apps

Open the project menu at the top of the side panel and choose **Add a workspace**: give it a
**Name**, press **Choose folder** and pick your project. RigOne opens a new task that asks
**What should I do?**, and the badge in the corner says **no agents yet**.

![The new task screen of an empty project: What should I do?, a goal typed in the box, the Auto, Plan first and One agent modes, and the no agents yet badge in the corner.](../public/screenshots/tutorial-welcome.webp)

Before you build anything, open **Settings → Health check** and check that at least one agent app
says **OK**. If one is missing, install it or sign in — run `claude`, `codex` or `opencode` once in
Terminal — and press **Run again**.

You do not need an agent to start talking: in **One agent** mode the box answers in the project
folder with the agent app shown beside it. Only `/run` or a goal in Auto starts real work.

### Step 2: make an agent with one job

Open **Agents** (⌘1) and press **＋ Create**. Give the agent a **Name**, a one-line **What it
does**, and **Instructions** in your own words. Then set its **Run settings**:

- **Runs with** — Claude Code, Codex or OpenCode, with the model and effort the app offers. Press
  **Change** to pick them.
- **Can it change files** — keep **Look only** for agents that read, research or review. Only the
  agent that writes the change needs more.
- **Can it reach the web** — reading and searching only; it never widens what the agent may do with
  your files.
- **Give up after** — a timeout, stopped the same supervised way as **Stop**.

![The Agents screen with a new agent called Reviewer: its name, what it does and its instructions filled in, and run settings below with Claude Code, Look only, Read and search the web, and 30 minutes.](../public/screenshots/tutorial-agent.webp)

Press **Save**. For a first workflow, make three agents: one that reads and finds the cause, one
that writes the change, and a reviewer. **Create from description** drafts an agent from a sentence
when you would rather edit than write.

### Step 3: put agents in a row

Open **Workflows** (⌘2) and press **＋ Create**. Use **＋ Add** to place a step for each agent and
draw arrows between them. An arrow means "runs after", nothing else. Two steps that come after the
same step start together, so a test check and a second opinion can run side by side once the fix is
written.

![The canvas of Ship a feature: Reproduce, then Fix, then Tests pass and Second opinion side by side.](../public/screenshots/canvas.webp)

Add **A step that runs a check** after the step that changes code, with the command that proves the
work, such as `npm test`. RigOne runs it itself and records what it found; the agent does not get
to say it passed. Give the reviewing step an agent from another vendor, so the second opinion comes
from a different model.

### Step 4: read the plan, then start

Open **Tasks** (⌘3) and press **run a saved workflow** at the bottom of the new task, or press the
play button beside a workflow in **Workflows**. RigOne picks a workflow for you; choose another from
the menu next to its name. The header shows the workspace and the number of steps, and the plan on
the right lists every step with the one it waits for.

![The Tasks screen ready to run Ship a feature: four waiting steps in the plan on the right, each naming the step it runs after, the Agents slider in the header, and Learn from this run ticked.](../public/screenshots/tutorial-ready.webp)

Set **Agents** in the header — how many steps may work at the same time. Leave **Learn from this
run** ticked to get up to three suggested notes afterwards. Press **Run workflow**, or type `/run`
in the command bar. Before the first step starts, RigOne checks the whole graph and names any step
whose model, effort or permissions will not work.

### Step 5: watch, and answer when asked

The stream in the middle carries what every agent said, in order, with the files it read and
edited and the commands it ran. The plan on the right shows each step's state.

![The Tasks screen while Ship a feature runs: what each agent said in the stream, three steps done in the plan, and Second opinion asking whether to ship the fix now or add the cleanup first.](../public/screenshots/run.webp)

When an agent asks something, the question is pinned in the plan with numbered answers, and the
task in the side panel says **waits**. Everything that does not depend on the answer keeps going.
You can keep writing to the Lead in the command bar; a message sent while it works joins its current
turn. **Stop** ends every running agent and records the proof that the processes are gone.

### Step 6: take the result

Each step ends **done**, **failed**, **stopped** or **not run**, and the run keeps apart what the
agents said, what the checks found and what you approved. The plan lists the files that changed.
Everything the agents changed waits on its own branch in your project: nothing is pushed, and
nothing reaches your own branch until you take it. Review that branch with Git as you would a
colleague's, then merge it or delete it.

If you left **Learn from this run** on, open **Knowledge** and press **Keep** on the notes worth
keeping. An approved note goes into every future prompt in this project.

### Step 7: hand a whole goal to Auto

Once a workflow has run, try Auto. Press **＋** next to **Tasks** in the side panel (⌘N), choose
**Auto**, write the goal in a sentence and press **Run**. The line under the box says what Auto will
do; its **rules** link opens **Settings → Auto**.

![The new task screen with Auto chosen: a goal asking RigOne to let people export their invoices as CSV from the billing page, with tests, and the line saying that with YOLO on, Auto agents have your access.](../public/screenshots/tutorial-auto.webp)

The Lead picks the agents it needs, builds ordinary workflows for the parts of the goal, runs them
and reads the results until every part is verified by checks and review. Decisions that wait for
you collect in **Needs you**, and macOS tells you when one waits while RigOne is in the background.
The goal is saved, so **Resume a goal** picks it up later. Read [Auto](#auto) before you turn on
**Full access for agents (YOLO)** in a project you care about.

### Working efficiently

- **One job per agent.** Small agents are easier to reuse across workflows and easier to fix when a
  step goes wrong.
- **Only the writer writes.** Keep readers, researchers and reviewers on **Look only**; it also
  lets RigOne run them beside each other without overlapping writes.
- **Split independent work.** Steps that do not depend on each other go on separate branches of the
  graph, and **Agents** sets how many run at once.
- **Prove every change.** Put a check after each step that changes code. "Nothing ran" never counts
  as a pass.
- **Mix vendors.** A second opinion from Claude Code on a change Codex wrote, or the other way
  round, catches what one model misses.
- **Give context once.** Put specifications, screenshots and PDFs in a **Context** set and attach it
  to the steps that need it, instead of pasting them into instructions.
- **Break a big goal down first.** **Plan first** (or `/tasks`) turns a goal into a list you review
  before anything runs.
- **Let RigOne draft the rig.** **Generate project setup** in **Project rig** proposes agents and
  workflows from your repository; nothing changes until you choose **Apply setup**.
- **Move with the keyboard.** ⌘K finds any place, workflow or agent; ⌘N starts a task; ⌘1 to ⌘9
  open the screens; ⌘⌥1 to ⌘⌥9 pick a project tab.

## Concepts

RigOne uses a small, fixed vocabulary. The same words appear on screen, in error messages and here.

| Word | Meaning |
| --- | --- |
| **Project** | A folder on your Mac, added as a workspace. Agents, workflows, knowledge and connections belong to a project. |
| **Agent app** | The program that does the work: Claude Code, Codex or OpenCode. |
| **Agent** | A role: one job, one instruction, an agent app, a model and permissions. |
| **Workflow** | A saved graph of steps you can run again. |
| **Step** | A tile in a workflow and a card in the plan. |
| **Runs after** | What an arrow means. Nothing else. |
| **Task** | One line of work in the side panel: a conversation, a run or an Auto goal. |
| **Run** | One execution of a workflow against a project. |
| **Workspace** | A project folder in the project menu; a step works in a private copy of it. |
| **Check** | A command RigOne runs itself to decide whether a step's work holds. |
| **Second opinion** | A review by another agent. It can raise concerns; it can never approve or block. |
| **Note** | Something learned in a run, kept for future prompts once approved. |
| **Skill** | Instructions an agent uses when they fit the work, kept in a `SKILL.md` file. |
| **Context set** | Named material — text, images, PDFs — prepared for the steps that need it. |
| **Connection** | A tool server an agent may use, such as a browser, a design tool or an issue tracker. |
| **Lead** | The agent you talk to in the command bar. It can prepare; only `/run` starts work. |
| **Auto** | A mode in which the Lead plans, runs and verifies a whole goal across several workflows. |
| **Goal** | What you hand to Auto, in a sentence. It is saved, so you can resume it later. |
| **Needs you** | The one list of every decision that waits for you. |
| **Project rig** | One page with everything a project has: agents, workflows, knowledge, triggers, Auto rules. |
| **Board** | A shared list of tasks with comments and members, encrypted on your Mac. |
| **Remote access** | Following and steering your work from a paired phone or tablet. |

## The window

The RigOne window has three columns: a narrow rail of icons on the far left, a side panel with your
tasks and boards, and the screen you opened. Project tabs run along the title bar at the top.

In the default **Surface** theme the window is drawn as islands on glass: the rail and the title
bar sit on the glass, the side panel and the screen are rounded islands, and your macOS wallpaper
shows through around them.

![The Go to anything list opened with ⌘K over the window: every section with its G shortcut, and the rail and side panel behind it.](../public/screenshots/search.webp)

### The rail

The rail holds every place, top to bottom. Each icon names its place when you point at it.

| Icon | Place | Shortcut | What it is for |
| --- | --- | --- | --- |
| Magnifier | **Search** | ⌘K | Jump to any place, workflow or agent |
| Three joined dots | [Workflows](#workflows) | ⌘2, G W | Steps in a row, on a canvas |
| Two squares | [Agents](#agents) | ⌘1, G A | The roles that do the work |
| Two stacked bars | [Knowledge](#knowledge) | ⌘5, G K | Notes and skills that go into prompts |
| Page | [Context](#context) | ⌘6, G C | Material prepared for steps |
| Clock | [Triggers](#triggers) | ⌘4, G T | Runs that start on their own |
| Bar chart | [Lab](#lab) | ⌘7, G L | Test agents on your own cases |
| Sliders | [Project rig](#project-rig) | G P | The whole project on one page |
| Book | [Skills](#skills) | — | The skills the project's files give its agents |
| Phone | [Remote access](#remote-access) | — | Shown only while Remote access is on |
| Gear | [Settings](#settings) | ⌘8, G S | What RigOne does by default |
| Initials | Account | — | Agent apps, plans, gateways, GitHub account |

[Tasks](#tasks) (⌘3, G R) and [Boards](#boards) (⌘9, G B) open from the side panel.

### The side panel

- **The project menu** at the top lists your workspaces. It also holds **Import setup from
  project** and **Add a workspace**.
- **Tasks** lists the tasks of this window, each with a dot for its state — working, waiting for
  you, finished — and how long it has run. **＋** (⌘N) starts a new task. A task's menu renames or
  closes it. Your tasks come back, in the same order and with the names you gave them, after you
  quit and reopen RigOne.
- **Boards** lists your boards with the number of open tasks; **＋** creates one. Boards are
  optional.
- **Plan limits** at the bottom show how much of the Claude and Codex plans is used, as each agent
  app reports it.

### The account menu

The initials at the bottom of the rail open **Account and agent apps**:

- **Agent apps** — Claude Code and Codex with their versions, or what is missing, with **Retry**.
- **Plans** — how much of each plan is used.
- **Model gateways** — the gateways you added in Settings.
- **Models on this Mac** — the local models Ollama offers, if it runs.
- **Connections** — the tool servers turned on in this project.
- **GitHub account for this folder** — which GitHub login commits and pull requests go out as.

## Projects side by side

Each project you open becomes a tab at the top of the window. A colour tile tells projects apart,
in the tabs, the project menu and the panes, and a dot says whether the project is **working**,
**waiting on you** or has **nothing running**. **＋** opens another project as a tab.

A plain tab holds one project. Projects shown together form one split tab, up to three side by
side:

- **Show another project beside this one (⌘⌥\\)** at the end of the tab strip splits the tab you
  are in. A tab's menu offers **Open side by side with** the project you are in.
- **Drag a tab** onto another tab to join them, onto the empty part of the strip to take it out of
  a split tab, or onto the edge of a tab to reorder.
- **Separate the projects** turns a split tab back into plain tabs.
- **Drag the edge** between two panes to resize them; a double-click shares the width evenly.

Click a pane to work in it; its **×** closes the pane while the project stays open. Every project
keeps its own tasks, runs and questions, so a run keeps going in one pane while you start a task in
another. Your tabs and panes come back after you quit and reopen RigOne.

![Two projects side by side: client-website, where Ship a feature waits for an answer from Second opinion, and docs-site, with a new Auto task being written.](../public/screenshots/projects.webp)

## Search and keyboard shortcuts

**Search** (⌘K) opens **Go to anything**: type part of a name to jump to a section, start a new
Claude Code, Codex or OpenCode conversation, break a goal into tasks, copy diagnostics, open a saved
workflow or an agent. Press **?** or **Keyboard shortcuts** for the full list.

| Keys | Does |
| --- | --- |
| ⌘K | Open Go to anything |
| ⌘N | Start a new task |
| ⌘1 … ⌘9 | Agents, Workflows, Tasks, Triggers, Knowledge, Context, Lab, Settings, Boards |
| G, then a letter | Go to a place: A, W, R (Tasks), T, K, C, L, S, B, P (Project rig) |
| ⌘⌥\\ | Show another project beside this one |
| ⌘⌥← / ⌘⌥→ | Move to the pane on the left or right |
| ⌘⌥1 … ⌘⌥9 | Pick a project tab |
| ⌘⌥W | Close the pane you are in |
| ? | Show the shortcuts |
| Esc | Close |

## Tasks

**Tasks** is where you give work to agents and watch it happen: talk to the Lead, run a saved
workflow, hand a goal to Auto and answer what agents ask.

### A new task

A new task asks **What should I do?** Write the goal and choose how it runs:

- **Auto** — RigOne picks the agents and runs the goal until it is verified. See [Auto](#auto).
- **Plan first** — RigOne writes the task list first; nothing runs until you start it.
- **One agent** — one agent works on it in this folder. Type `/` for commands.

![A new task in client-website: a goal typed under What should I do?, the Auto, Plan first and One agent modes, the agent app and model, and three tasks in the side panel.](../public/screenshots/tasks.webp)

Beside the modes, the pill shows the agent app, model and effort; open it to switch between Claude
Code, Codex and OpenCode, or to make the choice the default for this project. **+ board** files the
task on a board. **Run** (Enter) starts it; Shift+Enter adds a line.

The badge in the corner says **rig ready** or **no agents yet** and opens Agents. At the bottom,
**rig** counts this project's agents, workflows and skills, **run a saved workflow** opens the plan
of a workflow, and **open rig →** opens [Project rig](#project-rig). Saved Auto goals and board tasks
appear under **Pick up where things are**.

### Run a saved workflow

The header names the workflow — RigOne picks one; choose another from the menu next to its name —
and its state: **Ready to run**, **Running**, **Finished**, **Failed**, **Stopped** or
**Interrupted**. On the right of the header:

- **Connections** — which tool servers are connected for this task.
- **Run goal…** — an optional sentence for what this run should build.
- **Run workflow** — starts a new run of the whole workflow from the beginning. While the run
  works, the same button reads **Stop**.
- **Agents** — how many steps may work at the same time. The limit is real: independent branches do
  run in parallel up to it. More agents finish sooner but use more memory.

Before any step starts, RigOne checks the whole graph: required inputs, permissions, and every
step's model and effort against what your agent app reports. An unsupported choice stops the run
before earlier agents spend time, and names the step that needs attention. These checks cannot
promise that the network or your quota stays available for the whole run.

A spending warning is optional and off by default. Turn on **Warn about spending** in **Settings →
Runs** to be told when a run reaches an amount; RigOne warns, it does not stop the run, and it
cannot count a model whose price it does not know.

### Watching a run

The stream in the middle carries what every agent said, in order, with the files it read and
edited, the commands it ran and what they returned. When two or more agents speak, a menu in the
header shows **All conversations** or one of them. **Settings → Appearance → Conversation view**
draws the stream as a **Terminal** log (the default) or as **Agent chat** bubbles.

The plan on the right reads top to bottom. Each step card names the step it waits for, its agent
app and model, and its state; a step that waits for something says what — a free place, the
heavy-work slot, a Rust build, a usage limit or earlier steps — with numbers and since when.
**Checks** and the files that changed follow the steps. **Hide plan** folds the column.

When an agent asks something, the question is pinned in the plan with numbered answers and a field
for your own words; **Dismiss** closes it without answering, and the Lead hears that you did.
Everything that does not depend on the answer keeps going. The badge **1 needs you** under the
stream opens [Needs you](#needs-you).

Outcomes say what really happened: **done**, **failed**, **stopped** or **not run**. An agent
saying "Done" never hides a later failure. Repeated runs of the same step share one card with a
count. A long conversation keeps its newest lines on screen and brings earlier ones back as you
scroll up.

Some work waits its turn on its own, whatever the limit: only one Rust build runs at a time on your
Mac, whichever step or shell started it, while tests, running apps and reviews carry on beside it.
When a provider is at capacity or a usage limit is reached, the step waits, says when it tries
again, and continues the same conversation.

### The command bar

The bar at the bottom talks to the Lead. The pill on its left chooses the agent app, model and
effort for this conversation, and **YOLO mode** in it lets the agent skip its permission prompts;
the **Auto** switch turns Auto on for the task. The Lead can talk things
through and prepare, but only `/run` starts work.

| Command | Does |
| --- | --- |
| `/run` | Start a workflow. Add what to build after its name. |
| `/ask` | Start one agent. Add what it should do after its name. |
| `/start` | Start a command and keep it running. It shows up in the agents list. |
| `/tasks` | Break the goal into tasks you can review — nothing runs until you press Run. |
| `/history` | Show what has run in this folder. Add a word to narrow the list. |
| `/open` | Choose a folder to work in. |
| `/stop` | Stop the run that is going. |

A message you send while the Lead is working joins its current turn, and the Lead answers it before
it carries on. If the Lead is inside a long command, the bar says your message lands when that
command ends. **Context** above the bar attaches a context set to the conversation.

### Stopping a run

**Stop** ends the whole process group of every running agent, then verifies that the processes
are gone and records the proof with the run. **Interrupt** stops only what the Lead is doing now
and lets it answer you.

## Auto

Auto hands a whole goal to the Lead. Start a task in **Auto** mode, or turn on the **Auto** switch in the
command bar, and write what you want in a sentence. The Lead picks the roles and skills it needs,
builds ordinary workflows for the parts of the goal, runs them, reads the results and chooses the
next part, until every part is verified. You can keep talking to it while it works.

- **RigOne decides when work is verified, not the Lead.** A part counts as done only when its
  checks and review prove it. A review that fails reopens exactly the result it judged. Work the
  Lead does itself shows as "Lead says done · not verified" until an independent review and the
  checks pass.
- **Results arrive as in any run.** Auto's workflows work in their own copies, and the result is
  committed with a conventional message. Pushes and pull requests are checked against the GitHub
  account chosen for the project and show "Pushed as …". An Auto step uses that account only when
  its agent's **More settings** has **Allow GitHub writes in Auto** on.
- **The plan shows the parts.** With Auto on, the plan column is **Agents & work**. Its **Work**
  list groups each part of the goal under **Needs attention**, **In progress**, **Up next** and
  **Finished**, with its state — waiting, running, ready to verify, completed, needs repair. Open a
  part for its **Scope**, the **Full report** and **Technical details**, such as where its code was
  saved. The header counts how many parts are verified.
- **Saved goals.** A goal is saved where it reached, and a stopped goal offers **Resume goal** to
  carry on with one click. **Resume a goal** lists the saved ones. Each task runs its own goal; up
  to three goals work in one folder at a time, and more wait their turn.
- **Waiting for something.** The Lead can set a condition to wait for: a command RigOne runs on an
  interval until it succeeds or a deadline passes. The stream says what it waits for and until
  when. When the condition is met, the Lead continues the goal, also after RigOne restarts. If time
  runs out, RigOne asks you what the Lead should do now.
- **When the Lead stops early.** A Lead that stops while its goal still has work and nothing is
  running starts again on its own, spaced out and at most three times without progress.

### Taking over, pausing and stopping

- **Take over** stops the Lead's current reply. The goal keeps going, and the Lead comes back when
  there is work for it.
- **Stop ▾ → Pause Auto** starts no new work until you press **Resume**; running workflows finish.
- **Stop ▾ → Stop Auto** says how many workflows it will end and asks first. The goal is saved where
  it reached.

### Full access

**Full access for agents (YOLO)** in **Settings → Auto** is on by default. With it on, agents skip
their own permission prompts, like an agent you run yourself in YOLO mode. With it off, each agent
app uses its own safer permission mode and still works without asking. Either way every step works
in its own copy, with your sign-ins, and the project's `deny` rules, the GitHub account check and
keeping secrets out of command lines stay in force. Each step's screen says whether it ran with full
access.

For a conversation outside Auto, **YOLO mode** in the agent app, model and effort pill makes the
same choice. It is set when the conversation starts; start a new conversation to change it.

In Auto the Lead can give a step any Connection you have turned on. A Connection you turned off
stays off, and a plan that names it is refused by name.

### Needs you

Every decision that waits for you sits in one list, **Needs you**. Each card says what it is about
and what happens after each answer; answers are numbered, some cards take your own words, and a
question can be dismissed, which the Lead hears. A decision is repeated once an hour, at most three
times. When RigOne is not in front, macOS tells you a decision is waiting, or that a goal finished
or stopped, and the Dock icon shows how many decisions wait.

| Card | Asks |
| --- | --- |
| **Question** | What the Lead or a planner wants to know |
| **Approval** | Let a part write outside its copy? |
| **Exclusion** | Leave a part out of this goal? |
| **Retry** | Allow one more try? |
| **Checkpoint** | A step in the workflow that asks you |
| **Design review** | Accept the look of a changed screen, or mark changes |
| **Failing tests** | A check failed on tests this goal did not change: fix them here, move to the latest main, or pause |
| **Usage limit** | Wait for the reset, or use another agent app? |
| **Changed definitions** | Admit agents or workflows that changed while the goal ran? |
| **Same requirement failed** | Three tries in a row failed on one requirement: accept with a recorded gap, try once more, carry it to the next stage, or exclude the part |
| **Recorded gap** | Accept a part with a gap that stays in the goal summary? |

**Design review.** When an Auto result changes screens, RigOne shows you the tester's screenshots
before the result is recorded. Press **I accept**, or **Mark changes**: click a spot on a
screenshot, write what should change and **Send remarks**. The Lead turns each remark into the next
repair. A change to interface files that only touches logic skips the review, once an independent
check of the whole change confirms that nothing visible changed; if that cannot be shown, the
review is asked for as usual. Turn the review off in **Settings → Auto**.

## Boards

**Boards** (⌘9) holds shared boards of tasks, with comments and members. It works without choosing
a folder, and together with Remote access it is the only part of RigOne that needs an account:
sign in to your MonoOne account in Boards or **Settings → Account**. An IndexOne account signs in
with the same email and password. **Explore a preview** opens a demo board without an account.

![A board called Product work in the Board view: Backlog, To do, In progress, Needs attention and Done columns with task cards, and the board in the side panel.](../public/screenshots/boards.webp)

- **Encrypted on your Mac.** Tasks, comments and activity are encrypted and signed before they
  leave your Mac; the server only relays ciphertext. Board keys are kept in the macOS Keychain.
- **Members and devices.** Invite people by email as **Editor** (changes tasks and posts) or
  **Viewer** (reads). Before a new member or device receives a board key, both sides compare the
  same fingerprint.
- **Offline.** Changes made without a connection wait on this computer and are sent when it returns.

### Board and List

A board has two views. **Board** shows columns — by default Backlog, To do, In progress, Needs
attention and Done — and cards you drag between them. **List** shows the same tasks as a table with
assignees, due date, priority and the latest run. **All tasks**, **Assigned to me** and **Archived
tasks** filter both. Each task gets a short number such as `PRO-12`.

### A task

Opening a task shows its properties — status, assignees, due date, priority, tags, what it depends
on, the repository, workflow and model — its description, **What will show it worked**, and
subtasks. **Activity** keeps the comments and a task history of who created it, checked subtasks
and started runs; **Runs** keeps what ran.

### Run a task from its board

**Run with Auto** on a card, or the **Runs** tab of a task, starts it as a saved workflow or as an
Auto goal in a folder you choose on this Mac. One computer claims the task; a second start
elsewhere is refused with the name of the device that runs it. Progress and the final status appear
on the board for every member. A question from the agent appears in the task: a member who can edit
the board answers it there, and RigOne passes the answer to the run exactly once. While an Auto runs
on your Mac, a comment can go **To Auto (steer the work)** instead of **To the team**.

## Triggers

**Triggers** (⌘4) start a workflow without you pressing Run. Today the supported source is
**Linear**: an issue newly assigned to you starts one run.

![The Triggers screen: two Linear triggers watching for issues assigned to you, one starting Fix a bug every 5 minutes and switched on, one starting Review a pull request every 15 minutes and switched off.](../public/screenshots/triggers.webp)

Press **Create trigger** and set:

- **Environment variable name** — the variable that holds your Linear key; put the key there before
  testing or saving. **Test connection** checks it without starting anything.
- **Workspace** — runs from this trigger always use this folder, even while another one is open.
- **Check every** — 1, 5, 15 or 60 minutes.
- **Workflow** — what runs.

Each trigger in **Watching** shows what it last did and a switch to turn it on or off.

- The first check only arms the trigger; issues already in your backlog do not start runs.
- One issue starts one run, even across a restart. Editing an issue does not start a second one.
- Deleting a trigger asks first and discards any issue waiting to start.

Triggers run while RigOne is open; there is no background daemon.

## Reviewing a step

Click a step in the plan to open it. Its screen shows what it was given, what it produced and what
it said, with **Cost** beside its status and **Run this step again** in the header. Under **Changed
lines** the step reads like a review in an IDE:

![The Fix step of Ship a feature: the changed lines of validate.ts and its test, a comment on line 15 asking to strip zero-width spaces, and Send comments to the agent.](../public/screenshots/review.webp)

- **Files, hunks and lines.** Each changed file says whether it is new, changed, deleted, renamed
  or binary, with its added and removed lines. **Open in editor** opens the file at that line in
  your editor.
- **Comments on a line.** Click a line, write a comment and choose **Add comment**. **Send comments
  to the agent** sends them as one message that names every file and line. A step that is still
  working reads it after its current turn; a finished step carries on in its own folder.
- **Functions and types changed** lists each one with the places that use it.
- **Preview this step** starts your command — such as `npm run dev` — in the step's own folder
  with a free port in `PORT`. **Open preview** shows the app in a window of its own; **Open in
  browser** and **Stop** do what they say.
- **Saved versions of these files.** RigOne keeps a version after each turn. **Go back to this
  version** restores one; what is there now is kept as a new version, so you can always return.

When the work of the steps is brought together and two of them changed the same lines, RigOne
offers a choice instead of stopping: keep that step's lines where they overlap, or keep the other
steps' lines.

![The Fix step: two changed functions used in two places each, the app running from the step at a local address with Open preview, and three saved versions of the files.](../public/screenshots/review-tools.webp)

## Checks and second opinions

When a step finishes, RigOne runs the checks itself; it does not ask the agent whether it worked.
At the end you see three things that are never confused with each other:

1. **what the agent said** it did,
2. **what the checks actually found**,
3. **what you approved**.

"Nothing ran" is its own outcome and never counts as a pass: a green exit code without proof that
tests ran is not accepted as a green check. Vitest results count individual tests, not test files,
and a check shows live diagnostics while it runs. When required test evidence is missing, the work
a step completed is kept. A check whose program could not be found says so
instead of reporting a code failure. The same error twice stops the retries instead of burning more
attempts.

A **second opinion** is a review by another agent — often another vendor. It can raise concerns
for you to read; it can never approve or block a run by itself.

## Where the changes go

Each step works in its own copy of your code, so agents cannot trip over each other. When the run
ends, everything the agents changed waits on its own branch in your project. **Nothing is pushed,
and nothing reaches your own branch until you take it.** If two branches really conflict when work
is combined, the message names the branches where the work is kept. Files ignored by the project,
such as build caches, are skipped, and step folders are removed when a run ends.

Two steps that would write to overlapping places at the same time are refused before the first
process starts.

## Safety model

RigOne treats orchestration failures as product failures, not terminal noise:

- overlapping write scopes are refused before the first process starts;
- cancellation ends the whole process group and verifies that it is dead;
- timeouts go through the same supervised shutdown path;
- prompts and secrets go through stdin, never command-line arguments;
- child environments are rebuilt from an explicit allowlist;
- unknown vendor events are recorded and ignored instead of crashing the run;
- a green exit code without proof that tests ran is not accepted as a green check;
- files are the source of truth, while the SQLite index can be deleted and rebuilt.

Settings passed through to an agent app can never raise an agent's file permissions; the **Can it
change files** control is the only way to do that. A project setting can never send an agent's
traffic to another address; model gateways are set in your own settings.

With **Full access for agents (YOLO)** on, Auto's agents skip their own permission prompts, as
when you run them in YOLO mode in a terminal; each step still works in its own copy. Turn it off to
let each agent app use its own safer permission mode.

### What leaves your Mac

RigOne runs on your Mac and works in your folders. The agents it starts are Claude Code, Codex or
OpenCode, so what they read goes to their providers exactly as when you run them in a terminal, and
their commands may reach the network. A model gateway receives the traffic of the agents you send
through it. A trigger talks to Linear with the key you gave it. Boards talks to the MonoOne server,
which only ever receives encrypted tasks, comments and activity. Remote access connects your paired
devices to your Mac through the MonoOne relay.

## Agents

An agent is a role you define once and reuse in any workflow. **Agents** (⌘1) lists them on the
left; the agent you open fills the right.

![The Agents screen: four agents in a list beside Scout, which runs with Claude Code, Sonnet and Medium effort, may only look and gives up after 30 minutes.](../public/screenshots/agents.webp)

### What an agent holds

- **Name** and **What it does** — a one-line description shown wherever the agent is used.
- **Instructions** — the agent's own words: what to do and how. **Taller** makes the field bigger.
- **Runs with** — the agent app (Claude Code, Codex or OpenCode), the model and the effort. The
  models and effort levels offered are the ones your app reports; **Refresh models** updates the
  list, and your choice is never replaced for you. For OpenCode you type the model name, such as
  `zai/glm-4.6`.
- **Model gateway** — send the agent through a gateway you added in **Settings → Agent apps**, and type
  the model name exactly as the gateway spells it. A Codex agent can also run a model from **Ollama
  on this Mac**.
- **Can it change files** — **Look only**, **Ask first** or **Work freely**. A step that must save a
  plan cannot use Look only; the editor points at it and offers Ask first instead.
- **Can it reach the web** — **No** or **Read and search the web**. What it may do with your files
  stays as set above.
- **Give up after** — 10 minutes, 30 minutes or no limit. A timeout ends the agent the same
  supervised way as **Stop**.

**More settings** holds the tools it may use (Claude Code only), the skills and connections it
gets, the apps it may start or stop, **Allow GitHub writes in Auto** and **Allow messages between
steps**. A name this project does not know stays visible and marked, so you can remove it before a
run refuses to start. **Advanced** passes extra options to the agent app, one per line.

**Evaluate** tries the agent in the [Lab](#lab), **Duplicate** copies it and **Delete** says how
many workflows use it before it goes.

### Create from description

**Create from description** drafts an agent from a sentence with Claude Code or Codex. The draft
says what was checked, what it guessed from your description and why it chose its settings, so you
can edit before you save.

### Bringing a setup from another project

Each project starts with an empty library. **Import setup** on the Agents screen reads a project's
own agent-app files — `.claude/`, `.codex/`, `.agents/` and open-standard files — and turns its
agents, skills, connections, workflows and notes into RigOne files. Scanning reads files only; it
does not run hooks, skills, agents or connections.

To copy what you built in another RigOne project, open the project menu and choose **Import setup
from project**. Pick a source, filter by category and tick items. Copies stay independent; the
import never overwrites existing files and never copies secrets or history.

Connections found in your personal agent-app settings arrive turned on. Connections found in a
project's files start turned off and wait for you, because a repository's settings can name any
command to run. A skill that asks for tools of its own waits until you have read it.

## Workflows

A workflow is the thing you build on the canvas and run again. **Workflows** (⌘2) lists the saved
ones: each with its description, steps and agents, how often it was used and how its last run
ended. The first one shows its chain of steps and a filled play button.

![The Workflows screen: Ship a feature with its four steps and last run, Fix a bug and Review a pull request below it, each with run, duplicate and delete buttons.](../public/screenshots/workflows.webp)

Press **＋ Create** for an empty canvas, or open a workflow to change it. The play button opens it
in Tasks, ready to run; duplicate and delete sit beside it. Row actions here and elsewhere are icon
buttons that name themselves when you point at them. A workflow Auto will not use as a
template says why, by step name, with a button that fixes it where that is possible.

### The canvas

Steps are tiles joined by arrows. **＋ Add** offers:

- **A step an agent does** — an agent does a piece of the work.
- **A step that leaves a command running** — starts an app or a server and waits until it answers,
  so later steps can test it.
- **A step that runs a check** — RigOne runs a command and records what it found.
- **A step that asks you** — the run stops and waits for your answer.
- **A way back, to try again** — a loop from a check back to the step that fixes, with a limit.

**Rearrange every step** tidies the canvas. The header shows whether the workflow is saved, a badge
with the number of things to fix — each with a button that fixes it — **Evaluate workflow** and
**Run**, which stays off while a problem exists.

A step can run several copies of itself when you want more than one take. A step with several
arrows coming in reads every handoff it receives, so "combine what the four researchers found" is an
ordinary step with four arrows in.

### The step panel

Pick a tile to set it up on the right. An agent step has **Who does this**, a **Name** and **What to
do**, plus **Context** and **Plan**. Its more settings cover the model, **Where it works** — the
project folder, a new copy of the files, or the same files as the step before — how many copies,
file access, timeout, what happens if it does not pass, whether it takes the heavy seat, project
instructions, what it hands over, what it must confirm and which skills it may use. A setting
changed for this step shows a dot and **Reset**; the agent itself stays as it is.

A check step has the **Command to run**, the output that counts as passed, the tests it must
confirm and **Heavy work** for checks that build a lot. **Files in fresh copies** above the canvas
sets which files a fresh copy brings along.

### Order and parallel branches

Order comes from the arrows. Two steps that wait for the same step start together, because the
engine really does start them together. Loops, conditional paths and retries are part of the graph,
not the engine.

Steps can also create, update or read one shared, versioned plan. Implementation and review then
work to the same recorded acceptance contract. In a Rust project, a step copy brings along — read
only — the sibling repositories the project reaches through a Cargo path dependency, so it builds as
the project does.

## Project rig

**Project rig** shows the open project on one page: who works, how, and what they know. Chips at
the top jump to each part.

![Project overview for client-website: the main branch up to date, nothing to commit, 432 MB on disk with one workspace, and four agents with their file access and model.](../public/screenshots/project.webp)

- **Repository** — read from Git and from the folder on disk: the branch and whether it is up to
  date, local and remote branches, what is left to commit with the last commit, the size on disk
  with the largest folders, and each workspace with its branch. **Open in** opens the project in
  your editor — Visual Studio Code, Cursor, Zed, WebStorm or IntelliJ IDEA, whichever you have.
- **Agents** — every agent with its file access and model; **All agents** opens Agents.
- **Workflows** — each with its chain of steps and **✓ ready**, **needs a change**, or a **Fix**
  button when steps use an agent the project no longer has.
- **Knowledge** — **Always in context** (the project's instruction files, such as `AGENTS.md` and
  `CLAUDE.md`, with their sizes), **Skills**, and **Lessons from runs** waiting for **Keep** or
  **Discard**.
- **Triggers** — what starts on its own, and whether it is on.
- **Auto rules** — whether Auto agents have your access, the **Learn from runs by default** switch,
  and **All Auto settings**.

### Generate project setup

**Generate project setup** reads your repository and proposes a rig. Its screen, **Give your agents
a head start.**, shows how setup works in three stages: **Understand the project**, **Build the
setup** and **Check and refine**. Choose the projects to analyse and, optionally, write your
guidance for the lead agent; **More options** holds the model. Setup continues in a lead
conversation, so you can adjust the files by talking to it, and **Undo** brings back the files
from before the conversation. When it is ready, **Review your project setup** shows every file it
would write. Nothing is applied until you choose **Apply setup**.

## Lab

**Lab** (⌘7) lets you measure an agent, a skill or a workflow on cases from your own code.

![The Lab with the set Scout on sign-up bugs open: two cases in two columns, Scout today and Scout with Opus, with passed and did-not-pass marks, and the columns below.](../public/screenshots/lab.webp)

- **Write cases** — the agent reads this project and drafts cases; accept or discard each under
  **Waiting for you**. While it writes, the same button stops it. **Evaluate** on an agent, a skill or a workflow starts a set for it.
- **Columns** — every accepted case runs in every column. A column is the agent with one thing
  changed, such as the model, so you can see whether the change made its work better. A skill set
  compares the work with and without the skill; a workflow set compares whole workflows on the same
  cases and starting files.
- **Run** — measures every case in every column. A mark reads **passed**, **did not pass** or **not
  measured**; click it for the details and the measured run.
- **What did not pass** — **Propose a fix** suggests new instructions for the agent, which you
  **Apply** or **Discard**.

## Knowledge

**Knowledge** (⌘5) holds what agents take into their prompts.

![The Knowledge screen: two suggested notes waiting for Keep or Discard, two notes always in context, and three skills used when they fit.](../public/screenshots/knowledge.webp)

### Waiting for you

Notes an agent suggested stay out of every prompt until you say yes. Each shows the rule, why it
was suggested, its length, its reach — this project, every project or one agent — and the run it
came from. **Keep** puts it to use; **Discard** asks once and it does not come back, even if an
agent learns it again. Leave **Learn from this run** on and RigOne keeps up to three suggested
notes from each run.

### Always in context

The project's instruction files and the notes in use go into every prompt, every time. **Stop
using** takes a note out. When memory is full, RigOne asks which note to stop using first.

### Used when they fit

Skills are used by the model when they fit the work. **＋ Add a skill** takes a link to read, a skill
you write yourself — what it is called, when to use it, what it should do — or a sentence for an
agent to write it from. Each skill can be evaluated in the Lab or removed from this project.

### What agents passed to each other

The handoffs agents left for each other as steps finished. They are plain files on disk; open them
anywhere.

## Context

**Context** (⌘6) holds named sets of material an agent works from: notes, requirements, screenshots,
PDFs and text files.

![The Context screen: three sets — Billing spec and Brand guide ready, API contract not prepared yet — and the field to name a new set.](../public/screenshots/context.webp)

### Sets

**Active** and **Archived** switch shelves, and **Search** filters them. Each set says **Ready** or
**Not prepared yet**, with **Archive** and **Delete**. Name a new set and press **＋ Create**.

### Building a set

Open a set to add material: paste text or a screenshot into **Material**, or **Add files** —
images, PDFs and text files. A PDF or image may need **Prepare** first. **Options** set what the
context is for, how the agent should organise it, rules to keep exactly, and whether Claude Code or
Codex builds it. **Build context** reads the material and organises it into topics, findings,
questions and conflicts; while it builds, the same button stops it. You can correct a finding, add a correction for the next build and save it
as a new version.

### Using a set

Attach a set to individual steps, share it across a workflow, or use it in a conversation with the
Lead through **Context** above the command bar. A run keeps the version it started with; building
the set again does not change what an existing run receives.

## Skills

**Skills** shows the skills the open project gives its agents, read from `.claude/skills` and
`.agents/skills`. It is read-only: change a skill in its files.

![The Skills screen: three skills of the project in a list, and release-notes open on the right, read only, with its instructions.](../public/screenshots/skills.webp)

The list on the left names each skill with its summary; the reader on the right shows its
`SKILL.md`, rendered, and the folders it comes from. A skill is a folder with a `SKILL.md` file. To
add skills to your RigOne library instead, use **Used when they fit** in [Knowledge](#knowledge).

## Settings

**Settings** (⌘8) opens over the window. Its pages come in five groups:

| Group | Pages |
| --- | --- |
| **Work** | Runs, Auto, Limits |
| **Project** | Project, Connections |
| **Agents** | Agent apps, and one page each for Claude Code, Codex and OpenCode |
| **Account** | Account, Remote access |
| **App** | Appearance, Storage, Health check, About |

![Settings → Appearance: the app language, the Surface, Minimalist, Studio, Linen and Feather themes, and System, Light or Dark.](../public/screenshots/settings.webp)

### Runs

Spending, history and planning defaults for every run:

- **Spending** — **Warn about spending** (off by default) and the **Default budget warning $**.
- **Planning** — **Minutes for task planning**.
- **History** — **Past runs to keep per project** (zero keeps every run) and **Learn from runs by
  default**.

### Auto

What Auto may do on this computer. **Full access for agents (YOLO)** and **Review the design before
interface changes are recorded** are both on by default; see [Full access](#full-access) and
[Needs you](#needs-you). **Credential file exceptions** lists credential files steps may read,
one absolute file path per line, such as a private registry `.npmrc`. A step may send what it reads
to the company running the model, so allow only a file you trust every step to read.

![Settings → Auto: Full access for agents (YOLO) and the design review switched on, and the list of allowed credential files.](../public/screenshots/settings-auto.webp)

### Limits

**Computer limits** shows the CPU in use now and sets how much work runs at once on this Mac, with
a suggestion for this computer where there is one:

- **How many agents at once?** — the same number as **Agents** in a run's header.
- **How many runs at once on this computer?** — when this many runs are going, the next one waits
  in line.
- **Light checks at once** and **Builds at once**, or **No build limit**.

### Project

How conversations start in the open folder:

- **Conversations** — the default agent app, model and effort for new conversations.
- **Project instructions** — whether steps and the Lead read `AGENTS.md`, `CLAUDE.md` and similar
  files as text, with their sources and limits. Private `CLAUDE.local.md` files are left out unless
  you include them.

### Connections

The tool servers enabled for new conversations in this project, each with its own switch.
Changes in your Claude Code or Codex settings are not imported on their own: **Import connections**
brings new ones in, and **Refresh list** reads the list again. A change applies to the next
conversation you start; existing conversations keep their connections.

### Agent apps

**Updates** shows the installed and newest version of each app with **Update** and **Update all**.
RigOne updates an app only when no run or conversation is using it, and with **Update automatically
when idle** it looks at most every six hours. **Editor** picks the app that **Open in** on Project
rig opens.

**Model gateways** — your own address for an agent to go through, in Anthropic or OpenAI shape.
The access key is kept in `~/.rig-one/env`, never in the agent file.

Claude Code, Codex and OpenCode each have a page of their own, with a switch, the version it
answered, how it is signed in, its default model, its tool servers — **Add to this project** copies
one into the project — and the files RigOne read. OpenCode's page also edits its settings file and
lists **OpenCode models**.

![Settings → Agent apps: Claude Code, Codex and OpenCode with their versions and an Update button each, automatic updates when idle, the editor RigOne opens and model gateways.](../public/screenshots/settings-agent-apps.webp)

### Account

The MonoOne account that Boards and Remote access use, with two-factor sign-in. Your local work
stays on this Mac either way.

### Remote access

Pair a phone or tablet and choose what it may reach. See [Remote access](#remote-access).

### Appearance

The **App language**; the theme — **Surface** (the default), **Minimalist**, **Studio**, **Linen** or
**Feather** — each in **System**, **Light** or **Dark**; an **Accent color**; and the **Conversation
view**: **Terminal** or **Agent chat**. Surface draws the window as islands on glass, with your
wallpaper showing through. Feather has light type, hairline edges and compact controls.

### Storage

How much disk space RigOne uses, and what it can clean up. Each part is listed with its size:
step copies, installed packages and build files, evidence, Lead workspaces, what runs started from
and shared dependencies, with the free space left on the disk. The page shows the last measurement
at once and measures again in the background. It says how much can be cleaned now, and **Clean
now** removes what builds can make again. RigOne also cleans up by itself after runs, and
sooner when the disk runs low.

### Health check

Whether everything RigOne needs is working: each agent app and its sign-in, the app new
conversations start with, Git, the GitHub CLI, RigOne's own files, this project and free disk space.
Each row reads **OK**, **Attention**, **Problem** or **Optional**, and a problem comes with a button
to the place that fixes it. **Run again** checks once more.

![Settings → Health check: Everything important is working, with every agent app, Git, the GitHub CLI, RigOne's files and this project marked OK.](../public/screenshots/settings-health.webp)

### About

Your version, **Copy diagnostics** for a bug report, and **Usage**, which shows each plan's limits
as the agent apps report them.

## Remote access

Remote access lets you follow and steer your work from a phone or tablet. It needs your MonoOne
account and works while RigOne runs on your Mac.

![Settings → Remote access: Allow remote access, paired devices, what your phone can do and the projects available remotely.](../public/screenshots/settings-remote.webp)

### Pair a phone

1. Sign in under **Settings → Account**.
2. In **Settings → Remote access**, turn on **Allow remote access**.
3. Press **Add a phone or tablet** and scan the code with the phone. On iPhone, add the remote page
   to your Home Screen first, then use **Copy link** on the Mac and paste the link in the Home
   Screen app.
4. Check that the codes match on both screens, choose **View and control** or **View only**, and
   press **Allow**.

While Remote access is on, a phone icon in the rail shows whether it is connected.

### What your phone can do

The remote app opens on **Start** and moves between **Projects**, **Conversations**, **Work**,
**Planner**, **Boards**, **Needs you**, **Limits**, **Computer** and **This device**:

- Answer questions and approvals waiting in **Needs you**.
- Start a **New conversation** or a **New Auto goal**, message the Lead, or stop work.
- Review a task list in **Planner** and press **Run selected tasks**; you confirm it with Face ID or
  Touch ID.
- Read your boards and comment on their tasks.
- See usage limits and how busy this Mac is.

A message you are writing is kept on the phone if the connection drops. Face ID or Touch ID is
always on, and the unlock lasts 15 minutes from Face ID. Writing outside a
copy and full Auto access are approved only on the Mac.

### Devices, projects and notifications

Each paired device shows when it was last used, its access and **Revoke**. **Projects available
remotely** turns single projects off. **Show question text in notifications** is off by default,
and **Keep this Mac awake for remote access** keeps it reachable on power, or on battery while work
is running. **Activity** lists every remote action. Turning Remote access off ends every device's
access at once.

## Updating

RigOne does not install its own updates. **Settings → About** shows your version. To update,
download the new DMG from the
[latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest) and replace
the app in Applications. Your library and project folders stay where they are. What changed in each
version is in the [changelog](https://rig-one.io/changelog/).

Claude Code, Codex and OpenCode are another matter: RigOne can update them for you in **Settings →
Agent apps**, only when nothing is using them.

After an update that changes Remote access, the release notes say so; remove the old phone in
**Settings → Remote access** and pair it again.

### Coming from Loadout

Loadout is the earlier name of RigOne. Version 1.1.0 moves your data on first launch:

- `~/.loadout` becomes `~/.rig-one`, with agents, workflows, context sets, settings, prices and the
  whole run history.
- Each project folder's `.loadout/` becomes `.rig-one/` the first time you open it.
- If both names already exist, nothing is touched and the log says so.

macOS sees RigOne as a new application, so permissions start over and the old **Loadout.app**
stays in Applications as a separate app. Delete it once your library has arrived. Releases before
1.1.0 cannot update into it: install 1.1.0 from the DMG.

## Files on disk

| What | Where |
| --- | --- |
| Your library: agents, workflows, skills, notes, triggers, context sets, settings | `~/.rig-one/` |
| Access keys for model gateways | `~/.rig-one/env` |
| A project's own notes and its run history | `.rig-one/` inside the project folder |
| One run: plan, status, handoffs, full answers, logs and results file | `.rig-one/runs/<time>__<id>/` |
| The search index | `.rig-one/rig-one.db` — safe to delete; it is rebuilt from the files |

A project's `.rig-one/` folder is plain files and safe to commit. Agents, workflows and notes are
Markdown and JSON, so they diff cleanly in Git.

Step copies, their installed packages and build files, and the evidence runs saved take disk space
of their own. **Settings → Storage** shows how much each part uses and cleans what builds can make
again. Steps share one Playwright browser folder, so one copy never deletes browsers another
installed.

Board keys are kept in the macOS Keychain.

**Copy diagnostics** in **Settings → About** copies a diagnostic summary for a bug report. Read it
before you share it.

## Uninstall

1. Quit RigOne and move `/Applications/RigOne.app` to the Trash. Your library stays.
2. To remove your data too, delete `~/.rig-one/` and the `.rig-one/` folders inside your projects.
   **This permanently deletes your agents, workflows, notes and run history.** The branches runs
   left in your repositories are ordinary Git branches; delete them with Git if you no longer need
   them.
3. If you used Remote access, revoke your devices in **Settings → Remote access** first.

## Troubleshooting

**An agent app is not ready.** Open **Settings → Health check**. Run `claude`, `codex` or
`opencode` once in Terminal to check that it is installed and signed in, then press **Run again**.
An app turned off on its own page in **Settings**, under **Agents**, stays off until you switch it
on. If you have more than one OpenCode install, RigOne runs the newest.

**Couldn't access your sign-in in Keychain.** Sign in again, and allow access when macOS asks for
it.

**A run refuses to start and names a step.** Read the reason on screen: usually a model or effort
level your agent app no longer offers, a connection that is turned off, or a step that must save a
plan but may only look. Fix the step and start again.

**Nothing happened after I pressed Enter in the command bar.** The Lead talks and prepares; only
`/run` starts work, or a goal in Auto.

**A step cannot read a credential file outside its copy.** Every step works in its own copy. Add a
file it really needs, such as a private registry `.npmrc`, to **Credential file exceptions** in
**Settings → Auto**.

**A step seems to wait for nothing.** An agent may be waiting for its own background work, such as
a long build. RigOne does not stop the step early; it waits for the agent to finish that work, as
the same agent would in a terminal.

**Auto is waiting and nothing moves.** Open **Needs you**: a question or a design review may be
waiting. A step that waits says what for — a free place, memory, a Rust build or a usage-limit
reset. A goal may also wait for a condition the Lead set; the stream says what and until when. Up
to three goals work in one folder at a time; a fourth waits its turn.

**Boards or Remote access says sign-in is required.** They are the only parts that need an
account. Sign in from **Settings → Account**; the rest of RigOne works without one.

**My phone shows the pairing screen again.** Remove the phone in **Settings → Remote access** and
pair it again, in Safari on iPhone.

**Something else.** [Open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new)
with your RigOne version, macOS version and what you expected. Issues are public: never paste API
keys, private code or a diagnostic summary you have not read.
