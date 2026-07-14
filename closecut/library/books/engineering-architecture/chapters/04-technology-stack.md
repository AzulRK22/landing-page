# 4. Technology Stack

**iOS:** Swift, SwiftUI, SwiftData, Combine where observable streams are needed, UIKit bridges for platform services, XCTest/XCUITest.

**Backend:** Firebase Authentication, Cloud Firestore, Cloud Storage, Cloud Functions for Firebase v2, TypeScript, Firebase Admin SDK, callable HTTPS functions.

**External data:** TMDB client, endpoint, configuration, media repository, DTOs, genre mapping, and image URL construction. TMDB supplies metadata; it does not own journal truth.

**Build and configuration:** Xcode project, `.xcconfig`-based configuration, entitlements, plist metadata, Firebase CLI project mapping, emulator suite, TypeScript compilation, ESLint, and npm lockfile.

**Design:** repository-native design foundations and components aligned to the separate Experience Design System.

The current import profile is led by `SwiftUI` (210), `Foundation` (199), `SwiftData` (62), `FirebaseFirestore` (20), `UIKit` (18), `Combine` (14), `XCTest` (9), `UserNotifications` (6).
