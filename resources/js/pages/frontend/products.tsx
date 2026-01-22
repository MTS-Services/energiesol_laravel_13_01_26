import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/products/banner'
import { CardOne } from '@/components/sections/products/card-one'
import React from 'react'
import { CardTwo } from '@/components/sections/products/card-two'
import { CardThree } from '@/components/sections/products/card-three'
import { CardFour } from '@/components/sections/products/card-four'

export default function products() {
  return (
  <FrontendLayout>
    <Banner />
    <CardOne />
    <CardTwo />
    <CardThree />
    <CardFour />
  </FrontendLayout>
  )
}
12