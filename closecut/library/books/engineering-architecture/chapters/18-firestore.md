# 18. Firestore

Firestore stores synchronized and shared representations. Collection paths are centralized in `FirestorePaths`; DTOs isolate transport shape from domain and SwiftData models. Rules and indexes are versioned beside the application.

Firestore is not the UI source of truth for personal flows. Remote listeners or pulls update local state through repositories/sync services. Shared social projections may require fresher remote behavior, but they must still map through owned boundaries. Collection-group queries and denormalized member identifiers are accepted where required for authorization and discovery, with explicit consistency maintenance.
