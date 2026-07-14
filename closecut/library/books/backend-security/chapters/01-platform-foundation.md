# Platform Foundation

CloseCut uses a local-first mobile architecture with Firebase-backed identity and synchronization. The public platform model is intentionally described at the level of responsibilities and boundaries rather than deployable configuration.

## Principles

- Private data remains private unless the user explicitly shares it.
- Local state provides immediate responsiveness and offline continuity.
- Remote services replicate supported data and enforce shared-access boundaries.
- Server-side policy, not UI visibility, is the authorization boundary.
- Operational claims are labeled as current, near-term, or future.

## Public boundary

This edition does not publish production topology, deployment instructions, environment identifiers, secrets, rule source, index definitions, runbooks, or security-audit evidence.
