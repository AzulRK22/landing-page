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

/* ===== Duolingo widget ===== */
(function () {
  const card = document.querySelector(".duo-card");
  if (!card) return;

  const $streak = card.querySelector("[data-duo-streak]");
  const $langs  = card.querySelector("[data-duo-langs]");
  const $stats  = card.querySelector("[data-duo-stats]");
  const $btn    = card.querySelector(".duo-btn");

  const nf = new Intl.NumberFormat('en-US');

  const FLAG = {
    english:'🇺🇸','en':'🇺🇸','en-us':'🇺🇸','en-gb':'🇬🇧',
    spanish:'🇪🇸','es':'🇪🇸',
    french:'🇫🇷','fr':'🇫🇷',
    german:'🇩🇪','de':'🇩🇪',
    italian:'🇮🇹','it':'🇮🇹',
    portuguese:'🇵🇹','pt':'🇵🇹','pt-br':'🇧🇷',
    japanese:'🇯🇵','ja':'🇯🇵',
    korean:'🇰🇷','ko':'🇰🇷',
    chinese:'🇨🇳','zh':'🇨🇳','zh-cn':'🇨🇳','zh-tw':'🇹🇼',
    irish:'🇮🇪','ga':'🇮🇪',
    swedish:'🇸🇪','sv':'🇸🇪',
    dutch:'🇳🇱','nl':'🇳🇱',
    norwegian:'🇳🇴','no':'🇳🇴',
    danish:'🇩🇰','da':'🇩🇰',
    finnish:'🇫🇮','fi':'🇫🇮',
    polish:'🇵🇱','pl':'🇵🇱',
    turkish:'🇹🇷','tr':'🇹🇷',
    arabic:'🇸🇦','ar':'🇸🇦',
    hebrew:'🇮🇱','he':'🇮🇱',
    greek:'🇬🇷','el':'🇬🇷'
  };
  function flagFor(key=''){
    const k = String(key).trim().toLowerCase();
    if (FLAG[k]) return FLAG[k];
    const first = k.split(/\s|-/)[0];
    return FLAG[first] || '🏁';
  }

  function makeLangPill(lang){
    const li = document.createElement('li');
    li.className = 'lang-pill';
    const flag = flagFor(lang.code || lang.name);
    const name = lang.name || (lang.code || '').toUpperCase();
    const xp   = (lang.xp != null) ? `${nf.format(lang.xp)} XP` : null;
    const lvl  = (lang.level != null) ? `L${lang.level}` : null;
    li.innerHTML = `
      <span class="flag" aria-hidden="true">${flag}</span>
      <span class="name">${name}</span>
      ${xp ? `<span class="xp">${xp}</span>` : ``}
      ${lvl ? `<span class="lvl">${lvl}</span>` : ``}
    `;
    return li;
  }

  function renderStats({ totalXp = null, league = null, top3 = null, diamondWeeks = null } = {}){
    if (!$stats) return;
    $stats.innerHTML = '';
    const add = (k, icon, text) => {
      if (text == null || text === '') return;
      const li = document.createElement('li');
      li.className = 'stat-chip';
      li.innerHTML = `<i>${icon}</i> ${text}`;
      li.dataset.kind = k;
      $stats.appendChild(li);
    };
    if (totalXp != null) add('xp', '⭐', `${nf.format(totalXp)} XP`);
    if (league)        add('league', '💎', league);
    if (diamondWeeks!=null) add('weeks','💠', `${diamondWeeks} wks`);
    if (top3 != null)  add('top3', '🥇', `${top3}× top-3`);
  }

  function render({ streak = 0, languages = [], profile = null, stats = {} } = {}) {
    $streak.textContent = `${nf.format(streak)} day streak`;

    $langs.innerHTML = '';
    if (languages.length) {
      languages.forEach(l => $langs.appendChild(makeLangPill(l)));
    } else {
      const li = document.createElement('li');
      li.className = 'lang-pill';
      li.innerHTML = `<span class="flag">🏁</span><span class="name">—</span>`;
      $langs.appendChild(li);
    }

    // stats (si falta totalXp, se suma desde idiomas)
    const sumXp = languages.reduce((a,l)=> a + (Number(l.xp)||0), 0);
    const s = {
      totalXp: (stats && Number(stats.totalXp)) || (sumXp || null),
      league : stats?.league || null,
      top3   : (stats?.top3 ?? null),
      diamondWeeks: (stats?.diamondWeeks ?? null)
    };
    renderStats(s);

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
      render({});
    });
})();