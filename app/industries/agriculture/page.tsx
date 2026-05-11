import Image from 'next/image'

export const metadata = {
  title: 'Agriculture - EVS | AI Vision for Agriculture',
  description:
    'Engineering solutions to support modern agricultural and agro-processing operations.',
}

export default function AgriculturePage() {
  return (
    <main className="bg-[#0f1416] text-white">
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
              Agriculture
            </h1>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16px] text-white/80">
              Engineering solutions to support modern agricultural and agro-processing operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Delivering Excellence in Agriculture Infrastructure</h2>
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We support agricultural and agro-based industries by delivering efficient processing, storage, and utility solutions that enhance productivity and reduce operational losses.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              Our expertise covers the full agricultural value chain, where reliability, sustainability, and scalability are critical for long-term growth.
            </p>

            <div className="mt-8">
              {/* Large main image */}
              <div className="h-[260px] w-full overflow-hidden rounded-md bg-[#222831] md:h-[320px] lg:h-[380px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb9965d175fb9f3f98ce04_Agricuture-Industry-.png"
                  alt="agricultural sorting"
                  width={1200}
                  height={800}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold">Why Choose Us?</h3>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              Agriculture demands efficiency, sustainability, and cost control. Our solutions are designed to maximize output while minimizing waste and downtime.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We deliver dependable systems that support growth, resilience, and long-term operational success.
            </p>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-md border border-white/8 bg-[#232b33] p-6">
              <h4 className="text-lg font-semibold">What We Offer</h4>
              <ul className="mt-4 space-y-3 text-[15px] text-white/80">
                <li>
                  <strong>Processing & Handling Systems</strong> – Engineering support for cleaning, grading, drying, and storage operations.
                </li>
                <li>
                  <strong>Utility & Water Management</strong> – Efficient water treatment, pumping, and energy systems for agricultural facilities.
                </li>
                <li>
                  <strong>Automation & Controls</strong> – Smart systems to improve process control and reduce manual dependencies.
                </li>
                <li>
                  <strong>Facility Design & Expansion</strong> – Scalable layouts for agro-processing and storage units.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
