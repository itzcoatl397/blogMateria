import React from 'react'
import { Globalizacion } from './Globalizacionon'

export const Hero = () => {
    return (
        <div className="bg-[#06111F] text-white min-h-screen">

            {/* NAVBAR */}
            <nav className="bg-[#081A2E] border-b border-cyan-400/20">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🌎</span>

                        <span className="font-bold text-lg">
                            Globalización
                        </span>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm">

                        <a
                            href="#"
                            className="hover:text-cyan-400 transition"
                        >
                            Inicio
                        </a>

                        <a
                            href="#"
                            className="hover:text-cyan-400 transition"
                        >
                            Económica
                        </a>

                        <a
                            href="#"
                            className="hover:text-cyan-400 transition"
                        >
                            Social
                        </a>

                        <a
                            href="#"
                            className="hover:text-cyan-400 transition"
                        >
                            Cultural
                        </a>

                        <a
                            href="#"
                            className="hover:text-cyan-400 transition"
                        >
                            Tecnológica
                        </a>

                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-400 text-[#06111F] px-5 py-2 rounded-full font-semibold transition">
                        Explorar
                    </button>

                </div>
            </nav>


            {/* HERO */}
            <section className="min-h-[calc(100vh-73px)] flex items-center">

                <div className="container mx-auto px-6">

                    <span className="text-cyan-400 tracking-widest text-sm">
                        🌐 MUNDO · CONEXIÓN · CAMBIO
                    </span>

                    <h1 className="text-6xl md:text-8xl font-black mt-5">
                        GLOBALIZACIÓN
                    </h1>

                    <p className="text-gray-300 text-xl max-w-2xl mt-6">
                        Un mundo conectado a través de la economía,
                        sociedad, cultura y tecnología.
                    </p>

                    <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-[#06111F] px-7 py-3 rounded-full font-bold transition">
                        Explorar temas →
                    </button>

                </div>

            </section>


            {/* SECCIÓN GLOBALIZACIÓN */}
            <section className="w-full bg-white text-black border-t border-cyan-400/20 py-12">

                <div className="flex justify-center">
                    <Globalizacion />
                </div>

            </section>


            {/* FOOTER */}
            <footer className="border-t border-cyan-400/20 py-4">

                <div className="container mx-auto px-6 text-center text-sm text-gray-400">

                    © 2024 Globalización. Todos los derechos reservados.

                </div>

            </footer>

        </div>
    )
}
