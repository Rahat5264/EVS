import type { Metadata } from 'next'
import { Instrument_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/edraak/Navigation'
import Footer from '@/components/edraak/Footer'
import './globals.css'

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Edraak Systems - AI Powered Vision System',
  description: 'Advanced AI-powered vision system for fabric inspection with real-time analysis and comprehensive quality control.',
  generator: 'v0.app',
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
        <Navigation />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
