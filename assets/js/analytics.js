/**
 * analytics.js — Google Analytics 4 Event Tracking
 * Tracks outbound clicks (especially Shopify store) + lightweight engagement events.
 *
 * Uses:
 * - data-analytics="shop-logo" / "shop-link" (preferred)
 * - fallback: any <a> that contains "shop.azulrk.com"
 */

(function () {
  "use strict";

  const DEBUG = false;

  // gtag must exist (loaded in <head>)
  if (typeof window.gtag === "undefined") {
    console.warn(
      "Google Analytics (gtag) no disponible. Eventos personalizados no serán registrados.",
    );
    return;
  }

  function logDebug(...args) {
    if (DEBUG) console.log("[Analytics]", ...args);
  }

  function safeText(el) {
    const txt = (el.textContent || "").trim();
    return (
      txt ||
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      "unknown"
    );
  }

  function getSectionId(el) {
    return el.closest("section")?.id || "unknown";
  }

  function isShopifyHref(href) {
    return typeof href === "string" && href.includes("shop.azulrk.com");
  }

  /**
   * Delegated click tracking for links
   */
  function trackOutboundClicks() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const analyticsTag = link.getAttribute("data-analytics") || "";

      // Track Shopify outbound links (by tag OR by domain)
      const shouldTrackShop =
        analyticsTag.startsWith("shop-") || isShopifyHref(href);

      if (!shouldTrackShop) return;

      const label = analyticsTag || safeText(link);
      const section = getSectionId(link);

      window.gtag("event", "shop_link_click", {
        event_category: "engagement",
        event_label: `${section}_${label}`,
        destination_url: href,
        link_text: safeText(link),
        link_id: analyticsTag || undefined,
        source_page: window.location.pathname,
      });

      logDebug(
        `Shop link clicked: label="${label}" section="${section}" href="${href}"`,
      );
    });
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
    trackOutboundClicks();
    trackProjectsPageEvent();
    trackEngagementTime();
    logDebug("Tracking initialized");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Optional helpers
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

  window.debugUTMParams = function () {
    console.table(window.getUTMParams());
  };
})();
