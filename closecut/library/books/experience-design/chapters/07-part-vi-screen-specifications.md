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

