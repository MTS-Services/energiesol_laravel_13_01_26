import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardTwo() {
    const item = {
        slogan: 'SOLAR PANELS',
        title: {
            middle: 'High-Efficiency',
            last: 'Solar Panels'
        },
    }
  return (
    <div className='bg-linear-to-r from-btn-primary/15 to-info/5'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-10  lg:px-0 lg:py-20">
        <DefaultCardComp slogan={item.slogan} title={item.title} className={'grid-cols-1!'} >
            <div>
                <p className='font-normal font-montserrat text-secondary/70 mb-3'>
                    At <span className='font-bold font-montserrat text-secondary'>Energiesol</span>, we believe in providing solar solutions that are perfectly aligned with your unique needs and priorities. We offer a diverse range of solar modules designed to meet various requirements, from aesthetic preferences to specific engineering standards.
                </p>
                <p className='font-normal font-montserrat text-secondary/70'>
                   Whether you prioritize German-engineered precision and sophisticated design or you are looking for the ultimate cost-performance ratio, Energiesol delivers high-quality solutions that never compromise on efficiency.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation Meets Performance</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   Whether you prioritize German-engineered precision and sophisticated design or you are looking for the ultimate cost-performance ratio, Energiesol delivers high-quality solutions that never compromise on efficiency.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Explore Our Premium Selection</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                  From residential rooftops to large-scale commercial installations, the Energiesol expert advisory team is here to guide you. We focus on variety and quality to ensure your energy transition is seamless and successful.
                </p>
            </div>


            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold '>Expert Guidance for Every Project</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                Detailed technical specifications are available in our downloadable product sheets. Discover the right fit for your project:
                </p>
                <div>
                    <Link href={route('products')} className='mt-3 block text-[#FF383C] lg:text-lg text-base ' >Aiko Solar Modules Trina Solar Modules</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base' >Aiko Solar Modules Trina Solar Modules</Link>
                </div>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
               Our expert advisors will guide you in making the right choice – whether for small systems or larger projects. We focus on quality, variety, and solutions that perfectly match your requirements.
                </p>
            </div>

        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardTwo}