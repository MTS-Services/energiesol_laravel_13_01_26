import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react';
import DefaultCard from '../advantage/default-card';
import { DefaultCardComp } from '@/components/cards/default-card-comp';

export default function DeliveryEnergy() {
    const item = {
        slogan: "Nationwide Solar Coverage",
        image: '/images/delivery-engergy.png',
        title: {
            initial: 'We deliver energy independence in north ',
            middle: 'Germany',
        },
        btn: {
            label: 'Configurator',
            href: '#',
         
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
            {/* <div className="relative z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30 flex flex-row gap-7">
                <div className='w-full col-span-2'>
                    <div className="mb-3 flex flex-row items-center justify-start gap-3">
                        <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                        <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                            Nationwide Solar Coverage
                        </p>
                    </div>
                    <div className="">
                        <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] pr-0 lg:pr-50">
                            We deliver energy independence in north{' '}
                            <span className="font-playfair-display font-semibold text-info italic">
                                Germany
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                            Every home has its own specific energy requirements.
                            We provide manufacturer-independent planning and
                            connect you with our specialized regional teams to
                            ensure the perfect fit for your roof.
                        </p>
                        <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                            From your initial inquiry and technical planning to
                            the final installation, we are by your side every
                            step of the way. Our commitment doesn’t end with the
                            installation—you can rely on our expert support for
                            years to come.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Button>
                            <Icon iconNode={ArrowRight} variant="circle"></Icon>
                            Configurator
                        </Button>
                    </div>
                </div>
                <div className='hidden lg:block lg:col-span-1'>
                    <img src="/images/delivery-engergy.png" alt="" />
                </div>
            </div> */}
            <DefaultCardComp image={item.image} title={item.title} slogan={item.slogan} btn={item.btn} >
                 <div className="flex flex-col">
                        <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                            Every home has its own specific energy requirements.
                            We provide manufacturer-independent planning and
                            connect you with our specialized regional teams to
                            ensure the perfect fit for your roof.
                        </p>
                        <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                            From your initial inquiry and technical planning to
                            the final installation, we are by your side every
                            step of the way. Our commitment doesn’t end with the
                            installation—you can rely on our expert support for
                            years to come.
                        </p>
                    </div>
            </DefaultCardComp>
        </div>
    );
}
