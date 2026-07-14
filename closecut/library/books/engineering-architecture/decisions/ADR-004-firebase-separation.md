# ADR-004: Firebase Separation

**Status:** Accepted

## Context

Firebase is infrastructure, not domain vocabulary.

## Decision

SDK usage is restricted to bootstrap, infrastructure services, remote data sources, and backend.

## Consequences

Supports emulator testing and future substitution; some direct imports remain debt.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
