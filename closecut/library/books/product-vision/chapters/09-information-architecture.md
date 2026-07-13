# 9. Information Architecture

**Purpose.** Defines the conceptual domains and their boundaries, not only tabs.

## Product Intent

Five mental spaces: Personal Memory, Decide, Discover, Trusted Social, and Account/Trust. Features may appear in more than one navigation surface, but ownership remains explicit.

## Current Product Interpretation

The current app contains corresponding feature areas across Home, Discover, Social, Battle, Watchlist, and Settings.

## Near-Term Direction

Reduce navigation ambiguity and clarify the relationship between Timeline, Library, Discover, QuickPick, Battle, and Plans.

## Long-Term Vision

Allow future platforms to express the same mental model with different native navigation.

## Mental Domains

### Personal Memory
Entries, Timeline, Library, details, insights, wraps, and owner lifecycle.

### Decide
QuickPick, Want to Watch, Battle, and plan creation.

### Discover
Search, trending/popular metadata, title preview, and external enrichment.

### Trusted Social
Circles, selected sharing, shared timelines, reactions, comments, and Watch Together.

### Account and Trust
Authentication, profile, privacy, language, appearance, sync, notifications, support, and deletion.

## Boundary Rules

- Personal entries do not become social content without explicit selected-Circle sharing.
- Discover metadata does not become personal history until a person saves or records it.
- A watchlist candidate is an intention, not a watched memory.
- A Battle outcome is a decision artifact, not automatically a personal taste fact.
- Circle context cannot read private-only personal records.

## Navigation Principle

Navigation may evolve, but every surface must make the current domain, ownership, and next action clear.

## Related Decision Records

- PDR-001 Private by Default
- PDR-002 Memory over Ratings
- PDR-003 Personal First, Social Second
- PDR-004 One Thoughtful Pick
- PDR-005 Local-First Trust
- PDR-006 Membership-Based Circles
