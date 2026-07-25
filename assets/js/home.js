document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  const streak = document.querySelector("[data-duolingo-streak]");
  const updated = document.querySelector("[data-duolingo-updated]");

  if (streak && updated) {
    fetch("assets/data/language-learning.json", {
      headers: { accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Language snapshot HTTP ${response.status}`);
        return response.json();
      })
      .then(({ duolingo }) => {
        if (!Number.isInteger(duolingo?.streak) || duolingo.streak < 0) return;
        const snapshotDate = new Date(duolingo.snapshotDate);
        if (Number.isNaN(snapshotDate.getTime())) return;

        streak.textContent = String(duolingo.streak);
        updated.dateTime = duolingo.snapshotDate.slice(0, 10);
        updated.textContent = new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        }).format(snapshotDate);
      })
      .catch(() => {
        // The dated HTML snapshot remains visible if the local JSON cannot load.
      });
  }
});
