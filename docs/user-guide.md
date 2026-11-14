# Using RigOne

RigOne is a Mac app where coding agents — Claude Code, Codex, OpenCode and Gemini CLI — work for you as a team.
You give them a job, they work in their own copies of your code, RigOne checks the result, and you
decide what to keep. This guide describes RigOne 1.24.

New here? Start with [Getting started](#getting-started), then follow the
[tutorial](#tutorial-your-first-run-step-by-step). Everything else you can read when you need it.

## Getting started

Install RigOne and open it for the first time. It takes about five minutes.

### What you need

- A Mac with **Apple Silicon** and **macOS 13** or later.
- At least one agent app, installed and signed in: **Claude Code**, **Codex**, **OpenCode** or
  **Gemini CLI**.
  RigOne starts them for you, and runs use your own plan with each vendor.
- A project folder on your Mac, usually a Git repository.

### Install

1. Download `RigOne_<version>_aarch64.dmg` from the
   [latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest).
2. Open the DMG and drag **RigOne** into **Applications**.
3. Open RigOne from Applications.

The app is signed with Apple Developer ID and notarized by Apple. If macOS says it "cannot be
opened" or "is damaged", do not work around it: delete the file, download it again, and
[open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new) if it happens
again. After the first install, RigOne [updates itself](#updating).

### Check the download (optional)

Each release lists the SHA-256 of its DMG. In Terminal:

```bash
shasum -a 256 ~/Downloads/RigOne_<version>_aarch64.dmg
spctl --assess --type open --context context:primary-signature -v ~/Downloads/RigOne_<version>_aarch64.dmg
```

The first line must match the checksum in the [changelog](https://rig-one.io/changelog/). The
second must say `accepted` and `source=Notarized Developer ID`.

### First launch

RigOne finds your agent apps on its own. To see that everything works, open **Settings → Health
check**: each row says **OK**, **Attention** or **Optional**, with a button to fix what does not
work.

![Settings → Health check: every agent app and tool RigOne needs with OK, Attention or Optional, and Run again.](../public/screenshots/settings-health.webp)

macOS asks for permissions the first time RigOne needs them — for example access to your project
folders and notifications. The app follows your macOS language and speaks nine languages; change it
in **Settings → Appearance**. This guide uses the English names of buttons and screens.

## Tutorial: your first run, step by step

From an empty RigOne to a finished run, and then a whole goal handed to Auto. Any folder with code
works. Plan on about fifteen minutes, most of it watching the agents.

### Step 1: open a project

Open the project menu at the top of the side panel and choose **Add a workspace**. Give it a
**Name**, press **Choose folder**, pick your project and press **Save**. RigOne opens a new task
that asks **What should I do?**

![The new task screen of a project with no tasks yet: What should I do?, a goal typed in the box, and the Auto, Plan first and One agent modes with the agent app and model under it.](../public/screenshots/tutorial-welcome.webp)

If no agent app says **OK** in **Settings → Health check**, run `claude`, `codex`, `opencode`
or `gemini` once in Terminal to sign in, then press **Run again**.

### Step 2: make an agent with one job

Open **Agents** (⌘1) and press **Create agent**. Give it a **Name**, a one-line **What it does**
and **Instructions** in your own words. On the **Model** tab pick Claude Code, Codex, OpenCode or
Gemini CLI with a model and effort. On **Access**, keep **Look only** unless the agent has to write code.

![The New agent form on the Role tab, with the tabs Model, Access, Skills and connections and Advanced beside it: an agent called Reviewer with what it does and its instructions filled in, and Cancel and Save.](../public/screenshots/tutorial-agent.webp)

For a first workflow, make three agents: one that finds the cause, one that writes the fix, and a
reviewer. Prefer to edit rather than write? **Create from description** drafts an agent from one
sentence.

### Step 3: put agents in a row

Open **Workflows** (⌘2) and press **Create workflow**. Use **Add** on the canvas to place a step for
each agent, and draw arrows between them. An arrow means "runs after" — nothing else. Two steps
after the same step start together.

![The canvas of Ship a feature: Reproduce, then Fix, then Tests pass and Second opinion side by side.](../public/screenshots/canvas.webp)

After the step that changes code, add **A step that runs a check** with the command that proves the
work, such as `npm test`. RigOne runs it itself; the agent does not get to say it passed.

### Step 4: start the run

Open a task in **Tasks** (⌘3) and type `/run` with the workflow's name, or press **Show workflow**.
The plan on the right lists every step and what it waits for. **Run controls** (▷) at the bottom of
the rail on the right holds **Run workflow** and **Agents**, how many may work at once. Press **Run
workflow**.

![Ship a feature ready to run in its task: the plan on the right with four waiting steps, each naming the step it runs after, and Run controls open from the rail with Run workflow and Agents 3.](../public/screenshots/tutorial-ready.webp)

Before the first step starts, RigOne checks the whole graph and tells you if a step's model,
effort or permissions will not work — so no time or money is spent on a run that cannot finish.

### Step 5: watch, and answer when asked

The middle of the screen shows what every agent says and does. The plan shows each step's state.

![The Tasks screen while Ship a feature runs: what each agent said in the stream with 1 needs you under it, and the plan on the right with three steps done, Second opinion waiting for an answer, the passed check and two changed files.](../public/screenshots/run.webp)

When an agent asks something, the question appears with numbered answers. Everything that does not
depend on your answer keeps going. **Stop** ends every agent of the run.

### Step 6: take the result

Each step ends **done**, **failed**, **stopped** or **not run**. Everything the agents changed waits
on its own branch in your project — nothing reaches your own branch until you merge it. Review the
branch as you would a colleague's.

If **Learn from this run** was on, open **Playbook** and press **Keep** on the notes worth keeping.

### Step 7: hand a whole goal to Auto

Press **＋** next to **Tasks** (⌘N), choose **Auto**, write the goal in one sentence and press
**Run**.

![The new task screen with Auto chosen: a goal asking RigOne to let people export their invoices as CSV from the billing page, with tests, and the line saying that RigOne plans the goal, chooses agents and coordinates their work.](../public/screenshots/tutorial-auto.webp)

The Lead picks the agents, builds workflows for each part of the goal and keeps going until checks
and reviews prove the work. Questions for you collect in **Needs you**. Read [Auto](#auto) before
you give agents full access in a project you care about.

### Tips

- **One job per agent.** Small agents are easier to reuse and to fix.
- **Only the writer writes.** Keep readers and reviewers on **Look only**.
- **Prove every change.** Put a check after each step that changes code.
- **Mix vendors.** A second opinion from another vendor catches what one model misses.
- **Watch the cost.** The spend beside the model shows what a task has cost so far; see
  [Analytics and costs](#analytics-and-costs).
- **Let RigOne draft the setup.** [Generate project setup](#generate-project-setup) proposes agents
  and workflows from your repository.

## Concepts

The same words appear on screen, in messages and in this guide.

| Word | Meaning |
| --- | --- |
| **Project** | A folder on your Mac, added as a workspace. |
| **Agent app** | The program that does the work: Claude Code, Codex, OpenCode or Gemini CLI. |
| **Agent** | A role: one job, its instructions, an agent app, a model and permissions. |
| **Workflow** | A saved graph of steps you can run again. |
| **Step** | One tile in a workflow. An arrow between steps means "runs after". |
| **Task** | One line of work in the side panel: a conversation, a run or an Auto goal. |
| **Run** | One execution of a workflow. |
| **Check** | A command RigOne runs itself to see whether the work holds. |
| **Lead** | The agent you talk to in a task. It prepares; `/run` or Auto starts work. |
| **Auto** | The Lead plans, runs and verifies a whole goal for you. |
| **Needs you** | One list of every decision waiting for you. |
| **Note** | Something learned in a run, used in future prompts once you approve it. |
| **Skill** | Instructions an agent uses when they fit, kept in a `SKILL.md` file. |
| **Materials** | Named sets of text, images and PDFs prepared for the steps that need them. |
| **Connection** | A tool server an agent may use, such as a browser or an issue tracker. |
| **Board** | A shared list of work items — epics, features, stories, tasks and bugs. |
| **Organization** | People who share boards, projects and a library of skills, agents and workflows. |
| **Plugin** | A signed package that adds a part to RigOne, such as Lab or Discord. |
| **Spend** | What agents cost, counted per task, per board item and in Analytics. |

## The window

On the left is a narrow **rail** of icons, then the **side panel** with your tasks and boards, then
the screen you opened. With two or more projects open, project tabs run along the top.

![The Go to anything list opened with ⌘K over the window: every section with its G shortcut, and the rail and side panel behind it.](../public/screenshots/search.webp)

### The rail

Point at an icon to see its name.

| Place | Shortcut | For |
| --- | --- | --- |
| **Search** | ⌘K | Jump to any place, workflow or agent |
| **Home** | — | A fresh new task |
| [Generate project setup](#generate-project-setup) | — | Draft agents and workflows from your repository |
| [Workflows](#workflows) | ⌘2 | Steps in a row, on a canvas |
| [Agents](#agents) | ⌘1 | The roles that do the work |
| [Playbook](#playbook) | ⌘5 | Notes and skills that go into prompts |
| [Materials](#materials) | ⌘6 | Material prepared for steps |
| [Triggers](#triggers) | ⌘4 | Runs that start on their own |
| [Lab](#lab) | ⌘7 | Test agents on your own cases (a plugin) |
| [Analytics](#analytics-and-costs) | — | What agents spent, and on what |
| [Overview](#overview) | G P | The whole project on one page |
| [Skills](#skills) | — | The skills your project gives its agents |
| [Settings](#settings) | ⌘8 | Defaults for runs, Auto, projects and the app |

[Tasks](#tasks) (⌘3) and [Boards](#boards) (⌘9) open from the side panel.

### The side panel

- **The project menu** at the top switches workspaces and adds new ones.
- **Tasks** lists your tasks; a coloured dot shows **Working**, **Needs you**, **Done**, **Failed**
  or **Stopped**. **＋** (⌘N) starts a new one. Tasks come back after a restart.
- **Boards** lists your boards.
- **Plan limits** at the bottom show how much of each agent app's plan is used.
- Below that: which folder RigOne works in and which GitHub account it uses.

![The bottom of the side panel: plan limits for Claude Code, Codex and OpenCode, the GitHub account acme-dev, and the branch main with Project branches open on the main folder and a step copy.](../public/screenshots/github-panel.webp)

## Projects side by side

Every project you open becomes a tab. Up to three projects can sit side by side in one tab, each
with its own tasks and runs — a run keeps going in one while you work in another.

![Two projects side by side in one split tab: client-website, where Ship a feature waits for an answer from Second opinion, and docs-site, with a new Auto task being written.](../public/screenshots/projects.webp)

- **⌘⌥\\** shows another project beside the one you are in.
- **Drag a tab** onto another to join them, or onto the empty strip to take it out.
- **Drag the edge** between panes to resize; a double-click shares the width evenly.
- A dot on a tab says whether the project is working or waiting for you.

Tabs and panes come back after a restart. To rename or remove a project, use the project menu.

### Task windows (experimental)

Turn on **Task windows** in **Settings → Experimental** to keep up to ten tasks, from any project, on
one screen. Open a task in a window from its menu, then split, move, swap and resize the windows with
keyboard shortcuts, much like panes in a terminal multiplexer. Settings set how many windows fit on
one screen and how they are arranged. The feature is off until you turn it on.

## Search and keyboard shortcuts

**⌘K** opens **Go to anything**: type part of a name to jump there, start a conversation or run a
workflow. Press **?** anywhere outside a text field for every shortcut.

| Keys | Does |
| --- | --- |
| ⌘K | Go to anything |
| ⌘N | New task |
| ⌘1 … ⌘9 | Agents, Workflows, Tasks, Triggers, Playbook, Materials, Lab, Settings, Boards |
| G, then a letter | Go to a place, such as G A for Agents or G P for Overview |
| ⌘⌥\\ | Show another project beside this one |
| ⌘⌥1 … ⌘⌥9 | Pick a project tab |
| ⌘U | Add files or photos to your message |
| Esc | Close |

## Tasks

**Tasks** is where you give work to agents: talk to the Lead, run a workflow, hand a goal to Auto
and answer what agents ask.

### A new task

Write what you want under **What should I do?** and pick how it runs:

- **Auto** — RigOne picks the agents and works until the goal is verified. See [Auto](#auto).
- **Plan first** — RigOne writes a task list first; nothing runs until you start it.
- **One agent** — one agent works on it in this folder.

![A new task in client-website: a goal typed under What should I do?, the Auto, Plan first and One agent modes, the agent app, model and effort on the right, and three tasks in the side panel.](../public/screenshots/tasks.webp)

Under the field:

- **＋** adds files or photos (⌘U) or a folder. You can also drag them onto the field.
- **Materials** attaches a set of materials.
- The pill on the right picks the agent app, model and effort. The amount beside it is what this task
  has spent so far.
- The board icon files the task on a board.

![The pill under the message field opened: the agent app tabs, the models it offers, the effort, YOLO mode and Default for this project.](../public/screenshots/model-picker.webp)

### Talking to the Lead

The field at the bottom talks to the Lead. It can explain, plan and prepare; real work starts with
`/run` or in Auto. Enter always takes your message: it leaves the field at once, and while the Lead
is busy it waits in the conversation as **Not delivered yet**, with later messages behind it in
order. If sending fails, your text comes back with the reason. Each reply shows the model and effort
that wrote it. While an agent works, **Stop** takes the place of **Send**.

| Command | Does |
| --- | --- |
| `/run` | Start a workflow |
| `/ask` | Start one agent |
| `/tasks` | Break the goal into tasks you review before anything runs |
| `/history` | Past conversations in this folder |
| `/stop` | Stop the run that is going |

Type `/` for every command and skill, and **@** to point at a place in the project or to call one of
your saved project agents. A called agent runs with its own settings, and its progress shows in the
conversation and on your phone.

### Past conversations

**History** lists the past conversations of the project you have open. Search them, and reopen one
to carry on where it stopped. A new conversation gets a clear generated title after its first
finished reply; a name you set yourself is kept.

### Review a plan before it runs

Ask the Lead for a plan and it can write one as an interactive page that opens in **Plan review**
beside the conversation. Select text in the plan to comment on it, and send your comments to the
agent; it revises the plan. When the plan is right, build it in Auto or **Break into tasks**.

### Running a workflow

Type `/run` or press **Show workflow** in a task's header. **Run controls** in the task's rail sets
how many **Agents** may work at once — independent steps really do run in parallel up to that number. Press
**Run workflow**.

Before any step starts, RigOne checks every step's model, effort and permissions, and names the step
that will not work. If you want a heads-up about cost, turn on **Warn about spending** in
[Settings → Runs](#runs). RigOne warns; it does not stop the run.

### The task rail

A task has a narrow rail of icons on its right edge.

- At the top: **Show plan** / **Hide plan**, then **All sections** and one icon per section of the
  sidebar — **Needs attention**, **In progress**, **Up next**, **Finished**, **Checks**, **Changed
  files**. An icon shows only its section; click the current one again to hide the sidebar.
- At the bottom: **Conversations**, **Sidebar sections** (which sections to show), **Connections**,
  **Open in** your editor, and **Run controls**.

### Watching a run

- **The stream** in the middle shows what each agent said, in order. Each command an agent ran folds
  under its line; click the arrow to see the command and its output.
- **The plan** on the right shows every step's state and what it waits for. Click a step to open it.
- **Questions** appear at their step with numbered answers. Everything else keeps going.
- **Outcomes** are honest: **done**, **failed**, **stopped** or **not run**.

**Settings → Appearance → Conversation view** shows the stream as a **Terminal** log or as **Agent
chat** bubbles. When a provider is busy or a usage limit is reached, the step waits and carries on.

### Stopping

**Stop** ends every running agent and checks that the processes are really gone. **Interrupt**
stops only what the Lead is doing now, so it can answer you.

## Auto

Give the Lead a goal in one sentence. It picks the agents and skills it needs, builds a workflow for
each part of the goal, runs them and keeps going until every part is verified. You can keep talking
to it while it works.

![An Auto goal, Export invoices as CSV, at work: the Lead asking which date format the CSV should use, and Agents & work on the right with parts under Needs attention, In progress, Up next and Finished, one opened with Scope, Technical details and Open workflow.](../public/screenshots/run-panel.webp)

- **RigOne decides when work is done, not the Lead.** A part counts as done only when checks and
  a review prove it.
- **Agents & work** on the right shows every part of the goal under **Needs attention**, **In
  progress**, **Up next** and **Finished**. Open a part to see what it does, what went wrong and how
  long is left.
- **Goals are saved.** A stopped goal can be resumed later, and a running goal carries on after
  RigOne restarts. Up to three goals work in one folder at a time.
- **Results** wait on a branch. Auto can push and open a pull request only when you allow it.
- **A sound** can play when a goal is finished — turn it on in **Settings → Runs**.
- **One plan, one picture.** A goal's plan opens as one workflow with a start and an end, each part
  in its own colour. Click a part in the list to zoom to its steps; **Show everything** shows the
  whole plan again.

### Auto profile

**Auto profile** in the agent popover decides how strong the models Auto may give each kind of step
are: **Low**, **Balanced**, **Max** or **Ultra**. Ultra also allows the strongest models for plans,
analyses and final reviews. The choice is remembered per project, and Auto refuses a plan that
breaks it. The profile limits Claude Code and Codex models only.

### When an agent app runs out of usage

When Claude Code or Codex reaches its usage limit in the middle of a step, RigOne saves the work so
far and carries on the same step in another agent app you allowed for the goal. The new agent gets
the previous agent's last words and the list of files it changed, and the switch does not count as a
failed try. If no other app may take over, the step ends with the reason and its work stays in the
step's copy. **Settings → Usage limits** sets from which percent of a plan RigOne warns and moves
work to another app.

### Approve everything

Write "approve everything" in a goal's conversation and nothing in that goal waits for your
approval again, also after a restart. The plan header shows it, with **Undo**.

### Pause, take over, stop

- **Take over** stops the Lead's current reply; the goal keeps going.
- **Stop ▾ → Pause Auto** starts no new work until you press **Resume**.
- **Stop ▾ → Stop Auto** asks first, then saves the goal where it reached.

### Full access

**Full access for agents (YOLO)** in **Settings → Auto** is on by default: agents skip their own
permission prompts, like when you run them with YOLO in a terminal. Every step still works in its
own copy of your code, and secrets stay out of command lines. Turn it off to let each agent app use
its own safer permission mode. Outside Auto, **YOLO mode** in the model pill makes the same choice
for one conversation.

### Needs you

Every decision that waits for you sits in one list, **Needs you**. Each card says what happens after
each answer. macOS tells you when a decision waits while RigOne is in the background.

| Card | Asks |
| --- | --- |
| **Question** | Something the Lead needs to know |
| **Approval** | Let a part write outside its copy, or take an outward action? |
| **Retry** | Allow one more try? |
| **Design review** | Look at a changed screen, comment on it, or approve it |
| **Failing tests** | Tests outside this goal fail: fix them, update to main, or pause |
| **Usage limit** | Wait for the reset, or use another agent app? |
| **Recorded gap** | Accept a part with a known gap? |

### Design review

When a part changes the interface, **Needs you** shows **Design review**. It opens on the agent's
screenshots: the agent captures each screen signed in, with realistic data, in its own copy, and the
review says what changed and where to look in the app.

- **Comment on a screenshot.** Pin comments on a screen and send them. The same agent fixes them
  while the review stays open; new screenshots replace the old ones, and before and after are kept.
- **Live.** In projects with a real web page, **Live** starts the app. **Pick an element**, click it
  on the page and write what should change. A desktop app is reviewed on screenshots.
- **Approve design** ends that design for good. Checks run on the approved version without asking
  you again.
- If the preview cannot start, the review still opens, says why and switches to screenshots, so a
  goal never stalls on a design.
- Turn the review off with **Review the design before interface changes are recorded** in
  **Settings → Auto**.

### When a part keeps failing

After three failed tries of one part, a card asks what next: **Try once more**, **Accept with a
recorded gap**, **Carry it to the next stage** or **Exclude this part**. Tries stopped by a usage
limit or by the computer do not count. A test that already passed on the same code is not run
again, and before delivery one final check per repository verifies the whole goal; delivery is
refused if it failed or the code moved since.

## Boards

**Boards** (⌘9) are shared lists of work — for you, your team and your agents. You plan work on a
board, start it with an agent, and see what it did and what it cost. Boards need a MonoOne account;
**Explore a preview** shows a demo board without one.

![A board in the Board view: columns with epics, features, stories, tasks and bugs, each card with its kind, its ID and what it cost.](../public/screenshots/boards.webp)

- **One state for everyone.** Items, comments and activity are kept on the MonoOne server, so every
  member sees the same board.
- **People.** A board in an organization is open to everyone in it. A private board can be moved
  into an organization with **Share with an organization**.
- **Offline.** Changes wait on your Mac and are sent when the connection returns.

### Kinds of items

Each item has a kind, with its own icon and colour: **Epic**, **Feature**, **User story**,
**Task** and **Bug**. Items nest the way most teams plan:

- an **Epic** holds features,
- a **Feature** holds user stories,
- a **User story** holds tasks and bugs,
- a **Bug** can also stand on its own.

When you create an item, choose its **Kind of item** and where it **Sits under**. An epic, feature or
story lists its **Items inside** and offers to add only the kinds that fit, such as **Add user
story** or **Add bug**.

![The feature Item types opened in its window: status, due date, priority, assignees, tags, what it depends on, repository, workflow and model, its description, and Items inside with two user stories, a task and a bug, with Add user story, Add task and Add bug.](../public/screenshots/board-item.webp)

### Cost on every card

Every card shows what the agents spent on it and the tokens they used — such as `$2.89 · 332.3k
tokens` — even when it is $0.00. A story, feature or epic adds up everything under it, so you see
what a whole feature cost at a glance.

### Board, list and filters

**Board** shows columns you drag cards between; **List** shows the same items as a table. **Filters**
(the icon at the top right) narrows the board to one **Person** or one **Kind**. Each item gets a
short ID such as `PRO-12`.

### Sprints and board settings

**Board settings** (the gear next to **New task**) has a side menu: **General**, **People**,
**Planning** and **Templates**.

- **Planning** — **How work is planned**: Kanban, where tasks flow across the board, or **Sprints**,
  where you plan work in rounds. Set the **Sprint length**, what happens **After a sprint closes**
  (archive or delete finished tasks), and your **Columns** — name, colour and what each one is for.
- **Templates** — a starting text for each kind, so every new bug or story begins the same way.
- **People** — the owner and everyone with access, with their role (**Admin**, **Editor** or
  **Viewer**) and **Remove**. Handing the board to another owner sits in **General**, behind a
  confirmation.

![Board settings on Planning, with the side menu General, Members, Planning and Templates: Kanban chosen, a sprint length of two weeks, Archive finished tasks after a sprint, and five columns with a name, a colour and a role.](../public/screenshots/board-settings.webp)

With sprints on, a compact header shows the sprint with a switcher for active, planned and closed
sprints, its dates, days left, progress and goal. The **Backlog** groups tasks into the active
sprint, planned sprints and the backlog; move a task with **Move to…** or by dragging. **Create
sprint**, **Start** and **Close sprint** move the work along, and unfinished tasks move to the next
planned sprint. Only the
owner changes these settings, and every member of a shared board sees the same ones.

### Agents on a board

- **Run with Auto** on a card, or the **Runs** tab of an item, starts it as a workflow or an Auto
  goal in a folder on your Mac. Progress shows on the board for every member.
- **From a conversation.** Ask the Lead to put the work on a board, and it creates the item itself,
  with a short title, a structured description and acceptance criteria.
- **Agent replies** appear in the item as a thread, apart from what people wrote.
- A question from the agent appears in the item; any editor can answer it there.
- On a board of a [team project](#team-projects), **Run with Auto** asks where it runs (**This
  computer** or **Another member's computer**), the **Responsible person**, the folder of each
  repository on that computer and the **Agent role**. **Show setup** lists the exact configuration
  the task starts with; it does not change while the task runs.

## Team projects

A folder can stay private, or belong to a project of an organization so a team shares one setup.
Both need a MonoOne account; a private folder works without one.

### Organizations

**Settings → Organizations** lists **Your organizations**. **Create organization** makes one; open
it to **Invite person** by email, see **Members** and **Invitations**, and **Revoke invitation**.
The person gets an email asking them to sign in to RigOne with that address and accept in
**Settings → Organizations**. People are **Owner**, **Admin** or **Member**; an invitation joins as a
Member. Everyone in an organization opens every board, project and library item it owns.

### Connect a folder

Open the project menu at the top of the side panel and choose **Connect to organization**. Pick the
**Organization** and a **Project**, or **Create project**, then **Connect**. The project list then
shows the organization under the folder, or **Private**. **Disconnect folder** removes only the link
on this Mac. Where the folder lives is kept on each computer and never shared.

### Share skills, agents and workflows

**Share** on Skills, Agents, Materials, Workflows and Settings → Connections offers a skill, an agent
role, a set of materials, a workflow or a connection definition to others. Before anything is sent,
RigOne replaces your home folder with `~` and removes text that looks like a secret.

- **Who can see it:** **Private**, **Project**, **Organization** or **Selected people**.
- **What they may do:** **Use**, **Use · Edit**, **Use · Edit · Share** or **Use · Edit · Share ·
  Publish**.
- **Review files** shows exactly what leaves your Mac. Nothing is sent until you **Confirm sharing**.

Shared items are versioned. A change is a draft first: **Send for approval**, and the owner can
**Approve** or **Reject** it; **Publish** is a separate step. **Compare latest** shows what changed,
and the share dialog updates a shared item to a new version. A shared skill you use lands in the
project you have open, under its own name, with all its files.

### Boards in a team project

A new board is a **Private board** or belongs to an **Organization** and **Project**, and follows
that project's access. **Access and project** on the board adds guests as **Viewer** or **Editor**;
viewers cannot start runs. Board content and organization projects are kept on the MonoOne
server as plain data, so every member sees the same state.

## Analytics and costs

RigOne counts what your agents spend — per task, per board item, and over time in **Analytics**. You
always know what a piece of work cost, and where the money and tokens go.

### What a task has spent

The amount beside the model, under the message field, is what this task has spent so far — $0.00
included. Click it to see **Spent on this task**: the exact amount, **Tokens** (read fresh, read
from cache, written to cache and written by agents), how much came **From cache**, **Agent time**,
and what each agent spent.

![Ship a feature at work, with Spent on this task opened above the message field: $0.60 from two agent turns, the tokens and how much came from cache, four minutes of agent time, and Fix $0.42 and Reproduce $0.18.](../public/screenshots/task-spend.webp)

A step shows its own cost in its header, too (see [Reviewing a step](#reviewing-a-step)).

### The Analytics screen

Open **Analytics** from the rail or with ⌘K. Pick a **Period**: **7 days**, **30 days**, **90
days**, **All time** or **Custom** — click two dates to set a range.

![The Analytics screen over 30 days: $183.52 spent in 408 agent turns, 44.3M tokens with 81% read from cache, 9 tasks and 11 hours of agent time, a bar chart of spend per day, Apps, Models, Effort and People, and Spend per task led by Export invoices as CSV.](../public/screenshots/analytics.webp)

- **The totals** — **Spent**, **Tokens** (with how much was read from cache), **Tasks** (with the
  average per task) and **Agent time** (with the model used most).
- **Spend per day** — a bar for each day in the period.
- **Apps**, **Models**, **Effort** and **People** — how many agent turns went where, and what they
  cost.
- **Spend per task** — every task with its project, apps, turns and tokens, most expensive first.

Good to know:

- A turn whose price RigOne does not know is not in the total, and Analytics says so.
- Lead turns record no person, so they show as **Not recorded** under people.
- On a board, every card carries its own cost — see [Boards](#cost-on-every-card).

## Triggers

**Triggers** (⌘4) start a workflow without you pressing Run. The source is **Linear**, where an issue
newly assigned to you starts one run, or **Discord**, where a mention of your bot starts one (with the
[Discord plugin](#plugins) installed).

![Triggers › Edit Linear trigger on its own page: Connector Linear, the environment variable with Test connection, When an issue is assigned to you, the workspace, Check every and the workflow, with Delete, Cancel and Save.](../public/screenshots/trigger-form.webp)

Press **Create trigger**, then set:

- **Environment variable name** — where your Linear key is. RigOne also reads it from
  `~/.rig-one/env` when the app has no such variable. **Test connection** checks it.
- **Workspace** — the folder the run works in.
- **Check every** — 1, 5, 15 or 60 minutes.
- **Workflow** — what runs.

One issue starts one run, even after a restart. Issues already assigned before you create the
trigger do not start runs. A disabled trigger shows how many issues wait to start and lets you
discard them. Triggers work while RigOne is open.

A **Discord** trigger asks for the **channel ID** and the environment variable that holds the bot
token, and can test the connection. A message that mentions the bot becomes the task; agents in the
run can reply in Discord, and the bot never starts a run from its own messages.

![The Triggers screen: two Linear triggers watching for issues assigned to you, one starting Fix a bug every 5 minutes and switched on, one starting Review a pull request every 15 minutes and switched off.](../public/screenshots/triggers.webp)

## Reviewing a step

Click a step in the plan to open it. You see what it was given, what it said, what it changed and
what it cost. Under **Changed lines** it reads like a review in your editor.

![The Fix step of Ship a feature: the changed lines of validate.ts and its test, a comment on line 15 asking to strip zero-width spaces, and Send comments to the agent.](../public/screenshots/review.webp)

- **Comment on a line.** Click a line, write a comment, then **Send comments to the agent**. The
  agent gets one message naming every file and line, and carries on.
- **Open in editor** opens the file at that line in your own editor.
- **Functions changed** lists each changed function and where it is used.
- **Preview this step.** Type your start command — such as `npm run dev -- --port $PORT` — and press
  **Start the app from this step**, then **Open preview**.
- **Saved versions.** RigOne keeps a version after each turn. **Go back to this version** restores
  one, and keeps what is there now too.

![The Fix step: two changed functions used in two places each, the app running from the step at a local address with Open preview, and three saved versions of the files.](../public/screenshots/review-tools.webp)

If two steps changed the same file differently, nothing is mixed: RigOne names the step and the
files, and keeps both versions.

## Checks and reviews

When a step finishes, RigOne runs the checks itself — it does not ask the agent whether it worked.
You always see three things apart: **what the agent said**, **what the checks found** and **what you
approved**.

- **"Nothing ran" is never a pass.** A green exit code without proof that tests ran does not count.
- **Old failures are not blamed on the change.** A red check runs again on the code without the
  change, to tell old failures from new ones.
- **Flaky tests** outside the change pass with a warning that names them.
- **No repeated work.** A check that already passed on the same code is reused.
- **A clear reason.** A red check says first which tests failed or what stopped it.

A **review** is a step where another agent — often from another vendor — reads the work. In Auto, a
failed review sends the work back for a fix.

## Where the changes go

Each step works in its own copy of your code, so agents never trip over each other. When the run
ends, the work is combined on one new branch in your project.

- A workflow pushes nothing. Only Auto pushes and opens a pull request, and only when you allow it.
- Nothing reaches your own branch until you merge it.
- If two steps changed one file differently, both copies are kept and RigOne tells you where.
- Old copies are cleaned up on their own when the disk runs low (see [Storage](#storage)).

## Safety model

RigOne treats a failed run as a product failure, not terminal noise. It never does these quietly:

- **Clashing changes** stop the next step, and both copies are kept.
- **Stop and timeouts** end the whole process group and check that it is gone.
- **Prompts and secrets** go through stdin, never command-line arguments.
- **Agent environments** are built from an allowlist, unless full access (YOLO) is on.
- **Unknown events** from an agent app are recorded and ignored instead of crashing the run.
- **Files are the source of truth;** the search index can be deleted and rebuilt.

### What leaves your Mac

RigOne runs on your Mac and works in your folders. The agents it starts send what they read to
their own providers, exactly as in a terminal. A trigger talks to Linear or Discord with your key.
Boards and organizations keep their content on the MonoOne server, and Remote access connects your
phone through the MonoOne relay. The plugin store reads its list from rig-one.io and keeps the last
copy for offline use. RigOne itself sends no analytics anywhere — the Analytics screen is computed on your Mac.

## Agents

An agent is a role you define once and use in any workflow. **Agents** (⌘1) lists them with their
access, model and effort. Click one to read it; press **Edit** to change it.

![Builder opened read-only: its instructions, model, access, and skills and connections, with Evaluate, Duplicate, Delete and Edit at the top.](../public/screenshots/agent-detail.webp)

### What an agent holds

- **Role** — a **Name**, **What it does** and **Instructions**.
- **Model** — the agent app, model and effort. The list comes from your installed app. You can also
  send it through your own **Model gateway**, or use a local model through Ollama.
- **Access** — **Can it change files**: **Look only**, **Ask first** or **Work freely**. **Can it
  reach the web**: no, or read and search.
- **Give up after** — 10 minutes, 30 minutes or no limit.
- **Skills and connections** — what it may use beyond its instructions, including which of your
  own plugins and MCP servers it gets: all, chosen ones, or none.

![Edit Builder on the Model tab: Runs with Claude Code, Model source, Model gateway Straight to the agent app, the models with Refresh models, the effort and Give up after.](../public/screenshots/agent-edit.webp)

**Evaluate** tries the agent in the [Lab](#lab). **Duplicate** copies it.

### Create from description

**Create from description** drafts an agent from one sentence. The draft says what it guessed and
why, so you can fix it before you save.

### Bring a setup from another project

**Import setup** reads a project's own agent-app files — `.claude/`, `.codex/`, `.agents/` — and
turns them into RigOne agents, skills and workflows. It only reads files; nothing runs. To copy from
another RigOne project, choose **Import setup from project** in the project menu. Secrets and history
are never copied.

![The Agents screen: Scout, Builder, Needle and Second opinion in a list, each with its file access, model and effort, under Create from description.](../public/screenshots/agents.webp)

## Workflows

A workflow is what you build on the canvas and run again. **Workflows** (⌘2) lists them with their
steps and how the last run ended. The play button runs one straight away.

![The Workflows screen: Ship a feature, Fix a bug and Review a pull request, each with its steps, agents and last run, and Run, Duplicate and Delete buttons.](../public/screenshots/workflows.webp)

### The canvas

Steps are tiles, joined by arrows that mean "runs after". **Add** offers five kinds of step:

- **A step an agent does** — a piece of the work.
- **A step that leaves a command running** — starts your app so later steps can test it.
- **A step that runs a check** — RigOne runs a command and records what it found.
- **A step that asks you** — the run waits for your answer.
- **A way back, to try again** — a loop from a check back to the fix, with a limit.

Two steps after the same step run at the same time. A step with several arrows in reads every
handoff it receives. A step can also run several copies of itself (×3) when you want more than one
take. A badge in the header counts what needs fixing, each with a button that fixes it.

### The step panel

Pick a tile to set it up in the panel on the right: **Who does this**, a **Name** and **What to do**.
More settings — where it works, timeout, what happens **If this step does not pass** — fold away
until you need them. A check step has its **Command to run** and the tests it must confirm.

![The Fix step of Ship a feature selected on the canvas: the step panel with Who does this, Name, What to do, Context, Plan Off, Create, Update or Use, and 13 more settings.](../public/screenshots/workflow-step.webp)

**Workflow settings** in the header sets which files a fresh copy brings along and the workflow's
context.

![Workflow settings open beside the canvas of Ship a feature: Files in fresh copies, Protect working copies, additional input patterns and the workflow context.](../public/screenshots/workflow-panel.webp)

## Overview

**Overview** (G P) shows the whole project on one page. **Summary** comes first: six tiles —
**Score**, **Agents**, **Workflows**, **Playbook**, **Changes** and **Triggers** — and **Needs your
attention**, a short list of what to look at. Tabs hold the details.

![Overview of client-website on the Summary tab: six tiles — Score, Agents, Workflows, Knowledge, Changes and Triggers — and Needs your attention below them.](../public/screenshots/project.webp)

- **Score** — how easily agents find their way in this project; see [Score](#score).
- **Repository** — branch, changes, branches, size on disk and largest folders.
- **Agents** and **Workflows** — with a **Fix** button where something needs a change.
- **Playbook** — instruction files, skills and new lessons to review.
- **Automation** — triggers and the Auto rules.

**Open in** opens the project in your editor.

![The Repository tab of the Overview: the branch main up to date, nothing to commit and the last commit, local and remote branches with the step copies, the size on disk and the largest folders.](../public/screenshots/overview-repository.webp)

### Generate project setup

**Generate project setup** — the sparkle in the rail — reads your repository and proposes agents,
skills and workflows for it. Add your own guidance if you like, press **Generate project setup**, and
talk to the lead agent to adjust. Nothing changes until you choose **Apply setup**; **Undo** brings
back the files from before.

![Generate project setup on the Instructions tab: guidance for the lead agent typed in, and the three stages Understand the project, Build the setup and Check and refine.](../public/screenshots/project-setup.webp)

## Score

**Score** tells you how easily agents find their way around a project, out of 100. An agent reads
the repository — instructions, layout, tests, scripts, checks — and rates it on the things that make
agent work go well or badly here. Every weak spot comes with what to change, and one click starts a
task that changes it.

![The Score tab of the Overview: 78 out of 100, Agents find their way, with a few rough spots, and the criteria with the weakest, Fast test feedback, open on its finding and recommendations.](../public/screenshots/score.webp)

### Analyse a project

Open **Overview** (G P) → **Score** and press **Analyse project** — **Analyse now** once the project
has a score. **Score settings** beside it opens [Settings → Score](#score-settings).

- The agent **only reads**. It gets read, search and find tools and nothing else: it cannot change a
  file or run a command.
- While it works, the tab shows **Analysing the project**, how long it has run, how many files it has
  read, and its last few steps under **What the agent is doing**.
- It takes a few minutes and stops after 20. **Stop analysis** cancels it at any time.
- If it fails or is stopped, nothing is saved and the previous result stays.

### What it rates

There is no fixed checklist. The agent picks **4 to 10 criteria** that matter for this project —
for example the agent instructions, how fast tests give feedback, one command that checks
everything, clear patterns in the frontend and backend, naming, and written-down decisions. Each
criterion gets a score from 0 to 100, and the total is their plain average.

| Score | What it says |
| --- | --- |
| 90–100 | Agents move through this project without friction |
| 75–89 | Agents find their way, with a few rough spots |
| 50–74 | Agents get stuck in several places |
| 0–49 | Agents struggle to find their way here |

Green from 75, amber from 50, red below.

### Read the result

The top card shows the total, the verdict in one line, a short summary, **Last analysed** and the
agent app, model and effort that did the analysis. The criteria follow, weakest first. Open one to
see its **finding** — what the agent saw, naming the files — and its **Recommendations**. Every
criterion under 100 has at least one.

The result also shows elsewhere:

- The **Score** tile on the Overview **Summary**, with the verdict or **Not analysed yet**.
- **Needs your attention**, when the weakest criterion is under 50: **Weakest point** with an
  **Open** button.

### Fix a weak spot

**Run a fix** (▷) beside a criterion opens a new task named **Fix:** and the criterion, and hands the Lead
the finding and the recommendations, asking it to make the change and check that it works. It is an
ordinary task: you watch it, answer its questions and review what it changed. Analyse again
afterwards to see the new score.

### Keep it up to date

In [Settings → Score](#score-settings), **Analyse again** can re-run the analysis **Every day**,
**Every week** or **Every month** instead of **Only when I ask** (the default). It re-scores only
projects that already have a score, and only while RigOne is open.

**Analyse with** chooses the agent: **Auto** picks the strongest app, model and effort you have, or
choose Claude Code or Codex yourself. OpenCode is not used for Score.

### Where it is kept, and what it costs

- The result is `.rig-one/score.json` in the project. Each analysis replaces the last; there is no
  history.
- The analysis runs on your own Claude Code or Codex sign-in, with a strong model at high effort, so
  it counts against your plan or API usage like any other agent run. The files it reads go to that
  app's provider, as they do in every run.
- The text comes back in the app's language.
- Turn **Score projects** off in Settings → Score and Score disappears from the Overview and never
  runs.

## Lab

**Lab** (⌘7) tells you whether a change to an agent, skill or workflow made the work better — on
cases from your own code, not a generic benchmark. Lab is a [plugin](#plugins), installed by default;
with it off, its screen and search entry are gone.

![The Lab set Scout on sign-up bugs on its own page: cases in two columns, Scout today and Scout with Opus, with passed and did-not-pass marks, What tells the columns apart and What did not pass.](../public/screenshots/lab.webp)

1. **Evaluate** on an agent or skill, or **Evaluate workflow**, creates a set.
2. **Write cases** — RigOne drafts cases from your project; **Accept** the good ones. You can pick the
   agent that writes the cases and the fixes.
3. **Columns** — the same agent with one thing changed, such as the model.
4. **Run** — every case runs in every column and gets **passed** or **did not pass**.
5. **Propose a fix** under **What did not pass** suggests better instructions.

![The Lab: sets listed by kind in the tabs Agents, Workflows and Skills, with two agent sets and Write cases.](../public/screenshots/lab-sets.webp)

## Playbook

**Playbook** (⌘5, called Knowledge before 1.15.5) is what agents carry into their prompts. You stay in control: nothing an agent
learns is used until you approve it.

![The Knowledge screen: Health in good shape, the tabs Waiting for you, Always in context, Used when they fit, What agents passed to each other and Earlier project notes, and suggested notes waiting for Keep or Discard.](../public/screenshots/knowledge.webp)

- **Waiting for you** — notes agents suggested. **Keep** or **Discard** each one.
- **Always in context** — your instruction files (`AGENTS.md`, `CLAUDE.md`) and kept notes. They go
  into every prompt. **Stop using** takes a note out.
- **Used when they fit** — skills. **Add a skill** from a link, your own text, or a sentence.
- **What agents passed to each other** — the handoffs between steps, as plain files.

![The Always in context tab of Knowledge: AGENTS.md and CLAUDE.md with their sizes, and two notes in use, each with Stop using.](../public/screenshots/knowledge-always.webp)

### Health

**Health** says how much every prompt carries — aim for under 40 KB — and flags knowledge that is
**too much**, **out of date** or **not pulling its weight**, with a button to fix each finding.

![Knowledge Health: five things to look at, each with why — out of date or not pulling its weight — and Take out of prompts or Review them, above the tabs.](../public/screenshots/knowledge-health.webp)

## Materials

**Materials** (⌘6, called Context before 1.15.5) holds named sets of material for agents: requirements, notes, screenshots, PDFs.

![The Context screen: Active and Archived, three sets — two ready and one not prepared yet — each with Archive, and the field to name a new set.](../public/screenshots/context.webp)

1. Name a set and press **＋ Create**.
2. Paste text or screenshots, or **Add files**.
3. Press **Build context** — RigOne organises it into topics, findings and open questions.
4. Attach the set to a step, a workflow or a conversation (**Materials** under the message field).

A run keeps the version it started with, so rebuilding a set never changes a run in progress.

## Skills

**Skills** shows the skills your project gives its agents, read from `.claude/skills` and
`.agents/skills`. It is read-only; to add one, use **Add a skill** in [Playbook](#playbook).

![The Skills screen: three skills of the project in a list, and release-notes open on the right, read only, with its instructions.](../public/screenshots/skills.webp)

## Settings

**Settings** (⌘8) sets what RigOne does by default. Its pages come in five groups:

| Group | Pages |
| --- | --- |
| **Work** | Runs, Auto, Limits |
| **Project** | Project, Score, Connections |
| **Agents** | Agent apps, and a page each for Claude Code, Codex, OpenCode and Gemini CLI |
| **Account** | Account, Organizations, GitHub, Remote access |
| **App** | Appearance, Keyboard shortcuts, Storage, Health check, About |

Newer pages sit beside them: **Usage limits**, **Plugins** and **Experimental**.

### Runs

- **Spending** — **Warn about spending** and the amount to warn at. Off by default.
- **Sound** — play a sound when a run ends or an Auto goal is finished; pick one of five and listen.
- **History** — how many past runs to keep, and whether to learn from runs.

![Settings → Runs: Warn about spending and the default budget warning, Minutes for task planning, Past runs to keep per project and Learn from runs by default.](../public/screenshots/settings-runs.webp)

### Auto

What Auto may do: **Full access for agents (YOLO)**, the design review, and **Resume goals after
RigOne restarts** — all on by default. **Allowed credential files** lists files steps may read, such
as a private registry `.npmrc`.

![Settings → Auto: under Access, Full access for agents (YOLO), the design review and Resume goals after RigOne restarts switched on, and the credential file exceptions.](../public/screenshots/settings-auto.webp)

### Usage limits

**Warn about usage limits** turns the warning on or off, and the percent (50 to 100) sets from where
RigOne warns and moves Auto work to another agent app.

### Limits

How much runs at once on this Mac: agents, runs, light checks and builds. RigOne suggests numbers
for your computer.

![Settings → Limits: Computer limits with the CPU in use, How many agents at once?, How many runs at once on this computer?, Light checks at once and Builds at once.](../public/screenshots/settings-limits.webp)

### Project

The default agent app, model and effort for new conversations, and which instruction files
(`AGENTS.md`, `CLAUDE.md`) agents read.

![Settings → Project: Default conversation with the Claude Code, Codex and OpenCode tabs, the models and the effort, and Project instructions with their sources and scope.](../public/screenshots/settings-project.webp)

### Score settings

Turn **Score projects** on or off, start or stop **Analyse now**, choose how often to **Analyse
again** (only when you ask, every day, week or month) and which agent app, model and effort
**Analyse with** uses. These settings apply to every project; see [Score](#score).

![Settings → Score: Score projects switched on, Analyse again every week, and Analyse with Auto, Claude Code or Codex.](../public/screenshots/settings-score.webp)

### Connections

The tool servers (MCP) agents may use in this project, each with a switch. Add one directly, or
**Import connections** from your Claude Code or Codex settings.

![Settings → Connections: github, linear and playwright, each with a switch, its address and access key, and Import connections and Refresh list.](../public/screenshots/settings-connections.webp)

### Agent apps

Update your agent apps in one place — RigOne only updates an app nobody is using.
Pick the editor **Open in** uses, and add **Model gateways**. Each agent app has its own page with its
sign-in, default model, tool servers and how much of its plan is used.

![Settings → Claude Code: Setup with its version, sign-in and tool servers, Updates, and Usage with the 5-hour and weekly use of the plan and Claude account limits.](../public/screenshots/settings-provider.webp)

### Account and GitHub

**Account** is the MonoOne account for Boards, [team projects](#team-projects) and Remote access:
**Sign in to your MonoOne account**, or **Create an account**. **Organizations** manages your
organizations and their people. **GitHub** shows which GitHub account RigOne uses for this project
and what it may do.

![Settings → GitHub: the account acme-dev with Open on GitHub and Refresh, and its username, name, account type, sign-in, permissions, the account for client-website and the accounts signed in on this Mac.](../public/screenshots/settings-github.webp)

### Appearance

The app language, **Light & dark** (**System**, **Light** or **Dark**), how much of the desktop
shows through the window (**Window transparency**), the **Accent color**, and the **Conversation
view**.

![Settings → Appearance: the app language, System, Light or Dark, window transparency at 20%, the accent colours and the Terminal or Agent chat conversation view.](../public/screenshots/settings.webp)

### Storage

How much disk RigOne uses, part by part — run records, boards, the build cache, each step's saved
state and evidence — and at least how much can be freed. **Clean now** removes what builds can make
again. Evidence of finished runs and goals is removed after three days, a finished Auto goal frees
its temporary copies, and RigOne also cleans up on its own when the disk runs low.

![Settings → Storage: RigOne uses 3.7 GB, six parts with their sizes, the free space on the disk, and 1.2 GB that can be cleaned now with Clean now.](../public/screenshots/settings-storage.webp)

### Plugins

**Settings → Plugins** works like a store, with **Installed** and **Store** tabs and search. Each
plugin has its own page with its author, what it needs, a description, screenshots and ratings, and
**Install** or **Uninstall**. Packages are signed, and RigOne refuses anything else. A plugin can have
its own settings, give agents tools and feed triggers; its keys stay in the plugin's own process. The
change works after RigOne restarts. **Lab** comes installed; **Discord** is in the store.

### About

Your version, **updates** (see [Updating](#updating)), and **Copy diagnostics** for a bug report.

## Remote access

Follow and steer your work from your phone or tablet while RigOne runs on your Mac. It needs a
MonoOne account.

![Settings → Remote access: Allow remote access, paired devices, what your phone can do and the projects available remotely.](../public/screenshots/settings-remote.webp)

### Pair a phone

1. Sign in under **Settings → Account**.
2. In **Settings → Remote access**, turn on **Allow remote access**.
3. Press **Add a phone or tablet** and scan the code. On iPhone, add the page to your Home Screen
   first.
4. Check that the codes match, choose **View and control** or **View only**, and press **Allow**.

![Add a phone or tablet over Settings → Remote access: a QR code to scan, Copy link, and the time left before the code expires.](../public/screenshots/remote-pair.webp)

### What your phone can do

The phone app has one menu: the project picker at the top, then the project's conversations with
the Lead first, then **Overview**, **Work**, **Boards**, **Limits**, **Mac**, **This device** and
**Settings**. A project opens on its Lead conversation.

- Answer the questions the Lead passes on to you. Questions agents ask inside their own runs stay
  with the Lead.
- Start a conversation or an Auto goal, message the Lead, or stop work.
- Read your boards and comment on items.
- See plan limits and how busy your Mac is.
- Choose **System**, **Light** or **Dark** in **Settings → Appearance** on the phone.

A page says whether what it shows is confirmed by your Mac. Every action you send shows where it
stands: saved on the phone, waiting for the Mac, accepted, applied, refused or result unknown. An
action with an unknown result is never sent a second time on its own.

Face ID or Touch ID is always on. Writing outside a copy and full Auto access can only be approved on
the Mac. **Revoke** removes a device at any time, and **Projects available remotely** chooses what
the phone can reach.

## Updating

RigOne updates itself. Open **Settings → About** to check for, download and install a new version.
Every update is verified against RigOne's signing key before it installs. RigOne says first how much
running work an update would interrupt; Auto goals carry on by themselves after the restart, and a
paused run shows **Paused for the update** with **Continue**.

Coming from a version older than 1.13.3? Download the DMG from the
[latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest) once and
replace the app in Applications. Your agents, workflows and projects stay where they are. What
changed in each version is in the [changelog](https://rig-one.io/changelog/).

Agent apps are updated separately, in **Settings → Agent apps**.

## Files on disk

Everything RigOne keeps is plain files you can read.

| What | Where |
| --- | --- |
| Your agents, workflows, skills, notes, triggers, materials and settings | `~/.rig-one/` |
| Keys for model gateways and triggers | `~/.rig-one/env` |
| A project's notes, run history and score | `.rig-one/` in the project |
| One run: plan, handoffs, answers, logs and results | `.rig-one/runs/<time>__<id>/` |
| The search index — safe to delete, it is rebuilt | `.rig-one/rig-one.db` |

Agents, workflows and notes are Markdown and JSON, so they are safe to commit and diff cleanly.
Board keys are kept in the macOS Keychain.

## Uninstall

1. Quit RigOne and move `/Applications/RigOne.app` to the Trash. Your files stay.
2. To remove your data too, delete `~/.rig-one/` and the `.rig-one/` folders in your projects.
   **This permanently deletes your agents, workflows, notes and run history.**
3. If you used Remote access, revoke your devices in **Settings → Remote access** first.

Branches left by runs are ordinary Git branches; delete them with Git if you no longer need them.

## Troubleshooting

**An agent app is not ready.** Open **Settings → Health check**. Run `claude`, `codex`, `opencode` or
`gemini` once in Terminal to sign in, then press **Run again**.

**A run refuses to start and names a step.** Usually a model your agent app no longer offers, or a
connection that is off. Fix that step and start again.

**I pressed Enter and nothing ran.** The Lead talks and prepares. Real work starts with `/run` or in
Auto.

**Auto seems stuck.** Open **Needs you** — a question may be waiting. A step that waits says what
for: a free place, a build, or a usage-limit reset.

**A step cannot read a credential file.** Add it to **Allowed credential files** in **Settings →
Auto**.

**The spend says $0.00.** Nothing with a known price has run in this task yet. Analytics leaves out
turns whose price RigOne does not know.

**Boards, organizations or Remote access ask me to sign in.** They are the only parts that need an
account. Sign in
under **Settings → Account**.

**My phone shows the pairing screen again.** Remove the phone in **Settings → Remote access** and
pair it again.

**Something else.** [Open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new)
with your RigOne and macOS versions and what you expected. Issues are public: never paste keys,
private code or diagnostics you have not read.
