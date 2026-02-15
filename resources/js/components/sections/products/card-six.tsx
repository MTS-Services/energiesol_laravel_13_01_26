import { BoxCard } from '@/components/cards/box-card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ArrowRight } from 'lucide-react'
import React from 'react'

 function CardSix({features}:any) {
  
  return (
    <div>
        <div className='z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0'>
            <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content-[""] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        3 Min Setup
                    </p>
            </div>
           <div className='flex flex-col lg:justify-center justify-start lg:items-center items-start'>
            <h2 className='text-3xl text-center lg:text-[40px] font-semibold font-montserrat'>Why invest in <span className='text-info italic font-semibold font-playfair-display'>PV Storage?</span></h2>
            <p className='text-secondary/70 text-base lg:text-lg font-open-sans '>Maximize your solar potential with smart storage solutions.</p>
           </div>

           <div className='features pt-6 lg:pt-10 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>

                  {
                 features.map((item, index) => (
                    

                    // <FeatureCard key={index} item={items} />
                    <BoxCard key={index} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export {CardSix}