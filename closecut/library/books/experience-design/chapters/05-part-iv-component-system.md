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

