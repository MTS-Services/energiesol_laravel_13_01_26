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
            title: 'Mit Branchenexpertise',
            description: 'Profitieren Sie von der Stabilität und dem umfassenden Know-how eines weltweit führenden Energieunternehmens. Unsere Lösungen basieren auf jahrzehntelanger Erfahrung und gewährleisten einen sicheren und nachhaltigen Übergang zu erneuerbarer Energie.',
            btn: {
                label: 'Unsere Geschichte',
                href: '#',
                iconClassName:"text-secondary!",
                iconParentClassName: 'bg-primary!',
            }, 
          
        },
        {
            image: '/images/feature2.png',
            title: 'Premiumqualität, fairer Preis',
            description: 'Durch die vollständige Digitalisierung reduzieren wir die Kosten und bieten Ihnen hochwertige Solartechnologie zu einem wettbewerbsfähigen Preis. Erhalten Sie das beste Leistungs-Kosten-Verhältnis auf dem Markt.',
            btn: {
                label: 'Unsere Geschichte',
                href: '#',
                iconClassName:"text-secondary!",
                iconParentClassName: 'bg-primary!',
            }
        },
        {
            image: '/images/feature3.png',
            title: 'Transparente Expertenberatung',
            description: 'Wir legen großen Wert auf ehrliche, transparente und unbelastende Beratung. Unsere Beratungen sind auf Ihre spezifischen Hausbedürfnisse zugeschnitten und helfen Ihnen, eine sichere Entscheidung für Ihre Zukunft zu treffen.',
            btn: {
                label: 'Unsere Geschichte',
               iconClassName:"text-secondary!",
               iconParentClassName: 'bg-primary!',
            }
        }
    ]
    const SectionHeaderData = {
        title: {
            initial: 'Intelligente und zuverlässige Wege zur ',
            middle: 'Energieunabhängigkeit',

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
