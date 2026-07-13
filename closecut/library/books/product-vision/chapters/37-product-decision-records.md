# 37. Product Decision Records

**Purpose.** A governed record of durable product decisions, alternatives, consequences, and review triggers.

## Canonical Decisions

### PDR-001 - Private by Default

**Decision:** All personal records remain private unless the owner deliberately selects a Circle.

**Rationale:** Trust is a prerequisite for honest reflection.

**Rejected alternative:** Public-by-default, account-wide sharing defaults.

**Status:** Current and permanent

### PDR-002 - Memory over Ratings

**Decision:** The product prioritizes context, mood, notes, and personal meaning over public numerical scoring.

**Rationale:** A number is useful metadata but an incomplete memory.

**Rejected alternative:** Star-first interaction model.

**Status:** Current and permanent

### PDR-003 - Personal First, Social Second

**Decision:** Personal history must deliver value without Circle participation.

**Rationale:** The private archive is the product foundation; social value is additive.

**Rejected alternative:** Social onboarding gate, public feed.

**Status:** Current and permanent

### PDR-004 - One Thoughtful Pick

**Decision:** QuickPick presents a focused recommendation with a reason rather than an endless recommendation feed.

**Rationale:** Focus reduces decision fatigue and preserves agency.

**Rejected alternative:** Infinite algorithmic feed.

**Status:** Current

### PDR-005 - Local-First Trust

**Decision:** Core creation and reading experiences render from local state; remote services add synchronization and enrichment.

**Rationale:** Journal moments must not depend on perfect connectivity.

**Rejected alternative:** Firestore-driven UI.

**Status:** Current and permanent

### PDR-006 - Membership-Based Circles

**Decision:** Circle access is based on membership records, not a single profile circle ID.

**Rationale:** People belong to several trusted contexts.

**Rejected alternative:** Single active Circle model.

**Status:** Current

### PDR-007 - One Entry Model

**Decision:** Quick Add and rich journal records are states of one history object.

**Rationale:** A fast start must be able to deepen without migration friction.

**Rejected alternative:** Separate quick-add database.

**Status:** Current

### PDR-008 - Explain Recommendations

**Decision:** Every product recommendation needs a human-readable reason and bounded confidence.

**Rationale:** Explainability supports trust and correction.

**Rejected alternative:** Opaque certainty claims.

**Status:** Current

### PDR-009 - Explicit Circle Context

**Decision:** Shared content, plans, comments, and reactions are always attached to a named Circle.

**Rationale:** Context prevents accidental social leakage.

**Rejected alternative:** Global friend feed.

**Status:** Current

### PDR-010 - Calm, Native Interaction

**Decision:** CloseCut uses restrained, native-feeling interaction patterns and avoids engagement mechanics.

**Rationale:** The product is a reflective tool, not an attention market.

**Rejected alternative:** Streaks, viral prompts, aggressive badges.

**Status:** Current and permanent

## Requirements

- The Product Decision Records experience must state its primary user job clearly through hierarchy and behavior rather than explanatory feature lists.
- Current behavior must remain distinguishable from future capability in product copy, release notes, marketing, and internal specifications.
- Private data must not become visible outside its intended context through default state, fallback behavior, logging, analytics, or sync reconciliation.
- All meaningful states must define a recovery path or an honest terminal explanation.
- Accessibility behavior must be specified with the same priority as visual behavior.
- The feature must add durable value to personal memory, decision confidence, trusted coordination, or product trust.

## Review Triggers

- A new platform changes the relevant interaction or privacy model.
- A public claim conflicts with current implementation.
- User research contradicts the intended mental model.
- A security, moderation, or data-retention incident exposes an incomplete rule.
- A feature creates a new data type, audience, or recommendation signal.
