'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import CountUp from 'react-countup'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Bienvenida from "./sections/bienvenida"
import CursosRecomendados from "./sections/cursosRecomendados"
import Testimonios from "./sections/testimonios"
import Estadisticas from "./sections/estadisticas"
import Footer from "./sections/Footer"

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
        <Estadisticas />
        <Testimonios />
      </main>
      <Footer/>
    </div>
  )
}