'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Bienvenida from "./sections/bienvenida"
import CursosRecomendados from "./sections/cursosRecomendados"
import Estadisticas from "./sections/estadisticas"

export default function HomePage() {


  const testimonials = [
    {
      name: "Ester Rodriguez",
      image: "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?height=100&width=100",
      text: "\"Gracias a este curso, aprendí a diseñar libros artesanales únicos que ahora vendo en mi propia tienda en línea. ¡Una experiencia increíble!\"",
    },
    {
      name: "Jorge Gonzalez",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s?height=100&width=100",
      text: "\"Siempre quise personalizar mis propios artículos, y este curso me dio las herramientas para crear alcancías creativas que encantan a mi familia y amigos.\"",
    },
    {
      name: "Emilia Alvarez",
      image: "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png?height=100&width=100",
      text: "\"Los instructores explican todo paso a paso, y ahora tengo una línea de productos personalizados que se venden muy bien. ¡Altamente recomendado!\"",
    },
  ]


  const sliderRef = useRef(null)



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

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
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#FFA726]">
              Que dicen nuestros alumnos...
            </h2>
            <div className="relative">
              <Slider ref={sliderRef} {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-4">
                    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mb-4"
                      />
                      <p className="text-gray-600 mb-4">{testimonial.text}</p>
                      <h3 className="font-semibold text-lg text-[#FFA726]">{testimonial.name}</h3>
                    </div>
                  </div>
                ))}
              </Slider>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              >
                <ChevronLeft className="w-6 h-6 text-[#FFA726]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              >
                <ChevronRight className="w-6 h-6 text-[#FFA726]" />
              </button>
            </div>
          </div>
        </section>
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