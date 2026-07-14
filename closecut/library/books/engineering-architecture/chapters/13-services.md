# 13. Services

Services represent capabilities that do not naturally belong to an aggregate repository: authentication, account deletion, local purge, profile-photo storage, metadata enrichment, notifications, calendar export, external links, and Circle invite behavior.

A service must define its failure model. User-cancelled, offline, unauthorized, validation, quota, server, and invariant failures are not interchangeable. Services performing irreversible operations require idempotency and explicit completion semantics.
