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

# Part I — Experience Foundation

## 1. Experience Philosophy

CloseCut treats watching as part of a person’s lived history. A title is not merely an object with a rating; it is a memory connected to time, mood, company, place, expectation, and afterthought. The design must therefore protect reflection from catalog noise and protect personal context from performative social pressure.

The experience is editorial rather than analytical in tone. It curates attention, reveals meaning progressively, and gives each major task a clear beginning and end. It avoids the visual density of media databases and the behavioral pressure of public feeds.

Calm does not mean passive. CloseCut can be expressive, cinematic, and playful when the moment benefits from it. The constraint is that expression must support memory, choice, or trusted connection rather than demand attention for its own sake.

## 2. Experience Principles

Editorial simplicity means that each screen has a clear lead idea. Secondary content is ordered, grouped, and disclosed as needed. A screen should not present every available signal merely because the data exists.

Calm technology means the app communicates system state without turning synchronization, recommendations, or notifications into anxiety. Progress is visible, recovery is available, and interruptions are rare.

Memory over ratings means qualitative reflection, emotional residue, context, and recall are treated as first-class data. Numeric ratings may support retrieval and comparison, but they must not dominate the visual hierarchy.

Private by default means new personal content remains private until the person makes an explicit, contextual sharing choice. Privacy cannot depend on a user noticing a hidden default.

Identity over lists means the archive should gradually reveal patterns about the person, not merely grow as a count of titles. History, taste, and changing preferences are more valuable than completion mechanics.

Decision support means recommendations reduce uncertainty. QuickPick should offer one thoughtful choice with an understandable reason rather than a feed of options.

Progressive disclosure means advanced context, metadata, and social controls appear when relevant. The default path remains lightweight.

### Canonical Principle Tests

- Can the user identify the screen’s primary purpose in one glance?
- Does the design preserve the privacy of personal memory by default?
- Does the interface privilege reflection or useful action over catalog metadata?
- Does every recommendation explain why it is being shown?
- Does the screen remain calm when data is missing, offline, pending, or failed?
- Can the experience be completed with Dynamic Type, VoiceOver, Reduce Motion, and sufficient contrast?
- Does any social mechanic create pressure, ranking, virality, or public performance? If yes, redesign it.

## 3. Human Interface Principles

CloseCut follows the platform rather than simulating a custom operating system. Native navigation, controls, text scaling, focus behavior, sheets, alerts, and accessibility semantics are the baseline. Custom presentation is appropriate when it creates a recognizable CloseCut editorial moment without reducing predictability.

Direct manipulation should be reversible. Destructive actions require clear language and proportional confirmation. System status must appear near the action or object it affects. Navigation should preserve context and avoid surprising resets.

Hierarchy is created primarily through typography, spacing, grouping, and content order. Color is supportive, not the sole carrier of meaning. Shadows and gradients are atmospheric tools, not structural necessities.

## 4. Design Values

Clarity: every element earns its place and communicates a specific role. Restraint: visual emphasis is scarce and meaningful. Warmth: language and surfaces feel personal without becoming sentimental. Trust: privacy, synchronization, errors, and data provenance are understandable. Craft: alignment, rhythm, touch behavior, and transitions are resolved at implementation quality. Longevity: rules depend on semantics rather than transient visual trends.

## 5. Emotional Design Goals

The user should feel safe recording an honest reaction, proud of the archive they are building, relieved when choosing what to watch, curious about patterns in their taste, and connected when sharing with trusted people. The product should never make them feel behind, judged, exposed, manipulated, or trapped in an endless feed.

Empty states should feel like invitations, not failures. Returning after a long absence should feel welcoming, not punitive. A dense history should feel coherent rather than crowded. A failed sync should feel recoverable rather than catastrophic.

## 6. Brand Personality

CloseCut is thoughtful, observant, private, contemporary, and quietly cinematic. It is not elitist, ironic, loud, hyperactive, gamified, or encyclopedic. The brand can be playful in culturally specific or group contexts, but the default voice remains composed and precise.

The visual personality combines editorial spacing, dark-room depth, soft neutral materials, and a controlled purple signature. The purple does not mean “premium” by decoration; it marks intentionality, selection, and the small moments where the product responds personally.

## 7. Visual Identity

The visual identity is built from adaptive neutrals, a restrained violet accent, system typography, cinematic imagery, generous spacing, rounded surfaces, and concise iconography. Posters provide natural visual richness; interface chrome must not compete with them.

Light mode should feel like a soft editorial notebook rather than pure white software. Dark mode should feel native to a viewing context while preserving separation between the black canvas and elevated charcoal surfaces. Gradients may introduce warmth in hero or feature moments, but content cards should remain readable and structurally clear.

# Part II — Brand System

## 8. Logo System

The CloseCut mark must remain legible at app-icon, navigation, marketing, and editorial sizes. The primary mark is used for ownership moments: launch, onboarding, About, App Store, and formal documentation. It should not be repeated on every screen.

The logo must have clear space equal to at least one quarter of the mark’s width on all sides. It may appear in the core accent, monochrome light, or monochrome dark treatment. Do not add bevels, outlines, arbitrary gradients, drop shadows, perspective, or animation that changes the mark’s geometry.

At small sizes, use the simplified mark rather than a wordmark. In motion, reveal through opacity, scale, or mask with the standard or slow token; avoid spinning, bouncing, or continuous looping.

## 9. Color Philosophy

Purple is a signature, not a background default. It communicates selected state, primary action, personal insight, and intentional emphasis. Large purple fields are reserved for hero moments, branded share cards, and marketing compositions where text contrast is verified.

Neutral surfaces carry most of the product. Semantic status colors retain their conventional meanings and must not be replaced by purple. Poster artwork should not determine control colors dynamically unless contrast and brand coherence are guaranteed.

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| background.primary | #F6F5F8 | #000000 | Primary canvas |
| background.elevated | #FFFFFF | #111111 | Navigation and elevated surfaces |
| surface.card | #FFFFFF | #1C1C1E | Default content card |
| surface.cardElevated | #FAF9FC | #242426 | Emphasized card |
| surface.input | #EEECEF | #2C2C2E | Default input |
| surface.inputElevated | #E6E3EA | #343437 | Focused or layered input |
| border.separator | #D8D5DC | #3A3A3C | Structural separator |
| border.subtle | #CBC7D1 | #48484A | Card and field edge |
| border.strong | #B8B3BF | #5A5A5F | High-emphasis boundary |
| text.primary | #17141C | #FFFFFF | Primary reading text |
| text.secondary | #5F5968 | #A9A7AE | Supporting text |
| text.tertiary | #87818F | #727078 | Metadata |
| text.muted | #AAA5B0 | #4A484F | Disabled and decorative text |
| brand.accent | #6840C6 | #6B48CC | Core brand accent |
| brand.accentLight | #744CD0 | #9D74FF | Interactive accent and selected tab |
| brand.accentSoft | #E9E0FA | #241A3D | Selected backgrounds |
| brand.accentFaint | #F4EFFD | #15101F | Atmospheric brand tint |
| status.pending | #B86B00 | #F59E0B | Queued or awaiting sync |
| status.success | #16835F | #34D399 | Synced or completed |
| status.failure | #C73B45 | #F87171 | Failure or destructive warning |
| status.warning | #A86100 | #FBBF24 | Attention |

## 10. Typography

CloseCut uses the platform system typeface to preserve legibility, localization, Dynamic Type, and native character. Semibold is used for hierarchy, not as a blanket style. Long-form reflections use body text with comfortable line length. Metadata is visually quieter but remains readable.

Text styles are semantic. Designers and engineers must choose the role first, not a point size. Custom fixed sizes are prohibited in product UI unless a platform limitation is documented. Marketing may use a complementary editorial typeface only when the CloseCut system face remains available for functional information.

