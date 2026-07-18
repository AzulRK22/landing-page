# CloseCut Library

The CloseCut Library publishes reviewed, public-safe product documentation. All six canonical volumes are published.

## Published volumes

| Volume | Public package | Manifest | PDF | Chapters | Pages | Decisions |
| --- | --- | --- | --- | ---: | ---: | ---: |
| Product Vision & Requirements | `books/product-vision/` | `books/product-vision/manifest.json` | `CloseCut_Product_Vision_Requirements_v1.pdf` | 49 | 107 | 10 PDRs |
| Experience Design System | `books/experience-design/` | `books/experience-design/manifest.json` | `CloseCut_Experience_Design_System_v1.pdf` | 12 | 132 | 8 EDRs |
| Engineering Architecture | `books/engineering-architecture/` | `books/engineering-architecture/manifest.json` | `CloseCut_Engineering_Architecture_Public_Edition_v1.pdf` | 47 | 49 | 8 ADRs |
| Backend, Infrastructure & Security | `books/backend-security/` | `books/backend-security/manifest.json` | `CloseCut_Backend_Infrastructure_Security_Public_Edition_v1.pdf` | 14 | 21 | 11 BDRs |
| Quality, Release & Operations | `books/quality-release-operations/` | `books/quality-release-operations/manifest.json` | `CloseCut_Quality_Release_Operations_Public_Edition_v1.pdf` | 34 | 52 | 15 QDRs |
| Brand, Marketing & Growth System | `books/brand-marketing-growth/` | `books/brand-marketing-growth/manifest.json` | `CloseCut_Brand_Marketing_Growth_System_Public_Edition_v1.pdf` | 37 | 265 | 20 MDRs |

All published volumes use `/closecut/library/book.html?id=<book-id>` and the same dependency-free reader. Each package preserves the canonical manuscript, ordered chapter Markdown, generated semantic HTML, public Mermaid diagrams, accepted decision records, and searchable PDF. Brand, Marketing & Growth additionally includes 7 diagrams, a public glossary, and 8 public-safe operating resources.

## Publication and import policy

Public books use the classification **Public Reading Edition**. Source ZIPs, DOCX files, source README/transformation guides, raw audit and gap reports, open-decision and unsupported-claims reports, outreach contacts, budgets, unreleased campaign plans, private analytics, raw metadata/integrity manifests, source assets, temporary scripts, and macOS metadata remain outside public packages.

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

Quality packages may add `--decision-output-directory decision-records`, `--checklist-directory checklists`, and `--matrix-directory matrices`. The public PDF is generated from the reviewed manuscript and public appendices, then independently checked for text selection, bookmarks, blank pages, table readability, and visual defects before import.

Brand packages may additionally use `--glossary-markdown-source glossary/glossary.md` and `--resource-directory resources`. Non-numeric Part and Appendix filenames are ordered naturally by the generic importer.

The importer uses only the Python standard library. It escapes source content, removes print-only page-break markup from HTML, creates stable heading IDs, wraps wide tables for keyboard scrolling, and builds the manifest from actual files. Verify PDF page count, classification, text selection, bookmarks, and visual rendering independently before import.

## Validation

```bash
node --check closecut/closecut.js
node --check closecut/library/library.js
node --check closecut/library/reader.js
python3 -m json.tool closecut/library/data/books.json > /dev/null
python3 -m json.tool closecut/library/books/product-vision/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/experience-design/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/engineering-architecture/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/backend-security/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/quality-release-operations/manifest.json > /dev/null
python3 -m json.tool closecut/library/books/brand-marketing-growth/manifest.json > /dev/null
xmllint --noout sitemap.xml
git diff --check
```

Every volume requires its own content, privacy, security, claims, accessibility, and publication review before `available` becomes `true`. All six canonical volumes have completed their public-edition review.
