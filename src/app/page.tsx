'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

export default function HomePage() {
  const courses = [
    {
      title: "Curso web 1",
      description: "Detalles 1.",
      price: "$49.99",
    },
    {
      title: "Curso web 1",
      description: "Detalles 2.",
      price: "$69.99",
    },
    {
      title: "Curso web 1",
      description: "Detalles 3.",
      price: "$59.99",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-[#FFA726] text-white backdrop-blur supports-[backdrop-filter]:bg-[#FFA726]/60">
        <div className="container flex h-14 items-center">
          <div className="ml-8 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Kiki Creativa</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium text-white">
              <Link href="/courses">Cursos</Link>
              <Link href="/about">Acerca de</Link>
              <Link href="/contact">Contacto</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="mr-2 border-[#FFB6C6] text-[#FFA726] hover:bg-[#FFB6C6]/10">
                Iniciar sesión
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
                  Bienvenido a los cursos de Kiki Creativa
                </h1>
                <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 h-20">
                  <TypeAnimation
                    sequence={[
                      '¡Descubre un mundo de conocimientos de la mano de la mejor emprendedora!',
                      500,
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={1}
                    cursor={false}
                  />
                </div>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">Buscar Cursos</Button>
                <Button variant="outline" className="border-[#FFB6C6] text-[#FFA726] hover:bg-[#FFB6C6]/10">Aprender más</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFA726]/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#FFA726]">
              Cursos recomendados
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
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
                      <Button className="bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">¡Comprar!</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#FFA726] text-white">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Kiki creativa
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="LearnHub on Facebook">
              <Facebook className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="LearnHub on Twitter">
              <Twitter className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="LearnHub on Instagram">
              <Instagram className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
            <Link href="#" aria-label="LearnHub on LinkedIn">
              <Linkedin className="h-6 w-6 text-white hover:text-[#FFB6C6]" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}