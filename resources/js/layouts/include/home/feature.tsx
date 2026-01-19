import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function feature() {
  return (
    <div>
        <div className='z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0'>
           <div className='flex flex-col lg:justify-center justify-start lg:items-center items-start'>
            <h2 className='text-3xl lg:text-[40px] font-semibold font-montserrat'>Smart and Reliable Paths to <span className='text-info italic font-semibold'>Energy</span> </h2>
            <h2 className='text-3xl lg:text-[40px] italic font-montserrat font-semibold text-info'>Independence</h2>
           </div>

           <div className='features pt-6 lg:pt-10 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='feature-item p-3 pb-12! lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md '>
                    <div className='w-full h-auto overflow-hidden rounded-md'>
                        <img src="/images/feature1.png" alt="Feature image" />
                    </div>
                    <h3 className='text-2xl font-semibold mb-3 font-montserrat text-secondary pt-4'>Built on Industry Expertise</h3>
                    <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70'>everage the stability and deep knowledge of a global energy leader. Our solutions are backed by decades of experience, ensuring your transition to renewable power is secure and long-lasting</p>
                     <Button size="default" className="bg-secondary! mt-6"> <Icon iconNode={ArrowRight} variant="circle" /> Discover our history
                     </Button>
                </div>
                <div className='feature-item p-3 pb-12! lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md '>
                    <div className='w-full h-auto overflow-hidden rounded-md'>
                        <img src="/images/feature2.png" alt="Feature image" />
                    </div>
                    <h3 className='text-2xl font-semibold mb-3 font-montserrat text-secondary pt-4'>Premium Quality, Fair Value</h3>
                    <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70'>
                        By utilizing fully digitized processes, we reduce overhead to offer you top-tier solar technology at a competitive price. Get the best performance-to-cost ratio in the industry.
                     </p>
                    <Button size="default" className="bg-secondary! mt-6"> <Icon iconNode={ArrowRight} variant="circle" /> Get a free estimate
                     </Button>
                </div>
                <div className='feature-item p-3 pb-12! lg:p-6 bg-linear-to-r from-btn-primary/20 to-info/20 rounded-md '>
                    <div className='w-full h-auto overflow-hidden rounded-md'>
                        <img src="/images/feature3.png" alt="Feature image" />
                    </div>
                    <h3 className='text-2xl font-semibold mb-3 font-montserrat text-secondary pt-4'>Transparent Expert Guidance</h3>
                    <p className=' dark:text-gray-400 text-base font-open-sans text-secondary/70'>We pride ourselves on providing honest, transparent, and pressure-free advice. Our consultations are tailored to your specific home needs, helping you make a confident decision for your future.</p>
                     <Button size="default" className="bg-secondary! mt-6"> <Icon iconNode={ArrowRight} variant="circle" /> Book a consultation
                     </Button>
                </div>
           </div>

        </div>
    </div>
  )
}
