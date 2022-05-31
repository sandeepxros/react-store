
//     useEffect(()=>{
//       fetch(`https://countriesnow.space/api/v0.1/countries/positions`)
//       .then(res=>res.json())
//       .then(data=>setCountry(data.data))
//       .catch(error=>alert("error buddy: "+error));
// }
// ,[]);
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