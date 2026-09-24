import React from 'react'
import Timeline from './Timeline'

export const Globalizacion = () => {

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">

            <div className="shadow-2xl rounded-lg p-8">

                <h2 className="text-3xl font-black uppercase py-6">
                    ¿Qué es la globalización?
                </h2>

                <div className="mt-4">
                    <p className="text-xl md:text-2xl font-mono leading-relaxed">
                        La globalización es un proceso de creciente interconexión e
                        interdependencia entre los países, las economías y las sociedades
                        a nivel mundial.
                    </p>
                </div>

            </div>

            <div className="mt-12 w-full text-white">
                <Timeline />
            </div>
            <hr />
            <div className="min-h-screen bg-gray-50 p-6 md:p-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                        Globalización
                    </h1>
                    <p className="text-gray-500 text-center mb-10">
                        Ventajas y desventajas por categoría
                    </p>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Columna Ventajas */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-emerald-700 mb-5 flex items-center gap-2">
                                <span className="w-2 h-8 bg-emerald-500 rounded-full" />
                                Ventajas
                            </h2>
                            <div className="space-y-4">
                                <section className="bg-white border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-emerald-700 mb-2">Económicas</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Mayor comercio internacional y acceso a mercados más amplios para las empresas</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Reducción de costos de producción gracias a la especialización y economías de escala</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Más inversión extranjera directa, que impulsa el crecimiento en países en desarrollo</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Precios más bajos para los consumidores por la competencia y la eficiencia</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-emerald-700 mb-2">Tecnológicas</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Transferencia más rápida de tecnología e innovación entre países</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Mayor acceso a internet y comunicaciones globales</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Colaboración internacional en investigación y desarrollo</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-emerald-700 mb-2">Culturales y sociales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Intercambio cultural y mayor conocimiento de otras costumbres</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Difusión de ideas, arte, música y gastronomía entre países</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Más oportunidades de estudiar, trabajar o vivir en el extranjero</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-emerald-700 mb-2">Laborales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Creación de empleo en sectores exportadores y multinacionales</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Movilidad laboral y posibilidad de acceder a mercados de trabajo internacionales</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-emerald-700 mb-2">Políticas</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Mayor cooperación internacional frente a problemas globales (cambio climático, salud pública, seguridad)</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-emerald-500 shrink-0">✓</span><span>Fortalecimiento de organismos internacionales que fomentan el diálogo entre países</span></li>
                                    </ul>
                                </section>
                            </div>
                        </div>

                        {/* Columna Desventajas */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-rose-700 mb-5 flex items-center gap-2">
                                <span className="w-2 h-8 bg-rose-500 rounded-full" />
                                Desventajas
                            </h2>
                            <div className="space-y-4">
                                <section className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-rose-700 mb-2">Económicas</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Aumento de la desigualdad económica entre países ricos y pobres</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Dependencia de economías locales frente a mercados internacionales volátiles</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Cierre de pequeñas empresas que no pueden competir con multinacionales</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Fuga de capitales y evasión fiscal por parte de grandes corporaciones</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-rose-700 mb-2">Laborales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Pérdida de empleos locales por deslocalización a países con mano de obra más barata</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Precarización laboral y condiciones de trabajo desiguales en algunos países</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Presión a la baja sobre salarios en sectores expuestos a competencia global</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-rose-700 mb-2">Culturales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Homogeneización cultural y pérdida de identidades y tradiciones locales</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Predominio de unas pocas culturas (especialmente occidental) sobre otras</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Desaparición de lenguas y costumbres minoritarias</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-rose-700 mb-2">Ambientales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Mayor huella de carbono por el transporte internacional de mercancías</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Explotación intensiva de recursos naturales en países en desarrollo</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Deslocalización de industrias contaminantes hacia países con regulaciones más laxas</span></li>
                                    </ul>
                                </section>

                                <section className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-rose-700 mb-2">Políticas y sociales</h3>
                                    <ul className="space-y-1.5">
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Pérdida de soberanía nacional frente a organismos y acuerdos internacionales</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Mayor vulnerabilidad ante crisis económicas globales (efecto contagio)</span></li>
                                        <li className="flex gap-2 text-gray-700 text-sm leading-relaxed"><span className="text-rose-500 shrink-0">✗</span><span>Concentración de poder económico en pocas corporaciones multinacionales</span></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
