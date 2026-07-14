# 24. Sync Engine

Synchronization is built around `PendingAction`, queue helpers, per-aggregate sync services, DTOs, and conflict policy. The local write commits first, then a pending action records remote intent. Push processing is idempotent by stable entity/action identifiers. Pull processing maps remote state into local records and resolves conflicts without bypassing ownership.

A sync cycle must be observable: started, progress/aggregate results, completed, partially failed, or blocked by authentication/network. Queue records retain retry count and last failure category, not sensitive payload logs. Poison actions require quarantine or user-visible remediation rather than infinite retry.
