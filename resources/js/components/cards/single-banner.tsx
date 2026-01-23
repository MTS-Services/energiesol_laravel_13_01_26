import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react';

interface Props {
    item?: {
        slogan?: string|null;
        title?: {
            initial?: string|null;
            middle?: string|null;
            last?: string|null;
            breakPoint?: {
                before?: boolean|null;
                after?: boolean|null;
            }|null;
        }|null;
        description?: string;
        btn?: {
            label: string|null;
            href: string|null;
            buttonVariant?: string|null;
            buttonClassName?: string|null;
            iconClassName?: string|null;
            iconParentClassName?: string|null;
            iconVariant?: string|null;
            iconNode?: LucideIcon|null;

        };
    }|null,
    className?: string|null;
}
function SingleBanner({ item, className }: Props) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
        
         {item?.slogan && (
          <div className="mb-3 flex flex-row items-center justify-center gap-3">
              <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-info after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-btn-primary'></span>
              <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                {item.slogan}
              </p>
          </div>      
        )}

        <div className='flex justify-center items-center flex-col'>
            {item?.title && (
               <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center text-primary">
                  { item.title.initial } 
                  { item.title.breakPoint?.before && <br className="hidden lg:block " /> }
                  <span className="font-playfair-display text-info italic"> {item.title.middle} </span> 
                  { item.title.breakPoint?.after && <br className="hidden lg:block" /> }
                  {item.title.last}
              </h2>
             )}

        </div>
        <div className='flex justify-center items-center w-full lg:w-3/4 mx-auto mt-2'>
            <p className='text-center px-6 lg:px-16.5 text-base lg:text-xl font-open-sans text-primary/90 font-normal'>
               {item?.description || ''}
            </p>
        </div>
        <div className='mt-6 lg:mt-10'>
            <Link href={item?.btn?.href || '#'}>
                <Button variant={item?.btn?.buttonVariant || 'default'} className={item?.btn?.buttonClassName || ''}>
                <Icon iconNode={item?.btn?.iconNode || ArrowRight} variant={item?.btn?.iconVariant || 'circle'} className={item?.btn?.iconParentClassName || ''} iconClassName={item?.btn?.iconClassName || ''}></Icon>
                {item?.btn?.label || 'Configurator'}
                </Button>   
            </Link>
        </div>
    </div>
  )
}

export { SingleBanner }