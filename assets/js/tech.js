/* ===== Nav toggle (sin dependencias) ===== */
(function () {
  const body = document.body;
  const nav = document.getElementById('nav');
  const btn = document.querySelector('.nav-toggle');
  const backdrop = document.querySelector('.nav-backdrop');

  function openNav(){ body.classList.add('nav-open'); btn?.setAttribute('aria-expanded','true'); backdrop?.removeAttribute('hidden'); }
  function closeNav(){ body.classList.remove('nav-open'); btn?.setAttribute('aria-expanded','false'); backdrop?.setAttribute('hidden',''); }
  function toggleNav(){ body.classList.contains('nav-open') ? closeNav() : openNav(); }

  btn?.addEventListener('click', toggleNav);
  backdrop?.addEventListener('click', closeNav);
  nav?.querySelectorAll('a[href]').forEach(a=>{
    a.addEventListener('click', ()=>{ if (window.matchMedia('(max-width:980px)').matches) closeNav(); });
  });

  const mq = window.matchMedia('(min-width:981px)');
  (mq.addEventListener ? mq.addEventListener('change', h=>h.matches && closeNav())
                       : mq.addListener(h=>h.matches && closeNav()));
})();
/* ===== Scroll reveal simple ===== */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el=>io.observe(el));
})();

/* ===== Duolingo live card ===== */
(function () {
  const card = document.querySelector(".duo-card");
  if (!card) return;

  const $streak = card.querySelector("[data-duo-streak]");
  const $langs  = card.querySelector("[data-duo-langs]");
  const $btn    = card.querySelector(".duo-btn");

  function plural(n, one, many) {
    return `${n} ${n === 1 ? one : many}`;
  }

  function render(data = {}) {
    const streak    = Number.isFinite(+data.streak) ? +data.streak : 0;
    const languages = Array.isArray(data.languages) ? data.languages : [];
    const profileUrl =
      data.profileUrl
        || (data.profile ? `https://www.duolingo.com/profile/${encodeURIComponent(data.profile)}` : 'https://www.duolingo.com/');

    // streak
    if ($streak) $streak.textContent = plural(streak, 'day streak', 'day streak');

    // languages
    if ($langs) {
      $langs.innerHTML = "";
      if (languages.length) {
        languages.slice(0, 12).forEach(txt => {
          const li = document.createElement("li");
          li.textContent = txt;
          $langs.appendChild(li);
        });
        card.classList.remove('is-empty');
      } else {
        const li = document.createElement("li");
        li.textContent = "—";
        li.style.opacity = ".7";
        $langs.appendChild(li);
        card.classList.add('is-empty'); // por si quieres estilizar estado vacío en CSS
      }
    }

    // button
    if ($btn && profileUrl) {
      $btn.href = profileUrl;
      $btn.target = "_blank";
      $btn.rel = "noopener";
    }
  }

  fetch(`assets/data/duolingo.json?ts=${Date.now()}`, { cache: "no-store" })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(render)
    .catch(err => {
      console.warn("[Duolingo] widget error:", err);
      // Fallback seguro (no rompe la UI)
      render({});
    });
})();