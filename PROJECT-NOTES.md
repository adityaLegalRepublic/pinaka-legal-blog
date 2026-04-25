# Pinaka Legal Blog Project Notes

This file is the master memory note for the static blog project. At the end of any future chat, ask: "Update PROJECT-NOTES.md before we close." In a new chat, ask: "Read PROJECT-NOTES.md and continue."

## Project Purpose

Build and maintain a static blog website for:

```text
blog.pinakalegal.com
```

The site publishes legal blog articles under fixed subject and topic URLs.

## GitHub Repository

```text
https://github.com/adityaLegalRepublic/pinaka-legal-blog.git
```

Local project folder:

```text
/Users/tiwari/Documents/New project 2
```

The current main branch is pushed to GitHub.

## Local Preview

The local preview server normally runs at:

```text
http://localhost:4173/
```

Important preview URLs:

```text
Home:
http://localhost:4173/

Example topic page:
http://localhost:4173/criminal-law/bail/

Published article:
http://localhost:4173/criminal-law/bail/anticipatory-bail-rejected-what-next/
```

## URL Structure

Every article URL follows this fixed pattern:

```text
blog.pinakalegal.com/[subject]/[topic]/[article-slug]/
```

Example:

```text
blog.pinakalegal.com/criminal-law/bail/anticipatory-bail-rejected-what-next/
```

The local file location for that article is:

```text
criminal-law/bail/anticipatory-bail-rejected-what-next/index.html
```

## Subjects And Topics

Subjects and topics are fixed. Do not rename them casually because URLs, breadcrumbs, and internal links depend on them.

### Family Law

- 498A & DV Defence -> `family-law/498a-dv-defence/`
- Adoption -> `family-law/adoption/`
- Child Custody -> `family-law/child-custody/`
- Divorce - After -> `family-law/divorce-after/`
- Divorce - Documents -> `family-law/divorce-documents/`
- Divorce - Getting Started -> `family-law/divorce-getting-started/`
- Divorce - Process -> `family-law/divorce-process/`
- Domestic Violence -> `family-law/domestic-violence/`
- Inheritance Rights -> `family-law/inheritance-rights/`
- Maintenance -> `family-law/maintenance/`
- Marriage - Registration -> `family-law/marriage-registration/`
- Wills & Succession -> `family-law/wills-succession/`

### Criminal Law

- 2026 New Laws -> `criminal-law/2026-new-laws/`
- Accused Defence -> `criminal-law/accused-defence/`
- Arrest - Aftermath -> `criminal-law/arrest-aftermath/`
- Arrest - Crisis -> `criminal-law/arrest-crisis/`
- Bail -> `criminal-law/bail/`
- Cheating & Fraud -> `criminal-law/cheating-fraud/`
- Cheque Bounce -> `criminal-law/cheque-bounce/`
- Criminal Misc -> `criminal-law/criminal-misc/`
- Cyber Crime -> `criminal-law/cyber-crime/`
- Defamation -> `criminal-law/defamation/`
- FIR Problems -> `criminal-law/fir-problems/`
- Money Recovery -> `criminal-law/money-recovery/`
- Motor Accident -> `criminal-law/motor-accident/`
- Neighbour & Local -> `criminal-law/neighbour-local/`
- Political Harassment -> `criminal-law/political-harassment/`
- Women Safety -> `criminal-law/women-safety/`

### Property Law

- Builder Disputes -> `property-law/builder-disputes/`
- Inheritance of Property -> `property-law/inheritance-of-property/`
- Land Disputes -> `property-law/land-disputes/`
- Landlord Problems -> `property-law/landlord-problems/`
- POA & Deeds -> `property-law/poa-deeds/`
- Property Due Diligence -> `property-law/property-due-diligence/`
- Property Misc -> `property-law/property-misc/`
- Society & Redevelopment -> `property-law/society-redevelopment/`
- Tenant Problems -> `property-law/tenant-problems/`

### Consumer Rights

- Banking -> `consumer-rights/banking/`
- Consumer Basics -> `consumer-rights/consumer-basics/`
- Education -> `consumer-rights/education/`
- Insurance -> `consumer-rights/insurance/`
- Medical -> `consumer-rights/medical/`
- Online Shopping -> `consumer-rights/online-shopping/`
- Telecom & Utilities -> `consumer-rights/telecom-utilities/`
- Travel -> `consumer-rights/travel/`

### Workplace & Employment

- Employer Side -> `workplace-employment/employer-side/`
- Employment Contracts -> `workplace-employment/employment-contracts/`
- Salary & Wages -> `workplace-employment/salary-wages/`
- Termination -> `workplace-employment/termination/`
- Workplace Harassment -> `workplace-employment/workplace-harassment/`

