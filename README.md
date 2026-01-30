# Pomodoro Timer Demo

A web-based Pomodoro timer built to demonstrate the **GSD (Get Shit Done)** workflow for Claude Code.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Vite](https://img.shields.io/badge/Vite-6.2-purple)

## What is GSD?

**GSD (Get Shit Done)** is a structured workflow system for Claude Code that transforms vague project ideas into shipped software through systematic planning and execution.

### Core Philosophy

GSD enforces a disciplined approach to AI-assisted development:

1. **Plan before you code** - No jumping straight into implementation
2. **Phase-based delivery** - Break work into atomic, verifiable chunks
3. **Goal-backward verification** - Validate that what you built actually achieves the goal
4. **Accumulated context** - Maintain project knowledge across sessions

### The GSD Workflow

```
/gsd:new-project     →  Define requirements and constraints
         ↓
    ROADMAP.md       →  Phases with success criteria
         ↓
/gsd:plan-phase      →  Detailed execution plans (PLAN.md)
         ↓
/gsd:execute-phase   →  Build with atomic commits
         ↓
    SUMMARY.md       →  Document what was built
         ↓
    (repeat)         →  Next phase until complete
```

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

1. **[PROJECT.md](.planning/PROJECT.md)** - See how requirements are captured with "Active", "Validated", and "Out of Scope" sections
2. **[ROADMAP.md](.planning/ROADMAP.md)** - See how phases map to requirements with clear success criteria
3. **[Any PLAN.md](.planning/phases/03-completion-experience/03-01-PLAN.md)** - See the task breakdown format with verify/done conditions

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

## Learning More About GSD

### GSD Commands

| Command | Purpose |
|---------|---------|
| `/gsd:new-project` | Initialize a new project with requirements gathering |
| `/gsd:plan-phase` | Create detailed execution plan for a phase |
| `/gsd:execute-phase` | Execute a planned phase with verification |
| `/gsd:progress` | Check current status and next actions |
| `/gsd:help` | See all available commands |

### GSD Principles

**1. Requirements First**
Before writing code, GSD captures what you're building, why, and what's explicitly out of scope.

**2. Phases Have Goals, Not Just Tasks**
Each phase has a clear "goal statement" that defines success. Tasks are just the means to achieve that goal.

**3. Plans Are Verifiable**
Every task includes `<verify>` steps and `<done>` conditions so you know when it's actually complete.

**4. Summaries Capture Reality**
After execution, SUMMARY.md documents what was actually built (which may differ from the plan).

**5. State Persists Across Sessions**
PROJECT.md and STATE.md maintain context so you can resume work days later without losing track.

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
