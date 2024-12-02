'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import CountUp from 'react-countup'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Bienvenida from "./sections/bienvenida"
import CursosRecomendados from "./sections/cursosRecomendados"
import Testimonios from "./sections/testimonios"

export default function HomePage() {

  const statsRef = useRef(null)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-[#FFA726] text-white backdrop-blur supports-[backdrop-filter]:bg-[#FFA726]/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="ml-6 mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">KikiCreativa</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium text-white">
              <Link href="/courses">Cursos</Link>
              <Link href="/about">Acerca</Link>
              <Link href="/contact">Contacto</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="mr-2 border-[#FFB6C6] text-[#FFA726] hover:bg-[#FFB6C6]/10">
                Ingresar
              </Button>
              <Button className="bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">Registrarse</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Bienvenida />
        <CursosRecomendados />
        <section ref={statsRef} className="w-full py-12 md:py-24 bg-[#FFA726]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <CountUp end={100} duration={2} enableScrollSpy className="text-4xl font-bold mb-2 text-[#FFA726]" />
                <p className="text-xl text-gray-600">Cursos disponibles</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <CountUp end={3500} duration={2} enableScrollSpy className="text-4xl font-bold mb-2 text-[#FFA726]" />
                <p className="text-xl text-gray-600">Estudiantes activos</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <CountUp end={20} duration={2} enableScrollSpy className="text-4xl font-bold mb-2 text-[#FFA726]" />
                <p className="text-xl text-gray-600">Horas de estudio</p>
              </div>
            </div>
          </div>
        </section>
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