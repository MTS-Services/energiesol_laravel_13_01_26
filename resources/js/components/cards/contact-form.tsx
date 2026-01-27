import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon'
import { ArrowRight } from 'lucide-react'
import { useForm, usePage } from '@inertiajs/react'
import { store } from '@/actions/App/Http/Controllers/Frontend/HomeController'
import InputError from '../input-error'

function ContactForm() {
  const { success } = usePage().props
  
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    post(store.url(), {
      onSuccess: () => {
        reset()
      }
    })
  }

  return (
    <div className='w-full'>
     {success && (
    <div className='w-full rounded-md bg-linear text-center px-5 py-5 font-montserrat text-base mb-2 text-secondary '>
      {success}
    </div>
  )}
      
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
          <div className='w-full'>
            <Label htmlFor='first_name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Vorname</Label>
            <div>
              <Input 
                type='text' 
                placeholder='John' 
                id="first_name" 
                className='font-normal text-base placeholder:text-secondary/50 shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
              />
              <InputError message={errors.first_name} className='mt-2' />
            </div>
          </div>
          <div className='w-full'>
            <Label htmlFor='last_name' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Nachname</Label>
            <div>
              <Input 
                type='text' 
                placeholder='Doe' 
                id="last_name" 
                className='font-normal text-base placeholder:text-secondary/50 shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'
                value={data.last_name}
                onChange={(e) => setData('last_name', e.target.value)}
              />
              <InputError message={errors.last_name} className='mt-2' />
            </div>
          </div>
        </div>

        <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
          <div className='w-full'>
            <Label htmlFor='email' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>E-Mail-Adresse <span className='text-red-600'>*</span></Label>
            <div>
              <Input 
                type='email' 
                placeholder='example@gmail.com' 
                id="email" 
                className='font-normal text-base placeholder:text-secondary/50 shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className='mt-2' />
            </div>
          </div>
          <div className='w-full'>
            <Label htmlFor='phone_number' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Telefonnummer <span className='text-red-600'>*</span></Label>
            <div>
              <Input 
                type='text' 
                placeholder='(406) 555-0120' 
                id="phone_number" 
                className='font-normal text-base placeholder:text-secondary/50 shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block! h-auto!'
                value={data.phone_number}
                onChange={(e) => setData('phone_number', e.target.value)}
              />
              <InputError message={errors.phone_number} className='mt-2' />
            </div>
          </div>
        </div>
        
        <div className='flex flex-col! lg:flex-row! gap-4 z-1 mb-7'>
          <div className='w-full'>
            <Label htmlFor='message' className='text-secondary font-montserrat text-base lg:text-2xl mb-4 block'>Nachricht</Label>
            <div>
              <Textarea 
                placeholder='Ihr Nachricht hier...' 
                id="message"
                className='font-normal h-28! text-base placeholder:text-secondary/50  shadow-[1px_1px_4px_-2px_#c7c4c4de] rounded-xl font-montserrat px-6! py-4! block!'
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
              />
              <InputError message={errors.message} className='mt-2' />
            </div>
          </div>
        </div>
        
        <div className='flex gap-4 z-1 mb-7'>
          <div className='w-full'>
            <Button type='submit' disabled={processing}>
              <Icon variant='circle' iconNode={ArrowRight} className='bg-primary' iconClassName='text-secondary' />
              Kostenlose Beratung anfordern
            </Button>
          </div>
        </div>
        <div>
          <InputError message={errors.limitMessage} className='mt-2' />
        </div>
      </form>
    </div>
  )
}

export { ContactForm }