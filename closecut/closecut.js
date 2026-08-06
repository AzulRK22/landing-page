/*
 * Canonical public release configuration.
 */
const CLOSECUT_RELEASE = {
  state: "live",
  appStoreURL: "https://apps.apple.com/mx/app/closecut-journal/id6786807402?l=en-GB"
};
document.documentElement.classList.add("js");

(function () {
  const RELEASE_COPY = {
    live: {
      eyebrow: "Now on the App Store",
      status: "CloseCut 1.0 is available now on iPhone through the App Store.",
      supporting: "",
      cta: "Download on the App Store",
      finalEyebrow: "CloseCut 1.0 is available now",
      finalTitle: "Make your watch history worth remembering.",
      finalBody: "Get CloseCut on the App Store for iPhone.",
      faq: "Yes. CloseCut 1.0 is available now on iPhone through the App Store.",
    },
  };

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
      element.hidden = !value;
    });
  }

  function applyReleaseState(release = CLOSECUT_RELEASE) {
    let copy = RELEASE_COPY.live;
    const validAppStoreURL = /^https:\/\/apps\.apple\.com\//.test(release.appStoreURL || "");
    const useAppStore = validAppStoreURL;
    const scriptURL = document.querySelector('script[src$="closecut.js"]')?.src;
    const supportURL = scriptURL ? new URL("support/", scriptURL).href : "support/";
    if (release.state === "live" && !validAppStoreURL) {
      copy = {
        eyebrow: "Release update",
        status: "CloseCut is preparing for public release.",
        supporting: "",
        cta: "Check availability",
        finalEyebrow: "Release update",
        finalTitle: "CloseCut is preparing for public release.",
        finalBody: "Visit Support for current availability.",
        faq: "CloseCut is preparing for public release. Visit Support for current availability.",
      };
    }

    setText("[data-release-eyebrow]", copy.eyebrow);
    setText("[data-release-status]", copy.status);
    setText("[data-release-supporting]", copy.supporting);
    setText("[data-release-final-eyebrow]", copy.finalEyebrow);
    setText("[data-release-final-title]", copy.finalTitle);
    setText("[data-release-final-body]", copy.finalBody);
    setText("[data-release-faq]", copy.faq);
    setText("[data-release-fine-print]", useAppStore ? "Available for iPhone." : "Visit Support for current availability.");

    document.querySelectorAll("[data-release-cta]").forEach((link) => {
      link.textContent = useAppStore ? copy.cta : "Check availability";
      link.href = useAppStore ? release.appStoreURL : supportURL;
      if (useAppStore) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      } else {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }
      link.dataset.releaseDestination = useAppStore ? "app-store" : "support";
    });
  }

  applyReleaseState();
  window.CloseCutRelease = { apply: applyReleaseState };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-release-cta]");
    if (!link || link.dataset.releaseDestination !== "app-store") return;
    window.closeCutAnalytics?.track?.("app_store_cta_click", {
      location: link.dataset.ctaLocation || "unknown",
      release_state: CLOSECUT_RELEASE.state,
    });
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

(function () {
  const eventNames = {
    "privacy-link": "privacy_link_click",
    "support-link": "support_link_click",
    "explore-cta": "explore_closecut_click",
  };
  document.addEventListener("click", (event) => {
    const element = event.target.closest("[data-analytics]");
    const eventName = eventNames[element?.dataset.analytics];
    if (!eventName) return;
    window.closeCutAnalytics?.track?.(eventName, {
      release_state: CLOSECUT_RELEASE.state,
      location: element.dataset.analyticsLocation || "unknown",
    });
  });
  document.querySelectorAll(".faq-list details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;
      window.closeCutAnalytics?.track?.("faq_open", {
        release_state: CLOSECUT_RELEASE.state,
        location: details.querySelector("summary")?.dataset.qa || "unknown",
      });
    });
  });
})();
