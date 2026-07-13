/*
 * TESTFLIGHT_URL is the single public beta destination for CloseCut.
 * Expected format: https://testflight.apple.com/join/{public-code}
 * Every element marked with data-testflight-link is enhanced to use it.
 */
const TESTFLIGHT_URL = "https://testflight.apple.com/join/76tV85ZZ";
document.documentElement.classList.add("js");

(function () {
  document.querySelectorAll("[data-testflight-link]").forEach((link) => {
    link.href = TESTFLIGHT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".marketing-nav-toggle");
  const nav = document.getElementById("marketing-nav");
  const toggleLabel = toggle?.querySelector(".sr-only");

  function closeNavigation() {
    toggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
    if (toggleLabel) toggleLabel.textContent = "Open navigation";
  }

  toggle?.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    nav?.classList.toggle("open", willOpen);
    if (toggleLabel) toggleLabel.textContent = willOpen ? "Close navigation" : "Open navigation";
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeNavigation(); });
  window.matchMedia("(min-width: 961px)").addEventListener?.("change", (event) => { if (event.matches) closeNavigation(); });

  const reveals = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8%", threshold: .08 });
  reveals.forEach((element) => observer.observe(element));
})();
