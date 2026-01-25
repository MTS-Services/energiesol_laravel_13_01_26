import { CartDetails } from "@/components/sections/order/cart-details";
import { CartPrice } from "@/components/sections/order/cart-price";
import { HeadingSection } from "@/components/sections/order/heading-section";
import FrontendLayout from "@/layouts/frontend-layout";


 function OrderSuccess() {
  return (
        <FrontendLayout>

           <HeadingSection />

           <CartDetails />

           <CartPrice />

        </FrontendLayout>
  )
}

export default OrderSuccess ;