| Token | SwiftUI style | Use |
| --- | --- | --- |
| heroTitle | largeTitle/semibold | Top-level editorial hero |
| screenTitle | title2/semibold | Screen identity |
| sheetTitle | title3/semibold | Modal task title |
| sectionTitle | headline/semibold | Section heading |
| sectionEyebrow | caption2/semibold | Small categorical label |
| cardTitle | subheadline/semibold | Compact card heading |
| cardTitleLarge | headline/semibold | Prominent card heading |
| body | body/regular | Primary reading |
| bodyEmphasis | body/semibold | Inline emphasis |
| secondary | subheadline/regular | Supporting copy |
| secondaryEmphasis | subheadline/semibold | Semantic text role |
| caption | caption/regular | Metadata |
| captionEmphasis | caption/semibold | Semantic text role |
| micro | caption2/regular | Tertiary metadata |
| microEmphasis | caption2/semibold | Semantic text role |
| button | subheadline/semibold | Standard action |
| largeButton | headline/semibold | Primary CTA |
| smallButton | caption/semibold | Semantic text role |
| statValue | title3/semibold | Key metric |
| statLabel | caption2/semibold | Metric label |

## 11. Iconography

Use SF Symbols as the default icon language on Apple platforms. Choose symbols by meaning, not visual novelty. Filled variants may indicate selected navigation state; outline variants generally indicate available actions. Avoid mixing unrelated optical weights within one control group.

Every icon-only control requires an accessibility label and a minimum 44 by 44 point activation area. Decorative symbols must be hidden from assistive technology. Brand or content-specific icons may be custom, but they must align optically with system symbols and include scalable vector assets.

## 12. Illustration System

Illustration is used sparingly for onboarding, empty states, education, and marketing. It should express reflection, memory, privacy, and cinematic atmosphere without reproducing recognizable copyrighted characters or film frames.

Product illustrations use simple geometry, restrained depth, neutral fields, and selective purple. They should not become mascots that dominate task screens. Illustrations must remain meaningful when reduced, cropped, or viewed in dark mode.

## 13. Character System

Characters are optional narrative devices, not persistent assistants. They may humanize onboarding, educational moments, seasonal editorial content, and marketing. They must not imply that CloseCut is watching, judging, or emotionally interpreting the user without consent.

Characters never replace clear interface language, system status, or accessible labels. They do not appear in destructive confirmations, privacy explanations, account deletion, sync failures, or legal surfaces. Their emotional expression should be subtle and never shame inactivity or low engagement.

## 14. Editorial Language

Write in plain, specific language. Prefer verbs that describe the user’s action: Add to history, Save for later, Share with Circle, Try another pick. Avoid platform jargon, growth language, and exaggerated claims. Use “you” sparingly and naturally.

Memory language should be evocative only when it remains clear. “Stayed with you” is appropriate because it names an understandable personal signal. Abstract labels that require interpretation should include supporting copy.

## 15. Voice & Tone

The default voice is calm, concise, and observant. Onboarding is welcoming and confidence-building. Journal prompts are reflective without being therapeutic. Errors are direct and constructive. Privacy language is explicit. Social language is contextual and non-performative. Marketing is honest about the product’s stage and value.

Avoid: “You crushed it,” “Keep your streak alive,” “Everyone is watching,” “Your ultimate movie obsession,” and any copy that turns private reflection into performance. Prefer: “Saved to your history,” “This change will sync when you’re online,” and “Shared only with the selected Circle.”

# Part III — Design Tokens

## 16. Color Tokens

Color tokens are semantic contracts. Product code must reference semantic names rather than raw hexadecimal values. Component-specific aliases may map to foundation tokens, but they must not create new colors without review.

Adaptive pairs are verified independently. Dark mode is not an inversion. Contrast must be tested for text, icons, borders, selected states, charts, poster overlays, and disabled controls.

## 17. Typography Tokens

Typography tokens map to platform text styles and inherit Dynamic Type. Components may add weight but should not override scaling. Truncation is a last resort for user-authored content and titles; prefer wrapping, flexible layout, or disclosure.

## 18. Spacing Tokens

The spacing system is based on a compact set of values that supports dense metadata and generous editorial layouts. Use semantic aliases for screen, card, section, control, and inline spacing. Arbitrary values should be eliminated during refactoring unless they solve a documented optical issue.

| Token | Points | Role |
| --- | --- | --- |
| zero | 0 | Canonical spacing value |
| xxs | 4 | Canonical spacing value |
| xs | 6 | Canonical spacing value |
| sm | 8 | Canonical spacing value |
| md | 12 | Canonical spacing value |
| lg | 16 | Canonical spacing value |
| xl | 20 | Canonical spacing value |
| xxl | 24 | Canonical spacing value |
| xxxl | 32 | Canonical spacing value |
| huge | 40 | Canonical spacing value |
| screen.horizontal | 20 | Canonical spacing value |
| screen.top | 16 | Canonical spacing value |
| screen.bottom | 24 | Canonical spacing value |
| card.content | 16 | Canonical spacing value |
| hero.content | 18 | Canonical spacing value |
| compactCard.content | 12 | Canonical spacing value |
| section | 18 | Canonical spacing value |
| form | 24 | Canonical spacing value |
| field | 12 | Canonical spacing value |

## 19. Grid System

Phone screens use 20-point horizontal content margins by default. Full-bleed imagery may extend to the safe-area edge when controls and readable text retain the content margin. Cards align to a shared vertical axis. Tablet and desktop layouts cap readable text at 560 points and card regions at approximately 620 points unless a multi-column composition is intentionally used.

Poster rails follow content margins and preserve a consistent aspect ratio. Mixed card widths within one rail are discouraged. Grid changes across size classes should preserve information order and focus continuity.

## 20. Radius System

Radius communicates containment and scale. Small controls use 8–14 points, standard surfaces 16–22 points, hero and sheet surfaces 24–28 points, and pills use a fully rounded radius. Nested surfaces should not use the same radius when doing so creates visually heavy corners; the inner radius is generally smaller.

| Token | Points | Use |
| --- | --- | --- |
| xs | 8 | Semantic radius |
| sm | 10 | Semantic radius |
| banner | 12 | Semantic radius |
| md | 14 | Semantic radius |
| lg | 16 | Semantic radius |
| xl | 20 | Semantic radius |
| card | 22 | Semantic radius |
| xxl | 24 | Semantic radius |
| hero | 24 | Semantic radius |
| sheet | 28 | Semantic radius |
| pill | 999 | Semantic radius |

## 21. Elevation

Elevation is expressed first through surface contrast and separation, then through shadow. A standard content card sits on the primary background without requiring a strong shadow. Sticky controls, floating actions, and modal layers may use stronger elevation. Multiple competing elevation levels on one screen are prohibited.

## 22. Shadows

Shadows must remain soft and low-contrast. The current implementation defines soft, medium, and strong radii with vertical offsets. Use them sparingly in light mode; in dark mode, prefer surface contrast and borders because black shadows often disappear or create muddy edges.

Accent-colored shadows are restricted to branded hero or primary action moments and must not reduce text contrast.

## 23. Motion Tokens

Motion tokens standardize duration and easing. Quick motion acknowledges direct control changes. Standard motion handles most state transitions. Slow motion is reserved for larger content changes or branded reveals. Spring motion supports direct manipulation, selection, and spatial continuity when overshoot remains restrained.

| Token | Definition | Use |
| --- | --- | --- |
| quick | {"duration": 0.18, "curve": "easeInOut"} | Canonical motion timing |
| standard | {"duration": 0.22, "curve": "easeInOut"} | Canonical motion timing |
| slow | {"duration": 0.32, "curve": "easeInOut"} | Canonical motion timing |
| spring | {"response": 0.32, "dampingFraction": 0.86} | Canonical motion timing |

