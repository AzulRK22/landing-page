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
  const card    = document.querySelector(".duo-card");
  if (!card) return;

  const $streak = card.querySelector("[data-duo-streak]");
  const $langs  = card.querySelector("[data-duo-langs]");
  const $btn    = card.querySelector(".duo-btn");
  const $statsB = card.querySelector('[data-block="stats"]');
  const $stats  = card.querySelector("[data-duo-stats]");
  const $achsB  = card.querySelector('[data-block="achievements"]');
  const $achs   = card.querySelector("[data-duo-achievements]");

  // Mapa sencillo de banderas por idioma
  const FLAG = {
    english: "🇺🇸",
    spanish: "🇪🇸",
    french:  "🇫🇷",
    german:  "🇩🇪",
    italian: "🇮🇹",
    portuguese: "🇧🇷",
    japanese: "🇯🇵",
    korean: "🇰🇷",
    chinese: "🇨🇳"
  };

  const normLang = (item) => {
    if (!item) return null;
    if (typeof item === "string") {
      const key = item.toLowerCase();
      return { name: item, code: key, flag: FLAG[key] || "🏳️", level: null, xp: null };
    }
    // objeto enriquecido: {name, code, level, xp, flag?}
    const key = (item.code || item.name || "").toLowerCase();
    return {
      name: item.name || item.code || "—",
      code: key,
      flag: item.flag || FLAG[key] || "🏳️",
      level: item.level ?? null,
      xp: item.xp ?? null
    };
  };

  function render(data = {}) {
    const { streak = 0, languages = [], profile } = data;

    // Streak
    $streak.textContent = `${streak}`;

    // Profile link
    if (profile) {
      $btn.href = `https://www.duolingo.com/profile/${encodeURIComponent(profile)}`;
      $btn.target = "_blank";
      $btn.rel = "noopener";
    }

    // Languages (pills)
    $langs.innerHTML = "";
    const langs = (languages || []).map(normLang).filter(Boolean);
    if (!langs.length) {
      const li = document.createElement("li");
      li.textContent = "—";
      li.style.opacity = ".7";
      $langs.appendChild(li);
    } else {
      langs.forEach(l => {
        const li = document.createElement("li");
        li.className = "duo-lang";
        li.innerHTML = `
          <span class="flag" aria-hidden="true">${l.flag}</span>
          <span class="name">${l.name}</span>
          ${l.level != null ? `<span class="lvl">L${l.level}</span>` : ""}
          ${l.xp != null ? `<span class="xp">${new Intl.NumberFormat().format(l.xp)} XP</span>` : ""}
        `;
        $langs.appendChild(li);
      });
    }

    // Optional: stats
    if (data.stats && $stats && $statsB) {
      $stats.innerHTML = "";
      const items = [];
      if (typeof data.stats.totalXp === "number")
        items.push({ ico:"⚡️", txt:`${new Intl.NumberFormat().format(data.stats.totalXp)} XP` });
      if (data.stats.league)
        items.push({ ico:"🏆", txt:`${data.stats.league} league` });
      if (typeof data.stats.top3 === "number")
        items.push({ ico:"🥉", txt:`Top 3: ${data.stats.top3}x` });

      if (items.length) {
        items.forEach(s=>{
          const li = document.createElement("li");
          li.className = "duo-stat";
          li.innerHTML  = `<span class="ico" aria-hidden="true">${s.ico}</span><span>${s.txt}</span>`;
          $stats.appendChild(li);
        });
        $statsB.hidden = false;
      } else {
        $statsB.hidden = true;
      }
    }

    // Optional: achievements
    if (Array.isArray(data.achievements) && $achs && $achsB) {
      $achs.innerHTML = "";
      data.achievements.slice(0, 6).forEach(a=>{
        const li = document.createElement("li");
        li.className = "duo-badge";
        li.textContent = a.name || "Achievement";
        $achs.appendChild(li);
      });
      $achsB.hidden = $achs.childElementCount === 0;
    }
  }

  fetch(`assets/data/duolingo.json?ts=${Date.now()}`, { cache: "no-store" })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then(render)
    .catch(err => {
      console.warn("[Duolingo] widget error:", err);
      render({}); // fallback visible pero vacío
    });
})();