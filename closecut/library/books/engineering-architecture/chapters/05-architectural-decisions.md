# 5. Architectural Decisions

The binding decisions are captured in ADR-001 through ADR-008 and reproduced in `/adr`. Together they establish local-first authority, repository ownership, pragmatic MVVM, Firebase separation, privacy-first sync, feature modularization, explicit offline behavior, and cross-platform semantic parity. No single ADR permits bypassing another: for example, a feature cannot claim cross-platform parity by copying Firestore DTOs directly into UI state, because repository and privacy decisions still apply.
