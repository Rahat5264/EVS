export default function ContactFeatures() {
  const features = [
    {
      title: 'Fast Response',
      description: 'We aim to get you on call meeting forward with comprehensive analysis within 24 hours.',
    },
    {
      title: 'Expert Support',
      description: 'Our team delivers clear and practical guidance tailored to your technical and business needs.',
    },
    {
      title: 'Global Collaboration',
      description: 'We work with partners across industries and regions, making integration convenient regardless of location.',
    },
    {
      title: 'Dedicated Partnership',
      description: 'Every inquiry is treated with clear attention, ensuring the right support for successful implementation.',
    },
  ]

  return (
    <section className="bg-[#2f3948] px-6 py-12 text-white md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <h2 className="text-3xl font-medium md:text-4xl">Get in touch</h2>
          <p className="mt-6 text-lg text-white/70">
            Your trusted partner for seamless AI vision integration
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-white/10 bg-[#3a4556]/40 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-[#3a4556]/60"
            >
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
