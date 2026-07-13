# CloseCut Library

The CloseCut Library publishes reviewed, public-safe product documentation. **Product Vision & Requirements** is the first and currently only published volume; the other five catalog entries remain unavailable.

## Published route and package

- Catalog: `/closecut/library/`
- Reader: `/closecut/library/book.html?id=product-vision`
- Chapter URL: `/closecut/library/book.html?id=product-vision&chapter=01-vision`
- PDF: `/closecut/library/books/product-vision/CloseCut_Product_Vision_Requirements_v1.pdf`
- Catalog metadata: `data/books.json`
- Book metadata and ordered chapter index: `books/product-vision/manifest.json`

The public package preserves the canonical `manuscript.md`, 49 chapter sources, two Mermaid diagrams, 10 Product Decision Records, the final reading PDF, and generated semantic HTML fragments. The browser loads the pre-generated fragments, so no Markdown parser, CDN, framework, package manager, or runtime build step is required.

## Import policy and workflow

ZIP files remain external source artifacts and are never committed directly. The source README, `book.yaml`, duplicate Markdown export, DOCX, raw metadata/evidence JSON, `INCONSISTENCIES.md`, `PENDING_DECISIONS.md`, audit material, and temporary/macOS files are excluded. The web manuscript removes the source owner alias and changes the source classification label to `Public Reading Edition`; the approved final PDF remains the supplied reading export.

After reviewing a new extracted package outside the repository, regenerate this volume from the repository root:

```bash
python3 closecut/library/scripts/import-book.py /path/to/CloseCut_Product_Book_v1
```

The importer uses only the Python standard library, escapes all source text, supports the Markdown structures used by this book, generates stable heading IDs, and rebuilds `manifest.json` from actual chapter files.

## Validation

```bash
node --check closecut/library/library.js
node --check closecut/library/reader.js
python3 -m json.tool closecut/library/data/books.json > /dev/null
python3 -m json.tool closecut/library/books/product-vision/manifest.json > /dev/null
xmllint --noout Sitemap.xml
```

Every later volume requires its own content, privacy, security, claims, accessibility, and publishing review before `available` can become `true`. **Backend, Infrastructure & Security must never be published automatically** and requires explicit security review and a reduced public edition where appropriate. Page-turn effects remain deferred until the plain reader is fully validated.
