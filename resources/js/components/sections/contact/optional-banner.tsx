import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function OptionalBanner() {
  return (
<div className='relative'>
    {/* <div className='absolute inset-0 top-0 left-0 w-full h-full z-0' style={
        {
            backgroundImage: "url('/images/background2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: 'scaleY(0.9)',
        }
    }>
    </div> */}
    <div className='relative z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0 flex justify-center flex-col items-center'>
         <div className="inline-flex gap-3 items-center mb-3">
                            <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                            <p className="font-normal text-sm md:text-secondary uppercase mt-1 text-secondary">
                                 SMART SOLAR SOLUTIONS
                            </p>
                        </div>
        <div className='flex justify-center items-center flex-col'>
            <h2 className='text-3xl lg:text-[40px] font-semibold text-secondary font-montserrat text-center'>End-to-End Solar Expertise</h2>
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto mt-2'>
            <p className='text-center px-6 lg:px-16.5 text-base lg:text-xl font-open-sans text-secondary/90 font-normal'>
                Backed by decades of industry expertise, our dedicated specialists provide comprehensive phone support to help you select the right technology and navigate your journey toward energy independence.
            </p>
            <p className='text-center px-6 lg:px-16.5 mt-3 text-base lg:text-xl font-open-sans text-secondary/90 font-normal'>
                Backed by decades of industry expertise, our dedicated specialists provide comprehensive phone support to help you select the right technology and navigate your journey toward energy independence.
            </p>
        </div>
        <div className='mt-6 lg:mt-10'>
            <Button >
                <Icon iconNode={ArrowRight} variant='circle'></Icon>
              Schedule Free Discovery Call 
            </Button>
        </div>
    </div>
</div>
  )
}
