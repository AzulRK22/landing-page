# 9. Navigation Architecture

`AppNavigationCoordinator`, `AppRoute`, and `AppTab` form the explicit navigation vocabulary. Root gates decide authentication/onboarding/main application state; feature navigation should use typed routes rather than string identifiers. Notification deep links are translated through a dedicated router before reaching feature destinations.

Navigation state must not become a second source of domain truth. Routes carry stable identifiers or lightweight launch context, then destination loaders obtain authoritative local data. Deep links must fail safely when content was deleted, belongs to another account, or is not yet synchronized.
