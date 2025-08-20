// index.js: solo para la home (sin jQuery). Accesible y con reduced-motion.

document.addEventListener('DOMContentLoaded', () => {
  // 1) Fecha de hoy
  const dateEl = document.querySelector('.date');
  if (dateEl) {
    const fmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    dateEl.textContent = fmt.format(new Date());
  }

  // 2) Rotación de títulos (respeta reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ids = ['title1', 'title2', 'title3'];
  let idx = 0;
  function showTitle(i){
    ids.forEach(id => document.getElementById(id)?.classList.remove('show'));
    document.getElementById(ids[i])?.classList.add('show');
  }
  if (!prefersReduced) {
    showTitle(0);
    setInterval(() => {
      idx = (idx + 1) % ids.length;
      showTitle(idx);
    }, 3000);
  } else {
    // Si reduced-motion, muestra todos (sin animación)
    ids.forEach(id => document.getElementById(id)?.classList.add('show'));
  }

  // 3) Swiper (autoplay deshabilitado si reduced-motion)
  if (window.Swiper) {
    const swiper = new Swiper('.hero-swiper', {
      loop: true,
      autoplay: prefersReduced ? false : { delay: 3500, disableOnInteraction: false },
      speed: prefersReduced ? 0 : 650,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true },
      a11y: {
        enabled: true,
        containerMessage: 'Image carousel',
        nextSlideMessage: 'Next slide',
        prevSlideMessage: 'Previous slide',
        slideLabelMessage: '{{index}} / {{slidesLength}}'
      }
    });
  }

  // 4) Header compacto al hacer scroll (opcional, sutil)
  const header = document.getElementById('header');
  let last = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY || 0;
    if (!header) return;
    if (y > 8 && last <= 8) header.classList.add('scrolled');
    if (y <= 8 && last > 8) header.classList.remove('scrolled');
    last = y;
  });
});
