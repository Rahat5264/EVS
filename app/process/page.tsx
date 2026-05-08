import Image from 'next/image'
import OurProcess from '@/components/edraak/OurProcess'
import HowWeWork from '@/components/edraak/HowWeWork'

export const metadata = {
  title: 'Process - Edraak Systems | AI Vision Inspection Process',
  description: 'Learn how our AI-powered vision system works: Capture, Label, Train, Deploy, and Action.',
}

export default function ProcessPage() {
  return (
    <main className="bg-[#303a4a] text-white">
      {/* Hero Section */}
      <section className="px-6 py-8 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1680px] rounded-[6px] bg-[#313a46] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-[18px] font-semibold text-white/95">
                EVS Process
              </p>

              <h1 className="max-w-[30ch] text-[48px] font-medium leading-[1.08] tracking-[-0.03em] text-white">
                Capture-Label-Train-Deploy-Action
              </h1>

              <p className="mt-6 max-w-[55ch] text-[16px] leading-[1.6] text-white/80">
                Our AI vision system follows a proven five-step process to deliver exceptional quality control and defect detection across your production line.
              </p>

              <a
                href="#ourprocess"
                className="mt-8 inline-flex w-fit rounded-md bg-[#3b82f6] px-6 py-3 text-[16px] font-medium text-white transition hover:bg-[#2f70da]"
              >
                Explore Process
              </a>
            </div>

            {/* Right - Process Flow Diagram */}
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full md:h-[480px] lg:h-[520px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb79297f7252660280f348_Case-Study-home-page.png"
                  alt="Process flow diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="ourprocess">
        <OurProcess />
      </section>

      {/* How We Work Section */}
      <section>
        <HowWeWork />
      </section>
    </main>
  )
}
