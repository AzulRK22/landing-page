# 16. Error Handling

Errors are converted at boundaries. Firebase and URL-session errors must not reach views verbatim. Repositories map infrastructure failures into domain-relevant categories; presentation maps those categories into calm, actionable language.

Logging must retain technical context without recording private journal text, authentication tokens, invite codes, email addresses, or unrestricted identifiers. Retry is appropriate only for transient failures and must use bounded backoff. Validation failures are never retried automatically.
