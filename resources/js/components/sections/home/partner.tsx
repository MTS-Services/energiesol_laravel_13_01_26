import { PartnerCard } from '@/components/cards/partner-card'
import { PartnerSlider } from '@/components/cards/partner-slider'

import React from 'react'

interface partner {
  image_url?: string
}
interface PartnerProps {
  partners?: partner[]
}
export default function partner({partners}:PartnerProps) {
  return (
    <div className="bg-linear-to-r from-btn-primary/15 to-info/15 justify-around rounded-md">
      <div className='relative z-10 mx-auto max-w-7xl py-5 lg:py-1 px-4 lg:px-0  gap-4 lg:gap-6 place-items-center'>
        {/* {
          items.map((item, index) => (
            <PartnerCard key={index} image={item.image} />
          ))
        } */}

        <div className="features grid grid-cols-1 gap-6">

                    <PartnerSlider sliders={partners} perView={3} className='bg-transparent' />

                </div>

      </div>
    </div>
  )
}
