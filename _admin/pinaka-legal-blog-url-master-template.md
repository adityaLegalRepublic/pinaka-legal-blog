# Pinaka Legal Blog URL Master Template

Use this as the fixed master template for hardcoding blog URLs inside static HTML articles for `blog.pinakalegal.com`.

## Base Rule

All article URLs must follow this exact pattern:

```text
https://blog.pinakalegal.com/[subject-slug]/[topic-slug]/[article-slug]/
```

Example:

```text
https://blog.pinakalegal.com/family-law/domestic-violence/article-slug/
```

## Slug Rules

- Use lowercase only.
- Replace spaces with hyphens.
- Remove `&` from slugs.
- Remove punctuation from slugs.
- Keep numbers as-is.
- Use a trailing slash on all final URLs.
- Do not change the fixed subject names or topic names in visible page text.

Examples:

| Display Name | Slug |
|---|---|
| Family Law | `family-law` |
| 498A & DV Defence | `498a-dv-defence` |
| Wills & Succession | `wills-succession` |
| Business & Contracts | `business-contracts` |
| Tax & Finance | `tax-finance` |
| Divorce - Getting Started | `divorce-getting-started` |

## What To Hardcode In Every HTML Article

For every article, hardcode the final article URL consistently in all these places:

- `<link rel="canonical">`
- `<meta property="og:url">`
- `<meta property="og:image">`, if image path is article-specific
- `<meta name="twitter:image">`, if image path is article-specific
- Article schema `mainEntityOfPage.@id`
- Breadcrumb schema URLs
- Visible breadcrumb links, if present
- Related article links
- Internal links inside the article body

## HTML Metadata Pattern

Replace the placeholders with the correct subject, topic, and article slug.

```html
<link rel="canonical" href="https://blog.pinakalegal.com/[subject-slug]/[topic-slug]/[article-slug]/">
<meta property="og:url" content="https://blog.pinakalegal.com/[subject-slug]/[topic-slug]/[article-slug]/">
<meta property="article:section" content="[Subject Name]">
```

## Breadcrumb Schema Pattern

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://blog.pinakalegal.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Subject Name]",
      "item": "https://blog.pinakalegal.com/[subject-slug]/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Topic / Cluster Name]",
      "item": "https://blog.pinakalegal.com/[subject-slug]/[topic-slug]/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "[Article Title]",
      "item": "https://blog.pinakalegal.com/[subject-slug]/[topic-slug]/[article-slug]/"
    }
  ]
}
</script>
```

## Subject Index

- [Family Law](#family-law)
- [Criminal Law](#criminal-law)
- [Property Law](#property-law)
- [Consumer Rights](#consumer-rights)
- [Workplace & Employment](#workplace-employment)
- [Business & Contracts](#business-contracts)
- [Tax & Finance](#tax-finance)
- [Intellectual Property](#intellectual-property)
- [Cyber Law](#cyber-law)
- [Documents & Formats](#documents-formats)

## Family Law

Subject URL: `https://blog.pinakalegal.com/family-law/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| 498A & DV Defence | `498a-dv-defence` | `https://blog.pinakalegal.com/family-law/498a-dv-defence/` | `https://blog.pinakalegal.com/family-law/498a-dv-defence/article-slug/` |
| Adoption | `adoption` | `https://blog.pinakalegal.com/family-law/adoption/` | `https://blog.pinakalegal.com/family-law/adoption/article-slug/` |
| Child Custody | `child-custody` | `https://blog.pinakalegal.com/family-law/child-custody/` | `https://blog.pinakalegal.com/family-law/child-custody/article-slug/` |
| Divorce - After | `divorce-after` | `https://blog.pinakalegal.com/family-law/divorce-after/` | `https://blog.pinakalegal.com/family-law/divorce-after/article-slug/` |
| Divorce - Documents | `divorce-documents` | `https://blog.pinakalegal.com/family-law/divorce-documents/` | `https://blog.pinakalegal.com/family-law/divorce-documents/article-slug/` |
| Divorce - Getting Started | `divorce-getting-started` | `https://blog.pinakalegal.com/family-law/divorce-getting-started/` | `https://blog.pinakalegal.com/family-law/divorce-getting-started/article-slug/` |
| Divorce - Process | `divorce-process` | `https://blog.pinakalegal.com/family-law/divorce-process/` | `https://blog.pinakalegal.com/family-law/divorce-process/article-slug/` |
| Domestic Violence | `domestic-violence` | `https://blog.pinakalegal.com/family-law/domestic-violence/` | `https://blog.pinakalegal.com/family-law/domestic-violence/article-slug/` |
| Inheritance Rights | `inheritance-rights` | `https://blog.pinakalegal.com/family-law/inheritance-rights/` | `https://blog.pinakalegal.com/family-law/inheritance-rights/article-slug/` |
| Maintenance | `maintenance` | `https://blog.pinakalegal.com/family-law/maintenance/` | `https://blog.pinakalegal.com/family-law/maintenance/article-slug/` |
| Marriage - Registration | `marriage-registration` | `https://blog.pinakalegal.com/family-law/marriage-registration/` | `https://blog.pinakalegal.com/family-law/marriage-registration/article-slug/` |
| Wills & Succession | `wills-succession` | `https://blog.pinakalegal.com/family-law/wills-succession/` | `https://blog.pinakalegal.com/family-law/wills-succession/article-slug/` |

