# 38. Current Product Scope

**Purpose.** The verified beta surface from repository evidence, separated from aspiration.

## Verified Current Surface

- **Authentication and Session - Implemented.** Email/password authentication and session gating are present. Password reset and email verification are not surfaced.
- **Onboarding - Implemented.** Start-fresh and Quick Add activation paths are implemented.
- **Quick Add Past Watches - Implemented.** TMDB search, local fallback, manual entry, duplicate prevention, quick sentiment, approximate date, and upgrade path are present.
- **Personal Journal Entries - Implemented.** Rich entry creation/editing, soft delete, metadata, mood, tags, notes, quotes, context, cinema fields, and sharing targets are present.
- **Timeline and Library - Implemented.** Timeline, search, filters, sections, insights, and wrap-style summaries are present.
- **QuickPick - Implemented.** Local rule-based engine, reasons, confidence labels, no-repeat, rewatch logic, local heuristics, and TMDB-backed candidate discovery are present.
- **Discover and Search - Implemented.** Trending, popular, media search, detail previews, genre affinity, and TMDB metadata are present; availability providers are not.
- **Want to Watch - Implemented.** Private saved list, status handling, mark watched, conversion to Quick Add, and push/pull sync are present.
- **Circles - Implemented.** Multiple circles, create/join preview, hub, detail, members, leave/edit/delete, shared timeline, and membership model are present.
- **Private Entry Sharing - Implemented.** Selected Circle sharing is explicit and private by default. Circle-side entry detail is read-only.
- **Reactions and Comments - Implemented.** Circle reactions/comments and comment reporting are present; blocking and broader moderation remain limited.
- **Watch Together Plans - Implemented.** Plans can originate from entries, Discover, saved titles, Battle winners, and Awards & Culture nominees.
- **Battle - Implemented.** Personal/local choice modes exist. Results are not remote multiplayer or posted to Circle spaces.
- **Awards and Culture - Implemented.** Local predictions and comparison with known results are present.
- **Insights and Wrap - Implemented.** Personal summaries and insight surfaces are implemented; they are not positioned as clinical or deterministic taste analysis.
- **Cinema Experience Intelligence - Partial.** Cinema context and experience fields exist. Longitudinal cinema insights and aggregated anonymous intelligence are future.
- **Notifications - Partial.** Local notification surfaces exist. Push notifications and remote social activity delivery are not implemented.
- **Offline and Sync - Partial.** Local-first persistence, queue, conflict policy, push/pull, and manual/session sync exist. No real-time listeners, background sync, or automatic retry scheduler.
- **Profile and Account Controls - Partial.** Profile, privacy links, sync, language, appearance, sign out, and deletion preparation exist. Profile photo upload, complete account deletion, reset, and verification UI remain gaps.

## Interpretation

“Current” means repository evidence exists. It does not override known limitations, missing configuration, incomplete lifecycle, or release-readiness blockers.

## Acceptance Criteria

- The shipped behavior matches the current-product description and evidence paths in Appendix B.
- A new user can understand the purpose of Current Product Scope without external documentation.
- The feature does not require public identity, follower relationships, or engagement mechanics.
- Offline, empty, error, permission, and pending states preserve context and do not imply data loss.
- VoiceOver, Dynamic Type, contrast, touch targets, and non-color status cues are verified for the relevant surfaces.
- Instrumentation, when present, measures the intended outcome rather than raw taps alone.
