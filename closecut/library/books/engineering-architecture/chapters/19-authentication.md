# 19. Authentication

Firebase Authentication establishes remote identity. `AuthService`, `SessionViewModel`, and launch gates translate SDK state into CloseCut session state. Authentication does not by itself authorize data; Firestore and Storage rules validate ownership and Circle membership.

Identity changes require cancellation of listeners, reset of session-scoped services, local ownership isolation, and prevention of data bleed between accounts. Anonymous or alternative authentication modes may be added only with a documented merge and deletion policy.
