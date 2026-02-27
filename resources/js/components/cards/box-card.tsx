import React from 'react'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'

interface ItemProps{
    item?: {
        image_url?: string | null;
        slogan?: string | null;
        title?: string | null;
        description?: string | null;
        description_length?: number | null;

        btn?: {
            label: string|null;
            href: string|null;
            buttonClassName?: string|null,
            iconClassName?: string|null,
            iconParentClassName?: string|null,
            iconNode?: LucideIcon | null;
            iconVariant?: "circle" | "default" | "circle-transparent" | null ;


        }|null,
        changeOrder?: boolean|null
    }
     children?: React.ReactNode,
     className?: string|null,
}

function BoxCard({item, className, children}: ItemProps) {

    const [description , setDescription] = React.useState<string | null>(item?.description?.substring(0, item.description_length ?? 150) ?? null);
    
    const expandDescription = () => {
        if (item?.description) {
            setDescription(item?.description);
        }
    }
    const collapseDescription = () => {
        if (item?.description) {
            setDescription(item?.description?.substring(0, item.description_length ?? 150));
        }
    }

    const changeOrder = item?.changeOrder ?? false;

  return (
     <div className={cn('box-item p-3  lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md  gap-2 flex flex-col ', className)}>
      
        {item?.image_url && (
        <div
            className={`overflow-hidden rounded-md flex items-center  w-full ${
            !changeOrder ? "order-first" : "order-last"
            }`}
            style={{ height: "300px" }}
        >
            <img
            src={item?.image_url ?? "/images/feature1.png"}
            alt="Feature image"
            className="max-h-75 w-auto object-contain object-center mx-auto rounded-md"
            />
        </div>
        )}


        <div className={` ${ !changeOrder ? 'order-last' : 'order-first'} flex-1 flex flex-col justify-between`}>


            {
                item?.slogan && (

                    <div className="inline-flex gap-3 items-center">
                        <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-info after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-btn-primary'></span>
                        <p className="font-normal text-sm md:text-secondary uppercase mt-1">
                            {item.slogan}
                        </p>
                    </div>

                   )
            }
            {
                item?.title && (
                    <h3 className='text-2xl font-semibold mb-3 font-montserrat text-secondary pt-4'>{item.title}</h3>
                )
            }
           
           {
            item?.description && (
                <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70 min-h-16'>
                    {description}

                 {
                    item?.description?.length > (item.description_length ?? 150) && item?.description?.length != description?.length && (
                        <span className='text-info cursor-pointer' onClick={expandDescription}>...Read more</span>
                    )
                 }
                {
                item?.description?.length === description?.length &&
                item?.description?.length > (item.description_length ?? 150) && (
                    <span
                    className="text-info cursor-pointer"
                    onClick={collapseDescription}
                    >
                    ...Read less
                    </span>
                )
                }
                 
                 </p>
            )
           }

           {
            children && (
                <div>
                    {children}
                </div>
            )
           }

           {
            item?.btn && (
                item?.btn?.href ? (
                    <Link href={item.btn.href}>
                        <Button size="default" className={cn('bg-secondary! mt-6 cursor-pointer!', item.btn.buttonClassName)} > 
                            <Icon iconNode={item.btn.iconNode ?? ArrowRight} variant={item.btn.iconVariant ?? 'circle'} iconClassName={cn('', item.btn.iconClassName)} className={cn('', item.btn.iconParentClassName)} />  

                            
                            { item.btn.label }

                            </Button>
                    </Link>
                ):  (
                    <Button size="default" className={cn('bg-secondary! mt-6 cursor-pointer!', item.btn.buttonClassName)} > 
                   
                    <Icon iconNode={item.btn.iconNode ?? ArrowRight} variant={item.btn.iconVariant ?? 'circle'} iconClassName={cn('', item.btn.iconClassName)} className={cn('', item.btn.iconParentClassName)} />  
                    
                    { item.btn.label }

                    </Button>
                )
            )
           }
            
        </div>
    </div>
  )
}

export {BoxCard}