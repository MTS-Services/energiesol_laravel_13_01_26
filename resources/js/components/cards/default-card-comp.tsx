import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

interface Props {

    slogan?: string | null;
    subtile?: string | null;
    title?: {
        initial?: string | null;
        middle?: string | null;
        last?: string | null;
        breakPoint?: {
            after?: boolean | null;
            before?: boolean | null;
        } | null;
    } | null;
    description?: string | null;
    image?: string | null;
    btn?: { 
         label: string|null;
            href: string|null;
            buttonClassName?: string|null,
            iconClassName?: string|null,
            iconParentClassName?: string|null,
            iconNode?: LucideIcon | null;
            iconVariant?: "cricle" | "default" | "cirlce-transparent" | null ;
    } | null,
    children?: React.ReactNode,
    className?: string | null,
    boxClassName?: string | null,
    order?: boolean | null,
}
function DefaultCardComp({ slogan, title, description, subtile, image, btn, children, className, boxClassName, order }: Props) {
    return (
        <div className={cn('relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl flex-row gap-7 px-6 py-5 lg:px-0 lg:py-10 ', className)}>
            <div className={cn(`w-full py-18.5 ${!order ? 'order-first' : 'order-last'}`, boxClassName)}>

                {slogan && (
                    <div className="mb-3 flex flex-row items-center justify-start gap-3">
                        <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                        <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                            {slogan}
                        </p>
                    </div>
                )}

                {title && (
                    <div className="">
                        <h2 className="pr-0 font-montserrat text-3xl font-semibold  lg:text-[40px]">
                            {title.initial}
                            {title.breakPoint?.after && <br className="hidden lg:block" />}
                            <span className="font-playfair-display font-semibold text-info italic">
                                {title.middle}
                            </span>
                            {title.breakPoint?.before && <br className="hidden lg:block" />}
                            {title.last}
                        </h2>
                    </div>
                )}
                {subtile && (
                    <div className="mt-3">
                        <h2 className="pr-0 font-open-sans text-base  font-normal lg:pr-10 lg:text-lg">
                            {subtile}
                        </h2>
                    </div>
                )}

                {
                    description && (

                        <div className="flex flex-col">
                            <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                                {description}
                            </p>
                        </div>
                    )
                }

                {
                    children && (

                        <div className="flex flex-col">

                            {children}

                        </div>
                    )
                }


                {btn && (
                    <div className="mt-10">
                       <Link href={btn.href ?? '#'}>
                            <Button variant={btn?.buttonVariant ?? 'default'}>
                                <Icon iconNode={btn?.iconNode ?? ArrowRight}  className={btn?.iconParentClassName ?? ''} iconClassName={btn?.iconClassName ?? ''} variant={btn?.iconVariant ?? 'circle'} />
                                {btn.label ?? 'Konfigurator'}
                             
                            </Button>
                       </Link>
                    </div>
                )}

            </div>
            {image && (
                <div className="hidden  lg:block  ">
                    <img src={image} alt="" className="w-full! h-full!" />
                </div>
            )}
        </div>
    );
}

export { DefaultCardComp };
