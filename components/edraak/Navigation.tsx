import { ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="bg-[#0a1428] text-white py-4 md:py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left - Logo */}
        <div className="flex items-center justify-between gap-3 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <Image
              src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69e76ba1c02a312bab552342_logo-evs.png"
              alt="EVS Logo"
              width={50}
              height={50}
              className="h-10 md:h-12 w-auto"
            />
            <span className="hidden sm:inline text-base md:text-xl font-semibold text-white">Edraak Systems</span>
          </div>
          <button className="lg:hidden flex items-center justify-center text-white">
            <Menu className="w-8 h-8" />
          </button>
        </div>
        
        {/* Middle - Menu */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-sm w-full lg:w-auto">
          <a href="#" className="text-white hover:text-primary transition flex items-center gap-1">
            Industries <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-primary transition">About Us</a>
          <a href="#" className="text-white hover:text-primary transition">Process</a>
          <a href="#" className="text-white hover:text-primary transition">Case Studies</a>
        </div>
        
        {/* Right - Contact Button */}
        <button className="hidden lg:inline-flex bg-slate-700 hover:bg-slate-600 text-white px-6 py-2.5 rounded font-medium transition">
          Contact us
        </button>
      </div>
    </nav>
  )
}
