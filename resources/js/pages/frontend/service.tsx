import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/service/banner'
import Service from '@/components/sections/service/service'
import WhyChoose from '@/components/sections/service/why-choose'
import StartConfigurator from '@/components/sections/service/start-configurator'

export default function service() {
  return (
    <FrontendLayout>
       <Banner />
       <Service />
       <WhyChoose />
       <StartConfigurator />

     </FrontendLayout>
  )
}
