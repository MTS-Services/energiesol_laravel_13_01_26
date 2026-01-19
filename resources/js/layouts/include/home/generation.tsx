import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react';

export default function generation() {
    return (
        <div className="">
            <div
                className="absolute inset-y-0 right-0 z-0 h-full w-1/2"
                style={{
                    backgroundImage: "url('images/frame_dot.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30 flex flex-row gap-5">
                <div className='w-1/2 bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                    <div className="mb-3 flex flex-row items-center justify-start gap-3">
                        <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                        <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                            Nationwide Solar Coverage
                        </p>
                    </div>
                    <div className="">
                        <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px]">
                            For { ' '}
                            <span className="font-playfair-display font-semibold text-info italic">
                              our generation  {' '}
                            </span>
                           <p>
                             and the ones after us
                           </p>
                           
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                           Our photovoltaic systems generate 100% clean electricity—empowering families to protect the climate while investing in a sustainable future.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Button className='bg-transparent!  border border-btn-primary! text-btn-primary!'>
                            <Icon iconNode={ArrowRight} variant="circle"  ></Icon>
                            Configurator
                        </Button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 w-1/2'>
                    <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                        <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100%</h2>
                        <p className='font-open-sans text-base text-secondary/50 lg:text-lg'>Clean Electricity</p>
                    </div>
                    <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                        <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100%</h2>
                        <p className='font-open-sans text-base text-secondary/50 lg:text-lg'>Clean Electricity</p>
                    </div>
                    <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                        <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100%</h2>
                        <p className='font-open-sans text-base text-secondary/50 lg:text-lg'>Clean Electricity</p>
                    </div>
                    <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                        <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100%</h2>
                        <p className='font-open-sans text-base text-secondary/50 lg:text-lg'>Clean Electricity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
