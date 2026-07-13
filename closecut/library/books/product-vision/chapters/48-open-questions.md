# 48. Open Questions

**Purpose.** Decisions requiring evidence or owner confirmation, maintained as a governed queue rather than hidden assumptions.

## Decisions Requiring Human Confirmation

1. Is App Store v1 intentionally broad, or should Battle/Awards & Culture remain beta-only?
2. What is the final public category language: “private film & series journal” or the broader “private entertainment memory system”?
3. Which languages will be declared at launch, and what quality gate applies to each?
4. What blocking behavior is required for Circle UGC before public release?
5. Will local notifications ship in v1, and what user jobs justify them?
6. What exact account-deletion timeline and retention policy will be promised?
7. Is private rating an enduring signal or a temporary implementation detail?
8. Which analytics SDKs and events will be enabled in production?
9. What export/data-portability baseline is required for long-term trust?
10. What feature is the primary landing and App Store conversion story after the journal?

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Open Questions without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
