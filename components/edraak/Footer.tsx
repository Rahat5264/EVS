import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0a1428] text-gray-300 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12 pb-12 border-b border-gray-700">
          {/* Left section - Logo and Description */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <Image
                  src="https://db.edraaksystems.com/wp-content/uploads/2026/05/69e769924cfa168d806ceef4_Untitled-design-3-1.png"
                  alt="EVS Logo"
                  width={180}
                  height={180}
                  className="h-24 md:h-40 w-auto"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
                Edraak uses AI vision to deliver accurate inspections across industries. We bring quality and efficiency to every solution.
              </p>
            </div>
          </div>

          {/* Navigation links - Left */}
          <div className="border-l-0 md:border-l border-gray-700 md:pl-12 text-center md:text-left">
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-primary transition text-gray-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Navigation links - Right */}
          <div className="border-l-0 md:border-l border-gray-700 md:pl-12 text-center md:text-left">
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition text-gray-300">About Edraak</a></li>
              <li><a href="#" className="hover:text-primary transition text-gray-300">Process</a></li>
            </ul>
            
            {/* Social icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 hover:border-primary flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 hover:border-primary flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 hover:border-primary flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info - Right */}
          <div className="border-l-0 xl:border-l border-gray-700 xl:pl-12 text-center xl:text-right">
            <div className="mb-6">
              <a href="mailto:mail@edraakvisionsystem.com" className="block text-white hover:text-cyan-400 transition font-medium text-base mb-6 underline">
                mail@edraakvisionsystem
              </a>
              <a href="tel:+923217973753" className="block text-white hover:text-cyan-400 transition font-medium text-base underline">
                +92 321 7973753
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-xs text-gray-500 text-center sm:text-left">
          <p>© Edraak Systems. All Rights Reserved. Licensing</p>
          <p>AI Powered Inspection System.</p>
        </div>
      </div>
    </footer>
  )
}
