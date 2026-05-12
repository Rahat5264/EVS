import Image from 'next/image'
import StructuredData from '@/components/seo/StructuredData'
import { breadcrumbSchema, createPageMetadata, serviceSchema } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'FMCGs | EVS AI Vision for Consumer Goods Manufacturing',
  description:
    'Scalable engineering solutions for fast-moving consumer goods manufacturing with AI vision, inspection, and automation support.',
  path: '/industries/fmcgs',
  image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69ce6d7d2267bcce937e3e28_iLKy2.jpg',
})

export default function FMCGsPage() {
  return (
    <main className="bg-[#0f1416] text-white">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FMCGs', path: '/industries/fmcgs' },
          ]),
          serviceSchema({
            name: 'FMCGs',
            description:
              'Scalable engineering solutions for fast-moving consumer goods manufacturing with AI vision, inspection, and automation support.',
            path: '/industries/fmcgs',
            image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69ce6d7d2267bcce937e3e28_iLKy2.jpg',
            areaServed: 'Fast-moving consumer goods manufacturing',
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
              FMCGs
            </h1>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16px] text-white/80">
              Scalable engineering solutions for fast-moving consumer goods manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Delivering Excellence in FMCG Manufacturing</h2>
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We support FMCG manufacturers by delivering flexible, high-efficiency systems that enable rapid production, consistent quality, and market responsiveness.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              Our team understands the high-volume, fast-paced nature of FMCG operations.
            </p>

            <div className="mt-8">
              {/* Large main image */}
              <div className="h-[260px] w-full overflow-hidden rounded-md bg-[#222831] md:h-[320px] lg:h-[380px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69ce6d7d2267bcce937e3e28_iLKy2.jpg"
                  alt="packaging inspection"
                  width={1200}
                  height={800}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold">Why Choose Us?</h3>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              FMCG success depends on speed, scalability, and reliability. Our experience across multiple industries allows us to deliver adaptable solutions that grow with your business.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We help FMCG manufacturers stay competitive, efficient, and future-ready.
            </p>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-md border border-white/8 bg-[#232b33] p-6">
              <h4 className="text-lg font-semibold">What We Offer</h4>
              <ul className="mt-4 space-y-3 text-[15px] text-white/80">
                <li>
                  <strong>High-Efficiency Production Systems</strong> – Engineering support for fast and reliable manufacturing lines.
                </li>
                <li>
                  <strong>Utility & Infrastructure Solutions</strong> – Robust systems designed for continuous operations.
                </li>
                <li>
                  <strong>Automation & Process Control</strong> – Solutions to improve speed, consistency, and cost efficiency.
                </li>
                <li>
                  <strong>Facility Expansion & Optimization</strong> – Scalable designs to support growing demand.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
