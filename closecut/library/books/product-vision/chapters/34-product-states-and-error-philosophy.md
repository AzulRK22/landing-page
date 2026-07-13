# 34. Product States and Error Philosophy

**Purpose.** Every feature defines loading, empty, success, offline, pending, failed, permission, and recovery behavior.

## Required State Model

| State | Product obligation |
|---|---|
| Loading | Preserve layout and explain delay only when meaningful |
| Empty | Explain why it is empty and offer the best next action |
| Success | Confirm the result without interrupting momentum |
| Offline | Preserve available work and state what will happen later |
| Pending | Identify the specific local action awaiting synchronization |
| Failed | Keep data, explain impact, and provide retry or support |
| Permission denied | Explain the boundary and available alternative |
| Partial data | Render safely and avoid fabricated placeholders |
| Deleted/unshared | Remove from active context while respecting retention and reconciliation rules |
## Requirements

- The Product States and Error Philosophy experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
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
