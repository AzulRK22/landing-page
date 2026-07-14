# Conflict Resolution and Idempotency

Distributed state can diverge when devices operate offline, retries overlap, or membership changes during an active session. CloseCut therefore requires deterministic reconciliation.

## Rules

- Repeating an operation must not create duplicate logical effects.
- Stable operation and entity identifiers support retry safety.
- Deletion tombstones prevent removed data from being resurrected.
- Explicit sharing changes are treated as deliberate state transitions.
- Membership changes invalidate access even when old content remains visible locally.
- Old clients must not silently overwrite newer schema semantics.

Conflict policy should favor preserving user-authored local work while maintaining remote privacy constraints.
