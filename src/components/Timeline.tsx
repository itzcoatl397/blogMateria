import { Chrono } from "react-chrono";
import { infoData } from "../data/database";

function Timeline() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16">

            {/* ENCABEZADO */}
            <div className="text-center mb-10">

                <span className="text-cyan-500 font-bold tracking-[0.3em] text-sm uppercase">
                    México y el mundo
                </span>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
                    Globalización en México
                </h2>

                <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
                    La globalización se manifiesta en diferentes aspectos
                    de la vida económica, social, cultural y tecnológica.
                </p>

            </div>

            {/* TIMELINE */}
            <div className="w-full overflow-hidden">

                <Chrono
                    items={infoData}
                    mode="vertical"

                    cardHeight={200}
                    cardWidth={360}

                    slideShow={false}

                    disableToolbar

                    borderLessCards={false}

                    highlightCardsOnHover

                    focusActiveItemOnLoad

                    activeItemIndex={0}

                    theme={{
                        /* Línea */
                        primary: "#06b6d4",
                        secondary: "#cbd5e1",

                        /* Tarjetas */
                        cardBgColor: "#ffffff",
                        cardForeColor: "#334155",

                        /* Categorías / números */
                        titleColor: "#64748b",
                        titleColorActive: "#06b6d4",
                        titleBackgroundColor: "transparent",

                        /* Texto */
                        cardTitleColor: "#0f172a",
                        cardSubtitleColor: "#0891b2",
                        cardDetailedTextColor: "#475569",

                        /* Puntos */
                        iconBackgroundColor: "#06b6d4",
                        iconColor: "#ffffff",
                    }}
                />

            </div>

        </div>
    );
}

export default Timeline;
