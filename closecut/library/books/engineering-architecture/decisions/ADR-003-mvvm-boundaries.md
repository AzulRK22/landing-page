# ADR-003: MVVM Boundaries

**Status:** Accepted

## Context

Declarative views need presentation state without absorbing business logic.

## Decision

Views render and emit intent; ViewModels coordinate presentation; domain/repositories own policy.

## Consequences

Improves testability; existing heavy views migrate incrementally.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
