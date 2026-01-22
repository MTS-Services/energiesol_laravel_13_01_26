import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'

function CardFive() {
 
  return (
    <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
       <div className=' border border-secondary/20 py-20 rounded-md'>
         <div className='flex justify-center items-center flex-col border-b border-secondary/20 px-6 lg:px-64'>
              <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content-[""] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        3 Min Setup
                    </p>
                </div>
                <div className='mt-2'>
                    <h2 className='text-seoncary font-semibold font-montserrat text-3xl lg:text-[40px] text-center'>Convenient and <span className="text-info font-playfair-display">Efficient </span> <br className='hidden lg:block'/> Charging</h2>
                </div>
                <div className='mt-2 pb-7'>
                    <p className='text-secondary/70 font-open-sans text-base lg:text-lg text-center'>
                       Charge your vehicle with clean, cost-effective solar energy.
Our compact Energiesol wallboxes provide a high-speed, safe alternative to standard sockets. By linking directly to your photovoltaic system, you can power your car using your own solar energy.
                    </p>
                </div>
         </div>
         <div className='flex justify-center items-center flex-col mt-7 px-6 lg:px-64'>
             
                <div className='mt-2'>
                    <h2 className='text-seoncary font-semibold font-montserrat text-2xl lg:text-[32px]'>Key Highlights:</h2>
                </div>
                <div className='mt-3'>
                    <ul className='text-secondary/70 font-open-sans flex flex-col gap-2 items-center justify-centertext-base lg:text-lg text-center '>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                        High conversion efficiency</li>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                      Weather-resistant construction</li>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                       Long service life with minimal maintenance</li>
                    </ul>
                </div>
         </div>
       </div>
    </div>
  )
}


export {CardFive}