import Image from 'next/image'
import ContactFAQ from '@/components/edraak/ContactFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, collectionSchema, createPageMetadata, faqSchema } from '@/lib/seo'

const caseStudies = [
  {
    number: '01',
    title: 'Edraak Vision System',
    description:
      'Ensures precise inspection of production outputs, detecting defects quickly and reliably.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-4.jpeg',
    href: '#',
  },
  {
    number: '02',
    title: 'Traceability with Vision Systems',
    description:
      'Records and tracks every inspection for full process transparency and quality control.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.50-PM.jpeg',
    href: '#',
  },
  {
    number: '03',
    title: 'Measurement Systems',
    description:
      'Supports accurate measurements to maintain product standards and reduce errors.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM.jpeg',
    href: '#',
  },
  {
    number: '04',
    title: 'Fabric Width Management',
    description:
      'Monitors fabric production in real time, ensuring consistent dimensions and minimal waste.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-1.jpeg',
    href: '#',
  },
  {
    number: '05',
    title: 'Pharmaceutical',
    description:
      'Inspects production lines for compliance, spotting defects and maintaining safety standards.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-2.jpeg',
    href: '#',
  },
  {
    number: '06',
    title: 'Color & Shade Variation System',
    description:
      'Detects color inconsistencies to maintain product quality in textiles and coatings.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-3.jpeg',
    href: '#',
  },
]

const faqItems = [
  {
    question: 'What is EVS?',
    answer: 'EVS is an advanced AI-Powered Vision Platform designed for industrial inspection. It serves as the core technology that captures high-resolution images and uses AI to detect defects, ensure quality, and provide traceability in real time.',
  },
  {
    question: 'Who is EVS designed for?',
    answer: 'EVS is built for system integrators, solution providers, and technology partners. You can integrate our platform into your own solutions, train it for specific use cases, customize it, and then deliver it to your customers under your own brand or system name.',
  },
  {
    question: 'How does the partnership model work?',
    answer: 'Partners integrate the EVS Vision Platform into their offerings, train the AI models according to their target industry (for example, fabric defect detection), customize the solution as needed, and sell the complete system to end customers. We support you at every stage — from integration to optimization and scaling.',
  },
  {
    question: 'Can we train and customize EVS for our specific industry?',
    answer: 'Yes. Our platform is highly flexible. Partners can train the AI models on their own datasets, customize inspection logic, and tailor the system to meet exact requirements of their customers — whether in textiles, pharmaceuticals, or any other manufacturing sector.',
  },
  {
    question: 'Do you support integration with existing production hardware?',
    answer: 'Absolutely. EVS is designed for easy and seamless integration with industrial cameras, production lines, PLCs, and other automation systems. Our team provides technical support to ensure smooth implementation.',
  },
  {
    question: 'What kind of support do partners receive?',
    answer: 'We offer dedicated technical guidance, training for your team, documentation, and ongoing support throughout the integration, customization, and deployment process so you can successfully deliver solutions to your customers.',
  },
  {
    question: 'How do I start a partnership with EVS?',
    answer: 'Simply fill out the form below or request a demo. Our team will discuss your requirements, explain the integration process, and guide you on how to incorporate EVS into your solutions.',
  },
  {
    question: 'Is training and ongoing support available?',
    answer: 'Yes. We provide training, deployment support, and ongoing technical assistance to ensure your team gets the most out of your AI inspection system — from initial setup to long-term performance optimization.',
  },
]

export const metadata = createPageMetadata({
  title: 'Case Studies | Edraak Systems',
  description:
    'Explore successful EVS implementations across textile inspection, traceability, measurement, pharmaceutical, and color variation use cases.',
  path: '/case-studies',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-4.jpeg',
})

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#303a4a] text-white">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
          ]),
          collectionSchema({
            name: 'Case Studies',
            description:
              'Explore successful EVS implementations across textile inspection, traceability, measurement, pharmaceutical, and color variation use cases.',
            path: '/case-studies',
            items: caseStudies.map((study) => ({
              name: study.title,
              description: study.description,
              image: study.image,
            })),
          }),
          faqSchema(faqItems),
        ]}
      />
      {/* Hero Section */}
      <section className="px-6 py-8 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1680px]">
          <div className="text-center">
            <p className="mb-3 text-[14px] font-semibold text-white/95">
              Case Studies
            </p>
            <h1 className="mx-auto max-w-[50ch] text-[48px] font-medium leading-[1.08] tracking-[-0.03em] text-white">
              Showcasing excellence in every detail.
            </h1>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#303a4a] px-6 py-10 md:py-14">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <a
                key={study.title}
                href={study.href}
                className="group relative block h-[340px] overflow-hidden rounded-xl"
              >
                {/* Background Image */}
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                {/* Top Number */}
                <div className="absolute left-0 top-6 z-10 px-6">
                  <span className="text-[24px] font-semibold text-white">
                    {study.number}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <h3 className="mb-3 text-[24px] font-semibold leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#7da7ff]">
                    {study.title}
                  </h3>

                  <p className="mb-5 text-[14px] leading-[1.6] text-white/85">
                    {study.description}
                  </p>

                  <span className="inline-flex items-center text-[13px] font-medium text-white transition-colors duration-300 group-hover:text-[#7da7ff]">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[14px] font-semibold uppercase tracking-widest text-white/60">
              FAQ
            </p>
            <h2 className="text-[36px] font-medium text-white">
              Frequently Asked Questions
            </h2>
          </div>

              {/* FAQ Grid */}
              <div>
                {/* Reuse ContactFAQ styles and behavior */}
                {/* Import ContactFAQ as a client component to preserve interaction */}
                <ContactFAQ faqs={faqItems} />
              </div>
        </div>
      </section>
    </main>
  )
}
