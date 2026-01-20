import { PartnerCard } from '@/components/cards/partner-card'
import React from 'react'

export default function partner() {
  const items = [
    {
      image: '/images/logo1.png'
    },
    {
      image: '/images/logo2.png'
    },
    {
      image: '/images/logo3.png'
    },
    {
      image: '/images/logo4.png'
    }
  ]
  return (
    <div className="bg-linear-to-r from-btn-primary/15 to-info/15 justify-around rounded-md">
  <div className='relative z-10 mx-auto max-w-7xl py-10 lg:py-15 grid grid-cols-2 px-4 lg:px-0 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center'>
   {
    items.map((item, index) => (
        <PartnerCard key={index} image={item.image} />
    ))
   }
  </div>
</div>
  )
}
