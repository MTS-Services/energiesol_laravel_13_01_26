import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/products/banner'
import { CardOne } from '@/components/sections/products/card-one'
import React from 'react'

export default function products() {
  return (
  <FrontendLayout>
    <Banner />
    <CardOne />
  </FrontendLayout>
  )
}
12