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
(function () {
  const card = document.querySelector(".duo-card");
  if (!card) return;

  const $streak = card.querySelector("[data-duo-streak]");
  const $langs  = card.querySelector("[data-duo-langs]");
  const $btn    = card.querySelector(".duo-btn");

  function render({ streak = 0, languages = [], profile = null } = {}) {
    $streak.textContent = `${streak} day streak`;
    $langs.innerHTML = "";

    if (languages.length) {
      languages.slice(0, 12).forEach(txt => {
        const li = document.createElement("li");
        li.textContent = txt;
        $langs.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "—";
      li.style.opacity = ".7";
      $langs.appendChild(li);
    }

    if (profile) {
      $btn.href = `https://www.duolingo.com/profile/${encodeURIComponent(profile)}`;
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
      // deja valores en blanco pero visibles
      render({});
    });
})();