import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardFour() {
    const item = {
        slogan: 'SOLAR PANELS',
        title: {
            initial: 'High-Performance  ',
            middle: 'InvertersConvert',
            last: 'solar energy into usable power for your home.'
        },
    }
  return (
    <div className='bg-linear-to-r from-btn-primary/15 to-info/5'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-10  lg:px-0 lg:py-20">
        <DefaultCardComp slogan={item.slogan} title={item.title} className={'grid-cols-1!'} >
            <div>
               
                <p className='font-normal font-montserrat text-secondary/70'>
                  The core of your solar setup At Energiesol, our inverters provide maximum flexibility and efficiency. Features like integrated emergency power ensure your essential appliances keep running, even during outages. With efficiency ratings exceeding 98%, our robust systems turn more sunlight into savings while offering smart monitoring for total control.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation Meets Performance</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   Whether you prioritize German-engineered precision and sophisticated design or you are looking for the ultimate cost-performance ratio, Energiesol delivers high-quality solutions that never compromise on efficiency.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Your Advantages:</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                  From residential rooftops to large-scale commercial installations, the Energiesol expert advisory team is here to guide you. We focus on variety and quality to ensure your energy transition is seamless and successful.
                </p>
            </div>


            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Download Project sheets</h3>
                
                <div className='mt-3'>
                    <Link href={route('products')} className='mt-3 block text-[#FF383C] lg:text-lg text-base underline ' >Aiko Solar Modules Trina Solar Modules</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base underline' >Aiko Solar Modules Trina Solar Modules</Link>
                </div>
            </div>

        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardFour}