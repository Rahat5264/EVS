import Image from 'next/image'
import { Globe, Sparkles, Lightbulb } from 'lucide-react'

export default function FabricTypes() {
  return (
    <section className="bg-[#303a4a] px-6 py-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="overflow-hidden rounded-[6px] bg-[#1d2633] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="order-2 lg:order-1 relative min-h-[320px] sm:min-h-[380px] lg:min-h-[520px]">
              <Image
                src="https://fqc.edraaksystems.com/wp-content/uploads/2026/05/69cb79297f7252660280f348_Case-Study-home-page.png"
                alt="Case study visual inspection"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="order-1 lg:order-2 px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
              <div className="mb-4 text-sm font-medium text-white/80 sm:text-base">Case Study</div>
              <h2 className="mb-4 max-w-3xl text-[36px] font-medium leading-[1.18] text-white">
                AI-Powered Visual Inspection Delivering Results Across Industries
              </h2>
              <p className="mb-6 max-w-3xl text-[13px] leading-[1.55] text-white/60 sm:text-[14px]">
                <span className="font-semibold text-white">EVS AI Vision System</span> automates visual inspections on textile lines. It scans fabric at up to 200 m/min using machine vision, detects defects in real-time with AI, and integrates with optimization tools to improve accuracy, reduce manual errors, and ensure reliable quality control and traceability across production.
              </p>

              <div className="border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-6 text-white/95 sm:gap-8 lg:gap-10">
                  <div className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <Globe className="h-4 w-4 text-white/90" />
                    <span>Integrity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <Sparkles className="h-4 w-4 text-white/90" />
                    <span>Excellence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <Lightbulb className="h-4 w-4 text-white/90" />
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