## 24. Haptic Tokens

Haptics are semantic and optional. Selection feedback may accompany discrete picker or chip changes. Light impact may confirm adding, saving, or revealing a result. Notification success may confirm a completed local action. Warning and error haptics are reserved for consequential failures or invalid completion.

Never use haptics for scrolling, passive loading, every tap, or decorative animation. Haptics must not be the only feedback channel and should respect system settings and platform conventions.

# Part IV — Component System

## 25. Buttons

Buttons express action hierarchy. Use one primary action per task region. Secondary actions remain visually available without competing. Destructive actions use semantic failure treatment and explicit labels. Buttons must meet a 44-point target even when the visual height is compact.

### Canonical Rules

- Primary: filled accent, high-commitment action.
- Secondary: neutral or bordered treatment, alternate action.
- Tertiary: text or icon action for low-emphasis utility.
- Disabled: reduced opacity plus non-interactive semantics; never color alone.
- Loading: preserve width, announce progress, prevent duplicate submission.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 26. Text Fields

Fields use persistent labels or unambiguous prompts, clear focus states, and accessible error association. User-authored reflection should favor multiline editors with comfortable height. Privacy-sensitive fields must explain storage or visibility where relevant.

### Canonical Rules

- Do not rely on placeholder text as the only label.
- Validate at the point where correction is useful, not on every keystroke.
- Preserve entered text after recoverable errors.
- Use content types and keyboard types where appropriate.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 27. Search

Search is a mode for retrieval, not a replacement for information architecture. Search fields should reveal recent or useful context only when it helps the task. Results must distinguish local history, watchlist, and external TMDB data when sources coexist.

### Canonical Rules

- Debounce network search.
- Show source and media type when ambiguity exists.
- Provide a clear empty-result recovery path.
- Never imply external results are already part of the personal archive.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 28. Chips

Chips represent compact choices, filters, or signals. Selected state must combine color with shape, border, icon, or text weight. Horizontal scrolling is acceptable for non-critical filters, but the primary options should remain discoverable.

### Canonical Rules

- Use sentence case.
- Keep labels concise.
- Allow wrapping for accessibility sizes.
- Do not use chips for long explanations or destructive actions.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 29. Tags

Tags are user-authored or system-derived descriptors. User tags are editable and preserve wording. System tags must be explainable and visually distinguishable when confusion is possible. Tags should not become a competitive taxonomy.

### Canonical Rules

- Support removal with an accessible action.
- Avoid color-only categories.
- Truncate only in compact previews; show full text in detail.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 30. Cards

Cards group related content and action. A card requires a semantic reason: containment, comparison, preview, or independent action. Avoid card-on-card nesting and avoid using cards merely to decorate every section.

### Canonical Rules

- One visual lead per card.
- Keep primary action predictable.
- Use borders or surface contrast before strong shadows.
- Card tap and internal controls must not conflict.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 31. Timeline Cards

Timeline cards preserve memory hierarchy: title and poster establish identity; watched date and context establish time; reflection and emotional signals establish meaning. Numeric ratings are supporting metadata.

### Canonical Rules

- Keep chronology perceptible.
- Make edit/share status secondary.
- Support missing artwork gracefully.
- Avoid feed-like engagement counters.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 32. QuickPick Cards

QuickPick cards present one recommendation, one concise reason, and a small number of next actions. They should feel decisive, not like a carousel of content inventory.

### Canonical Rules

- Explain the recommendation.
- Offer Try another without infinite-scroll behavior.
- Separate rewatch suggestions from unseen discovery.
- Communicate insufficient history honestly.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 33. Journal Components

Journal components help the user move from factual capture to reflection. Required fields are minimal; emotional and contextual depth is progressive. The flow should support both quick capture and thoughtful entry without forcing one pace.

### Canonical Rules

- Group by mental model: identity, verdict, feelings, reflection, context, privacy.
- Preserve drafts through interruption where feasible.
- Make optionality explicit without visual clutter.
- Do not use therapy-like prompts or infer mental state.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 34. Bottom Sheets

Bottom sheets are for focused, contextual tasks that do not require full navigation depth. They must have a clear title, dismissal behavior, and completion path. Content should fit the sheet’s role and not become a hidden multi-screen application.

### Canonical Rules

- Use detents intentionally.
- Keep primary action reachable above keyboard where possible.
- Confirm dismissal only when meaningful work would be lost.
- Restore focus to the invoking control.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 35. Modals

Modal presentation interrupts the current hierarchy and is therefore reserved for self-contained tasks, required decisions, and previews. Prefer navigation for content that users may need to explore deeply or revisit.

### Canonical Rules

- Do not stack modals.
- Provide explicit Done, Save, or Cancel when gesture dismissal is ambiguous.
- Preserve state when authentication or permission interrupts the flow.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 36. Alerts

Alerts are for urgent, short decisions. They are not educational surfaces. Titles state the consequence; actions use verbs. Destructive confirmation is proportional to reversibility and data impact.

### Canonical Rules

- Avoid generic “Are you sure?” copy.
- Place destructive action consistently.
- Do not use alerts for routine success.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 37. Navigation

Navigation follows platform conventions and preserves the user’s location. Each tab owns a NavigationStack. Deep links select the correct tab and then resolve the destination. Cross-tab jumps should be rare and motivated by explicit user action.

### Canonical Rules

- Back returns to the prior context.
- Do not overload toolbar actions.
- Use titles that match tab and screen language.
- Persist selected tab only when it does not create stale or unsafe context.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 38. Tab Bar

The current authenticated shell contains five tabs in canonical order: Journal, Discover, Battle, Circles, Settings. The Journal tab is the default and product anchor. Selected state uses the accent; unselected state uses tertiary text color on an elevated adaptive background.

### Canonical Rules

- Do not add tabs without changing information architecture.
- Do not use badges for engagement pressure.
- Keep labels localized and stable.
- Journal remains the first and default destination.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 39. Toolbars

Toolbars contain high-frequency screen actions. Limit visible actions and move secondary utilities into menus. Use standard placements and labels. Avoid decorative custom bars that reduce platform familiarity.

### Canonical Rules

- Leading: navigation or cancellation.
- Trailing: completion or contextual action.
- Bottom toolbar only when actions benefit from thumb reach and remain persistent.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 40. Menus

Menus hold secondary, non-destructive utilities and infrequent choices. Group related actions and separate destructive actions. Menu labels must remain understandable without surrounding context.

### Canonical Rules

- Use icons consistently or omit them consistently within a group.
- Do not hide the primary task in a menu.
- Expose keyboard shortcuts on platforms that support them.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 41. Lists

Lists support scanning, comparison, and navigation. Rows require consistent alignment, touch targets, separators, and disclosure behavior. Use cards instead when each item needs richer independent hierarchy.

### Canonical Rules

- Preserve user-authored title visibility.
- Support empty and loading states in place.
- Avoid mixed row heights without a content reason.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 42. Loading States

Loading communicates that work is active and what remains usable. Prefer local, scoped progress indicators. Preserve existing content during refresh when safe. Use indeterminate progress only when duration cannot be estimated.

### Canonical Rules

- Announce meaningful loading to VoiceOver.
- Avoid blocking the entire screen for one remote section.
- Prevent duplicate actions while preserving cancellation when possible.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 43. Empty States

Empty states explain the value of the space and provide one relevant next action. They must distinguish a true empty archive, an empty filter result, unavailable remote data, and insufficient recommendation history.

### Canonical Rules

- Use concise, non-judgmental language.
- Do not over-illustrate utility screens.
- Make recovery specific.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 44. Error States

Errors state what failed, what remains safe, and what the user can do. Technical detail is logged, not presented as primary copy. Offline and sync errors must distinguish local safety from cloud availability.

