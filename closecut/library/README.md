# CloseCut Library

The CloseCut Library publishes reviewed, public-safe product documentation. **Product Vision & Requirements** and **Experience Design System** are the first two published volumes; the remaining four catalog entries are unavailable.

## Published volumes

| Volume | Public package | Manifest | PDF | Chapters | Pages | Decisions |
| --- | --- | --- | --- | ---: | ---: | ---: |
| Product Vision & Requirements | `books/product-vision/` | `books/product-vision/manifest.json` | `CloseCut_Product_Vision_Requirements_v1.pdf` | 49 | 107 | 10 PDRs |
| Experience Design System | `books/experience-design/` | `books/experience-design/manifest.json` | `CloseCut_Experience_Design_System_v1.pdf` | 12 | 132 | 8 EDRs |

Both volumes use `/closecut/library/book.html?id=<book-id>` and the same dependency-free reader. Each package preserves the canonical manuscript, ordered chapter Markdown, generated semantic HTML, public Mermaid diagrams, accepted decision records, and searchable PDF. Experience Design also publishes its public-safe glossary and canonical design tokens. The tokens contain semantic visual, layout, and motion values with no credentials, private paths, or unresolved conflicts.

## Publication and import policy

Public books use the classification **Public Reading Edition**. Source ZIPs, DOCX files, source README/transformation guides, audit and evidence material, inconsistency reports, open-decision reports, internal accessibility audit JSON, raw metadata/integrity manifests, duplicate exports, temporary scripts, and macOS metadata remain outside the public package.

Audit and classify an extracted package before import. Then run the generic importer from the repository root with explicit book metadata. Example:

```bash
python3 closecut/library/scripts/import-book.py /path/to/source \
  --target closecut/library/books/experience-design \
  --book-id experience-design --order 2 \
  --title "Experience Design System" --short-title "Experience Design" \
  --subtitle "The Canonical Experience Specification" \
  --description "The visual, interaction, accessibility, motion, and experience system behind CloseCut." \
  --page-count 132 \
  --pdf-filename CloseCut_Experience_Design_System_v1.pdf \
  --pdf-source CloseCut_Experience_Design_System_v1.pdf \
  --manuscript-source CloseCut_Experience_Design_System_v1.md \
  --decision-directory decision-records --decision-prefix EDR \
  --tokens-source tokens/design-tokens.json \
  --glossary-source glossary/glossary.json
```

The importer uses only the Python standard library. It escapes source content, removes print-only page-break markup from HTML, creates stable heading IDs, wraps wide tables for keyboard scrolling, and builds the manifest from actual files. Verify PDF page count, classification, text selection, bookmarks, and visual rendering independently before import.

## Validation

```bash
node --check closecut/closecut.js
node --check closecut/library/library.js
node --check closecut/library/reader.js
python3 -m json.tool closecut/library/data/books.json > /dev/null
python3 -m json.tool closecut/library/books/product-vision/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/experience-design/manifest.json > /dev/null
xmllint --noout Sitemap.xml
git diff --check
```

Every later volume requires a separate content, privacy, security, claims, accessibility, and publication review before `available` becomes `true`. **Engineering Architecture requires its own public review**; Backend, Infrastructure & Security additionally requires explicit security review and a reduced public edition where appropriate.
