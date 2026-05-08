import Image from 'next/image'

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
    answer: 'EVS is an AI-powered vision system designed for industrial quality control and inspection across multiple industries.',
  },
  {
    question: 'Who is EVS designed for?',
    answer: 'EVS is designed for manufacturing companies across textile, pharma, agriculture, food, and other industries requiring precision quality control.',
  },
  {
    question: 'How does the partnership model work?',
    answer: 'We work as partners with your team, providing customized solutions, training, and ongoing support to ensure success.',
  },
  {
    question: 'Can we train and customize EVS for our specific industry?',
    answer: 'Yes, we provide comprehensive training and customization services tailored to your specific industry and requirements.',
  },
  {
    question: 'Do you support integration with existing production hardware?',
    answer: 'Yes, our system is designed to integrate seamlessly with existing production lines and hardware.',
  },
  {
    question: 'What kind of support do partners receive?',
    answer: 'Partners receive ongoing technical support, system updates, performance monitoring, and continuous optimization.',
  },
  {
    question: 'How do I start a partnership with EVS?',
    answer: 'Contact our sales team to discuss your requirements and we will create a tailored partnership proposal.',
  },
  {
    question: 'Is training and ongoing support available?',
    answer: 'Yes, we provide comprehensive initial training and continuous support throughout your partnership with us.',
  },
]

export const metadata = {
  title: 'Case Studies - Edraak Systems | AI Vision Inspection Solutions',
  description: 'Explore our successful case studies and implementation across various industries using AI-powered vision inspection.',
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#303a4a] text-white">
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-lg border border-white/10 bg-[#2f3948] p-6 transition hover:bg-[#3a4556]"
              >
                <summary className="flex cursor-pointer items-center justify-between text-[16px] font-medium text-white">
                  {item.question}
                  <span className="ml-4 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.6] text-white/80">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
