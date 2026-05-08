import Image from 'next/image'

export const metadata = {
  title: 'Textiles & Apparel - EVS | AI Vision for Textile Production',
  description:
    'Advanced visual inspection for textile production, ensuring defect-free fabrics, consistent color, and precise measurements for quality-driven manufacturing.',
}

export default function TextilesPage() {
  return (
    <main className="bg-[#0f1416] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg"
            alt="Textile inspection"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="mb-2 text-sm text-white/70">Industry</p>
            <h1 className="mx-auto max-w-[46ch] text-[32px] font-semibold leading-[1.05] md:text-[48px]">
              Textiles & Apparel
            </h1>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16px] text-white/80">
              Advanced visual inspection for textile production, ensuring defect-free fabrics, consistent color, and precise measurements for quality-driven manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Ensuring Superior Quality in Textile & Apparel Production</h2>
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              EVS empowers textile and apparel manufacturers to achieve flawless quality, maximize productivity, and reduce waste. By automatically detecting defects, monitoring fabric dimensions, and ensuring consistent color and shade, we make production faster, more accurate, and fully traceable.
            </p>

            <div className="mt-8">
              {/* Large main image */}
              <div className="h-[260px] w-full overflow-hidden rounded-md bg-[#222831] md:h-[320px] lg:h-[380px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69ca4711747d43b7b5a0d653_Vision-Cameras1.jpg"
                  alt="factory"
                  width={1200}
                  height={800}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold">Why Choose Us?</h3>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              We pair deep industry experience with practical, scalable solutions. Our team delivers tailored integrations, on-site training, and ongoing support to help manufacturers improve yield, reduce downtime, and maintain consistent quality across production lines.
            </p>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-md border border-white/8 bg-[#232b33] p-6">
              <h4 className="text-lg font-semibold">What We Offer</h4>
              <ul className="mt-4 space-y-3 text-[15px] text-white/80">
                <li>
                  <strong>Inspection & Quality Control</strong> – High-speed visual inspection to detect defects and ensure consistent color and quality.
                </li>
                <li>
                  <strong>Process Monitoring</strong> – Streamline production workflows and provide real-time analytics.
                </li>
                <li>
                  <strong>Integration Services</strong> – Seamless integration with your existing production hardware and PLCs.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
