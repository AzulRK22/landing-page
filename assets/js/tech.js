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
// ===== Duolingo card (espera a que el DOM esté listo) =====
(function () {
  const card = document.querySelector(".duo-card");
  if (!card) return;

  const $days = card.querySelector("[data-days]");
  const $langs = card.querySelector("[data-langs]");
  const src = card.getAttribute("data-src") || "assets/data/duolingo.json";

  function render({ streak = 0, languages = [], profile, profileUrl } = {}) {
    // muestra 0 explícito
    $days.textContent = Number.isFinite(streak) ? String(streak) : "0";

    $langs.innerHTML = "";
    (languages && languages.length ? languages : ["—"]).slice(0, 18).forEach(txt => {
      const span = document.createElement("span");
      span.className = "pill";
      span.textContent = txt;
      $langs.appendChild(span);
    });

    const a = card.querySelector(".duo-cta");
    if (a && (profileUrl || profile)) {
      a.href = profileUrl || `https://www.duolingo.com/profile/${encodeURIComponent(profile)}`;
    }
  }

  fetch(`${src}?ts=${Date.now()}`, { cache: "no-store" })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
    .then(render)
    .catch(e => { console.warn("[Duolingo] widget error:", e); render({}); });
})();