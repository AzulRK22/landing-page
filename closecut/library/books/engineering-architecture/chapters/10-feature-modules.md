# 10. Feature Modules

Current feature folders include Social (47), Entries (38), Home (32), AwardsCulture (24), Settings (23), Battle (19), QuickAdd (15), Wrap (12), Notifications (12), Watchlist (7), Discover (6), Onboarding (6), Insights (5), Search (3), AppShell (2). Each feature may contain views, components, focused ViewModels, pure helpers, and feature adapters. It may not define competing persistence truth.

A feature qualifies for extraction into a package when it has a stable domain boundary, independent test surface, and limited cross-feature imports. Circles and Watch Together are candidates because they have backend contracts and substantial substructure. Smaller features should remain folders until extraction improves rather than obscures ownership.
