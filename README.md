# AzulRK Portfolio

Static personal portfolio for [azulrk.com](https://www.azulrk.com), built with modular HTML, CSS, and vanilla JavaScript.

## Pages

- `index.html`: home page, experience, certifications, gallery, featured work, and live session performance metrics
- `projects.html`: case-study style projects page with Swiper galleries and the "What's next" native iOS concept section
- `tech.html`: YouTube, TikTok, and Duolingo stats
- `resume.html`: PDF resume viewer and download page

## Current Site Flow

The site now follows one shared structure across every page:

1. `site-chrome`
2. page-specific hero or intro
3. main content sections
4. shared footer

Shared behavior:

- unified sticky header + nav
- mobile drawer navigation via `assets/js/nav.js`
- shared background image from `images/Background/bg.jpg`
- reveal-on-scroll sections
- GA4 page and engagement tracking via `assets/js/analytics.js`

## Tech Stack

- HTML5
- CSS3 with page-level stylesheets
- Vanilla JavaScript
- Swiper CDN for project galleries
- Lottie CDN for the Apple animation in `projects.html`
- Google Analytics 4

## File Structure

```text
assets/
  animations/
    apple.json
  css/
    base.css
    components.css
    layout.css
    home.css
    projects.css
    tech.css
    resume.css
    noscript.css
  data/
    duolingo.json
  js/
    analytics.js
    home.js
    nav.js
    projects.js
    tech.js
  sass/
    ...
docs/
  AGRK-CV-IN-2026.pdf
images/
  ...
scripts/
  update-duo.mjs
index.html
projects.html
tech.html
resume.html
```

## Page Scripts

- `assets/js/nav.js`: shared nav drawer behavior
- `assets/js/home.js`: reveal effects and live Web Vitals-style metrics for the home page
- `assets/js/projects.js`: filters, Swiper setup, and Apple Lottie setup
- `assets/js/tech.js`: reveal effects and Duolingo widget rendering
- `assets/js/analytics.js`: GA4 custom events for outbound links and engagement

## Assets In Use

- `assets/animations/apple.json`: animation used in the "What's next" section
- `assets/data/duolingo.json`: local data source rendered in `tech.html`
- `docs/AGRK-CV-IN-2026.pdf`: embedded and downloadable resume
- `images/Background/bg.jpg`: global site background

## Local Development

This is a static site, so any simple local server works.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Duolingo Data Refresh

The Duolingo widget reads from `assets/data/duolingo.json`.

To regenerate it, use:

```bash
node scripts/update-duo.mjs
```

Notes:

- the script first tries Duolingo's public API
- if that fails, it falls back to Playwright login flow
- environment variables such as `DUO_PROFILE`, `DUO_USER`, and `DUO_PASS` may be required

## Analytics

GA4 is loaded inline in each page head and extended by `assets/js/analytics.js`.

Tracked events include:

- `projects_view`
- `shop_link_click`
- `engaged_10s`

## Maintenance Notes

- `assets/sass/` contains legacy HTML5 UP Sass sources plus project-specific adjustments
- `assets/css/` is the runtime source actually loaded by the pages
- if you rebuild Sass, keep `assets/sass/noscript.scss` aligned with the current Font Awesome import name
- `projects.html` depends on Swiper and Lottie CDNs
- `tech.html` depends on TikTok embeds and local Duolingo JSON data

## Recommended Next Improvements

- Add a short HTML resume summary before the embedded PDF for SEO and accessibility
- Move repeated GA inline setup into a shared include/build step if the site ever gets templated
- Add a small content fallback for TikTok if embeds are blocked
- Decide whether the legacy unused theme images in `images/Background/` should be archived or removed

## Contact

- Email: `azularamk@gmail.com`
- LinkedIn: <https://www.linkedin.com/in/azul-grisel-ramirez-kuri-7a213018a/>
- GitHub: <https://github.com/AzulRK22>

© Azul Grisel Ramirez Kuri. Base design originally derived from HTML5 UP Massively.
