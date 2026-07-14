#!/usr/bin/env python3
"""Build a reviewed CloseCut Library volume from an extracted source package.

The runtime reader loads static HTML fragments. This import-time tool uses only
the Python standard library, escapes source text, and accepts explicit metadata
so it can publish multiple books without book-specific branches.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
from pathlib import Path


PUBLISHED_AT = "2026-07-14"


def roman_value(value: str) -> int:
    values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100}
    total = previous = 0
    for character in reversed(value.upper()):
        current = values.get(character, 0)
        total += -current if current < previous else current
        previous = max(previous, current)
    return total


def chapter_sort_key(path: Path) -> tuple[int, int | str]:
    name = path.stem.lower()
    numeric = re.match(r"^(\d+)-", name)
    if numeric:
        return (0, int(numeric.group(1)))
    part = re.match(r"^part-([ivxlc]+)(?:-|$)", name)
    if part:
        return (1, roman_value(part.group(1)))
    appendix = re.match(r"^appendix-([a-z]+)(?:-|$)", name)
    if appendix:
        return (2, appendix.group(1))
    return (3, name)


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

        if re.match(r"^<div\s+style=[\"']page-break-after:\s*always[\"']></div>$", line.strip(), re.I):
            flush_paragraph()
            close_list()
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
            output.append('<div class="reader-table-wrap" tabindex="0" role="region" aria-label="Scrollable table"><table><thead><tr>')
            output.extend(f'<th scope="col">{inline_markdown(cell)}</th>' for cell in headers)
            output.append("</tr></thead><tbody>")
            for row in rows:
                output.append("<tr>")
                output.extend(f"<td>{inline_markdown(cell)}</td>" for cell in row)
                output.append("</tr>")
            output.append("</tbody></table></div>")
            continue

        item = re.match(r"^\s*[-*]\s+(.+)$", line)
        numbered_item = re.match(r"^\s*\d+\.\s+(.+)$", line)
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
    normalized = [line.rstrip() for line in markdown.splitlines()]
    while normalized and not normalized[-1]:
        normalized.pop()
    return "\n".join(normalized) + "\n"


def public_markdown(markdown: str, add_edition: bool = False) -> str:
    markdown = markdown.replace("**Owner:** Azul / Blue  \n", "")
    markdown = re.sub(
        r"\*\*Classification:\*\*\s*(?:Internal Product Documentation|Internal Design Documentation)",
        "**Edition:** Public Reading Edition",
        markdown,
        flags=re.I,
    )
    markdown = re.sub(r"`?CloseCut/[A-Za-z0-9_./+ -]+\.swift`?", "current implementation evidence", markdown)
    if add_edition and "Public Reading Edition" not in markdown:
        markdown = re.sub(r"(^Version\s+1\.0\s*$)", r"\1\n\nEdition: Public Reading Edition\n", markdown, count=1, flags=re.M)
    return normalize_markdown(markdown)


def import_book(args: argparse.Namespace) -> None:
    source: Path = args.source.resolve()
    target: Path = args.target.resolve()
    chapter_dir = source / args.chapter_directory
    decision_dir = source / args.decision_directory
    diagram_dir = source / args.diagram_directory
    checklist_dir = source / args.checklist_directory if args.checklist_directory else None
    matrix_dir = source / args.matrix_directory if args.matrix_directory else None
    resource_dir = source / args.resource_directory if args.resource_directory else None
    manuscript_path = source / args.manuscript_source
    pdf_path = source / args.pdf_source
    required = [manuscript_path, chapter_dir, decision_dir, diagram_dir, pdf_path]
    required.extend(path for path in (checklist_dir, matrix_dir, resource_dir) if path is not None)
    missing = [str(path) for path in required if not path.exists()]
    if missing:
        raise FileNotFoundError("Missing source material: " + ", ".join(missing))

    for directory in ("chapters", "diagrams", args.decision_output_directory, "html"):
        (target / directory).mkdir(parents=True, exist_ok=True)
    for directory in (args.checklist_directory, args.matrix_directory, args.resource_directory):
        if directory:
            (target / directory).mkdir(parents=True, exist_ok=True)

    target.joinpath("manuscript.md").write_text(public_markdown(manuscript_path.read_text(encoding="utf-8"), True), encoding="utf-8")
    chapter_files = sorted(chapter_dir.glob("*.md"), key=chapter_sort_key)
    decision_pattern = re.compile(rf"^{re.escape(args.decision_prefix)}-[0-9]{{3}}(?:-.+)?\.md$", re.I)
    decision_files = sorted(path for path in decision_dir.glob("*.md") if decision_pattern.match(path.name))

    chapters = []
    for order, source_path in enumerate(chapter_files, 1):
        chapter_markdown = public_markdown(source_path.read_text(encoding="utf-8"), order == 1)
        target_source = target / "chapters" / source_path.name.lower()
        target_source.write_text(chapter_markdown, encoding="utf-8")
        fragment_path = target / "html" / target_source.with_suffix(".html").name
        fragment_path.write_text(markdown_to_fragment(chapter_markdown), encoding="utf-8")
        chapters.append({"id": target_source.stem, "order": order, "title": chapter_title(target_source), "source": f"chapters/{target_source.name}", "html": f"html/{fragment_path.name}"})

    decisions = []
    for source_path in decision_files:
        target_name = f"{source_path.name[:7].upper()}{source_path.name[7:].lower()}"
        target_path = target / args.decision_output_directory / target_name
        target_path.write_text(public_markdown(source_path.read_text(encoding="utf-8")), encoding="utf-8")
        decisions.append({"id": target_name[:7], "source": f"{args.decision_output_directory}/{target_name}"})

    for source_path in sorted(diagram_dir.glob("*.mmd")):
        shutil.copy2(source_path, target / "diagrams" / source_path.name.lower())
    checklists = []
    if checklist_dir:
        for source_path in sorted(checklist_dir.glob("*.md")):
            target_name = source_path.name.lower()
            target_path = target / args.checklist_directory / target_name
            target_path.write_text(public_markdown(source_path.read_text(encoding="utf-8")), encoding="utf-8")
            checklists.append({"id": target_path.stem, "source": f"{args.checklist_directory}/{target_name}"})
    matrices = []
    if matrix_dir:
        for source_path in sorted(matrix_dir.glob("*.csv")):
            target_name = source_path.name.lower()
            target_path = target / args.matrix_directory / target_name
            shutil.copy2(source_path, target_path)
            matrices.append({"id": target_path.stem, "source": f"{args.matrix_directory}/{target_name}"})
    resources = []
    if resource_dir:
        for source_path in sorted(resource_dir.rglob("*.md")):
            relative_path = source_path.relative_to(resource_dir)
            target_relative = Path(*[part.lower() for part in relative_path.parts])
            target_path = target / args.resource_directory / target_relative
            target_path.parent.mkdir(parents=True, exist_ok=True)
            target_path.write_text(public_markdown(source_path.read_text(encoding="utf-8")), encoding="utf-8")
            resources.append({"id": "-".join(target_relative.with_suffix("").parts), "source": f"{args.resource_directory}/{target_relative.as_posix()}"})
    shutil.copy2(pdf_path, target / args.pdf_filename)

    for source_name, target_name in ((args.tokens_source, "tokens/design-tokens.json"), (args.glossary_source, "glossary/glossary.json")):
        if source_name:
            source_path = source / source_name
            if not source_path.is_file():
                raise FileNotFoundError(source_path)
            output_path = target / target_name
            output_path.parent.mkdir(parents=True, exist_ok=True)
            parsed = json.loads(source_path.read_text(encoding="utf-8"))
            output_path.write_text(json.dumps(parsed, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    if args.glossary_markdown_source:
        source_path = source / args.glossary_markdown_source
        if not source_path.is_file():
            raise FileNotFoundError(source_path)
        output_path = target / "glossary/glossary.md"
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(public_markdown(source_path.read_text(encoding="utf-8")), encoding="utf-8")

    manifest = {
        "id": args.book_id, "order": args.order, "title": args.title,
        "shortTitle": args.short_title, "subtitle": args.subtitle,
        "version": args.version, "status": "canonical", "visibility": "public",
        "language": "en", "description": args.description,
        "pdf": args.pdf_filename, "manuscript": "manuscript.md",
        "chapterDirectory": "chapters", "htmlDirectory": "html",
        "diagramDirectory": "diagrams", "decisionDirectory": args.decision_output_directory,
        "chapterCount": len(chapters), "decisionRecordCount": len(decisions),
        "pageCount": args.page_count, "readingEdition": True, "downloadable": True,
        "documentStatus": "Public Reading Edition", "publishedAt": PUBLISHED_AT,
        "updatedAt": PUBLISHED_AT, "chapters": chapters, "decisions": decisions,
    }
    if checklist_dir:
        manifest.update({"checklistDirectory": args.checklist_directory, "checklistCount": len(checklists), "checklists": checklists})
    if matrix_dir:
        manifest.update({"matrixDirectory": args.matrix_directory, "matrixCount": len(matrices), "matrices": matrices})
    if resource_dir:
        manifest.update({"resourceDirectory": args.resource_directory, "resourceCount": len(resources), "resources": resources})
    if args.glossary_markdown_source:
        manifest["glossary"] = "glossary/glossary.md"
    manifest["diagramCount"] = len(list(diagram_dir.glob("*.mmd")))
    target.joinpath("manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("--target", type=Path, required=True)
    parser.add_argument("--book-id", required=True)
    parser.add_argument("--order", required=True, type=int)
    parser.add_argument("--title", required=True)
    parser.add_argument("--short-title", required=True)
    parser.add_argument("--subtitle", required=True)
    parser.add_argument("--description", required=True)
    parser.add_argument("--version", default="1.0")
    parser.add_argument("--page-count", required=True, type=int)
    parser.add_argument("--pdf-filename", required=True)
    parser.add_argument("--pdf-source", required=True)
    parser.add_argument("--manuscript-source", default="manuscript.md")
    parser.add_argument("--chapter-directory", default="chapters")
    parser.add_argument("--decision-directory", default="decisions")
    parser.add_argument("--decision-output-directory", default="decisions")
    parser.add_argument("--diagram-directory", default="diagrams")
    parser.add_argument("--checklist-directory")
    parser.add_argument("--matrix-directory")
    parser.add_argument("--resource-directory")
    parser.add_argument("--decision-prefix", required=True)
    parser.add_argument("--tokens-source")
    parser.add_argument("--glossary-source")
    parser.add_argument("--glossary-markdown-source")
    import_book(parser.parse_args())


if __name__ == "__main__":
    main()
