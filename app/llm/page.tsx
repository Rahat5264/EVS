import type { Metadata } from 'next'

const siteUrl = 'https://edraakvisionsystems.com'

const logoUrl =
  'https://db.edraaksystems.com/wp-content/uploads/2026/05/69e769924cfa168d806ceef4_Untitled-design-3-1.png'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    'EVS (EDRAAK VISION SYSTEMS) | AI Vision Platform for Industrial Inspection & Automation',
  description:
    'EVS (EDRAAK VISION SYSTEMS) is an AI-powered industrial vision platform enabling manufacturers, OEMs, industrial partners, and system integrators to build, customize, train, optimize, and scale AI-based inspection, traceability, quality control, and automation solutions across industries.',
  applicationName: 'EVS (EDRAAK VISION SYSTEMS)',
  authors: [
    {
      name: 'Haroon Rasheed',
    },
  ],
  creator: 'Haroon Rasheed',
  publisher: 'EVS (EDRAAK VISION SYSTEMS)',
  keywords: [
    'EVS',
    'EDRAAK VISION SYSTEMS',
    'Edraak Vision Systems',
    'AI vision platform',
    'industrial AI platform',
    'AI inspection system',
    'automated inspection system',
    'vision inspection system',
    'industrial inspection system',
    'machine vision system',
    'computer vision system',
    'AI-powered inspection',
    'automated quality control',
    'AI quality control',
    'AI defect detection',
    'real-time defect detection',
    'surface inspection system',
    'fabric inspection system',
    'inline inspection system',
    'high-speed inspection system',
    'AI manufacturing platform',
    'industrial automation AI',
    'AI industrial solutions',
    'Industry 4.0',
    'smart manufacturing',
    'industrial automation',
    'smart factory AI',
    'vision AI',
    'deep learning inspection',
    'industrial computer vision',
    'AI visual analytics',
    'predictive quality analytics',
    'industrial monitoring system',
    'traceability system',
    'production optimization AI',
    'machine learning platform',
    'custom AI models',
    'AI deployment platform',
    'edge AI industrial systems',
    'industrial analytics',
    'factory digitization',
    'textile inspection AI',
    'pharmaceutical inspection system',
    'food quality inspection',
    'automotive inspection AI',
    'electronics inspection system',
    'packaging inspection AI',
    'steel surface inspection',
    'plastic defect detection',
    'manufacturing quality assurance',
  ],
  alternates: {
    canonical: `${siteUrl}/llm`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/llm`,
    title:
      'EVS (EDRAAK VISION SYSTEMS) | AI-Powered Vision Platform for Industrial Solutions',
    description:
      'Partner • Integrate • Customize • Optimize • Scale — EVS enables industries, OEMs, and partners to build scalable AI-powered vision inspection and automation systems.',
    siteName: 'EVS (EDRAAK VISION SYSTEMS)',
    locale: 'en_US',
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'EVS - EDRAAK VISION SYSTEMS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'EVS (EDRAAK VISION SYSTEMS) | AI Vision Platform for Industrial Automation',
    description:
      'Customizable AI-powered industrial vision systems for inspection, traceability, optimization, analytics, and quality control.',
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Industrial AI',
}

export default function LLMPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EVS (EDRAAK VISION SYSTEMS)',
    alternateName: ['EVS', 'Edraak Vision Systems', 'EDRAAK VISION SYSTEMS'],
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    description:
      'EVS (EDRAAK VISION SYSTEMS) is an AI-powered industrial vision platform that enables industries, manufacturers, OEMs, and system integrators to integrate, customize, optimize, train, and scale AI-based inspection and automation solutions using advanced computer vision technology.',
    slogan: 'Partner - Integrate - Customize - Optimize - Scale',
    foundingLocation: {
      '@type': 'Place',
      name: 'Lahore, Pakistan',
    },
    areaServed: 'Worldwide',
    founder: {
      '@type': 'Person',
      name: 'Haroon Rasheed',
      jobTitle: 'Founder & CEO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92 3217973753',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Computer Vision',
      'Machine Vision',
      'Industrial Automation',
      'AI Inspection Systems',
      'Automated Inspection',
      'Quality Control',
      'Industrial Analytics',
      'Industrial Vision Systems',
      'Defect Detection',
      'Traceability Systems',
      'Production Optimization',
      'Machine Learning',
      'Deep Learning',
      'Smart Manufacturing',
      'Factory Automation',
      'Industrial AI',
      'AI-Based Quality Assurance',
    ],
    sameAs: [
      'https://www.linkedin.com/company/edraak-systems/',
      'https://x.com/edraaksystems',
      'https://www.youtube.com/@IndustrialProcessOptimization',
    ],
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-5xl">
          <img src={logoUrl} alt="EVS Logo" className="mb-10 h-20 w-auto" />

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60">
            AI-Powered Industrial Vision Platform
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            EVS
            <span className="mt-4 block text-3xl text-white/70 md:text-5xl">
              (EDRAAK VISION SYSTEMS)
            </span>
          </h1>

          <p className="mt-10 text-2xl font-medium leading-relaxed md:text-4xl">
            Partner - Integrate - Customize - Optimize - Scale
          </p>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80 md:text-2xl">
            AI-Powered Vision Platform for Industrial Solutions. Providing customizable,
            scalable, and partner-integrated AI systems for quality control, traceability,
            optimization, inspection, analytics, and industrial automation across manufacturing
            industries using advanced computer vision technology.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">Core Capabilities</h2>
            <ul className="space-y-4 leading-relaxed text-white/80">
              <li>• AI-Based Automated Inspection Systems</li>
              <li>• Real-Time Defect Detection</li>
              <li>• Industrial Computer Vision Solutions</li>
              <li>• Smart Quality Control Automation</li>
              <li>• AI Traceability Systems</li>
              <li>• Inline Inspection Systems</li>
              <li>• High-Speed Vision Inspection</li>
              <li>• Production Optimization AI</li>
              <li>• AI Model Training & Deployment</li>
              <li>• Smart Manufacturing Solutions</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">Industries We Serve</h2>
            <ul className="space-y-4 leading-relaxed text-white/80">
              <li>• Textile & Apparel Manufacturing</li>
              <li>• Pharmaceutical Industries</li>
              <li>• Food & Beverage Processing</li>
              <li>• Automotive Manufacturing</li>
              <li>• Packaging & Printing Industries</li>
              <li>• Electronics Manufacturing</li>
              <li>• Plastic & Polymer Industries</li>
              <li>• Steel & Metal Inspection</li>
              <li>• Logistics & Warehousing</li>
              <li>• OEMs & Industrial Integrators</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10">
          <h2 className="mb-8 text-4xl font-bold">Platform Overview</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              EVS is designed for manufacturers, industrial partners, OEMs, enterprises, and system
              integrators looking to deploy scalable AI-powered vision systems tailored to their
              operational requirements.
            </p>

            <p>
              The platform enables industries to collaborate with AI specialists and computer vision
              engineers to build custom-trained models for defect detection, quality control,
              inspection automation, process optimization, predictive analytics, and industrial
              traceability.
            </p>

            <p>
              EVS supports complete industrial AI workflows - integrate data sources, customize AI
              models, optimize operational efficiency, and scale intelligent manufacturing solutions
              globally.
            </p>

            <p>
              Using advanced machine vision, deep learning, and industrial automation technologies,
              EVS helps companies reduce waste, improve product quality, increase efficiency, and
              accelerate digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-4">
          {['Custom AI Models', 'Scalable Infrastructure', 'Industrial Integration', 'Real-Time Analytics'].map(
            (item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="mb-4 text-2xl font-bold">Founder & CEO</h3>
            <p className="text-lg text-white/80">Haroon Rasheed</p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="mb-4 text-2xl font-bold">Contact Number</h3>
            <p className="text-lg text-white/80">+92 3217973753</p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="mb-4 text-2xl font-bold">Headquarters</h3>
            <p className="text-lg text-white/80">Lahore, Pakistan</p>
          </div>
        </div>
      </section>
    </main>
  )
}