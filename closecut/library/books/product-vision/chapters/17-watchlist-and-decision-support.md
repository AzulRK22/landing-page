# 17. Watchlist and Decision Support

**Purpose.** A private staging area connecting discovery, decisions, and eventual history.

**Status:** Implemented

## User Need

I want to keep candidates without confusing intention with history, and move them naturally toward a decision.

## Product Behavior

Want to Watch stores private candidates and supports save, dismiss, mark watched, convert to history, enter Battle, or create a plan. Status must never imply that a candidate was watched.

## Current Implementation

- **Want to Watch (implemented).** Private saved list, status handling, mark watched, conversion to Quick Add, and push/pull sync are present.
- `CloseCut/Features/Watchlist`
- `CloseCut/Core/Repositories/WatchlistRepository.swift`

## Near-Term Direction

Unify status vocabulary and ensure conversion to watched history is intentional and reversible.

## Long-Term Vision

A universal private queue interoperable with plans and availability while remaining distinct from watched history.

## Requirements

- The Watchlist and Decision Support experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Watchlist and Decision Support without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.

## Edge Cases

- No local data and no network.
- Local data exists while the remote copy is older or unavailable.
- The user revokes permission or loses Circle membership during an active flow.
- Metadata becomes unavailable after an item has been saved.
- The app is terminated during a pending write or navigation transition.
- The same item is encountered through multiple origins or contexts.

## Privacy and Accessibility Implications

The feature must minimize collected data, preserve context boundaries, expose sharing and synchronization states in language, and support VoiceOver, Dynamic Type, sufficient contrast, reduced motion, and non-color status.

## Success Signals

- People complete the intended job without needing support or external explanation.
- The feature creates a meaningful transition to another core loop step.
- Reported accidental sharing, lost data, and unrecoverable errors remain near zero.
- Qualitative feedback describes increased memory value, decision confidence, or trusted coordination.

## Related Decision Records

- PDR-001 Private by Default
- PDR-002 Memory over Ratings
- PDR-003 Personal First, Social Second
- PDR-004 One Thoughtful Pick
- PDR-005 Local-First Trust
- PDR-006 Membership-Based Circles
- PDR-007 One Entry Model
- PDR-008 Explain Recommendations
- PDR-009 Explicit Circle Context
- PDR-010 Calm, Native Interaction
