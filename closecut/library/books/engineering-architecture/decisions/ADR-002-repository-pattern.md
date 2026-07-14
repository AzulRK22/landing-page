# ADR-002: Repository Pattern

**Status:** Accepted

## Context

Views must not own persistence and transport policy.

## Decision

Repositories expose aggregate operations and coordinate local, remote, and sync behavior.

## Consequences

Creates test seams and stable APIs; requires disciplined boundaries.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
