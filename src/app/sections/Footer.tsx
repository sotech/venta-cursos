import React from 'react'
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter} from 'lucide-react'

function Footer() {
    return (
        <footer className="w-full border-t bg-[#FFA726] text-white">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 KikiCreativa. Derechos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="KikiCreativa on Facebook">
              <Facebook className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="KikiCreativa on Twitter">
              <Twitter className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="KikiCreativa on Instagram">
              <Instagram className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="KikiCreativa on LinkedIn">
              <Linkedin className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer
