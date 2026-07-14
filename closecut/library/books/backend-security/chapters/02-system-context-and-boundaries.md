# System Context and Boundaries

The platform has four conceptual layers: the iOS client, local persistence, synchronization and repository services, and Firebase-managed remote services.

The client owns presentation and user intent. SwiftData preserves immediate local state. Repository and synchronization layers translate between domain state and remote representations. Firebase Authentication establishes identity, while Firestore, Storage, and privileged backend operations enforce remote access and shared-state invariants.

## Boundary rules

- Views do not directly own remote authorization logic.
- Remote outages should not erase valid local work.
- Shared access is scoped to explicit membership and explicit sharing.
- Privileged cross-document operations belong behind trusted backend boundaries.
- Platform-specific implementation must preserve the same domain contract across iOS and Android.