### Canonical Rules

- Keep user input.
- Offer Retry when retry can succeed.
- Offer alternative action when retry cannot help.
- Do not expose raw Firebase or network errors.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 45. Success States

Success is usually communicated inline through state change, haptic, or concise banner. Full-screen success is reserved for meaningful completion such as onboarding or account-level changes.

### Canonical Rules

- Do not interrupt flow for routine saves.
- Use confirmation language that names the result.
- Ensure success remains perceivable without color.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

## 46. Skeleton States

Skeletons may preserve layout for content-heavy remote sections, but they must not simulate content indefinitely. Use reduced motion or static placeholders when Reduce Motion is enabled.

### Canonical Rules

- Match final geometry.
- Avoid shimmering large areas.
- Do not use skeletons for local data that should render immediately.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Use the verified SwiftUI patterns and semantic tokens in the repository. Feature-local variants remain current where no shared replacement exists. |
| Near-Term Experience | Consolidate repeated card, state, sheet, field, and action patterns into governed primitives with migration guidance. |
| Long-Term Experience | Maintain semantic parity across Apple, Android, web, wearable, and spatial platforms while using native controls and conventions. |

# Part V — Interaction Design

## 47. Navigation Philosophy

Navigation should answer three questions at every moment: where am I, what can I do here, and how do I return? The five-tab shell defines stable product domains. Deeper flows use push navigation for exploration and sheets for contextual tasks. The personal archive remains the home of owned memories even when those memories are viewed from a Circle.

Deep links must route through a coordinator, select the correct tab, and preserve authentication and permission gates. A social notification may open a contextual read-only view, but ownership actions remain in Personal.

## 48. Gestures

Gestures supplement visible controls; they do not hide essential actions. Swipe actions may support edit, delete, dismiss, or mark watched when a visible equivalent exists. Drag gestures are appropriate for direct reordering or interactive dismissal only when state loss is controlled. Long press may reveal context menus but cannot be the sole path.

Gestures must coexist with VoiceOver, Switch Control, keyboard input, and larger text. Custom gestures should use platform-recognizable thresholds and avoid conflicts with navigation back gestures or scrolling.

## 49. Interaction Rules

Every action has a clear trigger, immediate acknowledgment, stable in-progress state, and final outcome. Optimistic updates are allowed when the local-first model protects data and failure can be reconciled. Remote-only actions should not appear completed until permission and persistence are confirmed.

Controls must not change meaning after selection. Repeated taps must be idempotent or guarded. Content updates should preserve scroll position unless the user explicitly requests a refresh or navigation reset.

## 50. Animations

Animation clarifies continuity between source and destination, shows insertion or removal, communicates selection, and softens changes in hierarchy. Use opacity and small positional changes for editorial transitions. Use matched geometry only when it materially improves object continuity and remains robust under Dynamic Type.

Continuous animation, autoplaying decorative loops, excessive parallax, and large-scale bounces are prohibited in core tasks.

## 51. Motion Principles

Purpose before polish: motion must explain change. Restraint before spectacle: one dominant motion event per transition. Continuity before novelty: preserve the perceived identity of posters, entries, and selected items. Accessibility before choreography: Reduce Motion receives an equivalent, not a degraded experience.

Motion should feel responsive and settled. Springs use high damping. Exit transitions are usually quicker than entrances. User-triggered transitions begin immediately; network completion does not retroactively animate the entire screen.

## 52. Haptics

Use selection haptics for discrete choice changes, light impact for adding or revealing, success for meaningful completion, and warning/error only when the user must react. Do not combine multiple haptics in one short transition. Haptic behavior is tested on device, not inferred from simulator behavior.

## 53. State Transitions

Canonical state order is idle, active, in progress, success or failure, and recovered. Components should expose these states explicitly rather than infer them from unrelated values. A refresh can preserve content while showing progress. A save can disable only the submitting action rather than the entire screen.

When local and remote state diverge, the UI identifies the local object as safe and the remote sync as pending or failed. Pending is not failure.

## 54. Undo Patterns

Use Undo for reversible, frequent actions such as dismissing a watchlist item, removing a tag, or soft-deleting an entry when restoration is technically reliable. Present the undo near the result and keep the window long enough for assistive technology users.

Undo does not replace confirmation for irreversible account deletion, privacy changes with immediate external effects, or destructive actions with complex side effects.

## 55. Confirmation Patterns

Confirmation is required when an action is destructive, externally visible, difficult to reverse, or likely to be triggered accidentally. The confirmation names the object and consequence. Routine saving, adding, and local state changes should not require confirmation.

## 56. Error Recovery

Recovery begins by preserving context. Keep form values, selected media, scroll location, and local records. Then provide the most specific next action: Retry, Edit, Work offline, Open Settings, or Contact Support. Account and permission failures must explain which data remains available.

Repeated failures should not create repeated banners or haptics. Escalate to a stable inline state with diagnostic support information when appropriate.

# Part VI — Screen Specifications

This part documents verified top-level and task-level screens found in the current SwiftUI repository. Component-only views are governed by Part IV and the Component Matrix appendix. Screen names follow implementation names where stable; user-facing labels follow localized product terminology.

## 57. RootView

### Purpose

Support the App experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 58. LaunchGateView

### Purpose

Support the App experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 59. LoadingAuthView

### Purpose

Authenticate with clear trust, privacy, and recovery expectations.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 60. LoadingProfileView

### Purpose

Support the App experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 61. ProfileErrorView

### Purpose

Support the App experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 62. BattleView

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 63. InsightsView

### Purpose

Reveal understandable patterns from the personal archive without scoring the person.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 64. SettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 65. AboutCloseCutView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 66. TMDBAttributionView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 67. DeleteAccountView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 68. LanguageSettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 69. AppearanceSettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 70. PrivacySettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 71. LegalSettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 72. DeveloperSettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 73. HomeView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 74. PersonalLibraryView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 75. DiscoverView

### Purpose

Offer bounded external discovery without displacing the personal archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 76. AwardPredictionQuickFormView

### Purpose

Support optional cultural and awards-related reflection without redefining the core product.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 77. CultureBattleQuickView

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 78. AwardPredictionScorecardView

### Purpose

Support optional cultural and awards-related reflection without redefining the core product.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 79. CultureEventDetailView

### Purpose

Support optional cultural and awards-related reflection without redefining the core product.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 80. AwardsCultureView

### Purpose

Support optional cultural and awards-related reflection without redefining the core product.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 81. MediaSearchView

### Purpose

Find local or external media while clearly identifying source and action.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 82. MainTabView

### Purpose

Support the AppShell experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 83. WrapStoriesView

### Purpose

Create a reflective, shareable summary while preserving privacy and editorial restraint.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 84. QuickAddPastWatchesView

### Purpose

Let a person seed or extend their history quickly without completing the full journal flow.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 85. NotificationSettingsView

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 86. NotificationPermissionPromptView

### Purpose

Support the Notifications experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 87. PendingNotificationsDebugView

### Purpose

Support the Notifications experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 88. AuthView

### Purpose

Introduce the private, memory-centered product model and help a new user choose an appropriate starting path.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 89. OnboardingView

### Purpose

Introduce the private, memory-centered product model and help a new user choose an appropriate starting path.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 90. WatchlistEmptyStateView

### Purpose

Manage private intent to watch and convert intent into history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 91. WatchlistItemDetailSheet

### Purpose

Manage private intent to watch and convert intent into history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 92. WatchlistRailView

### Purpose

Manage private intent to watch and convert intent into history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 93. WatchlistRailItemView

### Purpose

Manage private intent to watch and convert intent into history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 94. WatchlistView

### Purpose

Manage private intent to watch and convert intent into history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 95. SocialActionSheet

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 96. CircleView

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 97. CircleQuickPickView

