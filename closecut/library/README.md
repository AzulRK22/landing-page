# CloseCut Library

The CloseCut Library is the future home for the reviewed, long-form product documentation behind CloseCut. The current implementation is a static foundation only: it provides a landing page, a six-volume catalog, and a temporary reader route without publishing any book content.

## Routes and files

- `/closecut/library/` renders the catalog from `data/books.json`.
- `/closecut/library/book.html?id=<book-id>` is a temporary, `noindex` reader status page.
- `index.html`, `library.css`, and `library.js` provide the catalog experience.
- `book.html` and `reader.js` provide the temporary reader foundation.
- `data/books.json` is the single source for catalog order, metadata, visibility, and availability.

All six volumes are currently unavailable. Catalog visibility values distinguish material intended for eventual public release (`public`) from material requiring editorial or security review (`review-required` and `private-review`). A visibility value is not permission to publish source material.

## Intentionally not implemented

This foundation contains no manuscripts, chapters, Markdown parser, reader navigation, covers, PDFs, downloads, diagrams, or page-turn effects. No book may be marked available until its public-safe content and linked files exist and pass review.

## Local validation

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/closecut/library/`. Validate the foundation with:

```bash
node --check closecut/library/library.js
node --check closecut/library/reader.js
python3 -m json.tool closecut/library/data/books.json > /dev/null
xmllint --noout Sitemap.xml
```

## Next phase checklist

- Audit the Product Book ZIP outside the repository.
- Create a public-safe content package.
- Import one reviewed book.
- Create its manifest.
- Add Markdown parsing.
- Build accessible chapter navigation.
- Add the reviewed PDF download.
- Validate accessibility and responsive behavior.
- Only then consider a page-turn enhancement.

ZIP files are external source artifacts and must not be committed directly. Never publish private infrastructure, security, operational, personal, credential, or unreleased strategic content. Review and reduce source material before it enters this public repository.
