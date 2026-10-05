# Yunxiang Ma · Portfolio

A bilingual React + Vite portfolio with a quiet, single-screen entrance and separate pages for work, practice, and background. The About page also includes the journey map.

## Run locally

Use Node.js 20 (see `.nvmrc`) and the existing npm lockfile:

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm test
npm run build
npm run preview
```

The `dist/` directory contains the deployable static site. Vercel's existing rewrite configuration supports direct navigation and refreshing every page. An Apache SPA fallback is copied from `public/.htaccess` during builds. Other hosts must serve `index.html` for unknown non-file paths.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | One viewport: short introduction and “See my works” |
| `/work` | Complete project index, three / two / one columns by viewport |
| `/practice` | Film, music, and exhibition galleries |
| `/about` | Background, contact icons, résumé, research diagram, and journey map |
| `/about#journey` | Direct link to the journey section; `/journey` redirects here |
| `/projects/:id` | Existing bilingual case studies |
| `/interests/:id` | Existing practice galleries |

Old homepage links such as `/#projects`, `/#interest`, `/#about`, and `/#journey` redirect to their corresponding pages. Category controls show names only, without numeric badges. Work categories are URL-backed (for example `/work?category=xr`) and are retained when following a project and using its “All work” link.

The header indicates the current section, including on detail pages. The mobile menu closes after navigation or Escape. Language selection is retained between pages and visits. The wordmark displays only the name in the selected language. LinkedIn, email, and GitHub icon links follow the biography; their accessible labels and tooltips identify each destination. Secondary routes are loaded on demand so the home screen does not load the world-map data or case studies.

## Content and adding projects

- `src/data/projects.js`: full bilingual project case studies. Keep IDs aligned between English and Chinese.
- `src/data/projectCatalog.js`: index order, compact bilingual summaries, cover images, optional recognition, and filter membership.
- `src/data/interests.js`: bilingual creative practice galleries.
- `src/data/journey.js`: ten cities and twelve events, ordered by start date.
- `src/components/Hero.jsx`: the single-screen introduction.
- `src/components/ResearchVenn.jsx`: research diagram, now on About.
- `src/index.css`: shared typography, spacing, responsive grids, and interaction styles.
- `public/resume.pdf`: retained résumé.

To add a project, add its case study in both languages, place its media in `public/images/`, and add an entry to `projectImages` and `projectCards`. Add its ID to the appropriate filters and optionally `projectOrder` to resolve same-year ties. Roomify is always first; all other projects sort by the latest year in their `year` field, newest to oldest. Undated projects appear last. The same order governs the next-project links. There is no limit on the number of projects displayed.

Index covers can differ from detail-page covers: `projectCards[id].image` sets an optional thumbnail, while `projectImages[id]` remains the case-study cover. An optional bilingual `projectCards[id].title` supplies a shorter index title. Existing project assets are retained; the VLM and SyneSound index covers now use more concrete examples from those assets.

Roomify uses the complete supplied 30-second demo as a looping GIF: an 800px detail cover and a 480px index version. Its optional `poster` is used for reduced-motion preferences and the detail cover's pause control. Case-study sections support a `video` object (local MP4, poster, dimensions, accessible title, and caption), and `imageDimensions` reserves space for lazy-loaded figures. The user-study video retains its original H.264 video and AAC audio, with MP4 metadata moved to the beginning for streaming.

Case studies can include additional sidebar `facts` (label/value pairs). Figures support `fullSizeImages` for larger drawing previews and `imageCredits` (label/URL pairs) for source attribution beside a caption.

Set a section's `imageLayout` to `grid` for two columns on desktop and one on phones. Set `imageColumns` to `3` for a fixed three-column gallery, used for the six small construction photographs in project 12. Optional `imageSpans` entries greater than `1` let a drawing span the full grid, above smaller details or construction photographs. The three-column photographs use consistent 16:9 frames and short bilingual captions.

## Visual system

