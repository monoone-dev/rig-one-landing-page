# Using RigOne

RigOne is a native macOS control room for coding agents. This guide covers installing it, building
a workflow, running it against a project and reading what happened. The website renders this file
as its documentation page.

## Getting started

### What you need

- A Mac with **Apple Silicon** and **macOS 13** or later.
- At least one agent CLI, installed and signed in: **Claude Code** or **Codex**. RigOne starts
  these programs for you; it does not replace them, and runs use your own plan with each vendor.
- A project folder on this Mac — usually a Git repository — for the agents to work in.

### Install

1. Download `RigOne_<version>_aarch64.dmg` from the
   [latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest).
2. Open the DMG and drag **RigOne** into **Applications**.
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

On first launch RigOne checks which agent CLIs it can find and shows their state at the bottom
of the sidebar, for example `Claude · Codex ready`. An empty RigOne opens with a path rather than
blank screens: make an agent, put agents in a row, run it. Every section you cannot use yet says
in words what it is waiting for.

macOS asks for each permission the first time it is needed: access to the folders you work in,
sending events to other applications, and the microphone if a workflow drives an app that
records.

## Concepts

RigOne uses a small, fixed vocabulary. The same words appear on screen, in error messages and here.

| Word | Meaning |
| --- | --- |
| **Project** | A folder on your Mac. Agents, workflows, knowledge and connections belong to a project. |
| **Agent** | A role: one job, one instruction, a vendor, a model and permissions. |
| **Workflow** | A saved graph of steps you can run again. |
| **Step** | A tile in a workflow and a row in the plan. |
| **Runs after** | What an arrow means. Nothing else. |
| **Run** | One execution of a workflow against a project. |
| **Workspace** | The private copy of your code a step works in. |
| **Check** | A command RigOne runs itself to decide whether a step's work holds. |
| **Second opinion** | A review by another agent. It can raise concerns; it can never approve or block. |
| **Note** | Something learned in a run, kept for future prompts once approved. |
| **Tool server** | A connection an agent may use, such as a design tool or an issue tracker. |
| **Lead agent** | The agent you talk to in the command bar. It can prepare; only `/run` starts work. |

The sidebar groups the screens by why you came:

- **Make** — Agents and Workflows.
- **Run** — Run and Triggers.
- **Know** — Knowledge and Lab.

Settings sit at the bottom. The sidebar folds to icons and remembers the choice.

## Agents

An agent is a role you define once and reuse in any workflow. Open **Agents** and press
**Create**, or start from one of the ready-made agents offered on the first screen.

### What an agent holds

- **Name** and **What it does** — a one-line description shown wherever the agent is used.
- **Instructions** — the agent's own words: what to do and how.
- **Runs with** — the vendor (Claude Code or Codex), the model and the effort. The models and
  effort levels offered are the ones your installed CLI reports, including the provider's
  recommended choice. **Refresh models** updates the list; your choice is never replaced for you.
- **Can it change files** — from **Look only** upwards. A step that must save a plan cannot use
  Look only; the editor points at it and offers **Ask first** instead.
- **Can it reach the web** — reading and searching the web only. What it may do with your files
  stays as set above.
- **Give up after** — a timeout. A timeout ends the agent the same supervised way as **Stop**.
- **More settings** — tool servers (connections) and skills, picked from what this project has.
  A name this project does not know stays visible and marked, so you can remove it before a run
  refuses to start.

### Bringing a setup from another project

Each project starts with an empty library. To reuse what you built elsewhere, open the project
menu and choose **Import setup from project**. Pick a source project, filter by category and tick
individual items. Workflows show what they depend on. The import creates independent copies; it
never overwrites existing files and never copies secrets or history. Items you already have come
back marked and unticked.

Connections found in your personal Claude Code settings arrive turned on. Connections found in a
project's files start turned off and wait for you, because a repository's settings can name any
command to run. A skill that asks for tools of its own waits until you have read it.

## Workflows

A workflow is the thing you build in the editor and run again. Open **Workflows** and press
**Create** to start from an empty canvas. The workflow you run most often takes the full width of
the list.

### Kinds of step

There are three kinds of tile, and that number does not grow when vendors add features:

- **Step** — an agent does a piece of the work.
- **Checkpoint** — the run stops and waits for you.
- **Check** — RigOne runs a command and records what it found.

A step can run several copies of itself (shown as `×3` on the tile) when you want more than one
take. A step with several arrows coming in reads every handoff it receives, so "combine what the
four researchers found" is an ordinary step with four arrows in.

### Order and parallel branches

Order comes from the arrows. Two steps that wait for the same step start together, because the
engine really does start them together. Loops, conditional paths and retries are part of the graph,
not the engine.

### Context and a shared plan

Open **Context** to create a named set: paste text or add Markdown, images and PDFs, then press
**Build context**. Attach a set to individual steps, share it across a workflow, or use it in a
conversation with the lead agent. A run keeps the version it started with; editing the set later
does not change what an existing run receives.

Steps can also create, update or read one shared, versioned plan. Implementation and review then
work to the same recorded acceptance contract.

## Running a workflow

Open **Run**, pick the project and the workflow, and read the plan before you start. The header
shows the workspace, the number of steps and whether checks are configured.

### Limits before you start

- **How many agents at once** — the most steps that may work at the same time. The limit is real:
  independent branches do run in parallel up to it.
- **Spend at most** — the most a run may cost, in dollars.

Before any step starts, RigOne checks the whole graph: required inputs, permissions, and every
step's model and effort against what your CLI reports. An unsupported choice stops the run before
earlier agents spend time, and names the step that needs attention. These checks cannot promise
that the network or your quota stays available for the whole run.

### The Run screen

