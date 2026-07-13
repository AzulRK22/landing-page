(function () {
  const grid = document.getElementById("library-grid");
  const status = document.getElementById("library-status");

  if (!grid) return;

  function appendElement(parent, tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = String(text ?? "");
    parent.appendChild(element);
    return element;
  }

  function createBookCard(book) {
    const article = document.createElement("article");
    article.className = "library-card reveal";

    const availabilityLabel = book.available
      ? "Available"
      : book.visibility === "private-review"
        ? "Private review"
        : "Coming soon";

    const cover = appendElement(article, "div", "library-cover");
    cover.setAttribute("aria-hidden", "true");
    const coverInner = appendElement(cover, "div", "library-cover-inner");
    appendElement(coverInner, "span", "library-volume", `Volume ${String(book.order).padStart(2, "0")}`);
    appendElement(coverInner, "strong", "library-cover-title", book.shortTitle || book.title);
    appendElement(coverInner, "span", "library-cover-subtitle", book.subtitle);

    const body = appendElement(article, "div", "library-card-body");
    const meta = appendElement(body, "div", "library-card-meta");
    appendElement(meta, "span", "", `Version ${book.version}`);
    appendElement(meta, "span", "", book.status);
    if (book.chapterCount) appendElement(meta, "span", "", `${book.chapterCount} chapters`);
    appendElement(body, "h3", "", book.title);
    appendElement(body, "p", "", book.description);
    appendElement(body, "span", "library-badge", availabilityLabel);

    const actions = appendElement(body, "div", "library-card-actions");
    if (book.available) {
      const readerLink = appendElement(actions, "a", "library-link", "Read online");
      readerLink.href = book.readerUrl;

      if (book.pdf) {
        const pdfLink = appendElement(actions, "a", "library-link", "Download PDF");
        pdfLink.href = book.pdf;
        pdfLink.target = "_blank";
        pdfLink.rel = "noopener";
      }
    } else {
      appendElement(actions, "span", "library-unavailable", "Not published yet");
    }

    return article;
  }

  async function loadBooks() {
    try {
      const response = await fetch("data/books.json", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Catalog request failed: ${response.status}`);
      }

      const data = await response.json();
      const books = Array.isArray(data.books) ? data.books : [];

      books
        .sort((a, b) => Number(a.order) - Number(b.order) || String(a.id).localeCompare(String(b.id)))
        .forEach((book) => {
          grid.appendChild(createBookCard(book));
        });

      if (!books.length) {
        if (status) status.textContent = "No books are currently listed.";
      } else if (status) {
        status.remove();
      }
    } catch (error) {
      console.error(error);

      if (status) status.textContent = "The library catalog could not be loaded.";
    }
  }

  loadBooks();
})();
