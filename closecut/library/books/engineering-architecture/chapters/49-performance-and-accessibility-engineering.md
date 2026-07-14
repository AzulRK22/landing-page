# 49. Performance and Accessibility Engineering

Performance work starts with ownership-correct SwiftData predicates, bounded Firestore queries, image sizing/caching, task cancellation, and avoiding repeated derived computation in view bodies. Broad `@Query` fetches filtered in memory are migration targets. N+1 Circle membership pulls require batching or query redesign before scale.

Accessibility follows the Experience Design System: semantic labels and hints, Dynamic Type without clipping, sufficient contrast, reduce-motion behavior, keyboard/switch navigation where relevant, meaningful focus order, non-color state communication, and localized accessibility copy. Accessibility failures block release for core journeys.
