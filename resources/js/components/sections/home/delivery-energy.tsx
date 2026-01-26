
import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DeliveryEnergy() {
    const item = {
        slogan: "Bundesweite Solarabdeckung",
        image: '/images/delivery-engergy.png',
        title: {
            middle: 'Norddeutschlands',
            last: ' Energie-Unabhängigkeit',
        },
        btn: {
            label: 'Configurator',
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
                        Jedes Haus hat seinen eigenen, spezifischen Energiebedarf. Wir bieten herstellerunabhängige Planung und vermitteln Ihnen unsere spezialisierten regionalen Teams, um die optimale Lösung für Ihr Dach zu gewährleisten.
                    </p>
                    <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                        Von Ihrer ersten Anfrage und der technischen Planung bis zur finalen Installation begleiten wir Sie auf jedem Schritt. Unser Engagement endet nicht mit der Installation – Sie können sich auch in den kommenden Jahren auf unsere kompetente Unterstützung verlassen.
                    </p>
                </div>
            </DefaultCardComp>
        </div>
    );
}
