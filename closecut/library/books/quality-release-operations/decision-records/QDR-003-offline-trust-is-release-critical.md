# QDR-003: Offline Trust Is Release-Critical

**Status:** Accepted

## Context
CloseCut requires a durable, evidence-based quality model that protects user data, privacy and trust across offline and cloud behavior.

## Decision
Offline-created user data must survive termination, reconnection and retry without duplication.

## Consequences
Release plans, test design and exceptions must reference this decision. Any deviation requires an owner, expiry date, compensating control and explicit risk acceptance.
