import FrontendLayout from "@/layouts/frontend-layout";
import Banner from "@/layouts/include/home/banner";
import Default from "@/layouts/include/home/defaultPage";
import DeliveryEnergy from "@/layouts/include/home/deliveryEnergy";
import Feature from "@/layouts/include/home/feature";
import OptionalBanner from "@/layouts/include/home/optionalBanner";
import Partner from "@/layouts/include/home/partner";
import Review from "@/layouts/include/home/review";

export default function Home() {
  return (
    <FrontendLayout>

    <Banner />
    
    <Partner />

    <Feature />

    <OptionalBanner />
      
    <Review />

    <DeliveryEnergy />
      
    </FrontendLayout>
  );
}
