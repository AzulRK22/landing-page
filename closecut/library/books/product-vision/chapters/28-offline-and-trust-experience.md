# 28. Offline and Trust Experience

**Purpose.** Local continuity, visible sync state, recoverable failure, and non-destructive reconciliation.

**Status:** Partial

## User Need

I want to create and read safely with weak connectivity and understand what has or has not synchronized.

## Product Behavior

Core local data renders immediately. Writes occur locally before remote sync where supported. Pending and failed states remain visible, recoverable, and non-destructive.

## Current Implementation

- **Offline and Sync (partial).** Local-first persistence, queue, conflict policy, push/pull, and manual/session sync exist. No real-time listeners, background sync, or automatic retry scheduler.
- `CloseCut/Core/Sync`
- `CloseCut/Core/Repositories`

## Near-Term Direction

Add automatic retry strategy and eventually background/realtime behavior only after conflict and battery behavior are proven.

## Long-Term Vision

Seamless multi-device continuity with resilient reconciliation and transparent local ownership.

## Requirements

- The Offline and Trust Experience experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Acceptance Criteria

- Implemented behavior is available without implying that missing reliability or ecosystem capabilities already exist.
- A new user can understand the purpose of Offline and Trust Experience without external documentation.
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
