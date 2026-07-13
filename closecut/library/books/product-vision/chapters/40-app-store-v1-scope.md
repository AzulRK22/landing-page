# 40. App Store v1 Scope

**Purpose.** A smaller, supportable promise with complete privacy, deletion, moderation, localization, metadata, and release readiness.

## Release Gate

App Store v1 should not be defined as “everything already in the repository.” It should be the smallest coherent promise that can be supported safely. Required release completeness includes:

- Stable auth and recovery path.
- Working account deletion and local purge.
- Accurate privacy policy and App Privacy labels.
- UGC reporting and an appropriate blocking/support strategy.
- Deployed and tested Firestore rules/indexes.
- TMDB attribution and configuration compliance.
- Localization quality for declared languages.
- Accessibility and device-size QA.
- Crash, analytics, and performance configuration verified.
- Store metadata, screenshots, age rating, support, and review instructions complete.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of App Store v1 Scope without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
