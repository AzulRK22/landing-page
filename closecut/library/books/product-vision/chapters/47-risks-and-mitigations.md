# 47. Risks and Mitigations

**Purpose.** Scope diffusion, weak activation, sync trust, metadata dependency, social complexity, privacy mistakes, and product-message mismatch.

## Risk Register

| Risk | Consequence | Mitigation |
|---|---|---|
| Product breadth obscures core value | Weak activation and confusing marketing | Progressive disclosure; prioritize Personal Memory and focused choice |
| Sync ambiguity | Loss of trust | Explicit local/pending/failed states; non-destructive retry |
| Social scale before safety | App Store and user harm | Reporting, blocking strategy, support, bounded audience |
| Metadata dependency | Broken capture/discovery | Manual fallback, cached safe rendering, attribution compliance |
| Overclaiming intelligence | Misleading positioning | Evidence-linked reasons and prohibited claim vocabulary |
| Privacy mistake | Irreversible trust damage | Private defaults, explicit selected context, rule tests, audit trails |
| Historic docs remain active | Contradictory implementation | Archive old files and link only to canonical suite |
| Under-tested large views and sync paths | Regression risk | ViewModel extraction, unit/integration/UI expansion |

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Risks and Mitigations without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
