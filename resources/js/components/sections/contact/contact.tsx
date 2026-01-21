import { ContactForm } from '@/components/cards/contact-form'
import React from 'react'

 function Contact() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl lg:py-30 py-15 px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="mb-3 flex flex-row items-center justify-center gap-3">
                <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                    FULL-SERVICE APPROACH
                </p>
            </div>
            <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center lg:mb-10 mb-5">
                <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
                    End-to-End Solar Expertise
                </h2>
                <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">As your full-service solar partner, we support you at every step — from initial consultation to final commissioning and grid connection. Our digital process ensures clarity, comfort, and full transparency.</p>
            </div>

      <ContactForm />
    </div>
  )
}

export {Contact}