# 6. Module Boundaries

The current physical structure is primarily folder-based rather than separate Swift packages. That is acceptable while the codebase remains a single application target, provided dependency direction is enforced in review and tests.

Observed source distribution: Feature: 251, Shared UI: 30, Domain: 30, Other: 18, Remote Data Source / DTO: 18, Local Persistence: 12, Recommendation Engine: 11, Repository: 11, Service: 11, Application Shell: 10, Sync: 9, Test: 8, Infrastructure: 1.

Target boundaries:

- **App** owns composition, lifecycle, root routing, and process-wide integrations.
- **Features** own user flows, presentation state, and feature-specific components.
- **Core Domain** owns product semantics and pure policies.
- **Core Repositories** own aggregate access and write policy.
- **Core Local** owns SwiftData representations and local stores.
- **Core Remote** owns Firebase paths, DTOs, and transport behavior.
- **Core Sync** owns queues, reconciliation, retries, and conflict policy.
- **Infrastructure** owns platform and third-party adapters.
- **Shared UI / Design System** owns reusable visual primitives without feature data dependencies.

A future extraction into packages is justified only when build isolation, ownership, or reuse benefits exceed the cost of additional public APIs.
