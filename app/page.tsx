import Hero from '@/components/edraak/Hero'
import OurProcess from '@/components/edraak/OurProcess'
import HowWeWork from '@/components/edraak/HowWeWork'
import FabricTypes from '@/components/edraak/FabricTypes'
import InspectionFeatures from '@/components/edraak/InspectionFeatures'
import Industries from '@/components/edraak/Industries'
import CTA from '@/components/edraak/CTA'
import Testimonial from '@/components/edraak/Testimonial'
import NewsUpdates from '@/components/edraak/NewsUpdates'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
