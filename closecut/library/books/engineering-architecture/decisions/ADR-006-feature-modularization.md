# ADR-006: Feature Modularization

**Status:** Accepted

## Context

The codebase needs ownership without premature package fragmentation.

## Decision

Use feature folders and stable core boundaries; extract packages only when evidence supports it.

## Consequences

Keeps iteration fast while preserving a migration path.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