### Purpose

Reduce decision friction by presenting one explainable recommendation.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 98. CircleEditSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 99. CircleActionSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 100. CreateCircleSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 101. CircleInviteShareSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 102. JoinCircleSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 103. CircleEntryReadOnlyDetailView

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 104. CircleDetailView

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 105. CircleEmptyStateView

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 106. CircleHubHeroView

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 107. WatchPlanEmptyStateView

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 108. EditWatchPlanSheet

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 109. WatchPlanDetailLoaderView

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 110. WatchPlanDetailView

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 111. WatchPlanSuggestTimeSheet

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 112. CreateWatchPlanSheet

### Purpose

Support the Social experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 113. EntryCompactSignalsView

### Purpose

Support the Entries experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 114. CinemaRatingsView

### Purpose

Support the Entries experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 115. EntryDetailView

### Purpose

Read a preserved memory with hierarchy across identity, reflection, context, metadata, and sharing.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 116. ReadOnlyTagsView

### Purpose

Support the Entries experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 117. EntryDetailHeroView

### Purpose

Read a preserved memory with hierarchy across identity, reflection, context, metadata, and sharing.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 118. EntryEditorView

### Purpose

Create or revise a durable personal memory with progressive depth and explicit privacy.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 119. TagsInputView

### Purpose

Support the Entries experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 120. DiscoverMediaDetailSheet

### Purpose

Offer bounded external discovery without displacing the personal archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 121. QuickPickView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 122. LibraryFilterChipsView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 123. LibrarySearchView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 124. TimelineView

### Purpose

Anchor the personal experience: recent memories, archive progress, and a restrained path to QuickPick and history.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 125. EditProfileSheet

### Purpose

Manage identity, appearance, language, privacy, sync, notifications, legal information, and account controls.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 126. BattleFriendSheet

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 127. BattlePickTonightSheet

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 128. BattleWinnerResultView

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 129. BattleCircleSheet

### Purpose

Support trusted, contextual sharing and group activity without public-feed mechanics.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 130. BattleHeadToHeadSheet

### Purpose

Provide a playful decision mechanic that remains subordinate to the journal and archive.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

## 131. EmptyStateView

### Purpose

Support the Core experience through a focused, platform-native task.

### Hierarchy

The screen must present one primary task or reading anchor, followed by supporting context, secondary actions, and system state. Poster artwork may lead when media identity is central; user reflection leads when memory is central. Utility and sync information remain subordinate unless they block completion.

### Layout

Use the canonical 20-point horizontal screen margin, semantic section spacing, readable-width constraints, safe-area awareness, and adaptive behavior for Dynamic Type. Preserve a stable leading alignment. Full-bleed imagery must transition into readable content with verified contrast.

### Components

Compose from the canonical button, card, section header, list, field, chip, state, sheet, toolbar, and poster patterns. Reuse the implementation-local component only until a governed equivalent exists; do not create another visual variant for the same semantic role.

### Current Implementation

Verified in current implementation evidence. This SwiftUI screen is part of the current repository. Its presence does not by itself guarantee production enablement, remote completeness, or App Store scope; those distinctions follow the Product Book and repository release audits.

### Future Evolution

Near-term changes should consolidate shared primitives, strengthen empty/loading/error behavior, and close accessibility gaps without changing the screen’s core mental model. Long-term evolution may adapt layout or platform convention while preserving purpose, hierarchy, privacy, and state semantics.

### Accessibility

- Expose a concise screen title and logical heading order.
- Use semantic labels for icon-only controls and posters.
- Support Dynamic Type without clipped primary content.
- Maintain 44-point targets and predictable focus order.
- Provide equivalent behavior with Reduce Motion and without color perception.

### Interaction

Primary actions acknowledge immediately, preserve local work, and prevent duplicate submission. Navigation follows the owning tab and returns to the invoking context. Destructive or externally visible actions use proportional confirmation.

### Motion

Use quick or standard transitions for control and state changes; use slow or spring only for meaningful spatial continuity or branded reveal. Replace movement with opacity or immediate state change under Reduce Motion.

### Edge Cases

- No network or degraded remote service.
- Missing poster or metadata.
- Empty, partial, pending-sync, failed-sync, and soft-deleted data.
- Long localized strings and large accessibility sizes.
- Interrupted authentication, permission, or sheet flow.

### Acceptance Criteria

- The primary purpose is perceptible without scrolling.
- Privacy and sharing state are explicit where relevant.
- All states are reachable and recoverable.
- No raw technical error is exposed.
- Light mode, dark mode, VoiceOver, Dynamic Type, and Reduce Motion are verified on device.

# Part VII — Accessibility

## VoiceOver

Every screen must expose a meaningful title, logical traversal order, grouped card semantics, and concise actions. Posters include the title and media type when they function as content; decorative artwork is hidden. Rating controls, mood selectors, intensity controls, chips, and custom gestures must expose selected state and adjustable or button semantics as appropriate.

Announcements are reserved for meaningful asynchronous outcomes. Repeated sync progress should not flood the accessibility channel. Focus moves intentionally after modal presentation, error recovery, deletion, and navigation.

## Dynamic Type

All product text uses scalable semantic styles. Layouts must be verified through the largest accessibility sizes. Horizontal chip rows may wrap or become vertically scrollable. Multi-column metadata may collapse to one column. Fixed-height text containers are prohibited unless text is guaranteed decorative and hidden from accessibility.

At large sizes, preserve the title, primary action, and user-authored reflection before secondary metadata or imagery.

## Reduce Motion

When Reduce Motion is enabled, replace spatial travel, parallax, scale emphasis, and skeleton shimmer with opacity changes or immediate updates. Preserve causality through state, focus, and content order. Do not remove feedback entirely.

## Contrast

Text and meaningful icons must meet WCAG AA contrast against their rendered background. Large text exceptions should be used sparingly. Borders that define controls or selected state require sufficient contrast. Poster overlays must be tested against varied imagery and should use a stable scrim rather than assume the image is dark enough.

## Touch Targets

Interactive targets are at least 44 by 44 points on Apple platforms. Visual controls may be smaller only when the activation area is expanded and does not overlap adjacent actions. Rows that navigate should make the whole expected row tappable. Destructive actions require adequate separation from routine actions.

## Inclusive Design

CloseCut does not assume a particular viewing frequency, access to cinemas, streaming subscriptions, social group, memory ability, emotional vocabulary, or cultural canon. Date precision is optional where history is approximate. Manual titles remain possible when metadata services fail or do not represent the content.

Language avoids moralizing taste and avoids interpreting mood or personality as fact. Sharing remains optional. Public identity, follower counts, popularity pressure, and competitive archive metrics are outside the core experience.

### Accessibility Release Checklist

- VoiceOver traversal and actions verified on every changed screen.
- Dynamic Type verified at default, XXXL, and largest accessibility size.
- Light and dark contrast checked for text, icons, controls, borders, and overlays.
- Reduce Motion path verified.
- Touch targets measured.
- Keyboard and focus behavior checked on supported devices.
- Errors identified by text and semantics, not color alone.
- Localization does not clip or reorder meaning.
- Screenshots and marketing assets include meaningful alt text where supported.

# Part VIII — Marketing Experience

## Landing Page

The landing page explains CloseCut through the same hierarchy as the product: preserve what you watched, understand what stayed with you, decide what to watch next, and share selectively with trusted people. It should not lead with feature count or imitate a streaming service catalog.

Product imagery must reflect current or clearly labeled upcoming experience. Screens must not invent features, social scale, AI behavior, or availability. Purple is used as a signature; neutral space and cinematic imagery carry the composition.

## Instagram

Instagram content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## X

X content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## Threads

Threads content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## LinkedIn

