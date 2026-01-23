import React from 'react'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'

interface ItemProps{
    item?: {
        image?: string | null;
        slogan?: string | null;
        title?: string | null;
        description?: string | null;
        btn?: {
            label: string|null;
            href: string|null;
            buttonClassName?: string|null,
            iconClassName?: string|null,
            iconParentClassName?: string|null,
            iconNode?: LucideIcon | null;
            iconVariant?: "cricle" | "default" | "cirlce-transparent" | null ;


        }|null,
        changeOrder?: boolean|null
    }
     children?: React.ReactNode,
     className?: string|null,
}
function BoxCard({item, className, children}: ItemProps) {
    const changeOrder = item?.changeOrder ?? false;
  return (
     <div className={cn('box-item p-3 pb-12! lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md grid grid-cols-1 gap-2  ', className)}>
      
        { item?.image && (

            <div className={`h-auto overflow-hidden rounded-md ${ !changeOrder ? 'order-first' : 'order-last'}`}>
            <img src={item?.image ?? '/images/feature1.png'} alt="Feature image"  className='w-full h-auto'/>
             </div>
        )}


        <div className={` ${ !changeOrder ? 'order-last' : 'order-first'}`}>


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
                <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70'>{item.description}</p>
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