import Image from 'next/image'

export default function HowWeWork() {
  return (
    <section className="bg-[#303a4a] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="relative min-h-[340px] overflow-hidden rounded-[4px] bg-[#001f48] md:min-h-[420px]">
          <Image
            src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/159021-818026286.mp4"
            alt="How we work"
            fill
            className="object-cover"
            priority={false}
          />

          <div className="absolute inset-0 bg-[#001a3f]/46" />

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="relative w-full max-w-[340px] px-4 md:max-w-[360px] md:px-0">
              <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-1 rounded-[14px] bg-[#16335e]/75" />
              <div className="pointer-events-none absolute inset-0 translate-x-6 translate-y-2 rounded-[14px] bg-[#1b4678]/55" />

              <article className="relative overflow-hidden rounded-[14px] bg-[#112647]/92 p-6 text-white shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src="/hero-camera.jpg"
                  alt="Card background"
                  fill
                  className="object-cover opacity-18"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#112647]/78" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 rounded-t-[14px] bg-gradient-to-b from-white/20 to-transparent" />
                <p className="relative mb-5 font-medium leading-none text-white/92">How we work</p>
                <h3 className="relative mb-3 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] text-white">
                Meticulous attention to every detail
              </h3>
                <p className="relative max-w-[40ch] leading-[1.55] text-white/82">
                EVS inspects production with superhuman speed, detecting defects and inconsistencies missed by
                manual checks, ensuring precise quality control.
              </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
