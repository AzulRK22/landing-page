# ADR-007: Offline-first Behavior

**Status:** Accepted

## Context

Firestore cache alone does not guarantee user trust.

## Decision

Core writes commit locally and queue; online-required operations state their dependency.

## Consequences

Requires pending indicators, retries, and idempotency.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
