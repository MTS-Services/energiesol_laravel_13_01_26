import FrontendLayout from "@/layouts/frontend-layout";
import Banner from "@/layouts/include/home/banner";
import Default from "@/layouts/include/home/defaultPage";
import Feature from "@/layouts/include/home/feature";
import Partner from "@/layouts/include/home/partner";

export default function Home() {
  return (
    <FrontendLayout>

    <Banner />
    
    <Partner />

    <Feature />
      
      
    </FrontendLayout>
  );
}
