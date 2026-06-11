# Numeric Claims Audit

Audit date: June 12, 2026

## Policy

Public performance numbers must have:

1. A named data source.
2. A defined measurement period.
3. A clear baseline and calculation.
4. Client permission when client data is involved.
5. Language that separates observed results from forecasts or examples.

If those conditions are not met, use capability, process, or measurement language instead.

## Removed

- False monthly audit availability and stale "March" scarcity.
- Homepage client counts, founder counts, connection counts, star ratings, and placeholder company logos.
- Homepage revenue growth, ROI, break-even, satisfaction, lead, conversion, and time-saving statistics.
- Unsupported project revenue, ROI, conversion, ranking, order-volume, subscriber, salary, and time-saving results.
- Service-level ROI ranges, break-even ranges, conversion lifts, time savings, and ranking timelines.
- Unsupported aggregate review rating in structured data.
- Unsupported automation averages and n8n cost comparisons.
- Blog articles presented as real client datasets or conversion case studies without supporting evidence.
- Unsupported dental booking, local-search, and performance statistics.
- Unsupported newsletter subscriber count and audit monetary value.
- Unverified delivery-time promises on the contact funnel.
- Unverified five-star ratings rendered with testimonials.

## Retained

These numbers describe actual site behaviour, commercial terms, content metadata, or user-entered scenarios rather than claimed business performance.

### Commercial prices

- Service starting prices shown on `client/pages/Services.tsx`.
- Contact budget ranges shown on `client/pages/Contact.tsx`.

Owner action: confirm these prices whenever the commercial offer changes.

### Delivery and support terms

- Support periods explicitly included in package or service copy.
- Working hours shown on the contact and footer sections.
- Dates and read-time estimates on published articles.

Owner action: keep proposals, website copy, and actual delivery operations aligned.

### Legal and payment terms

- Payment schedules, warranty periods, late-payment terms, retention periods, and privacy-response commitments in the legal pages.

Owner action: legal terms take precedence over informal FAQ copy. Review with qualified counsel when terms change.

### Technical and product descriptions

- Technology names and specifications such as iOS, WebP, AVIF, 4K source media, HTTP status codes, and three-dimensional or 360-degree experiences.
- Form step counts and interface labels that describe actual product behaviour.

### Calculator scenarios

- Values selected by the visitor in `ROICalculator.tsx`.
- Outputs derived from the visitor's own revenue, investment, and assumed improvement.

The calculator now states that it is illustrative and not a forecast, typical result, or guarantee.

## Before Publishing a New Number

Record the following:

| Field | Required value |
| --- | --- |
| Claim | Exact public wording |
| Source | Analytics, CRM, invoice, survey, test, or client record |
| Baseline | Starting value and date range |
| Result | Ending value and date range |
| Calculation | Formula used |
| Attribution | Other factors that may have affected the result |
| Permission | Client approval or internal owner |
| Review date | Date the claim should be checked again |

Do not publish the claim until every field is complete.
