import React from 'react'

export default function partner() {
  return (
    <div className="bg-gradient-to-r from-btn-primary/15 to-info/15 justify-around rounded-md">
  <div className='relative z-10 mx-auto max-w-7xl py-10 lg:py-15 grid grid-cols-2 px-4 lg:px-0 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center'>
    <img src="/images/logo1.png" alt="Partner Logo 1" className='w-full h-10 lg:h-17'/>
    <img src="/images/logo2.png" alt="Partner Logo 2" className='w-full h-10 lg:h-17'/>
    <img src="/images/logo3.png" alt="Partner Logo 3" className='w-full h-10 lg:h-17 hidden lg:block'/>
    <img src="/images/logo4.png" alt="Partner Logo 4" className='w-full h-10 lg:h-17 hidden lg:block'/>
  </div>
</div>
  )
}
