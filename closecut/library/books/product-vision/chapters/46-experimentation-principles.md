# 46. Experimentation Principles

**Purpose.** Small, reversible, hypothesis-led experiments with privacy review and qualitative interpretation.

## Experiment Standard

Every experiment states the user problem, hypothesis, primary and guardrail metrics, qualitative question, duration, sample limitation, privacy review, accessibility review, rollback plan, and interpretation rule. Experiments may improve clarity or sequencing; they must not manipulate privacy defaults or conceal system state.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Experimentation Principles without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