LinkedIn content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## App Store

App Store content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## TestFlight

TestFlight content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## Screenshots

Screenshots content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## Posters

Posters content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## Stories

Stories content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## ASO

ASO content must preserve the private, reflective, calm, and honest character of CloseCut. Use real product language and current product status. Avoid overclaiming, public-performance framing, engagement bait, or visual treatments that make CloseCut resemble a generic streaming or social app.

When showing user content, use fictional or consented data. Do not expose private notes, Circle membership, email addresses, sync diagnostics, or identifiable viewing history. Platform-specific formats may change composition but not identity.

## Brand Consistency

Product and marketing share logo geometry, core accent, neutral palette, typography hierarchy, icon sensibility, image treatment, and editorial language. Marketing may be more expressive in scale and motion, but it must remain recognizable as the same system.

Any marketing depiction of future capability must be labeled conceptually and reviewed against the Product Book. App Store screenshots are product evidence, not speculative mood boards.

### Marketing Design Rules

- Lead with a human outcome, not a feature list.
- Use one message per composition.
- Show real or explicitly conceptual UI.
- Keep poster rights and TMDB attribution compliant.
- Do not imply public social reach.
- Do not present rule-based recommendations as autonomous AI.
- Maintain accessible contrast and alt text.
- Localize meaning, not only words.

# Part IX — Future Experience

## Widgets

Widgets may surface a private recent memory, a deliberate QuickPick, or a gentle archive prompt. They must not expose sensitive journal text on a locked screen by default. Configuration should let the user choose what can appear.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Apple Watch

The watch experience should support lightweight capture, a saved pick, and private reminders. It should not reproduce the full archive or require dense text entry.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Vision Pro

Spatial CloseCut may create an immersive memory gallery or shared trusted viewing context, but it must avoid spectacle that overwhelms personal content. Privacy in shared physical space requires explicit presentation controls.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Android

Android must preserve semantic tokens, hierarchy, privacy, and product mental models while using Material and Android-native navigation, typography, accessibility, and system behaviors. Pixel replication of iOS is prohibited.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Future Motion

Future motion may become more cinematic in onboarding, Wrap, or spatial experiences, but core journal and decision tasks remain restrained. Motion systems require Reduce Motion equivalence from inception.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Future Navigation

Future information architecture may reorganize secondary experiences, but Personal remains the product anchor. New tabs require evidence that the destination is persistent, primary, and broadly used.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Taste DNA

Taste DNA should reveal understandable patterns with provenance and uncertainty. It must not reduce identity to a score, stereotype the user, or create opaque personality claims.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## Cinema Intelligence

Cinema Intelligence connects viewing memories to places, formats, comfort, audio, screen, and personal preference. It should begin as private context and personal insight. Aggregated insights require explicit privacy design and minimum-cohort protections.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

## AI Experiences

AI may assist recall, summarize personal patterns, improve search, or explain recommendations. It must disclose uncertainty, cite the user data it relied on at a useful level, preserve user control, avoid sensitive inference, and never silently publish or rewrite personal memory.

### Experience Horizon

| Horizon | Definition |
| --- | --- |
| Current Experience | Not part of the core current experience unless explicitly present in the repository. |
| Near-Term Experience | Explore through prototypes and decision records with privacy and accessibility review. |
| Long-Term Experience | Adopt only when the capability strengthens memory, decision support, or trusted connection without changing product identity. |

# Experience Decision Records

## EDR-001 — Editorial Simplicity

Decision: Each surface has one lead idea; hierarchy and progressive disclosure replace density.

Rationale: Prevents catalog and dashboard drift.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-002 — Calm Technology

Decision: System state is visible and recoverable without engagement pressure or unnecessary interruption.

Rationale: Protects trust in a local-first product.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-003 — Memory over Ratings

Decision: Reflection, context, and emotional residue outrank numeric scoring.

Rationale: Preserves the unique product value.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-004 — Purple Accent Philosophy

Decision: Purple marks intention, selection, and personal relevance; neutrals carry the interface.

Rationale: Maintains brand recognition without visual fatigue.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-005 — Local-first Experience

Decision: Local actions feel complete and safe; remote synchronization is transparent and secondary.

Rationale: Supports offline trust and resilient capture.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-006 — Character Usage Rules

Decision: Characters are optional editorial devices and never replace clarity, privacy, or system communication.

Rationale: Prevents mascot-driven noise and emotional manipulation.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-007 — Motion Principles

Decision: Motion communicates causality, continuity, and state with restrained timing and accessible alternatives.

Rationale: Creates polish without distraction.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

## EDR-008 — Accessibility First

Decision: Accessibility is part of component and screen definition, not a release-stage patch.

Rationale: Ensures the system scales across users, languages, and platforms.

Status: Accepted. Scope: all product and marketing surfaces. Reconsideration requires evidence, accessibility review, and a documented migration plan.

# Appendices

## Appendix A — Component Matrix