## Criminal Law

Subject URL: `https://blog.pinakalegal.com/criminal-law/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| 2026 New Laws | `2026-new-laws` | `https://blog.pinakalegal.com/criminal-law/2026-new-laws/` | `https://blog.pinakalegal.com/criminal-law/2026-new-laws/article-slug/` |
| Accused Defence | `accused-defence` | `https://blog.pinakalegal.com/criminal-law/accused-defence/` | `https://blog.pinakalegal.com/criminal-law/accused-defence/article-slug/` |
| Arrest - Aftermath | `arrest-aftermath` | `https://blog.pinakalegal.com/criminal-law/arrest-aftermath/` | `https://blog.pinakalegal.com/criminal-law/arrest-aftermath/article-slug/` |
| Arrest - Crisis | `arrest-crisis` | `https://blog.pinakalegal.com/criminal-law/arrest-crisis/` | `https://blog.pinakalegal.com/criminal-law/arrest-crisis/article-slug/` |
| Bail | `bail` | `https://blog.pinakalegal.com/criminal-law/bail/` | `https://blog.pinakalegal.com/criminal-law/bail/article-slug/` |
| Cheating & Fraud | `cheating-fraud` | `https://blog.pinakalegal.com/criminal-law/cheating-fraud/` | `https://blog.pinakalegal.com/criminal-law/cheating-fraud/article-slug/` |
| Cheque Bounce | `cheque-bounce` | `https://blog.pinakalegal.com/criminal-law/cheque-bounce/` | `https://blog.pinakalegal.com/criminal-law/cheque-bounce/article-slug/` |
| Criminal Misc | `criminal-misc` | `https://blog.pinakalegal.com/criminal-law/criminal-misc/` | `https://blog.pinakalegal.com/criminal-law/criminal-misc/article-slug/` |
| Cyber Crime | `cyber-crime` | `https://blog.pinakalegal.com/criminal-law/cyber-crime/` | `https://blog.pinakalegal.com/criminal-law/cyber-crime/article-slug/` |
| Defamation | `defamation` | `https://blog.pinakalegal.com/criminal-law/defamation/` | `https://blog.pinakalegal.com/criminal-law/defamation/article-slug/` |
| FIR Problems | `fir-problems` | `https://blog.pinakalegal.com/criminal-law/fir-problems/` | `https://blog.pinakalegal.com/criminal-law/fir-problems/article-slug/` |
| Money Recovery | `money-recovery` | `https://blog.pinakalegal.com/criminal-law/money-recovery/` | `https://blog.pinakalegal.com/criminal-law/money-recovery/article-slug/` |
| Motor Accident | `motor-accident` | `https://blog.pinakalegal.com/criminal-law/motor-accident/` | `https://blog.pinakalegal.com/criminal-law/motor-accident/article-slug/` |
| Neighbour & Local | `neighbour-local` | `https://blog.pinakalegal.com/criminal-law/neighbour-local/` | `https://blog.pinakalegal.com/criminal-law/neighbour-local/article-slug/` |
| Political Harassment | `political-harassment` | `https://blog.pinakalegal.com/criminal-law/political-harassment/` | `https://blog.pinakalegal.com/criminal-law/political-harassment/article-slug/` |
| Women Safety | `women-safety` | `https://blog.pinakalegal.com/criminal-law/women-safety/` | `https://blog.pinakalegal.com/criminal-law/women-safety/article-slug/` |

## Property Law

