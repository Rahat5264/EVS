import type { Metadata } from 'next'
import { Instrument_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/edraak/Navigation'
import Footer from '@/components/edraak/Footer'
import StructuredData from '@/components/seo/StructuredData'
import { organizationSchema, siteConfig, websiteSchema } from '@/lib/seo'
import './globals.css'

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Edraak Systems | AI-Powered Vision Inspection',
  description: siteConfig.description,
  generator: 'v0.app',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Edraak Systems | AI-Powered Vision Inspection',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: 'Edraak Systems AI vision inspection platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edraak Systems | AI-Powered Vision Inspection',
    description: siteConfig.description,
    images: [siteConfig.defaultImage],
  },
  robots: {
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
  icons: {
    icon: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-21-at-6.07.49-PM.jpeg',
    shortcut: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-21-at-6.07.49-PM.jpeg',
    apple: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-21-at-6.07.49-PM.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable} bg-white`}>
      <body className="font-sans antialiased">
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        <Navigation />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
