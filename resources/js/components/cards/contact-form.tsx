import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight } from 'lucide-react'

function ContactForm() {
  return (
    <div className='w-full'>
       <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
        <div className='w-full'>
          <Label htmlFor='name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>First name</Label>
          <Input type='text' placeholder='John' id="name" className='font-normal text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'/>
       </div>
        <div className='w-full'>
          <Label htmlFor='name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Last name</Label>
          <Input type='text' placeholder='John' id="name" className='font-normal text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'/>
       </div>
       </div>
       <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
        <div className='w-full'>
          <Label htmlFor='name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'> Email <span className='text-red-600'>*</span></Label>
          <Input type='text' placeholder='example@gmail.com' id="name" className='font-normal text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'/>
       </div>
        <div className='w-full'>
          <Label htmlFor='name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Number <span className='text-red-600'>*</span> </Label>
          <Input type='text' placeholder='(406) 555-0120' id="name" className='font-normal text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'/>
       </div>
       </div>
       
        <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
        <div className='w-full'>
          <Label htmlFor='name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Message</Label>
          {/* <Input type='text' placeholder='John' id="name" className='font-normal text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'/> */}
          <Textarea placeholder='John' id="messages"    className='font-normal h-28!  text-base placeholder:text-secondary shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block!'/>
       </div>
       </div>
       
       <div className='flex gap-4 z-1 mb-7'>
        <div className='w-full'>
          <Button>
            <Icon variant='circle'  iconNode={ArrowRight}/>
            Send Inquiry
          </Button>
       </div>
       </div>
    </div>
  )
}

export {ContactForm}
