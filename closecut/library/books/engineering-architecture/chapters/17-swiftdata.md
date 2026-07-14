# 17. SwiftData

SwiftData is the current local persistence engine and the primary source for responsive UI. Models are registered centrally by `AppModelContainer`. Local entities include entries, user profile/state, Circles and memberships, watchlist items, Watch Together plans/responses, QuickPick recommendations, battle results, and pending actions.

Every user-owned entity must carry a stable owner identifier. Queries must predicate by active user whenever possible rather than fetching all rows and filtering in memory. Schema changes require explicit migration assessment, backup/rollback reasoning, and compatibility with pending actions created by older app versions.
