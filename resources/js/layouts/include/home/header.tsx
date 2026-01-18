import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function header() {
  return (
    <div className='container mx-auto bg-amber-300 px-4 md:px-8 py-8'>
       <div className='w-full flex justify-between items-center'>
         <div>
            <Link href={route('home')} className='w-[320px]'> 
            <img src="/images/energie_solution_nord.png" alt="Site Logo" />
                </Link>
        </div>
        <div>
            <div className='flex justify-between gap-5 items-center '>

                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>Home</Link>
                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>Service</Link>
                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>Advantages</Link>
                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>About Us</Link>
                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>Contact</Link>
                <Link href={route('home')} className='text-base text-[#030412] px-3 py-3 hover:text-[#2C38DD]'>Our Products</Link>
            </div>
        </div>
        <div >
            <Link className='inline-flex gap-2 items-center justify-center p-1.5 pr-4 bg-[#2C38DD] rounded-full'>
              <ArrowRight className="rounded-full bg-[#F6F9FE] text-[#030412] font-normal" size={20}/>
            <span className='text-[#F6F9FE] font-normal text-base'>Configurator</span>
            </Link>
        </div>
       </div>

    </div>
  )
}
