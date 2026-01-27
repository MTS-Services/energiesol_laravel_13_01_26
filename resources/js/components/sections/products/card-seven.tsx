import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

 function CardSeven() {
  return (
<div className='relative'>
    <div className='absolute inset-0 top-0 left-0 w-full h-full z-0' style={
        {
            backgroundImage: "url('/images/background2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: 'scaleY(0.9)',
        }
    }>
    </div>
    <div className='relative z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0 flex justify-center flex-col items-center'>
         <div className="inline-flex gap-3 items-center mb-3">
                            <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                            <p className="font-normal text-sm  uppercase mt-1 text-primary">
                                 Intelligente Mobilität
                            </p>
                        </div>
        <div className='flex justify-center items-center flex-col'>
            <h2 className='text-3xl lg:text-[40px] font-semibold text-primary font-montserrat text-center'>
                <span className='font-playfair-display text-info'> Effizientes Laden </span>von Elektrofahrzeugen zu Hause</h2>
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto mt-2'>
            <p className='text-center px-6 lg:px-16.5 text-base lg:text-xl font-open-sans text-primary/90 font-normal'>
               Power your electric vehicle with clean, solar energy.
            </p>
        </div>
        <div className='mt-6 lg:mt-10'>
           <Link href={route('configurator')}>
                <Button className='text-primary'>
                    <Icon iconNode={ArrowRight} variant='circle' className='bg-primary' iconClassName='text-secondary' ></Icon>
            Meine Schätzung starten
                </Button>
           </Link>
        </div>
    </div>
</div>
  )
}

export {CardSeven}