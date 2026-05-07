'use client'

import Image from 'next/image'
import { useState } from 'react'

const HERO_STOCK_VIDEO_URL =
  'https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-machine-in-a-production-line-4558-large.mp4'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="hero-shell relative min-h-screen overflow-hidden bg-black text-white">

      {/* VIDEO */}
      <video
        className="hero-main-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-camera.jpg"
      >
        <source src={HERO_STOCK_VIDEO_URL} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* WRAPPER */}
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1220px] flex-col px-6 pt-7 pb-12 sm:px-10 lg:px-12">

        {/* ================= HEADER ================= */}
        <header className="fixed left-0 top-0 z-[100] w-full">
          <div className="mx-auto flex max-w-[1220px] items-center justify-between px-6 py-4 sm:px-10 lg:px-12">

            {/* LOGO */}
            <a href="#" className="inline-flex items-center">
              <Image
                src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69e76ba1c02a312bab552342_logo-evs.png"
                alt="EVS"
                width={110}
                height={56}
                className="h-auto w-[82px] sm:w-[100px]"
              />
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex rounded-xl border border-white/10 bg-slate-700/70 px-8 py-3 backdrop-blur-md">
              <ul className="flex items-center gap-9 text-[17px] font-medium text-white/95">

                {/* INDUSTRIES */}
                <li className="relative group">
                  <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                    Industries ▾
                  </a>

                  {/* DROPDOWN (DESKTOP ONLY) */}
                  <div className="absolute left-0 top-full w-[250px] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <div className="rounded-lg border border-white/10 bg-slate-800/95 p-2">
                      <ul className="flex flex-col gap-2 text-[15px]">
                        {[
                          'Textile & Apparel',
                          'Pharma',
                          'Agriculture',
                          'FMCGs',
                          'Food',
                        ].map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block rounded-md px-4 py-3 hover:bg-slate-700/70 hover:text-blue-300"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                <li><a className="hover:text-blue-400" href="#">About Us</a></li>
                <li><a className="hover:text-blue-400" href="#">Process</a></li>
                <li><a className="hover:text-blue-400" href="#">Case Studies</a></li>
              </ul>
            </nav>

            {/* CTA + MOBILE BUTTON */}
            <div className="flex items-center gap-3">
              <button className="rounded-md bg-slate-600/85 px-5 py-2.5 text-sm font-semibold hover:bg-slate-500/90">
                Contact us
              </button>

              {/* HAMBURGER */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
              <ul className="flex flex-col gap-4 text-white">

                <li className="font-semibold">Industries</li>
                <ul className="ml-4 flex flex-col gap-2 text-white/80">
                  {[
                    'Textile & Apparel',
                    'Pharma',
                    'Agriculture',
                    'FMCGs',
                    'Food',
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="block py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

                <li><a href="#">About Us</a></li>
                <li><a href="#">Process</a></li>
                <li><a href="#">Case Studies</a></li>
              </ul>
            </div>
          )}
        </header>

        {/* ================= HERO (UNCHANGED) ================= */}
        <div className="grid flex-1 grid-cols-1 items-center gap-14 pt-32 lg:grid-cols-[1fr_430px] lg:pt-28">

          <div className="max-w-[700px]">
            <p className="mb-4 text-[17px] text-white/95">
              Partner -Integrate - Customize - Optimize - Scale
            </p>

            <h1 className="max-w-[760px] text-[48px] font-medium leading-[1.08] tracking-[-0.03em]">
              AI-Powered Vision
              <br />
              Platform for Industrial
              <br />
              Solutions
            </h1>

            <button className="mt-8 rounded-md bg-[#3b82f6] px-6 py-3 text-[16px] font-medium hover:bg-[#2f70da]">
              Request a Demo
            </button>
          </div>

          <aside className="w-full max-w-[430px] justify-self-start rounded-2xl border border-white/10 bg-slate-900/65 p-4 backdrop-blur-sm lg:justify-self-end">

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