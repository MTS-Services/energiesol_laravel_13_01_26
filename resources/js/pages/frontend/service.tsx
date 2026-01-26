import FrontendLayout from '@/layouts/frontend-layout'
import Banner from '@/components/sections/service/banner'
import Service from '@/components/sections/service/service'
import WhyChoose from '@/components/sections/service/why-choose'
import StartConfigurator from '@/components/sections/service/start-configurator'

interface ServiceItem {
  
}

interface AdvantageItem{
  
}
interface Props {
  services?: ServiceItem[]|null
}
interface Props2 {
  advantages?: AdvantageItem[]|null
}

export default function service({ services, advantages }: Props & Props2) {
  return (
    <FrontendLayout>
       <Banner />
       <Service services={services} />
       <WhyChoose advantages={advantages} />
       <StartConfigurator />

     </FrontendLayout>
  )
}
