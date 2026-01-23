import { BoxCard } from '@/components/cards/box-card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { SectionHeader } from '@/components/cards/section-header'

export default function feature() {
    const items = [
        {
            image: '/images/feature1.png',
            title: 'Smart and Reliable Paths to Energy Independence',
            description: 'We provide a range of services to help you navigate the complex world of solar energy, from installation to maintenance and beyond.',
            btn: {
                label: 'Discover our history',
                href: '#',
                iconClassName:"text-secondary!",
                iconParentClassName: 'bg-primary!',
            }, 
          
        },
        {
            image: '/images/feature2.png',
            title: 'Premium Quality, Fair Value',
            description: 'By utilizing fully digitized processes, we reduce overhead to offer you top-tier solar technology at a competitive price. Get the best performance-to-cost ratio in the industry.',
            btn: {
                label: 'Get a free estimate',
                href: '#',
                iconClassName:"text-secondary!",
                iconParentClassName: 'bg-primary!',
            }
        },
        {
            image: '/images/feature3.png',
            title: 'Transparent Expert Guidance',
            description: 'We pride ourselves on providing honest, transparent, and pressure-free advice. Our consultations are tailored to your specific home needs, helping you make a confident decision for your future.',
            btn: {
                label: 'Book a consultation',
               iconClassName:"text-secondary!",
               iconParentClassName: 'bg-primary!',
            }
        }
    ]
    const SectionHeaderData = {
        title: {
            initial: 'Smart and Reliable Paths to',
            middle: 'Energy Independence',

            breakPoint: {
                after: true,
            }
        }
    }
  return (
    <div>
        <div className='z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0'>
           {/* <div className='flex flex-col lg:justify-center justify-start lg:items-center items-start'>
            <h2 className='text-3xl text-center lg:text-[40px] font-semibold font-montserrat'> <span className='text-info italic font-semibold font-playfair-display'>Energy</span> <span className='text-info italic font-semibold font-playfair-display inline-block lg:block'>Independence</span> </h2>
         
           </div> */}
           <SectionHeader item={SectionHeaderData} className={'px-0 lg:px-50'}/>

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
