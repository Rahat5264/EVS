import Hero from '@/components/edraak/Hero'
import OurProcess from '@/components/edraak/OurProcess'
import HowWeWork from '@/components/edraak/HowWeWork'
import FabricTypes from '@/components/edraak/FabricTypes'
import InspectionFeatures from '@/components/edraak/InspectionFeatures'
import Industries from '@/components/edraak/Industries'
import CTA from '@/components/edraak/CTA'
import Testimonial from '@/components/edraak/Testimonial'
import NewsUpdates from '@/components/edraak/NewsUpdates'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, createPageMetadata, serviceSchema } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'AI Fabric Inspection Systems for Manufacturing',
  description:
    'AI-powered fabric inspection systems for manufacturing teams that need real-time defect detection, traceability, and quality control.',
  path: '/',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg',
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredData
        data={[
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          serviceSchema({
            name: 'AI Fabric Inspection System',
            description:
              'AI-powered fabric inspection for manufacturing teams that need automated defect detection, traceability, and quality control.',
            path: '/',
            image:
              'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg',
          }),
        ]}
      />
      <Hero />
      <CTA />
      <FabricTypes />
      <OurProcess />
      <HowWeWork />
      <Industries />
      <InspectionFeatures />
      <Testimonial />
      <NewsUpdates />
    </main>
  )
}
