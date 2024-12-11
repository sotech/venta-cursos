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
      <Footer/>
    </div>
  )
}