import Image from 'next/image'

export const metadata = {
  title: 'Food - EVS | AI Vision for Food Processing',
  description:
    'Hygienic and efficient systems to support food processing and production.',
}

export default function FoodPage() {
  return (
    <main className="bg-[#0f1416] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg"
            alt="Food inspection"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="mb-2 text-sm text-white/70">Industry</p>
            <h1 className="mx-auto max-w-[46ch] text-[32px] font-semibold leading-[1.05] md:text-[48px]">
              Food
            </h1>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16px] text-white/80">
              Hygienic and efficient systems to support food processing and production
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">Delivering Excellence in Food Manufacturing</h2>
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We support food manufacturers in building safe, hygienic, and efficient production environments that meet industry standards and consumer expectations.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              Our expertise ensures that food processing facilities operate with consistency, safety, and operational efficiency.
            </p>

            <div className="mt-8">
              {/* Large main image */}
              <div className="h-[260px] w-full overflow-hidden rounded-md bg-[#222831] md:h-[320px] lg:h-[380px]">
                <Image
                  src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cbd4459c6d03bf46187473_Food-Inspection.png"
                  alt="food processing"
                  width={1200}
                  height={800}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold">Why Choose Us?</h3>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              Food manufacturing requires strict hygiene, reliability, and compliance. Our solutions help food producers maintain quality while scaling operations efficiently.
            </p>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              We deliver systems that protect product integrity and support sustainable growth.
            </p>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-md border border-white/8 bg-[#232b33] p-6">
              <h4 className="text-lg font-semibold">What We Offer</h4>
              <ul className="mt-4 space-y-3 text-[15px] text-white/80">
                <li>
                  <strong>Hygienic Process Design</strong> – Engineering solutions aligned with food safety and hygiene requirements.
                </li>
                <li>
                  <strong>Utility & Process Systems</strong> – Steam, water, and air systems designed for food-grade operations.
                </li>
                <li>
                  <strong>Automation & Controls</strong> – Smart systems for process consistency and reduced manual handling.
                </li>
                <li>
                  <strong>Facility Optimization</strong> – Layout and workflow improvements to enhance productivity.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
