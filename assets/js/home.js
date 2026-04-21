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

  const perfTargets = {
    lcp: document.querySelector('[data-perf-metric="lcp"]'),
    cls: document.querySelector('[data-perf-metric="cls"]'),
    inp: document.querySelector('[data-perf-metric="inp"]'),
    ttfb: document.querySelector('[data-perf-metric="ttfb"]'),
  };
  const perfNote = document.querySelector("[data-perf-note]");

  if (Object.values(perfTargets).some(Boolean)) {
    const state = {
      lcp: null,
      cls: 0,
      inp: null,
      ttfb: null,
    };

    const formatMetric = (key, value) => {
      if (value == null || Number.isNaN(value)) return "--";
      if (key === "cls") return value.toFixed(3);
      return value < 1000 ? `${Math.round(value)}ms` : `${(value / 1000).toFixed(2)}s`;
    };

    const renderMetrics = () => {
      Object.entries(perfTargets).forEach(([key, el]) => {
        if (!el) return;
        el.textContent = formatMetric(key, state[key]);
      });

      if (!perfNote) return;

      const missing = Object.entries(state)
        .filter(([, value]) => value == null)
        .map(([key]) => key.toUpperCase());

      perfNote.textContent = missing.length
        ? `Live data from this visit. Waiting on: ${missing.join(", ")}.`
        : "Live Core Web Vitals collected from this visit.";
    };

    const observePaintMetrics = () => {
      if (!("PerformanceObserver" in window)) {
        if (perfNote) {
          perfNote.textContent =
            "This browser does not expose live PerformanceObserver metrics.";
        }
        return;
      }

      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            state.lcp = lastEntry.startTime;
            renderMetrics();
          }
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              state.cls += entry.value;
            }
          }
          renderMetrics();
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });

        const inpObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const candidate = entry.duration || entry.processingEnd - entry.startTime;
            if (state.inp == null || candidate > state.inp) {
              state.inp = candidate;
            }
          }
          renderMetrics();
        });
        inpObserver.observe({ type: "event", buffered: true, durationThreshold: 16 });
      } catch {
        if (perfNote) {
          perfNote.textContent =
            "Some live performance metrics are not available in this browser.";
        }
      }
    };

    const navigationEntry = performance.getEntriesByType("navigation")[0];
    if (navigationEntry) {
      state.ttfb = navigationEntry.responseStart;
    }

    observePaintMetrics();
    renderMetrics();

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState === "hidden") {
          renderMetrics();
        }
      },
      { passive: true },
    );
  }
});
