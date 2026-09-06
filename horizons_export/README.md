# Yunxiang Ma · Portfolio

A bilingual React + Vite portfolio, redesigned around embodied interaction, multimodal intelligence, generative experiences, and spatial intelligence.

## Run locally

Use the existing npm workflow:

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
```

The `dist/` directory contains the deployable static site. Retained Vercel configuration supports direct navigation to project and practice routes. For another static host, configure unknown paths to return `index.html`.

## Content

- `src/data/projects.js`: nine bilingual project case studies.
- `src/data/interests.js`: three bilingual creative practice galleries.
- `src/data/journey.js`: ten cities and twelve events, ordered by start date. Long stays retain their full date range. Event status is derived from the current date.
- `src/components/ResearchVenn.jsx`: interactive research diagram with English and Chinese descriptions, keyboard access, and a link to Hiroshi Ishii’s Tangible Bits.
- `src/index.css`: shared visual system and responsive layouts.
- `public/resume.pdf`: exact copy of the latest user-supplied `Yunxiang_Ma_Resume.pdf`.

The journey uses the user's August 2025 Pittsburgh arrival; the résumé retains its original September 2025 academic start date. San Francisco denotes the Bay Area exchange with UC Berkeley. Lines show the sequence of events and are not records of specific flights or return journeys. The map remains 2:1 at every breakpoint; the city selector provides access when points are close together on smaller screens.

## Sources

Personal and project information comes from the supplied website, résumé, and journey list. Existing project images and media IDs are retained. The missing local Roomify video and empty gallery placeholder have been replaced by available project imagery and verified résumé resource links.

- Tangible Media Group: https://tangible.media.mit.edu/project/tangible-bits/
- Natural Earth public-domain land data: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson

Natural Earth coordinates are projected to an equirectangular 1000 × 500 SVG. Long connections wrap at the antimeridian.
