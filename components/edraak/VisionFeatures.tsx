import Image from 'next/image'

const metrics = [
  {
    value: '98%',
    label: 'Projects delivered on schedule',
  },
  {
    value: '999+',
    label: 'Custom process systems deployed',
  },
  {
    value: '100%',
    label: 'Regulatory-compliant integrations',
  },
  {
    value: '20+',
    label: 'Years of experience in industries',
  },
]

export default function VisionFeatures() {
  return (
    <section className="bg-[#0a1428] py-14 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        <div className="hidden lg:grid grid-cols-2 gap-5">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="relative min-h-[250px] rounded-md border border-white/10 bg-white/6 px-6 pt-7 pb-6 flex flex-col justify-end overflow-hidden"
            >
              <div className="absolute top-5 right-5 h-4 w-4 rounded-full bg-primary" />
              <div className="text-5xl font-light tracking-tight text-white mb-2">{metric.value}</div>
              <p className="text-white/60 text-base leading-snug max-w-[18ch]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="pt-1 lg:pl-6">
          <div className="text-primary text-2xl font-semibold mb-6">Success Story</div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 max-w-xl">
            Partnering with textile industry to revolutionize
          </h2>
          <p className="text-white/60 text-base lg:text-lg leading-7 max-w-xl mb-10">
            Edraak Systems integrates EVS AI vision platform for the fabric industry,
            detecting faults like stains, holes, and seams at high speeds, optimizing
            cutting plans to reduce waste, enhance yield, and ensure full traceability
            for efficient, precise production.
          </p>

          <div className="relative h-[220px] w-full max-w-[640px] overflow-hidden rounded-md ring-1 ring-white/10">
            <Image
              src="/hero-camera.jpg"
              alt="Success story image"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
            {metrics.map((metric) => (
              <div
                key={`mobile-${metric.value}`}
                className="relative min-h-[200px] rounded-md border border-white/10 bg-white/6 px-6 pt-7 pb-6 flex flex-col justify-end overflow-hidden"
              >
                <div className="absolute top-5 right-5 h-4 w-4 rounded-full bg-primary" />
                <div className="text-5xl font-light tracking-tight text-white mb-2">{metric.value}</div>
                <p className="text-white/60 text-base leading-snug max-w-[18ch]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