### Business & Contracts

- Arbitration -> `business-contracts/arbitration/`
- Breach & Enforcement -> `business-contracts/breach-enforcement/`
- Drafting Needs -> `business-contracts/drafting-needs/`
- Startup & Biz -> `business-contracts/startup-biz/`

### Tax & Finance

- Capital Gains -> `tax-finance/capital-gains/`
- ED & PMLA -> `tax-finance/ed-pmla/`
- GST -> `tax-finance/gst/`
- IT Notices -> `tax-finance/it-notices/`
- Loan Recovery -> `tax-finance/loan-recovery/`
- TDS & Salary -> `tax-finance/tds-salary/`
- Tax Planning -> `tax-finance/tax-planning/`

### Intellectual Property

- 2026 IPR -> `intellectual-property/2026-ipr/`
- Copyright -> `intellectual-property/copyright/`
- Design & GI -> `intellectual-property/design-gi/`
- Licensing -> `intellectual-property/licensing/`
- Patent -> `intellectual-property/patent/`
- Trade Secret -> `intellectual-property/trade-secret/`
- Trademark -> `intellectual-property/trademark/`

### Cyber Law

- AI & Tech -> `cyber-law/ai-tech/`
- Crypto -> `cyber-law/crypto/`
- Privacy -> `cyber-law/privacy/`
- New Scams -> `cyber-law/new-scams/`
- Online Harm -> `cyber-law/online-harm/`
- Remote Work -> `cyber-law/remote-work/`

### Documents & Formats

- Affidavits -> `documents-formats/affidavits/`
- Business Formats -> `documents-formats/business-formats/`
- Complaints -> `documents-formats/complaints/`
- Employment Formats -> `documents-formats/employment-formats/`
- Family Formats -> `documents-formats/family-formats/`
- Financial Formats -> `documents-formats/financial-formats/`
- Legal Notices -> `documents-formats/legal-notices/`
- Property Formats -> `documents-formats/property-formats/`

## Topic Pages

Topic pages are static HTML pages, but their article cards are populated from:

```text
articles.json
```

One `articles.json` file serves all topic pages.

Each topic page filters articles by:

```text
subject
topic
```

Example article JSON entry:

```json
{
  "slug": "anticipatory-bail-rejected-what-next",
  "subject": "criminal-law",
  "topic": "bail",
  "title": "Anticipatory Bail Rejected? Here Is What You Can Do Next",
  "excerpt": "Anticipatory bail rejected? You still have options — approach the High Court, file an SLP, or apply for regular bail after arrest. Know your rights under BNSS 2023.",
  "date": "2026-04-25",
  "thumb": "anticipatory-bail-rejected-what-next-thumb.webp"
}
```

Thumb image rule:

If `thumb` is only a filename, the topic page expects it inside the article folder:

```text
[subject]/[topic]/[slug]/[thumb-file]
```

Example:

```text
criminal-law/bail/anticipatory-bail-rejected-what-next/anticipatory-bail-rejected-what-next-thumb.webp
```

Excerpt rule:

Use the article meta description as the card excerpt unless a separate shorter excerpt is intentionally provided.

### Criminal Law Topic Templates

The custom designed Criminal Law topic HTML templates have been published into:

```text
criminal-law/[topic-slug]/index.html
```

These 16 topic pages are live-template pages and auto-populate from `articles.json`:

```text
criminal-law/2026-new-laws/
criminal-law/accused-defence/
criminal-law/arrest-aftermath/
criminal-law/arrest-crisis/
criminal-law/bail/
criminal-law/cheating-fraud/
criminal-law/cheque-bounce/
criminal-law/criminal-misc/
criminal-law/cyber-crime/
criminal-law/defamation/
criminal-law/fir-problems/
criminal-law/money-recovery/
criminal-law/motor-accident/
criminal-law/neighbour-local/
criminal-law/political-harassment/
criminal-law/women-safety/
```

Each template sets:

```text
SUBJECT = criminal-law
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

### Family Law Topic Templates

The custom designed Family Law topic HTML templates have been published into:

```text
family-law/[topic-slug]/index.html
```

These 12 topic pages are live-template pages and auto-populate from `articles.json`:

```text
family-law/498a-dv-defence/
family-law/adoption/
family-law/child-custody/
family-law/divorce-after/
family-law/divorce-documents/
family-law/divorce-getting-started/
family-law/divorce-process/
family-law/domestic-violence/
family-law/inheritance-rights/
family-law/maintenance/
family-law/marriage-registration/
family-law/wills-succession/
```

Each template sets:

```text
SUBJECT = family-law
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

