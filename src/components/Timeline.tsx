import { Chrono } from "react-chrono";
import { infoData } from "../data/database";

function Timeline() {
    return (
        <div className="w-full h-[650px] max-w-6xl mx-auto px-4">

            <Chrono
                items={infoData}
                mode="VERTICAL_ALTERNATING"
                disableToolbar
                cardHeight={200}
                cardWidth={450}
                slideShow={false}
                theme={{
                    primary: "#38bdf8",
                    secondary: "#0f172a",

                    cardBgColor: "#0f172a",
                    cardForeColor: "#e2e8f0",

                    titleColor: "#38bdf8",
                    titleColorActive: "#ffffff",

                    cardTitleColor: "#ffffff",
                    cardSubtitleColor: "#94a3b8",

                    cardDetailedTextColor: "#cbd5e1",

                    iconBackgroundColor: "#38bdf8",
                    iconColor: "#0f172a",

                    titleBackgroundColor: "#0f172a",
                }}
            />

        </div>
    );
}

export default Timeline;
