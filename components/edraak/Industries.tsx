import Link from 'next/link'

export default function Industries() {
  const categories = [
    { label: 'Textiles & Apparel', href: '/industries/textiles-and-apparel' },
    { label: 'Pharmaceutical', href: '/industries/pharma' },
    { label: 'Agriculture', href: '/industries/agriculture' },
    { label: 'FMCGs', href: '/industries/fmcgs' },
    { label: 'Food', href: '/industries/food' },
  ]

  return (
    <section className="bg-[#303a4a] px-6 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.3fr] lg:gap-12">
        <div>
          <p className="max-w-[14ch] text-[46px] font-semibold leading-[1.04] text-white/95 md:text-[52px]">
            Our engineering solutions serve all industries
          </p>
        </div>

        <div className="border-t border-white/10">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group flex w-full items-center justify-between border-b border-white/10 py-4 text-left transition-colors duration-200 hover:border-white/25"
            >
              <span className="text-[22px] text-white/92 transition-colors duration-200 group-hover:text-[#7da7ff] md:text-[30px]">
                {category.label}
              </span>
              <span className="text-white/60 transition-colors duration-200 group-hover:text-[#7da7ff]">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
