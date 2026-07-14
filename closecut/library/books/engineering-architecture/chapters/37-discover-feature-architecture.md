# 37. Discover Feature Architecture

**Purpose.** External metadata exploration and pathways into watchlist, QuickPick, or entry creation.

**Current implementation.** The repository contains 6 Swift files under `Discover feature module`. This is direct implementation evidence, but runtime completion still depends on build and TestFlight verification.

**Architecture.** Presentation owns screen state and navigation. Persistent reads come from SwiftData projections; mutations flow through repositories or focused services. Remote collaboration, when present, uses DTO/data-source boundaries and synchronization.

**Data flow.** User intent is validated, translated into a domain operation, committed locally when allowed, reflected immediately in UI, and queued or sent remotely according to connectivity and authorization requirements.

**Dependencies.** The feature may depend on domain models, repository/service seams, shared design components, and platform adapters. It must not own Firebase paths or duplicate aggregate persistence.

**Extension points.** Additions should introduce focused state objects or coordinators before expanding already-large views. New remote behavior requires rules, indexes, emulator tests, and migration analysis.

**Future evolution.** Product and experience intent may extend this area, but new behavior must preserve private-by-default semantics, calm interaction, accessibility, and Android parity at the semantic level.
