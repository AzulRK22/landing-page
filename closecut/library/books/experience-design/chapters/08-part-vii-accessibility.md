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

