# 8. App Lifecycle

Application startup has five architectural responsibilities: initialize infrastructure, construct persistence, establish identity, prepare session-local data, and resolve the first user-visible route. Failures must be classified by recoverability. Firebase bootstrap failure is fatal for authenticated remote behavior but should not corrupt local data. Session synchronization failure is recoverable and must preserve local access with a visible pending state.

Sign-out and account deletion are different lifecycle transitions. Sign-out terminates credentials and listeners while preserving locally scoped data only when product policy explicitly permits it. Account deletion must complete remote preflight, remote deletion, local purge, notification cleanup, cache cleanup, and credential termination in an idempotent sequence.
