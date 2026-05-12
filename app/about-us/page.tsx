import Image from 'next/image'
import StructuredData from '@/components/seo/StructuredData'
import { aboutPageSchema, breadcrumbSchema, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'About Edraak Systems and EVS',
  description:
    'Learn about Edraak Systems and EVS, the AI fabric inspection platform built for textile quality control, automation, and traceability.',
  path: '/about-us',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb7c782b53fed66d42be47_About-us-main-image.png',
})

const stats = [
  { value: '500+', label: 'Realized Solutions' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years of Experience' },
  { value: '10+', label: 'Work Industries' },
  { value: '60+', label: 'Deployed Solutions' },
  { value: '200+', label: 'Skilled Experts' },
]

const processCards = [
  {
    icon: '◌',
    title: 'In-Depth Process Understanding',
    description:
      'We analyze your production line, material flow, and defect challenges to design a vision system tailored to your exact operational needs.',
  },
  {
    icon: '✧',
    title: 'High Precision Data Collection',
    description:
      'High-speed industrial cameras capture continuous, high-resolution images, ensuring every defect is recorded with precision.',
  },
  {
    icon: '◉',
    title: 'Targeted AI Model Deployment',
    description:
      'We label defects and train customized AI models to detect specific patterns with high accuracy and minimal false alarms.',
  },
  {
    icon: '◈',
    title: 'Smooth System Integration',
    description:
      'Our solution integrates seamlessly with your existing setup, enabling real-time monitoring without disrupting operations.',
  },
  {
    icon: '◎',
    title: 'Automated Insights & Optimization',
    description:
      'The system instantly detects defects and triggers actions like marking, alerts, and optimization, reducing waste and improving efficiency.',
  },
  {
    icon: '⬢',
    title: 'Continuous Improvement & Support',
    description:
      'We provide ongoing support, model updates, and performance monitoring to ensure long-term value and system improvement.',
  },
]

export default function AboutUsPage() {
  return (
    <main className="bg-[#303a4a] text-white">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
          ]),
          aboutPageSchema({
            name: 'About Edraak Systems and EVS',
            description:
              'Learn about Edraak Systems and EVS, the AI fabric inspection platform built for textile quality control, automation, and traceability.',
            path: '/about-us',
            image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb7c782b53fed66d42be47_About-us-main-image.png',
          }),
        ]}
      />
      <section className="px-6 py-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1680px] rounded-[6px] bg-[#313a46] px-6 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10">
          <div className="flex min-h-[12vh] flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-[900px] lg:flex-1">
              <p className="mb-6 text-[18px] font-semibold text-white/95 md:mb-7 md:text-[20px]">
                About us – EVS
              </p>

              <h1 className="max-w-[30ch] text-[48px] font-medium leading-[1.08] tracking-[-0.03em] text-white">
                AI Fabric Inspection Company for Textile Industry
              </h1>
            </div>

            <div className="flex">
              <a
                href="#approach"
                className="rounded-md bg-[#3b82f6] px-6 py-3 text-[16px] font-medium text-white transition hover:bg-[#2f70da]"
              >
                Our approach
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 md:mt-14 md:pt-10">
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[44px] font-normal leading-none tracking-[-0.04em] text-white md:text-[54px] lg:text-[56px]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[12px] font-normal text-white/48 md:text-[13px] lg:text-[14px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#303a4a]">
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px] lg:h-[450px]">
          <Image
            src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb7c782b53fed66d42be47_About-us-main-image.png"
            alt="EVS office and connected inspection systems"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2b3240]/20" />
        </div>
      </section>

      <section className="px-6 py-14 md:py-18 lg:py-20">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="mx-auto max-w-[16ch] text-[28px] font-medium leading-[1.15] text-white md:text-[34px] lg:text-[36px]">
            Innovative Solutions, Industry-Grade Quality Standards
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-[1.5] text-white">
            At EVS, we follow a systematic and results-driven process that transforms raw production data into intelligent, actionable insights.
          </p>

          <p className="mx-auto mt-3 max-w-[680px] text-[11px] leading-[1.6] text-white/45 md:text-[12px]">
            Our AI-powered vision platform is designed to deliver accuracy, efficiency, and measurable improvements on the factory floor.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processCards.map((card) => (
              <article key={card.title} className="min-h-[180px] rounded-[4px] bg-[#4a5566] px-5 py-5 text-left shadow-[0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-10 text-[18px] text-white/90">{card.icon}</div>
                <h3 className="text-[19px] font-medium leading-[1.2] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-[11px] leading-[1.55] text-white/55 md:text-[12px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 pb-14 md:pb-20 lg:px-10">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[4px] bg-[#1d232b] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] bg-[#4b4a9a] md:min-h-[430px]">
            <Image
              src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69c51aed57768b960652f433_CTA-image.jpg"
              alt="EVS AI inspection approach"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <p className="text-[14px] font-medium text-white/75">Why Choose Us</p>
            <h2 className="mt-5 max-w-[16ch] text-[26px] font-medium leading-[1.16] text-white md:text-[30px] lg:text-[34px]">
              EVS combines deep expertise, advanced technologies, and an unwavering commitment to quality.
            </h2>
            <p className="mt-4 max-w-[470px] text-[12px] leading-[1.7] text-white/55 md:text-[13px]">
              We understand the complexity of pharmaceutical and chemical manufacturing and offer our clients:
            </p>

            <div className="my-7 h-px w-full bg-white/10" />

            <ul className="space-y-3 text-[12px] leading-[1.6] text-white/85 md:text-[13px]">
              <li>• Tailored solutions to fit your needs.</li>
              <li>• Strict GMP quality control.</li>
              <li>• Flexibility with complex projects.</li>
              <li>• Trustworthy and transparent partnership.</li>
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex w-fit rounded-[4px] bg-[#4a93ef] px-5 py-3 text-[12px] font-medium text-white transition hover:bg-[#3f85dc]"
            >
              Discover Our Solutions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}