import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/about/banner'
import React from 'react'
import { About } from '@/components/sections/about/about'
import { CardOne } from '@/components/sections/about/card-one'
import VisionCard from '@/components/sections/about/vision-card'
import StartConfigurator from '@/components/sections/about/start-configurator'


export default function about() {
  return (
    <FrontendLayout>
        <Banner />
        <About />
        <CardOne />
        <VisionCard />
        <StartConfigurator />
    </FrontendLayout>
  )
}
