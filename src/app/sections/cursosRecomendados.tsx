import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"


const CursosRecomendados = () => {
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

    const cursosRef = useRef(null)
    const controls = useAnimation()
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

        if (cursosRef.current) {
            observer.observe(cursosRef.current)
        }

        return () => {
            if (cursosRef.current) {
                observer.unobserve(cursosRef.current)
            }
        }
    }, [controls])



    return (
        <section ref={cursosRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#FFA726]/10" >
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
    )
}

export default CursosRecomendados;