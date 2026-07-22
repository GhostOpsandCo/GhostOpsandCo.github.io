# Measurement Plan

## Commercial question

Does the site turn qualified discovery and case-study interest into product, consulting, or role conversations?

## Event dictionary

| Event | Trigger | Properties | Interpretation |
| --- | --- | --- | --- |
| `project_brief_started` | Visitor opens or begins the project brief | page, placement, inquiry type when selected, UTM values when present | Qualified-flow intent only |
| `project_brief_submitted` | A verified form destination confirms successful delivery | page, inquiry type, provider receipt or success state | Completed inquiry; qualification still requires review |
| `email_fallback_clicked` | Visitor opens the direct email fallback | page, placement, destination, UTM values when present | Contact intent only |
| `case_study_viewed` | Visitor opens a case-study route | slug, source page | Proof interest |
| `external_product_clicked` | Visitor opens a live product | slug, destination | Product inspection |
| `source_repository_clicked` | Visitor opens source code | slug, destination | Technical validation interest |
| `resume_viewed` | Visitor opens the resume page or PDF | source page | Hiring interest |
| `service_viewed` | Visitor opens the services page | source page | Commercial offer interest |

## Provider truth

No analytics, form, CRM, or calendar provider is currently verified. The site must not load a fabricated key or claim that a click became a lead. Provider instrumentation can be added after a free account is selected and connected.

## Weekly scorecard

- Search impressions and clicks by query and page.
- Branded versus non-branded visits.
- Homepage to case-study and services progression.
- Project-brief starts, confirmed submissions, and email fallback clicks by page and placement.
- Qualified conversations, proposals, wins, and booked revenue recorded separately from web analytics.

## Decision rules

- Impressions without clicks: revise title and description.
- Visits without case-study progression: strengthen the opening proof.
- Proof engagement without contact intent: revise offer and CTA.
- Contact intent without qualified conversations: reduce friction or repair the destination.
- Qualified conversations without closes: narrow fit, offer, or evidence before buying more traffic.
