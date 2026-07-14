# 27. Release Candidate and Gates

## Purpose
Establish the quality contract for release candidate so release decisions are based on observable evidence and user risk.

## Current state
No direct automated evidence was identified for this subject.

## Quality risk
This area must be assessed by user harm, reversibility, privacy boundary, data durability, platform dependency and frequency of change. Unknown behavior is treated as risk, not as a pass.

## Required coverage
Use the lowest-cost test level that can prove the behavior, then add integration or UI coverage where framework boundaries, persistence, permissions, accessibility, remote authorization or user-visible recovery are involved. Use deterministic fixtures; capture build, device, OS, environment and result.

## Missing coverage
Define measurable coverage and retain execution evidence.

## Acceptance criteria
The defined happy path and negative paths pass; failures are visible and recoverable; no unauthorized data is exposed; core controls are accessible; offline behavior preserves intent; and evidence is linked to the release candidate.

## Release gate
A failure blocks release when it can cause data loss, privacy breach, inaccessible core flow, account lockout or unrecoverable user state.

## Evidence required
Retain the test run, build/version, commit, environment, device/OS, fixture or account, result, defects and approver. Manual evidence expires when affected code, configuration or policy changes.

## Ownership
Engineering owns automated correctness; the Release Owner owns execution evidence; Product owns acceptance; the Accessibility and Privacy reviewers own their respective gates.

## Near-term improvement
Close the highest-risk evidence gap before increasing breadth. Prefer a small deterministic suite over broad flaky automation.

## Long-term maturity
Automate repeatable checks, trend outcomes, and keep platform-specific exceptions explicit while preserving shared acceptance criteria.

## Related decisions
QDR-001, QDR-008, QDR-010, QDR-014.
