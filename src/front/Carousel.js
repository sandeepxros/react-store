import model1 from "../assets/hero11.jpg"
import model2 from "../assets/hero2.jpg"
import model3 from "../assets/hero3.jpg"
import model4 from "../assets/hero12.jpg"

import CarouselInner from "./CarouselInner";
export default function Carousel() {
  return (
    <> 
    <CarouselInner imgs={[model4, model1, model2, model3]}/>
    </>
  );
}
