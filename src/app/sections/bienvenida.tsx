import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"

const Bienvenida = () => {
    return (
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
    )
}

export default Bienvenida;