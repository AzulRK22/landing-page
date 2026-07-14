# Identity and Account Lifecycle

Authentication establishes a principal for remote operations, but identity alone does not grant access to all data.

The public account model covers sign-in, profile creation, session transitions, recovery, sign-out, and account deletion. Each transition must preserve privacy and avoid leaking state between users on the same device.

## Requirements

- Authentication state changes must be explicit and observable.
- User-owned data remains scoped to the authenticated principal.
- Session loss must not silently discard unsynchronized local work.
- Account deletion requires coordinated local and remote cleanup.
- Recovery and deletion flows must avoid exposing whether another person's account exists.

Exact provider configuration, production credentials, and deletion runbooks are excluded from this edition.
