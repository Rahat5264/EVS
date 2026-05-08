export default function ContactVision() {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden text-white md:min-h-[700px] lg:min-h-[760px]"
      style={{
        backgroundImage: 'url(https://db.edraaksystems.com/wp-content/uploads/2026/05/69cb6ad06a94d0b9cd9bf5e7_Success-Story-image-Home-page-p-2000.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1280px] items-center px-6 py-16 md:min-h-[700px] md:px-10 lg:min-h-[760px] lg:px-12">
        <div className="ml-auto max-w-[700px] pt-12 text-left md:max-w-[720px] md:pt-0 lg:max-w-[760px]">
          <span className="block text-[15px] font-medium tracking-[-0.01em] text-white/95 md:text-[18px]">
            Worldwide Experience. Partner-First Approach.
          </span>
          <h2 className="mt-5 max-w-[20ch] text-[22px] font-medium leading-[1.08] tracking-[-0.04em] text-white md:text-[28px] lg:text-[34px]">
            We bring proven AI vision technology and hands-on support to every integration partnership.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-white/72 md:text-[18px]">
            Our team collaborates with solution providers across industries and regions, helping them seamlessly integrate, customize, and optimize the EVS Vision Platform for their customers.
          </p>

          <div className="mt-12 h-px w-full bg-white/20" />

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <div className="text-[54px] font-medium leading-none tracking-[-0.05em] text-white md:text-[66px]">
                98%
              </div>
              <p className="mt-2 text-[16px] leading-[1.35] text-white/70">
                On-time integration delivery
              </p>
            </div>
            <div>
              <div className="text-[54px] font-medium leading-none tracking-[-0.05em] text-white md:text-[66px]">
                99%
              </div>
              <p className="mt-2 text-[16px] leading-[1.35] text-white/70">
                Partner satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
