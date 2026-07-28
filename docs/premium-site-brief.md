# Premium Site Brief

## Business outcome

- Primary revenue outcome: qualified consulting and embedded-product conversations that can become paid work.
- Primary conversion: a prospective buyer requests a fit call; a four-question brief remains the short intake step behind the CTA until a real scheduler or form destination is verified.
- Thirty-day success signal: qualified inquiries that reference a case study, a workflow problem, or a defined role.
- Non-goals: maximize anonymous traffic, imitate another AI company, add a SaaS application shell, or introduce paid tools without measured need.

## Buyer

- Primary buyer: a founder, product leader, innovation lead, or customer-facing executive at a crypto, fintech, or AI company.
- Trigger: customers or operators have exposed a valuable workflow gap, but the buyer does not yet have a credible product path.
- Five-second question: Can Elijah turn our expensive, unclear customer workflow into a credible AI product our team can test?
- Objections: Elijah may be a strategist rather than a builder; the work may be another generic AI demo; the existing team or stack may not fit; the proof may be overstated.
- Evidence needed: inspectable case studies, explicit role and boundaries, working links or source where available, a concrete method, and a specific low-friction next step.

## Message

- Positioning: AI product builder for crypto, fintech, and AI teams.
- Core promise: I turn customer problems into working AI products.
- Primary CTA: Request a fit call. Use Book a fit call only after a real scheduler is verified.
- Supporting path: View my work.
- Page story: customer workflow gap, proof from real product builds, what Elijah personally did, what people can buy from him, controlled build method, ways to engage, objection handling, and one qualified contact action.

## Information architecture

- Preserve the current routes: home, work, individual case studies, services, about, resume, and contact.
- The homepage prioritizes consulting and embedded-product buyers. Hiring remains visible in navigation, resume, and contact.
- Lead proof with Venture Labs as the product decision system behind serious builds, then show Orelis, Team Take Down, Treasury Router, GridSynapse, and Monarch Shield as market-specific applications of the same product-building pattern. Keep the homepage offer section high enough that buyers understand whether to request a sprint, a build, or embedded product help before reading every project. Avoid proof grids, carousel-only presentation, giant alternating landing-page bands, or screenshots that overpower the reading path.
- Mobile must show the promise, explanation, primary CTA, supporting proof path, and first proof signal without clipped text or horizontal overflow.

## Discovery

- Brand query: Elijah Paul AI product builder.
- Commercial problem queries: AI product consultant, AI solutions architect, build an AI product MVP, crypto AI product consultant, fintech AI workflow consultant.
- Proof queries: AI voice intake workflow, creator protection workflow, AI advisor workflow, AI compute optimization portfolio, x402 developer tooling.
- Answer-engine questions: What does an AI product builder do? How do you turn customer feedback into an AI product? How do you prototype a controlled AI workflow? Who can build an AI product for a crypto or fintech team?

## Measurement

- Primary events: `project_brief_started` when the brief opens and `project_brief_submitted` only after a verified form provider confirms delivery.
- Supporting events: `case_study_viewed`, `resume_viewed`, `service_viewed`, and external product or source clicks.
- Completion truth: a CTA click or email click is contact intent, not a completed or qualified lead; the submission event cannot fire from a button click alone.
- Provider status: no analytics, CRM, form, or calendar provider is verified; do not claim provider-side tracking.

## Constraints

- Framework and hosting: preserve Next.js static export and GitHub Pages.
- Typography: use only free/open fonts. The concept stage may test a restrained grotesk/editorial pairing; no paid font is required.
- Components: use the existing component system and semantic HTML; do not add shadcn or Radix without a specific need.
- Visual direction: editorial resume-style product-builder portfolio that preserves the current `elijahpaul.io` palette and applies Hyros/Orelis/SaaSFrame as structure references, not color references. Use the current `elijahpaul.io` headline and subheader as source language, then show each selected project with enough homepage detail to feel like a serious portfolio: what it is, use case, who it helps, role, proof today, why it matters, what is not claimed, real product visual, and concrete action. Keep Elijah's real PFP and exact product visuals; avoid generic AI/SaaS styling, decorative glassmorphism, carousel-only work presentation, repeated bento cards, giant alternating proof bands, fake metrics, invented taglines, copied reference layouts, or a replacement palette.
- Claims: unverified financial or performance metrics remain off the redesigned homepage until evidence is supplied.
- Approved paid budget: SaaSFrame monthly at $14 only; no Figma, Mobbin annual plan, paid font, or $50-plus tool.
- Release authorization: implementation may begin only after concept approval. Publication requires a separate explicit release approval after QA and independent review.
