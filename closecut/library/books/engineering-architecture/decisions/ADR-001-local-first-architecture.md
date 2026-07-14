# ADR-001: Local-first Architecture

**Status:** Accepted

## Context

Personal memories require immediate, durable local utility.

## Decision

SwiftData is the primary UI source for user-owned data. Remote synchronization is secondary and explicit.

## Consequences

Fast offline behavior and resilience; requires queues, migrations, and conflict policy.

## Compliance

Changes that conflict with this decision require a superseding ADR, migration plan, and updates to the canonical JSON cross-reference graph.
