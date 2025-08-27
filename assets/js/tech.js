/* ===== Nav toggle (sin dependencias) ===== */
(function () {
  const body = document.body;
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".nav-toggle");
  const backdrop = document.querySelector(".nav-backdrop");

  function openNav() {
    body.classList.add("nav-open");
    btn?.setAttribute("aria-expanded", "true");
    backdrop?.removeAttribute("hidden");
  }
  function closeNav() {
    body.classList.remove("nav-open");
    btn?.setAttribute("aria-expanded", "false");
    backdrop?.setAttribute("hidden", "");
  }
  function toggleNav() {
    body.classList.contains("nav-open") ? closeNav() : openNav();
  }

  btn?.addEventListener("click", toggleNav);
  backdrop?.addEventListener("click", closeNav);
  nav?.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width:980px)").matches) closeNav();
    });
  });

  const mq = window.matchMedia("(min-width:981px)");
  mq.addEventListener
    ? mq.addEventListener("change", (h) => h.matches && closeNav())
    : mq.addListener((h) => h.matches && closeNav());
})();
/* ===== Scroll reveal simple ===== */
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
})();
/* ===== Duolingo widget (compatible con tu CSS existente) ===== */
(function () {
  const card = document.querySelector(".duo-card");
  if (!card) return;

  const $streak = card.querySelector("[data-duo-streak]");
  const $langs  = card.querySelector("[data-duo-langs]");

  const $statsBlock = card.querySelector('[data-block="stats"]');
  const $statsList  = card.querySelector("[data-duo-stats]");

  const $achBlock = card.querySelector('[data-block="achievements"]');
  const $achList  = card.querySelector("[data-duo-achievements]");

  const $btn    = card.querySelector(".duo-btn");
  const nf = new Intl.NumberFormat();

  // Bandera por idioma (título en inglés o español)
  function flagEmoji(label = "") {
    const s = label.trim().toLowerCase();
    if (/french|francés/.test(s))   return "🇫🇷";
    if (/english|inglés/.test(s))   return "🇺🇸";
    if (/spanish|español/.test(s))  return "🇪🇸";
    if (/german|alemán/.test(s))    return "🇩🇪";
    if (/italian|italiano/.test(s)) return "🇮🇹";
    if (/portuguese|portugués/.test(s)) return "🇵🇹";
    if (/brazil/.test(s))           return "🇧🇷";
    if (/chinese|chino/.test(s))    return "🇨🇳";
    if (/japanese|japon[eé]s/.test(s)) return "🇯🇵";
    if (/korean|coreano/.test(s))   return "🇰🇷";
    if (/hindi/.test(s))            return "🇮🇳";
    if (/arabic|árabe/.test(s))     return "🇸🇦";
    return "🏳️";
  }

  function render(data = {}) {
    const {
      streak = 0,
      languages = [],
      profile,
      profileUrl,
      totalXp,
      league,
      top3Count,
      achievements = []
    } = data;

    // Streak: el HTML ya tiene el texto "day streak"
    $streak.textContent = nf.format(streak);

    // Botón de perfil
    if (profileUrl) {
      $btn.href = profileUrl;
      $btn.target = "_blank";
      $btn.rel = "noopener";
    } else if (profile) {
      $btn.href = `https://www.duolingo.com/profile/${encodeURIComponent(profile)}`;
    }

    // ===== Idiomas (usa .duo-lang .flag .name .xp [+ .lvl si viene]) =====
    $langs.innerHTML = "";
    const items = languages.map(item =>
      typeof item === "string"
        ? { title: item, xp: undefined, level: undefined, crowns: undefined }
        : {
            title: item.title || item.label || item.lang,
            xp: Number(item.xp ?? item.experience ?? item.xpGained ?? 0) || 0,
            level: item.level ?? item.crowns ?? item.crownLevel
          }
    );

    items.forEach(({ title, xp, level }) => {
      if (!title) return;
      const li = document.createElement("li");
      li.className = "duo-lang";
      li.innerHTML = `
        <span class="flag">${flagEmoji(title)}</span>
        <span class="name">${title}</span>
        ${level ? `<span class="lvl">${nf.format(level)}</span>` : ""}
        ${typeof xp === "number" && xp > 0 ? `<span class="xp">${nf.format(xp)} XP</span>` : ""}
      `;
      $langs.appendChild(li);
    });

    // ===== Stats (usa .duo-stats + .duo-stat) =====
    $statsList.innerHTML = "";
    let hasStats = false;

    if (typeof totalXp === "number") {
      const li = document.createElement("li");
      li.className = "duo-stat";
      li.innerHTML = `<span class="ico">⚡</span><span>${nf.format(totalXp)} XP total</span>`;
      $statsList.appendChild(li);
      hasStats = true;
    }
    if (league) {
      const li = document.createElement("li");
      li.className = "duo-stat";
      li.innerHTML = `<span class="ico">🏆</span><span>${league} league</span>`;
      $statsList.appendChild(li);
      hasStats = true;
    }
    if (typeof top3Count === "number") {
      const li = document.createElement("li");
      li.className = "duo-stat";
      li.innerHTML = `<span class="ico">🏅</span><span>${nf.format(top3Count)}× top-3 finishes</span>`;
      $statsList.appendChild(li);
      hasStats = true;
    }
    $statsBlock.hidden = !hasStats;

    // ===== Achievements (opcional) =====
    $achList.innerHTML = "";
    let hasAch = false;
    (achievements || []).forEach(a => {
      const name = a?.name || a?.title;
      if (!name) return;
      const li = document.createElement("li");
      li.className = "duo-badge";
      li.textContent = name;
      $achList.appendChild(li);
      hasAch = true;
    });
    $achBlock.hidden = !hasAch;
  }

  fetch(`assets/data/duolingo.json?ts=${Date.now()}`, { cache: "no-store" })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then(render)
    .catch(err => { console.warn("[Duolingo] widget error:", err); render({}); });
})();