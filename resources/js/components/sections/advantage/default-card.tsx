import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DefaultCard() {
    const item = {
        slogan: 'SOLAR SOLUTIONS',
        title: {
            initial: 'ENERGIE SOLUTION NORD - powering your future.',
        },
        subtitle:
            'Empowering lives with sustainable energy and innovative technology for a greener tomorrow.',

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
                            <span className='font-normal text-secondary font-open-sans'>Cutting-Edge Technology:</span> We use the latest solar panels and smart energy systems to maximize efficiency.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Expert Consultation:</span> Our team provides personalized guidance to help you find the perfect energy setup.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Seamless Installation:</span>  Hassle-free and professional setup by our certified technicians.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>Transparent Pricing:</span> No hidden costs—just honest service from start to The finish.
                        </p>
                    </div>
                    <div className='pl-4 relative mb-2'>
                        <span className="h-2.5 w-2.5 rounded-full bg-btn-primary block absolute top-2 left-0"></span>
                        <p className='font-normal text-secondary/70 font-open-sans'>
                            <span className='font-normal text-secondary font-open-sans'>24/7 Support: </span>Continuous monitoring and support to ensure your power never goes out.
                        </p>
                    </div>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export { DefaultCard };
