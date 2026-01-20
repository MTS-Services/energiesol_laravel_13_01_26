import {cn} from '@/lib/utils';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import { ArrowRight } from 'lucide-react';
interface CardProps {
    slogan?: string|null;
    image?: string|null;
    title?: string|null;
    description?: string|null;
    className?: string|null;
    order?: boolean|null;
    btn?: {label: string|null; href: string|null}|null
}
function ServiceCard({slogan, image, title, description, className, order, btn}: CardProps) {
    return (
        <div className={cn('service-item grid grid-cols-1 gap-8 border-b border-[primary/70] pb-10 lg:grid-cols-2 lg:gap-32 lg:pb-20', className)}>
            <div  className={order ? 'order-last' : 'order-first'}>

              { slogan && (

                 <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                       {slogan}
                    </p>
                </div>

                 )
              }
              

                {title && (
                    <h2 className="text-seoncdary mt-3 font-montserrat text-2xl font-semibold lg:text-[32px]">
                     {title}
                    </h2>
                )}
                
                {description && (
                    <p className="mt-3 text-base text-secondary/70 lg:text-base">
                     {description}
                    </p>
                )}
               {btn && (
                    <div>
                    <Button className='mt-10' >
                        <Icon iconNode={ArrowRight} variant="circle"  />
                        {btn.label ? (btn.label) : (' Start Configurator')}
                    </Button>
                </div>
               )}
            </div>

            {image && (
                <div className={order ? 'order-first' : 'order-last'}>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt="Service image"
                        className="w-full"
                    />
                </div>
               </div>
            )}
        </div>
    );
}

export {ServiceCard};
