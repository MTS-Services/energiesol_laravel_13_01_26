
import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DeliveryEnergy() {
    const item = {
        slogan: "Bundesweite Solarabdeckung",
        image: '/images/delivery-engergy.png',
        title: {
            middle: 'BUNDESWEITE SOLARABDECKUNG',
            last: ' Gemeinsam zur Energie-Unabhängigkeit',
        },
        btn: {
            label: 'Angebot erstellen',
            href: route('configurator'),
            iconParentClassName: 'bg-primary!',
            iconClassName: 'w-4 h-4 text-secondary!',

        },
    }
    return (
        <div className="relative bg-linear-to-r from-btn-primary/15 to-info/5">
            <div
                className="absolute inset-y-0 right-0 z-0 h-full w-1/2"
                style={{
                    backgroundImage: "url('images/frame_dot.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <DefaultCardComp image={item.image} title={item.title} slogan={item.slogan} btn={item.btn} >
                <div className="flex flex-col">
                    <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                        Jedes Haus hat einen individuellen Energiebedarf. Deshalb setzen wir auf herstellerunabhängige Planung und arbeiten mit spezialisierten regionalen Fachpartnern zusammen, um die optimale Lösung für Ihr Dach zu realisieren.
                    </p>
                    <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                        Von der ersten Anfrage über die technische Planung bis hin zur fachgerechten Installation begleiten wir Sie persönlich durch jeden Schritt. Und auch danach bleiben wir an Ihrer Seite – mit zuverlässigem Service und kompetenter Unterstützung über viele Jahre hinweg.
                    </p>
                </div>
            </DefaultCardComp>
        </div>
    );
}
