import React from 'react'

interface Props {
    image?: string | null
}

function PartnerCard({ image }: Props) {
  
  
  return (
    <div className='item'>
      <img src={image ?? '/images/logo1.png'} alt="Partner Logo" className='w-full h-10 lg:h-17'/>
    </div>
  )
}

export { PartnerCard }