import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DefaultCard() {
    const item = {
        slogan: 'SOLARLÖSUNGEN',
        title: {
            initial: 'ENERGIE SOLUTION NORD – ',
            middle: 'Energie für Ihre Zukunft',
            breakPoint: {
                before: true,
            }
        },
        subtitle:'Mehr Lebensqualität durch nachhaltige Energie und innovative Technologien – für ein grüneres Morgen.',

        image: '/images/group-house.png',
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-y-0 right-0 z-0 h-full w-1/2"
                style={{
                    backgroundImage: "url('images/frame_dot.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <DefaultCardComp
                slogan={item.slogan}
                title={item.title}
                subtile={item.subtitle}
                image={item.image}
            >
                <div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Spitzentechnologie:</span> Wir setzen auf modernste Solarmodule und intelligente Energiesysteme, um Effizienz und Ertrag nachhaltig zu maximieren.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Persönliche Expertenberatung:</span>Unser Team entwickelt gemeinsam mit Ihnen ein maßgeschneidertes Energiesystem – abgestimmt auf Ihr Dach, Ihren Verbrauch und Ihre Ziele.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Professionelle Umsetzung:</span>Die fachgerechte Montage erfolgt durch qualifizierte Partnerbetriebe – präzise, zuverlässig und termingerecht koordiniert.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>24/7 Betreuung & Support:</span>Auch nach der Installation bleiben wir an Ihrer Seite – mit kontinuierlicher Betreuung und zuverlässiger Unterstützung für einen dauerhaft sicheren Anlagenbetrieb.
                        </p>
                    </div>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export { DefaultCard };
