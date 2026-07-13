# 45. Analytics Philosophy

**Purpose.** Collect the minimum events needed to improve the product; avoid surveillance-style behavioral exhaust.

## Data-Minimization Rules

- Define a decision or hypothesis before adding an event.
- Avoid collecting raw journal content for analytics.
- Use coarse, non-sensitive properties where sufficient.
- Document retention, access, and deletion behavior.
- Separate diagnostics from product analytics.
- Ensure public privacy declarations match enabled SDK behavior.
- Prefer qualitative interviews for meaning and confusion.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Analytics Philosophy without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
