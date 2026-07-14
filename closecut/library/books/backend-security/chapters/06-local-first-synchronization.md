# Local-First Synchronization

CloseCut commits supported user actions locally before attempting remote replication. This protects responsiveness and preserves work during network or service failure.

A durable pending-action model represents remote work that has not yet completed. Actions move through explicit states, retain retry information, and must be safe to execute more than once.

## Sync contract

1. Validate user intent locally.
2. Commit the local domain change.
3. Enqueue the corresponding remote action.
4. Attempt synchronization when conditions allow.
5. Reconcile confirmed remote state.
6. Preserve actionable failure information without exposing sensitive content.

The public edition excludes internal queue schemas, operational telemetry fields, and recovery runbooks.
