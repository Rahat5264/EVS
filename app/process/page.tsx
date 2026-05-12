import Image from 'next/image'
import OurProcess from '@/components/edraak/OurProcess'
import HowWeWork from '@/components/edraak/HowWeWork'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, createPageMetadata, howToSchema } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'EVS Process | Capture, Label, Train, Deploy, Action',
  description:
    'Learn how our AI-powered vision system works through a clear five-step process: capture, label, train, deploy, and action.',
  path: '/process',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69d3b8105499afee719ff10d_process-image.png',
})

const processSteps = [
  {
    name: 'Capture',
    text: 'High-speed cameras capture clear production imagery so every relevant defect can be analyzed reliably.',
  },
  {
    name: 'Label',
    text: 'Images are annotated with the defect, quality, or traceability labels needed to train the model accurately.',
  },
  {
    name: 'Train',
    text: 'The AI model is trained on your production data to detect the patterns that matter for your process.',
  },
  {
    name: 'Deploy',
    text: 'The trained system is integrated into the production line for real-time inspection and monitoring.',
  },
  {
    name: 'Action',
    text: 'The platform triggers alerts, marking, traceability, or optimization actions based on inspection results.',
  },
]

export default function ProcessPage() {
  return (
    <main className="bg-[#303a4a] text-white">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Process', path: '/process' },
          ]),
          howToSchema({
            name: 'EVS Process',
            description:
              'Learn how our AI-powered vision system works through a clear five-step process: capture, label, train, deploy, and action.',
            path: '/process',
            steps: processSteps,
          }),
        ]}
      />
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
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69d3b8105499afee719ff10d_process-image.png"
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