Subject URL: `https://blog.pinakalegal.com/property-law/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Builder Disputes | `builder-disputes` | `https://blog.pinakalegal.com/property-law/builder-disputes/` | `https://blog.pinakalegal.com/property-law/builder-disputes/article-slug/` |
| Inheritance of Property | `inheritance-of-property` | `https://blog.pinakalegal.com/property-law/inheritance-of-property/` | `https://blog.pinakalegal.com/property-law/inheritance-of-property/article-slug/` |
| Land Disputes | `land-disputes` | `https://blog.pinakalegal.com/property-law/land-disputes/` | `https://blog.pinakalegal.com/property-law/land-disputes/article-slug/` |
| Landlord Problems | `landlord-problems` | `https://blog.pinakalegal.com/property-law/landlord-problems/` | `https://blog.pinakalegal.com/property-law/landlord-problems/article-slug/` |
| POA & Deeds | `poa-deeds` | `https://blog.pinakalegal.com/property-law/poa-deeds/` | `https://blog.pinakalegal.com/property-law/poa-deeds/article-slug/` |
| Property Due Diligence | `property-due-diligence` | `https://blog.pinakalegal.com/property-law/property-due-diligence/` | `https://blog.pinakalegal.com/property-law/property-due-diligence/article-slug/` |
| Property Misc | `property-misc` | `https://blog.pinakalegal.com/property-law/property-misc/` | `https://blog.pinakalegal.com/property-law/property-misc/article-slug/` |
| Society & Redevelopment | `society-redevelopment` | `https://blog.pinakalegal.com/property-law/society-redevelopment/` | `https://blog.pinakalegal.com/property-law/society-redevelopment/article-slug/` |
| Tenant Problems | `tenant-problems` | `https://blog.pinakalegal.com/property-law/tenant-problems/` | `https://blog.pinakalegal.com/property-law/tenant-problems/article-slug/` |

## Consumer Rights

Subject URL: `https://blog.pinakalegal.com/consumer-rights/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Banking | `banking` | `https://blog.pinakalegal.com/consumer-rights/banking/` | `https://blog.pinakalegal.com/consumer-rights/banking/article-slug/` |
| Consumer Basics | `consumer-basics` | `https://blog.pinakalegal.com/consumer-rights/consumer-basics/` | `https://blog.pinakalegal.com/consumer-rights/consumer-basics/article-slug/` |
| Education | `education` | `https://blog.pinakalegal.com/consumer-rights/education/` | `https://blog.pinakalegal.com/consumer-rights/education/article-slug/` |
| Insurance | `insurance` | `https://blog.pinakalegal.com/consumer-rights/insurance/` | `https://blog.pinakalegal.com/consumer-rights/insurance/article-slug/` |
| Medical | `medical` | `https://blog.pinakalegal.com/consumer-rights/medical/` | `https://blog.pinakalegal.com/consumer-rights/medical/article-slug/` |
| Online Shopping | `online-shopping` | `https://blog.pinakalegal.com/consumer-rights/online-shopping/` | `https://blog.pinakalegal.com/consumer-rights/online-shopping/article-slug/` |
| Telecom & Utilities | `telecom-utilities` | `https://blog.pinakalegal.com/consumer-rights/telecom-utilities/` | `https://blog.pinakalegal.com/consumer-rights/telecom-utilities/article-slug/` |
| Travel | `travel` | `https://blog.pinakalegal.com/consumer-rights/travel/` | `https://blog.pinakalegal.com/consumer-rights/travel/article-slug/` |

## Workplace & Employment

Subject URL: `https://blog.pinakalegal.com/workplace-employment/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Employer Side | `employer-side` | `https://blog.pinakalegal.com/workplace-employment/employer-side/` | `https://blog.pinakalegal.com/workplace-employment/employer-side/article-slug/` |
| Employment Contracts | `employment-contracts` | `https://blog.pinakalegal.com/workplace-employment/employment-contracts/` | `https://blog.pinakalegal.com/workplace-employment/employment-contracts/article-slug/` |
| Salary & Wages | `salary-wages` | `https://blog.pinakalegal.com/workplace-employment/salary-wages/` | `https://blog.pinakalegal.com/workplace-employment/salary-wages/article-slug/` |
| Termination | `termination` | `https://blog.pinakalegal.com/workplace-employment/termination/` | `https://blog.pinakalegal.com/workplace-employment/termination/article-slug/` |
| Workplace Harassment | `workplace-harassment` | `https://blog.pinakalegal.com/workplace-employment/workplace-harassment/` | `https://blog.pinakalegal.com/workplace-employment/workplace-harassment/article-slug/` |

## Business & Contracts