| ID | Component | Source |
| --- | --- | --- |
| CMP-001 | CloseCutSharePreviewCard | current implementation evidence |
| CMP-002 | CloseCutShareCardSnapshotView | current implementation evidence |
| CMP-003 | CloseCutShareActionCard | current implementation evidence |
| CMP-004 | CloseCutShareCardView | current implementation evidence |
| CMP-005 | TasteInsightPreviewCard | current implementation evidence |
| CMP-006 | PersonalHistoryNudgeCard | current implementation evidence |
| CMP-007 | PersonalExploreHistorySection | current implementation evidence |
| CMP-008 | DiscoverSignalPill | current implementation evidence |
| CMP-009 | AwardNomineeRowView | current implementation evidence |
| CMP-010 | CultureInsightSummaryCard | current implementation evidence |
| CMP-011 | CultureYearInsightCard | current implementation evidence |
| CMP-012 | CultureEventCardView | current implementation evidence |
| CMP-013 | MediaSearchResultRow | current implementation evidence |
| CMP-014 | MediaPosterView | current implementation evidence |
| CMP-015 | WrapPreviewCard | current implementation evidence |
| CMP-016 | WrapShareCardView | current implementation evidence |
| CMP-017 | OnboardingFeaturePill | current implementation evidence |
| CMP-018 | OnboardingHeroCard | current implementation evidence |
| CMP-019 | FlexiblePillLayout | current implementation evidence |
| CMP-020 | OnboardingChoiceCard | current implementation evidence |
| CMP-021 | WatchlistPosterView | current implementation evidence |
| CMP-022 | WatchlistItemCardView | current implementation evidence |
| CMP-023 | WatchlistEmptyStateView | current implementation evidence |
| CMP-024 | WatchlistCompactCardView | current implementation evidence |
| CMP-025 | QuickAddSearchBar | current implementation evidence |
| CMP-026 | QuickAddPreviewAddBar | current implementation evidence |
| CMP-027 | RoughDateSelector | current implementation evidence |
| CMP-028 | QuickAddTMDBResultRow | current implementation evidence |
| CMP-029 | QuickAddResultRow | current implementation evidence |
| CMP-030 | QuickAddEmptyStarterCard | current implementation evidence |
| CMP-031 | QuickAddSessionAddedCard | current implementation evidence |
| CMP-032 | CircleQuickPickCard | current implementation evidence |
| CMP-033 | CircleQuickPickPosterView | current implementation evidence |
| CMP-034 | CircleCommentsSectionView | current implementation evidence |
| CMP-035 | CircleReactionBarView | current implementation evidence |
| CMP-036 | CircleActivityRowView | current implementation evidence |
| CMP-037 | CircleMemberRowView | current implementation evidence |
| CMP-038 | CircleTimelineEntryRow | current implementation evidence |
| CMP-039 | CircleTimelineEntryCard | current implementation evidence |
| CMP-040 | CircleSharedPosterView | current implementation evidence |
| CMP-041 | CircleInviteCard | current implementation evidence |
| CMP-042 | CirclePreviewCard | current implementation evidence |
| CMP-043 | CircleSocialPulseCard | current implementation evidence |
| CMP-044 | CircleEmptyStateView | current implementation evidence |
| CMP-045 | CircleHubSummaryCard | current implementation evidence |
| CMP-046 | CircleCardView | current implementation evidence |
| CMP-047 | CirclePrivacyCard | current implementation evidence |
| CMP-048 | CircleQuickActionCard | current implementation evidence |
| CMP-049 | WatchPlanEmptyStateView | current implementation evidence |
| CMP-050 | WatchPlanResponseSummaryPill | current implementation evidence |
| CMP-051 | WatchPlanPosterView | current implementation evidence |
| CMP-052 | WatchTogetherSectionHeader | current implementation evidence |
| CMP-053 | WatchPlanCardView | current implementation evidence |
| CMP-054 | WatchPlanStatusPill | current implementation evidence |
| CMP-055 | WatchPlanInfoRow | current implementation evidence |
| CMP-056 | WatchPlanResponseRow | current implementation evidence |
| CMP-057 | WatchTogetherCirclePicker | current implementation evidence |
| CMP-058 | WatchTogetherPlanListSection | current implementation evidence |
| CMP-059 | WatchTogetherHubSection | current implementation evidence |
| CMP-060 | WatchTogetherHeroCard | current implementation evidence |
| CMP-061 | EntryMemoryCard | current implementation evidence |
| CMP-062 | EntryMoreContextCard | current implementation evidence |
| CMP-063 | EntryTitleAutocompleteCard | current implementation evidence |
| CMP-064 | EntryEditorSaveBar | current implementation evidence |
| CMP-065 | CircleSharePickerView | current implementation evidence |
| CMP-066 | EntryEditorPrivacyCard | current implementation evidence |
| CMP-067 | EntryDetailMetadataCard | current implementation evidence |
| CMP-068 | EntryDetailIntelligenceCard | current implementation evidence |
| CMP-069 | EntryDetailCinemaExperienceCard | current implementation evidence |
| CMP-070 | EntryDetailSharingCard | current implementation evidence |
| CMP-071 | EntryDetailMemoryCard | current implementation evidence |
| CMP-072 | EntryDetailSignalsCard | current implementation evidence |
| CMP-073 | EntryVerdictAndFeelingsCard | current implementation evidence |
| CMP-074 | CinemaExperienceFields | current implementation evidence |
| CMP-075 | OptionalIntensitySelector | current implementation evidence |
| CMP-076 | ContextSelector | current implementation evidence |
| CMP-077 | IntensitySelector | current implementation evidence |
| CMP-078 | SeriesCompletionCard | current implementation evidence |
| CMP-079 | EntryReflectionCard | current implementation evidence |
| CMP-080 | EntryContextDetailsCard | current implementation evidence |
| CMP-081 | EntryIntentCard | current implementation evidence |
| CMP-082 | MoodPickerView | current implementation evidence |
| CMP-083 | EntryTraitsCard | current implementation evidence |
| CMP-084 | TypeSelector | current implementation evidence |
| CMP-085 | EntryCinemaExperienceCard | current implementation evidence |
| CMP-086 | DiscoverMediaPosterCard | current implementation evidence |
| CMP-087 | QuickPickCard | current implementation evidence |
| CMP-088 | QuickPickPosterView | current implementation evidence |
| CMP-089 | LibrarySortMenuButton | current implementation evidence |
| CMP-090 | CompactEntryRowView | current implementation evidence |
| CMP-091 | LibrarySectionPreviewView | current implementation evidence |
| CMP-092 | HomeHeroQuickPickCard | current implementation evidence |
| CMP-093 | PosterRailItemView | current implementation evidence |
| CMP-094 | TimelineSectionHeader | current implementation evidence |
| CMP-095 | PersonalTimelineSummaryCard | current implementation evidence |
| CMP-096 | PosterRailView | current implementation evidence |
| CMP-097 | EntryCardView | current implementation evidence |
| CMP-098 | CloseCutSystemStatusCard | current implementation evidence |
| CMP-099 | ArchiveHealthCard | current implementation evidence |
| CMP-100 | SettingsHeroCard | current implementation evidence |
| CMP-101 | ProfileHeaderCard | current implementation evidence |
| CMP-102 | SyncStatusSummaryCard | current implementation evidence |
| CMP-103 | SettingsRow | current implementation evidence |
| CMP-104 | SettingsProfileHeader | current implementation evidence |
| CMP-105 | BattleCandidatePickerSheet | current implementation evidence |
| CMP-106 | BattleCandidatePosterView | current implementation evidence |
| CMP-107 | BattleModeCard | current implementation evidence |
| CMP-108 | BattlePickResultCard | current implementation evidence |
| CMP-109 | BattleArenaCard | current implementation evidence |
| CMP-110 | BattleGameStatusPill | current implementation evidence |
| CMP-111 | BattleWinnerActionCard | current implementation evidence |
| CMP-112 | BattleCandidateRow | current implementation evidence |
| CMP-113 | MoodPill | current implementation evidence |
| CMP-114 | CloseCutHeroHeader | current implementation evidence |
| CMP-115 | DetailInfoRow | current implementation evidence |
| CMP-116 | EmptyStateView | current implementation evidence |
| CMP-117 | PendingSyncBadge | current implementation evidence |
| CMP-118 | EntryPosterThumbnailView | current implementation evidence |
| CMP-119 | CloseCutSecondaryButton | current implementation evidence |
| CMP-120 | CloseCutPrimaryButton | current implementation evidence |
| CMP-121 | CloseCutSectionHeader | current implementation evidence |

## Appendix B — Design Tokens

The machine-readable token package is included in `/tokens/design-tokens.json`. Values in code remain the authority for the Current Experience until a governed migration is approved.

## Appendix C — Accessibility Matrix

| Area | Required behavior | Verification |
| --- | --- | --- |
| Text | Semantic styles and scaling | Largest accessibility size |
| Controls | Labels, values, traits, 44-point targets | VoiceOver and measurement |
| Motion | Equivalent reduced-motion state | Reduce Motion enabled |
| Color | AA contrast and non-color meaning | Light/dark contrast audit |
| Focus | Logical order and restoration | VoiceOver/keyboard |
| Errors | Associated, readable, recoverable | Failure-path QA |

## Appendix D — Motion Matrix

| Event | Default | Reduce Motion |
| --- | --- | --- |
| Selection | quick or spring | Immediate state + optional opacity |
| Navigation | platform transition | Platform reduced behavior |
| Insert/remove | standard opacity/position | Opacity or immediate |
| Hero reveal | slow | Opacity only |
| Loading skeleton | subtle shimmer if used | Static placeholder |

## Appendix E — Icon Catalog

The current app shell uses SF Symbols including film.stack, sparkles, bolt.fill, person.2.fill, and gearshape.fill. The complete implementation catalog is generated from source in the machine-readable JSON and should be reviewed for semantic duplication before each major release.

## Appendix F — Illustration Catalog

No broad canonical illustration library is established in the current source. Existing app icon and branded marks are assets; future illustrations require named purpose, ownership, dark-mode behavior, alt text, and licensing metadata.

## Appendix G — Screen Inventory

