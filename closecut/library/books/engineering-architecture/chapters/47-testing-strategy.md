# 47. Testing Strategy

The repository contains 9 test files, including QuickPick engine, search pipeline, pending queue, conflict policy, duplicate detection, entry filtering/drafting/validation, and UI smoke coverage. Backend package scripts define emulator tests for rules and functions.

The test pyramid prioritizes pure domain tests, repository tests with in-memory SwiftData, sync contract tests, Firebase emulator security/integration tests, focused ViewModel tests, and a small number of stable end-to-end UI journeys. Every production defect should add the lowest-level regression test that proves the violated invariant.
