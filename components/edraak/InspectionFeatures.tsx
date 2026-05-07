import Image from 'next/image'

export default function InspectionFeatures() {
  const projects = [
    {
      number: '01',
      title: 'Edraak vision System',
      description:
        'Ensures precise inspection of production outputs, detecting defects quickly and reliably.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-4.jpeg',
      href: '#',
    },
    {
      number: '02',
      title: 'Traceability with Vision Systems',
      description:
        'Records and tracks every inspection for full process transparency and quality control.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.50-PM.jpeg',
      href: '#',
    },
    {
      number: '03',
      title: 'Measurement Systems',
      description:
        'Supports accurate measurements to maintain product standards and reduce errors.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM.jpeg',
      href: '#',
    },
    {
      number: '04',
      title: 'Fabric Width Management',
      description:
        'Monitors fabric production in real time, ensuring consistent dimensions and minimal waste.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-1.jpeg',
      href: '#',
    },
    {
      number: '05',
      title: 'Pharmaceutical',
      description:
        ' Inspects production lines for compliance, spotting defects and maintaining safety standards.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-2.jpeg',
      href: '#',
    },
    {
      number: '06',
      title: 'Color & Shade Variation System',
      description:
        'Detects color inconsistencies to maintain product quality in textiles and coatings.',
      image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-07-at-12.21.51-PM-3.jpeg',
      href: '#',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#141c29] to-[#1a2331] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
            Latest Projects
          </p>

          <h2 className="mx-auto max-w-[470px] text-[36px] font-medium leading-[1.15] text-white">
            Projects that highlight our AI-based inspection solutions across
            industries
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative block h-[340px] overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

              {/* Top Number + Line */}
              <div className="absolute left-0 top-6 z-10 w-full px-6">
                <span className="text-[22px] font-semibold text-white">
                  {project.number}
                </span>

                <div className="mt-4 h-[1px] w-full bg-white/30" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <h3 className="mb-3 text-[22px] font-semibold leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#7da7ff]">
                  {project.title}
                </h3>

                <p className="mb-5 text-[14px] leading-[1.6] text-white/80">
                  {project.description}
                </p>

                <span className="inline-flex items-center text-[13px] font-medium text-white transition-colors duration-300 group-hover:text-[#7da7ff]">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}