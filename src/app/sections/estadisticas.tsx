import { useRef } from "react";
import CountUp from 'react-countup'

const Estadisticas = () => {

    const statsRef = useRef(null);

    return (
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
    )
}

export default Estadisticas;