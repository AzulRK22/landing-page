# 10. Product Pillars

**Purpose.** Personal Memory; Taste and Decision Support; Trusted Coordination; Calm, Reliable Experience.

**Status:** Implemented

## User Need

People need one coherent product rather than a collection of unrelated media utilities.

## Product Behavior

The system is organized around four pillars: Personal Memory, Taste and Decision Support, Trusted Coordination, and Calm Reliable Experience. Every feature must have one primary pillar and may support others.

## Current Implementation

- **Authentication and Session (implemented).** Email/password authentication and session gating are present. Password reset and email verification are not surfaced.
- `CloseCut/Core/Services/AuthService.swift`
- `CloseCut/Core/Services/SessionViewModel.swift`
- **Onboarding (implemented).** Start-fresh and Quick Add activation paths are implemented.
- `CloseCut/Features/Onboarding`
- **Quick Add Past Watches (implemented).** TMDB search, local fallback, manual entry, duplicate prevention, quick sentiment, approximate date, and upgrade path are present.
- `CloseCut/Features/QuickAdd`
- **Personal Journal Entries (implemented).** Rich entry creation/editing, soft delete, metadata, mood, tags, notes, quotes, context, cinema fields, and sharing targets are present.
- `CloseCut/Features/Entries`
- `CloseCut/Core/Local/LocalEntry.swift`

## Near-Term Direction

Clarify feature hierarchy in navigation and public messaging; remove duplication among decision surfaces.

## Long-Term Vision

The pillars remain stable while individual features and navigation evolve.

## Requirements

- The Product Pillars experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Product Pillars without external documentation.
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
