(function () {
  const title = document.getElementById("reader-title");
  const subtitle = document.getElementById("reader-subtitle");
  const message = document.getElementById("reader-message");
  const content = document.getElementById("reader-content");
  const meta = document.getElementById("reader-meta");
  const actions = document.getElementById("reader-actions");
  const pdf = document.getElementById("reader-pdf");
  const chapterList = document.getElementById("reader-chapter-list");
  const pagination = document.getElementById("reader-pagination");
  const previous = document.getElementById("reader-previous");
  const next = document.getElementById("reader-next");
  const toc = document.getElementById("reader-toc");
  const tocToggle = document.getElementById("reader-toc-toggle");
  let manifest;
  let activeChapterId;

  function setState(heading, detail) {
    title.textContent = heading;
    message.textContent = detail;
    message.hidden = false;
    content.hidden = true;
    pagination.hidden = true;
  }

  function readerUrl(bookId, chapterId) {
    const params = new URLSearchParams({ id: bookId });
    if (chapterId) params.set("chapter", chapterId);
    return `book.html?${params.toString()}`;
  }

  function fetchJson(path) {
    return fetch(path, { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return response.json();
    });
  }

  function safeBookPath(bookId, path) {
    const expected = `books/${bookId}/`;
    return typeof path === "string" && path.startsWith(expected) && !path.includes("..") ? path : null;
  }

  function closeToc(returnFocus) {
    toc.classList.remove("open");
    tocToggle.setAttribute("aria-expanded", "false");
    if (returnFocus) tocToggle.focus();
  }

  function updateToc(chapterId) {
    chapterList.querySelectorAll("a").forEach((link) => {
      if (link.dataset.chapter === chapterId) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function setPagination(bookId, chapterIndex) {
    const previousChapter = manifest.chapters[chapterIndex - 1];
    const nextChapter = manifest.chapters[chapterIndex + 1];
    for (const [link, chapter] of [[previous, previousChapter], [next, nextChapter]]) {
      link.hidden = !chapter;
      if (chapter) {
        link.href = readerUrl(bookId, chapter.id);
        link.dataset.chapter = chapter.id;
        link.querySelector("strong").textContent = chapter.title;
      }
    }
    pagination.hidden = false;
  }

  function sanitizeFragment(markup) {
    const template = document.createElement("template");
    template.innerHTML = markup;
    template.content.querySelectorAll("script, iframe, object, embed, style, link, meta, form, input, button").forEach((node) => node.remove());
    template.content.querySelectorAll("*").forEach((node) => {
      [...node.attributes].forEach((attribute) => {
        if (!['id', 'class', 'scope', 'tabindex'].includes(attribute.name)) node.removeAttribute(attribute.name);
      });
    });
    return template.content;
  }

  async function loadChapter(bookId, requestedChapterId, shouldFocus) {
    const chapterIndex = manifest.chapters.findIndex((chapter) => chapter.id === requestedChapterId);
    const fallback = chapterIndex < 0;
    const resolvedIndex = fallback ? 0 : chapterIndex;
    const chapter = manifest.chapters[resolvedIndex];
    const htmlPath = safeBookPath(bookId, `books/${bookId}/${chapter.html}`);
    if (!htmlPath) throw new Error("Invalid chapter path");

    message.hidden = false;
    message.textContent = fallback && requestedChapterId
      ? "That chapter was not found. Showing the first chapter instead."
      : `Loading ${chapter.title}…`;

    const response = await fetch(htmlPath, { cache: "no-store" });
    if (!response.ok) throw new Error(`Chapter request failed: ${response.status}`);
    const markup = await response.text();
    content.replaceChildren(sanitizeFragment(markup));
    content.hidden = false;
    activeChapterId = chapter.id;
    updateToc(chapter.id);
    setPagination(bookId, resolvedIndex);
    closeToc(false);

    if (fallback && requestedChapterId) {
      history.replaceState({ chapter: chapter.id }, "", readerUrl(bookId, chapter.id));
    } else {
      message.hidden = true;
    }

    if (shouldFocus) {
      content.querySelector("#chapter-heading")?.focus({ preventScroll: true });
      content.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  function buildChapterList(bookId) {
    const fragment = document.createDocumentFragment();
    manifest.chapters.forEach((chapter) => {
      const link = document.createElement("a");
      link.href = readerUrl(bookId, chapter.id);
      link.dataset.chapter = chapter.id;
      const number = document.createElement("span");
      number.textContent = String(chapter.order).padStart(2, "0");
      link.appendChild(number);
      link.append(document.createTextNode(chapter.title));
      fragment.appendChild(link);
    });
    chapterList.replaceChildren(fragment);
  }

  async function initialize() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) {
      setState("No book selected.", "Return to the Library and choose a published volume.");
      return;
    }

    try {
      const catalog = await fetchJson("data/books.json");
      const book = catalog.books?.find((item) => item.id === bookId);
      if (!book) {
        setState("Book not found.", "The requested volume is not part of the current catalog.");
        return;
      }
      if (!book.available) {
        setState(book.title, "This volume has not been published yet.");
        return;
      }

      const manifestPath = safeBookPath(bookId, book.manifest);
      if (!manifestPath) throw new Error("Invalid manifest path");
      manifest = await fetchJson(manifestPath);
      if (manifest.id !== bookId || !Array.isArray(manifest.chapters) || !manifest.chapters.length) throw new Error("Invalid manifest");

      title.textContent = manifest.title;
      subtitle.textContent = manifest.subtitle;
      document.title = `${manifest.title} — CloseCut Library`;
      document.querySelector('meta[name="description"]').content = manifest.description;
      meta.textContent = `Version ${manifest.version} · ${manifest.chapterCount} chapters · ${manifest.pageCount} pages`;
      const pdfPath = safeBookPath(bookId, `books/${bookId}/${manifest.pdf}`);
      if (!pdfPath) throw new Error("Invalid PDF path");
      pdf.href = pdfPath;
      meta.hidden = false;
      actions.hidden = false;
      toc.hidden = false;
      tocToggle.hidden = false;
      buildChapterList(bookId);
      const requestedChapter = params.get("chapter") || manifest.chapters[0].id;
      await loadChapter(bookId, requestedChapter, false);
    } catch (error) {
      console.error(error);
      setState("Reader unavailable.", "The selected book could not be loaded. Please return to the Library and try again.");
    }
  }

  chapterList.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-chapter]");
    if (!link || !manifest) return;
    event.preventDefault();
    history.pushState({ chapter: link.dataset.chapter }, "", link.href);
    loadChapter(manifest.id, link.dataset.chapter, true).catch((error) => {
      console.error(error);
      message.hidden = false;
      message.textContent = "That chapter could not be loaded.";
    });
  });

  pagination.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-chapter]");
    if (!link || !manifest) return;
    event.preventDefault();
    history.pushState({ chapter: link.dataset.chapter }, "", link.href);
    loadChapter(manifest.id, link.dataset.chapter, true).catch((error) => {
      console.error(error);
      message.hidden = false;
      message.textContent = "That chapter could not be loaded.";
    });
  });

  tocToggle.addEventListener("click", () => {
    const willOpen = tocToggle.getAttribute("aria-expanded") !== "true";
    toc.classList.toggle("open", willOpen);
    tocToggle.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) (chapterList.querySelector('[aria-current="page"]') || chapterList.querySelector("a"))?.focus();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toc.classList.contains("open")) closeToc(true);
  });

  window.addEventListener("popstate", () => {
    if (!manifest) return;
    const chapterId = new URLSearchParams(window.location.search).get("chapter") || manifest.chapters[0].id;
    if (chapterId !== activeChapterId) loadChapter(manifest.id, chapterId, true);
  });

  initialize();
})();
