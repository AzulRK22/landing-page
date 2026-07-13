# 36. Anti-Patterns and Non-Goals

**Purpose.** Public ratings-first behavior, follower graphs, infinite feeds, opaque AI claims, accidental sharing, and metadata-heavy capture.

## Prohibited Directions

- Public ratings-first or review-first product hierarchy.
- Global discovery or social feeds driven by popularity.
- Followers, influencer mechanics, public streaks, or leaderboards.
- Infinite recommendation feeds that replace focused decision support.
- Automatic Circle sharing or account-wide social defaults.
- Opaque AI claims or certainty language.
- Metadata requirements that block manual personal capture.
- Treating pending sync as completed remote persistence.
- Shipping social scale before moderation and account controls.
## Requirements

- The Anti-Patterns and Non-Goals experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
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
