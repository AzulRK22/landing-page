# Data Ownership and Lifecycle

The data model separates personal history, shared context, and operational metadata. Ownership is explicit and stable across synchronization.

## Lifecycle principles

- Store only what the product needs.
- Use stable identifiers for logical entities and retry-safe operations.
- Represent deletion with tombstones long enough to synchronize safely.
- Define retention and permanent deletion separately.
- Evolve schemas compatibly or through staged migration.
- Keep analytics and diagnostics free of private journal content.

This edition describes the policy but omits exact collection names, field dictionaries, document paths, and migration scripts.
