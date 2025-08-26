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
  const card = document.querySelector('.duo-card');
  if (!card) return;

  const srcAttr = (card.getAttribute('data-src') || 'assets/data/duolingo.json').replace(/^\.\//, '');
  const url = srcAttr + (srcAttr.includes('?') ? '&' : '?') + 'v=' + Date.now();

  function render(data) {
    const days = Number(data?.streak?.days) || 0;
    card.querySelector('[data-days]').textContent = days;

    const langsWrap = card.querySelector('[data-langs]');
    if (langsWrap) {
      langsWrap.innerHTML = '';
      (data.languages || []).forEach(l => {
        const pill = document.createElement('span');
        pill.className = 'duo-pill';
        pill.textContent = l;
        langsWrap.appendChild(pill);
      });
    }

    const user = (data.username || '').trim();
    const a = card.querySelector('.duo-cta');
    if (user && a) a.href = 'https://www.duolingo.com/profile/' + encodeURIComponent(user);
  }

  function tryFallback() {
    const el = document.getElementById('duo-fallback');
    if (!el) return false;
    try {
      const data = JSON.parse(el.textContent || el.innerText || '{}');
      render(data);
      card.classList.add('duo--fallback');
      console.warn('[Duolingo] usando fallback embebido');
      return true;
    } catch (e) {
      console.error('[Duolingo] fallback inválido:', e);
      return false;
    }
  }

  console.log('[Duolingo] fetching:', url);

  fetch(url, { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status} — ${r.url}`);
      return r.json();
    })
    .then(render)
    .catch(err => {
      console.error('[Duolingo] widget error:', err);
      if (!tryFallback()) card.classList.add('duo--error');
    });
})();