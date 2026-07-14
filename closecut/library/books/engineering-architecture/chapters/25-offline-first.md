# 25. Offline-first

Offline-first means more than Firestore caching. Core personal actions must complete against SwiftData, surface pending status, and synchronize later. Features that fundamentally require remote membership or fresh shared state must degrade honestly: they may show cached content and explain that changes will send later, but they must not imply server acceptance.

The application distinguishes offline-capable, offline-readable, and online-required operations. Entry creation/editing and local history are offline-capable. Viewing cached Circle content is offline-readable. Joining a Circle by invite code and destructive account operations are online-required.