- Locally hosted Lato: Light (300) headings, Regular (400) body, and Bold (700) emphasis. Chinese characters use the system Chinese sans-serif. Lato is a free alternative with a similar humanist character to the reference site’s Freight Neo Pro; it is not the same font.
- Font definitions: `src/fonts.css`; WOFF2 files and SIL Open Font License: `public/fonts/lato/`. The site makes no runtime requests to a third-party font service.
- Light headings, normal body weights, restrained letter spacing.
- Warm white background; no card shadows or large pill-shaped containers.
- Main project thumbnails use 16:9 frames with 4px corners.
- Desktop index: three columns, 36px column gaps, 50px row gaps.
- Two columns at 900px and below; one column at 600px and below.
- Home fills the available viewport without further content below. Small screens and larger accessibility text can naturally overflow rather than being clipped.
- Reduced-motion preferences disable transitions.

## Verification

`npm test` checks bilingual IDs, local media, filter references, and safe ordering when projects are added. Browser checks cover page navigation, the one-screen home, active navigation, category persistence, detail return links, mobile menu, Chinese, direct route loads, legacy links, and the journey interaction.

## Source notes

The Other Perspective (project 12) documents a 2021 installation for CapitaLand's Charity & Life Festival in Beijing. The owner supplied the coexistence concept, their role as one of two co-directors across design, processing, construction and publicity, 33 participating student builders, and the Best Popularity Award among four projects. Additional spatial and construction details follow the four supplied portfolio boards (pages 24–27). The final photograph on page 27 supplies the cover; its overlay title and adjacent construction record are excluded from the crop. Figure crops separate the concept, site/form studies, assembly, eight details, process timeline, and six construction photographs. Illustrated user scenarios are described as design intentions; the page does not claim measured plant recovery or visitor outcomes.

Sinking Batavia (project 11) is Yunxiang Ma's 2023 academic museum proposal, based on the owner-supplied description and six-page architecture portfolio PDF. The cover is the clean rendering embedded on the last page; the exterior rendering is extracted from the first page. Film analysis, narrative loops, three-world concepts, site studies, cultural collages, plans, sections, and the spatial sequence are cropped from pages 2–5. Larger versions of the architectural boards are linked from the figures. The landscape film reference is A24's official promotional image for *The Florida Project* (2017), credited and linked beside the image: https://a24films.com/films/the-florida-project. The 2050 abandoned coast is presented as the design's speculative scenario, not a certain prediction. Context sources: Indonesia's Geological Agency on Jakarta's land subsidence (https://www.esdm.go.id/en/media-center/news-archives/head-of-geological-agency-groundwater-depletion-rate-can-be-slowed-down) and the Presidential Staff Office on the 2022 capital relocation law (https://www.ksp.go.id/moeldoko-pemindahan-ikn-sudah-final-dan-tidak-perlu-lagi-diperdebatkan.html).

Peter Pan (project 10) documents James Fu and Yunxiang Ma's Spring 2026 HyperSense shadow interaction prototype and CMU School of Design showcase. Text follows the owner's final course report; figures are cropped exclusively from the final slides (pages 14 and 21), with owner-supplied showcase photographs. Evan's reading map is presented as a shared reading and brainstorming artifact; a compressed inline preview links to the original full-size photograph. The case study focuses on the prototype and showcase experience.

Roomify's expanded bilingual case study follows the final CHI 2026 paper, “Roomify: Spatially-Grounded Style Transformation for Immersive Virtual Environments” (https://doi.org/10.1145/3772318.3791803). New figure crops reproduce Figures 9 and 13; result tables transcribe reported means. The two videos were supplied by the website owner. Existing role and UIST demo information is retained from the original project content.

Personal and project information comes from the existing repository. The journey uses the user's August 2025 Pittsburgh arrival; the résumé retains its original September 2025 academic start date. San Francisco denotes the Bay Area exchange with UC Berkeley. Map lines show the sequence of events, not specific travel routes. The map stays 2:1, with city buttons for smaller screens.

- Tangible Media Group: https://tangible.media.mit.edu/project/tangible-bits/
- Natural Earth public-domain land data: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson

- Lato source: https://fonts.google.com/specimen/Lato
- Lato license: https://github.com/google/fonts/blob/main/ofl/lato/OFL.txt
