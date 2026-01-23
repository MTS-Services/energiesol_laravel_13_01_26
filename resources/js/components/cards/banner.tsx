import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";

interface Props{
    slogan?: string|null,
    item?:  {
        image?: string|null,
        title?: {
            initial?: string|null,
            middle?: string|null,
            last?: string|null,
            breakPoint?: {
                after?: boolean|null,
                before?: boolean|null
            }|null
        },
        btn?: {
            label?: string|null,
            href?: string|null,
            buttonClassName?: string|null,
            buttonVariant?: string|null,
            iconParentClassName?: string|null,
            iconClassName?: string|null,
            iconVariant?: string|null,
            iconNode?: LucideIcon|null,

        }|null,
        description?: string|null,
    }
}
function Banner({item}: Props) {
   
 return (
        <div className="relative isolate overflow-hidden">
            <div className="bannerArea relative flex flex-col">
                <div
                    className="absolute inset-0 z-0 scale-x-[1] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${item?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                ></div>
                {/* <div className="absolute inset-y-0 left-0 z-[1] w-[30%] bg-gradient-to-r from-white/30 via-white/20 to-transparent backdrop-blur-sm"></div> */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="col-span-1 w-full lg:w-3/5">
                         {
                            item?.slogan && (

                                <div className="inline-flex gap-3 items-center">
                                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-info after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-btn-primary'></span>
                                    <p className="font-normal text-sm md:text-secondary uppercase mt-1">
                                        {item?.slogan}
                                    </p>
                                </div>

                            )
                        }
                        <div className="block gap-3 pt-2">
                           {item?.title && (
                            <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">{item.title.initial } 
                                { item.title.breakPoint?.before && <br className="hidden lg:block " /> }
                                <span className="font-playfair-display text-info italic"> {item.title.middle} </span> 
                                { item.title.breakPoint?.after && <br className="hidden lg:block" /> }
                                {item.title.last}
                            </h2>
                            )}
                        </div>
                        <div className="pt-3 pb-8">
                            <p className="text-xl md:text-2xl font-normal text-secondary pr-0 lg:pr-5">
                                {item?.description || ""}
                            </p>
                        </div>
                        <div>
                            <Button size="default" variant={item?.btn?.buttonVariant || "default"} className={item?.btn?.buttonClassName || ""}>
                                <Icon iconNode={item?.btn?.iconNode || ArrowRight} variant={item?.btn?.iconVariant || "circle"} className={item?.btn?.iconParentClassName || ""}  iconClassName={item?.btn?.iconClassName || ""} />
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

export { Banner }