The plan reads top to bottom on the left. Each card names the step it waits for and shows its
state. On the right, the stream carries what every agent said, in order, with spawned commands,
output and spend. When an agent asks something, the question is pinned where you will answer it;
everything that does not depend on the answer keeps going.

Outcomes say what really happened: **done**, **failed**, **stopped** or **not run**. An agent
saying "Done" never hides a later failure. Repeated runs of the same step share one card with a
count.

### The command bar

The bar at the bottom talks to the lead agent. It can talk things through and prepare, but only
`/run` starts work. Other commands include `/ask` an agent, `/start` a command, `/history` for past
runs and `/open` a folder.

### Stopping a run

**Stop** ends the whole process group of every running agent, then verifies that the processes
are gone and records the proof with the run.

## Checks and second opinions

When a step finishes, RigOne runs the checks itself; it does not ask the agent whether it worked.
At the end you see three things that are never confused with each other:

1. **what the agent said** it did,
2. **what the checks actually found**,
3. **what you approved**.

"Nothing ran" is its own outcome and never counts as a pass: a green exit code without proof that
tests ran is not accepted as a green check. The same error twice stops the retries instead of
burning more attempts.

A **second opinion** is a review by another agent — often the other vendor. It can raise concerns
for you to read; it can never approve or block a run by itself.

## Where the changes go

Each step works in its own copy of your code, so agents cannot trip over each other. When the run
ends, everything the agents changed waits on its own branch in your project. **Nothing is pushed,
and nothing reaches your own branch until you take it.** If two branches really conflict when work
is combined, the message names the branches where the work is kept. Files ignored by the project,
such as build caches, are skipped.

Two steps that would write to overlapping places at the same time are refused before the first
process starts.

## Knowledge and the Lab

### Notes and skills

**Knowledge** holds two kinds of material:

- **Notes** go into every prompt, every time. An agent can suggest one when a run teaches it
  something; it reaches a future prompt only after you approve it. Leave **Learn from this run**
  on and RigOne keeps up to three suggested notes from a run for you to review.
- **Skills** are used by the model when they fit the work. Paste a link, write one yourself, or
  describe what you want and have an agent write it.

### Lab

**Lab** lets you try an agent on your own code. Pick an agent and RigOne drafts test cases from
this project, so you can see whether a change to the agent made the work better.

## Triggers

A trigger starts a workflow without you pressing Run. Today the supported source is **Linear**:
choose a workflow and how often to check — every 1, 5, 15 or 60 minutes — and an issue newly
assigned to you starts one run.

- The first check only arms the trigger; issues already in your backlog do not start runs.
- One issue starts one run, even across a restart. Editing an issue does not start a second one.
- The API key is entered once and never shown again. **Test connection** checks it without
  starting anything.
- Deleting a trigger asks twice and cancels whatever was waiting to start.

Triggers run while RigOne is open; there is no background daemon.

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

Settings passed through to a vendor CLI can never raise an agent's file permissions; the
**Can it change files** control is the only way to do that.

### What leaves your Mac

RigOne runs on your Mac and works in your folders. The agents it starts are Claude Code and Codex,
so what they read goes to their providers exactly as when you run them in a terminal. A trigger
talks to Linear with the key you gave it.

## Files on disk

| What | Where |
| --- | --- |
| Your library: agents, workflows, skills, notes, triggers, context sets, settings | `~/.rig-one/` |
| A project's own notes and its run history | `.rig-one/` inside the project folder |
| One run: plan, status, handoffs, full answers, logs and results file | `.rig-one/runs/<time>__<id>/` |
| The search index | `.rig-one/rig-one.db` — safe to delete; it is rebuilt from the files |

A project's `.rig-one/` folder is plain files and safe to commit. Agents, workflows and notes are
Markdown and JSON, so they diff cleanly in Git.

**Copy diagnostics** on the Run screen copies a diagnostic bundle for a bug report. Read it before
you share it: it can contain paths that include your macOS user name.

## Updating

RigOne does not install updates by itself. To update, download the new DMG from the
[latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest) and replace
the app in Applications. Your library and project folders stay where they are.

### Coming from Loadout

Loadout is the earlier name of RigOne. Version 1.1.0 moves your data on first launch:

- `~/.loadout` becomes `~/.rig-one`, with agents, workflows, context sets, settings, prices and the
  whole run history.
- Each project folder's `.loadout/` becomes `.rig-one/` the first time you open it.
- If both names already exist, nothing is touched and the log says so.

macOS sees RigOne as a new application, so permissions start over and the old **Loadout.app**
stays in Applications as a separate app. Delete it once your library has arrived. Releases before
1.1.0 cannot update into it: install 1.1.0 from the DMG.

## Uninstall

1. Quit RigOne and move `/Applications/RigOne.app` to the Trash. Your library stays.
2. To remove your data too, delete `~/.rig-one/` and the `.rig-one/` folders inside your projects.
   **This permanently deletes your agents, workflows, notes and run history.** The branches runs
   left in your repositories are ordinary Git branches; delete them with Git if you no longer need
   them.

## Troubleshooting

**The sidebar says a CLI is not ready.** Open Terminal and run `claude` or `codex` once to check
that it is installed and signed in, then restart RigOne.

**A run refuses to start and names a step.** Read the reason on screen: usually a model or effort
level your CLI no longer offers, a connection that is turned off, or a step that must save a plan
but may only look. Fix the step and start again.

**Nothing happened after I pressed Enter in the command bar.** The lead agent talks and prepares;
only `/run` starts work.

**Something else.** [Open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new)
with your RigOne version, macOS version and what you expected. Issues are public: never paste API
keys, private code or a diagnostic bundle you have not read.
