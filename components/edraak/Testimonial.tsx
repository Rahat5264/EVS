export default function Testimonial() {
  return (
    <section className="bg-[#1a2331] px-6 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-[80px_1fr] md:gap-10">
        <div className="text-[72px] leading-none text-white/95">“</div>

        <div>
          <p className="max-w-[860px] text-[26px] leading-[1.2] text-white md:text-[40px]">
            With Edraak Mapping and Optimization, We were able to make our folding department not just
            paper-less but also reduced operational costs by 27%
          </p>

          <div className="mt-8">
            <p className="text-[22px] font-semibold text-white md:text-[30px]">Muhammad Younis</p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-white/55 md:text-[13px]">
              HOD Quality Control
            </p>
            <p className="text-[11px] text-white/42 md:text-[12px]">Nishat Chunian, Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  )
}
