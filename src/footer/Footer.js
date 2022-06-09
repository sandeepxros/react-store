import style from "./Footer.module.css";
import Social from "./Social";
import Organization from "./Organization";
import About from "./About";
import Customer from "./Customer";
import Branding from "./Branding";

export default function Footer() {
  return (
    <>
      <div className={`row g-0 ps-5 pe-5 pt-5 ${style.background}`}>
        <Branding />
        <Customer />
        <About />
        <Organization />
        <Social />
        <hr class="text-dark border-2 opacity-50 my-3"/>
      </div>
    </>
  );
}
