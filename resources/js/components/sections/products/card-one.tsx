import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'

function CardOne() {
 
  return (
    <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
       <div className=' border border-secondary/20 py-20 rounded-md'>
         <div className='flex justify-center items-center flex-col border-b border-secondary/20 px-6 lg:px-64'>
              <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content-[""] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                      Jederzeit erreichbar
                    </p>
                </div>
                <div className='mt-2'>
                    <h2 className='text-seoncary font-semibold font-montserrat text-2xl lg:text-[32px] text-center'>Hocheffiziente Solarmodule</h2>
                </div>
                <div className='mt-2 pb-7'>
                    <p className='text-secondary/70 font-open-sans text-base lg:text-lg text-center'>
                       Unsere Solarmodule sind so konzipiert, dass sie das Maximum an Sonnenlicht einfangen und in sauberen, zuverlässigen Strom umwandeln. Sie sind auf Langlebigkeit sowie optimale Leistung ausgelegt und gewährleisten eine konstante Energieerzeugung das ganze Jahr über.
                    </p>
                </div>
         </div>
         <div className='flex justify-center items-center flex-col mt-7 px-6 lg:px-64'>
             
                <div className='mt-2'>
                    <h2 className='text-seoncary font-semibold font-montserrat text-2xl lg:text-[32px]'>Wichtige Vorteile:</h2>
                </div>
                <div className='mt-3'>
                    <ul className='text-secondary/70 font-open-sans flex flex-col gap-2 items-center justify-centertext-base lg:text-lg text-center '>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                     Hoher Wirkungsgrad</li>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                     Wetterfeste Bauweise</li>
                      <li className='flex items-center'>
                        <span className='w-1.5 h-1.5 bg-secondary/70 rounded-full inline-block mr-2'></span>
                       Lange Lebensdauer bei minimalem Wartungsaufwand</li>
                    </ul>
                </div>
         </div>
       </div>
    </div>
  )
}


export {CardOne}