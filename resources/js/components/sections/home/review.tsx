import { SectionHeader } from "@/components/cards/section-header"
import { Slider } from "@/components/cards/slider";

export default function review() {
    const SectionHeaderData = {
        slogan: 'Kundengeschichten',
        title: {
            initial: 'Unsere Kunden  ',
            middle: 'empfehlen',
            last: ' uns sehr gerne weiter.',
            breakPoint: {
                before: false,
            }
        },
    }
    const sliders = [
        {
            image: '/images/review-image.png',
            description: "Die Zusammenarbeit verlief reibungslos. Das Team war proaktiv, kompetent und entwarf eine Anlage, die unsere Sparziele deutlich übertraf. Die Energie-App ist übersichtlich und sehr benutzerfreundlich. Ich empfehle sie jedem Hausbesitzer, der eine zuverlässige und langfristige Energielösung sucht, uneingeschränkt weiter.",
            name: "Jenna Carvalho",
            position: "Homeowner & Eco-Advocate"
        },
        {
            image: '/images/review-image.png',
            description: "Die Zusammenarbeit verlief reibungslos. Das Team war proaktiv, kompetent und entwarf eine Anlage, die unsere Sparziele deutlich übertraf. Die Energie-App ist übersichtlich und sehr benutzerfreundlich. Ich empfehle sie jedem Hausbesitzer, der eine zuverlässige und langfristige Energielösung sucht, uneingeschränkt weiter.",
            name: "Michael Rodriguez",
            position: "Homeowner & Tech Enthusiast"
        },
    ]
    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">

                <SectionHeader item={SectionHeaderData} />


                <div className="features grid grid-cols-1 gap-6 pt-6 lg:pt-10">

                    <Slider sliders={sliders} />

                </div>
            </div>
        </div>
    );
}
