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
                    className="absolute inset-0 z-0 scale-x-[1] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/contact-banner.png')",
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
                                 SMART SOLAR SOLUTIONS
                            </p>
                        </div>
                        <div className="block gap-3 pt-2">
                            <h2 className="pr-2 font-open-sans text-4xl md:text-[56px] font-semibold text-secondary">
                               
                                 Have {' '}
                                 <span className="pr-2 font-playfair-display text-4xl md:text-[56px] font-semibold text-info italic inline-block lg:inline-block">
                                   questions?
                                </span> We’re here to help
                            </h2>
                        </div>
                        <div className="pt-3 pb-8">
                            <p className="text-xl md:text-2xl font-normal text-secondary pr-0 lg:pr-5">
                           Transitioning to solar energy is a big decision, and we want you to feel confident every step of the way. Whether you're curious about savings, installation, or technology, our dedicated specialists are ready to provide clear and honest answers. Reach out to us—we’d be happy to guide you.
                            </p>
                        </div>
                        <div>
                            <Button size="default" className="">
                                <Icon iconNode={ArrowRight} variant="circle" />
                             Speak with an Expert 
                            </Button>
                        </div>


                    </div>

                </div>
                <div className="absolute top-0 right-0 bottom-0 w-2/5 overflow-hidden opacity-70">
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
