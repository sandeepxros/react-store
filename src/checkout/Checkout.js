import CartDetails from "./CartDetails"
import CheckoutLead from "./CheckoutLead"
import InputDetails from "./InputDetails"
export default function Checkout(){
  return(
    <div className="container">
      <CheckoutLead/>
      <CartDetails/>
      <InputDetails/>
    </div>
    
  )
}