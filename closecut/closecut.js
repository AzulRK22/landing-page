/*
 * Release state and TestFlight canonical configuration.
 * Update `CLOSECUT_RELEASE.state` to one of: "beta", "app-review", "approved-not-released", "live"
 */
const CLOSECUT_RELEASE = {
  state: "app-review",
  testFlightOpen: true,
  testFlightURL: "https://testflight.apple.com/join/76tV85ZZ",
  appStoreURL: null
};
document.documentElement.classList.add("js");

(function () {
  const RELEASE_COPY = {
    beta: {
      eyebrow: "Public beta available",
      status: "CloseCut is currently in public beta.",
      supporting: "Join through TestFlight while beta availability remains open.",
      cta: "Join the public beta",
      finalEyebrow: "Public beta available",
      finalTitle: "Try CloseCut through TestFlight.",
      finalBody: "Build your history, try QuickPick, and share focused feedback.",
      faq: "No. CloseCut is currently available as a public TestFlight beta.",
    },
    "app-review": {
      eyebrow: "Submitted to the App Store",
      status: "CloseCut 1.0 is currently in App Review.",
      supporting: "The public beta remains available through TestFlight.",
      cta: "Join the public beta",
      finalEyebrow: "Public beta available",
      finalTitle: "Try CloseCut while 1.0 is in App Review.",
      finalBody: "Build your history, try QuickPick, and share focused feedback through TestFlight.",
      faq: "No. CloseCut 1.0 has been submitted and is currently in App Review. The public TestFlight beta remains open.",
    },
    "approved-not-released": {
      eyebrow: "Approved for the App Store",
      status: "CloseCut 1.0 has been approved, but is not publicly released yet.",
      supporting: "The public beta remains available through TestFlight.",
      cta: "Join the public beta",
      finalEyebrow: "Approved · Not yet released",
      finalTitle: "Try CloseCut before its public release.",
      finalBody: "The public TestFlight beta remains available while CloseCut prepares for release.",
      faq: "Not yet. CloseCut 1.0 has been approved, but has not been publicly released. The public TestFlight beta remains open.",
    },
    live: {
      eyebrow: "Available on the App Store",
      status: "CloseCut 1.0 is now available on the App Store.",
      supporting: "",
      cta: "View on the App Store",
      finalEyebrow: "Now available",
      finalTitle: "Make your watch history worth remembering.",
      finalBody: "Get CloseCut for iPhone and iPad.",
      faq: "Yes. CloseCut 1.0 is available on the App Store.",
    },
  };

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
      element.hidden = !value;
    });
  }

  function applyReleaseState(release = CLOSECUT_RELEASE) {
    let copy = RELEASE_COPY[release.state] || RELEASE_COPY["app-review"];
    const validTestFlightURL = release.testFlightOpen &&
      /^https:\/\/testflight\.apple\.com\/join\/[A-Za-z0-9]+$/.test(release.testFlightURL || "");
    const validAppStoreURL = /^https:\/\/apps\.apple\.com\//.test(release.appStoreURL || "");
    const useAppStore = release.state === "live" && validAppStoreURL;
    const useTestFlight = !useAppStore && validTestFlightURL;
    const scriptURL = document.querySelector('script[src$="closecut.js"]')?.src;
    const supportURL = scriptURL ? new URL("support/", scriptURL).href : "support/";
    if (release.state === "live" && !validAppStoreURL) {
      copy = {
        eyebrow: "Release update",
        status: "CloseCut is preparing for public release.",
        supporting: useTestFlight ? "The public beta remains available through TestFlight." : "",
        cta: useTestFlight ? "Join the public beta" : "Check availability",
        finalEyebrow: "Release update",
        finalTitle: "CloseCut is preparing for public release.",
        finalBody: "Visit Support for current availability.",
        faq: "CloseCut is preparing for public release. Visit Support for current availability.",
      };
    }

    setText("[data-release-eyebrow]", copy.eyebrow);
    setText("[data-release-status]", copy.status);
    setText("[data-release-supporting]", useTestFlight ? copy.supporting : "");
    setText("[data-release-final-eyebrow]", copy.finalEyebrow);
    setText("[data-release-final-title]", copy.finalTitle);
    setText("[data-release-final-body]", copy.finalBody);
    setText("[data-release-faq]", copy.faq);
    setText("[data-release-fine-print]", useAppStore
      ? "Requires a compatible iPhone or iPad."
      : useTestFlight
        ? "Requires Apple’s TestFlight app. Beta availability may change."
        : "Visit Support for current availability.");

    document.querySelectorAll("[data-release-cta]").forEach((link) => {
      link.textContent = useAppStore ? copy.cta : useTestFlight ? copy.cta : "Check availability";
      link.href = useAppStore ? release.appStoreURL : useTestFlight ? release.testFlightURL : supportURL;
      if (useAppStore || useTestFlight) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      } else {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }
      link.dataset.releaseDestination = useAppStore ? "app-store" : useTestFlight ? "testflight" : "support";
    });
  }

  applyReleaseState();
  window.CloseCutRelease = { apply: applyReleaseState };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-release-cta]");
    if (!link || link.dataset.releaseDestination !== "testflight") return;
    window.closeCutAnalytics?.track?.("testflight_cta_click", {
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
