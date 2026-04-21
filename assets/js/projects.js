document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // Project filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectSections = document.querySelectorAll(
    "section.project-section[data-category]",
  );

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter projects
      projectSections.forEach((section) => {
        const categories = section.getAttribute("data-category").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          section.classList.remove("project-filter-hidden");
        } else {
          section.classList.add("project-filter-hidden");
        }
      });
    });
  });

  if (window.Swiper) {
    const swipers = [];
    document.querySelectorAll(".project-swiper").forEach((el) => {
      const swiper = new Swiper(el, {
        loop: false,
        autoHeight: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
          dynamicBullets: false,
        },
        a11y: {
          enabled: true,
        },
      });
      swipers.push(swiper);
    });

    // Recalcular swipers al cambiar tamaño de ventana
    window.addEventListener("resize", () => {
      swipers.forEach((swiper) => swiper.update());
    });
  }

  const appleLottieHost = document.getElementById("apple-lottie");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (appleLottieHost && window.lottie) {
    const animation = window.lottie.loadAnimation({
      container: appleLottieHost,
      renderer: "svg",
      loop: !prefersReducedMotion,
      autoplay: true,
      path: "assets/animations/apple.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    if (prefersReducedMotion) {
      animation.addEventListener("DOMLoaded", () => {
        animation.goToAndStop(38, true);
      });
    }
  }
});
