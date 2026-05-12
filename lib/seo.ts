import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Edraak Systems',
  shortName: 'EVS',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fqc.edraaksystems.com',
  description:
    'AI-powered vision inspection systems for textiles and manufacturing, delivering real-time defect detection, traceability, and quality control.',
  logo:
    'https://db.edraaksystems.com/wp-content/uploads/2026/05/69e76ba1c02a312bab552342_logo-evs.png',
  defaultImage:
    'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg',
  telephone: '+92 321 7973753',
  email: 'mail@edraakvisionsystems',
  addressLocality: 'Lahore',
  addressCountry: 'PK',
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}

const ensureLeadingSlash = (path: string) => (path.startsWith('/') ? path : `/${path}`)

export const absoluteUrl = (path = '/') => new URL(ensureLeadingSlash(path), siteConfig.url).toString()

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.defaultImage,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        contactType: 'sales',
        availableLanguage: ['en'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.addressLocality,
      addressCountry: siteConfig.addressCountry,
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: siteConfig.logo,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function serviceSchema(input: {
  name: string
  description: string
  path: string
  image: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: organizationSchema(),
    serviceType: input.name,
    image: input.image,
    areaServed: input.areaServed ?? 'Worldwide',
  }
}

export function howToSchema(input: {
  name: string
  description: string
  path: string
  steps: Array<{ name: string; text: string; image?: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    totalTime: 'PT0S',
    step: input.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

export function aboutPageSchema(input: {
  name: string
  description: string
  path: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    primaryImageOfPage: input.image,
    mainEntity: organizationSchema(),
  }
}

export function contactPageSchema(input: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntity: organizationSchema(),
  }
}

export function collectionSchema(input: {
  name: string
  description: string
  path: string
  items: Array<{ name: string; description: string; image: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    about: organizationSchema(),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        description: item.description,
        image: item.image,
      })),
    },
  }
}
