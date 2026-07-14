# 3. System Overview

The iOS application is composed of an application shell, feature presentation, shared UI/design foundations, domain and persistence models, repositories, remote data sources, synchronization services, Firebase infrastructure, and external metadata integration.

At launch, `CloseCutApp` creates session-level services and the SwiftData model container. `AppDelegate` configures Firebase, Firestore persistence/index behavior, and notification delegation. `RootView` resolves authentication, session preparation, launch/onboarding gates, and the main tab experience.

The dominant data path is: **View -> feature state/ViewModel -> Repository -> SwiftData mutation -> PendingAction queue -> Sync service -> RemoteDataSource -> Firestore**. Pull synchronization reverses the remote portion and maps DTOs back into local records under conflict policy.

The supplied backend contains callable Cloud Functions for Circle invite workflows and account-deletion operations, Firestore and Storage rules, composite indexes, and emulator configuration. The deployed environment itself was not exported; repository configuration is authoritative for intended deployment, while actual production drift remains an operational verification item.
