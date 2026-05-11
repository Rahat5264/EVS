'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HERO_STOCK_VIDEO_URL =
  'https://fqc.edraaksystems.com/wp-content/uploads/2026/05/0_Technology_Futuristic_3840x2160.mov'

const TRANSPARENT_POSTER =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHZpZXdCb3g9IjAgMCAxIDEiLz4='

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const playback = videoElement.play()
    if (playback) {
      playback.catch(() => {})
    }
  }, [])

  return (
    <section className="hero-shell relative min-h-screen overflow-hidden bg-transparent text-white">

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="hero-main-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={TRANSPARENT_POSTER}
        style={{ backgroundColor: 'transparent' }}
        controls={false}
        disablePictureInPicture
      >
        <source src={HERO_STOCK_VIDEO_URL} />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* WRAPPER */}
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1220px] flex-col px-6 pt-7 pb-12 sm:px-10 lg:px-12">
        <div className="grid flex-1 grid-cols-1 items-center gap-14 pt-12 sm:pt-16 md:pt-24 lg:pt-28 lg:grid-cols-[1fr_430px]">

          <div className="max-w-[700px]">
            <p className="mb-4 text-[17px] text-white/95">
              Partner -Integrate - Customize - Optimize - Scale
            </p>

            <h1 className="max-w-[280px] sm:max-w-[760px] text-[16px] sm:text-[26px] md:text-[36px] lg:text-[48px] font-medium leading-[1.15] sm:leading-[1.08] tracking-[-0.03em]">
              AI-Powered Vision
              <br />
              Platform for
              <br />
              Industrial Solutions
            </h1>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-[#3b82f6] px-6 py-3 text-[16px] font-medium hover:bg-[#2f70da]"
            >
              Request a Demo
            </Link>
          </div>

          <aside className="w-full max-w-[430px] justify-self-start rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm lg:justify-self-end">

            <div className="relative h-[220px] w-full overflow-hidden rounded-xl">
              <Image
                src="/hero-camera.jpg"
                alt="Inspection camera"
                fill
                className="object-cover"
              />
            </div>

            <p className="pt-5 text-[17px] font-medium leading-[1.3] text-white">
              Providing customizable, scalable, and partner-integrated AI systems for quality control, traceability, optimization, and more across any industry using advanced vision technology.
            </p>

          </aside>

        </div>
      </div>
    </section>
  )
}