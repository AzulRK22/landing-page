/**
 * Shared Google Analytics 4 loader and lightweight event tracking.
 * Include this file once on every standalone HTML document.
 */

(function () {
  "use strict";

  const MEASUREMENT_ID = "G-4H06V4SLX7";
  const DEBUG = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  if (!document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) {
    const loader = document.createElement("script");
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
    loader.dataset.ga4 = MEASUREMENT_ID;
    document.head.appendChild(loader);
  }

  if (!window.__azulrkGaInitialized) {
    window.__azulrkGaInitialized = true;
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);
  }

  function logDebug(...args) {
    if (DEBUG) console.log("[Analytics]", ...args);
  }

  /**
   * Page-level event for projects page (avoid manual page_view duplication)
   */
  function trackProjectsPageEvent() {
    const pathname = window.location.pathname;

    if (pathname.includes("projects.html")) {
      window.gtag("event", "projects_view", {
        event_category: "navigation",
        page_title: document.title,
        page_location: window.location.href,
        source_page: pathname,
      });

      logDebug("projects_view fired");
    }
  }

  /**
   * Engagement time (very lightweight)
   */
  function trackEngagementTime() {
    let fired = false;

    const timer = setTimeout(() => {
      if (fired) return;
      fired = true;

      window.gtag("event", "engaged_10s", {
        event_category: "engagement_time",
        engagement_type: "extended_view",
        page: window.location.pathname,
      });

      logDebug("engaged_10s fired");
    }, 10000);

    window.addEventListener("beforeunload", () => clearTimeout(timer));
  }

  /**
   * Init
   */
  function init() {
    trackProjectsPageEvent();
    trackEngagementTime();
    logDebug("Tracking initialized");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.getUTMParams = function () {
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      content: params.get("utm_content"),
      term: params.get("utm_term"),
    };
  };
})();
