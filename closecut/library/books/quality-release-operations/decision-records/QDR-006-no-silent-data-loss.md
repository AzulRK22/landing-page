# QDR-006: No Silent Data Loss

**Status:** Accepted

## Context
CloseCut requires a durable, evidence-based quality model that protects user data, privacy and trust across offline and cloud behavior.

## Decision
Failures must preserve data or produce an explicit recoverable state.

## Consequences
Release plans, test design and exceptions must reference this decision. Any deviation requires an owner, expiry date, compensating control and explicit risk acceptance.
