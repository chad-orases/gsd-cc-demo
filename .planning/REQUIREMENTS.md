# Requirements: Pomodoro Demo Timer

**Defined:** 2026-01-30
**Core Value:** Demonstrate GSD workflow to colleagues using a tangible, visual example that completes quickly enough to keep audience attention.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Timer Core

- [ ] **TIMER-01**: User can start the countdown timer
- [ ] **TIMER-02**: User can stop/pause the countdown timer
- [ ] **TIMER-03**: User can reset the timer to initial value
- [ ] **TIMER-04**: Timer displays countdown in MM:SS format
- [ ] **TIMER-05**: Timer defaults to 30 seconds for demo purposes

### Modes

- [ ] **MODE-01**: User can switch to Work mode
- [ ] **MODE-02**: User can switch to Break mode
- [ ] **MODE-03**: Current mode is visually indicated

### Completion

- [ ] **COMP-01**: Timer turns green when countdown reaches zero
- [ ] **COMP-02**: Rick Astley image/gif displays on completion
- [ ] **COMP-03**: 30-second reset countdown starts after completion
- [ ] **COMP-04**: Next session auto-starts after reset (work<->break toggle)

### Tracking

- [ ] **TRACK-01**: Completed sessions are counted and displayed

### Infrastructure

- [ ] **INFRA-01**: React + Vite web application
- [ ] **INFRA-02**: Runs in browser without installation

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

(None — this is a demo project)

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Sound/audio notifications | Visual-only for demo environment |
| Long timer durations (25min/5min) | Demo needs quick 30-second cycles |
| Data persistence | In-memory fine for demo |
| User accounts/authentication | Single-user demo tool |
| Mobile optimization | Desktop browser demo |
| Configurable timer durations | Fixed 30s keeps demo simple |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1 | Pending |
| INFRA-02 | Phase 1 | Pending |
| TIMER-01 | Phase 2 | Pending |
| TIMER-02 | Phase 2 | Pending |
| TIMER-03 | Phase 2 | Pending |
| TIMER-04 | Phase 2 | Pending |
| TIMER-05 | Phase 2 | Pending |
| MODE-01 | Phase 2 | Pending |
| MODE-02 | Phase 2 | Pending |
| MODE-03 | Phase 2 | Pending |
| COMP-01 | Phase 3 | Pending |
| COMP-02 | Phase 3 | Pending |
| COMP-03 | Phase 3 | Pending |
| COMP-04 | Phase 3 | Pending |
| TRACK-01 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 15 total
- Mapped to phases: 15
- Unmapped: 0

---
*Requirements defined: 2026-01-30*
*Last updated: 2026-01-30 after roadmap creation*
