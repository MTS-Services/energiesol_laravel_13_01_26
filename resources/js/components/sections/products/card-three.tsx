import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardThree() {
    const item = {

        title: {
            initial: 'Smart Energy Hub: Your Central Control Unit',
        },
        image: '/images/box1.png',
    };
     const item2 = {
        slogan: 'SOLAR PANELS',        title: {
            initial: 'Smart Energy Hub: Your Central Control Unit',
        },
        image: '/images/box1.png',
    }
  return (
    <div className='bg-linear-to-r'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-10  lg:px-0 lg:py-20">

        <DefaultCardComp  title={item.title} image={item.image} >
            <div>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   The <span className='font-bold font-montserrat text-secondary'>Energiesol</span>, Home Energy Manager is our advanced Home Energy Management System (HEMS) designed to put you in complete control. This compact yet powerful device integrates seamlessly with all Energiesol photovoltaic systems, acting as the "brain" of your home energy ecosystem.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                 With the Energiesol Smart App, you can visualize energy flows in real-time, monitor your solar production, and adjust consumption patterns to maximize self-sufficiency. Our system intervenes intelligently to optimize energy use and save you money—all while maintaining your comfortable lifestyle.
                </p>
            </div>
        </DefaultCardComp>

        <DefaultCardComp  title={item2.title} image={item2.image} order={true}>
            <div>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   The <span className='font-bold font-montserrat text-secondary'>Energiesol</span>, Home Energy Manager is our advanced Home Energy Management System (HEMS) designed to put you in complete control. This compact yet powerful device integrates seamlessly with all Energiesol photovoltaic systems, acting as the "brain" of your home energy ecosystem.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   The <span className='font-bold font-montserrat text-secondary'>Energiesol</span>, Home Energy Manager is our advanced Home Energy Management System (HEMS) designed to put you in complete control. This compact yet powerful device integrates seamlessly with all Energiesol photovoltaic systems, acting as the "brain" of your home energy ecosystem.
                </p>
            </div>
        </DefaultCardComp>
        
    </div>
    </div>
  )
}


export {CardThree}