Subject URL: `https://blog.pinakalegal.com/business-contracts/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Arbitration | `arbitration` | `https://blog.pinakalegal.com/business-contracts/arbitration/` | `https://blog.pinakalegal.com/business-contracts/arbitration/article-slug/` |
| Breach & Enforcement | `breach-enforcement` | `https://blog.pinakalegal.com/business-contracts/breach-enforcement/` | `https://blog.pinakalegal.com/business-contracts/breach-enforcement/article-slug/` |
| Drafting Needs | `drafting-needs` | `https://blog.pinakalegal.com/business-contracts/drafting-needs/` | `https://blog.pinakalegal.com/business-contracts/drafting-needs/article-slug/` |
| Startup & Biz | `startup-biz` | `https://blog.pinakalegal.com/business-contracts/startup-biz/` | `https://blog.pinakalegal.com/business-contracts/startup-biz/article-slug/` |

## Tax & Finance

Subject URL: `https://blog.pinakalegal.com/tax-finance/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Capital Gains | `capital-gains` | `https://blog.pinakalegal.com/tax-finance/capital-gains/` | `https://blog.pinakalegal.com/tax-finance/capital-gains/article-slug/` |
| ED & PMLA | `ed-pmla` | `https://blog.pinakalegal.com/tax-finance/ed-pmla/` | `https://blog.pinakalegal.com/tax-finance/ed-pmla/article-slug/` |
| GST | `gst` | `https://blog.pinakalegal.com/tax-finance/gst/` | `https://blog.pinakalegal.com/tax-finance/gst/article-slug/` |
| IT Notices | `it-notices` | `https://blog.pinakalegal.com/tax-finance/it-notices/` | `https://blog.pinakalegal.com/tax-finance/it-notices/article-slug/` |
| Loan Recovery | `loan-recovery` | `https://blog.pinakalegal.com/tax-finance/loan-recovery/` | `https://blog.pinakalegal.com/tax-finance/loan-recovery/article-slug/` |
| TDS & Salary | `tds-salary` | `https://blog.pinakalegal.com/tax-finance/tds-salary/` | `https://blog.pinakalegal.com/tax-finance/tds-salary/article-slug/` |
| Tax Planning | `tax-planning` | `https://blog.pinakalegal.com/tax-finance/tax-planning/` | `https://blog.pinakalegal.com/tax-finance/tax-planning/article-slug/` |

## Intellectual Property

Subject URL: `https://blog.pinakalegal.com/intellectual-property/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| 2026 IPR | `2026-ipr` | `https://blog.pinakalegal.com/intellectual-property/2026-ipr/` | `https://blog.pinakalegal.com/intellectual-property/2026-ipr/article-slug/` |
| Copyright | `copyright` | `https://blog.pinakalegal.com/intellectual-property/copyright/` | `https://blog.pinakalegal.com/intellectual-property/copyright/article-slug/` |
| Design & GI | `design-gi` | `https://blog.pinakalegal.com/intellectual-property/design-gi/` | `https://blog.pinakalegal.com/intellectual-property/design-gi/article-slug/` |
| Licensing | `licensing` | `https://blog.pinakalegal.com/intellectual-property/licensing/` | `https://blog.pinakalegal.com/intellectual-property/licensing/article-slug/` |
| Patent | `patent` | `https://blog.pinakalegal.com/intellectual-property/patent/` | `https://blog.pinakalegal.com/intellectual-property/patent/article-slug/` |
| Trade Secret | `trade-secret` | `https://blog.pinakalegal.com/intellectual-property/trade-secret/` | `https://blog.pinakalegal.com/intellectual-property/trade-secret/article-slug/` |
| Trademark | `trademark` | `https://blog.pinakalegal.com/intellectual-property/trademark/` | `https://blog.pinakalegal.com/intellectual-property/trademark/article-slug/` |

## Cyber Law

Subject URL: `https://blog.pinakalegal.com/cyber-law/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| AI & Tech | `ai-tech` | `https://blog.pinakalegal.com/cyber-law/ai-tech/` | `https://blog.pinakalegal.com/cyber-law/ai-tech/article-slug/` |
| Crypto | `crypto` | `https://blog.pinakalegal.com/cyber-law/crypto/` | `https://blog.pinakalegal.com/cyber-law/crypto/article-slug/` |
| Privacy | `privacy` | `https://blog.pinakalegal.com/cyber-law/privacy/` | `https://blog.pinakalegal.com/cyber-law/privacy/article-slug/` |
| New Scams | `new-scams` | `https://blog.pinakalegal.com/cyber-law/new-scams/` | `https://blog.pinakalegal.com/cyber-law/new-scams/article-slug/` |
| Online Harm | `online-harm` | `https://blog.pinakalegal.com/cyber-law/online-harm/` | `https://blog.pinakalegal.com/cyber-law/online-harm/article-slug/` |
| Remote Work | `remote-work` | `https://blog.pinakalegal.com/cyber-law/remote-work/` | `https://blog.pinakalegal.com/cyber-law/remote-work/article-slug/` |

