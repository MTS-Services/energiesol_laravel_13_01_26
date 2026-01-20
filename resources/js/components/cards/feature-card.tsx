import React from 'react'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight } from 'lucide-react'
import { Item } from '@radix-ui/react-dropdown-menu'

interface ItemProps{
    item?: {
        image?: string | null;
        title?: string | null;
        description?: string | null;
        btn?: {label: string|null; href: string|null}|null
    }
}
function FeatureCard({item}: ItemProps) {
  return (
     <div className='feature-item p-3 pb-12! lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md '>
        <div className='w-full h-auto overflow-hidden rounded-md'>
            <img src={item.image ?? '/images/feature1.png'} alt="Feature image" />
        </div>
        <h3 className='text-2xl font-semibold mb-3 font-montserrat text-secondary pt-4'>{item.title}</h3>
        <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70'>{item.description}</p>
            <Button size="default" className="bg-secondary! mt-6 cursor-pointer!"> <Icon iconNode={ArrowRight} variant="circle" /> { item.btn.label }
            </Button>
    </div>
  )
}

export {FeatureCard}