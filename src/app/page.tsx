'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useAnimation } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function HomePage() {
  const courses = [
    {
      title: "Diseño de Libros Artesanales: De la Idea al Papel",
      description: "Aprende a crear libros personalizados desde cero, incluyendo técnicas de encuadernación y diseño artístico para portadas únicas.",
      price: "$49.99",
    },
    {
      title: "Alcancías Creativas con Materiales Reciclados",
      description: "Diseña y personaliza alcancías únicas utilizando materiales reciclados, combinando creatividad y sostenibilidad.",
      price: "$69.99",
    },
    {
      title: "Crea Tu Propio Merch: Tazas, Camisetas y Más",
      description: "Descubre técnicas sencillas para personalizar artículos como tazas y camisetas, ideales para regalos o emprendimientos.",
      price: "$59.99",
    },
  ]

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

  const controls = useAnimation()
  const ref = useRef(null)
  const statsRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            controls.start(i => ({
              opacity: 1,
              x: 0,
              transition: { delay: i * 0.1 },
            }))
          }, 300)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#FFA726] sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenido a KikiCreativa
                </h1>
                <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 h-20">
                  <TypeAnimation
                    sequence={[
                      '¡Descubre un mundo de conocimiento de la mano de la mejor emprendedora!',
                      1000,
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={1}
                    cursor={false}
                  />
                </div>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">Buscar cursos</Button>
                <Button variant="outline" className="border-[#FFB6C6] text-[#FFA726] hover:bg-[#FFB6C6]/10">Aprender más</Button>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#FFA726]/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#FFA726]">
              Cursos Recomendados
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={controls}
                >
                  <Card className="hover:border-[#FFB6C6] transition-colors h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{course.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <span className="text-2xl font-bold">{course.price}</span>
                      <Button className="bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">¡Comprar ya!</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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