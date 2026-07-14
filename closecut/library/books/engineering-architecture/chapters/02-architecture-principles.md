# 2. Architecture Principles

1. **Local usefulness is non-negotiable.** Personal history and drafting must survive temporary network loss.
2. **Privacy is enforced at every boundary.** UI affordances, local ownership, Firestore rules, DTOs, and deletion flows must agree.
3. **One semantic model, multiple storage representations.** Domain concepts remain stable while SwiftData, Firestore, and Android Room use platform-appropriate persistence models.
4. **Repositories own data policy.** Views request outcomes; repositories decide local mutation, queueing, deduplication, and remote coordination.
5. **Remote infrastructure is replaceable; product semantics are not.** Firebase is an implementation choice behind explicit boundaries.
6. **Synchronization is a state machine, not a side effect.** Pending work, retries, conflicts, tombstones, and user-visible status are modeled.
7. **Social is subordinate to personal memory.** A Circle may receive a projection of an entry; it does not become the owner of that memory.
8. **Accessibility and localization are release criteria.** They are not post-launch polish.
9. **Incremental modularization beats speculative frameworks.** Introduce protocols where they protect high-value seams.
10. **Documentation is part of the change.** Architectural behavior is incomplete until its canonical description and decision record are updated.
