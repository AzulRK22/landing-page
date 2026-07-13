# AzulRK — Frontend Engineer & Product Builder

The source behind [www.azulrk.com](https://www.azulrk.com): the personal portfolio of Azul Grisel Ramirez Kuri, a frontend software engineer building enterprise systems, native mobile products, award-winning hackathon projects, and technical content from Mexico City.

[Visit the portfolio](https://www.azulrk.com) · [View projects](https://www.azulrk.com/projects.html) · [Tech & media](https://www.azulrk.com/tech.html) · [Resume](https://www.azulrk.com/resume.html)

## About this repository

This repository brings together the different sides of my work:

- **Professional experience** across frontend engineering, enterprise delivery, Android, and product development.
- **Selected products and case studies** spanning web, AI-assisted tools, mobility, environmental intelligence, commerce, and native iOS.
- **Hackathon work and awards**, including placements at HDC México, HDC Brasil, and HackNation.
- **Technical advocacy** through YouTube, TikTok, learning activity, and practical product storytelling.
- **Credentials and resume**, with certifications across frontend, mobile, cloud, and software engineering.
- **Independent products**, including CloseCut and its dedicated public microsite.

The project is intentionally lightweight: semantic HTML, modular CSS, and vanilla JavaScript deployed through GitHub Pages. There is no framework, package manager, bundler, or build step required for the public site.

## Selected work

| Project | Focus | Highlight |
| --- | --- | --- |
| **CloseCut** | Native iOS product · SwiftUI · SwiftData · Firebase | Private, local-first Journal for movies and series; currently in TestFlight beta |
| **EcoVentus** | UAV monitoring · React · Python · Huawei Cloud | 2nd Place at HDC México 2024 |
| **HoneyRoute** | Offline-first PWA · AI-assisted diagnostics · Rural technology | 2nd Place at HDC Brasil 2025 |
| **CongestionAI** | Mobility planning · Next.js · TypeScript · Google Routes | Top 12 at HackNation |
| **The Signature Experience** | Editorial product experience · Fragrance discovery | Immersive identity, comparison, and confidence experience |
| **Android Commerce Platform** | Kotlin · Java · REST APIs · Scrum | Production-focused marketplace flows built at Xolotl Creative Labs |

Detailed stories, screenshots, architecture notes, outcomes, and project links live on the [Projects page](https://www.azulrk.com/projects.html).

## Portfolio experience

The main site is designed as more than a project gallery. It includes:

- professional experience and responsibilities;
- skills across React, JavaScript, TypeScript, SwiftUI, SwiftData, Kotlin, Firebase, REST APIs, and cloud fundamentals;
- measurable achievements and hackathon outcomes;
- an editorial “What I bring” section;
- technical advocacy and media;
- photography and event highlights;
- Meta, AWS, Google, and Infosys certifications;
- an accessible HTML resume summary and downloadable PDF;
- responsive project galleries and progressive enhancement.

## Independent product: CloseCut

CloseCut is one part of the wider portfolio: a private, local-first iOS Journal that helps people remember what they watched, why it mattered, and what to watch next. It is currently available as an internal TestFlight beta.

Its independent `/closecut/` microsite includes:

- a responsive product landing page built with real app screenshots;
- Private Journal, Quick Add, Timeline, QuickPick, Want to Watch, Circles, Watch Plans, and Cinema Memories;
- accessible mobile navigation and reduced-motion support;
- Privacy Policy in English and Spanish;
- Terms of Use and Support;
- real TestFlight calls to action;
- TMDB attribution;
- Open Graph, Twitter, canonical, Apple, and JSON-LD metadata.

The product site has its own dark, cinematic visual system in `closecut/closecut.css`, while remaining connected to the main portfolio through navigation and shared deployment infrastructure.

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Portfolio home, experience, certifications, gallery, and featured projects |
| `/projects.html` | Detailed project stories and current CloseCut product status |
| `/tech.html` | Technical content and learning activity |
| `/resume.html` | Embedded and downloadable resume |
| `/closecut/` | Official CloseCut marketing site |
| `/closecut/privacy/` | CloseCut Privacy Policy in English |
| `/closecut/privacy/es/` | Política de Privacidad de CloseCut en español |
| `/closecut/terms/` | CloseCut Terms of Use |
| `/closecut/support/` | CloseCut support and beta feedback guidance |

## Technology

- HTML5 with semantic landmarks and accessible navigation
- Modular CSS with shared foundations and page-specific styles
- Vanilla JavaScript with progressive enhancement
- Responsive WebP product imagery
- Swiper and Lottie on the Projects page
- Google Analytics 4 on the main portfolio
- GitHub Pages with the custom domain `www.azulrk.com`

CloseCut does not add analytics, advertising pixels, or third-party UI dependencies.

## Repository structure

```text
.
├── assets/
│   ├── animations/          # Lottie assets
│   ├── css/                 # Shared and page-level portfolio styles
│   ├── data/                # Local content data
│   ├── js/                  # Portfolio behavior and analytics
│   └── sass/                # Legacy HTML5 UP Sass sources
├── closecut/
│   ├── assets/
│   │   ├── screenshots/     # Optimized desktop and mobile WebP pairs
│   │   └── TMDBLogo.png
│   ├── privacy/
│   │   └── es/
│   ├── support/
│   ├── terms/
│   ├── closecut.css         # CloseCut marketing design system
│   ├── closecut.js          # Navigation, TestFlight URL, and reveals
│   └── index.html
├── docs/                     # Resume PDF
├── images/                   # Portfolio and shared brand imagery
├── scripts/
│   ├── convert_images_to_webp.py
│   └── update-duo.mjs
├── index.html
├── projects.html
├── resume.html
├── tech.html
├── Robots.txt
└── Sitemap.xml
```

## Local development

No installation is required. Start any static file server from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

- Portfolio: <http://localhost:8000/>
- CloseCut: <http://localhost:8000/closecut/>

Using a server instead of opening files directly ensures folder routes, relative assets, and navigation behave like GitHub Pages.

## CloseCut asset workflow

Real iOS screenshots are converted into optimized full-size and mobile WebP variants with the existing conversion script:

```bash
python3 scripts/convert_images_to_webp.py --closecut-screenshots
```

The optional conversion utility requires [Pillow](https://pillow.readthedocs.io/) in the active Python environment. The website itself does not depend on Python or Pillow at runtime.

Generated assets use descriptive kebab-case names inside `closecut/assets/screenshots/`. Source PNG screenshots are retained locally as conversion masters and ignored by Git.

The public TestFlight URL for the microsite is centralized in `closecut/closecut.js`. Update `TESTFLIGHT_URL` there if the beta destination changes; every element marked with `data-testflight-link` reads from that constant.

## Content and maintenance

### Portfolio scripts

- `assets/js/nav.js` — shared mobile navigation.
- `assets/js/home.js` — home reveals and performance metrics.
- `assets/js/projects.js` — project filters, Swiper, and Lottie setup.
- `assets/js/tech.js` — content reveals and Duolingo rendering.
- `assets/js/analytics.js` — portfolio engagement and outbound-link events.

### Duolingo data

The widget reads from `assets/data/duolingo.json`. Refresh it with:

```bash
node scripts/update-duo.mjs
```

The script tries the public endpoint first and can fall back to a Playwright login flow. That fallback requires Playwright to be available locally. Environment variables such as `DUO_PROFILE`, `DUO_USER`, and `DUO_PASS` may be required and must never be committed.

### Styling

- Runtime styles live in `assets/css/` and `closecut/closecut.css`.
- `assets/sass/` contains the original HTML5 UP sources and legacy adjustments.
- The portfolio background is `images/Background/bg.webp`.
- Rebuilding the legacy Sass is not required for normal content or CloseCut maintenance.

## Release checklist

Before publishing changes:

```bash
git diff --check
node --check closecut/closecut.js
node --check assets/js/home.js
node --check assets/js/projects.js
node --check assets/js/tech.js
xmllint --noout Sitemap.xml
```

Also verify:

- local routes and relative assets;
- mobile navigation and keyboard focus;
- 320 px through 1440 px layouts without horizontal overflow;
- portfolio cards, galleries, embeds, and resume access;
- `prefers-reduced-motion` behavior;
- Privacy, Terms, and Support links;
- the public TestFlight destination;
- canonical URLs, sitemap entries, and robots configuration;
- that no credentials, tester data, or source-only assets are staged.

## Contact

- Website: [www.azulrk.com](https://www.azulrk.com)
- Email: [azularamk@gmail.com](mailto:azularamk@gmail.com)
- LinkedIn: [Azul Grisel Ramirez Kuri](https://www.linkedin.com/in/azul-grisel-ramirez-kuri-7a213018a/)
- GitHub: [@AzulRK22](https://github.com/AzulRK22)

---

© Azul Grisel Ramirez Kuri. Portfolio foundation originally derived from [HTML5 UP Massively](https://html5up.net/massively).
