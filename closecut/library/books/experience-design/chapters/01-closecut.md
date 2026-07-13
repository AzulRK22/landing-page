# CloseCut

## Experience Design System

The Canonical Experience Specification

Version 1.0


Edition: Public Reading Edition

Document class: Canonical design authority

Status: Approved baseline for product, design, engineering, accessibility, brand, and marketing decisions


<div style="page-break-after: always"></div>

## Document Status

This book is the second canonical volume in the CloseCut documentation library. It governs how the product should feel, behave, communicate, and evolve. It is subordinate only to verified implemented behavior for statements about the current build and to the Product Vision & Requirements book for product intent.

The specification is normative. “Must” indicates a requirement. “Should” indicates the default rule and requires a documented reason to diverge. “May” indicates an allowed option. Any conflict discovered between this book and the current source code must be recorded as an Experience Decision Record or an implementation discrepancy before release.

## Purpose

CloseCut is a private, memory-centered film and series journal that helps a person preserve what they watched, understand their taste, and decide what to watch next. This book translates that product identity into durable experience rules. It prevents the interface from drifting into a ratings database, public social network, content feed, or visually noisy entertainment catalog.

The system is deliberately broader than a UI kit. It defines principles, hierarchy, interaction contracts, motion behavior, accessibility obligations, component semantics, screen-level requirements, and brand continuity across product and marketing surfaces.

## Audience

This book is for product designers, UX designers, visual designers, motion designers, accessibility specialists, brand and marketing teams, iOS and Android engineers, web engineers, QA, product managers, and future partners building CloseCut experiences.

Readers should use the most specific applicable rule. Screen specifications override generic component guidance only when the exception is explicit. Experience Decision Records explain durable choices and should be reviewed before proposing a conflicting pattern.

## Relationship with Product Vision

The Product Vision & Requirements book defines what CloseCut is, whom it serves, and which product outcomes matter. This Experience Design System defines how those intentions become perceivable and operable. Product intent is not reinterpreted as visual fashion. Design exists to preserve the product’s private, reflective, calm, and useful character.

When implemented behavior differs from intended product direction, this book labels the distinction rather than collapsing it. Current Experience describes the verified repository state. Near-Term Experience describes committed or strongly implied evolution. Long-Term Experience describes durable direction without presenting speculative UI as shipped.

## How to Use This Book

Begin with Parts I and V before designing a new feature. Use Parts II and III when creating visual or branded assets. Use Part IV when reusing or extending interface patterns. Use Part VI for screen acceptance criteria. Use Part VII as a release gate, not as a retrospective audit. Use the appendices for implementation references, traceability, and governance.

New patterns should first be expressed as a composition of existing semantic tokens and components. A new component is justified only when it represents a recurring semantic role, not merely a repeated arrangement. New motion must communicate state, continuity, or causality. Decorative animation alone is insufficient.

## Versioning

Major versions change foundational experience principles, information architecture, or product identity. Minor versions add or materially revise components, screens, or platform guidance without changing the foundation. Patch versions clarify language, correct values, or reconcile implementation details.

Every change must include an owner, rationale, affected screens, accessibility impact, implementation impact, and migration note. Canonical token changes require visual regression review in light and dark mode and at supported Dynamic Type sizes.

## Executive Summary

CloseCut should feel like a private editorial archive, not an entertainment dashboard. The interface gives memories more weight than scores, decisions more clarity than abundance, and trusted sharing more context than reach. The product uses restrained purple accents, adaptive neutral surfaces, native typography, strong spacing, and selective motion to create a premium but human experience.

The current implementation already expresses this direction through a local-first journal, personal timeline, Quick Add, rule-based QuickPick, private watchlist, explicit Circle sharing, adaptive themes, and native SwiftUI navigation. The principal system opportunity is consolidation: reduce feature-local variants, formalize state patterns, establish component ownership, and ensure newer experiences such as Discover, Battle, Circle, Watch Together, Awards Culture, Insights, and Wrap remain subordinate to the personal archive.

The canonical hierarchy is: personal memory first; useful decision support second; trusted social context third; discovery and cultural play fourth. No feature may reverse that hierarchy through default navigation, visual emphasis, notifications, or engagement mechanics.


<div style="page-break-after: always"></div>

