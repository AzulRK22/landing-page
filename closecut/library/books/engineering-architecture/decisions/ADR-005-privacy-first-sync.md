# ADR-005: Privacy-first Sync

**Status:** Accepted

## Context

Shared and personal data have different trust boundaries.

## Decision

Owner identity, visibility, explicit Circle IDs, rules, and deletion semantics are enforced end to end.

## Consequences

Reduces accidental disclosure; adds authorization and consistency complexity.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
