# Pomodoro Timer Demo

A web-based Pomodoro timer built to demonstrate the **GSD (Get Shit Done)** workflow for Claude Code.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Vite](https://img.shields.io/badge/Vite-6.2-purple)

---

## What is GSD?

**GSD (Get Shit Done)** is a structured workflow system for Claude Code that transforms vague project ideas into shipped software through systematic planning and execution.

📦 **Get GSD:** [github.com/glittercowboy/get-shit-done](https://github.com/glittercowboy/get-shit-done)

### Core Philosophy

1. **Plan before you code** - No jumping straight into implementation
2. **Phase-based delivery** - Break work into atomic, verifiable chunks
3. **Goal-backward verification** - Validate that what you built achieves the goal
4. **Accumulated context** - Maintain project knowledge across sessions

---

## The GSD Workflow

GSD follows three distinct phases, each with specific outputs:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ┌───────────────┐     ┌───────────────┐     ┌───────────────┐            │
│   │   DISCOVERY   │     │   PLANNING    │     │   EXECUTION   │            │
│   │     (Blue)    │────▶│    (Green)    │────▶│     (Red)     │            │
│   └───────────────┘     └───────────────┘     └───────┬───────┘            │
│                                                       │                     │
│   • Questioning         • Requirements               • Execute Tasks       │
│   • Research            • Roadmap                    • Verify Work         │
│                         • Plan Tasks                         │              │
│                               ▲                              │              │
│                               │      ┌───────────────────────┘              │
│                               │      │                                      │
│                               │      ▼                                      │
│                         ┌─────┴──────────┐                                  │
│                         │  Gaps found?   │                                  │
│                         │   Revise plan  │                                  │
│                         └────────────────┘                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Phase 1: Discovery (Blue)

> *Understand what to build through questioning and research*

| Step | What Happens | Output |
|------|--------------|--------|
| **Questioning** | GSD asks focused questions about what you want to build, who it's for, and what success looks like | User answers captured |
| **Research** | GSD researches the domain, identifies patterns, gathers technical context | Domain knowledge for planning |

**Commands:** `/gsd:new-project`

### Phase 2: Planning (Green)

> *Break work into requirements, roadmap, and detailed task plans*

| Step | What Happens | Output |
|------|--------------|--------|
| **Requirements** | User needs refined into specific, testable criteria | `PROJECT.md` |
| **Roadmap** | Work organized into phases with clear dependencies | `ROADMAP.md` |
| **Plan Tasks** | Each phase gets detailed tasks with verification steps | `PLAN.md` files |

**Commands:** `/gsd:plan-phase`

### Phase 3: Execution (Red)

> *Execute tasks autonomously with continuous verification*

| Step | What Happens | Output |
|------|--------------|--------|
| **Execute** | Claude Code executes each task, writes code, runs tests | Working code |
| **Verify** | Each task verified against criteria | Pass → commit, Fail → fix |
| **Loop** | If gaps found, revise plan and re-execute | Quality assured |

**Commands:** `/gsd:execute-phase`

### The Critical Feedback Loop

```
Verify ──────▶ Gaps found? ──────▶ Revise Plan ──────▶ Re-execute
   │
   └────────▶ Phase complete ──────▶ Next Phase or Done
```

**GSD doesn't execute blindly** - it validates each step and course-corrects when something doesn't work as expected.

---

## This Demo Project

This Pomodoro timer was built in **3 phases** to demonstrate GSD in action:

| Phase | Goal | Key Deliverables |
|-------|------|------------------|
| 1. Setup | Running React app | Vite + TypeScript scaffolding |
| 2. Timer Core | Functional countdown | Start/Stop/Reset, Work/Break modes |
| 3. Completion | Self-running demo | Rick Astley celebration, auto-cycle |

### Why a Pomodoro Timer?

- **Quick to build** - Demonstrates full workflow in ~30 minutes
- **Visual results** - Easy to verify each phase works
- **Self-running demo** - 30-second timers auto-cycle for presentations

---

## Exploring the GSD Artifacts

Browse the `.planning/` directory to see how GSD structures a project:

```
.planning/
├── PROJECT.md              # Requirements, constraints, decisions
├── ROADMAP.md              # Phase breakdown with success criteria
├── STATE.md                # Current progress and context
└── phases/
    ├── 01-setup/
    │   ├── 01-01-PLAN.md   # Detailed execution plan
    │   └── 01-01-SUMMARY.md # What was actually built
    ├── 02-timer-core/
    │   ├── 02-01-PLAN.md
    │   └── 02-01-SUMMARY.md
    └── 03-completion-experience/
        ├── 03-01-PLAN.md
        └── 03-01-SUMMARY.md
```

### Key Documents to Read

| Document | What You'll Learn |
|----------|-------------------|
| [PROJECT.md](.planning/PROJECT.md) | How requirements are captured with "Active", "Validated", and "Out of Scope" sections |
| [ROADMAP.md](.planning/ROADMAP.md) | How phases map to requirements with clear success criteria |
| [PLAN.md example](.planning/phases/03-completion-experience/03-01-PLAN.md) | Task breakdown format with verify/done conditions |

---

## Running the Demo

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

Click **Start** to begin a 30-second countdown. When it completes:
- Timer turns green
- Rick Astley appears (you've been rickrolled!)
- 30-second reset countdown begins
- Auto-cycles between Work and Break modes

---

## GSD Command Reference

| Command | Purpose |
|---------|---------|
| `/gsd:new-project` | Initialize a new project with requirements gathering |
| `/gsd:plan-phase` | Create detailed execution plan for a phase |
| `/gsd:execute-phase` | Execute a planned phase with verification |
| `/gsd:progress` | Check current status and next actions |
| `/gsd:verify-work` | Validate built features through UAT |
| `/gsd:help` | See all available commands |

---

## GSD Principles

| Principle | Description |
|-----------|-------------|
| **Requirements First** | Before writing code, capture what you're building, why, and what's out of scope |
| **Goals Over Tasks** | Each phase has a goal statement. Tasks are just the means to achieve that goal |
| **Verifiable Plans** | Every task includes `<verify>` steps and `<done>` conditions |
| **Summaries Capture Reality** | SUMMARY.md documents what was actually built (may differ from plan) |
| **Persistent State** | PROJECT.md and STATE.md maintain context across sessions |

---

## Project Structure

```
src/
├── App.tsx                 # Root component
├── App.css                 # App layout styles
├── index.css               # Global styles
├── main.tsx                # React entry point
└── components/
    ├── Timer.tsx           # Timer logic and state
    └── Timer.css           # Timer styling
```

## Tech Stack

- **React 19** - UI framework
- **TypeScript 5.7** - Type safety
- **Vite 6.2** - Build tool with HMR
- **ESLint** - Code linting

## License

MIT

---

*Built with Claude Code using the GSD workflow*
