import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1f2733] text-white/90">
      <div className="mx-auto max-w-[1120px] px-6 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] xl:gap-8">
          <div>
            <Image
              src="https://db.edraaksystems.com/wp-content/uploads/2026/06/evs-logo.png"
              alt="EVS Logo"
              width={220}
              height={112}
              className="h-20 w-auto object-contain md:h-24 lg:h-28"
            />
            <p className="mt-10 max-w-[260px] text-[13px] leading-[1.45] text-white/72">
              EVS uses AI vision to deliver accurate inspections across industries. We bring quality and efficiency to every solution.
            </p>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-12">
            <ul className="space-y-4 text-[13px] leading-none text-white/78">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white">About EVS</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-white">Process</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-12">
            <p className="max-w-[280px] text-[13px] leading-[1.55] text-white/72">
              Reach out for partnerships, integrations, and product inquiries. We usually respond within one business day.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="xl:border-l xl:border-white/10 xl:pl-12">
            <a
              href="mailto:mail@edraakvisionsystems"
              className="block text-[18px] font-medium leading-tight text-white underline decoration-white/70 underline-offset-4 md:text-[22px]"
            >
              mail@edraakvisionsystems
            </a>
            <a
              href="tel:+923217973753"
              className="mt-4 block text-[18px] font-medium leading-tight text-white underline decoration-white/70 underline-offset-4 md:text-[22px]"
            >
              +92 3217973753
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© EVS. All Rights Reserved. Licensing</p>
          <p>EVS AI powered vision system.</p>
        </div>
      </div>
    </footer>
  )
}
