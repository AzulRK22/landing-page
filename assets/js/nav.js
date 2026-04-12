// nav.js: Common navigation functionality
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
      if (window.matchMedia("(max-width:880px)").matches) closeNav();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  const mq = window.matchMedia("(min-width:881px)");
  mq.addEventListener
    ? mq.addEventListener("change", (h) => h.matches && closeNav())
    : mq.addListener((h) => h.matches && closeNav());
})();

// Header scroll compact
(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  let last = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY || 0;
    if (!header) return;
    if (y > 8 && last <= 8) {
      header.classList.add("scrolled");
      if (nav) nav.style.top = "0";
    }
    if (y <= 8 && last > 8) {
      header.classList.remove("scrolled");
      if (nav) nav.style.top = "56px";
    }
    last = y;
  });
})();
