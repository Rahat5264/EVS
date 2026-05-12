# Project Instructions

This repository is a Next.js App Router site for Edraak Systems. When creating or updating pages, keep SEO and metadata intentional, complete, and unique.

## SEO Requirements

- Every route should have a unique, descriptive title and meta description.
- Use the Next.js `metadata` export or `generateMetadata` for page-level SEO.
- Set a canonical URL for every indexable page using `alternates.canonical`.
- Add Open Graph and Twitter metadata for share previews.
- Include `robots` metadata for indexable pages and noindex rules for pages that should not appear in search.
- Add structured data in JSON-LD where it improves search understanding, such as Organization, WebSite, BreadcrumbList, Service, FAQPage, and Article.
- Keep structured data aligned with visible page content. Do not add schema that is not represented on the page.
- Use absolute URLs for canonical links, images, and structured data fields that require them.
- Prefer one source of truth for site metadata such as site name, base URL, social preview image, and organization details.
- When a route has multiple variants or query-driven states, choose the primary indexable URL as canonical and avoid duplicate metadata.

## Metadata Standards

- Title format should be specific and human-readable. Use a consistent pattern when appropriate, but avoid repetitive or keyword-stuffed titles.
- Meta descriptions should summarize the page value in plain language and stay focused on the page intent.
- Provide a meaningful social share image for important landing pages.
- Use the `metadataBase` pattern if needed so relative metadata resolves correctly across environments.
- Do not leave default, placeholder, or duplicated metadata in place.

## Structured Data Standards

- Use `application/ld+json` scripts only when the schema matches actual content.
- Prefer compact, valid schema objects over large speculative schema graphs.
- Include organization details once and reuse them consistently across pages.
- Add breadcrumb structured data when the page hierarchy is meaningful.

## Implementation Notes

- Keep root metadata in `app/layout.tsx` and page-specific metadata close to the route in `app/**/page.tsx` or `generateMetadata`.
- If a page introduces new SEO-sensitive content, update metadata at the same time as the UI.
- Avoid duplicate canonical tags, duplicate titles, and duplicate descriptions across sibling routes.
- Preserve existing site styling and component structure unless a change is required for SEO or content accuracy.
