# 29. Privacy Model

**Purpose.** Personal ownership, explicit selected-Circle sharing, bounded third-party processing, clear retention and deletion semantics.

## Privacy Boundaries

1. A personal record is private unless the owner selects a Circle.
2. Circle membership grants access only to data shared into that Circle.
3. Want to Watch, private recommendations, and personal insights are not Circle data.
4. Group recommendation logic may use only shared group signals.
5. Third-party metadata requests must not include unnecessary personal journal content.
6. Analytics and diagnostics must be documented, minimized, and reflected in App Store privacy declarations.
7. Deletion and unsharing must have predictable, testable outcomes across local and remote state.

## Privacy Decision Matrix

| Data | Default owner | Shared by default | Eligible for selected Circle sharing |
|---|---|---:|---:|
| Personal entry | User | No | Yes |
| Want to Watch item | User | No | No in current product |
| QuickPick history/reasons | User | No | No |
| Circle comment/reaction | Circle context + author | Contextual | Already Circle-scoped |
| Watch Plan | Circle context | Circle members | N/A |
| Analytics/diagnostics | Service operator | No | N/A |
## Requirements

- The Privacy Model experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Review Triggers

- A new platform changes the relevant interaction or privacy model.
- A public claim conflicts with current implementation.
- User research contradicts the intended mental model.
- A security, moderation, or data-retention incident exposes an incomplete rule.
- A feature creates a new data type, audience, or recommendation signal.