## Documents & Formats

Subject URL: `https://blog.pinakalegal.com/documents-formats/`

| Topic / Cluster | Topic Slug | Topic URL | Article URL Pattern |
|---|---|---|---|
| Affidavits | `affidavits` | `https://blog.pinakalegal.com/documents-formats/affidavits/` | `https://blog.pinakalegal.com/documents-formats/affidavits/article-slug/` |
| Business Formats | `business-formats` | `https://blog.pinakalegal.com/documents-formats/business-formats/` | `https://blog.pinakalegal.com/documents-formats/business-formats/article-slug/` |
| Complaints | `complaints` | `https://blog.pinakalegal.com/documents-formats/complaints/` | `https://blog.pinakalegal.com/documents-formats/complaints/article-slug/` |
| Employment Formats | `employment-formats` | `https://blog.pinakalegal.com/documents-formats/employment-formats/` | `https://blog.pinakalegal.com/documents-formats/employment-formats/article-slug/` |
| Family Formats | `family-formats` | `https://blog.pinakalegal.com/documents-formats/family-formats/` | `https://blog.pinakalegal.com/documents-formats/family-formats/article-slug/` |
| Financial Formats | `financial-formats` | `https://blog.pinakalegal.com/documents-formats/financial-formats/` | `https://blog.pinakalegal.com/documents-formats/financial-formats/article-slug/` |
| Legal Notices | `legal-notices` | `https://blog.pinakalegal.com/documents-formats/legal-notices/` | `https://blog.pinakalegal.com/documents-formats/legal-notices/article-slug/` |
| Property Formats | `property-formats` | `https://blog.pinakalegal.com/documents-formats/property-formats/` | `https://blog.pinakalegal.com/documents-formats/property-formats/article-slug/` |

## Machine-Readable URL Map

