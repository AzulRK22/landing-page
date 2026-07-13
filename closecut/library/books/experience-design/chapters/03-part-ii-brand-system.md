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

