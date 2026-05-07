import Image from 'next/image'

const processSteps = [
  {
    title: 'Image Capture',
    description:
      'Industrial cameras capture high-resolution images with super human speed directly from the production line.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cceec63c7a9d4e05dc9c42_Image-Capture.png',
  },
  {
    title: 'Label',
    description:
      'Captured images are accurately annotated with defect types such as stains, holes, and seams.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69d367dcfc76c8ae1e2097a7_Label-Process.png',
  },
  {
    title: 'Train',
    description:
      'Advanced machine learning models, including deep learning networks, are trained on labeled images to detect, classify, and predict defects with high accuracy and minimal error.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cd126e43b389f2dd01d5b2_Image-Capture-2.png',
  },
  {
    title: 'Deploy',
    description:
      'Trained models are deployed on edge devices or cloud platforms, integrating seamlessly with the production line for real-time monitoring and automated decision-making.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69d36c634e2062d3a29dd991_Deploy-Process.png',
  },
  {
    title: 'Action',
    description:
      'The system triggers automated actions such as alerts, sorting, or quality adjustments based on detected defects, ensuring efficient production and reduced manual inspection.',
    image: 'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69ce5db42c4dd597b99f6417_SvIuw0.jpg',
  },
]

export default function OurProcess() {
  return (
    <section className="bg-[#303a4a] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-white/80">Our Process</p>
            <h2 className="text-[36px] font-medium text-white">From Capture to Quality</h2>
          </div>

          <button
            type="button"
            className="h-9 w-full rounded bg-[#4a93ef] px-6 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            View all Process
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="min-h-[248px] overflow-hidden rounded-md bg-[#4a5566]"
            >
              <div className="relative h-[140px] w-full md:h-[150px]">
                <Image src={step.image} alt={step.title} fill className="object-cover" />
              </div>
              <div className="px-4 py-3">
                <h3 className="mb-2 text-[24px] font-medium leading-tight text-white">{step.title}</h3>
                <p className="text-[11px] leading-[1.5] text-white/72">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
