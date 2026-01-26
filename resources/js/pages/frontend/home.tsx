import FrontendLayout from "@/layouts/frontend-layout";
import Banner from "@/components/sections/home/banner";
import Partner from "@/components/sections/home/partner";
import Feature from "@/components/sections/home/feature";
import OptionalBanner from "@/components/sections/home/optional-banner";
import Review from "@/components/sections/home/review";
import DeliveryEnergy from "@/components/sections/home/delivery-energy";
import Generation from "@/components/sections/home/generation";
import StartConfigurator from "@/components/sections/home/start-configurator";

export default function Home({ features }: { features: any[] }) {
  return (
    <FrontendLayout>

    <Banner />
    
    <Partner />

    <Feature features={features} />

    <OptionalBanner />
   
    <Review />


    <DeliveryEnergy />


    <Generation />
   
    <StartConfigurator />
     
    </FrontendLayout> 
  );
}
