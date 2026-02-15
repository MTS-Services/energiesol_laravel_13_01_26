import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/products/banner'
import { CardOne } from '@/components/sections/products/card-one'
import React from 'react'
import { CardTwo } from '@/components/sections/products/card-two'
import { CardThree } from '@/components/sections/products/card-three'
import { CardFour } from '@/components/sections/products/card-four'
import { CardFive } from '@/components/sections/products/card-five'
import StartConfigurator from '@/components/sections/products/start-configurator'
import { CardSeven } from '@/components/sections/products/card-seven'
import { CardSix } from '@/components/sections/products/card-six'
import { features } from 'process'

export default function products({features}:any) {
  return (
  <FrontendLayout>
    <Banner />
    <CardOne />
    <CardTwo />
    <CardThree />
    <CardFour />
  {/* Features item */}

    <CardSix features={features} />

    {/* Features item */}

    <CardSeven />
    <CardFive />
 
    <StartConfigurator />
  </FrontendLayout>
  )
}
