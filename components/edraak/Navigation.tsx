'use client'

import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#2f3948]/96 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69e76ba1c02a312bab552342_logo-evs.png"
            alt="EVS Logo"
            width={110}
            height={56}
            className="h-auto w-[82px] sm:w-[100px]"
          />
        </Link>

        <nav className="hidden md:flex rounded-lg border border-white/10 bg-[#2f3948]/95 px-8 py-3 backdrop-blur-md">
          <ul className="flex items-center gap-9 text-[17px] font-medium text-white/95">
            <li className="relative group">
              <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                Industries ▾
              </a>

                <div className="absolute left-0 top-full w-[250px] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="rounded-lg border border-white/10 bg-slate-800/95 p-2">
                    <ul className="flex flex-col gap-2 text-[15px]">
                      {[
                        { label: 'Textiles & Apparel', href: '/industries/textiles-and-apparel' },
                        { label: 'Pharma', href: '/industries/pharma' },
                        { label: 'Agriculture', href: '/industries/agriculture' },
                        { label: 'FMCGs', href: '/industries/fmcgs' },
                        { label: 'Food', href: '/industries/food' },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block rounded-md px-4 py-3 hover:bg-slate-700/70 hover:text-blue-300"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            </li>

            <li>
              <Link className="hover:text-blue-400" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400" href="/process">
                Process
              </Link>
            </li>
            <li><a className="hover:text-blue-400" href="/case-studies">Case Studies</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-block rounded-lg border border-white/10 bg-[#2f3948]/95 px-5 py-2.5 text-sm font-semibold text-white hover:text-blue-400">
            Contact us
          </Link>

          <button
            className="inline-block text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[68px] z-40 bg-black/50 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu drawer */}
          <div className="fixed left-0 right-0 top-[68px] z-50 max-h-[calc(100vh-68px)] overflow-y-auto bg-[#2f3948] md:hidden">
            <nav className="px-6 py-6">
              <div className="space-y-2">
                {/* Industries */}
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex w-full items-center justify-between py-3 text-left font-medium text-white hover:text-blue-400 transition"
                >
                  Industries
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {industriesOpen && (
                  <div className="ml-4 space-y-1 rounded bg-[#3a4556]/50 p-3">
                    {[
                      { label: 'Textiles & Apparel', href: '/industries/textiles-and-apparel' },
                      { label: 'Pharma', href: '/industries/pharma' },
                      { label: 'Agriculture', href: '/industries/agriculture' },
                      { label: 'FMCGs', href: '/industries/fmcgs' },
                      { label: 'Food', href: '/industries/food' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-white/80 hover:text-blue-300 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* About Us */}
                <Link
                  href="/about-us"
                  className="block py-3 font-medium text-white hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Process */}
                <Link
                  href="/process"
                  className="block py-3 font-medium text-white hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Process
                </Link>

                {/* Case Studies */}
                <Link
                  href="/case-studies"
                  className="block py-3 font-medium text-white hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </div>
            </nav>

            {/* Contact button */}
            <div className="border-t border-white/10 px-6 py-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-lg bg-blue-500 py-3 text-center font-semibold text-white transition hover:text-blue-300"
              >
                Contact us
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
