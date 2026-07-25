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

  const CLOSECUT_EVENTS = new Set([
    "testflight_cta_click",
    "explore_closecut_click",
    "privacy_link_click",
    "support_link_click",
    "faq_open",
  ]);
  const CLOSECUT_PROPERTIES = new Set([
    "location",
    "release_state",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ]);
  const PORTFOLIO_EVENTS = new Set([
    "selected_project_click",
    "resume_download",
    "contact_click",
    "closecut_visit",
  ]);
  const PORTFOLIO_PROPERTIES = new Set([
    "location",
    "project",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ]);

  function allowlistedPayload(payload, properties) {
    const allowed = {};
    const utm = window.getUTMParams?.() || {};
    if (payload && typeof payload === "object") {
      Object.keys(payload).forEach((key) => {
        if (properties.has(key) && typeof payload[key] === "string" && payload[key]) {
          allowed[key] = payload[key].slice(0, 100);
        }
      });
    }
    Object.entries({
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      utm_content: utm.content,
      utm_term: utm.term,
    }).forEach(([key, value]) => {
      if (value) allowed[key] = String(value).slice(0, 100);
    });
    return allowed;
  }

  // Lightweight analytics shim used by CloseCut. Both event names and properties
  // are allowlisted so arbitrary page or user-authored data cannot be forwarded.
  window.closeCutAnalytics = window.closeCutAnalytics || {};
  window.closeCutAnalytics.track = window.closeCutAnalytics.track || function (eventName, payload) {
    try {
      if (!CLOSECUT_EVENTS.has(eventName)) return;

      window.gtag("event", eventName, allowlistedPayload(payload, CLOSECUT_PROPERTIES));
    } catch (e) {
      if (DEBUG) console.warn('closeCutAnalytics.track failed', e);
    }
  };

  window.portfolioAnalytics = window.portfolioAnalytics || {};
  window.portfolioAnalytics.track = window.portfolioAnalytics.track || function (eventName, payload) {
    if (!PORTFOLIO_EVENTS.has(eventName)) return;
    window.gtag("event", eventName, allowlistedPayload(payload, PORTFOLIO_PROPERTIES));
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-portfolio-event]");
    if (!target) return;
    window.portfolioAnalytics.track(target.dataset.portfolioEvent, {
      location: target.dataset.analyticsLocation || "unknown",
      project: target.dataset.analyticsProject || "",
    });
  });

  logDebug("Tracking initialized");
})();
