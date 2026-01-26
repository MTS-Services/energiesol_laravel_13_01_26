import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DefaultCard() {
    const item = {
        slogan: 'SOLARLÖSUNGEN',
        title: {
            initial: 'ENERGIE SOLUTION NORD – ',
            middle: 'Energie für Ihre Zukunft.',
            breakPoint: {
                before: true,
            }
        },
        subtitle:'Lebensqualität stärken durch nachhaltige Energie und innovative Technologien – für ein grüneres Morgen.',

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
                            <span className='font-normal text-secondary font-open-sans'>Spitzentechnologie:</span> Wir verwenden modernste Solarmodule und smarte Energiesysteme, um Ihre Effizienz zu maximieren.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Expertenberatung:</span>  Unser Team bietet Ihnen eine persönliche Beratung, um das perfekte Energiesystem für Sie zu finden.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Seamless Installation:</span>Problemlose und professionelle Einrichtung durch unsere zertifizierten Techniker.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Reibungslose Installation:</span>Stressfreie und professionelle Montage durch unsere zertifizierten Techniker.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>24/7 Kundensupport: </span>Kontinuierliche Überwachung und Unterstützung, um sicherzustellen, dass Ihre Stromversorgung niemals ausfällt.
                        </p>
                    </div>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export { DefaultCard };
