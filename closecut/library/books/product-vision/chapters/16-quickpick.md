# 16. QuickPick

**Purpose.** A focused, rule-based, explainable personal recommendation experience.

**Status:** Implemented

## User Need

I want one credible option when I cannot decide, with a reason I understand and can reject.

## Product Behavior

QuickPick evaluates candidate sources with local rules, filters watched items unless intentionally resurfacing a rewatch, avoids same-session repetition, and shows a reason and confidence label.

## Current Implementation

- **QuickPick (implemented).** Local rule-based engine, reasons, confidence labels, no-repeat, rewatch logic, local heuristics, and TMDB-backed candidate discovery are present.
- `CloseCut/Recommendation`
- `CloseCut/Features/Home/QuickPick`
- **Group QuickPick (future).** Circle-level recommendation remains placeholder/not implemented.
- `CloseCut/Features/Social/Circle`

## Near-Term Direction

Strengthen candidate quality, reason accuracy, dismissal learning, and distinction between rewatch and unwatched discovery.

## Long-Term Vision

More adaptive decision support with transparent signal controls and no black-box authority.

## Requirements

- The QuickPick experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of QuickPick without external documentation.
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
