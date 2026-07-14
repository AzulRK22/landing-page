# CloseCut Library Blueprint

The Library should be a separate Next.js content product backed by canonical Markdown/JSON, schema validation, versioned cross-references, public/private visibility, full-text search, accessible page navigation, PDF export, and Figma/Canva asset derivation. It must not live inside the iOS repository. The content pipeline should validate metadata, decision-record links, chapter IDs, diagrams, and integrity hashes before deployment.

```mermaid
graph TD
A[Canonical Markdown repository] --> B[Schema validation]
B --> C[Next.js content pipeline]
C --> D[Interactive web library]
C --> E[PDF export]
C --> F[Figma and Canva assets]
C --> G[Search index]
A --> H[Version history]
A --> I[Restricted internal volumes]
A --> J[Public approved books]
```
