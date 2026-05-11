'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

type ContactFAQProps = {
  faqs?: FAQItem[]
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'What is EVS?',
    answer:
      'EVS is an advanced AI-Powered Vision Platform designed for industrial inspection. It serves as the core technology that captures high-resolution images and uses AI to detect defects, ensure quality, and provide traceability in real time.',
  },
  {
    question: 'Who is EVS designed for?',
    answer:
      'EVS is built for system integrators, solution providers, and technology partners. You can integrate our platform into your own solutions, train it for specific use cases, customize it, and then deliver it to your customers under your own brand or system name.',
  },
  {
    question: 'How does the partnership model work?',
    answer:
      'Partners integrate the EVS Vision Platform into their offerings, train the AI models according to their target industry (for example, fabric defect detection), customize the solution as needed, and sell the complete system to end customers. We support you at every stage — from integration to optimization and scaling.',
  },
  {
    question: 'Do you support integration with existing production hardware?',
    answer:
      'Absolutely. EVS is designed for easy and seamless integration with industrial cameras, production lines, PLCs, and other automation systems. Our team provides technical support to ensure smooth implementation.',
  },
  {
    question: 'What kind of support do partners receive?',
    answer:
      'We offer dedicated technical guidance, training for your team, documentation, and ongoing support throughout the integration, customization, and deployment process so you can successfully deliver solutions to your customers.',
  },
  {
    question: 'Is training and ongoing support available?',
    answer:
      'Yes. We provide training, deployment support, and ongoing technical assistance to ensure your team gets the most out of your AI inspection system — from initial setup to long-term performance optimization.',
  },
]

export default function ContactFAQ({ faqs }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const list = faqs && faqs.length > 0 ? faqs : defaultFaqs

  return (
    <section className="bg-[#2f3948] px-6 py-12 text-white md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <span className="text-sm font-medium text-white">FAQ</span>
          <h2 className="mt-2 text-3xl font-medium md:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6 items-start">
          {/* split list into two columns so expanding an item only affects its own column */}
          {(() => {
            const mapped = list.map((faq, i) => ({ faq, i }))
            const left = mapped.filter((_, i) => i % 2 === 0)
            const right = mapped.filter((_, i) => i % 2 === 1)

            const renderItem = (entry: { faq: { question: string; answer: string }; i: number }) => {
              const { faq, i } = entry
              return (
                <div key={i} className="rounded-lg border border-white/10 bg-[#3a4556]/40 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    className="w-full px-6 py-4 text-left font-medium text-white transition hover:bg-[#3a4556]/60 flex items-center justify-between"
                  >
                    <span className="text-white/90">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`border-t border-white/10 px-6 text-sm text-white/75 leading-relaxed overflow-hidden transition-[max-height] duration-300 ${
                      openIndex === i ? 'max-h-80 py-4' : 'max-h-0 py-0'
                    }`}
                  >
                    <div>{faq.answer}</div>
                  </div>
                </div>
              )
            }

            return (
              <>
                <div className="flex flex-col gap-4">
                  {left.map(renderItem)}
                </div>
                <div className="flex flex-col gap-4">
                  {right.map(renderItem)}
                </div>
              </>
            )
          })()}
        </div>
      </div>
    </section>
  )
}
