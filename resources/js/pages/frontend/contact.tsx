import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'
import Banner from '@/components/sections/contact/banner'
import OptionalBanner from '@/components/sections/contact/optional-banner'
import StartConfigurator from '@/components/sections/contact/start-configurator'
import { Contact } from '@/components/sections/contact/contact'


export default function contact() {
  return (
    <FrontendLayout>
        <Banner />
        <OptionalBanner />

        <Contact />

        <StartConfigurator />
    </FrontendLayout>
  )
}
