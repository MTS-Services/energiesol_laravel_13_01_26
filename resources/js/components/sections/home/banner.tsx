import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from '@inertiajs/react';
import { ArrowRight, Star } from 'lucide-react';

export default function banner() {
    return (
        <div className="relative isolate overflow-hidden">
            <div className="bannerArea relative flex flex-col">
                <div
                    className="absolute inset-0 z-0 
                 
                    bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/banner.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                ></div>
                {/* <div className="absolute inset-y-0 left-0 z-[1] w-[30%] bg-gradient-to-r from-white/30 via-white/20 to-transparent backdrop-blur-sm"></div> */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="col-span-1 w-full lg:w-3/5">
                        <div className="inline-flex gap-3 items-center">
                            <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                            <p className="font-normal text-sm md:text-secondary uppercase mt-1">
                                Email & SMS list optimization with AI
                            </p>
                        </div>
                        <div className="inline-flex gap-3 pt-2">
                            <h2 className="pr-2 font-playfair-display text-4xl md:text-[56px] font-semibold text-secondary">
                                <span className="pr-2 font-playfair-display text-4xl md:text-[56px] font-semibold text-info italic">
                                    Premium
                                </span>{' '}
                                Solar Quality Made Affordable
                            </h2>
                        </div>
                        <div className="pt-3 pb-8">
                            <p className="text-xl md:text-2xl font-normal text-secondary">
                                Calculate your home's energy potential and
                                receive a personalized savings report in under 3
                                minutes.
                            </p>
                        </div>
                        <div>
                            <Button size="default" className="">
                                <Icon iconNode={ArrowRight} variant="circle" />
                                Configurator
                            </Button>
                        </div>
                        <div className='py-8 flex items-center gap-4'>

                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                  <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                    <AvatarImage
                                      src="https://github.com/maxleiter.png"
                                      alt="@maxleiter"
                                    />
                                    <AvatarFallback>LR</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                    <AvatarImage
                                      src="https://github.com/evilrabbit.png"
                                      alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                  </Avatar>
                            </div>
                            <p className='flex gap-2 items-center '>  
                            <Star className='fill-golden-yellow stroke-golden-yellow' />
                            <span className='text-secondary font-montserrat font-semibold md:text-2xl text-xl pl-1'>5</span>
                            <span className='text-secondary/72 font-open-sans font-normal md:text-2xl text-xl'>(150K)</span>
                            </p>
                        </div>

                        <div className='flex'>
                          <div className='flex items-center gap-4 px-2 py-2 bg-primary rounded-full'>
                             <Link> <img src="/images/facebook.png" alt="Facebook icon" className='h-6 w-auto'/> </Link>
                             <Link> <img src="/images/instragram.png" alt="Instragram icon" className='h-6 w-auto'/> </Link>
                             <Link> <img src="/images/linkedin.png" alt="LinkedIn icon" className='h-6 w-auto'/> </Link>
                             <Link> <img src="/images/google.png" alt="Google icon" className='h-6 w-auto'/> </Link>
                          </div>
                        </div>

                    </div>

                   <div className="relative col-span-1 w-2/5 justify-end hidden lg:flex">
                    <div className='relative z-10 h-67 w-67 rounded-full border-[10px] flex justify-center items-center border-info bg-transparent after:absolute after:top-1/2 after:left-1/2 after:z-0 after:h-60 after:w-60 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-info after:content-[""]'>
                        <p className="relative z-10 -rotate-23 -translate-y-3 flex items-center justify-center flex-col font-semibold text-primary text-2xl font-montserrat"><span>New: </span> <span>10-Years</span> <span>extended</span> <span>warranty for VP</span> systems</p>
                    </div>
                  </div>

                </div>
                <div className="absolute top-0 right-0 bottom-0 w-1/6 overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 scale-x-[-1] bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/frame_dot.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
