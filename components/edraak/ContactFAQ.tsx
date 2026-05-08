'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is EVS?',
      answer:
        'EVS is an AI-powered vision system that delivers accurate inspections across industries. We use advanced computer vision and machine learning to detect defects, anomalies, and quality issues with precision.',
    },
    {
      question: 'Who is EVS designed for?',
      answer:
        'EVS is designed for manufacturers, system integrators, and solution providers who need reliable quality control and inspection solutions across various industries including textile, pharma, agriculture, and more.',
    },
    {
      question: 'How does the partnership model work?',
      answer:
        'We work with partners to integrate our AI vision platform into their solutions. We provide technical support, training, and ongoing assistance to ensure successful deployment and maximum value.',
    },
    {
      question: 'Do you support integration with existing production hardware?',
      answer:
        'Yes, our system is designed to integrate seamlessly with existing production setups and hardware. We analyze your specific requirements and ensure smooth integration without disrupting operations.',
    },
    {
      question: 'What kind of support do partners receive?',
      answer:
        'Partners receive comprehensive support including technical documentation, training, API access, dedicated support team, performance monitoring, and regular updates to ensure long-term success.',
    },
    {
      question: 'Is training and ongoing support available?',
      answer:
        'Absolutely. We provide initial training for your team, documentation, and continuous support to ensure your team can effectively deploy and maintain the system. We also provide regular updates and improvements.',
    },
  ]

  return (
    <section className="bg-[#2f3948] px-6 py-12 text-white md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <span className="text-sm font-medium text-white">FAQ</span>
          <h2 className="mt-2 text-3xl font-medium md:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-white/10 bg-[#3a4556]/40 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-medium text-white transition hover:bg-[#3a4556]/60 flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="border-t border-white/10 px-6 py-4 text-sm text-white/75 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