```json
{
  "Family Law": {
    "subjectSlug": "family-law",
    "subjectUrl": "https://blog.pinakalegal.com/family-law/",
    "topics": {
      "498A & DV Defence": {
        "topicSlug": "498a-dv-defence",
        "topicUrl": "https://blog.pinakalegal.com/family-law/498a-dv-defence/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/498a-dv-defence/article-slug/"
      },
      "Adoption": {
        "topicSlug": "adoption",
        "topicUrl": "https://blog.pinakalegal.com/family-law/adoption/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/adoption/article-slug/"
      },
      "Child Custody": {
        "topicSlug": "child-custody",
        "topicUrl": "https://blog.pinakalegal.com/family-law/child-custody/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/child-custody/article-slug/"
      },
      "Divorce - After": {
        "topicSlug": "divorce-after",
        "topicUrl": "https://blog.pinakalegal.com/family-law/divorce-after/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/divorce-after/article-slug/"
      },
      "Divorce - Documents": {
        "topicSlug": "divorce-documents",
        "topicUrl": "https://blog.pinakalegal.com/family-law/divorce-documents/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/divorce-documents/article-slug/"
      },
      "Divorce - Getting Started": {
        "topicSlug": "divorce-getting-started",
        "topicUrl": "https://blog.pinakalegal.com/family-law/divorce-getting-started/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/divorce-getting-started/article-slug/"
      },
      "Divorce - Process": {
        "topicSlug": "divorce-process",
        "topicUrl": "https://blog.pinakalegal.com/family-law/divorce-process/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/divorce-process/article-slug/"
      },
      "Domestic Violence": {
        "topicSlug": "domestic-violence",
        "topicUrl": "https://blog.pinakalegal.com/family-law/domestic-violence/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/domestic-violence/article-slug/"
      },
      "Inheritance Rights": {
        "topicSlug": "inheritance-rights",
        "topicUrl": "https://blog.pinakalegal.com/family-law/inheritance-rights/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/inheritance-rights/article-slug/"
      },
      "Maintenance": {
        "topicSlug": "maintenance",
        "topicUrl": "https://blog.pinakalegal.com/family-law/maintenance/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/maintenance/article-slug/"
      },
      "Marriage - Registration": {
        "topicSlug": "marriage-registration",
        "topicUrl": "https://blog.pinakalegal.com/family-law/marriage-registration/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/marriage-registration/article-slug/"
      },
      "Wills & Succession": {
        "topicSlug": "wills-succession",
        "topicUrl": "https://blog.pinakalegal.com/family-law/wills-succession/",
        "articleUrlPattern": "https://blog.pinakalegal.com/family-law/wills-succession/article-slug/"
      }
    }
  },
  "Criminal Law": {
    "subjectSlug": "criminal-law",
    "subjectUrl": "https://blog.pinakalegal.com/criminal-law/",
    "topics": {
      "2026 New Laws": {
        "topicSlug": "2026-new-laws",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/2026-new-laws/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/2026-new-laws/article-slug/"
      },
      "Accused Defence": {
        "topicSlug": "accused-defence",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/accused-defence/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/accused-defence/article-slug/"
      },
      "Arrest - Aftermath": {
        "topicSlug": "arrest-aftermath",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/arrest-aftermath/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/arrest-aftermath/article-slug/"
      },
      "Arrest - Crisis": {
        "topicSlug": "arrest-crisis",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/arrest-crisis/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/arrest-crisis/article-slug/"
      },
      "Bail": {
        "topicSlug": "bail",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/bail/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/bail/article-slug/"
      },
      "Cheating & Fraud": {
        "topicSlug": "cheating-fraud",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/cheating-fraud/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/cheating-fraud/article-slug/"
      },
      "Cheque Bounce": {
        "topicSlug": "cheque-bounce",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/cheque-bounce/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/cheque-bounce/article-slug/"
      },
      "Criminal Misc": {
        "topicSlug": "criminal-misc",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/criminal-misc/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/criminal-misc/article-slug/"
      },
      "Cyber Crime": {
        "topicSlug": "cyber-crime",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/cyber-crime/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/cyber-crime/article-slug/"
      },
      "Defamation": {
        "topicSlug": "defamation",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/defamation/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/defamation/article-slug/"
      },
      "FIR Problems": {
        "topicSlug": "fir-problems",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/fir-problems/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/fir-problems/article-slug/"
      },
      "Money Recovery": {
        "topicSlug": "money-recovery",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/money-recovery/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/money-recovery/article-slug/"
      },
      "Motor Accident": {
        "topicSlug": "motor-accident",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/motor-accident/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/motor-accident/article-slug/"
      },
      "Neighbour & Local": {
        "topicSlug": "neighbour-local",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/neighbour-local/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/neighbour-local/article-slug/"
      },
      "Political Harassment": {
        "topicSlug": "political-harassment",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/political-harassment/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/political-harassment/article-slug/"
      },
      "Women Safety": {
        "topicSlug": "women-safety",
        "topicUrl": "https://blog.pinakalegal.com/criminal-law/women-safety/",
        "articleUrlPattern": "https://blog.pinakalegal.com/criminal-law/women-safety/article-slug/"
      }
    }
  },
  "Property Law": {
    "subjectSlug": "property-law",
    "subjectUrl": "https://blog.pinakalegal.com/property-law/",
    "topics": {
      "Builder Disputes": {
        "topicSlug": "builder-disputes",
        "topicUrl": "https://blog.pinakalegal.com/property-law/builder-disputes/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/builder-disputes/article-slug/"
      },
      "Inheritance of Property": {
        "topicSlug": "inheritance-of-property",
        "topicUrl": "https://blog.pinakalegal.com/property-law/inheritance-of-property/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/inheritance-of-property/article-slug/"
      },
      "Land Disputes": {
        "topicSlug": "land-disputes",
        "topicUrl": "https://blog.pinakalegal.com/property-law/land-disputes/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/land-disputes/article-slug/"
      },
      "Landlord Problems": {
        "topicSlug": "landlord-problems",
        "topicUrl": "https://blog.pinakalegal.com/property-law/landlord-problems/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/landlord-problems/article-slug/"
      },
      "POA & Deeds": {
        "topicSlug": "poa-deeds",
        "topicUrl": "https://blog.pinakalegal.com/property-law/poa-deeds/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/poa-deeds/article-slug/"
      },
      "Property Due Diligence": {
        "topicSlug": "property-due-diligence",
        "topicUrl": "https://blog.pinakalegal.com/property-law/property-due-diligence/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/property-due-diligence/article-slug/"
      },
      "Property Misc": {
        "topicSlug": "property-misc",
        "topicUrl": "https://blog.pinakalegal.com/property-law/property-misc/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/property-misc/article-slug/"
      },
      "Society & Redevelopment": {
        "topicSlug": "society-redevelopment",
        "topicUrl": "https://blog.pinakalegal.com/property-law/society-redevelopment/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/society-redevelopment/article-slug/"
      },
      "Tenant Problems": {
        "topicSlug": "tenant-problems",
        "topicUrl": "https://blog.pinakalegal.com/property-law/tenant-problems/",
        "articleUrlPattern": "https://blog.pinakalegal.com/property-law/tenant-problems/article-slug/"
      }
    }
  },
  "Consumer Rights": {
    "subjectSlug": "consumer-rights",
    "subjectUrl": "https://blog.pinakalegal.com/consumer-rights/",
    "topics": {
      "Banking": {
        "topicSlug": "banking",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/banking/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/banking/article-slug/"
      },
      "Consumer Basics": {
        "topicSlug": "consumer-basics",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/consumer-basics/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/consumer-basics/article-slug/"
      },
      "Education": {
        "topicSlug": "education",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/education/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/education/article-slug/"
      },
      "Insurance": {
        "topicSlug": "insurance",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/insurance/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/insurance/article-slug/"
      },
      "Medical": {
        "topicSlug": "medical",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/medical/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/medical/article-slug/"
      },
      "Online Shopping": {
        "topicSlug": "online-shopping",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/online-shopping/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/online-shopping/article-slug/"
      },
      "Telecom & Utilities": {
        "topicSlug": "telecom-utilities",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/telecom-utilities/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/telecom-utilities/article-slug/"
      },
      "Travel": {
        "topicSlug": "travel",
        "topicUrl": "https://blog.pinakalegal.com/consumer-rights/travel/",
        "articleUrlPattern": "https://blog.pinakalegal.com/consumer-rights/travel/article-slug/"
      }
    }
  },
  "Workplace & Employment": {
    "subjectSlug": "workplace-employment",
    "subjectUrl": "https://blog.pinakalegal.com/workplace-employment/",
    "topics": {
      "Employer Side": {
        "topicSlug": "employer-side",
        "topicUrl": "https://blog.pinakalegal.com/workplace-employment/employer-side/",
        "articleUrlPattern": "https://blog.pinakalegal.com/workplace-employment/employer-side/article-slug/"
      },
      "Employment Contracts": {
        "topicSlug": "employment-contracts",
        "topicUrl": "https://blog.pinakalegal.com/workplace-employment/employment-contracts/",
        "articleUrlPattern": "https://blog.pinakalegal.com/workplace-employment/employment-contracts/article-slug/"
      },
      "Salary & Wages": {
        "topicSlug": "salary-wages",
        "topicUrl": "https://blog.pinakalegal.com/workplace-employment/salary-wages/",
        "articleUrlPattern": "https://blog.pinakalegal.com/workplace-employment/salary-wages/article-slug/"
      },
      "Termination": {
        "topicSlug": "termination",
        "topicUrl": "https://blog.pinakalegal.com/workplace-employment/termination/",
        "articleUrlPattern": "https://blog.pinakalegal.com/workplace-employment/termination/article-slug/"
      },
      "Workplace Harassment": {
        "topicSlug": "workplace-harassment",
        "topicUrl": "https://blog.pinakalegal.com/workplace-employment/workplace-harassment/",
        "articleUrlPattern": "https://blog.pinakalegal.com/workplace-employment/workplace-harassment/article-slug/"
      }
    }
  },
  "Business & Contracts": {
    "subjectSlug": "business-contracts",
    "subjectUrl": "https://blog.pinakalegal.com/business-contracts/",
    "topics": {
      "Arbitration": {
        "topicSlug": "arbitration",
        "topicUrl": "https://blog.pinakalegal.com/business-contracts/arbitration/",
        "articleUrlPattern": "https://blog.pinakalegal.com/business-contracts/arbitration/article-slug/"
      },
      "Breach & Enforcement": {
        "topicSlug": "breach-enforcement",
        "topicUrl": "https://blog.pinakalegal.com/business-contracts/breach-enforcement/",
        "articleUrlPattern": "https://blog.pinakalegal.com/business-contracts/breach-enforcement/article-slug/"
      },
      "Drafting Needs": {
        "topicSlug": "drafting-needs",
        "topicUrl": "https://blog.pinakalegal.com/business-contracts/drafting-needs/",
        "articleUrlPattern": "https://blog.pinakalegal.com/business-contracts/drafting-needs/article-slug/"
      },
      "Startup & Biz": {
        "topicSlug": "startup-biz",
        "topicUrl": "https://blog.pinakalegal.com/business-contracts/startup-biz/",
        "articleUrlPattern": "https://blog.pinakalegal.com/business-contracts/startup-biz/article-slug/"
      }
    }
  },
  "Tax & Finance": {
    "subjectSlug": "tax-finance",
    "subjectUrl": "https://blog.pinakalegal.com/tax-finance/",
    "topics": {
      "Capital Gains": {
        "topicSlug": "capital-gains",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/capital-gains/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/capital-gains/article-slug/"
      },
      "ED & PMLA": {
        "topicSlug": "ed-pmla",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/ed-pmla/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/ed-pmla/article-slug/"
      },
      "GST": {
        "topicSlug": "gst",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/gst/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/gst/article-slug/"
      },
      "IT Notices": {
        "topicSlug": "it-notices",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/it-notices/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/it-notices/article-slug/"
      },
      "Loan Recovery": {
        "topicSlug": "loan-recovery",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/loan-recovery/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/loan-recovery/article-slug/"
      },
      "TDS & Salary": {
        "topicSlug": "tds-salary",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/tds-salary/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/tds-salary/article-slug/"
      },
      "Tax Planning": {
        "topicSlug": "tax-planning",
        "topicUrl": "https://blog.pinakalegal.com/tax-finance/tax-planning/",
        "articleUrlPattern": "https://blog.pinakalegal.com/tax-finance/tax-planning/article-slug/"
      }
    }
  },
  "Intellectual Property": {
    "subjectSlug": "intellectual-property",
    "subjectUrl": "https://blog.pinakalegal.com/intellectual-property/",
    "topics": {
      "2026 IPR": {
        "topicSlug": "2026-ipr",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/2026-ipr/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/2026-ipr/article-slug/"
      },
      "Copyright": {
        "topicSlug": "copyright",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/copyright/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/copyright/article-slug/"
      },
      "Design & GI": {
        "topicSlug": "design-gi",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/design-gi/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/design-gi/article-slug/"
      },
      "Licensing": {
        "topicSlug": "licensing",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/licensing/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/licensing/article-slug/"
      },
      "Patent": {
        "topicSlug": "patent",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/patent/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/patent/article-slug/"
      },
      "Trade Secret": {
        "topicSlug": "trade-secret",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/trade-secret/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/trade-secret/article-slug/"
      },
      "Trademark": {
        "topicSlug": "trademark",
        "topicUrl": "https://blog.pinakalegal.com/intellectual-property/trademark/",
        "articleUrlPattern": "https://blog.pinakalegal.com/intellectual-property/trademark/article-slug/"
      }
    }
  },
  "Cyber Law": {
    "subjectSlug": "cyber-law",
    "subjectUrl": "https://blog.pinakalegal.com/cyber-law/",
    "topics": {
      "AI & Tech": {
        "topicSlug": "ai-tech",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/ai-tech/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/ai-tech/article-slug/"
      },
      "Crypto": {
        "topicSlug": "crypto",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/crypto/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/crypto/article-slug/"
      },
      "Privacy": {
        "topicSlug": "privacy",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/privacy/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/privacy/article-slug/"
      },
      "New Scams": {
        "topicSlug": "new-scams",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/new-scams/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/new-scams/article-slug/"
      },
      "Online Harm": {
        "topicSlug": "online-harm",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/online-harm/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/online-harm/article-slug/"
      },
      "Remote Work": {
        "topicSlug": "remote-work",
        "topicUrl": "https://blog.pinakalegal.com/cyber-law/remote-work/",
        "articleUrlPattern": "https://blog.pinakalegal.com/cyber-law/remote-work/article-slug/"
      }
    }
  },
  "Documents & Formats": {
    "subjectSlug": "documents-formats",
    "subjectUrl": "https://blog.pinakalegal.com/documents-formats/",
    "topics": {
      "Affidavits": {
        "topicSlug": "affidavits",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/affidavits/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/affidavits/article-slug/"
      },
      "Business Formats": {
        "topicSlug": "business-formats",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/business-formats/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/business-formats/article-slug/"
      },
      "Complaints": {
        "topicSlug": "complaints",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/complaints/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/complaints/article-slug/"
      },
      "Employment Formats": {
        "topicSlug": "employment-formats",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/employment-formats/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/employment-formats/article-slug/"
      },
      "Family Formats": {
        "topicSlug": "family-formats",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/family-formats/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/family-formats/article-slug/"
      },
      "Financial Formats": {
        "topicSlug": "financial-formats",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/financial-formats/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/financial-formats/article-slug/"
      },
      "Legal Notices": {
        "topicSlug": "legal-notices",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/legal-notices/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/legal-notices/article-slug/"
      },
      "Property Formats": {
        "topicSlug": "property-formats",
        "topicUrl": "https://blog.pinakalegal.com/documents-formats/property-formats/",
        "articleUrlPattern": "https://blog.pinakalegal.com/documents-formats/property-formats/article-slug/"
      }
    }
  }
}
```
