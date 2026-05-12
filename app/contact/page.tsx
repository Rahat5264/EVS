import ContactForm from '@/components/edraak/ContactForm'
import ContactFeatures from '@/components/edraak/ContactFeatures'
import ContactVision from '@/components/edraak/ContactVision'
import ContactFAQ from '@/components/edraak/ContactFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, contactPageSchema, createPageMetadata, faqSchema } from '@/lib/seo'

const contactFaqs = [
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

export const metadata = createPageMetadata({
  title: 'Contact Edraak Systems | EVS Partnerships and Demos',
  description:
    'Contact Edraak Systems to discuss EVS partnerships, integrations, demos, and custom AI vision inspection projects.',
  path: '/contact',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg',
})

export default function ContactPage() {
  return (
    <main>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          contactPageSchema({
            name: 'Contact Edraak Systems',
            description:
              'Contact Edraak Systems to discuss EVS partnerships, integrations, demos, and custom AI vision inspection projects.',
            path: '/contact',
          }),
          faqSchema(contactFaqs),
        ]}
      />
      <ContactForm />
      <ContactFeatures />
      <ContactVision />
      <ContactFAQ faqs={contactFaqs} />
    </main>
  )
}
