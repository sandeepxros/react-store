import Navbar from "./Navbar";
import "./css/Front.css";
import Catlog from "./Catlog";
import Carousel from "./Carousel";
import Selector from "../checkout/Selector";
import Footer from "../footer/Footer";
export default function Front() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <div className="container">
        <Catlog />
      </div>
      <Footer/>
    </>
  );
}
 