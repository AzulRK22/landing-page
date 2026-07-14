# 23. Recommendation Models

QuickPick uses explicit candidates, signals, scores, no-repeat policy, rewatch rules, history analysis, and reason construction. The output is a recommendation plus an explanation code and state, not an opaque ranking feed. Local recommendation history may be persisted to avoid repetition and support continuity.

Recommendation inputs must be privacy-minimized and deterministic enough to test. Future ML may assist candidate scoring, but it may not remove explainability, transmit private journal text by default, or silently replace the local rules engine.
