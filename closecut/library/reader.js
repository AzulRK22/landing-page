(function () {
  const title = document.getElementById("reader-title");
  const message = document.getElementById("reader-message");

  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("id");

  if (!bookId) {
    title.textContent = "No book selected.";
    message.textContent = "Return to the Library and choose a volume.";
    return;
  }

  fetch("data/books.json", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Catalog request failed: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      const book = data.books?.find((item) => item.id === bookId);

      if (!book) {
        title.textContent = "Book not found.";
        message.textContent =
          "The requested volume is not part of the current catalog.";
        return;
      }

      title.textContent = book.title;

      message.textContent = book.available
        ? "Online reading is not implemented in this foundation."
        : "This volume has not been published yet.";
    })
    .catch((error) => {
      console.error(error);
      title.textContent = "Reader unavailable.";
      message.textContent = "The book catalog could not be loaded.";
    });
})();
