
import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/advantage/banner'
import React from 'react'
import WhyChoose from '@/components/sections/advantage/why-choose'
import DefaultCard from '@/components/sections/advantage/default-card'
import Values from '@/components/sections/advantage/values'

export default function advantage() {
  return (
   <FrontendLayout>
        <Banner />
        <WhyChoose />
        <DefaultCard />
        <Values />
   </FrontendLayout>
  )
}
