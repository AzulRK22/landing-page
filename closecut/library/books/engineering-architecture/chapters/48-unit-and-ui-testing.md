# 48. Unit and UI Testing

Unit tests must be deterministic: inject clocks, UUID sources, connectivity, and external clients where behavior depends on them. Recommendation tests use fixed candidate histories and assert both selection and explanation. Sync tests assert queue transitions, retries, and idempotency.

UI tests cover launch gates, sign-in/onboarding, Quick Add, entry creation/edit, offline pending indicators, Circle access, and account deletion confirmation. Accessibility identifiers are stable contracts for critical controls, not visual implementation details.
