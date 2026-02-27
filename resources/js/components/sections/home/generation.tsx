import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function generation() {
    return (
        <div className="">

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30 flex flex-row gap-5">
                <div className='grid lg:grid-cols-2 gird-cols gap-6 lg:gap-9'>
                    <div className=' bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl'>
                        <div className="mb-3 flex flex-row items-center justify-start gap-3">
                            <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                            <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                               NACHHALTIGE ZUKUNFT
                            </p>
                        </div>
                        <div className="">
                            <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px]">
                                Für {''}
                                <span className="font-playfair-display font-semibold text-info italic">
                                   unsere Generation
                                </span>
                                <p>
                                  – und die nach uns
                                </p>

                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                                Unsere Photovoltaikanlagen erzeugen sauberen, erneuerbaren Strom direkt vom eigenen Dach. So ermöglichen wir Familien, aktiv zum Klimaschutz beizutragen und gleichzeitig langfristig in eine sichere, nachhaltige Zukunft zu investieren.
                            </p>
                        </div>

                        <div className="mt-10">
                           <Link href={'mailto:example@gmail.com'}>
                            <Button className='bg-transparent!  border border-btn-primary! text-btn-primary!'>
                                <Icon iconNode={ArrowRight} variant="circle-transparent"  ></Icon>
                                Kontaktieren Sie uns
                            </Button>
                           </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl py-12.5 px-10'>
                            <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100%</h2>
                            <p className='font-open-sans text-base text-secondary lg:text-lg break-words'>Grüne Energie</p>
                        </div>
                        <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl py-12.5 px-10'>
                            <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>100+</h2>
                            <p className='font-open-sans text-base text-secondary lg:text-lg break-words'>Installationsgebiete</p>
                        </div>
                        <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl py-12.5 px-10'>
                            <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>30 Jahre</h2>
                            <p className='font-open-sans text-base text-secondary lg:text-lg break-words'>Leistungsgarntie</p>
                        </div>
                        <div className='bg-linear-to-r from-btn-primary/15 to-info/5 p-6 rounded-xl py-12.5 px-10'>
                            <h2 className='text3xl  lg:text-[40px] font-montserrat font-semibold text-info'>1000+</h2>
                            <p className='font-open-sans text-base text-secondary lg:text-lg break-words'>Mit Solarstrom versorge Haushalte</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
