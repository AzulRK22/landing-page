document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

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

  if (window.Swiper) {
    new Swiper(".hero-swiper", {
      loop: true,
      autoplay: prefersReduced
        ? false
        : {
            delay: 3800,
            disableOnInteraction: false,
          },
      speed: prefersReduced ? 0 : 700,
      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
      },
      pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
      },
      a11y: {
        enabled: true,
      },
    });
  }
});
