
import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/advantage/banner'
import React from 'react'
import WhyChoose from '@/components/sections/advantage/why-choose'
import DefaultCard from '@/components/sections/advantage/default-card'
import Values from '@/components/sections/advantage/values'
import Review from '@/components/sections/advantage/review'
import Resposiblity from '@/components/sections/advantage/responsiblity'
import StartConfigurator from '@/components/sections/advantage/start-configurator'


export default function advantage({advantages, values}: {advantages: any, values: any}) {
  return (
   <FrontendLayout>
        <Banner />
        <WhyChoose advantages={advantages} />
        <DefaultCard />
        <Values values={values} />
        <Review />
        <Resposiblity />

        <StartConfigurator />

   </FrontendLayout>
  )
}
