# AzulRK — Portfolio and Product Work

The source behind [azulrk.com](https://www.azulrk.com), my personal portfolio and the public home of the products, experiments and engineering work I am building from Mexico City.

I’m a software engineer focused on creating clear, polished experiences across **frontend, native mobile, AI-assisted products and practical technology**.

This portfolio brings those areas together through real projects, product stories, technical evidence and the decisions behind the work.

[Visit the portfolio](https://www.azulrk.com) · [Explore projects](https://www.azulrk.com/projects.html) · [View engineering and media](https://www.azulrk.com/tech.html)

---

## What this portfolio represents

This is not only a project gallery.

It documents my evolution from frontend-focused development toward broader **product engineering**: understanding a problem, defining the experience, building the interface, connecting the necessary systems and turning the result into something people can actually use.

Across the site you’ll find:

* independent products and detailed case studies;
* professional and enterprise engineering experience;
* native iOS, web, cloud and AI-assisted work;
* hackathon projects focused on sustainability and mobility;
* technical content and public learning;
* certifications, events and professional milestones;
* the public product site for CloseCut.

---

## Selected products

### CloseCut

A private, local-first iOS journal for movies and series.

Rather than reducing every watch to a score or public review, CloseCut helps people remember the personal context around it: when they watched it, how it felt, what stayed with them and what they might want to watch next.

The product includes a native SwiftUI application and its own cinematic public website.

[Visit CloseCut](https://www.azulrk.com/closecut/)

---

### HoneyRoute

An offline-first apiary intelligence experience designed around the conditions in which beekeepers actually work.

It combines field observations, environmental context, camera-assisted inputs and accessible decision support in a PWA that can remain useful when connectivity is limited.

---

### EcoVentus

A UAV monitoring platform that helps translate drone and environmental data into understandable soil and land insights.

The project explores how geospatial interfaces and cloud-connected systems can support more informed sustainability decisions.

---

### CongestionAI

A mobility planning product that converts traffic and route information into a clearer recommendation about when to leave.

Its focus is not simply visualizing congestion, but helping someone make a practical decision with less uncertainty.

---

## Repository experience

The portfolio includes four primary areas:

| Area                    | Purpose                                                                  |
| ----------------------- | ------------------------------------------------------------------------ |
| **Home**                | Positioning, selected products, experience and professional evidence     |
| **Projects**            | Deeper product stories, outcomes, screenshots and implementation context |
| **Engineering & Media** | Capabilities, technical content and public learning                      |
| **CloseCut**            | Independent public product site, support and legal information           |

---

## Design and engineering approach

The website is intentionally lightweight.

It uses semantic HTML, modular CSS and vanilla JavaScript so that the public experience remains fast, portable and easy to maintain without introducing a framework only for the sake of using one.

The implementation prioritizes:

* responsive layouts;
* semantic structure;
* keyboard navigation;
* reduced-motion support;
* optimized images;
* progressive enhancement;
* clear project storytelling;
* straightforward GitHub Pages deployment.

---

## Technology

* Semantic HTML5
* Modular CSS
* Vanilla JavaScript
* GitHub Pages
* WebP image optimization
* Swiper and Lottie for selected project experiences
* Google Analytics on the main portfolio
* GitHub Actions for automated public-data updates

The CloseCut microsite does not include advertising pixels or product analytics.

---

## Project structure

```text
.
├── assets/              Shared styles, scripts and local data
├── closecut/            CloseCut public product website
├── docs/                Resume and public documents
├── images/              Portfolio imagery
├── scripts/             Maintenance and validation utilities
├── index.html           Portfolio home
├── projects.html        Product and project case studies
├── tech.html            Engineering capabilities and media
└── resume.html          Accessible resume page
```

---

## Run locally

The site has no package installation or build requirement.

Start a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

* Portfolio: `http://localhost:8000/`
* CloseCut: `http://localhost:8000/closecut/`

---

## Quality checks

Before publishing changes:

```bash
git diff --check
node scripts/audit-site.mjs
node --check closecut/closecut.js
node --check assets/js/analytics.js
node --check assets/js/home.js
node --check assets/js/projects.js
node --check assets/js/tech.js
xmllint --noout sitemap.xml
```

Changes should also be reviewed across mobile and desktop widths, keyboard navigation, reduced-motion preferences, public routes, product links and legal pages.

---

## About me

I’m Azul Grisel Ramírez Kuri, a software engineer based in Mexico City.

I’m interested in product engineering, frontend, native mobile, AI-assisted experiences and technology that helps people make clearer decisions.

* [Portfolio](https://www.azulrk.com)
* [Projects](https://www.azulrk.com/projects.html)
* [LinkedIn](https://www.linkedin.com/in/azulrk/)
* [GitHub](https://github.com/AzulRK22)

---

© Azul Grisel Ramírez Kuri

