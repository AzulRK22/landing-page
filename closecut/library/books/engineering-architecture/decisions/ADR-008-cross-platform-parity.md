# ADR-008: Cross-platform Parity

**Status:** Accepted

## Context

iOS and Android must share semantics without sacrificing native quality.

## Decision

Share backend contracts, IDs, enums, and invariants; use native UI/persistence/scheduling.

## Consequences

Enables consistent data and product behavior with platform-specific implementation.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
