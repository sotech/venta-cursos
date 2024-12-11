'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import CountUp from 'react-countup'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Bienvenida from "./sections/bienvenida"
import CursosRecomendados from "./sections/cursosRecomendados"
import Testimonios from "./sections/testimonios"
import Estadisticas from "./sections/estadisticas"
import Header from "./sections/header"

export default function HomePage() {

  const statsRef = useRef(null)

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <Bienvenida />
        <CursosRecomendados />
        <Estadisticas />
        <Testimonios />
      </main>
      <footer className="w-full border-t bg-[#FFA726] text-white">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 KikiCreativa. Derechos reservados.
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
    </div>
  )
}