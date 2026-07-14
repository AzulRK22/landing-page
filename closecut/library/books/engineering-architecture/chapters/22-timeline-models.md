# 22. Timeline Models

The timeline is a projection over entries, not a separate source of truth. Grouping, sorting, search, filters, and display sections are derived from locally owned entries. Persisting timeline-specific copies would create divergence and is prohibited.

Ordering uses viewing date as the primary memory chronology and stable tie-breakers for deterministic rendering. Unknown or rough dates must preserve user intent rather than fabricate precision.
