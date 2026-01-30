# Pomodoro Demo Timer

## What This Is

A web-based Pomodoro timer designed for live demos to colleagues. Uses short 30-second work/break cycles so audiences can watch complete sessions without waiting. Features a Rick Astley visual celebration on timer completion for entertainment value.

## Core Value

Demonstrate GSD workflow to colleagues using a tangible, visual example that completes quickly enough to keep audience attention.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Web app with React + Vite
- [ ] Work and Break mode toggle buttons
- [ ] Start, Stop, Reset timer controls
- [ ] 30-second configurable timers (demo-friendly duration)
- [ ] Visual countdown display
- [ ] Timer turns green on completion
- [ ] Rick Astley image/gif appears on completion
- [ ] 30-second reset countdown after completion
- [ ] Auto-start next session after reset (work → break → work cycle)
- [ ] Session counter tracking completed cycles
- [ ] No sound — visual feedback only

### Out of Scope

- Sound/audio notifications — visual only for demo environment
- Long timer durations (25min/5min) — demo needs quick cycles
- Data persistence — in-memory is fine for demo
- User accounts/authentication — single-user demo tool
- Mobile-specific optimization — desktop browser demo

## Context

This timer exists to showcase the GSD (Get Shit Done) workflow to colleagues. The actual Pomodoro functionality is secondary to demonstrating the development process. Short timers and auto-cycling allow the demo to run continuously while presenting, with Rick Astley providing memorable completion feedback.

## Constraints

- **Demo timing**: Timers must be short enough (30s) to show completions during a presentation
- **Visual-only**: No audio to avoid disrupting meeting environments
- **Self-running**: Auto-cycle so presenter doesn't need to interact during demo

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React + Vite | Modern stack, fast builds, good demo of real-world tooling | — Pending |
| 30-second default timers | Long enough to feel like a timer, short enough for demo cycles | — Pending |
| Rick Astley on completion | Memorable, fun, keeps audience engaged | — Pending |
| Auto-cycle after 30s reset | Hands-free demo loop | — Pending |

---
*Last updated: 2026-01-30 after initialization*
