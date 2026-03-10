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

           <CartDetails is_valid_order={true} estimate={estimate} monitoringSystem={monitoringSystem} />

          <CartPrice is_valid_order={true}  estimate={estimate} monitoringSystem={monitoringSystem}  />
  
           {/* <Calendar /> */}

           <div className="w-full mb-4">
            <a href="https://calendly.com/app/contacts/user/me" className="block text-center text-info cursor pointer underline ">
             Bitte prüfen Sie Ihre E-Mails oder Calendly, um die Buchungsdetails einzusehen.
            </a>
           </div>

           <Badges />

        </FrontendLayout>
  )
}

export default OrderSuccess ;
