# 11. MVVM

CloseCut uses pragmatic MVVM. Views render observable state and emit user intent. ViewModels coordinate presentation-specific state, validation, cancellation, and repository calls. Repositories and services own persistence, network, and cross-feature policy.

A ViewModel must not become a universal service locator or duplicate local storage. Pure formatting may remain in view helpers; business decisions such as duplicate policy, recommendation scoring, membership authorization, and conflict resolution belong outside presentation. Long-lived ViewModels must be `@MainActor` where they mutate UI-observed state and must cancel tasks/listeners when their lifecycle ends.
