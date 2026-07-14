# 15. State Management

State is classified as domain state, persisted local state, remote synchronization state, ephemeral presentation state, and derived state. SwiftData is the durable local source for personal application state. Firestore is the remote synchronization and sharing source. View state owns transient selections, sheet presentation, and loading indicators. Derived state must be recomputable and should not be persisted unless computation cost or historical semantics justify it.

Every asynchronous state machine must expose idle, loading, success/empty, recoverable failure, and terminal failure when applicable. Stale data is preferable to an empty screen when the last known local state is trustworthy.