### Property Law Topic Templates

The custom designed Property Law topic HTML templates have been published into:

```text
property-law/[topic-slug]/index.html
```

These 9 topic pages are live-template pages and auto-populate from `articles.json`:

```text
property-law/builder-disputes/
property-law/inheritance-of-property/
property-law/land-disputes/
property-law/landlord-problems/
property-law/poa-deeds/
property-law/property-due-diligence/
property-law/property-misc/
property-law/society-redevelopment/
property-law/tenant-problems/
```

Each template sets:

```text
SUBJECT = property-law
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

### Consumer Rights Topic Templates

The custom designed Consumer Rights topic HTML templates have been published into:

```text
consumer-rights/[topic-slug]/index.html
```

These 8 topic pages are live-template pages and auto-populate from `articles.json`:

```text
consumer-rights/banking/
consumer-rights/consumer-basics/
consumer-rights/education/
consumer-rights/insurance/
consumer-rights/medical/
consumer-rights/online-shopping/
consumer-rights/telecom-utilities/
consumer-rights/travel/
```

Each template sets:

```text
SUBJECT = consumer-rights
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

### Workplace & Employment Topic Templates

The custom designed Workplace & Employment topic HTML templates have been published into:

```text
workplace-employment/[topic-slug]/index.html
```

These 5 topic pages are live-template pages and auto-populate from `articles.json`:

```text
workplace-employment/employer-side/
workplace-employment/employment-contracts/
workplace-employment/salary-wages/
workplace-employment/termination/
workplace-employment/workplace-harassment/
```

Each template sets:

```text
SUBJECT = workplace-employment
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

### Business & Contracts Topic Templates

The custom designed Business & Contracts topic HTML templates have been published into:

```text
business-contracts/[topic-slug]/index.html
```

These 4 topic pages are live-template pages and auto-populate from `articles.json`:

```text
business-contracts/arbitration/
business-contracts/breach-enforcement/
business-contracts/drafting-needs/
business-contracts/startup-biz/
```

Each template sets:

```text
SUBJECT = business-contracts
TOPIC = matching topic slug
ARTICLES_JSON = /articles.json
```

## Publishing A New Article

When publishing a new article, place files like this:

```text
[subject]/[topic]/[article-slug]/index.html
[subject]/[topic]/[article-slug]/header.webp
[subject]/[topic]/[article-slug]/[article-slug]-thumb.webp
```

Then update:

```text
articles.json
```

Check locally:

```text
http://localhost:4173/[subject]/[topic]/[article-slug]/
http://localhost:4173/[subject]/[topic]/
```

Then commit and push to GitHub.

## Published Articles

### Anticipatory Bail Rejected? Here Is What You Can Do Next

Subject:

```text
criminal-law
```

Topic:

```text
bail
```

Slug:

```text
anticipatory-bail-rejected-what-next
```

Local URL:

```text
http://localhost:4173/criminal-law/bail/anticipatory-bail-rejected-what-next/
```

File path:

```text
criminal-law/bail/anticipatory-bail-rejected-what-next/index.html
```

Images:

```text
criminal-law/bail/anticipatory-bail-rejected-what-next/header.webp
criminal-law/bail/anticipatory-bail-rejected-what-next/anticipatory-bail-rejected-what-next-thumb.webp
```

Git commit:

```text
265a47d Publish anticipatory bail rejected article
```

## Cloudflare Notes

Cloudflare Pages is now live from the GitHub-connected Pages project:

```text
Project name: pinaka-legal-blog
Pages URL: https://pinaka-legal-blog.pages.dev/
Custom domain: https://blog.pinakalegal.com/
Production branch: main
GitHub repo: adityaLegalRepublic/pinaka-legal-blog
```

Wix DNS for `blog.pinakalegal.com` should point by CNAME to:

```text
pinaka-legal-blog.pages.dev
```

The old Cloudflare Pages project `pinaka` / `pinaka-cbw.pages.dev` was a Direct Upload project and served 404. Do not use it for the live blog.

Live checks passed for:

```text
https://blog.pinakalegal.com/
https://blog.pinakalegal.com/criminal-law/bail/
https://blog.pinakalegal.com/criminal-law/bail/anticipatory-bail-rejected-what-next/
https://blog.pinakalegal.com/articles.json
```

There was also an older test Worker URL:

```text
https://pinaka-blog-worker.emailaditya9.workers.dev/
```

Do not use the Worker URL for the blog unless the deployment strategy changes later.

## Future Chat Instructions

In a new chat, start with:

```text
Read PROJECT-NOTES.md and continue.
```

At the end of a chat, ask:

```text
Update PROJECT-NOTES.md before we close.
```
