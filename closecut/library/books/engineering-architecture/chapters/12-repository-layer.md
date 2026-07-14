# 12. Repository Layer

Repositories are the application-facing data authority. They translate between domain objects and local/remote representations, enforce ownership predicates, coordinate local writes and pending actions, and expose intention-revealing operations.

Current repositories cover entries, Circles, user profiles/state, watchlist, Watch Together plans, battle results, and QuickPick recommendations. The target is not protocol proliferation. Protocols are required where tests, platform substitution, emulator isolation, or multiple implementations create genuine value. Repository APIs should avoid leaking `ModelContext`, Firestore snapshots, or DTOs.
