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

