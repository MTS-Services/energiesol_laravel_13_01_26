import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { cn } from "@/lib/utils";   

interface Props {
    slogan?: string|null;
    subtile?: string|null;
    title?:  {
                initial?: string|null;
                middle?: string|null;
                last?: string|null;
            }|null;
    description?: string|null;    
    image?: string|null;
    btn?: {label: string|null; href: string|null}|null,
    children?: React.ReactNode,
    className?: string|null
    order?: boolean|null
}
function DefaultCardComp({ slogan, title, description, subtile, image, btn , children, className, order}: Props) {
    return (
        <div className={cn('relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl flex-row gap-7 px-6 py-5 lg:px-0 lg:py-10 ', className)}>
            <div className={`w-full ${ !order ? 'order-first' : 'order-last'}`}>

               {slogan && (
                 <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                       {slogan}
                    </p>
                </div>  
               )}
                
               { title && (
                   <div className="">
                    <h2 className="pr-0 font-montserrat text-3xl font-semibold lg:pr-10 lg:text-[40px]">
                        {title.initial}
                        <span className="font-playfair-display font-semibold text-info italic">
                           {title.middle}
                        </span>
                        {title.last}
                    </h2>
                </div>
               )}
               { subtile && (
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
                        
                <div className="flex flex-col mt-6">
                   
                        {children}
                    
                </div>
                    )
                }


               { btn && (
                 <div className="mt-10">
                    <Button>
                        <Icon iconNode={ArrowRight} variant="circle"></Icon>
                        {btn.label ?? 'Configurator'}
                    </Button>
                </div>
               )}
               
            </div>
            {image && (
                <div className="hidden  lg:block">
                    <img src={image} alt="" />
                </div>
            )}
        </div>
    );
}

export { DefaultCardComp };
