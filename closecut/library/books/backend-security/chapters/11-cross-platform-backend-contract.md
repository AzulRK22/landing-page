# Cross-Platform Backend Contract

iOS and Android may use different local technologies, but they must preserve the same remote contract and product semantics.

## Shared requirements

- Equivalent ownership and visibility rules.
- Equivalent authentication and account lifecycle behavior.
- Equivalent synchronization semantics.
- Compatible identifiers, timestamps, and deletion markers.
- Versioned evolution that supports older clients during migration.
- Platform-specific UI differences must not weaken privacy or authorization.

The backend contract should remain portable enough to support future platform or infrastructure changes without rewriting the product model.
