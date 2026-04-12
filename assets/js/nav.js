(function () {
  const body = document.body;
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".nav-toggle");
  const backdrop = document.querySelector(".nav-backdrop");

  function openNav() {
    body.classList.add("nav-open");
    btn?.setAttribute("aria-expanded", "true");
    backdrop?.removeAttribute("hidden");
  }

  function closeNav() {
    body.classList.remove("nav-open");
    btn?.setAttribute("aria-expanded", "false");
    backdrop?.setAttribute("hidden", "");
  }

  function toggleNav() {
    body.classList.contains("nav-open") ? closeNav() : openNav();
  }

  btn?.addEventListener("click", toggleNav);
  backdrop?.addEventListener("click", closeNav);

  nav?.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 880px)").matches) closeNav();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  const mq = window.matchMedia("(min-width: 881px)");
  if (mq.addEventListener) {
    mq.addEventListener("change", (e) => {
      if (e.matches) closeNav();
    });
  } else {
    mq.addListener((e) => {
      if (e.matches) closeNav();
    });
  }
})();
