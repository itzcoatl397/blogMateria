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

        </div>
    );
}
