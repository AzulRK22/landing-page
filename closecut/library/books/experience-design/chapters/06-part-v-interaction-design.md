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

