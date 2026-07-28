# elijahpaul.io

Public portfolio for Elijah Paul, an AI solutions architect and product builder working across crypto, fintech, and agentic systems.

## What the site does

- Explains the customer-led AI product role Elijah is available for.
- Publishes inspectable case studies for Venture Labs, Orelis, Team Take Down, Treasury Router, GridSynapse, and Monarch Shield.
- Separates verified product behavior from modeled inputs, prototypes, and future integrations.
- Routes recruiters, consulting buyers, product users, partners, and acquisition inquiries to the relevant next step.
- Provides crawlable metadata, structured data, `robots.txt`, `sitemap.xml`, and `llms.txt` for search and answer-engine discovery.

## Routes

- `/` — positioning and conversion paths
- `/work/` — selected product portfolio
- `/work/[slug]/` — detailed product case studies
- `/services/` — productized AI services
- `/about/` — background and working method
- `/resume/` — experience and downloadable resume
- `/contact/` — inquiry paths
- `/treasuryrouter/` — preserved static Treasury Router concept page

## Local validation

```bash
npm ci
npm run lint
npm run build
```

The application uses Next.js static export. Generated output is written to `out/`.

## Publishing

GitHub is the canonical source. A GitHub Actions workflow builds `main`, preserves the static Treasury Router artifact, and publishes the result to GitHub Pages at [elijahpaul.io](https://elijahpaul.io).

The channel, search, and revenue operating plan is documented in [docs/discoverability-revenue-plan.md](docs/discoverability-revenue-plan.md).

## Claim boundaries

Project pages state what currently works and what remains modeled, test-only, integration-dependent, or outside the product boundary. Do not remove those disclosures when editing marketing copy.
