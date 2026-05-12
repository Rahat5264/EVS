import Image from 'next/image'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, createPageMetadata, serviceSchema } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Pharma | EVS AI Vision for Pharmaceutical Manufacturing',
  description:
    'Production-ready engineering and AI vision support for pharmaceutical manufacturing, cleanrooms, utilities, and regulated operations.',
  path: '/industries/pharma',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb8bdd2b00cfaa6b8aef74_Pharma-Industries.png',
})

export default function PharmaPage() {
  return (
    <main className="bg-[#0f1416] text-white">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pharma', path: '/industries/pharma' },
          ]),
          serviceSchema({
            name: 'Pharma',
            description:
              'Production-ready engineering and AI vision support for pharmaceutical manufacturing, cleanrooms, utilities, and regulated operations.',
            path: '/industries/pharma',
            image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb8bdd2b00cfaa6b8aef74_Pharma-Industries.png',
            areaServed: 'Pharmaceutical manufacturing',
          }),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-transparent">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ backgroundColor: 'transparent' }}
        >
          <source src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/159021-818026286.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="mb-2 text-sm text-white/70">Industry</p>
            <h1 className="mx-auto max-w-[46ch] text-[32px] font-semibold leading-[1.05] md:text-[48px]">
              Pharmaceutical
            </h1>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16px] text-white/80">
              Production of specialized chemicals to support diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Delivering Excellence in Pharmaceutical Manufacturing</h2>
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We support pharmaceutical companies in achieving the highest manufacturing standards - from cleanrooms and HVAC systems to process optimization and regulatory compliance.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              Our team understands the complexity of pharmaceutical production, where precision, safety, and reliability are essential. By combining technical expertise with regulatory knowledge, we help our partners create facilities that are not only efficient but also future-ready.
            </p>

            <div className="mt-8">
              {/* Large main image */}
              <div className="h-[260px] w-full overflow-hidden rounded-md bg-[#222831] md:h-[320px] lg:h-[380px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb8bdd2b00cfaa6b8aef74_Pharma-Industries.png"
                  alt="pharma manufacturing"
                  width={1200}
                  height={800}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold">Why Choose Us?</h3>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              Pharmaceutical manufacturing is a highly regulated, competitive, and fast-changing industry. Working with us means choosing a partner who understands these challenges and knows how to overcome them. Our experience with international pharmaceutical leaders allows us to bring best practices to every project, no matter the scale. With certified engineers, validation specialists, and a dedicated project team, we ensure that every solution is aligned with both current needs and future growth.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We don’t just deliver systems - we deliver trust, compliance, and lasting value.
            </p>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-md border border-white/8 bg-[#232b33] p-6">
              <h4 className="text-lg font-semibold">What We Offer</h4>
              <ul className="mt-4 space-y-3 text-[15px] text-white/80">
                <li>
                  <strong>Cleanroom &amp; HVAC Solutions</strong> – Design and modernization of cleanrooms and ventilation systems to maintain controlled environments that meet the strictest pharmaceutical standards.
                </li>
                <li>
                  <strong>Commissioning &amp; Qualification</strong> – Comprehensive equipment and system testing to confirm full compliance with industry regulations.
                </li>
                <li>
                  <strong>Process &amp; Utility Systems</strong> – Integrated engineering solutions for water treatment, steam generation, compressed air, and other critical utility systems.
                </li>
                <li>
                  <strong>Sterile Area Installation</strong> – Installation and optimization of sterile areas throughout the highest pharmaceutical production requirements.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
