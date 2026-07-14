# Public Platform Decision Records

This chapter summarizes the stable public platform decisions included with this edition.

- SwiftData is the immediate UI source of truth.
- Firestore acts as a remote synchronization and trusted-sharing layer.
- Supported user writes commit locally first.
- Sharing is always explicit.
- Circle access depends on active membership.
- Retryable remote writes are idempotent.
- Pending actions represent durable remote work.
- Backend policy enforces protected access.
- Privileged cross-document operations belong in trusted backend services.
- Data collection is minimized.
- Private content is excluded from analytics.

The detailed records are included in `decision-records/`.
