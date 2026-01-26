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
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/banner.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                ></div>
                {/* <div className="absolute inset-y-0 left-0 z-[1] w-[30%] bg-gradient-to-r from-white/30 via-white/20 to-transparent backdrop-blur-sm"></div> */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="col-span-1 w-full lg:w-3/5">
                        <div className="inline-flex items-center gap-3">
                            <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                            <p className="mt-1 text-sm font-normal uppercase md:text-secondary">
                                E-Mail- und SMS-Listenoptimierung mit KI
                            </p>
                        </div>
                        <div className="inline-flex gap-3 pt-2">
                            <h2 className="pr-2 font-playfair-display text-4xl font-semibold text-secondary md:text-[56px]">
                                <span className="pr-2 font-playfair-display text-4xl font-semibold text-info italic md:text-[56px]">
                                    Premium
                                </span>{' '}
                                Solarqualität zum erschwinglichen Preis
                            </h2>
                        </div>
                        <div className="pt-3 pb-8">
                            <p className="text-xl font-normal text-secondary md:text-2xl">
                                Berechnen Sie das Energiepotenzial Ihres Hauses
                                und erhalten Sie in weniger als 3 Minuten einen
                                personalisierten Einsparungsbericht.
                            </p>
                        </div>
                        <div>
                            <Button size="default" className="">
                                <Icon
                                    iconNode={ArrowRight}
                                    variant="circle"
                                    className="bg-primary!"
                                    iconClassName="text-secondary"
                                />
                                Konfigurator
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 py-8">
                            <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@maxleiter" />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@evilrabbit" />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="flex items-center gap-2">
                                <Star className="fill-golden-yellow stroke-golden-yellow" />
                                <span className="pl-1 font-montserrat text-xl font-semibold text-secondary md:text-2xl">
                                    5
                                </span>
                                <span className="font-open-sans text-xl font-normal text-secondary/72 md:text-2xl">
                                    (150K)
                                </span>
                            </p>
                        </div>

                        <div className="flex">
                            <div className="flex items-center gap-4 rounded-full bg-primary px-2 py-2">
                                <Link>
                                    {' '}
                                    <img
                                        src="/images/facebook.png"
                                        alt="Facebook icon"
                                        className="h-6 w-auto"
                                    />{' '}
                                </Link>
                                <Link>
                                    {' '}
                                    <img
                                        src="/images/instragram.png"
                                        alt="Instragram icon"
                                        className="h-6 w-auto"
                                    />{' '}
                                </Link>
                                <Link>
                                    {' '}
                                    <img
                                        src="/images/linkedin.png"
                                        alt="LinkedIn icon"
                                        className="h-6 w-auto"
                                    />{' '}
                                </Link>
                                <Link>
                                    {' '}
                                    <img
                                        src="/images/google.png"
                                        alt="Google icon"
                                        className="h-6 w-auto"
                                    />{' '}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative col-span-1 hidden w-2/5 justify-end lg:flex">
                        <div className='relative z-10 flex h-67 w-67 items-center justify-center rounded-full border-10 border-info bg-transparent after:absolute after:top-1/2 after:left-1/2 after:z-0 after:h-60 after:w-60 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-info after:content-[""]'>
                            <p className="pt-2 relative z-10 flex -translate-y-3 -rotate-23 flex-col items-center justify-center font-montserrat text-2xl font-semibold text-primary">
                                <span>INKLUSIVE </span>
                                <span className='text-center px-3 text-primary/70'>10 Jahre Herstellergaran tie auf Wechselrichter und Speicher</span>
                            </p>
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
