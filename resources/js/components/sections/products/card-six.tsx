import { BoxCard } from '@/components/cards/box-card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ArrowRight } from 'lucide-react'
import React from 'react'

 function CardSix() {
    const items = [
        {
            image: '/images/feature1.png',
            title: 'Smart and Reliable Paths to Energy Independence',
            description: 'We provide a range of services to help you navigate the complex world of solar energy, from installation to maintenance and beyond.',
            btn: {
                label: 'Discover our history',
                link: '#'
            }
        },
        {
            image: '/images/feature2.png',
            title: 'Premium Quality, Fair Value',
            description: 'By utilizing fully digitized processes, we reduce overhead to offer you top-tier solar technology at a competitive price. Get the best performance-to-cost ratio in the industry.',
            btn: {
                label: 'Get a free estimate',
                link: '#'
            }
        },
        {
            image: '/images/feature3.png',
            title: 'Transparent Expert Guidance',
            description: 'We pride ourselves on providing honest, transparent, and pressure-free advice. Our consultations are tailored to your specific home needs, helping you make a confident decision for your future.',
            btn: {
                label: 'Book a consultation',
                link: '#'
            }
        }
    ]
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
                 items.map((items, index) => (
                    // <FeatureCard key={index} item={items} />
                    <BoxCard key={index} item={items} />
                ))}
            </div>
        </div>
    </div>
  )
}

export {CardSix}