| ID | Screen | Feature | Source |
| --- | --- | --- | --- |
| SCR-001 | RootView | App | current implementation evidence |
| SCR-002 | LaunchGateView | App | current implementation evidence |
| SCR-003 | LoadingAuthView | App | current implementation evidence |
| SCR-004 | LoadingProfileView | App | current implementation evidence |
| SCR-005 | ProfileErrorView | App | current implementation evidence |
| SCR-006 | BattleView | Battle | current implementation evidence |
| SCR-007 | InsightsView | Insights | current implementation evidence |
| SCR-008 | SettingsView | Settings | current implementation evidence |
| SCR-009 | AboutCloseCutView | Settings | current implementation evidence |
| SCR-010 | TMDBAttributionView | Settings | current implementation evidence |
| SCR-011 | DeleteAccountView | Settings | current implementation evidence |
| SCR-012 | LanguageSettingsView | Settings | current implementation evidence |
| SCR-013 | AppearanceSettingsView | Settings | current implementation evidence |
| SCR-014 | PrivacySettingsView | Settings | current implementation evidence |
| SCR-015 | LegalSettingsView | Settings | current implementation evidence |
| SCR-016 | DeveloperSettingsView | Settings | current implementation evidence |
| SCR-017 | HomeView | Home | current implementation evidence |
| SCR-018 | PersonalLibraryView | Home | current implementation evidence |
| SCR-019 | DiscoverView | Discover | current implementation evidence |
| SCR-020 | AwardPredictionQuickFormView | AwardsCulture | current implementation evidence |
| SCR-021 | CultureBattleQuickView | AwardsCulture | current implementation evidence |
| SCR-022 | AwardPredictionScorecardView | AwardsCulture | current implementation evidence |
| SCR-023 | CultureEventDetailView | AwardsCulture | current implementation evidence |
| SCR-024 | AwardsCultureView | AwardsCulture | current implementation evidence |
| SCR-025 | MediaSearchView | Search | current implementation evidence |
| SCR-026 | MainTabView | AppShell | current implementation evidence |
| SCR-027 | WrapStoriesView | Wrap | current implementation evidence |
| SCR-028 | QuickAddPastWatchesView | QuickAdd | current implementation evidence |
| SCR-029 | NotificationSettingsView | Notifications | current implementation evidence |
| SCR-030 | NotificationPermissionPromptView | Notifications | current implementation evidence |
| SCR-031 | PendingNotificationsDebugView | Notifications | current implementation evidence |
| SCR-032 | AuthView | Onboarding | current implementation evidence |
| SCR-033 | OnboardingView | Onboarding | current implementation evidence |
| SCR-034 | WatchlistEmptyStateView | Watchlist | current implementation evidence |
| SCR-035 | WatchlistItemDetailSheet | Watchlist | current implementation evidence |
| SCR-036 | WatchlistRailView | Watchlist | current implementation evidence |
| SCR-037 | WatchlistRailItemView | Watchlist | current implementation evidence |
| SCR-038 | WatchlistView | Watchlist | current implementation evidence |
| SCR-039 | SocialActionSheet | Social | current implementation evidence |
| SCR-040 | CircleView | Social | current implementation evidence |
| SCR-041 | CircleQuickPickView | Social | current implementation evidence |
| SCR-042 | CircleEditSheet | Social | current implementation evidence |
| SCR-043 | CircleActionSheet | Social | current implementation evidence |
| SCR-044 | CreateCircleSheet | Social | current implementation evidence |
| SCR-045 | CircleInviteShareSheet | Social | current implementation evidence |
| SCR-046 | JoinCircleSheet | Social | current implementation evidence |
| SCR-047 | CircleEntryReadOnlyDetailView | Social | current implementation evidence |
| SCR-048 | CircleDetailView | Social | current implementation evidence |
| SCR-049 | CircleEmptyStateView | Social | current implementation evidence |
| SCR-050 | CircleHubHeroView | Social | current implementation evidence |
| SCR-051 | WatchPlanEmptyStateView | Social | current implementation evidence |
| SCR-052 | EditWatchPlanSheet | Social | current implementation evidence |
| SCR-053 | WatchPlanDetailLoaderView | Social | current implementation evidence |
| SCR-054 | WatchPlanDetailView | Social | current implementation evidence |
| SCR-055 | WatchPlanSuggestTimeSheet | Social | current implementation evidence |
| SCR-056 | CreateWatchPlanSheet | Social | current implementation evidence |
| SCR-057 | EntryCompactSignalsView | Entries | current implementation evidence |
| SCR-058 | CinemaRatingsView | Entries | current implementation evidence |
| SCR-059 | EntryDetailView | Entries | current implementation evidence |
| SCR-060 | ReadOnlyTagsView | Entries | current implementation evidence |
| SCR-061 | EntryDetailHeroView | Entries | current implementation evidence |
| SCR-062 | EntryEditorView | Entries | current implementation evidence |
| SCR-063 | TagsInputView | Entries | current implementation evidence |
| SCR-064 | DiscoverMediaDetailSheet | Discover | current implementation evidence |
| SCR-065 | QuickPickView | Home | current implementation evidence |
| SCR-066 | LibraryFilterChipsView | Home | current implementation evidence |
| SCR-067 | LibrarySearchView | Home | current implementation evidence |
| SCR-068 | TimelineView | Home | current implementation evidence |
| SCR-069 | EditProfileSheet | Settings | current implementation evidence |
| SCR-070 | BattleFriendSheet | Battle | current implementation evidence |
| SCR-071 | BattlePickTonightSheet | Battle | current implementation evidence |
| SCR-072 | BattleWinnerResultView | Battle | current implementation evidence |
| SCR-073 | BattleCircleSheet | Battle | current implementation evidence |
| SCR-074 | BattleHeadToHeadSheet | Battle | current implementation evidence |
| SCR-075 | EmptyStateView | Core | current implementation evidence |

## Appendix H — Interaction Matrix

| Interaction | Trigger | Feedback | Failure | Accessibility |
| --- | --- | --- | --- | --- |
| Save entry | Primary button | Inline progress + state change | Preserve draft + retry | Announce result |
| Quick Add | Add control | Row/card confirmation | Keep selection + retry | Label added state |
| Share to Circle | Explicit picker | Visibility summary | No silent partial share | Announce selected Circles |
| Sync | Manual/session trigger | Scoped progress/status | Pending/failed with retry | No repeated announcements |
| QuickPick | Request/refresh | One result + reason | Insufficient-history guidance | Readable reason and actions |
| Delete | Menu/swipe/detail action | Confirmation or undo | Restore when possible | Explicit consequence |

## Appendix I — Experience Decision Records

EDR-001 through EDR-008 are included as standalone Markdown files in `/decision-records` and indexed in the JSON package.

## Appendix J — Glossary

| Term | Definition |
| --- | --- |
| Archive | The user’s durable personal viewing history. |
| Battle | A playful comparison or decision mode; not the product’s primary hierarchy. |
| Calm technology | Technology that communicates state and value without demanding attention. |
| Circle | A private, membership-based context for trusted sharing. |
| Current Experience | Behavior verified in the current repository or implementation evidence. |
| Entry | A personal record of a watched film or series, ranging from Quick Add to full journal depth. |
| Journal | The personal product domain containing history, reflection, and owned memories. |
| Local-first | The experience model in which local capture and access remain primary and remote sync is transparent. |
| Long-Term Experience | Durable future direction not represented as shipped. |
| Near-Term Experience | Committed or strongly implied evolution beyond the current build. |
| Quick Add | A lightweight path for adding past watches. |
| QuickPick | One explainable recommendation intended to reduce decision friction. |
| Taste DNA | A future explainable model of personal patterns, not a personality score. |
| Watchlist | Private intent to watch, distinct from completed history. |

## Appendix K — Changelog

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-07-13 | Initial canonical Experience Design System derived from current source, Product Vision & Requirements, and historical context. |

## Appendix L — Governance

Design changes begin with evidence and a clearly named problem. Reuse is evaluated before invention. Accessibility, localization, privacy, and implementation impact are reviewed before approval. Accepted changes update tokens, components, screen specifications, decision records, tests, and release notes together. A design file alone is not the system of record.
