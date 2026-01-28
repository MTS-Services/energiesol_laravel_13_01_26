import { Badges } from "@/components/sections/order/badges";
import { CartDetails } from "@/components/sections/order/cart-details";
import { CartPrice } from "@/components/sections/order/cart-price";
import { HeadingSection } from "@/components/sections/order/heading-section";
import { Calendar } from "@/components/sections/order/calendar";
import FrontendLayout from "@/layouts/frontend-layout";



 function OrderSuccess({estimate, is_valid_order, monitoringSystem}: {estimate: any, is_valid_order: boolean, monitoringSystem: any}) {
  
  return (
        <FrontendLayout>

           <HeadingSection />

           <CartDetails is_valid_order={is_valid_order} estimate={estimate} monitoringSystem={monitoringSystem} />

          <CartPrice is_valid_order={is_valid_order}  />
  
           <Calendar />

           <Badges />

        </FrontendLayout>
  )
}

export default OrderSuccess ;
