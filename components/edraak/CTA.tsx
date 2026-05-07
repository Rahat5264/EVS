import Image from 'next/image'

export default function CTA() {
  const stats = [
    { value: '98%', label: 'Projects delivered on schedule' },
    { value: '999+', label: 'Custom process systems deployed' },
    { value: '100%', label: 'Regulatory-compliant integrations' },
    { value: '20+', label: 'Years of experiance in industries' },
  ]

  return (
    <section className="bg-[#303a4a] px-6 py-12 text-[#eef3fa] md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1120px] gap-6 lg:grid-cols-[1fr_1.08fr] lg:gap-9">
        <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-1">
          {stats.map((item) => (
            <article
              key={item.value}
              className="relative flex min-h-[205px] flex-col justify-end rounded-md bg-[#4a5566] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.1)] md:min-h-[225px] lg:min-h-[245px]"
            >
              <span className="absolute right-5 top-5 inline-block h-3 w-3 rounded-full bg-[#e8edf5]" />
              <h3 className="text-[42px] font-medium leading-none tracking-[-0.02em] text-[#f2f6fc]">
                {item.value}
              </h3>
              <p className="mt-1.5 max-w-[28ch] text-[21px] leading-[1.16] tracking-[-0.01em] text-[#ccd6e6]">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        <div className="order-1 pt-1 lg:order-2 lg:pl-1">
          <p className="text-[30px] font-medium tracking-[-0.02em] text-[#eef3fa]">Succes Story</p>
          <h2 className="mt-3 max-w-[20ch] text-[36px] font-medium leading-[1.08] tracking-[-0.03em] text-[#f0f4fa]">
            Partnering with textile industry to revolutionize
          </h2>
          <p className="mt-4 max-w-[45ch] text-[22px] leading-[1.32] text-[#9eacbf]">
            Edraak Systems integrates EVS AI vision platform for the fabric industry, detecting faults like stains, holes, and seams at high speeds, optimizing cutting plans to reduce waste, enhance yield, and ensure full traceability for efficient, precise production.
          </p>

          <div className="relative mt-6 h-[230px] w-full overflow-hidden rounded-md bg-[#4a5566] md:h-[260px] lg:h-[290px]">
            <Image
              src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg"
              alt="Industrial success story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
