#!/usr/bin/env python3
"""Import the reviewed CloseCut Product Vision reading edition.

The runtime reader loads generated HTML fragments. This import-time tool uses
only the Python standard library and escapes source text before adding the
small, supported Markdown subset used by the book.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
from pathlib import Path


BOOK_ID = "product-vision"
PDF_NAME = "CloseCut_Product_Vision_Requirements_v1.pdf"
PUBLISHED_AT = "2026-07-13"


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "section"


def inline_markdown(value: str) -> str:
    placeholders: list[str] = []

    def preserve_code(match: re.Match[str]) -> str:
        placeholders.append(f"<code>{html.escape(match.group(1))}</code>")
        return f"\x00{len(placeholders) - 1}\x00"

    value = re.sub(r"`([^`]+)`", preserve_code, value)
    value = html.escape(value, quote=True)
    value = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", value)
    for index, replacement in enumerate(placeholders):
        value = value.replace(f"\x00{index}\x00", replacement)
    return value


def markdown_to_fragment(markdown: str) -> str:
    lines = markdown.splitlines()
    output: list[str] = []
    paragraph: list[str] = []
    heading_ids: dict[str, int] = {}
    list_type: str | None = None
    in_code = False
    code_language = ""
    code_lines: list[str] = []

    def flush_paragraph() -> None:
        if paragraph:
            output.append(f"<p>{inline_markdown(' '.join(paragraph))}</p>")
            paragraph.clear()

    def close_list() -> None:
        nonlocal list_type
        if list_type:
            output.append(f"</{list_type}>")
            list_type = None

    index = 0
    while index < len(lines):
        line = lines[index]

        if in_code:
            if line.startswith("```"):
                language_class = f' class="language-{slugify(code_language)}"' if code_language else ""
                output.append(f"<pre><code{language_class}>{html.escape(chr(10).join(code_lines))}</code></pre>")
                in_code = False
                code_language = ""
                code_lines.clear()
            else:
                code_lines.append(line)
            index += 1
            continue

        if line.startswith("```"):
            flush_paragraph()
            close_list()
            in_code = True
            code_language = line[3:].strip()
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.+)$", line)
        if heading:
            flush_paragraph()
            close_list()
            source_level = len(heading.group(1))
            level = min(source_level + 1, 6)
            title = re.sub(r"^\d+\.\s*", "", heading.group(2)).strip()
            base_id = "chapter-heading" if source_level == 1 else slugify(title)
            count = heading_ids.get(base_id, 0)
            heading_ids[base_id] = count + 1
            heading_id = base_id if count == 0 else f"{base_id}-{count + 1}"
            tabindex = ' tabindex="-1"' if source_level == 1 else ""
            output.append(f'<h{level} id="{heading_id}"{tabindex}>{inline_markdown(title)}</h{level}>')
            index += 1
            continue

        if line.startswith("|") and index + 1 < len(lines) and re.match(r"^\|(?:\s*:?-+:?\s*\|)+$", lines[index + 1]):
            flush_paragraph()
            close_list()
            headers = [cell.strip() for cell in line.strip("|").split("|")]
            index += 2
            rows: list[list[str]] = []
            while index < len(lines) and lines[index].startswith("|"):
                rows.append([cell.strip() for cell in lines[index].strip("|").split("|")])
                index += 1
            output.append('<div class="reader-table-wrap"><table><thead><tr>')
            output.extend(f"<th scope=\"col\">{inline_markdown(cell)}</th>" for cell in headers)
            output.append("</tr></thead><tbody>")
            for row in rows:
                output.append("<tr>")
                output.extend(f"<td>{inline_markdown(cell)}</td>" for cell in row)
                output.append("</tr>")
            output.append("</tbody></table></div>")
            continue

        item = re.match(r"^[-*]\s+(.+)$", line)
        numbered_item = re.match(r"^\d+\.\s+(.+)$", line)
        if item or numbered_item:
            flush_paragraph()
            required_type = "ul" if item else "ol"
            if list_type != required_type:
                close_list()
                output.append(f"<{required_type}>")
                list_type = required_type
            match = item or numbered_item
            output.append(f"<li>{inline_markdown(match.group(1))}</li>")
            index += 1
            continue

        if line.startswith(">"):
            flush_paragraph()
            close_list()
            output.append(f"<blockquote><p>{inline_markdown(line.lstrip('> ').strip())}</p></blockquote>")
            index += 1
            continue

        if re.match(r"^\s*---+\s*$", line):
            flush_paragraph()
            close_list()
            output.append("<hr>")
            index += 1
            continue

        if not line.strip():
            flush_paragraph()
            close_list()
        else:
            paragraph.append(line.strip())
        index += 1

    flush_paragraph()
    close_list()
    if in_code:
        output.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
    return "\n".join(output) + "\n"


def chapter_title(path: Path) -> str:
    for line in path.read_text(encoding="utf-8").splitlines():
        match = re.match(r"^#\s+(?:\d+\.\s*)?(.+)$", line)
        if match:
            return match.group(1).strip()
    raise ValueError(f"Chapter has no level-one heading: {path}")


def normalize_markdown(markdown: str) -> str:
    """Remove Git-hostile trailing spaces while preserving Markdown hard breaks."""
    normalized: list[str] = []
    for line in markdown.splitlines():
        hard_break = line.endswith("  ")
        normalized.append(line.rstrip())
        if hard_break:
            normalized.append("")
    return "\n".join(normalized) + "\n"


def import_book(source: Path, target: Path) -> None:
    required = [source / "manuscript.md", source / "chapters", source / "decisions", source / "diagrams", source / "exports" / PDF_NAME]
    missing = [str(path) for path in required if not path.exists()]
    if missing:
        raise FileNotFoundError("Missing source material: " + ", ".join(missing))

    for directory in ("chapters", "diagrams", "decisions", "html"):
        (target / directory).mkdir(parents=True, exist_ok=True)

    manuscript = source.joinpath("manuscript.md").read_text(encoding="utf-8")
    manuscript = manuscript.replace("**Owner:** Azul / Blue  \n", "")
    manuscript = manuscript.replace("**Classification:** Internal Product Documentation", "**Edition:** Public Reading Edition")
    manuscript = normalize_markdown(manuscript)
    target.joinpath("manuscript.md").write_text(manuscript, encoding="utf-8")

    chapter_files = sorted(source.joinpath("chapters").glob("[0-9][0-9]-*.md"))
    decision_files = sorted(source.joinpath("decisions").glob("PDR-[0-9][0-9][0-9]-*.md"))

    chapters = []
    for order, source_path in enumerate(chapter_files, 1):
        if int(source_path.name[:2]) != order:
            raise ValueError(f"Non-sequential chapter filename: {source_path.name}")
        target_source = target / "chapters" / source_path.name
        chapter_markdown = normalize_markdown(source_path.read_text(encoding="utf-8"))
        target_source.write_text(chapter_markdown, encoding="utf-8")
        fragment_path = target / "html" / source_path.with_suffix(".html").name
        fragment_path.write_text(markdown_to_fragment(chapter_markdown), encoding="utf-8")
        chapters.append({
            "id": source_path.stem,
            "order": order,
            "title": chapter_title(source_path),
            "source": f"chapters/{source_path.name}",
            "html": f"html/{fragment_path.name}",
        })

    decisions = []
    for source_path in decision_files:
        target_path = target / "decisions" / source_path.name
        shutil.copy2(source_path, target_path)
        decisions.append({"id": source_path.name[:7], "source": f"decisions/{source_path.name}"})

    for source_path in sorted(source.joinpath("diagrams").glob("*.mmd")):
        shutil.copy2(source_path, target / "diagrams" / source_path.name.lower())

    shutil.copy2(source / "exports" / PDF_NAME, target / PDF_NAME)

    manifest = {
        "id": BOOK_ID,
        "order": 1,
        "title": "Product Vision & Requirements",
        "shortTitle": "Product Vision",
        "subtitle": "The Foundational Product Specification",
        "version": "1.0",
        "status": "canonical",
        "visibility": "public",
        "language": "en",
        "description": "The product vision, principles, verified scope, requirements, and long-term direction of CloseCut.",
        "pdf": PDF_NAME,
        "pageCount": 468,
        "manuscript": "manuscript.md",
        "chapterDirectory": "chapters",
        "htmlDirectory": "html",
        "diagramDirectory": "diagrams",
        "decisionDirectory": "decisions",
        "chapterCount": len(chapters),
        "decisionRecordCount": len(decisions),
        "readingEdition": True,
        "downloadable": True,
        "publishedAt": PUBLISHED_AT,
        "updatedAt": PUBLISHED_AT,
        "chapters": chapters,
        "decisions": decisions,
    }
    target.joinpath("manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path, help="Extracted CloseCut_Product_Book_v1 directory")
    parser.add_argument("--target", type=Path, default=Path("closecut/library/books/product-vision"))
    args = parser.parse_args()
    import_book(args.source.resolve(), args.target.resolve())


if __name__ == "__main__":
    main()
