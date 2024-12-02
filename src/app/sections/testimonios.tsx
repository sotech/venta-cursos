import { useRef } from "react"
import Slider from "react-slick"
import {ChevronLeft, ChevronRight} from 'lucide-react'

const Testimonios = () => {
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
    sliderRef?.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef?.current?.slickNext()
  }
  
    return (
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
    )
}

export default Testimonios;