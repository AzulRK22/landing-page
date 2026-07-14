# 26. Conflict Resolution

Conflict policy is aggregate-specific. Entries use stable IDs and timestamps with explicit treatment of user-authored fields, remote updates, and deletion. Server timestamps establish remote ordering but do not erase local intent. Deletion uses tombstones or durable delete actions until remote confirmation prevents resurrection.

Automatic resolution is allowed only when the rule is deterministic and preserves user work. Ambiguous concurrent edits should prefer a recoverable local copy or explicit review rather than silent loss. Conflict policies are pure and unit-tested.
