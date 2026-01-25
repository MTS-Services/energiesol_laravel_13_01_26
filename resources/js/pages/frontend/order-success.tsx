import { Badges } from "@/components/sections/order/badges";
import { CartDetails } from "@/components/sections/order/cart-details";
import { CartPrice } from "@/components/sections/order/cart-price";
import { HeadingSection } from "@/components/sections/order/heading-section";
import { Calendar } from "@/components/sections/order/calendar";
import FrontendLayout from "@/layouts/frontend-layout";



 function OrderSuccess() {
  return (
        <FrontendLayout>

           <HeadingSection />

           <CartDetails />

          <CartPrice />
  
           <Calendar />

           <Badges />

        </FrontendLayout>
  )
}

export default OrderSuccess ;
